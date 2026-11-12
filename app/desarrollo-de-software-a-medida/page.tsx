import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";
import { PORTAFOLIO_SOFTWARE } from "@/lib/portfolio";

export const metadata: Metadata = pageMeta({
  path: "/desarrollo-de-software-a-medida",
  title: "Software a medida en Perú: desarrollo para empresas",
  description:
    "Software a medida en Perú para empresas: sistemas web, apps, CRM y ERP hechos sobre tu proceso, por etapas y con el código a tu nombre. Desde S/ 15,000 referencial.",
});

export default function SoftwareAMedidaPage() {
  return (
    <ServiceLanding
      slug="/desarrollo-de-software-a-medida"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
      ]}
      eyebrow="Software · Apps · Sistemas"
      h1="Desarrollo de software a medida para empresas en Perú"
      intro="Desarrollamos software a medida para empresas y emprendedores en Perú: aplicaciones a medida web y móviles, CRM, ERP, plataformas SaaS y sistemas de inventario o ventas que se adaptan a cómo trabajas, no al revés. El código y los datos quedan a nombre de tu empresa."
      highlights={["Aplicaciones web", "Apps móviles", "CRM", "ERP", "SaaS", "Sistemas web"]}
      stats={[
        { value: "A medida", label: "Hecho para tu operación" },
        { value: "Web", label: "Accede desde cualquier lugar" },
        { value: "Integrable", label: "Con tus sistemas actuales" },
        { value: "Escalable", label: "Crece con tu empresa" },
      ]}
      sections={[
        {
          h2: "Sistemas web para empresas",
          body:
            "Un sistema a medida resuelve exactamente tu problema: controlar stock, registrar ventas, emitir comprobantes o coordinar a tu equipo. Construimos aplicaciones web seguras a las que accedes desde cualquier dispositivo, sin instalar nada.",
          bullets: [
            "Desarrollo de sistemas web personalizados para tu proceso.",
            "Desarrollo de aplicaciones web seguras y accesibles desde la nube.",
            "Plataformas web a medida que reemplazan el trabajo manual.",
            "Paneles con reportes para tomar decisiones con datos.",
          ],
        },
        {
          h2: "Software a medida para empresas: qué área se automatiza primero",
          body:
            "Un software a medida para empresas no tiene que cubrir todo desde el día uno. Lo normal es empezar por el área donde hoy se pierde más tiempo o más plata, ponerla en producción y sumar módulos después. Estas son las áreas que más se piden y el módulo que suele resolverlas:",
          bullets: [
            "Ventas y caja: registro de ventas, cobro con Yape, Plin o tarjeta y comprobantes electrónicos, en el [sistema de ventas y facturación](/sistemas/ventas-y-facturacion).",
            "Almacén y logística: entradas, salidas, transferencias entre sedes y stock mínimo, en el [sistema de inventario](/sistemas/inventario).",
            "Clientes y seguimiento comercial: cotizaciones, oportunidades y recordatorios por vendedor, en un [CRM a medida](/sistemas/crm-a-medida).",
            "Operación completa: compras, ventas, stock, caja y reportes conectados en un [ERP a medida](/sistemas/gestion-erp-crm).",
            "Atención a tus clientes: portales donde consultan pedidos, reservan o descargan documentos, como [aplicación web](/desarrollo-de-aplicaciones-web) o [app móvil](/desarrollo-de-aplicaciones-moviles).",
            "Reportes para gerencia: paneles que juntan los datos de todas las áreas sin armar el Excel cada lunes.",
          ],
        },
        {
          h2: "Casos de uso de software a medida",
          body:
            "Son situaciones típicas que llegan como consulta y cómo se resuelven con desarrollo propio. No son clientes concretos: sirven para que reconozcas tu caso y sepas por qué módulo empezar.",
          table: {
            cabeceras: ["Situación de la empresa", "Qué se desarrolla", "Por dónde se empieza"],
            filas: [
              ["Distribuidora con dos o más almacenes que cuadra el stock a mano", "Inventario multi-almacén conectado a ventas", "[Sistema de inventario](/sistemas/inventario)"],
              ["Tienda con local y venta online que vende lo que ya no tiene", "Stock único para el local y la [tienda virtual](/tiendas-virtuales)", "Inventario conectado a la tienda"],
              ["Clínica o consultorio que agenda por WhatsApp y pierde citas", "Agenda por especialista, historia clínica y caja", "[Sistema para clínicas](/sistemas/sistema-para-clinicas)"],
              ["Hotel u hospedaje que lleva reservas en un cuaderno", "Reservas, habitaciones, caja y reportes", "[Sistema hotelero](/sistemas/sistema-hotelero)"],
              ["Restaurante con pedidos en salón, delivery y para llevar", "Comandas, caja y control de insumos", "[Sistema para restaurantes](/sistemas/sistema-para-restaurantes)"],
              ["Empresa de servicios que cotiza en Word y no sabe qué cotización cerró", "CRM con cotizaciones y seguimiento", "[CRM a medida](/sistemas/crm-a-medida)"],
              ["Negocio que quiere vender su sistema a otras empresas", "Plataforma por suscripción", "[Desarrollo de SaaS](/desarrollo-de-saas)"],
            ],
          },
        },
        {
          h2: "Qué software desarrollamos",
          bullets: [
            "[Aplicaciones web](/desarrollo-de-aplicaciones-web): portales de clientes, paneles de pedidos y plataformas internas que se usan desde el navegador.",
            "[Aplicaciones móviles](/desarrollo-de-aplicaciones-moviles) para celulares Android e iOS, para tus clientes o para tu equipo en campo.",
            "[CRM a medida](/sistemas/crm-a-medida) para registrar clientes, cotizaciones y seguimiento de ventas a tu manera.",
            "[ERP a medida](/sistemas/gestion-erp-crm) que integra ventas, compras, stock, caja y reportes; por ejemplo, un sistema hotelero.",
            "[Plataformas SaaS](/desarrollo-de-saas): software que tú vendes por suscripción a otras empresas.",
            "Sistemas de inventario, ventas y facturación electrónica, e intranets para coordinar a tu equipo.",
          ],
        },
        {
          h2: "Quiero desarrollar mi propio software: por dónde empezar",
          body:
            "Casi siempre se empieza por una frase: «quiero mi propio CRM», «necesito una app para mis clientes» o «quiero dejar el Excel». Antes de hablar de tecnología, conviene responder tres cosas: qué proceso quieres resolver primero, quién va a usar el sistema y qué tiene que pasar con los datos que hoy tienes. Con eso se define una primera versión que funcione en pocas semanas y se le suman módulos después. Si dudas entre comprar un programa o hacer el tuyo, lee [CRM a medida o enlatado](/blog/crm-a-medida-vs-crm-enlatado) y [software a medida vs enlatado](/blog/software-a-medida-vs-software-enlatado).",
        },
        {
          h2: "¿Cuándo conviene un sistema a medida?",
          body:
            "Cuando tu operación ya no cabe en Excel, cuando cometes errores por procesos manuales o cuando ningún software del mercado encaja con tu forma de trabajar. Ahí un sistema a medida deja de ser un gasto y se vuelve una inversión que ahorra horas cada semana.",
        },
        {
          h2: "Software a medida o software enlatado: cómo se decide",
          body:
            "No siempre conviene desarrollar. Un software del mercado es más barato de arrancar y se paga por mes; uno a medida cuesta más al inicio y después no tiene mensualidad de licencia. La decisión no es de presupuesto, es de proceso: si tu forma de trabajar es lo que te diferencia de la competencia, adaptarla a un enlatado es renunciar a ella.",
          table: {
            cabeceras: ["", "Software del mercado", "Software a medida"],
            filas: [
              ["Se adapta a", "Su propio flujo; tú te acomodas", "Tu proceso, tal como lo trabajas"],
              ["Arranque", "Rápido, ya está hecho", "Por etapas, empezando por lo urgente"],
              ["Costo en el tiempo", "Mensualidad por usuario, siempre", "Inversión inicial y luego solo soporte"],
              ["Integraciones", "Las que el proveedor decida ofrecer", "Las que tu operación necesite"],
              ["Si crece la empresa", "Cambias de plan o de sistema", "Se le suman módulos al mismo sistema"],
            ],
          },
        },
        {
          h2: "Precios referenciales de software a medida en Perú",
          body:
            "Estos son los montos desde los que parte cada tipo de proyecto en Websy. La cifra final sale del relevamiento, según módulos, usuarios, integraciones y reportes, y va por escrito en la propuesta antes de empezar. Si quieres el detalle de qué mueve cada monto, está en [cuánto cuesta un software a medida en Perú](/blog/cuanto-cuesta-un-software-a-medida-en-peru).",
          table: {
            cabeceras: ["Tipo de proyecto", "Desde (referencial)", "Ejemplo"],
            filas: [
              ["Aplicación web", "S/ 15,000", "Portal de clientes, panel de pedidos o plataforma interna"],
              ["Aplicación móvil (Android e iOS)", "S/ 15,000", "App para tus clientes o para tu equipo en campo"],
              ["Software a medida tipo ERP", "S/ 20,000 a S/ 25,000", "Sistema hotelero: reservas, habitaciones, caja y reportes"],
              ["Plataforma SaaS", "S/ 20,000 a S/ 30,000", "Software que vendes por suscripción a otras empresas"],
              ["Tienda virtual", "S/ 2,500", "Ecommerce con Yape, Plin y tarjeta"],
            ],
            nota: "Los precios son referenciales y varían según el alcance del proyecto. Montos en soles informados por Websy en octubre de 2026.",
          },
        },
        {
          h2: "Cómo trabajamos un proyecto de software en Perú",
          body:
            "Ningún sistema se entrega de una sola vez. Lo dividimos en etapas que se pueden poner en producción por separado, para que empieces a usar la primera mientras construimos la segunda y el proyecto se pague con lo que ya te ahorra.",
          bullets: [
            "Relevamiento: nos sentamos con quien hace el trabajo hoy y mapeamos el proceso real, con sus excepciones.",
            "Alcance por etapas: definimos qué entra en la primera versión y qué espera, por escrito y antes de programar.",
            "Desarrollo con entregas parciales: ves avances funcionando, no capturas de pantalla.",
            "Migración de tus datos actuales, para que el sistema no arranque vacío.",
            "Capacitación del equipo que lo va a usar y acompañamiento las primeras semanas.",
            "Soporte y evolución: el sistema sigue cambiando porque tu negocio también cambia.",
          ],
        },
        {
          h2: "Se conecta con la facturación electrónica y con lo que ya usas",
          body:
            "Un sistema que obliga a registrar la misma venta dos veces no ahorra trabajo, lo duplica. Por eso todo lo que desarrollamos se integra con las herramientas que la empresa ya tiene funcionando.",
          bullets: [
            "Emisión de comprobantes electrónicos a través de tu proveedor autorizado.",
            "Pasarelas de pago peruanas: Yape, Plin, Niubiz, Izipay.",
            "Tu tienda virtual, para que el stock se descuente al vender.",
            "Hojas de cálculo y reportes que tu contador ya espera en un formato concreto.",
            "Otros sistemas por API, cuando el dato tiene que viajar solo.",
          ],
        },
        {
          h2: "El código y los datos son de tu empresa",
          body:
            "Es la pregunta que casi nadie hace al cotizar y la que más cara sale después. Al terminar, el código fuente, la base de datos y los accesos al servidor quedan a nombre de tu empresa: puedes llevarte el sistema a otro proveedor cuando quieras. Lo explicamos en detalle en [de quién es el código, el dominio y los accesos](/blog/de-quien-es-el-codigo-el-dominio-y-los-accesos).",
        },
      ]}
      related={[
        { label: "Aplicaciones web", href: "/desarrollo-de-aplicaciones-web", desc: "Portales de clientes, reservas en línea y web apps." },
        { label: "Aplicaciones móviles", href: "/desarrollo-de-aplicaciones-moviles", desc: "Apps para Android e iOS para tus clientes o tu equipo." },
        { label: "Desarrollo de SaaS", href: "/desarrollo-de-saas", desc: "Tu propio software para vender por suscripción a otras empresas." },
        { label: "CRM a medida", href: "/sistemas/crm-a-medida", desc: "Tu propio sistema de clientes y seguimiento de ventas." },
        { label: "Sistemas web: cuál necesitas", href: "/sistemas", desc: "Qué es un sistema web, qué tipos hay y por cuál conviene empezar." },
        { label: "Sistema de inventario y stock", href: "/sistemas/inventario", desc: "Controla entradas, salidas y multi-almacén en tiempo real." },
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Vende y emite comprobantes electrónicos en un solo flujo." },
        { label: "Sistema de gestión (ERP / CRM)", href: "/sistemas/gestion-erp-crm", desc: "Centraliza operación, clientes y reportes de tu empresa." },
        { label: "Tiendas virtuales / ecommerce", href: "/tiendas-virtuales", desc: "¿Tu sistema necesita vender online? Súmale una tienda virtual." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu sistema y cómo empezar por etapas." },
      ]}
      articles={[
        { label: "Qué es un software a medida", href: "/blog/que-es-un-software-a-medida", desc: "La definición, con ejemplos, antes de pedir una cotización." },
        { label: "Sistema de gestión: cuándo dejar el Excel", href: "/blog/sistema-de-gestion-para-pymes-cuando-dejar-el-excel", desc: "Señales de que tu pyme ya necesita un sistema propio." },
        { label: "¿Cuándo una empresa necesita un sistema web?", href: "/blog/cuando-una-empresa-necesita-un-sistema-web", desc: "Señales de que tu operación ya pide un software a medida." },
        { label: "Cómo controlar inventario en una tienda online", href: "/blog/como-controlar-inventario-en-una-tienda-online", desc: "Integra stock y ventas para dejar de cuadrar a mano." },
        { label: "Página web, sistema web y software a medida", href: "/blog/pagina-web-sistema-web-y-software-a-medida", desc: "Qué es cada cosa y cuál pedir según tu problema." },
        { label: "Cómo leer una cotización de desarrollo", href: "/blog/como-leer-una-cotizacion-de-pagina-web", desc: "Qué mirar en una propuesta antes de firmarla." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta desarrollar un software a medida?",
          a: "Como referencia, en Websy una aplicación web o móvil parte desde S/ 15,000, un software a medida tipo ERP desde S/ 20,000 a S/ 25,000 y una plataforma SaaS desde S/ 20,000 a S/ 30,000. Los montos indicados son referenciales: el precio final depende de módulos, usuarios, integraciones y reportes, y te lo entregamos por escrito tras un relevamiento de tu proceso.",
        },
        {
          q: "¿Se integra con mi facturación electrónica o mis sistemas actuales?",
          a: "Sí. Integramos el sistema con facturación electrónica, pasarelas de pago, CRM u otras herramientas que ya uses, para que todo trabaje conectado.",
        },
        {
          q: "¿Desarrollan software a medida para empresas pequeñas?",
          a: "Sí. Una pyme no necesita un ERP completo para empezar: se arranca con el módulo que más trabajo ahorra, por ejemplo inventario o ventas, y se le suman módulos cuando la operación lo pide. Así la inversión se reparte en etapas.",
        },
        {
          q: "¿Hacen aplicaciones a medida para celular?",
          a: "Sí. Desarrollamos aplicaciones a medida para Android e iOS, para tus clientes o para tu equipo en campo, y pueden compartir la misma base de datos que tu sistema web.",
        },
        {
          q: "¿Cuál es la diferencia entre página web, sistema web y software a medida?",
          a: "Una página web comunica y capta clientes; un sistema web automatiza un proceso (inventario, ventas); un software a medida es una plataforma completa diseñada para tu operación específica. Te ayudamos a identificar qué necesitas.",
        },
      ]}
      portfolio={PORTAFOLIO_SOFTWARE}
      serviceName="Desarrollo de software a medida"
      serviceDescription="Desarrollo de software a medida para empresas en Perú: aplicaciones web y móviles, CRM, ERP, plataformas SaaS, sistemas de inventario, ventas y facturación e intranets."
    />
  );
}
