"use client";

import { useEffect, useRef } from "react";

const logos = [
  "CIVIT LEX", "Domus RE", "Tour Perú", "TechShop",
  "Lencería PE", "AutoParts", "FitLife", "GreenCorp",
];
const doubled = [...logos, ...logos];

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
      <div className="mx-auto max-w-[1260px]">

        {/* header */}
        <div className="mb-[72px] text-center">
          <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
            Nuestros clientes
          </p>
          <h2 className="font-montserrat text-[clamp(28px,3.5vw,48px)] font-black leading-[1.08] tracking-tight text-[#291231]">
            Marcas que confían<br />en <em className="not-italic text-[#F18C1B]">Websy</em>
          </h2>
        </div>

        {/* logo marquee */}
        <div className="cli-marquee relative overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[100px] bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[100px] bg-gradient-to-l from-white to-transparent" />
          <div className="cli-track gap-0">
            {doubled.map((name, i) => (
              <div key={i} className="mx-5 inline-flex shrink-0 items-center justify-center">
                <div className="flex h-20 w-[180px] items-center justify-center gap-2.5 rounded-[12px] border border-[#e4e2ea] bg-[#f2f1f5] transition-all hover:-translate-y-1 hover:border-[#F18C1B] hover:bg-[#f8f7fa]">
                  <div className="h-7 w-7 rounded-[6px] bg-[#291231] opacity-20" />
                  <span className="font-montserrat text-[13px] font-extrabold tracking-[.5px] text-[#291231] opacity-35">
                    {name}
                  </span>
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
              className="trust-item flex cursor-default flex-col items-center rounded-[16px] border border-[#e4e2ea] bg-[#f8f7fa] px-6 py-9 text-center transition-all hover:-translate-y-1.5 hover:border-[#F18C1B] hover:shadow-[0_12px_40px_rgba(241,140,27,.1)]"
            >
              <div className="font-montserrat text-[52px] font-black leading-none text-[#291231]">
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
