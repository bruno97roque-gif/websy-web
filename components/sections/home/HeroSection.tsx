"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MovingBorderButton } from "@/components/ui/moving-border-button";

/* ─── Main Component ─── */
export default function HeroSection() {
  const pillRef  = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef  = useRef<HTMLParagraphElement>(null);
  const btnsRef  = useRef<HTMLDivElement>(null);

  /* ─── GSAP intro ─── */
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.25 });
    tl.from(pillRef.current,  { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
      .from(titleRef.current, { opacity: 0, y: 60, duration: 1,   ease: "power3.out" }, "-=0.3")
      .from(descRef.current,  { opacity: 0, y: 30, duration: 0.7, ease: "power3.out" }, "-=0.5")
      .from(btnsRef.current,  { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.4");
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-44px)] w-full items-center overflow-hidden"
    >
      {/* ── VIDEO BG ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#180a1e] via-[#291231] to-[#3d1248]" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/Hero-Bg.webm" type="video/webm" />
        </video>
      </div>

      {/* ── GROUND IMAGE (anchored to bottom, above video) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-ground.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-[5] w-full select-none"
      />

      {/* ── OVERLAY ─ mobile: cubre toda la pantalla / desktop: gradiente direccional ── */}
      <div className="absolute inset-0 z-[1] bg-[#180a1e]/80 md:bg-gradient-to-r md:from-[#180a1e]/78 md:via-[#291231]/55 md:to-[#180a1e]/35" />

      {/* animated grid */}
      <div
        className="hero-grid pointer-events-none absolute inset-0 z-[2]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(241,140,27,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,140,27,.05) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
          animation: "gridMove 24s linear infinite",
        }}
      />

      {/* orbs */}
      <div className="orb-a pointer-events-none absolute -top-20 right-[8%] z-[2] h-[520px] w-[520px] animate-[floatY_9s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(241,140,27,.22)_0%,transparent_70%)] blur-[90px]" />
      <div className="orb-b pointer-events-none absolute bottom-[5%] left-[3%] z-[2] h-[380px] w-[380px] animate-[floatY_7s_ease-in-out_infinite_reverse] rounded-full bg-[radial-gradient(circle,rgba(90,30,120,.45)_0%,transparent_70%)] blur-[90px]" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr] md:gap-10 md:px-[72px] md:py-0">

        {/* LEFT */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">

          {/* pill */}
          <div
            ref={pillRef}
            className="badge-pulse mb-6 inline-flex items-center gap-2 rounded-full border border-[#F18C1B]/28 bg-[#F18C1B]/12 px-4 py-1.5"
          >
            <span className="h-[7px] w-[7px] animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
            <span className="font-poppins text-[10px] font-medium uppercase tracking-[2px] text-[#F18C1B] sm:text-[11px]">
              Agencia Marketing · Lima, Perú
            </span>
          </div>

          {/* heading */}
          <h1
            ref={titleRef}
            className="font-montserrat mb-6 w-full text-[clamp(38px,7vw,94px)] font-bold leading-[.95] tracking-tight text-white"
          >
            Tu marca en la<br />
            cima del Mundo<br />
            <span className="relative inline-block text-[#F18C1B]">
              Digital
            </span>
          </h1>

          <p
            ref={descRef}
            className="font-poppins mb-8 max-w-[480px] text-[14px] leading-[1.8] text-white/55 sm:text-[15px] md:mb-10"
          >
            Diseño exclusivo, tecnología de vanguardia y estrategia real para que tu negocio se destaque y convierta.
          </p>

          {/* buttons */}
          <div ref={btnsRef} className="flex flex-wrap justify-center gap-4 md:justify-start">
            <ShimmerButton href="#servicios">
              Ver servicios
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ShimmerButton>

            <MovingBorderButton href="#contacto">
              Hablemos
            </MovingBorderButton>
          </div>
        </div>

        {/* RIGHT — Orbiting circles (oculto en mobile, escalado en tablet) */}
        <div className="hidden md:flex items-center justify-center">
          {/* Wrapper que reduce tamaño en tablet y lo pone full en desktop */}
          <div className="relative h-[400px] w-[400px] lg:h-[620px] lg:w-[620px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-[620px] w-[620px] origin-center scale-[0.65] items-center justify-center lg:scale-100">

                {/* Center: Websy logo */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo-hero.webp"
                    alt="Websy"
                    className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(241,140,27,.5)]"
                    draggable={false}
                  />
                </div>

                {/* Outer ring — 4 icons, radius 260 */}
                <OrbitingCircles radius={260} duration={22} iconSize={52}>
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#21759b] text-[11px] font-black text-white shadow-lg">WP</div>
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#96bf48] text-[11px] font-black text-white shadow-lg">SH</div>
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#a259ff] text-[11px] font-black text-white shadow-lg">Fi</div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/icon-orbit.webp"
                    alt=""
                    className="h-[52px] w-[52px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,.4)]"
                    draggable={false}
                  />
                </OrbitingCircles>

                {/* Inner ring — 3 icons, radius 155, reverse */}
                <OrbitingCircles radius={155} duration={14} reverse iconSize={46}>
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#F18C1B] text-[11px] font-black text-[#291231] shadow-lg">G</div>
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-white/10 text-[11px] font-black text-white shadow-lg backdrop-blur-sm">N↗</div>
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#0668e1] text-[11px] font-black text-white shadow-lg">M</div>
                </OrbitingCircles>

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── SCROLL HINT — oculto en mobile para no saturar ── */}
      <div className="absolute bottom-9 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-poppins text-[10px] uppercase tracking-[2.5px] text-white/35">Scroll</span>
        <div
          className="h-14 w-px"
          style={{
            background: "linear-gradient(to bottom, #F18C1B, transparent)",
            animation: "sline 2.2s ease-in-out infinite",
          }}
        />
      </div>

    </section>
  );
}
