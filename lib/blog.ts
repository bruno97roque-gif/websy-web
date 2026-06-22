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
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
