import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/diseno-de-paginas-web/abogados",
  title: "Creamos la web de tu estudio de abogados",
  description:
    "Diseño de páginas web para abogados y estudios jurídicos en Perú: áreas de práctica, casos, confianza profesional, captación de clientes y SEO local.",
});

export default function PaginaWebAbogadosPage() {
  return (
    <ServiceLanding
      slug="/diseno-de-paginas-web/abogados"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Diseño de Páginas Web", path: "/diseno-de-paginas-web" },
        { name: "Abogados y Estudios Jurídicos", path: "/diseno-de-paginas-web/abogados" },
      ]}
      eyebrow="Servicio · Estudios de abogados"
      h1="Creamos la página web de tu estudio de abogados"
      intro="Diseñamos páginas web para abogados y estudios jurídicos en Lima y todo el Perú: con áreas de práctica, perfil del abogado, consulta directa y SEO local. Una web sobria y confiable que convierte una búsqueda urgente en una consulta con tu estudio."
      highlights={["Áreas de práctica", "Perfil profesional", "Consulta directa", "SEO local", "Confianza"]}
      stats={[
        { value: "Consultas", label: "Directo por WhatsApp o formulario" },
        { value: "Autoridad", label: "Proyecta experiencia y prestigio" },
        { value: "Local", label: "Apareces por tu especialidad" },
        { value: "Móvil", label: "Perfecta en el celular" },
      ]}
      sections={[
        {
          h2: "Un cliente con un problema legal decide con la web en la mano",
          body:
            "Quien busca un abogado suele tener una necesidad urgente: un despido, un divorcio, una deuda, un contrato. Antes de llamar, investiga en Google y evalúa en segundos si tu estudio le inspira confianza. Diseñamos una web sobria y profesional que comunica tus áreas de práctica, tu experiencia y cómo puedes ayudarlo, con un camino claro para agendar una consulta. En derecho, la credibilidad que proyecta tu web es tu primer alegato.",
        },
        {
          h2: "Áreas de práctica bien explicadas",
          body:
            "Un potencial cliente busca por su problema concreto: 'abogado laboral', 'abogado de familia', 'abogado penalista'. Cada área de práctica merece su propia página que explique en qué consiste, qué casos atiendes y por qué elegir tu estudio. Eso no solo ayuda al cliente a identificarse: le da a Google señales claras para mostrarte cuando alguien busca justo tu especialidad.",
          bullets: [
            "Página por área de práctica (laboral, civil, penal, familia, corporativo, etc.).",
            "Explicación clara de cada servicio en lenguaje que el cliente entiende.",
            "Casos de uso y preguntas frecuentes por materia.",
            "Llamado a la acción para agendar consulta en cada página.",
          ],
        },
        {
          h2: "Autoridad y confianza (E-E-A-T)",
          body:
            "En temas legales, la trayectoria y las credenciales del abogado importan tanto como el servicio. Presentamos tu perfil profesional, tu colegiatura, tu experiencia y tus logros para construir la autoridad que valoran los clientes y los buscadores. La transparencia sobre quién eres y qué has resuelto es lo que convierte a un visitante indeciso en una consulta agendada.",
          bullets: [
            "Perfil del abogado o socios con formación y trayectoria.",
            "Colegiatura, especializaciones y reconocimientos.",
            "Testimonios y reseñas de clientes (cuando corresponda).",
            "Contenido que demuestra tu dominio de la materia.",
          ],
        },
        {
          h2: "SEO local: aparece cuando buscan un abogado en tu zona",
          body:
            "Muchas búsquedas legales son locales: 'abogado en [tu distrito]', 'estudio jurídico en Lima', 'abogado laboralista cerca de mí'. Optimizamos tu web con SEO local y la conectamos con tu ficha de Google Business Profile para que aparezcas en el mapa y en los resultados con tu ubicación, horarios y reseñas. Así captas clientes de tu zona en el momento en que más te necesitan.",
          bullets: [
            "Optimización por área de práctica y distrito.",
            "Conexión con Google Maps y ficha de negocio.",
            "Datos estructurados de servicio jurídico y ubicación.",
          ],
        },
        {
          h2: "Consulta directa, sin fricción",
          body:
            "Cuando alguien decide contactarte, cada paso extra es una oportunidad de que se arrepienta. Facilitamos la consulta con botón de WhatsApp, formulario breve y datos de contacto siempre visibles. La web incluye diseño responsive, carga rápida, hosting, dominio y certificado SSL, imprescindible cuando el cliente comparte información sensible.",
          bullets: [
            "Botón de WhatsApp y formulario de consulta breve.",
            "Datos de contacto y ubicación siempre a la vista.",
            "Certificado SSL para proteger la información del cliente.",
            "Hosting, dominio .pe o .com y panel administrable incluidos.",
          ],
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "El servicio completo de diseño y desarrollo web profesional." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu web y cómo pedir tu cotización gratis." },
        { label: "Cotiza tu web de estudio jurídico", href: "/cotizacion", desc: "Cuéntanos de tu estudio y te enviamos una propuesta en 24 h." },
      ]}
      articles={[
        { label: "Página web para estudios de abogados", href: "/blog/pagina-web-para-estudios-de-abogados", desc: "Qué debe tener la web de un estudio jurídico para captar clientes." },
        { label: "Cómo aparecer en Google con tu página web", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Guía práctica de SEO para que te encuentren en tu zona." },
      ]}
      faqs={[
        {
          q: "¿Puedo tener una página por cada área de práctica?",
          a: "Sí, y es lo recomendable. Cada área (laboral, civil, penal, familia, corporativo) con su propia página explica mejor tu servicio y te ayuda a posicionar por la especialidad que busca cada cliente.",
        },
        {
          q: "¿Sirve para un abogado independiente o solo para estudios grandes?",
          a: "Sirve para ambos. Adaptamos el alcance a un abogado independiente que arranca su marca personal o a un estudio con varios socios y áreas. La estructura se ajusta a tu caso.",
        },
        {
          q: "¿Cómo transmite confianza a un posible cliente?",
          a: "Presentamos tu trayectoria, colegiatura, especializaciones y casos, junto con un diseño sobrio y un certificado SSL. Esa autoridad y transparencia (E-E-A-T) es lo que convierte una visita en una consulta.",
        },
        {
          q: "¿Aparecerá mi estudio cuando busquen 'abogado en mi distrito'?",
          a: "Optimizamos tu web con SEO local y la conectamos con tu ficha de Google Business Profile para que aparezcas en búsquedas por especialidad y distrito, y en el mapa de Google.",
        },
        {
          q: "¿Los datos de contacto del cliente están protegidos?",
          a: "Sí. Incluimos certificado de seguridad SSL para cifrar la información que el cliente comparte a través del formulario de consulta, algo clave en temas legales.",
        },
        {
          q: "¿Cuánto cuesta la página web de un abogado o estudio jurídico?",
          a: "Depende del número de áreas de práctica, secciones y si producimos el contenido. Te enviamos una cotización a medida y gratuita en menos de 24 horas.",
        },
      ]}
      serviceName="Diseño de páginas web para abogados y estudios jurídicos"
      serviceDescription="Diseño de páginas web para abogados y estudios jurídicos en Perú: áreas de práctica, perfil profesional, consulta directa por WhatsApp y SEO local para captar clientes."
    />
  );
}
