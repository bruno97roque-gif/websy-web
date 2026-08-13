import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/sistemas/inventario",
  title: "Sistema de Inventario y Control de Stock en Perú",
  description:
    "Desarrollo de sistemas de inventario y control de stock para empresas en Perú. Controla entradas, salidas, almacenes y pedidos en tiempo real, desde la web.",
});

export default function SistemaInventarioPage() {
  return (
    <ServiceLanding
      slug="/sistemas/inventario"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Sistema de Inventario", path: "/sistemas/inventario" },
      ]}
      eyebrow="Sistema · Inventario"
      h1="Sistema de inventario y control de stock"
      intro="Desarrollamos sistemas de inventario a medida para empresas en Perú: controla entradas, salidas, almacenes y stock en tiempo real desde cualquier dispositivo. Deja atrás el Excel y los descuadres, y sabe siempre qué tienes y qué te falta."
      highlights={["Control de stock", "Multi-almacén", "Alertas de quiebre", "Reportes", "En la nube"]}
      stats={[
        { value: "Tiempo real", label: "Stock siempre actualizado" },
        { value: "Multi-almacén", label: "Controla varias sedes" },
        { value: "Alertas", label: "Avisos de stock bajo" },
        { value: "A medida", label: "Para tu proceso real" },
      ]}
      sections={[
        {
          h2: "Qué resuelve un sistema de inventario",
          body:
            "Cuando el stock se lleva en cuadernos o en una hoja de cálculo, los errores son cuestión de tiempo: vendes lo que no tienes, compras de más o pierdes mercadería. Un sistema de inventario centraliza todo y te da control real.",
          bullets: [
            "Registro de entradas, salidas y ajustes de stock.",
            "Control por producto, categoría, lote o ubicación.",
            "Manejo de varios almacenes o sedes desde un solo panel.",
            "Alertas automáticas cuando un producto está por agotarse.",
            "Reportes de movimientos y valorización de inventario.",
          ],
        },
        {
          h2: "Pensado para tu operación",
          body:
            "No te damos un software rígido: lo construimos según cómo trabajas. Si recibes por guías, despachas por pedidos o manejas kits y combos, el sistema se adapta a eso, no al revés.",
        },
        {
          h2: "Se conecta con el resto de tu negocio",
          bullets: [
            "Integración con tu sistema de ventas y facturación.",
            "Integración con tu tienda virtual para descontar stock al vender.",
            "Usuarios con permisos por rol (almacén, ventas, gerencia).",
          ],
        },
        {
          h2: "Cuándo tu negocio ya necesita dejar el Excel",
          body:
            "No todas las empresas necesitan un sistema desde el primer día. La señal de que llegó el momento no es el tamaño, sino la frecuencia con la que el stock del papel deja de coincidir con el del almacén. Si te reconoces en dos o más de estas situaciones, el Excel ya te está costando dinero:",
          bullets: [
            "Vendes un producto y al ir a despacharlo descubres que no queda.",
            "Dos personas editan el mismo archivo y ninguna sabe cuál es la versión buena.",
            "Haces inventario físico y el descuadre te toma un día entero de explicar.",
            "Compras de más 'por si acaso' porque nadie confía en el número que aparece.",
            "Manejas más de un almacén o un punto de venta y los cuadras a mano.",
            "Necesitas saber cuánto vale tu inventario y tienes que armarlo desde cero cada vez.",
          ],
        },
        {
          h2: "Qué información te entrega el día a día",
          body:
            "Un sistema de inventario no sirve solo para registrar: sirve para decidir. Estos son los datos que deja a la mano y que en una hoja de cálculo cuesta días reconstruir.",
          bullets: [
            "Kardex por producto: cada entrada, salida y ajuste, con fecha, motivo y responsable.",
            "Rotación: qué se mueve, qué está parado y desde cuándo, para no volver a comprarlo.",
            "Valorización del inventario a la fecha, para tu contabilidad y para saber cuánto tienes inmovilizado.",
            "Stock mínimo y punto de reposición por producto, con aviso antes de quedarte sin nada.",
            "Trazabilidad por lote o serie, cuando el rubro lo exige (alimentos, farmacia, repuestos).",
          ],
        },
        {
          h2: "Cómo es el proceso de desarrollo",
          body:
            "Un sistema a medida se construye sobre cómo trabaja tu empresa, así que el trabajo empieza mirando el proceso real, no un catálogo de funciones. El orden que seguimos es siempre el mismo: primero entendemos cómo entra y sale la mercadería hoy —incluidos los atajos que usa el equipo—, luego definimos el alcance por escrito, después desarrollamos por módulos para que puedas ver avances y corregir a tiempo, y al final migramos tu stock actual y capacitamos a quien lo va a usar. Puedes ver el detalle en [cómo se cotiza y planifica un software a medida](/desarrollo-de-software-a-medida) y, si tu caso empieza por la facturación, en el [sistema de ventas y facturación](/sistemas/ventas-y-facturacion).",
        },
      ]}
      articles={[
        {
          label: "Cómo controlar el inventario en una tienda online",
          href: "/blog/como-controlar-inventario-en-una-tienda-online",
          desc: "Por qué el stock se descuadra cuando vendes por varios canales y cómo evitarlo.",
        },
        {
          label: "Sistema de gestión para pymes: cuándo dejar el Excel",
          href: "/blog/sistema-de-gestion-para-pymes-cuando-dejar-el-excel",
          desc: "Las señales de que tu hoja de cálculo ya te está costando plata.",
        },
        {
          label: "Cuánto cuesta un software a medida en Perú",
          href: "/blog/cuanto-cuesta-un-software-a-medida-en-peru",
          desc: "Qué define el precio de un sistema y cómo se estructura la inversión.",
        },
      ]}
      related={[
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Vuelve al pilar y mira todos los sistemas que desarrollamos." },
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Conecta tu stock con la facturación electrónica." },
      ]}
      faqs={[
        {
          q: "¿Puedo controlar varios almacenes o sedes?",
          a: "Sí. El sistema maneja múltiples almacenes y te muestra el stock por sede y consolidado, con transferencias entre ellos.",
        },
        {
          q: "¿Se integra con mi tienda virtual?",
          a: "Sí. Podemos conectar el inventario con tu tienda online para que el stock se descuente automáticamente con cada venta.",
        },
        {
          q: "¿Necesito instalar algo?",
          a: "No. Es un sistema web: accedes desde el navegador en computadora, tablet o celular, sin instalar programas.",
        },
        {
          q: "¿Puedo migrar el inventario que ya tengo en Excel?",
          a: "Sí, y es parte del trabajo. Tomamos tu hoja de cálculo actual, ordenamos los productos, corregimos duplicados y cargamos el stock inicial para que arranques con datos reales y no desde cero.",
        },
        {
          q: "¿Qué pasa si mañana cambia mi forma de trabajar?",
          a: "Al ser a medida, el sistema se modifica. Si abres una sede, agregas una línea de productos o cambias el flujo de despacho, se ajusta el módulo correspondiente sin rehacer todo.",
        },
        {
          q: "¿Quién puede ver y modificar el stock?",
          a: "Los que tú decidas. Se crean usuarios con permisos por rol: almacén registra movimientos, ventas solo consulta disponibilidad y gerencia ve los reportes. Cada movimiento queda registrado con su responsable.",
        },
      ]}
      serviceName="Sistema de inventario y control de stock"
      serviceDescription="Desarrollo de sistemas de inventario y control de stock a medida para empresas en Perú, con multi-almacén, alertas y reportes, accesible desde la web."
    />
  );
}
