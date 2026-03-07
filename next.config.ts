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
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Estilos: propio dominio + inline (Tailwind CSS-in-JS)
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fuentes Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Imágenes: propio dominio + data URIs
      "img-src 'self' data: blob:",
      // Conexiones: propio dominio + APIs externas usadas
      "connect-src 'self' https://api.resend.com https://script.google.com",
      // Frames: ninguno (no embebemos iframes)
      "frame-src 'none'",
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

  async headers() {
    return [
      {
        // Aplica a todas las rutas
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Nota: Vercel CDN cachea automáticamente los assets estáticos de /public.
      // No se necesita regla extra de Cache-Control para imágenes/video/gif.
    ];
  },
};

export default nextConfig;
