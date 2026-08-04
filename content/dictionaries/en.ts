import type { Dictionary } from "./types";

/** Every string on the site, in English. Mirrors `es.ts`. */
export const en: Dictionary = {
  nav: {
    services: "Services",
    work: "Work",
    process: "Process",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    cta: "Let's talk",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
  },
  lang: {
    label: "Change language",
    es: "Español",
    en: "English",
  },
  hero: {
    available: "Available for new projects",
    titleLead: "Custom software to",
    titleHighlight: "grow your business",
    subtitle:
      "I design and build websites, mobile apps, desktop software and business management systems (inventory, administration and process control). From the idea to a working product, with no generic templates.",
    ctaPrimary: "Tell me about your project",
    ctaSecondary: "See my work",
    stats: [
      { value: "15+", label: "projects delivered" },
      { value: "98", label: "average Lighthouse score" },
      { value: "<24h", label: "response time" },
    ],
    whatsappMessage:
      "Hi Luis! I found your portfolio and I'd like to talk about a project.",
  },
  marquee: {
    label: "Tools I work with",
  },
  services: {
    label: "Services",
    title: "How I can help",
    subtitle:
      "Every project starts with a call to understand your business. Then I send the scope, a fixed price and a delivery date. No surprises.",
    includes: "Includes",
    from: "From",
    cta: "Request a quote",
    whatsappMessage: "Hi Luis! I'm interested in your",
  },
  projects: {
    label: "Work",
    title: "Recent projects",
    subtitle:
      "A selection of projects, the problem each one solved and the result it delivered.",
    viewCase: "Read the case study",
    visitSite: "Visit site",
    all: "See all projects",
    empty: "New projects coming soon.",
  },
  process: {
    label: "Process",
    title: "How we'll work together",
    subtitle:
      "A clear four-step process so you always know where your project stands.",
    steps: [
      {
        title: "Discovery",
        description:
          "A 30-minute call to understand your business, how you work today and what the project needs to solve.",
      },
      {
        title: "Proposal and design",
        description:
          "I send scope, fixed price and a date. Then I design the structure and the interface, and we review it together.",
      },
      {
        title: "Development",
        description:
          "I build it with visible progress every week on a preview version you can actually use, so nothing is a surprise at the end.",
      },
      {
        title: "Delivery and support",
        description:
          "I ship or install it, check it works under real conditions, and hand over the code and the documentation. Includes 30 days of free tweaks.",
      },
    ],
  },
  about: {
    label: "About",
    title: "Hi, I'm Luis",
    paragraphs: [
      "I've spent several years building software for businesses that need more than a template or a shared spreadsheet. I take on the whole project: understanding how you work today, designing the solution and writing the code behind it.",
      "On the web I work with React, Next.js and Vue; on mobile with React Native; on desktop with Electron and Node.js. I care a lot about performance and about interfaces that follow how people actually work: a tool that gets in the way is a tool nobody uses.",
      "If you have an idea and don't know where to start, drop me a line. The first call is free and comes with no strings attached.",
    ],
    stackLabel: "Everyday toolkit",
    photoAlt: "Portrait of Luis Daniel Serrato",
  },
  testimonials: {
    label: "Testimonials",
    title: "What clients say",
  },
  faq: {
    label: "FAQ",
    title: "Before you write",
    items: [
      {
        question: "How much does a project cost?",
        answer:
          "It depends on scope: a website is not the same as an inventory system with several user roles. On our first call I work out what you need and send a fixed price, with no hidden costs and no surprises halfway through.",
      },
      {
        question: "How long does a project take?",
        answer:
          "A website usually takes one to two weeks. A mobile app or a management system, four to ten weeks depending on what it includes. The date is agreed before we start and I stick to it.",
      },
      {
        question: "Do you work with clients abroad?",
        answer:
          "Yes. I work remotely with clients across LATAM, Spain and the US. We coordinate over video calls and WhatsApp, and I adapt to your time zone.",
      },
      {
        question: "Can I manage the content myself afterwards?",
        answer:
          "Yes. On websites I can hook up a content manager so you edit text and images without touching code, and on management systems the admin dashboard is part of the project.",
      },
      {
        question: "What do you need from me to start?",
        answer:
          "Tell me how the thing you want to solve works today, who will use it, and what should change once it's ready. Copy, images or references you like are welcome; if something is missing, I'll help you define it.",
      },
      {
        question: "Do you offer maintenance after launch?",
        answer:
          "Yes. The first 30 days of tweaks are included, and after that you can take a monthly plan with updates, backups and content changes.",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Tell me what you need",
    subtitle:
      "Reach out however you prefer. I reply within 24 business hours.",
    whatsappCta: "Message on WhatsApp",
    whatsappMessage: "Hi Luis! I'd like to get a quote for a project.",
    emailCta: "Send an email",
    bookingCta: "Book a call",
    responseTime: "Reply within 24 h",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      budget: "Approximate budget",
      budgetOptions: [
        "Not sure yet",
        "Under USD 1,000",
        "USD 1,000 – 3,000",
        "USD 3,000 – 8,000",
        "Over USD 8,000",
      ],
      message: "Your project",
      messagePlaceholder:
        "Tell me what you need, your deadline, and any references you like.",
      submit: "Send message",
      submitting: "Sending…",
      success: "Message received! I'll get back to you within 24 business hours.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email.",
        message: "Tell me a bit more (at least 20 characters).",
        generic:
          "The message couldn't be sent. Try again or reach me on WhatsApp.",
        notConfigured:
          "Email delivery isn't configured yet. Please reach me on WhatsApp in the meantime.",
      },
    },
  },
  caseStudy: {
    back: "Back to work",
    overview: "Overview",
    challenge: "The challenge",
    solution: "The solution",
    result: "The result",
    stack: "Stack",
    year: "Year",
    client: "Client",
    services: "Services",
    visitSite: "Visit site",
    nextProject: "Next project",
    ctaTitle: "Want a similar result?",
    ctaSubtitle:
      "Tell me what you need and I'll let you know on the first call whether I can help.",
    ctaButton: "Let's talk about your project",
  },
  footer: {
    tagline: "Custom software for businesses that want to grow.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Social",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
  meta: {
    title: "Luis Daniel Serrato · Custom software development",
    description:
      "I build websites, mobile apps, desktop software and business management systems: inventory, administration and process control.",
    projectsTitle: "Work",
  },
};
