import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  path: "/cotizacion",
  title: "Cotiza tu Página Web o Tienda Virtual",
  description:
    "Cotiza tu página web o tienda virtual en Perú. Cuéntanos tu proyecto y recibe un presupuesto a medida, claro y sin compromiso, en menos de 24 horas.",
});

const PURPLE = "#291231";
const ORANGE = "#F18C1B";
const fp = "var(--font-poppins, sans-serif)";
const fm = "var(--font-montserrat, sans-serif)";
const WA_HREF =
  "https://wa.me/51940549322?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20Websy.";

const steps = [
  { n: "1", t: "Cuéntanos tu proyecto", d: "Por WhatsApp o el formulario de abajo: qué necesitas, para cuándo y qué referencias te gustan." },
  { n: "2", t: "Recibe tu propuesta", d: "Te enviamos un presupuesto claro, con alcance y tiempos, en menos de 24 horas." },
  { n: "3", t: "Arrancamos", d: "Aprobada la propuesta, empezamos. Te acompañamos hasta el lanzamiento y después." },
];

const quoteLinks = [
  { label: "Tienda virtual / ecommerce", href: "/tiendas-virtuales" },
  { label: "Tienda Shopify", href: "/tiendas-virtuales/shopify" },
  { label: "Tienda WooCommerce", href: "/tiendas-virtuales/woocommerce" },
  { label: "Página web profesional", href: "/diseno-de-paginas-web" },
  { label: "Software / sistema a medida", href: "/desarrollo-de-software-a-medida" },
];

const faqs = [
  {
    q: "¿Cuánto cuesta una página web en Perú?",
    a: "El precio de una página web depende del número de secciones, el contenido y las funciones que necesites. Por eso cotizamos a medida: cuéntanos tu proyecto y te enviamos un presupuesto claro, sin costo, en menos de 24 horas.",
  },
  {
    q: "¿Cuánto cuesta una tienda virtual en Perú?",
    a: "El precio de una tienda virtual varía según la cantidad de productos, las pasarelas de pago (Yape, Plin, tarjeta) y las integraciones. Te preparamos un presupuesto a tu medida sin compromiso.",
  },
  {
    q: "¿La cotización tiene algún costo o compromiso?",
    a: "Ninguno. Cotizar tu página web o tienda virtual con Websy es gratis y sin compromiso. Solo si la propuesta te convence, avanzamos.",
  },
];

export default function CotizacionPage() {
  return (
    <main style={{ backgroundColor: "#f8f5fc", minHeight: "100vh" }}>
      <JsonLd
        data={[
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Cotización", path: "/cotizacion" },
          ]),
        ]}
      />

      {/* HERO */}
      <section
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, #5a2470 0%, transparent 55%), linear-gradient(135deg, #291231 0%, #180a1e 100%)",
          color: "#fff",
          padding: "128px 24px 56px",
        }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: ORANGE, marginBottom: 16 }}>
            Cotización sin compromiso
          </p>
          <h1 style={{ fontFamily: fm, fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, maxWidth: 780 }}>
            Cotiza tu página web o tienda virtual
          </h1>
          <p style={{ fontFamily: fp, fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.82)", marginTop: 20, maxWidth: 660, lineHeight: 1.6 }}>
            Cuéntanos qué necesitas y recibe un presupuesto a tu medida, claro y sin compromiso, en menos de 24 horas. Diseño web, tiendas online y software para empresas en Lima y todo el Perú.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: ORANGE, color: PURPLE, fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "15px 30px", borderRadius: 100, textDecoration: "none" }}>
              Cotizar por WhatsApp →
            </a>
            <a href="#contacto-form" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "13px 28px", borderRadius: 100, textDecoration: "none" }}>
              Completar el formulario
            </a>
          </div>
        </div>
      </section>

      <div style={{ height: 4, background: `linear-gradient(90deg, ${ORANGE} 0%, #e07010 100%)` }} />

      {/* PASOS */}
      <section style={{ padding: "60px 24px 20px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <h2 style={{ fontFamily: fm, fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: PURPLE, marginBottom: 28 }}>
            Cómo funciona
          </h2>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {steps.map((s) => (
              <div key={s.n} style={{ background: "#fff", border: "1px solid #ece8f2", borderRadius: 16, padding: "24px 22px", boxShadow: "0 4px 30px rgba(41,18,49,0.05)" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: ORANGE, color: PURPLE, fontFamily: fm, fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  {s.n}
                </div>
                <h3 style={{ fontFamily: fm, fontSize: 17, fontWeight: 700, color: PURPLE, margin: "0 0 6px" }}>{s.t}</h3>
                <p style={{ fontFamily: fp, fontSize: 14.5, color: "#5a5365", lineHeight: 1.6, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ COTIZAMOS */}
      <section style={{ padding: "28px 24px 12px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <h2 style={{ fontFamily: fm, fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 700, color: PURPLE, marginBottom: 16 }}>
            ¿Qué quieres cotizar?
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {quoteLinks.map((q) => (
              <Link key={q.href} href={q.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #e7d8c2", color: "#d2760f", fontFamily: fp, fontWeight: 500, fontSize: 14.5, padding: "10px 18px", borderRadius: 100, textDecoration: "none" }}>
                {q.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ precios */}
      <section style={{ padding: "36px 24px 28px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontFamily: fm, fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: PURPLE, marginBottom: 22 }}>
            Sobre precios y presupuestos
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
          <p style={{ fontFamily: fp, fontSize: 15, color: "#5a5365", marginTop: 24, textAlign: "center" }}>
            👇 Déjanos tus datos en el formulario de abajo y te respondemos hoy mismo.
          </p>
        </div>
      </section>

      {/* Ancla para el formulario global (ContactSection del layout) */}
      <div id="contacto-form" style={{ scrollMarginTop: 90 }} />
    </main>
  );
}
