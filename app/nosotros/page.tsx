import type { Metadata } from "next";
import QuienesSomos from "@/components/sections/home/QuienesSomos";
import NosotrosHero from "@/components/sections/nosotros/NosotrosHero";
import NosotrosValores from "@/components/sections/nosotros/NosotrosValores";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de Websy. Somos una agencia web en Lima especializada en diseño, desarrollo y marketing digital con resultados reales.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* Espacio para la Navbar fija */}
      <div className="h-[78px] bg-[#291231]" />
      <NosotrosHero />
      <QuienesSomos />
      <NosotrosValores />
    </>
  );
}
