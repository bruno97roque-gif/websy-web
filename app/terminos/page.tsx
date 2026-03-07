import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de los servicios de Websy, agencia de diseño web y marketing digital en Lima, Perú.",
};

const UPDATED = "01 de marzo de 2025";

export default function TerminosPage() {
  return (
    <main style={{ backgroundColor: "#f8f5fc", minHeight: "100vh", paddingTop: 100 }}>

      {/* Header */}
      <div style={{ backgroundColor: "#291231", padding: "60px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-poppins, sans-serif)", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "3px", color: "#F18C1B", marginBottom: 12 }}>
            Legal
          </p>
          <h1 style={{ fontFamily: "var(--font-montserrat, sans-serif)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, color: "#ffffff", margin: 0, lineHeight: 1.1 }}>
            Términos y Condiciones
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

          <Section title="1. Aceptación de los términos">
            <p>Al acceder y utilizar el sitio web <strong>websy.com.pe</strong> y contratar los servicios de <strong>Websy</strong> (en adelante, "la Agencia"), usted acepta quedar vinculado por los presentes Términos y Condiciones. Si no está de acuerdo con alguna de estas condiciones, le rogamos que no utilice nuestros servicios.</p>
          </Section>

          <Section title="2. Identificación">
            <p><strong>Razón social:</strong> Websy<br />
            <strong>Domicilio:</strong> Lima, Perú<br />
            <strong>Correo electrónico:</strong> ventas@websy.com.pe<br />
            <strong>Sitio web:</strong> websy.com.pe</p>
          </Section>

          <Section title="3. Servicios ofrecidos">
            <p>Websy ofrece los siguientes servicios de diseño y marketing digital:</p>
            <ul>
              <li>Diseño de identidad de marca (branding y manual de marca)</li>
              <li>Desarrollo de sitios web y tiendas virtuales (e-commerce)</li>
              <li>Posicionamiento en buscadores (SEO)</li>
              <li>Publicidad digital (Google Ads)</li>
              <li>Paquetes integrales de presencia digital</li>
            </ul>
            <p>Las características, plazos y precios de cada servicio se especifican en la propuesta o cotización emitida individualmente al cliente.</p>
          </Section>

          <Section title="4. Proceso de contratación">
            <p>La relación contractual se formaliza mediante:</p>
            <ol>
              <li>Solicitud de cotización por parte del cliente.</li>
              <li>Envío de propuesta formal por parte de Websy.</li>
              <li>Aceptación expresa (escrita o digital) por parte del cliente.</li>
              <li>Pago del adelanto acordado según la propuesta.</li>
            </ol>
            <p>Ningún trabajo comenzará sin la confirmación de pago correspondiente.</p>
          </Section>

          <Section title="5. Pagos y facturación">
            <p>Las condiciones de pago se definen en cada propuesta. Con carácter general:</p>
            <ul>
              <li>Se requiere un adelanto del 50% para iniciar el proyecto.</li>
              <li>El saldo restante se abona antes de la entrega final o publicación.</li>
              <li>Los pagos se realizan por transferencia bancaria, Yape, Plin u otros medios acordados.</li>
              <li>Websy se reserva el derecho a suspender el proyecto ante retrasos en el pago.</li>
            </ul>
          </Section>

          <Section title="6. Propiedad intelectual">
            <p>Una vez realizado el pago total del proyecto, el cliente obtiene los derechos de uso sobre los entregables finales acordados. Websy conserva el derecho a mostrar el trabajo realizado en su portafolio y materiales de marketing, salvo acuerdo de confidencialidad expreso.</p>
            <p>El código fuente, frameworks, librerías de terceros y herramientas utilizadas en el desarrollo están sujetos a sus respectivas licencias.</p>
          </Section>

          <Section title="7. Revisiones y cambios">
            <p>Cada proyecto incluye un número de revisiones indicado en la propuesta. Las revisiones adicionales o cambios que modifiquen el alcance original del proyecto serán cotizados y cobrados por separado.</p>
          </Section>

          <Section title="8. Plazos de entrega">
            <p>Los plazos de entrega son estimativos y están condicionados a la entrega oportuna de materiales, información y aprobaciones por parte del cliente. Websy no se responsabiliza por retrasos derivados de demoras del cliente.</p>
          </Section>

          <Section title="9. Limitación de responsabilidad">
            <p>Websy no será responsable por daños indirectos, lucro cesante, pérdida de datos ni perjuicios derivados del uso o imposibilidad de uso de los servicios contratados. La responsabilidad máxima de Websy no excederá el monto total pagado por el cliente en el proyecto en cuestión.</p>
          </Section>

          <Section title="10. Ley aplicable y jurisdicción">
            <p>Estos términos se rigen por las leyes de la República del Perú, incluyendo la <strong>Ley N° 29571 – Código de Protección y Defensa del Consumidor</strong>. Cualquier controversia se someterá a los juzgados y tribunales de la ciudad de Lima, renunciando las partes a cualquier otro fuero.</p>
          </Section>

          <Section title="11. Modificaciones">
            <p>Websy se reserva el derecho de actualizar estos Términos y Condiciones en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización. El uso continuado de los servicios tras la publicación de cambios implica la aceptación de los mismos.</p>
          </Section>

          <Section title="12. Contacto">
            <p>Para cualquier consulta sobre estos términos, puedes escribirnos a: <a href="mailto:ventas@websy.com.pe" style={{ color: "#F18C1B", textDecoration: "none", fontWeight: 600 }}>ventas@websy.com.pe</a></p>
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
