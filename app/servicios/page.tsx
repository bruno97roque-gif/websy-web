import ServicesSection from "@/components/sections/home/ServicesSection";

export const metadata = {
  title: "Servicios | Websy",
  description:
    "Branding, páginas web, tiendas virtuales y Google Ads & SEO. Todo lo que tu marca necesita para despegar.",
};

export default function ServiciosPage() {
  return (
    <>
      {/* Espaciado para el navbar fijo */}
      <div className="h-[78px]" />
      <ServicesSection />
    </>
  );
}
