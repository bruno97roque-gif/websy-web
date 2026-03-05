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
        src: "/icon-192.png",   // Crea estos íconos en /public (192×192 y 512×512)
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["business", "productivity"],
    lang: "es-PE",
  };
}
