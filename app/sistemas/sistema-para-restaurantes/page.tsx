import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/sistemas/sistema-para-restaurantes",
  title: "Sistema para restaurantes a medida en Perú",
  description:
    "Sistema para restaurantes a medida en Perú: pedidos y comandas, mesas, delivery, caja, inventario de insumos, reservas y facturación electrónica SUNAT en una plataforma tuya.",
});

export default function SistemaParaRestaurantesPage() {
  return (
    <ServiceLanding
      slug="/sistemas/sistema-para-restaurantes"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Sistemas Web", path: "/sistemas" },
        { name: "Sistema para Restaurantes", path: "/sistemas/sistema-para-restaurantes" },
      ]}
      eyebrow="Sistema · Restaurantes"
      h1="Sistema para restaurantes a medida: pedidos, mesas, caja y delivery"
      intro="Un sistema para restaurantes a medida reúne en una sola plataforma los pedidos y comandas, el estado de las mesas, el delivery, la caja, el inventario de insumos, las reservas y la facturación electrónica de tu local. Websy lo desarrolla con tu carta, tus áreas de producción y tu forma de atender, y el sistema queda a nombre de tu empresa, sin pago mensual por usuario."
      highlights={["Pedidos y comandas", "Mesas", "Delivery", "Caja / POS", "Insumos", "Facturación SUNAT"]}
      stats={[
        { value: "Una pantalla", label: "Mesas, pedidos y delivery a la vista" },
        { value: "Tu carta", label: "Con tus platos, combos y modificadores" },
        { value: "Sin licencias", label: "No pagas por usuario ni por caja" },
        { value: "Tuyo", label: "Código y datos a tu nombre" },
      ]}
      sections={[
        {
          h2: "Qué resuelve un sistema para restaurantes",
          body:
            "Un sistema para restaurantes ordena el recorrido completo de un pedido: el mozo lo toma en la mesa, la comanda llega a cocina o barra, la caja cobra y emite el comprobante, y el inventario descuenta los insumos usados. Sin sistema, ese recorrido depende de papelitos, de la memoria del mozo y de una hoja de Excel que nadie actualiza a tiempo. El resultado son pedidos que se pierden, mesas que esperan de más, cuadres de caja que no cierran y mermas que nadie sabe explicar. Con un sistema web, mozos, cocina, caja y administración trabajan sobre la misma información, cada uno con su usuario y sus permisos.",
        },
        {
          h2: "Módulos de un sistema para restaurantes a medida",
          body:
            "Estos son los módulos que suele llevar un sistema para restaurantes. No hace falta tenerlos todos el primer día: se arranca por los que más trabajo manual te quitan y se suman los demás por etapas.",
          bullets: [
            "Pedidos y comandas: el pedido se toma desde tablet o celular y la comanda sale impresa o en pantalla en cocina, barra o parrilla, según el área que prepara cada plato.",
            "Mesas y salón: plano del local con el estado de cada mesa (libre, ocupada, por cobrar), unión de mesas y división de cuenta.",
            "Delivery y para llevar: pedidos por teléfono, WhatsApp o web en la misma cola que el salón, con dirección, repartidor asignado y estado del envío.",
            "Caja / POS: apertura y cierre por turno, cobro en efectivo, tarjeta, Yape o Plin, propinas y arqueo. Si es lo único que necesitas, revisa el [sistema de ventas y facturación](/sistemas/ventas-y-facturacion).",
            "Inventario de insumos: recetas por plato que descuentan los insumos al vender, alertas de stock mínimo y control de mermas, sobre la base de nuestro [sistema de inventario](/sistemas/inventario).",
            "Facturación electrónica SUNAT: boletas y facturas emitidas desde la caja, sin pasar los datos a otro programa.",
            "Reservas: agenda de mesas por fecha y turno, con confirmación al cliente y la reserva visible en el plano del salón.",
            "Reportes: ventas por día, por plato, por mozo y por canal, ticket promedio y platos que más salen.",
          ],
        },
        {
          h2: "Sistema a medida o sistema de suscripción para tu restaurante",
          body:
            "Si tu restaurante tiene una sola caja, una carta estándar y atiende solo en salón, un POS de suscripción del mercado probablemente te basta: se activa rápido y no requiere inversión inicial. Un sistema a medida conviene cuando la operación ya no encaja en la plantilla: varios locales o una cocina central, delivery propio con reglas de zona, recetas con control fino de insumos, convenios con empresas o procesos que hoy resuelves en Excel porque el programa no los contempla. Antes de cotizar te decimos con honestidad cuál de los dos te conviene; si quieres comparar con calma, lee [software a medida vs. software enlatado](/blog/software-a-medida-vs-software-enlatado).",
          table: {
            cabeceras: ["", "Sistema de suscripción", "Sistema para restaurantes a medida"],
            filas: [
              ["Cuándo conviene", "Un local, carta estándar, operación simple", "Varios locales, delivery propio o procesos propios"],
              ["Procesos", "Los que trae, con ajustes limitados", "Los de tu restaurante, con tus nombres y reglas"],
              ["Costo en el tiempo", "Mensualidad, a veces por caja, local o usuario", "Desarrollo inicial y luego solo servidor y soporte"],
              ["Integraciones", "Las que ofrece el proveedor", "Tu web, tu facturación y lo que ya uses"],
              ["Tus datos", "En la plataforma del proveedor", "En tu servidor, a nombre de tu empresa"],
            ],
          },
        },
        {
          h2: "Se conecta con tu web, tus pedidos y tus reservas",
          body:
            "El sistema puede recibir los pedidos y las reservas que entran por la página web de tu restaurante, para que lleguen directo a la cola de cocina y al plano del salón sin que nadie los vuelva a digitar. Si aún no tienes web, la armamos con [diseño web para restaurantes](/diseno-de-paginas-web/restaurantes). Para profundizar en cada pieza, revisa cómo funciona un [sistema de punto de venta (POS) a medida](/blog/sistema-de-punto-de-venta-pos-a-medida), un [sistema de reservas a medida](/blog/sistema-de-reservas-y-citas-a-medida) y la [facturación electrónica SUNAT integrada a tu venta](/blog/facturacion-electronica-sunat-para-tu-tienda-online). La conexión con aplicaciones de delivery de terceros depende de la API que ofrezca cada una y se evalúa en el relevamiento.",
        },
        {
          h2: "Cuánto cuesta un sistema para restaurantes a medida",
          body:
            "Un sistema para restaurantes a medida se cotiza por módulos: no cuesta lo mismo solo pedidos y caja que pedidos, delivery, inventario con recetas y varios locales. Como referencia, en Websy un sistema web a medida parte desde S/ 15,000. El monto final depende de cuántos módulos entren en la primera etapa, cuántos locales y usuarios lo usen y con qué sistemas tenga que conectarse. Los montos indicados son referenciales; la cifra exacta va por escrito en la propuesta. Para entender qué mueve el precio, lee [cuánto cuesta un software a medida en Perú](/blog/cuanto-cuesta-un-software-a-medida-en-peru) o [pide tu cotización](/cotizacion).",
          table: {
            cabeceras: ["Proyecto", "Desde (referencial)", "Cómo se define"],
            filas: [
              ["Sistema para restaurantes a medida", "S/ 15,000", "Por módulos: pedidos, mesas, caja, delivery, insumos, reservas"],
              ["Página web del restaurante", "Según alcance", "Carta, pedidos directos y reservas"],
            ],
            nota: "Los precios son referenciales y varían según el alcance del proyecto. Montos en soles informados por Websy en octubre de 2026.",
          },
        },
        {
          h2: "Cómo trabajamos",
          body:
            "Desarrollamos el sistema como cualquier proyecto de [software a medida](/desarrollo-de-software-a-medida): primero entendemos la operación y después escribimos código. Si buscas otros tipos de plataforma, revisa todos nuestros [sistemas web a medida](/sistemas).",
          bullets: [
            "Relevamos la operación en el local con mozos, cocina, caja y administración, no solo con quien aprueba.",
            "Definimos por escrito los módulos de la primera etapa, los tiempos y el costo.",
            "Entregamos por módulos que tu equipo prueba con pedidos reales antes de pasar al siguiente.",
            "Cargamos tu carta, recetas, insumos y mesas para que el sistema no arranque vacío.",
            "Capacitamos al equipo por turnos y damos soporte después de la puesta en marcha.",
          ],
        },
      ]}
      related={[
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Caja, comprobantes electrónicos y control de ventas." },
        { label: "Sistema de inventario", href: "/sistemas/inventario", desc: "Stock, insumos, mermas y alertas de reposición." },
        { label: "Diseño web para restaurantes", href: "/diseno-de-paginas-web/restaurantes", desc: "La web de tu restaurante con carta, pedidos y reservas." },
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Apps, ERP, SaaS y sistemas web hechos para tu operación." },
      ]}
      articles={[
        { label: "Sistema de punto de venta (POS) a medida", href: "/blog/sistema-de-punto-de-venta-pos-a-medida", desc: "Cuándo la caja pide un sistema propio." },
        { label: "Software a medida vs. software enlatado", href: "/blog/software-a-medida-vs-software-enlatado", desc: "Cuándo conviene cada uno." },
        { label: "Cuánto cuesta un software a medida en Perú", href: "/blog/cuanto-cuesta-un-software-a-medida-en-peru", desc: "Desde cuánto parte y qué mueve el precio." },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta un sistema para restaurante?",
          a: "Un sistema para restaurante a medida se cotiza por módulos; como referencia, en Websy un sistema web a medida parte desde S/ 15,000. Los montos indicados son referenciales y varían según los módulos, locales e integraciones.",
        },
        {
          q: "¿Cuál es el mejor sistema para restaurantes?",
          a: "El mejor sistema para restaurantes es el que encaja con tu operación. Si tienes un solo local y una carta estándar, un POS de suscripción suele bastar; si tienes varios locales, delivery propio o procesos propios, conviene uno a medida.",
        },
        {
          q: "¿Se integra con delivery y con facturación electrónica?",
          a: "Sí. Los pedidos de delivery propio entran a la misma cola que el salón y la caja emite boletas y facturas electrónicas. La conexión con aplicaciones de delivery de terceros depende de la API de cada una y se evalúa en el relevamiento.",
        },
        {
          q: "¿Funciona en tablet y celular?",
          a: "Sí. Es un sistema web: los mozos toman pedidos desde tablet o celular, la cocina ve las comandas en pantalla o impresas y la administración entra desde cualquier computadora con navegador.",
        },
        {
          q: "¿El código y los datos son míos?",
          a: "Sí. El sistema, su código y tus datos quedan a nombre de tu empresa, en tu servidor. No dependes de un proveedor para seguir usándolo.",
        },
        {
          q: "¿Pago una mensualidad por usar el sistema?",
          a: "No hay licencia por usuario, por caja ni por local. Solo cubres el servidor donde funciona y, si lo deseas, un plan de soporte y mejoras.",
        },
      ]}
      serviceName="Desarrollo de sistema para restaurantes a medida"
      serviceDescription="Desarrollo de sistemas para restaurantes a medida en Perú: pedidos y comandas, mesas, delivery, caja, inventario de insumos, reservas y facturación electrónica, sin licencias por usuario."
    />
  );
}
