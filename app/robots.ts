import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"], // No indexar rutas de API
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // Sin `host`: es una directiva no estándar (solo Yandex) y Google la ignora.
  };
}
