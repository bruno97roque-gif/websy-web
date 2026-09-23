import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/sistemas",
  title: "Sistemas Web para Empresas en Perú: Cuál necesitas",
  description:
    "Qué es un sistema web, qué tipos existen y cuál necesita tu empresa en Perú. Sistemas de inventario, ventas y facturación y gestión (ERP/CRM) para automatizar tu operación.",
});

export default function SistemasPage() {
  return (
    <ServiceLanding
      slug="/sistemas"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Sistemas Web", path: "/sistemas" },
      ]}
      eyebrow="Sistemas · Automatización"
      h1="Sistemas web para empresas en Perú"
      intro="Un sistema web es un programa al que tu equipo entra desde el navegador, sin instalar nada, y que automatiza una parte concreta de tu operación: el stock, las ventas, la facturación o la gestión de clientes. En Websy desarrollamos esos sistemas a medida del proceso real de cada empresa peruana."
      highlights={["Inventario", "Ventas y facturación", "ERP / CRM", "En la nube", "A medida"]}
      stats={[
        { value: "Sin instalar", label: "Se entra desde el navegador" },
        { value: "Por etapas", label: "Arranca por el módulo más urgente" },
        { value: "Integrable", label: "Con tu facturación y tu tienda" },
        { value: "Por rol", label: "Cada quien ve lo que le toca" },
      ]}
      sections={[
        {
          h2: "¿Qué es un sistema web?",
          body:
            "Un sistema web es una aplicación que vive en internet y a la que se entra con un usuario y una contraseña desde cualquier computadora o celular. No se instala en cada máquina, no se pierde cuando falla una laptop y todo el equipo trabaja siempre sobre la misma información. Esa es la diferencia con una hoja de cálculo compartida: en el sistema no hay dos versiones del archivo, hay una sola verdad.",
          bullets: [
            "Se entra desde el navegador: no hay instalación ni licencias por equipo.",
            "Los datos están centralizados, con copia de seguridad y acceso por rol.",
            "Cada movimiento queda registrado con fecha, motivo y responsable.",
            "Crece por módulos: se empieza por uno y se suman los demás cuando toca.",
          ],
        },
        {
          h2: "Página web, sistema web y software a medida: en qué se diferencian",
          body:
            "Se confunden a menudo y sirven para cosas distintas. Esta tabla resume qué hace cada uno, para que sepas qué estás pidiendo antes de cotizar.",
          table: {
            cabeceras: ["", "Página web", "Sistema web", "Software a medida"],
            filas: [
              ["Para qué sirve", "Comunicar y captar clientes", "Automatizar un proceso concreto", "Sostener toda la operación"],
              ["Quién lo usa", "Tus clientes, desde fuera", "Tu equipo, desde dentro", "Tu equipo y a veces tus clientes"],
              ["Ejemplo típico", "Web institucional o catálogo", "Control de stock, caja, facturación", "Plataforma completa con varios módulos"],
              ["Cómo se mide", "Visitas y contactos", "Horas y errores que ahorra", "Procesos que deja de hacer a mano"],
            ],
          },
        },
        {
          h2: "Cómo automatizar la operación de tu empresa sin frenarla",
          body:
            "El error más común es querer automatizarlo todo de golpe. Lo que funciona es al revés: se elige el proceso que más duele hoy, se automatiza ese, y recién cuando el equipo lo usa a diario se suma el siguiente. Así el sistema entra en producción en semanas y no en un año, y cada etapa se paga con lo que ahorra la anterior.",
          bullets: [
            "Primero se mapea el proceso tal como se hace hoy, con sus excepciones reales.",
            "Se automatiza el cuello de botella, no lo que es más fácil de programar.",
            "Se migran los datos que ya existen para no arrancar con el sistema vacío.",
            "Se capacita al equipo que lo va a usar, no solo a quien lo aprobó.",
            "Se mide qué cambió: horas, errores y reprocesos antes y después.",
          ],
        },
        {
          h2: "Las señales de que tu empresa ya necesita un sistema",
          body:
            "No depende del tamaño de la empresa, sino de la frecuencia con la que el papel deja de coincidir con la realidad. Si te reconoces en dos o más de estas situaciones, el trabajo manual ya te está costando dinero:",
          bullets: [
            "Vendes algo y al despacharlo descubres que no quedaba.",
            "Dos personas editan el mismo archivo y nadie sabe cuál es la versión buena.",
            "Cerrar el mes te toma días de cuadrar cifras a mano.",
            "Tus comprobantes se emiten en un sitio y tus ventas se registran en otro.",
            "No puedes contestar «cuánto vendimos este mes» sin armar el número desde cero.",
            "La información importante vive en el WhatsApp de una persona.",
          ],
        },
        {
          h2: "Qué tipo de sistema necesitas",
          body:
            "Estos son los tres que más nos piden las empresas en Perú. Cada uno resuelve un problema distinto y los tres se pueden conectar entre sí. Si no tienes claro por cuál empezar, en la [cotización](/cotizacion) lo definimos contigo a partir de tu proceso, y si tu caso no encaja en ninguno lo construimos como [software a medida](/desarrollo-de-software-a-medida).",
          bullets: [
            "Si el problema es el stock y el almacén: un sistema de inventario.",
            "Si el problema es vender, cobrar y emitir comprobantes: ventas y facturación.",
            "Si el problema es que la información está repartida: un sistema de gestión tipo ERP o CRM.",
          ],
        },
      ]}
      related={[
        { label: "Sistema de inventario y stock", href: "/sistemas/inventario", desc: "Entradas, salidas, multi-almacén y alertas de quiebre en tiempo real." },
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Vende, cobra y emite comprobantes electrónicos en un solo flujo." },
        { label: "Sistema de gestión (ERP / CRM)", href: "/sistemas/gestion-erp-crm", desc: "Centraliza operación, clientes y reportes en un solo panel." },
        { label: "Desarrollo de software a medida", href: "/desarrollo-de-software-a-medida", desc: "Cuando tu proceso no entra en ningún sistema del mercado." },
        { label: "Precios y cotización", href: "/precios", desc: "Qué define el precio de un sistema y cómo arrancar por etapas." },
      ]}
      articles={[
        { label: "¿Cuándo una empresa necesita un sistema web?", href: "/blog/cuando-una-empresa-necesita-un-sistema-web", desc: "Las señales de que tu operación ya pide un sistema propio." },
        { label: "Sistema de gestión: cuándo dejar el Excel", href: "/blog/sistema-de-gestion-para-pymes-cuando-dejar-el-excel", desc: "El punto en que la hoja de cálculo empieza a costar dinero." },
        { label: "Página web, sistema web y software a medida", href: "/blog/pagina-web-sistema-web-y-software-a-medida", desc: "Las diferencias explicadas con ejemplos de negocios reales." },
        { label: "Cómo controlar inventario en una tienda online", href: "/blog/como-controlar-inventario-en-una-tienda-online", desc: "Conectar stock y ventas para dejar de cuadrar a mano." },
      ]}
      faqs={[
        {
          q: "¿Qué es un sistema web y en qué se diferencia de una página web?",
          a: "Una página web comunica hacia afuera y capta clientes; un sistema web trabaja hacia adentro y automatiza un proceso de tu empresa, como el control de stock, la facturación o la gestión de clientes. La página la ven tus clientes; al sistema entra tu equipo con usuario y contraseña.",
        },
        {
          q: "¿Puedo automatizar la operación de mi empresa por partes?",
          a: "Sí, y es lo que recomendamos. Se arranca por el proceso que más duele hoy, se pone en producción y se suman los demás módulos cuando el equipo ya lo usa a diario. Así el sistema empieza a devolver horas en semanas, no al final del proyecto.",
        },
        {
          q: "¿El sistema se conecta con mi facturación electrónica?",
          a: "Sí. Integramos el sistema con facturación electrónica, con pasarelas de pago y con tu tienda virtual si la tienes, para que no tengas que registrar la misma venta dos veces en dos sitios distintos.",
        },
        {
          q: "¿Puedo entrar al sistema desde el celular?",
          a: "Sí. Al ser un sistema web se entra desde el navegador de cualquier computadora, tablet o celular, sin instalar nada. Cada usuario ve solo lo que le corresponde según su rol.",
        },
        {
          q: "¿Qué pasa con la información que ya tengo en Excel?",
          a: "Se migra. Antes de arrancar revisamos tus archivos actuales y cargamos productos, clientes o saldos iniciales, para que el sistema no empiece vacío y el equipo lo encuentre útil desde el primer día.",
        },
        {
          q: "¿Cuánto cuesta desarrollar un sistema web?",
          a: "Depende de los módulos, los usuarios, las integraciones y los reportes que necesites. Hacemos un relevamiento de tu proceso y entregamos una propuesta con etapas y costos antes de empezar, para que sepas qué incluye cada fase.",
        },
      ]}
      serviceName="Desarrollo de sistemas web para empresas"
      serviceDescription="Desarrollo de sistemas web a medida en Perú: inventario y control de stock, ventas y facturación electrónica, y sistemas de gestión tipo ERP o CRM para automatizar la operación de la empresa."
    />
  );
}
