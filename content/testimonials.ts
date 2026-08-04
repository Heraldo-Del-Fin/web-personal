import type { Localized } from "@/lib/i18n";

export type Testimonial = {
  quote: Localized;
  author: string;
  /** Cargo y empresa, ej.: "Directora en Nube Studio". */
  role: Localized;
  /** Foto opcional en `public/testimonios/`. Vacío = se usan las iniciales. */
  avatar?: string;
};

/**
 * Deliberadamente vacío: la sección de testimonios no aparece hasta que añadas
 * opiniones reales. Poner citas inventadas en un sitio publicado es engañar al
 * cliente, y son fáciles de detectar.
 *
 * Para añadir una, copia este ejemplo dentro del array:
 *
 * {
 *   quote: {
 *     es: "Entregó antes de la fecha y las ventas subieron desde la primera semana.",
 *     en: "Delivered ahead of schedule and sales grew from week one.",
 *   },
 *   author: "María Fernández",
 *   role: { es: "Directora en Nube Studio", en: "Director at Nube Studio" },
 * }
 */
export const testimonials: Testimonial[] = [];
