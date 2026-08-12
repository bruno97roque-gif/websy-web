import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/diseno-de-paginas-web/clinicas",
  title: "Páginas web para clínicas y consultorios médicos",
  description:
    "Diseño de páginas web para clínicas, consultorios y médicos en Perú: citas online, servicios, equipo médico, confianza y SEO local para captar más pacientes.",
});

export default function PaginaWebClinicasPage() {
  return (
    <ServiceLanding
      slug="/diseno-de-paginas-web/clinicas"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Diseño de Páginas Web", path: "/diseno-de-paginas-web" },
        { name: "Clínicas y Consultorios", path: "/diseno-de-paginas-web/clinicas" },
      ]}
      eyebrow="Páginas web por rubro"
      h1="Páginas web para clínicas y consultorios médicos"
      intro="Diseñamos páginas web para clínicas, consultorios y profesionales de la salud en Lima y todo el Perú: con agenda de citas, servicios, perfil del equipo médico y SEO local. Una web que transmite confianza y convierte búsquedas en pacientes que reservan su cita."
      highlights={["Citas online", "Perfil médico", "Confianza y prestigio", "SEO local", "Responsive"]}
      stats={[
        { value: "Citas", label: "Reserva online 24/7" },
        { value: "Confianza", label: "Proyecta prestigio profesional" },
        { value: "Local", label: "Apareces en tu zona" },
        { value: "Móvil", label: "Perfecta en el celular" },
      ]}
      sections={[
        {
          h2: "En salud, la confianza se decide en segundos",
          body:
            "Antes de reservar una cita, el paciente busca en Google y compara. Una web lenta, desactualizada o que no explica bien tus servicios genera desconfianza justo cuando más importa. Diseñamos una página web que proyecta el profesionalismo de tu clínica o consultorio: presentación clara de especialidades, credenciales del equipo médico, instalaciones y un camino directo para agendar. La confianza que transmite tu web es la primera consulta que ganas.",
        },
        {
          h2: "Agenda de citas que no depende del teléfono",
          body:
            "Muchos pacientes prefieren agendar fuera del horario de atención, cuando la recepción ya cerró. Una web con reserva de citas online captura esas solicitudes las 24 horas y las hace llegar a tu equipo por WhatsApp o correo. Menos llamadas perdidas, menos citas que se escapan y una recepción que trabaja con la agenda ordenada.",
          bullets: [
            "Solicitud o reserva de cita online las 24 horas.",
            "Notificación directa a tu WhatsApp o correo.",
            "Botón de contacto rápido para consultas urgentes.",
            "Formulario adaptable por especialidad o servicio.",
          ],
        },
        {
          h2: "Servicios, especialidades y equipo médico bien presentados",
          body:
            "Cada especialidad merece su espacio para explicar en qué consiste, para quién es y por qué elegir tu clínica. Presentamos a tu equipo médico con sus credenciales, formación y experiencia, porque en salud el nombre y la trayectoria del profesional pesan. Esa transparencia construye la autoridad (E-E-A-T) que valoran tanto los pacientes como Google.",
          bullets: [
            "Página por especialidad o servicio médico.",
            "Perfiles del equipo con formación y experiencia.",
            "Sección de instalaciones, tecnología y protocolos.",
            "Preguntas frecuentes que resuelven dudas antes de la cita.",
          ],
        },
        {
          h2: "SEO local: que te encuentren los pacientes de tu zona",
          body:
            "Cuando alguien busca 'dermatólogo en [tu distrito]', 'clínica dental cerca de mí' o 'consultorio de [especialidad]', tu web debería aparecer. Optimizamos el SEO local y conectamos tu ficha de Google Business Profile para que salgas en el mapa con tus horarios, dirección y reseñas. Es el tráfico más rentable: pacientes de tu zona buscando exactamente lo que ofreces.",
          bullets: [
            "Optimización para búsquedas por especialidad y distrito.",
            "Conexión con Google Maps y tu ficha de negocio.",
            "Datos estructurados de servicio médico y ubicación.",
          ],
        },
        {
          h2: "Rápida, segura y lista para el móvil",
          body:
            "Tu web incluye diseño responsive, carga rápida, hosting, dominio y certificado de seguridad (SSL), imprescindible para transmitir confianza cuando el paciente comparte sus datos. Todo administrable para que actualices horarios, servicios o promociones sin depender de nadie.",
          bullets: [
            "Diseño responsive y accesible en el celular.",
            "Certificado SSL para proteger los datos del paciente.",
            "Hosting y dominio .pe o .com incluidos.",
            "Panel administrable para actualizar tú mismo.",
          ],
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "El servicio completo de diseño y desarrollo web profesional." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu web y cómo pedir tu cotización gratis." },
        { label: "Cotiza tu web de clínica", href: "/cotizacion", desc: "Cuéntanos de tu clínica o consultorio y te respondemos en 24 h." },
      ]}
      articles={[
        { label: "Página web para clínicas y consultorios", href: "/blog/pagina-web-para-clinicas-y-consultorios-medicos", desc: "Qué debe tener la web de un centro de salud para captar pacientes." },
        { label: "Google Mi Negocio para empresas en Perú", href: "/blog/google-mi-negocio-para-empresas-en-peru", desc: "Cómo aparecer en el mapa de Google y ganar reseñas." },
      ]}
      faqs={[
        {
          q: "¿La web permite reservar citas online?",
          a: "Sí. Configuramos un sistema de solicitud o reserva de citas que llega a tu WhatsApp o correo las 24 horas, para que no pierdas pacientes fuera del horario de recepción.",
        },
        {
          q: "¿Sirve para un consultorio de un solo médico?",
          a: "Sí. Adaptamos el alcance: desde el consultorio de un especialista hasta una clínica con varias especialidades y equipo médico completo. La estructura se ajusta a tu caso.",
        },
        {
          q: "¿Cómo ayuda a que confíen en mi clínica?",
          a: "Presentamos con claridad tus especialidades, las credenciales de tu equipo, tus instalaciones y reseñas reales, junto con un certificado de seguridad SSL. Esa transparencia construye la confianza que decide una cita.",
        },
        {
          q: "¿Aparecerá en Google cuando busquen mi especialidad en mi zona?",
          a: "Optimizamos tu web con SEO local y la conectamos con tu ficha de Google Business Profile para que aparezcas en búsquedas por especialidad y distrito, y en el mapa de Google.",
        },
        {
          q: "¿Puedo actualizar horarios y servicios yo mismo?",
          a: "Sí. Entregamos una web administrable y te capacitamos para actualizar horarios, servicios, equipo y promociones sin necesidad de programar.",
        },
        {
          q: "¿Cuánto cuesta la página web de una clínica o consultorio?",
          a: "Depende del número de especialidades, si necesitas reserva de citas y si producimos el contenido. Te enviamos una cotización a medida y gratuita en menos de 24 horas.",
        },
      ]}
      serviceName="Diseño de páginas web para clínicas y consultorios"
      serviceDescription="Diseño de páginas web para clínicas, consultorios y profesionales de la salud en Perú: reserva de citas online, presentación de especialidades y equipo médico, y SEO local."
    />
  );
}
