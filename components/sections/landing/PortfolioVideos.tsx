import Link from "next/link";
import type { Portafolio } from "@/lib/portfolio";
import PortfolioVideo from "./PortfolioVideo";

/**
 * Sección de portafolio en video para las landings de servicio.
 *
 * Es un server component: el H2, la intro y cada H3 con su descripción salen en
 * el HTML que lee Google. Solo el reproductor (PortfolioVideo) es de cliente.
 * Los videos son grabaciones mudas de pantalla y no la pieza principal de la
 * página, así que no llevan schema VideoObject (Google pediría miniatura y
 * los trataría como contenido de video principal); el valor SEO está en el texto.
 */
export default function PortfolioVideos({ data }: { data: Portafolio }) {
  return (
    <section
      data-track-location="landing_portafolio"
      aria-labelledby="portafolio-h2"
      className="relative overflow-hidden bg-[#1d0b24] px-6 py-16 md:py-24"
    >
      {/* Rejilla y halo de marca, decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(241,140,27,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(241,140,27,.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(241,140,27,0.16), transparent)" }}
      />

      <div className="relative mx-auto max-w-[1180px]">
        <header className="mx-auto mb-10 max-w-[720px] text-center md:mb-14">
          <p className="font-poppins mb-3 text-[11.5px] font-semibold uppercase tracking-[3px] text-[#F18C1B]">
            {data.eyebrow}
          </p>
          <h2
            id="portafolio-h2"
            className="font-montserrat text-[clamp(26px,4vw,40px)] font-bold leading-[1.12] tracking-[-0.01em] text-white"
          >
            {data.h2}
          </h2>
          <p className="font-poppins mt-4 text-[15.5px] leading-[1.75] text-white/70 md:text-[16.5px]">
            {data.intro}
          </p>
        </header>

        <ul className="grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2 md:gap-8">
          {data.proyectos.map((p, i) => (
            <li key={p.nombre}>
              <article className="group h-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-[#F18C1B]/40">
                {/* Marco de navegador */}
                <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.06] px-4 py-2.5">
                  <span aria-hidden="true" className="flex gap-1.5">
                    <i className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <i className="block h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <i className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </span>
                  <span className="font-poppins flex-1 truncate rounded-full bg-white/[0.07] px-3 py-1 text-center text-[11.5px] text-white/55">
                    {p.nombre}
                  </span>
                  <span aria-hidden="true" className="font-montserrat text-[11px] font-bold text-[#F18C1B]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <PortfolioVideo src={p.video} label={`Video de la web de ${p.nombre}`} />

                <div className="p-5 md:p-6">
                  <span className="font-poppins inline-block rounded-full border border-[#F18C1B]/35 bg-[#F18C1B]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.2px] text-[#F18C1B]">
                    {p.rubro}
                  </span>
                  <h3 className="font-montserrat mt-3 text-[20px] font-bold leading-tight text-white md:text-[22px]">
                    {p.nombre}
                  </h3>
                  <p className="font-poppins mt-2 text-[14.5px] leading-[1.7] text-white/65">{p.desc}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center md:mt-14">
          <Link
            href="/cotizacion"
            className="font-montserrat inline-flex items-center gap-2 rounded-full bg-[#F18C1B] px-8 py-3.5 text-[13px] font-bold uppercase tracking-[1.2px] text-[#291231] transition-transform duration-300 hover:scale-[1.03]"
          >
            Quiero un proyecto así →
          </Link>
        </div>
      </div>
    </section>
  );
}
