/**
 * Capa única de medición de Websy.
 *
 * Diseño "GTM-first con respaldo": todos los eventos se empujan SIEMPRE al
 * `dataLayer` (que es lo que lee Google Tag Manager). Si el sitio todavía no
 * tiene contenedor de GTM configurado (variable `NEXT_PUBLIC_GTM_ID` vacía),
 * además se envían por `gtag.js` directo para que la medición no se detenga
 * ni un día. Cuando GTM entra en producción, gtag.js deja de cargarse y GTM
 * pasa a ser el único emisor → cero eventos duplicados.
 *
 * Regla de oro: aquí NO se inventan CTA ni herramientas nuevas. Solo se
 * REGISTRA lo que el sitio ya tiene (WhatsApp, formulario, teléfono, email,
 * redes, enlaces, FAQ, scroll).
 *
 * Ningún evento envía datos personales (nombre, email o teléfono escritos por
 * el usuario). Del formulario solo viaja el NOMBRE del campo y si se completó.
 */

export const GA4_MEASUREMENT_ID = "G-KTWZ5KEZR7";

/** ID del contenedor de Google Tag Manager (GTM-XXXXXXX). Vacío = aún sin GTM. */
export const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

/** true cuando el sitio ya sirve el contenedor de GTM. */
export const USES_GTM = GTM_CONTAINER_ID.startsWith("GTM-");

declare global {
  interface Window {
    // gtag se define en app/layout.tsx (script de inicialización de GA4)
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export type EventParams = Record<string, string | number | boolean | undefined>;

/* ─────────────────────────────────────────────────────────────
   Contexto de página — se adjunta a TODOS los eventos para poder
   segmentar los informes por tipo de página. El canal (orgánico,
   directo, social…) lo añade GA4 solo: session_default_channel_group.
───────────────────────────────────────────────────────────── */

/** Clasifica la URL en un tipo de página legible en los informes. */
export function getPageType(pathname?: string): string {
  const raw =
    pathname ?? (typeof window !== "undefined" ? window.location.pathname : "/");
  const p = raw.replace(/\/+$/, "") || "/";

  if (p === "/") return "home";
  if (p === "/blog") return "blog_index";
  if (p.startsWith("/blog/")) return "blog_post";
  if (p === "/contacto" || p === "/cotizacion") return "conversion";
  if (p === "/precios") return "precios";
  if (p === "/nosotros") return "nosotros";
  if (p === "/servicios") return "servicios_index";
  if (p.startsWith("/diseno-de-paginas-web/")) return "landing_rubro";
  if (p.startsWith("/tiendas-virtuales")) return "servicio_ecommerce";
  if (p.startsWith("/sistemas/")) return "servicio_software";
  if (p === "/terminos" || p === "/politicas-de-privacidad") return "legal";
  return "servicio";
}

function pageContext(): EventParams {
  if (typeof window === "undefined") return {};
  const pathname = window.location.pathname;
  return {
    page_path: pathname,
    page_type: getPageType(pathname),
  };
}

/** Quita claves vacías para no ensuciar los informes de GA4. */
function clean(params: EventParams): EventParams {
  const out: EventParams = {};
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== "") out[k] = v;
  }
  return out;
}

/* ─────────────────────────────────────────────────────────────
   Emisor
───────────────────────────────────────────────────────────── */

/**
 * Registra un evento. Va siempre al dataLayer (GTM) y, mientras no haya
 * contenedor de GTM, también por gtag.js directo a GA4.
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const payload = clean({ ...pageContext(), ...params });

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...payload });
  } catch {
    /* dataLayer bloqueado por alguna extensión: no rompemos la página */
  }

  if (!USES_GTM) {
    try {
      window.gtag?.("event", name, payload);
    } catch {
      /* gtag no cargó (adblock): simplemente no se registra */
    }
  }
}

/* ─────────────────────────────────────────────────────────────
   Leads (conversiones)
───────────────────────────────────────────────────────────── */

/** Canal por el que el usuario decidió contactar. */
export type LeadMethod = "whatsapp" | "form" | "phone" | "email";

const LEAD_EVENT_BY_METHOD: Record<LeadMethod, string> = {
  whatsapp: "whatsapp_click",
  form: "contact_form_submit",
  phone: "phone_click",
  email: "email_click",
};

/**
 * Registra un lead: dispara `generate_lead` (evento clave ya creado en la
 * propiedad GA4 543011744) más un evento descriptivo por canal, para poder
 * separar WhatsApp / formulario / teléfono / email en los informes.
 */
export function trackLead(method: LeadMethod, extra: EventParams = {}): void {
  trackEvent("generate_lead", { lead_method: method, ...extra });
  trackEvent(LEAD_EVENT_BY_METHOD[method], { lead_method: method, ...extra });
}

export {};
