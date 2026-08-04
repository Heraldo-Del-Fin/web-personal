import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { defaultLocale, getDictionary, isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const alt = "Portafolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen que se ve al compartir el enlace en WhatsApp, LinkedIn o X. */
export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : defaultLocale;
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #08080C 45%, #1a1140 100%)",
          color: "#F5F5F7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
              fontSize: 28,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {site.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 600 }}>{site.name}</span>
            <span style={{ fontSize: 22, color: "#9A9AAE" }}>{site.role[locale]}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05, maxWidth: 900 }}>
            {dict.hero.titleLead} {dict.hero.titleHighlight}
          </span>
          <span style={{ fontSize: 30, color: "#9A9AAE", maxWidth: 820 }}>
            {dict.meta.description}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24 }}>
          <span style={{ width: 12, height: 12, borderRadius: 999, background: "#25D366" }} />
          <span style={{ color: "#9A9AAE" }}>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    size,
  );
}
