import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_10px_40px_-12px_var(--color-accent)] hover:bg-accent/90 hover:shadow-[0_16px_50px_-12px_var(--color-accent)] hover:-translate-y-0.5",
  secondary:
    "border border-border bg-surface/70 text-fg backdrop-blur hover:border-fg/25 hover:bg-surface-2",
  ghost: "text-muted hover:text-fg",
  whatsapp:
    "bg-[#25D366] text-[#04220f] shadow-[0_10px_40px_-12px_#25D366] hover:bg-[#22c35d] hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  /** Si se pasa, el botón se renderiza como enlace. */
  href?: string;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>,
  "href" | "className" | "children" | "color"
>;

/** Botón único para enlaces internos, externos y acciones de formulario. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      const opensNewTab = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          target={opensNewTab ? "_blank" : undefined}
          rel={opensNewTab ? "noopener noreferrer" : undefined}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
