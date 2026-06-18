/**
 * Inyecta uno o varios bloques JSON-LD (Schema.org) de forma segura.
 * Server component: no necesita "use client".
 *
 * Uso:
 *   <JsonLd data={[organizationSchema(), websiteSchema()]} />
 *   <JsonLd data={servicesSchema()} />
 */
type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // El "<" se escapa para no romper el HTML en caso de strings con etiquetas.
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
