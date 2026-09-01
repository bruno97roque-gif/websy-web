"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { registrar, registrarLead, marcarLead, medir } from "@/lib/wtrack";
import { trackEvent } from "@/lib/analytics";

/**
 * El paso que faltaba antes de WhatsApp.
 *
 * Hasta ahora, pulsar cualquier botón verde del sitio llevaba directo a
 * WhatsApp. Quien no llegaba a escribir —y son muchos: se abre la app, se lo
 * piensa, se cierra— desaparecía sin dejar rastro. Websy contaba el clic y no
 * tenía a quién llamar.
 *
 * Con esto, antes de salir se piden dos cosas —nombre y teléfono— y se guardan
 * en el panel. A partir de ahí el contacto es de Websy pase lo que pase en
 * WhatsApp. Y como el mensaje ya va con el nombre dentro, la conversación
 * empieza mejor que antes.
 *
 * No cambia ni un botón del sitio: engancha los clics de todos los enlaces a
 * WhatsApp que ya existen. Si algo fallara, el enlace sigue funcionando como
 * siempre — nunca se deja a nadie sin poder escribir.
 */

const ES_WHATSAPP = /^(https?:)?\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/i;
const RECUERDA = "wsy_yo";

type Datos = { nombre: string; telefono: string };

export default function WhatsAppModal() {
  const [abierto, setAbierto] = useState(false);
  const [datos, setDatos] = useState<Datos>({ nombre: "", telefono: "" });
  const [enviando, setEnviando] = useState(false);
  const [fallo, setFallo] = useState<string | null>(null);

  const destino = useRef<{ url: string; ubicacion: string; texto: string } | null>(null);
  const devolverFoco = useRef<HTMLElement | null>(null);
  const caja = useRef<HTMLDivElement | null>(null);
  const primerCampo = useRef<HTMLInputElement | null>(null);
  const leadAbierto = useRef<{ id: number; t: number } | null>(null);

  /* ── Enganche de todos los enlaces a WhatsApp del sitio ────── */
  useEffect(() => {
    const alPulsar = (e: MouseEvent) => {
      // Un clic con Ctrl/Cmd o con el botón central quiere abrir en otra
      // pestaña: eso se respeta y no se interrumpe a nadie.
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

      /* En una vista previa de Vercel o en cualquier otro dominio, la medición
         está apagada y `registrarLead` no llama a nadie. Si aun así se
         interceptara el clic, se pediría el teléfono para tirarlo a la basura.
         Fuera del sitio de verdad, el enlace se deja en paz. */
      if (!medir()) return;

      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (!ES_WHATSAPP.test(href)) return;
      // Escotilla de emergencia: un enlace con data-wa-directo salta el modal.
      if (a.hasAttribute("data-wa-directo")) return;

      e.preventDefault();

      // Quien ya dejó sus datos no los vuelve a escribir. Se leen al abrir y
      // no al montar: así no hay estado que sincronizar con un efecto.
      try {
        const g = localStorage.getItem(RECUERDA);
        if (g) setDatos(JSON.parse(g));
      } catch {
        /* sin almacenamiento: se escribe otra vez, no pasa nada */
      }

      destino.current = {
        url: href,
        ubicacion: ubicacionDe(a),
        texto: (a.getAttribute("aria-label") || a.textContent || "").trim().slice(0, 80),
      };
      devolverFoco.current = a;
      setFallo(null);
      setAbierto(true);

      // Una sola llamada: `trackEvent` ya reparte a GA4 y al almacén propio.
      // Llamar además a `registrar` guardaba el evento DOS veces y el embudo
      // del panel salía con el doble de aperturas que de envíos.
      trackEvent("wa_modal_abierto", {
        cta_location: destino.current.ubicacion,
        link_text: destino.current.texto,
        link_url: href.slice(0, 200),
      });
    };

    document.addEventListener("click", alPulsar, { capture: true });
    return () => document.removeEventListener("click", alPulsar, { capture: true } as EventListenerOptions);
  }, []);

  /* ── Volvió de WhatsApp enseguida: no escribió ─────────────── */
  useEffect(() => {
    const alVolver = () => {
      const l = leadAbierto.current;
      if (!l || document.visibilityState !== "visible") return;
      const fuera = Math.round((Date.now() - l.t) / 1000);
      leadAbierto.current = null;
      if (fuera <= 25) {
        marcarLead(l.id, { wa_vuelta: true });
        registrar("wa_vuelta_sin_escribir", { seconds: fuera });
      }
    };
    document.addEventListener("visibilitychange", alVolver);
    return () => document.removeEventListener("visibilitychange", alVolver);
  }, []);

  const cerrar = useCallback(
    (motivo: string) => {
      setAbierto(false);
      setEnviando(false);
      if (motivo !== "enviado") {
        registrar("wa_modal_cerrado", { motivo, cta_location: destino.current?.ubicacion });
      }
      devolverFoco.current?.focus?.();
    },
    [],
  );

  /* ── Teclado: Esc cierra, Tab no se escapa de la ventana ───── */
  useEffect(() => {
    if (!abierto) return;
    primerCampo.current?.focus();
    const previo = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-wa-modal", "1");

    const alTeclear = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        cerrar("escape");
        return;
      }
      if (e.key !== "Tab" || !caja.current) return;
      const focos = caja.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input, a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focos.length) return;
      const primero = focos[0];
      const ultimo = focos[focos.length - 1];
      const activo = document.activeElement;

      /* Basta tocar el título o el texto legal —que no son enfocables— para que
         el foco pase a <body>. Sin esta rama, el siguiente Tab se iba a la
         página de detrás y quien navega con teclado perdía el modal de vista. */
      if (!activo || !caja.current.contains(activo)) {
        e.preventDefault();
        (e.shiftKey ? ultimo : primero).focus();
        return;
      }
      if (e.shiftKey && activo === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && activo === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };

    document.addEventListener("keydown", alTeclear);
    return () => {
      document.removeEventListener("keydown", alTeclear);
      document.body.style.overflow = previo;
      document.body.removeAttribute("data-wa-modal");
    };
  }, [abierto, cerrar]);

  /* ── Enviar ────────────────────────────────────────────────── */
  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (enviando) return;

    const nombre = datos.nombre.trim();
    const telefono = datos.telefono.trim();

    if (nombre.length < 2) {
      setFallo("Escribe tu nombre para que sepamos con quién hablamos.");
      registrar("wa_modal_error", { campo: "nombre" });
      return;
    }
    if (telefono.replace(/\D/g, "").length < 8) {
      setFallo("Necesitamos un número de teléfono válido para poder responderte.");
      registrar("wa_modal_error", { campo: "telefono" });
      return;
    }

    setFallo(null);
    setEnviando(true);
    try {
      localStorage.setItem(RECUERDA, JSON.stringify({ nombre, telefono }));
    } catch {
      /* da igual, solo era una comodidad */
    }

    const d = destino.current;
    registrar("wa_modal_enviado", { cta_location: d?.ubicacion, link_text: d?.texto });
    /* La conversión de GA4, con el nombre de siempre para que no se rompa
       ninguna configuración. NO se usa `trackLead`: ese ayudante emite además
       `whatsapp_click`, que ya dispara el TrackingProvider en el mismo clic, y
       cada contacto acababa contado dos veces en la pestaña de eventos. */
    trackEvent("generate_lead", {
      lead_method: "whatsapp",
      cta_location: d?.ubicacion ?? "desconocida",
    });

    // El guardado va con `keepalive`, así que termina aunque nos vayamos a
    // WhatsApp. Se le da hasta 1,2 s para devolver el identificador; pasado
    // ese tiempo no se hace esperar a nadie más.
    const guardado = registrarLead({
      canal: "whatsapp",
      nombre,
      telefono,
      ubicacion: d?.ubicacion,
      mensaje: mensajeDe(d?.url),
    });
    const resultado = await Promise.race([
      guardado,
      new Promise<{ ok: boolean; id: number | null }>((r) =>
        setTimeout(() => r({ ok: true, id: null }), 1200),
      ),
    ]);

    const url = urlConNombre(d?.url, nombre);
    cerrar("enviado");

    // `_blank` en escritorio deja la web abierta detrás; en móvil el sistema
    // se lleva a la app igual. Si el navegador bloquea la ventana, se navega
    // en la misma pestaña para que nadie se quede sin poder escribir.
    const ventana = window.open(url, "_blank", "noopener,noreferrer");
    const seAbrio = Boolean(ventana);
    if (!seAbrio) window.location.href = url;

    /* `wa_abierto` solo si WhatsApp se abrió DE VERDAD. Emitirlo siempre hacía
       que «dejan sus datos» y «abren WhatsApp» fueran el mismo número por
       construcción, y la cifra de rescatados del panel —los que dejan el
       teléfono y no llegan a escribir— no podía salir nunca de cero. */
    if (seAbrio) registrar("wa_abierto", { cta_location: d?.ubicacion });

    /* El identificador puede llegar después de la carrera de 1,2 s. Se espera a
       la promesa de verdad: si no, en cada guardado lento el lead se quedaba
       marcado para siempre como «no abrió WhatsApp». */
    const marcar = (id: number | null) => {
      if (!id) return;
      leadAbierto.current = seAbrio ? { id, t: Date.now() } : null;
      if (seAbrio) marcarLead(id, { wa_abierto: true });
    };
    if (resultado.id) marcar(resultado.id);
    else void guardado.then((r) => marcar(r.id)).catch(() => null);
  }

  if (!abierto) return null;

  return (
    /* z-100002 lo pone por encima del aviso de cookies, que va en 99999.
       Y mientras el modal está abierto el aviso se esconde: en un móvil de
       390 px el banner cae justo encima del botón de continuar, y el visitante
       que todavía no ha aceptado cookies —el que acaba de llegar, o sea el que
       convierte— no podía pulsarlo. */
    <div
      className="fixed inset-0 z-[100002] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) cerrar("fuera");
      }}
    >
      <div
        ref={caja}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wa-titulo"
        aria-describedby="wa-texto"
        /* `max-h` + scroll: en un móvil apaisado o con el teclado abierto, el
           modal no cabía y el botón de continuar quedaba fuera de la pantalla. */
        className="max-h-[92dvh] w-full max-w-[420px] overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:max-h-[90dvh] sm:rounded-3xl sm:p-8"
      >
        <div className="mb-5 flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.06c-.25.69-1.44 1.32-1.99 1.36-.53.05-1.02.24-3.45-.72-2.9-1.14-4.74-4.1-4.88-4.29-.14-.19-1.16-1.55-1.16-2.95s.73-2.09 1-2.38c.26-.29.57-.36.76-.36l.55.01c.17.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.13.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.42.29.14.46.12.63-.07.17-.19.72-.85.92-1.14.19-.29.38-.24.65-.14.26.09 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.7-.18 1.39z" />
            </svg>
          </span>
          <div>
            <h2 id="wa-titulo" className="font-montserrat text-[19px] font-extrabold leading-tight text-[#1a1020]">
              ¿Con quién tenemos el gusto?
            </h2>
            <p id="wa-texto" className="mt-1 font-poppins text-[13px] leading-relaxed text-[#6b5b74]">
              Déjanos tu nombre y tu número y seguimos por WhatsApp. Si se corta
              la conversación, te escribimos nosotros.
            </p>
          </div>
        </div>

        <form onSubmit={enviar} noValidate>
          <label htmlFor="wa-nombre" className="mb-1.5 block font-poppins text-[11px] font-semibold uppercase tracking-wider text-[#9b85ab]">
            Tu nombre
          </label>
          <input
            id="wa-nombre"
            ref={primerCampo}
            type="text"
            value={datos.nombre}
            onChange={(e) => setDatos((d) => ({ ...d, nombre: e.target.value }))}
            autoComplete="name"
            enterKeyHint="next"
            maxLength={90}
            placeholder="Ana Torres"
            className="mb-4 w-full rounded-xl border border-[#e4dced] px-4 py-3 font-poppins text-[15px] text-[#1a1020] outline-none transition focus:border-[#F18C1B] focus:ring-2 focus:ring-[#F18C1B]/25"
          />

          <label htmlFor="wa-tel" className="mb-1.5 block font-poppins text-[11px] font-semibold uppercase tracking-wider text-[#9b85ab]">
            Tu WhatsApp
          </label>
          <input
            id="wa-tel"
            type="tel"
            inputMode="tel"
            value={datos.telefono}
            onChange={(e) => setDatos((d) => ({ ...d, telefono: e.target.value }))}
            autoComplete="tel"
            enterKeyHint="send"
            maxLength={30}
            placeholder="999 888 777"
            className="w-full rounded-xl border border-[#e4dced] px-4 py-3 font-poppins text-[15px] text-[#1a1020] outline-none transition focus:border-[#F18C1B] focus:ring-2 focus:ring-[#F18C1B]/25"
          />

          {fallo && (
            <p role="alert" className="mt-3 font-poppins text-[13px] leading-snug text-[#c0334a]">
              {fallo}
            </p>
          )}

          <button
            type="submit"
            disabled={enviando}
            className="mt-5 w-full rounded-full bg-[#25D366] px-6 py-3.5 font-montserrat text-[14px] font-extrabold uppercase tracking-wide text-white transition hover:bg-[#1fb855] disabled:opacity-60"
          >
            {enviando ? "Abriendo WhatsApp…" : "Continuar en WhatsApp"}
          </button>

          <button
            type="button"
            onClick={() => cerrar("cancelar")}
            className="mt-2 w-full rounded-full px-6 py-2.5 font-poppins text-[13px] text-[#8b7a94] transition hover:text-[#1a1020]"
          >
            Ahora no
          </button>

          <p className="mt-3 text-center font-poppins text-[11px] leading-relaxed text-[#a394ac]">
            Usamos tus datos solo para responderte. Nada de publicidad de terceros.
          </p>
        </form>
      </div>
    </div>
  );
}

/* ── Utilidades ──────────────────────────────────────────────── */

/** Desde qué parte de la página se pulsó, para saber qué botón trae clientes. */
function ubicacionDe(a: Element): string {
  const explicita = a.closest("[data-track-location]");
  if (explicita) return explicita.getAttribute("data-track-location") || "desconocida";
  if (a.getAttribute("aria-label") === "Contactar por WhatsApp") return "boton_flotante";
  if (a.closest("footer")) return "footer";
  if (a.closest("header") || a.closest("nav")) return "menu";
  const seccion = a.closest("section[id], div[id], main[id]");
  return seccion?.getAttribute("id") || "cuerpo";
}

/** El mensaje que el enlace ya traía preparado (dice qué venía a pedir). */
function mensajeDe(url: string | undefined): string {
  if (!url) return "";
  try {
    return new URL(url, window.location.origin).searchParams.get("text")?.slice(0, 300) ?? "";
  } catch {
    return "";
  }
}

/**
 * Mete el nombre en el mensaje que se manda. La conversación deja de empezar
 * con un "Hola" anónimo y el equipo sabe a quién contesta desde la primera línea.
 */
function urlConNombre(url: string | undefined, nombre: string): string {
  const base = url || "https://wa.me/51940549322";
  try {
    const u = new URL(base, window.location.origin);
    const previo = u.searchParams.get("text") || "Quiero más información.";
    // Se quita el "Hola" que ya traía el enlace y se recupera la mayúscula:
    // si no, el mensaje queda como "soy Ana Torres. me interesa saber más".
    const resto = previo.replace(/^hola[,.\s]*/i, "").trim();
    const cuerpo = resto ? resto.charAt(0).toUpperCase() + resto.slice(1) : "Quiero más información.";
    u.searchParams.set("text", `Hola, soy ${nombre}. ${cuerpo}`);
    return u.toString();
  } catch {
    return base;
  }
}
