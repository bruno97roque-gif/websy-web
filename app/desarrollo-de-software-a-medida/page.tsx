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
      ]}
      related={[
        { label: "Sistema de inventario", href: "/sistemas/inventario", desc: "Controla stock, almacenes y pedidos en tiempo real." },
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Vende y emite comprobantes electrónicos en un flujo." },
        { label: "Gestión ERP y CRM", href: "/sistemas/gestion-erp-crm", desc: "Integra ventas, clientes y procesos en una plataforma." },
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
