import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/sistemas/gestion-erp-crm",
  title: "Sistema de Gestión Empresarial: ERP y CRM a Medida en Perú",
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
      ]}
      serviceName="Sistema de gestión empresarial (ERP) y CRM"
      serviceDescription="Desarrollo de ERP y CRM a medida para empresas en Perú: integración de ventas, clientes, procesos e intranet con automatización en una sola plataforma."
    />
  );
}
