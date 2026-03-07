"use client";

import { useEffect, useRef } from "react";

/* Cliente-1.webp … Cliente-9.webp en /public/images/ */
const CLIENT_IMGS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubled = [...CLIENT_IMGS, ...CLIENT_IMGS];

const stats = [
  { num: 120, suf: "+", label: "Proyectos completados" },
  { num: 100, suf: "%", label: "Clientes satisfechos" },
  { num: 5,   suf: "+", label: "Años de experiencia" },
];

export default function ClientsSection() {
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    import("countup.js").then(({ CountUp }) => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.querySelectorAll<HTMLElement>(".cnt").forEach((el) => {
                const cu = new CountUp(el, Number(el.dataset.t), { duration: 2.2 });
                if (!cu.error) cu.start();
              });
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      if (trustRef.current) obs.observe(trustRef.current);
    });
  }, []);

  return (
    <section id="clientes" className="bg-white px-8 py-[110px] md:px-[72px]">
      <div className="mx-auto max-w-[1600px]">

        {/* header */}
        <div className="mb-[72px] text-center">
          <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
            Nuestros clientes
          </p>
          {/* "Websy" reemplazado por el logo imagen */}
          <h2 className="font-montserrat inline-flex flex-wrap items-center justify-center gap-x-3 text-[clamp(28px,3.5vw,48px)] font-bold leading-[1.2] tracking-tight text-[#291231]">
            <span className="block w-full">Marcas que confían en</span>
            <span className="block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-websy-servicios.webp"
                alt="Websy"
                className="inline-block h-[1em] w-auto object-contain align-middle"
                draggable={false}
              />
            </span>
          </h2>
        </div>

        {/* ── MOBILE: 2 filas de marquee — más rápido ── */}
        <div className="relative overflow-hidden md:hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
          {/* Fila 1 — izquierda */}
          <div className="cli-track-fast mb-3 gap-0">
            {doubled.map((n, i) => (
              <div key={i} className="mx-2.5 inline-flex shrink-0 items-center justify-center">
                <div className="flex h-[72px] w-[140px] items-center justify-center rounded-[10px] border border-[#e4e2ea] bg-[#f2f1f5] p-3 transition-colors duration-200 hover:border-[#F18C1B] hover:bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/Cliente-${n}.webp`}
                    alt={`Cliente ${n}`}
                    className="max-h-9 w-auto max-w-full object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Fila 2 — derecha (reverso) */}
          <div className="cli-track-fast-rev gap-0">
            {doubled.map((n, i) => (
              <div key={i} className="mx-2.5 inline-flex shrink-0 items-center justify-center">
                <div className="flex h-[72px] w-[140px] items-center justify-center rounded-[10px] border border-[#e4e2ea] bg-[#f2f1f5] p-3 transition-colors duration-200 hover:border-[#F18C1B] hover:bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/Cliente-${n}.webp`}
                    alt={`Cliente ${n}`}
                    className="max-h-9 w-auto max-w-full object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: 1 fila ── */}
        <div className="relative hidden overflow-hidden md:block">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[100px] bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[100px] bg-gradient-to-l from-white to-transparent" />
          <div className="cli-track gap-0">
            {doubled.map((n, i) => (
              <div key={i} className="mx-5 inline-flex shrink-0 items-center justify-center">
                <div className="flex h-[100px] w-[210px] items-center justify-center rounded-[12px] border border-[#e4e2ea] bg-[#f2f1f5] p-5 transition-colors duration-200 hover:border-[#F18C1B] hover:bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/Cliente-${n}.webp`}
                    alt={`Cliente ${n}`}
                    className="max-h-14 w-auto max-w-full object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* trust stats */}
        <div ref={trustRef} className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="trust-item flex cursor-default flex-col items-center rounded-[16px] border border-[#F18C1B] bg-[#f8f7fa] px-6 py-9 text-center transition-all hover:shadow-[0_12px_40px_rgba(241,140,27,.1)]"
            >
              <div className="font-montserrat text-[52px] font-bold leading-none text-[#291231]">
                <span className="cnt" data-t={s.num}>0</span>
                <span className="text-[28px] text-[#F18C1B]">{s.suf}</span>
              </div>
              <p className="font-poppins mt-2 text-[14px] text-[#6b6478]">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
