import { en } from "@/content/dictionaries/en";
import { es } from "@/content/dictionaries/es";
import type { Dictionary } from "@/content/dictionaries/types";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Cookie donde se recuerda el idioma elegido a mano en el selector. La lee `app/route.ts`. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Un texto con su versión en cada idioma. Se usa en `content/projects.ts` y demás. */
export type Localized<T = string> = Record<Locale, T>;

export function t<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

/**
 * Segmentos de URL traducidos: /es/proyectos y /en/projects apuntan a la misma
 * ruta `app/[lang]/projects`. La traducción la hace el `rewrite` de next.config.ts.
 */
export const segments = {
  projects: { es: "proyectos", en: "projects" } satisfies Localized,
} as const;

export function projectsHref(locale: Locale, slug?: string) {
  const base = `/${locale}/${segments.projects[locale]}`;
  return slug ? `${base}/${slug}` : base;
}
