import Link from "next/link";

const footerLinks = {
  Servicios: ["Branding", "Diseño Web", "Tiendas Virtuales", "Google Ads", "SEO"],
  Empresa: ["Nosotros", "Portafolio", "Blog"],
  Contacto: ["hola@websy.pe", "+51 999 999 999", "Lima, Perú"],
};

export default function Footer() {
  return (
    <footer className="bg-[#120719] px-8 pb-9 pt-[72px] md:px-[72px]">
      <div className="grid grid-cols-1 gap-[60px] border-b border-white/06 pb-14 mb-8 md:grid-cols-[2.2fr_1fr_1fr_1fr]">
        {/* brand */}
        <div>
          <p className="font-montserrat text-[22px] font-black uppercase tracking-[3px] text-white">Websy</p>
          <p className="font-poppins mb-4 mt-1 text-[11px] uppercase tracking-[3px] text-[#F18C1B]">Agencia Web</p>
          <p className="font-poppins mb-6 max-w-[260px] text-[13px] leading-[1.75] text-white/30">
            Creamos experiencias digitales de alto impacto que posicionan tu marca por encima de la competencia.
          </p>
          <div className="flex gap-2.5">
            {["IG", "FB", "LI", "WA", "TK"].map((s) => (
              <a
                key={s}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-white/08 font-montserrat text-[10px] font-bold text-white/30 transition-all hover:border-[#F18C1B] hover:bg-[#F18C1B]/05 hover:text-[#F18C1B]"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-montserrat mb-[22px] text-[12px] font-bold uppercase tracking-[1.5px] text-white">
              {title}
            </h4>
            <ul className="flex flex-col gap-[11px]">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-poppins text-[13px] text-white/30 no-underline transition-all hover:pl-1.5 hover:text-[#F18C1B]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="font-poppins text-[12px] text-white/18">
          © 2025 Websy Agencia Web. Todos los derechos reservados.
        </p>
        <div className="flex gap-5">
          {["Privacidad", "Términos"].map((l) => (
            <a key={l} href="#" className="font-poppins text-[12px] text-white/18 no-underline hover:text-[#F18C1B]">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
