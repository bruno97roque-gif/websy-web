"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_KEY = "websy_cookies_consent";

export default function CookieBanner() {
  // null = sin decisión aún (banner visible), "accepted" | "rejected" = ya decidió
  const [consent, setConsent] = useState<string | null>("accepted"); // empieza "aceptado" para no flashear

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    setConsent(stored); // null si no hay decisión → muestra el banner
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setConsent("accepted");
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setConsent("rejected");
  };

  // Si ya hay decisión guardada, no renderizar nada
  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 99999,
        width: "calc(100% - 32px)",
        maxWidth: 680,
        backgroundColor: "#1a0b28",
        border: "1px solid rgba(241,140,27,0.35)",
        borderRadius: 16,
        padding: "18px 22px",
        boxShadow: "0 16px 60px rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
        animation: "cookieSlideUp 0.4s cubic-bezier(0.34,1.56,0.64,1) both",
      }}
    >
      {/* Icono */}
      <span style={{ fontSize: 26, flexShrink: 0, lineHeight: 1 }}>🍪</span>

      {/* Texto */}
      <p style={{
        flex: 1,
        fontFamily: "var(--font-poppins, sans-serif)",
        fontSize: 13,
        color: "rgba(255,255,255,0.85)",
        lineHeight: 1.6,
        margin: 0,
        minWidth: 200,
      }}>
        Este sitio usa cookies para mejorar tu experiencia.{" "}
        <Link
          href="/politicas-de-privacidad"
          style={{ color: "#F18C1B", textDecoration: "underline", fontWeight: 600 }}
        >
          Ver políticas
        </Link>
      </p>

      {/* Botones */}
      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <button
          onClick={handleReject}
          style={{
            fontFamily: "var(--font-poppins, sans-serif)",
            fontSize: 12,
            fontWeight: 600,
            color: "rgba(255,255,255,0.5)",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 50,
            padding: "8px 18px",
            cursor: "pointer",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          Rechazar
        </button>
        <button
          onClick={handleAccept}
          style={{
            fontFamily: "var(--font-poppins, sans-serif)",
            fontSize: 12,
            fontWeight: 700,
            color: "#291231",
            background: "#F18C1B",
            border: "none",
            borderRadius: 50,
            padding: "8px 22px",
            cursor: "pointer",
            transition: "all 0.2s",
            whiteSpace: "nowrap",
            textTransform: "uppercase",
            letterSpacing: "0.8px",
          }}
        >
          Aceptar 🎉
        </button>
      </div>

      {/* Animación de entrada */}
      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(30px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}
