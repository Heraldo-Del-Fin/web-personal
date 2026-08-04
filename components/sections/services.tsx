import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";
import { services } from "@/content/services";
import { whatsappLink } from "@/content/site";
import { cn } from "@/lib/cn";
import { type Locale } from "@/lib/i18n";

export function Services({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="servicios">
      <SectionHeading
        eyebrow={dict.services.label}
        title={dict.services.title}
        subtitle={dict.services.subtitle}
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 80} className="h-full">
            <article
              className={cn(
                "card-glow flex h-full flex-col gap-5 rounded-2xl border border-border bg-surface p-7 transition-colors",
                service.featured && "bg-linear-to-b from-accent/10 to-surface",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-bg text-accent",
                    service.featured && "border-accent/40 text-accent",
                  )}
                >
                  <Icon name={service.icon} size={22} />
                </span>
                {service.priceFrom ? (
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                    {dict.services.from} {service.priceFrom[locale]}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{service.title[locale]}</h3>
                <p className="text-muted text-pretty">{service.description[locale]}</p>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                  {dict.services.includes}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.deliverables[locale].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <Icon
                        name="check"
                        size={16}
                        className="mt-0.5 shrink-0 text-accent-2"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(
                    `${dict.services.whatsappMessage} ${service.title[locale]}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-fg"
                >
                  {dict.services.cta}
                  <Icon
                    name="arrowRight"
                    size={16}
                    className="text-accent transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
