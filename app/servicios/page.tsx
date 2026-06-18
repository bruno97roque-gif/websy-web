import type { Metadata } from "next";
import ServicesSection from "@/components/sections/home/ServicesSection";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { servicesSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  path: "/servicios",
  title: "Servicios de diseño web, tiendas online, branding y SEO",
  description:
    "Branding, páginas web, tiendas virtuales y Google Ads & SEO. Todo lo que tu marca necesita para despegar.",
});

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={[
          servicesSchema(),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
          ]),
        ]}
      />
      {/* Espaciado para el navbar fijo */}
      <div className="h-[78px]" />
      <ServicesSection />
    </>
  );
}
