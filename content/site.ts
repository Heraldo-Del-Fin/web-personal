/**
 * Datos de contacto y marca personal.
 * Este es el primer archivo que debes editar: todo el sitio lee de aquí.
 */
export const site = {
  name: "Luis Daniel Serrato",
  /** Aparece bajo tu nombre en el header y en el footer. */
  role: {
    es: "Desarrollador web freelance",
    en: "Freelance web developer",
  },
  /** Iniciales del logo. */
  initials: "LS",

  /** URL final del sitio (sin barra al final). Necesaria para SEO y OG. */
  url: "https://luisserrato.dev",

  email: "serato14luis@gmail.com",

  /** Solo dígitos, con código de país y sin +, espacios ni guiones. */
  whatsapp: "5215512345678",

  /** Ciudad o zona horaria que muestras en el footer. */
  location: {
    es: "Remoto · LATAM y España",
    en: "Remote · LATAM and Spain",
  },

  socials: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://www.linkedin.com/in/tu-usuario",
    /** Deja en cadena vacía los que no uses: se ocultan solos. */
    x: "",
    instagram: "",
  },

  /** Enlace de Calendly / Cal.com. Vacío = no se muestra el botón. */
  bookingUrl: "",

  /**
   * Tu foto, dentro de `public/`. Ej.: "/foto.jpg" (cuadrada, mínimo 800×800).
   * Vacío = se dibuja un marcador con tus iniciales.
   */
  photo: "",

  /** Dirección remitente de los correos del formulario (dominio verificado en Resend). */
  contactFromEmail: "Portafolio <onboarding@resend.dev>",
} as const;

/** Construye el enlace de WhatsApp con un mensaje ya escrito. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
