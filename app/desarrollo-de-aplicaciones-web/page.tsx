import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/desarrollo-de-aplicaciones-web",
  title: "Desarrollo de Aplicaciones Web a Medida en Perú",
  description:
    "Desarrollo de aplicaciones web a medida en Perú: portales de clientes, plataformas de reservas, marketplaces y web apps (PWA) con usuarios, pagos y panel de administración.",
});

export default function AplicacionesWebPage() {
  return (
    <ServiceLanding
      slug="/desarrollo-de-aplicaciones-web"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Aplicaciones Web", path: "/desarrollo-de-aplicaciones-web" },
      ]}
      eyebrow="Software · Aplicaciones web"
      h1="Desarrollo de aplicaciones web a medida en Perú"
      intro="Desarrollamos aplicaciones web a medida para empresas y emprendedores en Perú: plataformas con usuarios que se usan desde el navegador, sin instalar nada, en la computadora o el celular. Portales de clientes, plataformas de reservas, marketplaces y web apps con pagos, panel de administración y el código a nombre de tu empresa."
      highlights={["Portales de clientes", "Reservas en línea", "Marketplaces", "Web apps (PWA)", "Pagos en línea"]}
      stats={[
        { value: "Sin instalar", label: "Funciona en el navegador" },
        { value: "Multidispositivo", label: "Computadora, tablet y celular" },
        { value: "Con usuarios", label: "Cuentas, roles y permisos" },
        { value: "Tuya", label: "Código y datos a tu nombre" },
      ]}
      sections={[
        {
          h2: "Qué es una aplicación web y en qué se diferencia de una página web",
          body:
            "Una página web muestra información: quién eres, qué vendes y cómo contactarte. Una aplicación web hace cosas: el usuario entra con su cuenta, registra datos, reserva, paga o consulta su historial. Por dentro tiene una base de datos y una lógica de negocio, y por eso se desarrolla como software, no se arma con una plantilla. Si lo que necesitas es una web para presentar tu empresa, mira [diseño de páginas web](/diseno-de-paginas-web); la diferencia completa está en [página web, sistema web y software](/blog/pagina-web-sistema-web-y-software-a-medida).",
          table: {
            cabeceras: ["", "Página web", "Aplicación web"],
            filas: [
              ["Para qué sirve", "Presentar tu negocio y captar contactos", "Que tus usuarios hagan una tarea dentro de ella"],
              ["Usuarios", "Visitantes anónimos", "Cuentas con acceso, roles y permisos"],
              ["Datos", "Textos e imágenes", "Base de datos con la información de cada usuario"],
              ["Cómo se hace", "Diseño y contenido", "Desarrollo de software a medida"],
            ],
          },
        },
        {
          h2: "Aplicaciones web que desarrollamos",
          bullets: [
            "Portales de clientes: tus clientes ven sus pedidos, facturas, contratos o el avance de su servicio.",
            "Plataformas de reservas y citas con pago en línea para clínicas, hoteles, gimnasios o academias.",
            "Marketplaces y plataformas que conectan a proveedores con compradores.",
            "Web apps (PWA) que se instalan en el celular desde el navegador, sin pasar por las tiendas.",
            "Plataformas de cursos, membresías o contenidos con acceso por suscripción.",
            "Paneles y tableros que reúnen datos de varias fuentes para tomar decisiones.",
          ],
        },
        {
          h2: "Aplicación web, sistema web o SaaS: qué necesitas",
          body:
            "Las tres se usan desde el navegador; cambia quién las usa. Si es para ordenar la operación interna de tu empresa (stock, ventas, caja), es un [sistema web](/sistemas). Si es para que la usen tus clientes o el público, es una aplicación web como las de esta página. Y si la vas a vender por suscripción a otras empresas, es una [plataforma SaaS](/desarrollo-de-saas). Si además tus usuarios la quieren en el celular como app de tienda, se suma una [aplicación móvil](/desarrollo-de-aplicaciones-moviles) que usa el mismo servidor y los mismos datos.",
        },
        {
          h2: "Qué incluye el desarrollo",
          bullets: [
            "Diseño de las pantallas y del recorrido del usuario antes de programar.",
            "Registro, inicio de sesión, roles y permisos.",
            "Base de datos y servidor en la nube, con respaldos.",
            "Pagos en línea con tarjeta (Niubiz, Izipay) y Yape o Plin según el flujo.",
            "Panel de administración para gestionar usuarios, contenidos y pagos.",
            "Integraciones con tu facturación electrónica, tu CRM o tu tienda virtual.",
          ],
        },
        {
          h2: "Precio referencial de una aplicación web",
          body:
            "Una aplicación web parte en Websy desde S/ 15,000. El monto final depende de cuántos tipos de usuario tenga, qué funciones entren en la primera versión y con qué sistemas tenga que conectarse. Los montos indicados son referenciales; la cifra exacta va por escrito en la propuesta. Los rangos del resto de proyectos están en [desarrollo de software a medida](/desarrollo-de-software-a-medida).",
        },
        {
          h2: "Cómo trabajamos tu aplicación web",
          bullets: [
            "Definimos quién la usará y qué tarea tiene que resolver.",
            "Dejamos por escrito qué entra en la primera versión y qué queda para después.",
            "Diseñamos las pantallas y las apruebas antes de programar.",
            "Desarrollamos con entregas que pruebas en un entorno real, no en capturas.",
            "Publicamos, capacitamos a tu equipo y acompañamos las primeras semanas.",
            "Sumamos funciones por etapas según el uso real.",
          ],
        },
      ]}
      related={[
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Apps, CRM, ERP, SaaS y sistemas web con precios referenciales." },
        { label: "Aplicaciones móviles", href: "/desarrollo-de-aplicaciones-moviles", desc: "La versión para Android e iOS de tu plataforma." },
        { label: "Desarrollo de SaaS", href: "/desarrollo-de-saas", desc: "Si vas a vender tu aplicación por suscripción." },
        { label: "Sistemas web", href: "/sistemas", desc: "Si lo que necesitas es ordenar la operación interna." },
      ]}
      articles={[
        { label: "Página web, sistema web y software", href: "/blog/pagina-web-sistema-web-y-software-a-medida", desc: "Qué es cada cosa y cuál pedir según tu problema." },
        { label: "App nativa, híbrida o web (PWA)", href: "/blog/aplicacion-nativa-hibrida-o-web-cual-elegir", desc: "Cuándo basta una web app y cuándo hace falta una app." },
        { label: "Cuánto cuesta un software a medida", href: "/blog/cuanto-cuesta-un-software-a-medida-en-peru", desc: "Desde cuánto parte cada tipo de proyecto." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta desarrollar una aplicación web en Perú?",
          a: "En Websy, una aplicación web parte desde S/ 15,000. Los montos indicados son referenciales: el precio final depende de los tipos de usuario, las funciones y las integraciones.",
        },
        {
          q: "¿Qué diferencia hay entre una aplicación web y una app móvil?",
          a: "La aplicación web se usa desde el navegador y no se instala desde una tienda; la app móvil se descarga de Google Play o App Store y puede usar más funciones del celular. Pueden compartir el mismo servidor y los mismos datos.",
        },
        {
          q: "¿Una aplicación web funciona en el celular?",
          a: "Sí. Se diseña para verse bien en cualquier pantalla y, como web app (PWA), se puede instalar en la pantalla de inicio del celular sin pasar por las tiendas.",
        },
        {
          q: "¿El código de la aplicación es mío?",
          a: "Sí. El código, la base de datos y los accesos al servidor quedan a nombre de tu empresa.",
        },
      ]}
      serviceName="Desarrollo de aplicaciones web a medida"
      serviceDescription="Desarrollo de aplicaciones web a medida en Perú: portales de clientes, plataformas de reservas, marketplaces y web apps con usuarios, pagos y panel de administración."
    />
  );
}
