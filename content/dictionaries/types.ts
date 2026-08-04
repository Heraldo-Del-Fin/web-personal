/**
 * Forma de los diccionarios. Si añades una clave aquí, TypeScript te obligará
 * a traducirla en `es.ts` y en `en.ts`, así ningún texto se queda sin traducir.
 */
export type Dictionary = {
  nav: {
    services: string;
    work: string;
    process: string;
    about: string;
    faq: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
  };
  lang: {
    label: string;
    es: string;
    en: string;
  };
  hero: {
    available: string;
    titleLead: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    whatsappMessage: string;
  };
  marquee: {
    label: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    includes: string;
    from: string;
    cta: string;
    whatsappMessage: string;
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    viewCase: string;
    visitSite: string;
    all: string;
    empty: string;
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    stackLabel: string;
    photoAlt: string;
  };
  testimonials: {
    label: string;
    title: string;
  };
  faq: {
    label: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    whatsappCta: string;
    whatsappMessage: string;
    emailCta: string;
    bookingCta: string;
    responseTime: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      budget: string;
      budgetOptions: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      success: string;
      errors: {
        name: string;
        email: string;
        message: string;
        generic: string;
        notConfigured: string;
      };
    };
  };
  caseStudy: {
    back: string;
    overview: string;
    challenge: string;
    solution: string;
    result: string;
    stack: string;
    year: string;
    client: string;
    services: string;
    visitSite: string;
    nextProject: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    socialTitle: string;
    rights: string;
    backToTop: string;
  };
  meta: {
    title: string;
    description: string;
    projectsTitle: string;
  };
};
