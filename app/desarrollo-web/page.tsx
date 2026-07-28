import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/desarrollo-web",
  title: "Agencia de Desarrollo Web en Lima, Perú: webs que venden",
  description:
    "Agencia de desarrollo web en Lima, Perú. Creamos páginas web, tiendas virtuales y sistemas web a medida: administrables, responsive y optimizadas para Google, con soporte directo por WhatsApp. Cotiza gratis en 24 h.",
});

export default function DesarrolloWebPage() {
  return (
    <ServiceLanding
      slug="/desarrollo-web"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Desarrollo Web", path: "/desarrollo-web" },
      ]}
      eyebrow="Agencia de desarrollo web"
      h1="Agencia de Desarrollo Web en Lima, Perú"
      intro="Websy es una agencia de desarrollo web en Lima que crea páginas web, tiendas virtuales y sistemas a medida para empresas de todo el Perú. Diseñamos, desarrollamos y optimizamos tu web para Google, la entregamos administrable y te acompañamos después del lanzamiento con soporte directo por WhatsApp."
      highlights={["Páginas web", "Tiendas virtuales", "Sistemas web", "SEO on-page", "Soporte por WhatsApp"]}
      stats={[
        { value: "A medida", label: "Diseño alineado a tu marca y a tu objetivo" },
        { value: "Responsive", label: "Perfecta en celular, tablet y computadora" },
        { value: "SEO", label: "Optimizada para Google desde el primer día" },
        { value: "24 h", label: "Cotización gratis en menos de un día" },
      ]}
      sections={[
        {
          h2: "Desarrollo web para empresas en Lima y todo el Perú",
          body:
            "Una web bien desarrollada no es un gasto: es tu vendedor disponible las 24 horas. En Websy desarrollamos webs pensadas para el mercado peruano, con lo que tu cliente espera encontrar: información clara, contacto por WhatsApp, y la confianza de una presencia profesional. Trabajamos con empresas de Lima y de todo el Perú, de forma presencial o remota, con alcance y tiempos definidos por escrito antes de empezar.",
        },
        {
          h2: "Páginas, tiendas y sistemas: un solo equipo",
          body:
            "No todos los proyectos necesitan lo mismo. Según tu objetivo, desarrollamos la solución correcta: una página web corporativa para captar contactos, una tienda virtual para vender online con pagos locales, o un sistema web a medida para automatizar tu operación. Al ser un solo equipo, tu web puede crecer: empezar como página, sumar tienda y terminar integrada con tu sistema, sin cambiar de proveedor.",
          bullets: [
            "Páginas web corporativas y de servicios que captan contactos.",
            "Tiendas virtuales con Shopify o WooCommerce y pagos locales (Yape, Plin, tarjeta).",
            "Sistemas web a medida: ventas, inventario, facturación y gestión.",
            "Landing pages para campañas de Google Ads o redes.",
          ],
        },
        {
          h2: "Qué incluye tu página web",
          body:
            "Cada proyecto se cotiza a medida, pero hay cosas que en Websy no se negocian: tu web se entrega administrable (editas tú el contenido), responsive, con formulario y botón de WhatsApp para que te lleguen clientes, optimizada para SEO desde el primer día, y con hosting, dominio y certificado SSL resueltos. Además, el dominio y los accesos quedan a tu nombre: el proyecto es tuyo.",
          bullets: [
            "Diseño a medida, responsive y alineado a tu marca.",
            "Página administrable: editas textos, fotos y contenido tú mismo.",
            "Formulario de contacto y botón de WhatsApp integrados.",
            "SEO on-page para aparecer en Google desde el lanzamiento.",
            "Hosting, dominio y certificado SSL incluidos y a tu nombre.",
          ],
        },
        {
          h2: "Cómo trabajamos: del diagnóstico al lanzamiento",
          body:
            "Un desarrollo serio empieza por entender tu negocio, no por vender una plantilla. Primero hacemos un diagnóstico corto de lo que necesitas y te enviamos una propuesta con alcance y tiempos claros en menos de 24 horas. Luego diseñamos, desarrollamos y revisamos contigo antes de lanzar. Después del lanzamiento no desaparecemos: te capacitamos para administrar tu web y seguimos disponibles para soporte y mejoras.",
          bullets: [
            "Diagnóstico y propuesta con alcance y tiempos por escrito.",
            "Diseño y desarrollo con revisiones contigo.",
            "Lanzamiento con SEO, medición y WhatsApp configurados.",
            "Capacitación y soporte después de publicar.",
          ],
        },
        {
          h2: "Desarrollo web optimizado para Google desde el día uno",
          body:
            "De nada sirve una web bonita que nadie encuentra. Por eso todo lo que desarrollamos sale optimizado para buscadores: estructura correcta de títulos y encabezados, velocidad de carga, versión móvil impecable y contenido pensado para lo que tu cliente busca en Google. Si además quieres trabajar el posicionamiento de forma continua o acelerar con publicidad, el mismo equipo gestiona tu SEO y tus campañas de Google Ads.",
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Webs corporativas profesionales, administrables y optimizadas." },
        { label: "Tiendas virtuales", href: "/tiendas-virtuales", desc: "Vende online con Shopify o WooCommerce y pagos locales." },
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Sistemas web hechos para tu operación: ventas, stock, gestión." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu proyecto y cómo cotizarlo gratis." },
      ]}
      articles={[
        { label: "Cómo elegir una agencia de desarrollo web en Perú", href: "/blog/como-elegir-una-agencia-de-desarrollo-web-en-peru", desc: "Qué revisar, qué preguntar y qué señales de alerta mirar." },
        { label: "Cuánto cuesta una página web en Perú", href: "/blog/cuanto-cuesta-una-pagina-web-en-peru", desc: "De qué depende el precio y qué debe incluir tu inversión." },
        { label: "Página web, sistema web y software a medida", href: "/blog/pagina-web-sistema-web-y-software-a-medida", desc: "Qué es cada uno y cuál necesita tu negocio hoy." },
      ]}
      faqs={[
        {
          q: "¿Qué incluye el desarrollo de una página web con Websy?",
          a: "Diseño a medida y responsive, página administrable para que edites tu contenido, formulario y botón de WhatsApp, optimización SEO on-page, y hosting, dominio y certificado SSL. Todo con capacitación y soporte después del lanzamiento.",
        },
        {
          q: "¿Cuánto cuesta desarrollar una página web?",
          a: "Depende del alcance: número de secciones, contenido y funciones (blog, reservas, tienda, integraciones). Por eso no damos un precio cerrado sin entender tu negocio: te enviamos una cotización gratuita y a medida en menos de 24 horas, con alcance y tiempos por escrito.",
        },
        {
          q: "¿La web queda a mi nombre y puedo administrarla yo?",
          a: "Sí. El dominio y los accesos quedan a tu nombre o al de tu empresa, y la web se entrega administrable: te capacitamos para que cambies textos, fotos y contenido sin depender de nadie.",
        },
        {
          q: "¿Trabajan con empresas fuera de Lima?",
          a: "Sí. Atendemos empresas de todo el Perú de forma remota, con coordinación por WhatsApp y videollamada. El proceso es el mismo: diagnóstico, propuesta por escrito, desarrollo con revisiones y soporte tras el lanzamiento.",
        },
        {
          q: "¿Desarrollan también tiendas virtuales y sistemas?",
          a: "Sí. Además de páginas web corporativas, desarrollamos tiendas virtuales con Shopify o WooCommerce (con Yape, Plin y pagos con tarjeta) y sistemas web a medida para ventas, inventario, facturación y gestión.",
        },
        {
          q: "¿La web sale optimizada para Google?",
          a: "Sí. Toda web que desarrollamos incluye SEO on-page desde el primer día: estructura correcta, velocidad, versión móvil y contenido orientado a lo que busca tu cliente. Si quieres ir más allá, también ofrecemos servicio de SEO continuo y gestión de Google Ads.",
        },
      ]}
      serviceName="Desarrollo web"
      serviceDescription="Desarrollo web en Lima, Perú: páginas web corporativas, tiendas virtuales y sistemas web a medida, administrables, responsive y optimizadas para Google, con soporte local por WhatsApp."
    />
  );
}
