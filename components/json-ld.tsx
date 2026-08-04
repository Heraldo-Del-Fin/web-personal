import type { Dictionary } from "@/content/dictionaries/types";
import { services } from "@/content/services";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";

/**
 * Datos estructurados para Google: quién eres, qué ofreces y las preguntas
 * frecuentes (que pueden mostrarse desplegadas en los resultados de búsqueda).
 */
export function JsonLd({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const socialLinks = Object.values(site.socials).filter((url) => url.length > 0);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: `${site.url}/${locale}`,
        jobTitle: site.role[locale],
        email: `mailto:${site.email}`,
        sameAs: socialLinks,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#business`,
        name: site.name,
        description: dict.meta.description,
        url: `${site.url}/${locale}`,
        founder: { "@id": `${site.url}/#person` },
        areaServed: "Worldwide",
        availableLanguage: ["es", "en"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.services.title,
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title[locale],
              description: service.description[locale],
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/${locale}#faq`,
        mainEntity: dict.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
