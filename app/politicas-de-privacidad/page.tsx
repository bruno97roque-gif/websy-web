import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Políticas de Privacidad",
  description: "Políticas de privacidad y tratamiento de datos personales de Websy, conforme a la Ley N° 29733 de Perú.",
};

const UPDATED = "01 de marzo de 2025";

export default function PoliticasPage() {
  return (
    <main style={{ backgroundColor: "#f8f5fc", minHeight: "100vh", paddingTop: 100 }}>

      {/* Header */}
      <div style={{ backgroundColor: "#291231", padding: "60px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "#F18C1B", marginBottom: 12 }}>
            Legal
          </p>
          <h1 style={{ fontFamily: "var(--font-montserrat, sans-serif)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.1 }}>
            Políticas de Privacidad
          </h1>
          <p style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 12, marginBottom: 0 }}>
            Última actualización: {UPDATED}
          </p>
        </div>
      </div>

      {/* Franja naranja */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #F18C1B 0%, #e07010 100%)" }} />

      {/* Contenido */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "60px 32px 100px" }}>
        <div style={{ backgroundColor: "#ffffff", borderRadius: 20, padding: "52px 48px", boxShadow: "0 4px 40px rgba(41,18,49,0.07)" }}>

          <Section title="1. Responsable del tratamiento">
            <p><strong>Websy</strong> (en adelante, "la Agencia") es responsable del tratamiento de los datos personales recabados a través del sitio web <strong>websy.com.pe</strong>.<br />
            <strong>Contacto:</strong> ventas@websy.com.pe · Lima, Perú</p>
            <p>Esta política se rige por la <strong>Ley N° 29733 – Ley de Protección de Datos Personales del Perú</strong> y su Reglamento (D.S. N° 003-2013-JUS).</p>
          </Section>

          <Section title="2. Datos que recopilamos">
            <p>Recopilamos únicamente los datos que tú nos proporcionas voluntariamente a través del formulario de contacto:</p>
            <ul>
              <li>Nombre completo</li>
              <li>Nombre de empresa (opcional)</li>
              <li>Correo electrónico</li>
              <li>Número de WhatsApp (opcional)</li>
              <li>Servicio de interés</li>
              <li>Descripción del proyecto</li>
            </ul>
            <p>Adicionalmente, nuestro sitio puede recopilar datos técnicos anónimos de navegación (páginas visitadas, tiempo de sesión, tipo de dispositivo) a través de herramientas de analítica.</p>
          </Section>

          <Section title="3. Finalidad del tratamiento">
            <p>Los datos personales que nos facilitas son utilizados exclusivamente para:</p>
            <ul>
              <li>Responder a tu consulta o solicitud de cotización.</li>
              <li>Gestionar la relación comercial en caso de contratar nuestros servicios.</li>
              <li>Enviarte información relevante sobre el proyecto acordado.</li>
            </ul>
            <p>No utilizamos tus datos para envío de publicidad no solicitada ni los compartimos con terceros con fines comerciales.</p>
          </Section>

          <Section title="4. Base legal del tratamiento">
            <p>El tratamiento de tus datos se basa en:</p>
            <ul>
              <li><strong>Tu consentimiento:</strong> al enviar el formulario de contacto, consientes el tratamiento de tus datos para los fines indicados.</li>
              <li><strong>Ejecución de contrato:</strong> si contratas nuestros servicios, el tratamiento es necesario para cumplir con las obligaciones derivadas.</li>
            </ul>
          </Section>

          <Section title="5. Conservación de los datos">
            <p>Los datos proporcionados mediante el formulario de contacto se conservan durante el tiempo necesario para atender tu solicitud y, en caso de relación contractual, durante el período que establezca la legislación peruana aplicable. Los datos de analítica anónimos no están sujetos a este plazo.</p>
          </Section>

          <Section title="6. Cookies y tecnologías similares">
            <p>Nuestro sitio web utiliza cookies para mejorar la experiencia de navegación. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo. Usamos:</p>
            <ul>
              <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento del sitio (sesión, preferencias).</li>
              <li><strong>Cookies analíticas:</strong> para entender cómo se usa el sitio y mejorar su rendimiento (p. ej., Vercel Analytics — datos anónimos y agregados, sin identificar al usuario).</li>
            </ul>
            <p>Puedes gestionar o rechazar las cookies no esenciales desde el banner de cookies al ingresar al sitio, o mediante la configuración de tu navegador. El rechazo de cookies analíticas no afecta la funcionalidad del sitio.</p>
          </Section>

          <Section title="7. Transferencia de datos a terceros">
            <p>Websy utiliza los siguientes servicios de terceros que pueden procesar datos en tu nombre:</p>
            <ul>
              <li><strong>Resend</strong> (resend.com): servicio de envío de correos para procesar tu formulario de contacto. Tus datos son transmitidos únicamente para cumplir con la entrega del mensaje.</li>
              <li><strong>Vercel Analytics</strong>: analítica de rendimiento web anónima. No almacena datos personales identificables.</li>
            </ul>
            <p>No vendemos, alquilamos ni cedemos tus datos personales a terceros.</p>
          </Section>

          <Section title="8. Tus derechos (ARCO)">
            <p>De acuerdo con la Ley N° 29733, tienes derecho a:</p>
            <ul>
              <li><strong>Acceso:</strong> conocer qué datos personales tuyos tratamos.</li>
              <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
              <li><strong>Cancelación:</strong> solicitar la eliminación de tus datos.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
            </ul>
            <p>Para ejercer estos derechos, escríbenos a <a href="mailto:ventas@websy.com.pe" style={{ color: "#F18C1B", textDecoration: "none", fontWeight: 600 }}>ventas@websy.com.pe</a> indicando tu nombre, el derecho que deseas ejercer y adjuntando una copia de tu DNI. Responderemos en un plazo máximo de 20 días hábiles.</p>
          </Section>

          <Section title="9. Seguridad de los datos">
            <p>Websy adopta medidas técnicas y organizativas razonables para proteger tus datos personales frente a accesos no autorizados, pérdida o divulgación. Sin embargo, ningún sistema de transmisión por internet es 100% seguro.</p>
          </Section>

          <Section title="10. Menores de edad">
            <p>Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos conscientemente datos personales de menores. Si tienes conocimiento de que un menor ha proporcionado datos a través de nuestro sitio, contáctanos para proceder a su eliminación.</p>
          </Section>

          <Section title="11. Cambios en esta política">
            <p>Podemos actualizar esta Política de Privacidad periódicamente. La versión vigente siempre estará disponible en esta página con la fecha de última actualización. Te recomendamos revisarla con regularidad.</p>
          </Section>

          <Section title="12. Contacto">
            <p>Para cualquier duda, consulta o ejercicio de derechos relacionados con esta política, puedes contactarnos en:<br />
            <a href="mailto:ventas@websy.com.pe" style={{ color: "#F18C1B", textDecoration: "none", fontWeight: 600 }}>ventas@websy.com.pe</a></p>
          </Section>

          {/* Back link */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid #ede9f3" }}>
            <Link href="/" style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: 13, color: "#291231", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
              ← Volver al inicio
            </Link>
          </div>

        </div>
      </div>

    </main>
  );
}

/* ── Componente auxiliar para secciones ── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{ fontFamily: "var(--font-montserrat, sans-serif)", fontSize: 17, fontWeight: 700, color: "#291231", marginBottom: 12, paddingBottom: 8, borderBottom: "2px solid #F18C1B", display: "inline-block" }}>
        {title}
      </h2>
      <div style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: 14, color: "#3d2550", lineHeight: 1.85 }}>
        {children}
      </div>
    </div>
  );
}
