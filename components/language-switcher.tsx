"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/content/dictionaries/types";
import { cn } from "@/lib/cn";
import { LOCALE_COOKIE, locales, segments, type Locale } from "@/lib/i18n";

/**
 * Cambia de idioma conservando la página actual y recuerda la elección en una
 * cookie, que lee `app/route.ts` para respetar la elección en las próximas visitas.
 */
export function LanguageSwitcher({
  locale,
  lang,
  className,
}: {
  locale: Locale;
  lang: Dictionary["lang"];
  className?: string;
}) {
  const pathname = usePathname();

  function hrefFor(target: Locale) {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return `/${target}`;

    parts[0] = target;
    // /es/proyectos/... y /en/projects/... son la misma ruta con distinto nombre.
    if (parts[1] === segments.projects[locale]) {
      parts[1] = segments.projects[target];
    }
    return `/${parts.join("/")}`;
  }

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-border bg-surface/60 p-0.5 backdrop-blur",
        className,
      )}
      role="group"
      aria-label={lang.label}
    >
      {locales.map((option) => {
        const active = option === locale;
        return (
          <Link
            key={option}
            href={hrefFor(option)}
            hrefLang={option}
            aria-current={active ? "true" : undefined}
            onClick={() => rememberLocale(option)}
            className={cn(
              "rounded-full px-2.5 py-1 font-mono text-xs uppercase transition-colors",
              active ? "bg-fg/10 text-fg" : "text-muted hover:text-fg",
            )}
          >
            {option}
            <span className="sr-only"> — {lang[option]}</span>
          </Link>
        );
      })}
    </div>
  );
}

/** Guarda el idioma elegido para que `app/route.ts` lo respete en la próxima visita. */
function rememberLocale(target: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${target};path=/;max-age=31536000;samesite=lax`;
}
