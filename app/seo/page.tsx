import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/seo",
  title: "Servicio de SEO en Perú: posicionamiento web en Google",
  description:
    "Servicio de SEO y posicionamiento web en Perú: SEO on-page, técnico, de contenidos y local para aparecer en Google, atraer clientes y crecer de forma sostenida.",
});

export default function SeoPage() {
  return (
    <ServiceLanding
      slug="/seo"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "SEO y Posicionamiento Web", path: "/seo" },
      ]}
      eyebrow="Posicionamiento web"
      h1="Servicio de SEO en Perú"
      intro="Posicionamos tu web en Google para que te encuentren quienes ya buscan lo que ofreces. Nuestro servicio de SEO en Perú combina SEO técnico, on-page, de contenidos y local para atraer tráfico de calidad y convertirlo en clientes, con un crecimiento sostenido que no depende de pagar por cada clic."
      highlights={["SEO on-page", "SEO técnico", "SEO de contenidos", "SEO local", "Reportes claros"]}
      stats={[
        { value: "Orgánico", label: "Tráfico que no pagas por clic" },
        { value: "Local", label: "Apareces en tu zona y en el mapa" },
        { value: "Sostenido", label: "Resultados que se acumulan" },
        { value: "Medible", label: "Reportes claros de avance" },
      ]}
      sections={[
        {
          h2: "SEO: el tráfico que trabaja para ti todos los días",
          body:
            "A diferencia de la publicidad pagada, que se detiene cuando dejas de invertir, el SEO construye un activo: una web que aparece en Google cuando alguien busca lo que ofreces, hoy y dentro de un año. Nuestro servicio de posicionamiento web en Perú trabaja las bases técnicas, el contenido y la autoridad de tu sitio para que suba de forma sostenida en los resultados y capte clientes con intención de compra real, sin pagar por cada visita.",
        },
        {
          h2: "Auditoría y SEO técnico",
          body:
            "Antes de escalar, hay que asegurar los cimientos. Auditamos tu web para detectar lo que frena tu posicionamiento: velocidad, errores de rastreo, indexación, estructura de URLs, datos estructurados y experiencia móvil. Un sitio técnicamente sano es la base sobre la que todo lo demás funciona; sin ella, ni el mejor contenido rinde.",
          bullets: [
            "Auditoría técnica completa de tu sitio.",
            "Mejora de velocidad y Core Web Vitals (LCP, INP, CLS).",
            "Corrección de indexación, rastreo y estructura de URLs.",
            "Datos estructurados (schema) para rich results.",
          ],
        },
        {
          h2: "SEO on-page y arquitectura de contenidos",
          body:
            "Optimizamos cada página para las palabras que tus clientes realmente buscan: títulos, meta descripciones, encabezados, enlazado interno y contenido. Diseñamos una arquitectura por silos (páginas pilar y artículos de apoyo) que le dice a Google de qué es experta tu web, para que posicione por el conjunto de tu temática y no solo por una palabra suelta.",
          bullets: [
            "Investigación de palabras clave con intención de compra.",
            "Optimización de títulos, meta y encabezados.",
            "Arquitectura por silos y enlazado interno estratégico.",
            "Contenido que responde lo que busca tu cliente.",
          ],
        },
        {
          h2: "SEO local: gana a tu competencia de zona",
          body:
            "Si tu negocio atiende a una zona, el SEO local es donde está tu mayor retorno. Optimizamos tu web y tu ficha de Google Business Profile para que aparezcas en el mapa y en búsquedas como '[tu servicio] cerca de mí' o 'en [tu distrito]'. Trabajamos reseñas, NAP consistente y páginas por ubicación para dominar tu mercado local.",
          bullets: [
            "Optimización de Google Business Profile.",
            "Posicionamiento en el mapa y el paquete local.",
            "Gestión de reseñas y consistencia de datos (NAP).",
            "Páginas por distrito o servicio local.",
          ],
        },
        {
          h2: "GEO: visibilidad también en las IA",
          body:
            "Cada vez más personas preguntan a ChatGPT, Google AI Overviews o Perplexity antes de decidir. Preparamos tu web para que sea citable por estos motores: contenido claro y estructurado, datos verificables y accesibilidad para los crawlers de IA. Así tu marca aparece no solo en Google, sino también en las respuestas generadas por inteligencia artificial.",
          bullets: [
            "Contenido estructurado y citable por IA.",
            "Accesibilidad para crawlers (GPTBot, ClaudeBot, PerplexityBot).",
            "Señales de marca y autoridad (E-E-A-T).",
          ],
        },
        {
          h2: "Medición y reportes que entiendes",
          body:
            "El SEO se gestiona con datos, no con promesas. Configuramos Google Analytics 4 y Google Search Console, y te enviamos reportes claros de posiciones, tráfico y conversiones. Sabrás qué mejoró, qué falta y qué sigue, con un lenguaje simple y foco en lo que importa para tu negocio: más clientes.",
          bullets: [
            "Configuración de Google Analytics 4 y Search Console.",
            "Reportes de posiciones, tráfico y conversiones.",
            "Foco en resultados de negocio, no en métricas vacías.",
          ],
        },
      ]}
      related={[
        { label: "Nuestros servicios", href: "/servicios", desc: "Conoce todo lo que hacemos: web, ecommerce, software, branding y más." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de un servicio de SEO y cómo cotizarlo." },
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Una web optimizada para SEO desde su construcción." },
      ]}
      articles={[
        { label: "¿Cuánto cuesta el SEO en Perú?", href: "/blog/cuanto-cuesta-el-seo-en-peru", desc: "Cómo se cobra el posicionamiento y por qué es inversión, no gasto." },
        { label: "Cómo migrar tu web sin perder posicionamiento", href: "/blog/como-migrar-tu-pagina-web-sin-perder-posicionamiento-en-google", desc: "Redirecciones 301 y los errores que hunden tu SEO." },
        { label: "Cómo aparecer en Google con tu página web", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Guía práctica de SEO para posicionar tu web en Perú." },
        { label: "Google Mi Negocio para empresas en Perú", href: "/blog/google-mi-negocio-para-empresas-en-peru", desc: "Cómo aparecer en el mapa de Google y ganar reseñas." },
        { label: "Cómo posicionar una tienda virtual en Google", href: "/blog/como-posicionar-una-tienda-virtual-en-google", desc: "SEO para ecommerce: fichas, categorías y contenido." },
      ]}
      faqs={[
        {
          q: "¿En cuánto tiempo veo resultados de SEO?",
          a: "El SEO es progresivo: los primeros movimientos suelen verse en algunas semanas y los resultados sólidos en algunos meses, según la competencia de tus palabras clave y el estado inicial de tu web. A cambio, es un tráfico que se acumula y no depende de pagar por cada clic.",
        },
        {
          q: "¿Cuál es la diferencia entre SEO y Google Ads?",
          a: "Google Ads te da visibilidad inmediata pagando por cada clic; cuando dejas de pagar, desaparece. El SEO construye posicionamiento orgánico que se sostiene en el tiempo. Lo ideal suele ser combinarlos: Ads para resultados rápidos y SEO para crecimiento sostenido.",
        },
        {
          q: "¿Garantizan el primer lugar en Google?",
          a: "Nadie serio puede garantizar el puesto 1, porque Google decide el ranking con cientos de factores. Lo que sí garantizamos es un trabajo técnico, de contenido y de autoridad con las mejores prácticas, y reportes transparentes de tu avance real.",
        },
        {
          q: "¿El SEO sirve para negocios locales?",
          a: "Muchísimo. El SEO local optimiza tu web y tu ficha de Google Business Profile para que aparezcas en el mapa y en búsquedas de tu zona. Para negocios que atienden un área, suele ser el SEO de mayor retorno.",
        },
        {
          q: "¿Trabajan el posicionamiento en las IA como ChatGPT?",
          a: "Sí. Preparamos tu contenido para que sea citable por Google AI Overviews, ChatGPT y Perplexity (GEO), con estructura clara, datos verificables y accesibilidad para sus crawlers, para que tu marca aparezca también en respuestas de IA.",
        },
        {
          q: "¿Cuánto cuesta un servicio de SEO en Perú?",
          a: "Depende del estado de tu web, la competencia de tu rubro y el alcance (técnico, contenidos, local). Te preparamos una propuesta a medida y gratuita en menos de 24 horas, con alcance y prioridades claras.",
        },
      ]}
      serviceName="Servicio de SEO y posicionamiento web"
      serviceDescription="Servicio de SEO en Perú: auditoría y SEO técnico, on-page, de contenidos, local y GEO para posicionar tu web en Google y atraer clientes de forma sostenida."
    />
  );
}
