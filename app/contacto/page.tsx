import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";
import { contactPageSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  path: "/contacto",
  title: "Contacto — Websy, agencia web en Lima",
  description:
    "Contacta con Websy, agencia de desarrollo web en Lima, Perú. WhatsApp +51 940 549 322, ventas@websy.com.pe. Respondemos en menos de 24 horas, de lunes a viernes.",
});

export default function ContactoPage() {
  return (
    <ServiceLanding
      slug="/contacto"
      pageSchema={contactPageSchema() as unknown as Record<string, unknown>}
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Contacto", path: "/contacto" },
      ]}
      eyebrow="Contáctanos"
      h1="Contacto: hablemos de tu proyecto"
      intro="Somos Websy, agencia de tecnología y desarrollo web en Lima, Perú. Escríbenos por WhatsApp al +51 940 549 322, al correo ventas@websy.com.pe o llena el formulario de esta página. Respondemos en menos de 24 horas hábiles, siempre con una persona del equipo."
      highlights={["WhatsApp directo", "Respuesta en 24 h", "Lima y todo el Perú", "Sin compromiso"]}
      stats={[
        { value: "24 h", label: "Tiempo de respuesta hábil" },
        { value: "L-V", label: "9:00 a 18:00 (hora de Perú)" },
        { value: "Perú", label: "Atendemos todo el país" },
        { value: "Gratis", label: "La cotización no cuesta nada" },
      ]}
      sections={[
        {
          h2: "Por dónde escribirnos",
          body:
            "Puedes elegir el canal que te resulte más cómodo. Todos llegan al mismo equipo y todos se responden dentro del mismo día hábil. Si tu proyecto es urgente, WhatsApp es la vía más rápida.",
          bullets: [
            "WhatsApp: +51 940 549 322 — la vía más rápida, de lunes a viernes.",
            "Correo: ventas@websy.com.pe — ideal si quieres adjuntar documentos o referencias.",
            "Formulario: el de esta misma página, al final. Cuéntanos qué necesitas y te escribimos.",
            "Horario de atención: lunes a viernes, de 9:00 a 18:00 (hora de Perú, GMT-5).",
          ],
        },
        {
          h2: "Qué pasa después de que nos escribes",
          body:
            "No usamos formularios que caen en un buzón que nadie mira. Este es el proceso real, y es el mismo para un proyecto pequeño que para uno grande.",
          bullets: [
            "Te respondemos en menos de 24 horas hábiles con las preguntas necesarias para entender tu caso.",
            "Si hace falta, agendamos una llamada corta para aterrizar el alcance.",
            "Te enviamos una propuesta escrita con alcance, plazos y precio cerrado.",
            "Tú decides. La propuesta no tiene coste ni te compromete a nada.",
          ],
        },
        {
          h2: "Qué conviene contarnos en el primer mensaje",
          body:
            "Mientras más contexto nos des, más precisa será la propuesta y menos vueltas daremos. No hace falta que lo tengas todo definido: con estos cuatro puntos ya podemos trabajar.",
          bullets: [
            "Qué necesitas: página web, tienda virtual, sistema a medida, SEO, Google Ads o branding.",
            "A qué se dedica tu negocio y a quién le vendes.",
            "Si ya tienes web o sistema, y qué te falla de lo actual.",
            "Para cuándo lo necesitas y qué presupuesto tienes en mente.",
          ],
        },
        {
          h2: "Dónde estamos y a quién atendemos",
          body:
            "Websy tiene su base en Lima, Perú, y trabaja con empresas de todo el país. La mayoría de nuestros proyectos se llevan de forma remota, con reuniones por videollamada y un canal de WhatsApp directo con el equipo, así que estar en otra región no cambia nada: el servicio y los tiempos son los mismos. En Lima atendemos habitualmente Miraflores, San Isidro, Surco, San Borja, La Molina y Barranco, y también trabajamos con clientes fuera del país que venden al mercado peruano.",
        },
      ]}
      related={[
        {
          label: "Cotiza tu proyecto",
          href: "/cotizacion",
          desc: "El formulario largo: cuéntanos el detalle y recibe un presupuesto cerrado.",
        },
        {
          label: "Precios y qué define el costo",
          href: "/precios",
          desc: "Rangos de inversión por tipo de proyecto, antes de que escribas.",
        },
        {
          label: "Agencia de desarrollo web en Lima",
          href: "/desarrollo-web",
          desc: "Cómo trabajamos: del diagnóstico al lanzamiento y el soporte posterior.",
        },
        {
          label: "Nuestros servicios",
          href: "/servicios",
          desc: "Web, tiendas virtuales, software a medida, SEO, Google Ads y branding.",
        },
      ]}
      articles={[
        {
          label: "Cómo elegir una agencia de desarrollo web",
          href: "/blog/como-elegir-una-agencia-de-desarrollo-web-en-peru",
          desc: "Qué preguntar y qué señales de alarma mirar antes de contratar.",
        },
        {
          label: "Cuánto cuesta una página web en Perú",
          href: "/blog/cuanto-cuesta-una-pagina-web-en-peru",
          desc: "Rangos reales en soles y qué hace que un presupuesto suba o baje.",
        },
        {
          label: "Cuánto tiempo toma hacer una página web",
          href: "/blog/cuanto-tiempo-toma-hacer-una-pagina-web",
          desc: "Plazos por tipo de proyecto, para que planifiques tu lanzamiento.",
        },
      ]}
      faqs={[
        {
          q: "¿Cuál es el número de WhatsApp de Websy?",
          a: "El WhatsApp de Websy es +51 940 549 322. Atendemos de lunes a viernes, de 9:00 a 18:00 (hora de Perú). Es la vía más rápida para consultas y para arrancar una cotización.",
        },
        {
          q: "¿Cuál es el correo de contacto de Websy?",
          a: "Puedes escribirnos a ventas@websy.com.pe. Es el canal recomendado si quieres adjuntar un brief, referencias visuales o documentación de tu proyecto.",
        },
        {
          q: "¿En cuánto tiempo responden?",
          a: "Respondemos en menos de 24 horas hábiles. Si escribes un viernes por la tarde o un fin de semana, tendrás respuesta el siguiente día hábil.",
        },
        {
          q: "¿La cotización tiene algún costo?",
          a: "No. Analizamos tu caso y te enviamos una propuesta con alcance, plazos y precio sin ningún costo ni compromiso. Solo pagas si decides avanzar con el proyecto.",
        },
        {
          q: "¿Atienden fuera de Lima?",
          a: "Sí. Trabajamos con empresas de todo el Perú y también con clientes del extranjero que venden al mercado peruano. Los proyectos se llevan de forma remota, con videollamadas y un canal directo de WhatsApp con el equipo.",
        },
        {
          q: "¿Puedo pasar por su oficina?",
          a: "Trabajamos principalmente de forma remota, así que las reuniones presenciales se coordinan con cita previa. Escríbenos por WhatsApp y lo agendamos según tu zona y disponibilidad.",
        },
        {
          q: "¿Trabajan con proyectos pequeños?",
          a: "Sí. Atendemos desde una página web de una sola sección hasta sistemas a medida y tiendas virtuales completas. Cuéntanos tu caso y te decimos con honestidad si somos la opción correcta para lo que necesitas.",
        },
      ]}
      serviceName="Contacto Websy"
      serviceDescription="Canales de contacto de Websy, agencia de desarrollo web en Lima, Perú: WhatsApp, correo y formulario, con respuesta en menos de 24 horas hábiles."
    />
  );
}
