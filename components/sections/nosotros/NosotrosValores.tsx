"use client";

import { useReveal, useRevealList } from "@/hooks/useReveal";

const valores = [
  {
    num: "01",
    label: "Calidad",
    icon: (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.8 6.1L23 10l-4.5 4.4 1.1 6.5L14 18l-5.6 2.9 1.1-6.5L5 10l6.2-.9L14 3z" fill="#F18C1B" />
      </svg>
    ),
    title: "SIN EXCUSAS",
    desc: "Cada línea de código y cada pixel importa. No entregamos nada de lo que no estemos orgullosos.",
  },
  {
    num: "02",
    label: "Resultados",
    icon: (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#F18C1B" strokeWidth="2" />
        <path d="M9 14l3.5 3.5L19 10" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "MEDIBLES",
    desc: "Trabajamos con datos, no con suposiciones. Cada decisión está respaldada por métricas reales.",
  },
  {
    num: "03",
    label: "Comunicación",
    icon: (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
        <path d="M5 14h18M14 5l9 9-9 9" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "DIRECTA",
    desc: "Sin intermediarios ni burocracia. Hablas directamente con quien hace el trabajo.",
  },
  {
    num: "04",
    label: "Alianza",
    icon: (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="9" height="9" rx="2" fill="#F18C1B" />
        <rect x="15" y="4" width="9" height="9" rx="2" fill="#F18C1B" opacity=".5" />
        <rect x="4" y="15" width="9" height="9" rx="2" fill="#F18C1B" opacity=".5" />
        <rect x="15" y="15" width="9" height="9" rx="2" fill="#F18C1B" />
      </svg>
    ),
    title: "A LARGO PLAZO",
    desc: "No desaparecemos después de entregar. Somos tu socio tecnológico para crecer contigo.",
  },
];

export default function NosotrosValores() {
  // CSS-based reveals via IntersectionObserver — sin GSAP ScrollTrigger
  const headerRef = useReveal<HTMLDivElement>();
  const { containerRef: cardsContainerRef, itemRefs: cardsRef } =
    useRevealList<HTMLDivElement>(valores.length);

  return (
    <section
      className="relative overflow-hidden px-8 py-[80px] md:px-[72px] md:py-[100px]"
      style={{
        backgroundImage: "url('/images/fondo-tarjeta-valores.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ── CSS flip ── */}
      <style>{`
        .vflip-wrapper { perspective: 1100px; height: 280px; cursor: pointer; }
        @media (max-width:639px){ .vflip-wrapper { height: 260px; } }
        .vflip-inner {
          position:relative; width:100%; height:100%;
          transform-style:preserve-3d;
          transition:transform 0.72s cubic-bezier(0.4,0,0.2,1);
        }
        .vflip-wrapper:hover .vflip-inner { transform:rotateY(180deg); }
        .vflip-face {
          position:absolute; inset:0;
          backface-visibility:hidden; -webkit-backface-visibility:hidden;
          border-radius:20px; overflow:hidden;
        }
        .vflip-back { transform:rotateY(180deg); }
        @keyframes vHint { 0%,100%{opacity:.3} 50%{opacity:.75} }
        .vflip-hint { animation: vHint 2s ease-in-out infinite; }
        @keyframes vGlow {
          0%,100%{ transform:translateX(-50%) scale(1); opacity:.45; }
          50%    { transform:translateX(-50%) scale(1.2); opacity:1; }
        }
        .vflip-glow { animation: vGlow 2.4s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* Header — reveal via IntersectionObserver CSS */}
        <div ref={headerRef} className="reveal mb-[52px]">
          <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
            Lo que nos define
          </p>
          <h2 className="font-montserrat text-[clamp(28px,3.2vw,46px)] font-bold leading-[1.1] tracking-tight text-[#291231]">
            Lo que nos <span className="text-[#F18C1B]">impulsa</span>
          </h2>
          <p className="font-poppins mt-4 max-w-[540px] text-[14px] leading-[1.85] text-[#4a3d54]">
            Creemos que el crecimiento no es casualidad. Es el resultado de visión clara,
            decisiones inteligentes y ejecución estratégica.
          </p>
        </div>

        {/* Grid de flip cards — reveal stagger via IntersectionObserver */}
        <div
          ref={cardsContainerRef}
          className="reveal-stagger grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {valores.map((v, i) => (
            <div
              key={v.title}
              ref={(el) => { cardsRef.current[i] = el as HTMLDivElement | null; }}
              className="reveal-item"
            >
              <div className="vflip-wrapper">
                <div className="vflip-inner">

                  {/* ── FRENTE: label + title ── */}
                  <div className="vflip-face" style={{ backgroundColor: "#291231" }}>
                    {/* Grid pattern */}
                    <div className="pointer-events-none absolute inset-0" style={{
                      backgroundImage: `linear-gradient(rgba(241,140,27,.06) 1px,transparent 1px),
                                        linear-gradient(90deg,rgba(241,140,27,.06) 1px,transparent 1px)`,
                      backgroundSize: "48px 48px",
                    }} />
                    {/* Número watermark */}
                    <div style={{
                      position: "absolute", bottom: -10, right: 8,
                      fontFamily: "var(--font-montserrat,sans-serif)",
                      fontSize: 120, fontWeight: 900, lineHeight: 1,
                      color: "rgba(241,140,27,1)", userSelect: "none", pointerEvents: "none",
                    }}>{v.num}</div>
                    {/* Barra naranja izquierda */}
                    <div style={{
                      position: "absolute", left: 0, top: "18%", bottom: "18%",
                      width: 3, backgroundColor: "#F18C1B", borderRadius: "0 2px 2px 0",
                    }} />
                    {/* Contenido centrado */}
                    <div style={{
                      position: "relative", zIndex: 10, height: "100%",
                      display: "flex", flexDirection: "column",
                      justifyContent: "center", padding: "32px 28px 32px 36px",
                    }}>
                      <p style={{
                        fontFamily: "var(--font-poppins,sans-serif)", fontSize: 10,
                        fontWeight: 700, textTransform: "uppercase",
                        letterSpacing: "3px", color: "#F18C1B", margin: "0 0 12px",
                      }}>{v.label}</p>
                      <h3 style={{
                        fontFamily: "var(--font-montserrat,sans-serif)",
                        fontSize: "clamp(22px,1.8vw,30px)", fontWeight: 800,
                        textTransform: "uppercase", lineHeight: 1.05,
                        color: "#ffffff", margin: 0,
                      }}>{v.title}</h3>
                      {/* Hint animado */}
                      <div className="vflip-hint" style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-poppins,sans-serif)", fontSize: 10, color: "rgba(241,140,27,0.7)", letterSpacing: "1px" }}>
                          Ver más
                        </span>
                        <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                          <path d="M3 9h12M9 3l6 6-6 6" stroke="#F18C1B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="1"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* ── REVERSO: icono + desc ── */}
                  <div className="vflip-face vflip-back" style={{
                    background: "linear-gradient(145deg, #4a1a6e 0%, #331050 50%, #291231 100%)",
                    border: "1px solid rgba(241,140,27,0.28)",
                  }}>
                    {/* Orbe de glow (se mantiene para dar un toque de luz trasera) */}
                    <div className="vflip-glow" style={{
                      position: "absolute", top: "18%", left: "50%",
                      width: 90, height: 90, borderRadius: "50%",
                      background: "radial-gradient(circle,rgba(241,140,27,0.22) 0%,transparent 70%)",
                      pointerEvents: "none",
                    }} />
                    {/* Número top-right */}
                    <div style={{
                      position: "absolute", top: 16, right: 20,
                      fontFamily: "var(--font-montserrat,sans-serif)",
                      fontSize: 13, fontWeight: 800, color: "rgba(241,140,27,0.4)",
                    }}>{v.num}</div>
                    {/* Contenido centrado */}
                    <div style={{
                      position: "relative", zIndex: 10, height: "100%",
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center",
                      padding: "28px 24px", textAlign: "center",
                    }}>
                      {/* Caja del icono */}
                      <div style={{
                        width: 58, height: 58, borderRadius: 15,
                        background: "rgba(241,140,27,0.10)",
                        border: "1px solid rgba(241,140,27,0.38)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        marginBottom: 16,
                      }}>{v.icon}</div>
                      {/* Label */}
                      <p style={{
                        fontFamily: "var(--font-poppins,sans-serif)", fontSize: 9, fontWeight: 700,
                        textTransform: "uppercase", letterSpacing: "3px",
                        color: "#F18C1B", margin: "0 0 8px",
                      }}>{v.label}</p>
                      {/* Descripción */}
                      <p style={{
                        fontFamily: "var(--font-poppins,sans-serif)",
                        fontSize: 12.5, lineHeight: 1.75,
                        color: "rgba(255,255,255,0.78)", margin: 0,
                      }}>{v.desc}</p>
                    </div>
                    {/* Línea inferior */}
                    <div style={{
                      position: "absolute", bottom: 0, left: "15%", right: "15%", height: 2,
                      background: "linear-gradient(90deg,transparent,#F18C1B,transparent)",
                    }} />
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}