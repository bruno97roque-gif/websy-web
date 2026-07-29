"use client";

import { useEffect } from "react";
import { trackLead, type LeadMethod } from "@/lib/analytics";

/**
 * Escucha global de clics en los CTA de contacto que el sitio YA tiene.
 *
 * Con un único listener delegado captura CUALQUIER enlace de contacto de todo
 * el sitio (el botón flotante de WhatsApp, el CTABanner, y los ~15 enlaces
 * wa.me / tel: / mailto: repartidos por las páginas) sin modificar cada uno.
 * No añade botones ni cambia el diseño: solo mide.
 */
export default function LeadTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      let method: LeadMethod | null = null;

      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)/i.test(href) || /whatsapp/i.test(href)) {
        method = "whatsapp";
      } else if (href.startsWith("tel:")) {
        method = "phone";
      } else if (href.startsWith("mailto:")) {
        method = "email";
      }

      if (method) {
        trackLead(method, { link_url: href });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true } as EventListenerOptions);
  }, []);

  return null;
}
