import { SITE_URL, SITE_NAME } from "@/lib/seo";
import { SERVICE_LINKS, RUBRO_LINKS } from "@/lib/nav";

/* ─────────────────────────────────────────────────────────────
   Builders de JSON-LD (Schema.org).
   - logo apunta a /icons/logo-dark.webp (asset real). Antes /images/logo-websy-dark.png → 404.
   - Se añaden tipos que faltaban: WebSite, BreadcrumbList y schema por página.
───────────────────────────────────────────────────────────── */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/icons/logo-dark.webp`;

/* Autor editorial del blog. Se usa como author de los BlogPosting y en la
   firma visible del artículo. Es la Organization (marca Websy): las personas
   del equipo aún figuran con datos de placeholder en /nosotros, así que no
   atribuimos autoría a un individuo concreto para no falsear el E-E-A-T. */
export const BLOG_AUTHOR = SITE_NAME;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    description:
      "Agencia de tecnología y desarrollo de software en Lima, Perú. Especialistas en páginas web, aplicaciones a medida, tiendas online, branding y SEO.",
    url: SITE_URL,
    logo: LOGO_URL,
    image: `${SITE_URL}/og-image.png`,
    telephone: "+51940549322",
    email: "ventas@websy.com.pe",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressRegion: "Lima",
      addressCountry: "PE",
    },
    geo: { "@type": "GeoCoordinates", latitude: -12.0464, longitude: -77.0428 },
    areaServed: [
      { "@type": "Country", name: "Perú" },
      { "@type": "City", name: "Lima" },
      { "@type": "AdministrativeArea", name: "Miraflores" },
      { "@type": "AdministrativeArea", name: "San Isidro" },
      { "@type": "AdministrativeArea", name: "Santiago de Surco" },
      { "@type": "AdministrativeArea", name: "San Borja" },
      { "@type": "AdministrativeArea", name: "La Molina" },
      { "@type": "AdministrativeArea", name: "Barranco" },
    ],
    knowsAbout: [
      "Diseño y desarrollo web",
      "Tiendas virtuales y ecommerce",
      "Software a medida",
      "SEO y posicionamiento web",
      "Google Ads",
      "Branding e identidad de marca",
      "Mantenimiento web",
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61580476667281",
      "https://www.instagram.com/websy.agencia_de_marketing/",
      "https://www.tiktok.com/@websy.agencia.de.mkt",
      "https://www.linkedin.com/company/websy-agencia-web/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Websy",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño y desarrollo web", url: `${SITE_URL}/diseno-de-paginas-web` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tiendas virtuales", url: `${SITE_URL}/tiendas-virtuales` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software a medida", url: `${SITE_URL}/desarrollo-de-software-a-medida` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO y posicionamiento web", url: `${SITE_URL}/seo` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads", url: `${SITE_URL}/google-ads` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding", url: `${SITE_URL}/branding` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mantenimiento web", url: `${SITE_URL}/mantenimiento-web` } },
      ],
    },
  };
}

/**
 * WebPage con SpeakableSpecification (GEO / asistentes de voz e IA).
 * cssSelector apunta al H1 y a la intro citable de la página.
 */
export function speakablePageSchema(path: string, cssSelector: string[]) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "es-PE",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path === "/" ? SITE_URL : `${SITE_URL}${it.path}`,
    })),
  };
}

export function servicesSchema() {
  // Sale de la misma lista que alimenta el menú, el pie y el sitemap, así que el
  // listado no se queda viejo cuando se añade un servicio. Antes eran cuatro
  // nombres escritos a mano, sin `url`, y uno de ellos ("Google Ads & SEO") ni
  // siquiera existía como página: son dos, /google-ads y /seo.
  const services = [...SERVICE_LINKS, ...RUBRO_LINKS];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios de Websy",
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}${s.href}`,
      item: {
        "@type": "Service",
        name: s.label,
        description: s.desc,
        url: `${SITE_URL}${s.href}`,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "Perú" },
      },
    })),
  };
}

/** Service individual de una landing (con la Organization como proveedor). */
export function serviceSchema({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}${slug}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Perú" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/cotizacion`,
    },
  };
}

/** FAQPage a partir de pares pregunta/respuesta — captura el long-tail e IA. */
/* Las respuestas se escriben con enlaces markdown, igual que el cuerpo. En el
   JSON-LD no puede salir la sintaxis: Google leería «[qué es un certificado
   SSL](/blog/...)» tal cual como respuesta. Se deja solo el texto del enlace. */
const sinMarkdown = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: sinMarkdown(f.a) },
    })),
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_URL}/nosotros`,
    name: "Nosotros — Websy",
    inLanguage: "es-PE",
    about: { "@id": ORG_ID },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contacto`,
    name: "Contacto — Websy",
    inLanguage: "es-PE",
    mainEntity: { "@id": ORG_ID },
  };
}

export function blogPostingSchema({
  slug,
  title,
  description,
  datePublished,
  dateModified,
  image,
}: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "es-PE",
    image: image ?? `${SITE_URL}/og-image.png`,
    author: { "@type": "Organization", "@id": ORG_ID, name: BLOG_AUTHOR, url: SITE_URL },
    publisher: { "@id": ORG_ID },
  };
}

/**
 * HowTo para artículos que son una guía real por pasos (secciones numeradas).
 * Se usa solo cuando el post es un "cómo…" genuinamente secuencial.
 */
export function howToSchema({
  name,
  description,
  url,
  steps,
}: {
  name: string;
  description: string;
  url: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    inLanguage: "es-PE",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/**
 * Listado del blog. Le dice a Google que /blog es el archivo del sitio y qué
 * artículos contiene, en vez de dejar que lo deduzca de los enlaces sueltos.
 * Solo declara los que ya existen en BLOG_POSTS: nada inventado.
 */
export function blogListSchema(
  posts: { slug: string; title: string; datePublished: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: "Blog de Websy",
    description:
      "Guías de diseño web, tiendas virtuales, software a medida y posicionamiento en Google para negocios en Perú.",
    inLanguage: "es-PE",
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.datePublished,
      author: { "@id": ORG_ID },
    })),
  };
}
