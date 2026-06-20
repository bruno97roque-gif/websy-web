import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/branding-y-diseno-ux-ui",
  title: "Branding y Diseño UX/UI en Perú",
  description:
    "Branding e identidad visual y diseño UX/UI para empresas y tiendas virtuales en Perú. Una marca coherente y una experiencia de usuario que genera confianza y vende.",
});

export default function BrandingUxUiPage() {
  return (
    <ServiceLanding
      slug="/branding-y-diseno-ux-ui"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Branding y Diseño UX/UI", path: "/branding-y-diseno-ux-ui" },
      ]}
      eyebrow="Servicio · Branding & UX/UI"
      h1="Branding e identidad visual + diseño UX/UI"
      intro="Creamos la identidad visual de tu marca y diseñamos la experiencia de usuario de tu web o tienda virtual. En Perú, una marca coherente y un diseño UX/UI claro generan confianza, y la confianza es lo que hace que un visitante te compre."
      highlights={["Identidad de marca", "Logotipo", "Manual de marca", "Diseño UX/UI", "Para ecommerce"]}
      stats={[
        { value: "Marca", label: "Identidad coherente" },
        { value: "UX/UI", label: "Experiencia clara y simple" },
        { value: "Confianza", label: "El diseño que vende" },
        { value: "Ecommerce", label: "Pensado para convertir" },
      ]}
      sections={[
        {
          h2: "Branding: una marca que se recuerda",
          body:
            "Tu marca es más que un logo: es cómo te perciben. Construimos una identidad visual coherente que transmite profesionalismo y se ve consistente en tu web, tu tienda y tus redes.",
          bullets: [
            "Identidad de marca: logotipo, colores y tipografías.",
            "Manual de marca para aplicarla de forma consistente.",
            "Identidad visual para ecommerce y campañas.",
          ],
        },
        {
          h2: "Diseño UX/UI: que comprar sea fácil",
          body:
            "Un diseño bonito que confunde no vende. Diseñamos la experiencia (UX) y la interfaz (UI) para que tu visitante encuentre lo que busca y llegue al botón de compra o contacto sin fricción.",
          bullets: [
            "Diseño de experiencia de usuario (UX) centrado en convertir.",
            "Interfaces (UI) limpias, claras y responsive.",
            "Diseño UX/UI para ecommerce: fichas, checkout y navegación.",
          ],
        },
        {
          h2: "La base de todo lo demás",
          body:
            "Una buena marca y un buen diseño potencian tu web, tu tienda y tu SEO. Por eso el branding no es un lujo: es lo que hace que el resto de tu inversión funcione mejor.",
        },
      ]}
      related={[
        { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Aplica tu nueva marca en una web que convierte." },
        { label: "Tiendas virtuales", href: "/tiendas-virtuales", desc: "Una tienda con identidad propia vende más." },
      ]}
      faqs={[
        {
          q: "¿Hacen solo el logo o la marca completa?",
          a: "Ambos. Podemos diseñar desde el logotipo hasta una identidad de marca completa con manual de uso, según lo que necesites.",
        },
        {
          q: "¿El diseño UX/UI sirve para mi tienda virtual?",
          a: "Sí. Diseñamos la experiencia y la interfaz de tu tienda para que sea fácil de navegar y comprar, lo que reduce el abandono del carrito.",
        },
      ]}
      serviceName="Branding e identidad visual y diseño UX/UI"
      serviceDescription="Branding, identidad visual y diseño UX/UI para empresas y tiendas virtuales en Perú: marca coherente y experiencia de usuario orientada a convertir."
    />
  );
}
