"use client";

import { useState } from "react";

/* ── Estado del formulario ── */
type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status,  setStatus]  = useState<Status>("idle");
  const [errMsg,  setErrMsg]  = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrMsg(json.error ?? "Error al enviar. Intenta de nuevo.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      // Vuelve a idle tras 5 s
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setErrMsg("Sin conexión. Verifica tu internet e intenta de nuevo.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#291231] px-8 py-[100px] md:px-[72px] md:py-[120px]"
      style={{
        backgroundImage: "url('/images/background-form.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* glow orbs */}
      <div className="pointer-events-none absolute -top-40 right-[-60px] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(241,140,27,.07)_0%,transparent_65%)] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 left-[8%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(80,20,110,.35)_0%,transparent_65%)] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* ── LEFT ── */}
          <div className="flex flex-col">

            <p className="font-poppins mb-4 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
              Contáctanos
            </p>
            <h2 className="font-montserrat mb-5 text-[clamp(32px,3.8vw,56px)] font-black leading-[1.06] tracking-tight text-white">
              ¿Listo para llevar<br />
              tu marca a{" "}
              <em className="not-italic text-[#F18C1B]">otra órbita?</em>
            </h2>
            <p className="font-poppins mb-10 max-w-[420px] text-[15px] leading-[1.85] text-white/50">
              Cuéntanos tu proyecto y te respondemos en menos de 24 horas con
              una propuesta personalizada. Sin compromisos.
            </p>

            {/* GIF vaca + ovni */}
            <div className="flex justify-center md:justify-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/vaca-alien.gif"
                alt=""
                className="h-auto w-[380px] object-contain drop-shadow-2xl md:w-[500px]"
                draggable={false}
              />
            </div>

          </div>

          {/* ── RIGHT — formulario ── */}
          <div className="rounded-[24px] border border-[#F18C1B]/50 bg-white/[0.06] p-8 shadow-[0_8px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] md:px-12 md:py-14">
            <form onSubmit={handleSubmit} noValidate>

              {/* ── Honeypot anti-spam (oculto para humanos, los bots lo llenan) ── */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute opacity-0 h-0 w-0 pointer-events-none"
              />

              {/* Fila 1: Nombre + Empresa */}
              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField name="nombre"  label="Nombre"  type="text"  placeholder="Tu nombre"  required />
                <FormField name="empresa" label="Empresa" type="text"  placeholder="Tu empresa" />
              </div>

              {/* Fila 2: Email + WhatsApp */}
              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField name="email"    label="Email"    type="email" placeholder="tu@email.com"    required />
                <FormField name="whatsapp" label="WhatsApp" type="tel"   placeholder="+51 999 999 999" />
              </div>

              {/* Servicio de interés */}
              <div className="mb-5 flex flex-col gap-2">
                <label className="font-montserrat text-[11px] font-bold uppercase tracking-[1.5px] text-white/50">
                  Servicio de interés
                </label>
                <div className="relative">
                  <select
                    name="servicio"
                    defaultValue=""
                    className="w-full appearance-none rounded-[10px] border border-[#F18C1B]/40 bg-white/[0.06] px-4 py-3.5 font-poppins text-[14px] text-white/70 outline-none backdrop-blur-sm transition-colors focus:border-[#F18C1B] focus:text-white"
                  >
                    <option value="" disabled className="bg-[#0d0616]">Selecciona un servicio</option>
                    <option className="bg-[#0d0616]">Branding</option>
                    <option className="bg-[#0d0616]">Página Web</option>
                    <option className="bg-[#0d0616]">Tienda Virtual</option>
                    <option className="bg-[#0d0616]">Google Ads &amp; SEO</option>
                    <option className="bg-[#0d0616]">Paquete completo</option>
                  </select>
                  {/* flecha naranja custom */}
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <path d="M1 1l5 5 5-5" stroke="#F18C1B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Cuéntanos tu proyecto */}
              <div className="mb-7 flex flex-col gap-2">
                <label className="font-montserrat text-[11px] font-bold uppercase tracking-[1.5px] text-white/50">
                  Cuéntanos tu proyecto <span className="text-[#F18C1B]">*</span>
                </label>
                <textarea
                  name="proyecto"
                  rows={7}
                  required
                  placeholder="Describe brevemente qué necesitas…"
                  className="w-full resize-none rounded-[10px] border border-[#F18C1B]/40 bg-white/[0.06] px-4 py-3.5 font-poppins text-[14px] text-white placeholder:text-white/25 outline-none backdrop-blur-sm transition-colors focus:border-[#F18C1B]"
                />
              </div>

              {/* Mensaje de error */}
              {status === "error" && (
                <p className="mb-4 rounded-[10px] border border-red-500/30 bg-red-500/10 px-4 py-3 font-poppins text-[13px] text-red-400">
                  ⚠️ {errMsg}
                </p>
              )}

              {/* Botón enviar */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full rounded-full py-4 font-montserrat text-[13px] font-black uppercase tracking-[2.5px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(241,140,27,.45)] disabled:cursor-not-allowed disabled:opacity-80"
                style={{
                  background: status === "success" ? "#2d9e6b" : "#F18C1B",
                  color:      status === "success" ? "#fff"    : "#291231",
                }}
              >
                {status === "loading" && "Enviando…"}
                {status === "success" && "✓ Mensaje enviado"}
                {status === "error"   && "Enviar mensaje →"}
                {status === "idle"    && "Enviar mensaje →"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Campo de texto reutilizable ── */
function FormField({
  name,
  label,
  type,
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-montserrat text-[11px] font-bold uppercase tracking-[1.5px] text-white/50">
        {label}{required && <span className="ml-1 text-[#F18C1B]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-[10px] border border-[#F18C1B]/40 bg-white/[0.06] px-4 py-3.5 font-poppins text-[14px] text-white placeholder:text-white/25 outline-none backdrop-blur-sm transition-colors focus:border-[#F18C1B]"
      />
    </div>
  );
}
