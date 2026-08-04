"use server";

import { Resend } from "resend";
import { site } from "@/content/site";
import { defaultLocale, getDictionary, isLocale } from "@/lib/i18n";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  /** Cambia en cada envío para que el formulario sepa que hay respuesta nueva. */
  key?: number;
};

export const initialContactState: ContactState = { status: "idle" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const rawLocale = String(formData.get("locale") ?? "");
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const errors = dict.contact.form.errors;

  // Campo trampa: invisible para las personas, irresistible para los bots.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success", message: dict.contact.form.success, key: Date.now() };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = errors.name;
  if (!EMAIL_PATTERN.test(email)) fieldErrors.email = errors.email;
  if (message.length < 20) fieldErrors.message = errors.message;

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors, key: Date.now() };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Sin clave no se puede enviar. En desarrollo, al menos deja ver el mensaje.
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[contacto] Falta RESEND_API_KEY. Mensaje recibido:\n${JSON.stringify(
          { name, email, budget, message },
          null,
          2,
        )}`,
      );
    }
    return { status: "error", message: errors.notConfigured, key: Date.now() };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: site.contactFromEmail,
      to: site.email,
      replyTo: email,
      subject: `Nuevo contacto desde el portafolio — ${name}`,
      text: [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Presupuesto: ${budget || "sin indicar"}`,
        `Idioma: ${locale}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contacto] Resend devolvió un error:", error);
      return { status: "error", message: errors.generic, key: Date.now() };
    }

    return { status: "success", message: dict.contact.form.success, key: Date.now() };
  } catch (cause) {
    console.error("[contacto] No se pudo enviar el correo:", cause);
    return { status: "error", message: errors.generic, key: Date.now() };
  }
}
