import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/tiendas-virtuales/shopify",
  title: "Agencia Shopify Perú: tiendas hechas para vender",
  description:
    "Agencia Shopify en Perú: creamos tu tienda Shopify optimizada para vender, con velocidad, SEO, CRO y pagos locales (Yape, Plin, Niubiz, Izipay). Desarrollo, migración y soporte. Cotiza en 24 h.",
});

export default function ShopifyPage() {
  return (
    <ServiceLanding
      slug="/tiendas-virtuales/shopify"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Tiendas Virtuales", path: "/tiendas-virtuales" },
        { name: "Shopify", path: "/tiendas-virtuales/shopify" },
      ]}
      eyebrow="Agencia Shopify · Perú"
      h1="Agencia Shopify en Perú: tiendas optimizadas para vender"
      intro="Somos una agencia especialista en Shopify en Perú: creamos tu tienda Shopify optimizada para vender de verdad, con velocidad de carga, SEO técnico, conversión (CRO) y pagos locales en soles —Yape, Plin, Niubiz e Izipay—. La entregamos autoadministrable y con soporte, para que lances rápido y crezcas sin fricción."
      highlights={["Optimizada para vender", "Velocidad + SEO", "Yape · Plin · Niubiz · Izipay", "Autoadministrable", "Migración incluida", "Soporte local"]}
      stats={[
        { value: "CRO", label: "Diseñada para convertir, no solo para verse" },
        { value: "Soles", label: "Pagos locales y tarjeta desde el día 1" },
        { value: "SEO", label: "Rápida y lista para posicionar en Google" },
        { value: "24 h", label: "Respuesta a tu cotización" },
      ]}
      sections={[
        {
          h2: "Por qué elegir Shopify para tu negocio en Perú",
          body:
            "Shopify es la plataforma de ecommerce líder porque resuelve por ti lo técnico: hosting, seguridad, actualizaciones y una infraestructura que aguanta desde tus primeras ventas hasta miles de pedidos en campaña. Tú te concentras en vender; la plataforma se encarga de que la tienda esté siempre en línea y segura.",
          bullets: [
            "Plataforma robusta y segura: sin preocuparte por servidores ni mantenimiento técnico.",
            "Escala contigo: soporta picos de tráfico (Cyber, Navidad) sin caerse.",
            "Panel simple: administras productos, precios y pedidos sin saber programar.",
            "Ecosistema de apps para sumar funciones cuando de verdad las necesites.",
          ],
        },
        {
          h2: "Qué incluye tu tienda Shopify con Websy",
          body:
            "No montamos una plantilla genérica con 20 apps que la vuelven lenta. Te entregamos una tienda Shopify completa, a tu marca y lista para vender, con todo lo esencial configurado desde el inicio.",
          bullets: [
            "Diseño de tienda Shopify personalizado a tu identidad de marca (sin plantilla genérica).",
            "Carga y organización de productos, colecciones, variantes (talla, color) y buscador.",
            "Pagos locales para Perú: Yape, Plin, tarjeta con Niubiz o Izipay y transferencia.",
            "Reglas de envío por zona, impuestos y notificaciones automáticas al cliente.",
            "SEO on-page de fichas y categorías + estructura optimizada para Google.",
            "Capacitación para que administres tu tienda tú mismo.",
          ],
        },
        {
          h2: "Tiendas Shopify optimizadas para vender: velocidad, SEO y CRO",
          body:
            "Una tienda bonita que carga lento o que no aparece en Google no vende. Ahí está nuestra diferencia frente a armar la tienda tú solo o con una plantilla: optimizamos los tres frentes que deciden tus ventas.",
          bullets: [
            "Velocidad: tema ligero, imágenes optimizadas y apps mínimas para que cargue en segundos y no pierdas ventas ni ranking.",
            "SEO: fichas y categorías optimizadas, datos estructurados y una arquitectura que Google entiende y posiciona.",
            "CRO (conversión): fichas claras, checkout corto, confianza visible (envíos, políticas, pagos) y llamados a la acción que convierten visitas en compras.",
          ],
        },
        {
          h2: "Pagos locales: Yape, Plin, Niubiz e Izipay",
          body:
            "En Perú una tienda vende cuando acepta los medios que la gente ya usa. Configuramos las pasarelas locales para que el cliente pague como está acostumbrado y no abandone el carrito por no encontrar su método de pago.",
          bullets: [
            "Yape y Plin para pagos inmediatos, la forma más familiar de pagar en Perú.",
            "Tarjeta de crédito y débito vía Niubiz o Izipay, con cobros seguros y automáticos.",
            "Transferencia y pago contra entrega según tu operación.",
            "Checkout corto y confirmación automática por correo y WhatsApp.",
          ],
        },
        {
          h2: "Tiendas Shopify por rubro",
          body:
            "Adaptamos la tienda a cómo vende tu negocio. El manejo de variantes, las fotos, los envíos y la política de cambios cambian según el rubro, y lo configuramos a tu medida.",
          bullets: [
            "Ropa y moda: variantes de talla y color, tabla de tallas y política de cambios clara.",
            "Belleza y cosmética: catálogo por línea de producto, kits y fichas que generan confianza.",
            "Productos para el hogar, deco y regalos: colecciones ordenadas y buscador ágil.",
            "Pymes que empiezan a vender online: tienda lista para lanzar y crecer por etapas.",
          ],
        },
        {
          h2: "Nuestro proceso, paso a paso",
          body:
            "Un proyecto ordenado se entrega rápido y sin retrocesos. Así trabajamos tu tienda Shopify de principio a fin:",
          bullets: [
            "1. Diagnóstico: entendemos qué vendes, cuántos productos y cómo cobras.",
            "2. Diseño: propuesta visual a tu marca y aprobación.",
            "3. Desarrollo: montamos la tienda, cargamos productos y configuramos pagos y envíos.",
            "4. Optimización: velocidad, SEO on-page y ajustes de conversión (CRO).",
            "5. Lanzamiento y capacitación: publicamos y te enseñamos a administrarla.",
          ],
        },
        {
          h2: "¿Ya tienes una tienda? La migramos a Shopify",
          body:
            "Si vienes de WooCommerce, Wix, Tiendanube u otra plataforma —o de una tienda Shopify mal armada— la migramos sin perder tu posicionamiento en Google: conservamos tus productos, tus clientes y tu SEO, y rediseñamos para que cargue rápido y convierta más. Mira los detalles en nuestra página de migración a Shopify.",
        },
        {
          h2: "Cuánto cuesta y cómo cotizar",
          body:
            "Además del plan mensual de Shopify, el desarrollo se cotiza según el diseño, la cantidad de productos y las integraciones. No damos un precio cerrado sin entender tu negocio: preparamos una propuesta a medida, clara y sin sorpresas. Revisa qué define el precio en nuestra guía de costos de una tienda Shopify o mira nuestros precios y pide tu cotización gratis.",
        },
      ]}
      related={[
        { label: "Migrar a Shopify en Perú", href: "/tiendas-virtuales/shopify/migracion", desc: "Cambia a Shopify desde WooCommerce, Wix o Tiendanube sin perder tu SEO." },
        { label: "Cuánto cuesta una tienda Shopify", href: "/tiendas-virtuales/shopify/costos", desc: "Qué define el precio, planes, rangos referenciales y costos recurrentes." },
        { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Mira todo lo que incluye nuestro servicio de ecommerce." },
        { label: "Tiendas WooCommerce", href: "/tiendas-virtuales/woocommerce", desc: "¿Prefieres WordPress sin mensualidad? Compara la otra opción." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu tienda y cómo pedir tu cotización gratis." },
      ]}
      articles={[
        { label: "Cómo crear una tienda Shopify en Perú", href: "/blog/como-crear-una-tienda-shopify-en-peru-paso-a-paso", desc: "La guía paso a paso para montar tu tienda desde cero." },
        { label: "Cuánto cuesta una tienda en Shopify", href: "/blog/cuanto-cuesta-una-tienda-en-shopify", desc: "Planes, desarrollo y comisiones: en qué inviertes realmente." },
        { label: "Shopify vs WooCommerce", href: "/blog/shopify-vs-woocommerce", desc: "Cuál conviene según tu negocio, presupuesto y forma de vender." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta crear una tienda Shopify en Perú?",
          a: "Además del plan mensual de Shopify, el desarrollo se cotiza según el diseño, la cantidad de productos y las integraciones. Te preparamos una propuesta a medida sin costo en menos de 24 horas. Puedes ver qué define el precio en nuestra guía de costos de una tienda Shopify.",
        },
        {
          q: "¿Shopify acepta Yape, Plin y tarjetas en Perú?",
          a: "Sí. Configuramos los medios de pago locales (Yape, Plin), tarjeta de crédito y débito vía Niubiz o Izipay, y transferencia, para que tus clientes paguen como ya están acostumbrados.",
        },
        {
          q: "¿En qué se diferencia una tienda Shopify de Websy de una que armo yo mismo?",
          a: "Entregamos una tienda optimizada para vender: rápida, con SEO técnico y pensada para convertir (CRO), no una plantilla genérica llena de apps que la vuelven lenta. Además configuramos pagos locales, te capacitamos y te damos soporte.",
        },
        {
          q: "¿Pueden migrar mi tienda actual a Shopify sin perder posicionamiento?",
          a: "Sí. Migramos desde WooCommerce, Wix, Tiendanube u otra plataforma conservando tus productos, clientes y SEO, con redirecciones para no perder tu ranking en Google. Mira el detalle en nuestra página de migración a Shopify.",
        },
        {
          q: "¿Puedo administrar la tienda yo mismo?",
          a: "Totalmente. Shopify tiene un panel muy amigable y te capacitamos para que subas productos, cambies precios y gestiones pedidos sin depender de nosotros.",
        },
        {
          q: "¿Cuánto demora tener lista mi tienda Shopify?",
          a: "Una tienda estándar suele estar lista en 3 a 5 semanas, según la cantidad de productos e integraciones. Tras el diagnóstico te damos un plazo concreto.",
        },
      ]}
      serviceName="Agencia Shopify: creación de tiendas Shopify optimizadas"
      serviceDescription="Agencia especialista en Shopify en Perú: creación de tiendas Shopify optimizadas para vender (velocidad, SEO y CRO), con pagos locales (Yape, Plin, Niubiz, Izipay), migración y soporte."
    />
  );
}
