"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function NosotrosHero() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const tagRef   = useRef<HTMLParagraphElement>(null);
  const h1Ref    = useRef<HTMLHeadingElement>(null);
  const descRef  = useRef<HTMLParagraphElement>(null);
  const lineRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [tagRef, h1Ref, descRef, lineRef].map((r) => r.current);
    els.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { opacity: 0, y: 28 });
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.75,
        delay: 0.2 + i * 0.12, ease: "power3.out",
      });
    });
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative overflow-hidden bg-[#291231] px-8 py-[80px] text-center md:px-[72px] md:py-[100px]"
    >
      {/* ── Fondo: glow radial central ── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(241,140,27,.10)_0%,transparent_65%)] blur-[90px]" />
      </div>

      {/* ── Grid de puntos ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Contenido ── */}
      <div className="relative z-10 mx-auto max-w-[780px]">
        <p
          ref={tagRef}
          style={{ opacity: 0 }}
          className="font-poppins mb-4 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]"
        >
          Conócenos
        </p>

        <h1
          ref={h1Ref}
          style={{ opacity: 0 }}
          className="font-montserrat mb-6 text-[clamp(36px,5vw,68px)] font-black leading-[1.04] tracking-tight text-white"
        >
          La agencia que trabaja{" "}
          <em className="not-italic text-[#F18C1B]">contigo,</em>
          <br />
          no solo para ti.
        </h1>

        <p
          ref={descRef}
          style={{ opacity: 0 }}
          className="font-poppins mx-auto mb-10 max-w-[560px] text-[16px] leading-[1.9] text-white/55"
        >
          Somos un equipo de diseñadores, desarrolladores y estrategas digitales
          con sede en Lima, Perú. Nos obsesiona crear marcas y webs que
          realmente generan impacto.
        </p>

        {/* ── Línea de stats ── */}
        <div
          ref={lineRef}
          style={{ opacity: 0 }}
          className="mx-auto grid max-w-[520px] grid-cols-3 gap-4 rounded-[16px] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm"
        >
          {[
            { num: "+50",  label: "Proyectos entregados" },
            { num: "+3",   label: "Años de experiencia" },
            { num: "100%", label: "Enfoque en resultados" },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-montserrat text-[28px] font-black text-[#F18C1B]">
                {num}
              </span>
              <span className="font-poppins text-center text-[11px] leading-[1.4] text-white/50">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
