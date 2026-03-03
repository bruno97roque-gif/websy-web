"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MovingBorderButton } from "@/components/ui/moving-border-button";

/* ─── Orange icon wrapper ─── */
function OrangeIcon({
  src,
  imgSize = 42,
  circleSize,
}: {
  src: string;
  imgSize?: number;
  circleSize?: number;
}) {
  const sizeStyle = circleSize ? { width: circleSize, height: circleSize } : undefined;
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[#F18C1B] shadow-[0_0_20px_rgba(241,140,27,.5)] ${!circleSize ? "h-full w-full" : ""}`}
      style={sizeStyle}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" style={{ width: imgSize, height: imgSize }} className="object-contain" draggable={false} />
    </div>
  );
}

/* ─── Main Component ─── */
export default function HeroSection() {
  const pillRef  = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef  = useRef<HTMLParagraphElement>(null);
  const btnsRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ocultar elementos ANTES de que el DOM pinte para evitar el flash
    gsap.set([pillRef.current, titleRef.current, descRef.current, btnsRef.current], {
      opacity: 0,
    });

    const tl = gsap.timeline({ delay: 0.15 });
    tl.fromTo(pillRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .fromTo(titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.3")
      .fromTo(descRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
      .fromTo(btnsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-44px)] w-full items-center overflow-clip bg-[#180a1e]"
    >
      {/* ── VIDEO BG ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#180a1e] via-[#291231] to-[#3d1248]" />
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/video/Hero-Bg.webm" type="video/webm" />
        </video>
      </div>

      {/* ── GROUND IMAGE ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/hero-ground.webp" alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-[5] w-full select-none" />

      {/* ── OVERLAY ─────────────────────────────────────────────────────
           Usamos -inset-px para que tape 1px más allá de cada borde
           del section, eliminando cualquier raya de subpixel rendering.
           El section ya tiene bg-[#180a1e] como fallback de color.
      ──────────────────────────────────────────────────────────────── */}
      <div className="absolute -inset-px z-[1] bg-[#180a1e]/72" />
      {/* Gradiente estético adicional — más oscuro en los bordes */}
      <div className="absolute -inset-px z-[1] bg-[radial-gradient(ellipse_120%_100%_at_70%_50%,transparent_30%,rgba(24,10,30,0.55)_100%)]" />

      {/* animated grid */}
      <div className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(241,140,27,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,140,27,.05) 1px, transparent 1px)`,
          backgroundSize: "90px 90px",
          animation: "gridMove 24s linear infinite",
        }} />

      {/* orbs */}
      <div className="pointer-events-none absolute -top-20 right-[8%] z-[2] h-[520px] w-[520px] animate-[floatY_9s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(241,140,27,.22)_0%,transparent_70%)] blur-[90px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[3%] z-[2] h-[380px] w-[380px] animate-[floatY_7s_ease-in-out_infinite_reverse] rounded-full bg-[radial-gradient(circle,rgba(90,30,120,.45)_0%,transparent_70%)] blur-[90px]" />

      {/* ── CONTENT GRID ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-5 py-20 sm:px-8 md:grid-cols-[1.4fr_1fr] md:gap-6 md:px-[72px] md:py-0">

        {/* ──── LEFT ──── */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">

          {/* pill — inicia invisible, GSAP lo anima */}
          <div ref={pillRef}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F18C1B]/28 bg-[#F18C1B]/12 px-4 py-1.5">
            {/* Solo el punto hace ping, el badge queda estático */}
            <span className="relative flex h-[9px] w-[9px] shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
            </span>
            <span className="font-poppins text-[10px] font-medium uppercase tracking-[2px] text-[#F18C1B] sm:text-[11px]">
              Agencia Marketing · Lima, Perú
            </span>
          </div>

          <h1 ref={titleRef}
            className="font-montserrat mb-6 w-full text-[clamp(38px,7vw,94px)] font-bold leading-[.95] tracking-tight text-white">
            Tu marca en la<br />
            cima del Mundo<br />
            <span className="relative inline-block text-[#F18C1B]">Digital</span>
          </h1>

          <p ref={descRef}
            className="font-poppins mb-8 max-w-[480px] text-[14px] leading-[1.8] text-white/100 sm:text-[15px] md:mb-10">
            Diseño exclusivo, tecnología de vanguardia y estrategia real para que tu negocio se destaque y convierta.
          </p>

          <div ref={btnsRef} className="flex flex-wrap justify-center gap-4 md:justify-start">
            <ShimmerButton href="#servicios">
              Ver servicios
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ShimmerButton>
            <MovingBorderButton href="#contacto">Hablemos</MovingBorderButton>
          </div>
        </div>

        {/* ──── RIGHT — Orbiting + partner badges ──── */}
        <div className="hidden md:flex flex-col items-center justify-center gap-8">

          {/* ── Orbiting container ── */}
          <div className="relative h-[430px] w-[430px] lg:h-[660px] lg:w-[660px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-[740px] w-[740px] origin-center scale-[0.56] items-center justify-center lg:scale-[0.88]">

                {/* Centro: logo flotante */}
                <div className="relative z-10 flex h-64 w-64 animate-[floatY_8s_ease-in-out_infinite] items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/logo-hero.webp" alt="Websy"
                    className="h-full w-full object-contain"
                    draggable={false} />
                </div>

                {/* Anillo exterior — 4 iconos */}
                <OrbitingCircles radius={330} duration={30} iconSize={72} strokeWidth={2.5} pathClassName="stroke-white/18">
                  <OrangeIcon src="/icons/icono1-circle.webp" imgSize={46} />
                  <OrangeIcon src="/icons/icono2-circle.webp" imgSize={46} />
                  <OrangeIcon src="/icons/icono3-circle.webp" imgSize={46} />
                  <OrangeIcon src="/icons/icono4-circle.webp" imgSize={46} />
                </OrbitingCircles>

                {/* Anillo interior — 2 iconos + ovni GIF */}
                <OrbitingCircles radius={190} duration={14} reverse iconSize={90} strokeWidth={2.5} pathClassName="stroke-white/18">
                  <OrangeIcon src="/icons/icono5-circle.webp" imgSize={40} circleSize={66} />
                  <OrangeIcon src="/icons/icono6-circle.webp" imgSize={40} circleSize={66} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/remplazo-de-cohete-ovni.gif"
                    alt=""
                    className="h-[90px] w-[90px] object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,.6)]"
                    draggable={false}
                  />
                </OrbitingCircles>

              </div>
            </div>
          </div>

          {/* ── Partner badges — debajo, con más separación ── */}
          <div className="flex items-center gap-10 opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Google-partner.webp" alt="Google Partner"
              className="h-9 w-auto object-contain lg:h-11" draggable={false} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Shopify-partner.webp" alt="Shopify Partners"
              className="h-9 w-auto object-contain lg:h-11" draggable={false} />
          </div>

        </div>
      </div>

      {/* ── SCROLL HINT ── */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-poppins text-[10px] uppercase tracking-[2.5px] text-white/30">Scroll</span>
        {/* Mouse outline SVG */}
        <div className="relative flex h-[46px] w-[28px] items-start justify-center rounded-[14px] border-2 border-white/25 pt-[7px]">
          {/* Scrolling dot */}
          <div
            className="h-[7px] w-[2px] rounded-full bg-[#F18C1B]"
            style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
          />
        </div>
        {/* Chevron arrows */}
        <div className="flex flex-col items-center gap-[3px]" style={{ animation: "scrollChevron 1.8s ease-in-out infinite" }}>
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1l5 5 5-5" stroke="#F18C1B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
          </svg>
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1l5 5 5-5" stroke="#F18C1B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity=".4" />
          </svg>
        </div>
      </div>

    </section>
  );
}
