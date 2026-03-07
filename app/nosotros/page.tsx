import type { Metadata } from "next";
import NosotrosHero    from "@/components/sections/nosotros/NosotrosHero";
import NosotrosValores from "@/components/sections/nosotros/NosotrosValores";
import TeamGrid        from "@/components/sections/nosotros/TeamGrid";
import NosotrosGaleria from "@/components/sections/nosotros/NosotrosGaleria";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de Websy. Somos una agencia web en Lima especializada en diseño, desarrollo y marketing digital con resultados reales.",
};

export default function NosotrosPage() {
  return (
    <>
      <div className="h-[78px] bg-[#291231]" />
      <NosotrosHero />
      <NosotrosValores />
      <TeamGrid />
      <NosotrosGaleria />
    </>
  );
}
