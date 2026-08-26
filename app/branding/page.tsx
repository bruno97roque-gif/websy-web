import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/branding",
  title: "Branding y diseño de identidad de marca en Perú",
  description:
    "Branding en Perú: diseño de logotipo, identidad visual, manual de marca y estrategia. Construimos una marca sólida, coherente y memorable para tu negocio.",
});

export default function BrandingPage() {
  return (
    <ServiceLanding
      slug="/branding"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Branding e Identidad de Marca", path: "/branding" },
      ]}
      eyebrow="Identidad de marca"
      h1="Branding y diseño de identidad de marca"
      intro="Creamos marcas que se recuerdan y transmiten confianza. Nuestro servicio de branding en Perú va más allá del logo: definimos tu estrategia, tu personalidad visual y verbal, y entregamos un sistema de identidad coherente (logotipo, colores, tipografías y manual de marca) que te diferencia de la competencia en cada punto de contacto."
      highlights={["Logotipo", "Identidad visual", "Manual de marca", "Estrategia", "Papelería y RRSS"]}
      stats={[
        { value: "Identidad", label: "Un sistema visual completo" },
        { value: "Coherencia", label: "La misma marca en todos lados" },
        { value: "Manual", label: "Guía de uso para tu equipo" },
        { value: "Confianza", label: "Te ves profesional y serio" },
      ]}
      sections={[
        {
          h2: "Tu marca es lo que la gente recuerda de ti",
          body:
            "Una marca no es un logo bonito: es la impresión que dejas y la razón por la que un cliente te elige a ti y no al de al lado. En un mercado saturado, una identidad sólida y coherente genera confianza, justifica tu precio y hace que te recuerden. Nuestro servicio de branding construye esa marca desde la estrategia hasta el último detalle visual, para que proyectes profesionalismo en cada punto de contacto: tu web, tus redes, tu local y tu papelería.",
        },
        {
          h2: "Estrategia de marca: los cimientos",
          body:
            "Antes de dibujar nada, entendemos tu negocio, tu público y tu competencia. Definimos qué te hace diferente, qué personalidad debe tener tu marca y cómo quieres que te perciban. De ahí sale la plataforma de marca que guía todas las decisiones creativas: sin estrategia, un logo es solo decoración; con ella, es una herramienta de negocio.",
          bullets: [
            "Diagnóstico de negocio, público y competencia.",
            "Propuesta de valor y diferenciación.",
            "Personalidad, tono y territorio de marca.",
            "Naming o revisión del nombre (si lo necesitas).",
          ],
        },
        {
          h2: "Diseño de logotipo e identidad visual",
          body:
            "Diseñamos un logotipo original y versátil, pensado para funcionar en todos los tamaños y soportes, desde el favicon de tu web hasta un letrero. A su alrededor construimos un sistema visual completo: paleta de colores, tipografías, iconografía y estilo gráfico, para que tu marca se vea consistente y reconocible en cualquier lugar.",
          bullets: [
            "Logotipo principal, secundario e isotipo.",
            "Paleta de colores y tipografías de marca.",
            "Iconografía, patrones y recursos gráficos.",
            "Versiones para fondo claro, oscuro y usos especiales.",
          ],
        },
        {
          h2: "Manual de marca: coherencia que perdura",
          body:
            "De nada sirve una identidad si cada persona la usa a su manera. Entregamos un manual de marca claro que define cómo y cómo no usar tu logo, tus colores, tus tipografías y tu tono. Así tu marca se mantiene coherente aunque crezca tu equipo o trabajes con distintos proveedores, protegiendo la inversión que hiciste en ella.",
          bullets: [
            "Reglas de uso correcto e incorrecto del logo.",
            "Códigos exactos de colores y tipografías.",
            "Aplicaciones y ejemplos de uso.",
            "Guía de tono y estilo de comunicación.",
          ],
        },
        {
          h2: "Aplicaciones: lleva tu marca al mundo real",
          body:
            "Una marca cobra vida cuando se aplica. Diseñamos las piezas que tu negocio necesita para presentarse: papelería, tarjetas, plantillas para redes sociales, presentaciones y todo lo que dé una imagen unificada. Y como también hacemos web, tu identidad se traslada directo a tu página, cerrando el círculo entre marca y presencia digital.",
          bullets: [
            "Papelería: tarjetas, membretes, firmas de correo.",
            "Plantillas para redes sociales y publicidad.",
            "Aplicación de la marca en tu página web.",
            "Piezas para tu local, packaging o señalética.",
          ],
        },
      ]}
      related={[
        { label: "Nuestros servicios", href: "/servicios", desc: "Conoce todo lo que hacemos: web, ecommerce, software, SEO y más." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de un proyecto de branding y cómo cotizarlo." },
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Lleva tu nueva identidad a una web que la refleje." },
      ]}
      articles={[
        { label: "Qué es el branding y por qué tu pyme lo necesita", href: "/blog/que-es-el-branding-y-por-que-tu-pyme-lo-necesita", desc: "Más que un logo: la percepción que hace que te elijan a ti." },
        { label: "Cómo elegir una agencia de desarrollo web", href: "/blog/como-elegir-una-agencia-de-desarrollo-web-en-peru", desc: "Qué mirar antes de confiar tu marca y tu web a una agencia." },
        { label: "Cómo tener presencia online para tu negocio", href: "/blog/como-tener-presencia-online-para-tu-negocio-en-peru", desc: "Los pilares para construir una presencia de marca sólida." },
      ]}
      faqs={[
        {
          q: "¿El branding es solo el logo?",
          a: "No. El logo es una parte. El branding incluye la estrategia (qué te diferencia y cómo quieres que te perciban), el sistema visual completo (colores, tipografías, iconografía), el manual de marca y las aplicaciones. Es lo que hace que tu marca sea coherente y memorable, no solo un dibujo.",
        },
        {
          q: "¿Ya tengo un logo, pueden mejorar mi marca?",
          a: "Sí. Hacemos rediseños y actualizaciones de marca (rebranding). Podemos partir de tu identidad actual para modernizarla y ordenarla, o reconstruirla si ya no representa a tu negocio. Lo definimos según tu punto de partida.",
        },
        {
          q: "¿Entregan un manual de marca?",
          a: "Sí. Entregamos un manual con las reglas de uso del logo, los códigos de colores y tipografías, y guías de aplicación, para que tu marca se mantenga coherente sin importar quién la use.",
        },
        {
          q: "¿Puedo pedir el branding y la página web juntos?",
          a: "Claro, y es lo ideal. Al hacer ambos, tu nueva identidad se traslada directo a tu página web para una imagen totalmente unificada. Lo cotizamos como un proyecto integral.",
        },
        {
          q: "¿Los archivos del logo son míos?",
          a: "Sí. Te entregamos los archivos editables y en todos los formatos que necesitas (vectores, PNG, versiones para fondo claro y oscuro). La marca es tuya y de tu propiedad.",
        },
        {
          q: "¿Cuánto cuesta un proyecto de branding en Perú?",
          a: "Depende del alcance: solo logo, identidad completa con manual, o branding integral con aplicaciones y web. Te enviamos una propuesta a medida y gratuita en menos de 24 horas.",
        },
      ]}
      serviceName="Branding y diseño de identidad de marca"
      serviceDescription="Servicio de branding en Perú: estrategia de marca, diseño de logotipo, identidad visual, manual de marca y aplicaciones para construir una marca coherente y memorable."
    />
  );
}
