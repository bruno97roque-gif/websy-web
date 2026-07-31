"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Registra la lectura de un artículo con su categoría y su longitud.
 *
 * Cruzado con `cta_click` desde `blog_cuerpo` y con `generate_lead`, responde
 * la pregunta que decide el calendario editorial: qué temas del blog traen
 * gente que además pregunta por un servicio, y cuáles solo traen visitas.
 *
 * La categoría se AGRUPA solo para el informe. Las categorías visibles del
 * sitio no se tocan: en lib/blog.ts conviven "SEO" y "SEO Local", "Web",
 * "Páginas Web" y "Diseño web", y si se mandaran tal cual los informes
 * saldrían partidos en trozos demasiado pequeños para decidir nada.
 */
const GRUPOS: Record<string, string> = {
  "ecommerce": "ecommerce",
  "tiendas virtuales": "ecommerce",
  "pagos": "pagos",
  "software": "software",
  "diseño web": "diseno_web",
  "web": "diseno_web",
  "páginas web": "diseno_web",
  "agencia web": "diseno_web",
  "seo": "seo",
  "seo local": "seo",
  "marketing": "marketing",
  "marketing digital": "marketing",
};

function agrupar(categoria: string): string {
  return GRUPOS[categoria.trim().toLowerCase()] ?? "otros";
}

export default function ArticleView({
  categoria,
  minutos,
  slug,
}: {
  categoria: string;
  minutos?: number;
  slug: string;
}) {
  useEffect(() => {
    trackEvent("article_view", {
      article_category: agrupar(categoria),
      article_slug: slug,
      seconds_to_view: minutos ? minutos * 60 : undefined,
    });
  }, [categoria, minutos, slug]);

  return null;
}
