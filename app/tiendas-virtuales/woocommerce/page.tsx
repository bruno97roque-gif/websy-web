import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/tiendas-virtuales/woocommerce",
  title: "Desarrollo WooCommerce Perú · Tiendas en WordPress",
  description:
    "Desarrollo WooCommerce en Perú: tu tienda virtual sobre WordPress, autoadministrable, con pagos Yape, Plin y tarjeta, sin mensualidades de plataforma y 100% tuya.",
});

export default function WooCommercePage() {
  return (
    <ServiceLanding
      slug="/tiendas-virtuales/woocommerce"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Tiendas Virtuales", path: "/tiendas-virtuales" },
        { name: "WooCommerce", path: "/tiendas-virtuales/woocommerce" },
      ]}
      eyebrow="Plataforma · WooCommerce"
      h1="Desarrollo WooCommerce en Perú"
      intro="Creamos tu tienda virtual con WooCommerce sobre WordPress: 100% tuya, autoadministrable y sin mensualidades de plataforma. Pagas una sola vez el desarrollo y mantienes el control total de tu tienda, tus productos y tus datos, con pagos Yape, Plin y tarjeta."
      highlights={["WordPress + WooCommerce", "Sin mensualidad de plataforma", "Yape & Plin", "Control total", "Autoadministrable"]}
      stats={[
        { value: "100%", label: "Tu tienda es tuya" },
        { value: "WordPress", label: "El CMS más usado del mundo" },
        { value: "Yape/Plin", label: "+ tarjeta y transferencia" },
        { value: "SEO", label: "Optimizada desde el día 1" },
      ]}
      sections={[
        {
          h2: "Tu tienda virtual en WordPress, sin ataduras",
          body:
            "Con WooCommerce tu tienda vive sobre WordPress, el gestor de contenidos más usado del mundo. Eso significa libertad: eliges tu hosting, no pagas comisiones de plataforma y puedes ampliar la tienda sin límites cuando tu negocio lo pida.",
          bullets: [
            "Diseño de tienda WooCommerce a medida, responsive y a tu marca.",
            "Catálogo con categorías, atributos, variantes y cupones.",
            "Pagos con Yape, Plin, tarjeta (Niubiz/Izipay) y transferencia.",
            "Panel autoadministrable: gestionas productos, stock y pedidos.",
            "Optimización SEO nativa para posicionar en Google.",
          ],
        },
        {
          h2: "WooCommerce vs. plataformas con mensualidad",
          bullets: [
            "Sin comisiones por venta ni mensualidad obligatoria de plataforma.",
            "Eres dueño de tu tienda, tu contenido y tus datos de clientes.",
            "Escalable: desde un catálogo pequeño hasta miles de productos.",
            "Se integra con tu blog, tu CRM y tus campañas de marketing.",
          ],
        },
        {
          h2: "Ideal si ya tienes (o quieres) un WordPress",
          body:
            "Si tu web ya está en WordPress, sumamos la tienda sin rehacer todo. Y si partes de cero, montamos web y tienda juntas para que tengas presencia y ventas en un solo lugar.",
        },
      ]}
      related={[
        { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Mira todo lo que incluye nuestro servicio de ecommerce." },
        { label: "Tiendas Shopify", href: "/tiendas-virtuales/shopify", desc: "¿Quieres lanzar rápido sin gestionar hosting? Compara con Shopify." },
      ]}
      faqs={[
        {
          q: "¿WooCommerce tiene mensualidad?",
          a: "WooCommerce en sí es gratuito; solo pagas tu hosting y dominio (costos bajos) y el desarrollo de la tienda. No hay comisiones por venta ni mensualidad de plataforma como en otras opciones.",
        },
        {
          q: "¿Puedo aceptar Yape, Plin y tarjetas?",
          a: "Sí. Integramos Yape, Plin, tarjeta de crédito y débito vía Niubiz o Izipay y transferencia bancaria, según lo que necesite tu negocio.",
        },
        {
          q: "¿Es difícil de administrar?",
          a: "No. Te entregamos la tienda con un panel ordenado y te capacitamos para subir productos, cambiar precios, gestionar stock y revisar pedidos sin saber de programación.",
        },
      ]}
      serviceName="Desarrollo de tiendas WooCommerce"
      serviceDescription="Desarrollo WooCommerce en Perú: tiendas virtuales sobre WordPress, autoadministrables, con pagos locales y optimización SEO, sin mensualidad de plataforma."
    />
  );
}
