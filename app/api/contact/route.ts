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
      to:      [process.env.CONTACT_EMAIL ?? "ventas@websy.com.pe"],
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

  const SITE = "https://websy.com.pe";

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Nuevo contacto – Websy</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:#f3f0f7;font-family:Arial,Helvetica,sans-serif;padding:32px 16px}
  .wrap{max-width:580px;margin:0 auto}

  /* Card principal */
  .card{background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 32px rgba(41,18,49,.10)}

  /* Header */
  .hdr{background:#291231;padding:22px 36px}
  .logo{font-size:24px;font-weight:900;color:#fff;letter-spacing:-.5px;font-family:Arial,Helvetica,sans-serif}
  .logo em{color:#F18C1B;font-style:normal}

  /* Franja naranja fina bajo el header */
  .accent-bar{height:3px;background:linear-gradient(90deg,#F18C1B 0%,#e07010 100%)}

  /* Body */
  .body{padding:32px 36px}
  .title{font-size:19px;font-weight:800;color:#291231;margin-bottom:6px;line-height:1.3}
  .subtitle{font-size:13px;color:#7a6882;margin-bottom:28px;line-height:1.5}

  /* Divider */
  .divider{height:1px;background:#ede9f3;margin:20px 0}

  /* Grid de campos — sin fondos, separado por líneas */
  .grid{display:table;width:100%;border-collapse:collapse}
  .row{display:table-row}
  .cell-lbl{display:table-cell;width:36%;vertical-align:middle;padding:11px 16px 11px 0;border-bottom:1px solid #ede9f3}
  .cell-val{display:table-cell;vertical-align:middle;padding:11px 0;border-bottom:1px solid #ede9f3}

  /* Labels */
  .lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.4px;color:#9b85ab}
  .val{font-size:14px;color:#1a0820;word-break:break-word;line-height:1.45;font-weight:500}
  .val a{color:#291231;text-decoration:none}

  /* Chip de servicio */
  .chip{display:inline-block;background:#291231;color:#F18C1B;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;letter-spacing:.8px;margin-top:2px}

  /* Bloque de proyecto */
  .project-box{background:#faf8fd;border:1px solid #ede9f3;border-left:3px solid #F18C1B;border-radius:10px;padding:16px 18px;margin-top:4px}
  .project-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.4px;color:#9b85ab;margin-bottom:8px}
  .project-val{font-size:14px;color:#1a0820;line-height:1.8}

  /* Botón CTA */
  .btn-wrap{margin-top:26px}
  .btn{display:inline-block;background:#F18C1B;color:#291231 !important;font-weight:800;font-size:12px;text-decoration:none;padding:14px 32px;border-radius:50px;text-transform:uppercase;letter-spacing:1.5px}

  /* Footer */
  .ftr{background:#f3f0f7;padding:16px 36px;text-align:center;border-top:1px solid #ede9f3}
  .ftr p{color:#9b85ab;font-size:11px;line-height:1.7}
  .ftr a{color:#291231;text-decoration:none;font-weight:600}
</style>
</head>
<body>
<div class="wrap">
  <div class="card">

    <!-- Header morado con logo texto -->
    <div class="hdr">
      <div class="logo">Web<em>sy</em></div>
    </div>
    <div class="accent-bar"></div>

    <!-- Body blanco -->
    <div class="body">

      <p class="title">¡Alguien quiere trabajar con Websy! 🚀</p>
      <p class="subtitle">Has recibido una nueva solicitud a través del formulario de contacto.</p>

      <!-- Tabla de datos -->
      <div class="grid">
        <div class="row">
          <div class="cell-lbl"><span class="lbl">Nombre</span></div>
          <div class="cell-val"><span class="val">${esc(d.nombre)}</span></div>
        </div>
        <div class="row">
          <div class="cell-lbl"><span class="lbl">Empresa</span></div>
          <div class="cell-val"><span class="val">${esc(d.empresa)}</span></div>
        </div>
        <div class="row">
          <div class="cell-lbl"><span class="lbl">Email</span></div>
          <div class="cell-val"><span class="val"><a href="mailto:${esc(d.email)}">${esc(d.email)}</a></span></div>
        </div>
        <div class="row">
          <div class="cell-lbl"><span class="lbl">WhatsApp</span></div>
          <div class="cell-val"><span class="val">${esc(d.whatsapp)}</span></div>
        </div>
        <div class="row">
          <div class="cell-lbl"><span class="lbl">Servicio</span></div>
          <div class="cell-val"><span class="chip">${esc(d.servicio)}</span></div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Bloque proyecto -->
      <div class="project-box">
        <div class="project-lbl">Su proyecto</div>
        <div class="project-val">${esc(d.proyecto).replace(/\n/g, "<br/>")}</div>
      </div>

      <!-- Botón responder -->
      <div class="btn-wrap">
        <a class="btn" href="mailto:${esc(d.email)}">Responder a ${esc(d.nombre)} →</a>
      </div>

    </div>

    <!-- Footer -->
    <div class="ftr">
      <p>
        <a href="${SITE}">Websy</a> · Lima, Perú · <a href="mailto:ventas@websy.com.pe">ventas@websy.com.pe</a>
      </p>
      <p>Recibido el ${esc(d.fecha)}</p>
    </div>

  </div>
</div>
</body>
</html>`;
}
