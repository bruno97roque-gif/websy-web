import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // El panel es privado y se entra con token: fuera del índice.
        // `/panel` y todo lo que cuelgue de él: es privado y se entra con token.
        disallow: ["/api/", "/panel", "/panel/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // Sin `host`: es una directiva no estándar (solo Yandex) y Google la ignora.
  };
}
