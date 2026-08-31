/**
 * A dónde van los datos de medición y los leads de Websy.
 *
 * Está a la vista y no pasa nada: no es una llave, es una dirección — igual
 * que el identificador de GA4 que ya está en el código. Quien guarda, valida y
 * enseña los datos es el colector, y ahí sí hay llave. Este repositorio es
 * público, así que aquí no puede vivir ningún secreto.
 *
 * Se puede apuntar a otro sitio sin tocar código con COLECTOR_URL en Vercel.
 */
export const COLECTOR = process.env.COLECTOR_URL ?? "https://websy-panel.vercel.app";

/** Identifica de qué web viene el dato. El colector rechaza cualquier otro. */
export const SITIO = "websy.com.pe";

/** WhatsApp de Websy, en formato internacional sin signos. */
export const WHATSAPP = "51940549322";
