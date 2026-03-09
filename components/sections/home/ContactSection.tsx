"use client";

import { useState, useRef, useEffect } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

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

          {/* ── LEFT — texto — móvil: primero, desktop: columna izquierda ── */}
          <div className="order-1 flex flex-col md:order-1">

            <p className="font-poppins mb-4 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
              Contáctanos
            </p>
            <h2 className="font-montserrat mb-5 text-[clamp(32px,3.8vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              ¿Listo para llevar<br />
              tu marca a{" "}
              <em className="not-italic text-[#F18C1B]">otra órbita?</em>
            </h2>
            <p className="font-poppins mb-10 max-w-[420px] text-[15px] leading-[1.85] text-white">
              Cuéntanos tu proyecto y te respondemos en menos de 24 horas con
              una propuesta personalizada. Sin compromisos.
            </p>

            {/* GIF — solo visible en desktop dentro de la columna izquierda */}
            <div className="hidden md:flex md:justify-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/vaca-alien.webp"
                alt=""
                aria-hidden="true"
                className="h-auto w-[500px] object-contain drop-shadow-2xl"
                draggable={false}
              />
            </div>

          </div>

          {/* ── RIGHT — formulario — móvil: segundo, desktop: columna derecha ── */}
          <div className="order-2 rounded-[24px] md:order-2 border border-[#F18C1B]/50 bg-white/[0.06] p-8 shadow-[0_8px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] md:px-12 md:py-14">
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
                <label className="font-montserrat text-[11px] font-bold uppercase tracking-[1.5px] text-white">
                  Servicio de interés
                </label>
                <ServiceSelect name="servicio" />
              </div>

              {/* Cuéntanos tu proyecto */}
              <div className="mb-7 flex flex-col gap-2">
                <label className="font-montserrat text-[11px] font-bold uppercase tracking-[1.5px] text-white">
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
              <ShimmerButton
                type="submit"
                className={`${
                  status === "loading" || status === "success"
                    ? "pointer-events-none opacity-80"
                    : ""
                } ${status === "success" ? "!bg-[#2d9e6b] !text-white" : ""}`}
              >
                {status === "loading" && "Enviando…"}
                {status === "success" && "✓ Mensaje enviado"}
                {status === "error" && (
                  <>
                    Enviar mensaje
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
                {status === "idle" && (
                  <>
                    Enviar mensaje
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </ShimmerButton>

            </form>
          </div>

          {/* GIF — solo móvil, después del formulario (order-3) */}
          <div className="order-3 flex justify-center md:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/vaca-alien.webp"
              alt=""
              aria-hidden="true"
              className="h-auto w-[240px] object-contain drop-shadow-2xl"
              draggable={false}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Custom select de servicios ── */
const SERVICIOS = ["Branding", "Página Web", "Tienda Virtual", "Google Ads & SEO", "Paquete completo"];

function ServiceSelect({ name }: { name: string }) {
  const [open, setOpen]         = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", zIndex: 9999 }}>
      <input type="hidden" name={name} value={selected} />

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-[10px] border border-[#F18C1B]/40 bg-white/[0.06] px-4 py-3.5 font-poppins text-[14px] outline-none transition-colors focus:border-[#F18C1B]"
        style={{ color: selected ? "white" : "rgba(255,255,255,0.35)" }}
      >
        <span>{selected || "Selecciona un servicio"}</span>
        <svg
          width="12" height="7" viewBox="0 0 12 7" fill="none"
          className="shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M1 1l5 5 5-5" stroke="#F18C1B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div style={{ position: "absolute", left: 0, right: 0, top: "calc(100% + 6px)", zIndex: 9999, backgroundColor: "#1a0b28", border: "1px solid rgba(241,140,27,0.3)", borderRadius: 12, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.85)" }}>
          {SERVICIOS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { setSelected(opt); setOpen(false); }}
              className="flex w-full items-center gap-3 px-4 py-3 font-poppins text-[14px] transition-colors hover:bg-[#F18C1B]/10"
              style={{ color: selected === opt ? "#F18C1B" : "rgba(255,255,255,0.85)" }}
            >
              {selected === opt && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                  <path d="M2 7l3.5 3.5L12 4" stroke="#F18C1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <span className={selected === opt ? "" : "ml-[22px]"}>{opt}</span>
            </button>
          ))}
        </div>
      )}
    </div>
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
      <label className="font-montserrat text-[11px] font-bold uppercase tracking-[1.5px] text-white">
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
