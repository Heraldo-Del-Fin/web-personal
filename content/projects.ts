import type { Localized } from "@/lib/i18n";

export type Project = {
  slug: string;
  name: string;
  client: Localized;
  year: string;
  /** Una línea en la tarjeta del grid. */
  tagline: Localized;
  /** Párrafo de entrada del caso de estudio. */
  summary: Localized;
  challenge: Localized;
  solution: Localized;
  result: Localized;
  /** Dos o tres cifras. Son lo que más convence a un cliente. */
  metrics: { value: string; label: Localized }[];
  services: Localized<string[]>;
  stack: string[];
  /** Enlace al sitio publicado. Vacío = no se muestra el botón. */
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
 * ⚠️ PROYECTOS DE EJEMPLO — reemplázalos por los tuyos antes de publicar.
 * Mantén entre 3 y 6: más que eso diluye la atención del cliente.
 */
export const projects: Project[] = [
  {
    slug: "nube-studio",
    name: "Nube Studio",
    client: { es: "Estudio de arquitectura", en: "Architecture studio" },
    year: "2025",
    tagline: {
      es: "Portafolio editorial que triplicó las solicitudes de presupuesto.",
      en: "An editorial portfolio that tripled quote requests.",
    },
    summary: {
      es: "Un estudio con obra excelente tenía un sitio antiguo que no la mostraba. Rediseñamos la experiencia alrededor de las fotografías y del formulario de contacto.",
      en: "A studio with excellent work had an old site that hid it. We rebuilt the experience around the photography and the contact form.",
    },
    challenge: {
      es: "El sitio anterior tardaba más de seis segundos en cargar en móvil y enterraba el contacto en la tercera pantalla. La mayoría de las visitas llegaban desde Instagram y se iban antes de ver un solo proyecto.",
      en: "The old site took over six seconds to load on mobile and buried the contact details three screens down. Most visitors arrived from Instagram and left before seeing a single project.",
    },
    solution: {
      es: "Reconstruí el sitio en Next.js con imágenes optimizadas y carga diferida, una galería a pantalla completa y un formulario corto siempre accesible desde el menú. Los textos se editan desde un gestor de contenidos.",
      en: "I rebuilt the site in Next.js with optimised, lazily loaded images, a full-screen gallery and a short form always reachable from the menu. The copy is editable from a content manager.",
    },
    result: {
      es: "La carga en móvil bajó a 1,2 segundos y las solicitudes de presupuesto pasaron de 4 a 13 al mes en el primer trimestre.",
      en: "Mobile load time dropped to 1.2 seconds and quote requests went from 4 to 13 per month in the first quarter.",
    },
    metrics: [
      { value: "3×", label: { es: "más solicitudes", en: "more enquiries" } },
      { value: "1,2 s", label: { es: "carga en móvil", en: "mobile load" } },
      { value: "100", label: { es: "SEO en Lighthouse", en: "Lighthouse SEO" } },
    ],
    services: {
      es: ["Diseño UI", "Desarrollo web", "SEO técnico"],
      en: ["UI design", "Web development", "Technical SEO"],
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    url: "",
    image: "",
    gradient: ["#7C5CFF", "#22D3EE"],
  },
  {
    slug: "ruta-cafe",
    name: "Ruta Café",
    client: { es: "Tostador de café de especialidad", en: "Specialty coffee roaster" },
    year: "2025",
    tagline: {
      es: "Tienda en línea con suscripciones y pagos en dos clics.",
      en: "Online store with subscriptions and two-click checkout.",
    },
    summary: {
      es: "Vendían por mensajes de WhatsApp y anotaban los pedidos a mano. Montamos una tienda con suscripción mensual que gestiona los envíos recurrentes.",
      en: "They sold over WhatsApp and tracked orders by hand. We built a store with monthly subscriptions that handles recurring shipments.",
    },
    challenge: {
      es: "Cada pedido implicaba cinco mensajes y una transferencia manual. Con más de 200 clientes al mes el sistema ya no daba más de sí y se perdían ventas los fines de semana.",
      en: "Every order meant five messages and a manual transfer. Past 200 customers a month the system broke down and weekend sales were lost.",
    },
    solution: {
      es: "Tienda con catálogo, carrito y pagos con Stripe, más un panel donde el equipo ve pedidos e inventario. Las suscripciones se cobran solas y avisan por correo antes de cada envío.",
      en: "A store with catalog, cart and Stripe payments, plus a dashboard where the team sees orders and stock. Subscriptions charge automatically and email customers before each shipment.",
    },
    result: {
      es: "El 40 % de los clientes pasó a suscripción mensual y el equipo dejó de dedicar unas diez horas semanales a gestionar pedidos.",
      en: "40% of customers moved to a monthly subscription and the team stopped spending about ten hours a week on order admin.",
    },
    metrics: [
      { value: "40 %", label: { es: "ventas recurrentes", en: "recurring sales" } },
      { value: "−10 h", label: { es: "de trabajo semanal", en: "of weekly admin" } },
      { value: "2", label: { es: "clics hasta pagar", en: "clicks to checkout" } },
    ],
    services: {
      es: ["E-commerce", "Integración de pagos", "Panel de administración"],
      en: ["E-commerce", "Payment integration", "Admin dashboard"],
    },
    stack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    url: "",
    image: "",
    gradient: ["#F59E0B", "#7C5CFF"],
  },
  {
    slug: "clinica-vital",
    name: "Clínica Vital",
    client: { es: "Clínica dental", en: "Dental clinic" },
    year: "2024",
    tagline: {
      es: "Reservas en línea que llenaron la agenda sin llamadas.",
      en: "Online booking that filled the calendar without phone calls.",
    },
    summary: {
      es: "La recepción pasaba el día al teléfono. Construimos un sistema de citas conectado a la agenda real de cada especialista.",
      en: "Reception spent the day on the phone. We built an appointment system wired to each specialist's real calendar.",
    },
    challenge: {
      es: "Las citas se agendaban solo por llamada en horario de oficina y un 20 % de los pacientes no se presentaba, sin ningún recordatorio automático.",
      en: "Appointments were booked by phone during office hours only, and 20% of patients never showed up, with no automated reminders.",
    },
    solution: {
      es: "Calendario en línea con disponibilidad real, confirmación por correo y recordatorio por WhatsApp 24 horas antes. Todo accesible con teclado y lector de pantalla.",
      en: "An online calendar with live availability, email confirmation and a WhatsApp reminder 24 hours before. Fully keyboard and screen-reader accessible.",
    },
    result: {
      es: "Las ausencias bajaron del 20 % al 7 % y una de cada tres citas ahora se reserva fuera del horario de la clínica.",
      en: "No-shows fell from 20% to 7% and one in three appointments is now booked outside clinic hours.",
    },
    metrics: [
      { value: "−65 %", label: { es: "ausencias", en: "no-shows" } },
      { value: "33 %", label: { es: "citas fuera de horario", en: "after-hours bookings" } },
      { value: "AA", label: { es: "accesibilidad WCAG", en: "WCAG accessibility" } },
    ],
    services: {
      es: ["Producto y UX", "Desarrollo web", "Accesibilidad"],
      en: ["Product and UX", "Web development", "Accessibility"],
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Resend"],
    url: "",
    image: "",
    gradient: ["#22D3EE", "#34D399"],
  },
  {
    slug: "andes-logistica",
    name: "Andes Logística",
    client: { es: "Operador logístico", en: "Logistics operator" },
    year: "2024",
    tagline: {
      es: "Panel de seguimiento que sustituyó a mil hojas de cálculo.",
      en: "A tracking dashboard that replaced a thousand spreadsheets.",
    },
    summary: {
      es: "Coordinaban 300 envíos diarios entre hojas de cálculo compartidas. Ahora todo el equipo mira el mismo tablero en tiempo real.",
      en: "They coordinated 300 daily shipments across shared spreadsheets. Now the whole team looks at the same live board.",
    },
    challenge: {
      es: "La información vivía en cinco hojas distintas que nadie sincronizaba. Responder «¿dónde está mi paquete?» tomaba diez minutos y varias llamadas internas.",
      en: "Data lived in five spreadsheets nobody kept in sync. Answering \"where is my package?\" took ten minutes and several internal calls.",
    },
    solution: {
      es: "Aplicación web con roles por perfil, tablero en tiempo real, historial por envío y un portal donde el cliente final consulta su paquete con un código.",
      en: "A web app with role-based access, a live board, per-shipment history and a portal where end customers track their package with a code.",
    },
    result: {
      es: "Las consultas al equipo de atención cayeron a la mitad y el tiempo de respuesta pasó de diez minutos a menos de uno.",
      en: "Support enquiries halved and response time went from ten minutes to under one.",
    },
    metrics: [
      { value: "−50 %", label: { es: "consultas al soporte", en: "support tickets" } },
      { value: "<1 min", label: { es: "para localizar un envío", en: "to locate a shipment" } },
      { value: "300", label: { es: "envíos diarios", en: "daily shipments" } },
    ],
    services: {
      es: ["Aplicación a medida", "Diseño de producto", "Integraciones"],
      en: ["Custom application", "Product design", "Integrations"],
    },
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    url: "",
    image: "",
    gradient: ["#F43F5E", "#7C5CFF"],
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
