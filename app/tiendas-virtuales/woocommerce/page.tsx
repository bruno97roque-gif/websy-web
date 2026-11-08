import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/tiendas-virtuales/woocommerce",
  title: "Tienda virtual en WordPress y WooCommerce en Perú",
  description:
    "Tu tienda virtual en WordPress con WooCommerce: pagos con Yape, Plin y Niubiz, boletas y facturas SUNAT, hosting a tu nombre y sin mensualidad de plataforma.",
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
      h1="Tienda virtual en WordPress y WooCommerce en Perú"
      intro="Desarrollamos tu tienda virtual en WordPress con WooCommerce: 100% tuya, autoadministrable y sin mensualidad de plataforma. Pagas una sola vez el desarrollo y la entregamos con Yape, Plin y tarjeta funcionando, boletas y facturas electrónicas SUNAT y el hosting contratado a tu nombre."
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
          h2: "Cobros en WooCommerce: Yape, Plin, Niubiz e Izipay",
          body:
            "En una tienda peruana el checkout decide la venta, así que lo armamos con los medios que tu cliente ya usa. Hay dos formas de cobrar con Yape y Plin: con un QR y confirmación manual del pedido, que sirve para empezar, o a través de una pasarela que los acepta junto con la tarjeta, para que el pedido se confirme solo. El paso a paso está en [cómo integrar Yape y Plin en tu tienda virtual](/blog/como-integrar-yape-y-plin-en-tu-tienda-virtual).",
          bullets: [
            "Tarjeta de crédito y débito con Niubiz o Izipay, conectados al plugin oficial de cada pasarela.",
            "Yape y Plin por QR o dentro de la pasarela, según tu volumen de pedidos.",
            "Culqi o Mercado Pago si ya tienes cuenta con ellos.",
            "Transferencia y pago contra entrega, con el pedido en espera hasta que lo confirmes.",
            "Pruebas de cada medio de pago en modo sandbox antes de abrir la tienda.",
          ],
        },
        {
          h2: "Boletas y facturas SUNAT desde tu tienda WooCommerce",
          body:
            "Si vendes en Perú, cada pedido pagado necesita su comprobante. Conectamos WooCommerce con tu proveedor de facturación electrónica para que la tienda emita la boleta o la factura cuando el pago entra, sin volver a digitar el pedido en otro sistema. En el checkout el cliente elige boleta (con DNI) o factura (con RUC), y el comprobante le llega por correo. Qué exige SUNAT y cómo elegir proveedor lo explicamos en [facturación electrónica SUNAT para tu tienda online](/blog/facturacion-electronica-sunat-para-tu-tienda-online).",
        },
        {
          h2: "Hosting para tu tienda WooCommerce",
          body:
            "En WooCommerce el hosting lo eliges tú, y es la decisión que más se nota en la velocidad del carrito y del checkout. Te ayudamos a contratar un plan que cumpla los requisitos oficiales (versión de PHP, base de datos, HTTPS y memoria) y lo dejamos configurado con copias de seguridad y certificado SSL. El contrato queda a tu nombre: si un día cambias de proveedor, la tienda se va contigo. Los requisitos y cuándo pasar de un compartido a un VPS están en [hosting para WooCommerce en Perú](/blog/hosting-para-woocommerce-en-peru).",
          bullets: [
            "Plan que cumple los requisitos de servidor de WooCommerce.",
            "Certificado SSL activo: sin HTTPS las pasarelas no funcionan.",
            "Copias de seguridad que puedes restaurar.",
            "Caché y optimización de imágenes para que el catálogo cargue rápido en el celular.",
          ],
        },
        {
          h2: "Envíos, stock y pedidos en WooCommerce",
          body:
            "Vender online no termina en el pago. Dejamos la tienda lista para despachar: tarifas de envío por distrito o por zona, recojo en tienda si lo ofreces y correos automáticos que avisan al cliente cuando su pedido se prepara y cuando sale. El stock se descuenta solo con cada venta, así no vendes lo que ya no tienes, y desde el panel ves qué pedidos están pagados, cuáles esperan confirmación y cuáles ya se entregaron.",
          bullets: [
            "Tarifas de envío por distrito de Lima y por provincia.",
            "Stock por talla, color u otra variante, con aviso cuando queda poco.",
            "Estados de pedido claros y correos automáticos al cliente.",
            "Cupones, descuentos por cantidad y precios de oferta con fecha de fin.",
          ],
        },
        {
          h2: "¿WooCommerce o Shopify para tu tienda?",
          body:
            "WooCommerce conviene si quieres que la tienda sea tuya de verdad, si ya tienes una web en WordPress o si tu catálogo y tu blog van a crecer juntos para posicionar en Google. Shopify conviene si prefieres no ocuparte del hosting ni de las actualizaciones y aceptas pagar un plan mensual. Si dudas, lo comparamos punto por punto en [Shopify vs WooCommerce](/blog/shopify-vs-woocommerce) o puedes ver nuestras [tiendas Shopify](/tiendas-virtuales/shopify).",
        },
        {
          h2: "Cómo desarrollamos tu tienda en WordPress",
          bullets: [
            "Reunión corta para entender qué vendes, cómo cobras y cómo despachas.",
            "Propuesta por escrito con alcance, plazos y lo que incluye cada etapa.",
            "Diseño de la tienda a tu marca y carga del catálogo con categorías y variantes.",
            "Configuración de pagos, comprobantes SUNAT, envíos por distrito y correos de pedido.",
            "Pruebas de compra completas y lanzamiento con Google Search Console y Analytics.",
            "Capacitación para que subas productos y gestiones pedidos tú mismo.",
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
      articles={[
        { label: "Hosting para WooCommerce en Perú", href: "/blog/hosting-para-woocommerce-en-peru", desc: "Requisitos del servidor y cuándo pasar de un compartido a un VPS." },
        { label: "Facturación electrónica SUNAT en tu tienda", href: "/blog/facturacion-electronica-sunat-para-tu-tienda-online", desc: "Boleta o factura en cada pedido sin digitar dos veces." },
        { label: "Ventajas de WooCommerce para negocios", href: "/blog/ventajas-de-woocommerce-para-negocios", desc: "Por qué WooCommerce te da control total y costos más flexibles." },
        { label: "Cómo cobrar con Izipay en tu web", href: "/blog/como-cobrar-con-izipay-en-tu-pagina-web", desc: "Enlace de pago o integración completa: cuál te conviene." },
        { label: "Cómo conectar Niubiz paso a paso", href: "/blog/como-conectar-niubiz-a-tu-tienda-virtual", desc: "Afiliación, credenciales y pruebas antes de cobrar." },
        { label: "Shopify vs WooCommerce", href: "/blog/shopify-vs-woocommerce", desc: "Cuál conviene según tu negocio, presupuesto y forma de vender." },
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
        {
          q: "¿Qué hosting necesita una tienda WooCommerce en Perú?",
          a: "Uno que cumpla los requisitos oficiales de WooCommerce (PHP y base de datos actualizados, HTTPS y memoria suficiente para WordPress), con copias de seguridad y SSL. Para empezar suele bastar un buen hosting compartido; cuando la tienda crece o hace campañas, conviene un VPS o un hosting administrado.",
        },
        {
          q: "¿WooCommerce emite boletas y facturas electrónicas?",
          a: "WooCommerce no las emite solo: se conecta con un proveedor de facturación electrónica autorizado por SUNAT, que genera la boleta o factura cuando el pedido se paga. Nosotros dejamos esa conexión configurada y probada.",
        },
        {
          q: "Ya tengo una web en WordPress, ¿pueden agregarle la tienda?",
          a: "Sí. Instalamos y configuramos WooCommerce sobre tu WordPress actual, revisamos que el tema y los plugins sean compatibles y sumamos la tienda sin rehacer la web ni perder lo que ya posiciona en Google.",
        },
      ]}
      serviceName="Tienda virtual en WordPress y WooCommerce"
      serviceDescription="Desarrollo de tiendas virtuales en WordPress con WooCommerce en Perú: pagos con Yape, Plin, Niubiz e Izipay, facturación electrónica SUNAT, hosting a nombre del cliente y sin mensualidad de plataforma."
    />
  );
}
