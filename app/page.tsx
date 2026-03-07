import HeroSection      from "@/components/sections/home/HeroSection";
import MarqueeSection   from "@/components/sections/home/MarqueeSection";
import QuienesSomos     from "@/components/sections/home/QuienesSomos";
import ServicesSection  from "@/components/sections/home/ServicesSection";
import ClientsSection   from "@/components/sections/home/ClientsSection";

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
        {/*
          ── ALIEN POSICIÓN por breakpoint ───────────────────────────────────
          IMPORTANTE: bottom% es relativo al wrapper (hero + marquee).
          Para iPad hay que superar la altura del marquee (~65px) o el alien
          desaparece dentro de la barra naranja.

          < 390px  (iPhone SE/XS) : bottom-[4%]   left-[33%]
          ≥ 390px  (iPhone 12/14) : bottom-[2%]   left-[30%]
          ≥ 768px  (iPad Mini/Air): bottom-[8%]   left-[8%]   ← sube por encima del marquee
          ≥ 1024px (Desktop)      : bottom-[0%]   left-[20%]
          ──────────────────────────────────────────────────────────────────── */}
        <div className="pointer-events-none absolute bottom-[4%] left-[33%] z-20 min-[390px]:bottom-[2%] min-[390px]:left-[30%] md:bottom-[8%] md:left-[8%] lg:bottom-[0%] lg:left-[20%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-alien-float.gif"
            alt=""
            className="h-[130px] w-auto drop-shadow-2xl min-[390px]:h-[170px] md:h-[220px] lg:h-[260px]"
          />
        </div>

        <MarqueeSection />
      </div>
      <QuienesSomos />
      <ServicesSection />
      <ClientsSection />
    </>
  );
}
