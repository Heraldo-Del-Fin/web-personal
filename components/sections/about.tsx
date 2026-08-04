import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, Section } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";
import { stack } from "@/content/services";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="sobre-mi">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <div className="card-glow relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-border bg-surface">
            {site.photo ? (
              <Image
                src={site.photo}
                alt={dict.about.photoAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="grid h-full place-items-center bg-linear-to-br from-accent/30 via-surface to-accent-2/20"
              >
                <span className="font-mono text-7xl font-semibold text-fg/25">
                  {site.initials}
                </span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-border/60 bg-bg/70 px-5 py-4 backdrop-blur">
              <span className="text-sm font-medium">{site.name}</span>
              <span className="font-mono text-xs text-muted">{site.location[locale]}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-6">
          <Eyebrow>{dict.about.label}</Eyebrow>
          <h2 className="text-title font-semibold text-balance">{dict.about.title}</h2>

          <div className="flex flex-col gap-4 text-lg text-muted text-pretty">
            {dict.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-2 flex flex-col gap-3">
            <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
              {dict.about.stackLabel}
            </p>
            <ul className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <Button href={`/${locale}#contacto`} variant="secondary">
              {dict.nav.cta}
              <Icon name="arrowRight" size={16} />
            </Button>
            <Button href={`mailto:${site.email}`} variant="ghost">
              <Icon name="mail" size={16} />
              {site.email}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
