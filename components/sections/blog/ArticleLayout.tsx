import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { blogPostingSchema, breadcrumbSchema, faqPageSchema, howToSchema, BLOG_AUTHOR } from "@/lib/schema";
import { SITE_URL } from "@/lib/seo";
import type { BlogPost } from "@/lib/blog";
import ArticleView from "@/components/analytics/ArticleView";

/* Layout reusable de artículo de blog (BlogPosting + Breadcrumb + FAQPage). */

const PURPLE = "#291231";
const ORANGE = "#F18C1B";
const WA_HREF =
  "https://wa.me/51940549322?text=Hola%2C%20le%C3%AD%20su%20blog%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n.";
const fp = "var(--font-poppins, sans-serif)";
const fm = "var(--font-montserrat, sans-serif)";

/* Estilos de interacción (hover, chevron FAQ, viñetas de marca, acentos).
   Van en un <style> scopeado a .art porque los inline styles no soportan
   :hover ni pseudo-elementos, y el componente debe seguir siendo server
   component (SEO) sin handlers de cliente. */
const ART_CSS = `
.art-crumb{transition:color .18s ease}
.art-crumb:hover{color:#fff !important}

.art-h2{position:relative}
.art-h2::before{content:"";display:block;width:34px;height:3px;border-radius:2px;background:${ORANGE};margin-bottom:14px}

.art-ul{list-style:none;margin:14px 0 0;padding:0;display:flex;flex-direction:column;gap:11px}
.art-ul--first{margin-top:0}
.art-ul li{position:relative;padding-left:28px;font-family:${fp};font-size:16px;color:#3f3948;line-height:1.62}
.art-ul li::before{content:"";position:absolute;left:2px;top:8px;width:7px;height:7px;border-radius:2px;background:${ORANGE};transform:rotate(45deg)}

.art-link{transition:filter .15s ease}
.art-link:hover{filter:brightness(1.12)}

.art-faq{background:#fff;border:1px solid #ece8f2;border-radius:14px;box-shadow:0 4px 30px rgba(41,18,49,.05);transition:border-color .2s ease,box-shadow .2s ease;overflow:hidden}
.art-faq:hover{border-color:#f3c894}
.art-faq[open]{border-color:${ORANGE};box-shadow:0 10px 34px rgba(41,18,49,.09)}
.art-faq-q{list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;padding:18px 22px;font-family:${fm};font-size:16px;font-weight:600;color:${PURPLE}}
.art-faq-q::-webkit-details-marker{display:none}
.art-faq-q::after{content:"";flex:0 0 auto;width:9px;height:9px;border-right:2px solid ${ORANGE};border-bottom:2px solid ${ORANGE};transform:rotate(45deg);margin-top:-4px;transition:transform .25s ease}
.art-faq[open] .art-faq-q::after{transform:rotate(-135deg);margin-top:3px}

.art-rel{background:#fff;border:1px solid #ece8f2;box-shadow:0 4px 30px rgba(41,18,49,.05);transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}
.art-rel:hover{transform:translateY(-4px);border-color:${ORANGE};box-shadow:0 14px 44px rgba(41,18,49,.13)}
.art-rel-arrow{display:inline-block;transition:transform .2s ease}
.art-rel:hover .art-rel-arrow{transform:translateX(5px)}

.art-btn{transition:transform .18s ease,box-shadow .18s ease,background .18s ease,border-color .18s ease}
.art-btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(241,140,27,.45)}
.art-btn-ghost{background:transparent;border:2px solid rgba(255,255,255,.3)}
.art-btn-ghost:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.6)}
`;

function formatDate(iso: string) {
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} de ${meses[m - 1]} de ${y}`;
}

/* Convierte enlaces markdown [texto](/ruta) del cuerpo en enlaces reales.
   Los internos (empiezan con "/") usan next/link → enlazado interno SEO
   con anchor de keyword. Los externos abren en pestaña nueva.
   Permite sembrar enlaces contextuales a las páginas de dinero dentro
   del texto, no solo en las tarjetas "relacionados". */
function renderRich(text: string): React.ReactNode {
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    const isInternal = href.startsWith("/");
    const style = { color: "#c9640a", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 } as const;
    out.push(
      isInternal ? (
        <Link key={`l${i}`} href={href} className="art-link" style={style}>{label}</Link>
      ) : (
        <a key={`l${i}`} href={href} target="_blank" rel="noopener noreferrer" className="art-link" style={style}>{label}</a>
      )
    );
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length > 0 ? out : text;
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

  /* HowTo solo para guías genuinamente por pasos: slug "cómo…" y ≥3 secciones
     con encabezado numerado ("1. …", "2) …"). Evita marcar como HowTo los
     "cómo" que en realidad son artículos explicativos sin pasos secuenciales. */
  const numberedRe = /^\s*\d+\s*[.)-]\s*/;
  const stepSections = post.sections.filter((s) => numberedRe.test(s.h2));
  if (post.slug.startsWith("como-") && stepSections.length >= 3) {
    schemas.push(
      howToSchema({
        name: post.h1,
        description: post.description,
        url: `${SITE_URL}/blog/${post.slug}`,
        steps: stepSections.map((s) => ({
          name: s.h2.replace(numberedRe, "").trim(),
          text: s.body ?? (s.bullets ? s.bullets.join(" ") : s.h2),
        })),
      })
    );
  }

  return (
    <main className="art" style={{ backgroundColor: "#f8f5fc" }}>
      <JsonLd data={schemas} />
      <ArticleView
        categoria={post.category}
        minutos={post.readingMin}
        slug={post.slug}
      />
      <style dangerouslySetInnerHTML={{ __html: ART_CSS }} />

      {/* HERO */}
      <section
        data-track-location="blog_hero"
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
                <Link href="/" className="art-crumb" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Inicio</Link>
                <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
              </li>
              <li style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Link href="/blog" className="art-crumb" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Blog</Link>
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
            Por {BLOG_AUTHOR} · {formatDate(post.datePublished)} · {post.readingMin} min de lectura
          </p>
        </div>
      </section>

      <div style={{ height: 4, background: `linear-gradient(90deg, ${ORANGE} 0%, #e07010 100%)` }} />

      {/* CUERPO */}
      <article data-track-location="blog_cuerpo" style={{ padding: "52px 24px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* Intro destacada (citable) */}
          <p style={{ fontFamily: fp, fontSize: "clamp(17px, 2vw, 20px)", color: PURPLE, lineHeight: 1.65, fontWeight: 500, margin: "0 0 44px", paddingLeft: 20, borderLeft: `3px solid ${ORANGE}` }}>
            {post.intro}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
            {post.sections.map((sec) => (
              <div key={sec.h2}>
                <h2 className="art-h2" style={{ fontFamily: fm, fontSize: "clamp(21px, 2.6vw, 27px)", fontWeight: 700, color: PURPLE, lineHeight: 1.25, marginBottom: 12 }}>
                  {sec.h2}
                </h2>
                {sec.body && (
                  <p style={{ fontFamily: fp, fontSize: 16.5, color: "#3f3948", lineHeight: 1.78, margin: 0 }}>{renderRich(sec.body)}</p>
                )}
                {sec.bullets && sec.bullets.length > 0 && (
                  <ul className={`art-ul${sec.body ? "" : " art-ul--first"}`}>
                    {sec.bullets.map((b, i) => (
                      <li key={i}>{renderRich(b)}</li>
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
        <section data-track-location="blog_faq" style={{ padding: "20px 24px 8px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h2 className="art-h2" style={{ fontFamily: fm, fontSize: "clamp(20px, 2.6vw, 26px)", fontWeight: 700, color: PURPLE, marginBottom: 18 }}>
              Preguntas frecuentes
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {post.faqs.map((f) => (
                <details key={f.q} className="art-faq">
                  <summary className="art-faq-q">{f.q}</summary>
                  <p style={{ fontFamily: fp, fontSize: 15.5, color: "#5a5365", lineHeight: 1.7, margin: 0, padding: "0 22px 20px" }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELACIONADOS */}
      {post.related && post.related.length > 0 && (
        <section data-track-location="blog_relacionados" style={{ padding: "36px 24px 8px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "#d2760f", marginBottom: 14 }}>
              Te puede servir
            </p>
            <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {post.related.map((r) => (
                <Link key={r.href} href={r.href} className="art-rel" style={{ display: "block", borderRadius: 16, padding: "20px 22px", textDecoration: "none" }}>
                  <span style={{ display: "block", fontFamily: fm, fontSize: 16, fontWeight: 700, color: PURPLE, marginBottom: 6 }}>
                    {r.label} <span className="art-rel-arrow" style={{ color: ORANGE }}>→</span>
                  </span>
                  <span style={{ display: "block", fontFamily: fp, fontSize: 14.5, color: "#5a5365", lineHeight: 1.55 }}>{r.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA cierre */}
      <section data-track-location="blog_cta_cierre" style={{ padding: "36px 24px 72px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", background: PURPLE, borderRadius: 20, padding: "40px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: fm, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 800, color: "#fff", margin: 0 }}>
            ¿Tienes un proyecto en <span style={{ color: ORANGE }}>mente</span>?
          </h2>
          <p style={{ fontFamily: fp, fontSize: 15.5, color: "rgba(255,255,255,0.75)", margin: "12px auto 24px", maxWidth: 520 }}>
            Cuéntanos qué necesitas y te enviamos una propuesta a tu medida en menos de 24 horas.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <Link href="/cotizacion" className="art-btn art-btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: ORANGE, color: PURPLE, fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "14px 28px", borderRadius: 100, textDecoration: "none" }}>
              Cotizar mi proyecto →
            </Link>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="art-btn art-btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "#fff", fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "12px 26px", borderRadius: 100, textDecoration: "none" }}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
