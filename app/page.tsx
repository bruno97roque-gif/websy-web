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
          ⚡ Oculto en móvil (<768px): el GIF pesa 13.8 MB — en dispositivos
          lentos o con datos móviles esto impacta mucho la carga.
          En tablet/desktop sigue visible.
          ─────────────────────────────────────────────────────────────────── */}
        <div className="pointer-events-none absolute z-20 hidden md:block md:bottom-[8%] md:left-[8%] lg:bottom-[0%] lg:left-[20%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-alien-float.gif"
            alt=""
            className="h-auto w-auto drop-shadow-2xl md:h-[220px] lg:h-[260px]"
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
