import type { Dictionary } from "./types";

/** Todos los textos del sitio en español. Edita libremente. */
export const es: Dictionary = {
  nav: {
    services: "Servicios",
    work: "Proyectos",
    process: "Proceso",
    about: "Sobre mí",
    faq: "Preguntas",
    contact: "Contacto",
    cta: "Hablemos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skipToContent: "Saltar al contenido",
  },
  lang: {
    label: "Cambiar idioma",
    es: "Español",
    en: "English",
  },
  hero: {
    available: "Disponible para nuevos proyectos",
    titleLead: "Sitios web que",
    titleHighlight: "venden por ti",
    subtitle:
      "Diseño y desarrollo páginas rápidas, cuidadas y pensadas para convertir visitas en clientes. Del primer boceto al sitio publicado, sin plantillas genéricas.",
    ctaPrimary: "Cuéntame tu proyecto",
    ctaSecondary: "Ver proyectos",
    stats: [
      { value: "+15", label: "proyectos entregados" },
      { value: "98", label: "puntaje medio en Lighthouse" },
      { value: "<24h", label: "tiempo de respuesta" },
    ],
    whatsappMessage:
      "¡Hola Luis! Vi tu portafolio y me gustaría platicar sobre un proyecto web.",
  },
  marquee: {
    label: "Tecnologías con las que trabajo",
  },
  services: {
    label: "Servicios",
    title: "Cómo puedo ayudarte",
    subtitle:
      "Cada proyecto arranca con una llamada para entender tu negocio. Después propongo el alcance, el precio cerrado y la fecha de entrega. Sin sorpresas.",
    includes: "Incluye",
    from: "Desde",
    cta: "Solicitar presupuesto",
    whatsappMessage: "¡Hola Luis! Me interesa el servicio de",
  },
  projects: {
    label: "Proyectos",
    title: "Trabajo reciente",
    subtitle:
      "Una selección de proyectos con el problema que resolvían y el resultado que dejaron.",
    viewCase: "Ver caso completo",
    visitSite: "Visitar sitio",
    all: "Ver todos los proyectos",
    empty: "Pronto publicaré nuevos proyectos aquí.",
  },
  process: {
    label: "Proceso",
    title: "Cómo trabajamos juntos",
    subtitle:
      "Un proceso claro en cuatro etapas para que en todo momento sepas dónde está tu proyecto.",
    steps: [
      {
        title: "Descubrimiento",
        description:
          "Una llamada de 30 minutos para entender tu negocio, tus clientes y qué necesitas conseguir con el sitio.",
      },
      {
        title: "Propuesta y diseño",
        description:
          "Te envío alcance, precio cerrado y fecha. Luego diseño la estructura y la interfaz, y la revisamos juntos.",
      },
      {
        title: "Desarrollo",
        description:
          "Construyo el sitio con avances visibles cada semana en un enlace de prueba, para que no haya sorpresas al final.",
      },
      {
        title: "Lanzamiento y soporte",
        description:
          "Publico, mido velocidad y SEO, y te dejo todo documentado. Incluye 30 días de ajustes sin costo.",
      },
    ],
  },
  about: {
    label: "Sobre mí",
    title: "Hola, soy Luis",
    paragraphs: [
      "Llevo varios años construyendo productos web para negocios que necesitan algo mejor que una plantilla. Me involucro en el proyecto completo: entender el objetivo, diseñar la experiencia y escribir el código que la sostiene.",
      "Trabajo sobre todo con React, Next.js y TypeScript, y cuido especialmente el rendimiento y la accesibilidad. Un sitio bonito que carga lento no sirve de nada.",
      "Si tienes una idea en la cabeza y no sabes por dónde empezar, escríbeme. La primera llamada es gratis y sin compromiso.",
    ],
    stackLabel: "Herramientas del día a día",
    photoAlt: "Retrato de Luis Daniel Serrato",
  },
  testimonials: {
    label: "Testimonios",
    title: "Lo que dicen mis clientes",
  },
  faq: {
    label: "Preguntas frecuentes",
    title: "Antes de escribirme",
    items: [
      {
        question: "¿Cuánto cuesta una página web?",
        answer:
          "Depende del alcance. Una landing page bien hecha suele empezar en 600 USD y un sitio a medida con panel de administración en 2 500 USD. Tras la primera llamada te envío un precio cerrado, sin costes ocultos.",
      },
      {
        question: "¿Cuánto tarda el proyecto?",
        answer:
          "Una landing page toma entre 1 y 2 semanas. Un sitio corporativo o una tienda, entre 3 y 6 semanas. La fecha se acuerda antes de empezar y la respeto.",
      },
      {
        question: "¿Trabajas con clientes de otros países?",
        answer:
          "Sí. Trabajo en remoto con clientes de LATAM, España y Estados Unidos. Nos coordinamos por videollamada y WhatsApp, y ajusto los horarios a tu zona.",
      },
      {
        question: "¿Puedo editar el contenido yo mismo después?",
        answer:
          "Sí. Puedo conectar un gestor de contenidos para que edites textos e imágenes sin tocar código, o dejarte los textos en archivos simples si prefieres algo más ligero.",
      },
      {
        question: "¿Qué necesitas de mí para empezar?",
        answer:
          "Tus textos e imágenes si ya los tienes, referencias de sitios que te gusten y claridad sobre qué quieres que haga el visitante. Si falta algo, te ayudo a definirlo.",
      },
      {
        question: "¿Ofreces mantenimiento después del lanzamiento?",
        answer:
          "Sí. Los primeros 30 días de ajustes van incluidos y luego puedes contratar un plan mensual con actualizaciones, copias de seguridad y cambios de contenido.",
      },
    ],
  },
  contact: {
    label: "Contacto",
    title: "Cuéntame qué necesitas",
    subtitle:
      "Escríbeme por el medio que prefieras. Respondo en menos de 24 horas hábiles.",
    whatsappCta: "Escribir por WhatsApp",
    whatsappMessage:
      "¡Hola Luis! Me gustaría cotizar un proyecto web contigo.",
    emailCta: "Enviar un correo",
    bookingCta: "Agendar una llamada",
    responseTime: "Respuesta en menos de 24 h",
    form: {
      name: "Nombre",
      namePlaceholder: "Cómo te llamas",
      email: "Correo",
      emailPlaceholder: "tu@empresa.com",
      budget: "Presupuesto aproximado",
      budgetOptions: [
        "Aún no lo sé",
        "Menos de 1 000 USD",
        "1 000 – 3 000 USD",
        "3 000 – 8 000 USD",
        "Más de 8 000 USD",
      ],
      message: "Tu proyecto",
      messagePlaceholder:
        "Cuéntame qué necesitas, para cuándo y si tienes alguna referencia que te guste.",
      submit: "Enviar mensaje",
      submitting: "Enviando…",
      success:
        "¡Mensaje recibido! Te respondo en menos de 24 horas hábiles.",
      errors: {
        name: "Escribe tu nombre.",
        email: "Escribe un correo válido.",
        message: "Cuéntame un poco más (mínimo 20 caracteres).",
        generic:
          "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por WhatsApp.",
        notConfigured:
          "El envío de correo aún no está configurado. Escríbeme por WhatsApp mientras tanto.",
      },
    },
  },
  caseStudy: {
    back: "Volver a proyectos",
    overview: "Resumen",
    challenge: "El reto",
    solution: "La solución",
    result: "El resultado",
    stack: "Tecnologías",
    year: "Año",
    client: "Cliente",
    services: "Servicios",
    visitSite: "Visitar sitio",
    nextProject: "Siguiente proyecto",
    ctaTitle: "¿Quieres un resultado parecido?",
    ctaSubtitle:
      "Cuéntame qué necesitas y te digo en la primera llamada si puedo ayudarte.",
    ctaButton: "Hablemos de tu proyecto",
  },
  footer: {
    tagline: "Diseño y desarrollo web para negocios que quieren crecer.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    socialTitle: "Redes",
    rights: "Todos los derechos reservados.",
    backToTop: "Volver arriba",
  },
  meta: {
    title: "Luis Daniel Serrato · Desarrollo web freelance",
    description:
      "Diseño y desarrollo sitios web rápidos y pensados para convertir visitas en clientes. Landing pages, aplicaciones a medida y tiendas en línea.",
    projectsTitle: "Proyectos",
  },
};
