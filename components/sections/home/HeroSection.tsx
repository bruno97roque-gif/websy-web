"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

/* ─── Types ─── */
interface GlassCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

/* ─── Data ─── */
const cards: GlassCardProps[] = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width={26} height={26}>
        <path d="M8 24L18 8l8 13 5-7 6 11" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="6" r="3" stroke="#F18C1B" strokeWidth="2" />
      </svg>
    ),
    title: "Branding",
    desc: "Identidad visual que posiciona tu marca con fuerza.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width={26} height={26}>
        <rect x="3" y="5" width="26" height="20" rx="3" stroke="#F18C1B" strokeWidth="2" />
        <path d="M3 11h26" stroke="#F18C1B" strokeWidth="2" />
        <circle cx="7.5" cy="8" r="1" fill="#F18C1B" />
        <circle cx="11" cy="8" r="1" fill="#F18C1B" />
      </svg>
    ),
    title: "Webs & Tiendas Virtuales",
    desc: "Sitios y e-commerce que convierten visitas en clientes.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" width={26} height={26}>
        <circle cx="13" cy="13" r="8" stroke="#F18C1B" strokeWidth="2" />
        <path d="M19 19l7 7" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 13h6M13 10v6" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Google Ads & SEO",
    desc: "Aparece primero. Atrae tráfico calificado y multiplica tu ROI.",
  },
];

/* ─── GlassCard ─── */
function GlassCard({ icon, title, desc }: GlassCardProps) {
  return (
    <div className="glass-card group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:translate-x-2 hover:bg-white/10">
      <div className="gc-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F18C1B]/15">
        {icon}
      </div>
      <div>
        <p className="font-montserrat text-[15px] font-extrabold text-white">{title}</p>
        <p className="font-poppins text-[12px] leading-relaxed text-white/50">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function HeroSection() {
  const pillRef  = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef  = useRef<HTMLParagraphElement>(null);
  const btnsRef  = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  /* ─── Draggable float state ─── */
  const [floatPos, setFloatPos] = useState({ x: 60, y: 420 });
  const isDragging  = useRef(false);
  const dragOffset  = useRef({ x: 0, y: 0 });

  /* ─── GSAP intro ─── */
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.25 });
    tl.from(pillRef.current,  { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
      .from(titleRef.current, { opacity: 0, y: 60, duration: 1,   ease: "power3.out" }, "-=0.3")
      .from(descRef.current,  { opacity: 0, y: 30, duration: 0.7, ease: "power3.out" }, "-=0.5")
      .from(btnsRef.current,  { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .from(
        cardsRef.current ? Array.from(cardsRef.current.children) : [],
        { opacity: 0, x: 50, duration: 0.6, stagger: 0.15, ease: "power3.out" },
        "-=0.5"
      );
  }, []);

  /* ─── Drag events ─── */
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      setFloatPos({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };
    const onMouseUp = () => { isDragging.current = false; };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onFloatMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragOffset.current = { x: e.clientX - floatPos.x, y: e.clientY - floatPos.y };
    e.preventDefault();
  };

  return (
    <section
      id="hero"
      className="relative flex h-[calc(100vh-44px)] min-h-[640px] w-full items-center overflow-hidden"
    >
      {/* ── VIDEO BG ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/video/Hero-Bg.webm" type="video/webm" />
        </video>
        {/* fallback gradient if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#180a1e] via-[#291231] to-[#3d1248]" />
      </div>

      {/* ── GROUND IMAGE (above video, anchored to bottom) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-ground.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 z-[5] w-full select-none"
      />

      {/* ── OVERLAYS ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#180a1e]/92 via-[#291231]/78 to-[#291231]/45" />

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
      <div className="relative z-10 mx-auto grid w-full max-w-[1260px] grid-cols-1 items-center gap-14 px-8 md:grid-cols-2 md:px-[72px]">

        {/* LEFT */}
        <div>
          {/* pill */}
          <div
            ref={pillRef}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F18C1B]/28 bg-[#F18C1B]/12 px-4 py-1.5"
          >
            <span className="h-[7px] w-[7px] animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-[#F18C1B]" />
            <span className="font-poppins text-[11px] font-medium uppercase tracking-[2px] text-[#F18C1B]">
              Agencia Marketing · Lima, Perú
            </span>
          </div>

          {/* heading */}
          <h1
            ref={titleRef}
            className="font-montserrat mb-6 text-[clamp(42px,6vw,78px)] font-black leading-[.97] tracking-tight text-white"
          >
            Tu marca en la<br />
            cima del Mundo<br />
            <span className="relative inline-block text-[#F18C1B]">
              Digital
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 240 8"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 5 Q60 1 120 5 Q180 9 238 5"
                  stroke="#F18C1B"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            ref={descRef}
            className="font-poppins mb-10 max-w-[460px] text-[15px] leading-[1.8] text-white/55"
          >
            Diseño exclusivo, tecnología de vanguardia y estrategia real para que tu negocio se destaque y convierta.
          </p>

          {/* buttons */}
          <div ref={btnsRef} className="flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="btn-y group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#F18C1B] px-9 py-4 font-montserrat text-[13px] font-black uppercase tracking-[1.5px] text-[#291231] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(241,140,27,.4)]"
            >
              Ver servicios
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-montserrat text-[13px] font-bold uppercase tracking-[1.5px] text-white backdrop-blur-md transition-all duration-300 hover:border-[#F18C1B] hover:bg-[#F18C1B]/10"
            >
              Hablemos →
            </a>
          </div>
        </div>

        {/* RIGHT — Orbiting circles */}
        <div className="flex flex-col items-center gap-6">

          {/* Magic UI Orbiting Circles — 7 icons, white rings */}
          <div className="relative mb-4 flex h-[340px] w-[340px] items-center justify-center">

            {/* Center: Websy logo image */}
            <div className="relative z-10 flex h-24 w-24 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-hero.webp"
                alt="Websy"
                className="h-full w-full object-contain drop-shadow-[0_0_30px_rgba(241,140,27,.5)]"
                draggable={false}
              />
            </div>

            {/* Outer ring — 4 icons, radius 155 */}
            <OrbitingCircles radius={155} duration={22} iconSize={40}>
              {/* WordPress */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#21759b] text-[10px] font-black text-white shadow-lg">
                WP
              </div>
              {/* Shopify */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#96bf48] text-[10px] font-black text-white shadow-lg">
                SH
              </div>
              {/* Figma */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#a259ff] text-[10px] font-black text-white shadow-lg">
                Fi
              </div>
              {/* BARE WEBP icon — sin fondo, solo la imagen */}
              {/* Coloca tu icono en /public/icons/icon-orbit.webp */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/icon-orbit.webp"
                alt=""
                className="h-10 w-10 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,.4)]"
                draggable={false}
              />
            </OrbitingCircles>

            {/* Inner ring — 3 icons, radius 95, reverse */}
            <OrbitingCircles radius={95} duration={14} reverse iconSize={34}>
              {/* Google */}
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-xl bg-[#F18C1B] text-[10px] font-black text-[#291231] shadow-lg">
                G
              </div>
              {/* Next.js */}
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-xl bg-white/10 text-[10px] font-black text-white shadow-lg backdrop-blur-sm">
                N↗
              </div>
              {/* Meta Ads */}
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-xl bg-[#0668e1] text-[10px] font-black text-white shadow-lg">
                M
              </div>
            </OrbitingCircles>
          </div>

          {/* Glass cards */}
          <div ref={cardsRef} className="flex w-full flex-col gap-3">
            {cards.map((c) => (
              <GlassCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>

      {/* ── SCROLL HINT ── */}
      <div className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-poppins text-[10px] uppercase tracking-[2.5px] text-white/35">Scroll</span>
        <div
          className="h-14 w-px"
          style={{
            background: "linear-gradient(to bottom, #F18C1B, transparent)",
            animation: "sline 2.2s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── DRAGGABLE FLOATING IMAGE ── */}
      {/* Coloca tu imagen en /public/images/hero-float.webp */}
      <div
        style={{
          position: "fixed",
          left: floatPos.x,
          top: floatPos.y,
          zIndex: 9000,
          cursor: "grab",
          userSelect: "none",
          touchAction: "none",
        }}
        onMouseDown={onFloatMouseDown}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-float.webp"
          alt=""
          style={{ width: 130, pointerEvents: "none" }}
          draggable={false}
        />
      </div>
    </section>
  );
}
