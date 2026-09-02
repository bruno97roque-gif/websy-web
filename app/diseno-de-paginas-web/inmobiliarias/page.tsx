import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/diseno-de-paginas-web/inmobiliarias",
  title: "Creamos la web de tu inmobiliaria en Perú",
  description:
    "Diseño de páginas web para inmobiliarias y constructoras en Perú: catálogo de propiedades y proyectos, filtros de búsqueda, captación de leads y SEO.",
});

export default function PaginaWebInmobiliariasPage() {
  return (
    <ServiceLanding
      slug="/diseno-de-paginas-web/inmobiliarias"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Diseño de Páginas Web", path: "/diseno-de-paginas-web" },
        { name: "Inmobiliarias y Constructoras", path: "/diseno-de-paginas-web/inmobiliarias" },
      ]}
      eyebrow="Servicio · Inmobiliarias y constructoras"
      h1="Creamos la página web de tu inmobiliaria"
      intro="Diseñamos páginas web para inmobiliarias, constructoras y agentes inmobiliarios en Lima y todo el Perú: con catálogo de propiedades, fichas de proyectos, filtros de búsqueda, galerías y captación de leads. Una web que muestra tus inmuebles y agenda visitas de compradores reales."
      highlights={["Catálogo de propiedades", "Fichas de proyectos", "Filtros de búsqueda", "Captación de leads", "SEO"]}
      stats={[
        { value: "Catálogo", label: "Propiedades y proyectos administrables" },
        { value: "Leads", label: "Consultas directas a tu equipo" },
        { value: "Galería", label: "Fotos, planos y recorridos" },
        { value: "Móvil", label: "Perfecta en el celular" },
      ]}
      sections={[
        {
          h2: "El comprador investiga online antes de pisar el inmueble",
          body:
            "Nadie compra o alquila un inmueble sin verlo antes en internet. El comprador filtra por zona, precio y características desde su celular, y descarta en segundos las opciones mal presentadas. Diseñamos una página web que muestra tus propiedades y proyectos con fotos de calidad, información completa y filtros claros, para que el interesado encuentre lo que busca y te deje su consulta sin llamar a otro. Tu web trabaja como tu vitrina abierta 24/7.",
        },
        {
          h2: "Catálogo de propiedades que administras tú mismo",
          body:
            "El inventario inmobiliario cambia constantemente: entran propiedades, se venden, cambian precios. Entregamos un catálogo administrable donde publicas y das de baja inmuebles, actualizas precios, subes fotos y marcas 'vendido' sin depender de nadie. Cada propiedad con su ficha completa: metraje, dormitorios, baños, ubicación, precio y galería.",
          bullets: [
            "Publicación y edición de propiedades sin programar.",
            "Fichas con metraje, ambientes, precio, ubicación y estado.",
            "Galería de fotos, planos y recorridos virtuales.",
            "Marcado de 'disponible', 'reservado' o 'vendido'.",
          ],
        },
        {
          h2: "Filtros y búsqueda que llevan al inmueble correcto",
          body:
            "Un comprador quiere filtrar rápido: por distrito, tipo (departamento, casa, terreno, oficina), rango de precio y número de dormitorios. Un buscador con filtros bien hechos reduce la frustración y aumenta las consultas, porque el interesado llega justo a lo que le sirve en pocos clics.",
          bullets: [
            "Filtros por zona, tipo de inmueble, precio y ambientes.",
            "Búsqueda de proyectos en preventa, entrega inmediata o construcción.",
            "Resultados ordenados y claros, optimizados para el móvil.",
          ],
        },
        {
          h2: "Captación de leads: convierte visitas en clientes",
          body:
            "De nada sirve tráfico si no se convierte en contactos. Cada propiedad incluye un botón de consulta y un formulario que llega directo a tu equipo comercial por WhatsApp o correo, con la referencia del inmueble que le interesó. Así tu asesor llama sabiendo exactamente qué busca el cliente y cierra más rápido.",
          bullets: [
            "Formulario de interés por propiedad o proyecto.",
            "Consulta directa por WhatsApp con la referencia del inmueble.",
            "Agenda de visitas que llega a tu equipo comercial.",
          ],
        },
        {
          h2: "SEO y todo lo técnico resuelto",
          body:
            "Optimizamos tu web para búsquedas como 'departamentos en [distrito]', 'proyectos inmobiliarios en Lima' o 'terrenos en venta en [zona]', que es donde está tu comprador. Incluye diseño responsive, carga rápida (clave con muchas fotos), hosting, dominio y certificado SSL. Todo listo para escalar a medida que crece tu inventario.",
          bullets: [
            "SEO para búsquedas por zona y tipo de inmueble.",
            "Carga rápida optimizada para galerías con muchas fotos.",
            "Datos estructurados de inmueble y ubicación para Google.",
            "Hosting, dominio .pe o .com y certificado SSL incluidos.",
          ],
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "El servicio completo de diseño y desarrollo web profesional." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu web y cómo pedir tu cotización gratis." },
        { label: "Cotiza tu web inmobiliaria", href: "/cotizacion", desc: "Cuéntanos de tu inmobiliaria y te enviamos una propuesta en 24 h." },
      ]}
      articles={[
        { label: "Página web para inmobiliarias y constructoras", href: "/blog/pagina-web-para-inmobiliarias-y-constructoras", desc: "Qué debe tener la web de una inmobiliaria para captar compradores." },
        { label: "Cómo aparecer en Google con tu página web", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Guía práctica de SEO para posicionar tus propiedades." },
      ]}
      faqs={[
        {
          q: "¿Puedo publicar y dar de baja propiedades yo mismo?",
          a: "Sí. Entregamos un catálogo administrable donde publicas inmuebles, editas precios, subes fotos y marcas 'vendido' o 'reservado' sin programar y sin costo por cada cambio.",
        },
        {
          q: "¿La web tiene buscador con filtros?",
          a: "Sí. Configuramos filtros por zona, tipo de inmueble, rango de precio y número de dormitorios, para que el comprador llegue rápido a lo que busca y consulte.",
        },
        {
          q: "¿Cómo recibo las consultas de los interesados?",
          a: "Cada propiedad tiene un formulario y un botón de WhatsApp que llegan a tu equipo comercial con la referencia del inmueble, para que el asesor sepa qué busca el cliente antes de llamar.",
        },
        {
          q: "¿Sirve para constructoras con proyectos en preventa?",
          a: "Sí. Además del catálogo de propiedades, creamos fichas de proyectos con estado (preventa, en construcción, entrega inmediata), planos, avances y galerías para captar interesados desde el lanzamiento.",
        },
        {
          q: "¿Aparecerá en Google cuando busquen inmuebles en una zona?",
          a: "Optimizamos tu web con SEO para búsquedas por zona y tipo de inmueble, con datos estructurados y buena velocidad, para que tus propiedades aparezcan ante compradores reales.",
        },
        {
          q: "¿Cuánto cuesta la página web de una inmobiliaria?",
          a: "Depende del tamaño del catálogo, los filtros, si incluye proyectos y quién produce el contenido. Te enviamos una cotización a medida y gratuita en menos de 24 horas.",
        },
      ]}
      serviceName="Diseño de páginas web para inmobiliarias y constructoras"
      serviceDescription="Diseño de páginas web para inmobiliarias, constructoras y agentes en Perú: catálogo de propiedades administrable, filtros de búsqueda, captación de leads y SEO."
    />
  );
}
