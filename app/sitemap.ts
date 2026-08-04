import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { locales, projectsHref } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home = locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}`])),
    },
  }));

  const projectsIndex = locales.map((locale) => ({
    url: `${site.url}${projectsHref(locale)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudies = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${site.url}${projectsHref(locale, project.slug)}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  );

  return [...home, ...projectsIndex, ...caseStudies];
}
