import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/sistemas/crm-a-medida",
  title: "Desarrollo de CRM a Medida en Perú",
  description:
    "Desarrollo de CRM a medida en Perú: tu propio sistema de clientes, cotizaciones y seguimiento de ventas, conectado a WhatsApp, tu web y tu facturación, sin pago por usuario.",
});

export default function CrmAMedidaPage() {
  return (
    <ServiceLanding
      slug="/sistemas/crm-a-medida"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Sistemas Web", path: "/sistemas" },
        { name: "CRM a Medida", path: "/sistemas/crm-a-medida" },
      ]}
      eyebrow="Sistema · CRM"
      h1="Desarrollo de CRM a medida: tu propio sistema de clientes"
      intro="Desarrollamos CRM a medida para empresas en Perú: un sistema propio donde tu equipo registra cada cliente, cotización y seguimiento, con las etapas de venta tal como las trabajas. Se conecta a tu web, a WhatsApp y a tu facturación, y es tuyo: sin pago mensual por usuario."
      highlights={["Clientes y contactos", "Embudo de ventas", "Cotizaciones", "WhatsApp", "Reportes"]}
      stats={[
        { value: "Tu embudo", label: "Etapas como las trabajas" },
        { value: "Conectado", label: "Web, WhatsApp y facturación" },
        { value: "Sin licencias", label: "No pagas por usuario" },
        { value: "Tuyo", label: "Código y datos a tu nombre" },
      ]}
      sections={[
        {
          h2: "Cuándo conviene tener tu propio CRM",
          body:
            "Un CRM del mercado sirve mientras tu forma de vender se parezca a la que imaginó su fabricante. Conviene desarrollar el tuyo cuando pasa alguna de estas cosas:",
          bullets: [
            "Tu venta tiene pasos propios (visitas técnicas, muestras, aprobaciones) que el CRM comercial no contempla.",
            "Pagas licencias por usuario y el costo sube cada vez que entra un vendedor.",
            "Los contactos llegan por WhatsApp, la web y el teléfono y terminan en hojas de cálculo distintas.",
            "Necesitas que la cotización, el pedido y la factura salgan del mismo sistema.",
            "Tus vendedores no lo usan porque les pide datos que no sirven a tu negocio.",
          ],
        },
        {
          h2: "Qué incluye un CRM a medida",
          bullets: [
            "Ficha de cada cliente con su historial de conversaciones, cotizaciones y compras.",
            "Embudo de ventas con tus etapas y alertas cuando un cliente se queda sin seguimiento.",
            "Cotizaciones en PDF generadas desde el sistema, con tus precios y condiciones.",
            "Captura automática de contactos desde tu web y tus formularios.",
            "Usuarios y permisos por vendedor, supervisor y gerencia.",
            "Reportes de ventas por vendedor, canal y etapa para decidir con datos.",
          ],
        },
        {
          h2: "CRM a medida o CRM del mercado",
          body:
            "No siempre conviene desarrollar. Si tu proceso comercial es simple y estándar, un CRM del mercado arranca más rápido. La comparación completa, con ejemplos, está en [CRM a medida o enlatado: cuál conviene a tu pyme](/blog/crm-a-medida-vs-crm-enlatado).",
          table: {
            cabeceras: ["", "CRM del mercado", "CRM a medida"],
            filas: [
              ["Etapas de venta", "Las que trae, con ajustes limitados", "Las de tu negocio, con tus nombres"],
              ["Costo en el tiempo", "Licencia mensual por cada usuario", "Desarrollo inicial y luego solo soporte"],
              ["Integraciones", "Las que el proveedor ofrece en su plan", "Tu web, WhatsApp, facturación y lo que uses"],
              ["Tus datos", "En la plataforma del proveedor", "En tu servidor, a nombre de tu empresa"],
            ],
          },
        },
        {
          h2: "Se conecta con lo que ya usas",
          body:
            "Un CRM que obliga a copiar datos a mano termina abandonado. Por eso lo conectamos con las herramientas por donde hoy entran y salen tus ventas: los formularios de tu web, los enlaces de WhatsApp, tu [sistema de ventas y facturación](/sistemas/ventas-y-facturacion) y, si vendes en línea, tu [tienda virtual](/tiendas-virtuales). Si además necesitas ordenar compras, stock y caja, el CRM puede ser el primer módulo de un [ERP a medida](/sistemas/gestion-erp-crm).",
        },
        {
          h2: "Cuánto cuesta un CRM a medida",
          body:
            "Depende de cuántas etapas, usuarios e integraciones tenga tu proceso comercial. Lo habitual es empezar por la ficha de clientes y el embudo, y sumar cotizaciones, integraciones y reportes por etapas. Los montos desde los que parte cada tipo de proyecto, todos referenciales, están en [precios de software a medida](/desarrollo-de-software-a-medida).",
        },
      ]}
      related={[
        { label: "Sistema de gestión ERP", href: "/sistemas/gestion-erp-crm", desc: "Integra ventas, compras, stock y reportes en una plataforma." },
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Del CRM a la factura electrónica sin copiar datos." },
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Apps, ERP, SaaS y sistemas web hechos para tu operación." },
        { label: "Sistemas web: cuál necesitas", href: "/sistemas", desc: "Compara los tipos de sistema y elige por dónde empezar." },
      ]}
      articles={[
        { label: "Cómo crear tu propio CRM, paso a paso", href: "/blog/como-crear-tu-propio-crm", desc: "Etapas, datos, integraciones y primera versión." },
        { label: "CRM a medida o enlatado: cuál conviene", href: "/blog/crm-a-medida-vs-crm-enlatado", desc: "Costos, tiempos y cuándo gana cada uno." },
        { label: "Sistema de gestión: cuándo dejar el Excel", href: "/blog/sistema-de-gestion-para-pymes-cuando-dejar-el-excel", desc: "Señales de que tu pyme necesita un sistema propio." },
        { label: "Cuánto cuesta un software a medida en Perú", href: "/blog/cuanto-cuesta-un-software-a-medida-en-peru", desc: "Desde cuánto parte cada tipo de proyecto." },
      ]}
      faqs={[
        {
          q: "¿Qué es un CRM a medida?",
          a: "Es un sistema de gestión de clientes desarrollado para tu empresa: registra contactos, cotizaciones y seguimientos con las etapas de venta que tú usas, en lugar de adaptarte a las de un programa comercial.",
        },
        {
          q: "¿Puedo tener mi propio CRM sin pagar licencias mensuales?",
          a: "Sí. Al ser desarrollo a medida no hay pago por usuario. Solo cubres el servidor donde funciona y, si lo deseas, un plan de soporte y mejoras.",
        },
        {
          q: "¿Se puede conectar el CRM con WhatsApp?",
          a: "Sí. Se registra en el CRM cada contacto que llega desde los botones de WhatsApp de tu web y se puede abrir la conversación desde la ficha del cliente. Las integraciones más profundas dependen de la API de WhatsApp que uses.",
        },
        {
          q: "¿Qué pasa con los clientes que ya tengo en Excel?",
          a: "Se migran. Limpiamos duplicados y cargamos tu base actual para que el CRM arranque con tu historial, no vacío.",
        },
      ]}
      serviceName="Desarrollo de CRM a medida"
      serviceDescription="Desarrollo de CRM a medida en Perú: gestión de clientes, embudo de ventas, cotizaciones e integración con web, WhatsApp y facturación, sin licencias por usuario."
    />
  );
}
