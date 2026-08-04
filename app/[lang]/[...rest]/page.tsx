import { notFound } from "next/navigation";

/**
 * Cualquier URL inexistente dentro de un idioma (/es/lo-que-sea) cae aquí y
 * devuelve un 404 real, pero renderizado dentro del layout del sitio en vez de
 * la página en blanco por defecto de Next.
 */
export default function CatchAllPage() {
  notFound();
}
