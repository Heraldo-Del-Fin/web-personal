"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import type { Dictionary } from "@/content/dictionaries/types";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { projectsHref, type Locale } from "@/lib/i18n";

/**
 * Recibe solo los textos que necesita, no el diccionario entero: todo lo que
 * llega a un componente de cliente viaja también dentro del HTML.
 */
export function SiteHeader({
  locale,
  nav,
  lang,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  lang: Dictionary["lang"];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const home = `/${locale}`;
  const links = [
    { href: `${home}#servicios`, label: nav.services },
    { href: projectsHref(locale), label: nav.work },
    { href: `${home}#proceso`, label: nav.process },
    { href: `${home}#sobre-mi`, label: nav.about },
    { href: `${home}#faq`, label: nav.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menú abierto: bloquea el scroll del fondo y permite cerrar con Escape.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={home}
          className="flex items-center gap-3"
          aria-label={`${site.name} — ${site.role[locale]}`}
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-xl bg-linear-to-br from-accent to-accent-2 font-mono text-sm font-semibold text-white"
          >
            {site.initials}
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold">{site.name}</span>
            <span className="text-xs text-muted">{site.role[locale]}</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} lang={lang} className="hidden sm:flex" />
          <Button href={`${home}#contacto`} className="hidden sm:inline-flex">
            {nav.cta}
            <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            className="grid size-11 place-items-center rounded-full border border-border bg-surface/60 text-fg lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-movil"
          className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-bg px-5 py-8 sm:px-8 lg:hidden"
        >
          <nav aria-label="Principal móvil" className="flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-2xl font-medium tracking-tight"
              >
                <span className="mr-3 font-mono text-xs text-accent">
                  0{index + 1}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <Button href={`${home}#contacto`} size="lg" onClick={() => setOpen(false)}>
              {nav.cta}
              <Icon name="arrowRight" size={18} />
            </Button>
            <LanguageSwitcher locale={locale} lang={lang} className="self-start sm:hidden" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
