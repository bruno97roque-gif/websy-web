import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { FIXED_SITEMAP, SERVICE_SITEMAP } from "@/lib/nav";
import { BLOG_POSTS } from "@/lib/blog";

/**
 * El sitemap NO debe generar fechas en tiempo de petición: `new Date()` haría que cada
 * descarga declarase todas las URLs como recién modificadas y Google acabaría ignorando
 * el lastmod de todo el sitio. Las fechas viven en lib/nav.ts (páginas) y en el propio
 * post (blog), y se actualizan a mano cuando el contenido cambia de verdad.
 */
const changeFreq = (priority: number): MetadataRoute.Sitemap[number]["changeFrequency"] =>
  priority >= 0.9 ? "weekly" : priority >= 0.5 ? "monthly" : "yearly";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [...FIXED_SITEMAP, ...SERVICE_SITEMAP].map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: new Date(`${p.lastModified}T00:00:00.000Z`),
    changeFrequency: p.changeFrequency ?? changeFreq(p.priority),
    priority: p.priority,
  }));

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(`${p.dateModified ?? p.datePublished}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
