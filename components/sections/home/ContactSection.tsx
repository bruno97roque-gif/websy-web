"use client";

import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#291231] px-8 py-[120px] md:px-[72px]"
    >
      {/* grid bg */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(241,140,27,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,140,27,.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* orbs */}
      <div className="pointer-events-none absolute -top-36 right-[-80px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(241,140,27,.1)_0%,transparent_65%)] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-16 left-[10%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,rgba(80,20,110,.4)_0%,transparent_65%)] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 items-center gap-[80px] md:grid-cols-2">

          {/* LEFT */}
          <div>
            <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]/65">
              Contáctanos
            </p>
            <h2 className="font-montserrat mb-5 text-[clamp(30px,3.5vw,50px)] font-black leading-[1.08] tracking-tight text-white">
              ¿Listo para llevar<br />
              tu marca a{" "}
              <em className="not-italic text-[#F18C1B]">otra órbita?</em>
            </h2>
            <p className="font-poppins mb-10 text-[15px] leading-[1.85] text-white/50">
              Cuéntanos tu proyecto y te respondemos en menos de 24 horas con una propuesta personalizada. Sin compromisos.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: "✉", label: "Email", val: "hola@websy.pe" },
                { icon: "📱", label: "WhatsApp", val: "+51 999 999 999" },
                { icon: "📍", label: "Ubicación", val: "Lima, Perú" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3.5 rounded-[12px] border border-white/08 bg-white/04 px-5 py-4 transition-all hover:border-[#F18C1B]/30 hover:bg-[#F18C1B]/06"
                >
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#F18C1B]/12 text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-poppins text-[11px] uppercase tracking-[1px] text-white/35">{item.label}</p>
                    <p className="font-montserrat text-[14px] font-bold text-white">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="rounded-[20px] border border-white/10 bg-white/05 p-10 backdrop-blur-[16px]">
            <div className="mb-4 grid grid-cols-2 gap-4">
              <FormField label="Nombre" type="text" placeholder="Tu nombre" />
              <FormField label="Empresa" type="text" placeholder="Tu empresa" />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <FormField label="Email" type="email" placeholder="tu@email.com" />
              <FormField label="WhatsApp" type="tel" placeholder="+51 999 999 999" />
            </div>
            <div className="mb-4 flex flex-col gap-2">
              <label className="font-montserrat text-[11px] font-bold uppercase tracking-[1.5px] text-white/40">
                Servicio de interés
              </label>
              <select className="w-full rounded-[10px] border border-white/10 bg-white/06 px-4 py-3.5 font-poppins text-[14px] text-white outline-none focus:border-[#F18C1B] focus:bg-[#F18C1B]/06">
                <option value="" disabled>Selecciona un servicio</option>
                <option>Branding</option>
                <option>Página Web</option>
                <option>Tienda Virtual</option>
                <option>Google Ads & SEO</option>
                <option>Paquete completo</option>
              </select>
            </div>
            <div className="mb-6 flex flex-col gap-2">
              <label className="font-montserrat text-[11px] font-bold uppercase tracking-[1.5px] text-white/40">
                Cuéntanos tu proyecto
              </label>
              <textarea
                rows={4}
                placeholder="Describe brevemente qué necesitas…"
                className="w-full resize-none rounded-[10px] border border-white/10 bg-white/06 px-4 py-3.5 font-poppins text-[14px] text-white placeholder:text-white/25 outline-none focus:border-[#F18C1B] focus:bg-[#F18C1B]/06"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="relative w-full overflow-hidden rounded-[12px] py-[17px] font-montserrat text-[13px] font-black uppercase tracking-[2px] text-[#291231] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(241,140,27,.35)]"
              style={{ background: sent ? "#2d9e6b" : "#F18C1B", color: sent ? "#fff" : "#291231" }}
            >
              {sent ? "✓ Mensaje enviado" : "Enviar mensaje →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-montserrat text-[11px] font-bold uppercase tracking-[1.5px] text-white/40">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[10px] border border-white/10 bg-white/06 px-4 py-3.5 font-poppins text-[14px] text-white placeholder:text-white/25 outline-none focus:border-[#F18C1B] focus:bg-[#F18C1B]/06"
      />
    </div>
  );
}
