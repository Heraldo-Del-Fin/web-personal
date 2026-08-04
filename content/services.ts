import type { Localized } from "@/lib/i18n";

export type IconName = "rocket" | "code" | "cart" | "gauge";

export type Service = {
  id: string;
  icon: IconName;
  title: Localized;
  description: Localized;
  /** Viñetas de lo que entregas. Tres o cuatro funcionan mejor visualmente. */
  deliverables: Localized<string[]>;
  /** Pon `null` para ocultar el precio de esta tarjeta. */
  priceFrom: Localized | null;
  /** Marca una sola como destacada: se resalta con el color de acento. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "landing",
    icon: "rocket",
    title: { es: "Landing pages", en: "Landing pages" },
    description: {
      es: "Una página enfocada en un solo objetivo: que el visitante te escriba, reserve o compre.",
      en: "A single page built around one goal: getting the visitor to write, book or buy.",
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
    priceFrom: { es: "600 USD", en: "USD 600" },
  },
  {
    id: "web-app",
    icon: "code",
    title: {
      es: "Aplicaciones web a medida",
      en: "Custom web applications",
    },
    description: {
      es: "Paneles, reservas, portales de clientes. Software hecho para cómo trabaja tu negocio.",
      en: "Dashboards, bookings, client portals. Software shaped around how your business works.",
    },
    deliverables: {
      es: [
        "Arquitectura y base de datos",
        "Autenticación y roles de usuario",
        "Panel de administración",
        "Documentación y traspaso del código",
      ],
      en: [
        "Architecture and database",
        "Authentication and user roles",
        "Admin dashboard",
        "Documentation and code handover",
      ],
    },
    priceFrom: { es: "2 500 USD", en: "USD 2,500" },
    featured: true,
  },
  {
    id: "ecommerce",
    icon: "cart",
    title: { es: "Tiendas en línea", en: "Online stores" },
    description: {
      es: "Vende sin depender de plantillas lentas ni comisiones que se comen tu margen.",
      en: "Sell without slow templates or commissions eating into your margin.",
    },
    deliverables: {
      es: [
        "Catálogo y carrito",
        "Pagos con Stripe o Mercado Pago",
        "Gestión de pedidos e inventario",
        "Correos automáticos de compra",
      ],
      en: [
        "Catalog and cart",
        "Payments with Stripe or Mercado Pago",
        "Order and inventory management",
        "Automated purchase emails",
      ],
    },
    priceFrom: { es: "1 800 USD", en: "USD 1,800" },
  },
  {
    id: "performance",
    icon: "gauge",
    title: {
      es: "Rendimiento, SEO y mantenimiento",
      en: "Performance, SEO and maintenance",
    },
    description: {
      es: "¿Ya tienes sitio pero carga lento o no aparece en Google? Lo audito y lo arreglo.",
      en: "Already have a site that loads slowly or never shows up on Google? I audit it and fix it.",
    },
    deliverables: {
      es: [
        "Auditoría técnica y de velocidad",
        "Optimización de Core Web Vitals",
        "SEO técnico y datos estructurados",
        "Plan mensual de mantenimiento",
      ],
      en: [
        "Technical and speed audit",
        "Core Web Vitals optimisation",
        "Technical SEO and structured data",
        "Monthly maintenance plan",
      ],
    },
    priceFrom: { es: "350 USD", en: "USD 350" },
  },
];

/** Se muestran en el carrusel bajo el hero. Edita libremente. */
export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Stripe",
  "Figma",
  "Vercel",
];
