"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { maskPhone } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { Field, inputBase } from "./Field";
import { FormSuccess, FormError } from "./FormFeedback";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactFormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      trackEvent({ event: "submit_contact_form", subject: data.subject });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <FormSuccess
        title="Mensagem enviada!"
        message="Recebemos seu contato e responderemos em breve. Obrigado pelo interesse na Lindóya Mineral."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      {status === "error" && (
        <FormError message="Não foi possível enviar agora. Tente novamente em instantes." />
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo" htmlFor="name" required error={errors.name?.message}>
          <input id="name" className={inputBase} {...register("name")} autoComplete="name" />
        </Field>
        <Field label="E-mail" htmlFor="email" required error={errors.email?.message}>
          <input id="email" type="email" className={inputBase} {...register("email")} autoComplete="email" />
        </Field>
        <Field label="Telefone / WhatsApp" htmlFor="phone" required error={errors.phone?.message}>
          <input
            id="phone"
            className={inputBase}
            {...register("phone")}
            inputMode="tel"
            autoComplete="tel"
            onChange={(e) => setValue("phone", maskPhone(e.target.value))}
          />
        </Field>
        <Field label="Assunto" htmlFor="subject" required error={errors.subject?.message}>
          <input id="subject" className={inputBase} {...register("subject")} />
        </Field>
      </div>

      <Field label="Mensagem" htmlFor="message" required error={errors.message?.message}>
        <textarea id="message" rows={5} className={inputBase} {...register("message")} />
      </Field>

      <label className="flex items-start gap-3 font-sans text-sm text-muted">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--gold-primary)]" {...register("consent")} />
        <span>
          Li e aceito a Política de Privacidade e autorizo o contato da Lindóya Mineral.
          {errors.consent && (
            <span className="mt-1 block text-xs text-sparkling">{errors.consent.message}</span>
          )}
        </span>
      </label>

      <Button type="submit" variant="primary" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
