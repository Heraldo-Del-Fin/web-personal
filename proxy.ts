import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, defaultLocale, isLocale, locales } from "@/lib/i18n";

/**
 * En Next.js 16 este archivo sustituye a `middleware.ts` (misma funcionalidad).
 * Manda las rutas sin idioma al idioma correcto: primero lo que el usuario
 * eligió a mano, si no lo que pide su navegador, y si no, español.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

function resolveLocale(request: NextRequest) {
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

export const config = {
  /*
   * Todo excepto: internos de Next, la API, los archivos que Next genera en la
   * raíz (icon, sitemap, robots…) y cualquier ruta con extensión (.png, .svg…).
   * Sin excluir los de la raíz, el favicon acabaría redirigido a /es/icon.
   */
  matcher: [
    "/((?!_next|api|icon|apple-icon|opengraph-image|twitter-image|manifest|sitemap|robots|.*\\.).*)",
  ],
};
