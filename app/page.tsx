import dynamic from "next/dynamic";
import HeroSection    from "@/components/sections/home/HeroSection";
import MarqueeSection from "@/components/sections/home/MarqueeSection";
import { AnimatedMedia } from "@/components/ui/animated-media";

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
      {/* ── ALIEN MÓVIL (<768px) ─────────────────────────────────────────
          Wrapper relativo solo con HeroSection.
          Los media queries de móvil se conservan exactamente como estaban.
          En ≥768px se oculta con display:none — el alien desktop toma el relevo.
          ─────────────────────────────────────────────────────────────────── */}
      <div className="relative">
        <HeroSection />

        {/*
          ── GUÍA MÓVIL — edita solo los valores de aquí abajo ────────────
          POSICIÓN (bottom = distancia desde abajo del hero):
            • ≤360px → bottom:4.5vh  left:38%
            • ≤375px → bottom:5vh    left:38%
            • 390–413px → bottom:2.8vh  left:32%
            • 414–767px → bottom:2.7vh  left:34%
          TAMAÑO:
            • base (móvil pequeño) .... 100px
            • 390–767px ............... 140px
          ──────────────────────────────────────────────────────────────── */}
        <style>{`
          .hw-alien{position:absolute;z-index:20;pointer-events:none;bottom:3vh;left:33%}
          .hw-alien video,.hw-alien img{height:100px;width:auto}
          @media(max-width:360px){.hw-alien{bottom:4.5vh;left:38%}}
          @media(max-width:375px){.hw-alien{bottom:5vh;left:38%}}
          @media(min-width:390px) and (max-width:413px){.hw-alien{bottom:2.8vh;left:32%}}
          @media(min-width:390px) and (max-width:767px){.hw-alien video,.hw-alien img{height:140px}}
          @media(min-width:412px) and (max-width:413px){.hw-alien{bottom:2.7vh;left:34%}}
          @media(min-width:414px) and (max-width:767px){.hw-alien{bottom:2.7vh;left:34%}}
          @media(min-width:768px){.hw-alien{display:none}}
        `}</style>
        <div className="hw-alien">
          <AnimatedMedia
            webmSrc="/images/hero-alien-float.webm"
            gifSrc="/images/hero-alien-float-mobile.gif"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ── ALIEN DESKTOP/TABLET (≥768px) ───────────────────────────────
          Wrapper relativo solo con MarqueeSection.
          "absolute bottom-full" → el borde inferior del alien queda
          exactamente en la unión hero/marquee, sin depender de la altura
          del hero ni de media queries de posición vertical.
          El overflow-clip del hero NO lo afecta (este div es su hermano).

          ALINEACIÓN: max-w-[1600px] + pl-[92px]
            = 72px (padding del hero) + 20px (aire)
            → siempre alineado con el borde izquierdo del texto.

          TAMAÑO (ajusta aquí si necesitas cambiar por breakpoint):
            • md  768px  → h-[180px]
            • lg  1024px → h-[200px]
            • xl  1280px → h-[240px]
            • 2xl 1536px → h-[280px]
          ──────────────────────────────────────────────────────────────── */}
      <div className="relative">
        <div className="pointer-events-none absolute bottom-full left-0 right-0 z-[30] hidden md:block">
          <div className="mx-auto w-full max-w-[1600px] pl-[92px]">
            <AnimatedMedia
              webmSrc="/images/hero-alien-float.webm"
              gifSrc="/images/hero-alien-float-mobile.gif"
              aria-hidden="true"
              className="h-[180px] w-auto lg:h-[200px] xl:h-[240px] 2xl:h-[280px]"
            />
          </div>
        </div>
        <MarqueeSection />
      </div>

      <QuienesSomos />
      <ServicesSection />
      <ClientsSection />
    </>
  );
}
