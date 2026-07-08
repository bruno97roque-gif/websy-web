import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/diseno-de-paginas-web/hoteles",
  title: "Páginas web para hoteles y hospedajes en Perú",
  description:
    "Diseño de páginas web para hoteles, hostales y hospedajes en Perú: reservas directas, habitaciones y tarifas, galería, pagos con Yape y tarjeta, y SEO turístico.",
});

export default function PaginaWebHotelesPage() {
  return (
    <ServiceLanding
      slug="/diseno-de-paginas-web/hoteles"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Diseño de Páginas Web", path: "/diseno-de-paginas-web" },
        { name: "Hoteles", path: "/diseno-de-paginas-web/hoteles" },
      ]}
      eyebrow="Páginas web por rubro"
      h1="Páginas web para hoteles y hospedajes"
      intro="Diseñamos páginas web para hoteles, hostales, hospedajes y casas de campo en todo el Perú: con reservas directas, habitaciones y tarifas, galería, pagos con Yape, Plin y tarjeta, y SEO turístico. Una web que capta reservas sin depender solo de las comisiones de las OTAs."
      highlights={["Reservas directas", "Habitaciones y tarifas", "Pagos Yape / tarjeta", "SEO turístico", "Multidioma"]}
      stats={[
        { value: "Reservas", label: "Directas, sin comisión de OTA" },
        { value: "Galería", label: "Habitaciones y servicios que venden" },
        { value: "Turismo", label: "Apareces ante viajeros" },
        { value: "Móvil", label: "Perfecta en el celular" },
      ]}
      sections={[
        {
          h2: "Reservas directas: recupera el margen que se llevan las OTAs",
          body:
            "Booking, Expedia y Airbnb te traen huéspedes, pero se quedan con una comisión de cada reserva. Una página web propia con reserva directa te da un canal sin intermediarios: el viajero consulta disponibilidad y reserva contigo, y tú conservas el margen completo. Muchos huéspedes que te descubren en una OTA terminan buscando tu web para reservar más barato: si no la tienes, pierdes esa venta directa.",
        },
        {
          h2: "Habitaciones, tarifas y servicios que dan ganas de reservar",
          body:
            "El viajero compra con los ojos. Presentamos cada tipo de habitación con fotos de calidad, descripción, capacidad, servicios y tarifa, junto con lo que ofrece el hotel: desayuno, wifi, piscina, estacionamiento, ubicación. Cuando el huésped ve exactamente qué recibe y a qué precio, la decisión de reservar es más fácil.",
          bullets: [
            "Fichas por tipo de habitación con fotos, capacidad y tarifa.",
            "Servicios del hotel destacados (desayuno, wifi, piscina, etc.).",
            "Galería del hotel, habitaciones y alrededores.",
            "Sección de ubicación con lo que hay para hacer en la zona.",
          ],
        },
        {
          h2: "Reservas y pagos pensados para el viajero peruano y extranjero",
          body:
            "Facilitamos la reserva con un formulario de disponibilidad o un botón directo a WhatsApp, y permitimos cobrar la garantía o la estadía con los medios que usa cada huésped: Yape y Plin para el viajero local, tarjeta vía Niubiz o Izipay para nacionales y extranjeros. Cuantas más formas de pagar aceptas, menos reservas se caen.",
          bullets: [
            "Solicitud de reserva y consulta de disponibilidad.",
            "Pagos con Yape, Plin y tarjeta (Niubiz / Izipay).",
            "Confirmación de reserva por WhatsApp y correo.",
            "Opción multidioma para huéspedes extranjeros.",
          ],
        },
        {
          h2: "SEO turístico: que te encuentren quienes viajan a tu destino",
          body:
            "El viajero busca 'hoteles en [tu ciudad]', 'hospedaje en [destino]' o 'dónde dormir en [zona turística]'. Optimizamos tu web con SEO turístico y la conectamos con tu ficha de Google Business Profile para que aparezcas en el mapa y en los resultados con tus fotos, tarifas y reseñas. Ese es tráfico de gente que ya decidió viajar y solo falta que reserve contigo.",
          bullets: [
            "SEO para búsquedas por destino y tipo de hospedaje.",
            "Conexión con Google Maps y ficha de negocio.",
            "Datos estructurados de hotel, tarifas y ubicación.",
          ],
        },
        {
          h2: "Rápida, multidioma y todo lo técnico resuelto",
          body:
            "Tu web incluye diseño responsive que se ve espectacular en el celular, carga rápida (clave con galerías de fotos), hosting, dominio y certificado SSL. Añadimos versión en inglés si recibes turistas extranjeros, y todo administrable para que actualices tarifas y disponibilidad según la temporada.",
          bullets: [
            "Diseño responsive con galerías que enamoran.",
            "Versión multidioma (español / inglés) opcional.",
            "Hosting, dominio .pe o .com y certificado SSL incluidos.",
            "Panel administrable para tarifas y temporadas.",
          ],
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "El servicio completo de diseño y desarrollo web profesional." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu web y cómo pedir tu cotización gratis." },
        { label: "Cotiza tu web de hotel", href: "/cotizacion", desc: "Cuéntanos de tu hotel u hospedaje y te respondemos en 24 h." },
      ]}
      articles={[
        { label: "Página web para hoteles y hospedajes", href: "/blog/pagina-web-para-hoteles-y-hospedajes-en-peru", desc: "Reservas directas sin comisión de intermediarios." },
        { label: "Cómo aparecer en Google con tu página web", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Guía práctica de SEO para captar viajeros que buscan tu destino." },
        { label: "Cómo tener presencia online para tu negocio", href: "/blog/como-tener-presencia-online-para-tu-negocio-en-peru", desc: "Los pilares para que tu hospedaje exista y venda en internet." },
      ]}
      faqs={[
        {
          q: "¿La web recibe reservas directas sin comisión?",
          a: "Sí. Configuramos un canal de reserva directa (formulario de disponibilidad o WhatsApp) para que captes huéspedes sin la comisión que cobran Booking, Expedia o Airbnb.",
        },
        {
          q: "¿Puedo cobrar la reserva con Yape o tarjeta?",
          a: "Sí. Integramos pagos con Yape, Plin y tarjeta vía Niubiz o Izipay para cobrar la garantía o la estadía, tanto a viajeros peruanos como extranjeros.",
        },
        {
          q: "¿La web puede estar en inglés para turistas extranjeros?",
          a: "Sí. Podemos hacer la web multidioma (español e inglés) para que los viajeros extranjeros entiendan tu oferta y reserven con confianza.",
        },
        {
          q: "¿Aparecerá mi hotel cuando busquen hospedaje en mi destino?",
          a: "Optimizamos tu web con SEO turístico por destino y la conectamos con tu ficha de Google Business Profile para que aparezcas en el mapa y en los resultados con fotos, tarifas y reseñas.",
        },
        {
          q: "¿Puedo actualizar tarifas según la temporada?",
          a: "Sí. Entregamos una web administrable para que actualices tarifas, disponibilidad y promociones según la temporada, sin depender de nadie.",
        },
        {
          q: "¿Cuánto cuesta la página web de un hotel u hospedaje?",
          a: "Depende del número de habitaciones, si incluye reservas y pagos, multidioma y quién produce las fotos y textos. Te enviamos una cotización a medida y gratuita en menos de 24 horas.",
        },
      ]}
      serviceName="Diseño de páginas web para hoteles y hospedajes"
      serviceDescription="Diseño de páginas web para hoteles, hostales y hospedajes en Perú: reservas directas, habitaciones y tarifas, pagos con Yape, Plin y tarjeta, multidioma y SEO turístico."
    />
  );
}
