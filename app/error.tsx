"use client";

import Link from "next/link";
import PageErrorTracker from "@/components/analytics/PageErrorTracker";

const PURPLE = "#291231";
const ORANGE = "#F18C1B";
const fm = "var(--font-montserrat)";
const fp = "var(--font-poppins)";

/**
 * Pantalla que ve el visitante cuando algo revienta al renderizar.
 *
 * Hasta ahora Next mostraba su pantalla genérica en inglés y el fallo no
 * llegaba a GA4: el visitante desaparecía sin dejar rastro y en los informes
 * parecía un rebote más. Con `render_error` se sabe en qué página pasa.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      style={{ backgroundColor: "#f8f5fc", padding: "140px 24px 96px" }}
      data-track-location="pagina_error"
    >
      <PageErrorTracker tipo="render_error" detalle={error.digest ?? error.message} />

      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase",
            letterSpacing: "3px", color: ORANGE, marginBottom: 14,
          }}
        >
          Algo salió mal
        </p>

        <h1
          style={{
            fontFamily: fm, fontSize: "clamp(26px, 4.5vw, 38px)", fontWeight: 700,
            color: PURPLE, lineHeight: 1.15, marginBottom: 18,
          }}
        >
          No pudimos cargar esta página
        </h1>

        <p
          style={{
            fontFamily: fp, fontSize: 16.5, color: "#5a5365", lineHeight: 1.7,
            marginBottom: 34,
          }}
        >
          Ya nos hemos enterado y lo estamos revisando. Puedes intentarlo de
          nuevo o escribirnos directamente.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <button
            type="button"
            onClick={reset}
            style={{
              background: ORANGE, color: PURPLE, fontFamily: fm, fontWeight: 700,
              fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px",
              padding: "15px 30px", borderRadius: 100, border: "none", cursor: "pointer",
            }}
          >
            Reintentar
          </button>
          <Link
            href="/contacto"
            style={{
              display: "inline-flex", alignItems: "center", background: "transparent",
              color: PURPLE, border: "2px solid rgba(41,18,49,0.2)", fontFamily: fm,
              fontWeight: 700, fontSize: 14, textTransform: "uppercase",
              letterSpacing: "0.5px", padding: "13px 28px", borderRadius: 100,
              textDecoration: "none",
            }}
          >
            Contactar
          </Link>
        </div>
      </div>
    </main>
  );
}
