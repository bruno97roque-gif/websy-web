import Link from "next/link";
import { SERVICE_LINKS } from "@/lib/nav";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Blog", href: "/blog" },
  { label: "Cotizar", href: "/cotizacion" },
  { label: "Contacto", href: "/contacto" },
];

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.93a8.16 8.16 0 0 0 4.77 1.52V7.01a4.85 4.85 0 0 1-1.01-.32z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { icon: <FacebookIcon />, href: "https://www.facebook.com/profile.php?id=61580476667281", label: "Facebook" },
  { icon: <InstagramIcon />, href: "https://www.instagram.com/websy.agencia_de_marketing/", label: "Instagram" },
  { icon: <TikTokIcon />, href: "https://www.tiktok.com/@websy.agencia.de.mkt", label: "TikTok" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/websy-agencia-web/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#ffffff", position: "relative", overflow: "hidden" }}>

      {/* ─────────────────────────────────────────────────
          IMAGEN DE FONDO — para moverla hacia arriba/abajo
          cambia el valor de "bottom" (ej: 44, 80, 120…).
          Para que se vea más del paisaje, súbelo (más grande).
          Para que se vea menos, bájalo (número menor).
      ───────────────────────────────────────────────── */}
      <div style={{
        position: "absolute",
        bottom: 44,   /* ← EDITA ESTE NÚMERO para subir/bajar la imagen */
        left: 0,
        right: 0,
        height: "100%",
        backgroundImage: "url('/images/fondo-footer.webp')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        pointerEvents: "none",
      }} />

      {/* ── Contenido principal ── */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 1600, margin: "0 auto", padding: "52px 32px 110px" }}>

        {/* Fila: logo · nav · social — columna centrada en móvil, fila en desktop */}
        <div className="flex flex-col items-center gap-7 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <img
            src="/images/logo-websy-servicios.webp"
            alt="Websy"
            style={{ height: 38, objectFit: "contain" }}
          />

          {/* Nav */}
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "10px 32px", justifyContent: "center" }}>
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  fontFamily: "var(--font-poppins, sans-serif)",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#291231",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Redes sociales */}
          <div style={{ display: "flex", gap: 10 }}>
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  backgroundColor: "#291231",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                {icon}
              </a>
            ))}
          </div>

        </div>

        {/* ── Servicios (enlazado por silo) ── */}
        <nav
          aria-label="Servicios"
          style={{
            marginTop: 28,
            paddingTop: 22,
            borderTop: "1px solid rgba(41,18,49,0.10)",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 22px",
            justifyContent: "center",
          }}
        >
          {SERVICE_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-poppins, sans-serif)",
                fontSize: 13,
                fontWeight: 400,
                color: "#6b6478",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── Barra legal ── */}
      <div style={{
        position: "relative",
        zIndex: 10,
        borderTop: "1px solid rgba(41,18,49,0.10)",
        backgroundColor: "rgba(255,255,255,0.65)",
        backdropFilter: "blur(6px)",
      }}>
        <div style={{ maxWidth: 1600, margin: "0 auto", padding: "14px 32px" }}
          className="flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
          <p style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: 12, color: "#291231", margin: 0 }}>
            © {new Date().getFullYear()} Websy Todos los derechos Reservados
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/terminos" style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: 12, color: "#291231", textDecoration: "none" }}>
              Términos y Condiciones
            </Link>
            <Link href="/politicas-de-privacidad" style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: 12, color: "#291231", textDecoration: "none" }}>
              Políticas de Privacidad
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
