import type { Metadata } from "next";
import NosotrosHero    from "@/components/sections/nosotros/NosotrosHero";
import NosotrosValores from "@/components/sections/nosotros/NosotrosValores";
import TeamGrid        from "@/components/sections/nosotros/TeamGrid";
// La galería «Proyectos que hablan por sí solos» queda oculta, no borrada: el
// componente sigue en components/sections/nosotros/NosotrosGaleria.tsx y se
// vuelve a mostrar descomentando el import y la etiqueta de abajo.
// import NosotrosGaleria from "@/components/sections/nosotros/NosotrosGaleria";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  path: "/nosotros",
  title: "Nosotros — agencia web en Lima, Perú",
  description:
    "Conoce al equipo detrás de Websy. Somos una agencia web en Lima especializada en diseño, desarrollo y marketing digital con resultados reales.",
});

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        data={[
          aboutPageSchema(),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Nosotros", path: "/nosotros" },
          ]),
        ]}
      />
      <div className="h-[78px] bg-[#291231]" />
      <NosotrosHero />
      <NosotrosValores />
      <TeamGrid />
      {/* <NosotrosGaleria /> */}
    </>
  );
}
