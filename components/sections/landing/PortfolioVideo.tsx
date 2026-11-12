"use client";

import { useEffect, useRef } from "react";

/**
 * Video de un proyecto del portafolio.
 *
 * - Solo se reproduce mientras está a la vista (y se pausa al salir): con 4
 *   videos por página no se gastan datos móviles en lo que nadie está mirando.
 * - `preload="metadata"` + `#t=0.1`: el navegador pinta el primer fotograma
 *   como portada (también en iPhone) sin descargar el video entero.
 * - Con «reducir movimiento» activado no arranca solo: se muestra con controles.
 */
export default function PortfolioVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.controls = true;
      return;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) void v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const pantallaCompleta = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    // iPhone no tiene requestFullscreen en <video>, pero sí webkitEnterFullscreen.
    const ios = v as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
    if (v.requestFullscreen) void v.requestFullscreen().catch(() => {});
    else ios.webkitEnterFullscreen?.();
    void v.play().catch(() => {});
  };

  return (
    <div className="group/video relative aspect-video w-full overflow-hidden bg-[#140818]">
      <video
        ref={ref}
        src={`${src}#t=0.1`}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="h-full w-full object-cover object-top"
      />
      <button
        type="button"
        onClick={pantallaCompleta}
        aria-label={`Ver ${label} en pantalla completa`}
        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#291231]/80 text-white opacity-100 backdrop-blur transition-all duration-300 hover:bg-[#F18C1B] hover:text-[#291231] md:opacity-0 md:group-hover/video:opacity-100 focus-visible:opacity-100"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
        </svg>
      </button>
    </div>
  );
}
