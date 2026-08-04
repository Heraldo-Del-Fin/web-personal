import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon generado con las iniciales sobre el degradado de marca. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
          color: "#fff",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        {site.initials}
      </div>
    ),
    size,
  );
}
