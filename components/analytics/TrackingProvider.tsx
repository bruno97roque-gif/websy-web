"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent, trackLead, type LeadMethod } from "@/lib/analytics";

/**
 * Medición completa del sitio con UN SOLO componente.
 *
 * Sustituye a LeadTracker y amplía la cobertura: con listeners delegados en
 * `document` captura TODO lo que el usuario hace, sin tocar ni un botón ni
 * cambiar el diseño de ninguna página.
 *
 * Qué registra:
 *   · WhatsApp (botón flotante, banners, landings, blog…) → generate_lead
 *   · Teléfono y email                                    → generate_lead
 *   · Redes sociales del footer (FB / IG / TikTok / LinkedIn)
 *   · Cualquier enlace externo (outbound)
 *   · CTA y enlaces internos, menú de navegación y footer
 *   · Descargas de archivos
 *   · Apertura de preguntas frecuentes (<details> de las landings)
 *   · Profundidad de scroll 25 / 50 / 75 / 90 %
 *   · Tiempo en página 15 / 30 / 60 / 120 s
 *   · Errores de JavaScript (máx. 3 por página, para no inundar)
 *   · Decisión del banner de cookies
 *
 * Todo evento lleva `page_path` y `page_type`, y GA4 añade solo el canal
 * (orgánico, directo, social…), así que cada clic se puede leer por fuente.
 */

/* ── Utilidades ───────────────────────────────────────────── */

const SOCIAL_NETWORKS: Record<string, string> = {
  "facebook.com": "facebook",
  "fb.com": "facebook",
  "instagram.com": "instagram",
  "tiktok.com": "tiktok",
  "linkedin.com": "linkedin",
  "youtube.com": "youtube",
  "youtu.be": "youtube",
  "twitter.com": "twitter",
  "x.com": "twitter",
};

const DOWNLOAD_EXT = /\.(pdf|docx?|xlsx?|pptx?|zip|rar|csv|txt)($|\?)/i;

/** Texto corto y limpio de un elemento, para saber QUÉ botón se pulsó. */
function labelOf(el: Element | null): string {
  if (!el) return "";
  const aria = el.getAttribute?.("aria-label");
  const text = (aria || (el as HTMLElement).innerText || el.textContent || "")
    .replace(/\s+/g, " ")
    .trim();
  return text.slice(0, 80);
}

/** Dominio sin "www." de una URL absoluta. */
function hostOf(url: string): string {
  try {
    return new URL(url, window.location.origin).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

/**
 * Dónde está el elemento dentro de la página: cabecera, footer, botón
 * flotante, o el id de la sección que lo contiene. Permite responder
 * "¿desde qué parte de la página me escriben más?" sin tocar componentes.
 */
function resolveLocation(el: Element): string {
  const explicit = el.closest("[data-track-location]");
  if (explicit) return explicit.getAttribute("data-track-location") || "desconocida";

  if (el.closest('a[aria-label="Contactar por WhatsApp"]')) return "boton_flotante";
  if (el.closest("footer")) return "footer";
  if (el.closest("header") || el.closest("nav")) return "menu";

  const section = el.closest("section[id], div[id], main[id]");
  const id = section?.getAttribute("id");
  if (id) return id;

  return "cuerpo";
}

/** Mensaje pre-cargado del enlace de WhatsApp (revela la intención del CTA). */
function waIntent(href: string): string {
  try {
    const text = new URL(href, window.location.origin).searchParams.get("text");
    return text ? text.replace(/\s+/g, " ").trim().slice(0, 100) : "";
  } catch {
    return "";
  }
}

/* ── Componente ───────────────────────────────────────────── */

export default function TrackingProvider() {
  const pathname = usePathname();

  // Marcas ya disparadas en ESTA página (se reinician al cambiar de ruta).
  const firedScroll = useRef<Set<number>>(new Set());
  const firedTime = useRef<Set<number>>(new Set());
  const errorCount = useRef(0);

  /* ── 1. Clics: un único listener para todo el sitio ── */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest) return;

      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      const location = resolveLocation(target);

      /* 1.a — Enlaces */
      if (anchor) {
        const href = anchor.getAttribute("href") || "";
        const label = labelOf(anchor);
        const base = { cta_location: location, link_text: label, link_url: href.slice(0, 200) };

        // Contacto directo → son leads
        let method: LeadMethod | null = null;
        if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)/i.test(href) || /whatsapp/i.test(href)) {
          method = "whatsapp";
        } else if (href.startsWith("tel:")) {
          method = "phone";
        } else if (href.startsWith("mailto:")) {
          method = "email";
        }

        if (method) {
          trackLead(method, {
            ...base,
            ...(method === "whatsapp" ? { wa_intent: waIntent(href) } : {}),
          });
          return;
        }

        // Anclas internas (#contacto-form, etc.)
        if (href.startsWith("#")) {
          trackEvent("anchor_click", { ...base, anchor_target: href });
          return;
        }

        const host = hostOf(href);
        const isExternal = Boolean(host) && host !== window.location.hostname.replace(/^www\./, "");

        // Redes sociales
        if (isExternal) {
          const network = SOCIAL_NETWORKS[host];
          if (network) {
            trackEvent("social_click", { ...base, social_network: network });
            return;
          }
          trackEvent("outbound_click", { ...base, outbound_domain: host });
          return;
        }

        // Descargas
        if (DOWNLOAD_EXT.test(href)) {
          trackEvent("file_download", { ...base, file_name: href.split("/").pop() || href });
          return;
        }

        // Navegación interna: menú, footer o CTA del cuerpo
        const eventName =
          location === "menu" ? "nav_click" : location === "footer" ? "footer_click" : "cta_click";
        trackEvent(eventName, { ...base, link_destination: href });
        return;
      }

      /* 1.b — Botones que no son enlaces (menú móvil, acordeones, submit) */
      const button = target.closest("button, [role='button']") as HTMLElement | null;
      if (button) {
        // El submit del formulario ya se mide en ContactSection con su resultado.
        if ((button as HTMLButtonElement).type === "submit") return;
        trackEvent("button_click", {
          cta_location: location,
          button_text: labelOf(button),
        });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true } as EventListenerOptions);
  }, []);

  /* ── 2. FAQ: apertura de <details> (landings de servicio) ── */
  useEffect(() => {
    const onToggle = (e: Event) => {
      const el = e.target as HTMLDetailsElement | null;
      if (!el || el.tagName !== "DETAILS" || !el.open) return;
      trackEvent("faq_open", {
        faq_question: labelOf(el.querySelector("summary")),
        cta_location: resolveLocation(el),
      });
    };
    // El evento `toggle` no burbujea: se captura en fase de captura.
    document.addEventListener("toggle", onToggle, true);
    return () => document.removeEventListener("toggle", onToggle, true);
  }, []);

  /* ── 3. Profundidad de scroll + tiempo en página (por ruta) ── */
  useEffect(() => {
    firedScroll.current = new Set();
    firedTime.current = new Set();
    errorCount.current = 0;

    const THRESHOLDS = [25, 50, 75, 90];
    let ticking = false;

    const measure = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = ((window.scrollY || doc.scrollTop) / scrollable) * 100;

      for (const t of THRESHOLDS) {
        if (percent >= t && !firedScroll.current.has(t)) {
          firedScroll.current.add(t);
          trackEvent("scroll_depth", { percent_scrolled: t });
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    measure(); // páginas cortas que ya nacen "leídas"

    const SECONDS = [15, 30, 60, 120];
    const timers = SECONDS.map((s) =>
      window.setTimeout(() => {
        if (document.visibilityState !== "visible") return;
        firedTime.current.add(s);
        trackEvent("time_on_page", { seconds: s });
      }, s * 1000),
    );

    return () => {
      window.removeEventListener("scroll", onScroll);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [pathname]);

  /* ── 4. Errores de JavaScript (máx. 3 por página) ── */
  useEffect(() => {
    const onError = (e: ErrorEvent) => {
      if (errorCount.current >= 3) return;
      errorCount.current += 1;
      trackEvent("js_error", {
        error_message: (e.message || "error").slice(0, 120),
        error_source: (e.filename || "").split("/").pop()?.slice(0, 80),
      });
    };
    window.addEventListener("error", onError);
    return () => window.removeEventListener("error", onError);
  }, []);

  return null;
}
