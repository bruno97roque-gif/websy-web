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

/** ID del contenedor de Google Tag Manager de Websy. */
export const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-M2HQHMZ8";

/** true cuando el sitio sirve el contenedor de GTM. */
export const USES_GTM = GTM_CONTAINER_ID.startsWith("GTM-");

/**
 * Quién envía los eventos a GA4. Ahora los envía Google Tag Manager.
 *
 * El contenedor GTM-M2HQHMZ8 ya tiene publicada (versión 2 "Medición completa
 * v1") la etiqueta de configuración de GA4 y una etiqueta de evento que
 * reenvía los 32 eventos del sitio con sus 36 parámetros. Desde ese momento
 * gtag.js sobra: si siguiera cargándose, cada evento llegaría DOS veces a GA4.
 *
 * Se puede volver atrás sin desplegar poniendo NEXT_PUBLIC_GA4_VIA_GTM=0 en
 * Vercel, por si alguna vez hay que dejar el contenedor fuera de juego.
 */
export const GA4_VIA_GTM = process.env.NEXT_PUBLIC_GA4_VIA_GTM !== "0";

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

  // Solo se consideran "servicio" las rutas que existen de verdad. Antes
  // cualquier URL inventada devolvía "servicio" y los 404 se confundían con
  // páginas reales en los informes.
  if (RUTAS_DE_SERVICIO.has(p)) return "servicio";
  return "desconocida";
}

/** Landings de servicio que existen (app/…/page.tsx). */
const RUTAS_DE_SERVICIO = new Set([
  "/servicios",
  "/desarrollo-web",
  "/desarrollo-de-software-a-medida",
  "/diseno-de-paginas-web",
  "/seo",
  "/google-ads",
  "/branding",
  "/mantenimiento-web",
]);

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

  if (!GA4_VIA_GTM) {
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
