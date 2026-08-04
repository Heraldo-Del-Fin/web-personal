import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";

export function Process({ dict }: { dict: Dictionary }) {
  return (
    <Section id="proceso" className="bg-surface/20">
      <SectionHeading
        eyebrow={dict.process.label}
        title={dict.process.title}
        subtitle={dict.process.subtitle}
      />

      <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dict.process.steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 90} className="h-full" as="li">
            <div className="relative flex h-full flex-col gap-3 rounded-2xl border border-border bg-bg p-6">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-6 rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-xs text-accent"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted text-pretty">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
