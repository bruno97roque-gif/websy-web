import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/integracion-de-pagos",
  title: "Integración de Yape y pasarelas de pago en Perú",
  description:
    "Integramos Yape, Plin y tarjetas con Izipay, Niubiz, Culqi o Mercado Pago en tu web, tienda o app en Perú, con confirmación automática y conciliación.",
});

export default function IntegracionDePagosPage() {
  return (
    <ServiceLanding
      slug="/integracion-de-pagos"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: "Integración de pagos", path: "/integracion-de-pagos" },
      ]}
      eyebrow="Servicio · Pagos en línea"
      h1="Integración de Yape, Plin y pasarelas de pago en tu web, tienda o app"
      intro="Integrar pagos en tu web significa que el cliente pague con Yape, Plin o tarjeta y que el pedido se confirme solo, sin revisar comprobantes a mano. Websy conecta Izipay, Niubiz, Culqi o Mercado Pago a tu página, tu tienda WooCommerce o Shopify, tu app o tu sistema a medida, y lo prueba con cobros reales antes de abrirlo al público."
      highlights={["Yape", "Plin", "Izipay", "Niubiz", "Culqi", "Mercado Pago"]}
      stats={[
        { value: "Yape y tarjetas", label: "En el mismo checkout" },
        { value: "Automático", label: "El pedido se confirma al pagar" },
        { value: "Probado", label: "Compra real antes de publicar" },
        { value: "Tu cuenta", label: "La afiliación queda a tu nombre" },
      ]}
      sections={[
        {
          h2: "Qué pagos integramos",
          body:
            "Integramos las billeteras y las tarjetas que usa el comprador peruano, con la pasarela que mejor encaje en tu negocio. Para tarjetas de crédito y débito trabajamos con Izipay, Niubiz, Culqi y Mercado Pago; para billeteras, con Yape y Plin, que hoy procesan esas mismas pasarelas. Si dudas entre las dos de tarjetas más usadas, lee [Izipay o Niubiz: cuál conviene para tu tienda](/blog/izipay-o-niubiz-cual-elegir-para-cobrar-con-tarjeta); si comparas las otras dos, [Culqi o Mercado Pago en Perú](/blog/culqi-vs-mercado-pago-en-peru).",
          bullets: [
            "Yape y Plin dentro del checkout, con confirmación automática del pago.",
            "Tarjetas de crédito y débito con Izipay, Niubiz, Culqi o Mercado Pago.",
            "Link de pago para cobrar por WhatsApp o redes mientras la tienda no está lista.",
            "Transferencia y pago contra entrega como métodos adicionales, si tu público los pide.",
          ],
        },
        {
          h2: "Tres formas de cobrar con Yape en tu web",
          body:
            "Para cobrar con Yape en una web hay tres caminos: link de pago, integración por API o agregador. La diferencia no está en el precio sino en dónde ocurre el pago y cuánto desarrollo exige. El detalle completo, con lo que publica cada proveedor, está en [cobrar con Yape: link, API o agregador](/blog/cobrar-con-yape-link-de-pago-api-o-agregador).",
          table: {
            cabeceras: ["Forma de cobro", "Necesita programar", "El cliente sale de tu web", "Cuándo conviene"],
            filas: [
              ["Link de pago", "No", "Sí, va a una página del proveedor", "Vendes por WhatsApp o redes y aún no tienes tienda"],
              ["Integración por API", "Sí", "No, paga dentro de tu checkout", "Ya tienes tienda y quieres que el pago no corte la compra"],
              ["Agregador (checkout alojado)", "Poco: se instala un módulo", "Va y vuelve a tu web", "Quieres Yape y tarjetas sin montar la pasarela tú"],
            ],
            nota: "Comparación de Websy elaborada con la documentación pública de Culqi e Izipay, consultada el 2 de septiembre de 2026.",
          },
        },
        {
          h2: "Para qué tipo de proyecto",
          body:
            "La integración de pagos sirve en cualquier proyecto donde el cliente compre o reserve en línea: una web informativa con botón de pago, una tienda virtual, una app o un sistema interno. Lo que cambia es la vía técnica.",
          bullets: [
            "Tienda en WooCommerce o Shopify: instalamos y configuramos el módulo de la pasarela, que ya viene resuelto, y lo dejamos probado. Si aún no tienes tienda, la armamos con nuestro servicio de [tiendas virtuales](/tiendas-virtuales).",
            "Web o sistema a medida: integramos la pasarela por API dentro de tu propio checkout, para que el cliente no salga de tu dominio. Es parte de nuestro [desarrollo de software a medida](/desarrollo-de-software-a-medida).",
            "App web o móvil: el cobro se conecta al mismo backend que registra pedidos, reservas o suscripciones.",
            "Venta por chat: un link de pago de la pasarela para empezar a cobrar el mismo día en que te aprueban.",
          ],
        },
        {
          h2: "Qué necesita tu negocio antes de integrar",
          body:
            "Antes de la parte técnica hay un trámite comercial: afiliarte a la pasarela. Ellos revisan tu negocio y tu cuenta bancaria, y recién ahí te entregan las credenciales para integrar. Lo que más frena una solicitud es que el titular de la cuenta bancaria no coincida con el titular con el que te afilias. El paso a paso está en [requisitos para afiliarte a una pasarela de pago en Perú](/blog/afiliacion-pasarela-de-pago-peru-requisitos-y-plazos).",
          bullets: [
            "RUC si eres empresa, o tu documento si operas como persona natural con negocio.",
            "Cuenta bancaria a nombre del mismo titular con el que te afilias.",
            "Tu web funcionando, con certificado de seguridad (HTTPS), precios visibles y condiciones de entrega claras.",
            "Términos y condiciones y política de privacidad publicados, que muchas pasarelas revisan.",
            "Una descripción de lo que vendes: algunos rubros tienen revisión adicional.",
          ],
        },
        {
          h2: "Cómo trabajamos",
          bullets: [
            "Revisamos cómo vendes hoy y te recomendamos la pasarela y la forma de cobro que encajan con tu plataforma y tu público.",
            "Antes de la afiliación te decimos qué papeles preparar y qué preguntar antes de firmar (plazo de depósito, comisión por medio, comisión mínima, contracargos).",
            "Integramos con las credenciales de prueba y simulamos compras aprobadas, rechazadas y pendientes.",
            "Pasamos a producción y hacemos una compra real de monto pequeño: el pedido queda registrado, llega el correo de confirmación y el cobro aparece en el panel de la pasarela.",
            "Dejamos documentado dónde ver cada cobro; si la pasarela cambia su integración, el ajuste entra en el plan de [mantenimiento web](/mantenimiento-web).",
          ],
        },
        {
          h2: "Confirmación automática y webhooks",
          body:
            "Un pago bien integrado confirma el pedido solo: la pasarela avisa a tu web mediante un webhook o una URL de respuesta, y tu tienda marca el pedido como pagado, envía el correo y el WhatsApp de confirmación y descuenta el stock. Si esa URL no se configura, el cliente paga pero el pedido no se marca como pagado. También programamos el caso de los pagos pendientes de aprobación (Yape confirma en segundos, pero no siempre al instante) y el de la tarjeta rechazada, para que el comprador no se quede frente a una pantalla en blanco. Los errores frecuentes los repasamos en [cómo conectar Niubiz a tu tienda virtual](/blog/como-conectar-niubiz-a-tu-tienda-virtual).",
        },
        {
          h2: "Conciliación: que lo depositado cuadre con lo vendido",
          body:
            "El abono del banco casi nunca coincide con las ventas del día, y no es un error. La diferencia sale de la comisión de la pasarela, los pagos pendientes de aprobación, las devoluciones y el desfase entre la fecha de venta y la de abono. La conciliación se hace contra el reporte de liquidación del proveedor, cruzando cada operación por su identificador. Cuando vendes con más de una pasarela o en web y local a la vez, conviene que la haga un sistema: lo explicamos en [por qué el banco no te deposita lo que vendiste](/blog/conciliacion-de-pagos-por-que-no-cuadra-lo-que-te-depositan).",
        },
        {
          h2: "Cuánto cuesta",
          body:
            "La integración de pagos se cotiza dentro del proyecto donde va. En Websy, una tienda virtual parte desde S/ 2,500 con las pasarelas de pago locales incluidas, y una app web o móvil desde S/ 15,000. Si ya tienes web o tienda y solo necesitas conectar la pasarela, el monto depende de la plataforma y de la forma de cobro. Los montos son referenciales; la cifra exacta va por escrito en tu [cotización](/cotizacion). Aparte, cada pasarela cobra su propia comisión por transacción.",
        },
      ]}
      related={[
        { label: "Tiendas virtuales", href: "/tiendas-virtuales", desc: "Tienda autoadministrable con Yape, Plin y tarjetas integrados." },
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Apps, ERP, SaaS y sistemas web con pagos por API." },
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Comprobantes electrónicos y conciliación de cobros." },
        { label: "Cotiza tu proyecto", href: "/cotizacion", desc: "Te ayudamos a elegir e integrar tu pasarela." },
      ]}
      articles={[
        { label: "Pasarelas de pago para ecommerce en Perú", href: "/blog/pasarelas-de-pago-para-ecommerce-en-peru", desc: "Yape, Plin y tarjetas: cómo combinarlos." },
        { label: "Cómo integrar Yape y Plin en tu tienda virtual", href: "/blog/como-integrar-yape-y-plin-en-tu-tienda-virtual", desc: "Pago manual, pasarela o QR dinámico." },
        { label: "Cómo cobrar con Izipay en tu página web", href: "/blog/como-cobrar-con-izipay-en-tu-pagina-web", desc: "Del enlace de pago a la integración en el checkout." },
      ]}
      faqs={[
        {
          q: "¿Qué pasarela acepta tarjetas y Yape a la vez en Perú?",
          a: "Varias: Izipay, Niubiz y Culqi procesan tarjetas y también Yape y Plin. Culqi, por ejemplo, publica que acepta Visa, Mastercard, Diners, American Express, Yape y Plin desde una sola integración. La elección depende de tu plataforma y de las condiciones que te ofrezca cada una.",
        },
        {
          q: "¿Se puede cobrar con Yape sin redirigir al cliente a otra página?",
          a: "Sí, con una integración por API: el formulario de pago vive dentro de tu checkout y el cliente confirma en Yape sin salir de tu web. Requiere desarrollo y un webhook que reciba la confirmación. El link de pago y el agregador, en cambio, llevan al cliente a una página del proveedor.",
        },
        {
          q: "¿Cuánto cobran las pasarelas de pago en Perú?",
          a: "La comisión la fija cada pasarela, cambia según el medio de pago y se actualiza con el tiempo, así que conviene confirmarla con el proveedor antes de firmar. Las tarifas que publican Culqi e Izipay están comparadas en el artículo cobrar con Yape: link, API o agregador del blog de Websy; Niubiz no publica sus comisiones en abierto.",
        },
        {
          q: "¿Puedo aceptar Yape y Plin sin pasarela de pago?",
          a: "Sí, con pago manual: muestras tu QR o número, el cliente paga y te envía el comprobante. Funciona para empezar, pero cada pedido se confirma a mano. Con una pasarela la confirmación es automática.",
        },
        {
          q: "¿Qué necesito para afiliarme a una pasarela?",
          a: "RUC o tu documento si eres persona natural con negocio, una cuenta bancaria a nombre del mismo titular, una web con HTTPS y políticas publicadas, y la descripción de lo que vendes. El alta suele ser gratuita y la aprobación tarda de unos días a un par de semanas según el rubro.",
        },
        {
          q: "¿Integran pagos en una tienda o web que ya tengo?",
          a: "Sí. En WooCommerce o Shopify configuramos el módulo de la pasarela; en una web o sistema a medida integramos por API. En los dos casos probamos con una compra real antes de abrir el cobro al público.",
        },
      ]}
      serviceName="Integración de Yape, Plin y pasarelas de pago"
      serviceDescription="Integración de Yape, Plin y pasarelas de pago con tarjeta (Izipay, Niubiz, Culqi y Mercado Pago) en páginas web, tiendas virtuales WooCommerce y Shopify, apps y sistemas a medida en Perú, con confirmación automática por webhook y conciliación."
    />
  );
}
