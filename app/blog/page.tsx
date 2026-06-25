import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = pageMeta({
  path: "/blog",
  title: "Blog de diseño web, tiendas virtuales y SEO en Perú",
  description:
    "Guías y consejos sobre diseño web, tiendas virtuales, ecommerce, pagos y SEO para empresas en Perú. Aprende a vender más online con Websy.",
});

const PURPLE = "#291231";
const ORANGE = "#F18C1B";
const fp = "var(--font-poppins, sans-serif)";
const fm = "var(--font-montserrat, sans-serif)";

function formatDate(iso: string) {
  const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${meses[m - 1]} ${y}`;
}

export default function BlogIndexPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

  return (
    <main style={{ backgroundColor: "#f8f5fc", minHeight: "100vh" }}>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      {/* HERO */}
      <section
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, #5a2470 0%, transparent 55%), linear-gradient(135deg, #291231 0%, #180a1e 100%)",
          color: "#fff",
          padding: "124px 24px 52px",
        }}
      >
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: ORANGE, marginBottom: 16 }}>
            Blog
          </p>
          <h1 style={{ fontFamily: fm, fontSize: "clamp(30px, 5vw, 50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, maxWidth: 760 }}>
            Aprende a vender más online
          </h1>
          <p style={{ fontFamily: fp, fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.82)", marginTop: 18, maxWidth: 640, lineHeight: 1.6 }}>
            Guías prácticas sobre diseño web, tiendas virtuales, pagos y SEO para empresas en Perú.
          </p>
        </div>
      </section>

      <div style={{ height: 4, background: `linear-gradient(90deg, ${ORANGE} 0%, #e07010 100%)` }} />

      {/* LISTADO */}
      <section style={{ padding: "52px 24px 80px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gap: 22, gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid #ece8f2", borderRadius: 18, padding: "26px 24px", textDecoration: "none", boxShadow: "0 4px 30px rgba(41,18,49,0.05)" }}
            >
              <span style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", background: "#fff3e3", color: "#d2760f", fontFamily: fp, fontSize: 11.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", padding: "5px 11px", borderRadius: 100, marginBottom: 14 }}>
                {p.category}
              </span>
              <h2 style={{ fontFamily: fm, fontSize: 19.5, fontWeight: 700, color: PURPLE, lineHeight: 1.3, margin: "0 0 10px" }}>
                {p.h1}
              </h2>
              <p style={{ fontFamily: fp, fontSize: 15, color: "#5a5365", lineHeight: 1.6, margin: "0 0 18px", flex: 1 }}>
                {p.excerpt}
              </p>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: fp, fontSize: 13, color: "#9a93a6" }}>
                <span>{formatDate(p.datePublished)} · {p.readingMin} min</span>
                <span style={{ color: ORANGE, fontWeight: 700 }}>Leer →</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
