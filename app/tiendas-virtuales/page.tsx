import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/tiendas-virtuales",
  title: "Desarrollo de Tiendas Virtuales en Perú",
  description:
    "Desarrollo y diseño de tiendas virtuales para empresas en Lima y todo el Perú. Ecommerce autoadministrable con pasarela de pago (Yape, Plin, Niubiz, Izipay) y control de stock.",
});

export default function TiendasVirtualesPage() {
  return (
    <ServiceLanding
      slug="/tiendas-virtuales"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Tiendas Virtuales", path: "/tiendas-virtuales" },
      ]}
      eyebrow="Ecommerce · Tiendas Virtuales"
      h1="Desarrollo de tiendas virtuales en Perú"
      intro="En Websy creamos tiendas virtuales para empresas en Lima y todo el Perú: ecommerce autoadministrable, con pasarela de pago (Yape, Plin, Niubiz, Izipay), control de stock y diseño optimizado para vender. Tú administras productos, precios y pedidos sin depender de nadie."
      highlights={["Shopify", "WooCommerce", "Yape & Plin", "Niubiz", "Izipay", "Autoadministrable"]}
      stats={[
        { value: "24 h", label: "Te respondemos tu cotización" },
        { value: "100%", label: "Tienda autoadministrable" },
        { value: "Yape/Plin", label: "+ tarjeta y transferencia" },
        { value: "Post-venta", label: "Soporte tras el lanzamiento" },
      ]}
      sections={[
        {
          h2: "¿Qué incluye el desarrollo de tu tienda virtual?",
          body:
            "Entregamos una tienda online lista para vender, no una plantilla a medio armar. La creación de tu tienda virtual incluye el diseño a tu marca, la carga inicial de productos, la configuración de pagos y envíos, y la capacitación para que la administres tú mismo.",
          bullets: [
            "Diseño de tienda virtual a medida, responsive y alineado a tu marca.",
            "Catálogo de productos con categorías, variantes (talla, color) y buscador.",
            "Carrito, checkout y cálculo de envíos configurable por zona.",
            "Panel autoadministrable: agregas productos, precios y stock sin programar.",
            "Optimización SEO de fichas y categorías para aparecer en Google.",
            "Integración con WhatsApp para cerrar ventas y resolver dudas.",
          ],
        },
        {
          h2: "Plataformas: Shopify o WooCommerce",
          body:
            "Trabajamos las dos plataformas líderes de ecommerce y te recomendamos la que más conviene a tu negocio. Si quieres algo robusto y rápido de lanzar, Shopify; si buscas control total sobre WordPress y costos más flexibles, WooCommerce.",
          bullets: [
            "Desarrollo Shopify Perú: tienda lista, segura y escalable, ideal para crecer rápido.",
            "Desarrollo WooCommerce Perú: tu tienda virtual sobre WordPress, 100% tuya y sin mensualidades de plataforma.",
          ],
        },
        {
          h2: "Pasarelas de pago: Yape, Plin, Niubiz e Izipay",
          body:
            "Una tienda virtual en Perú vende cuando acepta los medios de pago que tus clientes ya usan. Integramos pago con Yape y Plin, tarjeta de crédito y débito vía Niubiz o Izipay, y transferencia o pago contra entrega según tu operación.",
          bullets: [
            "Tienda virtual con Yape y Plin para pagos inmediatos.",
            "Tarjeta de crédito y débito con Niubiz o Izipay.",
            "Transferencia bancaria y pago contra entrega opcionales.",
            "Confirmación automática de pedido por correo y WhatsApp.",
          ],
        },
        {
          h2: "Nuestro proceso, en 4 pasos",
          bullets: [
            "1. Diagnóstico: entendemos tu negocio, productos y forma de vender.",
            "2. Diseño: prototipo de la tienda con tu identidad de marca.",
            "3. Desarrollo: montamos la tienda, pagos, envíos y carga de productos.",
            "4. Lanzamiento y capacitación: te entregamos la tienda y te enseñamos a administrarla.",
          ],
        },
        {
          h2: "¿Por qué desarrollar tu tienda virtual con Websy?",
          body:
            "Somos una agencia de ecommerce en Perú enfocada en que vendas, no solo en que tu tienda se vea bonita. Cada tienda virtual que entregamos queda optimizada para SEO, lista para campañas y pensada para que la administres sin depender de nadie.",
          bullets: [
            "Tienda virtual para empresas y emprendedores que quieren vender en serio.",
            "Desarrollo de ecommerce a medida, no plantillas genéricas.",
            "Tienda virtual autoadministrable: tú tienes el control.",
            "Acompañamiento después del lanzamiento, no te dejamos solo.",
          ],
        },
      ]}
      related={[
        { label: "Tiendas Shopify", href: "/tiendas-virtuales/shopify", desc: "Lanza rápido sobre la plataforma líder de ecommerce, con pagos locales." },
        { label: "Tiendas WooCommerce", href: "/tiendas-virtuales/woocommerce", desc: "Tu tienda sobre WordPress, sin mensualidad de plataforma y 100% tuya." },
        { label: "Páginas web profesionales", href: "/diseno-de-paginas-web", desc: "¿Aún no vendes online? Empieza con una web que capte clientes." },
      ]}
      articles={[
        { label: "¿Cuánto cuesta una tienda virtual en Perú?", href: "/blog/cuanto-cuesta-una-tienda-virtual-en-peru", desc: "Qué define el precio de un ecommerce y cómo cotizar sin sorpresas." },
        { label: "Cómo crear una tienda virtual en Perú", href: "/blog/como-crear-una-tienda-virtual-en-peru", desc: "Guía paso a paso: plataforma, pagos, productos y lanzamiento." },
        { label: "Cómo posicionar tu tienda en Google", href: "/blog/como-posicionar-una-tienda-virtual-en-google", desc: "SEO para ecommerce: que tus clientes te encuentren y compren." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta una tienda virtual en Perú?",
          a: "El precio de una tienda virtual depende de la cantidad de productos, las pasarelas de pago y las integraciones que necesites. Por eso preparamos una cotización a medida sin costo: cuéntanos tu proyecto y te enviamos una propuesta clara en menos de 24 horas.",
        },
        {
          q: "¿Cuánto demora el desarrollo de la tienda?",
          a: "Una tienda virtual estándar suele estar lista en 3 a 5 semanas, según la cantidad de productos y la complejidad de las integraciones. Te damos un cronograma desde el inicio para que sepas exactamente cuándo lanzas.",
        },
        {
          q: "¿La tienda es autoadministrable? ¿Puedo subir productos yo mismo?",
          a: "Sí. Entregamos una tienda virtual autoadministrable y te capacitamos para que agregues productos, cambies precios, gestiones stock y revises tus pedidos sin saber programar.",
        },
        {
          q: "¿Qué pasarelas de pago puedo aceptar?",
          a: "Integramos Yape y Plin, tarjeta de crédito y débito vía Niubiz o Izipay, transferencia bancaria y pago contra entrega. Activamos los medios que mejor se adapten a tu negocio.",
        },
        {
          q: "¿Conviene Shopify o WooCommerce para mi negocio?",
          a: "Depende de tu operación. Shopify es ideal si quieres lanzar rápido con algo robusto; WooCommerce te da control total sobre WordPress y costos más flexibles. En la cotización te recomendamos la opción correcta para tu caso.",
        },
      ]}
      serviceName="Desarrollo de tiendas virtuales"
      serviceDescription="Desarrollo y diseño de tiendas virtuales (ecommerce) para empresas en Perú, con pasarela de pago Yape, Plin, Niubiz e Izipay, control de stock y panel autoadministrable."
    />
  );
}
