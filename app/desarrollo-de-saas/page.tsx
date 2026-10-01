import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/desarrollo-de-saas",
  title: "Desarrollo de SaaS a Medida en Perú",
  description:
    "Desarrollo de plataformas SaaS en Perú: convertimos tu idea en un software que vendes por suscripción, con cuentas por cliente, planes, cobros recurrentes y panel de administración.",
});

export default function DesarrolloSaasPage() {
  return (
    <ServiceLanding
      slug="/desarrollo-de-saas"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Desarrollo de SaaS", path: "/desarrollo-de-saas" },
      ]}
      eyebrow="Software · SaaS"
      h1="Desarrollo de SaaS: tu propio software por suscripción"
      intro="Desarrollamos plataformas SaaS para emprendedores y empresas en Perú: un software que vive en la nube y que tú vendes por suscripción a otros negocios. Construimos las cuentas por cliente, los planes, el cobro recurrente y tu panel de administración, empezando por una primera versión que ya puedas vender."
      highlights={["Multiempresa", "Planes y suscripciones", "Cobro recurrente", "Panel de administración", "En la nube"]}
      stats={[
        { value: "Tu producto", label: "Lo vendes con tu marca" },
        { value: "Multiempresa", label: "Cada cliente con sus datos" },
        { value: "Recurrente", label: "Ingresos por suscripción" },
        { value: "Por etapas", label: "Primero lo que ya se vende" },
      ]}
      sections={[
        {
          h2: "Qué es un SaaS y en qué se diferencia de un software a medida",
          body:
            "Un software a medida se hace para una sola empresa y se adapta a su operación. Un SaaS (software como servicio) se hace para muchas empresas a la vez: cada una entra con su cuenta, paga una suscripción y ve solo sus datos. Por eso un SaaS necesita piezas que un sistema interno no tiene, y es lo que más pesa en su desarrollo.",
          table: {
            cabeceras: ["", "Software a medida", "Plataforma SaaS"],
            filas: [
              ["Para quién", "Una empresa y su equipo", "Muchas empresas que pagan por usarlo"],
              ["Quién es el dueño", "La empresa que lo usa", "Tú, que lo vendes"],
              ["Cómo se cobra", "Desarrollo y luego soporte", "Suscripción mensual o anual de tus clientes"],
              ["Lo que no puede faltar", "Que calce con el proceso", "Cuentas separadas, planes y cobro recurrente"],
            ],
          },
        },
        {
          h2: "Qué construimos en tu plataforma SaaS",
          bullets: [
            "Registro y cuentas por empresa, con usuarios y permisos dentro de cada una.",
            "Separación de datos: cada cliente ve solo su información.",
            "Planes, periodos de prueba y límites por plan.",
            "Cobro recurrente con tarjeta a través de una pasarela de pagos.",
            "Tu panel de administración: clientes, suscripciones, pagos y métricas de uso.",
            "La funcionalidad que vendes: el módulo que resuelve el problema de tus clientes.",
          ],
        },
        {
          h2: "Empezar por una primera versión que ya se venda",
          body:
            "El error más caro en un SaaS es construir durante meses algo que nadie ha probado. Definimos contigo la versión mínima que un cliente pagaría hoy, la ponemos en manos de tus primeros usuarios y decidimos las siguientes funciones con lo que ellos usan de verdad. Así el producto empieza a cobrar antes de estar completo.",
          bullets: [
            "Validación: qué problema resuelve y quién paga por resolverlo.",
            "Alcance de la primera versión por escrito, con lo que entra y lo que espera.",
            "Desarrollo con entregas que puedes mostrar a clientes potenciales.",
            "Lanzamiento con tus primeros clientes y medición del uso.",
            "Nuevas versiones según lo que piden los que ya pagan.",
          ],
        },
        {
          h2: "Precio referencial de una plataforma SaaS",
          body:
            "El desarrollo de un SaaS parte en Websy desde S/ 20,000 a S/ 30,000, según cuántas funciones entren en la primera versión y qué integraciones necesite. Ya hemos desarrollado plataformas SaaS para otros clientes, y el rango sale de esa experiencia. Los montos indicados son referenciales; la cifra exacta va por escrito en la propuesta. Si comparas con otros tipos de proyecto, mira los [precios de software a medida](/desarrollo-de-software-a-medida).",
        },
        {
          h2: "El código y la plataforma son tuyos",
          body:
            "En un SaaS, el software es tu negocio, así que no puede quedar en manos de quien lo programó. El código fuente, la base de datos, el servidor y las cuentas de la pasarela de pagos quedan a nombre de tu empresa. Lo explicamos en [de quién es el código, el dominio y los accesos](/blog/de-quien-es-el-codigo-el-dominio-y-los-accesos).",
        },
      ]}
      related={[
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Si el sistema es para tu propia empresa, no para venderlo." },
        { label: "Aplicaciones móviles", href: "/desarrollo-de-aplicaciones-moviles", desc: "Suma una app para Android e iOS a tu plataforma." },
        { label: "Sistema de gestión ERP / CRM", href: "/sistemas/gestion-erp-crm", desc: "Un ERP o CRM a medida para ordenar tu operación." },
        { label: "Precios y cotización", href: "/precios", desc: "Desde cuánto parte cada servicio y cómo pedir tu propuesta." },
      ]}
      articles={[
        { label: "Cuánto cuesta un software a medida en Perú", href: "/blog/cuanto-cuesta-un-software-a-medida-en-peru", desc: "Desde cuánto parte una app, un ERP o un SaaS." },
        { label: "Software a medida vs software enlatado", href: "/blog/software-a-medida-vs-software-enlatado", desc: "Lo que tus futuros clientes comparan antes de pagarte." },
        { label: "De quién es el código, el dominio y los accesos", href: "/blog/de-quien-es-el-codigo-el-dominio-y-los-accesos", desc: "Qué debe quedar a tu nombre al terminar." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta desarrollar un SaaS en Perú?",
          a: "En Websy, una plataforma SaaS parte desde S/ 20,000 a S/ 30,000, según las funciones de la primera versión y sus integraciones. Los montos indicados son referenciales.",
        },
        {
          q: "¿Qué necesito tener antes de desarrollar mi SaaS?",
          a: "Saber qué problema resuelve y a quién. Si ya tienes clientes que hoy lo resuelven a mano o con hojas de cálculo, tienes lo más importante. El resto lo definimos juntos en la etapa de alcance.",
        },
        {
          q: "¿Pueden cobrar las suscripciones de mis clientes automáticamente?",
          a: "Sí. Integramos una pasarela que cobra la suscripción con tarjeta cada mes o cada año, y tu panel muestra quién pagó, quién está en prueba y quién se dio de baja.",
        },
        {
          q: "¿El SaaS es mío o de la agencia?",
          a: "Es tuyo. El código, la base de datos, el servidor y las cuentas de pago quedan a nombre de tu empresa. Nosotros podemos seguir dando soporte, pero no dependes de nosotros para operar.",
        },
      ]}
      serviceName="Desarrollo de plataformas SaaS"
      serviceDescription="Desarrollo de plataformas SaaS en Perú: software en la nube que se vende por suscripción, con cuentas por empresa, planes, cobro recurrente y panel de administración."
    />
  );
}
