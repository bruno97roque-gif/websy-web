import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import type { BlogPost } from "@/lib/blog";

/* Layout reusable de artículo de blog (BlogPosting + Breadcrumb + FAQPage). */

const PURPLE = "#291231";
const ORANGE = "#F18C1B";
const WA_HREF =
  "https://wa.me/51940549322?text=Hola%2C%20le%C3%AD%20su%20blog%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n.";
const fp = "var(--font-poppins, sans-serif)";
const fm = "var(--font-montserrat, sans-serif)";

function formatDate(iso: string) {
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} de ${meses[m - 1]} de ${y}`;
}

export default function ArticleLayout({ post }: { post: BlogPost }) {
  const schemas: Record<string, unknown>[] = [
    blogPostingSchema({
      slug: post.slug,
      title: post.title,
      description: post.description,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
    }),
    breadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.h1, path: `/blog/${post.slug}` },
    ]),
  ];
  if (post.faqs && post.faqs.length > 0) schemas.push(faqPageSchema(post.faqs));

  return (
    <main style={{ backgroundColor: "#f8f5fc" }}>
      <JsonLd data={schemas} />

      {/* HERO */}
      <section
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, #5a2470 0%, transparent 55%), linear-gradient(135deg, #291231 0%, #180a1e 100%)",
          color: "#fff",
          padding: "120px 24px 52px",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <nav aria-label="Ruta de navegación" style={{ marginBottom: 20 }}>
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", padding: 0, margin: 0, fontFamily: fp, fontSize: 13 }}>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Inicio</Link>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
              </li>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Link href="/blog" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Blog</Link>
              </li>
            </ol>
          </nav>

          <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: ORANGE, marginBottom: 16 }}>
            {post.category}
          </p>
          <h1 style={{ fontFamily: fm, fontSize: "clamp(28px, 4.6vw, 46px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.02em", margin: 0 }}>
            {post.h1}
          </h1>
          <p style={{ fontFamily: fp, fontSize: 13.5, color: "rgba(255,255,255,0.6)", marginTop: 16 }}>
            {formatDate(post.datePublished)} · {post.readingMin} min de lectura
          </p>
        </div>
      </section>

      <div style={{ height: 4, background: `linear-gradient(90deg, ${ORANGE} 0%, #e07010 100%)` }} />

      {/* CUERPO */}
      <article style={{ padding: "52px 24px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* Intro destacada (citable) */}
          <p style={{ fontFamily: fp, fontSize: "clamp(17px, 2vw, 20px)", color: PURPLE, lineHeight: 1.65, fontWeight: 500, margin: "0 0 40px", paddingLeft: 18, borderLeft: `3px solid ${ORANGE}` }}>
            {post.intro}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {post.sections.map((sec) => (
              <div key={sec.h2}>
                <h2 style={{ fontFamily: fm, fontSize: "clamp(21px, 2.6vw, 27px)", fontWeight: 700, color: PURPLE, lineHeight: 1.25, marginBottom: 12 }}>
                  {sec.h2}
                </h2>
                {sec.body && (
                  <p style={{ fontFamily: fp, fontSize: 16.5, color: "#46404f", lineHeight: 1.75, margin: 0 }}>{sec.body}</p>
                )}
                {sec.bullets && sec.bullets.length > 0 && (
                  <ul style={{ margin: sec.body ? "14px 0 0" : 0, paddingLeft: 22, display: "flex", flexDirection: "column", gap: 9 }}>
                    {sec.bullets.map((b, i) => (
                      <li key={i} style={{ fontFamily: fp, fontSize: 16, color: "#46404f", lineHeight: 1.6 }}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* FAQ */}
      {post.faqs && post.faqs.length > 0 && (
        <section style={{ padding: "16px 24px 8px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontFamily: fm, fontSize: "clamp(20px, 2.6vw, 26px)", fontWeight: 700, color: PURPLE, marginBottom: 18 }}>
              Preguntas frecuentes
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {post.faqs.map((f) => (
                <details key={f.q} style={{ background: "#fff", border: "1px solid #ece8f2", borderRadius: 14, padding: "18px 22px", boxShadow: "0 4px 30px rgba(41,18,49,0.05)" }}>
                  <summary style={{ fontFamily: fm, fontSize: 16, fontWeight: 600, color: PURPLE, cursor: "pointer", listStyle: "none" }}>{f.q}</summary>
                  <p style={{ fontFamily: fp, fontSize: 15.5, color: "#5a5365", lineHeight: 1.7, margin: "12px 0 0" }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELACIONADOS */}
      {post.related && post.related.length > 0 && (
        <section style={{ padding: "32px 24px 8px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "#d2760f", marginBottom: 14 }}>
              Te puede servir
            </p>
            <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {post.related.map((r) => (
                <Link key={r.href} href={r.href} style={{ display: "block", background: "#fff", border: "1px solid #ece8f2", borderRadius: 16, padding: "20px 22px", textDecoration: "none", boxShadow: "0 4px 30px rgba(41,18,49,0.05)" }}>
                  <span style={{ display: "block", fontFamily: fm, fontSize: 16, fontWeight: 700, color: PURPLE, marginBottom: 6 }}>
                    {r.label} <span style={{ color: ORANGE }}>→</span>
                  </span>
                  <span style={{ display: "block", fontFamily: fp, fontSize: 14.5, color: "#5a5365", lineHeight: 1.55 }}>{r.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA cierre */}
      <section style={{ padding: "32px 24px 72px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", background: PURPLE, borderRadius: 20, padding: "36px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: fm, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 800, color: "#fff", margin: 0 }}>
            ¿Tienes un proyecto en <span style={{ color: ORANGE }}>mente</span>?
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
      </section>
    </main>
  );
}
