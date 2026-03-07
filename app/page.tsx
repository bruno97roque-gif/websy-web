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

        {/* ── ALIEN MASCOTA ── */}
        <style>{`
          .alien-wrap{position:absolute;z-index:20;pointer-events:none;bottom:2%;left:33%}
          .alien-img{height:120px;width:auto;filter:drop-shadow(0 20px 13px rgb(0 0 0/.35))}
          @media(min-width:390px){.alien-wrap{bottom:2%;left:30%}.alien-img{height:160px}}
          @media(min-width:768px){.alien-wrap{bottom:8%;left:8%}.alien-img{height:220px}}
          @media(min-width:1024px){.alien-wrap{bottom:0%;left:20%}.alien-img{height:260px}}
        `}</style>
        <div className="alien-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-alien-float.gif"
            alt=""
            className="alien-img"
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
