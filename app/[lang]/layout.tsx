import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { site } from "@/content/site";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.title,
      template: `%s · ${site.name}`,
    },
    description: dict.meta.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${lang}`,
      locale: lang === "es" ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    // Ver `site.indexable`: no se indexa hasta estar en el dominio definitivo.
    robots: { index: site.indexable, follow: site.indexable },
  };
}

/**
 * Marca el documento como «puede animar» antes de pintar. Si no hay JavaScript
 * o falta IntersectionObserver, la clase nunca se añade y el contenido se ve
 * siempre: las animaciones de entrada jamás dejan nada invisible.
 */
const jsFlagScript = `if("IntersectionObserver" in window)document.documentElement.classList.add("js")`;

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const locale = lang as Locale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlagScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:text-white"
        >
          {dict.nav.skipToContent}
        </a>
        <SiteHeader locale={locale} nav={dict.nav} lang={dict.lang} />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} dict={dict} />
        <WhatsappFab
          locale={locale}
          label={dict.contact.whatsappCta}
          message={dict.contact.whatsappMessage}
        />
      </body>
    </html>
  );
}
