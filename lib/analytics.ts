/**
 * Analítica de conversiones — capa fina sobre gtag.js (GA4, ID G-KTWZ5KEZR7).
 *
 * NO agrega ninguna herramienta ni CTA nuevo: solo REGISTRA como evento las
 * acciones de contacto que el sitio YA tiene (clic a WhatsApp, envío del
 * formulario, clic a teléfono/email). Antes estas acciones no disparaban nada,
 * por eso GA4 marcaba 0 conversiones.
 *
 * Para que cuenten como conversión en los informes hay que marcar el evento
 * `generate_lead` como "evento clave" en GA4 (Administrar → Eventos clave).
 */

declare global {
  interface Window {
    // gtag se define en app/layout.tsx (script de inicialización de GA4)
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

/** Envía un evento a GA4 si gtag está disponible (no rompe en SSR ni sin GA). */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, params);
  } catch {
    /* si gtag no cargó (adblock, etc.) simplemente no registramos */
  }
}

/** Canal por el que el usuario decidió contactar. */
export type LeadMethod = "whatsapp" | "form" | "phone" | "email";

/**
 * Registra un lead. Dispara `generate_lead` (evento recomendado de GA4, se
 * puede marcar como conversión) y un evento descriptivo por canal para poder
 * segmentar en los informes.
 */
export function trackLead(method: LeadMethod, extra: EventParams = {}): void {
  const location =
    typeof window !== "undefined" ? window.location.pathname : undefined;

  trackEvent("generate_lead", { method, page_location: location, ...extra });

  const perChannel: Record<LeadMethod, string> = {
    whatsapp: "whatsapp_click",
    form: "contact_form_submit",
    phone: "phone_click",
    email: "email_click",
  };
  trackEvent(perChannel[method], { page_location: location, ...extra });
}

export {};
