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
        {/*
          ── ALIEN MASCOTA — responsive ──────────────────────────────────────
          Posición : ajusta `bottom` y `left` en el div de abajo
          Tamaños  :
            h-[130px]           → iPhone XS / SE  (< 390px)
            min-[390px]:h-[170px] → iPhone 12 / 14  (≥ 390px)
            md:h-[260px]        → tablet / desktop (≥ 768px)
          ────────────────────────────────────────────────────────────────── */}
        <div className="pointer-events-none absolute bottom-[0%] left-[18%] z-20 md:left-[20%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-float.webp"
            alt=""
            className="h-[130px] w-auto drop-shadow-2xl min-[390px]:h-[170px] md:h-[260px]"
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
