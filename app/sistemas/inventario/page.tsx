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
      ]}
      serviceName="Sistema de inventario y control de stock"
      serviceDescription="Desarrollo de sistemas de inventario y control de stock a medida para empresas en Perú, con multi-almacén, alertas y reportes, accesible desde la web."
    />
  );
}
