import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/mantenimiento-y-soporte-web",
  title: "Mantenimiento y Soporte Web en Perú",
  description:
    "Mantenimiento de páginas web y tiendas virtuales en Perú: actualizaciones, seguridad, copias de respaldo, soporte y rediseño para que tu sitio siempre funcione.",
});

export default function MantenimientoSoportePage() {
  return (
    <ServiceLanding
      slug="/mantenimiento-y-soporte-web"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Mantenimiento y Soporte Web", path: "/mantenimiento-y-soporte-web" },
      ]}
      eyebrow="Servicio · Mantenimiento"
      h1="Mantenimiento y soporte web"
      intro="Cuidamos tu página web o tienda virtual para que siempre funcione: actualizaciones, seguridad, copias de respaldo, cambios de contenido y soporte cuando lo necesites. En Perú, una web descuidada se cae, se hackea o queda obsoleta; nosotros la mantenemos sana."
      highlights={["Actualizaciones", "Seguridad", "Backups", "Cambios de contenido", "Soporte"]}
      stats={[
        { value: "Seguridad", label: "Protegida y al día" },
        { value: "Backups", label: "Copias de respaldo" },
        { value: "Soporte", label: "Atención cuando lo necesitas" },
        { value: "Rediseño", label: "Renueva sin empezar de cero" },
      ]}
      sections={[
        {
          h2: "Qué incluye el mantenimiento",
          body:
            "Una web no es un cuadro que cuelgas y olvidas: necesita cuidado para seguir rápida, segura y al día. Con el mantenimiento, tu sitio queda en buenas manos y tú te dedicas a tu negocio.",
          bullets: [
            "Actualización de la plataforma, plugins y componentes.",
            "Monitoreo y refuerzo de seguridad ante ataques.",
            "Copias de respaldo periódicas para no perder nada.",
            "Cambios de contenido, imágenes y precios cuando los necesites.",
            "Soporte ante errores o caídas.",
          ],
        },
        {
          h2: "Mantenimiento de tiendas virtuales",
          body:
            "En un ecommerce, una caída es una venta perdida. Mantenemos tu tienda actualizada y segura, con pagos funcionando y productos al día, para que nunca dejes de vender por un problema técnico.",
        },
        {
          h2: "¿Tu web quedó vieja? La rediseñamos",
          bullets: [
            "Rediseño de página web para verte actual y profesional.",
            "Mejoras de velocidad y experiencia móvil.",
            "Optimización SEO de lo que ya tienes publicado.",
          ],
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "¿Necesitas una web nueva en vez de mantener la vieja?" },
        { label: "Tiendas virtuales", href: "/tiendas-virtuales", desc: "Mantenemos tu ecommerce siempre vendiendo." },
      ]}
      faqs={[
        {
          q: "¿El mantenimiento es mensual?",
          a: "Lo adaptamos a ti: puede ser un plan mensual de cuidado continuo o soporte puntual cuando lo necesites. Te proponemos lo que más conviene a tu sitio.",
        },
        {
          q: "¿Mantienen webs o tiendas que no hicieron ustedes?",
          a: "Sí. Hacemos una revisión inicial del estado del sitio y, a partir de ahí, te proponemos el mantenimiento adecuado.",
        },
        {
          q: "¿Pueden rediseñar mi web actual?",
          a: "Sí. Si tu web quedó vieja o lenta, la rediseñamos y optimizamos sin perder lo que ya funciona ni tu posicionamiento.",
        },
      ]}
      serviceName="Mantenimiento y soporte web"
      serviceDescription="Mantenimiento de páginas web y tiendas virtuales en Perú: actualizaciones, seguridad, copias de respaldo, soporte y rediseño."
    />
  );
}
