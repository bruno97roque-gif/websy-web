import type { Metadata } from "next";
import ContactSection from "@/components/sections/home/ContactSection";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { contactPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  path: "/contacto",
  title: "Contacto — cotiza tu proyecto web",
  description:
    "¿Tienes un proyecto en mente? Contáctanos y te respondemos en menos de 24 horas con una propuesta personalizada.",
});

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={[
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Contacto", path: "/contacto" },
          ]),
        ]}
      />
      {/* Espacio para la Navbar fija */}
      <div className="h-[78px] bg-[#291231]" />

    </>
  );
}
