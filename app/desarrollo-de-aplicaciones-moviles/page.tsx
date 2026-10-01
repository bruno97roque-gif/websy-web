import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/desarrollo-de-aplicaciones-moviles",
  title: "Desarrollo de Aplicaciones Móviles en Perú",
  description:
    "Desarrollo de aplicaciones móviles a medida en Perú: apps para Android e iOS para tus clientes o tu equipo, con panel de administración, pagos con Yape y Plin y publicación.",
});

export default function AplicacionesMovilesPage() {
  return (
    <ServiceLanding
      slug="/desarrollo-de-aplicaciones-moviles"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Aplicaciones Móviles", path: "/desarrollo-de-aplicaciones-moviles" },
      ]}
      eyebrow="Software · Apps móviles"
      h1="Desarrollo de aplicaciones móviles en Perú"
      intro="Desarrollamos aplicaciones móviles a medida para empresas y emprendedores en Perú: apps para Android e iOS que tus clientes usan para comprar, reservar o seguir un pedido, o que tu equipo usa en campo. Entregamos la app publicada, con su panel de administración y el código a nombre de tu empresa."
      highlights={["Android", "iOS", "Panel de administración", "Yape y Plin", "Notificaciones"]}
      stats={[
        { value: "Android + iOS", label: "Un proyecto, dos tiendas" },
        { value: "Panel", label: "Administras tú el contenido" },
        { value: "Tuya", label: "Código y cuentas a tu nombre" },
        { value: "Por etapas", label: "Primera versión y luego mejoras" },
      ]}
      sections={[
        {
          h2: "Qué app podemos desarrollar para tu negocio",
          body:
            "Una app tiene sentido cuando alguien la va a abrir varias veces por semana. Por eso empezamos preguntando quién la usará y para qué, no qué pantallas quieres. Estos son los casos más comunes:",
          bullets: [
            "App para tus clientes: catálogo, pedidos, reservas o seguimiento de su compra desde el celular.",
            "App para tu equipo en campo: visitas, entregas, cobranzas o inventario sin volver a la oficina.",
            "App de fidelización: puntos, cupones y avisos de promociones con notificaciones.",
            "La versión móvil de tu sistema: tu CRM, tu ERP o tu tienda virtual en el bolsillo del equipo.",
            "App de reservas y citas para clínicas, gimnasios, hoteles o restaurantes.",
          ],
        },
        {
          h2: "App nativa, híbrida o web: cuál conviene",
          body:
            "Es la decisión que más mueve el costo y el plazo, y no hay una opción mejor en abstracto. La recomendamos según lo que tu app tiene que hacer; el detalle está en [app nativa, híbrida o web: cuál elegir](/blog/aplicacion-nativa-hibrida-o-web-cual-elegir).",
          table: {
            cabeceras: ["", "Nativa", "Híbrida (multiplataforma)", "Web app (PWA)"],
            filas: [
              ["Código", "Uno para iOS y otro para Android", "Uno solo para ambos sistemas", "Uno solo, se abre en el navegador"],
              ["Tiendas", "App Store y Google Play", "App Store y Google Play", "No pasa por las tiendas"],
              ["Conviene cuando", "Usa a fondo cámara, sensores o gráficos", "Quieres estar en las tiendas con un solo desarrollo", "Quieres validar la idea o es de uso interno"],
            ],
          },
        },
        {
          h2: "Qué incluye el desarrollo de tu app",
          bullets: [
            "Diseño de las pantallas y del recorrido del usuario antes de programar.",
            "La app y su servidor: usuarios, datos y la lógica de tu negocio.",
            "Un panel web para que administres productos, contenidos, pedidos o usuarios sin depender de nosotros.",
            "Pagos dentro de la app con Yape, Plin o tarjeta a través de Niubiz o Izipay, si la app cobra.",
            "Publicación en App Store y Google Play con las cuentas de desarrollador a nombre de tu empresa.",
            "Soporte y nuevas versiones después del lanzamiento.",
          ],
        },
        {
          h2: "Precio referencial de una aplicación móvil",
          body:
            "Una app para celulares parte en Websy desde S/ 15,000. A eso se suman las cuotas de las tiendas, que cobran Apple (99 USD al año) y Google (25 USD una sola vez), no la agencia. El monto final depende de las plataformas, las funciones y las integraciones que necesite tu app. Los montos indicados son referenciales; el desglose completo está en [cuánto cuesta una aplicación móvil en Perú](/blog/cuanto-cuesta-una-aplicacion-movil-en-peru).",
        },
        {
          h2: "Cómo trabajamos tu app",
          bullets: [
            "Conversamos sobre quién usará la app y qué problema le resuelve.",
            "Definimos por escrito qué entra en la primera versión y qué queda para después.",
            "Diseñamos las pantallas y las apruebas antes de programar.",
            "Desarrollamos con entregas que pruebas en tu propio celular.",
            "Publicamos en las tiendas y capacitamos a quien administrará el panel.",
            "Medimos el uso real y planificamos la siguiente versión con esos datos.",
          ],
        },
        {
          h2: "¿Necesitas una app o te basta una web?",
          body:
            "No todos los negocios necesitan una app. Si tus clientes te compran una o dos veces al año, una [tienda virtual](/tiendas-virtuales) o una [página web](/diseno-de-paginas-web) bien hecha resuelve lo mismo por menos. La app gana cuando el uso es frecuente o cuando necesitas notificaciones, cámara o funcionar sin conexión. Lo comparamos en [¿app móvil o página web para tu negocio?](/blog/necesito-una-app-movil-o-una-pagina-web-para-mi-negocio).",
        },
      ]}
      related={[
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Todo lo que desarrollamos: apps, CRM, ERP, SaaS y sistemas web." },
        { label: "Aplicaciones web", href: "/desarrollo-de-aplicaciones-web", desc: "La versión de navegador de tu plataforma, sin instalar nada." },
        { label: "Desarrollo de SaaS", href: "/desarrollo-de-saas", desc: "Si tu app es un producto que vas a vender por suscripción." },
        { label: "Sistemas web", href: "/sistemas", desc: "El sistema de gestión que tu app puede tener detrás." },
        { label: "Precios y cotización", href: "/precios", desc: "Desde cuánto parte cada servicio y cómo pedir tu propuesta." },
      ]}
      articles={[
        { label: "Cuánto cuesta una aplicación móvil en Perú", href: "/blog/cuanto-cuesta-una-aplicacion-movil-en-peru", desc: "Desarrollo, cuotas de Apple y Google Play y comisiones." },
        { label: "App nativa, híbrida o web: cuál elegir", href: "/blog/aplicacion-nativa-hibrida-o-web-cual-elegir", desc: "Qué cambia en costo, plazo y experiencia." },
        { label: "¿App móvil o página web para tu negocio?", href: "/blog/necesito-una-app-movil-o-una-pagina-web-para-mi-negocio", desc: "Cuándo una app sí vale la inversión." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta desarrollar una app en Perú?",
          a: "En Websy, una aplicación móvil para Android e iOS parte desde S/ 15,000, más las cuotas de las tiendas (99 USD al año en Apple y 25 USD una vez en Google Play). Los montos indicados son referenciales: el precio final depende de las funciones e integraciones.",
        },
        {
          q: "¿La app funciona en Android y en iPhone?",
          a: "Sí. Lo habitual es desarrollarla para los dos sistemas y publicarla en Google Play y en App Store. Si tu público usa casi solo uno, se puede empezar por ese y sumar el otro después.",
        },
        {
          q: "¿Puedo cobrar dentro de la app con Yape o tarjeta?",
          a: "Sí. Integramos pasarelas peruanas como Niubiz o Izipay para tarjeta, y Yape o Plin según el flujo de cobro. Conviene definirlo desde el inicio porque suma trabajo de desarrollo.",
        },
        {
          q: "¿La app y el código son míos?",
          a: "Sí. El código, la base de datos y las cuentas de desarrollador en las tiendas quedan a nombre de tu empresa, para que puedas cambiar de proveedor cuando quieras.",
        },
        {
          q: "¿También hacen la versión web de la app?",
          a: "Sí. El panel de administración ya es web, y si tus usuarios también la necesitan desde la computadora, se desarrolla una aplicación web que comparte el mismo servidor y los mismos datos.",
        },
      ]}
      serviceName="Desarrollo de aplicaciones móviles"
      serviceDescription="Desarrollo de aplicaciones móviles a medida para Android e iOS en Perú, con panel de administración, pagos locales y publicación en App Store y Google Play."
    />
  );
}
