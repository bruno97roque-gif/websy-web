"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent, trackLead, getPageType, type LeadMethod } from "@/lib/analytics";

/**
 * Medición completa del sitio con un solo componente.
 *
 * Con listeners delegados en `document` captura todo lo que hace el visitante
 * sin tocar ni un botón ni cambiar el diseño de ninguna página.
 *
 * Qué registra:
 *   · Contacto: WhatsApp, teléfono y email → generate_lead
 *   · Redes sociales, enlaces externos, descargas, anclas
 *   · CTA internos, menú y footer, con la ubicación exacta del clic
 *   · Botones que no son enlaces (acordeones, galerías, menú)
 *   · Clics muertos y clics de frustración sobre elementos que parecen
 *     pulsables pero no lo son
 *   · Preguntas frecuentes abiertas
 *   · Profundidad de scroll 25/50/75/90 (en el blog, medida sobre el artículo)
 *   · Tiempo en página y resumen de salida con segundos de atención reales
 *   · Vuelta desde WhatsApp sin haber escrito
 *   · Errores de JavaScript, promesas rechazadas y recursos rotos
 */

/* ── Utilidades ───────────────────────────────────────────── */

const SOCIAL_NETWORKS: Record<string, string> = {
  "facebook.com": "facebook",
  "fb.com": "facebook",
  "instagram.com": "instagram",
  "tiktok.com": "tiktok",
  "linkedin.com": "linkedin",
  "youtube.com": "youtube",
  "youtu.be": "youtube",
  "twitter.com": "twitter",
  "x.com": "twitter",
};

const DOWNLOAD_EXT = /\.(pdf|docx?|xlsx?|pptx?|zip|rar|csv|txt)($|\?)/i;

/** Recursos de medición ajenos: si fallan es por un bloqueador, no por un bug. */
const TERCEROS = /googletagmanager\.com|google-analytics\.com|_vercel\/(insights|speed-insights)/;

/** Elementos que SÍ son interactivos: un clic aquí nunca es un clic muerto. */
const INTERACTIVOS =
  "a[href], button, [role='button'], input, select, textarea, label, details, summary, [onclick], [data-clickable], [data-track-location]";

/**
 * Cursores que delatan un elemento pensado para pulsarse.
 *
 * Hace falta porque `[onclick]` del selector de arriba solo casa con el
 * ATRIBUTO HTML, y React nunca lo escribe: engancha el listener en la raíz del
 * árbol. Resultado: cualquier `<div onClick={…}>` —la galería de /nosotros, el
 * carrusel de la home— se contaba como clic muerto aunque funcionara
 * perfectamente, y la métrica dejaba de servir para decidir nada.
 */
const CURSORES_PULSABLES = new Set(["pointer", "grab", "grabbing", "zoom-in", "zoom-out"]);

/** ¿El elemento o alguno de sus padres cercanos se comporta como pulsable? */
function pareceInteractivo(el: Element | null): boolean {
  let n: Element | null = el;
  for (let i = 0; n && i < 5; i += 1, n = n.parentElement) {
    try {
      if (CURSORES_PULSABLES.has(getComputedStyle(n).cursor)) return true;
    } catch {
      /* getComputedStyle falla en nodos ya desconectados del documento */
    }
  }
  return false;
}

/** Texto corto y limpio de un elemento, para saber QUÉ se pulsó. */
function labelOf(el: Element | null): string {
  if (!el) return "";
  const aria = el.getAttribute?.("aria-label");
  const text = (aria || (el as HTMLElement).innerText || el.textContent || "")
    .replace(/\s+/g, " ")
    .trim();
  return text.slice(0, 80);
}

/** Dominio sin "www." de una URL. */
function hostOf(url: string): string {
  try {
    return new URL(url, window.location.origin).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/**
 * Dónde está el elemento dentro de la página. Permite responder "¿desde qué
 * parte de qué página me escriben más?" sin tocar componentes.
 */
function resolveLocation(el: Element): string {
  const explicit = el.closest("[data-track-location]");
  if (explicit) return explicit.getAttribute("data-track-location") || "desconocida";

  if (el.closest('a[aria-label="Contactar por WhatsApp"]')) return "boton_flotante";
  if (el.closest("footer")) return "footer";
  if (el.closest("header") || el.closest("nav")) return "menu";

  const section = el.closest("section[id], div[id], main[id]");
  const id = section?.getAttribute("id");
  if (id) return id;

  return "cuerpo";
}

/** Mensaje pre-cargado del enlace de WhatsApp (revela la intención del CTA). */
function waIntent(href: string): string {
  try {
    const text = new URL(href, window.location.origin).searchParams.get("text");
    return text ? text.replace(/\s+/g, " ").trim().slice(0, 100) : "";
  } catch {
    return "";
  }
}

/**
 * Un <button> sin atributo `type` devuelve "submit" en la propiedad del DOM
 * (valor por defecto del estándar HTML). Solo hay que ignorarlo cuando de
 * verdad envía un formulario; si no, se perderían el menú, los acordeones y
 * las galerías, que es justo lo que pasaba antes.
 */
function esBotonDeEnvio(btn: HTMLElement): boolean {
  const declarado = btn.getAttribute("type");
  const envia = declarado === "submit" || declarado === null;
  return envia && Boolean(btn.closest("form"));
}

/* ── Componente ───────────────────────────────────────────── */

export default function TrackingProvider() {
  const pathname = usePathname();

  // Estado por página (se reinicia en cada cambio de ruta)
  const firedScroll = useRef<Set<number>>(new Set());
  const maxScroll = useRef(0);
  const errores = useRef<Set<string>>(new Set());
  const muertos = useRef(0);
  const ultimoClic = useRef<{ el: Element | null; n: number; t: number }>({ el: null, n: 0, t: 0 });
  const inicioPagina = useRef(0);
  const segundosAtencion = useRef(0);
  const salidaEnviada = useRef(false);
  const waPendiente = useRef<{ t: number; location: string; intent: string } | null>(null);

  /* ── 1. Clics ── */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest) return;

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      const location = resolveLocation(target);

      /* 1.a — Enlaces */
      if (anchor) {
        const href = anchor.getAttribute("href") || "";
        const label = labelOf(anchor);
        const base = { cta_location: location, link_text: label, link_url: href.slice(0, 200) };

        let method: LeadMethod | null = null;
        if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)/i.test(href) || /whatsapp/i.test(href)) {
          method = "whatsapp";
        } else if (href.startsWith("tel:")) {
          method = "phone";
        } else if (href.startsWith("mailto:")) {
          method = "email";
        }

        if (method) {
          const intent = method === "whatsapp" ? waIntent(href) : "";
          trackLead(method, { ...base, ...(intent ? { wa_intent: intent } : {}) });
          // WhatsApp abre en pestaña nueva: si vuelve enseguida, no escribió.
          if (method === "whatsapp") {
            waPendiente.current = { t: Date.now(), location, intent };
          }
          return;
        }

        if (href.startsWith("#")) {
          trackEvent("anchor_click", { ...base, anchor_target: href });
          return;
        }

        const host = hostOf(href);
        const isExternal =
          Boolean(host) && host !== window.location.hostname.replace(/^www\./, "");

        if (isExternal) {
          const network = SOCIAL_NETWORKS[host];
          if (network) {
            trackEvent("social_click", { ...base, social_network: network });
            return;
          }
          trackEvent("outbound_click", { ...base, outbound_domain: host });
          return;
        }

        if (DOWNLOAD_EXT.test(href)) {
          trackEvent("file_download", { ...base, file_name: href.split("/").pop() || href });
          return;
        }

        const eventName =
          location === "menu" ? "nav_click" : location === "footer" ? "footer_click" : "cta_click";
        trackEvent(eventName, { ...base, link_destination: href });
        return;
      }

      /* 1.b — Botones que no son enlaces */
      const button = target.closest("button, [role='button']") as HTMLElement | null;
      if (button) {
        // El envío del formulario se mide en ContactSection, con su resultado.
        if (esBotonDeEnvio(button)) return;
        trackEvent("button_click", {
          cta_location: location,
          button_text: labelOf(button),
        });
        return;
      }

      /* 1.c — Clics muertos: parecía pulsable y no lo era */
      if (target.closest(INTERACTIVOS)) return;
      if (pareceInteractivo(target)) return;
      const ahora = Date.now();
      const mismo = ultimoClic.current.el === target && ahora - ultimoClic.current.t < 2000;
      ultimoClic.current = { el: target, n: mismo ? ultimoClic.current.n + 1 : 1, t: ahora };

      // Se registra el primero (clic muerto) y el tercero (frustración).
      const n = ultimoClic.current.n;
      if ((n === 1 || n === 3) && muertos.current < 5) {
        muertos.current += 1;
        trackEvent("dead_click", {
          cta_location: location,
          element_text: labelOf(target),
          click_count: n,
        });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true } as EventListenerOptions);
  }, []);

  /* ── 2. FAQ: apertura de <details> ── */
  useEffect(() => {
    const onToggle = (e: Event) => {
      const el = e.target as HTMLDetailsElement | null;
      if (!el || el.tagName !== "DETAILS" || !el.open) return;
      trackEvent("faq_open", {
        faq_question: labelOf(el.querySelector("summary")),
        cta_location: resolveLocation(el),
      });
    };
    // `toggle` no burbujea: hay que escucharlo en fase de captura.
    document.addEventListener("toggle", onToggle, true);
    return () => document.removeEventListener("toggle", onToggle, true);
  }, []);

  /* ── 3. Scroll, atención y salida (por ruta) ── */
  useEffect(() => {
    firedScroll.current = new Set();
    maxScroll.current = 0;
    errores.current = new Set();
    muertos.current = 0;
    salidaEnviada.current = false;
    inicioPagina.current = Date.now();
    segundosAtencion.current = 0;

    const THRESHOLDS = [25, 50, 75, 90];
    let ticking = false;

    /**
     * En un artículo del blog el porcentaje se mide sobre el propio artículo,
     * no sobre el documento: si no, el pie y los relacionados inflan el total
     * y parece que nadie termina de leer.
     */
    const medirPorcentaje = (): number => {
      const doc = document.documentElement;
      const article =
        getPageType(window.location.pathname) === "blog_post"
          ? document.querySelector("article")
          : null;

      if (article) {
        const r = article.getBoundingClientRect();
        const leido = window.innerHeight - r.top;
        if (r.height <= 0) return 0;
        return Math.max(0, Math.min(100, (leido / r.height) * 100));
      }

      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return 100;
      return ((window.scrollY || doc.scrollTop) / scrollable) * 100;
    };

    const measure = () => {
      ticking = false;
      const percent = medirPorcentaje();
      if (percent > maxScroll.current) maxScroll.current = Math.round(percent);

      for (const t of THRESHOLDS) {
        if (percent >= t && !firedScroll.current.has(t)) {
          firedScroll.current.add(t);
          trackEvent("scroll_depth", { percent_scrolled: t });
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    measure();

    // Segundos de atención reales: solo cuenta con la pestaña visible.
    const tick = window.setInterval(() => {
      if (document.visibilityState === "visible") segundosAtencion.current += 1;
    }, 1000);

    const SECONDS = [15, 30, 60, 120];
    const timers = SECONDS.map((s) =>
      window.setTimeout(() => {
        if (document.visibilityState !== "visible") return;
        trackEvent("time_on_page", { seconds: s });
      }, s * 1000),
    );

    /** Resumen de salida: cuánto leyó y cuánto tiempo estuvo de verdad. */
    const enviarSalida = () => {
      if (salidaEnviada.current) return;
      salidaEnviada.current = true;
      trackEvent("page_exit", {
        percent_scrolled: maxScroll.current,
        engaged_seconds: segundosAtencion.current,
      });
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        enviarSalida();
        return;
      }
      // Volvió a la pestaña: ¿venía de WhatsApp sin escribir?
      const wa = waPendiente.current;
      if (wa) {
        const fuera = Math.round((Date.now() - wa.t) / 1000);
        waPendiente.current = null;
        if (fuera <= 20) {
          trackEvent("whatsapp_bounce_back", {
            cta_location: wa.location,
            wa_intent: wa.intent,
            seconds: fuera,
          });
        }
      }
    };

    window.addEventListener("pagehide", enviarSalida);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      // Cambio de ruta dentro del sitio: también cuenta como salida de página.
      enviarSalida();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", enviarSalida);
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearInterval(tick);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [pathname]);

  /* ── 4. Errores: JavaScript, promesas y recursos ── */
  useEffect(() => {
    const registrar = (tipo: string, mensaje: string, fuente?: string) => {
      const clave = `${tipo}|${mensaje}`;
      if (errores.current.has(clave) || errores.current.size >= 5) return;
      errores.current.add(clave);
      trackEvent("js_error", {
        error_type: tipo,
        error_message: mensaje.slice(0, 120),
        error_source: fuente?.split("/").pop()?.slice(0, 80),
      });
    };

    /**
     * Los fallos de carga de recursos (imagen, vídeo, script) NO burbujean:
     * sin `capture` nunca se ven. Y un chunk de Next que falla tras un
     * despliegue rompe la navegación entera sin dejar rastro en GA4.
     */
    const onError = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t && t !== (window as unknown as HTMLElement) && t.tagName) {
        const tag = t.tagName.toUpperCase();
        if (["IMG", "VIDEO", "SOURCE", "SCRIPT", "LINK", "AUDIO"].includes(tag)) {
          const src =
            (t as HTMLImageElement).src || (t as HTMLLinkElement).href || "";
          // Los scripts de medición de terceros los bloquea cualquier extensión
          // de bloqueo de anuncios. Reportarlos llenaría el informe de ruido
          // que no se puede arreglar y taparía los fallos de verdad.
          if (TERCEROS.test(src)) return;
          const esChunk = /_next\/static\/chunks/.test(src);
          registrar(esChunk ? "chunk_load" : "asset", `${tag} no cargó`, src);
          return;
        }
      }
      const err = e as ErrorEvent;
      registrar("runtime", err.message || "error", err.filename);
    };

    const onRejection = (e: PromiseRejectionEvent) => {
      const r = e.reason;
      const mensaje =
        typeof r === "string" ? r : (r?.message ?? String(r ?? "promesa rechazada"));
      const esChunk = /chunk|Loading .* failed|dynamically imported/i.test(mensaje);
      registrar(esChunk ? "chunk_load" : "promise", mensaje);
    };

    window.addEventListener("error", onError, true); // captura: recursos rotos
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError, true);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
