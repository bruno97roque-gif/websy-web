import { SITE_URL, SITE_NAME } from "@/lib/seo";

/* ─────────────────────────────────────────────────────────────
   Builders de JSON-LD (Schema.org).
   - logo apunta a /icons/logo-dark.webp (asset real). Antes /images/logo-websy-dark.png → 404.
   - Se añaden tipos que faltaban: WebSite, BreadcrumbList y schema por página.
───────────────────────────────────────────────────────────── */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/icons/logo-dark.webp`;

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
    areaServed: { "@type": "Country", name: "Perú" },
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
      "https://www.instagram.com/websy.pe",
      "https://www.facebook.com/websy.pe",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Websy",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño Web" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tienda Virtual" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads & SEO" } },
      ],
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
  const services = [
    { name: "Branding", desc: "Identidad de marca, logotipo y manual visual." },
    { name: "Diseño y Desarrollo Web", desc: "Páginas web a medida, rápidas y optimizadas." },
    { name: "Tiendas Online", desc: "E-commerce listo para vender con pasarela de pago." },
    { name: "Google Ads & SEO", desc: "Posicionamiento y campañas para captar clientes." },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios de Websy",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.name,
        description: s.desc,
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
export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
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
    author: { "@id": ORG_ID, name: SITE_NAME },
    publisher: { "@id": ORG_ID },
  };
}
