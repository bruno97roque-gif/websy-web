import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/posicionamiento-seo",
  title: "Posicionamiento SEO en Perú: SEO para Tiendas y Webs",
  description:
    "Servicio de posicionamiento SEO en Perú para tiendas virtuales y páginas web. Optimización on-page, contenido y mejora técnica para aparecer en Google y vender más.",
});

export default function PosicionamientoSeoPage() {
  return (
    <ServiceLanding
      slug="/posicionamiento-seo"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Posicionamiento SEO", path: "/posicionamiento-seo" },
      ]}
      eyebrow="Servicio · SEO"
      h1="Posicionamiento SEO para tiendas virtuales y webs"
      intro="Optimizamos tu tienda virtual o página web para que aparezca en Google cuando tus clientes buscan lo que vendes. SEO para ecommerce y sitios web en Perú: optimización on-page, contenido y mejoras técnicas que atraen tráfico con intención de compra."
      highlights={["SEO ecommerce", "On-page", "Contenido", "Técnico", "Resultados medibles"]}
      stats={[
        { value: "Google", label: "Aparece donde te buscan" },
        { value: "On-page", label: "Fichas y páginas optimizadas" },
        { value: "Contenido", label: "Atrae antes de la compra" },
        { value: "Medible", label: "Seguimiento en Search Console" },
      ]}
      sections={[
        {
          h2: "SEO que sí mueve la aguja",
          body:
            "No prometemos magia ni el puesto 1 de la noche a la mañana. Trabajamos las bases que de verdad posicionan: una web rápida y rastreable, fichas y categorías optimizadas, y contenido que responde lo que la gente busca antes de comprar.",
          bullets: [
            "Optimización SEO on-page: títulos, descripciones y encabezados.",
            "Optimización de fichas de producto y categorías para ecommerce.",
            "Contenido y blog que atrae tráfico informativo hacia tus productos.",
            "Mejoras técnicas: velocidad, datos estructurados e indexación.",
            "Configuración de Search Console para medir y corregir.",
          ],
        },
        {
          h2: "Practicamos lo que predicamos",
          body:
            "Aplicamos a tu proyecto el mismo SEO con el que trabajamos el nuestro. Si llegaste a esta página buscando en Google, es justo lo que hacemos por ti.",
        },
        {
          h2: "SEO pensado para vender, no solo para rankear",
          bullets: [
            "Priorizamos las búsquedas con intención de compra.",
            "Enlazamos el contenido hacia tus páginas que convierten.",
            "Medimos resultados y ajustamos con datos reales.",
          ],
        },
      ]}
      related={[
        { label: "Tiendas virtuales", href: "/tiendas-virtuales", desc: "Tiendas optimizadas para SEO desde el inicio." },
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Webs rápidas y listas para posicionar." },
      ]}
      faqs={[
        {
          q: "¿En cuánto tiempo veré resultados de SEO?",
          a: "El SEO es progresivo: los primeros movimientos se ven en semanas y los resultados sólidos en algunos meses, según la competencia de tus palabras clave.",
        },
        {
          q: "¿Hacen SEO solo para tiendas o también para webs?",
          a: "Para ambas. Optimizamos tiendas virtuales (SEO para ecommerce) y páginas web corporativas o de servicios.",
        },
        {
          q: "¿Garantizan el primer lugar en Google?",
          a: "Nadie serio puede garantizar una posición exacta, porque depende de Google y la competencia. Lo que garantizamos es trabajo SEO real y medible, con avances que puedes ver en Search Console.",
        },
      ]}
      serviceName="Posicionamiento SEO"
      serviceDescription="Servicio de posicionamiento SEO en Perú para tiendas virtuales y páginas web: optimización on-page, contenido y mejoras técnicas para atraer tráfico que convierte."
    />
  );
}
