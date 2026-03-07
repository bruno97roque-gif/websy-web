import dynamic from "next/dynamic";
import HeroSection    from "@/components/sections/home/HeroSection";
import MarqueeSection from "@/components/sections/home/MarqueeSection";

/*
 * Secciones below-the-fold: dynamic import para code-splitting.
 * — Divide el bundle en chunks separados → menos JS a parsear al inicio.
 * — SSR activo (default) para no perder SEO ni generar CLS.
 * — Ahorra ~200-300ms de scripting en el hilo principal al cargar.
 */
const QuienesSomos    = dynamic(() => import("@/components/sections/home/QuienesSomos"));
const ServicesSection = dynamic(() => import("@/components/sections/home/ServicesSection"));
const ClientsSection  = dynamic(() => import("@/components/sections/home/ClientsSection"));

export default function HomePage() {
  return (
    <>
      {/* Wrapper relativo para el alien y el marquee */}
      <div className="relative">
        <HeroSection />

        {/*
          ── ALIEN MASCOTA ──────────────────────────────────────────────────
          Visible en todos los dispositivos.
          En móvil: centrado abajo del hero, tamaño reducido (110px) para
          ahorrar memoria GPU y tiempo de render.
          ─────────────────────────────────────────────────────────────────── */}
        <div className="pointer-events-none absolute z-20 bottom-[4%] left-1/2 -translate-x-1/2 md:bottom-[8%] md:left-[8%] md:translate-x-0 lg:bottom-[0%] lg:left-[20%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-alien-float.gif"
            alt=""
            className="h-[110px] w-auto drop-shadow-2xl animate-[floatY_6s_ease-in-out_infinite] md:h-[220px] lg:h-[260px]"
            decoding="async"
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
