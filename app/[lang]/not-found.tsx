import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/section";
import { defaultLocale, getDictionary } from "@/lib/i18n";

/**
 * `not-found` no recibe params, así que se muestra en el idioma por defecto
 * con el enlace de vuelta al inicio.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-32 text-center">
      <p className="font-mono text-sm tracking-[0.3em] text-accent uppercase">Error 404</p>
      <h1 className="text-title font-semibold text-balance">
        Esta página no existe · This page doesn&apos;t exist
      </h1>
      <p className="max-w-md text-muted text-pretty">
        El enlace que seguiste no lleva a ninguna parte. Vuelve al inicio y sigue desde ahí.
      </p>
      <Button href={`/${defaultLocale}`} size="lg">
        {dict.nav.cta}
        <Icon name="arrowRight" size={18} />
      </Button>
    </Container>
  );
}
