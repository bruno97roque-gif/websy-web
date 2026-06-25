import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import {
  serviceSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";

/* ─────────────────────────────────────────────────────────────
   Componente reusable de landing de servicio.
   Renderiza hero + secciones + FAQ (con schema FAQPage) + CTA dual,
   con la paleta de Websy (#291231 / #F18C1B). Server component.
───────────────────────────────────────────────────────────── */

export type LandingSection = { h2: string; body?: string; bullets?: string[] };
export type LandingFaq = { q: string; a: string };
export type LandingStat = { value: string; label: string };
export type LandingRelated = { label: string; href: string; desc: string };

export type ServiceLandingProps = {
  slug: string; // "/tiendas-virtuales"
  breadcrumb: { name: string; path: string }[];
  eyebrow: string;
  h1: string;
  intro: string; // 40-60 palabras, citable
  highlights?: string[]; // chips bajo el hero (plataformas/pasarelas)
  stats?: LandingStat[];
  sections: LandingSection[];
  related?: LandingRelated[]; // enlazado en silo (pilar ↔ hijas)
  articles?: LandingRelated[]; // enlazado al blog (página de dinero → artículos)
  faqs: LandingFaq[];
  serviceName: string;
  serviceDescription: string;
};

const PURPLE = "#291231";
const ORANGE = "#F18C1B";
const WA_HREF =
  "https://wa.me/51940549322?text=Hola%20deseo%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20servicios%20y%20como%20pueden%20ayudarme%20con%20mi%20marca.";

const fp = "var(--font-poppins, sans-serif)";
const fm = "var(--font-montserrat, sans-serif)";

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
      <circle cx="12" cy="12" r="11" fill="rgba(241,140,27,0.14)" />
      <path d="M7 12.5l3.2 3.2L17 9" stroke={ORANGE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceLanding({
  slug,
  breadcrumb,
  eyebrow,
  h1,
  intro,
  highlights,
  stats,
  sections,
  related,
  articles,
  faqs,
  serviceName,
  serviceDescription,
}: ServiceLandingProps) {
  return (
    <main style={{ backgroundColor: "#f8f5fc" }}>
      <JsonLd
        data={[
          serviceSchema({ name: serviceName, description: serviceDescription, slug }),
          faqPageSchema(faqs),
          breadcrumbSchema(breadcrumb),
        ]}
      />

      {/* ── HERO ── */}
      <section
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, #5a2470 0%, transparent 55%), linear-gradient(135deg, #291231 0%, #180a1e 100%)",
          color: "#fff",
          padding: "128px 24px 64px",
        }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          {/* Breadcrumb visible */}
          <nav aria-label="Ruta de navegación" style={{ marginBottom: 22 }}>
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", padding: 0, margin: 0, fontFamily: fp, fontSize: 13 }}>
              {breadcrumb.map((b, i) => (
                <li key={b.path} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {i < breadcrumb.length - 1 ? (
                    <Link href={b.path} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
                      {b.name}
                    </Link>
                  ) : (
                    <span style={{ color: ORANGE }}>{b.name}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: ORANGE, marginBottom: 16 }}>
            {eyebrow}
          </p>
          <h1 style={{ fontFamily: fm, fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, maxWidth: 800 }}>
            {h1}
          </h1>
          <p style={{ fontFamily: fp, fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.82)", marginTop: 20, maxWidth: 680, lineHeight: 1.6 }}>
            {intro}
          </p>

          {highlights && highlights.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 26 }}>
              {highlights.map((h) => (
                <span key={h} style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 100, padding: "7px 15px", fontFamily: fp, fontSize: 13.5, color: "rgba(255,255,255,0.92)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: ORANGE }} />
                  {h}
                </span>
              ))}
            </div>
          )}

          {/* CTA dual */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
            <Link href="/cotizacion" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: ORANGE, color: PURPLE, fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "15px 30px", borderRadius: 100, textDecoration: "none" }}>
              Cotizar mi proyecto →
            </Link>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "13px 28px", borderRadius: 100, textDecoration: "none" }}>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Franja naranja */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${ORANGE} 0%, #e07010 100%)` }} />

      {/* ── STATS ── */}
      {stats && stats.length > 0 && (
        <section style={{ background: PURPLE, padding: "0 24px" }}>
          <div style={{ maxWidth: 920, margin: "0 auto", display: "grid", gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)`, gap: 1, background: "rgba(255,255,255,0.08)" }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: PURPLE, padding: "26px 16px", textAlign: "center" }}>
                <div style={{ fontFamily: fm, fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: ORANGE, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: fp, fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── SECCIONES ── */}
      <section style={{ padding: "64px 24px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: 44 }}>
          {sections.map((sec) => (
            <div key={sec.h2}>
              <h2 style={{ fontFamily: fm, fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: PURPLE, lineHeight: 1.18, marginBottom: 14, letterSpacing: "-0.01em" }}>
                {sec.h2}
              </h2>
              {sec.body && (
                <p style={{ fontFamily: fp, fontSize: 16.5, color: "#46404f", lineHeight: 1.75, margin: 0 }}>{sec.body}</p>
              )}
              {sec.bullets && sec.bullets.length > 0 && (
                <ul style={{ listStyle: "none", padding: 0, margin: sec.body ? "18px 0 0" : 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {sec.bullets.map((b, i) => (
                    <li key={i} style={{ display: "flex", gap: 11, fontFamily: fp, fontSize: 16, color: "#46404f", lineHeight: 1.6 }}>
                      <Check />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── RELACIONADOS (enlazado en silo) ── */}
      {related && related.length > 0 && (
        <section style={{ padding: "12px 24px 8px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  style={{ display: "block", background: "#fff", border: "1px solid #ece8f2", borderRadius: 16, padding: "20px 22px", textDecoration: "none", boxShadow: "0 4px 30px rgba(41,18,49,0.05)" }}
                >
                  <span style={{ display: "block", fontFamily: fm, fontSize: 16.5, fontWeight: 700, color: PURPLE, marginBottom: 6 }}>
                    {r.label} <span style={{ color: ORANGE }}>→</span>
                  </span>
                  <span style={{ display: "block", fontFamily: fp, fontSize: 14.5, color: "#5a5365", lineHeight: 1.55 }}>{r.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ARTÍCULOS DEL BLOG (página de dinero → blog) ── */}
      {articles && articles.length > 0 && (
        <section style={{ padding: "28px 24px 8px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "#d2760f", marginBottom: 14 }}>
              Sigue aprendiendo en el blog
            </p>
            <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {articles.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  style={{ display: "block", background: "#fff", border: "1px solid #ece8f2", borderRadius: 16, padding: "20px 22px", textDecoration: "none", boxShadow: "0 4px 30px rgba(41,18,49,0.05)" }}
                >
                  <span style={{ display: "block", fontFamily: fm, fontSize: 16, fontWeight: 700, color: PURPLE, marginBottom: 6 }}>
                    {a.label} <span style={{ color: ORANGE }}>→</span>
                  </span>
                  <span style={{ display: "block", fontFamily: fp, fontSize: 14.5, color: "#5a5365", lineHeight: 1.55 }}>{a.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section style={{ padding: "20px 24px 72px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "#d2760f", marginBottom: 10 }}>
            Preguntas frecuentes
          </p>
          <h2 style={{ fontFamily: fm, fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: PURPLE, marginBottom: 24 }}>
            Lo que más nos preguntan
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f) => (
              <details key={f.q} style={{ background: "#fff", border: "1px solid #ece8f2", borderRadius: 14, padding: "18px 22px", boxShadow: "0 4px 30px rgba(41,18,49,0.05)" }}>
                <summary style={{ fontFamily: fm, fontSize: 16.5, fontWeight: 600, color: PURPLE, cursor: "pointer", listStyle: "none" }}>
                  {f.q}
                </summary>
                <p style={{ fontFamily: fp, fontSize: 15.5, color: "#5a5365", lineHeight: 1.7, margin: "12px 0 0" }}>{f.a}</p>
              </details>
            ))}
          </div>

          {/* CTA cierre */}
          <div style={{ marginTop: 40, background: PURPLE, borderRadius: 20, padding: "36px 32px", textAlign: "center" }}>
            <h2 style={{ fontFamily: fm, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 800, color: "#fff", margin: 0 }}>
              ¿Listo para <span style={{ color: ORANGE }}>empezar</span>?
            </h2>
            <p style={{ fontFamily: fp, fontSize: 15.5, color: "rgba(255,255,255,0.75)", margin: "12px auto 24px", maxWidth: 520 }}>
              Cuéntanos qué necesitas y te enviamos una propuesta a tu medida en menos de 24 horas.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <Link href="/cotizacion" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: ORANGE, color: PURPLE, fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "14px 28px", borderRadius: 100, textDecoration: "none" }}>
                Cotizar mi proyecto →
              </Link>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "12px 26px", borderRadius: 100, textDecoration: "none" }}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
