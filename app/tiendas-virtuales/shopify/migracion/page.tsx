import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/tiendas-virtuales/shopify/migracion",
  title: "Migrar a Shopify en Perú sin perder ventas",
  description:
    "Migramos tu tienda a Shopify en Perú sin perder posicionamiento: desde WooCommerce, Wix o Tiendanube, conservando productos, clientes y SEO con 301.",
});

export default function MigracionShopifyPage() {
  return (
    <ServiceLanding
      slug="/tiendas-virtuales/shopify/migracion"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Tiendas Virtuales", path: "/tiendas-virtuales" },
        { name: "Shopify", path: "/tiendas-virtuales/shopify" },
        { name: "Migración", path: "/tiendas-virtuales/shopify/migracion" },
      ]}
      eyebrow="Migración a Shopify · Perú"
      h1="Migrar a Shopify en Perú, sin perder tu posicionamiento"
      intro="Migramos tu tienda a Shopify desde WooCommerce, Wix, Tiendanube, Magento o cualquier plataforma, conservando lo que importa: tus productos, tus clientes y tu SEO. Con redirecciones 301 y un plan de migración ordenado, cambias a Shopify sin perder tu ranking en Google ni tus ventas durante el proceso."
      highlights={["Sin perder SEO", "Redirecciones 301", "Productos y clientes migrados", "Cero downtime", "WooCommerce · Wix · Tiendanube"]}
      stats={[
        { value: "301", label: "Redirecciones para conservar tu ranking" },
        { value: "SEO", label: "Posicionamiento y URLs cuidados" },
        { value: "0", label: "Objetivo: cero caída de tráfico" },
        { value: "24 h", label: "Respuesta a tu cotización" },
      ]}
      sections={[
        {
          h2: "Por qué migrar tu tienda a Shopify",
          body:
            "Si tu tienda actual carga lento, se cae en campaña, te obliga a depender de un desarrollador para cada cambio o se volvió difícil de mantener, migrar a Shopify te devuelve el control y la estabilidad. Shopify se encarga de hosting, seguridad y actualizaciones, y tú administras todo desde un panel simple.",
          bullets: [
            "Estabilidad: nada de caídas en Cyber o Navidad por límites de tu hosting.",
            "Velocidad y seguridad gestionadas por la plataforma, sin plugins que romper.",
            "Panel autoadministrable: subes productos y cambias precios sin depender de nadie.",
            "Ecosistema maduro de apps y pagos locales listos para Perú.",
          ],
        },
        {
          h2: "Qué se conserva en la migración",
          body:
            "La preocupación número uno al migrar es perder lo construido. Por eso trabajamos con un inventario previo de todo lo que debe pasar a Shopify intacto:",
          bullets: [
            "SEO: mapeo de URLs y redirecciones 301 para conservar tu posicionamiento en Google.",
            "Productos: fichas, colecciones, variantes (talla, color), precios e imágenes.",
            "Clientes: base de datos de compradores y su historial cuando la plataforma lo permite.",
            "Pedidos históricos y datos clave para tu operación y reportes.",
            "Contenido: páginas, blog y textos que ya posicionan.",
          ],
        },
        {
          h2: "Nuestro proceso de migración, sin perder posicionamiento",
          body:
            "Migrar bien no es exportar y pegar. Seguimos un proceso ordenado pensado para proteger tu tráfico orgánico y tus ventas durante el cambio.",
          bullets: [
            "1. Auditoría: inventariamos URLs, productos, contenido y qué páginas ya posicionan.",
            "2. Mapeo de redirecciones: cada URL antigua apunta a su equivalente en Shopify (301).",
            "3. Migración de catálogo y clientes a la nueva tienda, revisando datos.",
            "4. Rediseño y optimización: velocidad, SEO on-page y conversión (CRO).",
            "5. Pruebas y publicación controlada, monitoreando indexación y tráfico.",
          ],
        },
        {
          h2: "Riesgos de migrar mal (y cómo los evitamos)",
          body:
            "Una migración descuidada puede costarte tráfico y ventas durante meses. Estos son los riesgos reales y cómo los neutralizamos:",
          bullets: [
            "Perder ranking por URLs rotas: lo evitamos con un mapa completo de redirecciones 301.",
            "Caída de tráfico por errores 404: revisamos enlaces internos, sitemap y Search Console.",
            "Productos o imágenes perdidas: validamos el catálogo antes y después de migrar.",
            "Downtime en el cambio de dominio: coordinamos DNS y publicación para minimizar la interrupción.",
            "Perder velocidad ganada: entregamos un tema ligero y optimizado, no una plantilla pesada.",
          ],
        },
        {
          h2: "¿Desde qué plataformas migramos?",
          body:
            "Migramos a Shopify desde las plataformas más usadas en Perú y la región. Si tu caso no está en la lista, cuéntanos: casi siempre se puede.",
          bullets: [
            "WooCommerce (WordPress) → Shopify.",
            "Wix y otros creadores de tiendas → Shopify.",
            "Tiendanube → Shopify.",
            "Magento, PrestaShop y otras plataformas → Shopify.",
            "Una tienda Shopify mal armada → rediseño y optimización.",
          ],
        },
      ]}
      related={[
        { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "Todo sobre nuestro servicio de creación de tiendas Shopify optimizadas." },
        { label: "Cuánto cuesta una tienda Shopify", href: "/tiendas-virtuales/shopify/costos", desc: "Qué define el precio de tu tienda y de la migración." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio y cómo pedir tu cotización gratis." },
        { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Nuestro servicio completo de ecommerce." },
      ]}
      articles={[
        { label: "Cómo migrar tu web sin perder posicionamiento", href: "/blog/como-migrar-tu-pagina-web-sin-perder-posicionamiento-en-google", desc: "El método para conservar tu SEO al cambiar de plataforma." },
        { label: "Shopify vs WooCommerce", href: "/blog/shopify-vs-woocommerce", desc: "Compara antes de decidir a qué plataforma migrar." },
      ]}
      faqs={[
        {
          q: "¿Voy a perder mi posicionamiento en Google al migrar a Shopify?",
          a: "No, si la migración se hace bien. Mapeamos cada URL antigua con una redirección 301 a su equivalente en Shopify, cuidamos el SEO on-page y monitoreamos la indexación en Search Console. El objetivo es cero caída de tráfico orgánico.",
        },
        {
          q: "¿Se conservan mis productos y mis clientes?",
          a: "Sí. Migramos fichas, colecciones, variantes, precios e imágenes, y la base de clientes e historial de pedidos cuando la plataforma de origen lo permite exportar. Validamos el catálogo antes y después de migrar.",
        },
        {
          q: "¿Mi tienda estará caída durante la migración?",
          a: "Trabajamos para minimizar la interrupción: montamos y probamos la nueva tienda en paralelo y coordinamos el cambio de dominio y DNS para que el corte sea el menor posible.",
        },
        {
          q: "¿Desde qué plataformas pueden migrar?",
          a: "Migramos a Shopify desde WooCommerce, Wix, Tiendanube, Magento, PrestaShop y otras. También rediseñamos tiendas Shopify mal armadas. Cuéntanos tu caso y lo revisamos.",
        },
        {
          q: "¿Cuánto cuesta migrar a Shopify?",
          a: "Depende de la cantidad de productos, el volumen de URLs a redirigir y si además rediseñamos la tienda. Te preparamos una cotización a medida sin costo en menos de 24 horas.",
        },
      ]}
      serviceName="Migración a Shopify en Perú"
      serviceDescription="Migración de tiendas a Shopify en Perú desde WooCommerce, Wix, Tiendanube y otras plataformas, conservando productos, clientes y SEO con redirecciones 301."
    />
  );
}
