import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { faqPageSchema, breadcrumbSchema, serviceSchema, speakablePageSchema } from "@/lib/schema";

/* ─────────────────────────────────────────────────────────────
   /precios — página de dinero transaccional.
   Captura la intención "precios / cuánto cuesta" (página web, tienda
   virtual, software) manteniendo la postura de marca de Websy: no se
   publica un precio cerrado, se cotiza a medida en 24 h. Ranquea para
   el long-tail y alimenta AI Overviews con los FACTORES de precio.
   Server component. Paleta #291231 / #F18C1B (idéntica a ServiceLanding).
───────────────────────────────────────────────────────────── */

export const metadata: Metadata = pageMeta({
  path: "/precios",
  title: "Precios: cuánto cuesta una página web, tienda virtual o software en Perú",
  description:
    "¿Cuánto cuesta una página web, tienda virtual o software a medida en Perú? Qué define el precio, qué incluye cada servicio y cómo pedir tu cotización gratis en menos de 24 horas.",
});

const PURPLE = "#291231";
const ORANGE = "#F18C1B";
const WA_HREF =
  "https://wa.me/51940549322?text=Hola%20quiero%20una%20cotizaci%C3%B3n%20y%20saber%20precios%20de%20sus%20servicios.";
const fp = "var(--font-poppins, sans-serif)";
const fm = "var(--font-montserrat, sans-serif)";

const breadcrumb = [
  { name: "Inicio", path: "/" },
  { name: "Precios", path: "/precios" },
];

type Tier = {
  name: string;
  href: string;
  ideal: string;
  includes: string[];
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Página web",
    href: "/diseno-de-paginas-web",
    ideal: "Empresas y emprendedores que necesitan presencia profesional y captar contactos.",
    includes: [
      "Diseño a medida, responsive y alineado a tu marca",
      "Página administrable (editas tú el contenido)",
      "Formulario de contacto y botón de WhatsApp",
      "SEO on-page para aparecer en Google",
      "Hosting, dominio y certificado SSL",
    ],
  },
  {
    name: "Tienda virtual",
    href: "/tiendas-virtuales",
    ideal: "Negocios que quieren vender online con pagos y catálogo listos para operar.",
    includes: [
      "Shopify o WooCommerce según tu negocio",
      "Catálogo cargado con fichas y categorías",
      "Pasarelas: Yape, Plin, tarjeta (Niubiz / Izipay)",
      "SEO de fichas y categorías para vender más",
      "Capacitación para administrar tu tienda",
    ],
    highlight: true,
  },
  {
    name: "Software a medida",
    href: "/desarrollo-de-software-a-medida",
    ideal: "Empresas que necesitan automatizar procesos con un sistema web propio.",
    includes: [
      "Sistema web hecho para tu operación",
      "Módulos según tu flujo (ventas, stock, reportes)",
      "Usuarios y permisos por rol",
      "Integraciones con tus herramientas",
      "Soporte y evolución del sistema",
    ],
  },
];

const factores = [
  "El alcance del proyecto: número de secciones, productos o módulos.",
  "La plataforma: Shopify (con plan mensual) o WooCommerce/WordPress (sin mensualidad de plataforma).",
  "Diseño a medida vs. una plantilla adaptada a tu marca.",
  "Pasarelas de pago e integraciones: facturación electrónica, courier, CRM o control de stock.",
  "Contenido: si nos entregas textos e imágenes o los producimos nosotros.",
  "Funciones extra: blog, multidioma, reservas, membresías o reportes.",
];

const incluyeSiempre = [
  "Diagnóstico y propuesta con alcance y tiempos claros.",
  "Diseño responsive que se ve perfecto en el celular.",
  "Optimización SEO on-page desde el primer día.",
  "Formulario y WhatsApp para que te lleguen clientes.",
  "Capacitación y soporte después del lanzamiento.",
];

const faqs = [
  {
    q: "¿Cuánto cuesta una página web en Perú?",
    a: "No hay un precio único: depende del número de secciones, el contenido y las funciones (blog, reservas, multidioma, etc.). Por eso trabajamos con una cotización a medida y sin costo que te enviamos en menos de 24 horas, con el alcance y los tiempos por escrito.",
  },
  {
    q: "¿Cuánto cuesta una tienda virtual o ecommerce?",
    a: "El precio de una tienda virtual varía según la cantidad de productos, la plataforma (Shopify o WooCommerce), las pasarelas de pago y las integraciones (facturación, courier, stock). Te preparamos una propuesta clara según lo que vendes y cómo cobras.",
  },
  {
    q: "¿Por qué no publican una lista de precios cerrada?",
    a: "Porque un precio serio sale de entender tu negocio. Una cifra tirada sin preguntar nada suele significar que te cobran de más o te entregan de menos. Preferimos un diagnóstico corto y una propuesta a tu medida, para que sepas exactamente qué recibes.",
  },
  {
    q: "¿La cotización tiene costo?",
    a: "No. La cotización es gratuita y sin compromiso. Nos cuentas qué necesitas por WhatsApp o formulario y te enviamos la propuesta en menos de 24 horas.",
  },
  {
    q: "¿Puedo pagar en partes?",
    a: "Sí. Normalmente trabajamos con un adelanto para iniciar y el saldo contra entrega o por etapas. Los términos quedan definidos en la propuesta antes de empezar.",
  },
  {
    q: "¿Cuánto demora tener mi proyecto listo?",
    a: "Depende del alcance. Una página web suele tomar de 1 a 3 semanas; una tienda virtual y un software a medida, más según los módulos. El tiempo estimado siempre va en la propuesta.",
  },
];

export default function PreciosPage() {
  return (
    <main style={{ backgroundColor: "#f8f5fc" }}>
      <JsonLd
        data={[
          serviceSchema({
            name: "Cotización y precios de proyectos web",
            description:
              "Cotización a medida de páginas web, tiendas virtuales y software para empresas en Lima y Perú, con propuesta clara en menos de 24 horas.",
            slug: "/precios",
          }),
          faqPageSchema(faqs),
          breadcrumbSchema(breadcrumb),
          speakablePageSchema("/precios", ["h1", ".precios-speakable-intro"]),
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
          <nav aria-label="Ruta de navegación" style={{ marginBottom: 22 }}>
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 8, listStyle: "none", padding: 0, margin: 0, fontFamily: fp, fontSize: 13 }}>
              {breadcrumb.map((b, i) => (
                <li key={b.path} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {i < breadcrumb.length - 1 ? (
                    <Link href={b.path} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{b.name}</Link>
                  ) : (
                    <span style={{ color: ORANGE }}>{b.name}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span style={{ color: "rgba(255,255,255,0.3)" }}>/</span>}
                </li>
              ))}
            </ol>
          </nav>

          <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: ORANGE, marginBottom: 16 }}>
            Precios y cotización
          </p>
          <h1 style={{ fontFamily: fm, fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, maxWidth: 820 }}>
            ¿Cuánto cuesta tu página web, tienda virtual o software?
          </h1>
          <p className="precios-speakable-intro" style={{ fontFamily: fp, fontSize: "clamp(16px, 2vw, 19px)", color: "rgba(255,255,255,0.82)", marginTop: 20, maxWidth: 700, lineHeight: 1.6 }}>
            El precio depende de lo que necesitas: secciones, productos, pasarelas de pago e integraciones. En Websy no te tiramos una cifra al aire: hacemos un diagnóstico corto y te enviamos una <strong style={{ color: "#fff" }}>cotización a medida y gratis en menos de 24 horas</strong>, con alcance y tiempos por escrito.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
            <Link href="/cotizacion" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: ORANGE, color: PURPLE, fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "15px 30px", borderRadius: 100, textDecoration: "none" }}>
              Pedir mi cotización gratis →
            </Link>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.3)", fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "13px 28px", borderRadius: 100, textDecoration: "none" }}>
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div style={{ height: 4, background: `linear-gradient(90deg, ${ORANGE} 0%, #e07010 100%)` }} />

      {/* ── TIERS ── */}
      <section style={{ padding: "64px 24px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: fm, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: PURPLE, textAlign: "center", marginBottom: 8 }}>
            Precios según lo que necesitas
          </h2>
          <p style={{ fontFamily: fp, fontSize: 16, color: "#5a5365", textAlign: "center", maxWidth: 620, margin: "0 auto 40px", lineHeight: 1.6 }}>
            Cada proyecto se cotiza a medida. Esto es lo que incluye cada servicio para que sepas exactamente qué recibes.
          </p>

          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", alignItems: "start" }}>
            {tiers.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#fff",
                  border: t.highlight ? `2px solid ${ORANGE}` : "1px solid #ece8f2",
                  borderRadius: 20,
                  padding: "30px 26px",
                  boxShadow: t.highlight ? "0 18px 50px rgba(241,140,27,0.16)" : "0 4px 30px rgba(41,18,49,0.05)",
                  position: "relative",
                }}
              >
                {t.highlight && (
                  <span style={{ position: "absolute", top: -12, left: 26, background: ORANGE, color: PURPLE, fontFamily: fm, fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "1px", padding: "5px 12px", borderRadius: 100 }}>
                    Más solicitado
                  </span>
                )}
                <h3 style={{ fontFamily: fm, fontSize: 22, fontWeight: 800, color: PURPLE, margin: "0 0 6px" }}>{t.name}</h3>
                <p style={{ fontFamily: fm, fontSize: 15, fontWeight: 700, color: ORANGE, margin: "0 0 4px" }}>Cotización a medida</p>
                <p style={{ fontFamily: fp, fontSize: 13.5, color: "#6b6478", margin: "0 0 18px", lineHeight: 1.5 }}>Propuesta clara en menos de 24 h.</p>
                <p style={{ fontFamily: fp, fontSize: 14, color: "#46404f", margin: "0 0 16px", lineHeight: 1.6 }}>
                  <strong style={{ color: PURPLE }}>Ideal para:</strong> {t.ideal}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "flex", flexDirection: "column", gap: 10 }}>
                  {t.includes.map((it, i) => (
                    <li key={i} style={{ display: "flex", gap: 9, fontFamily: fp, fontSize: 14.5, color: "#46404f", lineHeight: 1.5 }}>
                      <span style={{ color: ORANGE, fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link href={t.href} style={{ display: "block", textAlign: "center", background: t.highlight ? ORANGE : "transparent", color: t.highlight ? PURPLE : PURPLE, border: t.highlight ? "none" : `2px solid ${PURPLE}`, fontFamily: fm, fontWeight: 700, fontSize: 13.5, textTransform: "uppercase", letterSpacing: "0.5px", padding: "13px 20px", borderRadius: 100, textDecoration: "none" }}>
                  Ver detalle y cotizar →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACTORES + INCLUYE SIEMPRE ── */}
      <section style={{ padding: "40px 24px 8px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "grid", gap: 44, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          <div>
            <h2 style={{ fontFamily: fm, fontSize: "clamp(20px, 2.6vw, 26px)", fontWeight: 700, color: PURPLE, marginBottom: 14, lineHeight: 1.2 }}>
              Qué define tu precio
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {factores.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: 10, fontFamily: fp, fontSize: 15.5, color: "#46404f", lineHeight: 1.55 }}>
                  <span style={{ color: ORANGE, fontWeight: 700, flexShrink: 0 }}>›</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 style={{ fontFamily: fm, fontSize: "clamp(20px, 2.6vw, 26px)", fontWeight: 700, color: PURPLE, marginBottom: 14, lineHeight: 1.2 }}>
              Qué incluye siempre
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
              {incluyeSiempre.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: 10, fontFamily: fp, fontSize: 15.5, color: "#46404f", lineHeight: 1.55 }}>
                  <span style={{ color: ORANGE, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS DE PRECIO (long-tail) ── */}
      <section style={{ padding: "36px 24px 8px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "#d2760f", marginBottom: 14 }}>
            Guías de precios en el blog
          </p>
          <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {[
              { label: "¿Cuánto cuesta una página web en Perú?", href: "/blog/cuanto-cuesta-una-pagina-web-en-peru", desc: "Qué define el precio de una web profesional y qué debe incluir." },
              { label: "¿Cuánto cuesta una tienda virtual en Perú?", href: "/blog/cuanto-cuesta-una-tienda-virtual-en-peru", desc: "Factores que mueven el costo de un ecommerce y cómo cotizarlo." },
              { label: "¿Cuánto cuesta una tienda en Shopify?", href: "/blog/cuanto-cuesta-una-tienda-en-shopify", desc: "Plan mensual, comisiones y qué esperar de una tienda Shopify." },
            ].map((a) => (
              <Link key={a.href} href={a.href} style={{ display: "block", background: "#fff", border: "1px solid #ece8f2", borderRadius: 16, padding: "20px 22px", textDecoration: "none", boxShadow: "0 4px 30px rgba(41,18,49,0.05)" }}>
                <span style={{ display: "block", fontFamily: fm, fontSize: 16, fontWeight: 700, color: PURPLE, marginBottom: 6 }}>
                  {a.label} <span style={{ color: ORANGE }}>→</span>
                </span>
                <span style={{ display: "block", fontFamily: fp, fontSize: 14.5, color: "#5a5365", lineHeight: 1.55 }}>{a.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "36px 24px 72px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontFamily: fp, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "#d2760f", marginBottom: 10 }}>
            Preguntas frecuentes sobre precios
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

          <div style={{ marginTop: 40, background: PURPLE, borderRadius: 20, padding: "36px 32px", textAlign: "center" }}>
            <h2 style={{ fontFamily: fm, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 800, color: "#fff", margin: 0 }}>
              Pide tu <span style={{ color: ORANGE }}>cotización gratis</span>
            </h2>
            <p style={{ fontFamily: fp, fontSize: 15.5, color: "rgba(255,255,255,0.75)", margin: "12px auto 24px", maxWidth: 520 }}>
              Cuéntanos qué necesitas y te enviamos una propuesta a tu medida en menos de 24 horas. Sin costo y sin compromiso.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <Link href="/cotizacion" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: ORANGE, color: PURPLE, fontFamily: fm, fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.5px", padding: "14px 28px", borderRadius: 100, textDecoration: "none" }}>
                Pedir cotización →
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
