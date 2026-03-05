import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ⚠️ NO instanciar Resend en el módulo global — solo en el handler (runtime)
// Si se instancia aquí, el build falla porque RESEND_API_KEY no existe en build time

/* ─────────────────────────────────────────────
   Rate limiter en memoria
   Máx. 3 envíos por IP por hora.
   Para producción a escala usar @upstash/ratelimit + Redis.
───────────────────────────────────────────── */
const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hora
  const max = 3;
  const rec = ipMap.get(ip);
  if (!rec || now > rec.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }
  if (rec.count >= max) return true;
  rec.count++;
  return false;
}

/* ─────────────────────────────────────────────
   Sanitización: elimina etiquetas HTML y trunca
───────────────────────────────────────────── */
function clean(val: unknown, max = 500): string {
  return String(val ?? "")
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, max);
}

/* ─────────────────────────────────────────────
   Handler POST
───────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    /* 1 — Honeypot anti-spam (campo oculto "website") */
    if (body.website) {
      return NextResponse.json({ ok: true }); // fake-OK para bots
    }

    /* 2 — Rate limit */
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anon";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiados intentos. Por favor espera 1 hora." },
        { status: 429 }
      );
    }

    /* 3 — Sanitizar y validar */
    const nombre   = clean(body.nombre,   80);
    const empresa  = clean(body.empresa,  80)   || "—";
    const email    = clean(body.email,    120);
    const whatsapp = clean(body.whatsapp, 30)   || "—";
    const servicio = clean(body.servicio, 60)   || "—";
    const proyecto = clean(body.proyecto, 1000);

    if (!nombre || !email || !proyecto) {
      return NextResponse.json(
        { error: "Nombre, email y descripción del proyecto son obligatorios." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "El email no tiene un formato válido." },
        { status: 400 }
      );
    }

    const fecha = new Date().toLocaleString("es-PE", {
      timeZone: "America/Lima",
      dateStyle: "short",
      timeStyle: "short",
    });

    /* 4 — Enviar email vía Resend (instanciado aquí = solo en runtime, no en build) */
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from:    `Websy Contacto <${process.env.FROM_EMAIL ?? "onboarding@resend.dev"}>`,
      to:      [process.env.CONTACT_EMAIL ?? "hola@websy.pe"],
      replyTo: email,
      subject: `✉️ Nuevo contacto: ${nombre} · ${servicio}`,
      html:    buildEmailHtml({ nombre, empresa, email, whatsapp, servicio, proyecto, fecha }),
    });

    /* 5 — Google Sheets vía Apps Script webhook
       Ver instrucciones en /docs/google-sheets-script.js */
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fecha, nombre, empresa, email, whatsapp, servicio, proyecto,
        }),
      }).catch(() => null); // No bloquea el flujo si Google Sheets falla
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json(
      { error: "Error interno. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }
}

/* ─────────────────────────────────────────────
   Plantilla HTML del email — estilo Websy
───────────────────────────────────────────── */
interface EmailData {
  nombre: string; empresa: string; email: string;
  whatsapp: string; servicio: string; proyecto: string; fecha: string;
}

function buildEmailHtml(d: EmailData): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Nuevo contacto – Websy</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:#f0edf5;font-family:Arial,Helvetica,sans-serif;padding:28px 16px}
  .wrap{max-width:580px;margin:0 auto}
  .card{background:#1e0d2e;border-radius:18px;overflow:hidden;border:1px solid rgba(241,140,27,.3)}
  .hdr{background:#291231;padding:26px 36px;border-bottom:2.5px solid #F18C1B;display:flex;align-items:center;gap:14px}
  .logo{font-size:22px;font-weight:900;color:#fff;letter-spacing:-.5px}
  .logo em{color:#F18C1B;font-style:normal}
  .badge{background:#F18C1B;color:#291231;font-size:10px;font-weight:800;padding:4px 12px;border-radius:20px;text-transform:uppercase;letter-spacing:1.2px}
  .body{padding:28px 36px}
  .title{color:#fff;font-size:20px;font-weight:800;margin-bottom:22px;line-height:1.3}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
  .field{background:rgba(255,255,255,.055);border-radius:8px;padding:11px 14px;border-left:3px solid #F18C1B}
  .lbl{color:#F18C1B;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:4px}
  .val{color:#fff;font-size:14px;word-break:break-word;line-height:1.4}
  .full{grid-column:1/-1}
  .msg{background:rgba(255,255,255,.04);border:1px solid rgba(241,140,27,.2);border-radius:10px;padding:16px;margin-top:14px}
  .msg .lbl{margin-bottom:8px}
  .msg .val{color:rgba(255,255,255,.85);font-size:14px;line-height:1.75}
  .btn{display:block;text-align:center;background:#F18C1B;color:#291231 !important;font-weight:800;font-size:12px;text-decoration:none;padding:14px 28px;border-radius:50px;margin:22px 0 0;text-transform:uppercase;letter-spacing:1.5px}
  .ftr{background:rgba(0,0,0,.22);padding:16px 36px;text-align:center;color:rgba(255,255,255,.3);font-size:11px;line-height:1.6}
</style>
</head>
<body>
<div class="wrap">
  <div class="card">
    <div class="hdr">
      <div class="logo">Web<em>sy</em></div>
      <div class="badge">Nuevo contacto</div>
    </div>
    <div class="body">
      <p class="title">¡Alguien quiere trabajar con Websy! 🚀</p>
      <div class="grid">
        <div class="field"><div class="lbl">Nombre</div><div class="val">${esc(d.nombre)}</div></div>
        <div class="field"><div class="lbl">Empresa</div><div class="val">${esc(d.empresa)}</div></div>
        <div class="field"><div class="lbl">Email</div><div class="val">${esc(d.email)}</div></div>
        <div class="field"><div class="lbl">WhatsApp</div><div class="val">${esc(d.whatsapp)}</div></div>
        <div class="field full"><div class="lbl">Servicio de interés</div><div class="val">${esc(d.servicio)}</div></div>
      </div>
      <div class="msg">
        <div class="lbl">Su proyecto</div>
        <div class="val">${esc(d.proyecto).replace(/\n/g, "<br/>")}</div>
      </div>
      <a class="btn" href="mailto:${esc(d.email)}">Responder a ${esc(d.nombre)} →</a>
    </div>
    <div class="ftr">
      Websy · Lima, Perú · hola@websy.pe<br/>
      Recibido el ${esc(d.fecha)}
    </div>
  </div>
</div>
</body>
</html>`;
}
