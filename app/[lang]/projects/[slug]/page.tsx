import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectThumb } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import type { Dictionary } from "@/content/dictionaries/types";
import { getNextProject, getProject, projects, type Project } from "@/content/projects";
import { getDictionary, isLocale, projectsHref, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(lang) || !project) return {};

  return {
    title: `${project.name} — ${project.client[lang]}`,
    description: project.tagline[lang],
    alternates: {
      canonical: projectsHref(lang, slug),
      languages: {
        es: projectsHref("es", slug),
        en: projectsHref("en", slug),
      },
    },
    openGraph: {
      title: project.name,
      description: project.tagline[lang],
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const project = getProject(slug);
  if (!project) notFound();

  const dict = getDictionary(lang);
  const next = getNextProject(slug);

  return (
    <article>
      <Container className="pt-32 pb-12">
        <Link
          href={projectsHref(lang)}
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
        >
          <Icon
            name="arrowLeft"
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          {dict.caseStudy.back}
        </Link>

        <div className="mt-8 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
            {project.year ? (
              <>
                <span>{project.year}</span>
                <span aria-hidden="true">·</span>
              </>
            ) : null}
            <span>{project.client[lang]}</span>
          </div>
          <h1 className="text-display font-semibold text-balance">{project.name}</h1>
          <p className="max-w-2xl text-xl text-muted text-pretty">
            {project.tagline[lang]}
          </p>

          {project.url ? (
            <div className="mt-2">
              <Button href={project.url} variant="secondary">
                {dict.caseStudy.visitSite}
                <Icon name="arrowUpRight" size={16} />
              </Button>
            </div>
          ) : null}
        </div>
      </Container>

      <Container>
        <Reveal className="card-glow overflow-hidden rounded-3xl border border-border">
          <ProjectThumb project={project} priority className="aspect-16/9" />
        </Reveal>
      </Container>

      {/* Sin cifras medidas, la franja no aparece. */}
      {project.metrics.length > 0 ? (
        <Container className="pt-16">
          <div className="grid gap-3 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.value + metric.label[lang]}
                className="rounded-2xl border border-border bg-surface px-6 py-6"
              >
                <p className="font-mono text-3xl font-semibold text-gradient">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-muted">{metric.label[lang]}</p>
              </div>
            ))}
          </div>
        </Container>
      ) : null}

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div className="flex flex-col gap-10">
            <Block title={dict.caseStudy.overview} text={project.summary[lang]} />
            <Block title={dict.caseStudy.challenge} text={project.challenge[lang]} />
            <Block title={dict.caseStudy.solution} text={project.solution[lang]} />
            <Block
              title={dict.caseStudy.result}
              text={project.result[lang]}
              highlight
            />
          </div>

          <aside className="flex h-fit flex-col gap-6 rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-28">
            <Meta title={dict.caseStudy.client} items={[project.client[lang]]} />
            <Meta title={dict.caseStudy.year} items={[project.year]} />
            <Meta title={dict.caseStudy.services} items={project.services[lang]} />
            <Meta title={dict.caseStudy.stack} items={project.stack} />
          </aside>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-col gap-8 rounded-3xl border border-border bg-linear-to-b from-accent/10 to-surface p-8 text-center sm:p-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-title font-semibold text-balance">
              {dict.caseStudy.ctaTitle}
            </h2>
            <p className="mx-auto max-w-md text-muted text-pretty">
              {dict.caseStudy.ctaSubtitle}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={`/${lang}#contacto`} size="lg">
              {dict.caseStudy.ctaButton}
              <Icon name="arrowRight" size={18} />
            </Button>
            {next ? <NextProjectLink next={next} locale={lang} dict={dict} /> : null}
          </div>
        </div>
      </Section>
    </article>
  );
}

/** Un apartado vacío no se pinta: así una ficha a medio llenar no deja huecos. */
function Block({
  title,
  text,
  highlight = false,
}: {
  title: string;
  text: string;
  highlight?: boolean;
}) {
  if (!text) return null;

  return (
    <Reveal className="flex flex-col gap-3">
      <h2 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{title}</h2>
      <p
        className={
          highlight
            ? "max-w-prose text-xl text-fg text-pretty"
            : "max-w-prose text-lg text-muted text-pretty"
        }
      >
        {text}
      </p>
    </Reveal>
  );
}

function Meta({ title, items }: { title: string; items: string[] }) {
  const filled = items.filter(Boolean);
  if (filled.length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">{title}</h2>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
        {filled.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function NextProjectLink({
  next,
  locale,
  dict,
}: {
  next: Project;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Button href={projectsHref(locale, next.slug)} variant="secondary" size="lg">
      {dict.caseStudy.nextProject}: {next.name}
      <Icon name="arrowRight" size={18} />
    </Button>
  );
}
