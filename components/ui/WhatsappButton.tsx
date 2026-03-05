"use client";

import { useState } from "react";

interface WhatsappButtonProps {
  /** Número en formato internacional sin + ni espacios, ej: 51950817844 */
  phone?: string;
  /** Mensaje pre-cargado en WhatsApp */
  message?: string;
}

export default function WhatsappButton({
  phone   = "51950817844",
  message = "Hola, me interesa saber más sobre los servicios de Websy 👋",
}: WhatsappButtonProps) {
  const [hovered, setHovered] = useState(false);

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-[9990] flex items-center gap-3 select-none"
    >
      {/* ── Tooltip ── */}
      <span
        className={`
          whitespace-nowrap rounded-full bg-white px-4 py-2
          font-poppins text-[13px] font-medium text-[#1a1020]
          shadow-[0_4px_20px_rgba(0,0,0,.18)]
          transition-all duration-300
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}
        `}
      >
        ¡Escríbenos por WhatsApp!
      </span>

      {/* ── Botón principal ── */}
      <div className="relative flex h-[58px] w-[58px] items-center justify-center">

        {/* Pulse ring — capa exterior */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-[waPulse_2s_ease-out_infinite]" />

        {/* Pulse ring — capa media */}
        <span className="absolute inset-1 rounded-full bg-[#25D366] opacity-20 animate-[waPulse_2s_ease-out_infinite_.4s]" />

        {/* Botón verde */}
        <span
          className={`
            relative z-10 flex h-[58px] w-[58px] items-center justify-center
            rounded-full bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,.5)]
            transition-transform duration-200
            ${hovered ? "scale-110" : "scale-100"}
          `}
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="white"
            aria-hidden="true"
          >
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.827.737 5.48 2.027 7.782L0 32l8.437-2.006A15.932 15.932 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 0 1-6.78-1.858l-.485-.288-5.01 1.19 1.237-4.873-.316-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.95c-.398-.2-2.355-1.162-2.72-1.295-.365-.133-.63-.2-.895.2-.265.398-1.028 1.295-1.26 1.56-.232.265-.465.298-.863.1-.398-.2-1.68-.619-3.2-1.974-1.183-1.054-1.981-2.355-2.214-2.753-.232-.398-.025-.613.175-.812.18-.178.398-.465.598-.698.2-.232.265-.398.398-.664.133-.265.066-.498-.033-.698-.1-.2-.895-2.157-1.227-2.953-.323-.775-.65-.67-.895-.683-.232-.013-.498-.016-.764-.016s-.698.1-.963.398c-.265.298-1.028 1.004-1.028 2.45s1.052 2.84 1.199 3.038c.149.2 2.07 3.162 5.015 4.434.701.303 1.248.483 1.674.618.703.224 1.343.192 1.849.116.564-.084 1.736-.71 1.981-1.395.248-.685.248-1.272.175-1.395-.073-.125-.265-.2-.664-.398z" />
          </svg>
        </span>
      </div>
    </a>
  );
}
