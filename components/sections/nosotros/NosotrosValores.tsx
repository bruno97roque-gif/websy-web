"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const valores = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.8 6.1L23 10l-4.5 4.4 1.1 6.5L14 18l-5.6 2.9 1.1-6.5L5 10l6.2-.9L14 3z"
          fill="#F18C1B" />
      </svg>
    ),
    title: "Calidad sin excusas",
    desc:  "Cada línea de código y cada pixel importa. No entregamos nada de lo que no estemos orgullosos.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#F18C1B" strokeWidth="2" />
        <path d="M9 14l3.5 3.5L19 10" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Resultados medibles",
    desc:  "Trabajamos con datos, no con suposiciones. Cada decisión está respaldada por métricas reales.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14h18M14 5l9 9-9 9" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Comunicación directa",
    desc:  "Sin intermediarios ni burocracia. Hablas directamente con quien hace el trabajo.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="9" height="9" rx="2" fill="#F18C1B" />
        <rect x="15" y="4" width="9" height="9" rx="2" fill="#F18C1B" opacity=".5" />
        <rect x="4" y="15" width="9" height="9" rx="2" fill="#F18C1B" opacity=".5" />
        <rect x="15" y="15" width="9" height="9" rx="2" fill="#F18C1B" />
      </svg>
    ),
    title: "Alianza a largo plazo",
    desc:  "No desaparecemos después de entregar. Somos tu socio tecnológico para crecer contigo.",
  },
];

export default function NosotrosValores() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, { opacity: 0, y: 36 });
      gsap.to(card, {
        opacity: 1, y: 0, duration: 0.65,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f8f7fa] px-8 py-[100px] md:px-[72px] md:py-[120px]"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-[60px] text-center">
          <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
            Lo que nos define
          </p>
          <h2 className="font-montserrat text-[clamp(28px,3.2vw,46px)] font-black leading-[1.1] tracking-tight text-[#291231]">
            Nuestros valores
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((v, i) => (
            <div
              key={v.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              style={{ opacity: 0 }}
              className="group flex flex-col gap-5 rounded-[16px] border border-[#e4e2ea] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F18C1B]/40 hover:shadow-[0_16px_50px_rgba(241,140,27,.10)]"
            >
              {/* Icon */}
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#F18C1B]/10 transition-colors duration-300 group-hover:bg-[#F18C1B]/20">
                {v.icon}
              </div>

              <div>
                <h3 className="font-montserrat mb-2.5 text-[17px] font-black leading-[1.2] text-[#291231]">
                  {v.title}
                </h3>
                <p className="font-poppins text-[14px] leading-[1.75] text-[#6b6478]">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
