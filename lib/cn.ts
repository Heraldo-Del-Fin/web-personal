type ClassValue = string | false | null | undefined;

/** Une clases condicionales. Equivalente mínimo de `clsx`, sin dependencias. */
export function cn(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}
