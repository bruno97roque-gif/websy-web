import type { Metadata } from "next";

/* ─────────────────────────────────────────────────────────────
   Configuración SEO central — una sola fuente de verdad.

   Host canónico: NON-WWW (https://websy.com.pe).
   El código ya usa non-www en canonical, OG, sitemap, robots y schema.
   En Vercel debe quedar websy.com.pe como dominio PRIMARIO y www
   redirigiendo a él (Project → Settings → Domains). Así las URLs
   canónicas dejan de apuntar a un host que se redirige.
───────────────────────────────────────────────────────────── */
export const SITE_URL = "https://websy.com.pe";
export const SITE_NAME = "Websy";
export const SITE_LOCALE = "es_PE";
export const DEFAULT_OG_IMAGE = "/og-image.png"; // 1200×630, resuelto contra metadataBase

/**
 * Portada 1200×630 propia de cada página, generada en /og con su título.
 *
 * Antes las 97 URLs compartían `og-image.png`: compartir cualquier artículo
 * por WhatsApp enseñaba siempre la misma tarjeta genérica.
 */
export function ogUrl(titulo: string, kicker = "Websy"): string {
  return `/og?t=${encodeURIComponent(titulo)}&k=${encodeURIComponent(kicker)}`;
}

type PageMetaInput = {
  /** path con barra inicial, p. ej. "/servicios" ("/" = home) */
  path: string;
  /** título SIN el sufijo de marca (el template "%s | Websy" lo agrega) */
  title: string;
  description: string;
  /** imagen OG específica de la página (por defecto, una generada con el título) */
  ogImage?: string;
  /** línea superior de la portada generada (categoría del artículo, sección…) */
  ogKicker?: string;
};

/**
 * Construye el Metadata de una página con su PROPIO canonical y su PROPIO
 * Open Graph. Resuelve la canibalización (todas heredaban canonical "/")
 * y el OG duplicado (todas heredaban el de la home).
 */
export function pageMeta({
  path,
  title,
  description,
  ogImage,
  ogKicker,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const image = ogImage ?? ogUrl(title, ogKicker ?? "Websy");
  return {
    title,
    description,
    alternates: { canonical: path }, // self-canonical (relativo a metadataBase)
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      siteName: SITE_NAME,
      url,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
