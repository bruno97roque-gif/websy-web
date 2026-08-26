import { BLOG_POSTS } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

/**
 * Feed RSS del blog.
 *
 * El sitio publica guías con regularidad y no tenía feed: ni agregadores, ni
 * lectores, ni las herramientas que se suscriben a novedades podían seguirlo.
 * Se genera desde `lib/blog.ts`, la misma fuente del sitemap y de /llms.txt.
 */

export const dynamic = "force-static";

/** Escapa lo que XML no admite dentro de un nodo de texto. */
function xml(texto: string): string {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Fecha ISO (YYYY-MM-DD) al formato RFC 822 que pide RSS. */
function rfc822(fecha: string): string {
  return new Date(`${fecha}T09:00:00-05:00`).toUTCString();
}

export function GET(): Response {
  const posts = [...BLOG_POSTS].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      return `    <item>
      <title>${xml(post.h1)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${xml(post.excerpt)}</description>
      <category>${xml(post.category)}</category>
      <pubDate>${rfc822(post.datePublished)}</pubDate>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog de ${SITE_NAME}</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Guías de páginas web, tiendas virtuales, software a medida, SEO y pagos para negocios en Perú.</description>
    <language>es-PE</language>
    <lastBuildDate>${rfc822(posts[0]?.dateModified ?? posts[0]?.datePublished ?? "2026-08-12")}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
