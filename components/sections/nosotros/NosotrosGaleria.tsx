"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* ── 9 gallery items — swap src for real photos later ── */
const GALLERY_ITEMS = [
  { id: 1,  src: "/images/Imagen-ejemplo-galeria-nosotros.webp", label: "Identidad Visual" },
  { id: 2,  src: "/images/Imagen-ejemplo-galeria-nosotros.webp", label: "Diseño Web" },
  { id: 3,  src: "/images/Imagen-ejemplo-galeria-nosotros.webp", label: "E-commerce" },
  { id: 4,  src: "/images/Imagen-ejemplo-galeria-nosotros.webp", label: "Google Ads" },
  { id: 5,  src: "/images/Imagen-ejemplo-galeria-nosotros.webp", label: "Branding" },
  { id: 6,  src: "/images/Imagen-ejemplo-galeria-nosotros.webp", label: "Social Media" },
  { id: 7,  src: "/images/Imagen-ejemplo-galeria-nosotros.webp", label: "SEO" },
  { id: 8,  src: "/images/Imagen-ejemplo-galeria-nosotros.webp", label: "Landing Page" },
  { id: 9,  src: "/images/Imagen-ejemplo-galeria-nosotros.webp", label: "Estrategia Digital" },
];

/* ── Premium Lightbox with keyboard & arrow navigation ── */
function Lightbox({
  items,
  currentIndex,
  onClose,
  onChangeIndex,
}: {
  items: typeof GALLERY_ITEMS;
  currentIndex: number;
  onClose: () => void;
  onChangeIndex: (i: number) => void;
}) {
  const item   = items[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast  = currentIndex === items.length - 1;

  const goPrev = useCallback(() => { if (!isFirst) onChangeIndex(currentIndex - 1); }, [isFirst, currentIndex, onChangeIndex]);
  const goNext = useCallback(() => { if (!isLast)  onChangeIndex(currentIndex + 1); }, [isLast,  currentIndex, onChangeIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        backgroundColor: "rgba(5, 1, 12, 0.96)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px 60px",
        animation: "lbIn 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <style>{`
        @keyframes lbIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes lbImg { from { opacity:0; transform:scale(0.94) } to { opacity:1; transform:scale(1) } }
      `}</style>

      {/* ── Prev button ── */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        disabled={isFirst}
        aria-label="Anterior"
        style={{
          position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
          width: 48, height: 48, borderRadius: "50%",
          backgroundColor: isFirst ? "rgba(255,255,255,0.04)" : "rgba(241,140,27,0.15)",
          border: `1px solid ${isFirst ? "rgba(255,255,255,0.08)" : "rgba(241,140,27,0.45)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: isFirst ? "default" : "pointer",
          opacity: isFirst ? 0.3 : 1,
          transition: "background 0.2s, opacity 0.2s",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 4L6 9l5 5" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* ── Next button ── */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        disabled={isLast}
        aria-label="Siguiente"
        style={{
          position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
          width: 48, height: 48, borderRadius: "50%",
          backgroundColor: isLast ? "rgba(255,255,255,0.04)" : "rgba(241,140,27,0.15)",
          border: `1px solid ${isLast ? "rgba(255,255,255,0.08)" : "rgba(241,140,27,0.45)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: isLast ? "default" : "pointer",
          opacity: isLast ? 0.3 : 1,
          transition: "background 0.2s, opacity 0.2s",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 4l5 5-5 5" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* ── Image frame ── */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "min(88vw, 1100px)",
          maxHeight: "80vh",
          width: "100%",
          borderRadius: 18, overflow: "hidden",
          boxShadow: "0 0 0 1px rgba(241,140,27,0.18), 0 40px 120px rgba(0,0,0,0.8)",
          aspectRatio: "16/9",
          animation: "lbImg 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <Image
          key={item.id}
          src={item.src}
          alt={item.label}
          fill
          style={{ objectFit: "cover" }}
          sizes="min(88vw, 1100px)"
          priority
        />

        {/* ── Gradient bottom overlay ── */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
          background: "linear-gradient(0deg, rgba(5,1,12,0.85) 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        {/* ── Label + counter bottom-left ── */}
        <div style={{
          position: "absolute", bottom: 18, left: 22,
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <span style={{
            fontFamily: "var(--font-montserrat, sans-serif)",
            fontSize: 13, fontWeight: 700, color: "#fff",
            textTransform: "uppercase", letterSpacing: "1.5px",
          }}>
            {item.label}
          </span>
          <span style={{
            fontFamily: "var(--font-poppins, sans-serif)",
            fontSize: 11, color: "rgba(241,140,27,0.7)",
          }}>
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        {/* ── Close button top-right INSIDE image ── */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          aria-label="Cerrar"
          style={{
            position: "absolute", top: 14, right: 14,
            width: 36, height: 36, borderRadius: "50%",
            backgroundColor: "rgba(10,3,20,0.65)",
            border: "1px solid rgba(241,140,27,0.4)",
            boxShadow: "0 0 14px rgba(241,140,27,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="#F18C1B" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {/* ── Dot navigation bottom-right ── */}
        <div style={{
          position: "absolute", bottom: 20, right: 18,
          display: "flex", gap: 6, alignItems: "center",
        }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); onChangeIndex(i); }}
              style={{
                width: i === currentIndex ? 18 : 6,
                height: 6, borderRadius: 3,
                backgroundColor: i === currentIndex ? "#F18C1B" : "rgba(255,255,255,0.3)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "width 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Keyboard hint ── */}
      <div style={{
        position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 12, alignItems: "center",
        fontFamily: "var(--font-poppins,sans-serif)", fontSize: 11,
        color: "rgba(255,255,255,0.28)",
      }}>
        <span>← → navegar</span>
        <span style={{ color: "rgba(255,255,255,0.12)" }}>|</span>
        <span>Esc cerrar</span>
      </div>
    </div>
  );
}

/* ── Main Gallery ── */
export default function NosotrosGaleria() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headerRef   = useRef<HTMLDivElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true } }
      );
    }
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".g-item");
      gsap.fromTo(items,
        { opacity: 0, scale: 0.92, y: 28 },
        { opacity: 1, scale: 1, y: 0, duration: 0.65, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true } }
      );
    }
  }, []);

  /* ── Desktop layout: 4 cols × 4 rows ── */
  const DESKTOP_LAYOUT: React.CSSProperties[] = [
    { gridColumn: "1/3", gridRow: "1/3" },   // 1: big 2×2
    { gridColumn: "3/4", gridRow: "1/2" },   // 2: small
    { gridColumn: "4/5", gridRow: "1/3" },   // 3: tall 1×2
    { gridColumn: "3/4", gridRow: "2/3" },   // 4: small
    { gridColumn: "1/3", gridRow: "3/4" },   // 5: wide 2×1
    { gridColumn: "3/4", gridRow: "3/4" },   // 6: small
    { gridColumn: "1/2", gridRow: "4/5" },   // 7: small
    { gridColumn: "2/4", gridRow: "4/5" },   // 8: wide 2×1
    { gridColumn: "4/5", gridRow: "3/5" },   // 9: tall 1×2
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-8 py-[80px] md:px-[72px] md:py-[100px]"
      style={{ backgroundColor: "#0d0616" }}
    >
      {/* ── CSS for shine and grid ── */}
      <style>{`
        /* Gallery grid responsive show/hide */
        .g-desktop { display: grid; }
        .g-mobile  { display: none; }
        @media (max-width: 767px) {
          .g-desktop { display: none; }
          .g-mobile  { display: grid; }
        }

        /* Shine sweep animation on hover */
        @keyframes gShine {
          0%   { transform: translateX(-130%) skewX(-18deg); }
          100% { transform: translateX(230%)  skewX(-18deg); }
        }
        .g-item:hover .g-shine {
          animation: gShine 0.65s ease forwards;
        }
        /* Scale image on hover */
        .g-item:hover .g-img {
          transform: scale(1.07) !important;
        }
        /* Orange border glow on hover */
        .g-item:hover {
          border-color: rgba(241,140,27,0.5) !important;
          box-shadow: 0 0 0 1px rgba(241,140,27,0.15), 0 20px 60px rgba(0,0,0,0.55) !important;
        }
      `}</style>

      {/* Background glow orbs */}
      <div style={{ position:"absolute", top:-100, left:"15%", width:500, height:500, borderRadius:"50%",
        background:"radial-gradient(circle,rgba(74,26,110,0.3) 0%,transparent 65%)", filter:"blur(80px)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", bottom:-60, right:"8%", width:360, height:360, borderRadius:"50%",
        background:"radial-gradient(circle,rgba(241,140,27,0.07) 0%,transparent 65%)", filter:"blur(70px)", pointerEvents:"none" }}/>

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage:`linear-gradient(rgba(241,140,27,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(241,140,27,.03) 1px,transparent 1px)`,
        backgroundSize:"60px 60px",
      }}/>

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-[52px]" style={{ opacity: 0 }}>
          <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
            Nuestro trabajo
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-montserrat text-[clamp(28px,3.2vw,46px)] font-bold leading-[1.1] tracking-tight text-white">
              Proyectos que{" "}
              <span className="text-[#F18C1B]">hablan por sí solos</span>
            </h2>
            <p className="font-poppins max-w-[380px] text-[14px] leading-[1.85] text-white/60 md:text-right">
              Cada proyecto es una historia de transformación. Aquí algunos de los resultados que hemos entregado.
            </p>
          </div>
        </div>

        {/* ── Desktop masonry grid ── */}
        <div
          ref={gridRef}
          className="g-desktop"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "210px 210px 200px 155px",
            gap: 10,
          }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryItem
              key={item.id}
              item={item}
              index={i}
              style={DESKTOP_LAYOUT[i]}
              onOpen={setLightboxIndex}
            />
          ))}
        </div>

        {/* ── Mobile grid: 2 cols, all items ── */}
        <div
          className="g-mobile"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 8,
          }}
        >
          {GALLERY_ITEMS.map((item, i) => (
            <GalleryItem
              key={item.id}
              item={item}
              index={i}
              style={{ height: 150 }}
              onOpen={setLightboxIndex}
            />
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChangeIndex={setLightboxIndex}
        />
      )}
    </section>
  );
}

/* ── Single gallery item ── */
function GalleryItem({
  item,
  index,
  style,
  onOpen,
}: {
  item: (typeof GALLERY_ITEMS)[0];
  index: number;
  style?: React.CSSProperties;
  onOpen: (i: number) => void;
}) {
  return (
    <div
      className="g-item"
      onClick={() => onOpen(index)}
      style={{
        position: "relative",
        borderRadius: 13, overflow: "hidden",
        cursor: "pointer",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        opacity: 0, // GSAP animates to 1
        transition: "border-color 0.35s, box-shadow 0.35s",
        ...style,
      }}
    >
      {/* Image */}
      <Image
        src={item.src}
        alt={item.label}
        fill
        loading="lazy"
        className="g-img"
        style={{
          objectFit: "cover",
          transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
        sizes="(max-width: 767px) 50vw, 25vw"
      />

      {/* ── Shine beam (triggered by CSS .g-item:hover .g-shine) ── */}
      <div
        className="g-shine"
        style={{
          position: "absolute", inset: 0, overflow: "hidden",
          pointerEvents: "none", zIndex: 3,
          background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)",
          transform: "translateX(-130%) skewX(-18deg)",
        }}
      />

      {/* Dark gradient overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(180deg, transparent 40%, rgba(5,1,12,0.72) 100%)",
        transition: "opacity 0.35s",
      }} />

      {/* Label bottom-left */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 4,
        padding: "12px 14px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{
          fontFamily: "var(--font-poppins, sans-serif)",
          fontSize: 10, fontWeight: 600, color: "#F18C1B",
          textTransform: "uppercase", letterSpacing: "1.5px",
          opacity: 0.9,
        }}>
          {item.label}
        </span>
        {/* Expand icon */}
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          backgroundColor: "rgba(241,140,27,0.12)",
          border: "1px solid rgba(241,140,27,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
            <path d="M6 2H2v4M14 10v4h-4M2 2l12 12" stroke="#F18C1B" strokeWidth="1.7" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
