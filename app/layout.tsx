import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/ui/CTABanner";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import LoadingScreen from "@/components/ui/LoadingScreen";
import WhatsappButton from "@/components/ui/WhatsappButton";
import CookieBanner from "@/components/ui/CookieBanner";
import ContactSection from "@/components/sections/home/ContactSection";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/* ─── Fuentes ─── */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

/* ─── Viewport (separado de metadata desde Next 14) ─── */
export const viewport: Viewport = {
  themeColor: "#291231",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/* ─── Metadata + Open Graph ─── */
const SITE_URL = "https://websy.com.pe"; // ← cambia al dominio real cuando tengas

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Websy – Agencia Web Lima, Perú",
    template: "%s | Websy",
  },
  description:
    "Agencia de diseño web y marketing digital en Lima, Perú. Creamos páginas web, tiendas online, branding y estrategia digital para que tu negocio se destaque.",
  keywords: [
    "agencia web Lima",
    "diseño web Perú",
    "páginas web Lima",
    "tienda online Perú",
    "marketing digital Lima",
    "SEO Perú",
    "branding Lima",
    "websy",
  ],
  authors: [{ name: "Websy", url: SITE_URL }],
  creator: "Websy",
  publisher: "Websy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: SITE_URL,
    siteName: "Websy",
    title: "Websy – Agencia Web Lima, Perú",
    description:
      "Diseño exclusivo, tecnología de vanguardia y estrategia real para que tu negocio se destaque y convierta.",
    images: [
      {
        url: "/og-image.png", // Crea una imagen 1200×630 y ponla en /public
        width: 1200,
        height: 630,
        alt: "Websy – Agencia Web Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websy – Agencia Web Lima, Perú",
    description:
      "Diseño exclusivo, tecnología de vanguardia y estrategia real para que tu negocio se destaque y convierta.",
    images: ["/og-image.png"],
    creator: "@websy_pe", // ← cambia al usuario real de Twitter/X si tienen
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ─── JSON-LD (Schema.org LocalBusiness) ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Websy",
  description:
    "Agencia de diseño web y marketing digital en Lima, Perú. Especialistas en páginas web, tiendas online, branding y Google Ads.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-websy-dark.png`,
  image: `${SITE_URL}/og-image.png`,
  telephone: "+51940549322",
  email: "ventas@websy.com.pe",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -12.0464,
    longitude: -77.0428,
  },
  areaServed: {
    "@type": "Country",
    name: "Perú",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/websy.pe",
    "https://www.facebook.com/websy.pe",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Websy",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño Web" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tienda Virtual" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads & SEO" } },
    ],
  },
};

/* ─── Layout ─── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect a fuentes para mejorar LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} cursor-none overflow-x-hidden bg-white text-[#1a1020] antialiased`}
      >
        <LoadingScreen />
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <ContactSection />
        <CTABanner
          buttonText="Escríbenos por WhatsApp"
          buttonHref="https://wa.me/51940549322?text=Hola%20deseo%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20servicios%20y%20como%20pueden%20ayudarme%20con%20mi%20marca."
          image={
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/images/alien-saludando.webp"
              alt=""
              aria-hidden="true"
              className="w-[170px] object-contain md:w-[320px]"
              draggable={false}
            />
          }
        />
        <Footer />
        <WhatsappButton />
        <CookieBanner />
        {/* Vercel Analytics — registra visitas y eventos */}
        <Analytics />
        {/* Vercel Speed Insights — mide Core Web Vitals reales */}
        <SpeedInsights />
      </body>
    </html>
  );
}
