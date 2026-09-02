import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/diseno-de-paginas-web/gimnasios",
  title: "Creamos la web de tu gimnasio en Perú",
  description:
    "Diseño de páginas web para gimnasios, centros fitness y box de crossfit en Perú: planes y membresías, horarios de clases, inscripción por WhatsApp y SEO local.",
});

export default function PaginaWebGimnasiosPage() {
  return (
    <ServiceLanding
      slug="/diseno-de-paginas-web/gimnasios"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Diseño de Páginas Web", path: "/diseno-de-paginas-web" },
        { name: "Gimnasios", path: "/diseno-de-paginas-web/gimnasios" },
      ]}
      eyebrow="Servicio · Gimnasios y centros fitness"
      h1="Creamos la página web de tu gimnasio"
      intro="Diseñamos páginas web para gimnasios, centros fitness, boxes de crossfit y estudios de yoga en Lima y todo el Perú: con planes y membresías, horarios de clases, inscripción por WhatsApp y SEO local. Una web que convierte al que busca 'gym cerca de mí' en un nuevo socio."
      highlights={["Planes y membresías", "Horarios de clases", "Inscripción online", "SEO local", "Responsive"]}
      stats={[
        { value: "Membresías", label: "Planes claros que convierten" },
        { value: "Clases", label: "Horarios siempre actualizados" },
        { value: "Local", label: "Apareces en tu distrito" },
        { value: "Móvil", label: "Perfecta en el celular" },
      ]}
      sections={[
        {
          h2: "El que busca un gimnasio decide por precio, horario y cercanía",
          body:
            "Quien quiere empezar a entrenar busca en Google 'gimnasio cerca de mí' o 'gym en [distrito]' y compara tres cosas: cuánto cuesta, qué horarios tiene y qué tan cerca está. Si tu web no responde eso de inmediato, se inscribe en el de la esquina. Diseñamos una página web que muestra tus planes, tus horarios y tu ubicación con energía y claridad, y que convierte la visita en una inscripción o una prueba gratis.",
        },
        {
          h2: "Planes y membresías que se entienden y venden",
          body:
            "Un plan confuso espanta socios. Presentamos tus membresías (mensual, trimestral, anual, pase diario) de forma clara, con lo que incluye cada una y un botón para inscribirse o consultar. Cuando el precio y los beneficios se ven de un vistazo, la decisión es más fácil y cierras más matrículas.",
          bullets: [
            "Planes de membresía claros con precios y beneficios.",
            "Promociones de temporada y pases de prueba destacados.",
            "Botón de inscripción o consulta en cada plan.",
            "Comparativa simple entre planes para decidir rápido.",
          ],
        },
        {
          h2: "Horarios de clases y disciplinas siempre al día",
          body:
            "Funcional, spinning, crossfit, yoga, baile: tu oferta de clases es un gran gancho. Mostramos tu grilla de horarios de forma clara y administrable, para que actualices cambios de horario o nuevas disciplinas sin depender de nadie. Un socio que ve que hay clases a la hora que le queda, se inscribe.",
          bullets: [
            "Grilla de horarios por disciplina y día.",
            "Presentación de disciplinas y entrenadores.",
            "Actualización de horarios sin programar.",
            "Enlace directo a tu Instagram para ver el ambiente.",
          ],
        },
        {
          h2: "SEO local: gana a la competencia de tu zona",
          body:
            "El negocio de un gimnasio es local: casi todos tus socios viven o trabajan cerca. Optimizamos tu web con SEO local y la conectamos con tu ficha de Google Business Profile para que aparezcas primero cuando busquen 'gimnasio en [tu distrito]', con tus horarios, fotos y reseñas. Ese primer lugar en el mapa es socios que llegan solos.",
          bullets: [
            "Optimización para 'gimnasio cerca de mí' y por distrito.",
            "Conexión con Google Maps y ficha de negocio.",
            "Datos estructurados de local y horarios para Google.",
          ],
        },
        {
          h2: "Inscripción sin fricción y todo lo técnico resuelto",
          body:
            "Cuando alguien decide inscribirse, no queremos que se pierda en el camino. Facilitamos la matrícula o la reserva de una clase de prueba con botón de WhatsApp y formulario breve. La web incluye diseño responsive con energía visual, carga rápida, hosting, dominio y certificado SSL, todo administrable para actualizar precios y promos cuando quieras.",
          bullets: [
            "Inscripción y prueba gratis por WhatsApp o formulario.",
            "Diseño responsive con imágenes que motivan.",
            "Hosting, dominio .pe o .com y certificado SSL incluidos.",
            "Panel administrable para precios, horarios y promos.",
          ],
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "El servicio completo de diseño y desarrollo web profesional." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu web y cómo pedir tu cotización gratis." },
        { label: "Cotiza tu web de gimnasio", href: "/cotizacion", desc: "Cuéntanos de tu gimnasio y te enviamos una propuesta en 24 h." },
      ]}
      articles={[
        { label: "Página web para gimnasios en Perú", href: "/blog/pagina-web-para-gimnasios-en-peru", desc: "Membresías, horarios y captación de socios desde tu web." },
        { label: "Cómo tener presencia online para tu negocio", href: "/blog/como-tener-presencia-online-para-tu-negocio-en-peru", desc: "Los pilares para que tu negocio local exista y crezca en internet." },
        { label: "Cómo aparecer en Google con tu página web", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Guía práctica de SEO para ganar socios de tu zona." },
      ]}
      faqs={[
        {
          q: "¿Puedo actualizar los horarios de clases yo mismo?",
          a: "Sí. Entregamos una web administrable y te capacitamos para actualizar horarios, disciplinas, entrenadores y precios cuando quieras, sin programar.",
        },
        {
          q: "¿La web recibe inscripciones o pruebas gratis?",
          a: "Sí. Configuramos botones de inscripción y de clase de prueba que llegan a tu WhatsApp o correo, para que captes socios directamente desde la web.",
        },
        {
          q: "¿Aparecerá mi gimnasio cuando busquen 'gym cerca de mí'?",
          a: "Optimizamos tu web con SEO local y la conectamos con tu ficha de Google Business Profile para que aparezcas en búsquedas por distrito y en el mapa, con horarios, fotos y reseñas.",
        },
        {
          q: "¿Sirve para un box de crossfit o un estudio de yoga?",
          a: "Sí. Adaptamos la web a tu tipo de centro: gimnasio tradicional, box de crossfit, estudio de yoga, baile o funcional. Los planes y las clases se ajustan a tu oferta.",
        },
        {
          q: "¿Se integra con mi Instagram?",
          a: "Sí. Conectamos tu web con Instagram y WhatsApp para que el interesado vea el ambiente, las clases y te escriba en un clic.",
        },
        {
          q: "¿Cuánto cuesta la página web de un gimnasio?",
          a: "Depende del número de secciones, si incluye grilla de horarios y quién produce el contenido. Te enviamos una cotización a medida y gratuita en menos de 24 horas.",
        },
      ]}
      serviceName="Diseño de páginas web para gimnasios y centros fitness"
      serviceDescription="Diseño de páginas web para gimnasios, boxes de crossfit y estudios fitness en Perú: planes y membresías, horarios de clases, inscripción por WhatsApp y SEO local."
    />
  );
}
