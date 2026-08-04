import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";
import { whatsappLink } from "@/content/site";
import { projectsHref, type Locale } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <HeroBackdrop />

      <Container className="relative">
        <Reveal className="flex max-w-3xl flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 py-1.5 pr-4 pl-3 text-sm text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-[#25D366]" />
            </span>
            {dict.hero.available}
          </span>

          <h1 className="text-display font-semibold text-balance">
            {dict.hero.titleLead}{" "}
            <span className="text-gradient">{dict.hero.titleHighlight}</span>
          </h1>

          <p className="max-w-xl text-lg text-muted text-pretty sm:text-xl">
            {dict.hero.subtitle}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={`/${locale}#contacto`} size="lg">
              {dict.hero.ctaPrimary}
              <Icon
                name="arrowRight"
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
            <Button href={projectsHref(locale)} size="lg" variant="secondary">
              {dict.hero.ctaSecondary}
            </Button>
            <a
              href={whatsappLink(dict.hero.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-2 px-2 text-sm text-muted transition-colors hover:text-fg"
            >
              <Icon name="whatsapp" size={18} className="text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={150}
          className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
        >
          {dict.hero.stats.map((stat) => (
            <div key={stat.label} className="bg-bg/80 px-6 py-6 backdrop-blur">
              <p className="font-mono text-3xl font-semibold text-fg">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

/** Capas decorativas del hero: resplandores de color y malla de puntos. */
function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,#000,transparent)]" />
      <div className="animate-float absolute -top-40 -left-32 size-[38rem] rounded-full bg-accent/25 blur-[120px]" />
      <div className="absolute -top-24 right-0 size-[30rem] rounded-full bg-accent-2/15 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-bg" />
    </div>
  );
}
