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
    titleLead: "Software a la medida para",
    titleHighlight: "hacer crecer tu negocio",
    subtitle:
      "Diseño y desarrollo páginas web, aplicaciones móviles, software de escritorio y sistemas de gestión empresarial (inventario, administración y control de procesos). De la idea al producto funcionando, sin plantillas genéricas.",
    ctaPrimary: "Cuéntame tu proyecto",
    ctaSecondary: "Ver proyectos",
    /*
     * Cifras bajo el hero. Vacío = la fila no se muestra.
     * Rellénalo cuando tengas datos que puedas sostener delante de un cliente:
     *   { value: "+15", label: "proyectos entregados" },
     *   { value: "<24h", label: "tiempo de respuesta" },
     * Recuerda ponerlas también en `en.ts`.
     */
    stats: [],
    whatsappMessage:
      "¡Hola Luis! Vi tu portafolio y me gustaría hablar contigo sobre un proyecto.",
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
          "Una llamada de 30 minutos para entender tu negocio, cómo trabajas hoy y qué necesitas que resuelva el proyecto.",
      },
      {
        title: "Propuesta y diseño",
        description:
          "Te envío alcance, precio cerrado y fecha. Luego diseño la estructura y la interfaz, y la revisamos juntos.",
      },
      {
        title: "Desarrollo",
        description:
          "Lo construyo con avances visibles cada semana en una versión de prueba que puedes usar, para que no haya sorpresas al final.",
      },
      {
        title: "Entrega y soporte",
        description:
          "Publico o instalo, verifico que todo funcione en condiciones reales y te dejo el código y el manejo documentados. Incluye 30 días de ajustes sin costo.",
      },
    ],
  },
  about: {
    label: "Sobre mí",
    title: "Hola, soy Luis",
    paragraphs: [
      "Llevo varios años construyendo software para negocios que necesitan algo mejor que una plantilla o una hoja de cálculo compartida. Me involucro en el proyecto completo: entender cómo trabajas hoy, diseñar la solución y escribir el código que la sostiene.",
      "En web trabajo con React, Next.js y Vue; en móvil con React Native; y en escritorio con Electron y Node.js. Cuido especialmente el rendimiento y que la interfaz siga el flujo real de trabajo: una herramienta que estorba, nadie la usa.",
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
        question: "¿Cuánto cuesta un proyecto?",
        answer:
          "Depende del alcance: no cuesta lo mismo una página web que un sistema de inventario con varios perfiles de usuario. En la primera llamada entiendo qué necesitas y te envío un precio cerrado, sin costes ocultos ni sorpresas a mitad del proyecto.",
      },
      {
        question: "¿Cuánto tarda el proyecto?",
        answer:
          "Una página web suele tomar entre 1 y 2 semanas. Una aplicación móvil o un sistema de gestión, entre 4 y 10 semanas según lo que incluya. La fecha se acuerda antes de empezar y la respeto.",
      },
      {
        question: "¿Trabajas con clientes de otros países?",
        answer:
          "Sí. Trabajo en remoto con clientes de LATAM, España y Estados Unidos. Nos coordinamos por videollamada y WhatsApp, y ajusto los horarios a tu zona.",
      },
      {
        question: "¿Puedo administrar el contenido yo mismo después?",
        answer:
          "Sí. En las páginas web puedo conectar un gestor de contenidos para que edites textos e imágenes sin tocar código, y en los sistemas de gestión el panel de administración es parte del proyecto.",
      },
      {
        question: "¿Qué necesitas de mí para empezar?",
        answer:
          "Que me expliques cómo funciona hoy eso que quieres resolver, quién lo usará y qué esperas que cambie cuando esté listo. Si tienes textos, imágenes o referencias que te gusten, mejor; si falta algo, te ayudo a definirlo.",
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
    whatsappMessage: "¡Hola Luis! Me gustaría cotizar un proyecto contigo.",
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
    tagline: "Software a la medida para negocios que quieren crecer.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    socialTitle: "Redes",
    rights: "Todos los derechos reservados.",
    backToTop: "Volver arriba",
  },
  meta: {
    title: "Luis Daniel Serrato · Desarrollo de software a la medida",
    description:
      "Desarrollo páginas web, aplicaciones móviles, software de escritorio y sistemas de gestión empresarial: inventario, administración y control de procesos.",
    projectsTitle: "Proyectos",
  },
};
