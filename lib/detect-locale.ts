import type { NextRequest } from "next/server";
import { LOCALE_COOKIE, defaultLocale, isLocale } from "./i18n";

/**
 * Decide el idioma de una visita: primero el que el usuario eligió a mano
 * (cookie), si no el que pide su navegador, y si no, español.
 */
export function detectLocale(request: NextRequest) {
  const fromCookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (fromCookie && isLocale(fromCookie)) return fromCookie;
  return matchAcceptLanguage(request.headers.get("accept-language"));
}

/**
 * Parseo mínimo de `Accept-Language`. Con solo dos idiomas no compensa añadir
 * `negotiator` + `intl-localematcher`: basta ordenar por factor de calidad.
 */
function matchAcceptLanguage(header: string | null) {
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return {
        tag: tag.toLowerCase(),
        quality: q ? Number.parseFloat(q.split("=")[1]) || 0 : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}
