import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/google-ads",
  title: "Agencia de Google Ads en Perú: campañas que venden",
  description:
    "Gestión de campañas de Google Ads en Perú: Búsqueda, Display, Shopping y YouTube. Landing pages que convierten, optimización de presupuesto y reportes claros.",
});

export default function GoogleAdsPage() {
  return (
    <ServiceLanding
      slug="/google-ads"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Google Ads", path: "/google-ads" },
      ]}
      eyebrow="Publicidad en Google"
      h1="Gestión de Google Ads en Perú"
      intro="Creamos y gestionamos campañas de Google Ads que traen clientes, no solo clics. Investigamos tus palabras, estructuramos campañas de Búsqueda, Shopping, Display y YouTube, conectamos landing pages que convierten y optimizamos tu presupuesto para que cada sol invertido rinda lo máximo posible."
      highlights={["Búsqueda", "Shopping", "Display", "YouTube", "Landing pages"]}
      stats={[
        { value: "Inmediato", label: "Apareces arriba desde el día 1" },
        { value: "Medible", label: "Cada sol invertido se rastrea" },
        { value: "Leads", label: "Campañas hacia contactos reales" },
        { value: "ROI", label: "Optimización constante del gasto" },
      ]}
      sections={[
        {
          h2: "Aparece arriba en Google desde el primer día",
          body:
            "El SEO construye posicionamiento con el tiempo; Google Ads te pone arriba hoy. Es la vía más rápida para captar clientes que ya están buscando lo que vendes, en el momento exacto en que lo buscan. Gestionamos tus campañas con foco en resultados de negocio (contactos, ventas, reservas), no en métricas de vanidad. Cada campaña se estructura, se mide y se optimiza para que tu inversión publicitaria vuelva en clientes.",
        },
        {
          h2: "Campañas para cada objetivo",
          body:
            "No todas las campañas sirven para lo mismo. Elegimos el tipo correcto según tu meta: Búsqueda para captar demanda activa, Shopping para ecommerce, Display y YouTube para dar a conocer tu marca, y remarketing para recuperar a quien ya te visitó. Combinamos los formatos que tu negocio necesita, sin desperdiciar presupuesto en lo que no aporta.",
          bullets: [
            "Búsqueda: aparece cuando buscan tu producto o servicio.",
            "Shopping: muestra tus productos con foto y precio (ecommerce).",
            "Display y YouTube: alcance y recordación de marca.",
            "Remarketing: recupera a quien visitó tu web y no compró.",
          ],
        },
        {
          h2: "Palabras clave e intención de compra",
          body:
            "El secreto de una campaña rentable está en pujar por lo correcto y no por lo caro. Investigamos las palabras que usan tus clientes cuando ya quieren comprar, definimos concordancias y sumamos palabras negativas para no gastar en búsquedas irrelevantes. Así atraemos tráfico con intención real y evitamos quemar presupuesto en curiosos.",
          bullets: [
            "Investigación de palabras con intención de compra.",
            "Estructura de campañas y grupos de anuncios ordenada.",
            "Palabras negativas para no gastar en clics inútiles.",
            "Anuncios con textos que dan ganas de hacer clic.",
          ],
        },
        {
          h2: "Landing pages que convierten el clic en cliente",
          body:
            "Pagar por un clic que llega a una página confusa es tirar dinero. Diseñamos o afinamos la landing page a la que llega tu anuncio para que tenga un mensaje claro, un solo objetivo y un camino directo a contactarte o comprar. Una buena landing baja tu costo por conversión y sube tu retorno, por eso es parte central de nuestro servicio.",
          bullets: [
            "Landing pages enfocadas en una sola acción.",
            "Mensaje alineado con el anuncio (relevancia).",
            "Formularios y WhatsApp para captar contactos.",
            "Optimización móvil y de velocidad de carga.",
          ],
        },
        {
          h2: "Medición, conversiones y optimización",
          body:
            "Sin medición no hay optimización. Configuramos el seguimiento de conversiones (formularios, llamadas, WhatsApp, compras) con Google Ads, GA4 y Google Tag Manager, para saber qué campaña genera clientes de verdad. Con esos datos ajustamos pujas, presupuestos y anuncios semana a semana para mejorar el rendimiento de forma constante.",
          bullets: [
            "Seguimiento de conversiones con GA4 y Tag Manager.",
            "Optimización continua de pujas y presupuesto.",
            "Pruebas A/B de anuncios y páginas.",
            "Reportes claros de inversión, leads y costo por resultado.",
          ],
        },
        {
          h2: "Cuánto cuesta gestionar Google Ads en Perú",
          body:
            "Son dos costos distintos y conviene no mezclarlos. El primero es la inversión publicitaria: el dinero que le pagas a Google por los clics, que sale de tu tarjeta y es tuyo. El segundo es la gestión: el trabajo de armar la cuenta, elegir las palabras, escribir los anuncios, medir las conversiones y optimizar cada semana. Quien te cobra un solo número por todo suele estar quedándose con una parte de tu presupuesto de medios sin decírtelo.",
          bullets: [
            "La inversión en medios se paga directo a Google, con tu propia tarjeta y tu propia cuenta.",
            "La cuenta de Google Ads queda a tu nombre: si mañana cambias de agencia, te llevas el histórico, que es lo que hace que las campañas rindan más con el tiempo.",
            "El costo de gestión depende del número de campañas, de si hay ecommerce con catálogo, de cuántos idiomas o sedes cubres y de la frecuencia de reporte.",
            "El costo por clic no lo fija la agencia: lo fija tu competencia. En rubros disputados —abogados, clínicas, inmobiliarias— el clic vale varias veces más que en otros.",
            "Un presupuesto demasiado pequeño repartido en muchas campañas no aprende: es preferible concentrarlo en lo que ya sabes que se busca con intención de compra.",
          ],
        },
        {
          h2: "Qué recibes cada mes",
          body:
            "La gestión de campañas se ve poco y por eso conviene decir en qué consiste: revisión de términos de búsqueda reales para sumar negativas y dejar de pagar clics inútiles, ajuste de pujas y presupuestos según lo que convierte, nuevos anuncios a prueba contra los que ya funcionan, y un reporte que responde a una sola pregunta: cuánto invertiste, cuántos contactos entraron y a qué costo salió cada uno. Si quieres el detalle de cuánto presupuesto tiene sentido para empezar, está en la guía de [Google Ads para pymes en Perú](/blog/google-ads-para-pymes-en-peru-cuanto-invertir); y si dudas entre pagar por clics o trabajar el posicionamiento, en [Google Ads vs SEO](/blog/google-ads-vs-seo-cual-conviene-para-tu-negocio).",
        },
      ]}
      related={[
        { label: "Nuestros servicios", href: "/servicios", desc: "Conoce todo lo que hacemos: web, ecommerce, software, SEO y más." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de gestionar campañas y cómo cotizarlo." },
        { label: "SEO y posicionamiento", href: "/seo", desc: "Combina Ads con SEO para resultados rápidos y sostenidos." },
      ]}
      articles={[
        { label: "Google Ads vs SEO: cuál conviene", href: "/blog/google-ads-vs-seo-cual-conviene-para-tu-negocio", desc: "Cuándo usar cada uno y por qué combinarlos rinde más." },
        { label: "Google Ads para pymes: cuánto invertir", href: "/blog/google-ads-para-pymes-en-peru-cuanto-invertir", desc: "Cuánto presupuesto necesitas y cómo no desperdiciarlo." },
        { label: "Diferencia entre página web y landing page", href: "/blog/diferencia-entre-pagina-web-y-landing-page", desc: "Por qué tus campañas necesitan una landing, no tu home." },
      ]}
      faqs={[
        {
          q: "¿Cuánto debo invertir en Google Ads al mes?",
          a: "Depende de tu rubro, tu competencia y tu objetivo. Se puede empezar con un presupuesto acotado para validar y escalar con lo que funciona. En la propuesta te recomendamos un rango realista según tu mercado y meta.",
        },
        {
          q: "¿El presupuesto de publicidad va aparte del servicio?",
          a: "Sí. La inversión publicitaria la pagas directo a Google y es tuya; nuestro servicio es la gestión profesional de esas campañas (estrategia, creación, optimización y reportes). Así hay total transparencia sobre a dónde va cada sol.",
        },
        {
          q: "¿En cuánto tiempo veo resultados con Google Ads?",
          a: "A diferencia del SEO, Ads genera visibilidad y clics casi de inmediato. Los primeros contactos pueden llegar en los primeros días, y luego optimizamos semana a semana para bajar el costo por resultado.",
        },
        {
          q: "¿Necesito una landing page para mis campañas?",
          a: "Es muy recomendable. Enviar el tráfico pagado a una landing enfocada en una sola acción convierte mucho más que enviarlo a tu home. La diseñamos o afinamos como parte del servicio para maximizar tu retorno.",
        },
        {
          q: "¿Cómo sé si las campañas están funcionando?",
          a: "Configuramos seguimiento de conversiones (formularios, WhatsApp, llamadas, compras) y te enviamos reportes claros de inversión, leads y costo por resultado. Verás exactamente qué genera clientes y qué se está optimizando.",
        },
        {
          q: "¿Gestionan Google Ads y también Meta Ads?",
          a: "Nos enfocamos en Google Ads (Búsqueda, Shopping, Display, YouTube). Si tu estrategia requiere otros canales, lo conversamos en la propuesta para recomendarte la mejor combinación según tu objetivo.",
        },
      ]}
      serviceName="Gestión de campañas de Google Ads"
      serviceDescription="Gestión profesional de Google Ads en Perú: campañas de Búsqueda, Shopping, Display y YouTube, landing pages que convierten, seguimiento de conversiones y optimización de presupuesto."
    />
  );
}
