import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/diseno-de-paginas-web/restaurantes",
  title: "Páginas web para restaurantes en Perú",
  description:
    "Diseño de páginas web para restaurantes en Perú: carta digital, reservas, pedidos por WhatsApp, Google Maps y SEO local para que te encuentren y llenen tus mesas.",
});

export default function PaginaWebRestaurantesPage() {
  return (
    <ServiceLanding
      slug="/diseno-de-paginas-web/restaurantes"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Diseño de Páginas Web", path: "/diseno-de-paginas-web" },
        { name: "Restaurantes", path: "/diseno-de-paginas-web/restaurantes" },
      ]}
      eyebrow="Páginas web por rubro"
      h1="Páginas web para restaurantes en Perú"
      intro="Diseñamos páginas web para restaurantes, cevicherías, pollerías y cafeterías en Lima y todo el Perú: con carta digital, reservas, pedidos por WhatsApp, ubicación en Google Maps y SEO local para que te encuentren cuando alguien busca dónde comer cerca."
      highlights={["Carta digital", "Reservas online", "Pedidos por WhatsApp", "Google Maps", "SEO local"]}
      stats={[
        { value: "Carta", label: "Digital y siempre actualizada" },
        { value: "Reservas", label: "Directo desde la web" },
        { value: "Local", label: "Apareces en 'cerca de mí'" },
        { value: "Móvil", label: "Se ve perfecta en el celular" },
      ]}
      sections={[
        {
          h2: "Una web pensada para llenar mesas, no solo para verse bien",
          body:
            "La mayoría de tus clientes decide dónde comer desde el celular, buscando en Google o Instagram. Si tu restaurante no tiene una página web clara con tu carta, tus horarios y tu ubicación, esa decisión se va a la competencia. Diseñamos una web que responde en segundos las tres preguntas que todo comensal se hace antes de ir: qué venden, cuánto cuesta y cómo llegar o pedir. Con eso, transformamos las búsquedas en reservas y pedidos reales.",
        },
        {
          h2: "Carta digital que actualizas tú mismo",
          body:
            "Los precios de insumos cambian y tu carta también. Por eso entregamos una carta digital administrable: agregas platos, cambias precios, marcas lo agotado y subes fotos sin llamar a nadie ni pagar por cada edición. Una carta con buenas fotos y descripciones apetitosas vende más que un PDF pesado que nadie abre en el celular.",
          bullets: [
            "Platos organizados por categorías (entradas, fondos, bebidas, postres).",
            "Fotos de tus platos que despiertan el antojo.",
            "Precios editables al instante, sin depender de terceros.",
            "Opción de menú del día o carta de temporada.",
          ],
        },
        {
          h2: "Reservas y pedidos sin comisiones de terceros",
          body:
            "Las apps de delivery se quedan con un buen porcentaje de cada venta. Tu página web te da un canal directo: el cliente reserva mesa o arma su pedido y te llega por WhatsApp, sin intermediarios que cobren comisión. Sigues usando las apps si quieres, pero recuperas el control (y el margen) de tus ventas directas.",
          bullets: [
            "Botón de reserva que llega a tu WhatsApp o correo.",
            "Pedidos para delivery o recojo directo, sin comisión de app.",
            "Enlace directo a tu carta desde tu bio de Instagram y Google.",
          ],
        },
        {
          h2: "SEO local: que te encuentren quienes ya tienen hambre",
          body:
            "Cuando alguien busca 'restaurantes cerca de mí', 'cevichería en [tu distrito]' o 'dónde almorzar en [tu zona]', queremos que aparezcas tú. Optimizamos tu web con SEO local y la conectamos con tu ficha de Google (Google Business Profile) para que salgas en el mapa y en los resultados con tus horarios, fotos y reseñas. Ese es el tráfico más valioso: gente lista para comer, buscando cerca de ti ahora mismo.",
          bullets: [
            "Optimización para búsquedas locales por distrito y tipo de comida.",
            "Conexión con Google Maps y tu ficha de negocio.",
            "Datos estructurados de restaurante (menú, horario, ubicación) para Google.",
          ],
        },
        {
          h2: "Todo lo técnico resuelto",
          body:
            "Tu web incluye diseño responsive que se ve perfecto en el celular, carga rápida para que nadie se vaya esperando, hosting, dominio y certificado de seguridad (SSL). Se integra con tu Instagram, tu WhatsApp y tus mapas. Tú te concentras en la cocina; nosotros en que la web funcione y te traiga comensales.",
          bullets: [
            "Diseño responsive optimizado para el móvil.",
            "Hosting, dominio .pe o .com y certificado SSL incluidos.",
            "Integración con Instagram, Facebook y WhatsApp.",
            "Galería de fotos del local y los platos.",
          ],
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "El servicio completo de diseño y desarrollo web para tu negocio." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de tu web y cómo pedir tu cotización gratis." },
        { label: "Cotiza tu web de restaurante", href: "/cotizacion", desc: "Cuéntanos de tu restaurante y te enviamos una propuesta en 24 h." },
      ]}
      articles={[
        { label: "Página web para restaurantes", href: "/blog/pagina-web-para-restaurantes-en-peru", desc: "Carta digital, pedidos y reservas: qué debe tener tu web gastronómica." },
        { label: "Cómo aparecer en Google con tu página web", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Guía práctica de SEO para que te encuentren en tu zona." },
      ]}
      faqs={[
        {
          q: "¿La carta digital la puedo actualizar yo mismo?",
          a: "Sí. Entregamos una carta administrable y te capacitamos para agregar platos, cambiar precios, marcar agotados y subir fotos cuando quieras, sin saber programar y sin pagar por cada cambio.",
        },
        {
          q: "¿La web recibe pedidos y reservas por WhatsApp?",
          a: "Sí. Configuramos botones de reserva y pedido que te llegan directo a tu WhatsApp o correo, sin comisiones de apps de delivery. Es un canal de venta directo y tuyo.",
        },
        {
          q: "¿Aparecerá mi restaurante en Google Maps?",
          a: "Optimizamos tu web con SEO local y la conectamos con tu ficha de Google Business Profile para que aparezcas en el mapa y en búsquedas como 'restaurantes cerca de mí' con tus horarios, fotos y reseñas.",
        },
        {
          q: "¿Sirve para cevicherías, pollerías, cafeterías o food trucks?",
          a: "Sí. Adaptamos la web a tu tipo de negocio gastronómico, ya sea un restaurante formal, una cevichería, pollería, cafetería, panadería o food truck. La carta y las funciones se ajustan a tu operación.",
        },
        {
          q: "¿Cuánto cuesta la página web de un restaurante?",
          a: "Depende del número de secciones, si quieres reservas o pedidos, y si nosotros producimos las fotos y textos. Te preparamos una cotización a medida y gratuita en menos de 24 horas.",
        },
        {
          q: "¿Incluye hosting y dominio?",
          a: "Sí. Incluimos la configuración del hosting, tu dominio (.pe o .com) y el certificado de seguridad SSL para que tu web salga publicada, segura y rápida.",
        },
      ]}
      serviceName="Diseño de páginas web para restaurantes"
      serviceDescription="Diseño de páginas web para restaurantes, cevicherías, pollerías y cafeterías en Perú: carta digital administrable, reservas y pedidos por WhatsApp, Google Maps y SEO local."
    />
  );
}
