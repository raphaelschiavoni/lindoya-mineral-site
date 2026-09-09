"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { vendorSchema, type VendorFormData } from "@/lib/schemas";
import { maskPhone, maskCpf } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { brazilianStates } from "@/data/stores";
import { Button } from "@/components/ui/Button";
import { Field, inputBase } from "./Field";
import { FormSuccess, FormError } from "./FormFeedback";

export function VendorForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<VendorFormData>({ resolver: zodResolver(vendorSchema) });

  async function onSubmit(data: VendorFormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/vendor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      trackEvent({ event: "submit_distributor_form", city: data.city, state: data.state });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <FormSuccess
        title="Recebemos seu interesse!"
        message="Nossa equipe comercial vai analisar seus dados e entrar em contato em breve."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      {status === "error" && (
        <FormError message="Não foi possível enviar agora. Tente novamente em instantes." />
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo" htmlFor="v-name" required error={errors.name?.message}>
          <input id="v-name" className={inputBase} {...register("name")} autoComplete="name" />
        </Field>
        <Field label="CPF" htmlFor="v-cpf" required error={errors.cpf?.message}>
          <input
            id="v-cpf"
            className={inputBase}
            {...register("cpf")}
            inputMode="numeric"
            onChange={(e) => setValue("cpf", maskCpf(e.target.value))}
          />
        </Field>
        <Field label="E-mail" htmlFor="v-email" required error={errors.email?.message}>
          <input id="v-email" type="email" className={inputBase} {...register("email")} autoComplete="email" />
        </Field>
        <Field label="WhatsApp" htmlFor="v-whatsapp" required error={errors.whatsapp?.message}>
          <input
            id="v-whatsapp"
            className={inputBase}
            {...register("whatsapp")}
            inputMode="tel"
            onChange={(e) => setValue("whatsapp", maskPhone(e.target.value))}
          />
        </Field>
        <Field label="Cidade" htmlFor="v-city" required error={errors.city?.message}>
          <input id="v-city" className={inputBase} {...register("city")} />
        </Field>
        <Field label="Estado" htmlFor="v-state" required error={errors.state?.message}>
          <select id="v-state" className={inputBase} defaultValue="" {...register("state")}>
            <option value="" disabled>
              Selecione
            </option>
            {brazilianStates.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Regiões onde pretende atuar"
          htmlFor="v-regions"
          required
          error={errors.regions?.message}
          className="sm:col-span-2"
        >
          <input id="v-regions" className={inputBase} {...register("regions")} placeholder="Ex.: capital, interior, litoral..." />
        </Field>
        <Field
          label="Experiência com vendas (opcional)"
          htmlFor="v-experience"
          className="sm:col-span-2"
        >
          <input id="v-experience" className={inputBase} {...register("experience")} placeholder="Ex.: representante de bebidas há 3 anos" />
        </Field>
      </div>

      <Field label="Mensagem" htmlFor="v-message">
        <textarea id="v-message" rows={4} className={inputBase} {...register("message")} />
      </Field>

      <label className="flex items-start gap-3 font-sans text-sm text-muted">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--gold-primary)]" {...register("consent")} />
        <span>
          Li e aceito a Política de Privacidade e autorizo o contato comercial da Lindóya Mineral.
          {errors.consent && (
            <span className="mt-1 block text-xs text-sparkling">{errors.consent.message}</span>
          )}
        </span>
      </label>

      <Button type="submit" variant="primary" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Quero ser vendedor"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
