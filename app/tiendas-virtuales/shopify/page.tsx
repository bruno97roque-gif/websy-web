import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/tiendas-virtuales/shopify",
  title: "Agencia Shopify Perú · Desarrollo de Tiendas Shopify",
  description:
    "Agencia Shopify en Perú. Desarrollo y diseño de tiendas Shopify para empresas: configuración, pagos con Yape, Plin y tarjeta, migración y optimización para vender.",
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
      eyebrow="Plataforma · Shopify"
      h1="Agencia Shopify en Perú"
      intro="Somos una agencia Shopify en Perú: desarrollamos y diseñamos tu tienda Shopify lista para vender, con pagos en soles, Yape, Plin y tarjeta, dominio propio y un panel simple para que administres todo tú mismo. Ideal para lanzar rápido y escalar sin dolores de cabeza técnicos."
      highlights={["Tienda lista en semanas", "Pagos en soles", "Yape & Plin", "Diseño a tu marca", "Escalable"]}
      stats={[
        { value: "Shopify", label: "Partner de la plataforma líder" },
        { value: "Soles", label: "Pagos locales y tarjeta" },
        { value: "24 h", label: "Respuesta a tu cotización" },
        { value: "Capacitación", label: "Aprendes a administrarla" },
      ]}
      sections={[
        {
          h2: "Desarrollo de tienda Shopify, de principio a fin",
          body:
            "Te montamos la tienda virtual en Shopify completa: tema a tu marca, productos, pagos, envíos y las apps justas que necesitas. Sin plantillas genéricas y sin instalarte 20 apps que ralentizan la tienda.",
          bullets: [
            "Diseño de tienda Shopify personalizado a tu identidad de marca.",
            "Configuración de productos, colecciones, variantes y buscador.",
            "Pasarelas de pago para Perú: Yape, Plin, tarjeta y transferencia.",
            "Reglas de envío por zona y notificaciones automáticas.",
            "Tienda optimizada para velocidad y para SEO.",
          ],
        },
        {
          h2: "¿Por qué elegir Shopify?",
          bullets: [
            "Plataforma robusta y segura: no te preocupas por hosting ni mantenimiento del servidor.",
            "Lista para crecer: soporta desde tus primeras ventas hasta miles de pedidos.",
            "Panel sencillo: administras productos y pedidos sin saber programar.",
            "Ecosistema de apps para sumar funciones cuando las necesites.",
          ],
        },
        {
          h2: "¿Ya tienes una tienda? La migramos",
          body:
            "Si vienes de otra plataforma o de una tienda Shopify mal armada, migramos tus productos y rediseñamos la tienda para que cargue rápido, se vea profesional y convierta más visitas en ventas.",
        },
      ]}
      related={[
        { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Mira todo lo que incluye nuestro servicio de ecommerce." },
        { label: "Tiendas WooCommerce", href: "/tiendas-virtuales/woocommerce", desc: "¿Prefieres WordPress sin mensualidad? Compara la otra opción." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta una tienda en Shopify?",
          a: "Además del plan mensual de Shopify, el desarrollo se cotiza según el diseño, la cantidad de productos y las integraciones. Te preparamos una propuesta a medida sin costo en menos de 24 horas.",
        },
        {
          q: "¿Shopify acepta Yape, Plin y tarjetas en Perú?",
          a: "Sí. Configuramos los medios de pago locales (Yape, Plin), tarjeta de crédito y débito, y transferencia, para que tus clientes paguen como ya están acostumbrados.",
        },
        {
          q: "¿Puedo administrar la tienda yo mismo?",
          a: "Totalmente. Shopify tiene un panel muy amigable y te capacitamos para que subas productos, cambies precios y gestiones pedidos sin depender de nosotros.",
        },
      ]}
      serviceName="Desarrollo de tiendas Shopify"
      serviceDescription="Agencia Shopify en Perú: desarrollo, diseño y migración de tiendas Shopify con pagos locales (Yape, Plin, tarjeta) y optimización para ventas."
    />
  );
}
