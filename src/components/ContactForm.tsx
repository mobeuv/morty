"use client";

import { useState, type FormEvent } from "react";
import { Loader2, MailCheck, Send } from "lucide-react";
import { site } from "@/config/site";
import { content } from "@/config/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "opening" | "sent" | "not-configured";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-navy-900 placeholder:text-faint transition-colors focus:outline-none focus:ring-2";
const fieldNormal = "border-navy-900/15 focus:border-brand-600 focus:ring-brand-600/20";
const fieldError = "border-red-500/60 focus:border-red-500 focus:ring-red-500/20";

export default function ContactForm() {
  const { form } = content.contact;
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(field: keyof typeof values, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = form.errorRequired;
    if (!values.email.trim()) next.email = form.errorRequired;
    else if (!EMAIL_RE.test(values.email.trim())) next.email = form.errorEmail;
    if (!values.message.trim()) next.message = form.errorRequired;
    return next;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);

    if (Object.keys(next).length > 0) {
      const firstInvalid = (
        e.currentTarget.elements.namedItem(Object.keys(next)[0]) as
          | HTMLElement
          | null
      );
      firstInvalid?.focus();
      return;
    }

    if (!site.email) {
      setStatus("not-configured");
      return;
    }

    // Fallback estático honesto: monta um e-mail real no cliente de e-mail
    // do usuário, sem simular envio bem-sucedido.
    const subject = `Contato pelo site — ${values.name}${
      values.company ? ` (${values.company})` : ""
    }`;
    const body = [
      values.message,
      "",
      "—",
      `Nome: ${values.name}`,
      values.company ? `Empresa: ${values.company}` : null,
      `E-mail: ${values.email}`,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("opening");
    window.location.href = href;
    // Pequeno atraso para o feedback não "piscar" antes da transição.
    window.setTimeout(() => setStatus("sent"), 600);
  }

  const fieldErrorId = (field: keyof Errors) => `${field}-error`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-navy-900"
          >
            {form.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder={form.namePlaceholder}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? fieldErrorId("name") : undefined}
            className={cn(fieldBase, errors.name ? fieldError : fieldNormal)}
          />
          {errors.name && (
            <p id={fieldErrorId("name")} className="mt-1.5 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-navy-900"
          >
            {form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder={form.emailPlaceholder}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? fieldErrorId("email") : undefined}
            className={cn(fieldBase, errors.email ? fieldError : fieldNormal)}
          />
          {errors.email && (
            <p
              id={fieldErrorId("email")}
              className="mt-1.5 text-sm text-red-600"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-medium text-navy-900"
        >
          {form.company}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          placeholder={form.companyPlaceholder}
          className={cn(fieldBase, fieldNormal)}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-navy-900"
        >
          {form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder={form.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? fieldErrorId("message") : undefined}
          className={cn(fieldBase, "resize-none", errors.message ? fieldError : fieldNormal)}
        />
        {errors.message && (
          <p
            id={fieldErrorId("message")}
            className="mt-1.5 text-sm text-red-600"
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "opening"}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(23,105,224,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-500 disabled:translate-y-0 disabled:opacity-70 sm:w-auto"
      >
        {status === "opening" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {form.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {form.submit}
          </>
        )}
      </button>

      <div aria-live="polite">
        {status === "sent" && (
          <p className="flex items-start gap-2 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-700">
            <MailCheck className="mt-0.5 h-4 w-4 shrink-0" />
            {form.sent}
          </p>
        )}
        {status === "not-configured" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
            {form.notConfigured}
          </p>
        )}
      </div>
    </form>
  );
}
