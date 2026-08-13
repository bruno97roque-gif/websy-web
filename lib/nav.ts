// lib/nav.ts
// Data plana de navegación — la consumen el menú (client), el footer (server)
// y el sitemap. Una sola fuente para el enlazado por silo.

export type NavLink = {
  label: string;
  href: string;
  /** Frase de una línea para /llms.txt. El menú y el pie la ignoran. */
  desc?: string;
};

/** Pilares y landings de servicio (silo de dinero). */
export const SERVICE_LINKS: NavLink[] = [
  { label: "Tiendas Virtuales", href: "/tiendas-virtuales", desc: "desarrollo de tiendas online autoadministrables con pasarela de pago (Yape, Plin, Niubiz, Izipay) y control de stock." },
  { label: "Tiendas Shopify", href: "/tiendas-virtuales/shopify", desc: "tiendas sobre Shopify, listas para vender rápido con pagos locales." },
  { label: "Migrar a Shopify", href: "/tiendas-virtuales/shopify/migracion", desc: "migración a Shopify desde WooCommerce, Wix o Tiendanube conservando productos, clientes y posicionamiento." },
  { label: "Costos de una Tienda Shopify", href: "/tiendas-virtuales/shopify/costos", desc: "qué define el precio de una tienda Shopify en Perú y qué costos recurrentes se suman cada mes." },
  { label: "Tiendas WooCommerce", href: "/tiendas-virtuales/woocommerce", desc: "tiendas sobre WordPress, sin mensualidad de plataforma y 100% del cliente." },
  { label: "Desarrollo Web", href: "/desarrollo-web", desc: "agencia de desarrollo web en Lima: páginas, tiendas y sistemas a medida, administrables y optimizados para Google." },
  { label: "Diseño de Páginas Web", href: "/diseno-de-paginas-web", desc: "páginas web profesionales, responsive y optimizadas para captar clientes." },
  { label: "Software a Medida", href: "/desarrollo-de-software-a-medida", desc: "sistemas y plataformas hechos a la medida de los procesos del negocio." },
  { label: "Sistema de Inventario", href: "/sistemas/inventario", desc: "sistema de inventario y almacén a medida: stock en tiempo real, kardex y alertas de quiebre." },
  { label: "Sistema de Ventas y Facturación", href: "/sistemas/ventas-y-facturacion", desc: "sistema de ventas y facturación con comprobantes electrónicos y control de caja." },
  { label: "Sistema de Gestión (ERP / CRM)", href: "/sistemas/gestion-erp-crm", desc: "sistema de gestión tipo ERP o CRM a medida para ordenar clientes, procesos y reportes." },
  { label: "SEO y Posicionamiento", href: "/seo", desc: "SEO técnico, on-page, de contenidos y local para aparecer en Google sin pagar por cada clic." },
  { label: "Google Ads", href: "/google-ads", desc: "gestión de campañas de Google Ads en Perú orientadas a clientes y retorno." },
  { label: "Branding", href: "/branding", desc: "identidad de marca, logotipo, manual de marca y aplicaciones." },
  { label: "Mantenimiento Web", href: "/mantenimiento-web", desc: "soporte, actualizaciones, seguridad y mejoras continuas de tu sitio." },
  { label: "Precios", href: "/precios", desc: "qué define el precio de una página web, tienda virtual o software en Perú y qué incluye cada servicio." },
];

/** Landings de diseño web por rubro (hijas del pilar /diseno-de-paginas-web). */
export const RUBRO_LINKS: NavLink[] = [
  { label: "Web para Restaurantes", href: "/diseno-de-paginas-web/restaurantes", desc: "webs con carta digital, reservas y pedidos, con pagos Yape/Plin." },
  { label: "Web para Clínicas", href: "/diseno-de-paginas-web/clinicas", desc: "sitios con citas, servicios y confianza para pacientes." },
  { label: "Web para Abogados", href: "/diseno-de-paginas-web/abogados", desc: "webs profesionales que transmiten autoridad y captan casos." },
  { label: "Web para Inmobiliarias", href: "/diseno-de-paginas-web/inmobiliarias", desc: "catálogos de propiedades y proyectos con captación de leads." },
  { label: "Web para Gimnasios", href: "/diseno-de-paginas-web/gimnasios", desc: "planes, horarios e inscripciones para captar socios." },
  { label: "Web para Colegios", href: "/diseno-de-paginas-web/colegios", desc: "sitios institucionales con admisión e información para familias." },
  { label: "Web para Hoteles", href: "/diseno-de-paginas-web/hoteles", desc: "webs con reservas y pagos para aumentar ocupación directa." },
];

/** Navegación principal (menú fullscreen). Etiquetas cortas: el menú usa tipografía
    muy grande y los textos largos romperían el layout en móvil. */
export const MAIN_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Tiendas", href: "/tiendas-virtuales" },
  { label: "Web", href: "/diseno-de-paginas-web" },
  { label: "Software", href: "/desarrollo-de-software-a-medida" },
  { label: "Precios", href: "/precios" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export type SitemapEntry = {
  path: string;
  priority: number;
  lastModified: string;
  /** Solo cuando la cadencia real no se deduce de la prioridad (p. ej. el índice del blog). */
  changeFrequency?: "weekly" | "monthly" | "yearly";
};

/**
 * IMPORTANTE — `lastModified` se escribe A MANO, con la fecha real (YYYY-MM-DD) en que
 * cambió el contenido de esa página. NO usar `new Date()` aquí ni en app/sitemap.ts.
 *
 * Por qué: hasta el 11-ago-2026 el sitemap generaba la fecha en cada petición, así que
 * las 31 URLs estáticas declaraban "modificada hace un segundo" cada vez que Google
 * descargaba el archivo. Comprobado el 11-ago con dos descargas separadas 32 minutos:
 * la fecha había cambiado en ambas. Cuando el lastmod nunca coincide con un cambio real,
 * Google deja de fiarse de él y de usarlo para priorizar el rastreo del sitio entero.
 * El resultado se veía en Search Console: 24 de 97 URLs sin rastrear nunca, y una sola
 * página rastreada en los primeros 11 días de agosto.
 *
 * Regla al editar una página: sube su fecha aquí, y solo esa.
 */
export const SERVICE_SITEMAP: SitemapEntry[] = [
  { path: "/tiendas-virtuales", priority: 0.9, lastModified: "2026-08-11" },
  { path: "/tiendas-virtuales/shopify", priority: 0.9, lastModified: "2026-07-31" },
  { path: "/tiendas-virtuales/shopify/migracion", priority: 0.8, lastModified: "2026-07-31" },
  { path: "/tiendas-virtuales/shopify/costos", priority: 0.8, lastModified: "2026-08-11" },
  { path: "/tiendas-virtuales/woocommerce", priority: 0.7, lastModified: "2026-07-31" },
  { path: "/desarrollo-web", priority: 0.9, lastModified: "2026-08-12" },
  { path: "/diseno-de-paginas-web", priority: 0.9, lastModified: "2026-08-11" },
  { path: "/desarrollo-de-software-a-medida", priority: 0.8, lastModified: "2026-08-11" },
  // Silo de software por tipo de sistema (hijas de /desarrollo-de-software-a-medida).
  { path: "/sistemas/inventario", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/sistemas/ventas-y-facturacion", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/sistemas/gestion-erp-crm", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/precios", priority: 0.9, lastModified: "2026-08-11" },
  { path: "/cotizacion", priority: 0.8, lastModified: "2026-07-31" },
  // Nuevos pilares de servicio.
  { path: "/seo", priority: 0.9, lastModified: "2026-08-11" },
  { path: "/google-ads", priority: 0.9, lastModified: "2026-08-12" },
  { path: "/branding", priority: 0.9, lastModified: "2026-07-31" },
  { path: "/mantenimiento-web", priority: 0.9, lastModified: "2026-07-31" },
  // Silo de diseño web por rubro (hijas de /diseno-de-paginas-web).
  { path: "/diseno-de-paginas-web/restaurantes", priority: 0.8, lastModified: "2026-07-31" },
  { path: "/diseno-de-paginas-web/clinicas", priority: 0.8, lastModified: "2026-07-31" },
  { path: "/diseno-de-paginas-web/abogados", priority: 0.8, lastModified: "2026-08-11" },
  { path: "/diseno-de-paginas-web/inmobiliarias", priority: 0.8, lastModified: "2026-07-31" },
  { path: "/diseno-de-paginas-web/gimnasios", priority: 0.8, lastModified: "2026-07-31" },
  { path: "/diseno-de-paginas-web/colegios", priority: 0.8, lastModified: "2026-07-31" },
  { path: "/diseno-de-paginas-web/hoteles", priority: 0.8, lastModified: "2026-07-31" },
];

/** Páginas fijas (institucionales). Misma regla de `lastModified` que arriba. */
export const FIXED_SITEMAP: SitemapEntry[] = [
  { path: "", priority: 1, lastModified: "2026-08-12" },
  { path: "/servicios", priority: 0.7, lastModified: "2026-08-12" },
  { path: "/nosotros", priority: 0.6, lastModified: "2026-07-31" },
  { path: "/contacto", priority: 0.6, lastModified: "2026-08-11" },
  { path: "/blog", priority: 0.7, lastModified: "2026-08-11", changeFrequency: "weekly" },
  { path: "/terminos", priority: 0.3, lastModified: "2026-03-06" },
  { path: "/politicas-de-privacidad", priority: 0.3, lastModified: "2026-03-06" },
];
