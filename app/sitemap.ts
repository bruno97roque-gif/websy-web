import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICE_SITEMAP } from "@/lib/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const fixed: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/servicios`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/nosotros`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contacto`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/terminos`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/politicas-de-privacidad`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Landings de servicio (silos) — añadidas automáticamente desde lib/nav.
  const services: MetadataRoute.Sitemap = SERVICE_SITEMAP.map((s) => ({
    url: `${SITE_URL}${s.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: s.priority,
  }));

  return [...fixed, ...services];
}
