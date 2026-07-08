import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/mantenimiento-web",
  title: "Mantenimiento web y soporte en Perú",
  description:
    "Servicio de mantenimiento web y soporte en Perú: actualizaciones, seguridad, backups, hosting, cambios de contenido y monitoreo para mantener tu web rápida y segura.",
});

export default function MantenimientoWebPage() {
  return (
    <ServiceLanding
      slug="/mantenimiento-web"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Mantenimiento Web y Soporte", path: "/mantenimiento-web" },
      ]}
      eyebrow="Soporte y mantenimiento"
      h1="Mantenimiento web y soporte"
      intro="Mantenemos tu página web rápida, segura y al día para que nunca pierdas clientes por una caída, un hackeo o una web desactualizada. Nuestro servicio de mantenimiento web en Perú incluye actualizaciones, copias de seguridad, seguridad, monitoreo, hosting y cambios de contenido, para que tú te dediques a tu negocio."
      highlights={["Actualizaciones", "Seguridad", "Backups", "Hosting", "Cambios de contenido"]}
      stats={[
        { value: "Segura", label: "Protegida contra hackeos" },
        { value: "Backups", label: "Copias periódicas de tu web" },
        { value: "Rápida", label: "Optimización de velocidad" },
        { value: "Soporte", label: "Ayuda cuando la necesitas" },
      ]}
      sections={[
        {
          h2: "Una web sin mantenimiento es un problema esperando a ocurrir",
          body:
            "Una página web no es un cuadro que cuelgas y olvidas: es software vivo que necesita cuidados. Sin mantenimiento, se vuelve lenta, se desactualiza, queda expuesta a hackeos y tarde o temprano falla, casi siempre en el peor momento. Nuestro servicio de mantenimiento web se encarga de todo eso por ti: mantiene tu sitio actualizado, seguro y respaldado, para que siga trabajando y captando clientes sin sustos ni sorpresas.",
        },
        {
          h2: "Actualizaciones y compatibilidad",
          body:
            "WordPress, los plugins y las plataformas se actualizan constantemente por seguridad y mejoras. Aplicar esas actualizaciones sin cuidado puede romper tu web; no aplicarlas la deja vulnerable. Nosotros las gestionamos y probamos por ti, manteniendo todo compatible y funcionando, sin que tengas que preocuparte por versiones ni incompatibilidades.",
          bullets: [
            "Actualización de WordPress, plugins y temas.",
            "Pruebas para que nada se rompa tras actualizar.",
            "Compatibilidad con navegadores y dispositivos.",
            "Revisión de formularios y enlaces que fallan.",
          ],
        },
        {
          h2: "Seguridad y copias de seguridad",
          body:
            "Los ataques a webs son más comunes de lo que crees, y recuperarse sin respaldo es costoso o imposible. Blindamos tu sitio con medidas de seguridad y hacemos copias de seguridad periódicas, para que ante cualquier incidente podamos restaurar tu web en poco tiempo. Dormir tranquilo sabiendo que tu web está protegida y respaldada no tiene precio.",
          bullets: [
            "Copias de seguridad (backups) periódicas y automáticas.",
            "Medidas de seguridad y monitoreo de amenazas.",
            "Certificado SSL siempre vigente.",
            "Restauración rápida ante cualquier incidente.",
          ],
        },
        {
          h2: "Velocidad, monitoreo y disponibilidad",
          body:
            "Una web lenta o caída ahuyenta clientes y perjudica tu posicionamiento en Google. Monitoreamos que tu sitio esté siempre en línea y optimizamos su velocidad de forma periódica: imágenes, caché, código y hosting. Si algo falla, lo detectamos y lo resolvemos, muchas veces antes de que tú lo notes.",
          bullets: [
            "Monitoreo de disponibilidad (uptime) del sitio.",
            "Optimización de velocidad y Core Web Vitals.",
            "Gestión de hosting y dominio.",
            "Alertas y resolución ante caídas o errores.",
          ],
        },
        {
          h2: "Cambios de contenido y soporte real",
          body:
            "¿Necesitas cambiar un precio, subir una promoción, agregar una sección o publicar un artículo? Nos encargamos. Nuestro soporte incluye horas para cambios y ajustes de contenido, con un canal directo de atención para que no te quedes esperando. Tienes a tu equipo técnico a un mensaje de distancia, sin tener que buscar a alguien nuevo cada vez.",
          bullets: [
            "Cambios de textos, imágenes y secciones.",
            "Publicación de promociones, productos o artículos.",
            "Canal de soporte directo y tiempos de respuesta claros.",
            "Asesoría para hacer crecer tu web con el tiempo.",
          ],
        },
      ]}
      related={[
        { label: "Nuestros servicios", href: "/servicios", desc: "Conoce todo lo que hacemos: web, ecommerce, software, SEO y más." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio del mantenimiento y cómo contratarlo." },
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "¿Aún no tienes web? Empieza por una hecha para durar." },
      ]}
      articles={[
        { label: "Costos de mantenimiento de una página web", href: "/blog/costos-de-mantenimiento-de-una-pagina-web-en-peru", desc: "Hosting, seguridad y respaldos: qué incluye y por qué importa." },
        { label: "Cómo aparecer en Google con tu página web", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "La velocidad y el buen mantenimiento también posicionan." },
        { label: "Cómo elegir una agencia de desarrollo web", href: "/blog/como-elegir-una-agencia-de-desarrollo-web-en-peru", desc: "Por qué el soporte post-lanzamiento es tan importante como el diseño." },
      ]}
      faqs={[
        {
          q: "¿Qué incluye el servicio de mantenimiento web?",
          a: "Incluye actualizaciones de WordPress, plugins y temas; copias de seguridad periódicas; medidas de seguridad; monitoreo de disponibilidad; optimización de velocidad; gestión de hosting y dominio; y horas de soporte para cambios de contenido. Se ajusta al plan que tu web necesita.",
        },
        {
          q: "¿Por qué necesito mantenimiento si mi web ya funciona?",
          a: "Porque una web es software que se desactualiza y queda expuesta con el tiempo. Sin mantenimiento tarde o temprano se vuelve lenta, insegura o falla. El mantenimiento previene esos problemas y protege la inversión que hiciste en tu web.",
        },
        {
          q: "¿Mantienen webs que no fueron hechas por ustedes?",
          a: "Sí. Podemos hacernos cargo del mantenimiento de una web existente. Primero hacemos una revisión para conocer su estado y dejarla en orden, y a partir de ahí la mantenemos actualizada y segura.",
        },
        {
          q: "¿Cada cuánto hacen copias de seguridad?",
          a: "Realizamos backups periódicos según el plan y la frecuencia de cambios de tu web. Ante cualquier incidente, podemos restaurar tu sitio a partir de la última copia en poco tiempo.",
        },
        {
          q: "¿El mantenimiento incluye cambios de contenido?",
          a: "Sí. Los planes incluyen horas para cambios de textos, imágenes, promociones o nuevas secciones. Nos escribes lo que necesitas y lo aplicamos, sin que tengas que hacerlo tú ni buscar a alguien externo.",
        },
        {
          q: "¿Cuánto cuesta el mantenimiento web en Perú?",
          a: "Depende del tipo de web (informativa, ecommerce, sistema), la frecuencia de cambios y el nivel de soporte que necesites. Te preparamos una propuesta a medida y gratuita en menos de 24 horas.",
        },
      ]}
      serviceName="Mantenimiento web y soporte técnico"
      serviceDescription="Servicio de mantenimiento web en Perú: actualizaciones, seguridad, copias de seguridad, monitoreo, optimización de velocidad, hosting y soporte para cambios de contenido."
    />
  );
}
