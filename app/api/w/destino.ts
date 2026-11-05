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
export const COLECTOR = process.env.COLECTOR_URL ?? "https://websy-panel.vercel.app/panel";

/** Identifica de qué web viene el dato. El colector rechaza cualquier otro. */
export const SITIO = "websy.com.pe";

/**
 * A quién va el correo de aviso de un contacto nuevo.
 *
 * Un contacto que se llama «Marco Verificacion» es una prueba de punta a punta
 * del propio equipo técnico: su aviso NO va al equipo comercial sino a quien
 * hace la prueba. Sin esto, comprobar que el aviso sale obligaba a mandarle un
 * correo falso a ventas. El lead se guarda igual en el panel, y el panel ya lo
 * marca como prueba para borrarlo con «Borrar pruebas».
 */
export function destinoAviso(nombre: string | null | undefined): string {
  if (/^\s*marco\s+verificaci[oó]n\b/i.test(nombre ?? "")) return "josegaspardhernani@gmail.com";
  return process.env.CONTACT_EMAIL ?? "ventas@websy.com.pe";
}

/** WhatsApp de Websy, en formato internacional sin signos. */
export const WHATSAPP = "51940549322";
