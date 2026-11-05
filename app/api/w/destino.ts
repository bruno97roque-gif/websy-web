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
export const COLECTOR = process.env.COLECTOR_URL ?? "https://websy-datos.josegaspard.dev/panel";

/** Identifica de qué web viene el dato. El colector rechaza cualquier otro. */
export const SITIO = "websy.com.pe";

/**
 * ¿Es una prueba de punta a punta del equipo técnico?
 *
 * Un contacto que se llama «Marco Verificacion» se guarda en el panel marcado
 * como prueba y NO manda aviso a nadie: así se puede comprobar el camino entero
 * (formulario o modal → panel → fuente) sin mandarle un correo falso a ventas.
 */
export function esPrueba(nombre: string | null | undefined): boolean {
  return /^\s*marco\s+verificaci[oó]n\b/i.test(nombre ?? "");
}

/** WhatsApp de Websy, en formato internacional sin signos. */
export const WHATSAPP = "51940549322";
