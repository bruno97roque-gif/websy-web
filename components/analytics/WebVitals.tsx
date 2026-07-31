"use client";

import { useReportWebVitals } from "next/web-vitals";
import { trackEvent } from "@/lib/analytics";

/**
 * Envía a GA4 la experiencia REAL de los visitantes (Core Web Vitals).
 *
 * Vercel Speed Insights ya los mide, pero en un panel aparte que no se puede
 * cruzar con las conversiones. Mandándolos también a GA4 se puede responder la
 * pregunta que importa: "¿la gente que ve la web lenta escribe menos por
 * WhatsApp?" y saber QUÉ página concreta hay que arreglar primero.
 *
 * Umbrales oficiales de Google para clasificar cada medición.
 */
const UMBRALES: Record<string, [number, number]> = {
  LCP: [2500, 4000],
  INP: [200, 500],
  CLS: [0.1, 0.25],
  FCP: [1800, 3000],
  TTFB: [800, 1800],
};

function calificar(nombre: string, valor: number): string {
  const u = UMBRALES[nombre];
  if (!u) return "sin_umbral";
  if (valor <= u[0]) return "bueno";
  if (valor <= u[1]) return "mejorable";
  return "deficiente";
}

export default function WebVitals() {
  useReportWebVitals((metric) => {
    // CLS es un decimal pequeño; el resto son milisegundos.
    const valor = metric.name === "CLS"
      ? Math.round(metric.value * 1000) / 1000
      : Math.round(metric.value);

    trackEvent("web_vitals", {
      metric_name: metric.name,
      metric_value: valor,
      metric_rating: calificar(metric.name, metric.value),
      metric_id: metric.id,
    });
  });

  return null;
}
