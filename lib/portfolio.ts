// lib/portfolio.ts
// Proyectos reales de Websy grabados en video (public/video/websy-XX-*.mp4).
// Las descripciones dicen solo lo que se ve en la web entregada: nada de cifras
// de ventas ni resultados que no estén documentados.

export type Proyecto = {
  nombre: string;
  /** Rubro corto, sale como etiqueta sobre el título. */
  rubro: string;
  /** Una o dos frases: qué es el negocio y qué resuelve su web. Texto rastreable. */
  desc: string;
  /** Ruta en /public. Videos 1920×1080, sin audio. */
  video: string;
};

export type Portafolio = {
  eyebrow: string;
  h2: string;
  intro: string;
  proyectos: Proyecto[];
};

export const PORTAFOLIO_TIENDAS: Portafolio = {
  eyebrow: "Portafolio · Tiendas virtuales",
  h2: "Tiendas virtuales que hemos desarrollado",
  intro:
    "Así se ven por dentro algunas de las tiendas online que hemos creado para negocios peruanos: catálogo por categorías, fichas de producto, carrito y pago, todo pensado para comprar desde el celular.",
  proyectos: [
    {
      nombre: "Perlita Jeans",
      rubro: "Moda femenina",
      desc: "Tienda virtual de jeans y shorts para damas, con catálogo por modelo, precios a la vista y compra en pocos pasos.",
      video: "/video/websy-02-perlita-jeans-16x9.mp4",
    },
    {
      nombre: "Capri Moda",
      rubro: "Moda y accesorios",
      desc: "Ecommerce de ropa con categorías destacadas (abrigos, blusas, tops) y productos destacados para guiar la compra.",
      video: "/video/websy-07-capri-moda-16x9.mp4",
    },
    {
      nombre: "Mercería Karile",
      rubro: "Mercería y manualidades",
      desc: "Tienda online de lanas, hilos y kits de bordado, con categorías visuales y un catálogo amplio fácil de recorrer.",
      video: "/video/websy-06-merceria-karile-16x9.mp4",
    },
    {
      nombre: "Let's Eat Perú",
      rubro: "Alimentos importados",
      desc: "Tienda de dulces, ramen y comida coreana con productos por categoría y botón de compra directo en cada ficha.",
      video: "/video/websy-04-lets-eat-peru-16x9.mp4",
    },
  ],
};

export const PORTAFOLIO_WEBS: Portafolio = {
  eyebrow: "Portafolio · Páginas web",
  h2: "Páginas web que hemos diseñado",
  intro:
    "Webs corporativas para empresas de servicios en Perú: presentan lo que hacen, muestran su experiencia y llevan al visitante a pedir una cotización por formulario o WhatsApp.",
  proyectos: [
    {
      nombre: "Grúas Sagitario",
      rubro: "Izaje y transporte de carga",
      desc: "Web corporativa con cifras de trayectoria, flota y servicios de izaje, pensada para generar confianza en clientes industriales.",
      video: "/video/websy-01-gruas-sagitario-16x9.mp4",
    },
    {
      nombre: "Teccons SAC",
      rubro: "Construcción",
      desc: "Página web de constructora con proyectos ejecutados, experiencia de la empresa y llamadas a cotizar su obra.",
      video: "/video/websy-08-teccons-sac-16x9.mp4",
    },
    {
      nombre: "Urban Inmobiliaria",
      rubro: "Inmobiliaria",
      desc: "Web inmobiliaria con proyectos de departamentos, cifras de la empresa y captación de interesados.",
      video: "/video/websy-03-urban-inmobiliaria-16x9.mp4",
    },
    {
      nombre: "DTRS Pro",
      rubro: "Servicios técnicos",
      desc: "Web de servicios de coordinación de proyectos de desmontaje y montaje, con sus servicios ordenados y contacto 24/7.",
      video: "/video/websy-05-dtrs-pro-16x9.mp4",
    },
  ],
};

export const PORTAFOLIO_SOFTWARE: Portafolio = {
  eyebrow: "Portafolio · Software a medida",
  h2: "Software a medida que hemos desarrollado",
  intro:
    "Un mismo proyecto, dos caras: la web pública que capta clientes y el sistema interno con el que la empresa gestiona su operación día a día.",
  proyectos: [
    {
      nombre: "Neurolee · Intranet de gestión",
      rubro: "Educación · Sistema interno",
      desc: "Panel administrativo a medida para gestionar alumnos, matrículas, vencimientos de cuotas, ventas, leads y métricas de cobranza en un solo lugar.",
      video: "/video/neurolee-panel-explorando.mp4",
    },
    {
      nombre: "Neurolee · Web del programa",
      rubro: "Educación · Web y captación",
      desc: "Web del programa de aprendizaje con su metodología, diagnóstico y formulario para solicitar una asesoría gratuita.",
      video: "/video/neurolee-web-explorando.mp4",
    },
  ],
};
