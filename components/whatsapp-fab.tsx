"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { whatsappLink } from "@/content/site";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";

/** Botón flotante de WhatsApp. Aparece cuando el usuario ya bajó un poco. */
export function WhatsappFab({
  locale,
  label,
  message,
}: {
  locale: Locale;
  label: string;
  message: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      lang={locale}
      className={cn(
        "fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-[#04220f] shadow-[0_12px_40px_-8px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <Icon name="whatsapp" size={28} />
    </a>
  );
}
