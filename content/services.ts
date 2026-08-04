import type { Localized } from "@/lib/i18n";

export type IconName = "rocket" | "code" | "smartphone" | "monitor";

export type Service = {
  id: string;
  icon: IconName;
  title: Localized;
  description: Localized;
  /** Viñetas de lo que entregas. Tres o cuatro funcionan mejor visualmente. */
  deliverables: Localized<string[]>;
  /**
   * Precio de referencia. Con `null` la tarjeta no muestra precio.
   * Están todos en `null` hasta que definas tus tarifas reales: anunciar un
   * precio que no es el tuyo te obliga a sostenerlo o a desdecirte.
   */
  priceFrom: Localized | null;
  /** Marca una sola como destacada: se resalta con el color de acento. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "landing",
    icon: "rocket",
    title: { es: "Páginas web", en: "Websites" },
    description: {
      es: "Sitios y landing pages enfocados en un objetivo: que el visitante te escriba, reserve o compre.",
      en: "Sites and landing pages built around one goal: getting the visitor to write, book or buy.",
    },
    deliverables: {
      es: [
        "Diseño a medida, sin plantillas",
        "Textos orientados a conversión",
        "Formulario y WhatsApp conectados",
        "Publicación y medición con analítica",
      ],
      en: [
        "Custom design, no templates",
        "Conversion-focused copy",
        "Contact form and WhatsApp wired up",
        "Launch and analytics setup",
      ],
    },
    priceFrom: null,
  },
  {
    id: "web-app",
    icon: "code",
    title: {
      es: "Sistemas de gestión empresarial",
      en: "Business management systems",
    },
    description: {
      es: "Inventario, administración y control de procesos. Software hecho para cómo trabaja tu negocio, no al revés.",
      en: "Inventory, administration and process control. Software shaped around how your business works, not the other way round.",
    },
    deliverables: {
      es: [
        "Arquitectura y base de datos",
        "Autenticación y roles de usuario",
        "Panel de administración y reportes",
        "Documentación y traspaso del código",
      ],
      en: [
        "Architecture and database",
        "Authentication and user roles",
        "Admin dashboard and reports",
        "Documentation and code handover",
      ],
    },
    priceFrom: null,
    featured: true,
  },
  {
    id: "mobile",
    icon: "smartphone",
    title: { es: "Aplicaciones móviles", en: "Mobile applications" },
    description: {
      es: "Apps para Android/iOS enfocadas en resolver una operación específica de tu negocio.",
      en: "Android/iOS apps focused on solving one specific operation of your business.",
    },
    deliverables: {
      es: [
        "Backend y base de datos si el proyecto lo requiere",
        "Panel de administración si aplica",
        "Publicación en tiendas si se necesita",
      ],
      en: [
        "Backend and database if the project needs it",
        "Admin dashboard where it applies",
        "Store publishing if required",
      ],
    },
    priceFrom: null,
  },
  {
    id: "desktop",
    icon: "monitor",
    title: { es: "Software de escritorio", en: "Desktop software" },
    description: {
      es: "Aplicaciones de escritorio para gestión interna, control de procesos o consulta de información sin depender de internet.",
      en: "Desktop applications for internal management, process control or looking up information without depending on the internet.",
    },
    deliverables: {
      es: [
        "Conexión con base de datos local o en la nube",
        "Interfaz adaptada al flujo real de trabajo del negocio",
      ],
      en: [
        "Connection to a local or cloud database",
        "Interface shaped around how the business actually works",
      ],
    },
    priceFrom: null,
  },
];

/** Se muestran en el carrusel bajo el hero y en tu sección personal. */
export const stack = [
  "Next.js",
  "React",
  "React Native",
  "Vue",
  "TypeScript",
  "Node.js",
  "Electron",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma",
  "Figma",
  "Cloudflare",
];
