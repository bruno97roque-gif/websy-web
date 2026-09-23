import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/desarrollo-de-software-a-medida",
  title: "Desarrollo de Software a Medida en Perú",
  description:
    "Desarrollo de software y sistemas web a medida para empresas en Perú: sistemas de inventario, ventas, facturación, CRM e intranets que automatizan tu operación.",
});

export default function SoftwareAMedidaPage() {
  return (
    <ServiceLanding
      slug="/desarrollo-de-software-a-medida"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
      ]}
      eyebrow="Software · Sistemas Web"
      h1="Desarrollo de software a medida en Perú"
      intro="Desarrollamos software y sistemas web a medida para empresas en Perú: plataformas que se adaptan a cómo trabajas, no al revés. Automatizamos inventario, ventas, facturación y gestión para que dejes las hojas de cálculo y el trabajo manual atrás."
      highlights={["Sistemas web", "Inventario", "Ventas y facturación", "CRM / ERP", "Intranets"]}
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
          h2: "Tipos de sistema que desarrollamos",
          bullets: [
            "Sistema de inventario y control de stock para tu almacén o tienda.",
            "Sistema de ventas y facturación, con integración a facturación electrónica.",
            "Sistema de gestión empresarial (ERP) y desarrollo de CRM para tus clientes.",
            "Intranets y plataformas internas para coordinar a tu equipo.",
            "Automatización de procesos e integración entre sistemas.",
          ],
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
        { label: "Sistemas web: cuál necesitas", href: "/sistemas", desc: "Qué es un sistema web, qué tipos hay y por cuál conviene empezar." },
        { label: "Sistema de inventario y stock", href: "/sistemas/inventario", desc: "Controla entradas, salidas y multi-almacén en tiempo real." },
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Vende y emite comprobantes electrónicos en un solo flujo." },
        { label: "Sistema de gestión (ERP / CRM)", href: "/sistemas/gestion-erp-crm", desc: "Centraliza operación, clientes y reportes de tu empresa." },
        { label: "Tiendas virtuales / ecommerce", href: "/tiendas-virtuales", desc: "¿Tu sistema necesita vender online? Súmale una tienda virtual." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu sistema y cómo empezar por etapas." },
      ]}
      articles={[
        { label: "Sistema de gestión: cuándo dejar el Excel", href: "/blog/sistema-de-gestion-para-pymes-cuando-dejar-el-excel", desc: "Señales de que tu pyme ya necesita un sistema propio." },
        { label: "¿Cuándo una empresa necesita un sistema web?", href: "/blog/cuando-una-empresa-necesita-un-sistema-web", desc: "Señales de que tu operación ya pide un software a medida." },
        { label: "Cómo controlar inventario en una tienda online", href: "/blog/como-controlar-inventario-en-una-tienda-online", desc: "Integra stock y ventas para dejar de cuadrar a mano." },
        { label: "Página web, sistema web y software a medida", href: "/blog/pagina-web-sistema-web-y-software-a-medida", desc: "Qué es cada cosa y cuál pedir según tu problema." },
        { label: "Cómo leer una cotización de desarrollo", href: "/blog/como-leer-una-cotizacion-de-pagina-web", desc: "Qué mirar en una propuesta antes de firmarla." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta desarrollar un software a medida?",
          a: "Depende del alcance: módulos, usuarios, integraciones y reportes. Hacemos un relevamiento de tu proceso y te entregamos una propuesta clara con etapas y costos antes de empezar.",
        },
        {
          q: "¿Se integra con mi facturación electrónica o mis sistemas actuales?",
          a: "Sí. Integramos el sistema con facturación electrónica, pasarelas de pago, CRM u otras herramientas que ya uses, para que todo trabaje conectado.",
        },
        {
          q: "¿Cuál es la diferencia entre página web, sistema web y software a medida?",
          a: "Una página web comunica y capta clientes; un sistema web automatiza un proceso (inventario, ventas); un software a medida es una plataforma completa diseñada para tu operación específica. Te ayudamos a identificar qué necesitas.",
        },
      ]}
      serviceName="Desarrollo de software a medida"
      serviceDescription="Desarrollo de software y sistemas web a medida para empresas en Perú: inventario, ventas, facturación, CRM, ERP e intranets con automatización de procesos."
    />
  );
}
