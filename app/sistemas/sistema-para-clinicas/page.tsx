import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

/* 5-nov-2026 · El autocompletado de Google, Bing y YouTube en Perú sugiere
   «sistema para clínicas», «sistema para clínicas odontológicas», «dentales»,
   «médicas», «de estética» y «de fisioterapia». Websy ya tenía la web para
   clínicas (/diseno-de-paginas-web/clinicas) y el artículo de dentistas, pero
   ninguna URL atendía al que busca el SISTEMA interno. Esta es esa URL. */
export const metadata: Metadata = pageMeta({
  path: "/sistemas/sistema-para-clinicas",
  title: "Sistema para clínicas y consultorios a medida en Perú",
  description:
    "Sistema para clínicas, consultorios y centros odontológicos a medida en Perú: agenda de citas, historia clínica, caja, recordatorios por WhatsApp y facturación electrónica SUNAT.",
});

export default function SistemaParaClinicasPage() {
  return (
    <ServiceLanding
      slug="/sistemas/sistema-para-clinicas"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Sistemas Web", path: "/sistemas" },
        { name: "Sistema para Clínicas", path: "/sistemas/sistema-para-clinicas" },
      ]}
      eyebrow="Sistema · Clínicas y consultorios"
      h1="Sistema para clínicas y consultorios a medida: citas, historias y caja"
      intro="Un sistema para clínicas a medida junta en una sola plataforma la agenda de citas por especialista, la historia clínica de cada paciente, la caja, los recordatorios por WhatsApp y la facturación electrónica. Websy lo desarrolla para consultorios, clínicas pequeñas, centros odontológicos, de estética y de fisioterapia en Perú, con tus servicios y tus horarios, y el sistema queda a nombre de tu empresa."
      highlights={["Agenda de citas", "Historia clínica", "Odontograma", "Caja", "Recordatorios WhatsApp", "Facturación SUNAT"]}
      stats={[
        { value: "Una agenda", label: "Todos los especialistas y consultorios" },
        { value: "Una ficha", label: "Historia y atenciones de cada paciente" },
        { value: "Sin licencias", label: "No pagas por usuario ni por sede" },
        { value: "Tuyo", label: "Código y datos a tu nombre" },
      ]}
      sections={[
        {
          h2: "Qué resuelve un sistema para clínicas",
          body:
            "En muchos consultorios la agenda vive en un cuaderno o en el WhatsApp de la recepcionista, la historia del paciente está en fólderes y la caja se cuadra en Excel al final del día. Funciona mientras hay un solo doctor. Cuando llegan el segundo especialista, la segunda sede o el convenio con una empresa, aparecen las citas cruzadas, los pacientes que no llegan y los cobros que nadie sabe a qué atención corresponden. Un sistema web pone a recepción, especialistas y administración sobre la misma información, cada uno con su usuario y sus permisos.",
        },
        {
          h2: "Módulos de un sistema para clínicas a medida",
          body:
            "No todas las clínicas necesitan lo mismo. Se arranca por el módulo que más duele, casi siempre la agenda, y se suman los demás por etapas.",
          bullets: [
            "Agenda de citas por especialista, consultorio y sede, con bloqueos de horario.",
            "Ficha del paciente con datos, antecedentes, atenciones y archivos adjuntos.",
            "Historia clínica por especialidad: odontograma para dentistas, evolución por sesiones para fisioterapia, fotos de antes y después para estética.",
            "Caja: cobro por atención, adelantos, paquetes de sesiones y cuadre diario.",
            "Recordatorios de cita por WhatsApp o correo para bajar las inasistencias.",
            "Boletas y facturas electrónicas conectadas con la caja.",
            "Reportes: atenciones por especialista, ingresos, pacientes nuevos y recurrentes.",
          ],
        },
        {
          h2: "Sistema a medida o programa de suscripción: cuándo conviene cada uno",
          body:
            "Si tienes un consultorio con un solo especialista y tus procesos son los de cualquier consultorio, un programa de suscripción suele bastar y sale más barato al inicio. El sistema a medida empieza a convenir cuando tienes varias sedes o especialidades, manejas paquetes o convenios propios, quieres conectar la agenda con tu web o tu WhatsApp, o pagas licencias por cada usuario que ya suman más que un desarrollo propio. Lo explicamos con más detalle en [software a medida vs. software enlatado](/blog/software-a-medida-vs-software-enlatado).",
          table: {
            cabeceras: ["Situación", "Suele bastar", "Conviene a medida"],
            filas: [
              ["Un especialista, una sede", "Programa de suscripción", "—"],
              ["Varias especialidades o sedes", "—", "Sí: agenda y caja compartidas"],
              ["Paquetes de sesiones o convenios", "Depende del programa", "Sí: reglas propias de cobro"],
              ["Citas desde tu web o WhatsApp", "Depende del programa", "Sí: integración directa"],
              ["Muchos usuarios con licencia mensual", "—", "Sí: sin pago por usuario"],
            ],
          },
        },
        {
          h2: "Citas desde la web y recordatorios por WhatsApp",
          body:
            "El sistema puede recibir citas desde la página web de tu clínica: el paciente elige especialidad, día y hora disponibles, y la cita entra directo a la agenda. Si además tu web la hacemos nosotros, va conectada desde el primer día; mira [diseño web para clínicas](/diseno-de-paginas-web/clinicas). El recordatorio sale solo un día antes por WhatsApp o correo, que es lo que más baja las inasistencias en consultorios con agenda llena.",
        },
        {
          h2: "Cómo trabajamos un sistema para tu clínica",
          body:
            "Empezamos con un relevamiento: cómo agendan hoy, qué datos guardan de cada paciente, cómo cobran y qué reportes necesita la administración. Con eso armamos una primera versión con el módulo principal, la probamos con tu equipo y luego sumamos módulos.",
          bullets: [
            "Relevamiento con recepción, especialistas y administración.",
            "Primera versión con agenda y ficha del paciente.",
            "Migración de pacientes desde Excel u otro programa.",
            "Capacitación por rol y soporte después de la puesta en marcha.",
          ],
        },
      ]}
      related={[
        { label: "Sistema de reservas y citas", href: "/blog/sistema-de-reservas-y-citas-a-medida", desc: "Cómo funciona una agenda en línea hecha a tu medida." },
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Caja, comprobantes electrónicos y control de ventas." },
        { label: "Diseño web para clínicas", href: "/diseno-de-paginas-web/clinicas", desc: "La web de tu clínica con servicios, especialistas y citas." },
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Apps, ERP, CRM y sistemas web hechos para tu operación." },
      ]}
      articles={[
        { label: "Página web para dentistas y clínicas dentales", href: "/blog/pagina-web-para-dentistas-y-clinicas-dentales-en-peru", desc: "Qué debe tener la web de un consultorio dental." },
        { label: "Sistema de gestión para pymes: cuándo dejar el Excel", href: "/blog/sistema-de-gestion-para-pymes-cuando-dejar-el-excel", desc: "Las señales de que la hoja de cálculo ya no alcanza." },
        { label: "Cuánto cuesta un software a medida en Perú", href: "/blog/cuanto-cuesta-un-software-a-medida-en-peru", desc: "Desde cuánto parte y qué mueve el precio." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta un sistema para clínicas a medida?",
          a: "Se cotiza por módulos. Como referencia, en Websy un sistema web a medida parte desde S/ 15,000. Los montos son referenciales y varían según los módulos, las sedes y las integraciones.",
        },
        {
          q: "¿Sirve para un consultorio odontológico?",
          a: "Sí. Para odontología el sistema incluye odontograma, plan de tratamiento por piezas, presupuestos y cobro por etapas. Para estética o fisioterapia se adapta a sesiones, paquetes y fotos de evolución.",
        },
        {
          q: "¿Los pacientes pueden sacar cita desde la web?",
          a: "Sí. La agenda se publica en tu web con los horarios libres de cada especialista y la cita entra directo al sistema. El paciente recibe la confirmación y un recordatorio por WhatsApp o correo.",
        },
        {
          q: "¿Emite boletas y facturas electrónicas?",
          a: "Sí. La caja se conecta con la facturación electrónica para emitir boletas y facturas por cada atención o paquete. La conexión se hace con un proveedor autorizado por SUNAT.",
        },
        {
          q: "¿Puedo pasar mis pacientes desde Excel?",
          a: "Sí. Migramos pacientes, historial básico y saldos pendientes desde Excel u otro programa antes de la puesta en marcha.",
        },
        {
          q: "¿El sistema y los datos de los pacientes son míos?",
          a: "Sí. El código y los datos quedan a nombre de tu clínica, en tu servidor, con acceso por usuario y permisos por rol. No pagas licencia por usuario ni por sede.",
        },
      ]}
      serviceName="Desarrollo de sistema para clínicas y consultorios a medida"
      serviceDescription="Desarrollo de sistemas para clínicas, consultorios y centros odontológicos en Perú: agenda de citas, historia clínica, caja, recordatorios por WhatsApp y facturación electrónica, sin licencias por usuario."
    />
  );
}
