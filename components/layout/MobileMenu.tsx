"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Particles } from "@/components/ui/particles";

const NAV_LINKS = [
  { num: "01", label: "Inicio",    href: "/#inicio" },
  { num: "02", label: "Nosotros",  href: "/#nosotros" },
  { num: "03", label: "Servicios", href: "/#servicios" },
  { num: "04", label: "Contacto",  href: "/#contacto" },
];

/* ── Scrollbar width helper ── */
function getScrollbarWidth() {
  if (typeof window === "undefined") return 0;
  return window.innerWidth - document.documentElement.clientWidth;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const overlayRef  = useRef<HTMLDivElement>(null);
  const itemsRef    = useRef<(HTMLDivElement | null)[]>([]);
  const mountedRef  = useRef(false);

  /* ── Animate in / out + scrollbar jump fix ── */
  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    // Skip animation on very first mount (menu starts closed)
    if (!mountedRef.current) {
      mountedRef.current = true;
      if (!isOpen) return;
    }

    if (isOpen) {
      // ── Lock scroll, compensate scrollbar to avoid layout jump ──
      const sw = getScrollbarWidth();
      document.body.style.overflow      = "hidden";
      document.body.style.paddingRight  = sw > 0 ? `${sw}px` : "";
      // Fixed navbar also needs compensation
      const nav = document.querySelector<HTMLElement>("nav");
      if (nav && sw > 0) nav.style.paddingRight = `${sw}px`;

      // ── Slide up ──
      gsap.set(el, { display: "flex", y: "100%" });
      gsap.to(el,  { y: "0%", duration: 0.65, ease: "power4.out" });

      // ── Stagger links ──
      gsap.fromTo(
        itemsRef.current.filter(Boolean),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.09, delay: 0.3, ease: "power3.out" }
      );
    } else {
      // ── Slide down ──
      gsap.to(el, {
        y: "100%",
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(el, { display: "none" });

          // ── Restore scroll ──
          document.body.style.overflow     = "";
          document.body.style.paddingRight = "";
          const nav = document.querySelector<HTMLElement>("nav");
          if (nav) nav.style.paddingRight = "";

          // Reset items for next open
          gsap.set(itemsRef.current.filter(Boolean), { y: 40, opacity: 0 });
        },
      });
    }
  }, [isOpen]);

  /* ── ESC to close ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[950] flex-col bg-[#291231]"
      style={{ display: "none" }}
    >
      {/* ── Particles background ── */}
      <Particles
        count={80}
        colors={["#ffffff", "#F18C1B", "#c084fc"]}
        brightness={0.7}
        className="z-0"
      />

      {/* ── Grid de cuadrados ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(241,140,27,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,140,27,.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Subtle radial glow center ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(241,140,27,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Top bar ── */}
      <div className="relative z-10 flex h-[78px] shrink-0 items-center justify-between border-b border-white/10 px-8 md:px-[72px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/logo-white.webp"
          alt="Websy"
          className="h-10 w-auto object-contain"
          draggable={false}
        />

        <button
          onClick={onClose}
          aria-label="Cerrar menú"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-[#F18C1B] hover:bg-[#F18C1B]/10"
        >
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none"
            className="transition-transform duration-300 group-hover:rotate-90"
          >
            <path d="M1 1L15 15M15 1L1 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* ── Body ── */}
      <div className="relative z-10 flex flex-1 overflow-hidden flex-col md:flex-row">

        {/* Left — big navigation links */}
        <div className="flex flex-1 flex-col justify-center gap-1 px-8 py-10 md:gap-3 md:px-[72px] md:py-0">
          {NAV_LINKS.map((link, i) => (
            <div
              key={link.num}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="group flex items-baseline gap-4"
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              <span className="font-montserrat text-[13px] font-bold leading-none text-[#F18C1B] md:text-[15px]">
                {link.num}
              </span>
              <Link
                href={link.href}
                onClick={onClose}
                className="font-montserrat text-[clamp(48px,9vw,96px)] font-black uppercase leading-[1] text-white transition-colors duration-200 hover:text-[#F18C1B]"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Vertical divider — desktop only */}
        <div className="hidden w-px shrink-0 self-stretch bg-white/10 md:block" />

        {/* Right panel — desktop only */}
        <div className="hidden w-[380px] shrink-0 flex-col justify-center px-[60px] md:flex">
          <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
            ¿Listo para crecer?
          </p>
          <h3 className="font-montserrat mb-8 text-[32px] font-black leading-[1.1] text-white">
            Cuéntanos tu<br />
            <span className="text-[#F18C1B]">proyecto</span>
          </h3>

          <div className="mb-10 flex flex-col gap-3 border-t border-white/10 pt-8">
            <a
              href="mailto:hola@websy.pe"
              className="font-poppins text-[14px] text-white/50 transition-colors hover:text-[#F18C1B]"
            >
              hola@websy.pe
            </a>
            <a
              href="tel:+51950817844"
              className="font-poppins text-[14px] text-white/50 transition-colors hover:text-[#F18C1B]"
            >
              +51 950 817 844
            </a>
          </div>

          <Link
            href="/#contacto"
            onClick={onClose}
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#F18C1B] px-7 py-3 font-montserrat text-[12px] font-bold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-[#F18C1B] hover:text-[#291231]"
          >
            Agendar llamada →
          </Link>
        </div>
      </div>

      {/* ── Bottom bar — mobile only ── */}
      <div className="relative z-10 shrink-0 border-t border-white/10 px-8 py-5 md:hidden">
        <div className="flex items-center justify-between">
          <a
            href="mailto:hola@websy.pe"
            className="font-poppins text-[13px] text-white/50 transition-colors hover:text-[#F18C1B]"
          >
            hola@websy.pe
          </a>
          <Link
            href="/#contacto"
            onClick={onClose}
            className="font-montserrat text-[11px] font-bold uppercase tracking-[1px] text-[#F18C1B] hover:underline"
          >
            Contactar →
          </Link>
        </div>
      </div>
    </div>
  );
}
