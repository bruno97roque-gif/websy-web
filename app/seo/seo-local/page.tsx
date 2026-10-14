import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

/* 14-oct-2026 · Búsqueda comercial sin página comercial: «servicio seo local»
   (68 imp), «servicio posicionamiento local», «servicio de seo local» y «servicio
   seo lima» suman unas 95 impresiones en 90 días (GSC 15-jul/12-oct) y solo las
   atendía el blog «SEO local en Perú», entre el puesto 11 y el 34. El blog se queda
   con la guía y enlaza aquí; /seo sigue siendo el servicio completo. */
export const metadata: Metadata = pageMeta({
  path: "/seo/seo-local",
  title: "Servicio de SEO local en Lima y Perú",
  description:
    "Servicio de SEO local en Lima y todo el Perú: ficha de Google Business Profile, posicionamiento en el mapa, reseñas, datos NAP y páginas por distrito para que te encuentren cerca.",
});

export default function SeoLocalPage() {
  return (
    <ServiceLanding
      slug="/seo/seo-local"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "SEO", path: "/seo" },
        { name: "SEO local", path: "/seo/seo-local" },
      ]}
      eyebrow="Servicio · SEO local"
      h1="Servicio de SEO local en Lima y Perú"
      intro="El SEO local de Websy hace que tu negocio aparezca cuando alguien busca tu servicio en tu distrito o ciudad: en el mapa de Google, en el bloque de empresas y en los resultados normales. Trabajamos tu ficha de Google Business Profile, tus reseñas, tus datos de contacto y tu web para que el cliente que está cerca te llame o te escriba por WhatsApp."
      highlights={["Google Business Profile", "Mapa y bloque de empresas", "Reseñas", "Datos NAP", "Páginas por distrito"]}
      stats={[
        { value: "Mapa", label: "Apareces en el bloque de empresas de Google" },
        { value: "Distrito", label: "Búsquedas con tu zona o «cerca de mí»" },
        { value: "Reseñas", label: "Más confianza y más clics" },
        { value: "24 h", label: "Diagnóstico y propuesta gratis" },
      ]}
      sections={[
        {
          h2: "Qué es el SEO local y a quién le sirve",
          body:
            "El SEO local es el posicionamiento para búsquedas con intención de zona: «dentista en Surco», «abogado laboral en Lima», «taller mecánico cerca de mí». En esas búsquedas Google muestra primero un mapa con tres empresas y después los resultados normales. Le sirve a todo negocio que atiende en un local o en un área definida: clínicas, estudios, restaurantes, colegios, hoteles, talleres, inmobiliarias y servicios a domicilio.",
        },
        {
          h2: "Ficha de Google Business Profile optimizada",
          body:
            "La ficha de Google es lo primero que ve tu cliente en el mapa. Revisamos la categoría principal y las secundarias, los servicios, el horario, la zona de atención, las fotos y la descripción, y la conectamos con tu web para que Google entienda qué haces y dónde. Una ficha con la categoría equivocada te saca del mapa en las búsquedas que más te importan.",
          bullets: [
            "Categoría principal y secundarias correctas para tu rubro.",
            "Servicios, horarios, zona de atención y atributos completos.",
            "Fotos reales del local, el equipo y el trabajo.",
            "Enlace a la página de tu web que corresponde a esa ubicación.",
          ],
        },
        {
          h2: "Reseñas: la señal que más mueve el clic",
          body:
            "En el mapa, quien tiene más y mejores reseñas recibe más llamadas. Te dejamos un proceso simple para pedir reseñas a tus clientes satisfechos (un enlace directo y un mensaje listo para WhatsApp) y te ayudamos a responderlas, también las negativas. Las reseñas se consiguen de clientes reales: no compramos ni inventamos opiniones, porque Google las elimina y puede suspender la ficha.",
        },
        {
          h2: "Datos de contacto iguales en todas partes (NAP)",
          body:
            "NAP son el nombre, la dirección y el teléfono de tu negocio. Si aparecen distintos en tu web, tu ficha de Google, Facebook y los directorios, Google duda de cuál es el correcto y te muestra menos. Unificamos esos datos, los marcamos con datos estructurados LocalBusiness en tu web y corregimos los directorios donde ya apareces.",
          bullets: [
            "Auditoría de nombre, dirección y teléfono en web, redes y directorios.",
            "Datos estructurados LocalBusiness con dirección, horario y zona.",
            "Alta en directorios peruanos relevantes para tu rubro.",
          ],
        },
        {
          h2: "Páginas por distrito o por servicio en tu web",
          body:
            "Si atiendes varios distritos o tienes más de un local, cada zona necesita su propia página con contenido real: qué haces ahí, cómo llegar, horarios y preguntas frecuentes. Así puedes posicionar «tu servicio + tu distrito» sin páginas duplicadas que Google ignora. Si tu web todavía no está preparada para esto, la ajustamos o te hacemos una con nuestro [diseño de páginas web](/diseno-de-paginas-web).",
        },
        {
          h2: "Cómo medimos el SEO local",
          body:
            "Te mostramos cada mes cuántas veces apareciste en Google y en el mapa, cuántas personas pidieron indicaciones, llamaron o entraron a tu web desde la ficha, y en qué búsquedas locales subiste. Medimos con Google Search Console, Google Analytics 4 y las estadísticas de la ficha, y conectamos los clics de WhatsApp para saber qué búsqueda trajo cada contacto.",
        },
      ]}
      related={[
        { label: "Servicio de SEO", href: "/seo", desc: "SEO técnico, on-page, de contenidos, local y para IA." },
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Una web rápida y preparada para posicionar en tu zona." },
        { label: "Google Ads", href: "/google-ads", desc: "Para aparecer arriba desde el primer día mientras el SEO crece." },
        { label: "Cotiza tu SEO local", href: "/cotizacion", desc: "Cuéntanos tu rubro y tu zona y te respondemos en 24 h." },
      ]}
      articles={[
        { label: "SEO local en Perú: cómo salir primero en tu ciudad", href: "/blog/seo-local-en-peru-como-salir-primero-en-tu-ciudad", desc: "La guía completa para posicionar tu negocio en tu zona." },
        { label: "Google Mi Negocio para empresas en Perú", href: "/blog/google-mi-negocio-para-empresas-en-peru", desc: "Cómo registrar y verificar tu ficha de Google gratis." },
        { label: "¿Cuánto cuesta el SEO en Perú?", href: "/blog/cuanto-cuesta-el-seo-en-peru", desc: "Qué define el precio de un servicio de SEO mensual." },
      ]}
      faqs={[
        {
          q: "¿Qué incluye el servicio de SEO local?",
          a: "Optimización de tu ficha de Google Business Profile, un proceso para conseguir reseñas reales, unificación de nombre, dirección y teléfono en web y directorios, datos estructurados LocalBusiness, páginas por distrito o servicio en tu web y un reporte mensual con llamadas, indicaciones y visitas desde Google.",
        },
        {
          q: "¿En cuánto tiempo aparezco en el mapa de Google?",
          a: "Depende de la competencia de tu rubro y tu zona, y de cuántas reseñas tengan los negocios que hoy salen arriba. Los cambios en la ficha se reflejan en días; subir en el mapa frente a la competencia suele tomar algunos meses de trabajo constante.",
        },
        {
          q: "¿Necesito tener un local para hacer SEO local?",
          a: "No necesariamente. Si atiendes a domicilio o en una zona, Google permite una ficha de negocio de área de servicio sin mostrar la dirección. Lo que sí necesitas es atender clientes cara a cara o en su ubicación.",
        },
        {
          q: "¿Pueden conseguirme reseñas?",
          a: "Te ayudamos a pedirlas a tus clientes reales con un enlace directo y un mensaje listo para WhatsApp, y a responderlas. No compramos ni redactamos reseñas: van contra las políticas de Google y ponen en riesgo tu ficha.",
        },
        {
          q: "¿Cuánto cuesta el SEO local?",
          a: "Depende de cuántas ubicaciones tengas, el estado de tu ficha y tu web, y la competencia de tu zona. Te enviamos una propuesta a medida y gratuita en menos de 24 horas.",
        },
      ]}
      serviceName="Servicio de SEO local"
      serviceDescription="Servicio de SEO local en Lima y Perú: optimización de Google Business Profile, reseñas, datos NAP, datos estructurados LocalBusiness y páginas por distrito para aparecer en el mapa y en las búsquedas de tu zona."
    />
  );
}
