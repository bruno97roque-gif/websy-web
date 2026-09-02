import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/diseno-de-paginas-web/colegios",
  title: "Creamos la web de tu colegio o instituto",
  description:
    "Diseño de páginas web para colegios, institutos y centros educativos en Perú: admisión y matrícula, niveles y propuesta educativa, comunicación con padres y SEO.",
});

export default function PaginaWebColegiosPage() {
  return (
    <ServiceLanding
      slug="/diseno-de-paginas-web/colegios"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Diseño de Páginas Web", path: "/diseno-de-paginas-web" },
        { name: "Colegios e Institutos", path: "/diseno-de-paginas-web/colegios" },
      ]}
      eyebrow="Servicio · Colegios e institutos"
      h1="Creamos la página web de tu colegio o instituto"
      intro="Diseñamos páginas web para colegios, institutos y centros educativos en Lima y todo el Perú: con proceso de admisión, propuesta educativa, niveles, plana docente y comunicación con los padres. Una web que transmite confianza y capta matrículas durante toda la campaña."
      highlights={["Admisión y matrícula", "Propuesta educativa", "Niveles y grados", "Comunicación con padres", "SEO"]}
      stats={[
        { value: "Admisión", label: "Solicitudes de vacante online" },
        { value: "Confianza", label: "Proyecta prestigio institucional" },
        { value: "Info", label: "Niveles, pensiones y horarios claros" },
        { value: "Móvil", label: "Perfecta en el celular" },
      ]}
      sections={[
        {
          h2: "Los padres eligen colegio investigando en internet",
          body:
            "Elegir dónde estudiarán sus hijos es una de las decisiones más importantes para una familia, y la investigan a fondo. Antes de visitar el colegio, los padres revisan la web para conocer la propuesta educativa, los niveles, las instalaciones y el proceso de admisión. Una web desactualizada o confusa genera dudas justo en campaña de matrícula. Diseñamos una página web institucional que transmite seriedad, responde las preguntas de los padres y facilita solicitar una vacante.",
        },
        {
          h2: "Proceso de admisión y matrícula sin fricción",
          body:
            "La campaña de admisión es el momento clave del año. Facilitamos que el padre solicite información o una vacante desde la web, con un formulario que llega a tu área de admisión por WhatsApp o correo. Menos llamadas repetidas para dar la misma información y más solicitudes ordenadas que tu equipo puede atender rápido.",
          bullets: [
            "Formulario de solicitud de vacante o información.",
            "Información clara de fechas, requisitos y proceso de admisión.",
            "Botón de contacto directo con el área de admisión.",
            "Sección de campaña destacada en temporada de matrícula.",
          ],
        },
        {
          h2: "Propuesta educativa, niveles y plana docente",
          body:
            "Los padres quieren saber qué hace especial a tu institución: tu metodología, tus valores, tu propuesta de idiomas o tecnología, y quién enseña a sus hijos. Presentamos tu propuesta educativa por niveles (inicial, primaria, secundaria o carreras del instituto), tus instalaciones y tu plana docente, para construir la confianza que decide una matrícula.",
          bullets: [
            "Propuesta educativa y metodología explicadas con claridad.",
            "Páginas por nivel: inicial, primaria, secundaria o carreras.",
            "Instalaciones, laboratorios y actividades extracurriculares.",
            "Presentación de la plana docente y directiva.",
          ],
        },
        {
          h2: "Comunicación con la comunidad educativa",
          body:
            "Una web educativa también sirve puertas adentro: comunica noticias, calendario escolar, circulares y logros a los padres y alumnos actuales. Eso refuerza el sentido de comunidad y reduce las consultas repetidas a secretaría. Todo administrable para que tu equipo publique novedades sin depender de nadie.",
          bullets: [
            "Noticias, eventos y logros institucionales.",
            "Calendario escolar y circulares para padres.",
            "Sección de contacto por área (admisión, secretaría, dirección).",
            "Panel administrable para publicar novedades.",
          ],
        },
        {
          h2: "SEO y todo lo técnico resuelto",
          body:
            "Optimizamos tu web para búsquedas como 'colegios en [distrito]', 'instituto de [carrera]' o 'colegio bilingüe en [zona]', donde están los padres decidiendo. Incluye diseño responsive, carga rápida, hosting, dominio y certificado SSL, imprescindible cuando las familias comparten sus datos. Conectamos tu ficha de Google para que aparezcas en el mapa de tu zona.",
          bullets: [
            "SEO para búsquedas educativas por zona y nivel.",
            "Conexión con Google Maps y ficha de negocio.",
            "Certificado SSL para proteger los datos de las familias.",
            "Hosting, dominio .pe o .edu.pe y panel administrable incluidos.",
          ],
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "El servicio completo de diseño y desarrollo web profesional." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu web y cómo pedir tu cotización gratis." },
        { label: "Cotiza tu web educativa", href: "/cotizacion", desc: "Cuéntanos de tu colegio o instituto y te respondemos en 24 h." },
      ]}
      articles={[
        { label: "Página web para colegios e instituciones educativas", href: "/blog/pagina-web-para-colegios-e-instituciones-educativas-en-peru", desc: "Admisión, comunicados y captación de matrículas." },
        { label: "Cómo tener presencia online para tu negocio", href: "/blog/como-tener-presencia-online-para-tu-negocio-en-peru", desc: "Los pilares para que tu institución exista y crezca en internet." },
        { label: "Cómo aparecer en Google con tu página web", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Guía práctica de SEO para captar matrículas en tu zona." },
      ]}
      faqs={[
        {
          q: "¿La web recibe solicitudes de admisión?",
          a: "Sí. Configuramos un formulario de solicitud de vacante o información que llega a tu área de admisión por WhatsApp o correo, para ordenar las consultas durante la campaña de matrícula.",
        },
        {
          q: "¿Puedo publicar noticias y circulares yo mismo?",
          a: "Sí. Entregamos una web administrable y capacitamos a tu equipo para publicar noticias, eventos, calendario escolar y circulares sin necesidad de programar.",
        },
        {
          q: "¿Sirve para un colegio, un instituto o una academia?",
          a: "Sí. Adaptamos la estructura a tu institución: colegio con niveles inicial, primaria y secundaria; instituto con carreras; o academia con cursos. La propuesta educativa se presenta según tu caso.",
        },
        {
          q: "¿Aparecerá en Google cuando busquen colegios en mi zona?",
          a: "Optimizamos tu web con SEO por zona y nivel, y la conectamos con tu ficha de Google Business Profile para que aparezcas en el mapa y en búsquedas locales de familias.",
        },
        {
          q: "¿Los datos de las familias están protegidos?",
          a: "Sí. Incluimos certificado de seguridad SSL para cifrar la información que las familias comparten en los formularios de admisión.",
        },
        {
          q: "¿Cuánto cuesta la página web de un colegio o instituto?",
          a: "Depende del número de niveles o carreras, las secciones y si producimos el contenido. Te enviamos una cotización a medida y gratuita en menos de 24 horas.",
        },
      ]}
      serviceName="Diseño de páginas web para colegios e institutos"
      serviceDescription="Diseño de páginas web para colegios, institutos y centros educativos en Perú: proceso de admisión, propuesta educativa por niveles, comunicación con padres y SEO."
    />
  );
}
