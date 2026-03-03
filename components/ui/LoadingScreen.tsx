"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [fading, setFading]   = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Empieza a desvanecerse a los 750ms
    const fadeTimer = window.setTimeout(() => setFading(true), 750);
    // Se elimina del DOM a los 1050ms (750 + 300ms de transición)
    const hideTimer = window.setTimeout(() => setVisible(false), 1050);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#180a1e] transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/logo-white.webp"
        alt="Websy"
        className="h-10 w-auto object-contain"
        draggable={false}
      />

      {/* Barra de carga */}
      <div className="mt-7 h-[2px] w-[110px] overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full w-full origin-left rounded-full bg-[#F18C1B]"
          style={{ animation: "loadBar 0.78s ease-in-out forwards" }}
        />
      </div>
    </div>
  );
}
