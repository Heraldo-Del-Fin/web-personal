import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";
import { site } from "@/content/site";
import { projectsHref, type Locale } from "@/lib/i18n";

const socialIcons: Record<keyof typeof site.socials, IconName> = {
  github: "github",
  linkedin: "linkedin",
  x: "x",
  instagram: "instagram",
};

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = `/${locale}`;
  const year = new Date().getFullYear();

  const links = [
    { href: `${home}#servicios`, label: dict.nav.services },
    { href: projectsHref(locale), label: dict.nav.work },
    { href: `${home}#proceso`, label: dict.nav.process },
    { href: `${home}#sobre-mi`, label: dict.nav.about },
    { href: `${home}#faq`, label: dict.nav.faq },
  ];

  const socials = (
    Object.entries(site.socials) as [keyof typeof site.socials, string][]
  ).filter(([, url]) => url.length > 0);

  return (
    <footer className="relative mt-24 border-t border-border bg-surface/30">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href={home} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-xl bg-linear-to-br from-accent to-accent-2 font-mono text-sm font-semibold text-white"
              >
                {site.initials}
              </span>
              <span className="text-sm font-semibold">{site.name}</span>
            </Link>
            <p className="max-w-xs text-sm text-muted">{dict.footer.tagline}</p>
            <p className="font-mono text-xs text-muted">{site.location[locale]}</p>
          </div>

          <nav aria-label={dict.footer.navTitle} className="flex flex-col gap-3">
            <h2 className="font-mono text-xs tracking-[0.2em] text-fg uppercase">
              {dict.footer.navTitle}
            </h2>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-xs tracking-[0.2em] text-fg uppercase">
              {dict.footer.contactTitle}
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {site.email}
            </a>
            <Link
              href={`${home}#contacto`}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {dict.nav.contact}
            </Link>

            {socials.length > 0 ? (
              <div className="mt-2 flex items-center gap-2">
                {socials.map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="grid size-9 place-items-center rounded-full border border-border text-muted transition-colors hover:border-fg/25 hover:text-fg"
                  >
                    <Icon name={socialIcons[key]} size={16} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {year} {site.name}. {dict.footer.rights}
          </p>
          <a
            href="#contenido"
            className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-fg"
          >
            {dict.footer.backToTop}
            <Icon name="arrowUp" size={14} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
