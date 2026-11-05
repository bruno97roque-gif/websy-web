import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

/* 5-nov-2026 · Search Console (90 días) suma unas 150 impresiones de búsquedas de
   «landing page» que hoy solo atiende un artículo informativo (puestos 19-55), y el
   autocompletado de Google en Perú sugiere «landing page precio peru» y «cuánto
   cuesta una landing page en perú»: hay gente que quiere CONTRATAR una, y Websy no
   tenía la página del servicio. Precio: no hay cifra del cliente, va «según cotización». */
export const metadata: Metadata = pageMeta({
  path: "/diseno-de-landing-pages",
  title: "Diseño de landing pages en Perú para captar clientes",
  description:
    "Diseño de landing pages en Perú para campañas de Google Ads, Meta y WhatsApp: un solo objetivo, carga rápida en el celular, formulario y WhatsApp medidos en GA4.",
});

export default function DisenoLandingPagesPage() {
  return (
    <ServiceLanding
      slug="/diseno-de-landing-pages"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Diseño de Páginas Web", path: "/diseno-de-paginas-web" },
        { name: "Landing Pages", path: "/diseno-de-landing-pages" },
      ]}
      eyebrow="Servicio · Landing pages"
      h1="Diseño de landing pages que convierten visitas en clientes"
      intro="Una landing page es una página con un solo objetivo: que quien llega desde un anuncio, un correo o una publicación te deje sus datos o te escriba por WhatsApp. Websy diseña landing pages en Perú para campañas de Google Ads y Meta, con carga rápida en el celular, un mensaje claro y cada contacto medido en Google Analytics, para que sepas cuánto te cuesta cada cliente."
      highlights={["Google Ads", "Meta Ads", "WhatsApp", "Formulario", "GA4 y GTM", "Carga rápida"]}
      stats={[
        { value: "1 objetivo", label: "Sin menús que distraigan" },
        { value: "Móvil", label: "Pensada para el celular primero" },
        { value: "Medida", label: "Cada contacto contado en GA4" },
        { value: "Tuya", label: "Dominio, código y accesos a tu nombre" },
      ]}
      sections={[
        {
          h2: "Landing page o página web: cuál necesitas",
          body:
            "La página web presenta tu negocio completo: servicios, nosotros, blog, contacto. La landing page hace una sola cosa, para una sola campaña. Si vas a pagar por anuncios, mandar ese clic a la portada de tu web es perder plata: la persona llega buscando una oferta concreta y encuentra un menú con diez opciones. Lo explicamos a fondo en [diferencia entre página web y landing page](/blog/diferencia-entre-pagina-web-y-landing-page). Si aún no tienes web, empieza por el [diseño de páginas web](/diseno-de-paginas-web) y suma landings por campaña.",
          table: {
            cabeceras: ["", "Página web", "Landing page"],
            filas: [
              ["Objetivo", "Presentar todo el negocio", "Una acción: escribir o dejar datos"],
              ["Menú", "Completo", "Sin menú o mínimo"],
              ["Tráfico", "Google orgánico, marca, redes", "Anuncios, correos, campañas"],
              ["Cómo se mide", "Visitas y contactos totales", "Costo por contacto de cada campaña"],
            ],
          },
        },
        {
          h2: "Qué lleva una landing page que convierte",
          body:
            "Las landings que funcionan se parecen mucho entre sí. Lo que cambia es el mensaje, que tiene que repetir lo que prometió el anuncio.",
          bullets: [
            "Un titular que repite la promesa del anuncio, no un eslogan genérico.",
            "La oferta, el precio o el beneficio a la vista sin bajar.",
            "Pruebas reales: fotos de tu trabajo, clientes, preguntas frecuentes.",
            "Un formulario corto o un botón de WhatsApp, y nada más que compita con él.",
            "Carga en pocos segundos con datos móviles.",
          ],
        },
        {
          h2: "Landing pages para Google Ads y Meta",
          body:
            "En Google Ads la landing influye en el nivel de calidad del anuncio: si la página responde a la búsqueda, pagas menos por clic. En Meta Ads la persona no estaba buscando nada, así que la landing tiene que explicar rápido por qué le conviene. Hacemos una landing por campaña o por servicio, no una para todo. Si también quieres que manejemos los anuncios, mira nuestro servicio de [Google Ads](/google-ads) y la guía de [landing page para Google Ads](/blog/landing-page-para-google-ads).",
        },
        {
          h2: "Cada contacto medido, sin contar doble",
          body:
            "Una landing sin medición es un gasto a ciegas. Dejamos configurados Google Analytics 4 y Google Tag Manager para que cada envío de formulario y cada clic a WhatsApp se cuente una vez, con la campaña de donde vino. Así puedes comparar campañas por lo que importa: cuánto te cuesta cada persona que te escribió.",
          bullets: [
            "Evento de contacto por formulario y por WhatsApp en GA4.",
            "Campaña, anuncio y palabra clave de origen guardados con cada contacto.",
            "Conversión importable a Google Ads y Meta.",
          ],
        },
        {
          h2: "Cómo trabajamos tu landing page",
          body:
            "Primero definimos qué campaña va a llevar tráfico y qué tiene que hacer la persona al llegar. Con eso escribimos el texto, diseñamos la página, la publicamos en tu dominio y la dejamos medida. Después de las primeras semanas de campaña revisamos los datos y ajustamos lo que frena los contactos.",
          bullets: [
            "Brief de la campaña: oferta, público y acción esperada.",
            "Texto y diseño pensados para el celular.",
            "Publicación en tu dominio con certificado SSL.",
            "Medición en GA4 y ajustes con datos reales.",
          ],
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "La web completa de tu negocio, rápida y administrable." },
        { label: "Google Ads", href: "/google-ads", desc: "Campañas que llevan tráfico a tu landing y miden cada contacto." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio y cómo pedir tu cotización gratis." },
        { label: "Cotiza tu landing page", href: "/cotizacion", desc: "Cuéntanos tu campaña y te respondemos en 24 h." },
      ]}
      articles={[
        { label: "Landing page para Google Ads", href: "/blog/landing-page-para-google-ads", desc: "Qué debe tener la página a la que llega tu anuncio." },
        { label: "Diferencia entre página web y landing page", href: "/blog/diferencia-entre-pagina-web-y-landing-page", desc: "Cuándo necesitas una, la otra o las dos." },
        { label: "Cómo estructurar una campaña de Google Ads", href: "/blog/como-estructurar-una-campana-de-google-ads-para-servicios", desc: "Campañas, grupos y anuncios para servicios." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta una landing page en Perú?",
          a: "Depende de si el texto y las fotos los produces tú o nosotros, de cuántas variantes necesitas y de la medición que lleve. En Websy se cotiza según el proyecto: te enviamos la propuesta gratis en menos de 24 horas.",
        },
        {
          q: "¿La landing page va en mi dominio?",
          a: "Sí. Puede ir en tu dominio principal (por ejemplo, tunegocio.pe/promocion) o en un subdominio. El dominio, el código y los accesos quedan a tu nombre.",
        },
        {
          q: "¿Necesito una landing por cada campaña?",
          a: "Lo ideal es una por oferta o servicio. Cuando el anuncio y la página dicen lo mismo, convierte mejor y en Google Ads pagas menos por clic.",
        },
        {
          q: "¿Los contactos llegan por WhatsApp o por formulario?",
          a: "Por los dos, según lo que prefiera tu cliente. Ambos se miden en Google Analytics con la campaña de origen, así que sabes qué anuncio trajo cada contacto.",
        },
        {
          q: "¿Pueden manejar también los anuncios?",
          a: "Sí. Gestionamos campañas de Google Ads con la landing y la medición conectadas desde el primer día.",
        },
      ]}
      serviceName="Diseño de landing pages"
      serviceDescription="Diseño de landing pages en Perú para campañas de Google Ads, Meta y WhatsApp: un solo objetivo, carga rápida en el celular y cada contacto medido en GA4."
    />
  );
}
