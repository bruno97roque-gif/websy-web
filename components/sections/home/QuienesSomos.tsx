"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountUp } from "countup.js";
import * as Accordion from "@radix-ui/react-accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { type Swiper as SwiperType } from "swiper";
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

/* ─── Contenido accordion ─── */
const pillars = [
  {
    id: "p1",
    title: "Diseño exclusivo y a medida",
    content:
      "Cada proyecto es único. Trabajamos desde el concepto hasta el pixel perfecto, adaptando cada elemento visual a la identidad y visión de tu marca.",
  },
  {
    id: "p2",
    title: "Tecnología de vanguardia",
    content:
      "WordPress, Shopify, Next.js — las plataformas más potentes para construir soluciones escalables, rápidas y optimizadas para SEO desde el primer día.",
  },
  {
    id: "p3",
    title: "Resultados medibles y crecimiento",
    content:
      "Implementamos analítica desde el inicio para que veas el impacto real de tu inversión. Cada acción tiene un propósito medible y orientado a tu negocio.",
  },
];

/* ─── Slides del carrusel — reemplaza `bg` por src de imagen cuando estén listas ─── */
const slides = [
  { bg: "linear-gradient(145deg,#291231 0%,#3d1248 100%)", label: "Identidad de Marca",    stat: "01", tag: "Branding" },
  { bg: "linear-gradient(145deg,#1a0d20 0%,#291231 100%)", label: "Web & E-commerce",       stat: "02", tag: "Desarrollo" },
  { bg: "linear-gradient(145deg,#200e2a 0%,#3d1248 100%)", label: "Campañas Google Ads",    stat: "03", tag: "Marketing" },
  { bg: "linear-gradient(145deg,#291231 0%,#1a0d20 100%)", label: "Social Media",           stat: "04", tag: "Redes Sociales" },
  { bg: "linear-gradient(145deg,#3d1248 0%,#200e2a 100%)", label: "Estrategia Digital",     stat: "05", tag: "Consultoría" },
];

export default function QuienesSomos() {
  const sectionRef  = useRef<HTMLElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const badgeNumRef = useRef<HTMLSpanElement>(null);
  const labelRef    = useRef<HTMLParagraphElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const descRef     = useRef<HTMLParagraphElement>(null);
  const accordRef   = useRef<HTMLDivElement>(null);
  const ctaRef      = useRef<HTMLAnchorElement>(null);

  /* Swiper control manual */
  const swiperRef  = useRef<SwiperType | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const trigger = { trigger: sectionRef.current, start: "top 72%", once: true };

    /* ── Left: slide desde la izquierda ── */
    if (leftRef.current) {
      gsap.set(leftRef.current, { opacity: 0, x: -50 });
      gsap.to(leftRef.current, {
        opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: trigger,
      });
    }

    /* ── Right: stagger hacia arriba ── */
    const rightEls = [
      labelRef.current,
      titleRef.current,
      descRef.current,
      accordRef.current,
      ctaRef.current,
    ];
    rightEls.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 32 });
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.7, delay: i * 0.11,
        ease: "power3.out", scrollTrigger: trigger,
      });
    });

    /* ── CountUp: 0 → 5+ ── */
    if (badgeNumRef.current) {
      const cu = new CountUp(badgeNumRef.current, 5, {
        suffix: "+", duration: 2.2, useEasing: true,
      });
      ScrollTrigger.create({
        trigger: badgeNumRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => cu.start(),
      });
    }
  }, []);

  return (
    <section ref={sectionRef} id="quienes">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-[80px] px-8 py-[120px] md:grid-cols-2 md:px-[72px]">

        {/* ─── LEFT — Swiper gallery ─── */}
        <div ref={leftRef} className="relative" style={{ opacity: 0 }}>

          {/* ── Slider tradicional — misma forma del diseño Figma ── */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px]">
            <Swiper
              loop
              speed={600}
              modules={[Autoplay]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              onSwiper={(sw) => { swiperRef.current = sw; }}
              onSlideChange={(sw) => setActiveIdx(sw.realIndex)}
              className="h-full w-full"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  {/* Fondo — swap por <img src={s.src} … className="…object-cover"> cuando tengas las imágenes */}
                  <div className="relative flex h-full w-full flex-col items-center justify-center" style={{ background: s.bg }}>
                    {/* grid pattern */}
                    <div className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(rgba(241,140,27,.06) 1px, transparent 1px),linear-gradient(90deg, rgba(241,140,27,.06) 1px, transparent 1px)`,
                        backgroundSize: "52px 52px",
                      }}
                    />
                    {/* glow */}
                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(241,140,27,.2)_0%,transparent_70%)]" />
                    {/* contenido */}
                    <div className="relative z-10 text-center">
                      <span className="font-poppins mb-3 inline-block rounded-full border border-[#F18C1B]/35 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[2.5px] text-[#F18C1B]">
                        {s.tag}
                      </span>
                      <p className="font-montserrat mt-4 text-[72px] font-black leading-none text-white/[.06]">{s.stat}</p>
                      <p className="font-montserrat -mt-8 text-[26px] font-black text-white">{s.label}</p>
                    </div>
                    {/* gradiente inferior para legibilidad de controles */}
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ── Flechas de navegación — esquina inferior centro ── */}
            <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
              {/* Prev */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-[0_4px_16px_rgba(0,0,0,.18)] backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7l5 5" stroke="#291231" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Contador */}
              <span className="font-poppins min-w-[40px] text-center text-[12px] font-semibold tabular-nums text-white/80">
                {String(activeIdx + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(slides.length).padStart(2, "0")}
              </span>

              {/* Next */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Siguiente"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F18C1B] shadow-[0_4px_18px_rgba(241,140,27,.45)] transition-all duration-200 hover:scale-110 hover:shadow-[0_6px_24px_rgba(241,140,27,.60)]"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* corner accent */}
          <div className="pointer-events-none absolute -bottom-4 -right-4 h-[55%] w-[55%] rounded-br-[12px] border-b-[3px] border-r-[3px] border-[#F18C1B]" />

          {/* badge — CountUp */}
          <div className="absolute -left-6 bottom-7 z-10 flex min-w-[200px] items-center gap-3.5 rounded-[14px] bg-[#291231] p-5 shadow-[0_20px_60px_rgba(41,18,49,.25)]">
            <span
              ref={badgeNumRef}
              className="font-montserrat text-[38px] font-black leading-none text-[#F18C1B]"
            >
              0
            </span>
            <div>
              <p className="font-montserrat text-[13px] font-bold text-white">Años de experiencia</p>
              <span className="font-poppins text-[11px] text-white/40">en el mercado digital</span>
            </div>
          </div>
        </div>

        {/* ─── RIGHT — texto + accordion ─── */}
        <div className="relative">

          {/* Astronaut flotando */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/astro-flotando.webp"
            alt=""
            className="pointer-events-none absolute -right-4 -top-20 hidden h-[200px] w-auto animate-[floatY_6s_ease-in-out_infinite] drop-shadow-2xl md:block"
            draggable={false}
          />

          <p ref={labelRef} style={{ opacity: 0 }}
            className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
            Quiénes somos
          </p>

          <h2 ref={titleRef} style={{ opacity: 0 }}
            className="font-montserrat mb-5 text-[clamp(30px,3.5vw,50px)] font-black leading-[1.08] tracking-tight text-[#291231]">
            No somos una agencia<br />
            más. Somos{" "}
            <em className="not-italic text-[#F18C1B]">tu aliado<br />estratégico.</em>
          </h2>

          <p ref={descRef} style={{ opacity: 0 }}
            className="font-poppins mb-9 text-[15px] leading-[1.85] text-[#6b6478]">
            En Websy combinamos diseño de alto impacto, tecnología moderna y estrategia digital
            para construir presencias online que realmente generan resultados. Trabajamos contigo, no solo para ti.
          </p>

          {/* ── Accordion ── */}
          <div ref={accordRef} style={{ opacity: 0 }} className="mb-10">
            <Accordion.Root type="single" collapsible className="flex flex-col gap-2.5">
              {pillars.map((p) => (
                <Accordion.Item
                  key={p.id}
                  value={p.id}
                  className="group rounded-[10px] border border-[#e4e2ea] bg-[#f8f7fa] transition-colors duration-200 data-[state=open]:border-[#F18C1B] data-[state=open]:bg-white"
                >
                  <Accordion.Trigger className="flex w-full cursor-pointer items-center gap-3.5 px-[18px] py-3.5 text-left">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#F18C1B]" />
                    <span className="font-montserrat flex-1 text-[14px] font-bold text-[#291231]">
                      {p.title}
                    </span>
                    {/* Chevron */}
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      className="shrink-0 text-[#F18C1B] transition-transform duration-300 group-data-[state=open]:rotate-180"
                    >
                      <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordionUp_0.25s_ease-out] data-[state=open]:animate-[accordionDown_0.25s_ease-out]">
                    <p className="font-poppins px-[18px] pb-4 pt-0.5 text-[13.5px] leading-[1.75] text-[#6b6478]">
                      {p.content}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

          <a
            ref={ctaRef}
            style={{ opacity: 0 }}
            href="/nosotros"
            className="inline-flex items-center gap-2 border-b-2 border-[#F18C1B] pb-0.5 font-montserrat text-[12px] font-bold uppercase tracking-[1.5px] text-[#291231] transition-all hover:gap-3.5 hover:text-[#F18C1B]"
          >
            Conoce más sobre nosotros →
          </a>
        </div>

      </div>
    </section>
  );
}
