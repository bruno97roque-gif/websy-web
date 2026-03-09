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

          POSICIÓN (bottom = distancia desde abajo de la pantalla):
            • iPhone SE (≤375px) .......... línea con "max-width:375px"  → bottom: 3vh
            • iPhone 12-15 (376-767px) .... línea con "min-width:376px"  → bottom: 3vh
            • iPad (≥768px) ............... línea con "min-width:768px"  → bottom: 8%
            • Desktop (≥1024px) ........... línea con "min-width:1024px" → bottom: 0%

          TAMAÑO (height del img):
            • iPhone SE ................... 120px  (default, sin media query)
            • iPhone 12-15 ................ 160px  (línea min-width:376px img)
            • iPad ........................ 220px  (línea min-width:768px img)
            • Desktop ..................... 260px  (línea min-width:1024px img)

          HORIZONTAL (left):
            • ≤375px → left:33%  |  376-767px → left:30%  |  ≥768px → left:8%  |  ≥1024px → left:20%
          ──────────────────────────────────────────────────────────────────── */}
        <style>{`
          .hw-alien{position:absolute;z-index:20;pointer-events:none;bottom:3vh;left:33%}
          .hw-alien img{height:100px;width:auto}
          @media(max-width:375px){.hw-alien{bottom:5vh;left:38%}}
          @media(max-width:360px){.hw-alien{bottom:4.5vh;left:38%}}
          @media(min-width:414px) and (max-width:767px){.hw-alien{bottom:2.7vh;left:34%}}
          @media(min-width:390px) and (max-width:413px){.hw-alien{bottom:2.8vh;left:32%}}
          @media(min-width:412px) and (max-width:413px){.hw-alien{bottom:2.7vh;left:34%}}
          @media(min-width:390px) and (max-width:767px){.hw-alien img{height:140px}}
          @media(min-width:768px){.hw-alien{bottom:4%;left:8%}}
          @media(min-width:768px){.hw-alien img{height:190px}}
          @media(min-width:820px){.hw-alien{bottom:0.8%;left:8%}}
          @media(min-width:1024px){.hw-alien{bottom:-0.2%;left:10%}}
          @media(min-width:1024px){.hw-alien img{height:260px}}
          @media(min-width:1024px) and (max-width:1439px){.hw-alien{bottom:1.4%}}
          @media(min-width:1024px) and (max-width:1439px){.hw-alien img{height:200px}}
          @media(min-width:1440px){.hw-alien{bottom:-0.2%;left:5%}}
          @media(min-width:1920px){.hw-alien{bottom:-1.2%;left:10%}}
          @media(min-width:2000px){.hw-alien{bottom:-0.3%;left:20%}}
        `}</style>
        <div className="hw-alien">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-alien-float.webp"
            alt=""
            aria-hidden="true"
            draggable={false}
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
