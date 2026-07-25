// lib/nav.ts
// Data plana de navegación — la consumen el menú (client), el footer (server)
// y el sitemap. Una sola fuente para el enlazado por silo.

export type NavLink = { label: string; href: string };

/** Pilares y landings de servicio (silo de dinero). */
export const SERVICE_LINKS: NavLink[] = [
  { label: "Tiendas Virtuales", href: "/tiendas-virtuales" },
  { label: "Tiendas Shopify", href: "/tiendas-virtuales/shopify" },
  { label: "Migrar a Shopify", href: "/tiendas-virtuales/shopify/migracion" },
  { label: "Costos de una Tienda Shopify", href: "/tiendas-virtuales/shopify/costos" },
  { label: "Tiendas WooCommerce", href: "/tiendas-virtuales/woocommerce" },
  { label: "Diseño de Páginas Web", href: "/diseno-de-paginas-web" },
  { label: "Software a Medida", href: "/desarrollo-de-software-a-medida" },
  { label: "Sistema de Inventario", href: "/sistemas/inventario" },
  { label: "Sistema de Ventas y Facturación", href: "/sistemas/ventas-y-facturacion" },
  { label: "Sistema de Gestión (ERP / CRM)", href: "/sistemas/gestion-erp-crm" },
  { label: "SEO y Posicionamiento", href: "/seo" },
  { label: "Google Ads", href: "/google-ads" },
  { label: "Branding", href: "/branding" },
  { label: "Mantenimiento Web", href: "/mantenimiento-web" },
  { label: "Precios", href: "/precios" },
];

/** Landings de diseño web por rubro (hijas del pilar /diseno-de-paginas-web). */
export const RUBRO_LINKS: NavLink[] = [
  { label: "Web para Restaurantes", href: "/diseno-de-paginas-web/restaurantes" },
  { label: "Web para Clínicas", href: "/diseno-de-paginas-web/clinicas" },
  { label: "Web para Abogados", href: "/diseno-de-paginas-web/abogados" },
  { label: "Web para Inmobiliarias", href: "/diseno-de-paginas-web/inmobiliarias" },
  { label: "Web para Gimnasios", href: "/diseno-de-paginas-web/gimnasios" },
  { label: "Web para Colegios", href: "/diseno-de-paginas-web/colegios" },
  { label: "Web para Hoteles", href: "/diseno-de-paginas-web/hoteles" },
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

/** URLs nuevas de esta ola, para el sitemap. */
export const SERVICE_SITEMAP: { path: string; priority: number }[] = [
  { path: "/tiendas-virtuales", priority: 0.9 },
  { path: "/tiendas-virtuales/shopify", priority: 0.9 },
  { path: "/tiendas-virtuales/shopify/migracion", priority: 0.8 },
  { path: "/tiendas-virtuales/shopify/costos", priority: 0.8 },
  { path: "/tiendas-virtuales/woocommerce", priority: 0.7 },
  { path: "/diseno-de-paginas-web", priority: 0.9 },
  { path: "/desarrollo-de-software-a-medida", priority: 0.8 },
  // Silo de software por tipo de sistema (hijas de /desarrollo-de-software-a-medida).
  { path: "/sistemas/inventario", priority: 0.8 },
  { path: "/sistemas/ventas-y-facturacion", priority: 0.8 },
  { path: "/sistemas/gestion-erp-crm", priority: 0.8 },
  { path: "/precios", priority: 0.9 },
  { path: "/cotizacion", priority: 0.8 },
  // Nuevos pilares de servicio.
  { path: "/seo", priority: 0.9 },
  { path: "/google-ads", priority: 0.9 },
  { path: "/branding", priority: 0.9 },
  { path: "/mantenimiento-web", priority: 0.9 },
  // Silo de diseño web por rubro (hijas de /diseno-de-paginas-web).
  { path: "/diseno-de-paginas-web/restaurantes", priority: 0.8 },
  { path: "/diseno-de-paginas-web/clinicas", priority: 0.8 },
  { path: "/diseno-de-paginas-web/abogados", priority: 0.8 },
  { path: "/diseno-de-paginas-web/inmobiliarias", priority: 0.8 },
  { path: "/diseno-de-paginas-web/gimnasios", priority: 0.8 },
  { path: "/diseno-de-paginas-web/colegios", priority: 0.8 },
  { path: "/diseno-de-paginas-web/hoteles", priority: 0.8 },
];
