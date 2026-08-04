import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";
import { projects } from "@/content/projects";
import { projectsHref, type Locale } from "@/lib/i18n";

export function Projects({
  locale,
  dict,
  limit,
}: {
  locale: Locale;
  dict: Dictionary;
  /** Cuántos mostrar. Sin valor, se muestran todos. */
  limit?: number;
}) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <Section id="proyectos">
      <SectionHeading
        eyebrow={dict.projects.label}
        title={dict.projects.title}
        subtitle={dict.projects.subtitle}
      />

      {list.length === 0 ? (
        <p className="mt-12 text-muted">{dict.projects.empty}</p>
      ) : (
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {list.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 100} className="h-full">
              <ProjectCard
                project={project}
                locale={locale}
                dict={dict}
                priority={index === 0}
              />
            </Reveal>
          ))}
        </div>
      )}

      {list.length < projects.length ? (
        <Reveal className="mt-12 flex justify-center">
          <Button href={projectsHref(locale)} variant="secondary" size="lg">
            {dict.projects.all}
            <Icon name="arrowRight" size={18} />
          </Button>
        </Reveal>
      ) : null}
    </Section>
  );
}
