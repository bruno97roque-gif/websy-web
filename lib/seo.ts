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

type PageMetaInput = {
  /** path con barra inicial, p. ej. "/servicios" ("/" = home) */
  path: string;
  /** título SIN el sufijo de marca (el template "%s | Websy" lo agrega) */
  title: string;
  description: string;
  /** imagen OG específica de la página (por defecto la global) */
  ogImage?: string;
};

/**
 * Construye el Metadata de una página con su PROPIO canonical y su PROPIO
 * Open Graph. Resuelve la canibalización (todas heredaban canonical "/")
 * y el OG duplicado (todas heredaban el de la home).
 */
export function pageMeta({ path, title, description, ogImage }: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const image = ogImage ?? DEFAULT_OG_IMAGE;
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
