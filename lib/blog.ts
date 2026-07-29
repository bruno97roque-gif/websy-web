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
    slug: "como-hacer-que-tu-pagina-web-aparezca-en-google-peru",
    title: "Cómo Hacer que tu Página Web Aparezca en Google (2026)",
    h1: "Cómo hacer que tu página web aparezca en Google",
    description:
      "Guía 2026 para Perú: cómo dar de alta tu página web en Google, indexarla en Search Console, enviar tu sitemap y por qué aún no apareces. Pasos claros para salir en Google.",
    excerpt:
      "Tu web está en línea pero no aparece en Google. Aquí los pasos reales para darla de alta, indexarla y empezar a posicionar en Perú.",
    datePublished: "2026-07-23",
    dateModified: "2026-07-23",
    category: "SEO",
    readingMin: 7,
    intro:
      "Publicaste tu página web pero al buscar tu negocio en Google no aparece. Es normal: estar en línea no es lo mismo que estar indexado. Aquí verás, paso a paso, cómo dar de alta tu web en Google, indexarla, enviar tu sitemap y por qué a veces tarda en salir.",
    sections: [
      {
        h2: "Estar en línea no es lo mismo que aparecer en Google",
        body:
          "Cuando subes tu web ya está disponible para quien escriba tu dirección exacta. Pero para salir en los resultados de búsqueda, Google primero tiene que descubrir tu sitio, rastrearlo e indexarlo (guardarlo en su índice). Recién ahí puede mostrarlo cuando alguien busca. Ese proceso no es automático ni inmediato: hay que ayudarlo, y eso es justo lo que verás aquí.",
      },
      {
        h2: "Paso 1: Da de alta tu web en Google Search Console",
        body:
          "Google Search Console es la herramienta gratuita y oficial para decirle a Google que tu web existe. Verificas que el sitio es tuyo, y desde ahí puedes pedir la indexación de tus páginas, ver por qué búsquedas apareces y detectar errores. Es el primer paso obligatorio: sin Search Console, estás a ciegas.",
        bullets: [
          "Crea una propiedad con tu dominio (por ejemplo, tunegocio.pe).",
          "Verifica la propiedad con el método que te indique Google.",
          "Usa 'Inspección de URL' para pedir la indexación de tu home y páginas clave.",
        ],
      },
      {
        h2: "Paso 2: Envía tu sitemap",
        body:
          "El sitemap es un archivo (normalmente sitemap.xml) que lista todas las páginas de tu web para que Google las encuentre de un tirón. Las webs profesionales lo generan solas. Envíalo desde Search Console en la sección 'Sitemaps'. Así Google descubre todo tu contenido sin depender de que llegue enlace por enlace. Si tu web no tiene sitemap, es señal de que le falta base técnica de SEO.",
      },
      {
        h2: "Paso 3: Por qué tu web todavía no aparece",
        body:
          "Que Google la haya indexado no garantiza salir arriba. Las razones más comunes por las que una web nueva no aparece (o aparece muy abajo) son:",
        bullets: [
          "Es reciente: Google necesita semanas para confiar en un dominio nuevo.",
          "No tiene contenido suficiente ni las palabras que la gente busca.",
          "Falta autoridad: casi ningún otro sitio la enlaza todavía.",
          "Problemas técnicos: bloqueos en robots.txt, etiqueta noindex o velocidad muy baja.",
          "Compites contra sitios grandes ya posicionados para esa búsqueda.",
        ],
      },
      {
        h2: "Paso 4: De 'aparecer' a 'posicionar' (que te encuentren y te contraten)",
        body:
          "Salir en Google es solo el arranque. Para que tu web te traiga clientes tiene que posicionar para las búsquedas correctas (tu servicio + tu ciudad), tener contenido útil, buena velocidad y señales de confianza como reseñas y tu ficha de Google Mi Negocio. Eso es SEO, y es un trabajo continuo. Si prefieres que lo hagamos por ti —desde lo técnico hasta el contenido que atrae a tu cliente— revisa nuestro [servicio de SEO en Perú](/seo). Y si tu web aún no está lista o necesita una base sólida, empieza por un [diseño web optimizado para SEO](/diseno-de-paginas-web).",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto tarda una web nueva en aparecer en Google?",
        a: "La indexación puede tardar desde unos días hasta un par de semanas. Posicionar bien para búsquedas competitivas toma más: normalmente varios meses de trabajo de SEO constante, sobre todo en un dominio nuevo.",
      },
      {
        q: "¿Tengo que pagar para aparecer en Google?",
        a: "No para los resultados orgánicos: aparecer e indexarse es gratis. Lo que 'cuesta' es el trabajo de SEO para posicionar arriba. Aparte existe Google Ads (publicidad pagada), que te muestra de inmediato sin depender del posicionamiento.",
      },
      {
        q: "¿Cómo sé si Google ya indexó mi página?",
        a: "Busca en Google 'site:tudominio.pe'. Si aparecen tus páginas, están indexadas. También lo confirmas en Search Console con la Inspección de URL.",
      },
      {
        q: "Mi web aparece pero muy abajo, ¿qué hago?",
        a: "Es lo esperable al inicio. Hay que reforzar contenido enfocado en lo que busca tu cliente, mejorar velocidad y señales locales (Google Mi Negocio, reseñas) y ganar enlaces. Es justo lo que trabaja nuestro servicio de SEO.",
      },
    ],
    related: [
      { label: "Servicio de SEO en Perú", href: "/seo", desc: "Posicionamos tu web para que te encuentren y te contraten." },
      { label: "Google Mi Negocio para empresas", href: "/blog/google-mi-negocio-para-empresas-en-peru", desc: "Aparece en el mapa y capta clientes locales." },
      { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Una web con base técnica lista para posicionar." },
    ],
  },
  {
    slug: "como-posicionar-tu-tienda-online-en-google-peru",
    title: "Cómo Posicionar tu Tienda Online en Google (Perú 2026)",
    h1: "Cómo posicionar tu tienda online en Google",
    description:
      "Guía 2026 para Perú: cómo posicionar tu tienda virtual en Google. SEO para e-commerce, fichas de producto, categorías, velocidad y contenido para vender más sin depender solo de ads.",
    excerpt:
      "Tu tienda online no vende si nadie la encuentra. Aquí cómo posicionarla en Google en Perú: SEO de productos, categorías y contenido.",
    datePublished: "2026-07-23",
    dateModified: "2026-07-23",
    category: "Tiendas virtuales",
    readingMin: 7,
    intro:
      "Tener una tienda online no sirve de nada si nadie la encuentra. Posicionar tu e-commerce en Google es lo que te trae ventas todos los días sin pagar por cada clic. Aquí verás cómo hacerlo en Perú: desde las fichas de producto y las categorías hasta la velocidad y el contenido que atrae compradores.",
    sections: [
      {
        h2: "Por qué el SEO es clave para una tienda virtual",
        body:
          "La publicidad pagada trae ventas mientras pagas; el SEO trae ventas de forma sostenida. Una tienda bien posicionada aparece cuando alguien busca exactamente lo que vendes, con intención de comprar. En un e-commerce el SEO no es una sola página: son decenas de productos y categorías que pueden rankear cada uno por su búsqueda. Ese es el gran potencial de una tienda optimizada.",
      },
      {
        h2: "Optimiza tus fichas de producto",
        body:
          "Cada producto es una oportunidad de rankear. Para eso, la ficha necesita:",
        bullets: [
          "Un título claro con el nombre real del producto (como lo busca la gente).",
          "Descripción propia y útil, no la copiada del proveedor (Google penaliza el contenido duplicado).",
          "Fotos de calidad con texto alternativo (alt) descriptivo.",
          "URL limpia y datos estructurados de producto (precio, stock, reseñas).",
        ],
      },
      {
        h2: "Las categorías son tus páginas más potentes",
        body:
          "Las páginas de categoría (por ejemplo 'zapatillas para correr') suelen tener más búsquedas que un producto individual y son las que más tráfico capturan. Dales un título y un texto propio que explique la categoría, no solo un listado de productos. Una buena arquitectura de categorías, bien enlazada, es la columna vertebral del SEO de tu tienda.",
      },
      {
        h2: "Velocidad, móvil y confianza",
        body:
          "En Perú la mayoría compra desde el celular: si tu tienda carga lento, pierdes ventas y posiciones. Google prioriza las tiendas rápidas y aptas para móvil. Súmale señales de confianza (pagos locales como Yape y Plin, envíos claros, reseñas) y no solo posicionas mejor: conviertes más. Velocidad y confianza van de la mano con las ventas.",
      },
      {
        h2: "Contenido que atrae compradores",
        body:
          "Un blog con guías de compra ('cómo elegir…', 'mejores… 2026') atrae a gente en fase de investigación y la lleva a tus productos. Es la forma de captar tráfico que aún no busca tu marca pero sí lo que vendes. Si quieres una tienda construida y optimizada para vender desde el día uno —con SEO, pagos locales y velocidad— revisa nuestro servicio de [tiendas virtuales](/tiendas-virtuales). Y para el trabajo de posicionamiento continuo, nuestro [servicio de SEO](/seo) lleva tu catálogo a la primera página.",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto tarda en posicionar una tienda online?",
        a: "Las primeras mejoras se ven en semanas, pero posicionar categorías y productos competitivos toma varios meses de trabajo constante. Un dominio nuevo tarda más; por eso conviene empezar cuanto antes.",
      },
      {
        q: "¿SEO o Google Ads para mi tienda?",
        a: "Lo ideal es combinar: Ads te da ventas inmediatas mientras el SEO madura, y el SEO te da ventas sostenidas sin pagar por clic. A largo plazo, el SEO baja tu costo de adquisición.",
      },
      {
        q: "¿Sirve el SEO si vendo también por redes o marketplaces?",
        a: "Sí. Tu tienda propia posicionada en Google es un canal que no depende de algoritmos ajenos ni de comisiones. Complementa muy bien a redes y marketplaces, y la marca queda tuya.",
      },
      {
        q: "¿Ustedes optimizan tiendas ya existentes?",
        a: "Sí. Auditamos tu tienda (Shopify, WooCommerce u otra), corregimos lo técnico y trabajamos el SEO de productos y categorías. Cuéntanos qué plataforma usas y te orientamos.",
      },
    ],
    related: [
      { label: "Tiendas virtuales", href: "/tiendas-virtuales", desc: "Creamos tu e-commerce optimizado para vender." },
      { label: "Servicio de SEO en Perú", href: "/seo", desc: "Llevamos tu catálogo a la primera página de Google." },
      { label: "Cómo integrar Yape y Plin en tu tienda", href: "/blog/como-integrar-yape-y-plin-en-tu-tienda-virtual", desc: "Pagos locales que aumentan tus ventas." },
    ],
  },
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
          "Porque un precio serio sale de entender tu negocio. Lo correcto es un diagnóstico corto (qué vendes, cuántos productos, cómo cobras) y luego una propuesta con alcance y tiempos. Puedes ver cómo estructuramos la inversión en nuestra página de [precios](/precios) y todo lo que incluye el [desarrollo de tiendas virtuales](/tiendas-virtuales). Desconfía de quien te tira una cifra sin preguntar nada: o te cobra de más o te entrega de menos.",
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
    title: "Pasarelas de Pago en Perú 2026: Yape, Plin, Niubiz o Izipay",
    h1: "Las mejores pasarelas de pago para ecommerce en Perú",
    description:
      "Guía 2026 de pasarelas de pago para tu tienda virtual en Perú: cómo aceptar Yape, Plin y tarjetas con Niubiz o Izipay, y cuál conviene según tu tipo de negocio.",
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
    title: "Página Web o Tienda Virtual en 2026: ¿cuál necesitas?",
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
          "La pregunta no es solo cuánto cuesta, sino cuántos clientes te puede traer. Una web pensada para captar contactos se paga sola; una hecha solo 'para tenerla' rara vez genera retorno. Mira todo lo que incluye nuestro [diseño de páginas web](/diseno-de-paginas-web) y cómo estructuramos la inversión en [precios](/precios).",
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
    title: "Cuánto Cuesta una Tienda Shopify en Perú 2026 (en soles)",
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
          "Lo recomendable es empezar por lo que más te urge —un [sistema de inventario](/sistemas/inventario), un [sistema de ventas y facturación](/sistemas/ventas-y-facturacion) o un [sistema de gestión (ERP/CRM)](/sistemas/gestion-erp-crm)— e ir sumando módulos por etapas, según el sistema demuestra su valor.",
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
          "Si manejas muchos productos, varias sedes o vendes por varios canales, un [sistema de inventario](/sistemas/inventario) conectado a tu tienda te ahorra descuadres y horas de trabajo manual.",
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
        body: "En Websy buscamos que el cliente quede dueño de su proyecto. Como [agencia de desarrollo web en Lima](/desarrollo-web), entregamos páginas web y tiendas virtuales autoadministrables, con alcance y cronograma definidos desde el inicio, y dejamos el dominio y los accesos a tu nombre. Acompañamos después del lanzamiento y dejamos la web lista para SEO y para integraciones útiles en Perú como WhatsApp, facturación electrónica SUNAT y pasarelas de pago. Si estás evaluando opciones, conversemos sin compromiso."
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
        body: "En Websy desarrollamos tiendas virtuales en Shopify y WooCommerce, y diseñamos páginas web y [software a medida](/desarrollo-de-software-a-medida). Si tu operación lo necesita, desarrollamos un [sistema de ventas y facturación](/sistemas/ventas-y-facturacion) que emite comprobantes conectado a tu inventario. Podemos conectar tu tienda con tu plataforma de facturación para que el comprobante se genere automáticamente al confirmarse el pago, con opción de boleta o factura en el checkout. Si quieres dejar de emitir comprobantes a mano, cuéntanos tu caso y te orientamos según tu volumen de ventas."
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
    title: "Google Mi Negocio 2026: Cómo Registrar tu Empresa Gratis",
    h1: "Google Mi Negocio para empresas en Perú",
    description: "Cómo registrar tu empresa gratis en Google Mi Negocio (Business Profile) en Perú: crear y verificar tu ficha paso a paso, reseñas, fotos y SEO local para aparecer en el mapa.",
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
        body: "Una ficha con buenas fotos de tu local, productos o equipo genera más clics que una vacía. Las publicaciones (novedades, promociones, eventos) mantienen la ficha activa. Y todo esto rinde más cuando tu web refuerza las mismas señales: una página clara, con tu dirección, tu rubro y contenido local, le confirma a Google que eres relevante para esas búsquedas. La ficha y la web trabajan juntas en el SEO local. Si prefieres que configuremos y optimicemos tu ficha de Google por ti, revisa nuestro [servicio de SEO local en Perú](/seo). Y si tu página todavía no sale en los resultados, empieza por esta [guía para aparecer en Google con tu página web](/blog/como-aparecer-en-google-con-tu-pagina-web).",
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

  {
    slug: "como-aparecer-en-google-con-tu-pagina-web",
    title: "Cómo aparecer en Google con tu página web (guía 2026)",
    h1: "Cómo hacer que tu página web aparezca en Google",
    description:
      "¿Tu página web no aparece en Google? Guía práctica 2026 para indexar, elegir palabras clave, optimizar el SEO on-page y ganar posiciones locales en Perú.",
    excerpt:
      "Por qué tu web no sale en Google todavía y los pasos concretos para posicionarla y empezar a recibir clientes.",
    datePublished: "2026-06-30",
    category: "SEO",
    readingMin: 8,
    intro:
      "Tener una página web no garantiza aparecer en Google: hay que ayudarla a que Google la encuentre, la entienda y confíe en ella. En esta guía verás, en orden, qué hace que una web posicione en Perú y qué puedes hacer tú mismo para empezar a recibir clientes desde el buscador.",
    sections: [
      {
        h2: "Por qué tu página web todavía no aparece en Google",
        body:
          "Casi siempre es una de tres razones: Google aún no la ha indexado, el contenido no responde a lo que busca tu cliente, o hay webs más antiguas y con más autoridad para esa búsqueda. Lo bueno es que todas se trabajan. Una web recién publicada puede tardar de días a algunas semanas en empezar a mostrarse, y las posiciones mejoran con contenido y enlaces con el tiempo.",
      },
      {
        h2: "Paso 1: que Google pueda encontrar e indexar tu web",
        body:
          "Antes de pensar en posiciones, Google tiene que poder leer tu sitio. Lo mínimo indispensable:",
        bullets: [
          "Un sitemap.xml y un robots.txt correctos que no bloqueen el sitio.",
          "Registrar tu web en Google Search Console y pedir la indexación.",
          "Contenido en texto real (no todo dentro de imágenes) que Google pueda leer.",
          "Una sola versión del dominio (con o sin www) para no dividir la fuerza.",
          "Buena velocidad y versión móvil: una web lenta indexa y posiciona peor.",
        ],
      },
      {
        h2: "Paso 2: escribe para lo que tu cliente realmente busca",
        body:
          "La gente no busca como tú describes tu servicio, busca su problema. Antes de redactar, lista las frases exactas que usaría tu cliente (por ejemplo cuánto cuesta, cerca de mí, en Lima, para mi rubro) y crea una página o artículo para cada intención. Una web con una sola página lo tiene difícil: cada servicio y cada duda frecuente merece su propia URL.",
      },
      {
        h2: "Paso 3: SEO on-page, el que más depende de ti",
        body:
          "Es el trabajo dentro de cada página y es donde más rápido se ven mejoras. Un [diseño de páginas web optimizado para SEO](/diseno-de-paginas-web) ya viene con esto resuelto desde el inicio:",
        bullets: [
          "Un título (title) y una meta descripción únicos por página, con la palabra clave.",
          "Un solo H1 y una estructura de encabezados ordenada (H2, H3).",
          "URLs cortas y descriptivas, sin códigos raros.",
          "Imágenes livianas con texto alternativo (alt).",
          "Datos estructurados (schema) para que Google entienda tu negocio.",
          "Enlaces internos entre tus páginas para repartir autoridad.",
        ],
      },
      {
        h2: "Paso 4: SEO local, tu mejor palanca en Perú",
        body:
          "Si atiendes a clientes de una ciudad o rubro, el SEO local rinde rapidísimo. Optimiza tu ficha de Google (mira nuestra guía de [Google Mi Negocio para empresas en Perú](/blog/google-mi-negocio-para-empresas-en-peru)), consigue reseñas reales, y crea páginas que mencionen tu ciudad y tus servicios. Así apareces en el mapa y en las búsquedas cerca de mí.",
      },
      {
        h2: "Cuánto tarda y qué esperar",
        body:
          "El SEO es acumulativo: las primeras señales aparecen en semanas y las buenas posiciones se consolidan en meses de trabajo constante. No es magia ni es instantáneo, pero es el canal más rentable a mediano plazo porque no pagas por cada clic. Si quieres saber qué incluye una web lista para posicionar, revisa [nuestros precios y qué entra en cada servicio](/precios).",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto tarda una página web nueva en aparecer en Google?",
        a: "Indexarse puede tomar de pocos días a algunas semanas. Posicionar en los primeros lugares para búsquedas con competencia toma meses de contenido y optimización constante. El SEO local suele dar resultados más rápido.",
      },
      {
        q: "¿Aparecer en Google es gratis?",
        a: "El posicionamiento orgánico (SEO) no se paga por clic, pero requiere trabajo: una web bien hecha, contenido y optimización. Distinto es Google Ads, donde pagas por cada clic para aparecer arriba de inmediato.",
      },
      {
        q: "¿Necesito un blog para posicionar?",
        a: "No es obligatorio, pero ayuda mucho. Un blog te permite responder las dudas de tus clientes y crear una página por cada búsqueda, lo que multiplica las puertas de entrada a tu web.",
      },
      {
        q: "¿Ustedes dejan la web lista para Google?",
        a: "Sí. Cada página que entregamos incluye SEO on-page desde el inicio: títulos, estructura, velocidad y datos estructurados. Pídenos una cotización y te explicamos el alcance.",
      },
    ],
    related: [
      {
        label: "Diseño de páginas web optimizadas para SEO",
        href: "/diseno-de-paginas-web",
        desc: "Webs listas para Google desde el primer día.",
      },
      {
        label: "Cómo posicionar una tienda virtual en Google",
        href: "/blog/como-posicionar-una-tienda-virtual-en-google",
        desc: "SEO aplicado a un ecommerce, paso a paso.",
      },
      {
        label: "Ver precios y qué incluye cada servicio",
        href: "/precios",
        desc: "Qué entra en una web pensada para posicionar.",
      },
    ],
  },

  {
    slug: "como-vender-por-whatsapp-desde-tu-tienda-virtual",
    title: "Cómo vender por WhatsApp desde tu tienda virtual (Perú)",
    h1: "Cómo vender por WhatsApp desde tu tienda virtual",
    description:
      "Convierte visitas en ventas por WhatsApp: botón directo, catálogo, pedidos y WhatsApp Business integrados a tu tienda virtual. Guía práctica para negocios en Perú.",
    excerpt:
      "El canal que más convierte en Perú es WhatsApp. Así lo integras a tu tienda virtual para cerrar más ventas.",
    datePublished: "2026-07-02",
    category: "Ecommerce",
    readingMin: 7,
    intro:
      "En Perú mucha gente prefiere cerrar la compra por WhatsApp antes que pagar en línea. Por eso una tienda virtual que vende de verdad no obliga a elegir: muestra el catálogo, permite el pago online y, además, deja escribir por WhatsApp con el pedido listo. Así se ve cómo hacerlo bien.",
    sections: [
      {
        h2: "Por qué WhatsApp vende tanto en Perú",
        body:
          "El comprador peruano confía en hablar antes de pagar: pregunta stock, tallas, delivery o si acepta Yape. WhatsApp da esa cercanía y baja la desconfianza. Una tienda que aprovecha ese hábito, en lugar de pelear contra él, convierte muchas más visitas en ventas.",
      },
      {
        h2: "El botón de WhatsApp: dónde y cómo ponerlo",
        body:
          "No basta con un ícono flotante. Para que venda, el botón debe llegar con contexto:",
        bullets: [
          "Botón flotante siempre visible, sobre todo en el celular.",
          "Botón en cada producto que ya incluya el nombre del artículo en el mensaje.",
          "Mensaje pre-escrito tipo Hola, quiero este producto para que el cliente solo envíe.",
          "Horario de atención claro para fijar expectativas de respuesta.",
        ],
      },
      {
        h2: "Del catálogo al pedido por WhatsApp, sin fricción",
        body:
          "La mejor tienda combina lo automático con lo humano: el cliente arma su carrito en la web y, al finalizar, puede pagar en línea o enviar el pedido completo por WhatsApp con un clic. Ese flujo lo dejamos configurado cuando desarrollamos tu [tienda virtual](/tiendas-virtuales), para que ninguna consulta se pierda.",
      },
      {
        h2: "WhatsApp Business: úsalo como herramienta de venta",
        body:
          "La versión Business es gratis y suma funciones que ordenan tus ventas:",
        bullets: [
          "Catálogo dentro de WhatsApp con precios y fotos.",
          "Respuestas rápidas para preguntas repetidas (precio, delivery, pago).",
          "Etiquetas para separar clientes nuevos, pagados y pendientes.",
          "Mensaje de bienvenida y de ausencia automáticos.",
        ],
      },
      {
        h2: "Errores que hacen que pierdas ventas por WhatsApp",
        body:
          "Responder tarde, no tener los precios a la mano, o mandar al cliente a un número donde nadie contesta. También perder el historial por usar un WhatsApp personal. Ordena el canal: un número de negocio, respuestas listas y, si el volumen crece, un sistema que centralice los pedidos.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo vender solo por WhatsApp sin pasarela de pago?",
        a: "Sí, muchos negocios empiezan así: el cliente elige en la web y coordina pago y envío por WhatsApp (Yape, Plin, transferencia o contra entrega). Más adelante puedes sumar pago en línea sin rehacer la tienda.",
      },
      {
        q: "¿Se puede poner el botón de WhatsApp en cada producto?",
        a: "Sí. Lo ideal es que el mensaje ya llegue con el nombre del producto, para que tú sepas de inmediato qué quiere el cliente y cierres más rápido.",
      },
      {
        q: "¿WhatsApp Business tiene costo?",
        a: "La app de WhatsApp Business es gratuita e incluye catálogo, respuestas rápidas y etiquetas. Distinto es la API de WhatsApp, pensada para grandes volúmenes y automatizaciones.",
      },
      {
        q: "¿Ustedes integran WhatsApp a mi tienda?",
        a: "Sí, es parte de cómo entregamos las tiendas: botón flotante, botón por producto con mensaje pre-armado y enlace directo. Escríbenos y lo dejamos listo.",
      },
    ],
    related: [
      {
        label: "Tiendas virtuales que venden",
        href: "/tiendas-virtuales",
        desc: "Ecommerce con pagos locales y WhatsApp integrado.",
      },
      {
        label: "Pasarelas de pago para ecommerce en Perú",
        href: "/blog/pasarelas-de-pago-para-ecommerce-en-peru",
        desc: "Yape, Plin, tarjeta: qué conviene a tu tienda.",
      },
      {
        label: "Cotiza tu tienda virtual",
        href: "/cotizacion",
        desc: "Te la entregamos lista para vender.",
      },
    ],
  },

  {
    slug: "sistema-de-gestion-para-pymes-cuando-dejar-el-excel",
    title: "Sistema de gestión para pymes: cuándo dejar el Excel",
    h1: "Sistema de gestión para pymes: cuándo dejar el Excel",
    description:
      "¿El Excel te quedó chico? Señales de que tu pyme necesita un sistema de gestión a medida, qué procesos automatizar primero y cómo migrar sin frenar tu operación.",
    excerpt:
      "El Excel funciona hasta que empieza a costarte ventas y horas. Cuándo dar el salto a un sistema propio.",
    datePublished: "2026-07-03",
    category: "Software",
    readingMin: 7,
    intro:
      "El Excel es genial para empezar, pero llega un punto en que frena tu negocio: se rompe, se duplica, nadie sabe cuál es la versión buena. Aquí verás las señales claras de que tu pyme necesita un sistema de gestión a medida y cómo dar el paso sin detener tu operación.",
    sections: [
      {
        h2: "Señales de que el Excel te quedó chico",
        body:
          "No es cuestión de moda, es cuestión de dolor. Si te pasan varias de estas, ya perdiste el punto:",
        bullets: [
          "Varias personas editan el mismo archivo y se pisan los datos.",
          "Nadie sabe cuál es la versión final ni quién cambió qué.",
          "Copias y pegas la misma información en tres lugares distintos.",
          "No puedes saber tu stock o tus ventas del día sin armar el reporte a mano.",
          "Un error de una celda te desordena todo el mes.",
        ],
      },
      {
        h2: "Qué es un sistema de gestión a medida",
        body:
          "Es un [software a medida](/desarrollo-de-software-a-medida) hecho para tu forma de trabajar: en vez de adaptar tu negocio a un programa genérico, el sistema se adapta a tus procesos. Cada usuario entra con su clave, ve lo que le corresponde, y la información queda en un solo lugar, ordenada y respaldada.",
      },
      {
        h2: "Qué procesos automatizar primero",
        body:
          "No hace falta digitalizar todo de golpe. Conviene empezar por lo que más te duele o más plata mueve:",
        bullets: [
          "Inventario y stock, para dejar de vender lo que no tienes.",
          "Ventas y cotizaciones, con historial por cliente.",
          "Caja e ingresos, para ver el estado del negocio en tiempo real.",
          "Reportes automáticos, en lugar de armarlos a mano cada mes.",
        ],
      },
      {
        h2: "A medida vs enlatado: cuál te conviene",
        body:
          "Un software enlatado es rápido y barato al inicio, pero te obliga a trabajar como el programa quiere y suele cobrar mensualidad por usuario. Uno a medida cuesta más al comienzo pero crece contigo y es tuyo. Lo desarrollamos con más detalle en [software a medida vs software enlatado](/blog/software-a-medida-vs-software-enlatado).",
      },
      {
        h2: "Cómo migrar sin frenar tu operación",
        body:
          "El salto se hace por etapas: primero el módulo más crítico, se prueba con tu equipo, se corrige y recién se suma el siguiente. Migramos tus datos del Excel al sistema para que no empieces de cero, y te capacitamos para que el cambio sea tranquilo. Si quieres estimar el alcance, mira [nuestros precios](/precios) o pide una cotización.",
      },
    ],
    faqs: [
      {
        q: "¿Cuándo conviene pasar del Excel a un sistema?",
        a: "Cuando el Excel empieza a costarte tiempo, errores o ventas: varios editando a la vez, reportes armados a mano, o no saber tu stock real. Si eso ya te pasa a diario, un sistema se paga solo.",
      },
      {
        q: "¿Puedo aprovechar los datos que ya tengo en Excel?",
        a: "Sí. Migramos tu información existente al nuevo sistema para que no pierdas historial ni empieces desde cero.",
      },
      {
        q: "¿Es muy caro un sistema a medida para una pyme?",
        a: "Depende del alcance. Se puede empezar por un módulo clave y crecer por etapas, para que la inversión acompañe al negocio. Te damos una propuesta según tu caso.",
      },
      {
        q: "¿Mi equipo podrá usarlo sin ser técnico?",
        a: "Sí. Lo diseñamos para que sea simple y te capacitamos. Cada persona ve solo lo que necesita, con su propio usuario y permisos.",
      },
    ],
    related: [
      {
        label: "Desarrollo de software a medida",
        href: "/desarrollo-de-software-a-medida",
        desc: "Sistemas hechos para tu forma de trabajar.",
      },
      {
        label: "¿Cuándo una empresa necesita un sistema web?",
        href: "/blog/cuando-una-empresa-necesita-un-sistema-web",
        desc: "Señales y beneficios de dar el salto.",
      },
      {
        label: "Cotiza tu sistema",
        href: "/cotizacion",
        desc: "Te ayudamos a definir el alcance ideal.",
      },
    ],
  },

  {
    slug: "pagina-web-para-restaurantes-en-peru",
    title: "Página web para restaurantes en Perú: carta digital y pedidos",
    h1: "Página web para restaurantes: carta digital, pedidos y reservas",
    description:
      "Tu restaurante necesita más que redes y apps de delivery. Carta digital con QR, pedidos por WhatsApp, reservas y SEO local para aparecer en Google Maps en Perú.",
    excerpt:
      "Deja de pagar comisiones altas por cada pedido: una web propia con carta digital y pedidos directos.",
    datePublished: "2026-07-05",
    category: "Diseño web",
    readingMin: 7,
    intro:
      "Las apps de delivery te dan pedidos, pero se quedan con una comisión de cada venta y con tus clientes. Una página web propia para tu restaurante te da carta digital, pedidos directos, reservas y presencia en Google Maps, sin pagar comisión por cada plato. Así debería ser.",
    sections: [
      {
        h2: "Por qué tu restaurante necesita web propia",
        body:
          "Instagram y las apps de delivery son útiles, pero no son tuyos: cambian las reglas, cobran comisión y no apareces bien en Google cuando alguien busca dónde comer cerca. Una web propia es tu local en internet: siempre disponible, sin comisión por pedido y bajo tu control.",
      },
      {
        h2: "Qué debe tener la web de un restaurante",
        body:
          "No es una web bonita y ya: es una herramienta para llenar mesas y recibir pedidos. Lo indispensable:",
        bullets: [
          "Carta digital con QR para la mesa, fácil de actualizar precios.",
          "Botón de pedido por WhatsApp con el plato ya cargado.",
          "Reservas en línea, para no perder llamadas.",
          "Fotos que den hambre y carga rápida en el celular.",
          "Ubicación con Google Maps, horarios y medios de pago (incluido Yape).",
        ],
      },
      {
        h2: "Carta digital con QR vs apps de delivery",
        body:
          "Una carta digital propia se actualiza en segundos y no cobra comisión. Las apps de delivery sirven para captar clientes nuevos, pero conviene que los recurrentes te pidan directo por tu web. Muchos restaurantes usan ambos: apps para descubrimiento y web propia para fidelizar y ahorrar comisiones.",
      },
      {
        h2: "Recibe pedidos y delivery propio",
        body:
          "Si quieres ir más allá de la carta, tu web puede convertirse en una pequeña [tienda virtual](/tiendas-virtuales) para pedidos con pago en línea o contra entrega, y coordinar tu propio delivery. Así cada pedido queda contigo, con tus datos y sin intermediarios.",
      },
      {
        h2: "SEO local: aparece cuando buscan dónde comer",
        body:
          "La mitad de la batalla es salir en Google cuando alguien busca tu tipo de comida cerca. Con una web optimizada y tu ficha de Google al día, apareces en el mapa y en las búsquedas locales. Te lo dejamos listo cuando hacemos tu [página web](/diseno-de-paginas-web), y puedes profundizar en nuestra guía para [aparecer en Google](/blog/como-aparecer-en-google-con-tu-pagina-web).",
      },
    ],
    faqs: [
      {
        q: "¿Una web propia reemplaza a las apps de delivery?",
        a: "No necesariamente. Las apps ayudan a que te descubran clientes nuevos; tu web propia te sirve para que los recurrentes pidan directo, sin comisión, y para aparecer en Google. Lo ideal es combinarlas.",
      },
      {
        q: "¿Puedo actualizar la carta yo mismo?",
        a: "Sí. Entregamos la carta digital administrable para que cambies platos y precios cuando quieras, sin depender de nadie.",
      },
      {
        q: "¿Sirve para recibir reservas?",
        a: "Sí, podemos incluir reservas en línea para que no pierdas clientes por llamadas no contestadas y organices mejor tus mesas.",
      },
      {
        q: "¿Cuánto cuesta la página web de un restaurante?",
        a: "Depende de si quieres solo carta digital o también pedidos y reservas. Te preparamos una cotización a medida y sin costo; puedes ver qué incluye cada opción en nuestra página de precios.",
      },
    ],
    related: [
      {
        label: "Diseño de páginas web para negocios",
        href: "/diseno-de-paginas-web",
        desc: "Webs que llenan mesas y reciben pedidos.",
      },
      {
        label: "Tiendas virtuales para pedidos online",
        href: "/tiendas-virtuales",
        desc: "Pedidos con pago en línea o contra entrega.",
      },
      {
        label: "Ver precios y cotizar",
        href: "/precios",
        desc: "Qué incluye la web de un restaurante.",
      },
    ],
  },

  {
    slug: "google-ads-para-pymes-en-peru-cuanto-invertir",
    title: "Google Ads para pymes en Perú: cuánto invertir para empezar",
    h1: "Google Ads para pymes en Perú: cuánto invertir para empezar a vender",
    description:
      "Cuánto invertir en Google Ads si tienes una pyme en Perú, qué tipo de campaña elegir, por qué la landing importa tanto como el anuncio y cómo medir tus leads.",
    excerpt:
      "Google Ads te trae clientes desde el primer día si lo haces bien. Cuánto invertir y cómo no botar la plata.",
    datePublished: "2026-07-06",
    category: "Marketing",
    readingMin: 8,
    intro:
      "Google Ads pone tu negocio arriba de todo justo cuando alguien busca lo que vendes. Para una pyme en Perú es la forma más rápida de conseguir clientes, pero también la más fácil de malgastar. Aquí verás cuánto invertir para empezar, qué campaña elegir y cómo asegurarte de que cada sol traiga leads.",
    sections: [
      {
        h2: "Por qué Google Ads funciona para pymes",
        body:
          "A diferencia del SEO, que toma meses, Google Ads te muestra hoy ante quien ya está buscando comprar. Eso lo hace ideal para arrancar, validar qué servicio se vende más y llenar la agenda mientras tu posicionamiento orgánico madura. Pagas por clic, así que el control del gasto está en tus manos.",
      },
      {
        h2: "Cuánto invertir al inicio",
        body:
          "No hay una cifra mágica, pero en el mercado peruano muchas pymes arrancan con un presupuesto diario modesto y lo suben según los resultados. La clave no es cuánto gastas, sino el retorno: si cada sol invertido te trae más en ventas, conviene escalar. Empieza con un monto que puedas sostener unas semanas, porque las campañas necesitan datos para optimizarse.",
      },
      {
        h2: "Search, Performance Max o Meta: cuál elegir",
        body:
          "Cada uno sirve para algo distinto:",
        bullets: [
          "Búsqueda (Search): apareces cuando alguien busca tu servicio. Ideal para captar intención de compra.",
          "Performance Max: Google reparte tu anuncio en toda su red; útil con buen material y datos.",
          "Meta (Facebook e Instagram): mejor para generar demanda y recordación, no tanto búsqueda activa.",
          "Para la mayoría de pymes de servicios, conviene empezar por Search bien segmentado.",
        ],
      },
      {
        h2: "La landing importa tanto como el anuncio",
        body:
          "El error más caro es llevar el clic a una web lenta o confusa: pagas por la visita y la pierdes. Cada campaña necesita una [página web o landing pensada para convertir](/diseno-de-paginas-web): carga rápida, un mensaje claro y un botón de contacto o WhatsApp visible. Sin eso, hasta el mejor anuncio bota la plata.",
      },
      {
        h2: "Cómo medir que te llegan leads de verdad",
        body:
          "Si no mides, no sabes qué funciona. Configura el seguimiento de conversiones y GA4 para contar formularios y clics a WhatsApp, no solo visitas. Así sabes cuánto te cuesta cada lead y puedes invertir más en lo que rinde. Es lo primero que dejamos listo cuando armamos una campaña.",
      },
      {
        h2: "SEO y Ads: mejor juntos",
        body:
          "Ads te da clientes hoy; el SEO te los da gratis mañana. Lo rentable es combinarlos: usa Ads para vender desde ya y, en paralelo, construye tu posicionamiento orgánico para depender menos de la publicidad. Si prefieres que un equipo gestione tus campañas, revisa nuestro servicio de [gestión de Google Ads en Perú](/google-ads); también puedes ver [nuestros precios](/precios) o [pedir una cotización](/cotizacion).",
      },
    ],
    faqs: [
      {
        q: "¿Cuánto debo invertir en Google Ads al mes?",
        a: "Depende de tu rubro y competencia. Muchas pymes empiezan con un presupuesto diario modesto y lo ajustan según el retorno. Lo importante es sostenerlo unas semanas para que la campaña tenga datos y medir el costo por lead.",
      },
      {
        q: "¿Google Ads o SEO, qué me conviene?",
        a: "Ads trae clientes de inmediato pero pagas por cada clic; el SEO tarda pero no se paga por clic. Lo ideal es empezar con Ads para vender ya y construir SEO en paralelo para el mediano plazo.",
      },
      {
        q: "¿Por qué necesito una landing y no mi home?",
        a: "Porque la home habla de todo y dispersa. Una landing enfocada en el servicio del anuncio, con un solo mensaje y un botón claro, convierte mucho mejor el tráfico pagado.",
      },
      {
        q: "¿Ustedes hacen las campañas y la web?",
        a: "Sí. Podemos crear la landing optimizada, configurar la medición de leads y gestionar la campaña. Escríbenos y te armamos una propuesta según tu presupuesto.",
      },
    ],
    related: [
      {
        label: "Páginas web y landings que convierten",
        href: "/diseno-de-paginas-web",
        desc: "El destino correcto para tu tráfico de Ads.",
      },
      {
        label: "Ver precios y qué incluye cada servicio",
        href: "/precios",
        desc: "Web, landing y medición de leads.",
      },
      {
        label: "Cotiza tu proyecto",
        href: "/cotizacion",
        desc: "Propuesta a tu medida en menos de 24 horas.",
      },
    ],
  },

  {
    slug: "pagina-web-para-clinicas-y-consultorios-medicos",
    title: "Qué debe tener la página web de una clínica o consultorio en Perú",
    h1: "Qué debe tener la página web de una clínica o consultorio",
    description:
      "Página web para clínicas y consultorios en Perú: reserva de citas, información de especialidades, confianza al paciente y SEO local para aparecer en Google.",
    excerpt:
      "Los pacientes buscan y eligen su médico en Google. Así debe ser la web de una clínica o consultorio.",
    datePublished: "2026-06-26",
    category: "Diseño web",
    readingMin: 6,
    intro:
      "Antes de pedir una cita, el paciente busca en Google, lee y compara. Una página web profesional para tu clínica o consultorio transmite confianza, muestra tus especialidades y permite reservar sin llamar. Aquí verás qué necesita para llenar tu agenda.",
    sections: [
      {
        h2: "Por qué una clínica necesita web propia",
        body:
          "Las redes sociales ayudan, pero no reemplazan una web: es donde el paciente confirma que eres serio, ve tus especialidades, horarios y ubicación, y decide contactarte. Además, es lo que Google muestra cuando alguien busca tu especialidad en tu ciudad.",
      },
      {
        h2: "Qué debe tener la web de un consultorio",
        body:
          "Todo pensado para dar confianza y facilitar la cita:",
        bullets: [
          "Reserva de citas o contacto directo por WhatsApp.",
          "Especialidades y servicios explicados con claridad.",
          "Perfil de los profesionales, con su formación y experiencia.",
          "Ubicación con Google Maps, horarios y medios de pago.",
          "Diseño sobrio y rápido, que funcione bien en el celular.",
        ],
      },
      {
        h2: "Confianza: el factor que más pesa en salud",
        body:
          "En salud, la confianza lo es todo. Fotos reales del local y del equipo, testimonios, certificaciones y textos claros marcan la diferencia entre que el paciente te escriba o siga buscando. Lo cuidamos en cada [página web](/diseno-de-paginas-web) que desarrollamos para el sector.",
      },
      {
        h2: "SEO local: aparece cuando buscan tu especialidad",
        body:
          "La mayoría de pacientes busca dentista cerca, pediatra en su distrito o su especialidad en Lima. Con una web optimizada y tu ficha de Google al día apareces en esas búsquedas. Revisa nuestra guía para [aparecer en Google](/blog/como-aparecer-en-google-con-tu-pagina-web) y gana pacientes desde el buscador.",
      },
      {
        h2: "Cuánto cuesta y cómo empezar",
        body:
          "Depende de si necesitas solo presencia y contacto o también reserva de citas en línea. En Websy hacemos [diseño de páginas web para clínicas y consultorios](/diseno-de-paginas-web/clinicas): te preparamos una cotización a medida y sin costo, y puedes ver qué incluye cada opción en [nuestra página de precios](/precios).",
      },
    ],
    faqs: [
      {
        q: "¿La web puede tener reserva de citas en línea?",
        a: "Sí. Podemos integrar reserva de citas o, si prefieres algo más simple, contacto directo por WhatsApp con el motivo de consulta ya cargado.",
      },
      {
        q: "¿Sirve para varias especialidades o sedes?",
        a: "Sí. Estructuramos la web por especialidades y sedes, cada una con su información, para que el paciente encuentre rápido lo que busca.",
      },
      {
        q: "¿Puedo actualizar horarios y precios yo mismo?",
        a: "Sí. La entregamos administrable y te capacitamos para editar horarios, servicios y contenido cuando lo necesites.",
      },
      {
        q: "¿Cuánto cuesta la página web de un consultorio?",
        a: "Depende del alcance. Te enviamos una cotización clara y sin costo en menos de 24 horas; también puedes revisar qué incluye cada servicio en nuestra página de precios.",
      },
    ],
    related: [
      { label: "Diseño de páginas web para negocios", href: "/diseno-de-paginas-web", desc: "Webs que transmiten confianza y captan pacientes." },
      { label: "Cómo aparecer en Google", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "SEO local para que te encuentren en tu ciudad." },
      { label: "Ver precios y cotizar", href: "/precios", desc: "Qué incluye la web de una clínica o consultorio." },
    ],
  },

  {
    slug: "pagina-web-para-estudios-de-abogados",
    title: "Página web para estudios de abogados en Perú",
    h1: "Página web para estudios y abogados independientes",
    description:
      "Página web para estudios de abogados en Perú: áreas de práctica, confianza profesional, captación de consultas y SEO local para aparecer en Google.",
    excerpt:
      "Un cliente con un problema legal busca y elige rápido. Tu web debe transmitir autoridad y facilitar el contacto.",
    datePublished: "2026-06-28",
    category: "Diseño web",
    readingMin: 6,
    intro:
      "Cuando alguien tiene un problema legal, busca en Google y contacta al abogado que le da más confianza y responde primero. Una página web profesional posiciona tu estudio como autoridad, explica tus áreas de práctica y convierte visitas en consultas. Esto es lo que necesita.",
    sections: [
      {
        h2: "Por qué un abogado necesita página web",
        body:
          "La reputación se construye también en Google. Una web propia muestra tu experiencia, tus áreas de práctica y casos de éxito, y separa a un profesional serio de quien solo tiene un perfil de redes. Es donde el cliente decide confiar y escribir.",
      },
      {
        h2: "Qué debe incluir la web de un estudio",
        body:
          "Enfocada en autoridad y en captar la consulta:",
        bullets: [
          "Áreas de práctica bien explicadas (laboral, familia, penal, corporativo, etc.).",
          "Perfil del abogado o del equipo, con formación y trayectoria.",
          "Formulario de consulta y WhatsApp para contacto inmediato.",
          "Contenido que resuelva dudas frecuentes y demuestre conocimiento.",
          "Diseño serio, rápido y perfecto en el celular.",
        ],
      },
      {
        h2: "Contenido que capta clientes",
        body:
          "Responder en tu web las dudas legales más comunes (qué hacer ante un despido, cómo iniciar un trámite) atrae exactamente a quien necesita tu ayuda y te posiciona como experto. Es la misma lógica que explicamos en cómo [aparecer en Google con tu página web](/blog/como-aparecer-en-google-con-tu-pagina-web).",
      },
      {
        h2: "SEO local para abogados",
        body:
          "Muchos buscan abogado laboral en Lima o abogado de familia cerca. Una [página web optimizada](/diseno-de-paginas-web) y tu ficha de Google te ponen frente a esos clientes en el momento justo, cuando ya buscan contratar.",
      },
      {
        h2: "Cuánto cuesta y cómo empezar",
        body:
          "Según tengas un abogado independiente o un estudio con varias áreas, el alcance cambia. Te damos una cotización clara y sin costo; mira qué incluye cada servicio en [nuestros precios](/precios).",
      },
    ],
    faqs: [
      {
        q: "¿La web sirve para captar consultas reales?",
        a: "Sí. La diseñamos para convertir: áreas claras, prueba de experiencia y un contacto directo por formulario y WhatsApp para que la consulta llegue de inmediato.",
      },
      {
        q: "¿Puedo mostrar mis áreas de práctica por separado?",
        a: "Sí. Creamos una página por área de práctica, lo que además ayuda a posicionar cada una en Google.",
      },
      {
        q: "¿Necesito un blog legal?",
        a: "No es obligatorio, pero ayuda mucho: responder dudas legales frecuentes atrae clientes y te posiciona como autoridad en tu especialidad.",
      },
      {
        q: "¿Cuánto cuesta la web de un estudio de abogados?",
        a: "Depende del número de áreas y funciones. Te enviamos una cotización a medida y sin costo en menos de 24 horas.",
      },
    ],
    related: [
      { label: "Diseño de páginas web profesionales", href: "/diseno-de-paginas-web", desc: "Webs que proyectan autoridad y captan consultas." },
      { label: "Cómo aparecer en Google", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "SEO para que te encuentren clientes con intención." },
      { label: "Ver precios y cotizar", href: "/precios", desc: "Qué incluye la web de un estudio de abogados." },
    ],
  },

  {
    slug: "pagina-web-para-inmobiliarias-y-constructoras",
    title: "Página web para inmobiliarias y constructoras en Perú",
    h1: "Página web para inmobiliarias y constructoras",
    description:
      "Página web para inmobiliarias y constructoras en Perú: catálogo de proyectos y propiedades, captación de leads, WhatsApp y SEO local para aparecer en Google.",
    excerpt:
      "Vender un inmueble empieza en Google. Tu web debe mostrar proyectos y capturar leads calificados.",
    datePublished: "2026-07-01",
    category: "Diseño web",
    readingMin: 7,
    intro:
      "El comprador de un inmueble investiga en internet mucho antes de visitar. Una página web profesional para tu inmobiliaria o constructora muestra tus proyectos y propiedades, genera confianza y captura leads calificados que tu equipo puede cerrar. Así se arma.",
    sections: [
      {
        h2: "Por qué una inmobiliaria necesita web propia",
        body:
          "Los portales inmobiliarios te dan visibilidad pero cobran por aviso y comparten tu lead con la competencia. Una web propia es tu vitrina completa: muestra todos tus proyectos, capta el lead directo y lo lleva a tu equipo, sin intermediarios.",
      },
      {
        h2: "Qué debe tener la web de una constructora",
        body:
          "Pensada para mostrar y para captar:",
        bullets: [
          "Catálogo de proyectos y propiedades con fotos, planos y ubicación.",
          "Ficha por proyecto con precios referenciales y estado (preventa, entrega).",
          "Formulario de interés y WhatsApp por cada propiedad.",
          "Sección de la empresa: trayectoria y proyectos entregados (confianza).",
          "Carga rápida y versión móvil impecable, donde más se navega.",
        ],
      },
      {
        h2: "Captura leads calificados, no solo visitas",
        body:
          "Cada proyecto debe tener su propio botón de contacto con el nombre del inmueble ya cargado, para que tu equipo sepa qué le interesa a cada prospecto. Si manejas muchos leads, tu web puede conectarse con un [sistema a medida o CRM](/desarrollo-de-software-a-medida) para no perder ninguno.",
      },
      {
        h2: "SEO local: aparece por proyecto y por zona",
        body:
          "La gente busca departamentos en un distrito específico o proyectos en su ciudad. Con una [web optimizada](/diseno-de-paginas-web) y una página por proyecto y por zona, apareces en esas búsquedas. Nuestra guía para [aparecer en Google](/blog/como-aparecer-en-google-con-tu-pagina-web) aplica igual al rubro inmobiliario.",
      },
      {
        h2: "Cuánto cuesta y cómo empezar",
        body:
          "Depende de cuántos proyectos manejes y si necesitas integración con CRM. Te preparamos una cotización a medida y sin costo; revisa qué incluye cada opción en [nuestra página de precios](/precios).",
      },
    ],
    faqs: [
      {
        q: "¿Puedo cargar y actualizar los proyectos yo mismo?",
        a: "Sí. La entregamos administrable para que agregues proyectos, propiedades, fotos y estados (preventa, entrega) cuando quieras.",
      },
      {
        q: "¿La web se conecta con un CRM para gestionar leads?",
        a: "Sí. Podemos integrar tu web con un CRM o un sistema a medida para que cada lead llegue ordenado a tu equipo de ventas.",
      },
      {
        q: "¿Sirve para captar sin depender de los portales?",
        a: "Sí. La web propia capta leads directos, sin comisión y sin compartirlos con la competencia. Muchos usan ambos: portales para alcance y web propia para captar en serio.",
      },
      {
        q: "¿Cuánto cuesta la web de una inmobiliaria?",
        a: "Depende del número de proyectos y de las integraciones. Te enviamos una cotización clara y sin costo en menos de 24 horas.",
      },
    ],
    related: [
      { label: "Diseño de páginas web profesionales", href: "/diseno-de-paginas-web", desc: "Vitrina de proyectos que capta leads calificados." },
      { label: "Software y CRM a medida", href: "/desarrollo-de-software-a-medida", desc: "Gestiona tus leads y propiedades sin perder ninguno." },
      { label: "Ver precios y cotizar", href: "/precios", desc: "Qué incluye la web de una inmobiliaria o constructora." },
    ],
  },

  {
    slug: "cuanto-cuesta-un-software-a-medida-en-peru",
    title: "Cuánto cuesta un software a medida en Perú (2026)",
    h1: "¿Cuánto cuesta un software a medida en Perú?",
    description:
      "Cuánto cuesta un software a medida en Perú en 2026: qué factores definen el precio, cómo se cotiza por módulos y por qué es una inversión que se paga sola.",
    excerpt:
      "El precio de un software a medida no es un número fijo. Esto es lo que realmente define cuánto invertir.",
    datePublished: "2026-07-07",
    dateModified: "2026-07-07",
    category: "Software",
    readingMin: 7,
    intro:
      "El costo de un software a medida en Perú depende del problema que resuelve, no de una lista de precios. Cuántos módulos y usuarios, qué integraciones necesita y qué tan complejo es tu proceso definen la inversión. Aquí verás qué mueve el precio y cómo cotizar sin sorpresas.",
    sections: [
      {
        h2: "Por qué no existe un precio de lista",
        body:
          "Un software a medida se construye para tu operación, así que su precio sale del alcance, no de un catálogo. No es lo mismo un sistema para controlar el stock de un almacén que una plataforma con varios módulos, roles de usuario, reportes e integraciones con SUNAT y pagos. Por eso, cualquiera que te dé una cifra cerrada sin entender tu proceso probablemente te cobre de más o entregue de menos. Lo serio es un diagnóstico corto y luego una propuesta con alcance, etapas y tiempos.",
      },
      {
        h2: "Qué factores definen el precio",
        body:
          "Estos son los que más pesan en una cotización real de desarrollo a medida:",
        bullets: [
          "Cantidad de módulos: ventas, inventario, clientes, reportes, cada uno suma.",
          "Número de usuarios y roles con permisos distintos.",
          "Integraciones: facturación electrónica SUNAT, pasarelas de pago, courier o WhatsApp.",
          "Complejidad de las reglas de tu negocio (descuentos, aprobaciones, cálculos).",
          "Si necesitas versión web, móvil o ambas, y en cuántas sedes se usará.",
        ],
      },
      {
        h2: "Se cotiza por módulos y por etapas",
        body:
          "La forma más sana de invertir es no hacerlo todo de golpe. Se define un primer alcance con lo que más te urge (por ejemplo, ventas e inventario) y se suman módulos por etapas, a medida que el sistema demuestra su valor. Así distribuyes la inversión, ves resultados rápido y evitas pagar por funciones que quizá no uses. Un [software a medida](/desarrollo-de-software-a-medida) bien planificado crece contigo, no se compra de una sola vez y se abandona.",
      },
      {
        h2: "A medida vs software enlatado",
        body:
          "Un software enlatado cuesta menos al inicio, pero te obliga a adaptar tu forma de trabajar a él y suele cobrar licencias mensuales por usuario para siempre. El software a medida cuesta más al inicio, pero se ajusta exacto a tu operación y es tuyo. Si tu proceso es estándar, quizá te baste una herramienta del mercado; si es particular y ningún programa te calza, lo a medida termina siendo más rentable. Lo vemos a fondo en [software a medida vs enlatado](/blog/software-a-medida-vs-software-enlatado).",
      },
      {
        h2: "Costos que no son solo el desarrollo",
        body:
          "Además del desarrollo inicial, considera el hosting o servidor donde vivirá el sistema, y el [mantenimiento y soporte](/mantenimiento-web) para correcciones, respaldos y mejoras. No son grandes, pero conviene tenerlos claros desde el inicio para que el sistema siga estable y seguro. Una cotización seria los detalla en lugar de esconderlos como 'extras' que aparecen después.",
      },
      {
        h2: "Es inversión, no gasto",
        body:
          "La pregunta correcta no es solo cuánto cuesta, sino cuánto te ahorra o te hace ganar. Un sistema que elimina horas de trabajo manual, reduce errores de stock y te da reportes para decidir se paga solo en pocos meses. Cuando el software ordena tu operación y libera a tu equipo de tareas repetitivas, deja de ser un costo y pasa a ser una ventaja frente a la competencia.",
      },
    ],
    faqs: [
      {
        q: "¿Un software a medida tiene costos mensuales?",
        a: "No cobramos licencia por usuario como el software enlatado. Solo pagas el hosting o servidor y, si lo deseas, un plan de mantenimiento y soporte para respaldos, correcciones y mejoras.",
      },
      {
        q: "¿Puedo empezar con poco e ir creciendo?",
        a: "Sí, es lo recomendable. Arrancamos con el módulo que más te urge y sumamos los demás por etapas, según el sistema demuestra su valor. Así distribuyes la inversión.",
      },
      {
        q: "¿Cuánto demora desarrollar un software a medida?",
        a: "Depende del alcance. Un primer módulo funcional puede estar en algunas semanas; una plataforma con varios módulos e integraciones toma más. Te damos un cronograma antes de empezar.",
      },
      {
        q: "¿Cómo obtengo el precio para mi caso?",
        a: "Cuéntanos qué proceso quieres ordenar o automatizar por WhatsApp o el formulario y, tras un diagnóstico corto, te enviamos una propuesta con alcance, etapas y tiempos, sin compromiso.",
      },
    ],
    related: [
      { label: "Desarrollo de software a medida", href: "/desarrollo-de-software-a-medida", desc: "Sistemas hechos para tu operación, no plantillas." },
      { label: "Software a medida vs enlatado", href: "/blog/software-a-medida-vs-software-enlatado", desc: "Cuándo conviene desarrollar a medida." },
      { label: "Cotiza tu sistema", href: "/cotizacion", desc: "Propuesta con alcance y tiempos en menos de 24 horas." },
    ],
  },

  {
    slug: "costos-de-mantenimiento-de-una-pagina-web-en-peru",
    title: "Costos de mantenimiento de una página web en Perú (2026)",
    h1: "¿Cuánto cuesta mantener una página web en Perú?",
    description:
      "Costos de mantenimiento de una página web en Perú: hosting, dominio, seguridad, respaldos y actualizaciones. Qué incluye y por qué no mantenerla sale más caro.",
    excerpt:
      "Una web no termina cuando se publica. Esto es lo que cuesta mantenerla viva, segura y funcionando.",
    datePublished: "2026-07-07",
    dateModified: "2026-07-07",
    category: "Web",
    readingMin: 6,
    intro:
      "Una página web no es un pago único: como cualquier activo, necesita mantenimiento para seguir segura, rápida y funcionando. En Perú los costos recurrentes son bajos si sabes qué incluyen. Aquí verás en qué se compone el mantenimiento web y por qué descuidarlo termina saliendo más caro.",
    sections: [
      {
        h2: "Los costos fijos: hosting y dominio",
        body:
          "Toda web necesita dos cosas para estar en línea: un dominio (tu dirección, como tunegocio.pe) que se renueva cada año, y un hosting (el espacio donde vive la web) que se paga mensual o anual. Son los costos base y suelen ser modestos. El dominio .pe es económico y el hosting varía según el tráfico y el tipo de sitio: una web informativa pesa menos que una tienda virtual con muchos productos. Puedes profundizar en [cuánto cuesta una página web](/blog/cuanto-cuesta-una-pagina-web-en-peru) para entender la inversión inicial.",
      },
      {
        h2: "Qué incluye un buen mantenimiento",
        body:
          "Mantener una web va más allá de que 'esté prendida'. Un plan de mantenimiento serio cubre lo que la mantiene sana:",
        bullets: [
          "Actualizaciones de WordPress, plugins y temas para evitar fallas y hackeos.",
          "Respaldos periódicos para recuperar la web si algo sale mal.",
          "Certificado de seguridad (SSL) vigente y monitoreo de que el sitio esté en línea.",
          "Correcciones de errores y pequeños ajustes de contenido.",
          "Optimización de velocidad y limpieza de la base de datos.",
        ],
      },
      {
        h2: "Por qué no mantenerla sale más caro",
        body:
          "Una web abandonada es una web en riesgo. Los plugins desactualizados son la puerta de entrada más común para hackeos, y una web caída o infectada puede perder posiciones en Google, ahuyentar clientes y costar mucho más recuperarla que mantenerla. El mantenimiento es como el seguro del auto: parece un gasto hasta el día que lo necesitas. Vale más prevenir con un plan mensual bajo que pagar una emergencia.",
      },
      {
        h2: "¿Necesito mantenimiento si mi web es simple?",
        body:
          "Incluso una web sencilla necesita hosting, dominio y SSL vigentes, y respaldos por si acaso. Si es una web estática sin WordPress, el mantenimiento técnico es mínimo. Si tiene WordPress, formularios o una tienda, sí conviene un plan que mantenga todo al día. La regla simple: mientras más funciones y más movimiento tenga tu web, más importa mantenerla.",
      },
      {
        h2: "Mantenimiento y mejoras: no es lo mismo",
        body:
          "Conviene separar dos cosas. El mantenimiento mantiene la web funcionando (seguridad, respaldos, actualizaciones). Las mejoras son cambios nuevos: sumar una sección, rediseñar una página o agregar una función. El mantenimiento suele ser un monto fijo mensual; las mejoras se cotizan aparte según el trabajo. Tenerlo claro evita malentendidos sobre qué cubre tu plan.",
      },
      {
        h2: "Cómo lo maneja Websy",
        body:
          "Ofrecemos [planes de mantenimiento web](/mantenimiento-web) que cubren hosting, seguridad, respaldos y actualizaciones, para que tú te dediques a tu negocio y no a apagar incendios técnicos. Si prefieres administrar tú mismo, te entregamos la web lista y te explicamos qué renovar. En cualquier caso, sabes qué pagas y qué recibes, sin sorpresas.",
      },
    ],
    faqs: [
      {
        q: "¿Es obligatorio pagar mantenimiento mensual?",
        a: "No es obligatorio, pero sí muy recomendable si tu web usa WordPress, formularios o tienda. El hosting, el dominio y el SSL siempre deben renovarse; el plan de mantenimiento además te cubre seguridad, respaldos y actualizaciones.",
      },
      {
        q: "¿Qué pasa si no actualizo mi WordPress?",
        a: "Con el tiempo aumenta el riesgo de fallas y hackeos, ya que los plugins desactualizados son la vía de entrada más común. Una web infectada puede caer en Google y costar más repararla que mantenerla al día.",
      },
      {
        q: "¿El mantenimiento incluye cambios de diseño o nuevas secciones?",
        a: "No. El mantenimiento mantiene la web funcionando y segura. Las mejoras (nuevas secciones, rediseños, funciones) se cotizan aparte según el trabajo, para que sepas exactamente qué pagas.",
      },
      {
        q: "¿Cuánto cuesta el mantenimiento de mi web?",
        a: "Depende del tipo de web y las funciones que tenga. Cuéntanos cómo es tu sitio y te preparamos un plan a tu medida, claro y sin compromiso.",
      },
    ],
    related: [
      { label: "Mantenimiento web", href: "/mantenimiento-web", desc: "Hosting, seguridad, respaldos y actualizaciones al día." },
      { label: "¿Cuánto cuesta una página web?", href: "/blog/cuanto-cuesta-una-pagina-web-en-peru", desc: "La inversión inicial y qué incluye." },
      { label: "Cotiza tu proyecto", href: "/cotizacion", desc: "Web y plan de mantenimiento a tu medida." },
    ],
  },

  {
    slug: "pagina-web-para-gimnasios-en-peru",
    title: "Página web para gimnasios en Perú: membresías y captación",
    h1: "Página web para gimnasios: membresías, horarios y captación",
    description:
      "Página web para gimnasios y centros fitness en Perú: horarios de clases, planes de membresía, inscripción por WhatsApp y SEO local para llenar tu gimnasio.",
    excerpt:
      "Los nuevos socios te buscan en Google antes de entrar. Así debe ser la web de un gimnasio para captarlos.",
    datePublished: "2026-07-07",
    dateModified: "2026-07-07",
    category: "Diseño web",
    readingMin: 6,
    intro:
      "Antes de inscribirse, la gente busca gimnasios cerca en Google, compara horarios y precios y decide en minutos. Si tu gimnasio no aparece o su información no convence, el nuevo socio se va con la competencia. Una página web propia capta esas búsquedas y las convierte en inscripciones.",
    sections: [
      {
        h2: "Por qué tu gimnasio necesita web propia",
        body:
          "Instagram muestra tu ambiente, pero no responde lo que el nuevo socio pregunta: qué planes tienes, cuánto cuestan, qué horarios de clases hay y dónde quedas. Una web propia responde todo eso a cualquier hora, aparece en Google Maps cuando buscan 'gimnasio cerca de mí' y capta inscripciones sin depender del algoritmo de las redes. Es tu recepción abierta las 24 horas.",
      },
      {
        h2: "Qué debe tener la web de un gimnasio",
        body:
          "No es una web bonita y ya: es una herramienta para llenar tu gimnasio. Lo indispensable:",
        bullets: [
          "Planes de membresía claros, con lo que incluye cada uno.",
          "Horarios de clases (spinning, funcional, yoga) fáciles de actualizar.",
          "Botón de inscripción o consulta por WhatsApp, directo y visible.",
          "Fotos reales del local, equipos y clases que transmitan energía.",
          "Ubicación con Google Maps, horarios de atención y medios de pago (incluido Yape).",
        ],
      },
      {
        h2: "Muestra tus planes y capta inscripciones",
        body:
          "El nuevo socio quiere saber cuánto cuesta y qué incluye antes de ir. Mostrar tus planes de membresía con claridad reduce las preguntas repetidas y filtra a quien sí va a inscribirse. Un botón de WhatsApp con el plan ya cargado, o un formulario de inscripción, convierte esa visita a la web en un socio real. Cuando armamos tu [página web](/diseno-de-paginas-web/gimnasios), la dejamos pensada para captar, no solo para mostrar.",
      },
      {
        h2: "SEO local: aparece cuando buscan gimnasio cerca",
        body:
          "La mayoría de socios elige el gimnasio por cercanía. Salir en Google cuando alguien busca 'gimnasio en [tu distrito]' es media batalla ganada. Con una web optimizada y tu ficha de Google al día, apareces en el mapa y en las búsquedas locales de tu zona. Puedes profundizar en cómo [aparecer en Google con tu web](/blog/como-aparecer-en-google-con-tu-pagina-web).",
      },
      {
        h2: "Automatiza inscripciones y control de socios",
        body:
          "Si tu gimnasio crece, llevar los socios en un cuaderno o Excel se vuelve un dolor de cabeza. Tu web puede conectarse con un [sistema a medida](/desarrollo-de-software-a-medida) para controlar membresías, vencimientos y pagos, y avisar cuando toca renovar. Así reduces la deserción y sabes al toque quién está al día. Empieza por la web y suma el sistema cuando lo necesites.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo actualizar los horarios y precios yo mismo?",
        a: "Sí. Entregamos la web administrable para que cambies horarios de clases, planes y precios cuando quieras, sin depender de nadie ni saber programar.",
      },
      {
        q: "¿La web puede recibir inscripciones o pagos?",
        a: "Sí. Podemos incluir inscripción y consulta por WhatsApp, y si lo necesitas, pagos en línea o un sistema de control de membresías conectado a la web.",
      },
      {
        q: "¿Sirve para captar socios de mi zona?",
        a: "Sí. Optimizamos la web para SEO local y tu ficha de Google, de modo que aparezcas cuando busquen gimnasios cerca de tu distrito.",
      },
      {
        q: "¿Cuánto cuesta la web de un gimnasio?",
        a: "Depende de si quieres solo presencia y captación o también inscripciones y control de socios. Te preparamos una cotización a medida y sin costo en menos de 24 horas.",
      },
    ],
    related: [
      { label: "Diseño de páginas web para gimnasios", href: "/diseno-de-paginas-web/gimnasios", desc: "Webs que llenan tu gimnasio de socios." },
      { label: "Software para control de membresías", href: "/desarrollo-de-software-a-medida", desc: "Membresías, vencimientos y pagos ordenados." },
      { label: "Ver precios y cotizar", href: "/precios", desc: "Qué incluye la web de un gimnasio." },
    ],
  },

  {
    slug: "pagina-web-para-hoteles-y-hospedajes-en-peru",
    title: "Página web para hoteles y hospedajes en Perú: reservas directas",
    h1: "Página web para hoteles: reservas directas sin comisión",
    description:
      "Página web para hoteles y hospedajes en Perú: reservas directas sin comisión de Booking, motor de reservas, fotos que venden y SEO local para llenar habitaciones.",
    excerpt:
      "Booking se queda con una comisión de cada reserva. Una web propia te trae huéspedes directos, sin intermediarios.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Diseño web",
    readingMin: 7,
    intro:
      "Las plataformas como Booking o Airbnb te traen huéspedes, pero se quedan con una comisión de cada reserva y con la relación con tu cliente. Una página web propia para tu hotel u hospedaje capta reservas directas, sin comisión, y te da control total. Así debería ser tu presencia online.",
    sections: [
      {
        h2: "Por qué tu hotel necesita web propia",
        body:
          "Las OTA (Booking, Expedia, Airbnb) son útiles para que te descubran, pero cobran una comisión alta por cada reserva y controlan a tu huésped. Una web propia te permite recibir reservas directas sin esa comisión, mostrar tu hotel como quieres y fidelizar al huésped para que la próxima vez reserve contigo directo. Muchos hoteles usan ambos: las OTA para alcance y su web propia para captar sin intermediarios y ahorrar comisiones.",
      },
      {
        h2: "Qué debe tener la web de un hotel",
        body:
          "La web de un hospedaje vende una experiencia, así que cada detalle cuenta. Lo indispensable:",
        bullets: [
          "Galería de fotos profesionales de habitaciones, áreas y entorno.",
          "Tipos de habitación con precios, servicios y disponibilidad.",
          "Motor de reservas o botón de reserva y consulta por WhatsApp.",
          "Ubicación con Google Maps, atractivos cercanos y cómo llegar.",
          "Carga rápida en el celular y medios de pago (incluido Yape y tarjeta).",
        ],
      },
      {
        h2: "Reservas directas sin comisión",
        body:
          "Cada reserva que entra por tu web es dinero que no compartes con una plataforma. Un motor de reservas o, para empezar, un botón de reserva por WhatsApp con las fechas ya cargadas, convierte la visita en huésped. La clave es que reservar sea fácil y transmita confianza: fotos reales, políticas claras y respuesta rápida. Cuando armamos tu [página web de hotel](/diseno-de-paginas-web/hoteles), la dejamos lista para captar reservas directas.",
      },
      {
        h2: "Fotos y experiencia que venden",
        body:
          "En hotelería, la decisión se toma con los ojos. Fotos oscuras o de mala calidad hacen dudar; fotos luminosas y reales de las habitaciones, el desayuno y las vistas cierran la reserva. La web debe cargar rápido en el celular, porque la mayoría busca hospedaje desde el móvil, y mostrar tu propuesta en segundos. Una buena web transmite la sensación de quedarse antes de llegar.",
      },
      {
        h2: "SEO local y turístico: aparece cuando buscan dónde dormir",
        body:
          "Los viajeros buscan 'hotel en [ciudad]' u 'hospedaje cerca de [atractivo]' antes de reservar. Salir en Google y en el mapa cuando buscan tu zona te trae reservas directas sin pagar comisión ni publicidad. Con una web optimizada y tu ficha de Google al día, apareces en las búsquedas de tu destino. Aprende más en nuestra guía para [aparecer en Google](/blog/como-aparecer-en-google-con-tu-pagina-web).",
      },
    ],
    faqs: [
      {
        q: "¿La web reemplaza a Booking o Airbnb?",
        a: "No necesariamente. Las OTA ayudan a que te descubran huéspedes nuevos; tu web propia sirve para captar reservas directas sin comisión y fidelizar. Lo ideal es combinarlas.",
      },
      {
        q: "¿Puede tener un motor de reservas?",
        a: "Sí. Podemos integrar un motor de reservas con disponibilidad y pago en línea, o empezar con reservas y consultas por WhatsApp según el tamaño de tu hospedaje.",
      },
      {
        q: "¿Puedo actualizar precios y disponibilidad yo mismo?",
        a: "Sí. Entregamos la web administrable para que cambies tarifas, fotos y disponibilidad cuando quieras, sin depender de nadie.",
      },
      {
        q: "¿Cuánto cuesta la web de un hotel u hospedaje?",
        a: "Depende de si quieres solo presencia o también motor de reservas y pagos. Te preparamos una cotización a medida y sin costo en menos de 24 horas.",
      },
    ],
    related: [
      { label: "Diseño de páginas web para hoteles", href: "/diseno-de-paginas-web/hoteles", desc: "Reservas directas, sin comisión de intermediarios." },
      { label: "Cómo aparecer en Google", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "SEO local para captar viajeros de tu zona." },
      { label: "Ver precios y cotizar", href: "/precios", desc: "Qué incluye la web de un hotel." },
    ],
  },

  {
    slug: "pagina-web-para-colegios-e-instituciones-educativas-en-peru",
    title: "Qué debe tener la página web de un colegio para captar matrículas",
    h1: "Qué debe tener la página web de un colegio",
    description:
      "Página web para colegios, academias e instituciones educativas en Perú: proceso de admisión, información para padres, comunicados y SEO local para captar matrículas.",
    excerpt:
      "Los padres investigan el colegio en internet antes de matricular. Así debe ser la web de una institución educativa.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Diseño web",
    readingMin: 6,
    intro:
      "Antes de matricular a sus hijos, los padres investigan el colegio en internet: propuesta educativa, infraestructura, costos y proceso de admisión. Si tu institución no tiene una web clara y confiable, pierdes matrículas ante colegios que sí la tienen. Una buena web capta padres y comunica con tu comunidad.",
    sections: [
      {
        h2: "Por qué un colegio necesita web propia",
        body:
          "Una institución educativa proyecta seriedad, y eso empieza por su presencia online. Los padres buscan el colegio en Google, revisan su propuesta y comparan antes de agendar una visita. Una web propia comunica tu proyecto educativo, muestra tu infraestructura y responde las dudas del proceso de admisión a cualquier hora. Además, es el canal oficial para comunicados, calendario y noticias, mucho más confiable que un grupo de WhatsApp.",
      },
      {
        h2: "Qué debe tener la web de un colegio",
        body:
          "La web educativa cumple dos funciones: captar familias nuevas e informar a la comunidad actual. Lo indispensable:",
        bullets: [
          "Propuesta educativa, niveles y metodología con claridad.",
          "Proceso de admisión y matrícula, con formulario o cita por WhatsApp.",
          "Fotos reales de aulas, laboratorios, patios y actividades.",
          "Sección de comunicados, noticias y calendario escolar.",
          "Ubicación con Google Maps, niveles ofrecidos y datos de contacto.",
        ],
      },
      {
        h2: "Facilita el proceso de admisión",
        body:
          "El momento clave es la admisión. Explicar con claridad los pasos, requisitos y fechas reduce las llamadas repetidas y ordena a las familias interesadas. Un formulario de admisión o un botón de cita por WhatsApp convierte al padre que investiga en una visita agendada. Cuando armamos tu [página web para colegios](/diseno-de-paginas-web/colegios), la dejamos pensada para captar matrículas, no solo para informar.",
      },
      {
        h2: "Comunica con padres y comunidad",
        body:
          "Una web administrable te permite publicar comunicados, el calendario escolar y noticias sin depender de terceros. Es el canal oficial que los padres consultan cuando dudan de un mensaje que circula por chat. Mantenerla al día transmite orden y confianza, dos cosas que las familias valoran al elegir dónde educar a sus hijos.",
      },
      {
        h2: "SEO local: aparece cuando buscan colegios en tu zona",
        body:
          "Muchas familias buscan 'colegios en [distrito]' o 'colegio [tipo] cerca'. Salir en Google y en el mapa cuando investigan tu zona te trae familias interesadas en temporada de admisión. Con una web optimizada y tu ficha de Google al día, apareces en esas búsquedas locales. Puedes profundizar en cómo [aparecer en Google con tu web](/blog/como-aparecer-en-google-con-tu-pagina-web).",
      },
    ],
    faqs: [
      {
        q: "¿Podemos publicar comunicados y noticias nosotros mismos?",
        a: "Sí. Entregamos la web administrable para que el equipo publique comunicados, el calendario y noticias cuando lo necesite, sin saber programar.",
      },
      {
        q: "¿La web puede recibir solicitudes de admisión?",
        a: "Sí. Incluimos formulario de admisión o cita por WhatsApp, y podemos conectar las solicitudes con un sistema para que lleguen ordenadas al equipo de admisión.",
      },
      {
        q: "¿Sirve para captar familias de nuestra zona?",
        a: "Sí. Optimizamos la web para SEO local y tu ficha de Google, para que aparezcas cuando busquen colegios en tu distrito, sobre todo en temporada de matrícula.",
      },
      {
        q: "¿Cuánto cuesta la web de un colegio o academia?",
        a: "Depende del número de secciones y funciones (admisión, comunicados, intranet). Te preparamos una cotización a medida y sin costo en menos de 24 horas.",
      },
    ],
    related: [
      { label: "Diseño de páginas web para colegios", href: "/diseno-de-paginas-web/colegios", desc: "Webs que captan matrículas y comunican con la comunidad." },
      { label: "Software a medida educativo", href: "/desarrollo-de-software-a-medida", desc: "Admisión, pagos y comunicación en un solo sistema." },
      { label: "Ver precios y cotizar", href: "/precios", desc: "Qué incluye la web de una institución educativa." },
    ],
  },

  {
    slug: "como-integrar-yape-y-plin-en-tu-tienda-virtual",
    title: "Cómo integrar Yape y Plin en tu tienda virtual (paso a paso)",
    h1: "Cómo integrar Yape y Plin en tu tienda virtual",
    description:
      "Cómo aceptar Yape y Plin en tu tienda virtual en Perú: opciones de integración, confirmación de pago, ventajas y qué cuidar para no perder ventas.",
    excerpt:
      "Yape y Plin son los medios que todos usan en Perú. Así se integran bien en tu tienda para vender más.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Pagos",
    readingMin: 6,
    intro:
      "En Perú, si tu tienda virtual no acepta Yape o Plin, pierdes ventas: son los medios que millones usan a diario. Integrarlos bien reduce la fricción y evita que el cliente abandone el carrito. Aquí verás las formas de integrarlos y qué cuidar para que cada pago se confirme sin dolores.",
    sections: [
      {
        h2: "Por qué Yape y Plin son imprescindibles",
        body:
          "Yape y Plin son la forma más rápida y familiar de pagar para la mayoría de peruanos: sin tarjeta, sin comisiones para el comprador y en segundos. Una tienda que solo acepta tarjeta deja fuera a un montón de clientes que pagarían al toque con su celular. Ofrecer Yape y Plin no es un extra, es lo mínimo para vender en el mercado peruano. La regla es simple: mientras menos fricción en el pago, más ventas cierras.",
      },
      {
        h2: "Formas de integrar Yape y Plin",
        body:
          "Hay varias maneras, de la más simple a la más automática:",
        bullets: [
          "Pago manual: muestras tu número o QR, el cliente yapea y sube su comprobante. Simple, pero requiere que confirmes a mano.",
          "Botón de pago vía pasarela: pasarelas como Izipay, Niubiz o Culqi ya integran Yape y Plin, y confirman el pago automáticamente.",
          "Checkout con QR dinámico: el sistema genera un QR por cada pedido y detecta el pago, ideal para tiendas con volumen.",
        ],
      },
      {
        h2: "Confirmación automática: la clave de no perder tiempo",
        body:
          "El mayor dolor del pago manual es estar revisando comprobantes uno por uno y confirmando pedidos a mano. Cuando integras Yape y Plin vía pasarela, el pedido se confirma solo al recibir el pago, se envía el correo y el WhatsApp automáticos, y el stock se descuenta. Eso te ahorra horas y evita errores. Si recién empiezas, el pago manual funciona; si ya tienes volumen, la confirmación automática vale cada sol.",
      },
      {
        h2: "Combina Yape y Plin con otros medios",
        body:
          "Yape y Plin son imprescindibles, pero no los únicos. Ofrecer también tarjeta (vía Niubiz o Izipay), transferencia y pago contra entrega amplía tu alcance a todo tipo de cliente. Lo ideal es dejar que el comprador elija su método favorito en el checkout. Lo vemos a fondo en nuestra guía de [pasarelas de pago para ecommerce en Perú](/blog/pasarelas-de-pago-para-ecommerce-en-peru).",
      },
      {
        h2: "Qué cuidar al integrar Yape y Plin",
        body:
          "Un pago mal integrado genera desconfianza. Cuida que el checkout sea corto y claro, que se muestren los logos de Yape y Plin para dar seguridad, y que la confirmación (correo y WhatsApp) llegue rápido para que el cliente sepa que su pago se recibió. Cuando desarrollamos tu [tienda virtual](/tiendas-virtuales), configuramos estos medios listos para vender, no a medio armar.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo aceptar Yape y Plin sin una pasarela de pago?",
        a: "Sí, con pago manual: muestras tu QR o número, el cliente paga y sube el comprobante. Es simple pero debes confirmar a mano. Con una pasarela, la confirmación es automática.",
      },
      {
        q: "¿Yape y Plin cobran comisión al vendedor?",
        a: "En modo manual (persona a persona) no suele haber comisión, pero implica confirmar a mano. Al integrarlos vía pasarela para cobros automáticos, la pasarela cobra una comisión por transacción.",
      },
      {
        q: "¿La tienda confirma el pedido automáticamente al pagar con Yape?",
        a: "Si integras Yape y Plin mediante una pasarela, sí: el pedido se confirma solo, se envían las notificaciones y el stock se descuenta. En modo manual, tú confirmas al ver el comprobante.",
      },
      {
        q: "¿Ustedes integran Yape y Plin en mi tienda?",
        a: "Sí. Configuramos Yape, Plin, tarjeta y otros medios según tu operación, listos para vender. Escríbenos y te recomendamos la mejor combinación para tu negocio.",
      },
    ],
    related: [
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Tienda con Yape, Plin y tarjeta lista para vender." },
      { label: "SEO y posicionamiento web", href: "/seo", desc: "De nada sirve integrar Yape si nadie llega a tu tienda: atrae compradores." },
      { label: "Pasarelas de pago en Perú", href: "/blog/pasarelas-de-pago-para-ecommerce-en-peru", desc: "Compara Yape, Plin, Niubiz e Izipay." },
      { label: "Cotiza tu tienda", href: "/cotizacion", desc: "Integramos tus medios de pago a tu medida." },
    ],
  },

  {
    slug: "izipay-o-niubiz-cual-elegir-para-cobrar-con-tarjeta",
    title: "Izipay o Niubiz en 2026: ¿cuál conviene para tu tienda?",
    h1: "Izipay o Niubiz: ¿cuál conviene para tu tienda?",
    description:
      "Izipay o Niubiz en Perú (2026): comparamos integración, medios aceptados, requisitos y facilidad de uso para que elijas la pasarela de tarjetas correcta para tu tienda.",
    excerpt:
      "Las dos pasarelas de tarjetas más usadas de Perú, comparadas para que elijas la correcta para tu tienda.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Pagos",
    readingMin: 6,
    intro:
      "Izipay y Niubiz son las dos pasarelas de tarjetas más usadas en Perú para cobrar en una tienda virtual. Ambas aceptan crédito, débito y suelen integrar Yape y Plin, pero difieren en detalles que importan según tu negocio. Aquí las diferencias reales para que elijas sin equivocarte.",
    sections: [
      {
        h2: "Qué hacen Izipay y Niubiz",
        body:
          "Ambas son pasarelas de pago: permiten que tu tienda cobre con tarjeta de crédito y débito de forma segura y automática, y hoy también procesan Yape y Plin. Niubiz (antes Visanet) es la más veterana y tiene fuerte presencia con la banca tradicional. Izipay creció rápido y es muy popular entre pymes por su facilidad. Las dos son opciones sólidas y confiables; la mejor depende de tu operación, no de cuál es 'mejor' en abstracto.",
      },
      {
        h2: "Qué mirar al comparar",
        body:
          "Más allá de la marca, estos son los puntos que de verdad definen tu elección:",
        bullets: [
          "Comisión por transacción y si hay costos fijos mensuales.",
          "Medios que acepta: crédito, débito, Yape, Plin, cuotas.",
          "Facilidad de integración con tu tienda (Shopify, WooCommerce o a medida).",
          "Rapidez del abono del dinero a tu cuenta.",
          "Soporte y requisitos para afiliarte (RUC, tipo de negocio).",
        ],
      },
      {
        h2: "Cuándo conviene cada una",
        body:
          "No hay una respuesta universal, pero sí guías. Niubiz suele encajar bien si ya trabajas con banca tradicional y quieres una marca reconocida que dé confianza al comprador. Izipay tiende a ser ágil para pymes que quieren afiliarse rápido y sin complicaciones. Lo más sano es comparar la comisión y las condiciones vigentes de cada una para tu rubro, porque cambian. En la cotización te ayudamos a elegir según tu volumen y tu plataforma.",
      },
      {
        h2: "La integración importa tanto como la pasarela",
        body:
          "Una gran pasarela mal integrada igual pierde ventas. Lo clave es que el pago se confirme automáticamente, que el checkout sea corto y que el cliente vea los logos que le dan confianza. Cuando desarrollamos tu [tienda virtual](/tiendas-virtuales), integramos la pasarela que elijas de forma que el pedido se confirme solo y el stock se descuente. Puedes revisar el panorama completo en [pasarelas de pago para ecommerce](/blog/pasarelas-de-pago-para-ecommerce-en-peru).",
      },
      {
        h2: "No tienes que elegir solo una",
        body:
          "Muchas tiendas ofrecen tarjeta vía una pasarela y, además, Yape y Plin, transferencia y pago contra entrega. Mientras más medios ofrezcas (sin saturar el checkout), menos ventas pierdes. La decisión Izipay o Niubiz define tu procesador de tarjetas, pero puedes complementarlo con otros métodos para no dejar a ningún cliente fuera.",
      },
    ],
    faqs: [
      {
        q: "¿Izipay y Niubiz aceptan Yape y Plin?",
        a: "Sí, ambas pasarelas hoy procesan Yape y Plin además de tarjeta de crédito y débito, lo que te permite ofrecer los medios más usados en Perú desde una sola integración.",
      },
      {
        q: "¿Cuál cobra menos comisión?",
        a: "Las comisiones varían según tu rubro, volumen y las condiciones vigentes de cada pasarela, por lo que conviene comparar al momento de afiliarte. En la cotización te orientamos según tu caso.",
      },
      {
        q: "¿Puedo cambiar de pasarela más adelante?",
        a: "Sí. Se puede cambiar o sumar otra pasarela después, aunque implica reconfigurar la integración. Por eso conviene elegir bien desde el inicio según tu proyección.",
      },
      {
        q: "¿Ustedes integran la pasarela en mi tienda?",
        a: "Sí. Integramos Izipay, Niubiz u otra según tu plataforma y volumen, con confirmación automática del pago. Cuéntanos tu caso y te recomendamos la mejor opción.",
      },
    ],
    related: [
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Tienda con la pasarela correcta, lista para cobrar." },
      { label: "SEO para tu tienda virtual", href: "/seo", desc: "Atrae compradores a tu tienda para que esos pagos ocurran." },
      { label: "Pasarelas de pago en Perú", href: "/blog/pasarelas-de-pago-para-ecommerce-en-peru", desc: "El panorama completo: Yape, Plin, Niubiz e Izipay." },
      { label: "Cómo aceptar pagos con tarjeta", href: "/blog/como-aceptar-pagos-con-tarjeta-en-tu-web-peru", desc: "Qué necesitas para cobrar con tarjeta en tu web." },
    ],
  },

  {
    slug: "cuanto-cuesta-el-seo-en-peru",
    title: "Cuánto cuesta el SEO en Perú (2026): precios y qué incluye",
    h1: "¿Cuánto cuesta el SEO en Perú?",
    description:
      "Cuánto cuesta el SEO en Perú en 2026: modelos de cobro, qué incluye un servicio serio de posicionamiento y por qué es una inversión de mediano plazo, no un gasto.",
    excerpt:
      "El SEO no se cobra igual que una web. Aquí cómo se cobra, qué incluye y por qué es inversión, no gasto.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "SEO",
    readingMin: 7,
    intro:
      "El SEO en Perú no se cobra como una página web: es un trabajo continuo, no un pago único. Su precio depende de la competencia de tus palabras clave y del alcance del trabajo. Aquí verás cómo se cobra el posicionamiento, qué debe incluir un servicio serio y por qué es una inversión de mediano plazo.",
    sections: [
      {
        h2: "Por qué el SEO no se cobra como una web",
        body:
          "Una página web se entrega una vez; el SEO es un proceso continuo. Google cambia, la competencia se mueve y el contenido se debe alimentar mes a mes. Por eso el SEO suele cobrarse como un servicio recurrente (mensual) o por proyecto, no como un pago único. Quien te promete 'posicionar tu web' con un solo pago y para siempre no entiende cómo funciona o te está vendiendo humo. El posicionamiento se mantiene mientras se trabaja.",
      },
      {
        h2: "Qué factores definen el precio",
        body:
          "El costo del SEO varía según el esfuerzo que exige tu mercado:",
        bullets: [
          "Competencia de tus palabras clave: rankear 'abogado en Lima' cuesta más que un nicho pequeño.",
          "Estado actual de tu web (velocidad, estructura, contenido existente).",
          "Cuánto contenido nuevo hay que crear cada mes.",
          "Si necesitas SEO local, nacional o para una tienda con muchos productos.",
          "Trabajo de enlaces (backlinks) y autoridad, que toma tiempo y recursos.",
        ],
      },
      {
        h2: "Qué debe incluir un servicio serio de SEO",
        body:
          "Un servicio de [SEO y posicionamiento](/seo) serio no es 'poner palabras clave'. Debe incluir una auditoría técnica (velocidad, indexación, estructura), optimización on-page, creación de contenido que atraiga búsquedas, mejora del enlazado interno y trabajo de autoridad, además de reportes claros de avance. Si una propuesta no explica qué se hace cada mes ni cómo se mide, desconfía. El buen SEO se nota en el tráfico y los contactos, no en promesas.",
      },
      {
        h2: "Modelos de cobro más comunes",
        body:
          "En Perú verás tres formas: mensualidad fija (lo más común, ideal para trabajo continuo), pago por proyecto (para una optimización puntual o auditoría) y, con menos frecuencia, cobro por resultados (arriesgado si no está bien definido qué es un 'resultado'). Para la mayoría de negocios, la mensualidad con objetivos claros es lo más sano: mantiene el trabajo constante y permite ajustar la estrategia con datos reales.",
      },
      {
        h2: "SEO vs Google Ads: no compiten",
        body:
          "El SEO tarda meses pero no pagas por cada clic; Google Ads trae clientes hoy pero pagas por visita. No son rivales: lo rentable es combinarlos, usar Ads para vender desde ya y construir SEO en paralelo para depender menos de la publicidad. Lo vemos a fondo en [Google Ads vs SEO](/blog/google-ads-vs-seo-cual-conviene-para-tu-negocio).",
      },
      {
        h2: "Es inversión de mediano plazo, no gasto",
        body:
          "El SEO no da resultados la primera semana, y ahí está su valor: el tráfico que construyes no se apaga cuando dejas de pagar clics, como en Ads. Un buen posicionamiento sigue trayendo clientes mes a mes, y con el tiempo baja tu costo de captación. Pensar el SEO como inversión (no como gasto mensual a recortar) es lo que separa a los negocios que crecen en Google de los que dependen para siempre de la publicidad.",
      },
    ],
    faqs: [
      {
        q: "¿En cuánto tiempo veo resultados de SEO?",
        a: "El SEO es progresivo: los primeros movimientos suelen verse en semanas y los resultados sólidos en algunos meses, según la competencia de tus palabras clave. No es inmediato, pero es duradero.",
      },
      {
        q: "¿El SEO se paga una sola vez?",
        a: "No. El SEO es un trabajo continuo porque Google y la competencia cambian. Se suele cobrar mensual o por proyecto. El posicionamiento se mantiene mientras se sigue trabajando.",
      },
      {
        q: "¿Conviene más el SEO o Google Ads?",
        a: "Depende de tu urgencia. Ads trae clientes de inmediato pagando por clic; el SEO tarda pero es más rentable a mediano plazo. Lo ideal es empezar con Ads y construir SEO en paralelo.",
      },
      {
        q: "¿Cuánto costaría el SEO para mi negocio?",
        a: "Depende de tu rubro, competencia y el estado de tu web. Cuéntanos tu caso y te preparamos una propuesta con alcance y objetivos claros, sin compromiso.",
      },
    ],
    related: [
      { label: "SEO y posicionamiento web", href: "/seo", desc: "Posiciona tu negocio en Google de forma sostenible." },
      { label: "Google Ads vs SEO", href: "/blog/google-ads-vs-seo-cual-conviene-para-tu-negocio", desc: "Cuál conviene y por qué se complementan." },
      { label: "Cómo aparecer en Google", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Las bases para posicionar tu web." },
    ],
  },

  {
    slug: "que-es-el-branding-y-por-que-tu-pyme-lo-necesita",
    title: "Qué es el branding y por qué tu pyme lo necesita en Perú",
    h1: "Qué es el branding y por qué tu pyme lo necesita",
    description:
      "Qué es el branding y por qué tu pyme en Perú lo necesita: más que un logo, es la percepción de tu marca. Cómo una identidad sólida te ayuda a vender más y cobrar mejor.",
    excerpt:
      "El branding no es solo un logo bonito: es cómo te percibe tu cliente y por qué te elige a ti y no al de al lado.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Marketing",
    readingMin: 6,
    intro:
      "Branding no es solo tu logo: es todo lo que tu cliente siente y piensa cuando ve tu marca. Para una pyme en Perú, un branding sólido es lo que te hace ver profesional, generar confianza y cobrar mejor que la competencia. Aquí qué es realmente y por qué tu negocio lo necesita.",
    sections: [
      {
        h2: "Branding no es lo mismo que logo",
        body:
          "Mucha gente cree que branding es 'el logo', pero el logo es solo una parte. El branding es la percepción completa de tu marca: los colores, la tipografía, el tono con que hablas, cómo se ve tu web, tus redes y hasta cómo respondes por WhatsApp. Es la personalidad de tu negocio y la promesa que transmites. Un logo lindo sobre una marca sin identidad se siente vacío; el branding le da coherencia y sentido a todo.",
      },
      {
        h2: "Por qué una pyme lo necesita",
        body:
          "En un mercado con mucha competencia, el branding es lo que hace que te elijan a ti. Estos son los beneficios concretos:",
        bullets: [
          "Confianza: una marca cuidada se percibe seria y profesional.",
          "Diferenciación: destacas frente a competidores que se ven todos iguales.",
          "Precio: una marca sólida puede cobrar más sin espantar al cliente.",
          "Recordación: la gente recuerda y recomienda marcas con identidad clara.",
          "Coherencia: todo tu negocio comunica lo mismo, de la web a la tarjeta.",
        ],
      },
      {
        h2: "Qué incluye un trabajo de branding",
        body:
          "Un [servicio de branding](/branding) va más allá del logo. Suele incluir el diseño del logo y sus variantes, la paleta de colores, la tipografía, y un manual de marca que define cómo usar todo de forma consistente. En algunos casos suma el naming (nombre), el tono de comunicación y aplicaciones como tarjetas, redes o empaques. El objetivo es que tu marca se vea igual de profesional en todos lados, no distinta en cada pieza.",
      },
      {
        h2: "Branding y tu página web van de la mano",
        body:
          "Tu web es donde más gente ve tu marca, así que el branding y el diseño web deben conversar. De poco sirve un logo bonito si tu [página web](/diseno-de-paginas-web) usa otros colores y se ve improvisada. Cuando la identidad y la web están alineadas, el cliente percibe una marca sólida y confía más. Por eso conviene definir el branding antes o junto con la web, no después y por separado.",
      },
      {
        h2: "El branding es una inversión, no un lujo",
        body:
          "Muchas pymes dejan el branding 'para cuando crezcan', pero es justo al revés: una marca sólida ayuda a crecer más rápido. No hace falta un presupuesto enorme para empezar; incluso un branding básico bien hecho (logo, colores, tipografía y su uso coherente) transforma cómo te percibe el mercado. Es una inversión que se nota en la confianza que generas y en lo que puedes cobrar.",
      },
    ],
    faqs: [
      {
        q: "¿El branding es solo el logo?",
        a: "No. El logo es una parte. El branding incluye colores, tipografía, tono de comunicación y cómo se ve tu marca en la web, redes y todo punto de contacto. Es la percepción completa de tu negocio.",
      },
      {
        q: "¿Una pyme pequeña necesita branding?",
        a: "Sí, y quizá más que una grande, porque le ayuda a verse profesional y competir. No necesitas un gran presupuesto: un branding básico bien hecho ya transforma cómo te percibe el mercado.",
      },
      {
        q: "¿Puedo hacer el branding junto con mi página web?",
        a: "Sí, y es lo ideal. Definir la identidad junto con la web asegura que todo se vea coherente y profesional. Podemos hacer branding y web como un proyecto integrado.",
      },
      {
        q: "¿Cuánto cuesta un trabajo de branding?",
        a: "Depende del alcance: desde un logo con paleta y tipografía hasta un manual de marca completo. Cuéntanos qué necesitas y te preparamos una propuesta a tu medida.",
      },
    ],
    related: [
      { label: "Branding e identidad de marca", href: "/branding", desc: "Marca sólida que genera confianza y te diferencia." },
      { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Una web alineada con tu identidad de marca." },
      { label: "Cotiza tu proyecto", href: "/cotizacion", desc: "Branding y web como proyecto integrado." },
    ],
  },

  {
    slug: "google-ads-vs-seo-cual-conviene-para-tu-negocio",
    title: "Google Ads vs SEO: cuál conviene para tu negocio en Perú",
    h1: "Google Ads vs SEO: ¿cuál conviene para tu negocio?",
    description:
      "Google Ads vs SEO en Perú: diferencias en velocidad, costo y durabilidad. Cuándo usar cada uno y por qué combinarlos es la estrategia más rentable para captar clientes.",
    excerpt:
      "Uno trae clientes hoy pagando; el otro los trae gratis pero tarda. La verdad es que se complementan.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Marketing",
    readingMin: 7,
    intro:
      "Google Ads y SEO son las dos formas de aparecer en Google, pero funcionan distinto: Ads te pone arriba hoy pagando por cada clic; el SEO te posiciona con el tiempo sin pagar por visita. No son rivales. Aquí verás las diferencias reales y cuándo conviene cada uno para tu negocio en Perú.",
    sections: [
      {
        h2: "La diferencia de fondo",
        body:
          "Cuando buscas algo en Google, ves dos tipos de resultados: los anuncios (arriba, marcados como 'patrocinado') y los orgánicos (debajo, que no se pagan). Google Ads te lleva a los primeros: pagas por cada clic y apareces de inmediato. El SEO trabaja los segundos: no pagas por clic, pero toma tiempo y esfuerzo ganar esas posiciones. Uno es alquilar tu lugar en Google; el otro es construir uno propio que se queda contigo.",
      },
      {
        h2: "Velocidad: Ads gana de inmediato",
        body:
          "Si necesitas clientes esta semana, Google Ads es tu opción: enciendes la campaña y empiezas a aparecer ante quien ya busca lo que vendes. El SEO no funciona así: sus resultados llegan en semanas o meses. Por eso Ads es ideal para lanzar un negocio, validar qué servicio se vende más o llenar la agenda mientras tu posicionamiento orgánico madura. La inmediatez es la gran ventaja de la publicidad.",
      },
      {
        h2: "Costo y durabilidad: SEO gana a largo plazo",
        body:
          "Con Ads, el día que dejas de pagar, dejas de aparecer: el tráfico se apaga. Con SEO, el posicionamiento que construyes sigue trayendo visitas mes a mes sin pagar por clic. Por eso el SEO baja tu costo de captación con el tiempo, mientras que en Ads cada cliente siempre tiene un precio. Piénsalo así: Ads es alquiler y SEO es propiedad. Ambos cuestan, pero uno construye un activo.",
      },
      {
        h2: "La landing y la medición son clave en ambos",
        body:
          "Traer visitas no basta: hay que convertirlas. En Ads, cada campaña necesita una [landing o web pensada para convertir](/diseno-de-paginas-web) y medición de leads, o botas la plata. En SEO, necesitas una web rápida y bien estructurada para que Google te posicione. En los dos casos, sin una buena web de destino y sin medir tus contactos, ni el mejor anuncio ni el mejor ranking sirven. Lo vemos en [Google Ads para pymes](/blog/google-ads-para-pymes-en-peru-cuanto-invertir).",
      },
      {
        h2: "La respuesta real: combínalos",
        body:
          "No es Ads o SEO, es Ads y SEO. La estrategia más rentable usa [Google Ads](/google-ads) para vender desde ya y, en paralelo, construye [SEO](/seo) para depender menos de la publicidad con el tiempo. Así tienes clientes hoy y una base que crece sola mañana. Muchos negocios que solo hacen Ads quedan atrapados pagando para siempre; los que suman SEO reducen ese costo año a año.",
      },
    ],
    faqs: [
      {
        q: "¿Qué da resultados más rápido, Ads o SEO?",
        a: "Google Ads, sin duda: apareces apenas enciendes la campaña. El SEO tarda semanas o meses, pero sus resultados son más duraderos y no dependen de seguir pagando por clic.",
      },
      {
        q: "¿Cuál es más barato a largo plazo?",
        a: "El SEO, porque el tráfico que construyes no se apaga al dejar de pagar, como sí ocurre con Ads. Con el tiempo, el SEO baja tu costo de captación mientras que en Ads cada cliente siempre cuesta.",
      },
      {
        q: "¿Puedo hacer solo uno de los dos?",
        a: "Sí, pero no es lo ideal. Solo Ads te deja pagando para siempre; solo SEO te deja sin clientes al inicio mientras madura. Combinarlos te da resultados hoy y sostenibilidad mañana.",
      },
      {
        q: "¿Ustedes manejan Ads y SEO?",
        a: "Sí. Podemos crear la landing, configurar la campaña y la medición de leads, y trabajar tu posicionamiento en paralelo. Cuéntanos tu objetivo y te armamos una propuesta según tu presupuesto.",
      },
    ],
    related: [
      { label: "Google Ads", href: "/google-ads", desc: "Clientes desde el primer día con campañas medidas." },
      { label: "SEO y posicionamiento", href: "/seo", desc: "Tráfico que crece y no depende de pagar por clic." },
      { label: "Google Ads para pymes", href: "/blog/google-ads-para-pymes-en-peru-cuanto-invertir", desc: "Cuánto invertir y cómo no botar la plata." },
    ],
  },

  {
    slug: "tienda-virtual-vs-marketplace-conviene-vender-en-mercadolibre",
    title: "Tienda virtual vs marketplace: ¿conviene vender en Mercado Libre?",
    h1: "Tienda virtual vs marketplace: ¿cuál te conviene?",
    description:
      "Tienda virtual propia vs marketplace como Mercado Libre en Perú: comisiones, control, marca y clientes. Cuándo conviene cada uno y por qué muchos usan ambos.",
    excerpt:
      "Mercado Libre te da alcance pero se queda con tu comisión y tu cliente. Cuándo conviene tu tienda propia.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Ecommerce",
    readingMin: 7,
    intro:
      "Vender en un marketplace como Mercado Libre te da alcance inmediato, pero cobra comisión por cada venta y se queda con la relación con tu cliente. Una tienda virtual propia te da control y marca, aunque debes atraer tu propio tráfico. Aquí las diferencias reales para decidir dónde vender en Perú.",
    sections: [
      {
        h2: "Qué es cada uno",
        body:
          "Un marketplace (Mercado Libre, Falabella, Linio) es una plataforma donde muchos vendedores publican en un mismo sitio; tú alquilas un espacio en su vitrina. Una tienda virtual propia es tu ecommerce, con tu dominio, tu marca y tus reglas. En el marketplace aprovechas el tráfico que ya tienen; en tu tienda propia, ese tráfico lo construyes tú, pero todo lo que vendes queda contigo. Son dos modelos distintos, con ventajas opuestas.",
      },
      {
        h2: "Ventajas del marketplace",
        body:
          "Los marketplaces tienen puntos fuertes reales, sobre todo al empezar:",
        bullets: [
          "Tráfico inmediato: millones ya entran a comprar cada día.",
          "Confianza prestada: el comprador confía en la plataforma.",
          "Sin necesidad de atraer visitas al inicio.",
          "Logística y pagos ya resueltos por la plataforma.",
        ],
      },
      {
        h2: "El costo oculto del marketplace",
        body:
          "Todo ese alcance tiene un precio. El marketplace cobra una comisión por cada venta (que puede ser alta), te pone a competir por precio junto a decenas de vendedores del mismo producto, y se queda con los datos de tu cliente: no sabes quién te compró para venderle otra vez. Además, no construyes marca propia: el cliente recuerda 'lo compré en Mercado Libre', no tu negocio. Vendes, pero no creces como marca.",
      },
      {
        h2: "Ventajas de tu tienda virtual propia",
        body:
          "Una [tienda virtual propia](/tiendas-virtuales) te da lo que el marketplace no: cero comisión por venta a la plataforma, control total de tu marca y tu diseño, y los datos de tus clientes para fidelizarlos y venderles de nuevo. Compites por valor y experiencia, no solo por precio. La contra es que debes atraer tu propio tráfico con SEO, redes o [Google Ads](/google-ads), pero cada cliente que ganas es tuyo de verdad.",
      },
      {
        h2: "La respuesta para la mayoría: usa ambos",
        body:
          "No tienes que elegir uno solo. La estrategia más común y sana es usar el marketplace para que te descubran clientes nuevos y tu tienda propia para vender con tu marca, fidelizar y ahorrar comisiones con los recurrentes. Muchos negocios peruanos arrancan en Mercado Libre y, cuando validan que venden, montan su tienda propia para dejar de depender de la comisión. Lo ideal es tener presencia en ambos y llevar poco a poco al cliente a comprarte directo.",
      },
    ],
    faqs: [
      {
        q: "¿Mercado Libre cobra comisión por venta?",
        a: "Sí. Los marketplaces cobran una comisión por cada venta, que puede ser significativa. En tu tienda propia no pagas esa comisión a una plataforma; solo asumes hosting, dominio y la pasarela de pago.",
      },
      {
        q: "¿Puedo vender en Mercado Libre y tener mi tienda a la vez?",
        a: "Sí, y es lo más recomendable. Usa el marketplace para que te descubran y tu tienda propia para fidelizar y ahorrar comisiones con los clientes recurrentes. Muchos negocios combinan ambos.",
      },
      {
        q: "¿En mi tienda propia tendré tráfico como en el marketplace?",
        a: "No al inicio: en tu tienda debes atraer visitas con SEO, redes o Google Ads. La ventaja es que cada cliente que ganas es tuyo, con sus datos, y no pagas comisión por venta.",
      },
      {
        q: "¿Ustedes crean tiendas virtuales propias?",
        a: "Sí. Desarrollamos tu tienda con tu marca, pagos peruanos y optimizada para atraer tráfico. Cuéntanos qué vendes y te preparamos una cotización a tu medida.",
      },
    ],
    related: [
      { label: "Desarrollo de tiendas virtuales", href: "/tiendas-virtuales", desc: "Tu tienda propia, con tu marca y sin comisión por venta." },
      { label: "Ventajas de tener una tienda virtual", href: "/blog/ventajas-de-tener-una-tienda-virtual", desc: "Por qué vender con tienda propia rinde más." },
      { label: "Cómo posicionar tu tienda en Google", href: "/blog/como-posicionar-una-tienda-virtual-en-google", desc: "Atrae tu propio tráfico sin depender del marketplace." },
    ],
  },

  {
    slug: "como-migrar-tu-pagina-web-sin-perder-posicionamiento-en-google",
    title: "Cómo migrar tu página web sin perder posicionamiento en Google",
    h1: "Cómo migrar tu web sin perder posicionamiento en Google",
    description:
      "Cómo migrar o rediseñar tu página web en Perú sin perder posicionamiento en Google: redirecciones 301, estructura de URLs, contenido y los errores que hunden tu SEO.",
    excerpt:
      "Rediseñar o cambiar de web puede hundir tu tráfico si se hace mal. Así se migra sin perder tus posiciones.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "SEO",
    readingMin: 7,
    intro:
      "Rediseñar o cambiar de plataforma tu página web puede disparar tu negocio o hundir el tráfico que tanto costó construir. El error más común es migrar sin plan y perder de golpe las posiciones en Google. Aquí verás cómo migrar tu web cuidando el SEO y qué errores evitar a toda costa.",
    sections: [
      {
        h2: "Por qué una migración puede hundir tu SEO",
        body:
          "Google conoce tu web actual: sabe qué URLs tienes, qué contenido hay en cada una y qué posición merecen. Cuando migras (cambias de plataforma, rediseñas o mueves de dominio) y esas URLs cambian o desaparecen sin avisar, Google encuentra páginas rotas y pierde el rastro de lo que ya valoraba. El resultado es una caída de tráfico que puede tardar meses en recuperarse. La buena noticia: se evita con un plan de migración cuidado.",
      },
      {
        h2: "Las redirecciones 301: lo más importante",
        body:
          "Si una URL cambia, hay que decirle a Google a dónde fue: eso es una redirección 301 (permanente). Sin ellas, cada página vieja que Google visita da error 404 y pierdes el posicionamiento que tenía. Antes de migrar hay que listar todas las URLs actuales y mapear cada una a su equivalente nueva. Es el paso que más se descuida y el que más tráfico salva. Si tu web tiene muchas páginas o un blog, este mapeo es imprescindible.",
      },
      {
        h2: "Qué revisar antes de migrar",
        body:
          "Una migración segura empieza con una lista de verificación:",
        bullets: [
          "Inventario de todas las URLs actuales y su tráfico (con Search Console).",
          "Mapa de redirecciones 301 de cada URL vieja a la nueva.",
          "Conservar títulos, textos y contenido que ya posicionan.",
          "Mantener o mejorar la velocidad y la versión móvil.",
          "Revisar que el sitemap y el robots.txt no bloqueen la web nueva.",
        ],
      },
      {
        h2: "Errores que arruinan una migración",
        body:
          "Los más caros: lanzar la web nueva sin redirecciones (todo cae en 404), cambiar todas las URLs sin necesidad, dejar la web bloqueada a Google por un ajuste de 'en construcción' que nadie quitó, o borrar contenido que traía tráfico pensando que 'no servía'. También olvidar avisar el cambio en Search Console. Cada uno de estos errores, por sí solo, puede tumbar tu posicionamiento. Por eso una migración no se improvisa un viernes por la tarde.",
      },
      {
        h2: "Después de migrar: monitorea",
        body:
          "La migración no termina al publicar. Los días siguientes hay que revisar en Search Console que Google esté indexando la web nueva, cazar errores 404 que se hayan escapado y confirmar que el tráfico se mantiene. Si algo cae, se corrige a tiempo antes de que se vuelva un problema grande. Un buen monitoreo posterior es lo que convierte una migración de riesgosa a segura.",
      },
      {
        h2: "Cómo lo maneja Websy",
        body:
          "Cuando rediseñamos o migramos una web, tratamos el SEO como prioridad, no como algo que se ve al final. Mapeamos las redirecciones, conservamos el contenido que posiciona y monitoreamos tras el lanzamiento. Si tu web actual ya tiene tráfico, migrar bien es la diferencia entre crecer o empezar de cero. Puedes ver qué incluye nuestro servicio de [SEO](/seo) o de [diseño de páginas web](/diseno-de-paginas-web).",
      },
    ],
    faqs: [
      {
        q: "¿Voy a perder posiciones si rediseño mi web?",
        a: "No si se hace bien. El riesgo aparece cuando cambian las URLs sin redirecciones 301 o se borra contenido que posiciona. Con un plan de migración cuidado, puedes rediseñar y hasta mejorar tu SEO.",
      },
      {
        q: "¿Qué es una redirección 301 y por qué importa?",
        a: "Es una redirección permanente que le dice a Google que una URL se mudó a otra dirección. Sin ellas, las páginas viejas dan error 404 y pierdes el posicionamiento que tenían. Son el paso clave de toda migración.",
      },
      {
        q: "¿Cuánto tarda recuperarse si una migración salió mal?",
        a: "Depende del daño, pero puede tomar varios meses recuperar el tráfico perdido. Por eso conviene invertir en hacerlo bien la primera vez, con redirecciones y monitoreo posterior.",
      },
      {
        q: "¿Ustedes migran mi web cuidando el SEO?",
        a: "Sí. Mapeamos redirecciones, conservamos el contenido que posiciona y monitoreamos tras el lanzamiento para que no pierdas tráfico. Cuéntanos cómo es tu web actual y te orientamos.",
      },
    ],
    related: [
      { label: "SEO y posicionamiento web", href: "/seo", desc: "Migra y crece sin perder tus posiciones en Google." },
      { label: "Diseño de páginas web", href: "/diseno-de-paginas-web", desc: "Rediseños que cuidan tu tráfico y tu SEO." },
      { label: "Cómo aparecer en Google", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Las bases del posicionamiento web." },
    ],
  },

  {
    slug: "seo-local-en-peru-como-salir-primero-en-tu-ciudad",
    title: "SEO local en Perú: cómo salir primero en tu ciudad o distrito",
    h1: "SEO local en Perú: cómo salir primero en tu zona",
    description:
      "SEO local en Perú: cómo aparecer primero en Google y en el mapa cuando buscan tu servicio en tu distrito. Ficha de Google, reseñas, NAP y páginas por zona.",
    excerpt:
      "La mayoría busca servicios 'cerca de mí'. Así logras que tu negocio aparezca primero en tu ciudad o distrito.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "SEO Local",
    readingMin: 7,
    intro:
      "Cuando alguien busca un servicio en su zona, Google le muestra un mapa con tres negocios y luego los resultados de siempre. Salir en ese paquete local es lo que llena tu agenda. El SEO local trabaja tu ficha de Google y tu web para que aparezcas primero cuando buscan lo que ofreces en tu ciudad o distrito.",
    sections: [
      {
        h2: "Qué es el SEO local y por qué importa",
        body:
          "El SEO local es el trabajo de posicionamiento enfocado en tu zona geográfica. No compites contra todo el país, sino contra los negocios de tu distrito. Cuando alguien busca 'gasfitero en Surco' o 'dentista cerca de mí', Google prioriza negocios cercanos y bien reseñados. Para cualquier negocio que atiende a un área (clínicas, restaurantes, talleres, estudios), es el SEO de mayor retorno: quien busca así ya quiere comprar y está a pocos minutos de ti.",
      },
      {
        h2: "Tu ficha de Google Business Profile: el corazón del SEO local",
        body:
          "Antes que tu web, lo que aparece en el mapa es tu ficha de Google (antes Google Mi Negocio). Una ficha completa y optimizada es la base de todo:",
        bullets: [
          "Categoría correcta, horarios, teléfono y dirección exactos.",
          "Fotos reales y recientes del local, el equipo y el trabajo.",
          "Descripción con las palabras que tus clientes buscan.",
          "Servicios y productos cargados, con precios si aplica.",
          "Publicaciones y novedades para mantenerla activa.",
        ],
      },
      {
        h2: "Reseñas: el factor que más mueve el mapa",
        body:
          "Las reseñas son uno de los factores que más pesan en el paquete local. Un negocio con reseñas recientes, numerosas y respondidas transmite confianza y Google lo premia con mejor posición. La clave no es inventarlas nunca, sino pedirlas de forma sistemática a tus clientes satisfechos y responder todas, buenas y malas, con educación. Un flujo constante de reseñas reales es de lo más rentable que puedes trabajar en SEO local.",
      },
      {
        h2: "NAP consistente: que tus datos coincidan en todas partes",
        body:
          "NAP significa Nombre, Dirección y Teléfono (Name, Address, Phone). Google confía más en negocios cuyos datos son idénticos en su web, su ficha, redes sociales y directorios. Si tu dirección aparece distinta en cada sitio, Google duda de cuál es la real y te posiciona peor. Revisa que tu NAP sea exactamente igual en todos lados, hasta en la forma de escribir la dirección.",
      },
      {
        h2: "Tu web también trabaja el SEO local",
        body:
          "La ficha manda en el mapa, pero tu web refuerza todo. Incluir tu ciudad y distrito en títulos y contenido, crear páginas por zona o por servicio local, y marcar tu negocio con datos estructurados (LocalBusiness) le dice a Google dónde operas. Una web rápida y clara, enlazada con tu ficha, multiplica tus opciones de salir primero. Nuestro servicio de [SEO](/seo) trabaja ficha y web juntas para dominar tu mercado local.",
      },
      {
        h2: "Mide y sostén tu posición",
        body:
          "El SEO local no es de una sola vez. Hay que revisar en qué búsquedas apareces, cuántas llamadas y visitas trae tu ficha, y seguir sumando reseñas y contenido. La competencia también trabaja, así que mantener la ficha activa y la web al día es lo que sostiene tu lugar en el mapa mes a mes.",
      },
    ],
    faqs: [
      {
        q: "¿Qué es más importante para el SEO local, la ficha o la web?",
        a: "La ficha de Google Business Profile manda en el paquete local del mapa, pero la web la refuerza. Lo ideal es trabajar ambas juntas: ficha completa con reseñas y una web optimizada con tu zona y datos estructurados.",
      },
      {
        q: "¿Cómo consigo más reseñas sin inventarlas?",
        a: "Pídelas de forma sistemática a tus clientes satisfechos, facilitándoles el enlace directo a tu ficha, y responde todas con educación. Nunca compres ni inventes reseñas: Google las detecta y penaliza.",
      },
      {
        q: "¿En cuánto tiempo veo resultados en SEO local?",
        a: "Una ficha bien optimizada puede mostrar mejoras en pocas semanas, sobre todo si sumas reseñas. Consolidar posiciones frente a la competencia toma algunos meses de trabajo constante.",
      },
      {
        q: "¿Sirve el SEO local si tengo varias sedes?",
        a: "Sí. Cada sede necesita su propia ficha optimizada y, si es posible, una página por ubicación en tu web. Así apareces en el mapa de cada zona donde atiendes.",
      },
    ],
    related: [
      { label: "SEO y posicionamiento web", href: "/seo", desc: "SEO local y técnico para aparecer primero en tu zona." },
      { label: "Google Mi Negocio para empresas", href: "/blog/google-mi-negocio-para-empresas-en-peru", desc: "Cómo optimizar tu ficha y ganar reseñas." },
      { label: "Cómo aparecer en Google", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Las bases del posicionamiento web." },
    ],
  },

  {
    slug: "seo-on-page-checklist-para-tu-pagina-web",
    title: "SEO on-page: la checklist para tu página web (2026)",
    h1: "SEO on-page: la checklist para tu página web",
    description:
      "Checklist de SEO on-page para tu página web en Perú: títulos, meta descripciones, encabezados, URLs, imágenes, enlazado interno y contenido para posicionar en Google.",
    excerpt:
      "El SEO on-page es lo que sí controlas de tu web. Esta checklist cubre lo esencial para posicionar mejor.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "SEO",
    readingMin: 7,
    intro:
      "El SEO on-page es todo lo que optimizas dentro de tu propia web para que Google la entienda y la posicione. A diferencia de los enlaces externos, aquí tú tienes el control total. Esta checklist reúne lo esencial (títulos, contenido, estructura y velocidad) para que cada página compita por las búsquedas que te interesan.",
    sections: [
      {
        h2: "Títulos y meta descripciones que ganan el clic",
        body:
          "El título (title tag) es lo primero que Google y el usuario leen. Cada página debe tener un título único, con la palabra clave al inicio y un largo que no se corte en los resultados. La meta descripción no posiciona directamente, pero bien escrita gana clics. Piensa en ambos como el anuncio gratuito de tu página en Google: claros, específicos y con una razón para entrar.",
      },
      {
        h2: "Encabezados y estructura del contenido",
        body:
          "Un solo H1 por página con el tema principal, y H2/H3 que organicen el contenido en secciones lógicas. Esta jerarquía ayuda a Google a entender de qué trata la página y facilita la lectura. Un texto ordenado por encabezados, con párrafos cortos y listas, se lee mejor y tiene más opciones de aparecer en fragmentos destacados y en respuestas de IA.",
      },
      {
        h2: "URLs, imágenes y datos que Google entiende",
        body:
          "Los detalles técnicos on-page suman más de lo que parece:",
        bullets: [
          "URLs cortas, legibles y con la palabra clave (nada de '?id=123').",
          "Imágenes comprimidas, en formato moderno y con texto alternativo (alt) descriptivo.",
          "Datos estructurados (schema) para artículos, productos, FAQ o negocio local.",
          "Un solo H1 y encabezados en orden, sin saltos.",
          "Metadatos de Open Graph para que se vea bien al compartir.",
        ],
      },
      {
        h2: "Contenido que responde la intención de búsqueda",
        body:
          "De nada sirve optimizar la forma si el contenido no responde lo que la persona buscaba. Antes de escribir, entiende qué quiere quien busca esa palabra (informarse, comparar o comprar) y dale exactamente eso. Un contenido completo, útil y actualizado, que cubre el tema mejor que la competencia, es la base del SEO on-page. La técnica ayuda, pero el contenido es el que convence a Google y al lector.",
      },
      {
        h2: "Enlazado interno: conecta tus páginas",
        body:
          "Los enlaces internos reparten autoridad entre tus páginas y le muestran a Google la relación entre tus temas. Desde tus artículos, enlaza a tus páginas de servicio con un texto de anclaje descriptivo (no 'clic aquí'). Una buena estructura de enlaces internos hace que tus páginas de dinero, como [SEO](/seo) o tus servicios, reciban el empuje de todo tu contenido de apoyo.",
      },
      {
        h2: "Velocidad y móvil: la base que Google exige",
        body:
          "Una página lenta o difícil de usar en el celular pierde posiciones y visitas, por muy buen contenido que tenga. Optimiza imágenes, evita scripts innecesarios y asegúrate de que todo se vea y funcione bien en móvil. Los Core Web Vitals (velocidad de carga, interactividad y estabilidad visual) son parte del ranking: cuidarlos es parte inseparable del SEO on-page moderno.",
      },
    ],
    faqs: [
      {
        q: "¿Qué es lo primero que debo optimizar en SEO on-page?",
        a: "Empieza por los títulos y el contenido: un título único por página con tu palabra clave y un contenido que responda de verdad la intención de búsqueda. Sobre esa base, ajusta URLs, imágenes, datos estructurados y velocidad.",
      },
      {
        q: "¿Cuántas veces debo repetir la palabra clave?",
        a: "No hay un número mágico ni conviene forzarla. Úsala de forma natural en el título, un encabezado y a lo largo del texto donde tenga sentido. Escribir para la persona, no para repetir la palabra, es lo que hoy posiciona.",
      },
      {
        q: "¿El SEO on-page es suficiente para posicionar?",
        a: "Es la base indispensable, pero se complementa con SEO técnico (velocidad, indexación) y de autoridad (enlaces). Una web con buen on-page parte con ventaja, pero en rubros competidos también necesita los otros pilares.",
      },
      {
        q: "¿Ustedes optimizan el SEO on-page de mi web?",
        a: "Sí. Auditamos y optimizamos títulos, contenido, estructura, datos estructurados, enlazado y velocidad de tu web. Cuéntanos tu caso y te preparamos una propuesta a tu medida.",
      },
    ],
    related: [
      { label: "SEO y posicionamiento web", href: "/seo", desc: "SEO técnico, on-page y de contenidos en un solo servicio." },
      { label: "Cómo aparecer en Google", href: "/blog/como-aparecer-en-google-con-tu-pagina-web", desc: "Guía práctica para posicionar tu web en Perú." },
      { label: "Cuánto cuesta el SEO en Perú", href: "/blog/cuanto-cuesta-el-seo-en-peru", desc: "Cómo se cobra el posicionamiento y qué incluye." },
    ],
  },

  {
    slug: "como-estructurar-una-campana-de-google-ads-para-servicios",
    title: "Cómo estructurar una campaña de Google Ads para servicios en Perú",
    h1: "Cómo estructurar una campaña de Google Ads para servicios",
    description:
      "Guía paso a paso para estructurar una campaña de Google Ads para negocios de servicios en Perú: objetivo, estructura de cuenta, palabras clave, anuncios y conversiones.",
    excerpt:
      "Una campaña de Ads bien estructurada rinde el doble con el mismo presupuesto. Así se arma paso a paso.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Marketing",
    readingMin: 8,
    intro:
      "En Google Ads, la estructura lo es todo: una campaña ordenada llega a la persona correcta y rinde el doble con el mismo presupuesto, mientras que una mal armada quema plata. Si vendes servicios (clínica, estudio, taller, agencia), esta guía te lleva paso a paso por cómo estructurar una campaña que traiga contactos reales.",
    sections: [
      {
        h2: "1. Define un objetivo y una conversión clara",
        body:
          "Antes de tocar Google Ads, decide qué es un resultado para ti: una llamada, un formulario enviado o un mensaje de WhatsApp. Sin una conversión definida y medida, no sabrás si la campaña funciona. Para servicios, casi siempre el objetivo es generar leads (contactos), no ventas directas. Todo lo demás se construye sobre esta decisión.",
      },
      {
        h2: "2. Ordena la cuenta: campañas y grupos de anuncios",
        body:
          "La estructura clásica es cuenta, campañas y grupos de anuncios. Crea una campaña por línea de servicio o por objetivo, y dentro, grupos de anuncios por tema específico. Así controlas presupuesto y mensaje por cada servicio:",
        bullets: [
          "Una campaña por servicio principal (ej. 'blefaroplastia', 'rinoplastia').",
          "Grupos de anuncios por variante o intención dentro de cada servicio.",
          "Presupuesto asignado según lo que más te interesa vender.",
          "Segmentación geográfica a tu zona real de atención.",
        ],
      },
      {
        h2: "3. Elige palabras clave y concordancias con cabeza",
        body:
          "Cada grupo de anuncios debe girar en torno a pocas palabras clave muy relacionadas. Usa concordancias (amplia, de frase, exacta) según cuánto control quieras, y desde el día uno arma tu lista de palabras clave negativas para no pagar por búsquedas que no te sirven. Empezar con concordancia de frase y exacta suele dar leads más limpios que la amplia sin control.",
      },
      {
        h2: "4. Escribe anuncios que hablen de tu servicio",
        body:
          "El anuncio debe repetir la palabra que la persona buscó, dejar clara tu propuesta y terminar con una acción (llama, cotiza, agenda). Aprovecha todos los titulares y descripciones disponibles y suma extensiones (llamada, ubicación, enlaces). Un anuncio relevante mejora tu Quality Score, y un mejor Quality Score te hace pagar menos por cada clic.",
      },
      {
        h2: "5. Manda el clic a una landing, no a tu home",
        body:
          "El error más caro es llevar los anuncios a la página de inicio. Cada campaña necesita una [landing pensada para convertir](/diseno-de-paginas-web): un solo objetivo, el mensaje que promete el anuncio, prueba de confianza y un formulario o botón de WhatsApp visible. Una buena landing puede duplicar tus contactos con el mismo gasto en clics.",
      },
      {
        h2: "6. Mide, optimiza y no la dejes sola",
        body:
          "Una campaña se gestiona, no se enciende y se olvida. Revisa qué palabras traen leads y cuáles solo gastan, suma negativas, pausa lo que no rinde y sube presupuesto a lo que sí. Con la conversión bien medida en GA4, sabrás tu costo por contacto real y podrás mejorarlo mes a mes. Ese trabajo constante es lo que separa una campaña rentable de una que solo gasta. En [Google Ads](/google-ads) montamos y optimizamos tu campaña de punta a punta.",
      },
    ],
    faqs: [
      {
        q: "¿Cuántas campañas necesito para empezar?",
        a: "Para la mayoría de negocios de servicios, empezar con una o dos campañas bien enfocadas en tus servicios principales es más que suficiente. Es mejor pocas campañas bien optimizadas que muchas desordenadas.",
      },
      {
        q: "¿Por qué no debo enviar los anuncios a mi página de inicio?",
        a: "Porque la home tiene muchos mensajes y distrae. Una landing con un solo objetivo, alineada al anuncio y con un formulario claro, convierte mucho más. Es uno de los ajustes que más leads gana.",
      },
      {
        q: "¿Qué son las palabras clave negativas y por qué importan?",
        a: "Son términos por los que no quieres aparecer (por ejemplo 'gratis' o 'empleo'). Añadirlas evita pagar clics de gente que no va a contratarte, y es de lo que más ahorra presupuesto en campañas de servicios.",
      },
      {
        q: "¿Ustedes estructuran y manejan mi campaña de Google Ads?",
        a: "Sí. Definimos objetivo, estructura, palabras clave, anuncios, landing y medición de conversiones, y optimizamos la campaña mes a mes. Cuéntanos tu servicio y tu presupuesto y te armamos una propuesta.",
      },
    ],
    related: [
      { label: "Google Ads", href: "/google-ads", desc: "Campañas medidas que traen contactos, no solo clics." },
      { label: "Google Ads vs SEO", href: "/blog/google-ads-vs-seo-cual-conviene-para-tu-negocio", desc: "Cuándo conviene cada uno y por qué se complementan." },
      { label: "Google Ads para pymes", href: "/blog/google-ads-para-pymes-en-peru-cuanto-invertir", desc: "Cuánto invertir al mes y cómo no botar la plata." },
    ],
  },

  {
    slug: "palabras-clave-negativas-en-google-ads",
    title: "Palabras clave negativas en Google Ads: deja de botar la plata",
    h1: "Palabras clave negativas: deja de botar la plata en Ads",
    description:
      "Qué son las palabras clave negativas en Google Ads y cómo usarlas para dejar de pagar clics inútiles en Perú. Listas, niveles y ejemplos para no desperdiciar tu presupuesto.",
    excerpt:
      "Cada clic que no te sirve es plata perdida. Las palabras clave negativas son el freno que casi nadie usa bien.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Marketing",
    readingMin: 6,
    intro:
      "Si tu campaña de Google Ads gasta rápido y trae pocos contactos útiles, el problema suele estar en las palabras clave negativas: los términos por los que NO quieres aparecer. Bien usadas, dejan de pagar clics inútiles y bajan tu costo por contacto. Aquí qué son, cómo armarlas y por qué son el ajuste que más plata ahorra.",
    sections: [
      {
        h2: "Qué son las palabras clave negativas",
        body:
          "Una palabra clave negativa le dice a Google: 'no muestres mi anuncio cuando la búsqueda incluya este término'. Por ejemplo, si vendes cirugía estética y añades 'gratis' o 'precio bajo' como negativas, tu anuncio no aparece ante quien busca eso, evitando clics de gente que jamás va a contratarte. Son un filtro que enfoca tu presupuesto en las búsquedas que sí valen.",
      },
      {
        h2: "Por qué son las que más ahorran",
        body:
          "En una campaña sin negativas, pagas por búsquedas que no imaginabas: gente buscando trabajo, cursos, definiciones o cosas gratis. Cada uno de esos clics es plata que no vuelve. Las negativas cortan ese sangrado y hacen que tu presupuesto se gaste solo en quien tiene intención real. Es, muchas veces, el cambio que más mejora la rentabilidad de una cuenta.",
      },
      {
        h2: "Negativas típicas que casi todos deberían añadir",
        body:
          "Hay términos que rara vez traen clientes y conviene bloquear desde el inicio:",
        bullets: [
          "'Gratis', 'gratuito' y variantes, si tú cobras por el servicio.",
          "'Empleo', 'trabajo', 'vacantes', 'sueldo' (buscan empleo, no comprarte).",
          "'Curso', 'cómo hacer', 'tutorial' (buscan aprender, no contratar).",
          "'Barato' o 'económico', si no compites por precio.",
          "Marcas o servicios que no ofreces, para no atraer al público equivocado.",
        ],
      },
      {
        h2: "Usa el informe de términos de búsqueda",
        body:
          "La mejor fuente de negativas es el informe de términos de búsqueda: la lista real de lo que la gente tecleó antes de ver tu anuncio. Revísalo seguido, sobre todo al inicio, y convierte en negativa todo término que no tenga que ver con lo que vendes. Es un trabajo continuo: mientras más depuras, más limpio queda tu tráfico y más baja tu costo por contacto.",
      },
      {
        h2: "Listas de negativas y niveles",
        body:
          "Puedes añadir negativas a nivel de grupo de anuncios, de campaña o como lista compartida entre campañas. Una lista de negativas compartida te ahorra repetir el mismo trabajo en cada campaña. Organizarlas bien evita que, sin querer, bloquees búsquedas que sí te servían. En [Google Ads](/google-ads) mantenemos tus negativas al día como parte de la optimización.",
      },
    ],
    faqs: [
      {
        q: "¿Cada cuánto debo revisar las palabras clave negativas?",
        a: "Al inicio, varias veces por semana usando el informe de términos de búsqueda. Cuando la cuenta madura, una revisión semanal o quincenal suele bastar para mantener el tráfico limpio.",
      },
      {
        q: "¿Puedo bloquear demasiado con las negativas?",
        a: "Sí, por eso hay que tener cuidado. Si añades negativas muy amplias, puedes dejar fuera búsquedas que sí te servían. Conviene revisar el impacto y usar la concordancia adecuada en cada negativa.",
      },
      {
        q: "¿Las negativas mejoran mi Quality Score?",
        a: "De forma indirecta, sí. Al evitar clics irrelevantes, tus anuncios se muestran a gente más afín, mejora la tasa de clic relevante y eso ayuda al Quality Score, lo que a su vez baja el costo por clic.",
      },
      {
        q: "¿Ustedes gestionan las negativas de mi campaña?",
        a: "Sí. La depuración de términos y el manejo de listas de negativas es parte de nuestra optimización mensual de Google Ads, para que tu presupuesto se gaste solo en quien te puede contratar.",
      },
    ],
    related: [
      { label: "Google Ads", href: "/google-ads", desc: "Campañas optimizadas que no botan tu presupuesto." },
      { label: "Cómo estructurar una campaña de Ads", href: "/blog/como-estructurar-una-campana-de-google-ads-para-servicios", desc: "Arma tu campaña de servicios paso a paso." },
      { label: "Google Ads para pymes", href: "/blog/google-ads-para-pymes-en-peru-cuanto-invertir", desc: "Cuánto invertir y cómo medir tus resultados." },
    ],
  },

  {
    slug: "cuanto-cuesta-un-logo-profesional-en-peru",
    title: "Cuánto cuesta un logo profesional en Perú (2026)",
    h1: "¿Cuánto cuesta un logo profesional en Perú?",
    description:
      "Cuánto cuesta un logo profesional en Perú en 2026: qué define el precio, qué diferencia un logo barato de uno hecho con estrategia y qué debe incluir una entrega seria.",
    excerpt:
      "Un logo no es solo un dibujo bonito. Esto define su precio y qué debe incluir un trabajo serio.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Marketing",
    readingMin: 6,
    intro:
      "El precio de un logo en Perú va desde unos pocos soles en una plantilla hasta una inversión seria por un diseño estratégico. La diferencia no es el dibujo, sino el proceso y lo que recibes. Aquí verás qué define el costo de un logo profesional y por qué el más barato suele salir caro.",
    sections: [
      {
        h2: "Por qué hay tanta diferencia de precio",
        body:
          "Un logo puede costar casi nada en un banco de plantillas o bastante más con un diseñador que investiga tu negocio. La diferencia está en el proceso: un logo barato suele ser un ícono genérico que muchos ya usan; un logo profesional nace de entender tu marca, tu público y tu competencia, y se diseña para durar y diferenciarte. Pagas por la estrategia y la originalidad, no por el archivo.",
      },
      {
        h2: "Qué factores definen el precio",
        body:
          "Estos son los que más pesan en la cotización de un logo:",
        bullets: [
          "El proceso: plantilla lista vs. diseño original con investigación.",
          "Cantidad de propuestas y rondas de revisión incluidas.",
          "Variantes entregadas (horizontal, vertical, ícono, versión en negativo).",
          "Formatos y archivos editables que recibes.",
          "Si viene solo o dentro de un trabajo de branding completo.",
        ],
      },
      {
        h2: "Qué debe incluir un logo bien entregado",
        body:
          "Un logo profesional no es un solo archivo JPG. Una entrega seria incluye el logo en sus variantes (principal, secundaria, ícono), en formatos vectoriales (que no se pixelan al ampliar) y de mapa de bits, versiones para fondo claro y oscuro, y una guía mínima de uso (colores, tipografía y espacios). Si te entregan una sola imagen y nada más, tarde o temprano tendrás problemas para usarla bien.",
      },
      {
        h2: "El logo es una parte del branding, no todo",
        body:
          "El logo es la punta visible de tu marca, pero solo funciona dentro de un sistema. Los colores, la tipografía y el tono de tu comunicación son los que, junto al logo, hacen que tu negocio se vea coherente y profesional. Por eso muchas veces conviene pensar en [branding](/branding) y no solo en un logo suelto: una identidad completa rinde mucho más que un dibujo aislado.",
      },
      {
        h2: "Por qué el logo barato sale caro",
        body:
          "Un logo genérico o copiado te obliga a rehacerlo cuando tu negocio crece, puede coincidir con el de otra empresa y no transmite nada propio. Rehacer tu identidad más adelante, cambiar letreros, empaques y redes, cuesta más que haberlo hecho bien desde el inicio. Un buen logo es una inversión que acompaña tu marca por años; el más barato suele ser el más caro a la larga.",
      },
    ],
    faqs: [
      {
        q: "¿Puedo usar un logo hecho con plantilla o inteligencia artificial?",
        a: "Para empezar puede servir, pero suelen ser genéricos, difíciles de registrar y a veces coinciden con otras marcas. Si tu negocio va en serio, conviene un logo original pensado para diferenciarte y durar.",
      },
      {
        q: "¿En qué formatos debo recibir mi logo?",
        a: "Como mínimo en versión vectorial (que no pierde calidad al ampliar) y en imagen para web y redes, con variantes para fondo claro y oscuro. Así podrás usarlo en cualquier tamaño y soporte sin que se vea mal.",
      },
      {
        q: "¿Conviene hacer solo el logo o el branding completo?",
        a: "Depende de tu etapa. Un logo con colores y tipografía puede ser suficiente para arrancar, pero un branding completo (con manual de marca) te da coherencia en todo. Podemos empezar por el logo y crecer desde ahí.",
      },
      {
        q: "¿Cuánto costaría mi logo?",
        a: "Depende del proceso, las variantes y si va solo o con branding. Cuéntanos sobre tu negocio y te preparamos una propuesta a tu medida, sin compromiso.",
      },
    ],
    related: [
      { label: "Branding e identidad de marca", href: "/branding", desc: "Logo, colores, tipografía y manual de marca coherentes." },
      { label: "Qué es el branding", href: "/blog/que-es-el-branding-y-por-que-tu-pyme-lo-necesita", desc: "Por qué tu marca es mucho más que un logo." },
      { label: "Cotiza tu proyecto", href: "/cotizacion", desc: "Logo o branding completo a tu medida." },
    ],
  },

  {
    slug: "manual-de-marca-que-es-y-por-que-tu-negocio-lo-necesita",
    title: "Manual de Marca: qué es, qué incluye y para qué sirve",
    h1: "Manual de marca: qué es y por qué lo necesitas",
    description:
      "Qué es un manual de marca y por qué tu negocio en Perú lo necesita: reglas de logo, colores, tipografía y tono que hacen que tu marca se vea coherente en todos lados.",
    excerpt:
      "Un manual de marca evita que tu negocio se vea distinto en cada pieza. Esto es lo que incluye y para qué sirve.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Marketing",
    readingMin: 6,
    intro:
      "Un manual de marca es el documento que define cómo debe verse y comunicarse tu marca en todos lados: logo, colores, tipografía y tono. Sin él, cada pieza que hace una persona distinta sale diferente y tu negocio se ve improvisado. Aquí qué incluye un manual de marca y por qué le da coherencia y valor a tu negocio.",
    sections: [
      {
        h2: "Qué es un manual de marca",
        body:
          "Es la guía que reúne las reglas de tu identidad visual y de comunicación. Explica cómo usar el logo, qué colores y tipografías son los oficiales, cuánto espacio dejar alrededor del logo, qué no hacer y con qué tono hablarle a tu público. En pocas palabras, es el instructivo para que tu marca se vea y suene igual, la use quien la use.",
      },
      {
        h2: "Qué incluye normalmente",
        body:
          "El alcance varía, pero un manual de marca útil suele cubrir:",
        bullets: [
          "Uso correcto del logo y sus variantes, con lo que está prohibido hacer.",
          "Paleta de colores oficial con sus códigos exactos.",
          "Tipografías principales y secundarias y cómo aplicarlas.",
          "Espacios mínimos, tamaños y versiones para fondo claro y oscuro.",
          "Tono de comunicación y ejemplos de aplicación (web, redes, papelería).",
        ],
      },
      {
        h2: "Por qué tu negocio lo necesita",
        body:
          "Sin un manual, cada proveedor, diseñador o community manager interpreta tu marca a su manera y el resultado es un negocio que se ve distinto en cada canal. Eso resta profesionalismo y confunde al cliente. Con un manual, todos usan los mismos colores, el mismo logo y el mismo tono, y tu marca se percibe sólida y coherente. Esa coherencia es justamente lo que hace que una marca se sienta profesional.",
      },
      {
        h2: "Coherencia que se traduce en confianza",
        body:
          "Las marcas que se ven iguales en su web, sus redes, su local y sus empaques transmiten orden y seriedad, y eso genera confianza para comprar. Un manual de marca es lo que sostiene esa coherencia con el tiempo, incluso cuando cambian las personas que trabajan tu comunicación. Es la memoria visual de tu negocio.",
      },
      {
        h2: "El manual es parte de un branding completo",
        body:
          "El manual de marca no vive solo: es el resultado ordenado de un trabajo de [branding](/branding). Primero se define la identidad (logo, colores, tipografía, tono) y luego se documenta en el manual para que se aplique de forma consistente. Si además tienes una [página web](/diseno-de-paginas-web) alineada a ese manual, tu marca se ve impecable en el canal donde más gente la ve.",
      },
    ],
    faqs: [
      {
        q: "¿Un negocio pequeño necesita un manual de marca?",
        a: "Aunque sea básico, sí ayuda. Incluso un manual corto con logo, colores, tipografía y su uso evita que tu marca se vea distinta en cada pieza y te ahorra correcciones. No hace falta un documento enorme para ganar coherencia.",
      },
      {
        q: "¿Cuál es la diferencia entre un logo y un manual de marca?",
        a: "El logo es un elemento; el manual de marca es el conjunto de reglas para usar el logo y toda tu identidad (colores, tipografía, tono) de forma coherente. El manual asegura que tu marca se aplique bien en todos lados.",
      },
      {
        q: "¿El manual de marca sirve si cambio de diseñador?",
        a: "Sí, justamente para eso. Con el manual, cualquier diseñador o proveedor nuevo puede aplicar tu marca correctamente sin reinventarla, manteniendo la coherencia con lo que ya tienes.",
      },
      {
        q: "¿Ustedes crean el manual de marca de mi negocio?",
        a: "Sí, como parte de nuestro servicio de branding. Definimos tu identidad y la documentamos en un manual claro para que tu marca se vea consistente en web, redes y todo punto de contacto.",
      },
    ],
    related: [
      { label: "Branding e identidad de marca", href: "/branding", desc: "Identidad y manual de marca para verte profesional." },
      { label: "Qué es el branding", href: "/blog/que-es-el-branding-y-por-que-tu-pyme-lo-necesita", desc: "Por qué tu pyme necesita una marca sólida." },
      { label: "Cuánto cuesta un logo profesional", href: "/blog/cuanto-cuesta-un-logo-profesional-en-peru", desc: "Qué define el precio de un logo bien hecho." },
    ],
  },

  {
    slug: "cuanto-cuesta-un-hosting-y-un-dominio-pe-en-peru",
    title: "Cuánto Cuesta un Hosting y Dominio .pe en Perú 2026",
    h1: "¿Cuánto cuesta un hosting y un dominio .pe?",
    description:
      "Cuánto cuesta un hosting y un dominio .pe en Perú en 2026: precios reales en soles, de qué depende cada costo y qué necesita de verdad tu web o tienda para arrancar.",
    excerpt:
      "Hosting y dominio son los costos base de toda web. Aquí qué son, cuánto cuestan y cuál necesita tu negocio.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Web",
    readingMin: 6,
    intro:
      "Toda página web necesita dos cosas para estar en línea: un dominio (tu dirección en internet) y un hosting (donde vive la web). Son los costos base de cualquier proyecto y, por suerte, suelen ser modestos. Aquí verás qué es cada uno, de qué depende su precio y cuál conviene según tu web o tienda virtual.",
    sections: [
      {
        h2: "Qué es el dominio y qué es el hosting",
        body:
          "El dominio es tu dirección en internet, como tunegocio.pe: se alquila por año y es único. El hosting es el espacio en un servidor donde se guardan los archivos de tu web para que esté disponible 24/7. Uno sin el otro no sirve: el dominio dice dónde estás y el hosting guarda lo que la gente ve. Ambos se renuevan y son la base sobre la que corre tu página.",
      },
      {
        h2: "Cuánto cuesta un dominio .pe",
        body:
          "El dominio .pe (el de Perú) es económico y se paga por año. También puedes optar por .com.pe, .com u otras extensiones, con precios similares y renovación anual. El costo es bajo comparado con lo que aporta: una dirección profesional y propia. Lo importante es que el dominio esté a tu nombre, no al del proveedor, para que sea de verdad tuyo.",
      },
      {
        h2: "De qué depende el precio del hosting",
        body:
          "El hosting varía según lo que tu web exige:",
        bullets: [
          "Tipo de sitio: una web informativa pesa menos que una tienda con muchos productos.",
          "Tráfico esperado: más visitas requieren más recursos.",
          "Tipo de hosting: compartido (más económico) o VPS/dedicado (más potente).",
          "Recursos: espacio en disco, memoria y velocidad del servidor.",
          "Extras: correos corporativos, certificado SSL y respaldos incluidos.",
        ],
      },
      {
        h2: "Qué hosting necesita tu proyecto",
        body:
          "Para una web informativa o corporativa, un hosting compartido de calidad suele bastar y es lo más económico. Para una tienda virtual con catálogo grande, mucho tráfico o un sistema a medida, conviene un hosting con más recursos (VPS) para que todo cargue rápido y estable. La regla simple: mientras más movimiento y funciones tenga tu web, mejor debe ser el hosting que la sostiene.",
      },
      {
        h2: "Hosting, dominio y mantenimiento van juntos",
        body:
          "El hosting y el dominio son costos fijos, pero no los únicos: mantener la web segura, respaldada y actualizada también importa. Muchos negocios prefieren un plan que junte hosting, SSL, respaldos y actualizaciones para no estar pendientes de renovaciones ni de fallas. Así funciona nuestro servicio de [mantenimiento web](/mantenimiento-web): tú te enfocas en tu negocio y nosotros mantenemos tu web en línea. Puedes ver el panorama completo de costos en nuestra guía de [precios](/precios).",
      },
    ],
    faqs: [
      {
        q: "¿El dominio y el hosting se pagan una sola vez?",
        a: "No. Ambos se renuevan: el dominio por año y el hosting mensual o anual, según el plan. Son costos recurrentes bajos, pero hay que mantenerlos al día para que la web no se caiga.",
      },
      {
        q: "¿Conviene un dominio .pe o .com?",
        a: "Si tu negocio es local y quieres reforzar que eres de Perú, el .pe o .com.pe funciona muy bien. El .com es más internacional. Muchos negocios registran ambos y redirigen uno al otro para proteger su marca.",
      },
      {
        q: "¿El hosting incluye el certificado de seguridad (SSL)?",
        a: "Depende del proveedor y el plan. Muchos incluyen un SSL básico gratuito, suficiente para la mayoría de webs. Es indispensable tenerlo: sin SSL, el navegador marca tu sitio como 'no seguro'.",
      },
      {
        q: "¿Ustedes se encargan del hosting y el dominio de mi web?",
        a: "Sí. Configuramos el dominio y el hosting adecuados para tu proyecto y, si quieres, los mantenemos con un plan que incluye seguridad, respaldos y actualizaciones. Cuéntanos qué necesitas y te orientamos.",
      },
    ],
    related: [
      { label: "Mantenimiento web", href: "/mantenimiento-web", desc: "Hosting, seguridad, respaldos y actualizaciones al día." },
      { label: "Costos de mantenimiento de una web", href: "/blog/costos-de-mantenimiento-de-una-pagina-web-en-peru", desc: "Qué incluye mantener tu web viva y segura." },
      { label: "Ver precios y cotizar", href: "/precios", desc: "El panorama completo de la inversión en tu web." },
    ],
  },

  {
    slug: "pagina-web-para-dentistas-y-clinicas-dentales-en-peru",
    title: "Página web para dentistas y clínicas dentales en Perú",
    h1: "Página web para dentistas y clínicas dentales",
    description:
      "Página web para dentistas y clínicas dentales en Perú: reserva de citas, tratamientos, confianza con casos reales y SEO local para captar pacientes de tu zona.",
    excerpt:
      "Los pacientes eligen a su dentista por internet. Así debe ser la web de un consultorio o clínica dental.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Diseño web",
    readingMin: 6,
    intro:
      "Antes de sentarse en el sillón, el paciente busca a su dentista en Google: revisa tratamientos, ubicación, reseñas y precios. Si tu consultorio o clínica dental no aparece o no transmite confianza, el paciente elige a otro. Una página web bien hecha capta esas búsquedas y las convierte en citas.",
    sections: [
      {
        h2: "Por qué un dentista necesita web propia",
        body:
          "En salud, la confianza lo decide todo, y hoy esa confianza empieza en internet. El paciente quiere saber qué tratamientos ofreces, dónde quedas, si atiendes su caso y qué opinan otros pacientes, antes de llamar. Una web propia responde todo eso a cualquier hora, te posiciona en Google frente a otras clínicas de tu zona y capta citas sin depender solo de las redes o de recomendaciones.",
      },
      {
        h2: "Qué debe tener la web de una clínica dental",
        body:
          "La web de un dentista debe generar confianza y facilitar la cita. Lo indispensable:",
        bullets: [
          "Tratamientos claros (ortodoncia, implantes, blanqueamiento, etc.).",
          "Reserva o consulta de cita por WhatsApp, visible en todo momento.",
          "Fotos reales del consultorio, el equipo y casos (con consentimiento).",
          "Ubicación con Google Maps, horarios y medios de pago (incluido Yape).",
          "Carga rápida en el celular, donde la mayoría busca su dentista.",
        ],
      },
      {
        h2: "Facilita la reserva de citas",
        body:
          "El paciente que ya te encontró quiere agendar sin complicarse. Un botón de WhatsApp con el tratamiento cargado, un formulario de cita o incluso un sistema de reservas convierte al visitante en paciente. Mientras más fácil sea agendar, menos pacientes pierdes en el camino. Cuando armamos tu [página web para clínicas](/diseno-de-paginas-web/clinicas), la dejamos pensada para captar citas, no solo para informar.",
      },
      {
        h2: "Transmite confianza con contenido real",
        body:
          "En odontología, mostrar es convencer. Fotos reales del consultorio limpio y moderno, la presentación del equipo con sus especialidades, y casos de antes y después (siempre con consentimiento del paciente) generan la confianza que cierra la cita. Un blog que responde dudas comunes ('duele un implante', 'cuánto dura una ortodoncia') además atrae pacientes que investigan antes de decidir.",
      },
      {
        h2: "SEO local: aparece cuando buscan dentista cerca",
        body:
          "La mayoría de pacientes busca 'dentista en [su distrito]' o 'clínica dental cerca de mí'. Salir en Google y en el mapa cuando investigan tu zona te trae pacientes nuevos sin pagar publicidad. Con una web optimizada y tu ficha de Google al día, apareces en esas búsquedas locales. Puedes profundizar en cómo [aparecer en Google con tu web](/blog/como-aparecer-en-google-con-tu-pagina-web).",
      },
    ],
    faqs: [
      {
        q: "¿La web puede recibir reservas de citas?",
        a: "Sí. Incluimos reserva y consulta por WhatsApp, formulario de cita o, si lo necesitas, un sistema de reservas con horarios. Así el paciente agenda fácil y a ti te llegan las citas ordenadas.",
      },
      {
        q: "¿Puedo mostrar casos de antes y después?",
        a: "Sí, siempre con el consentimiento del paciente. Los casos reales generan mucha confianza. Diseñamos galerías cuidadas para presentarlos de forma profesional y ética.",
      },
      {
        q: "¿Sirve para captar pacientes de mi zona?",
        a: "Sí. Optimizamos la web para SEO local y tu ficha de Google, de modo que aparezcas cuando busquen dentistas o clínicas dentales en tu distrito.",
      },
      {
        q: "¿Cuánto cuesta la web de un dentista o clínica dental?",
        a: "Depende de si quieres solo presencia y captación o también reservas y contenido. Te preparamos una cotización a tu medida y sin costo en menos de 24 horas.",
      },
    ],
    related: [
      { label: "Diseño de páginas web para clínicas", href: "/diseno-de-paginas-web/clinicas", desc: "Webs de salud que generan confianza y captan citas." },
      { label: "Página web para clínicas y consultorios", href: "/blog/pagina-web-para-clinicas-y-consultorios-medicos", desc: "Buenas prácticas para webs del sector salud." },
      { label: "Ver precios y cotizar", href: "/precios", desc: "Qué incluye la web de una clínica dental." },
    ],
  },

  /* ── Cluster Shopify ─────────────────────────────────────────── */
  {
    slug: "como-crear-una-tienda-shopify-en-peru-paso-a-paso",
    title: "Cómo crear una tienda Shopify en Perú: guía paso a paso (2026)",
    h1: "Cómo crear una tienda Shopify en Perú (paso a paso)",
    description:
      "Guía paso a paso para crear una tienda Shopify en Perú: cuenta, tema, productos, pagos con Yape, Plin, Niubiz e Izipay, envíos y lanzamiento para empezar a vender.",
    excerpt:
      "Cada paso para montar tu tienda Shopify en Perú: desde la cuenta hasta el lanzamiento, con pagos locales configurados.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Ecommerce",
    readingMin: 8,
    intro:
      "Crear una tienda Shopify en Perú sigue un orden claro: abrir la cuenta, elegir y personalizar el tema, cargar tus productos, configurar los pagos locales (Yape, Plin, Niubiz, Izipay), definir envíos y lanzar. En esta guía recorremos cada paso para que tu tienda quede lista para vender, no solo montada.",
    sections: [
      {
        h2: "1. Crea tu cuenta y elige el plan de Shopify",
        body:
          "Regístrate en Shopify y elige el plan según el tamaño de tu operación. Puedes empezar con un plan básico y subir cuando crezcas. Ten a mano tu logo, tu marca y una idea clara de tu catálogo. Recuerda que el plan mensual de Shopify es un costo aparte del desarrollo; lo explicamos en la guía de [cuánto cuesta una tienda Shopify](/tiendas-virtuales/shopify/costos).",
      },
      {
        h2: "2. Elige y personaliza un tema a tu marca",
        body:
          "El tema es la base del diseño. Elige uno ligero y rápido, y personalízalo con tus colores, tu logo y tu tipografía. Evita instalar decenas de apps que lo vuelvan lento: la velocidad es la que hace o rompe una venta.",
        bullets: [
          "Prioriza un tema rápido antes que uno recargado de efectos.",
          "Ajusta colores, logo y tipografía a tu identidad de marca.",
          "Cuida la versión móvil: ahí compra la mayoría en Perú.",
        ],
      },
      {
        h2: "3. Carga tus productos y organiza colecciones",
        body:
          "Sube cada producto con buenas fotos, una descripción única y sus variantes (talla, color) si aplica. Agrupa en colecciones ordenadas para que el cliente encuentre rápido lo que busca. Escribe títulos y descripciones pensando también en Google.",
        bullets: [
          "Fotos claras y de buen peso para que carguen rápido.",
          "Descripciones únicas, no copiadas del proveedor.",
          "Variantes con stock independiente por talla y color.",
        ],
      },
      {
        h2: "4. Configura los pagos que usan tus clientes",
        body:
          "En Perú una tienda vende cuando acepta los medios reales: Yape y Plin para pagos inmediatos, tarjeta con Niubiz o Izipay, y transferencia o pago contra entrega. Te contamos cómo hacerlo en [vender con Yape y Plin en Shopify](/blog/como-vender-con-yape-y-plin-en-shopify).",
      },
      {
        h2: "5. Define envíos, impuestos y notificaciones",
        body:
          "Configura tarifas de envío por zona, los impuestos que correspondan y las notificaciones automáticas de pedido por correo. Un cliente que sabe cuánto y cuándo llega su compra confía más y abandona menos el carrito.",
      },
      {
        h2: "6. Revisa, lanza y optimiza",
        body:
          "Antes de publicar, prueba el checkout completo como si fueras cliente, revisa el móvil y conecta tu WhatsApp para dudas. Después de lanzar, mide qué se ve y qué se vende, y ajusta. Si prefieres que lo hagamos por ti, somos [agencia Shopify en Perú](/tiendas-virtuales/shopify) y entregamos la tienda optimizada para vender.",
      },
    ],
    faqs: [
      {
        q: "¿Necesito saber programar para crear una tienda Shopify?",
        a: "No. Shopify está pensado para usarse sin programar. Puedes montar tu tienda con el editor visual; y si quieres un diseño a medida y optimizado para vender, nosotros lo desarrollamos por ti.",
      },
      {
        q: "¿Cuánto demora crear una tienda Shopify?",
        a: "Una tienda estándar bien hecha suele estar lista en 3 a 5 semanas, según la cantidad de productos e integraciones. Hacerla apurada y sin optimizar suele salir cara después.",
      },
      {
        q: "¿Shopify acepta Yape y Plin en Perú?",
        a: "Sí. Se pueden configurar Yape y Plin, además de tarjeta con Niubiz o Izipay y transferencia. Lo detallamos en nuestra guía de pagos locales en Shopify.",
      },
      {
        q: "¿Me conviene hacerla yo o con una agencia?",
        a: "Si tienes tiempo y pocos productos, puedes empezar solo. Si quieres una tienda rápida, con SEO y optimizada para convertir, una agencia especialista te ahorra errores y acelera tus ventas.",
      },
    ],
    related: [
      { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "La creamos por ti, optimizada para vender." },
      { label: "Cuánto cuesta una tienda Shopify", href: "/tiendas-virtuales/shopify/costos", desc: "Qué define el precio y en qué inviertes." },
      { label: "Vender con Yape y Plin en Shopify", href: "/blog/como-vender-con-yape-y-plin-en-shopify", desc: "Cómo aceptar pagos locales en tu tienda." },
    ],
  },

  {
    slug: "como-vender-con-yape-y-plin-en-shopify",
    title: "Cómo vender con Yape y Plin en Shopify (Perú)",
    h1: "Cómo vender con Yape y Plin en tu tienda Shopify",
    description:
      "Cómo aceptar Yape y Plin en Shopify en Perú: opciones para cobrar con billeteras y tarjeta (Niubiz, Izipay), reducir el abandono de carrito y no perder ventas.",
    excerpt:
      "Yape y Plin son casi obligatorios para vender en Perú. Así los integras en tu tienda Shopify sin perder ventas.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Pagos",
    readingMin: 6,
    intro:
      "En Perú, muchas ventas se caen porque la tienda no acepta Yape o Plin. Shopify permite cobrar con billeteras y tarjeta si lo configuras bien: billeteras locales, pasarelas como Niubiz o Izipay, y opciones manuales. Aquí ves cómo aceptarlos y qué cuidar para no perder compras en el checkout.",
    sections: [
      {
        h2: "Por qué Yape y Plin son imprescindibles en Perú",
        body:
          "Son la forma más rápida y familiar de pagar para millones de peruanos. Si el cliente llega al checkout y no encuentra Yape o Plin, muchas veces abandona la compra. Ofrecerlos reduce la fricción y sube tu conversión.",
      },
      {
        h2: "Opciones para aceptar Yape y Plin en Shopify",
        bullets: [
          "Pasarelas que integran billeteras y tarjeta en un solo checkout.",
          "Niubiz o Izipay para tarjeta de crédito y débito con confirmación automática.",
          "Método de pago manual (transferencia/QR) para casos puntuales, siempre con confirmación clara.",
        ],
      },
      {
        h2: "Tarjeta con Niubiz o Izipay, en el mismo checkout",
        body:
          "Además de las billeteras, necesitas aceptar tarjeta para no perder al cliente que paga con crédito o débito. Niubiz e Izipay son las más usadas en Perú y permiten cobros automáticos y seguros dentro de Shopify.",
      },
      {
        h2: "Cómo evitar perder ventas en el pago",
        bullets: [
          "Muestra los logos de pago (Yape, Plin, tarjeta) para dar confianza.",
          "Mantén el checkout corto: cada paso extra pierde ventas.",
          "Confirma cada pedido automáticamente por correo y WhatsApp.",
          "Prueba el flujo de pago completo antes de lanzar.",
        ],
      },
      {
        h2: "Confianza: el detalle que cierra la compra",
        body:
          "Un checkout que se ve seguro, con candado HTTPS, políticas claras de envío y devolución y datos de contacto visibles, convierte más. La gente paga cuando siente que del otro lado hay un negocio serio.",
      },
    ],
    faqs: [
      {
        q: "¿Se puede aceptar Yape y Plin directamente en Shopify?",
        a: "Sí, mediante pasarelas y configuraciones que integran billeteras locales, además de tarjeta con Niubiz o Izipay. Configuramos la combinación que mejor se adapte a tu negocio.",
      },
      {
        q: "¿Puedo ofrecer Yape, Plin y tarjeta a la vez?",
        a: "Sí, y es lo recomendable: mientras más medios ofreces, menos ventas pierdes. Lo ideal es que el cliente elija su método favorito en un checkout corto.",
      },
      {
        q: "¿Los pagos se confirman solos?",
        a: "Con pasarelas de tarjeta y billeteras integradas, la confirmación es automática. Si usas un método manual (transferencia/QR), conviene un flujo claro de verificación para no demorar el despacho.",
      },
      {
        q: "¿Ustedes configuran los pagos por mí?",
        a: "Sí. Como agencia Shopify en Perú dejamos tus pagos locales listos y probados, junto con el resto de la tienda optimizada para vender.",
      },
    ],
    related: [
      { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "Tienda con pagos Yape, Plin, Niubiz e Izipay listos." },
      { label: "Cómo crear una tienda Shopify", href: "/blog/como-crear-una-tienda-shopify-en-peru-paso-a-paso", desc: "La guía completa, paso a paso." },
      { label: "Cotiza tu tienda Shopify", href: "/tiendas-virtuales/shopify/costos", desc: "Qué define el precio de tu tienda." },
    ],
  },

  {
    slug: "mejores-apps-de-shopify-para-vender-mas-en-peru",
    title: "Las mejores apps de Shopify para vender más en Perú (2026)",
    h1: "Mejores apps de Shopify para vender más en Perú",
    description:
      "Las apps de Shopify que de verdad ayudan a vender en Perú: pagos locales, WhatsApp, reseñas, SEO, envíos y recuperación de carrito, sin llenar tu tienda de apps que la vuelven lenta.",
    excerpt:
      "No necesitas 30 apps. Estas son las categorías de apps de Shopify que sí mueven tus ventas en Perú.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Ecommerce",
    readingMin: 6,
    intro:
      "El error más común en Shopify es instalar decenas de apps que ralentizan la tienda y matan las ventas. La clave no es cantidad, sino elegir pocas apps que sumen de verdad: pagos locales, WhatsApp, reseñas, SEO y recuperación de carrito. Aquí las categorías que sí valen la pena en Perú.",
    sections: [
      {
        h2: "Menos apps, más velocidad (y más ventas)",
        body:
          "Cada app suma código que puede volver lenta tu tienda. Una tienda lenta pierde ventas y ranking. Por eso instalamos solo lo necesario y priorizamos la velocidad, que es parte de tener una [tienda optimizada para vender](/tiendas-virtuales/shopify).",
      },
      {
        h2: "Pagos y billeteras locales",
        body:
          "Lo primero: apps o pasarelas que integren Yape, Plin y tarjeta (Niubiz, Izipay). Sin los medios de pago que usa el peruano, ninguna otra app importa.",
      },
      {
        h2: "WhatsApp y atención al cliente",
        bullets: [
          "Botón de WhatsApp para resolver dudas antes de la compra.",
          "Notificaciones de pedido por WhatsApp para dar confianza.",
          "Chat o preguntas frecuentes para reducir consultas repetidas.",
        ],
      },
      {
        h2: "Reseñas y prueba social",
        body:
          "Las reseñas reales de clientes suben la confianza y la conversión. Una app de reseñas bien puesta ayuda a que el visitante indeciso se decida, siempre con opiniones auténticas.",
      },
      {
        h2: "SEO, envíos y recuperación de carrito",
        bullets: [
          "SEO: apps para editar metatítulos, datos estructurados y redirecciones.",
          "Envíos: cálculo de tarifas por zona y seguimiento del pedido.",
          "Carrito abandonado: recordatorios por correo o WhatsApp para recuperar ventas.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuántas apps debería instalar en mi tienda Shopify?",
        a: "Las mínimas necesarias. Cada app suma peso y puede volver lenta la tienda. Es mejor pocas apps bien elegidas (pagos, WhatsApp, reseñas, SEO) que decenas que ralentizan y no aportan.",
      },
      {
        q: "¿Las apps de Shopify tienen costo?",
        a: "Algunas son gratuitas y otras cobran una mensualidad. Conviene considerar ese costo recurrente al calcular el mantenimiento de tu tienda.",
      },
      {
        q: "¿Una app soluciona mi problema de ventas?",
        a: "No por sí sola. Las apps ayudan, pero vender depende sobre todo de una tienda rápida, con buenos productos, pagos locales y SEO. La app es complemento, no la base.",
      },
      {
        q: "¿Ustedes eligen las apps por mí?",
        a: "Sí. Seleccionamos solo las apps que tu negocio necesita y las configuramos para que sumen sin sacrificar velocidad.",
      },
    ],
    related: [
      { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "Tienda optimizada, con solo las apps que suman." },
      { label: "Cómo posicionar tu tienda Shopify en Google", href: "/blog/como-posicionar-una-tienda-shopify-en-google-peru", desc: "SEO para que te encuentren compradores." },
      { label: "Cuánto cuesta una tienda Shopify", href: "/tiendas-virtuales/shopify/costos", desc: "Incluye el costo recurrente de las apps." },
    ],
  },

  {
    slug: "tienda-shopify-para-ropa-y-moda-en-peru",
    title: "Tienda Shopify para ropa y moda en Perú: cómo vender online",
    h1: "Tienda Shopify para ropa y moda en Perú",
    description:
      "Cómo armar una tienda Shopify para ropa y moda en Perú: tallas y colores, fotos que venden, pagos con Yape y Plin y política de cambios para vender más y devolver menos.",
    excerpt:
      "Vender ropa online tiene sus reglas: tallas, fotos y cambios. Así se arma una tienda Shopify de moda que vende.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Ecommerce",
    readingMin: 6,
    intro:
      "La moda vende muy bien online en Perú, pero tiene detalles propios: variantes de talla y color, fotos que despiertan el deseo y una política de cambios clara. Shopify maneja todo eso sin problema si se configura bien. Aquí ves qué necesita una tienda Shopify de ropa para vender desde el primer día.",
    sections: [
      {
        h2: "Tallas, colores y variantes bien organizadas",
        body:
          "Cada prenda debe tener sus tallas y colores como variantes con stock independiente. Así el cliente elige exacto lo que quiere, tú controlas qué se vende más y evitas vender lo agotado.",
      },
      {
        h2: "Fotos que venden moda",
        bullets: [
          "Imágenes claras de cada prenda y color.",
          "Fotos de la prenda puesta, no solo en plano.",
          "Tabla de tallas para reducir dudas y cambios.",
          "Fotos ligeras y optimizadas para que la tienda cargue rápido.",
        ],
      },
      {
        h2: "Pagos y envíos pensados para moda",
        body:
          "Acepta Yape, Plin y tarjeta para no perder ventas, y define envíos claros por zona. En ropa, la confianza en el envío y el cambio es lo que cierra la compra.",
      },
      {
        h2: "Política de cambios que da confianza",
        body:
          "En moda, la duda 'y si no me queda' frena la compra. Una política de cambios y devoluciones clara y visible convierte a ese cliente indeciso. Explícala en el producto y en el checkout.",
      },
      {
        h2: "Colecciones y campañas para vender más",
        bullets: [
          "Colecciones por temporada, categoría o novedad.",
          "Destacados de 'lo más vendido' y 'nuevos ingresos'.",
          "Conexión con Instagram y WhatsApp para cerrar ventas.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Shopify maneja tallas y colores con stock por separado?",
        a: "Sí. Configuramos variantes (talla, color) con su propio stock, para que controles cada combinación y no vendas lo agotado.",
      },
      {
        q: "¿Puedo conectar mi Instagram con la tienda?",
        a: "Sí. Shopify se integra con Instagram y WhatsApp, para que lleves tus seguidores directo a la compra.",
      },
      {
        q: "¿Cómo reduzco las devoluciones de ropa?",
        a: "Con buenas fotos, tabla de tallas, descripciones claras y una política de cambios visible. Cuanta más información das, menos sorpresas y menos devoluciones.",
      },
      {
        q: "¿Cuánto cuesta una tienda Shopify de ropa?",
        a: "Depende del número de productos, variantes y diseño. Te preparamos una cotización a medida; puedes ver qué define el precio en nuestra guía de costos de una tienda Shopify.",
      },
    ],
    related: [
      { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "Tu tienda de moda, optimizada para vender." },
      { label: "Tienda Shopify de belleza y cosmética", href: "/blog/tienda-shopify-para-productos-de-belleza-y-cosmetica", desc: "Otro rubro que vende muy bien online." },
      { label: "Cuánto cuesta una tienda Shopify", href: "/tiendas-virtuales/shopify/costos", desc: "Qué define el precio de tu tienda de ropa." },
    ],
  },

  {
    slug: "tienda-shopify-para-productos-de-belleza-y-cosmetica",
    title: "Tienda Shopify para belleza y cosmética en Perú",
    h1: "Tienda Shopify para productos de belleza y cosmética",
    description:
      "Cómo vender belleza y cosmética con una tienda Shopify en Perú: catálogo por línea, kits, fichas que generan confianza, pagos locales y contenido para atraer compradores.",
    excerpt:
      "Skincare, maquillaje y cuidado personal venden online con la tienda correcta. Así se arma en Shopify.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Ecommerce",
    readingMin: 6,
    intro:
      "La belleza y la cosmética son de los rubros que más crecen en ecommerce en Perú. Skincare, maquillaje, cabello y cuidado personal venden bien si la tienda transmite confianza y facilita la recompra. Aquí ves cómo armar una tienda Shopify de belleza que convierte visitas en clientas frecuentes.",
    sections: [
      {
        h2: "Catálogo por línea y tipo de producto",
        body:
          "Organiza tu tienda por líneas (rostro, cabello, cuerpo, maquillaje) y por necesidad (hidratación, anti-edad, acné). Un catálogo ordenado ayuda a la clienta a encontrar rápido lo que busca y a descubrir productos que combinan.",
      },
      {
        h2: "Fichas que generan confianza",
        bullets: [
          "Ingredientes, modo de uso y beneficios claros.",
          "Fotos reales del producto y su textura.",
          "Reseñas auténticas de clientas.",
          "Indicaciones y advertencias donde correspondan.",
        ],
      },
      {
        h2: "Kits, packs y recompra",
        body:
          "En belleza la recompra es clave. Arma kits y packs (rutina completa, set de regalo), y facilita volver a comprar lo que se acaba. Un buen pack sube el ticket promedio y fideliza.",
      },
      {
        h2: "Pagos locales y envíos cuidados",
        body:
          "Acepta Yape, Plin y tarjeta con Niubiz o Izipay, y cuida el envío: los cosméticos requieren empaque protegido. Un pedido que llega bien empacado genera reseñas positivas y recompra.",
      },
      {
        h2: "Contenido que atrae compradoras",
        body:
          "Un blog o guías ('cómo armar tu rutina', 'qué serum para tu piel') atrae a quien investiga antes de comprar y la acerca a tus productos. Es SEO que además educa y vende. Podemos dejar tu tienda lista para eso como tu [agencia Shopify en Perú](/tiendas-virtuales/shopify).",
      },
    ],
    faqs: [
      {
        q: "¿Shopify sirve para vender cosméticos y skincare?",
        a: "Sí. Permite organizar catálogos por línea, armar kits, manejar variantes y aceptar pagos locales. Es una plataforma ideal para el rubro belleza.",
      },
      {
        q: "¿Puedo vender kits o packs de productos?",
        a: "Sí. Configuramos kits y packs para subir el ticket promedio y facilitar la compra de rutinas completas.",
      },
      {
        q: "¿Cómo genero confianza en cosmética?",
        a: "Con fichas completas (ingredientes, uso, beneficios), fotos reales, reseñas auténticas y una política de cambios clara. La confianza es lo que convierte en un rubro sensible como belleza.",
      },
      {
        q: "¿Cuánto cuesta una tienda Shopify de belleza?",
        a: "Depende del tamaño del catálogo y el diseño. Te damos una cotización a medida; revisa qué define el precio en nuestra guía de costos.",
      },
    ],
    related: [
      { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "Tu tienda de belleza, optimizada para vender." },
      { label: "Tienda Shopify para ropa y moda", href: "/blog/tienda-shopify-para-ropa-y-moda-en-peru", desc: "Otro rubro fuerte en ecommerce." },
      { label: "Cuánto cuesta una tienda Shopify", href: "/tiendas-virtuales/shopify/costos", desc: "Qué define el precio de tu tienda." },
    ],
  },

  {
    slug: "shopify-para-pymes-en-peru-vale-la-pena",
    title: "Shopify para pymes en Perú: ¿vale la pena? (2026)",
    h1: "Shopify para pymes en Perú: ¿vale la pena?",
    description:
      "¿Vale la pena Shopify para una pyme en Perú? Ventajas, costos reales, cuándo conviene frente a WooCommerce o marketplaces y cómo empezar sin sobreinvertir.",
    excerpt:
      "Si tienes una pyme y evalúas Shopify, esto es lo que debes sopesar antes de invertir: pros, costos y cuándo conviene.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Ecommerce",
    readingMin: 6,
    intro:
      "Para una pyme peruana, Shopify puede ser la forma más rápida de empezar a vender online sin pelearse con servidores. Pero tiene una mensualidad y no siempre es la única opción. Aquí ves cuándo Shopify vale la pena para una pyme, cuánto implica de verdad y cuándo conviene mirar otras alternativas.",
    sections: [
      {
        h2: "Qué gana una pyme con Shopify",
        bullets: [
          "Lanza rápido y sin preocuparte por hosting ni seguridad.",
          "Panel simple: administras la tienda sin saber programar.",
          "Escala en campañas (Cyber, Navidad) sin caídas.",
          "Pagos locales (Yape, Plin, tarjeta) listos para Perú.",
        ],
      },
      {
        h2: "Los costos reales para una pyme",
        body:
          "Shopify tiene tres costos: el plan mensual, el desarrollo de la tienda y las comisiones de pago. Para una pyme lo importante es dimensionar bien y no sobreinvertir al inicio. Desglosamos cada parte en la guía de [cuánto cuesta una tienda Shopify](/tiendas-virtuales/shopify/costos).",
      },
      {
        h2: "Shopify vs WooCommerce vs marketplace",
        bullets: [
          "Shopify: rapidez y cero dolores técnicos, con mensualidad.",
          "WooCommerce: sin mensualidad de plataforma, más control, requiere mantenimiento.",
          "Marketplace (Mercado Libre): tráfico inmediato, pero comisiones y sin marca propia.",
        ],
      },
      {
        h2: "Cuándo SÍ conviene Shopify para tu pyme",
        body:
          "Si quieres tu propia tienda con marca, vender directo sin comisiones de marketplace, lanzar rápido y no lidiar con servidores, Shopify encaja muy bien. Es ideal para pymes que ya venden por redes o WhatsApp y quieren dar el salto a un canal propio.",
      },
      {
        h2: "Cómo empezar sin sobreinvertir",
        body:
          "Empieza con un plan acorde a tu tamaño, un catálogo acotado y una tienda optimizada para vender, y crece por etapas según los resultados. No necesitas todo de golpe: necesitas vender bien desde el inicio.",
      },
    ],
    faqs: [
      {
        q: "¿Shopify es muy caro para una pyme?",
        a: "Tiene una mensualidad, pero para muchas pymes se paga con las ventas que habilita. La clave es dimensionar bien el plan y el desarrollo, y no sobreinvertir al inicio.",
      },
      {
        q: "¿Conviene más Shopify o WooCommerce para una pyme?",
        a: "Depende. Shopify te ahorra tiempo y preocupaciones técnicas; WooCommerce evita la mensualidad de plataforma a cambio de mantenimiento. En la cotización te recomendamos la correcta para tu caso.",
      },
      {
        q: "¿Puedo empezar pequeño y crecer?",
        a: "Sí. Lo recomendable es lanzar con lo esencial y escalar por etapas: más productos, más integraciones y más campañas según crece tu negocio.",
      },
      {
        q: "¿Vale la pena si ya vendo por WhatsApp e Instagram?",
        a: "Mucho. Una tienda Shopify te da un canal propio, ordena tus ventas y te hace ver más profesional, sin dejar de usar redes y WhatsApp para cerrar.",
      },
    ],
    related: [
      { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "Tu tienda de pyme, optimizada para vender." },
      { label: "Cuánto cuesta una tienda Shopify", href: "/tiendas-virtuales/shopify/costos", desc: "Los costos reales, sin sorpresas." },
      { label: "Shopify vs WooCommerce", href: "/blog/shopify-vs-woocommerce", desc: "Compara las dos plataformas líderes." },
    ],
  },

  {
    slug: "errores-comunes-al-crear-una-tienda-shopify",
    title: "Errores comunes al crear una tienda Shopify (y cómo evitarlos)",
    h1: "Errores comunes al crear una tienda Shopify",
    description:
      "Los errores más comunes al crear una tienda Shopify en Perú: exceso de apps, tienda lenta, sin SEO, pagos incompletos, mal móvil y fichas pobres. Cómo evitarlos y vender más.",
    excerpt:
      "Estos errores hunden las ventas de muchas tiendas Shopify. Detéctalos a tiempo y evita perder clientes.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "Ecommerce",
    readingMin: 6,
    intro:
      "Muchas tiendas Shopify no venden no por falta de tráfico, sino por errores evitables: exceso de apps que la vuelven lenta, cero SEO, pagos incompletos o un móvil descuidado. Aquí están los errores más comunes al crear una tienda Shopify en Perú y cómo evitarlos para no dejar ventas sobre la mesa.",
    sections: [
      {
        h2: "Instalar demasiadas apps y volverla lenta",
        body:
          "Cada app suma código. Una tienda cargada de apps carga lento, y una tienda lenta pierde ventas y ranking. El error es creer que más apps = más ventas. La solución: solo las apps necesarias y un tema ligero.",
      },
      {
        h2: "No configurar pagos locales completos",
        body:
          "Si falta Yape, Plin o tarjeta, pierdes ventas en el checkout. El error clásico es lanzar con un solo medio de pago. Configura las pasarelas locales completas, como explicamos en [vender con Yape y Plin en Shopify](/blog/como-vender-con-yape-y-plin-en-shopify).",
      },
      {
        h2: "Olvidar el SEO desde el inicio",
        bullets: [
          "Fichas con títulos y descripciones copiados del proveedor.",
          "Categorías vacías, sin texto que Google entienda.",
          "Sin metatítulos ni datos estructurados.",
          "URLs desordenadas y sin redirecciones al migrar.",
        ],
      },
      {
        h2: "Descuidar la experiencia móvil",
        body:
          "La mayoría compra desde el celular. Una tienda que se ve mal o es difícil de usar en el móvil pierde ventas aunque el producto sea bueno. Siempre hay que probar la tienda en el celular antes de lanzar.",
      },
      {
        h2: "Fichas pobres y poca confianza",
        bullets: [
          "Fotos de baja calidad o muy pesadas.",
          "Descripciones cortas que no responden dudas.",
          "Sin información de envíos, tiempos ni devoluciones.",
          "Sin datos de contacto ni WhatsApp visibles.",
        ],
      },
      {
        h2: "Lanzar y no medir ni mejorar",
        body:
          "El último error es dejar la tienda igual para siempre. Una tienda que vende se ajusta con datos: qué se ve, qué se vende, dónde se cae el checkout. Medir y mejorar es parte de tener una tienda viva.",
      },
    ],
    faqs: [
      {
        q: "¿Por qué mi tienda Shopify no vende aunque tiene visitas?",
        a: "Suele ser por velocidad lenta, pagos incompletos, mal móvil o poca confianza en las fichas. Son errores frecuentes y evitables; revisarlos uno a uno normalmente recupera ventas.",
      },
      {
        q: "¿Cuántas apps son demasiadas?",
        a: "No hay número mágico, pero si tu tienda carga lento por las apps, ya son demasiadas. Mejor pocas apps útiles que muchas que ralentizan.",
      },
      {
        q: "¿Puedo corregir estos errores en una tienda ya lanzada?",
        a: "Sí. Hacemos auditorías de tiendas Shopify existentes: optimizamos velocidad, SEO, pagos y conversión sin empezar de cero.",
      },
      {
        q: "¿Cómo evito estos errores desde el inicio?",
        a: "Trabajando con una tienda optimizada para vender desde el lanzamiento: rápida, con SEO, pagos locales y buena experiencia móvil. Eso es lo que entregamos como agencia Shopify en Perú.",
      },
    ],
    related: [
      { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "Una tienda sin estos errores, lista para vender." },
      { label: "Cómo posicionar tu tienda en Google", href: "/blog/como-posicionar-una-tienda-shopify-en-google-peru", desc: "Corrige el error de no hacer SEO." },
      { label: "Migrar a Shopify sin perder SEO", href: "/tiendas-virtuales/shopify/migracion", desc: "Si tu tienda actual está mal armada." },
    ],
  },

  {
    slug: "como-posicionar-una-tienda-shopify-en-google-peru",
    title: "Cómo posicionar una tienda Shopify en Google (Perú)",
    h1: "Cómo posicionar una tienda Shopify en Google",
    description:
      "SEO para Shopify en Perú: cómo posicionar tu tienda en Google con fichas optimizadas, categorías con texto, velocidad, contenido y datos estructurados para atraer compradores.",
    excerpt:
      "Tener una tienda Shopify no basta si nadie la encuentra. Así se posiciona en Google, paso a paso.",
    datePublished: "2026-07-08",
    dateModified: "2026-07-08",
    category: "SEO",
    readingMin: 7,
    intro:
      "Una tienda Shopify invisible en Google no vende. El SEO para Shopify hace que tus productos aparezcan cuando alguien busca lo que ofreces, con intención de comprar. Estos son los pasos para posicionar tu tienda Shopify en Perú: fichas optimizadas, categorías con texto, velocidad, contenido y datos estructurados.",
    sections: [
      {
        h2: "1. Optimiza las fichas de producto",
        bullets: [
          "Títulos y descripciones únicas con la palabra que la gente busca.",
          "Nada de textos copiados del proveedor: Google los ignora.",
          "Imágenes con texto alternativo (alt) y buen peso para cargar rápido.",
          "Metatítulo y meta descripción editados en cada producto.",
        ],
      },
      {
        h2: "2. Dale texto a tus categorías y colecciones",
        body:
          "Las páginas de colección son de las que más posicionan en ecommerce, pero suelen estar vacías. Agrégales un texto propio que explique qué encuentra el cliente ahí: Google lo usa para entender y rankear tu tienda.",
      },
      {
        h2: "3. Cuida la velocidad y el móvil",
        body:
          "La velocidad es factor de ranking y de ventas. Un tema ligero, imágenes optimizadas y pocas apps hacen que la tienda cargue en segundos. Y como la mayoría busca y compra desde el celular, el móvil manda.",
      },
      {
        h2: "4. Suma contenido que atraiga antes de la compra",
        body:
          "Un blog que responde dudas ('cuál elegir', 'cómo cuidar', 'cuánto cuesta') atrae visitas que aún no compran y las acerca a tus productos. Es la diferencia entre esperar clientes y salir a buscarlos.",
      },
      {
        h2: "5. Datos estructurados y arquitectura",
        body:
          "Marcar productos, precios y preguntas con datos estructurados ayuda a que Google muestre tu tienda con más detalle (rich results). Una arquitectura ordenada de URLs y enlaces internos también facilita el posicionamiento.",
      },
      {
        h2: "6. Enlaces internos y autoridad",
        body:
          "Enlaza tus fichas desde el blog y las colecciones, y consigue menciones de otros sitios con el tiempo. Todo esto suma autoridad. Si quieres una tienda optimizada para SEO desde el inicio, somos [agencia Shopify en Perú](/tiendas-virtuales/shopify) y la entregamos lista para posicionar.",
      },
    ],
    faqs: [
      {
        q: "¿Shopify es bueno para SEO?",
        a: "Sí, Shopify tiene buenas bases de SEO, pero hay que trabajarlo: fichas y categorías optimizadas, velocidad, contenido y datos estructurados. La plataforma ayuda, pero el posicionamiento depende de cómo la optimices.",
      },
      {
        q: "¿En cuánto tiempo veo resultados de SEO?",
        a: "El SEO es progresivo: los primeros movimientos suelen verse en semanas y los resultados sólidos en algunos meses, según la competencia de tus palabras clave.",
      },
      {
        q: "¿Necesito un blog para posicionar mi tienda?",
        a: "Ayuda mucho. Un blog que responde dudas atrae visitas que aún no compran y las lleva hacia tus productos, ampliando el tráfico más allá de las búsquedas de compra directa.",
      },
      {
        q: "¿Ustedes hacen el SEO de mi tienda Shopify?",
        a: "Sí. Entregamos la tienda optimizada para SEO desde el inicio y podemos encargarnos del trabajo continuo de posicionamiento.",
      },
    ],
    related: [
      { label: "Agencia Shopify Perú", href: "/tiendas-virtuales/shopify", desc: "Tienda optimizada para SEO desde el inicio." },
      { label: "Mejores apps de Shopify", href: "/blog/mejores-apps-de-shopify-para-vender-mas-en-peru", desc: "Incluye apps de SEO que sí sirven." },
      { label: "Migrar a Shopify sin perder SEO", href: "/tiendas-virtuales/shopify/migracion", desc: "Cambia de plataforma sin perder ranking." },
    ],
  },
  {
    slug: "necesito-una-app-movil-o-una-pagina-web-para-mi-negocio",
    title: "¿Necesito una App Móvil o una Página Web para mi Negocio? (2026)",
    h1: "¿App móvil o página web? Qué necesita tu negocio",
    description:
      "¿App o página web para tu negocio en Perú? Diferencias reales, cuándo conviene cada una y cómo decidir sin gastar de más. Guía práctica 2026 para empresas y pymes.",
    excerpt:
      "Antes de invertir en una app, lee esto. Para la mayoría de negocios en Perú una página web rinde más y cuesta menos. Aquí cómo saber qué necesitas de verdad.",
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
    category: "Software",
    readingMin: 7,
    intro:
      "Para la mayoría de negocios en Perú, la respuesta es empezar por una página web: cuesta menos, aparece en Google y llega a más gente sin que nadie descargue nada. Una app móvil conviene cuando necesitas uso frecuente, notificaciones o funciones que el navegador no ofrece. Aquí te ayudamos a decidir sin gastar de más.",
    sections: [
      {
        h2: "La diferencia real entre una app y una página web",
        body:
          "Una página web se abre en el navegador (Chrome, Safari) desde cualquier celular o computadora, sin instalar nada, y Google puede mostrarla en sus resultados. Una app móvil se descarga desde Play Store o App Store y vive en el teléfono del usuario. Esa diferencia lo cambia todo: alcance, costo y para qué sirve cada una.",
        bullets: [
          "Web: la encuentran en Google, entran con un clic, funciona en todos los dispositivos.",
          "App: hay que convencer al usuario de descargarla, pero luego la tiene siempre a mano.",
          "Web: un solo desarrollo sirve para todos. App: normalmente Android y iPhone requieren más trabajo.",
        ],
      },
      {
        h2: "Cuándo te conviene una página web (la mayoría de los casos)",
        body:
          "Si tu objetivo es que te encuentren clientes nuevos, mostrar tus servicios, generar cotizaciones o vender en línea, una página web es el camino: es lo que la gente busca en Google y lo que puede posicionar. La gran mayoría de pymes y empresas empieza (y crece) con una web bien hecha. Si aún no la tienes o quieres renovarla, revisa nuestro [diseño de páginas web en Perú](/diseno-de-paginas-web); y si vas a vender productos, una [tienda virtual](/tiendas-virtuales) es la base.",
      },
      {
        h2: "Cuándo tiene sentido una app móvil",
        body:
          "Una app se justifica cuando el usuario va a volver muchas veces y necesitas algo que la web no da tan bien: notificaciones push, uso sin internet, acceso al hardware del teléfono (cámara, GPS, sensores) o una experiencia muy rápida para un público fiel. Delivery con seguimiento, fidelización, apps internas para tu equipo o plataformas de uso diario son buenos candidatos.",
        bullets: [
          "Los usuarios entran a diario o varias veces por semana.",
          "Necesitas enviar notificaciones o trabajar sin conexión.",
          "Requieres cámara, GPS u otras funciones del dispositivo.",
          "Ya tienes una base de clientes fieles que descargará la app.",
        ],
      },
      {
        h2: "La opción intermedia: la aplicación web (PWA)",
        body:
          "No siempre hay que elegir. Una aplicación web a medida (o PWA) se comporta como una app —se puede instalar desde el navegador y enviar notificaciones— pero sin depender de las tiendas y con un solo desarrollo para todos los dispositivos. Es una gran forma de tener lo mejor de ambos mundos con menos costo. Ese tipo de plataformas es parte de nuestro [desarrollo de software y aplicaciones a medida](/desarrollo-de-software-a-medida).",
      },
      {
        h2: "Cómo decidir sin equivocarte",
        body:
          "Antes de invertir, responde: ¿mi prioridad es que me encuentren clientes nuevos, o dar servicio a clientes que ya tengo y vuelven seguido? Si es lo primero, empieza por la web. Si es lo segundo y de uso frecuente, evalúa una app o una PWA. Y si no estás seguro, lo más rentable es partir de una web sólida y sumar la app cuando el negocio lo pida. ¿Quieres que analicemos tu caso? [Solicita una cotización sin compromiso](/cotizacion) y te decimos qué te conviene.",
      },
    ],
    faqs: [
      {
        q: "¿Una app aparece en Google como una página web?",
        a: "No de la misma forma. Las páginas web posicionan en la búsqueda de Google; las apps se encuentran sobre todo dentro de Play Store o App Store. Por eso, para captar clientes nuevos que te buscan, la web suele rendir mucho más.",
      },
      {
        q: "¿Cuánto cuesta una app frente a una página web?",
        a: "Depende del alcance, pero una app suele requerir más trabajo que una web equivalente, sobre todo si debe funcionar en Android y iPhone. Lo mejor es definir qué necesitas y pedir una cotización: así comparas con números reales y no de forma general.",
      },
      {
        q: "¿Puedo empezar con una web y hacer la app más adelante?",
        a: "Sí, y suele ser lo más inteligente. Una web bien construida valida tu idea, te trae clientes y, cuando el volumen lo justifique, se puede desarrollar la app o convertir parte de la web en una aplicación (PWA).",
      },
    ],
    related: [
      { label: "Software y aplicaciones a medida", href: "/desarrollo-de-software-a-medida", desc: "Plataformas y aplicaciones web hechas para tu operación." },
      { label: "Diseño de páginas web en Perú", href: "/diseno-de-paginas-web", desc: "La base para que te encuentren y te contraten." },
      { label: "App nativa, híbrida o web: cuál elegir", href: "/blog/aplicacion-nativa-hibrida-o-web-cual-elegir", desc: "Si ya decidiste una app, este es el siguiente paso." },
    ],
  },
  {
    slug: "aplicacion-nativa-hibrida-o-web-cual-elegir",
    title: "Aplicación Nativa, Híbrida o Web (PWA): Cuál Elegir en 2026",
    h1: "App nativa, híbrida o web: cuál conviene para tu proyecto",
    description:
      "Nativa, híbrida o PWA: diferencias, ventajas y qué determina el costo y el plazo de una app en Perú. Aprende a elegir el tipo de aplicación correcto para tu negocio.",
    excerpt:
      "No todas las apps se hacen igual. Nativa, híbrida o web: cada camino cambia el costo, el plazo y el rendimiento. Aquí cuál conviene según tu proyecto.",
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
    category: "Software",
    readingMin: 7,
    intro:
      "Cuando decides hacer una app, la siguiente pregunta es qué tipo: nativa, híbrida o web (PWA). No hay una mejor en absoluto; hay una mejor para tu caso. La elección define el rendimiento, el costo y el tiempo de desarrollo. Aquí te explicamos las tres en simple para que elijas con criterio.",
    sections: [
      {
        h2: "Los tres caminos para crear una app",
        body:
          "Toda aplicación cae en una de tres categorías. La nativa se desarrolla específicamente para Android o para iPhone. La híbrida (o multiplataforma) usa una sola base de código para ambos sistemas. La web/PWA corre en el navegador y se puede instalar sin pasar por las tiendas. Entender la diferencia te evita pagar de más o quedarte corto.",
      },
      {
        h2: "App nativa: máximo rendimiento",
        body:
          "Se construye con las herramientas propias de cada sistema. Ofrece la mejor velocidad y el acceso más completo al teléfono (cámara, sensores, notificaciones). La contraparte: normalmente implica dos desarrollos (Android e iOS), así que suele costar y tomar más tiempo. Conviene cuando el rendimiento es crítico o usas funciones avanzadas del dispositivo.",
      },
      {
        h2: "App híbrida o multiplataforma: equilibrio",
        body:
          "Con un solo código llegas a Android e iPhone a la vez, lo que reduce costo y plazo frente a la nativa manteniendo una buena experiencia. Es la opción más común para negocios que quieren estar en ambas tiendas sin duplicar la inversión. Para la mayoría de proyectos comerciales es el punto de equilibrio entre costo y calidad.",
      },
      {
        h2: "Aplicación web y PWA: la más ágil",
        body:
          "Una PWA es una aplicación que vive en el navegador pero se instala y envía notificaciones como una app, sin depender de Play Store ni App Store. Es la vía más rápida y económica de llegar a todos los dispositivos con un solo desarrollo, e ideal para validar una idea o para plataformas de gestión. Este tipo de soluciones forma parte de nuestro [desarrollo de software y aplicaciones a medida](/desarrollo-de-software-a-medida).",
        bullets: [
          "Un solo desarrollo para todos los dispositivos.",
          "No requiere aprobación de las tiendas de apps.",
          "Se actualiza al instante para todos los usuarios.",
          "Menor costo de arranque para salir al mercado.",
        ],
      },
      {
        h2: "Qué determina el costo y el plazo (y cómo elegir)",
        body:
          "Más que el tipo de app, el precio lo definen las funciones: cuántas pantallas, si hay pagos, integraciones con otros sistemas, panel de administración y si debe funcionar sin internet. Nuestra recomendación práctica: si buscas rapidez y presupuesto ajustado, empieza por una PWA; si necesitas máximo rendimiento y funciones avanzadas, evalúa nativa o híbrida. Cuéntanos qué quieres lograr y [te preparamos una cotización a medida](/cotizacion), sin compromiso.",
      },
    ],
    faqs: [
      {
        q: "¿Qué tipo de app es más barata?",
        a: "Por lo general la web/PWA, porque es un solo desarrollo para todos los dispositivos y no pasa por las tiendas. La híbrida queda en un punto medio y la nativa suele ser la de mayor inversión por requerir Android e iOS por separado.",
      },
      {
        q: "¿Una PWA se puede instalar en el celular?",
        a: "Sí. Desde el navegador el usuario puede agregarla a la pantalla de inicio y usarla como una app, incluso con notificaciones. La diferencia es que no necesita descargarse desde Play Store ni App Store.",
      },
      {
        q: "¿Cuál me conviene si aún estoy validando mi idea?",
        a: "La web/PWA. Te permite salir al mercado más rápido y con menos inversión, medir si la gente la usa y, si funciona, escalar luego a una app híbrida o nativa.",
      },
    ],
    related: [
      { label: "Software y aplicaciones a medida", href: "/desarrollo-de-software-a-medida", desc: "Desarrollamos la aplicación al tipo y necesidad de tu negocio." },
      { label: "¿App móvil o página web?", href: "/blog/necesito-una-app-movil-o-una-pagina-web-para-mi-negocio", desc: "Primero decide si realmente necesitas una app." },
      { label: "Sistema de gestión (ERP/CRM)", href: "/sistemas/gestion-erp-crm", desc: "Cuando tu app es en realidad una plataforma interna." },
    ],
  },
  {
    slug: "pagina-web-a-medida-vs-plantilla-wordpress-wix",
    title: "Página Web a Medida vs Plantilla (WordPress, Wix): Qué Conviene",
    h1: "Página web a medida vs plantilla: qué conviene para tu empresa",
    description:
      "Plantilla (WordPress, Wix) o web a medida: diferencias en diseño, velocidad, SEO y crecimiento. Descubre qué conviene a tu empresa en Perú antes de invertir.",
    excerpt:
      "Una plantilla es rápida y barata; una web a medida es única y escalable. Aquí las diferencias reales en SEO, velocidad y crecimiento para que elijas bien.",
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
    category: "Diseño web",
    readingMin: 7,
    intro:
      "Al crear tu página web tienes dos caminos: una plantilla prearmada (WordPress, Wix, plantillas de Shopify) o un desarrollo a medida. La plantilla es más rápida y económica de arrancar; la web a medida es única, más veloz y crece contigo. Aquí ves las diferencias reales en diseño, SEO y rendimiento para decidir con criterio.",
    sections: [
      {
        h2: "Qué es una plantilla y qué es una web a medida",
        body:
          "Una plantilla es un diseño ya hecho que rellenas con tu contenido: sales rápido y a bajo costo, pero compartes estructura con miles de sitios y dependes de lo que la plantilla permita. Una web a medida se diseña y programa desde cero para tu marca y tus objetivos: control total del diseño, la velocidad y las funciones. Cada una encaja en un momento distinto del negocio.",
      },
      {
        h2: "Ventajas y límites de las plantillas",
        body:
          "Las plantillas sirven para empezar con poco presupuesto o para proyectos simples. El problema aparece al crecer: suelen cargar más lento por el código de más, se parecen a la competencia y te topas con límites cuando necesitas algo específico. Muchas empresas terminan rehaciendo el sitio al poco tiempo, gastando dos veces.",
        bullets: [
          "A favor: costo inicial bajo y puesta en marcha rápida.",
          "En contra: diseño genérico y poco diferenciado.",
          "En contra: más lentas por el peso extra que arrastran.",
          "En contra: límites al querer funciones o integraciones a medida.",
        ],
      },
      {
        h2: "Cuándo vale la pena una web a medida",
        body:
          "Cuando tu web es un canal serio de clientes y quieres diferenciarte, cargar rápido y no chocar con límites, el desarrollo a medida rinde más. Cada elemento existe por una razón —convertir visitas en contactos— y el sitio está preparado para crecer. Así trabajamos en Websy: revisa nuestro [diseño de páginas web a medida](/diseno-de-paginas-web), y si tu proyecto incluye funciones complejas, lo abordamos como [software a medida](/desarrollo-de-software-a-medida).",
      },
      {
        h2: "El impacto en SEO y velocidad (donde más se nota)",
        body:
          "Google premia los sitios rápidos y bien construidos. Una plantilla cargada de funciones que no usas suele pesar de más y perjudicar la velocidad, un factor directo de posicionamiento. Una web a medida se optimiza desde el código para cargar rápido y darle a Google una base limpia. Si quieres que además atraiga clientes por búsqueda, súmale nuestro [servicio de SEO en Perú](/seo).",
      },
      {
        h2: "Cómo decidir según tu momento",
        body:
          "Si estás validando una idea con presupuesto mínimo, una plantilla puede servir para arrancar. Si tu web es clave para vender, transmitir profesionalismo y crecer, invierte en un desarrollo a medida y evita rehacerlo en un año. ¿No sabes en qué punto estás? [Cuéntanos tu proyecto](/cotizacion) y te recomendamos el camino más rentable, sin compromiso.",
      },
    ],
    faqs: [
      {
        q: "¿Una web con plantilla posiciona en Google?",
        a: "Puede posicionar, pero parte con desventaja si carga lento o tiene código de más. La velocidad y una base técnica limpia influyen en el ranking, y ahí una web a medida bien optimizada suele rendir mejor.",
      },
      {
        q: "¿Es mucho más cara una web a medida?",
        a: "El costo inicial es mayor que el de una plantilla, pero evita rehacer el sitio al crecer y suele convertir mejor. Conviene verlo como inversión: define tus objetivos y pide una cotización para comparar con números reales.",
      },
      {
        q: "¿Puedo migrar de una plantilla a una web a medida sin perder mi posicionamiento?",
        a: "Sí, con una migración planificada (redirecciones y estructura cuidada) se conserva el SEO ganado. Es justamente lo que se debe evitar improvisar para no perder tráfico.",
      },
    ],
    related: [
      { label: "Diseño de páginas web en Perú", href: "/diseno-de-paginas-web", desc: "Webs a medida, rápidas y pensadas para convertir." },
      { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Cuando tu web necesita funciones a medida." },
      { label: "Cuánto cuesta una página web en Perú", href: "/blog/cuanto-cuesta-una-pagina-web-en-peru", desc: "Qué factores definen el precio de tu web." },
    ],
  },
  {
    slug: "como-automatizar-los-procesos-de-tu-empresa",
    title: "Cómo Automatizar los Procesos de tu Empresa con un Sistema a Medida",
    h1: "Cómo automatizar los procesos de tu empresa",
    description:
      "Deja las hojas de cálculo y el trabajo manual: qué procesos automatizar (inventario, ventas, facturación, reportes) y cómo un sistema a medida ahorra horas cada semana.",
    excerpt:
      "Si tu equipo pierde horas en tareas manuales y errores de Excel, es momento de automatizar. Aquí qué procesos delegar a un sistema y por dónde empezar.",
    datePublished: "2026-07-27",
    dateModified: "2026-07-27",
    category: "Software",
    readingMin: 7,
    intro:
      "Automatizar es dejar que un sistema haga el trabajo repetitivo que hoy hace tu equipo a mano: registrar ventas, controlar stock, emitir comprobantes o armar reportes. El resultado son menos errores, menos horas perdidas y datos al instante para decidir. Aquí ves qué procesos conviene automatizar primero y cómo empezar sin frenar tu operación.",
    sections: [
      {
        h2: "Señales de que tu empresa ya necesita automatizar",
        body:
          "No hace falta ser una gran empresa. Si te identificas con varias de estas señales, la automatización ya te ahorraría dinero: tu información vive en varios Excel que nadie termina de cuadrar, cometes errores por cargar datos a mano, no sabes tu stock real en el momento, o dependes de una sola persona que 'sabe cómo va todo'. Eso frena el crecimiento y cuesta caro.",
        bullets: [
          "Reprocesas datos entre planillas que no se hablan entre sí.",
          "Errores de digitación en ventas, stock o facturación.",
          "No tienes reportes al día para decidir.",
          "El equipo repite las mismas tareas manuales cada día.",
        ],
      },
      {
        h2: "Qué procesos se pueden automatizar",
        body:
          "Casi cualquier tarea repetitiva y basada en reglas es candidata. Los que más impacto dan de arranque suelen ser el control de inventario, las ventas y la facturación, y los reportes de gestión. Cada uno se puede resolver con un módulo a medida que encaja con tu forma de trabajar.",
        bullets: [
          "Inventario y stock en tiempo real, incluso multi-almacén: ver [sistema de inventario](/sistemas/inventario).",
          "Ventas y facturación electrónica en un solo flujo: ver [ventas y facturación](/sistemas/ventas-y-facturacion).",
          "Clientes, seguimiento y gestión con un [ERP/CRM a medida](/sistemas/gestion-erp-crm).",
          "Reportes automáticos y alertas para no revisar todo a mano.",
        ],
      },
      {
        h2: "Cómo funciona un sistema a medida",
        body:
          "A diferencia de un software enlatado, un sistema a medida se construye alrededor de tu proceso real: se adapta a cómo trabajas, no al revés. Es una plataforma web segura a la que tu equipo accede desde cualquier dispositivo, sin instalar nada, y que puede integrarse con las herramientas que ya usas. Así se ve nuestro [desarrollo de software a medida](/desarrollo-de-software-a-medida).",
      },
      {
        h2: "Los beneficios que vas a notar",
        body:
          "Automatizar no es un lujo tecnológico: es recuperar tiempo y reducir pérdidas. Lo que las empresas notan primero es que el equipo deja de apagar incendios y se enfoca en vender y atender.",
        bullets: [
          "Horas recuperadas cada semana al eliminar tareas manuales.",
          "Menos errores costosos en stock, cobros y comprobantes.",
          "Decisiones con datos reales y al día, no con suposiciones.",
          "Una operación que puede crecer sin duplicar personal.",
        ],
      },
      {
        h2: "Por dónde empezar",
        body:
          "No hace falta automatizar todo de golpe. Lo más rentable es empezar por el proceso que hoy te genera más errores o te quita más tiempo, y crecer desde ahí. Si nos cuentas cómo trabajas, identificamos ese primer paso y [te preparamos una propuesta a medida](/cotizacion), sin compromiso.",
      },
    ],
    faqs: [
      {
        q: "¿La automatización es solo para empresas grandes?",
        a: "No. Muchas pymes son las que más ganan, porque cada hora y cada error pesan más. Se puede empezar por un solo proceso (por ejemplo, inventario o facturación) con una inversión acorde al tamaño del negocio.",
      },
      {
        q: "¿Tengo que cambiar todos mis sistemas actuales?",
        a: "No necesariamente. Un sistema a medida puede integrarse con herramientas que ya usas y reemplazar solo lo que hoy haces a mano. La idea es sumar orden, no complicarte la operación.",
      },
      {
        q: "¿Cuánto tiempo toma implementar un sistema así?",
        a: "Depende del alcance, pero se puede arrancar por módulos para ver resultados pronto y seguir ampliando. Lo definimos contigo según qué proceso automatizar primero.",
      },
    ],
    related: [
      { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Sistemas web que automatizan tu operación." },
      { label: "Sistema de inventario y stock", href: "/sistemas/inventario", desc: "Controla entradas, salidas y almacenes en tiempo real." },
      { label: "Cuándo dejar el Excel", href: "/blog/sistema-de-gestion-para-pymes-cuando-dejar-el-excel", desc: "Las señales de que tu negocio ya superó las planillas." },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
