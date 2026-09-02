import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

/* Search Console, 3-30 ago 2026: siete búsquedas de precio de Shopify salían
   repartidas entre esta página y el artículo del blog, las dos alrededor del
   puesto 11 y con CERO clics entre ambas. No se redirige ni se unifica: se
   reparte por intención. El artículo responde qué cobra SHOPIFY (planes y
   comisiones) y esta responde qué cuesta que te DESARROLLEN la tienda, que es
   otra pregunta y de otra persona. El title lo dice ahora explícitamente. */
export const metadata: Metadata = pageMeta({
  path: "/tiendas-virtuales/shopify/costos",
  title: "Cuánto cuesta desarrollar tu tienda Shopify",
  description:
    "Qué cuesta que te desarrollen una tienda Shopify en Perú: qué define el precio del proyecto, qué se paga una vez y qué se repite cada mes. Cotización en 24 h.",
});

export default function CostosShopifyPage() {
  return (
    <ServiceLanding
      slug="/tiendas-virtuales/shopify/costos"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Tiendas Virtuales", path: "/tiendas-virtuales" },
        { name: "Shopify", path: "/tiendas-virtuales/shopify" },
        { name: "Costos", path: "/tiendas-virtuales/shopify/costos" },
      ]}
      eyebrow="Costo del proyecto · Tienda Shopify en Perú"
      h1="¿Cuánto cuesta que te desarrollen una tienda Shopify en Perú?"
      intro="Esta página responde qué cuesta el proyecto: el desarrollo de tu tienda Shopify, que se paga una vez y depende del diseño, la cantidad de productos y las integraciones. Es una pregunta distinta de cuánto cobra Shopify por su plataforma, que es una mensualidad y la respondemos aparte en el blog. Aquí desglosamos el costo del desarrollo y qué gastos se repiten después."
      highlights={["Plan + desarrollo + comisiones", "Rangos referenciales", "Sin sorpresas", "Cotización en 24 h"]}
      stats={[
        { value: "3", label: "Componentes: plan, desarrollo y comisiones" },
        { value: "Único", label: "El desarrollo se paga una vez" },
        { value: "Mensual", label: "El plan de Shopify es recurrente" },
        { value: "24 h", label: "Respuesta a tu cotización" },
      ]}
      sections={[
        {
          h2: "Qué define el precio de tu tienda Shopify",
          body:
            "Dos tiendas Shopify pueden costar muy distinto según su alcance. Estos son los factores que más pesan en una cotización seria:",
          bullets: [
            "Diseño: plantilla adaptada a tu marca vs. un diseño 100% a medida.",
            "Cantidad de productos y si tienen variantes (talla, color) o son fichas simples.",
            "Pasarelas de pago a integrar: Yape, Plin, tarjeta con Niubiz o Izipay, transferencia.",
            "Integraciones: facturación electrónica SUNAT, courier, control de stock o CRM.",
            "Si necesitas producción de contenido: fotos, textos y fichas optimizadas.",
            "Migración desde otra plataforma, si vienes de WooCommerce, Wix o Tiendanube.",
          ],
        },
        {
          h2: "Por qué una tienda Shopify sale más cara en Perú que en México",
          body:
            "Shopify Payments, la pasarela propia de Shopify, no opera en Perú: su lista oficial de países admitidos incluye 40 países y el único de Latinoamérica es México (comprobado el 1 de septiembre de 2026). Toda tienda peruana cobra por fuerza con una pasarela externa —Niubiz, Izipay, Culqi o Mercado Pago— y eso significa dos comisiones sobre la misma venta, no una.",
          bullets: [
            "La comisión de tu pasarela peruana, según el contrato que tengas con Niubiz, Izipay, Culqi o Mercado Pago.",
            "Más el recargo que Shopify cobra por usar una pasarela que no es la suya: 2 % en el plan Basic, 1 % en Grow, 0,6 % en Advanced y 0,2 % en Plus.",
            "Ese recargo no es una cuota fija: es un porcentaje de cada venta, así que pesa más cuanto mejor te va.",
            "Los importes de cada plan están en [cuánto cobra Shopify al mes en Perú](/blog/cuanto-cuesta-una-tienda-en-shopify), con los precios oficiales actualizados.",
          ],
        },
        {
          h2: "Qué se lleva ese sobrecosto y cómo se compensa",
          body:
            "El recargo por pasarela externa no se puede evitar en Perú, pero sí se puede compensar con cómo esté montada la tienda. Es justo donde una tienda bien hecha se paga sola:",
          bullets: [
            "Eligiendo bien plan y pasarela: entre un plan y el siguiente, lo que cambia de verdad no es la mensualidad, es el punto porcentual de cada venta.",
            "Cobrando por Yape y Plin donde conviene, que en Perú son una parte enorme de las ventas.",
            "Bajando el abandono del carrito: cada venta recuperada paga varios meses de plan.",
            "Con una tienda rápida y bien indexada, que traiga visitas sin pagar por cada clic. Eso es [SEO para tiendas virtuales](/seo).",
          ],
        },
        {
          h2: "Plan mensual de Shopify vs. desarrollo de la tienda",
          body:
            "Es la confusión más común. Son dos costos distintos y conviene entenderlos por separado antes de cotizar.",
          bullets: [
            "Plan mensual de Shopify: lo cobra Shopify por usar su plataforma (hosting, seguridad, actualizaciones). Es recurrente y va en dólares.",
            "Desarrollo de la tienda: es nuestra inversión inicial para montar tu tienda —diseño, carga de productos, pagos, envíos y optimización—. Se paga una vez (más mejoras futuras si las necesitas).",
            "Comisiones de pago: la de tu pasarela más el recargo de Shopify. Conviene tenerlo en cuenta al fijar tus precios de venta.",
          ],
        },
        {
          h2: "Qué incluye cada nivel de inversión",
          body:
            "El desarrollo se ajusta a lo que tu negocio necesita hoy. A grandes rasgos, estos son los niveles típicos de un proyecto Shopify:",
          bullets: [
            "Inicial (tienda para lanzar): tema adaptado a tu marca, catálogo acotado, pagos locales y SEO on-page básico. Ideal para empezar a vender ya.",
            "Intermedio (tienda para crecer): diseño más personalizado, más productos y colecciones, optimización de velocidad y conversión (CRO), integraciones clave.",
            "Avanzado (tienda a medida): diseño 100% a medida, catálogo grande, facturación SUNAT, integraciones con courier/stock/CRM y optimización SEO profunda.",
          ],
        },
        {
          /* El H2 anterior era «Rangos referenciales (y por qué no damos un
             precio cerrado)» y debajo no había ni un rango: anunciaba justo lo
             que no entregaba. En una búsqueda de precio eso es lo peor que
             puede hacer un encabezado. Ahora dice lo que sí hay. */
          h2: "Qué te pedimos para darte el precio de tu tienda",
          body:
            "Con tres datos tenemos suficiente para ponerle número a tu proyecto, y te lo mandamos en menos de 24 horas. Esto es lo que necesitamos saber:",
          bullets: [
            "Qué vendes y cuántos productos tendría la tienda, con sus variantes si las hay (talla, color).",
            "Cómo quieres cobrar: tarjeta con Niubiz o Izipay, Yape y Plin, transferencia, contra entrega.",
            "Con qué se tiene que conectar: facturación SUNAT, courier, tu control de stock o tu CRM.",
          ],
        },
        {
          h2: "Costos recurrentes que debes considerar",
          body:
            "Más allá de la inversión inicial de desarrollo, una tienda Shopify tiene costos que se repiten. Tenerlos claros evita sorpresas:",
          bullets: [
            "Plan mensual de Shopify (recurrente, según el nivel que elijas).",
            "Comisiones por transacción de las pasarelas de pago.",
            "Apps de terceros que sumes (algunas son de pago mensual).",
            "Dominio propio (renovación anual).",
            "Mantenimiento y soporte opcional, si quieres que gestionemos mejoras continuas.",
          ],
        },
        {
          h2: "Cómo pedir tu cotización",
          body:
            "Cuéntanos qué vendes, cuántos productos tienes y cómo cobras, y te enviamos una propuesta a medida, clara y sin sorpresas, en menos de 24 horas. Puedes empezar por nuestra página de cotización o escribirnos por WhatsApp. Si aún estás comparando plataformas, mira Shopify vs WooCommerce antes de decidir.",
        },
      ]}
      related={[
        { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "Todo sobre nuestro servicio de creación de tiendas Shopify optimizadas." },
        { label: "Migrar a Shopify en Perú", href: "/tiendas-virtuales/shopify/migracion", desc: "Cambia a Shopify desde otra plataforma sin perder tu SEO." },
        { label: "Precios y cotización", href: "/precios", desc: "Referencias de precios por servicio y cómo cotizar." },
        { label: "Cotiza tu tienda Shopify", href: "/cotizacion", desc: "Recibe una propuesta a tu medida en menos de 24 horas." },
      ]}
      articles={[
        { label: "Cuánto cuesta una tienda en Shopify", href: "/blog/cuanto-cuesta-una-tienda-en-shopify", desc: "El detalle de planes, desarrollo y comisiones." },
        { label: "Shopify para pymes en Perú: ¿vale la pena?", href: "/blog/shopify-para-pymes-en-peru-vale-la-pena", desc: "Si recién empiezas, cuándo conviene invertir en Shopify." },
        { label: "Cuánto cuesta una tienda virtual en Perú", href: "/blog/cuanto-cuesta-una-tienda-virtual-en-peru", desc: "Los factores de precio de un ecommerce, en general." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta una tienda Shopify en Perú?",
          a: "No hay un precio único. Se compone del plan mensual de Shopify (recurrente), el desarrollo de la tienda (inversión inicial según diseño, productos e integraciones) y las comisiones de las pasarelas. Te preparamos una cotización a medida sin costo en menos de 24 horas.",
        },
        {
          q: "¿El plan de Shopify está incluido en lo que cobra Websy?",
          a: "No: son costos distintos. Nosotros cobramos el desarrollo y la optimización de tu tienda (una inversión inicial). El plan mensual lo pagas directamente a Shopify por usar su plataforma. Te ayudamos a elegir el nivel de plan correcto para tu operación.",
        },
        {
          q: "¿Hay costos mensuales además del desarrollo?",
          a: "Sí: el plan mensual de Shopify, las comisiones por transacción de las pasarelas, las apps de pago que sumes, la renovación anual del dominio y, opcionalmente, el mantenimiento y soporte continuo.",
        },
        {
          q: "¿Es más caro Shopify que WooCommerce?",
          a: "Shopify tiene una mensualidad de plataforma que WooCommerce no cobra, pero te ahorra tiempo y preocupaciones técnicas. Cuál conviene depende de tu operación. Puedes comparar ambas en nuestro artículo Shopify vs WooCommerce.",
        },
        {
          q: "¿Cómo sé cuánto me costaría exactamente a mí?",
          a: "Cuéntanos qué vendes, cuántos productos tienes y cómo cobras, por WhatsApp o el formulario de cotización, y te enviamos una propuesta a medida, clara y sin compromiso, en menos de 24 horas.",
        },
      ]}
      serviceName="Costos de una tienda Shopify en Perú"
      serviceDescription="Guía de precios de una tienda Shopify en Perú: plan mensual de Shopify vs. desarrollo, qué incluye cada nivel, rangos referenciales y costos recurrentes, con cotización a medida."
    />
  );
}
