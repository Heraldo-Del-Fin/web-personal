"use client";

import { useActionState, useEffect, useRef } from "react";
import { initialContactState, submitContact } from "@/app/actions/contact";
import { Icon } from "@/components/ui/icon";
import type { Dictionary } from "@/content/dictionaries/types";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";

const fieldClasses =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

export function ContactForm({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary["contact"]["form"];
}) {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);
  const formRef = useRef<HTMLFormElement>(null);

  // Vacía el formulario cuando un envío termina bien.
  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status, state.key]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5" noValidate>
      <input type="hidden" name="locale" value={locale} />

      {/* Campo trampa antispam: oculto y fuera del orden de tabulación. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={copy.name}
          placeholder={copy.namePlaceholder}
          autoComplete="name"
          error={state.fieldErrors?.name}
        />
        <Field
          id="email"
          type="email"
          label={copy.email}
          placeholder={copy.emailPlaceholder}
          autoComplete="email"
          error={state.fieldErrors?.email}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="budget" className="text-sm font-medium">
          {copy.budget}
        </label>
        <select id="budget" name="budget" className={cn(fieldClasses, "appearance-none")}>
          {copy.budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          {copy.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={copy.messagePlaceholder}
          aria-invalid={state.fieldErrors?.message ? true : undefined}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
          className={cn(
            fieldClasses,
            "resize-y",
            state.fieldErrors?.message && "border-red-500/60",
          )}
        />
        {state.fieldErrors?.message ? (
          <p id="message-error" className="text-sm text-red-400">
            {state.fieldErrors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-7 font-medium text-white shadow-[0_10px_40px_-12px_var(--color-accent)] transition-all hover:bg-accent/90 disabled:opacity-70"
      >
        {pending ? copy.submitting : copy.submit}
        {pending ? null : (
          <Icon
            name="arrowRight"
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        )}
      </button>

      <p
        aria-live="polite"
        className={cn(
          "flex items-start gap-2 text-sm",
          state.status === "success" && "text-[#25D366]",
          state.status === "error" && "text-red-400",
        )}
      >
        {state.message ? (
          <>
            <Icon
              name={state.status === "success" ? "check" : "close"}
              size={16}
              className="mt-0.5 shrink-0"
            />
            {state.message}
          </>
        ) : null}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  type = "text",
  ...props
}: {
  id: string;
  label: string;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClasses, error && "border-red-500/60")}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
