import HeroSection      from "@/components/sections/home/HeroSection";
import MarqueeSection   from "@/components/sections/home/MarqueeSection";
import QuienesSomos     from "@/components/sections/home/QuienesSomos";
import ServicesSection  from "@/components/sections/home/ServicesSection";
import ClientsSection   from "@/components/sections/home/ClientsSection";
import ContactSection   from "@/components/sections/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <QuienesSomos />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
