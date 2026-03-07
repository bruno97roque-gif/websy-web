"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* ── Gallery items — swap for real project photos later ── */
const GALLERY_ITEMS = [
  { id: 1, src: "/images/Imagen-ejemplo-galeria-nosotros.webp", alt: "Proyecto Websy 1", span: "col-span-2 row-span-2" },
  { id: 2, src: "/images/Imagen-ejemplo-galeria-nosotros.webp", alt: "Proyecto Websy 2", span: "col-span-1 row-span-1" },
  { id: 3, src: "/images/Imagen-ejemplo-galeria-nosotros.webp", alt: "Proyecto Websy 3", span: "col-span-1 row-span-1" },
  { id: 4, src: "/images/Imagen-ejemplo-galeria-nosotros.webp", alt: "Proyecto Websy 4", span: "col-span-1 row-span-1" },
  { id: 5, src: "/images/Imagen-ejemplo-galeria-nosotros.webp", alt: "Proyecto Websy 5", span: "col-span-1 row-span-1" },
  { id: 6, src: "/images/Imagen-ejemplo-galeria-nosotros.webp", alt: "Proyecto Websy 6", span: "col-span-2 row-span-1" },
];

/* ── Lightbox component ── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        backgroundColor: "rgba(10, 3, 20, 0.94)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        animation: "lbFadeIn 0.25s ease",
      }}
    >
      <style>{`
        @keyframes lbFadeIn { from { opacity:0; transform:scale(0.96) } to { opacity:1; transform:scale(1) } }
      `}</style>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Cerrar"
        style={{
          position: "absolute", top: 20, right: 20,
          width: 44, height: 44, borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "#fff", fontSize: 18,
          transition: "background 0.2s",
        }}
      >
        ✕
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "90vw", maxHeight: "85vh",
          width: "100%",
          borderRadius: 16, overflow: "hidden",
          boxShadow: "0 30px 100px rgba(0,0,0,0.7)",
          border: "1px solid rgba(241,140,27,0.2)",
          aspectRatio: "16/9",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="90vw"
          priority
        />
      </div>
    </div>
  );
}

/* ── Main Gallery ── */
export default function NosotrosGaleria() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headerRef   = useRef<HTMLDivElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const [lightbox,  setLightbox]  = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        }
      );
    }

    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".gallery-item");
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.92, y: 30 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.7, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-8 py-[80px] md:px-[72px] md:py-[100px]"
      style={{ backgroundColor: "#0d0616" }}
    >
      {/* Background glow orbs */}
      <div style={{
        position: "absolute", top: -120, left: "20%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(74,26,110,0.35) 0%, transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -80, right: "10%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(241,140,27,0.08) 0%, transparent 65%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(241,140,27,.03) 1px,transparent 1px),
                          linear-gradient(90deg,rgba(241,140,27,.03) 1px,transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

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

        {/* ── Masonry Grid ── */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "240px 240px",
            gap: 12,
          }}
          className="gallery-grid"
        >
          {/* Item 1 — large (2×2) */}
          <GalleryItem
            item={GALLERY_ITEMS[0]}
            style={{ gridColumn: "1 / span 2", gridRow: "1 / span 2" }}
            onOpen={setLightbox}
          />
          {/* Item 2 */}
          <GalleryItem
            item={GALLERY_ITEMS[1]}
            style={{ gridColumn: "3 / span 1", gridRow: "1 / span 1" }}
            onOpen={setLightbox}
          />
          {/* Item 3 */}
          <GalleryItem
            item={GALLERY_ITEMS[2]}
            style={{ gridColumn: "4 / span 1", gridRow: "1 / span 1" }}
            onOpen={setLightbox}
          />
          {/* Item 4 — wide bottom right (2×1) */}
          <GalleryItem
            item={GALLERY_ITEMS[5]}
            style={{ gridColumn: "3 / span 2", gridRow: "2 / span 1" }}
            onOpen={setLightbox}
          />
        </div>

        {/* ── Mobile grid (simple 2-col) ── */}
        <div
          className="gallery-grid-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 10,
          }}
        >
          {GALLERY_ITEMS.slice(0, 4).map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              style={{ gridColumn: "auto", gridRow: "auto", height: 160 }}
              onOpen={setLightbox}
            />
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Hide/show grid responsive */}
      <style>{`
        .gallery-grid        { display: grid; }
        .gallery-grid-mobile { display: none; }
        @media (max-width: 767px) {
          .gallery-grid        { display: none; }
          .gallery-grid-mobile { display: grid; }
        }
      `}</style>
    </section>
  );
}

/* ── Individual gallery item ── */
function GalleryItem({
  item,
  style,
  onOpen,
}: {
  item: (typeof GALLERY_ITEMS)[0];
  style?: React.CSSProperties;
  onOpen: (img: { src: string; alt: string }) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="gallery-item"
      onClick={() => onOpen({ src: item.src, alt: item.alt })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: 14, overflow: "hidden",
        cursor: "pointer",
        border: `1px solid ${hovered ? "rgba(241,140,27,0.45)" : "rgba(255,255,255,0.06)"}`,
        boxShadow: hovered
          ? "0 0 0 1px rgba(241,140,27,0.2), 0 24px 60px rgba(0,0,0,0.5)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        transform: hovered ? "scale(1.015)" : "scale(1)",
        transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s, border-color 0.4s",
        opacity: 0, // GSAP will animate this in
        ...style,
      }}
    >
      {/* Image */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        loading="lazy"
        style={{
          objectFit: "cover",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
        }}
        sizes="(max-width: 768px) 50vw, 33vw"
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: hovered
          ? "linear-gradient(180deg, transparent 30%, rgba(10,3,20,0.85) 100%)"
          : "linear-gradient(180deg, transparent 50%, rgba(10,3,20,0.5) 100%)",
        transition: "background 0.4s",
      }} />

      {/* Hover reveal: label + zoom icon */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "16px 18px",
        transform: hovered ? "translateY(0)" : "translateY(8px)",
        opacity: hovered ? 1 : 0,
        transition: "transform 0.35s, opacity 0.35s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{
          fontFamily: "var(--font-poppins, sans-serif)",
          fontSize: 11, fontWeight: 600, color: "#F18C1B",
          textTransform: "uppercase", letterSpacing: "2px",
        }}>
          {item.alt}
        </span>
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          backgroundColor: "rgba(241,140,27,0.15)",
          border: "1px solid rgba(241,140,27,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
            <path d="M7 3H3v4M15 11v4h-4M3 3l12 12M15 3L3 15" stroke="#F18C1B" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Corner accent */}
      <div style={{
        position: "absolute", top: 12, right: 12,
        width: 6, height: 6, borderRadius: "50%",
        backgroundColor: "#F18C1B",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
      }} />
    </div>
  );
}
