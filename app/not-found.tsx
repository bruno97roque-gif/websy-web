import Link from "next/link";
import type { Metadata } from "next";
import PageErrorTracker from "@/components/analytics/PageErrorTracker";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

const PURPLE = "#291231";
const ORANGE = "#F18C1B";
const fm = "var(--font-montserrat)";
const fp = "var(--font-poppins)";

/** Destinos reales del sitio, para que un 404 no sea un callejón sin salida. */
const ATAJOS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/desarrollo-web", label: "Desarrollo web" },
  { href: "/tiendas-virtuales", label: "Tiendas virtuales" },
  { href: "/precios", label: "Precios" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function NotFound() {
  return (
    <main
      style={{ backgroundColor: "#f8f5fc", padding: "140px 24px 96px" }}
      data-track-location="pagina_404"
    >
      <PageErrorTracker tipo="page_404" />

      <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase",
            letterSpacing: "3px", color: ORANGE, marginBottom: 14,
          }}
        >
          Error 404
        </p>

        <h1
          style={{
            fontFamily: fm, fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700,
            color: PURPLE, lineHeight: 1.15, marginBottom: 18,
          }}
        >
          Esta página no existe
        </h1>

        <p
          style={{
            fontFamily: fp, fontSize: 16.5, color: "#5a5365", lineHeight: 1.7,
            marginBottom: 36,
          }}
        >
          Puede que el enlace esté mal escrito o que la página haya cambiado de
          sitio. Te dejamos por dónde seguir.
        </p>

        <div
          style={{
            display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {ATAJOS.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              style={{
                fontFamily: fm, fontSize: 14, fontWeight: 600, color: PURPLE,
                background: "#fff", border: "1px solid #ece8f2", borderRadius: 100,
                padding: "11px 22px", textDecoration: "none",
              }}
            >
              {a.label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: 9, background: ORANGE,
            color: PURPLE, fontFamily: fm, fontWeight: 700, fontSize: 14,
            textTransform: "uppercase", letterSpacing: "0.5px", padding: "15px 30px",
            borderRadius: 100, textDecoration: "none",
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
