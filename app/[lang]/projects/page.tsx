import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";
import { getDictionary, isLocale, projectsHref } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);
  return {
    title: dict.meta.projectsTitle,
    description: dict.projects.subtitle,
    alternates: {
      canonical: projectsHref(lang),
      languages: { es: projectsHref("es"), en: projectsHref("en") },
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <div className="pt-20" />
      <Projects locale={lang} dict={dict} />
      <Contact locale={lang} dict={dict} />
    </>
  );
}
