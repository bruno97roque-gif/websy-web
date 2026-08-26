import { BLOG_POSTS } from "@/lib/blog";
import { RUBRO_LINKS, SERVICE_LINKS } from "@/lib/nav";
import { SITE_URL } from "@/lib/seo";

/**
 * /llms.txt — el mapa del sitio para modelos de lenguaje.
 *
 * Antes era un archivo estático en `public/` y se quedó a medias: cubría 51 de
 * las 97 URLs. Faltaban justo las que interesan —/desarrollo-web, los tres
 * /sistemas/*, las hijas de Shopify— y 33 de los 66 artículos, incluido el de
 * Izipay/Niubiz, tercero del sitio en impresiones.
 *
 * Ahora se genera desde las mismas fuentes que el menú y el sitemap
 * (`lib/nav.ts` y `lib/blog.ts`), así que publicar un artículo o una landing lo
 * actualiza solo y no vuelve a descolgarse.
 */

export const dynamic = "force-static";

const INTRO = `# Websy — Agencia de desarrollo web y software en Lima, Perú

> Websy es una agencia peruana de tecnología que desarrolla páginas web, tiendas virtuales (Shopify y WooCommerce), software y sistemas a medida, branding, SEO y Google Ads para empresas y emprendedores en Lima y todo el Perú. Las tiendas se entregan autoadministrables, con pasarelas de pago locales (Yape, Plin, Niubiz, Izipay) y acompañamiento después del lanzamiento.

## Contacto
- Teléfono y WhatsApp: +51 940 549 322
- Correo: ventas@websy.com.pe
- Atención: Lima y todo el Perú, de lunes a viernes de 9:00 a 18:00
- Cotización gratis con respuesta en menos de 24 horas: ${SITE_URL}/cotizacion`;

/** Páginas institucionales que no son ni servicio ni artículo. */
const INSTITUCIONALES: { href: string; label: string; desc: string }[] = [
  { href: "/", label: "Inicio", desc: "qué hace Websy, servicios y forma de trabajo." },
  { href: "/servicios", label: "Servicios", desc: "índice de las 23 páginas de servicio y de rubro." },
  { href: "/nosotros", label: "Nosotros", desc: "el equipo de Websy y cómo trabaja la agencia." },
  { href: "/contacto", label: "Contacto", desc: "teléfono, correo, horario y formulario de contacto." },
  { href: "/blog", label: "Blog", desc: "guías de ecommerce, web, software, SEO y pagos en Perú." },
  {
    href: "/cotizacion",
    label: "Cotización",
    desc: "formulario para pedir una cotización sin costo, con respuesta en menos de 24 horas.",
  },
  { href: "/terminos", label: "Términos y condiciones", desc: "condiciones del servicio." },
  {
    href: "/politicas-de-privacidad",
    label: "Políticas de privacidad",
    desc: "tratamiento de datos personales conforme a la Ley N° 29733.",
  },
];

function linea(href: string, label: string, desc?: string): string {
  const url = href === "/" ? SITE_URL : `${SITE_URL}${href}`;
  return desc ? `- [${label}](${url}): ${desc}` : `- [${label}](${url})`;
}

export function GET(): Response {
  const bloques: string[] = [INTRO];

  bloques.push(
    ["## Servicios", ...SERVICE_LINKS.map((l) => linea(l.href, l.label, l.desc))].join("\n"),
  );

  bloques.push(
    ["## Páginas web por rubro", ...RUBRO_LINKS.map((l) => linea(l.href, l.label, l.desc))].join(
      "\n",
    ),
  );

  bloques.push(
    ["## Páginas institucionales", ...INSTITUCIONALES.map((l) => linea(l.href, l.label, l.desc))].join(
      "\n",
    ),
  );

  // Blog completo, agrupado por categoría y ordenado del más reciente al más antiguo.
  const categorias = new Map<string, typeof BLOG_POSTS>();
  for (const post of BLOG_POSTS) {
    const lista = categorias.get(post.category) ?? [];
    lista.push(post);
    categorias.set(post.category, lista);
  }

  const blog: string[] = [
    `## Blog — ${BLOG_POSTS.length} guías sobre web, ecommerce, software y marketing en Perú`,
  ];
  for (const [categoria, posts] of [...categorias.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    blog.push(`\n### ${categoria}`);
    for (const post of [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished))) {
      blog.push(linea(`/blog/${post.slug}`, post.title, post.excerpt));
    }
  }
  bloques.push(blog.join("\n"));

  return new Response(`${bloques.join("\n\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
