import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

/* 12-nov-2026 · Search Console (13-oct a 9-nov): «rediseñar sitio web sin perder seo»
   y variantes suman ~120 impresiones con el artículo de migración en el puesto 53-70,
   y no había página del servicio de rediseño. El método (mapa de 301, conservar lo que
   posiciona, vigilar Search Console) es el mismo que ya publica ese artículo y la
   página de migración a Shopify. Precio: según cotización, sin cifra del cliente. */
export const metadata: Metadata = pageMeta({
  path: "/rediseno-de-paginas-web",
  title: "Rediseño de páginas web sin perder posicionamiento",
  description:
    "Rediseño de páginas web en Perú sin perder tu posicionamiento en Google: diseño nuevo, más rápido y pensado para el celular, con redirecciones 301 y seguimiento en Search Console.",
});

export default function RedisenoPaginasWebPage() {
  return (
    <ServiceLanding
      slug="/rediseno-de-paginas-web"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Diseño de Páginas Web", path: "/diseno-de-paginas-web" },
        { name: "Rediseño de Páginas Web", path: "/rediseno-de-paginas-web" },
      ]}
      eyebrow="Servicio · Rediseño web"
      h1="Rediseño de páginas web sin perder tu posicionamiento"
      intro="Rediseñar tu web no debería costarte el tráfico que ya tienes. En Websy renovamos páginas web y tiendas virtuales en Perú con un diseño actual, más rápido y pensado para el celular, y cuidamos el SEO desde el primer día: inventario de tus URLs, redirecciones 301, el contenido que ya posiciona intacto y seguimiento en Search Console después del lanzamiento."
      highlights={["Diseño nuevo", "Móvil primero", "Redirecciones 301", "Velocidad", "Search Console", "WordPress y Shopify"]}
      stats={[
        { value: "301", label: "Cada URL vieja con su destino" },
        { value: "Móvil", label: "Diseño pensado para el celular" },
        { value: "Rápida", label: "Menos peso, carga en segundos" },
        { value: "Medida", label: "Tráfico vigilado tras lanzar" },
      ]}
      sections={[
        {
          h2: "Cuándo conviene rediseñar tu web",
          body:
            "Un rediseño no es cambiar colores porque sí. Se justifica cuando la web actual te está haciendo perder clientes:",
          bullets: [
            "Se ve mal o se rompe en el celular, que es desde donde entra la mayoría.",
            "Tarda varios segundos en cargar y la gente se va antes de verla.",
            "No la puedes editar tú y cada cambio depende de otra persona.",
            "Los servicios, precios o la marca cambiaron y la web ya no los refleja.",
            "Recibe visitas pero casi nadie escribe por WhatsApp ni deja sus datos.",
          ],
        },
        {
          h2: "Rediseñar sin perder posiciones en Google",
          body:
            "El riesgo de un rediseño está en las URLs: si cambian o desaparecen sin aviso, Google encuentra páginas rotas y deja de mostrar las que ya valoraba. Por eso el SEO va al inicio del proyecto, no al final. Antes de diseñar sacamos de Search Console qué páginas traen visitas y para qué búsquedas, y con eso armamos el plan. El paso a paso está en el [checklist para rediseñar tu web sin perder el SEO](/blog/como-redisenar-tu-pagina-web-sin-perder-seo), y si además cambias de plataforma o de dominio, en [cómo migrar tu web sin perder posicionamiento](/blog/como-migrar-tu-pagina-web-sin-perder-posicionamiento-en-google).",
          table: {
            cabeceras: ["", "Rediseño sin plan", "Rediseño con plan SEO"],
            filas: [
              ["URLs", "Cambian sin aviso", "Cada URL vieja redirige con 301"],
              ["Contenido que posiciona", "Se borra o se recorta", "Se conserva y se mejora"],
              ["Lanzamiento", "Se publica y listo", "Revisión diaria en Search Console"],
              ["Resultado típico", "Caída de tráfico por meses", "Mismo tráfico o más"],
            ],
          },
        },
        {
          h2: "Qué cambia en tu web",
          body:
            "Partimos de lo que ya funciona y cambiamos lo que frena. El objetivo es que la web nueva se vea mejor y, sobre todo, que más visitas terminen en un contacto.",
          bullets: [
            "Diseño actual alineado a tu marca, responsive y legible en cualquier pantalla.",
            "Textos ordenados por servicio, con lo que la gente busca en Google.",
            "Botón de WhatsApp y formulario a la vista, medidos en Google Analytics.",
            "Imágenes optimizadas y código más liviano para que cargue rápido.",
            "Panel administrable para que cambies textos, fotos y precios tú mismo.",
          ],
        },
        {
          h2: "Cómo trabajamos el rediseño",
          body:
            "El proceso es el mismo para una web informativa o una tienda virtual. Lo que cambia es el tamaño del inventario de URLs y la cantidad de productos a mover.",
          bullets: [
            "1. Inventario: todas tus URLs actuales y su tráfico en Search Console.",
            "2. Mapa de redirecciones 301 de cada URL vieja a su equivalente nueva.",
            "3. Diseño y contenido nuevos, conservando lo que ya posiciona.",
            "4. Pruebas antes de publicar: enlaces, formularios, velocidad y móvil.",
            "5. Lanzamiento y seguimiento en Search Console para cazar cualquier error 404.",
          ],
        },
        {
          h2: "Rediseño o cambio de plataforma",
          body:
            "A veces el problema no es el diseño sino la plataforma: una web en un constructor que no deja crecer, o una tienda que ya no aguanta el catálogo. Podemos rediseñar sobre la misma plataforma o aprovechar el rediseño para mudarte. Si tu tienda va a Shopify, mira la [migración a Shopify](/tiendas-virtuales/shopify/migracion). Si además quieres cambiar de servidor, lo resolvemos con nuestro servicio de [hosting y dominio](/hosting-y-dominio).",
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Si empiezas de cero, una web hecha para durar." },
        { label: "Migración a Shopify", href: "/tiendas-virtuales/shopify/migracion", desc: "Cambia tu tienda a Shopify conservando productos y SEO." },
        { label: "SEO y posicionamiento", href: "/seo", desc: "Después del rediseño, crecer en Google." },
        { label: "Cotiza tu rediseño", href: "/cotizacion", desc: "Envíanos tu web actual y te respondemos en 24 h." },
      ]}
      articles={[
        { label: "Checklist para rediseñar sin perder SEO", href: "/blog/como-redisenar-tu-pagina-web-sin-perder-seo", desc: "Lo que se revisa antes y después de publicar." },
        { label: "Cómo migrar tu web sin perder posicionamiento", href: "/blog/como-migrar-tu-pagina-web-sin-perder-posicionamiento-en-google", desc: "Cambio de plataforma o dominio con redirecciones 301." },
        { label: "Cómo aparecer en Google con tu página web", href: "/blog/como-hacer-que-tu-pagina-web-aparezca-en-google-peru", desc: "Las bases del posicionamiento web." },
        { label: "Cómo elegir una agencia de desarrollo web", href: "/blog/como-elegir-una-agencia-de-desarrollo-web-en-peru", desc: "Qué preguntar antes de contratar." },
      ]}
      faqs={[
        {
          q: "¿Voy a perder posiciones en Google si rediseño mi web?",
          a: "No si se hace con plan. Las caídas aparecen cuando cambian las URLs sin redirecciones 301 o se borra contenido que posiciona. Mapeamos cada URL, conservamos lo que trae visitas y vigilamos Search Console después del lanzamiento.",
        },
        {
          q: "¿Pueden rediseñar una web que no hicieron ustedes?",
          a: "Sí. Revisamos la web actual, su plataforma y su tráfico, y a partir de ahí proponemos si conviene rediseñar sobre la misma base o pasar a otra.",
        },
        {
          q: "¿Puedo mantener mi dominio y mis correos?",
          a: "Sí. El dominio sigue siendo el mismo y los correos no se tocan. Si hay que cambiar de hosting, lo mudamos sin cortar el servicio.",
        },
        {
          q: "¿Cuánto tarda un rediseño?",
          a: "Depende del tamaño de la web y de cuánto contenido cambia. Una web informativa se resuelve bastante más rápido que una tienda con cientos de productos. Te damos el plazo por escrito en la propuesta.",
        },
        {
          q: "¿Cuánto cuesta rediseñar una página web?",
          a: "Depende de la cantidad de páginas, si hay tienda o sistema detrás y si cambias de plataforma. Se cotiza según el proyecto: te enviamos la propuesta gratis en menos de 24 horas.",
        },
      ]}
      serviceName="Rediseño de páginas web"
      serviceDescription="Rediseño de páginas web y tiendas virtuales en Perú conservando el posicionamiento en Google: inventario de URLs, redirecciones 301, diseño responsive, velocidad y seguimiento en Search Console."
    />
  );
}
