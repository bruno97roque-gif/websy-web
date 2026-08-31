import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { COLECTOR, SITIO } from "../destino";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Alta de un contacto desde el modal de WhatsApp (y desde cualquier otro botón
 * de contacto del sitio).
 *
 * Lo que cambia respecto a antes: el nombre y el teléfono se guardan AQUÍ,
 * antes de que la persona salga hacia WhatsApp. Hasta hoy, quien pulsaba el
 * botón verde y no llegaba a escribir no existía para nadie — GA4 contaba un
 * clic y se acababa el rastro. Ahora ese contacto queda en el panel y se le
 * puede escribir.
 *
 * Se hacen dos cosas, y ninguna puede tumbar a la otra:
 *   1. guardar el lead en el almacén de Websy (es lo que alimenta el panel)
 *   2. avisar al equipo por correo (para que nadie tenga que mirar el panel
 *      para enterarse de que ha entrado alguien)
 */

const CANALES = new Set(["whatsapp", "formulario", "telefono", "email", "social"]);

/** Tope por IP: un visitante honesto no deja diez contactos en una hora. */
const ventana = new Map<string, { n: number; hasta: number }>();
function pasado(ip: string): boolean {
  const ahora = Date.now();
  const r = ventana.get(ip);
  if (!r || ahora > r.hasta) {
    ventana.set(ip, { n: 1, hasta: ahora + 3600_000 });
    return false;
  }
  if (r.n >= 8) return true;
  r.n += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const b = await req.json();

    if (b.website) return NextResponse.json({ ok: true, id: null }); // trampa para robots

    const canal = String(b.canal ?? "");
    if (!CANALES.has(canal)) {
      return NextResponse.json({ error: "canal no válido" }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";
    if (pasado(ip)) {
      return NextResponse.json(
        { error: "Demasiados intentos. Escríbenos directamente por WhatsApp." },
        { status: 429 },
      );
    }

    const nombre = limpiar(b.nombre, 90);
    const telefono = limpiar(b.telefono, 40);

    // El modal pide nombre y teléfono: sin teléfono no hay a quién responder.
    if (canal === "whatsapp" && (telefono?.replace(/\D/g, "").length ?? 0) < 8) {
      return NextResponse.json(
        { error: "Necesitamos un número de teléfono para poder responderte." },
        { status: 400 },
      );
    }

    const carga = {
      sitio: SITIO,
      sid: limpiar(b.sid, 64),
      canal,
      nombre,
      telefono,
      correo: limpiar(b.correo, 140),
      empresa: limpiar(b.empresa, 120),
      servicio: limpiar(b.servicio, 80),
      mensaje: limpiar(b.mensaje, 2000),
      pagina: limpiar(b.pagina, 300),
      ubicacion: limpiar(b.ubicacion, 80),
      referrer: limpiar(b.referrer, 500),
      landing: limpiar(b.landing, 300),
      fuente: limpiar(b.fuente, 120),
      medio: limpiar(b.medio, 120),
      campana: limpiar(b.campana, 160),
      ctx: {
        pais: req.headers.get("x-vercel-ip-country") ?? "",
        ciudad: descodificar(req.headers.get("x-vercel-ip-city")),
        dispositivo: /mobile|iphone|android/i.test(req.headers.get("user-agent") ?? "")
          ? "movil"
          : "escritorio",
      },
    };

    // El guardado es lo importante y va primero: si el correo falla, el
    // contacto sigue estando en el panel.
    let id: number | null = null;
    try {
      const r = await fetch(`${COLECTOR}/api/lead`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(carga),
        signal: AbortSignal.timeout(6000),
      });
      const j = await r.json();
      id = j?.id ? Number(j.id) : null;
    } catch (e) {
      console.error("[w/lead] no se pudo guardar en el panel", e);
    }

    // El aviso al equipo se manda aparte y nunca bloquea la respuesta: la
    // persona no tiene que esperar a que salga un correo para ir a WhatsApp.
    void avisar(carga).catch(() => null);

    return NextResponse.json({ ok: true, id });
  } catch (err) {
    console.error("[w/lead]", err);
    return NextResponse.json({ error: "Error interno." }, { status: 500 });
  }
}

/** Marca si la persona llegó a abrir WhatsApp y si volvió sin escribir. */
export async function PATCH(req: NextRequest) {
  try {
    const b = await req.json();
    await fetch(`${COLECTOR}/api/lead`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...b, sitio: SITIO }),
      signal: AbortSignal.timeout(4000),
    });
  } catch {
    /* es un matiz del lead, no el lead */
  }
  return NextResponse.json({ ok: true });
}

/* ── Utilidades ─────────────────────────────────────────────── */

function limpiar(v: unknown, max: number): string | null {
  if (v === null || v === undefined) return null;
  const s = String(v)
    .replace(/<[^>]*>/g, "")
    .trim();
  return s ? s.slice(0, max) : null;
}

function descodificar(v: string | null): string {
  if (!v) return "";
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

type Carga = {
  canal: string;
  nombre: string | null;
  telefono: string | null;
  correo: string | null;
  servicio: string | null;
  mensaje: string | null;
  pagina: string | null;
  ubicacion: string | null;
  referrer: string | null;
  campana: string | null;
  ctx: { pais: string; ciudad: string; dispositivo: string };
};

async function avisar(c: Carga) {
  if (!process.env.RESEND_API_KEY) return;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const fecha = new Date().toLocaleString("es-PE", {
    timeZone: "America/Lima",
    dateStyle: "short",
    timeStyle: "short",
  });
  const tel = (c.telefono ?? "").replace(/\D/g, "");
  const wa = tel ? `https://wa.me/${tel.length === 9 ? "51" + tel : tel}` : "";

  await resend.emails.send({
    from: `Websy Contacto <${process.env.FROM_EMAIL ?? "onboarding@resend.dev"}>`,
    to: [process.env.CONTACT_EMAIL ?? "ventas@websy.com.pe"],
    subject: `🟢 ${c.nombre ?? "Alguien"} quiere que le escribas por WhatsApp`,
    html: correo(c, fecha, wa),
  });
}

function correo(c: Carga, fecha: string, wa: string): string {
  const esc = (s: string | null) =>
    (s ?? "—").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const filas: [string, string][] = [
    ["Nombre", esc(c.nombre)],
    ["Teléfono", esc(c.telefono)],
    ["Servicio", esc(c.servicio)],
    ["Página", esc(c.pagina)],
    ["Botón", esc(c.ubicacion)],
    ["Desde", [c.ctx.ciudad, c.ctx.pais, c.ctx.dispositivo].filter(Boolean).join(" · ") || "—"],
    ["Cómo llegó", esc(c.campana ?? c.referrer)],
  ];

  return `<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/><title>Nuevo contacto</title></head>
<body style="margin:0;padding:32px 16px;background:#f3f0f7;font-family:Arial,Helvetica,sans-serif">
<div style="max-width:560px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 32px rgba(41,18,49,.1)">
  <div style="background:#291231;padding:22px 34px">
    <span style="font-size:24px;font-weight:900;color:#fff;letter-spacing:-.5px">Web<span style="color:#F18C1B">sy</span></span>
  </div>
  <div style="height:3px;background:linear-gradient(90deg,#F18C1B,#e07010)"></div>
  <div style="padding:30px 34px">
    <p style="margin:0 0 6px;font-size:19px;font-weight:800;color:#291231">Nuevo contacto por WhatsApp</p>
    <p style="margin:0 0 22px;font-size:13px;color:#7a6882;line-height:1.55">
      Dejó sus datos en la web antes de abrir WhatsApp. Si no te ha escrito todavía,
      escríbele tú: el contacto ya es tuyo.
    </p>
    <table style="width:100%;border-collapse:collapse">
      ${filas
        .map(
          ([k, v]) => `<tr>
        <td style="padding:10px 14px 10px 0;border-bottom:1px solid #ede9f3;font-size:10px;font-weight:700;letter-spacing:1.3px;text-transform:uppercase;color:#9b85ab;width:34%">${k}</td>
        <td style="padding:10px 0;border-bottom:1px solid #ede9f3;font-size:14px;color:#1a0820;font-weight:500">${v}</td>
      </tr>`,
        )
        .join("")}
    </table>
    ${
      wa
        ? `<div style="margin-top:26px"><a href="${wa}" style="display:inline-block;background:#25D366;color:#fff;font-weight:800;font-size:12px;text-decoration:none;padding:14px 30px;border-radius:50px;text-transform:uppercase;letter-spacing:1.4px">Escribirle por WhatsApp →</a></div>`
        : ""
    }
  </div>
  <div style="background:#f3f0f7;padding:15px 34px;text-align:center;border-top:1px solid #ede9f3">
    <p style="margin:0;color:#9b85ab;font-size:11px;line-height:1.7">Recibido el ${fecha} · lo tienes también en el panel</p>
  </div>
</div></body></html>`;
}
