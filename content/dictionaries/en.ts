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
    titleLead: "Websites that",
    titleHighlight: "sell for you",
    subtitle:
      "I design and build fast, polished websites made to turn visitors into customers. From the first sketch to launch day, with no generic templates.",
    ctaPrimary: "Tell me about your project",
    ctaSecondary: "See my work",
    stats: [
      { value: "15+", label: "projects delivered" },
      { value: "98", label: "average Lighthouse score" },
      { value: "<24h", label: "response time" },
    ],
    whatsappMessage:
      "Hi Luis! I found your portfolio and I'd like to talk about a web project.",
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
          "A 30-minute call to understand your business, your customers and what the site needs to achieve.",
      },
      {
        title: "Proposal and design",
        description:
          "I send scope, fixed price and a date. Then I design the structure and the interface, and we review it together.",
      },
      {
        title: "Development",
        description:
          "I build the site with visible progress every week on a preview link, so nothing is a surprise at the end.",
      },
      {
        title: "Launch and support",
        description:
          "I ship it, measure speed and SEO, and hand everything over documented. Includes 30 days of free tweaks.",
      },
    ],
  },
  about: {
    label: "About",
    title: "Hi, I'm Luis",
    paragraphs: [
      "I've spent several years building web products for businesses that need more than a template. I take on the whole project: understanding the goal, designing the experience and writing the code behind it.",
      "I work mostly with React, Next.js and TypeScript, and I care a lot about performance and accessibility. A beautiful site that loads slowly is worth nothing.",
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
        question: "How much does a website cost?",
        answer:
          "It depends on scope. A well-built landing page usually starts at USD 600, and a custom site with an admin panel at USD 2,500. After our first call I send a fixed price with no hidden costs.",
      },
      {
        question: "How long does a project take?",
        answer:
          "A landing page takes one to two weeks. A corporate site or a store, three to six weeks. The date is agreed before we start and I stick to it.",
      },
      {
        question: "Do you work with clients abroad?",
        answer:
          "Yes. I work remotely with clients across LATAM, Spain and the US. We coordinate over video calls and WhatsApp, and I adapt to your time zone.",
      },
      {
        question: "Can I edit the content myself afterwards?",
        answer:
          "Yes. I can hook up a content manager so you edit text and images without touching code, or keep the copy in simple files if you prefer something lighter.",
      },
      {
        question: "What do you need from me to start?",
        answer:
          "Your copy and images if you already have them, references of sites you like, and clarity on what you want visitors to do. If something is missing, I'll help you define it.",
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
    whatsappMessage: "Hi Luis! I'd like to get a quote for a web project.",
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
    tagline: "Web design and development for businesses that want to grow.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Social",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
  meta: {
    title: "Luis Daniel Serrato · Freelance web development",
    description:
      "I design and build fast websites made to turn visitors into customers. Landing pages, custom web apps and online stores.",
    projectsTitle: "Work",
  },
};
