import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import type { Dictionary } from "@/content/dictionaries/types";
import type { Project } from "@/content/projects";
import { projectsHref, type Locale } from "@/lib/i18n";

export function ProjectCard({
  project,
  locale,
  dict,
  priority = false,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  priority?: boolean;
}) {
  return (
    <article className="card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <ProjectThumb project={project} priority={priority} />

      <div className="flex flex-1 flex-col gap-4 p-7">
        {/* El año es opcional: sin él no se pinta el separador. */}
        <div className="flex items-center gap-3 font-mono text-xs text-muted">
          {project.year ? (
            <>
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
            </>
          ) : null}
          <span>{project.client[locale]}</span>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">
            <Link
              href={projectsHref(locale, project.slug)}
              className="after:absolute after:inset-0"
            >
              {project.name}
            </Link>
          </h3>
          <p className="text-muted text-pretty">{project.tagline[locale]}</p>
        </div>

        {project.stack.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-fg">
          {dict.projects.viewCase}
          <Icon
            name="arrowRight"
            size={16}
            className="text-accent transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </article>
  );
}

/**
 * Captura del proyecto. Si aún no hay imagen real dibuja un marcador con el
 * degradado del proyecto, para que el sitio se vea terminado desde el principio.
 */
export function ProjectThumb({
  project,
  priority = false,
  className = "aspect-16/10",
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  if (project.image) {
    return (
      <div className={`relative w-full overflow-hidden ${className}`}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  const [from, to] = project.gradient;

  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div className="bg-dots absolute inset-0 opacity-30 mix-blend-overlay" />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />
      <span className="absolute bottom-5 left-6 font-mono text-2xl font-semibold tracking-tight text-white/90">
        {project.name}
      </span>
    </div>
  );
}
