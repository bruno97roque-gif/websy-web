import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/diseno-de-paginas-web",
  title: "Diseño de Páginas Web en Lima, Perú",
  description:
    "Diseño y desarrollo de páginas web para empresas en Lima y Perú. Páginas web profesionales, administrables, responsive y optimizadas para SEO, con hosting, dominio y WhatsApp.",
});

export default function DisenoPaginasWebPage() {
  return (
    <ServiceLanding
      slug="/diseno-de-paginas-web"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Diseño de Páginas Web", path: "/diseno-de-paginas-web" },
      ]}
      eyebrow="Diseño y Desarrollo Web"
      h1="Diseño de páginas web en Lima, Perú"
      intro="Diseñamos y desarrollamos páginas web profesionales para empresas en Lima y todo el Perú: sitios administrables, responsive y optimizados para SEO, con formulario, WhatsApp, hosting y dominio. Una página pensada para generar contactos, no solo para verse bien."
      highlights={["Responsive", "Administrable", "Optimizada SEO", "Con WhatsApp", "Hosting + dominio"]}
      stats={[
        { value: "24 h", label: "Respuesta a tu cotización" },
        { value: "Responsive", label: "Se ve perfecta en el celular" },
        { value: "SEO", label: "Lista para Google desde el inicio" },
        { value: "Administrable", label: "Edita tu contenido cuando quieras" },
      ]}
      sections={[
        {
          h2: "¿Qué incluye el diseño de tu página web?",
          body:
            "Más que una web bonita, entregamos una herramienta de captación. Cada página web que desarrollamos está pensada para que un visitante entienda qué haces y te escriba. Incluye diseño a tu marca, contenido ordenado y todo lo técnico resuelto.",
          bullets: [
            "Diseño web profesional, responsive y alineado a tu marca.",
            "Página web administrable: editas textos e imágenes sin programar.",
            "Formulario de contacto y botón de WhatsApp para recibir clientes.",
            "Optimización SEO on-page para aparecer en Google.",
            "Hosting, dominio y certificado de seguridad incluidos.",
            "Carga rápida y buenas Core Web Vitals.",
          ],
        },
        {
          h2: "Páginas web para empresas y emprendedores",
          body:
            "Desde una página web corporativa hasta una web para tu negocio o emprendimiento, adaptamos el alcance a tu etapa. Si más adelante necesitas vender online, tu web crece hacia una tienda virtual sin empezar de cero.",
          bullets: [
            "Página web corporativa para proyectar confianza y profesionalismo.",
            "Web para negocios y emprendedores que recién empiezan.",
            "Landing pages para campañas de Google Ads y redes.",
            "Escala a tienda virtual cuando estés listo para vender online.",
          ],
        },
        {
          h2: "Hecha sobre WordPress (si lo necesitas)",
          body:
            "Desarrollamos tu página web en WordPress cuando quieres administrar tú mismo el contenido y sumar un blog para posicionar. También trabajamos desarrollos a medida cuando el proyecto lo amerita.",
          bullets: [
            "Diseño web WordPress en Perú, administrable y con blog.",
            "Estructura pensada para SEO desde el primer día.",
          ],
        },
        {
          h2: "¿Por qué con Websy?",
          bullets: [
            "Diseño exclusivo, no plantillas recicladas.",
            "Optimización SEO incluida, no como un extra.",
            "Acompañamiento y soporte después del lanzamiento.",
            "Enfoque en resultados: que tu web te traiga clientes.",
          ],
        },
      ]}
      related={[
        { label: "Tiendas virtuales / ecommerce", href: "/tiendas-virtuales", desc: "¿Quieres vender online? Convierte tu web en una tienda virtual." },
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Automatiza tu operación con un sistema web hecho para ti." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta una página web para empresa en Perú?",
          a: "El precio depende del número de secciones, el contenido y las funciones (blog, reservas, multidioma, etc.). Te preparamos una cotización a medida sin costo y te la enviamos en menos de 24 horas.",
        },
        {
          q: "¿La página web es administrable?",
          a: "Sí. Entregamos una página web administrable y te capacitamos para que edites textos, imágenes y secciones cuando quieras, sin saber programar.",
        },
        {
          q: "¿Incluye hosting y dominio?",
          a: "Sí. Incluimos la configuración de hosting, dominio y certificado de seguridad (SSL) para que tu web salga publicada y segura.",
        },
        {
          q: "¿La página viene optimizada para Google?",
          a: "Cada página la entregamos con SEO on-page: títulos, descripciones, estructura de encabezados, velocidad y datos estructurados, para que tenga base sólida para posicionar.",
        },
      ]}
      serviceName="Diseño y desarrollo de páginas web"
      serviceDescription="Diseño y desarrollo de páginas web profesionales para empresas en Lima y Perú: administrables, responsive, optimizadas para SEO, con hosting, dominio y WhatsApp."
    />
  );
}
