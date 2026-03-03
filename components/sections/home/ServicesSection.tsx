"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    label: "Identidad de marca",
    title: "Manual de Identidad de Marca",
    desc: "Creamos identidades visuales poderosas que diferencian tu marca, generan confianza inmediata y se quedan grabadas en la mente de tus clientes. Desde el logotipo hasta el manual completo.",
    tags: ["Logotipo", "Manual de marca", "Paleta & tipografía", "Papelería digital", "Social Kit"],
    cta: "Quiero mi branding",
    feature: true,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={36} height={36}>
        <path d="M8 32L18 10l10 17 6-9 7 14" stroke="#F18C1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="8" r="4" stroke="#F18C1B" strokeWidth="2.2" />
        <circle cx="34" cy="8" r="1.5" fill="#F18C1B" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "Vende en todas partes",
    title: "Webs y Tiendas Virtuales",
    desc: "Desarrollamos sitios web y e-commerce a medida, rápidos, seguros y optimizados para convertir visitantes en compradores reales desde el primer clic.",
    tags: ["WordPress & Divi", "Shopify", "WooCommerce", "React / Next.js"],
    cta: "Quiero mi web →",
    feature: false,
    icon: (
      <svg viewBox="0 0 36 36" fill="none" width={30} height={30}>
        <rect x="3" y="6" width="30" height="22" rx="3" stroke="#F18C1B" strokeWidth="2.2" />
        <path d="M3 12h30" stroke="#F18C1B" strokeWidth="2" />
        <circle cx="7.5" cy="9" r="1.2" fill="#F18C1B" />
        <circle cx="11.5" cy="9" r="1.2" fill="#F18C1B" />
        <path d="M9 19h18M9 23.5h12" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Posiciónate en motores de búsqueda",
    title: "Google Ads & SEO",
    desc: "Aparecer primero en Google no es casualidad, es estrategia. Diseñamos campañas y optimizaciones que atraen tráfico calificado y multiplican tu retorno de inversión.",
    tags: ["Google Ads", "SEO On-Page", "SEO Técnico", "Analítica Web"],
    cta: "Quiero más visitas →",
    feature: false,
    icon: (
      <svg viewBox="0 0 36 36" fill="none" width={30} height={30}>
        <circle cx="15" cy="15" r="9" stroke="#F18C1B" strokeWidth="2.2" />
        <path d="M22 22l8 8" stroke="#F18C1B" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M15 10v10M10 15h10" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ── GSAP scroll-in ── */
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".js-serv");
    if (!cards) return;

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    });
  }, []);

  /* ── Vanilla-tilt 3D ── */
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".js-serv");
    if (!cards?.length) return;

    // Init after GSAP animation finishes (max duration = 0.85s + 2×0.15s delay + buffer)
    const timer = window.setTimeout(async () => {
      const { default: VanillaTilt } = await import("vanilla-tilt");
      cards.forEach((card) => {
        VanillaTilt.init(card, {
          max: 6,
          speed: 700,
          glare: true,
          "max-glare": 0.10,
          perspective: 1100,
          scale: 1.015,
        });
      });
    }, 1600);

    return () => {
      clearTimeout(timer);
      cards.forEach((card) => {
        (card as HTMLElement & { vanillaTilt?: { destroy(): void } }).vanillaTilt?.destroy();
      });
    };
  }, []);

  const feature = services[0];
  const rest = services.slice(1);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative overflow-hidden px-8 py-[120px] md:px-[72px]"
      style={{
        backgroundImage: "url('/images/fondo-servicios.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 1 — overlay blanco sobre la imagen de fondo */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-white/80" />

      {/* 2 — degradado top: altura fija para que no consuma padding */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/degradado.webp"
        alt=""
        className="pointer-events-none absolute left-0 right-0 top-0 z-[2] w-full select-none"
        style={{ height: 90, objectFit: "fill" }}
        draggable={false}
      />
      {/* 2 — degradado bottom */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/degradado.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] w-full rotate-180 select-none"
        style={{ height: 90, objectFit: "fill" }}
        draggable={false}
      />

      {/* top line — encima de los degradados */}
      <div className="pointer-events-none absolute left-[72px] right-[72px] top-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#e4e2ea] to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* header */}
        <div className="mb-[72px] flex items-end justify-between">
          <div>
            <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
              Nuestros servicios
            </p>
            <h2 className="font-montserrat text-[clamp(30px,3.5vw,50px)] font-black leading-[1.08] tracking-tight text-[#291231]">
              Todo lo que tu marca<br />
              necesita para <span className="text-[#F18C1B]">despegar</span>
            </h2>
          </div>
          <a
            href="#contacto"
            className="hidden font-montserrat text-[12px] font-bold uppercase tracking-[1.5px] text-[#291231] underline decoration-[#F18C1B] decoration-2 underline-offset-4 transition-colors hover:text-[#F18C1B] md:block"
          >
            Solicitar cotización →
          </a>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-[1.15fr_1fr]">

          {/* ── FEATURE CARD ── */}
          <div
            className="js-serv group relative flex flex-col overflow-visible rounded-3xl bg-[#291231] p-[52px_48px] transition-shadow duration-300 hover:shadow-[0_32px_80px_rgba(41,18,49,.22)]"
            style={{ gridRow: "1 / 3" }}
          >
            {/* inner grid pattern */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(241,140,27,.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(241,140,27,.06) 1px, transparent 1px)
                `,
                backgroundSize: "56px 56px",
              }}
            />
            {/* glow */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(241,140,27,.18)_0%,transparent_70%)]" />

            <div className="relative z-10">
              <span className="mb-6 block font-montserrat text-[80px] font-black leading-none text-white/[.04]">
                {feature.num}
              </span>
              <div className="mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-[18px] bg-[#F18C1B]/15 transition-colors group-hover:bg-[#F18C1B]/28">
                {feature.icon}
              </div>
              <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
                {feature.label}
              </p>
              <h3 className="font-montserrat mb-4 text-[32px] font-black leading-[1.1] text-white">
                {feature.title}
              </h3>
              <p className="font-poppins mb-8 flex-1 text-[15px] leading-[1.8] text-white/55">
                {feature.desc}
              </p>
              <div className="mb-9 flex flex-wrap gap-2">
                {feature.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#F18C1B]/30 px-3.5 py-1.5 font-poppins text-[11px] font-semibold text-[#F18C1B]/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#contacto"
                className="inline-flex w-fit items-center gap-2.5 rounded-full bg-[#F18C1B] px-7 py-3.5 font-montserrat text-[12px] font-black uppercase tracking-[1.5px] text-[#291231] transition-all duration-200 group-hover:gap-4 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_36px_rgba(241,140,27,.4)]"
              >
                {feature.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── REGULAR CARDS — dark purple style igual que feature ── */}
          {rest.map((s) => (
            <div
              key={s.num}
              className="js-serv group relative flex flex-col overflow-hidden rounded-[20px] bg-[#291231] p-[40px_38px] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(41,18,49,.35)]"
            >
              {/* inner grid pattern */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(241,140,27,.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(241,140,27,.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "48px 48px",
                }}
              />
              {/* glow */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(241,140,27,.14)_0%,transparent_70%)]" />

              <span className="pointer-events-none absolute right-6 top-5 font-montserrat text-[56px] font-black leading-none text-white/[.04]">
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-[14px] bg-[#F18C1B]/15 transition-colors group-hover:bg-[#F18C1B]/28">
                  {s.icon}
                </div>
                <p className="font-poppins mb-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#F18C1B]">
                  {s.label}
                </p>
                <h3 className="font-montserrat mb-3 text-[22px] font-extrabold leading-[1.15] text-white">
                  {s.title}
                </h3>
                <p className="font-poppins mb-6 flex-1 text-[14px] leading-[1.75] text-white/55">
                  {s.desc}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#F18C1B]/30 px-3.5 py-1 font-poppins text-[11px] font-semibold tracking-[.5px] text-[#F18C1B]/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 border-b-2 border-[#F18C1B] pb-0.5 font-montserrat text-[12px] font-bold uppercase tracking-[1.5px] text-white transition-all group-hover:gap-3.5 group-hover:text-[#F18C1B]"
                >
                  {s.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
