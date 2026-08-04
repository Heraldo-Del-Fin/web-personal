import { NextResponse, type NextRequest } from "next/server";
import { detectLocale } from "@/lib/detect-locale";

/**
 * La raíz del sitio no tiene contenido propio: manda a /es o /en según el
 * idioma del visitante.
 *
 * Esto vivía en `proxy.ts` (el antiguo middleware), pero en Next.js 16 el proxy
 * corre obligatoriamente en el runtime de Node y el adaptador de Cloudflare
 * Workers todavía no lo admite. Un route handler hace lo mismo y funciona igual
 * en Cloudflare, en Vercel o en un servidor propio.
 */
export function GET(request: NextRequest) {
  const locale = detectLocale(request);
  return NextResponse.redirect(new URL(`/${locale}`, request.url), 307);
}
