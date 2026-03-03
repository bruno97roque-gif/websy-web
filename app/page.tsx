import HeroSection      from "@/components/sections/home/HeroSection";
import MarqueeSection   from "@/components/sections/home/MarqueeSection";
import QuienesSomos     from "@/components/sections/home/QuienesSomos";
import ServicesSection  from "@/components/sections/home/ServicesSection";
import ClientsSection   from "@/components/sections/home/ClientsSection";
import ContactSection   from "@/components/sections/home/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* Wrapper relativo para que el alien se superponga entre el hero y la barra naranja */}
      <div className="relative">
        <HeroSection />

        {/*
          Alien mascot — se superpone encima de la barra naranja. Scrollea con la página (no fixed).
          Imagen: /public/images/hero-float.webp
          Ajusta h-[220px] al tamaño que prefieras.
        */}
        <div className="pointer-events-none absolute bottom-[12px] left-[5%] z-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-float.webp"
            alt=""
            className="h-[320px] w-auto drop-shadow-2xl"
          />
        </div>

        <MarqueeSection />
      </div>
      <QuienesSomos />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
