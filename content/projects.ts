import type { Localized } from "@/lib/i18n";

export type Project = {
  slug: string;
  name: string;
  client: Localized;
  /** Opcional. Vacío = no se muestra. */
  year: string;
  /** Una línea en la tarjeta del grid. */
  tagline: Localized;
  /** Párrafo de entrada del caso de estudio. */
  summary: Localized;
  /** Los tres apartados del caso. Cada uno vacío se oculta. */
  challenge: Localized;
  solution: Localized;
  result: Localized;
  /** Dos o tres cifras medidas. Son lo que más convence a un cliente. Vacío = no se muestran. */
  metrics: { value: string; label: Localized }[];
  services: Localized<string[]>;
  /** Vacío = no se muestran las etiquetas de tecnología. */
  stack: string[];
  /** Enlace al proyecto publicado. Vacío = no se muestra el botón. */
  url: string;
  /**
   * Captura en `public/proyectos/`. Ej.: "/proyectos/mi-proyecto.jpg"
   * (1600×1000 px va bien). Si lo dejas vacío se dibuja un marcador con degradado.
   */
  image: string;
  /** Colores del marcador cuando no hay captura. */
  gradient: [string, string];
};

/**
 * PENDIENTE DE COMPLETAR — estos son tus proyectos reales, pero les faltan datos.
 * Los campos vacíos no se pintan, así que la web se ve bien igual; simplemente
 * cada ficha cuenta menos de lo que podría. Por orden de impacto, completa:
 *
 *   1. `stack`      — qué tecnologías usaste (lo que más pregunta un cliente técnico)
 *   2. `challenge`  — qué problema había antes
 *   3. `result`     — qué cambió cuando estuvo funcionando
 *   4. `metrics`    — cifras medidas, SOLO si las tienes de verdad
 *   5. `image`      — una captura en `public/proyectos/`
 *   6. `year`, `url`
 */
export const projects: Project[] = [
  {
    slug: "sistema-inventario",
    name: "Sistema de inventario con API y aplicación de escritorio",
    client: { es: "Proyecto personal", en: "Personal project" },
    year: "",
    tagline: {
      es: "Control de inventario con una API central y una aplicación de escritorio para el día a día.",
      en: "Inventory control with a central API and a desktop application for daily use.",
    },
    summary: {
      es: "Sistema completo de control de inventario con una API central y una aplicación de escritorio para la gestión diaria del stock.",
      en: "A complete inventory control system with a central API and a desktop application for day-to-day stock management.",
    },
    // TODO: ¿qué problema resolvía? Ej.: cómo se llevaba el inventario antes.
    challenge: { es: "", en: "" },
    // TODO: cómo lo resolviste — arquitectura, decisiones, por qué escritorio y no web.
    solution: { es: "", en: "" },
    // TODO: qué cambió al tenerlo funcionando.
    result: { es: "", en: "" },
    metrics: [],
    services: {
      es: ["Sistemas de gestión empresarial", "Software de escritorio"],
      en: ["Business management systems", "Desktop software"],
    },
    // TODO: tecnologías reales del proyecto.
    stack: [],
    url: "",
    image: "",
    gradient: ["#7C5CFF", "#3B2A8C"],
  },
  {
    slug: "app-parqueaderos",
    name: "App móvil de gestión para parqueaderos",
    client: { es: "Gestión de parqueaderos", en: "Parking management" },
    year: "",
    tagline: {
      es: "Control de entradas, salidas y disponibilidad de espacios desde el celular.",
      en: "Entries, exits and space availability managed from a phone.",
    },
    summary: {
      es: "Aplicación móvil para administrar el control de entradas, salidas y disponibilidad de espacios en parqueaderos.",
      en: "A mobile application to manage entries, exits and space availability in parking lots.",
    },
    // TODO: cómo se llevaba ese control antes (¿planillas físicas?).
    challenge: { es: "", en: "" },
    // TODO: cómo funciona la app y qué decisiones tomaste.
    solution: { es: "", en: "" },
    // TODO: qué permite hacer ahora que antes no se podía.
    result: { es: "", en: "" },
    metrics: [],
    services: {
      es: ["Aplicaciones móviles"],
      en: ["Mobile applications"],
    },
    // TODO: tecnologías reales del proyecto.
    stack: [],
    url: "",
    image: "",
    gradient: ["#22D3EE", "#0E4F63"],
  },
  {
    slug: "sitios-web",
    name: "Sitios web para distintos negocios",
    client: { es: "Varios clientes", en: "Various clients" },
    year: "",
    tagline: {
      es: "Páginas a medida para negocios de sectores distintos, cada una según lo que necesitaba el cliente.",
      en: "Custom websites for businesses across different sectors, each built around what the client needed.",
    },
    summary: {
      es: "Desarrollo de páginas web para negocios de diferentes sectores, cada una adaptada a las necesidades específicas del cliente.",
      en: "Websites built for businesses in different sectors, each one adapted to that client's specific needs.",
    },
    // TODO: uno o dos ejemplos concretos — qué negocio y qué necesitaba.
    challenge: { es: "", en: "" },
    solution: { es: "", en: "" },
    result: { es: "", en: "" },
    metrics: [],
    services: {
      es: ["Páginas web"],
      en: ["Websites"],
    },
    // TODO: tecnologías reales.
    stack: [],
    url: "",
    image: "",
    gradient: ["#F0B429", "#7A4A0F"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** El siguiente proyecto del listado, para el enlace al pie del caso de estudio. */
export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
