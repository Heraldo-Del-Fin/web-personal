import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, Section } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";
import { site, whatsappLink } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export function Contact({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="contacto" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      </div>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>{dict.contact.label}</Eyebrow>
          <h2 className="text-title font-semibold text-balance">{dict.contact.title}</h2>
          <p className="max-w-md text-lg text-muted text-pretty">{dict.contact.subtitle}</p>

          <div className="mt-2 flex flex-col gap-3">
            <ContactLink
              href={whatsappLink(dict.contact.whatsappMessage)}
              icon="whatsapp"
              label={dict.contact.whatsappCta}
              detail={site.whatsappDisplay}
              external
            />
            <ContactLink
              href={`mailto:${site.email}`}
              icon="mail"
              label={dict.contact.emailCta}
              detail={site.email}
            />
            {site.bookingUrl ? (
              <ContactLink
                href={site.bookingUrl}
                icon="calendar"
                label={dict.contact.bookingCta}
                detail={site.location[locale]}
                external
              />
            ) : null}
          </div>

          <p className="mt-2 inline-flex items-center gap-2 font-mono text-xs text-muted">
            <span className="size-1.5 rounded-full bg-[#25D366]" />
            {dict.contact.responseTime}
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="card-glow rounded-3xl border border-border bg-surface p-7 sm:p-9"
        >
          <ContactForm locale={locale} copy={dict.contact.form} />
        </Reveal>
      </div>
    </Section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  detail,
  external = false,
}: {
  href: string;
  icon: "whatsapp" | "mail" | "calendar";
  label: string;
  detail: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/60 px-5 py-4 transition-colors hover:border-fg/20 hover:bg-surface"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-bg text-accent">
        <Icon name={icon} size={18} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs text-muted">{detail}</span>
      </span>
      <Icon
        name="arrowUpRight"
        size={18}
        className="ml-auto text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
