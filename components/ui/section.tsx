import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>
  );
}

export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/** Etiqueta pequeña en mayúsculas y monoespaciada, sobre el título de sección. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-accent uppercase">
      <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-title font-semibold text-balance">{title}</h2>
      {subtitle ? <p className="text-lg text-muted text-pretty">{subtitle}</p> : null}
    </Reveal>
  );
}
