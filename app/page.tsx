import dynamic from "next/dynamic";
import HeroSection    from "@/components/sections/home/HeroSection";
import MarqueeSection from "@/components/sections/home/MarqueeSection";
import s from "./hero-alien.module.css";

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
          Posición afinada por breakpoint para que quede justo encima del
          marquee naranja sin desaparecer dentro de la barra.

          < 390px  (iPhone SE/XS) : bottom-[4%]   left-[33%]
          ≥ 390px  (iPhone 12/14) : bottom-[2%]   left-[30%]
          ≥ 768px  (iPad Mini/Air): bottom-[8%]   left-[8%]   ← sube por encima del marquee
          ≥ 1024px (Desktop)      : bottom-[0%]   left-[20%]
          ──────────────────────────────────────────────────────────────────── */}
        <div className={s.wrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-alien-float.gif"
            alt=""
            className={s.img}
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
