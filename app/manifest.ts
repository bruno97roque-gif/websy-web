import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Websy – Agencia Web Lima, Perú",
    short_name: "Websy",
    description:
      "Diseño web, marketing digital y branding en Lima, Perú.",
    start_url: "/",
    display: "standalone",
    background_color: "#291231",
    theme_color: "#291231",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/logo-white.webp",
        sizes: "any",
        type: "image/webp",
        purpose: "any",
      },
    ],
    categories: ["business", "productivity"],
    lang: "es-PE",
  };
}
