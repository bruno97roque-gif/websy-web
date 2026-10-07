import Link from "next/link";

/**
 * Bloque de texto de la home.
 *
 * La home tenía 536 palabras en toda la página y es la que compite por
 * "agencia web" y "agencia de desarrollo web" en Perú: era la página con más
 * autoridad del dominio y la que menos le contaba a Google de qué va el
 * negocio. Esto lo escribe en el cuerpo, con enlaces editoriales a las
 * landings que hoy casi no reciben ninguno.
 *
 * Maquetación en dos columnas: el titular se queda fijo a la izquierda y el
 * texto corre a la derecha con una medida de ~640px. Antes era un bloque de
 * 900px de ancho a todo lo largo, y a ese ancho la línea pasa de los 100
 * caracteres: el ojo pierde el renglón al volver. El texto no cambia.
 */

const ENLACE =
  "font-semibold text-[#c9640a] underline decoration-[#F18C1B]/40 decoration-2 underline-offset-[3px] transition-colors hover:text-[#F18C1B] hover:decoration-[#F18C1B]";

export default function QueHacemos() {
  return (
    <section
      id="que-hacemos"
      data-track-location="home_que_hacemos"
      className="relative overflow-hidden bg-[#faf8fc] px-5 py-[88px] sm:px-8 md:px-[72px] md:py-[120px]"
    >
      {/* Retícula tenue: la misma del fondo de las tarjetas de servicios,
          en tono claro, para que las dos secciones se lean como una familia. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(41,18,49,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(41,18,49,.035) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto grid max-w-[1180px] gap-9 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-16 lg:gap-24">

        {/* ── Titular, fijo mientras se lee el texto ── */}
        <div className="md:sticky md:top-28 md:self-start">
          <p className="font-poppins mb-3 text-[11px] font-medium uppercase tracking-[3px] text-[#F18C1B]">
            Agencia de desarrollo web en Lima
          </p>
          <h2 className="font-montserrat text-[clamp(26px,3vw,38px)] font-bold leading-[1.15] tracking-tight text-[#291231]">
            Qué hacemos en Websy, en concreto
          </h2>
          <span className="mt-6 block h-[3px] w-14 rounded-full bg-[#F18C1B]" />
        </div>

        {/* ── Texto ── */}
        <div className="font-poppins flex max-w-[640px] flex-col gap-5 text-[16px] leading-[1.8] text-[#3f3948]">
          {/* Entradilla: un punto más grande y en el plum de marca, para que el
              primer párrafo sostenga el peso del titular. */}
          <p className="text-[17.5px] leading-[1.72] text-[#291231]">
            Websy es una agencia peruana de tecnología. Desarrollamos{" "}
            <Link href="/diseno-de-paginas-web" className={ENLACE}>
              páginas web
            </Link>
            ,{" "}
            <Link href="/tiendas-virtuales" className={ENLACE}>
              tiendas virtuales
            </Link>{" "}
            y{" "}
            <Link href="/desarrollo-de-software-a-medida" className={ENLACE}>
              software a medida
            </Link>{" "}
            para empresas y emprendedores de Lima y de todo el Perú, y después ayudamos a que
            lleguen clientes con{" "}
            <Link href="/seo" className={ENLACE}>
              SEO
            </Link>{" "}
            y{" "}
            <Link href="/google-ads" className={ENLACE}>
              Google Ads
            </Link>
            . Un solo equipo para las dos mitades del problema: tener presencia y que esa
            presencia venda.
          </p>
          <p>
            Lo que entregamos queda en tus manos. El dominio y los accesos van a tu nombre, el
            contenido lo editas tú sin depender de nosotros, y el alcance y los plazos se firman
            por escrito antes de empezar. Todo sale pensado para el celular, que es desde donde
            llega la mayor parte del tráfico en Perú, y preparado para que Google pueda leerlo
            desde el primer día.
          </p>
          <p>
            También resolvemos lo que aquí se da por sentado y fuera se cobra aparte: cobros con
            Yape, Plin, Niubiz e Izipay; facturación electrónica válida para SUNAT; envíos con los
            couriers que se usan en el país; y WhatsApp como canal principal, medido para saber
            cuántos contactos trae de verdad.
          </p>
          <p>
            Si por dentro tu empresa se ordena con hojas de cálculo, el trabajo no empieza por la
            web: empieza por un{" "}
            <Link href="/sistemas/inventario" className={ENLACE}>
              sistema de inventario
            </Link>
            , un{" "}
            <Link href="/sistemas/ventas-y-facturacion" className={ENLACE}>
              sistema de ventas y facturación
            </Link>{" "}
            o un{" "}
            <Link href="/sistemas/gestion-erp-crm" className={ENLACE}>
              ERP o CRM a medida
            </Link>
            . Y si no tienes claro qué te toca primero, revisa{" "}
            <Link href="/precios" className={ENLACE}>
              qué define el precio de cada servicio
            </Link>{" "}
            o escríbenos desde{" "}
            <Link href="/contacto" className={ENLACE}>
              contacto
            </Link>
            : la cotización es gratis y llega en menos de 24 horas.
          </p>
        </div>
      </div>
    </section>
  );
}
