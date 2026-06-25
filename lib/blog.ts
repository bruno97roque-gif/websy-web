// lib/blog.ts
// Data de los artículos del blog (Silo informativo). Cada post alimenta y enlaza
// a los pilares comerciales. Para sumar artículos, agrega un objeto a BLOG_POSTS.

export type BlogSection = { h2: string; body?: string; bullets?: string[] };
export type BlogFaq = { q: string; a: string };
export type BlogRelated = { label: string; href: string; desc: string };

export type BlogPost = {
  slug: string;
  title: string; // title tag (sin "| Websy"; lo agrega el template del layout)
  h1: string;
  description: string; // meta description
  excerpt: string; // resumen para el índice
  datePublished: string; // ISO (YYYY-MM-DD)
  dateModified?: string;
  category: string;
  readingMin: number;
  intro: string; // 40-60 palabras, citable
  sections: BlogSection[];
  faqs?: BlogFaq[];
  related?: BlogRelated[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cuanto-cuesta-una-tienda-virtual-en-peru",
    title: "Cuánto cuesta una tienda virtual en Perú (2026)",
    h1: "¿Cuánto cuesta una tienda virtual en Perú?",
    description:
      "¿Cuánto cuesta una tienda virtual en Perú en 2026? Qué define el precio de un ecommerce, qué incluye y cómo cotizar tu tienda online sin sorpresas.",
    excerpt:
      "Qué define realmente el precio de una tienda virtual en Perú y cómo saber cuánto invertir según tu negocio.",
    datePublished: "2026-06-19",
    category: "Ecommerce",
    readingMin: 6,
    intro:
      "El precio de una tienda virtual en Perú no es un número fijo: depende de la cantidad de productos, las pasarelas de pago, la plataforma y las integraciones. En esta guía verás qué factores mueven el costo y cómo pedir una cotización clara para tu ecommerce.",
    sections: [
      {
        h2: "Qué define el precio de una tienda virtual",
        body:
          "Dos tiendas pueden costar muy distinto según su alcance. Estos son los factores que más pesan en una cotización seria:",
        bullets: [
          "Cantidad de productos y si tienen variantes (talla, color) o solo fichas simples.",
          "Plataforma elegida: Shopify (con plan mensual) o WooCommerce sobre WordPress (sin mensualidad de plataforma).",
          "Pasarelas de pago: Yape y Plin, tarjeta vía Niubiz o Izipay, transferencia o pago contra entrega.",
          "Diseño a medida vs. una plantilla adaptada a tu marca.",
          "Integraciones: facturación electrónica, courier, control de stock o CRM.",
        ],
      },
      {
        h2: "Qué debería incluir una tienda bien hecha",
        body:
          "Una tienda virtual no termina cuando 'se ve bonita'. Para que venda, debería entregarse con diseño responsive, catálogo cargado, pagos configurados, optimización SEO básica de fichas y categorías, y capacitación para que tú la administres. Si una cotización no incluye esto, probablemente termines pagando 'extras' después.",
      },
      {
        h2: "¿Por qué nadie da un precio cerrado por teléfono?",
        body:
          "Porque un precio serio sale de entender tu negocio. Lo correcto es un diagnóstico corto (qué vendes, cuántos productos, cómo cobras) y luego una propuesta con alcance y tiempos. Desconfía de quien te tira una cifra sin preguntar nada: o te cobra de más o te entrega de menos.",
      },
    ],
    faqs: [
      {
        q: "¿Una tienda virtual tiene costos mensuales?",
        a: "Depende de la plataforma. En Shopify pagas un plan mensual; en WooCommerce solo pagas hosting y dominio (costos bajos), sin mensualidad de plataforma. En ambos casos puedes sumar mantenimiento opcional.",
      },
      {
        q: "¿Qué es más barato, Shopify o WooCommerce?",
        a: "WooCommerce suele tener menor costo recurrente porque no cobra mensualidad de plataforma, pero Shopify te ahorra tiempo y preocupaciones técnicas. La mejor opción depende de tu operación; en la cotización te recomendamos la correcta.",
      },
      {
        q: "¿Cómo obtengo el precio para mi caso?",
        a: "Cuéntanos qué necesitas por WhatsApp o el formulario y te enviamos una cotización a medida, clara y sin compromiso, en menos de 24 horas.",
      },
    ],
    related: [
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Mira todo lo que incluye nuestro servicio de ecommerce." },
      { label: "Cotiza tu tienda virtual", href: "/cotizacion", desc: "Recibe un presupuesto a tu medida en menos de 24 horas." },
    ],
  },

  {
    slug: "como-crear-una-tienda-virtual-en-peru",
    title: "Cómo crear una tienda virtual en Perú: guía paso a paso",
    h1: "Cómo crear una tienda virtual en Perú (paso a paso)",
    description:
      "Guía para crear una tienda virtual en Perú: qué necesitas, qué plataforma elegir, cómo cobrar con Yape, Plin y tarjeta, y cómo lanzarla para vender.",
    excerpt:
      "Todo lo que necesitas para crear tu tienda online en Perú: plataforma, pagos, productos y lanzamiento.",
    datePublished: "2026-06-19",
    category: "Ecommerce",
    readingMin: 7,
    intro:
      "Crear una tienda virtual en Perú es más sencillo de lo que parece si sigues un orden: definir qué vendes, elegir plataforma, configurar pagos locales (Yape, Plin, tarjeta), cargar productos y lanzar. Esta guía te lleva paso a paso por cada decisión.",
    sections: [
      {
        h2: "1. Define qué vas a vender y cómo",
        body:
          "Antes de la parte técnica, ten claro tu catálogo, tus precios, cómo entregas (delivery, recojo) y cómo cobras. Esto determina la plataforma y las integraciones que necesitarás.",
      },
      {
        h2: "2. Elige plataforma: Shopify o WooCommerce",
        bullets: [
          "Shopify: rápido de lanzar, robusto y sin preocuparte del servidor. Ideal si quieres empezar ya.",
          "WooCommerce (WordPress): control total, sin mensualidad de plataforma y fácil de escalar.",
        ],
      },
      {
        h2: "3. Configura los pagos que usan tus clientes",
        body:
          "En Perú una tienda vende cuando acepta los medios reales: Yape y Plin para pagos inmediatos, tarjeta de crédito y débito vía Niubiz o Izipay, y transferencia o pago contra entrega según tu operación.",
      },
      {
        h2: "4. Carga productos y prepara el SEO",
        body:
          "Sube tus productos con buenas fotos, descripciones únicas y categorías ordenadas. Optimiza títulos y descripciones para que tus fichas aparezcan en Google desde el inicio.",
      },
      {
        h2: "5. Lanza, mide y mejora",
        body:
          "Publica la tienda, conéctala con WhatsApp para resolver dudas y revisa qué productos se ven más. Una tienda viva se ajusta con datos, no se deja igual para siempre.",
      },
    ],
    faqs: [
      {
        q: "¿Necesito saber programar para tener una tienda virtual?",
        a: "No. Te entregamos la tienda lista y autoadministrable, y te capacitamos para subir productos, cambiar precios y gestionar pedidos sin programar.",
      },
      {
        q: "¿Cuánto demora crear una tienda virtual?",
        a: "Una tienda estándar suele estar lista en 3 a 5 semanas, según la cantidad de productos e integraciones.",
      },
    ],
    related: [
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Nosotros la creamos por ti, lista para vender." },
      { label: "Tiendas Shopify", href: "/tiendas-virtuales/shopify", desc: "Lanza rápido con la plataforma líder." },
      { label: "Tiendas WooCommerce", href: "/tiendas-virtuales/woocommerce", desc: "Tu tienda en WordPress, 100% tuya." },
    ],
  },

  {
    slug: "shopify-vs-woocommerce",
    title: "Shopify vs WooCommerce: cuál conviene en Perú",
    h1: "Shopify vs WooCommerce: ¿cuál conviene para tu negocio?",
    description:
      "Shopify vs WooCommerce en Perú: diferencias en costos, control, facilidad y escalabilidad para decidir la mejor plataforma para tu tienda virtual.",
    excerpt:
      "Comparativa clara entre Shopify y WooCommerce para elegir la plataforma correcta según tu negocio.",
    datePublished: "2026-06-19",
    category: "Ecommerce",
    readingMin: 6,
    intro:
      "Shopify y WooCommerce son las dos plataformas líderes de ecommerce, pero sirven a perfiles distintos. Shopify prioriza rapidez y cero dolores técnicos; WooCommerce, control total y costos flexibles sobre WordPress. Aquí las diferencias que de verdad importan para decidir.",
    sections: [
      {
        h2: "Costos",
        bullets: [
          "Shopify: plan mensual fijo + comisiones según la pasarela. Predecible, pero recurrente.",
          "WooCommerce: solo hosting y dominio; sin mensualidad de plataforma ni comisión por venta.",
        ],
      },
      {
        h2: "Control y propiedad",
        body:
          "Con WooCommerce eres dueño de tu tienda, tu contenido y tus datos: vive en tu WordPress y tu hosting. Shopify es un entorno cerrado y cómodo, pero dependes de la plataforma y sus reglas.",
      },
      {
        h2: "Facilidad y mantenimiento",
        body:
          "Shopify se encarga de seguridad, servidor y actualizaciones por ti: ideal si no quieres pensar en lo técnico. WooCommerce te da más libertad a cambio de mantener hosting y plugins al día (algo que podemos gestionar por ti).",
      },
      {
        h2: "¿Cuál elegir?",
        bullets: [
          "Elige Shopify si quieres lanzar rápido, vender ya y olvidarte del servidor.",
          "Elige WooCommerce si quieres control total, integrar un blog para SEO y evitar mensualidades de plataforma.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo migrar de una plataforma a otra después?",
        a: "Sí, se puede migrar productos y pedidos, aunque implica trabajo. Por eso conviene elegir bien desde el inicio según tu proyección.",
      },
      {
        q: "¿Cuál posiciona mejor en Google?",
        a: "Ambas pueden posicionar bien si están bien optimizadas. WooCommerce, al vivir en WordPress, facilita sumar un blog potente para SEO.",
      },
    ],
    related: [
      { label: "Tiendas Shopify", href: "/tiendas-virtuales/shopify", desc: "Desarrollo y migración sobre Shopify." },
      { label: "Tiendas WooCommerce", href: "/tiendas-virtuales/woocommerce", desc: "Tu tienda sobre WordPress, sin mensualidad." },
    ],
  },

  {
    slug: "pasarelas-de-pago-para-ecommerce-en-peru",
    title: "Pasarelas de pago para ecommerce en Perú: Yape, Plin, Niubiz e Izipay",
    h1: "Las mejores pasarelas de pago para ecommerce en Perú",
    description:
      "Guía de pasarelas de pago para tu tienda virtual en Perú: cómo aceptar Yape, Plin, tarjetas con Niubiz o Izipay y transferencia para vender más.",
    excerpt:
      "Cómo aceptar Yape, Plin y tarjetas en tu tienda virtual y cuál pasarela conviene según tu negocio.",
    datePublished: "2026-06-19",
    category: "Ecommerce",
    readingMin: 5,
    intro:
      "Una tienda virtual en Perú vende cuando acepta los medios de pago que la gente ya usa. Yape y Plin para pagos inmediatos, tarjeta vía Niubiz o Izipay, y transferencia o pago contra entrega. Aquí cómo combinarlos para no perder ventas.",
    sections: [
      {
        h2: "Yape y Plin: imprescindibles",
        body:
          "Son la forma más rápida y familiar de pagar para millones de peruanos. Integrarlos en tu tienda reduce la fricción y evita que el cliente abandone el carrito por no encontrar su método.",
      },
      {
        h2: "Tarjetas con Niubiz o Izipay",
        body:
          "Para vender a quien paga con crédito o débito necesitas una pasarela de tarjetas. Niubiz e Izipay son las más usadas en Perú; conectarlas da confianza y permite cobros automáticos y seguros.",
      },
      {
        h2: "Transferencia y pago contra entrega",
        body:
          "Sumar transferencia bancaria o pago contra entrega amplía tu alcance a clientes que aún prefieren esas opciones. Lo ideal es ofrecer varias y dejar que el cliente elija.",
      },
      {
        h2: "Qué cuidar al integrar pagos",
        bullets: [
          "Que la confirmación del pedido sea automática (correo y WhatsApp).",
          "Que el checkout sea corto y claro: cada paso extra pierde ventas.",
          "Que la tienda muestre los logos de pago para generar confianza.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo aceptar Yape, Plin y tarjetas a la vez?",
        a: "Sí. Lo recomendable es ofrecer varios medios para no perder ninguna venta. Configuramos los que mejor se adapten a tu negocio.",
      },
    ],
    related: [
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Tienda con pagos Yape, Plin, Niubiz e Izipay." },
      { label: "Cotiza tu tienda", href: "/cotizacion", desc: "Te ayudamos a elegir e integrar tus pasarelas." },
    ],
  },

  {
    slug: "pagina-web-o-tienda-virtual",
    title: "Página web o tienda virtual: ¿cuál necesita tu negocio?",
    h1: "Página web o tienda virtual: ¿cuál necesitas?",
    description:
      "¿Página web o tienda virtual? Diferencias claras para decidir qué necesita tu negocio en Perú según tus objetivos de venta y presencia online.",
    excerpt:
      "Cuándo te basta una página web y cuándo necesitas una tienda virtual para vender online.",
    datePublished: "2026-06-19",
    category: "Web",
    readingMin: 5,
    intro:
      "Muchos negocios dudan entre una página web y una tienda virtual. La diferencia es simple: una web te da presencia y capta contactos; una tienda virtual además cobra online. Aquí cómo decidir según lo que tu negocio necesita hoy.",
    sections: [
      {
        h2: "Qué hace una página web",
        body:
          "Una página web profesional comunica quién eres, qué ofreces y por qué confiar en ti. Su objetivo es que el visitante entienda tu propuesta y te contacte por WhatsApp o formulario. Es ideal para servicios, profesionales y empresas que cierran ventas por contacto directo.",
      },
      {
        h2: "Qué hace una tienda virtual",
        body:
          "Una tienda virtual suma catálogo, carrito y pagos online. Sirve cuando vendes productos y quieres que el cliente compre solo, a cualquier hora, sin que tú intervengas en cada venta.",
      },
      {
        h2: "Cómo decidir",
        bullets: [
          "Si vendes servicios o cierras por contacto: empieza con una página web.",
          "Si vendes productos y quieres cobrar online: necesitas una tienda virtual.",
          "Si no estás seguro: una web bien hecha puede crecer a tienda virtual sin empezar de cero.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo empezar con una web y luego sumar la tienda?",
        a: "Sí. Diseñamos la web pensando en que pueda escalar a tienda virtual más adelante, sin rehacer todo.",
      },
    ],
    related: [
      { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Una web que capta clientes, no solo bonita." },
      { label: "Tiendas virtuales", href: "/tiendas-virtuales", desc: "Cuando quieres vender online y cobrar solo." },
    ],
  },

  {
    slug: "cuanto-cuesta-una-pagina-web-en-peru",
    title: "Cuánto cuesta una página web en Perú (2026)",
    h1: "¿Cuánto cuesta una página web en Perú?",
    description:
      "¿Cuánto cuesta una página web para empresa en Perú en 2026? Qué define el precio, qué debe incluir y cómo cotizar tu web sin pagar de más.",
    excerpt:
      "Qué factores definen el precio de una página web profesional y qué debe incluir una cotización seria.",
    datePublished: "2026-06-19",
    category: "Web",
    readingMin: 5,
    intro:
      "El precio de una página web en Perú depende del número de secciones, el contenido y las funciones que necesites. Una landing simple no cuesta lo mismo que una web corporativa con blog. Aquí qué mueve el costo y qué debería incluir tu inversión.",
    sections: [
      {
        h2: "Qué factores definen el precio",
        bullets: [
          "Cantidad de secciones o páginas (inicio, servicios, nosotros, contacto, blog…).",
          "Diseño a medida vs. plantilla adaptada.",
          "Funciones: formulario, reservas, multidioma, blog, integraciones.",
          "Si necesitas contenido y fotos o ya los tienes listos.",
        ],
      },
      {
        h2: "Qué debe incluir una web bien hecha",
        body:
          "Diseño responsive, panel administrable para editar tú mismo, formulario y WhatsApp para recibir contactos, optimización SEO on-page, y hosting, dominio y certificado de seguridad. Una web que no incluye SEO ni es administrable suele salir 'barata' y costar caro después.",
      },
      {
        h2: "Una web es inversión, no gasto",
        body:
          "La pregunta no es solo cuánto cuesta, sino cuántos clientes te puede traer. Una web pensada para captar contactos se paga sola; una hecha solo 'para tenerla' rara vez genera retorno.",
      },
    ],
    faqs: [
      {
        q: "¿La página incluye hosting y dominio?",
        a: "Sí. Incluimos la configuración de hosting, dominio y certificado SSL para que tu web salga publicada y segura.",
      },
      {
        q: "¿Puedo editar la web yo mismo después?",
        a: "Sí. Entregamos una web administrable y te capacitamos para editar textos e imágenes sin programar.",
      },
    ],
    related: [
      { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Webs profesionales optimizadas para captar clientes." },
      { label: "Cotiza tu página web", href: "/cotizacion", desc: "Presupuesto a tu medida en menos de 24 horas." },
    ],
  },

  {
    slug: "como-posicionar-una-tienda-virtual-en-google",
    title: "Cómo posicionar una tienda virtual en Google (SEO para ecommerce)",
    h1: "Cómo posicionar una tienda virtual en Google",
    description:
      "SEO para ecommerce: cómo posicionar tu tienda virtual en Google con fichas optimizadas, categorías, contenido y velocidad para atraer compradores.",
    excerpt:
      "Las claves de SEO para que tu tienda virtual aparezca en Google y atraiga clientes que ya quieren comprar.",
    datePublished: "2026-06-19",
    category: "SEO",
    readingMin: 6,
    intro:
      "Tener una tienda virtual no sirve de nada si nadie la encuentra. El SEO para ecommerce hace que tus productos aparezcan en Google cuando alguien busca lo que vendes. Estas son las bases para posicionar tu tienda y atraer compradores con intención real.",
    sections: [
      {
        h2: "Optimiza fichas de producto y categorías",
        bullets: [
          "Títulos y descripciones únicas con la palabra que la gente busca.",
          "Categorías con texto propio, no vacías: Google las usa para entender tu tienda.",
          "Imágenes con texto alternativo (alt) y buen peso para que carguen rápido.",
        ],
      },
      {
        h2: "Suma contenido que atraiga antes de la compra",
        body:
          "Un blog que responde dudas ('cuál elegir', 'cómo cuidar', 'cuánto cuesta') atrae visitas que aún no compran y las acerca a tus productos. Es la diferencia entre esperar y salir a buscar clientes.",
      },
      {
        h2: "Cuida la velocidad y el móvil",
        body:
          "La mayoría compra desde el celular. Una tienda lenta pierde ventas y posiciones. Optimizar imágenes, hosting y código mejora tanto la experiencia como el ranking.",
      },
      {
        h2: "Datos estructurados y reseñas",
        body:
          "Marcar productos y preguntas con datos estructurados (schema) ayuda a que Google muestre tu tienda con más detalle. Las reseñas reales suman confianza y clics.",
      },
    ],
    faqs: [
      {
        q: "¿En cuánto tiempo veo resultados de SEO?",
        a: "El SEO es progresivo: los primeros movimientos suelen verse en semanas y los resultados sólidos en algunos meses, según la competencia de tus palabras clave.",
      },
    ],
    related: [
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Tiendas optimizadas para SEO desde el inicio." },
      { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Webs rápidas y listas para posicionar." },
    ],
  },

  {
    slug: "pagina-web-sistema-web-y-software-a-medida",
    title: "Página web, sistema web y software a medida: diferencias",
    h1: "Página web, sistema web y software a medida: ¿qué necesitas?",
    description:
      "Diferencias entre página web, sistema web y software a medida para empresas en Perú: para qué sirve cada uno y cuándo conviene desarrollarlo.",
    excerpt:
      "Una guía simple para entender la diferencia entre una web, un sistema web y un software a medida.",
    datePublished: "2026-06-19",
    category: "Software",
    readingMin: 5,
    intro:
      "Página web, sistema web y software a medida suenan parecido pero resuelven cosas distintas. Una web comunica y capta clientes; un sistema web automatiza un proceso; un software a medida es una plataforma completa para tu operación. Aquí cómo distinguirlos y elegir.",
    sections: [
      {
        h2: "Página web: presencia y captación",
        body:
          "Es la cara pública de tu negocio. Comunica qué haces y convierte visitas en contactos. No automatiza procesos internos; su trabajo es atraer y dar confianza.",
      },
      {
        h2: "Sistema web: automatiza un proceso",
        body:
          "Resuelve una tarea concreta: controlar inventario, registrar ventas, emitir comprobantes o coordinar a tu equipo. Reemplaza hojas de cálculo y trabajo manual, y se accede desde cualquier dispositivo.",
      },
      {
        h2: "Software a medida: plataforma completa",
        body:
          "Cuando ningún programa del mercado encaja con tu forma de trabajar, se construye uno a tu medida: varios módulos, usuarios, reportes e integraciones, diseñado para tu operación específica.",
      },
      {
        h2: "¿Cómo saber cuál necesitas?",
        bullets: [
          "Si necesitas que te encuentren y te contacten: página web.",
          "Si pierdes tiempo en una tarea repetitiva: sistema web.",
          "Si tu operación es única y compleja: software a medida.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Un sistema web se integra con mi facturación electrónica?",
        a: "Sí. Integramos el sistema con facturación electrónica, pasarelas de pago, CRM u otras herramientas que ya uses.",
      },
    ],
    related: [
      { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Sistemas que automatizan tu operación." },
      { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "La presencia online que capta tus clientes." },
    ],
  },
  {
    slug: "que-necesita-una-tienda-virtual-para-vender",
    title: "Qué necesita una tienda virtual para vender de verdad",
    h1: "¿Qué necesita una tienda virtual para vender?",
    description:
      "Más allá del catálogo: qué necesita una tienda virtual en Perú para vender de verdad. Pagos, confianza, velocidad, SEO y los detalles que convierten visitas en ventas.",
    excerpt:
      "No basta con subir productos. Estos son los elementos que separan una tienda que vende de una que solo existe.",
    datePublished: "2026-06-19",
    category: "Ecommerce",
    readingMin: 5,
    intro:
      "Muchas tiendas virtuales no venden no por falta de tráfico, sino por detalles que matan la confianza o complican la compra. Estos son los elementos que necesita una tienda virtual en Perú para convertir visitas en ventas reales.",
    sections: [
      {
        h2: "Pagos que tus clientes ya usan",
        body:
          "Si el cliente no encuentra su método de pago, se va. Una tienda lista para vender acepta Yape y Plin, tarjeta vía Niubiz o Izipay, y transferencia o pago contra entrega.",
      },
      {
        h2: "Confianza visible",
        bullets: [
          "Fotos de producto reales y de buena calidad.",
          "Información clara de envíos, tiempos y devoluciones.",
          "Datos de contacto y WhatsApp a la vista.",
          "Diseño profesional y candado de seguridad (HTTPS).",
        ],
      },
      {
        h2: "Velocidad y móvil",
        body:
          "La mayoría compra desde el celular. Una tienda lenta o difícil de usar en el móvil pierde ventas aunque tenga buenos productos.",
      },
      {
        h2: "Que la encuentren en Google",
        body:
          "Una tienda invisible no vende. Fichas optimizadas, categorías con texto y un blog que atrae búsquedas acercan compradores con intención real.",
      },
    ],
    faqs: [
      {
        q: "¿Basta con subir mis productos a la tienda?",
        a: "No. Necesitas pagos configurados, confianza (fotos, políticas, contacto), velocidad y SEO. Por eso entregamos la tienda lista para vender, no solo montada.",
      },
    ],
    related: [
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Una tienda lista para vender, no a medio armar." },
      { label: "Pasarelas de pago en Perú", href: "/blog/pasarelas-de-pago-para-ecommerce-en-peru", desc: "Cómo aceptar Yape, Plin y tarjetas." },
    ],
  },

  {
    slug: "ventajas-de-tener-una-tienda-virtual",
    title: "Ventajas de tener una tienda virtual para tu negocio",
    h1: "Ventajas de tener una tienda virtual",
    description:
      "Las ventajas de tener una tienda virtual para tu negocio en Perú: vender 24/7, llegar a más clientes, reducir costos y crecer sin depender solo del local.",
    excerpt:
      "Por qué una tienda virtual deja de ser opcional: vende sola, llega más lejos y trabaja por ti las 24 horas.",
    datePublished: "2026-06-19",
    category: "Ecommerce",
    readingMin: 4,
    intro:
      "Una tienda virtual no reemplaza tu negocio: lo multiplica. Vende cuando tú duermes, llega a clientes fuera de tu zona y reduce el trabajo manual de cada venta. Estas son las ventajas concretas de tener un ecommerce en Perú.",
    sections: [
      {
        h2: "Vendes las 24 horas, los 7 días",
        body:
          "Tu tienda no cierra. Un cliente puede comprar a medianoche o un domingo sin que tú estés presente, y el pedido te llega listo para despachar.",
      },
      {
        h2: "Llegas a más clientes",
        bullets: [
          "Vendes fuera de tu barrio, ciudad o región.",
          "Apareces en Google cuando buscan tus productos.",
          "Conectas tus campañas de redes y Ads directo a la compra.",
        ],
      },
      {
        h2: "Menos trabajo manual, más control",
        body:
          "Los pedidos llegan ordenados, el stock se descuenta solo y tienes reportes de qué se vende más. Menos errores y mejores decisiones.",
      },
    ],
    faqs: [
      {
        q: "¿Una tienda virtual reemplaza mi local?",
        a: "No necesariamente: lo complementa. Muchos negocios usan la tienda para vender más y llegar más lejos, manteniendo su local físico.",
      },
    ],
    related: [
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Empieza a vender online con una tienda a tu medida." },
      { label: "Página web o tienda virtual", href: "/blog/pagina-web-o-tienda-virtual", desc: "¿Cuál necesitas primero? Te ayudamos a decidir." },
    ],
  },

  {
    slug: "cuanto-cuesta-una-tienda-en-shopify",
    title: "Cuánto cuesta una tienda en Shopify en Perú",
    h1: "¿Cuánto cuesta una tienda en Shopify?",
    description:
      "Cuánto cuesta una tienda en Shopify en Perú: el plan mensual, el desarrollo, las comisiones y qué incluye, para que sepas cuánto invertir en tu ecommerce.",
    excerpt:
      "El plan mensual es solo una parte. Esto es lo que realmente compone el costo de una tienda Shopify.",
    datePublished: "2026-06-19",
    category: "Ecommerce",
    readingMin: 5,
    intro:
      "El costo de una tienda en Shopify tiene varias partes: el plan mensual de la plataforma, el desarrollo y diseño, y las comisiones de pago. Aquí desglosamos cada una para que sepas en qué inviertes y evites sorpresas.",
    sections: [
      {
        h2: "El plan mensual de Shopify",
        body:
          "Shopify cobra una mensualidad por usar su plataforma, con distintos niveles según el tamaño de tu operación. Es un costo recurrente y predecible que cubre el alojamiento, la seguridad y el mantenimiento de la plataforma.",
      },
      {
        h2: "El desarrollo y diseño de la tienda",
        body:
          "Es la inversión en montar tu tienda: diseño a tu marca, carga de productos, configuración de pagos y envíos. Se cotiza según el alcance y se paga una vez (más mejoras futuras si las necesitas).",
      },
      {
        h2: "Comisiones de pago",
        bullets: [
          "Las pasarelas (tarjeta, Yape, Plin) cobran una comisión por transacción.",
          "Varía según el método y el proveedor que uses.",
          "Conviene tenerla en cuenta al fijar tus precios.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Shopify conviene si recién empiezo?",
        a: "Sí, si quieres lanzar rápido y sin preocuparte por el servidor. Si buscas evitar la mensualidad, WooCommerce puede ser mejor. Te recomendamos la opción correcta en la cotización.",
      },
      {
        q: "¿Cómo sé cuánto me costaría a mí?",
        a: "Cuéntanos tu proyecto y te enviamos una cotización a medida del desarrollo, sin compromiso, en menos de 24 horas.",
      },
    ],
    related: [
      { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "Desarrollamos y migramos tu tienda Shopify." },
      { label: "Shopify vs WooCommerce", href: "/blog/shopify-vs-woocommerce", desc: "Compara antes de decidir tu plataforma." },
    ],
  },

  {
    slug: "ventajas-de-woocommerce-para-negocios",
    title: "Ventajas de WooCommerce para negocios en Perú",
    h1: "Ventajas de WooCommerce para tu negocio",
    description:
      "Ventajas de WooCommerce para negocios en Perú: sin mensualidad de plataforma, control total sobre WordPress, escalable y con SEO potente para vender más.",
    excerpt:
      "Por qué muchos negocios eligen WooCommerce: control total, sin mensualidad de plataforma y listo para crecer.",
    datePublished: "2026-06-19",
    category: "Ecommerce",
    readingMin: 4,
    intro:
      "WooCommerce convierte tu WordPress en una tienda virtual completa. Para muchos negocios en Perú es la opción ideal: control total, sin mensualidad de plataforma y con un SEO muy potente. Estas son sus principales ventajas.",
    sections: [
      {
        h2: "Sin mensualidad de plataforma",
        body:
          "A diferencia de plataformas cerradas, WooCommerce no cobra mensualidad ni comisión por venta. Solo pagas tu hosting y dominio, costos bajos y bajo tu control.",
      },
      {
        h2: "Control total y propiedad",
        bullets: [
          "Eres dueño de tu tienda, tu contenido y tus datos de clientes.",
          "Eliges tu hosting y no dependes de las reglas de una plataforma.",
          "Puedes ampliar la tienda sin límites con el tiempo.",
        ],
      },
      {
        h2: "SEO potente sobre WordPress",
        body:
          "Al vivir en WordPress, sumar un blog para atraer tráfico es natural. Eso convierte tu tienda en una máquina de captación, no solo en un catálogo.",
      },
    ],
    faqs: [
      {
        q: "¿WooCommerce es difícil de administrar?",
        a: "No. Te entregamos la tienda con un panel ordenado y te capacitamos para gestionar productos, precios y pedidos sin saber programar.",
      },
    ],
    related: [
      { label: "Desarrollo WooCommerce Perú", href: "/tiendas-virtuales/woocommerce", desc: "Tu tienda sobre WordPress, 100% tuya." },
      { label: "Shopify vs WooCommerce", href: "/blog/shopify-vs-woocommerce", desc: "Compara las dos plataformas líderes." },
    ],
  },

  {
    slug: "cuando-una-empresa-necesita-un-sistema-web",
    title: "Cuándo una empresa necesita un sistema web a medida",
    h1: "¿Cuándo una empresa necesita un sistema web?",
    description:
      "Señales de que tu empresa en Perú necesita un sistema web a medida: procesos manuales, errores, Excel saturado y áreas desconectadas. Cuándo conviene desarrollarlo.",
    excerpt:
      "Si reconoces estas señales, tu negocio probablemente ya necesita un sistema web a medida.",
    datePublished: "2026-06-19",
    category: "Software",
    readingMin: 5,
    intro:
      "No toda empresa necesita un sistema a medida, pero hay señales claras de cuándo deja de ser un lujo y se vuelve necesario. Si tu operación ya no cabe en Excel o pierdes tiempo en tareas repetitivas, este artículo es para ti.",
    sections: [
      {
        h2: "Señales de que ya lo necesitas",
        bullets: [
          "Llevas el negocio en varias hojas de Excel que nadie cuadra.",
          "Cometes errores por procesos manuales (stock, precios, pedidos).",
          "Repites tareas que podrían automatizarse.",
          "Cada área tiene su propia información y nadie ve el todo.",
          "Ningún software del mercado encaja con tu forma de trabajar.",
        ],
      },
      {
        h2: "Qué ganas con un sistema a medida",
        body:
          "Un sistema hecho para tu operación ordena la información, automatiza lo repetitivo y te da reportes para decidir. Lo que antes tomaba horas pasa a hacerse en minutos, con menos errores.",
      },
      {
        h2: "No tienes que hacerlo todo de golpe",
        body:
          "Lo recomendable es empezar por lo que más te urge (inventario, ventas o clientes) e ir sumando módulos por etapas, según el sistema demuestra su valor.",
      },
    ],
    faqs: [
      {
        q: "¿Un sistema a medida es solo para empresas grandes?",
        a: "No. Muchos negocios medianos y en crecimiento lo necesitan justo cuando el Excel deja de alcanzar. Se puede empezar pequeño e ir creciendo.",
      },
    ],
    related: [
      { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Sistemas que automatizan tu operación." },
      { label: "Web, sistema y software: diferencias", href: "/blog/pagina-web-sistema-web-y-software-a-medida", desc: "Entiende qué necesitas exactamente." },
    ],
  },

  {
    slug: "como-controlar-inventario-en-una-tienda-online",
    title: "Cómo controlar el inventario en una tienda online",
    h1: "Cómo controlar el inventario en una tienda online",
    description:
      "Cómo controlar el inventario en una tienda online en Perú: evita vender sin stock, sincroniza con tu tienda virtual y mantén tu almacén siempre cuadrado.",
    excerpt:
      "Vender lo que no tienes ahuyenta clientes. Así se controla bien el stock de una tienda online.",
    datePublished: "2026-06-19",
    category: "Ecommerce",
    readingMin: 5,
    intro:
      "Uno de los errores que más cuesta en ecommerce es vender un producto que ya no tienes en stock. Controlar bien el inventario de tu tienda online evita cancelaciones, reembolsos y clientes molestos. Aquí cómo hacerlo de forma ordenada.",
    sections: [
      {
        h2: "Centraliza el stock en un solo lugar",
        body:
          "Si vendes en tienda física, online y por WhatsApp, el stock debe ser uno solo. Centralizarlo evita que vendas dos veces lo mismo o que tu web muestre productos agotados.",
      },
      {
        h2: "Sincroniza la tienda con tu inventario",
        bullets: [
          "Que cada venta descuente el stock automáticamente.",
          "Que un producto agotado se marque o se oculte en la tienda.",
          "Alertas cuando un producto está por acabarse.",
        ],
      },
      {
        h2: "Cuándo conviene un sistema de inventario",
        body:
          "Si manejas muchos productos, varias sedes o vendes por varios canales, un sistema de inventario conectado a tu tienda te ahorra descuadres y horas de trabajo manual.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo conectar mi inventario con mi tienda virtual?",
        a: "Sí. Integramos tu sistema de inventario con tu tienda online para que el stock se descuente automáticamente con cada venta.",
      },
    ],
    related: [
      { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Sistemas de inventario y stock en tiempo real, hechos a tu medida." },
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Tiendas con control de stock integrado." },
    ],
  },

  {
    slug: "tienda-virtual-para-vender-ropa",
    title: "Tienda virtual para vender ropa en Perú: guía para empezar",
    h1: "Tienda virtual para vender ropa: cómo empezar",
    description:
      "Cómo crear una tienda virtual para vender ropa en Perú: tallas y colores, fotos, pagos con Yape y Plin, y todo lo que necesita tu tienda de moda para vender.",
    excerpt:
      "Vender ropa online tiene sus reglas: tallas, fotos y devoluciones. Así se arma una tienda de moda que vende.",
    datePublished: "2026-06-19",
    category: "Ecommerce",
    readingMin: 5,
    intro:
      "Vender ropa online en Perú funciona muy bien, pero tiene detalles propios: variantes de talla y color, buenas fotos y una política de cambios clara. Esta guía te muestra qué necesita una tienda virtual de ropa para vender desde el primer día.",
    sections: [
      {
        h2: "Tallas, colores y variantes",
        body:
          "Una tienda de ropa necesita manejar variantes: cada prenda en sus tallas y colores, con stock independiente. Así el cliente elige exacto lo que quiere y tú controlas qué se vende más.",
      },
      {
        h2: "Fotos que venden",
        bullets: [
          "Imágenes claras de cada prenda y color.",
          "Fotos de la prenda puesta, no solo en plano.",
          "Tabla de tallas para reducir dudas y cambios.",
        ],
      },
      {
        h2: "Pagos y envíos pensados para moda",
        body:
          "Acepta Yape, Plin y tarjeta para no perder ventas, y define envíos y una política de cambios clara. En ropa, la confianza en el cambio o devolución es lo que cierra la compra.",
      },
    ],
    faqs: [
      {
        q: "¿La tienda maneja tallas y colores con stock por separado?",
        a: "Sí. Configuramos variantes (talla, color) con su propio stock, para que controles cada combinación y no vendas lo agotado.",
      },
      {
        q: "¿Sirve para otros rubros además de ropa?",
        a: "Sí. El mismo enfoque aplica a calzado, accesorios y cualquier catálogo con variantes. Adaptamos la tienda a tu rubro.",
      },
    ],
    related: [
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Tu tienda de moda lista para vender." },
      { label: "Cómo crear una tienda virtual", href: "/blog/como-crear-una-tienda-virtual-en-peru", desc: "La guía paso a paso para empezar." },
    ],
  },
  {
    slug: "cuanto-tiempo-toma-hacer-una-pagina-web",
    title: "¿Cuánto tiempo toma hacer una página web?",
    h1: "¿Cuánto tiempo toma hacer una página web en Perú?",
    description: "¿Cuánto tiempo toma hacer una página web? Conoce los plazos reales por tipo de web (landing, corporativa, con blog) y qué factores aceleran o retrasan tu proyecto.",
    excerpt: "Plazos reales para crear una página web en Perú según su tipo y complejidad, y cómo evitar que tu proyecto se retrase.",
    datePublished: "2026-06-20",
    dateModified: "2026-06-20",
    category: "Páginas Web",
    readingMin: 6,
    intro: "El tiempo para hacer una página web en Perú depende del tipo y la complejidad: una landing simple puede estar lista en 1 a 2 semanas, una web corporativa en 2 a 4 semanas, y un proyecto con blog, multidioma o funciones avanzadas toma más. El factor que más influye es la rapidez con que el cliente entrega contenido y aprobaciones.",
    sections: [
      {
        h2: "¿De qué depende el plazo de tu página web?",
        body: "No todas las páginas web toman lo mismo. El plazo se define por el alcance acordado al inicio del proyecto. Antes de dar una fecha, conviene aclarar cuántas secciones tendrá, quién redacta los textos y qué funciones necesita.",
        bullets: [
          "Cantidad de páginas o secciones (inicio, nosotros, servicios, contacto, etc.).",
          "Si el contenido (textos, fotos, logo) ya está listo o hay que producirlo.",
          "Funciones especiales: formularios, reservas, integración con WhatsApp, blog.",
          "Número de rondas de revisión y la rapidez de las aprobaciones.",
          "Si parte de una plantilla base o es un diseño totalmente a medida."
        ]
      },
      {
        h2: "Plazos típicos por tipo de página web",
        body: "Estos rangos son referenciales y asumen que el contenido se entrega a tiempo. Sirven para planificar tu lanzamiento con expectativas realistas.",
        bullets: [
          "Landing page (una sola página de campaña): 1 a 2 semanas.",
          "Web corporativa de 4 a 6 secciones: 2 a 4 semanas.",
          "Web con blog o catálogo informativo: 3 a 5 semanas.",
          "Web multidioma o con integraciones a medida: 4 semanas a más.",
          "Tienda virtual (Shopify o WooCommerce): suele requerir tiempo adicional por catálogo y pagos."
        ]
      },
      {
        h2: "Las etapas del proceso, paso a paso",
        body: "Conocer las etapas ayuda a entender por qué un proyecto serio no se entrega de un día para otro. Cada fase necesita tu participación para avanzar sin retrocesos.",
        bullets: [
          "Briefing y definición de alcance: objetivos, secciones y referencias.",
          "Diseño de la propuesta visual y aprobación del cliente.",
          "Maquetación y desarrollo del sitio responsive.",
          "Carga de contenidos, formularios y conexión con WhatsApp.",
          "Revisiones, ajustes finales, SEO básico y publicación."
        ]
      },
      {
        h2: "Lo que más retrasa un proyecto",
        body: "En la práctica, la mayoría de demoras no vienen del desarrollo sino de pendientes del lado del cliente. Tenerlos listos antes de empezar acorta el plazo de forma notable.",
        bullets: [
          "Textos que llegan incompletos o en partes.",
          "Logo, fotos de productos o material de marca sin definir.",
          "Aprobaciones que demoran porque dependen de varias personas.",
          "Cambios de alcance a mitad del proyecto (nuevas secciones o funciones).",
          "Accesos pendientes: dominio, hosting o cuentas de pasarela de pago."
        ]
      },
      {
        h2: "Cómo Websy te entrega un cronograma desde el inicio",
        body: "En Websy trabajamos con un alcance y un cronograma definidos antes de empezar, para que sepas qué se entrega y cuándo. Definimos las etapas, los puntos de aprobación y qué necesitamos de tu parte en cada momento, de modo que el plazo dependa de decisiones claras y no de sorpresas."
      }
    ],
    faqs: [
      {
        q: "¿Cuál es el tiempo mínimo para tener una página web lista?",
        a: "Una landing page sencilla con contenido ya disponible puede estar lista en aproximadamente 1 a 2 semanas. Si los textos y las imágenes están listos desde el inicio, el plazo se acorta."
      },
      {
        q: "¿Por qué una web corporativa toma más que una landing?",
        a: "Porque tiene más secciones (inicio, nosotros, servicios, contacto), más contenido que organizar y, normalmente, más rondas de revisión. Eso suele ubicarla en un rango de 2 a 4 semanas."
      },
      {
        q: "¿Qué puedo hacer para que mi web salga más rápido?",
        a: "Tener listos desde el inicio los textos, el logo y las fotos, designar a una sola persona que apruebe, y evitar agregar nuevas funciones a mitad del proyecto. Eso reduce los tiempos muertos."
      },
      {
        q: "¿El plazo incluye conectar el dominio y publicar?",
        a: "Sí. La publicación y la conexión del dominio .pe o .com forman parte de la etapa final. Es importante tener a la mano los accesos del dominio y del hosting para no demorar el lanzamiento."
      },
      {
        q: "¿Una tienda virtual toma más tiempo que una página web?",
        a: "Generalmente sí, porque hay que cargar el catálogo, configurar la pasarela de pago (como Niubiz, Izipay, Culqi o Mercado Pago) y los métodos de envío. Lo coordinamos en la cotización según el tamaño del catálogo."
      }
    ],
    related: [
      {
        label: "Diseño de páginas web",
        href: "/diseno-de-paginas-web",
        desc: "Conoce nuestro servicio de creación de páginas web profesionales en Lima."
      },
      {
        label: "¿Cuánto cuesta una página web en Perú?",
        href: "/blog/cuanto-cuesta-una-pagina-web-en-peru",
        desc: "Rangos de inversión y qué incluye una web según su tipo."
      },
      {
        label: "Solicita tu cotización",
        href: "/cotizacion",
        desc: "Cuéntanos tu proyecto y recibe un cronograma con plazos claros."
      }
    ]
  },
  {
    slug: "diferencia-entre-pagina-web-y-landing-page",
    title: "Diferencia entre página web y landing page",
    h1: "Diferencia entre página web y landing page: cuál necesitas",
    description: "¿Cuál es la diferencia entre página web y landing page? Conoce el objetivo, la estructura y cuándo usar cada una en tus campañas de Google Ads o Meta Ads en Perú.",
    excerpt: "Qué distingue a una página web de una landing page y cómo elegir la indicada para tu negocio o campaña.",
    datePublished: "2026-06-21",
    dateModified: "2026-06-21",
    category: "Páginas Web",
    readingMin: 6,
    intro: "La diferencia entre una página web y una landing page está en su objetivo. Una página web informa sobre tu negocio y suele tener varias secciones para posicionarte en Google. Una landing page es una sola página enfocada en una acción concreta, ideal para campañas de Google Ads o Meta Ads. No compiten: se complementan.",
    sections: [
      {
        h2: "¿Qué es una página web?",
        body: "Una página web (o sitio web) es el espacio que representa a tu negocio en internet de forma completa. Tiene varias secciones, busca informar y generar confianza, y está pensada para posicionarse en Google a lo largo del tiempo.",
        bullets: [
          "Reúne varias páginas: inicio, nosotros, servicios, contacto y, a veces, blog.",
          "Su meta principal es informar y construir presencia de marca.",
          "Trabaja el SEO para atraer tráfico orgánico de forma sostenida.",
          "Es el destino estable al que llega quien busca tu nombre o tus servicios."
        ]
      },
      {
        h2: "¿Qué es una landing page?",
        body: "Una landing page es una página única diseñada para que el visitante realice una acción específica: dejar sus datos, escribir por WhatsApp o comprar. Quita distracciones para concentrar la atención en un solo objetivo.",
        bullets: [
          "Una sola página con un mensaje y un objetivo claro.",
          "Menú reducido o inexistente para evitar fugas de atención.",
          "Llamados a la acción visibles (formulario, botón de WhatsApp, compra).",
          "Pensada para medir resultados de una campaña concreta."
        ]
      },
      {
        h2: "Objetivo y estructura: las diferencias clave",
        body: "Aunque ambas viven en internet, cumplen funciones distintas. Entender esto evita gastar de más o lanzar campañas con bajo resultado.",
        bullets: [
          "Página web: informa y posiciona; landing page: convierte una campaña.",
          "La web tiene navegación amplia; la landing concentra todo en una vista.",
          "La web crece con SEO; la landing suele alimentarse con publicidad pagada.",
          "La web representa al negocio completo; la landing, una oferta puntual.",
          "El éxito de una web se mide en tráfico y consultas; el de una landing, en conversiones."
        ]
      },
      {
        h2: "¿Cuándo usar cada una?",
        body: "La elección depende de tu objetivo inmediato. Muchos negocios en Perú necesitan ambas en distintos momentos.",
        bullets: [
          "Usa una página web si quieres presencia sólida y aparecer en búsquedas de Google.",
          "Usa una landing page si vas a invertir en Google Ads o Meta Ads y quieres maximizar resultados.",
          "Usa una landing para un lanzamiento, una promoción o un evento con fecha límite.",
          "Usa la web cuando el cliente quiere conocerte a fondo antes de decidir."
        ]
      },
      {
        h2: "Cómo se complementan en una campaña peruana",
        body: "Lo ideal es combinarlas. Por ejemplo, una clínica o tienda en Lima mantiene su página web para posicionarse en Google y generar confianza, y cuando lanza una promoción crea una landing page específica para su campaña en Meta Ads o Google Ads. Así el tráfico pagado llega a una página optimizada para convertir, mientras la web sigue captando consultas orgánicas y derivando contactos por WhatsApp."
      }
    ],
    faqs: [
      {
        q: "¿Una landing page reemplaza a la página web?",
        a: "No. La landing sirve para campañas puntuales y convertir, pero no transmite todo lo que es tu negocio ni posiciona como un sitio completo. Lo recomendable es tener ambas según tu objetivo."
      },
      {
        q: "¿Puedo hacer publicidad enviando tráfico a mi página web?",
        a: "Puedes, pero suele rendir menos. Una página web tiene muchas opciones que distraen; una landing enfocada en una sola acción tiende a convertir mejor el tráfico de Google Ads o Meta Ads."
      },
      {
        q: "¿La landing page también se posiciona en Google?",
        a: "Puede posicionar, pero no es su fortaleza. Las landings suelen alimentarse con tráfico pagado. Para posicionamiento orgánico sostenido conviene una web con varias secciones y trabajo de SEO."
      },
      {
        q: "¿Qué necesito primero si recién empiezo en Perú?",
        a: "Si tu prioridad es tener presencia y aparecer en búsquedas, empieza por la página web. Si vas a invertir ya en publicidad para captar clientes rápido, una landing page enfocada es lo más eficiente."
      },
      {
        q: "¿Una landing page puede recibir contactos por WhatsApp?",
        a: "Sí, y es muy común en Perú. Una landing puede incluir un botón directo a WhatsApp y un formulario, para que el visitante elija el canal que prefiera y dejes registrado el lead."
      }
    ],
    related: [
      {
        label: "Diseño de páginas web",
        href: "/diseno-de-paginas-web",
        desc: "Creamos páginas web y landings optimizadas para tu objetivo."
      },
      {
        label: "Página web o tienda virtual: ¿cuál necesitas?",
        href: "/blog/pagina-web-o-tienda-virtual",
        desc: "Compara opciones para decidir la mejor presencia online."
      },
      {
        label: "Solicita tu cotización",
        href: "/cotizacion",
        desc: "Te ayudamos a elegir entre web y landing según tu campaña."
      }
    ]
  },
  {
    slug: "como-elegir-una-agencia-de-desarrollo-web-en-peru",
    title: "Cómo elegir una agencia de desarrollo web en Perú",
    h1: "Cómo elegir una agencia de desarrollo web en Perú",
    description: "Cómo elegir una agencia de desarrollo web en Perú: qué revisar, qué preguntar y las señales de alerta para que tu inversión no termine en un sitio que no puedes administrar.",
    excerpt: "Guía honesta para elegir una agencia de desarrollo web en Perú sin terminar amarrado ni perder tu inversión.",
    datePublished: "2026-06-22",
    dateModified: "2026-06-22",
    category: "Agencia Web",
    readingMin: 7,
    intro: "Para elegir una agencia de desarrollo web en Perú, revisa su portafolio, confirma que la web sea autoadministrable, que el dominio y el código queden a tu nombre, y que el soporte post-venta esté por escrito. Desconfía de precios cerrados sin diagnóstico y de propuestas sin contrato. El acompañamiento es tan importante como el sitio.",
    sections: [
      {
        h2: "Qué revisar antes de contratar",
        body: "Una buena decisión empieza por verificar puntos concretos, no por el precio más bajo. Estos son los aspectos que más cuidan tu inversión a mediano plazo.",
        bullets: [
          "Portafolio real: webs que puedas visitar y, de ser posible, referencias.",
          "Que la web sea autoadministrable, para que tú edites textos y fotos sin depender de nadie.",
          "Que el dominio (.pe o .com) y el hosting queden a tu nombre, no de la agencia.",
          "Que el código y los accesos sean tuyos al finalizar el proyecto.",
          "Soporte post-venta claro: qué incluye, por cuánto tiempo y cómo se solicita.",
          "Si el SEO básico viene incluido para que tu web pueda aparecer en Google."
        ]
      },
      {
        h2: "Señales de alerta que conviene mirar",
        body: "No se trata de desconfiar de todos, sino de reconocer situaciones que suelen traer problemas más adelante. Si ves varias de estas, conversa y pide aclaraciones antes de firmar.",
        bullets: [
          "Precio cerrado sin antes entender tu negocio ni hacer un diagnóstico.",
          "Propuesta sin contrato ni alcance por escrito.",
          "Webs que solo la agencia puede modificar, dejándote dependiente para todo cambio.",
          "Dominio u hosting registrados a nombre de la agencia y no del tuyo.",
          "Promesas de resultados garantizados en Google en plazos muy cortos.",
          "Falta de claridad sobre qué pasa con el soporte cuando termina el proyecto."
        ]
      },
      {
        h2: "Preguntas que deberías hacer",
        body: "Las respuestas a estas preguntas te dicen mucho sobre cómo trabaja una agencia y si pensará en tu negocio a largo plazo.",
        bullets: [
          "¿La web quedará a mi nombre, con el dominio y los accesos bajo mi control?",
          "¿Podré editar mi contenido yo mismo o dependeré de ustedes?",
          "¿Qué incluye exactamente el precio y qué se cobra aparte?",
          "¿Cómo es el soporte después del lanzamiento y por cuánto tiempo?",
          "¿El sitio quedará preparado para SEO y para conectarse con WhatsApp o pagos?",
          "¿Tendremos un cronograma con etapas y aprobaciones por escrito?"
        ]
      },
      {
        h2: "Por qué importa el acompañamiento",
        body: "Una página web no termina el día que se publica. El negocio cambia, lanza promociones, suma servicios y necesita ajustes. Una agencia que te acompaña hace que esos cambios sean simples; una que desaparece tras la entrega te deja varado. El valor real está en la relación a futuro, no solo en el sitio entregado."
      },
      {
        h2: "Cómo trabaja Websy",
        body: "En Websy buscamos que el cliente quede dueño de su proyecto. Entregamos páginas web y tiendas virtuales autoadministrables, con alcance y cronograma definidos desde el inicio, y dejamos el dominio y los accesos a tu nombre. Acompañamos después del lanzamiento y dejamos la web lista para SEO y para integraciones útiles en Perú como WhatsApp, facturación electrónica SUNAT y pasarelas de pago. Si estás evaluando opciones, conversemos sin compromiso."
      }
    ],
    faqs: [
      {
        q: "¿Por qué es importante que la web sea autoadministrable?",
        a: "Porque te permite cambiar textos, precios o fotos sin pagar por cada ajuste ni esperar a un tercero. Eso reduce costos a futuro y te da independencia frente a la agencia."
      },
      {
        q: "¿A nombre de quién deben quedar el dominio y el hosting?",
        a: "Siempre a tu nombre o al de tu empresa. Si quedan a nombre de la agencia, podrías perder el control de tu web o quedar amarrado. Pide ser titular del dominio y tener los accesos."
      },
      {
        q: "¿Es mala señal que me den un precio sin hacer preguntas?",
        a: "Suele serlo. Un precio cerrado sin entender tu negocio puede esconder un alcance limitado o costos extra después. Lo sano es un breve diagnóstico antes de cotizar."
      },
      {
        q: "¿Debo exigir un contrato aunque sea un proyecto pequeño?",
        a: "Sí. Un contrato o, al menos, un alcance por escrito protege a ambas partes: define qué se entrega, en qué plazo, qué incluye el soporte y a nombre de quién queda todo."
      },
      {
        q: "¿El SEO debería venir incluido en el desarrollo web?",
        a: "Al menos el SEO básico (estructura, etiquetas, velocidad y buenas prácticas) debería incluirse para que tu web pueda aparecer en Google. El posicionamiento avanzado y continuo suele ser un servicio aparte."
      },
      {
        q: "¿Qué pasa con mi web si dejo de trabajar con la agencia?",
        a: "Si el dominio, el hosting y el código están a tu nombre, te llevas tu web sin problema. Por eso conviene confirmar la propiedad desde el inicio y tener todos los accesos."
      }
    ],
    related: [
      {
        label: "Desarrollo de software a medida",
        href: "/desarrollo-de-software-a-medida",
        desc: "Sistemas y software a la medida de tu negocio en Perú."
      },
      {
        label: "Diseño de páginas web",
        href: "/diseno-de-paginas-web",
        desc: "Páginas web autoadministrables, con dominio y accesos a tu nombre."
      },
      {
        label: "Solicita tu cotización",
        href: "/cotizacion",
        desc: "Cuéntanos tu proyecto y recibe una propuesta clara, con contrato."
      }
    ]
  },
  {
    slug: "cuanto-cuesta-una-aplicacion-movil-en-peru",
    title: "Cuánto cuesta una aplicación móvil en Perú: guía de precios 2026",
    h1: "¿Cuánto cuesta una aplicación móvil en Perú?",
    description: "Descubre cuánto cuesta una aplicación móvil en Perú: qué define el precio, app nativa vs híbrida, mantenimiento, tiendas y por qué empezar con un MVP.",
    excerpt: "El precio de una app depende de plataformas, funciones, backend e integraciones; un MVP bien planeado reduce el riesgo y el costo inicial.",
    datePublished: "2026-06-20",
    dateModified: "2026-06-20",
    category: "Software",
    readingMin: 7,
    intro: "El costo de una aplicación móvil en Perú no es un número fijo: depende de las plataformas (iOS, Android), de si es nativa o híbrida, de las funciones, del backend y de las integraciones. Una app sencilla cuesta mucho menos que una con pagos, mapas y panel administrativo. Por eso conviene definir bien el alcance antes de cotizar.",
    sections: [
      {
        h2: "Qué define realmente el precio de una app",
        body: "El presupuesto de una aplicación móvil se arma sumando decisiones técnicas y de negocio. Mientras más plataformas, funciones e integraciones requieras, más horas de desarrollo y, por lo tanto, mayor inversión. Estos son los factores que más mueven la aguja:",
        bullets: [
          "Plataformas: solo Android, solo iOS, o ambas (más plataformas implican más trabajo y pruebas).",
          "Tipo de desarrollo: nativo (rendimiento máximo) o híbrido/multiplataforma como Flutter o React Native.",
          "Funciones: login, notificaciones push, geolocalización, chat, cámara, pagos en línea, etc.",
          "Backend y base de datos: el servidor donde viven los datos, usuarios y la lógica del negocio.",
          "Integraciones: pasarelas como Culqi, Izipay, Niubiz o Mercado Pago, APIs externas y facturación SUNAT.",
          "Diseño UX/UI: cuánto se invierte en una interfaz pulida, accesible y alineada a tu marca."
        ]
      },
      {
        h2: "App nativa vs híbrida: cómo impacta en el costo",
        body: "Esta es una de las decisiones que más afecta el presupuesto. No existe una opción 'mejor' en abstracto; depende de tu objetivo, tu público y tu presupuesto.",
        bullets: [
          "Nativa (Swift para iOS, Kotlin para Android): máximo rendimiento y acceso completo al hardware, pero implica dos desarrollos separados.",
          "Híbrida/multiplataforma (Flutter, React Native): un solo código para Android e iOS, lo que suele reducir tiempo y costo.",
          "La híbrida es ideal para la mayoría de negocios que validan una idea o necesitan llegar rápido al mercado.",
          "La nativa se justifica cuando el rendimiento gráfico, los sensores o la experiencia premium son críticos."
        ]
      },
      {
        h2: "¿App o web app? A veces no necesitas una app",
        body: "Antes de invertir en una app de tiendas, vale la pena preguntarse si realmente la necesitas. Muchos negocios resuelven su objetivo con una web app o una página web bien hecha, sin el costo de mantener apps en dos tiendas.",
        bullets: [
          "Web app (PWA): se usa desde el navegador, se puede 'instalar' en la pantalla y no pasa por App Store ni Google Play.",
          "Ventaja de la web app: una sola base de código, sin comisiones de tienda y actualizaciones inmediatas.",
          "App nativa/híbrida: conviene cuando necesitas notificaciones push potentes, uso intensivo de hardware o presencia en las tiendas.",
          "Si tu meta es vender, muchas veces una tienda virtual o página web rinde mejor que una app costosa."
        ]
      },
      {
        h2: "Costos que no debes olvidar: mantenimiento y tiendas",
        body: "El desarrollo es solo el inicio. Una app es un producto vivo que necesita mantenimiento para seguir funcionando con cada actualización de iOS y Android. Considera estos gastos recurrentes:",
        bullets: [
          "Cuenta de desarrollador de Apple (App Store): suscripción anual obligatoria para publicar en iOS.",
          "Cuenta de Google Play: pago único de registro para publicar apps Android.",
          "Servidor/hosting del backend y base de datos: gasto mensual según tráfico y almacenamiento.",
          "Mantenimiento: corrección de errores, compatibilidad con nuevas versiones de los sistemas operativos y mejoras.",
          "Comisiones de las tiendas si vendes contenido o suscripciones dentro de la app."
        ]
      },
      {
        h2: "Cómo cotizar bien tu aplicación",
        body: "Una buena cotización empieza por un buen brief. Mientras más claro tengas el alcance, más exacto será el presupuesto y menos sorpresas tendrás en el camino. Antes de pedir tu cotización, ten listo lo siguiente:",
        bullets: [
          "El problema que resuelve la app y a quién está dirigida.",
          "La lista de funciones imprescindibles para la primera versión.",
          "Si necesitas Android, iOS o ambas, y si requieres web app también.",
          "Las integraciones de pago o facturación que vas a usar en Perú.",
          "Si ya tienes marca, identidad o diseño previo."
        ]
      },
      {
        h2: "Por qué conviene empezar con un MVP",
        body: "Un MVP (Producto Mínimo Viable) es la primera versión funcional de tu app, con solo lo esencial para validar la idea con usuarios reales. Es la forma más inteligente y económica de empezar, porque reduces el riesgo de invertir mucho en funciones que nadie usará. Lanzas, mides, aprendes y luego inviertes en lo que de verdad genera valor. En Websy podemos ayudarte a definir el alcance de tu MVP y desarrollarlo a medida."
      }
    ],
    faqs: [
      {
        q: "¿Cuál es la diferencia de precio entre una app nativa y una híbrida?",
        a: "La nativa suele ser más cara porque implica desarrollar por separado para iOS y Android, mientras que la híbrida usa un solo código para ambas plataformas, reduciendo tiempo y costo. La elección depende del rendimiento y la experiencia que necesites."
      },
      {
        q: "¿Tengo que pagar por publicar mi app en las tiendas?",
        a: "Sí. Google Play cobra un pago único de registro de desarrollador y la App Store de Apple cobra una suscripción anual. Son costos aparte del desarrollo y necesarios para publicar tu app oficialmente."
      },
      {
        q: "¿Puedo aceptar pagos dentro de mi aplicación en Perú?",
        a: "Sí, se integran pasarelas como Culqi, Izipay, Niubiz o Mercado Pago, e incluso billeteras como Yape y Plin según el flujo. La integración suma horas de desarrollo, así que conviene definirla desde el inicio."
      },
      {
        q: "¿Cuánto tiempo toma desarrollar una app?",
        a: "Depende del alcance. Un MVP con funciones esenciales toma menos que una app completa con pagos, mapas y panel administrativo. Definir el alcance con claridad permite estimar tanto el tiempo como el costo."
      },
      {
        q: "¿Conviene hacer una app o una web app?",
        a: "Si tu objetivo es vender o tener presencia online, muchas veces una web app o una página web cumple a menor costo, sin depender de las tiendas. La app nativa se justifica cuando necesitas notificaciones push o uso intensivo del hardware del teléfono."
      },
      {
        q: "¿Qué necesito tener listo para que me coticen mi app?",
        a: "Idealmente el problema que resuelve, el público objetivo, la lista de funciones imprescindibles, las plataformas (Android, iOS o ambas) y las integraciones de pago. Con eso podemos darte una cotización mucho más precisa."
      }
    ],
    related: [
      {
        label: "Desarrollo de software a medida",
        href: "/desarrollo-de-software-a-medida",
        desc: "Apps, sistemas y plataformas hechas a la medida de tu negocio."
      },
      {
        label: "Software a medida vs software enlatado",
        href: "/blog/software-a-medida-vs-software-enlatado",
        desc: "Cuándo conviene desarrollar a medida y cuándo usar una solución lista."
      },
      {
        label: "Cotiza tu proyecto",
        href: "/cotizacion",
        desc: "Cuéntanos tu idea y recibe una estimación clara para tu app."
      }
    ]
  },
  {
    slug: "software-a-medida-vs-software-enlatado",
    title: "Software a medida vs software enlatado: cuál conviene a tu negocio",
    h1: "Software a medida vs software enlatado: ¿cuál elegir?",
    description: "Software a medida vs software enlatado: diferencias, ventajas, costos a corto y largo plazo, y cómo saber cuándo tu negocio ya necesita una solución propia.",
    excerpt: "El software enlatado es rápido y económico al inicio; el software a medida se ajusta a tus procesos y crece contigo cuando tu negocio se vuelve único.",
    datePublished: "2026-06-21",
    dateModified: "2026-06-21",
    category: "Software",
    readingMin: 7,
    intro: "El software enlatado es un producto listo para usar que sirve para muchos negocios a la vez, mientras que el software a medida se construye específicamente para tu empresa y tus procesos. El primero es rápido y económico al inicio; el segundo se adapta a ti y escala contigo. La decisión correcta depende de cuán únicos sean tus procesos.",
    sections: [
      {
        h2: "Qué es cada uno",
        body: "Antes de comparar, conviene tener claras las definiciones, porque muchas veces se mezclan. La diferencia central está en para quién fue creado el software.",
        bullets: [
          "Software enlatado (de paquete): producto estándar que se vende a muchos clientes, como un ERP genérico, un CRM por suscripción o un sistema de facturación listo.",
          "Software a medida: solución desarrollada desde cero para tu negocio, que refleja exactamente tus procesos, reglas y flujos.",
          "El enlatado te pide adaptar tu negocio al sistema; el a medida adapta el sistema a tu negocio.",
          "Ambos pueden integrarse con herramientas que ya usas, como facturación electrónica SUNAT o pasarelas de pago."
        ]
      },
      {
        h2: "Ventajas y desventajas del software enlatado",
        body: "El software enlatado es una excelente opción para empezar, sobre todo si tus procesos son comunes y no necesitas nada fuera de lo estándar. Pero tiene límites que aparecen con el tiempo.",
        bullets: [
          "Ventaja: implementación rápida, casi inmediata, porque ya está construido.",
          "Ventaja: costo inicial bajo, normalmente por suscripción mensual o licencia.",
          "Ventaja: soporte y actualizaciones a cargo del proveedor.",
          "Desventaja: poca o nula personalización; te ajustas a lo que ofrece.",
          "Desventaja: pagas mensualmente para siempre y no eres dueño del software.",
          "Desventaja: pueden faltar funciones clave para tu operación específica."
        ]
      },
      {
        h2: "Ventajas y desventajas del software a medida",
        body: "El software a medida cuesta más al inicio y toma más tiempo, pero resuelve exactamente lo que tu negocio necesita. Es una inversión, no un gasto recurrente eterno.",
        bullets: [
          "Ventaja: se ajusta 100% a tus procesos, sin funciones de más ni de menos.",
          "Ventaja: el código y la solución son tuyos; tú decides cómo evoluciona.",
          "Ventaja: escala con tu crecimiento y se integra con tus otras herramientas.",
          "Desventaja: mayor inversión inicial y un plazo de desarrollo más largo.",
          "Desventaja: requiere un proveedor confiable para el mantenimiento y mejoras."
        ]
      },
      {
        h2: "Costos a corto y largo plazo",
        body: "Comparar precios solo por el costo inicial es un error frecuente. Lo importante es mirar el costo total a lo largo del tiempo y el valor que cada opción aporta a tu operación.",
        bullets: [
          "A corto plazo el enlatado casi siempre gana: arranca barato y rápido.",
          "A largo plazo las suscripciones se acumulan, y si necesitas varias herramientas, el gasto mensual crece.",
          "El software a medida tiene una inversión inicial fuerte, pero luego no pagas licencias por usuario de por vida.",
          "Si el enlatado te obliga a procesos manuales o a duplicar trabajo, ese tiempo perdido también es un costo oculto."
        ]
      },
      {
        h2: "Señales de que ya necesitas software a medida",
        body: "Hay momentos en que un negocio crece y los sistemas estándar dejan de alcanzar. Si te identificas con varias de estas señales, probablemente ya es hora de pensar en una solución propia:",
        bullets: [
          "Tu operación ya no cabe en Excel y los archivos se vuelven inmanejables.",
          "Tienes procesos manuales repetitivos que se podrían automatizar.",
          "Ningún sistema del mercado encaja del todo con tu forma de trabajar.",
          "Pagas por varias herramientas que no se integran entre sí.",
          "Tu equipo pierde tiempo copiando datos de un sistema a otro.",
          "Tu negocio tiene una ventaja o proceso único que ningún software estándar respeta."
        ]
      },
      {
        h2: "Propiedad, escalabilidad y la decisión final",
        body: "Con software enlatado dependes del proveedor: de sus precios, sus actualizaciones y su permanencia en el mercado. Con software a medida eres dueño de la solución y puedes escalarla a tu ritmo. La recomendación práctica: si tus procesos son estándar y recién empiezas, el enlatado es perfecto; cuando tu negocio se vuelve único y el sistema empieza a limitarte, el desarrollo a medida es la mejor inversión. En Websy podemos analizar tu caso y recomendarte el camino más conveniente."
      }
    ],
    faqs: [
      {
        q: "¿Qué es más barato, el software a medida o el enlatado?",
        a: "Al inicio el enlatado es más barato porque ya está construido y se paga por suscripción. Sin embargo, a largo plazo las mensualidades se acumulan y, si tu negocio es único, el software a medida puede salir más rentable porque eres dueño de la solución."
      },
      {
        q: "¿Cuándo conviene quedarse con software enlatado?",
        a: "Conviene cuando tus procesos son estándar, recién empiezas o necesitas resolver algo común y rápido, como facturar o llevar un CRM básico. Si la herramienta cubre tus necesidades sin obligarte a procesos manuales, no hay razón para invertir en algo a medida todavía."
      },
      {
        q: "¿El software a medida se puede integrar con SUNAT o pasarelas de pago?",
        a: "Sí. Una solución a medida puede integrarse con facturación electrónica SUNAT, pasarelas como Culqi, Izipay o Niubiz, y otras herramientas que ya uses, para que todo funcione conectado y sin duplicar trabajo."
      },
      {
        q: "¿Soy dueño del software si lo mando a desarrollar a medida?",
        a: "Sí, esa es una de sus principales ventajas. La solución se construye para ti y tú decides cómo evoluciona, sin depender de las decisiones de precio o de producto de un proveedor externo de software enlatado."
      },
      {
        q: "¿Cómo sé si mi negocio ya necesita un sistema a medida?",
        a: "Las señales más claras son que tu operación ya no cabe en Excel, que tienes procesos manuales repetitivos, que ningún sistema del mercado encaja del todo o que tu equipo pierde tiempo pasando datos entre herramientas que no se integran."
      },
      {
        q: "¿El software a medida es solo para empresas grandes?",
        a: "No. Cualquier negocio cuyos procesos sean únicos o que esté creciendo más rápido que sus herramientas puede beneficiarse. Lo importante no es el tamaño, sino cuánto te está limitando el software estándar que usas hoy."
      }
    ],
    related: [
      {
        label: "Desarrollo de software a medida",
        href: "/desarrollo-de-software-a-medida",
        desc: "Sistemas y plataformas construidas a la medida de tus procesos."
      },
      {
        label: "Cuándo una empresa necesita un sistema web",
        href: "/blog/cuando-una-empresa-necesita-un-sistema-web",
        desc: "Identifica el momento en que tu negocio ya necesita un sistema propio."
      },
      {
        label: "Cotiza tu sistema a medida",
        href: "/cotizacion",
        desc: "Cuéntanos tus procesos y te decimos qué solución te conviene."
      }
    ]
  },
  {
    slug: "como-tener-presencia-online-para-tu-negocio-en-peru",
    title: "Cómo tener presencia online para tu negocio en Perú: guía práctica",
    h1: "Cómo tener presencia online para tu negocio en Perú",
    description: "Aprende cómo tener presencia online para tu negocio en Perú: web propia, ficha de Google, redes y tienda online, paso a paso y de menos a más.",
    excerpt: "Una buena presencia online combina web propia, ficha de Google y redes; no dependas solo de redes sociales que no controlas.",
    datePublished: "2026-06-23",
    dateModified: "2026-06-23",
    category: "Marketing Digital",
    readingMin: 6,
    intro: "Tener presencia online en Perú significa que tus clientes te encuentren y confíen en ti cuando te buscan en Google, redes o WhatsApp. No basta con tener un Instagram: lo ideal es combinar una web propia, una ficha de Google y redes activas, y sumar una tienda online si vendes. Aquí te explicamos cómo construirla de menos a más.",
    sections: [
      {
        h2: "Los pilares de una buena presencia online",
        body: "La presencia online no es un solo canal, sino un conjunto de piezas que trabajan juntas para que te encuentren y te elijan. Estos son los pilares que todo negocio en Perú debería cubrir:",
        bullets: [
          "Web propia: tu espacio en internet que tú controlas, con tu información, servicios y contacto.",
          "Ficha de Google (Google Mi Negocio): para aparecer en el mapa y en las búsquedas locales con tu dirección, horario y reseñas.",
          "Redes sociales: Instagram, Facebook o TikTok para mostrar tu marca y conectar con tu público.",
          "WhatsApp: el canal de contacto y ventas favorito en Perú, ideal enlazado desde tu web y redes.",
          "Tienda online: si vendes productos, para cobrar y recibir pedidos las 24 horas con Yape, Plin o tarjeta."
        ]
      },
      {
        h2: "Por qué necesitas una web propia y no solo redes",
        body: "Muchos negocios viven solo de Instagram o Facebook, pero eso es construir sobre terreno alquilado. Las redes son importantes, pero no reemplazan a una web propia. Estas son las razones:",
        bullets: [
          "En redes no controlas las reglas: un cambio de algoritmo puede dejarte sin alcance de un día para otro.",
          "Una web propia transmite mayor profesionalismo y confianza al cliente que solo un perfil social.",
          "Tu web aparece en Google cuando alguien busca tu servicio, algo que un perfil de red social rara vez logra igual.",
          "En tu web tú decides cómo se ven tus productos, tu información y tus botones de contacto.",
          "Si una red social cierra tu cuenta, no pierdes tu canal principal porque tu web sigue ahí."
        ]
      },
      {
        h2: "Pasos para empezar, de menos a más",
        body: "No necesitas hacer todo de golpe. Lo inteligente es avanzar por etapas, asegurando cada base antes de pasar a la siguiente. Una ruta realista para un negocio en Perú es:",
        bullets: [
          "Paso 1: crea y completa tu ficha de Google Mi Negocio con dirección, horario, fotos y WhatsApp.",
          "Paso 2: lanza una web propia, aunque sea sencilla, con tus servicios, contacto y un dominio .pe o .com.",
          "Paso 3: activa una o dos redes sociales donde esté tu público y mantenlas con contenido constante.",
          "Paso 4: si vendes productos, monta una tienda online con pagos por Yape, Plin, tarjeta y envío.",
          "Paso 5: conecta todo entre sí, con enlaces de tu web a tus redes y WhatsApp, y viceversa."
        ]
      },
      {
        h2: "Errores comunes al construir presencia online",
        body: "Construir presencia online tiene trampas frecuentes que hacen perder tiempo y dinero. Conocerlas te ayuda a evitarlas desde el inicio:",
        bullets: [
          "Depender únicamente de las redes sociales y no tener web propia.",
          "Tener una web abandonada, con información desactualizada o sin versión para celular.",
          "No completar ni responder la ficha de Google, donde muchos clientes deciden si te contactan.",
          "No mostrar un contacto claro: sin WhatsApp visible, formulario o teléfono a la mano.",
          "Abrir muchas redes a la vez y no poder mantener ninguna activa."
        ]
      },
      {
        h2: "Cómo medir tus resultados",
        body: "Tener presencia online sin medir es como manejar con los ojos cerrados. Para saber qué funciona y dónde mejorar, apóyate en herramientas gratuitas y en datos reales del negocio:",
        bullets: [
          "Google Analytics: para saber cuántas personas visitan tu web y qué páginas ven.",
          "Google Search Console: para ver con qué búsquedas te encuentran en Google.",
          "Estadísticas de tu ficha de Google: llamadas, solicitudes de ruta y clics a tu web.",
          "Conversaciones por WhatsApp y formularios recibidos como señal directa de interés.",
          "Ventas u órdenes de tu tienda online, el indicador final de que todo está funcionando."
        ]
      },
      {
        h2: "El siguiente paso para tu negocio",
        body: "Tener presencia online sólida es un proceso, pero empieza por lo más importante: una web propia bien hecha que sea tu centro de operaciones digital. Desde ahí conectas tu ficha de Google, tus redes, tu WhatsApp y, si vendes, tu tienda online. En Websy diseñamos páginas web y tiendas virtuales pensadas para el mercado peruano, y podemos ayudarte a dar el primer paso o a profesionalizar lo que ya tienes."
      }
    ],
    faqs: [
      {
        q: "¿Es suficiente con tener solo redes sociales para mi negocio?",
        a: "No es lo ideal. Las redes son importantes para conectar con tu público, pero no las controlas tú y un cambio de algoritmo puede dejarte sin alcance. Una web propia te da control, aparece en Google y transmite más confianza y profesionalismo."
      },
      {
        q: "¿Por dónde empiezo si tengo presupuesto limitado?",
        a: "Empieza por lo gratuito y de alto impacto: completa tu ficha de Google Mi Negocio y activa una red social donde esté tu público. Luego, en cuanto puedas, invierte en una web propia, que será el centro de toda tu presencia online."
      },
      {
        q: "¿Necesito una tienda online o me basta con una página web?",
        a: "Depende de si vendes productos. Si tu negocio es de servicios, una página web con contacto por WhatsApp suele bastar. Si vendes productos y quieres cobrar y recibir pedidos en línea con Yape, Plin o tarjeta, conviene una tienda online."
      },
      {
        q: "¿Conviene un dominio .pe o .com para mi web?",
        a: "Ambos funcionan bien. Un dominio .pe refuerza que eres un negocio peruano y enfocado en el mercado local, mientras que .com es más universal. Lo importante es tener un dominio propio y profesional, no una dirección gratuita compartida."
      },
      {
        q: "¿Cómo sé si mi presencia online está funcionando?",
        a: "Mide con herramientas gratuitas como Google Analytics y Search Console, revisa las estadísticas de tu ficha de Google y cuenta los contactos por WhatsApp, formularios y ventas. Esos datos te dicen qué canal te trae clientes y dónde mejorar."
      },
      {
        q: "¿Cuál es el error más común al empezar?",
        a: "Depender únicamente de las redes sociales y no tener una web propia. El segundo error más frecuente es tener una web abandonada o sin versión para celular, cuando la mayoría de peruanos navega desde el teléfono."
      }
    ],
    related: [
      {
        label: "Diseño de páginas web",
        href: "/diseno-de-paginas-web",
        desc: "Tu web propia, profesional y lista para celular, como centro de tu presencia online."
      },
      {
        label: "Google Mi Negocio para empresas en Perú",
        href: "/blog/google-mi-negocio-para-empresas-en-peru",
        desc: "Cómo aparecer en el mapa y en las búsquedas locales de Google."
      },
      {
        label: "Cotiza tu página web",
        href: "/cotizacion",
        desc: "Empieza tu presencia online con una web hecha para el mercado peruano."
      }
    ]
  },
  {
    slug: "facturacion-electronica-sunat-para-tu-tienda-online",
    title: "Facturación electrónica SUNAT para tu tienda online en Perú",
    h1: "Facturación electrónica SUNAT para tu tienda online",
    description: "Guía de facturación electrónica SUNAT para tu tienda online en Perú: boleta vs factura, cómo integrarla al confirmar el pago y por qué tu ecommerce la necesita.",
    excerpt: "Qué es la facturación electrónica SUNAT, boleta vs factura y cómo integrarla a tu tienda online para emitir comprobantes automáticos.",
    datePublished: "2026-06-22",
    dateModified: "2026-06-22",
    category: "Ecommerce",
    readingMin: 7,
    intro: "La facturación electrónica es el sistema de la SUNAT que permite emitir boletas y facturas digitales con validez tributaria. Para tu tienda online no es opcional: te ordena, genera confianza en el comprador y te mantiene en regla. Lo ideal es integrarla a tu ecommerce para que el comprobante se emita solo, al confirmarse el pago.",
    sections: [
      {
        h2: "¿Qué es la facturación electrónica y por qué la necesita tu ecommerce?",
        body: "La facturación electrónica es la emisión de comprobantes de pago en formato digital (con validez ante la SUNAT) en lugar del papel tradicional. Si vendes a través de una tienda online en Perú, cada venta debería generar su comprobante. Más allá de la obligación tributaria, tener la facturación integrada ordena tu negocio y le da una imagen profesional al comprador.",
        bullets: [
          "Cumplimiento: emites comprobantes válidos según las normas vigentes de la SUNAT.",
          "Orden: cada venta queda registrada con su comprobante, sin papeleo manual.",
          "Confianza: el cliente recibe su boleta o factura por correo de inmediato.",
          "Escalabilidad: a mayor volumen de ventas, la emisión automática evita cuellos de botella."
        ]
      },
      {
        h2: "Boleta vs factura: ¿cuál emite tu tienda?",
        body: "La diferencia depende de quién compra. La boleta de venta se emite a consumidores finales (personas que compran para uso propio), mientras que la factura se emite a quienes requieren sustentar gasto o crédito fiscal, normalmente empresas o personas con RUC. Una tienda bien configurada permite que el propio comprador elija el tipo de comprobante en el checkout.",
        bullets: [
          "Boleta: para el público en general; suele requerir nombre y DNI del comprador.",
          "Factura: requiere RUC y razón social; sirve para sustentar gasto o crédito fiscal.",
          "El checkout debería preguntar al cliente qué comprobante necesita antes de pagar.",
          "Los datos del comprobante deben validarse para evitar errores en la emisión."
        ]
      },
      {
        h2: "¿Cómo se integra la facturación con tu tienda?",
        body: "El momento ideal para emitir el comprobante es justo cuando se confirma el pago. Cuando la pasarela de pago avisa que la transacción fue aprobada, la tienda envía los datos de la venta al sistema de facturación, que genera la boleta o factura, la reporta a la SUNAT y se la envía al cliente. Todo esto puede ocurrir de forma automática, sin que tú intervengas en cada pedido.",
        bullets: [
          "El cliente paga y la pasarela confirma la transacción aprobada.",
          "La tienda envía los datos de la venta al servicio de facturación.",
          "Se genera el comprobante electrónico y se reporta según corresponda.",
          "El comprador recibe su boleta o factura, normalmente por correo."
        ]
      },
      {
        h2: "Opciones para emitir: OSE, PSE o sistema propio",
        body: "Existen distintas formas de emitir comprobantes electrónicos en Perú. Muchos negocios trabajan con un OSE (Operador de Servicios Electrónicos) o un PSE (Proveedor de Servicios Electrónicos) que se encarga de la validación y el envío a la SUNAT. La elección depende de tu volumen, tu presupuesto y de qué plataforma facturadora prefieras. Lo importante es que esa herramienta pueda conectarse con tu tienda.",
        bullets: [
          "Plataformas de facturación que se integran vía conexión con tu ecommerce.",
          "OSE/PSE que validan y reportan los comprobantes a la SUNAT.",
          "Servicios propios de la SUNAT para emisión, según el caso del negocio.",
          "Antes de elegir, confirma la tarifa y los límites vigentes con cada operador."
        ]
      },
      {
        h2: "Beneficios de tener la facturación integrada",
        body: "Una tienda que factura sola es una tienda que escala sin sumar trabajo manual. Reduces errores, evitas que un comprador se quede sin su comprobante y proyectas seriedad. Para el negocio, además, significa tener tus ventas ordenadas y listas para tu contador o tu reporte mensual.",
        bullets: [
          "Menos trabajo manual: el comprobante se emite solo tras el pago.",
          "Menos errores: los datos viajan directo desde el pedido.",
          "Mejor experiencia: el cliente recibe su comprobante al instante.",
          "Contabilidad ordenada: tus ventas y comprobantes quedan registrados."
        ]
      },
      {
        h2: "Cómo Websy integra la facturación en tu tienda",
        body: "En Websy desarrollamos tiendas virtuales en Shopify y WooCommerce, y diseñamos páginas web y software a medida. Podemos conectar tu tienda con tu plataforma de facturación para que el comprobante se genere automáticamente al confirmarse el pago, con opción de boleta o factura en el checkout. Si quieres dejar de emitir comprobantes a mano, cuéntanos tu caso y te orientamos según tu volumen de ventas."
      }
    ],
    faqs: [
      {
        q: "¿Mi tienda online está obligada a emitir comprobantes electrónicos?",
        a: "En Perú, las ventas deben respaldarse con comprobantes de pago según las normas de la SUNAT. La forma y los plazos dependen del régimen y la situación de tu negocio, por lo que conviene confirmar tu caso con tu contador o directamente en la SUNAT."
      },
      {
        q: "¿Cuál es la diferencia entre boleta y factura?",
        a: "La boleta se emite a consumidores finales y suele requerir nombre y DNI. La factura se emite a quienes necesitan sustentar gasto o crédito fiscal y requiere RUC y razón social. Tu checkout puede dejar que el cliente elija cuál necesita."
      },
      {
        q: "¿En qué momento se emite el comprobante en una tienda online?",
        a: "Lo recomendable es emitirlo al confirmarse el pago. Cuando la pasarela aprueba la transacción, la tienda envía los datos al sistema de facturación, que genera el comprobante y lo envía al cliente, normalmente por correo."
      },
      {
        q: "¿Qué necesito para empezar a facturar electrónicamente?",
        a: "Necesitas tu RUC activo, una plataforma de facturación electrónica (propia, OSE o PSE) y una tienda que pueda conectarse con ella. En Websy te ayudamos a hacer esa conexión para que la emisión sea automática."
      },
      {
        q: "¿Cuánto cuesta la facturación electrónica?",
        a: "El costo depende del plan y del operador que elijas, además del volumen de comprobantes que emitas. Te recomendamos consultar la tarifa vigente con la plataforma de facturación; en Websy nos encargamos de la integración con tu tienda."
      }
    ],
    related: [
      {
        label: "Cómo aceptar pagos con tarjeta en tu web en Perú",
        href: "/blog/como-aceptar-pagos-con-tarjeta-en-tu-web-peru",
        desc: "Pasarelas, billeteras y cómo cobrar online en tu tienda."
      },
      {
        label: "Tiendas virtuales",
        href: "/tiendas-virtuales",
        desc: "Desarrollamos tu tienda online lista para vender y facturar."
      },
      {
        label: "Cotiza tu proyecto",
        href: "/cotizacion",
        desc: "Cuéntanos tu caso y te orientamos sin compromiso."
      }
    ]
  },
  {
    slug: "como-aceptar-pagos-con-tarjeta-en-tu-web-peru",
    title: "Cómo aceptar pagos con tarjeta en tu web en Perú",
    h1: "Cómo aceptar pagos con tarjeta en tu web en Perú",
    description: "Cómo aceptar pagos con tarjeta en tu web en Perú: pasarelas como Niubiz, Izipay, Culqi y Mercado Pago, billeteras Yape y Plin, seguridad e integración.",
    excerpt: "Las pasarelas y billeteras para cobrar online en Perú, cómo funcionan y cómo integrarlas a tu tienda según tu volumen.",
    datePublished: "2026-06-24",
    dateModified: "2026-06-24",
    category: "Pagos",
    readingMin: 7,
    intro: "Aceptar pagos con tarjeta en tu web en Perú es hoy más simple de lo que parece: con una pasarela como Niubiz, Izipay, Culqi o Mercado Pago puedes cobrar online en segundos. Sumando billeteras como Yape y Plin cubres a casi todo comprador peruano. La clave está en elegir según tu volumen e integrarla bien a tu tienda.",
    sections: [
      {
        h2: "Pasarelas y billeteras disponibles en Perú",
        body: "Para cobrar con tarjeta de crédito o débito en tu web necesitas una pasarela de pago: el servicio que procesa la transacción de forma segura. En Perú las más conocidas son Niubiz, Izipay, Culqi y Mercado Pago. A eso conviene sumar billeteras digitales muy usadas por el comprador peruano, como Yape y Plin, que muchas veces cierran la venta cuando la persona no quiere ingresar su tarjeta.",
        bullets: [
          "Niubiz: una de las pasarelas más extendidas en el mercado peruano.",
          "Izipay: solución de cobro con presencia fuerte en comercios locales.",
          "Culqi: pasarela pensada para integrarse fácilmente a tiendas online.",
          "Mercado Pago: combina cobro con tarjeta y su propia billetera.",
          "Yape y Plin: billeteras muy populares para pagos rápidos en Perú."
        ]
      },
      {
        h2: "¿Cómo funciona el cobro online?",
        body: "Cuando un cliente paga en tu tienda, la pasarela toma los datos de la tarjeta en un entorno seguro, los envía al banco para su autorización y devuelve la respuesta a tu web en segundos. Si la transacción es aprobada, la tienda confirma el pedido y puede disparar la emisión del comprobante. Tú no manejas los datos sensibles de la tarjeta: de eso se encarga la pasarela.",
        bullets: [
          "El cliente elige pagar con tarjeta o billetera en el checkout.",
          "La pasarela procesa los datos en un entorno seguro.",
          "El banco autoriza o rechaza la operación.",
          "La tienda confirma el pedido cuando el pago es aprobado."
        ]
      },
      {
        h2: "Qué necesitas para empezar a cobrar",
        body: "Para activar los pagos online normalmente debes crear una cuenta de comercio con la pasarela elegida y completar un proceso de validación. Cada operador pide documentación del negocio y datos para depositar tus ventas. Una vez aprobada la cuenta, se conectan tus credenciales a la tienda y ya puedes recibir pagos.",
        bullets: [
          "Una cuenta de comercio con la pasarela que elijas.",
          "Validación de tu negocio (datos y documentación que pida el operador).",
          "Una cuenta bancaria para recibir el dinero de tus ventas.",
          "La integración técnica entre la pasarela y tu tienda."
        ]
      },
      {
        h2: "Tarjeta, transferencia o contra entrega: ¿qué ofrecer?",
        body: "No todos tus clientes pagan igual. Ofrecer varios métodos reduce el abandono de carrito. La tarjeta y las billeteras dan inmediatez; la transferencia o el pago con Yape/Plin sirven para quien prefiere no usar tarjeta; y el contra entrega, aunque útil en algunas zonas, implica más riesgo y logística. Lo recomendable es combinar opciones según tu público.",
        bullets: [
          "Tarjeta y billeteras: cobro inmediato y confirmación automática.",
          "Transferencia o Yape/Plin: alternativa para quien evita la tarjeta.",
          "Contra entrega: cómodo para el cliente, pero con más riesgo para ti.",
          "Mientras más opciones relevantes ofrezcas, menos ventas pierdes."
        ]
      },
      {
        h2: "Seguridad: 3D Secure y cómo elegir según tu volumen",
        body: "La seguridad es clave para que el cliente confíe y para reducir contracargos. Las pasarelas serias usan estándares como 3D Secure, que añade una verificación extra del titular de la tarjeta durante la compra. Al elegir pasarela, además de la seguridad, evalúa tu volumen de ventas: los costos y planes varían según el operador y la cantidad de transacciones, así que conviene comparar la tarifa vigente de cada uno.",
        bullets: [
          "3D Secure: capa extra que verifica al titular y reduce fraude.",
          "Conexión cifrada (HTTPS) en todo el proceso de pago.",
          "Elige según tu volumen: compara planes y tarifa vigente por operador.",
          "Revisa los tiempos de depósito de cada pasarela antes de decidir."
        ]
      },
      {
        h2: "Integración con tu tienda con Websy",
        body: "En Websy desarrollamos tiendas virtuales en Shopify y WooCommerce y conectamos las pasarelas y billeteras más usadas en Perú. Configuramos el checkout, activamos 3D Secure cuando está disponible y dejamos el flujo de pago probado de punta a punta. Si no sabes qué pasarela conviene a tu negocio, te orientamos según tu volumen y rubro. Cuéntanos tu caso y lo cotizamos."
      }
    ],
    faqs: [
      {
        q: "¿Cuál es la mejor pasarela de pago en Perú?",
        a: "No hay una única mejor para todos. Niubiz, Izipay, Culqi y Mercado Pago son opciones sólidas; la elección depende de tu volumen de ventas, los costos según el plan del operador y la facilidad de integración con tu tienda. En Websy te ayudamos a comparar y conectar la que mejor encaje."
      },
      {
        q: "¿Puedo cobrar con Yape y Plin en mi web?",
        a: "Sí. Yape y Plin son muy usados por el comprador peruano y pueden ofrecerse como método de pago en tu tienda, ya sea de forma integrada o como opción de transferencia con confirmación. Sumarlos a la tarjeta ayuda a cerrar más ventas."
      },
      {
        q: "¿Es seguro aceptar pagos con tarjeta en mi web?",
        a: "Sí, siempre que uses una pasarela seria. Ella procesa los datos de la tarjeta en un entorno seguro y suele aplicar 3D Secure para verificar al titular. Tu web no almacena los datos sensibles de la tarjeta; eso lo maneja la pasarela."
      },
      {
        q: "¿Cuánto cobran las pasarelas de pago?",
        a: "Las comisiones y costos varían según el operador, el plan y tu volumen de transacciones. Por eso te recomendamos consultar la tarifa vigente directamente con cada pasarela antes de decidir. En Websy nos encargamos de la integración con tu tienda."
      },
      {
        q: "¿Qué necesito para activar los pagos online?",
        a: "Generalmente una cuenta de comercio con la pasarela, la validación de tu negocio, una cuenta bancaria para recibir el dinero y la integración técnica con tu tienda. Nosotros realizamos la parte técnica y dejamos el cobro probado."
      },
      {
        q: "¿Puedo ofrecer varios métodos de pago a la vez?",
        a: "Sí, y es lo recomendable. Combinar tarjeta, billeteras como Yape y Plin, transferencia y, si aplica, contra entrega, reduce el abandono de carrito porque cada cliente paga como prefiere."
      }
    ],
    related: [
      {
        label: "Pasarelas de pago para ecommerce en Perú",
        href: "/blog/pasarelas-de-pago-para-ecommerce-en-peru",
        desc: "Compara las opciones para cobrar online en tu tienda."
      },
      {
        label: "Tiendas virtuales",
        href: "/tiendas-virtuales",
        desc: "Creamos tu tienda con pagos integrados y listos para vender."
      },
      {
        label: "Cotiza tu tienda",
        href: "/cotizacion",
        desc: "Te orientamos sobre la mejor pasarela para tu negocio."
      }
    ]
  },
  {
    slug: "google-mi-negocio-para-empresas-en-peru",
    title: "Google Mi Negocio (Business Profile) para empresas en Perú",
    h1: "Google Mi Negocio para empresas en Perú",
    description: "Guía de Google Mi Negocio (Google Business Profile) para empresas en Perú: cómo crear y verificar tu ficha, reseñas, fotos y SEO local para aparecer en el mapa.",
    excerpt: "Cómo crear, verificar y optimizar tu ficha de Google Mi Negocio para aparecer en el mapa y captar clientes locales en Perú.",
    datePublished: "2026-06-25",
    dateModified: "2026-06-25",
    category: "SEO Local",
    readingMin: 7,
    intro: "Google Mi Negocio, hoy llamado Google Business Profile, es tu ficha gratuita en Google y Maps. Para empresas en Perú es decisiva: cuando alguien busca tu servicio cerca, esa ficha decide si apareces en el mapa y recibes la llamada. Bien optimizada con datos consistentes y reseñas, atrae clientes locales sin pagar publicidad.",
    sections: [
      {
        h2: "Qué es Google Mi Negocio y por qué aparecer en el mapa",
        body: "Google Mi Negocio (ahora Google Business Profile) es la ficha gratuita de tu empresa que se muestra en la búsqueda de Google y en Google Maps. Cuando alguien busca un servicio o producto con intención local (por ejemplo, sumando una zona o un distrito), Google muestra un bloque con un mapa y tres negocios destacados: el llamado local pack. Aparecer ahí pone tu negocio frente a clientes que ya están buscando comprar.",
        bullets: [
          "Apareces en Google Maps y en la búsqueda con intención local.",
          "El local pack muestra tu negocio cuando el cliente busca cerca.",
          "Es gratuito y muestra teléfono, horario, fotos y reseñas.",
          "Permite que te llamen, te escriban o lleguen a tu local directamente."
        ]
      },
      {
        h2: "Cómo crear y verificar tu ficha",
        body: "Crear la ficha es gratis: la registras desde Google con la cuenta de tu empresa, indicando nombre, categoría, ubicación o zona de atención, teléfono y horario. El paso clave es la verificación, que confirma que el negocio es tuyo. Google ofrece distintos métodos de verificación según el caso (por ejemplo, por correo postal, llamada, video u otros). Hasta que verifiques, la ficha tiene un alcance limitado.",
        bullets: [
          "Registra el negocio con la cuenta de Google de tu empresa.",
          "Elige la categoría correcta: define para qué búsquedas apareces.",
          "Define si atiendes en un local o eres un negocio de servicio a domicilio.",
          "Completa la verificación con el método que Google te ofrezca.",
          "Recién verificada, la ficha despliega todo su potencial."
        ]
      },
      {
        h2: "Datos clave: la consistencia del NAP",
        body: "NAP significa Nombre, Dirección y Teléfono (Name, Address, Phone). Para el SEO local es fundamental que estos datos sean idénticos en tu ficha, tu web y cualquier directorio donde aparezcas. Si tu dirección o teléfono cambian de un sitio a otro, Google y los clientes se confunden, y eso debilita tu posicionamiento local.",
        bullets: [
          "Usa exactamente el mismo nombre de negocio en todos lados.",
          "Escribe la dirección de la misma forma en ficha, web y directorios.",
          "Mantén un teléfono consistente (idealmente uno principal).",
          "Si algo cambia (mudanza, nuevo número), actualízalo en todas partes."
        ]
      },
      {
        h2: "Reseñas y cómo pedirlas",
        body: "Las reseñas son uno de los factores más visibles de tu ficha: dan confianza y pueden inclinar la decisión de compra. No se pueden inventar ni comprar, pero sí puedes pedirlas a clientes satisfechos de forma natural. Lo más efectivo es solicitarlas justo después de una buena experiencia y facilitar el enlace directo a tu ficha. Responder a todas, buenas y malas, también suma.",
        bullets: [
          "Pide la reseña a clientes contentos, poco después de atenderlos.",
          "Comparte el enlace directo a tu ficha para que les tome segundos.",
          "Responde todas las reseñas con cortesía, incluidas las negativas.",
          "Nunca compres reseñas falsas: va contra las políticas de Google."
        ]
      },
      {
        h2: "Fotos, publicaciones y cómo se complementa con tu web",
        body: "Una ficha con buenas fotos de tu local, productos o equipo genera más clics que una vacía. Las publicaciones (novedades, promociones, eventos) mantienen la ficha activa. Y todo esto rinde más cuando tu web refuerza las mismas señales: una página clara, con tu dirección, tu rubro y contenido local, le confirma a Google que eres relevante para esas búsquedas. La ficha y la web trabajan juntas en el SEO local.",
        bullets: [
          "Sube fotos reales de tu local, productos, equipo y trabajos.",
          "Publica novedades y promociones para mantener la ficha viva.",
          "Asegúrate de que tu web muestre el mismo NAP que la ficha.",
          "Enlaza tu ficha y tu web entre sí para reforzar la coherencia."
        ]
      },
      {
        h2: "Errores comunes y cómo Websy te ayuda",
        body: "Muchos negocios pierden clientes por errores evitables: categoría mal elegida, datos inconsistentes, ficha sin verificar o sin fotos, y una web que no acompaña. En Websy diseñamos páginas web pensadas para el SEO local: con tu NAP consistente, contenido orientado a tu zona y la coherencia que tu ficha necesita para posicionar. Si quieres que tu negocio destaque en el mapa de Google, cuéntanos tu caso y lo cotizamos.",
        bullets: [
          "Categoría equivocada que te hace aparecer en búsquedas que no son tuyas.",
          "NAP inconsistente entre ficha, web y directorios.",
          "Ficha sin verificar, sin fotos o sin reseñas recientes.",
          "Una web que no refuerza tus señales locales."
        ]
      }
    ],
    faqs: [
      {
        q: "¿Google Mi Negocio es gratis?",
        a: "Sí. Crear y mantener tu ficha de Google Mi Negocio (Google Business Profile) es gratuito. Aparecer en el mapa y en el local pack no tiene costo; lo que mejora tu posición es optimizar bien la ficha y mantenerla activa."
      },
      {
        q: "¿Necesito una dirección física para tener ficha?",
        a: "No siempre. Si atiendes en un local, usas tu dirección. Si eres un negocio de servicio a domicilio o por zonas, puedes configurarlo como área de servicio sin mostrar una dirección exacta. Google ofrece ambas opciones al crear la ficha."
      },
      {
        q: "¿Cómo consigo más reseñas en Google?",
        a: "Pídelas a clientes satisfechos poco después de atenderlos y comparte el enlace directo a tu ficha para que les tome segundos. Responder todas las reseñas también ayuda. Nunca compres reseñas falsas: va contra las políticas de Google y puede perjudicarte."
      },
      {
        q: "¿Qué es el NAP y por qué importa?",
        a: "NAP es Nombre, Dirección y Teléfono. Importa porque para el SEO local estos datos deben ser idénticos en tu ficha, tu web y los directorios. La inconsistencia confunde a Google y a los clientes, y debilita tu posicionamiento."
      },
      {
        q: "¿La ficha reemplaza a mi página web?",
        a: "No. La ficha y la web se complementan: la ficha te hace visible en el mapa y la web da profundidad, confianza y refuerza tus señales locales. Lo ideal es que ambas muestren los mismos datos y se enlacen entre sí."
      },
      {
        q: "¿Cuánto tarda en posicionar mi ficha?",
        a: "Depende de la competencia de tu rubro y zona, de qué tan completa esté la ficha y de tus reseñas. La verificación habilita el alcance completo, y la optimización constante (fotos, publicaciones, reseñas y una web alineada) mejora los resultados con el tiempo."
      }
    ],
    related: [
      {
        label: "Cómo tener presencia online para tu negocio en Perú",
        href: "/blog/como-tener-presencia-online-para-tu-negocio-en-peru",
        desc: "Web, ficha de Google y redes para que te encuentren."
      },
      {
        label: "Diseño de páginas web",
        href: "/diseno-de-paginas-web",
        desc: "Páginas pensadas para SEO local y captar clientes."
      },
      {
        label: "Cotiza tu página web",
        href: "/cotizacion",
        desc: "Te ayudamos a destacar en el mapa de Google."
      }
    ]
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
