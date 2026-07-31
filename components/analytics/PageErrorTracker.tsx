"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Registra en GA4 que un visitante ha aterrizado en una página rota.
 *
 * Sin esto, un enlace mal escrito en Google, en una campaña o en un blog
 * externo manda gente a la nada y en los informes se ve como una visita
 * normal que "rebotó". Saber la URL exacta y de dónde venía permite arreglar
 * el enlace o poner una redirección el mismo día.
 */
export default function PageErrorTracker({
  tipo,
  detalle,
}: {
  tipo: "page_404" | "render_error";
  detalle?: string;
}) {
  useEffect(() => {
    trackEvent(tipo, {
      error_type: tipo === "page_404" ? "no_encontrada" : "render",
      error_message: detalle?.slice(0, 120),
      referrer_source: document.referrer
        ? new URL(document.referrer).hostname.replace(/^www\./, "")
        : "directo",
    });
  }, [tipo, detalle]);

  return null;
}
