// lib/blog-cta.ts
//
// El puente entre leer y contratar.
//
// Medido en GA4 (ventana de 28 días cerrada el 1-sep-2026): el blog trajo 89
// sesiones y UN contacto (1,12%), mientras las páginas comerciales hicieron 36
// con 210 sesiones (17,14%). El contenido atrae y no cobra: el único enlace a
// la acción vivía al final del artículo, detrás de las preguntas frecuentes y
// de las tarjetas de «te puede servir», y hablaba de «tu proyecto» en abstracto.
//
// Aquí vive la otra mitad: a quién le hablamos según lo que acaba de leer.
// Un artículo sobre cobrar con Yape lleva a la tienda virtual, no a un
// formulario genérico. El texto nombra el servicio y la marca dentro del
// propio pasaje, que es también como lo citan los modelos de IA.

export type CtaServicio = {
  /** Encabezado del bloque: habla del problema del artículo, no de nosotros. */
  titulo: string;
  /** Dos líneas como mucho. Concreto y sin promesas que no podamos cumplir. */
  texto: string;
  /** Página de servicio a la que lleva. */
  href: string;
  /** Texto del botón principal. */
  boton: string;
  /** Lo que el visitante escribe en WhatsApp: llega ya clasificado. */
  whatsapp: string;
};

const TIENDA: CtaServicio = {
  titulo: "¿Quieres vender con una tienda que cobre de verdad?",
  texto:
    "En Websy montamos tiendas virtuales en Perú con Yape, Plin, Izipay y Niubiz ya integrados, panel para cargar productos y control de stock.",
  href: "/tiendas-virtuales",
  boton: "Ver tiendas virtuales",
  whatsapp: "Hola, quiero una tienda virtual que cobre con Yape y tarjeta.",
};

const SOFTWARE: CtaServicio = {
  titulo: "¿Tu operación ya no cabe en una hoja de cálculo?",
  texto:
    "Websy desarrolla software a medida en Perú: inventario, ventas, facturación y los procesos que hoy llevas a mano.",
  href: "/desarrollo-de-software-a-medida",
  boton: "Ver software a medida",
  whatsapp: "Hola, necesito un sistema a medida para mi negocio.",
};

const WEB: CtaServicio = {
  titulo: "¿Tu página web trae visitas y no clientes?",
  texto:
    "Websy diseña páginas web en Perú pensadas para que te escriban: rápidas, claras en el celular y con el contacto siempre a mano.",
  href: "/diseno-de-paginas-web",
  boton: "Ver diseño de páginas web",
  whatsapp: "Hola, quiero una página web que me traiga clientes.",
};

const SEO: CtaServicio = {
  titulo: "¿Quieres salir en Google sin pagar por cada clic?",
  texto:
    "El servicio de SEO de Websy trabaja las búsquedas que tu cliente hace en Perú, y te enseña cada mes qué se movió y por qué.",
  href: "/seo",
  boton: "Ver servicio de SEO",
  whatsapp: "Hola, quiero posicionar mi web en Google.",
};

const ADS: CtaServicio = {
  titulo: "¿Necesitas clientes esta semana, no en tres meses?",
  texto:
    "Websy gestiona campañas de Google Ads en Perú con la medición puesta desde el primer día: sabes cuánto cuesta cada contacto real.",
  href: "/google-ads",
  boton: "Ver campañas de Google Ads",
  whatsapp: "Hola, quiero campañas de Google Ads para mi negocio.",
};

/**
 * Categoría del artículo → servicio del que hay que hablarle.
 *
 * Las claves se comparan en minúsculas y sin acentos, así que una categoría
 * nueva escrita «SEO local» o «Seo Local» sigue cayendo en su sitio.
 */
const POR_CATEGORIA: Record<string, CtaServicio> = {
  ecommerce: TIENDA,
  "tiendas virtuales": TIENDA,
  pagos: TIENDA,
  software: SOFTWARE,
  sistemas: SOFTWARE,
  "diseno web": WEB,
  web: WEB,
  "paginas web": WEB,
  "agencia web": WEB,
  branding: WEB,
  seo: SEO,
  "seo local": SEO,
  marketing: ADS,
  "marketing digital": ADS,
};

function normalizar(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

/**
 * El servicio que le toca a un artículo. Si la categoría no está en el mapa
 * —porque mañana alguien inventa una— cae en diseño web, que es la puerta de
 * entrada más ancha de Websy, en vez de quedarse sin puente.
 */
export function ctaDelPost(categoria: string, slug?: string): CtaServicio {
  /* Un puñado de artículos hablan de un servicio distinto al de su categoría.
     Mandan ellos: la categoría es para ordenar el blog, no para vender. */
  const porSlug: Record<string, CtaServicio> = {
    "como-aparecer-en-google-con-tu-pagina-web": SEO,
    "como-hacer-que-tu-pagina-web-aparezca-en-google-peru": SEO,
    "google-ads-vs-seo-cual-conviene-para-tu-negocio": ADS,
    "palabras-clave-negativas-en-google-ads": ADS,
    "google-ads-para-pymes-en-peru-cuanto-invertir": ADS,
  };
  if (slug && porSlug[slug]) return porSlug[slug];
  return POR_CATEGORIA[normalizar(categoria)] ?? WEB;
}

/** El enlace de WhatsApp del bloque. El modal del sitio lo intercepta y guarda
 *  nombre y teléfono ANTES de salir, así que el contacto es de Websy aunque la
 *  persona no llegue a escribir en el chat. */
export function waHref(mensaje: string): string {
  return `https://wa.me/51940549322?text=${encodeURIComponent(mensaje)}`;
}
