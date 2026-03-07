"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShimmerButton } from "@/components/ui/shimmer-button";

gsap.registerPlugin(ScrollTrigger);

/* ── Custom cursor SVG data URIs — one per card ── */
const CURSORS = {
  heart:    `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 27C16 27 3 19 3 11C3 7.1 6.1 4 10 4C12.5 4 14.7 5.2 16 7C17.3 5.2 19.5 4 22 4C25.9 4 29 7.1 29 11C29 19 16 27 16 27Z' fill='%23F18C1B'/%3E%3C/svg%3E") 16 16, pointer`,
  triangle: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='16,3 30,29 2,29' fill='%23F18C1B'/%3E%3C/svg%3E") 16 16, pointer`,
  star:     `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12' fill='%23F18C1B'/%3E%3C/svg%3E") 16 16, pointer`,
};

const services = [
  {
    num: "01",
    label: "Identidad de marca",
    title: "Manual de Identidad de Marca",
    desc: "Creamos identidades visuales poderosas que diferencian tu marca, generan confianza inmediata y se quedan grabadas en la mente de tus clientes. Desde el logotipo hasta el manual completo.",
    cta: "Quiero mi branding",
    ctaHref: "https://wa.me/51940549322?text=Hola%20deseo%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20servicios%20y%20como%20pueden%20ayudarme%20con%20mi%20marca.",
    feature: true,
    icon: "/icons/Icon-servicio1.webp",
    cursor: CURSORS.heart,
  },
  {
    num: "02",
    label: "Vende en todas partes",
    title: "Webs y Tiendas Virtuales",
    desc: "Desarrollamos sitios web y e-commerce a medida, rápidos, seguros y optimizados para convertir visitantes en compradores reales desde el primer clic.",
    cta: "Quiero mi web",
    ctaHref: "https://wa.me/51940549322?text=Hola%20deseo%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20servicios%20y%20como%20pueden%20ayudarme%20con%20mi%20marca.",
    feature: false,
    icon: "/icons/icon-servicio2.webp",
    cursor: CURSORS.triangle,
  },
  {
    num: "03",
    label: "Posiciónate en motores de búsqueda",
    title: "Google Ads & SEO",
    desc: "Aparecer primero en Google no es casualidad, es estrategia. Diseñamos campañas y optimizaciones que atraen tráfico calificado y multiplican tu retorno de inversión.",
    cta: "Quiero más visitas",
    ctaHref: "https://wa.me/51940549322?text=Hola%20deseo%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20servicios%20y%20como%20pueden%20ayudarme%20con%20mi%20marca.",
    feature: false,
    icon: "/icons/icon-servicio3.webp",
    cursor: CURSORS.star,
  },
];

/* ── Icon box with expanding pulse rings ── */
function IconBox({ src, size = 88 }: { src: string; size?: number }) {
  const r = Math.round(size * 0.25); // border-radius proportional
  return (
    <div className="relative mb-5 inline-flex md:mb-8">
      {/* Ring 1 */}
      <div
        className="absolute inset-[-8px] border border-[#F18C1B]/45"
        style={{
          borderRadius: r + 8,
          animation: "iconRing 2.6s ease-out infinite",
        }}
      />
      {/* Ring 2 — delayed */}
      <div
        className="absolute inset-[-8px] border border-[#F18C1B]/22"
        style={{
          borderRadius: r + 8,
          animation: "iconRing 2.6s ease-out infinite 0.85s",
        }}
      />
      {/* Icon container — warm brown + orange border, like Figma */}
      <div
        className="relative flex items-center justify-center border border-[#F18C1B]/55 bg-[#5c2a0f]"
        style={{ width: size, height: size, borderRadius: r }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="object-contain"
          style={{ width: Math.round(size * 0.58), height: Math.round(size * 0.58) }}
          draggable={false}
        />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ── GSAP scroll-in ── */
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".js-serv");
    if (!cards) return;
    gsap.set(cards, { opacity: 0, y: 60 });
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.85, delay: i * 0.15, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      );
    });
  }, []);

  /* ── VanillaTilt 3D ── */
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".js-serv");
    if (!cards?.length) return;
    const timer = window.setTimeout(async () => {
      const { default: VanillaTilt } = await import("vanilla-tilt");
      cards.forEach((card) => {
        VanillaTilt.init(card, {
          max: 6,
          speed: 700,
          glare: true,
          "max-glare": 0.18,
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

  /* ── Metallic shine: tracks mouse position inside each card ── */
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const shine = card.querySelector<HTMLElement>(".js-shine");
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,200,130,0.18) 0%, rgba(255,255,255,0.05) 45%, transparent 70%)`;
      shine.style.opacity = "1";
    }
  }
  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
    const shine = e.currentTarget.querySelector<HTMLElement>(".js-shine");
    if (shine) shine.style.opacity = "0";
  }

  const feature = services[0];
  const rest = services.slice(1);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative overflow-hidden px-5 py-16 sm:px-8 md:px-[72px] md:py-[120px]"
      style={{
        backgroundImage: "url('/images/fondo-servicios.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 1 — overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-white/70" />

      {/* 2 — degradado top */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/degradado.webp" alt="" draggable={false}
        className="pointer-events-none absolute left-0 right-0 top-0 z-[2] w-full select-none"
        style={{ height: 90, objectFit: "fill" }}
      />
      {/* 2 — degradado bottom */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/degradado.webp" alt="" draggable={false}
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] w-full rotate-180 select-none"
        style={{ height: 90, objectFit: "fill" }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* ── Header ── */}
        <div className="mb-10 flex items-end justify-between md:mb-[72px]">
          <div>
            <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
              Nuestros servicios
            </p>
            <h2 className="font-montserrat text-[clamp(30px,3.5vw,50px)] font-bold leading-[1.08] tracking-tight text-[#291231]">
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

        {/* ── Grid ── */}
        <div className="grid gap-6 md:grid-cols-[1.15fr_1fr] md:gap-8 md:gap-x-10">

          {/* ── FEATURE CARD ── */}
          <div
            className="js-serv group relative z-0 flex flex-col overflow-visible rounded-3xl bg-[#291231] p-7 transition-shadow duration-300 hover:z-20 hover:shadow-[0_32px_80px_rgba(41,18,49,.22)] sm:p-10 md:p-[52px_48px]"
            style={{ gridRow: "1 / 3", cursor: feature.cursor }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* inner grid pattern */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(241,140,27,.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(241,140,27,.06) 1px, transparent 1px)`,
                backgroundSize: "56px 56px",
              }}
            />
            {/* metallic shine */}
            <div className="js-shine pointer-events-none absolute inset-0 z-20 rounded-3xl opacity-0 transition-opacity duration-200" />

            <div className="relative z-10">
              <span className="pointer-events-none absolute right-6 top-4 font-montserrat text-[52px] font-bold leading-none text-[#F18C1B] md:right-8 md:top-6 md:text-[80px]">
                {feature.num}
              </span>

              <IconBox src={feature.icon} size={60} />

              <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
                {feature.label}
              </p>
              <h3 className="font-montserrat mb-5 text-[clamp(28px,2.4vw,42px)] font-bold uppercase leading-[1.05] text-white">
                {feature.title}
              </h3>
              <p className="font-poppins mb-6 flex-1 text-[15px] leading-[1.8] text-white md:mb-10">
                {feature.desc}
              </p>
              <ShimmerButton href={feature.ctaHref} target="_blank" rel="noopener noreferrer">
                {feature.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ShimmerButton>
            </div>
          </div>

          {/* ── REGULAR CARDS ── */}
          {rest.map((s) => (
            <div
              key={s.num}
              className="js-serv group relative z-0 flex flex-col overflow-hidden rounded-[20px] bg-[#291231] p-6 transition-shadow duration-300 hover:z-10 hover:shadow-[0_20px_60px_rgba(41,18,49,.35)] sm:p-8 md:p-[40px_38px]"
              style={{ cursor: s.cursor }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* inner grid pattern */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(241,140,27,.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(241,140,27,.05) 1px, transparent 1px)`,
                  backgroundSize: "48px 48px",
                }}
              />
              {/* number */}
              <span className="pointer-events-none absolute right-5 top-4 font-montserrat text-[40px] font-bold leading-none text-[#F18C1B] md:right-6 md:top-5 md:text-[56px]">
                {s.num}
              </span>
              {/* metallic shine */}
              <div className="js-shine pointer-events-none absolute inset-0 z-20 rounded-[20px] opacity-0 transition-opacity duration-200" />

              <div className="relative z-10">
                <IconBox src={s.icon} size={50} />
                <p className="font-poppins mb-2 text-[10px] font-semibold uppercase tracking-[2px] text-[#F18C1B]">
                  {s.label}
                </p>
                <h3 className="font-montserrat mb-3 text-[clamp(20px,1.8vw,30px)] font-bold uppercase leading-[1.1] text-white">
                  {s.title}
                </h3>
                <p className="font-poppins mb-4 flex-1 text-[14px] leading-[1.75] text-white md:mb-6">
                  {s.desc}
                </p>
                <a
                  href={s.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b-2 border-[#F18C1B] pb-0.5 font-montserrat text-[12px] font-bold uppercase tracking-[1.5px] text-white transition-all group-hover:gap-3.5 group-hover:text-[#F18C1B]"
                >
                  {s.cta} →
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
