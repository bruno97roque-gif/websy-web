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
import { AnimatedMedia } from "@/components/ui/animated-media";
import { SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";

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

/* ─── Metadata + Open Graph (home) ─── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Websy – Agencia de Tecnología y Desarrollo Web | Lima, Perú",
    template: "%s | Websy",
  },
  description:
    "Agencia de tecnología y desarrollo de software en Lima, Perú. Creamos páginas web, aplicaciones a medida, tiendas online y branding para que tu negocio se destaque en el mundo digital.",
  keywords: [
    "agencia de tecnología Lima",
    "desarrollo de software Perú",
    "agencia web Lima",
    "diseño web Perú",
    "páginas web Lima",
    "aplicaciones web Perú",
    "tienda online Lima",
    "branding Lima",
    "SEO Perú",
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
    title: "Websy – Agencia de Tecnología y Desarrollo Web | Lima, Perú",
    description:
      "Agencia de tecnología y desarrollo de software en Lima, Perú. Diseño exclusivo, soluciones digitales a medida y estrategia real para que tu negocio se destaque y convierta.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Websy – Agencia de Tecnología Lima, Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Websy – Agencia de Tecnología y Desarrollo Web | Lima, Perú",
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

/* ─── Layout ─── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE" className="scroll-smooth">
      <head>
        {/* JSON-LD global: Organization + WebSite */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
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
            <AnimatedMedia
              webmSrc="/images/alien-saludando.webm"
              gifSrc="/images/alien-saludando-mobile.gif"
              aria-hidden="true"
              className="w-[170px] object-contain md:w-[320px]"
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
