import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/sistemas/gestion-erp-crm",
  title: "Sistema de gestión ERP y CRM a medida en Perú",
  description:
    "Desarrollo de sistemas de gestión empresarial (ERP) y CRM a medida en Perú. Integra ventas, clientes, procesos e intranet en una sola plataforma para tu empresa.",
});

export default function SistemaErpCrmPage() {
  return (
    <ServiceLanding
      slug="/sistemas/gestion-erp-crm"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Gestión ERP / CRM", path: "/sistemas/gestion-erp-crm" },
      ]}
      eyebrow="Sistema · Gestión ERP / CRM"
      h1="Sistema de gestión empresarial: ERP y CRM a medida"
      intro="Desarrollamos sistemas de gestión empresarial (ERP) y CRM a medida para empresas en Perú: integramos ventas, clientes, procesos internos e intranet en una sola plataforma. Automatiza lo repetitivo, ordena la información y toma decisiones con datos reales."
      highlights={["ERP a medida", "CRM de clientes", "Intranet", "Automatización", "Integraciones"]}
      stats={[
        { value: "Integrado", label: "Todo tu negocio conectado" },
        { value: "CRM", label: "Seguimiento de clientes" },
        { value: "Automatiza", label: "Procesos sin trabajo manual" },
        { value: "A medida", label: "Para tu forma de operar" },
      ]}
      sections={[
        {
          h2: "Un solo lugar para gestionar tu empresa",
          body:
            "Cuando cada área usa su propio Excel, la información se duplica y nadie ve el panorama completo. Un sistema de gestión empresarial (ERP) integra tus procesos clave para que todo trabaje conectado y con datos al día.",
          bullets: [
            "Módulos a medida: ventas, compras, clientes, proyectos, RR. HH.",
            "Desarrollo de CRM para registrar y dar seguimiento a tus clientes.",
            "Automatización de procesos que hoy haces a mano.",
            "Tableros y reportes para decidir con información real.",
          ],
        },
        {
          h2: "CRM: que ningún cliente se enfríe",
          body:
            "Centraliza contactos, oportunidades y seguimientos. Tu equipo sabe con quién hablar, cuándo y qué se prometió, sin depender de la memoria de cada vendedor.",
        },
        {
          h2: "Intranet e integraciones",
          bullets: [
            "Intranet para coordinar a tu equipo y centralizar documentos.",
            "Integración con facturación, pasarelas de pago y otros sistemas.",
            "Usuarios y permisos por área para mantener el control.",
          ],
        },
        {
          h2: "A medida o enlatado: cómo decidir sin equivocarse",
          body:
            "La pregunta correcta no es cuál es mejor, sino cuánto de tu proceso estás dispuesto a cambiar. Un sistema enlatado se paga por usuario cada mes y te obliga a trabajar como él espera; uno a medida se construye alrededor de tu operación y es tuyo. La decisión suele inclinarse así:",
          bullets: [
            "Si tu proceso es estándar y no te diferencia de la competencia, el enlatado suele bastar.",
            "Si lo que te hace competitivo es justo ese proceso, un enlatado te obliga a renunciar a él.",
            "Si ya pagas varias herramientas que no se hablan entre sí, la suma mensual suele superar al desarrollo propio en pocos años.",
            "Si necesitas integrarte con SUNAT, con tu courier o con tu tienda virtual, revisa antes si el enlatado lo permite: muchas veces esa integración es el plan más caro.",
            "Si tu equipo crece, mira cómo escala el precio: por usuario puede volverse el gasto que más sube sin que tú vendas más.",
          ],
        },
        {
          h2: "Por dónde empezar cuando todo urge",
          body:
            "Casi ninguna empresa necesita todos los módulos a la vez, y quien intenta arrancar con todo termina sin nada en producción. El orden que mejor funciona es empezar por el proceso que hoy te hace perder dinero de forma medible —el que genera reclamos, retrabajo o descuadres— y recién después sumar lo que lo alimenta. Un primer módulo en uso real vale más que un plan completo en un documento: enseña cómo trabaja de verdad el equipo y corrige los supuestos del resto antes de que cuesten caro.",
        },
        {
          h2: "Cómo es el proceso de desarrollo",
          body:
            "Se levanta el proceso actual con quien lo ejecuta —no solo con la gerencia—, se define el alcance por escrito, se desarrolla por módulos con entregas revisables, se migran los datos que ya tienes y se capacita por rol antes de salir en vivo. Después queda el acompañamiento, que en un sistema de gestión pesa más que en una web: los primeros meses de uso real siempre revelan ajustes. Si tu punto de partida es el stock, míralo junto al [sistema de inventario](/sistemas/inventario); si es la caja, con el [sistema de ventas y facturación](/sistemas/ventas-y-facturacion).",
        },
      ]}
      articles={[
        {
          label: "Sistema de gestión para pymes: cuándo dejar el Excel",
          href: "/blog/sistema-de-gestion-para-pymes-cuando-dejar-el-excel",
          desc: "Las señales de que la hoja de cálculo ya no da más.",
        },
        {
          label: "Software a medida vs software enlatado",
          href: "/blog/software-a-medida-vs-software-enlatado",
          desc: "Qué conviene a tu negocio y en qué casos gana cada uno.",
        },
        {
          label: "Cómo automatizar los procesos de tu empresa",
          href: "/blog/como-automatizar-los-procesos-de-tu-empresa",
          desc: "Qué procesos automatizar primero y cuánto tiempo devuelven.",
        },
      ]}
      related={[
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Vuelve al pilar y mira todos los sistemas que desarrollamos." },
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Suma ventas y comprobantes a tu gestión." },
      ]}
      faqs={[
        {
          q: "¿Qué diferencia hay entre un ERP y un CRM?",
          a: "Un ERP integra la gestión interna (ventas, compras, inventario, procesos); un CRM se enfoca en la relación con tus clientes y el seguimiento comercial. Podemos desarrollarlos por separado o como una sola plataforma.",
        },
        {
          q: "¿Se integra con sistemas que ya uso?",
          a: "Sí. Conectamos el sistema con tu facturación electrónica, pasarelas de pago, tienda virtual u otras herramientas para que todo trabaje unido.",
        },
        {
          q: "¿Se puede empezar por un módulo e ir creciendo?",
          a: "Sí, es lo más recomendable: arrancamos con lo que más te urge y vamos sumando módulos por etapas.",
        },
        {
          q: "¿Qué pasa con los datos que ya tengo en Excel o en otro sistema?",
          a: "Se migran. Revisamos tus archivos actuales, limpiamos duplicados y cargamos la información al sistema nuevo para que arranques con tu histórico, no desde cero.",
        },
        {
          q: "¿El sistema es mío o lo alquilo?",
          a: "Es tuyo. Al ser desarrollo a medida, el sistema y su código quedan a tu nombre, sin pago por usuario ni dependencia de una plataforma que puede cambiar sus precios.",
        },
        {
          q: "¿Cuánto demora tener el primer módulo funcionando?",
          a: "Depende del alcance, y por eso el plazo se define por escrito antes de empezar. Lo que sí es constante es el enfoque: primero un módulo en uso real y luego los demás, para que el equipo lo adopte por partes.",
        },
      ]}
      serviceName="Sistema de gestión empresarial (ERP) y CRM"
      serviceDescription="Desarrollo de ERP y CRM a medida para empresas en Perú: integración de ventas, clientes, procesos e intranet con automatización en una sola plataforma."
    />
  );
}
