import type { NextConfig } from "next";

/* ─────────────────────────────────────────────────────────────
   Security Headers
   Aplican a todas las rutas. Ajusta CSP según tus necesidades.
───────────────────────────────────────────────────────────── */
const securityHeaders = [
  // Evita que el sitio sea embebido en un iframe de otro dominio
  { key: "X-Frame-Options",          value: "SAMEORIGIN" },

  // Evita que el browser "adivine" el MIME type
  { key: "X-Content-Type-Options",   value: "nosniff" },

  // Controla qué información de referer se envía
  { key: "Referrer-Policy",          value: "strict-origin-when-cross-origin" },

  // Fuerza HTTPS durante 1 año (actívalo sólo en producción con HTTPS real)
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },

  // Deshabilita características del navegador que no uses
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },

  // Content Security Policy — básico y seguro para Next.js
  // Amplíalo si agregas más CDNs o scripts externos
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts: propio dominio + inline necesario para Next.js hydration
      // + Google Tag Manager (carga de gtag.js para Google Analytics GA4)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com",
      // Estilos: propio dominio + inline (Tailwind CSS-in-JS)
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fuentes Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Imágenes: propio dominio + data URIs + beacons de Google Analytics
      "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com",
      // Conexiones: propio dominio + APIs externas + envío de hits a Google Analytics GA4
      // + Tag Assistant (modo Vista previa de Google Tag Manager)
      "connect-src 'self' https://api.resend.com https://script.google.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://tagassistant.google.com",
      // Frames: solo los de Google Tag Manager (iframe <noscript> del contenedor
      // y la ventana de depuración de Tag Assistant). Sin esto GTM no se puede
      // depurar y el fallback sin JavaScript queda bloqueado.
      "frame-src https://www.googletagmanager.com https://tagassistant.google.com",
      // Objects: ninguno
      "object-src 'none'",
      // Base: sólo propio dominio
      "base-uri 'self'",
      // Formularios: sólo propio dominio
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  /* ── Image optimization ── */
  images: {
    // Formatos modernos: AVIF (mejor compresión), WebP (compatible)
    formats: ["image/avif", "image/webp"],
    // Responsive breakpoints
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 32, 48, 64, 96, 128, 256],
    // Caché 30 días en CDN/Vercel Edge
    minimumCacheTTL: 2592000,
  },

  /* ── El panel de Websy, dentro de websy.com.pe ──────────────
     `/panel` sirve el colector de medición sin que el visitante salga del
     dominio. Al ser una reescritura y no una redirección, para el navegador
     todo es mismo origen: la política de seguridad de arriba
     (`connect-src 'self'`) sigue valiendo tal cual, sin abrirla a nadie.

     El colector emite sus rutas y sus ficheros ya bajo `/panel` (basePath),
     así que sus `_next/static` no chocan con los de este sitio. */
  async rewrites() {
    const PANEL = "https://websy-panel.vercel.app/panel";
    return [
      { source: "/panel", destination: PANEL },
      { source: "/panel/:ruta*", destination: `${PANEL}/:ruta*` },
    ];
  },

  async headers() {
    return [
      {
        // Aplica a todas las rutas
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        /* El panel NO se indexa, y no se deja al azar: la cabecera se pone aquí
           además de en el propio panel, para que siga estando aunque algún día
           el proxy deje de reenviarla. Con esto son tres señales — robots.txt,
           esta cabecera y el <meta robots> del HTML — y las tres dicen lo mismo. */
        source: "/panel/:ruta*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet" },
        ],
      },
      {
        source: "/panel",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet" },
        ],
      },
      // Nota: Vercel CDN cachea automáticamente los assets estáticos de /public.
      // No se necesita regla extra de Cache-Control para imágenes/video/gif.
    ];
  },
};

export default nextConfig;
