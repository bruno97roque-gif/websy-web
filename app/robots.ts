import type { MetadataRoute } from "next";

const SITE_URL = "https://websy.pe"; // ← actualiza al dominio real

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
    host: SITE_URL,
  };
}
