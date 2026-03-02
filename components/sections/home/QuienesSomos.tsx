"use client";

const pillars = [
  "Diseño exclusivo y a medida para cada cliente",
  "Tecnología de vanguardia: WordPress, Shopify, Next.js",
  "Resultados medibles y orientados al crecimiento",
];

export default function QuienesSomos() {
  return (
    <section id="quienes">
      <div className="mx-auto grid max-w-[1260px] grid-cols-1 items-center gap-[80px] px-8 py-[120px] md:grid-cols-2 md:px-[72px]">

        {/* LEFT — image placeholder */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-[#f2f1f5]">
            {/* Replace with <Image src="/team.jpg" fill alt="Equipo Websy" className="object-cover" /> */}
            <div className="flex h-full w-full items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" opacity=".18">
                <rect x="20" y="20" width="80" height="80" rx="12" stroke="#291231" strokeWidth="3" />
                <circle cx="60" cy="48" r="14" stroke="#291231" strokeWidth="3" />
                <path d="M28 100c0-17.67 14.33-32 32-32s32 14.33 32 32" stroke="#291231" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#F18C1B]/12 to-[#291231]/08" />
          </div>
          {/* corner accent */}
          <div className="pointer-events-none absolute -bottom-4 -right-4 h-[60%] w-[60%] rounded-br-[12px] border-b-[3px] border-r-[3px] border-[#F18C1B]" />

          {/* badge */}
          <div className="absolute -left-6 bottom-7 flex min-w-[200px] items-center gap-3.5 rounded-[14px] bg-[#291231] p-5 shadow-[0_20px_60px_rgba(41,18,49,.25)]">
            <span className="font-montserrat text-[38px] font-black leading-none text-[#F18C1B]">5+</span>
            <div>
              <p className="font-montserrat text-[13px] font-bold text-white">Años de experiencia</p>
              <span className="font-poppins text-[11px] text-white/40">en el mercado digital</span>
            </div>
          </div>
        </div>

        {/* RIGHT — text */}
        <div>
          <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
            Quiénes somos
          </p>
          <h2 className="font-montserrat mb-5 text-[clamp(30px,3.5vw,50px)] font-black leading-[1.08] tracking-tight text-[#291231]">
            No somos una agencia<br />
            más. Somos{" "}
            <em className="not-italic text-[#F18C1B]">tu aliado<br />estratégico.</em>
          </h2>
          <p className="font-poppins mb-9 text-[15px] leading-[1.85] text-[#6b6478]">
            En Websy combinamos diseño de alto impacto, tecnología moderna y estrategia digital para construir presencias online que realmente generan resultados. Trabajamos contigo, no solo para ti.
          </p>

          <div className="mb-10 flex flex-col gap-3.5">
            {pillars.map((p) => (
              <div
                key={p}
                className="qs-pillar flex cursor-default items-center gap-3.5 rounded-[10px] border border-[#e4e2ea] bg-[#f8f7fa] px-[18px] py-3.5 transition-all duration-250 hover:translate-x-1.5 hover:border-[#F18C1B]"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#F18C1B]" />
                <span className="font-montserrat text-[14px] font-bold text-[#291231]">{p}</span>
              </div>
            ))}
          </div>

          <a
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
