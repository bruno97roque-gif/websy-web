import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/google-ads",
  title: "Agencia de Google Ads en Perú: campañas que traen clientes",
  description:
    "Agencia de Google Ads en Perú: campañas de Búsqueda, Performance Max y remarketing, cada lead medido por formulario y WhatsApp y un reporte mensual claro.",
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
      h1="Agencia de Google Ads en Perú"
      intro="Somos una agencia de Google Ads en Perú que arma y gestiona campañas para traer clientes, no solo clics. Elegimos entre Búsqueda, Performance Max y remarketing según tu negocio, conectamos una landing page que convierte, medimos cada contacto por formulario y WhatsApp y optimizamos el presupuesto cada semana."
      highlights={["Búsqueda", "Performance Max", "Remarketing", "Shopping", "YouTube", "Landing pages"]}
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
          h2: "Búsqueda, Performance Max o remarketing: qué campaña te conviene",
          body:
            "Cada tipo de campaña resuelve un problema distinto, y elegir mal es la forma más común de gastar sin resultados. Para un negocio de servicios en Perú casi siempre se empieza por Búsqueda y se suma lo demás cuando ya hay conversiones medidas que le den a Google con qué aprender.",
          bullets: [
            "Búsqueda: tu anuncio aparece cuando alguien escribe lo que ofreces («abogado laboral en Lima», «reparación de laptops en Surco»). Es la demanda más caliente y la que mejor se controla, porque decides palabra por palabra dónde aparecer.",
            "Performance Max: una sola campaña que reparte el presupuesto entre Búsqueda, YouTube, Display, Gmail y Maps de forma automática. Rinde bien en ecommerce con catálogo y en cuentas que ya registran conversiones reales; sin esa señal, Google optimiza a ciegas y suele llevarse el presupuesto a ubicaciones baratas que no venden.",
            "Remarketing: muestra anuncios a quien ya entró a tu web y no te escribió. Es barato y recupera ventas, pero solo funciona si antes hay tráfico; por eso va después de Búsqueda, no en su lugar.",
            "Shopping y YouTube: Shopping para tiendas que muestran producto con foto y precio; YouTube para dar a conocer una marca o un lanzamiento cuando ya tienes la parte de captación resuelta.",
          ],
        },
        {
          h2: "Palabras clave e intención de compra",
          body:
            "El secreto de una campaña rentable está en pujar por lo correcto y no por lo caro. Investigamos las palabras que usan tus clientes cuando ya quieren comprar, definimos concordancias y sumamos palabras negativas para no gastar en búsquedas irrelevantes. Así atraemos tráfico con intención real y evitamos quemar presupuesto en curiosos. Explicamos cómo lo hacemos en la guía de [palabras clave negativas en Google Ads](/blog/palabras-clave-negativas-en-google-ads) y en [cómo estructurar una campaña de Google Ads para servicios](/blog/como-estructurar-una-campana-de-google-ads-para-servicios).",
          bullets: [
            "Investigación de palabras con intención de compra.",
            "Estructura de campañas y grupos de anuncios ordenada por servicio.",
            "Palabras negativas para no gastar en clics inútiles («gratis», «curso», «empleo»…).",
            "Anuncios con textos que responden a lo que se buscó.",
          ],
        },
        {
          h2: "Landing pages que convierten el clic en cliente",
          body:
            "Pagar por un clic que llega a una página confusa es tirar dinero. Diseñamos o afinamos la landing page a la que llega tu anuncio para que tenga un mensaje claro, un solo objetivo y un camino directo a contactarte o comprar. Una buena landing baja tu costo por conversión y sube tu retorno, por eso es parte central del servicio. Si aún no la tienes, la hacemos en el servicio de [diseño de landing pages](/diseno-de-landing-pages); y si quieres revisar la tuya, en [qué debe tener una landing page para Google Ads](/blog/landing-page-para-google-ads) está la lista completa.",
          bullets: [
            "Landing pages enfocadas en una sola acción.",
            "Mensaje alineado con el anuncio (relevancia).",
            "Formularios y WhatsApp para captar contactos.",
            "Optimización móvil y de velocidad de carga.",
          ],
        },
        {
          h2: "Cómo medimos un lead (y por qué importa)",
          body:
            "Una campaña solo es tan buena como la conversión que le dice a Google qué es un cliente. Si la cuenta cuenta como conversión cada visita a la página de gracias, cada recarga o cada clic suelto, Google aprende a traer más de eso y el costo por lead que ves en el panel no tiene nada que ver con los contactos que te llegan. Por eso antes de subir el presupuesto revisamos qué se está midiendo.",
          bullets: [
            "Formulario: la conversión se registra cuando el envío se completa, no cuando alguien abre la página.",
            "WhatsApp: se mide el clic al botón como contacto, separado del formulario para no contarlo dos veces.",
            "Llamadas: con extensión de llamada o número de seguimiento, si tu negocio vende por teléfono.",
            "Ventas cerradas: si tienes CRM o una hoja con los contactos que compraron, se pueden subir a Google Ads para que optimice hacia clientes que pagan y no solo hacia formularios.",
            "Todo se configura con Google Tag Manager y GA4 y se comprueba con envíos de prueba antes de lanzar.",
          ],
        },
        {
          h2: "Cuánto cuesta gestionar Google Ads en Perú",
          body:
            "Son dos costos distintos y conviene no mezclarlos. El primero es la inversión publicitaria: el dinero que le pagas a Google por los clics, que sale de tu tarjeta y es tuyo. El segundo es la gestión: el trabajo de armar la cuenta, elegir las palabras, escribir los anuncios, medir las conversiones y optimizar cada semana. Quien te cobra un solo número por todo suele estar quedándose con una parte de tu presupuesto de medios sin decírtelo. Cuánto presupuesto de anuncios tiene sentido para empezar según tu rubro lo explicamos en la guía de [Google Ads para pymes en Perú: cuánto invertir](/blog/google-ads-para-pymes-en-peru-cuanto-invertir).",
          bullets: [
            "La inversión en medios se paga directo a Google, con tu propia tarjeta y tu propia cuenta.",
            "La cuenta de Google Ads queda a tu nombre: si mañana cambias de agencia, te llevas el histórico, que es lo que hace que las campañas rindan más con el tiempo.",
            "El costo de gestión depende del número de campañas, de si hay ecommerce con catálogo, de cuántos idiomas o sedes cubres y de la frecuencia de reporte.",
            "El costo por clic no lo fija la agencia: lo fija tu competencia. En rubros disputados —abogados, clínicas, inmobiliarias— el clic vale varias veces más que en otros.",
            "Un presupuesto demasiado pequeño repartido en muchas campañas no aprende: es preferible concentrarlo en lo que ya sabes que se busca con intención de compra.",
          ],
        },
        {
          h2: "Qué incluye la gestión mensual",
          body:
            "La gestión de campañas se ve poco y por eso conviene decir en qué consiste. No es «dejar la campaña prendida»: es revisar cada semana qué se buscó de verdad, qué trajo contactos y qué solo gastó.",
          bullets: [
            "Revisión de los términos de búsqueda reales y nuevas palabras negativas.",
            "Ajuste de pujas y presupuesto hacia las campañas y horarios que convierten.",
            "Anuncios nuevos a prueba contra los que ya funcionan.",
            "Control de la landing: velocidad, formulario y botón de WhatsApp funcionando.",
            "Revisión de que las conversiones sigan registrándose bien después de cualquier cambio en tu web.",
          ],
        },
        {
          h2: "Qué te reportamos y en cuánto tiempo hay datos",
          body:
            "El reporte responde a una sola pregunta: cuánto invertiste, cuántos contactos entraron y a qué costo salió cada uno, separado por campaña y por tipo de contacto (formulario, WhatsApp, llamada). Además va lo que cambiamos ese mes y por qué. En cuanto a los tiempos: los clics y los términos de búsqueda se ven desde los primeros días; con las primeras semanas ya hay datos para cortar lo que gasta sin convertir; y las estrategias de puja automática de Google necesitan un periodo de aprendizaje y un volumen mínimo de conversiones antes de estabilizarse, por eso no se juzga una campaña por su primera semana. Si dudas entre pagar por clics o trabajar el posicionamiento, lo comparamos en [Google Ads vs SEO](/blog/google-ads-vs-seo-cual-conviene-para-tu-negocio).",
        },
      ]}
      related={[
        { label: "Diseño de landing pages", href: "/diseno-de-landing-pages", desc: "La página a la que llega tu anuncio, hecha para convertir y medida." },
        { label: "SEO y posicionamiento", href: "/seo", desc: "Combina Ads con SEO para resultados rápidos y sostenidos." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de gestionar campañas y cómo cotizarlo." },
        { label: "Nuestros servicios", href: "/servicios", desc: "Conoce todo lo que hacemos: web, ecommerce, software, SEO y más." },
      ]}
      articles={[
        { label: "Cómo estructurar una campaña para servicios", href: "/blog/como-estructurar-una-campana-de-google-ads-para-servicios", desc: "Campañas, grupos de anuncios y palabras ordenados por servicio." },
        { label: "Palabras clave negativas en Google Ads", href: "/blog/palabras-clave-negativas-en-google-ads", desc: "Cómo dejar de pagar por búsquedas que nunca te van a comprar." },
        { label: "Landing page para Google Ads", href: "/blog/landing-page-para-google-ads", desc: "Qué debe tener la página a la que llega tu anuncio." },
        { label: "Google Ads para pymes: cuánto invertir", href: "/blog/google-ads-para-pymes-en-peru-cuanto-invertir", desc: "Cuánto presupuesto necesitas y cómo no desperdiciarlo." },
        { label: "Google Ads vs SEO: cuál conviene", href: "/blog/google-ads-vs-seo-cual-conviene-para-tu-negocio", desc: "Cuándo usar cada uno y por qué combinarlos rinde más." },
      ]}
      faqs={[
        {
          q: "¿Cuánto debo invertir en Google Ads al mes?",
          a: "Depende de tu rubro, tu competencia y tu objetivo. Se puede empezar con un presupuesto acotado para validar y escalar con lo que funciona. En la propuesta te recomendamos un rango realista según tu mercado y meta, y en nuestro blog tenemos una guía de cuánto invertir en Google Ads para pymes en Perú.",
        },
        {
          q: "¿El presupuesto de publicidad va aparte del servicio?",
          a: "Sí. La inversión publicitaria la pagas directo a Google y es tuya; nuestro servicio es la gestión profesional de esas campañas (estrategia, creación, optimización y reportes). Así hay total transparencia sobre a dónde va cada sol.",
        },
        {
          q: "¿La cuenta de Google Ads queda a mi nombre?",
          a: "Sí. La cuenta y la forma de pago son tuyas y nosotros accedemos como administradores. Si algún día dejas de trabajar con nosotros, conservas las campañas, el histórico y las conversiones configuradas.",
        },
        {
          q: "¿En cuánto tiempo veo resultados con Google Ads?",
          a: "A diferencia del SEO, Ads genera visibilidad y clics casi de inmediato. Los primeros contactos pueden llegar en los primeros días; las primeras semanas sirven para cortar lo que gasta sin convertir, y las pujas automáticas necesitan un periodo de aprendizaje antes de estabilizar el costo por resultado.",
        },
        {
          q: "¿Qué es Performance Max y me conviene?",
          a: "Es un tipo de campaña en el que Google reparte el presupuesto entre Búsqueda, YouTube, Display, Gmail y Maps de forma automática. Conviene cuando la cuenta ya mide conversiones reales o cuando tienes una tienda con catálogo; si recién empiezas, normalmente es mejor arrancar con Búsqueda, que se controla palabra por palabra.",
        },
        {
          q: "¿Necesito una landing page para mis campañas?",
          a: "Es muy recomendable. Enviar el tráfico pagado a una landing enfocada en una sola acción convierte mucho más que enviarlo a tu home. La diseñamos o afinamos como parte del servicio para maximizar tu retorno.",
        },
        {
          q: "¿Cómo sé si las campañas están funcionando?",
          a: "Configuramos seguimiento de conversiones (formularios, WhatsApp, llamadas, compras), comprobado con envíos de prueba, y te enviamos reportes claros de inversión, contactos y costo por resultado. Verás exactamente qué genera clientes y qué se está optimizando.",
        },
        {
          q: "¿Gestionan Google Ads y también Meta Ads?",
          a: "Nos enfocamos en Google Ads (Búsqueda, Performance Max, Shopping, Display y YouTube). Si tu estrategia requiere otros canales, lo conversamos en la propuesta para recomendarte la mejor combinación según tu objetivo.",
        },
      ]}
      serviceName="Agencia de Google Ads en Perú"
      serviceDescription="Gestión de Google Ads en Perú: campañas de Búsqueda, Performance Max, remarketing, Shopping y YouTube, landing pages que convierten, medición de leads por formulario y WhatsApp y optimización semanal del presupuesto."
    />
  );
}
