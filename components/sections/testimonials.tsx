import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";
import { testimonials } from "@/content/testimonials";
import type { Locale } from "@/lib/i18n";

/** No se renderiza mientras no haya testimonios reales en `content/testimonials.ts`. */
export function Testimonials({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  if (testimonials.length === 0) return null;

  return (
    <Section className="bg-surface/20">
      <SectionHeading eyebrow={dict.testimonials.label} title={dict.testimonials.title} />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.author} delay={index * 80} className="h-full">
            <figure className="card-glow flex h-full flex-col gap-6 rounded-2xl border border-border bg-bg p-7">
              <blockquote className="text-lg text-pretty">
                “{testimonial.quote[locale]}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                {testimonial.avatar ? (
                  <Image
                    src={testimonial.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-full bg-linear-to-br from-accent to-accent-2 font-mono text-sm text-white"
                  >
                    {initials(testimonial.author)}
                  </span>
                )}
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-medium">{testimonial.author}</span>
                  <span className="text-xs text-muted">{testimonial.role[locale]}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
