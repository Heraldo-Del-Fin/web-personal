import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";

/**
 * Acordeón con `<details>` nativo: accesible con teclado y funciona sin JS.
 * Todos comparten `name`, así solo queda uno abierto a la vez.
 */
export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-16">
        <SectionHeading
          eyebrow={dict.faq.label}
          title={dict.faq.title}
          className="lg:sticky lg:top-28"
        />

        <div className="flex flex-col">
          {dict.faq.items.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details
                name="faq"
                className="group border-b border-border py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium">
                  {item.question}
                  <Icon
                    name="chevronDown"
                    size={20}
                    className="mt-1 shrink-0 text-muted transition-transform duration-300 group-open:-rotate-180"
                  />
                </summary>
                <p className="mt-3 max-w-prose text-muted text-pretty">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
