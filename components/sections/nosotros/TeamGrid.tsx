"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── SVGs espaciales únicos por miembro ── */
function SaturnSVG() {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <path d="M12,55 Q55,32 98,55" stroke="#c89060" strokeWidth="6" fill="none" opacity="0.35"/>
      <circle cx="55" cy="55" r="28" fill="#F18C1B"/>
      <circle cx="55" cy="55" r="28" fill="rgba(41,18,49,0.18)"/>
      <ellipse cx="48" cy="47" rx="9" ry="5" fill="rgba(255,255,255,0.12)" transform="rotate(-20 48 47)"/>
      <ellipse cx="62" cy="63" rx="6" ry="3" fill="rgba(255,255,255,0.07)" transform="rotate(-20 62 63)"/>
      <path d="M12,55 Q55,78 98,55" stroke="#F18C1B" strokeWidth="4.5" fill="none"/>
      <path d="M22,52 Q55,70 88,52" stroke="#e07010" strokeWidth="2" fill="none" opacity="0.5"/>
      <circle cx="14" cy="40" r="4" fill="#f8f0e8" stroke="#F18C1B" strokeWidth="1.5"/>
      <circle cx="98" cy="30" r="3" fill="#f8f0e8" stroke="#F18C1B" strokeWidth="1.2"/>
    </svg>
  );
}

function MoonSVG() {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle cx="20" cy="20" r="1.5" fill="#c8a0e0" opacity="0.5"/>
      <circle cx="85" cy="25" r="2" fill="#c8a0e0" opacity="0.4"/>
      <circle cx="90" cy="80" r="1.5" fill="#c8a0e0" opacity="0.35"/>
      <circle cx="15" cy="90" r="1" fill="#c8a0e0" opacity="0.4"/>
      <circle cx="58" cy="55" r="32" fill="#F18C1B"/>
      <circle cx="72" cy="48" r="26" fill="white"/>
      <circle cx="38" cy="50" r="5" fill="rgba(200,160,100,0.2)" stroke="rgba(180,140,80,0.3)" strokeWidth="1"/>
      <circle cx="48" cy="68" r="3.5" fill="rgba(200,160,100,0.15)" stroke="rgba(180,140,80,0.2)" strokeWidth="1"/>
      <circle cx="32" cy="66" r="2.5" fill="rgba(200,160,100,0.12)" stroke="rgba(180,140,80,0.18)" strokeWidth="0.8"/>
      <circle cx="42" cy="34" r="3" fill="rgba(255,255,255,0.6)"/>
    </svg>
  );
}

function RocketSVG() {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <ellipse cx="55" cy="92" rx="7" ry="14" fill="#F18C1B" opacity="0.4"/>
      <ellipse cx="55" cy="88" rx="4" ry="8" fill="#F18C1B" opacity="0.75"/>
      <path d="M55,18 C40,18 33,40 33,58 L77,58 C77,40 70,18 55,18Z" fill="#291231"/>
      <path d="M55,18 C45,18 39,38 39,56 L71,56 C71,38 65,18 55,18Z" fill="#3d1a52"/>
      <circle cx="55" cy="44" r="8" fill="#F18C1B" opacity="0.9"/>
      <circle cx="55" cy="44" r="5" fill="#1a0b28"/>
      <circle cx="57" cy="42" r="2" fill="rgba(255,255,255,0.45)"/>
      <path d="M33,58 L20,75 L33,70Z" fill="#F18C1B"/>
      <path d="M77,58 L90,75 L77,70Z" fill="#F18C1B"/>
      <rect x="33" y="58" width="44" height="8" rx="2" fill="#291231"/>
      <circle cx="20" cy="25" r="2" fill="#F18C1B" opacity="0.5"/>
      <circle cx="88" cy="35" r="1.5" fill="#F18C1B" opacity="0.45"/>
      <circle cx="15" cy="60" r="1.5" fill="#F18C1B" opacity="0.35"/>
      <circle cx="95" cy="60" r="1" fill="#F18C1B" opacity="0.45"/>
    </svg>
  );
}

function NebulaSVG() {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle cx="55" cy="55" r="30" fill="rgba(241,140,27,0.06)"/>
      <circle cx="55" cy="55" r="20" fill="rgba(241,140,27,0.09)"/>
      <circle cx="55" cy="55" r="7" fill="#F18C1B"/>
      <circle cx="55" cy="55" r="3" fill="white"/>
      <line x1="55" y1="42" x2="55" y2="48" stroke="#F18C1B" strokeWidth="1.5" opacity="0.8"/>
      <line x1="55" y1="62" x2="55" y2="68" stroke="#F18C1B" strokeWidth="1.5" opacity="0.8"/>
      <line x1="42" y1="55" x2="48" y2="55" stroke="#F18C1B" strokeWidth="1.5" opacity="0.8"/>
      <line x1="62" y1="55" x2="68" y2="55" stroke="#F18C1B" strokeWidth="1.5" opacity="0.8"/>
      <line x1="46" y1="46" x2="50" y2="50" stroke="#F18C1B" strokeWidth="1" opacity="0.5"/>
      <line x1="60" y1="60" x2="64" y2="64" stroke="#F18C1B" strokeWidth="1" opacity="0.5"/>
      <line x1="64" y1="46" x2="60" y2="50" stroke="#F18C1B" strokeWidth="1" opacity="0.5"/>
      <line x1="50" y1="60" x2="46" y2="64" stroke="#F18C1B" strokeWidth="1" opacity="0.5"/>
      <circle cx="25" cy="30" r="4" fill="#F18C1B" opacity="0.65"/>
      <line x1="29" y1="33" x2="48" y2="48" stroke="#F18C1B" strokeWidth="0.8" opacity="0.28"/>
      <circle cx="85" cy="28" r="3" fill="#F18C1B" opacity="0.55"/>
      <line x1="82" y1="31" x2="62" y2="48" stroke="#F18C1B" strokeWidth="0.8" opacity="0.28"/>
      <circle cx="22" cy="80" r="3.5" fill="#F18C1B" opacity="0.5"/>
      <line x1="25" y1="77" x2="48" y2="62" stroke="#F18C1B" strokeWidth="0.8" opacity="0.28"/>
      <circle cx="88" cy="82" r="3" fill="#F18C1B" opacity="0.55"/>
      <line x1="85" y1="79" x2="62" y2="62" stroke="#F18C1B" strokeWidth="0.8" opacity="0.28"/>
      <circle cx="55" cy="15" r="2.5" fill="#F18C1B" opacity="0.45"/>
      <line x1="55" y1="18" x2="55" y2="48" stroke="#F18C1B" strokeWidth="0.8" opacity="0.28"/>
    </svg>
  );
}

function CometSVG() {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <path d="M72,38 Q30,55 10,95" stroke="#F18C1B" strokeWidth="12" strokeLinecap="round" opacity="0.06"/>
      <path d="M72,38 Q32,54 14,90" stroke="#F18C1B" strokeWidth="8" strokeLinecap="round" opacity="0.10"/>
      <path d="M72,38 Q35,53 20,84" stroke="#F18C1B" strokeWidth="5" strokeLinecap="round" opacity="0.20"/>
      <path d="M72,38 Q38,52 26,78" stroke="#F18C1B" strokeWidth="3" strokeLinecap="round" opacity="0.42"/>
      <path d="M72,38 Q42,51 32,72" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
      <circle cx="75" cy="35" r="20" fill="rgba(241,140,27,0.12)"/>
      <circle cx="75" cy="35" r="16" fill="#F18C1B"/>
      <circle cx="75" cy="35" r="10" fill="#e07010"/>
      <circle cx="71" cy="30" r="5" fill="rgba(255,255,255,0.25)"/>
      <circle cx="80" cy="40" r="3" fill="rgba(41,18,49,0.2)"/>
      <circle cx="50" cy="52" r="2" fill="#F18C1B" opacity="0.45"/>
      <circle cx="38" cy="63" r="1.5" fill="#F18C1B" opacity="0.35"/>
      <circle cx="28" cy="74" r="1" fill="#F18C1B" opacity="0.25"/>
      <circle cx="15" cy="20" r="1.5" fill="#c8a0e0" opacity="0.35"/>
      <circle cx="95" cy="80" r="1.5" fill="#c8a0e0" opacity="0.3"/>
    </svg>
  );
}

const TEAM = [
  { name: "Bruno",       surname: "Roque",      role: "Puesto",               tag: "Co-Fundador",  Planet: SaturnSVG, img: "/images/prueba-empleado-1.webp" },
  { name: "Debora",      surname: "Santa María", role: "Puesto",              tag: "Co-Fundadora", Planet: MoonSVG,   img: "/images/prueba-empleado-1.webp" },
  { name: "Luis",        surname: "Diestra",    role: "Developer Full Stack",  tag: "Equipo",       Planet: RocketSVG, img: "/images/luis-developer.webp"    },
  { name: "Ada",         surname: "",           role: "Brand Designer",        tag: "Equipo",       Planet: NebulaSVG, img: "/images/ada-diseñadora.webp"    },
  { name: "Gimena",      surname: "",           role: "Sales Manager",         tag: "Equipo",       Planet: CometSVG,  img: "/images/gimena-comercial.webp"  },
  { name: "Juan Carlos", surname: "Huapaya",    role: "Brand Designer",        tag: "Equipo",       Planet: NebulaSVG, img: "/images/Juancarlos.webp"        },
  { name: "Aaron",       surname: "Jauregui",   role: "Developer Full Stack",  tag: "Equipo",       Planet: RocketSVG, img: "/images/Aaron.webp"             },
];

type TeamMember = typeof TEAM[0];

function Card({
  member,
  index,
  cardsRef,
  animate = true,
}: {
  member: TeamMember;
  index: number;
  cardsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
  animate?: boolean;
}) {
  return (
    <div
      ref={animate ? (el) => { cardsRef.current[index] = el; } : undefined}
      style={animate ? { opacity: 0 } : undefined}
      className="group flex flex-col items-center text-center"
    >
      <div
        className="relative mb-4 w-full overflow-hidden rounded-[24px] aspect-[3/4]"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.img}
          alt={member.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#291231]/60 via-transparent to-transparent" />

        {/* Planet SVG — oculto temporalmente */}
        <div className="hidden pointer-events-none absolute right-2 top-2 z-10 origin-top-right opacity-90 transition-transform duration-500 group-hover:scale-110" style={{ transform: "scale(0.62)" }}>
          <member.Planet />
        </div>

        <span className="absolute bottom-3 left-3 rounded-full border border-[#F18C1B]/50 bg-[#F18C1B]/10 px-2.5 py-0.5 font-poppins text-[9px] font-semibold uppercase tracking-[1.5px] text-[#F18C1B]">
          {member.tag}
        </span>
      </div>

      <h3 className="font-montserrat text-[15px] font-bold leading-tight text-white">
        {member.name}
        {member.surname && (
          <> <span className="text-[#F18C1B]">{member.surname}</span></>
        )}
      </h3>

      <p className="font-poppins mt-1 text-[12px] text-white">
        {member.role}
      </p>
    </div>
  );
}

export default function TeamGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, { opacity: 0, y: 36 });
      gsap.to(card, {
        opacity: 1, y: 0, duration: 0.7, delay: i * 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#291231] px-8 py-[80px] md:px-[72px] md:py-[100px]"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-[52px]">
          <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
            Las mentes creativas detrás de la magia
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="font-montserrat text-[clamp(28px,3.2vw,48px)] font-bold leading-[1.08] tracking-tight text-white">
              Conoce al <span className="text-[#F18C1B]">Equipo</span>
            </h2>
            <p className="font-poppins text-[13px] text-white">
              Equipo en crecimiento · Nuevos talentos pronto
            </p>
          </div>
        </div>

        {/* Mobile: grid simple 2 columnas, todos los miembros */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:hidden">
          {TEAM.map((member, i) => (
            <Card key={`${member.name}-${i}`} member={member} index={i} cardsRef={cardsRef} animate={false} />
          ))}
        </div>

        {/* Desktop: fila 1 (5 cols) + fila 2 centrada (2) */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-6">
            {TEAM.slice(0, 5).map((member, i) => (
              <Card key={`${member.name}-${i}`} member={member} index={i} cardsRef={cardsRef} />
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-6">
            {TEAM.slice(5).map((member, idx) => {
              const i = idx + 5;
              return (
                <div key={`${member.name}-${i}`} style={{ width: "calc(20% - 12px)" }}>
                  <Card member={member} index={i} cardsRef={cardsRef} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
