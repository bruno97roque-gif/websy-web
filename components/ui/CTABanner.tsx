"use client";

import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

interface CTABannerProps {
  image?: React.ReactNode;
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export default function CTABanner({
  image,
  title = (
    <>
      Las grandes marcas no nacen.
      <br />
      Se construyen.
    </>
  ),
  description = "En Websy combinamos estrategia, creatividad y datos para transformar ideas en crecimiento real y sostenible.",
  buttonText = "Ver Servicios",
  buttonHref = "/servicios",
  className = "",
}: CTABannerProps) {
  const isExternal = buttonHref?.startsWith("http");


  const placeholder = (
    <div style={{ width: 140, height: 140, border: "2px dashed rgba(255,255,255,0.3)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.3)", fontSize: 11 }}>
      imagen
    </div>
  );

  return (
    <section className={`px-8 py-10 md:px-[72px] md:py-[40px] ${className}`} style={{ backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto" }}>
        <div style={{ position: "relative", overflow: "hidden", borderRadius: 20, backgroundImage: "url('/images/fondo-tarjeta-footer.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#1c0a30" }}>

          {/* Overlay */}
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(28, 10, 48, 0.80)" }} />

          {/* ── DESKTOP (md+) ── */}
          <div className="hidden md:flex" style={{ position: "relative", zIndex: 10, alignItems: "stretch" }}>

            {/* Alien */}
            <div style={{ flexShrink: 0, display: "flex", alignItems: "flex-end", paddingLeft: 140 }}>
              {image ?? placeholder}
            </div>

            {/* Texto */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 40, paddingBottom: 70, paddingLeft: 50 }}>
              <h2 className="font-montserrat font-bold text-white" style={{ fontSize: "clamp(24px, 2.6vw, 42px)", lineHeight: 1.1, margin: 0, letterSpacing: "-0.02em" }}>
                {title}
              </h2>
              <p className="font-poppins" style={{ marginTop: 12, maxWidth: 460, fontSize: 16, lineHeight: 1.75, color: "#fff" }}>
                {description}
              </p>
            </div>

            {/* Botón abajo derecha */}
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 50, paddingRight: 60, paddingTop: 40 }}>
              <ShimmerButton href={buttonHref} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>{buttonText}
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </ShimmerButton>
            </div>

          </div>

          {/* ── MÓVIL (<md) ── */}
          <div className="flex md:hidden" style={{ position: "relative", zIndex: 10, flexDirection: "column", alignItems: "center" }}>

            {/* Texto */}
            <div style={{ width: "100%", padding: "60px 40px 16px", textAlign: "center" }}>
              <h2 className="font-montserrat font-bold text-white" style={{ fontSize: 28, lineHeight: 1.1, margin: 0, letterSpacing: "-0.02em" }}>
                {title}
              </h2>
              <p className="font-poppins" style={{ marginTop: 12, fontSize: 15, lineHeight: 1.75, color: "#fff" }}>
                {description}
              </p>
            </div>

            {/* Botón — inline styles para garantizar tamaño compacto en móvil */}
            <div style={{ paddingBottom: 28, textAlign: "center" }}>
              <a
                href={buttonHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#F18C1B",
                  color: "#291231",
                  fontFamily: "var(--font-montserrat, sans-serif)",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: 9999,
                  whiteSpace: "nowrap",
                }}
              >
                {buttonText}
                <svg width="13" height="13" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>

            {/* Alien más pequeño */}
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <div style={{ width: 130 }}>
                {image ?? placeholder}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
