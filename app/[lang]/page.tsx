import { notFound } from "next/navigation";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { StackMarquee } from "@/components/sections/stack-marquee";
import { Testimonials } from "@/components/sections/testimonials";
import { JsonLd } from "@/components/json-ld";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <JsonLd locale={lang} dict={dict} />
      <Hero locale={lang} dict={dict} />
      <StackMarquee dict={dict} />
      <Services locale={lang} dict={dict} />
      <Projects locale={lang} dict={dict} limit={4} />
      <Process dict={dict} />
      <About locale={lang} dict={dict} />
      <Testimonials locale={lang} dict={dict} />
      <Faq dict={dict} />
      <Contact locale={lang} dict={dict} />
    </>
  );
}
