import { ImageResponse } from "next/og";

/**
 * Portada 1200×630 generada al vuelo, con la marca y el título de la página.
 *
 * Hasta ahora las 97 URLs compartían la misma `og-image.png`: cada vez que
 * alguien pasaba un artículo por WhatsApp salía la misma tarjeta genérica, y
 * los 66 artículos del blog no tenían ni una imagen propia (las 6 que cargaban
 * eran el logo y la interfaz).
 *
 * Vive en /og —no en /api/og— porque robots.txt bloquea /api/ y estas imágenes
 * sí deben poder rastrearse.
 *
 *   /og?t=Título de la página&k=Categoría
 */

export const runtime = "edge";
// La portada la piden los buscadores y las redes por cada una de las 111 URLs.
// Sin esto se volvía a dibujar el PNG en cada petición (x-vercel-cache: MISS
// siempre). El dibujo solo cambia si cambia el título, así que se puede cachear.
export const revalidate = 31536000;

const MORADO = "#291231";
const NARANJA = "#F18C1B";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const titulo = (searchParams.get("t") || "Agencia de desarrollo web en Lima, Perú").slice(0, 110);
  const kicker = (searchParams.get("k") || "Websy").slice(0, 40);

  // Títulos largos piden cuerpo menor para no desbordar la caja.
  const tam = titulo.length > 78 ? 54 : titulo.length > 52 ? 64 : 74;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: MORADO,
          padding: "68px 76px",
          position: "relative",
        }}
      >
        {/* Halo de marca en la esquina */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(241,140,27,0.16)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 4, background: NARANJA, display: "flex" }} />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#d9cfe0",
              display: "flex",
            }}
          >
            {kicker}
          </div>
        </div>

        <div
          style={{
            fontSize: tam,
            lineHeight: 1.15,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -1,
            display: "flex",
            maxWidth: 1000,
          }}
        >
          {titulo}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#ffffff", display: "flex" }}>
            websy<span style={{ color: NARANJA, display: "flex" }}>.com.pe</span>
          </div>
          <div style={{ fontSize: 24, color: "#b7abc2", display: "flex" }}>Lima, Perú</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
