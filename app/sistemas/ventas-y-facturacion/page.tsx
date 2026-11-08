import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/sistemas/ventas-y-facturacion",
  title: "Sistema de facturación electrónica y ventas en Perú",
  description:
    "Sistema de ventas y facturación electrónica a medida: boletas y facturas SUNAT desde la caja o tu tienda virtual, vía OSE o PSE, con stock y caja conectados.",
});

export default function SistemaVentasFacturacionPage() {
  return (
    <ServiceLanding
      slug="/sistemas/ventas-y-facturacion"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Sistemas Web", path: "/sistemas" },
        { name: "Ventas y Facturación", path: "/sistemas/ventas-y-facturacion" },
      ]}
      eyebrow="Sistema · Ventas y Facturación"
      h1="Sistema de ventas y facturación electrónica SUNAT"
      intro="Desarrollamos sistemas de ventas con integración a facturación electrónica para empresas en Perú: registra cada venta, emite boletas y facturas, y controla tu caja en un solo lugar. Menos errores, menos trabajo manual y tus comprobantes en orden."
      highlights={["Facturación electrónica", "Boletas y facturas", "Control de caja", "Reportes de ventas", "Multi-usuario"]}
      stats={[
        { value: "Electrónica", label: "Comprobantes válidos SUNAT" },
        { value: "Caja", label: "Control de ingresos diario" },
        { value: "Ventas", label: "Reportes en tiempo real" },
        { value: "A medida", label: "Para tu giro de negocio" },
      ]}
      sections={[
        {
          h2: "Vende y factura en un solo flujo",
          body:
            "Registrar la venta en un lado y facturar en otro es perder tiempo y cometer errores. Unificamos el proceso: registras la venta y emites el comprobante electrónico en el mismo paso, con tu inventario descontándose automáticamente.",
          bullets: [
            "Registro de ventas con búsqueda rápida de productos.",
            "Emisión de boletas y facturas electrónicas.",
            "Integración con tu proveedor de facturación electrónica.",
            "Control de caja: ingresos, egresos y cierre diario.",
            "Reportes de ventas por día, producto, vendedor o sede.",
          ],
        },
        {
          h2: "Conectado con inventario y clientes",
          body:
            "Cada venta descuenta stock y queda asociada al cliente. Así tienes el panorama completo: qué se vende, cuánto queda y quién compra, sin cuadrar hojas a fin de mes.",
        },
        {
          h2: "Control y permisos por rol",
          bullets: [
            "Usuarios con permisos (cajero, vendedor, administrador).",
            "Trazabilidad de cada operación para auditar con confianza.",
            "Acceso web desde caja, oficina o de manera remota.",
          ],
        },
        {
          h2: "Qué exige SUNAT y qué resuelve el sistema",
          body:
            "En Perú, emitir comprobantes electrónicos no es opcional para la mayoría de empresas, y el problema rara vez es la norma: es el trabajo doble. Se vende en un sistema, se factura en el portal del proveedor y alguien cuadra los dos a fin de mes. Al integrar la emisión dentro del mismo flujo de venta, el comprobante sale en el momento y con los datos correctos.",
          bullets: [
            "Boletas y facturas electrónicas emitidas desde la misma pantalla de venta.",
            "Notas de crédito y de débito para anulaciones y devoluciones, sin rehacer la venta.",
            "Series y numeración correlativa por sede o por caja, sin saltos.",
            "Consulta de RUC y DNI para completar los datos del cliente sin tipear.",
            "Respaldo de los XML y CDR de cada comprobante, que es lo que se te pedirá en una fiscalización.",
            "Reporte de ventas por periodo, listo para entregar a tu contador.",
          ],
        },
        {
          h2: "OSE o PSE: cómo llega el comprobante a SUNAT",
          body:
            "Un sistema de facturación no envía los comprobantes «directo a SUNAT» por arte de magia: pasa por un intermediario autorizado. Conviene entender la diferencia antes de contratar, porque cambia quién firma el comprobante y quién responde si algo falla.",
          table: {
            cabeceras: ["", "PSE (Proveedor de Servicios Electrónicos)", "OSE (Operador de Servicios Electrónicos)"],
            filas: [
              ["Qué hace", "Genera y firma el comprobante por encargo de tu empresa", "Valida el comprobante y emite la constancia de recepción (CDR) en nombre de SUNAT"],
              ["Cuándo se usa", "Cuando no quieres manejar tu propio certificado digital", "Cuando tu sistema ya genera el XML y solo necesitas validarlo"],
              ["Qué hace tu sistema", "Envía los datos de la venta al PSE por API", "Genera el XML firmado y lo envía al OSE"],
            ],
            nota: "Muchos proveedores ofrecen los dos servicios juntos. La lista de proveedores autorizados está publicada por SUNAT.",
          },
          bullets: [
            "Nos integramos con el proveedor que ya tengas contratado, si expone una API.",
            "Guardamos el XML y el CDR de cada comprobante dentro de tu sistema, no solo en el portal del proveedor.",
            "Si un comprobante es rechazado, el sistema lo marca y muestra el motivo para corregirlo y reenviarlo.",
          ],
        },
        {
          h2: "Boletas y facturas desde tu tienda virtual",
          body:
            "Si vendes online, el comprobante también puede salir solo. Al confirmarse el pago en tu [tienda virtual](/tiendas-virtuales), el sistema emite la boleta o la factura con los datos que dejó el cliente en el checkout y se la envía por correo, mientras el stock se descuenta del mismo inventario que usa el local. Las reglas que aplican a la venta online están en [facturación electrónica SUNAT para tu tienda online](/blog/facturacion-electronica-sunat-para-tu-tienda-online).",
          bullets: [
            "El cliente elige boleta o factura en el checkout; si es factura, se pide el RUC y se valida.",
            "El comprobante se emite cuando el pago se confirma, no cuando se arma el carrito.",
            "Devoluciones online con nota de crédito asociada al comprobante original.",
            "Las ventas del local y de la web en un solo reporte para tu contador.",
          ],
        },
        {
          h2: "Cómo se comporta cuando hay cola en caja",
          body:
            "Un sistema de ventas se juzga en la hora punta. Por eso se diseña para que la operación más frecuente —cobrar— se haga con el mínimo de pasos: búsqueda por código, por nombre o por lector de código de barras; cobro combinado en efectivo, tarjeta, Yape o Plin en la misma venta; y cierre de caja que compara lo registrado con lo contado en físico y deja la diferencia documentada. Si el internet se cae, la caja no debería detenerse: definimos contigo qué operaciones siguen disponibles y cómo se sincronizan al volver la conexión.",
        },
        {
          h2: "Cómo es el proceso de desarrollo",
          body:
            "Primero se mapea cómo cobras hoy, incluidos los casos raros que nadie documenta: la venta al crédito, el descuento que autoriza el dueño, la devolución del cliente frecuente. Luego se define el alcance por escrito, se desarrolla por módulos con avances revisables, se integra la facturación electrónica con tu proveedor y se capacita a cajeros y administración antes de salir en vivo. Si además necesitas ordenar el stock, conviene verlo junto con el [sistema de inventario](/sistemas/inventario); si lo que buscas es ordenar clientes y procesos, mira el [sistema de gestión ERP o CRM](/sistemas/gestion-erp-crm).",
        },
      ]}
      articles={[
        {
          label: "Facturación electrónica SUNAT para tu tienda online",
          href: "/blog/facturacion-electronica-sunat-para-tu-tienda-online",
          desc: "Boleta o factura, qué exige SUNAT y cómo integrarla sin trabajo doble.",
        },
        {
          label: "Cuándo una empresa necesita un sistema web",
          href: "/blog/cuando-una-empresa-necesita-un-sistema-web",
          desc: "Las señales de que tu operación ya no cabe en hojas de cálculo.",
        },
        {
          label: "Cuánto cuesta un software a medida en Perú",
          href: "/blog/cuanto-cuesta-un-software-a-medida-en-peru",
          desc: "Qué define el precio de un sistema y cómo se estructura la inversión.",
        },
      ]}
      related={[
        { label: "Sistemas web: cuál necesitas", href: "/sistemas", desc: "Compara inventario, facturación y gestión, y elige por dónde empezar." },
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Vuelve al pilar y mira todos los sistemas que desarrollamos." },
        { label: "Sistema de inventario", href: "/sistemas/inventario", desc: "Controla tu stock conectado a las ventas." },
      ]}
      faqs={[
        {
          q: "¿Emite comprobantes válidos para SUNAT?",
          a: "Sí. Integramos el sistema con un proveedor de facturación electrónica para emitir boletas y facturas válidas, según la normativa vigente.",
        },
        {
          q: "¿Qué diferencia hay entre OSE y PSE?",
          a: "El PSE genera y firma los comprobantes por encargo de tu empresa; el OSE valida los comprobantes que tu sistema ya generó y emite la constancia de recepción en nombre de SUNAT. Muchos proveedores ofrecen ambos servicios, y el sistema se integra con el que elijas.",
        },
        {
          q: "¿Puedo emitir boletas y facturas desde mi tienda virtual?",
          a: "Sí. Al confirmarse el pago, el sistema emite la boleta o la factura con los datos del checkout y se la envía al cliente por correo, con el stock descontado del mismo inventario que usa tu local.",
        },
        {
          q: "¿Se integra con mi inventario?",
          a: "Sí. Cada venta descuenta el stock automáticamente, para que inventario y ventas estén siempre cuadrados.",
        },
        {
          q: "¿Sirve para varias sedes o cajas?",
          a: "Sí. Maneja varias cajas y sedes con usuarios y permisos, y te consolida los reportes.",
        },
        {
          q: "¿Puedo cobrar con Yape, Plin y tarjeta en la misma venta?",
          a: "Sí. La venta admite pago combinado: una parte en efectivo, otra con Yape o Plin y otra con tarjeta, y el cierre de caja los separa por medio de pago para que cuadres sin calculadora.",
        },
        {
          q: "¿Qué pasa si se cae el internet en plena venta?",
          a: "Se define contigo antes de desarrollar. Lo habitual es que la venta se registre igual y el comprobante electrónico se envíe en cuanto vuelve la conexión, para que la caja no se detenga.",
        },
        {
          q: "¿Puedo seguir usando mi proveedor de facturación electrónica actual?",
          a: "Sí, si expone una API. Nos integramos con el proveedor que ya tienes contratado; si aún no tienes uno, te explicamos las opciones y sus diferencias antes de decidir.",
        },
      ]}
      serviceName="Sistema de ventas y facturación"
      serviceDescription="Desarrollo de sistemas de ventas y facturación electrónica a medida para empresas en Perú, con control de caja, reportes e integración con inventario."
    />
  );
}
