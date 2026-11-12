import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

/* 12-nov-2026 · Search Console (13-oct a 9-nov) suma unas 1.500 impresiones de
   búsquedas de hosting («hosting peru», «contratar hosting peru», «hosting y dominio»,
   «comprar hosting», «web hosting peru»…) en puestos 9-22 y CERO clics. Todas las
   atienden dos artículos informativos; Websy no tenía la página del servicio, aunque
   ya incluye hosting, dominio y SSL en cada proyecto y los gestiona en el plan de
   mantenimiento. Sin precios propios del cliente: los de mercado están en el blog. */
export const metadata: Metadata = pageMeta({
  path: "/hosting-y-dominio",
  title: "Hosting y dominio para tu página web en Perú",
  description:
    "Hosting y dominio .pe o .com para tu web en Perú, configurados a nombre de tu empresa: certificado SSL, correos, respaldos y renovaciones al día. Cotiza gratis.",
});

export default function HostingYDominioPage() {
  return (
    <ServiceLanding
      slug="/hosting-y-dominio"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Mantenimiento Web", path: "/mantenimiento-web" },
        { name: "Hosting y Dominio", path: "/hosting-y-dominio" },
      ]}
      eyebrow="Servicio · Hosting y dominio"
      h1="Hosting y dominio para tu página web en Perú"
      intro="Websy te deja la web en línea con el hosting y el dominio que tu proyecto necesita: registramos tu dominio .pe, .com.pe o .com a nombre de tu empresa, elegimos y configuramos el hosting según el tipo de web, activamos el certificado SSL y los correos, y nos ocupamos de las renovaciones para que tu sitio no se caiga por un pago olvidado."
      highlights={["Dominio .pe y .com", "Hosting", "Certificado SSL", "Correos corporativos", "Respaldos", "Renovaciones"]}
      stats={[
        { value: "A tu nombre", label: "Dominio y accesos de tu empresa" },
        { value: "SSL", label: "Candado de seguridad activo" },
        { value: "Respaldos", label: "Copias para restaurar tu web" },
        { value: "Al día", label: "Renovaciones sin sorpresas" },
      ]}
      sections={[
        {
          h2: "Qué es el hosting y qué es el dominio",
          body:
            "El dominio es la dirección de tu negocio en internet, como tunegocio.pe. El hosting es el servidor donde viven los archivos de tu web para que cualquiera la abra a cualquier hora. Se necesitan los dos y los dos se renuevan: el dominio cada año y el hosting cada mes o cada año, según el plan. Si te interesan los montos de mercado, los tenemos actualizados en [cuánto cuesta un hosting y un dominio .pe en Perú](/blog/cuanto-cuesta-un-hosting-y-un-dominio-pe-en-peru).",
          table: {
            cabeceras: ["", "Dominio", "Hosting"],
            filas: [
              ["Qué es", "Tu dirección: tunegocio.pe", "El servidor donde vive tu web"],
              ["Cada cuánto se paga", "Cada año", "Cada mes o cada año"],
              ["Si se vence", "Tu dirección deja de funcionar", "Tu web y tus correos se apagan"],
              ["A nombre de quién", "De tu empresa, siempre", "Cuenta con accesos para ti"],
            ],
          },
        },
        {
          h2: "Qué hosting necesita tu web",
          body:
            "No todas las webs piden lo mismo. Elegimos el hosting según lo que va a sostener, para no pagar de más ni quedarte corto cuando crecen las visitas:",
          bullets: [
            "Web informativa o corporativa: un hosting compartido de calidad suele bastar.",
            "Tienda virtual con catálogo grande o mucho tráfico: un servidor con más recursos (VPS) para que cargue rápido.",
            "Sistema o aplicación a medida: un servidor dedicado al proyecto, con base de datos y respaldos propios.",
            "Correos corporativos con tu dominio (tu@tunegocio.pe).",
          ],
        },
        {
          h2: "Tu dominio, siempre a nombre de tu empresa",
          body:
            "El error más caro que vemos es un dominio registrado a nombre del programador o de una agencia anterior: cuando quieres cambiar de proveedor, no puedes llevarte tu propia dirección. Por eso registramos el dominio a nombre de tu empresa y te entregamos los accesos del dominio y del hosting. Si hoy no sabes a nombre de quién está el tuyo, lo revisamos contigo. Lo explicamos a fondo en [de quién es el código y el dominio de tu web](/blog/de-quien-es-el-codigo-el-dominio-y-los-accesos).",
        },
        {
          h2: "Incluido cuando hacemos tu web",
          body:
            "Si desarrollamos tu página web o tu tienda virtual con nosotros, el hosting, el dominio y el certificado SSL van incluidos el primer año. Después puedes renovarlos por tu cuenta con los accesos que te entregamos, o dejarlos en nuestro plan de [mantenimiento web](/mantenimiento-web), que además cubre seguridad, actualizaciones y cambios de contenido.",
          bullets: [
            "Registro o traspaso del dominio a nombre de tu empresa.",
            "Configuración del hosting, el DNS y el certificado SSL.",
            "Correos corporativos configurados y probados.",
            "Aviso y gestión de cada renovación antes de que venza.",
          ],
        },
        {
          h2: "Si ya tienes web y quieres cambiar de hosting",
          body:
            "Muchas webs llegan lentas o caídas por un hosting que se quedó chico o un proveedor que no responde. Mudamos tu web a un hosting nuevo sin cortar el servicio: copiamos archivos, base de datos y correos, apuntamos el dominio cuando todo está probado y revisamos en Search Console que Google siga encontrando tus páginas. Si además vas a renovar el diseño, mira nuestro servicio de [rediseño de páginas web](/rediseno-de-paginas-web).",
        },
      ]}
      related={[
        { label: "Mantenimiento web", href: "/mantenimiento-web", desc: "Hosting, seguridad, respaldos y actualizaciones en un solo plan." },
        { label: "Desarrollo web", href: "/desarrollo-web", desc: "Tu web a medida con hosting, dominio y SSL el primer año." },
        { label: "Rediseño de páginas web", href: "/rediseno-de-paginas-web", desc: "Renueva tu web sin perder lo que ya posiciona en Google." },
        { label: "Cotiza gratis", href: "/cotizacion", desc: "Cuéntanos tu web y te respondemos en menos de 24 h." },
      ]}
      articles={[
        { label: "Cómo elegir un hosting en Perú", href: "/blog/como-elegir-un-hosting-en-peru", desc: "Velocidad, soporte y la letra pequeña de la renovación." },
        { label: "Cuánto cuesta un hosting y un dominio .pe", href: "/blog/cuanto-cuesta-un-hosting-y-un-dominio-pe-en-peru", desc: "Precios de mercado verificados, uno por uno." },
        { label: "Cómo comprar un dominio .pe", href: "/blog/como-comprar-un-dominio-pe-paso-a-paso", desc: "El trámite completo, paso a paso." },
        { label: "Certificado SSL: qué es y por qué lo necesitas", href: "/blog/certificado-ssl-que-es-y-por-que-tu-web-lo-necesita", desc: "El candado del navegador y qué pasa cuando vence." },
      ]}
      faqs={[
        {
          q: "¿Puedo contratar con ustedes el hosting y el dominio de mi web?",
          a: "Sí. Registramos el dominio a nombre de tu empresa, configuramos el hosting adecuado para tu proyecto con su certificado SSL y correos, y si quieres nos ocupamos de las renovaciones dentro del plan de mantenimiento.",
        },
        {
          q: "¿El dominio queda a mi nombre?",
          a: "Siempre. El dominio se registra a nombre de tu empresa y te entregamos los accesos del dominio y del hosting. Así puedes cambiar de proveedor cuando quieras sin perder tu dirección.",
        },
        {
          q: "¿Conviene un dominio .pe, .com.pe o .com?",
          a: "Si vendes en Perú, el .pe o el .com.pe refuerzan que eres un negocio local. El .com es más internacional. Muchas empresas registran ambos y redirigen uno al otro para proteger su marca.",
        },
        {
          q: "¿El hosting incluye certificado SSL y correos?",
          a: "Sí. Dejamos el certificado SSL activo para que tu web salga como segura y configuramos los correos con tu dominio.",
        },
        {
          q: "¿Pueden mudar mi web a otro hosting sin que se caiga?",
          a: "Sí. Copiamos la web, la base de datos y los correos al hosting nuevo, lo probamos todo y recién entonces apuntamos el dominio. Después revisamos en Search Console que Google siga encontrando tus páginas.",
        },
        {
          q: "¿Cuánto cuesta el hosting y el dominio con Websy?",
          a: "Si hacemos tu web, van incluidos el primer año. Para webs existentes depende del tipo de sitio y del servidor que necesita: te enviamos una propuesta gratis en menos de 24 horas.",
        },
      ]}
      serviceName="Hosting y dominio para páginas web"
      serviceDescription="Registro de dominio .pe, .com.pe o .com a nombre de la empresa, configuración de hosting, certificado SSL y correos corporativos, mudanzas de hosting y gestión de renovaciones en Perú."
    />
  );
}
