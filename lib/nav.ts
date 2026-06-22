// lib/nav.ts
// Data plana de navegación — la consumen el menú (client), el footer (server)
// y el sitemap. Una sola fuente para el enlazado por silo.

export type NavLink = { label: string; href: string };

/** Pilares y landings de servicio (silo de dinero). */
export const SERVICE_LINKS: NavLink[] = [
  { label: "Tiendas Virtuales", href: "/tiendas-virtuales" },
  { label: "Tiendas Shopify", href: "/tiendas-virtuales/shopify" },
  { label: "Tiendas WooCommerce", href: "/tiendas-virtuales/woocommerce" },
  { label: "Diseño de Páginas Web", href: "/diseno-de-paginas-web" },
  { label: "Software a Medida", href: "/desarrollo-de-software-a-medida" },
  { label: "Sistema de Inventario", href: "/sistemas/inventario" },
  { label: "Ventas y Facturación", href: "/sistemas/ventas-y-facturacion" },
  { label: "ERP y CRM", href: "/sistemas/gestion-erp-crm" },
  { label: "Posicionamiento SEO", href: "/posicionamiento-seo" },
  { label: "Branding y UX/UI", href: "/branding-y-diseno-ux-ui" },
  { label: "Mantenimiento Web", href: "/mantenimiento-y-soporte-web" },
];

/** Navegación principal (menú fullscreen). Etiquetas cortas: el menú usa tipografía
    muy grande y los textos largos romperían el layout en móvil. */
export const MAIN_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Tiendas", href: "/tiendas-virtuales" },
  { label: "Web", href: "/diseno-de-paginas-web" },
  { label: "Software", href: "/desarrollo-de-software-a-medida" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

/** URLs de las landings de servicio, para el sitemap. */
export const SERVICE_SITEMAP: { path: string; priority: number }[] = [
  { path: "/tiendas-virtuales", priority: 0.9 },
  { path: "/tiendas-virtuales/shopify", priority: 0.7 },
  { path: "/tiendas-virtuales/woocommerce", priority: 0.7 },
  { path: "/diseno-de-paginas-web", priority: 0.9 },
  { path: "/desarrollo-de-software-a-medida", priority: 0.8 },
  { path: "/sistemas/inventario", priority: 0.7 },
  { path: "/sistemas/ventas-y-facturacion", priority: 0.7 },
  { path: "/sistemas/gestion-erp-crm", priority: 0.7 },
  { path: "/posicionamiento-seo", priority: 0.7 },
  { path: "/branding-y-diseno-ux-ui", priority: 0.7 },
  { path: "/mantenimiento-y-soporte-web", priority: 0.7 },
  { path: "/cotizacion", priority: 0.8 },
];
