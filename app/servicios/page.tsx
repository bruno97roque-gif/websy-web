import type { Metadata } from "next";
import Link from "next/link";
import ServicesSection from "@/components/sections/home/ServicesSection";
import { pageMeta } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { servicesSchema, breadcrumbSchema } from "@/lib/schema";
import { RUBRO_LINKS, SERVICE_LINKS } from "@/lib/nav";

export const metadata: Metadata = pageMeta({
  path: "/servicios",
  title: "Servicios: web, tiendas online, software, SEO y Ads",
  description:
    "Servicios de Websy en Perú: páginas web, tiendas virtuales, software a medida, SEO, Google Ads, branding y mantenimiento. Cotiza gratis en menos de 24 horas.",
});

const PURPLE = "#291231";
const ORANGE = "#F18C1B";
const fp = "var(--font-poppins, sans-serif)";
const fm = "var(--font-montserrat, sans-serif)";

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={[
          servicesSchema(),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
          ]),
        ]}
      />

      {/* Cabecera propia: hasta el 11-ago esta página no tenía H1 y todo su texto
          venía de bloques compartidos con el resto del sitio. */}
      <section
        data-track-location="servicios_hero"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, #5a2470 0%, transparent 55%), linear-gradient(135deg, #291231 0%, #180a1e 100%)",
          color: "#fff",
          padding: "128px 24px 64px",
        }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <p
            style={{
              fontFamily: fp,
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: ORANGE,
              marginBottom: 16,
            }}
          >
            Servicios
          </p>
          <h1
            style={{
              fontFamily: fm,
              fontSize: "clamp(30px, 5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: 800,
            }}
          >
            Servicios de desarrollo web y marketing digital en Perú
          </h1>
          <p
            style={{
              fontFamily: fp,
              fontSize: "clamp(16px, 2vw, 19px)",
              color: "rgba(255,255,255,0.82)",
              marginTop: 20,
              maxWidth: 700,
              lineHeight: 1.6,
            }}
          >
            En Websy cubrimos todo el camino digital de una empresa peruana: la página web que te
            presenta, la tienda virtual que te vende, el software que te ordena por dentro y el SEO
            y Google Ads que te traen clientes. Un solo equipo, sin pasarte de proveedor en
            proveedor.
          </p>
        </div>
      </section>

      <div style={{ height: 4, background: `linear-gradient(90deg, ${ORANGE} 0%, #e07010 100%)` }} />

      <ServicesSection />

      {/* Índice de servicios: enlaces en el cuerpo hacia cada landing. El menú ya
          los tenía, pero un enlace de navegación no transmite la misma señal que
          uno editorial dentro del contenido. */}
      <section
        data-track-location="servicios_indice"
        style={{ background: "#f8f5fc", padding: "8px 24px 72px" }}
      >
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: fm,
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 700,
              color: PURPLE,
              lineHeight: 1.18,
              marginBottom: 10,
              letterSpacing: "-0.01em",
            }}
          >
            Todos nuestros servicios, uno por uno
          </h2>
          <p
            style={{
              fontFamily: fp,
              fontSize: 16.5,
              color: "#46404f",
              lineHeight: 1.75,
              margin: "0 0 26px",
            }}
          >
            Cada servicio tiene su propia página con el detalle de qué incluye, cómo trabajamos y
            qué define el precio. Si no sabes por dónde empezar, mira{" "}
            <Link href="/precios" style={{ color: "#8b3fa8", fontWeight: 600 }}>
              precios y rangos de inversión
            </Link>{" "}
            o{" "}
            <Link href="/cotizacion" style={{ color: "#8b3fa8", fontWeight: 600 }}>
              pide una cotización gratis
            </Link>
            .
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 10,
            }}
          >
            {[...SERVICE_LINKS, ...RUBRO_LINKS].map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  style={{
                    display: "block",
                    background: "#fff",
                    border: "1px solid #e7ddf0",
                    borderRadius: 12,
                    padding: "13px 16px",
                    fontFamily: fp,
                    fontSize: 15,
                    color: PURPLE,
                    textDecoration: "none",
                  }}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
