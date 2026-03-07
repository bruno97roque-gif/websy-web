import type { Metadata } from "next";
import ContactSection from "@/components/sections/home/ContactSection";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes un proyecto en mente? Contáctanos y te respondemos en menos de 24 horas con una propuesta personalizada.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Espacio para la Navbar fija */}
      <div className="h-[78px] bg-[#291231]" />
      
    </>
  );
}
