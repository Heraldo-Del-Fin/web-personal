import { Container } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";
import { stack } from "@/content/services";

/**
 * Carrusel infinito con el stack. La lista se duplica y se desplaza un 50 %,
 * así el bucle es continuo sin JavaScript.
 */
export function StackMarquee({ dict }: { dict: Dictionary }) {
  return (
    <section className="border-y border-border bg-surface/20 py-10">
      <Container className="mb-6">
        <p className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          {dict.marquee.label}
        </p>
      </Container>

      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="animate-marquee flex w-max items-center gap-10 pr-10">
          {[...stack, ...stack].map((item, index) => (
            <li
              key={`${item}-${index}`}
              aria-hidden={index >= stack.length}
              className="text-xl font-medium whitespace-nowrap text-muted/70 transition-colors hover:text-fg sm:text-2xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
