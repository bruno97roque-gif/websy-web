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
          ── ALIEN MASCOTA — GUÍA PARA MODIFICAR MANUALMENTE ──────────────
          Edita los valores dentro del <style> de abajo.
          En CSS: misma especificidad → gana la regla que viene DESPUÉS.
          Por eso las queries más específicas van al final.

          POSICIÓN (bottom):
            • ≤360px (Galaxy S8) ........ bottom: 3.5vh
            • ≤375px (iPhone SE) ........ bottom: 4vh
            • 376-389px (base) .......... bottom: 3vh
            • 390-411px (iPhone 12-14) .. bottom: 2.5vh
            • 412-413px (Pixel 5) ....... bottom: 1.9vh
            • 414-767px (iPhone Plus) ... bottom: 2vh
            • ≥768px (iPad Mini) ........ bottom: 1%
            • ≥820px (iPad Air) ......... bottom: 0.8%
            • ≥1024px (Desktop) ......... bottom: -0.2%
            • ≥1440px ................... bottom: -0.2%
            • ≥1920px (FHD) ............. bottom: -1.2%
            • ≥2000px (2K+) ............. bottom: -0.3%

          TAMAÑO (height del img):
            • Base (< 390px) ............ 120px
            • ≥390px .................... 160px
            • ≥768px .................... 220px
            • ≥1024px ................... 290px
          ──────────────────────────────────────────────────────────────────── */}
        <style>{`
          .hw-alien{position:absolute;z-index:20;pointer-events:none;bottom:3vh;left:33%}
          .hw-alien img{height:120px;width:auto}
          @media(max-width:375px){.hw-alien{bottom:4vh;left:33%}}
          @media(max-width:360px){.hw-alien{bottom:3.5vh;left:33%}}
          @media(min-width:414px) and (max-width:767px){.hw-alien{bottom:2vh;left:30%}}
          @media(min-width:390px) and (max-width:413px){.hw-alien{bottom:2.5vh;left:30%}}
          @media(min-width:412px) and (max-width:413px){.hw-alien{bottom:1.9vh;left:30%}}
          @media(min-width:390px) and (max-width:767px){.hw-alien img{height:160px}}
          @media(min-width:768px){.hw-alien{bottom:1%;left:50%;transform:translateX(-50%)}}
          @media(min-width:820px){.hw-alien{bottom:0.8%;left:50%;transform:translateX(-50%)}}
          @media(min-width:768px){.hw-alien img{height:220px}}
          @media(min-width:1024px){.hw-alien{bottom:-0.2%;left:50%;transform:translateX(-50%)}}
          @media(min-width:1280px){.hw-alien{bottom:-0.2%;left:10%;transform:none}}
          @media(min-width:1440px){.hw-alien{bottom: -0.2%;left:5%;transform:none}}
          @media(min-width:1920px){.hw-alien{bottom:-1.2%;left:10%}}
          @media(min-width:2000px){.hw-alien{bottom: -0.3%;left:20%}}
          @media(min-width:1024px){.hw-alien img{height:290px}}
        `}</style>
        <div className="hw-alien">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-alien-float.gif"
            alt=""
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
