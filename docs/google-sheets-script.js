/**
 * ══════════════════════════════════════════════════════════════
 *  WEBSY — Script de Google Apps para recibir datos del formulario
 *  y guardarlos automáticamente en Google Sheets.
 *
 *  PASOS PARA DESPLEGARLO:
 *  ─────────────────────────────────────────────────────────────
 *  1. Ve a https://sheets.google.com y crea una hoja nueva.
 *     Renómbrala a "Contactos" (o como quieras).
 *
 *  2. En la hoja ve a: Extensiones → Apps Script
 *
 *  3. Borra el código de ejemplo y pega TODO este archivo.
 *
 *  4. Cambia SHEET_NAME si le pusiste otro nombre a la hoja.
 *
 *  5. Haz clic en "Implementar" → "Nueva implementación"
 *     - Tipo: Aplicación web
 *     - Ejecutar como: Yo (tu cuenta de Google)
 *     - Quién tiene acceso: Cualquier persona
 *     Haz clic en "Implementar" y autoriza los permisos.
 *
 *  6. Copia la URL que te da ("URL de la aplicación web").
 *     Pégala en tu .env.local como:
 *     GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/xxx/exec
 *
 *  7. ¡Listo! Cada vez que alguien envíe el formulario, sus datos
 *     aparecerán automáticamente en tu Google Sheet.
 * ══════════════════════════════════════════════════════════════
 */

const SHEET_NAME = "Contactos"; // ← Cambia si le diste otro nombre a la hoja

/**
 * Maneja las peticiones POST que llegan desde la API de Next.js.
 */
function doPost(e) {
  try {
    // Parsear el cuerpo JSON
    const data = JSON.parse(e.postData.contents);

    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // Si la hoja está vacía, agrega la fila de encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Fecha", "Nombre", "Empresa", "Email", "WhatsApp", "Servicio", "Proyecto"
      ]);

      // Estiliza los encabezados
      const headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setBackground("#291231");
      headerRange.setFontColor("#F18C1B");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Agrega una nueva fila con los datos recibidos
    sheet.appendRow([
      data.fecha    || new Date().toLocaleString("es-PE"),
      data.nombre   || "",
      data.empresa  || "",
      data.email    || "",
      data.whatsapp || "",
      data.servicio || "",
      data.proyecto || "",
    ]);

    // Ajusta el ancho de las columnas automáticamente
    sheet.autoResizeColumns(1, 7);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Prueba manual: ejecútala desde el editor de Apps Script
 * para verificar que la hoja se crea correctamente.
 */
function testDoPost() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        fecha:    "04/03/2026 10:00",
        nombre:   "Juan Pérez",
        empresa:  "Mi Empresa SAC",
        email:    "juan@ejemplo.com",
        whatsapp: "+51 999 999 999",
        servicio: "Página Web",
        proyecto: "Necesito una landing page para mi negocio.",
      }),
    },
  };
  const result = doPost(fakeEvent);
  Logger.log(result.getContent());
}
