"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { distributorSchema, type DistributorFormData } from "@/lib/schemas";
import { maskPhone, maskCnpj, isValidCnpj } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { brazilianStates } from "@/data/stores";
import { Button } from "@/components/ui/Button";
import { Field, inputBase } from "./Field";
import { FormSuccess, FormError } from "./FormFeedback";

export function DistributorForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [cnpjStatus, setCnpjStatus] = useState<
    "idle" | "loading" | "filled" | "notfound" | "error"
  >("idle");
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DistributorFormData>({ resolver: zodResolver(distributorSchema) });

  const cnpjReg = register("cnpj");

  async function lookupCnpj(value: string) {
    const digits = value.replace(/\D/g, "");
    if (!isValidCnpj(digits)) return;
    setCnpjStatus("loading");
    try {
      const res = await fetch(`/api/cnpj/${digits}`);
      const json = await res.json().catch(() => ({ ok: false }));
      if (res.status === 404) {
        setCnpjStatus("notfound");
        return;
      }
      if (!res.ok || !json.ok) {
        setCnpjStatus("error");
        return;
      }
      const d = json.data;
      if (d.razaoSocial || d.nomeFantasia)
        setValue("company", d.nomeFantasia || d.razaoSocial, { shouldValidate: true });
      if (d.municipio) setValue("city", d.municipio, { shouldValidate: true });
      if (d.uf) setValue("state", d.uf, { shouldValidate: true });
      setCnpjStatus("filled");
    } catch {
      setCnpjStatus("error");
    }
  }

  async function onSubmit(data: DistributorFormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/distributor", {
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
        title="Recebemos suas informações."
        message="Nossa equipe comercial analisará os dados e entrará em contato."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      {status === "error" && (
        <FormError message="Não foi possível enviar agora. Tente novamente em instantes." />
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome completo" htmlFor="d-name" required error={errors.name?.message}>
          <input id="d-name" className={inputBase} {...register("name")} autoComplete="name" />
        </Field>
        <Field label="Empresa" htmlFor="d-company" required error={errors.company?.message}>
          <input id="d-company" className={inputBase} {...register("company")} autoComplete="organization" />
        </Field>
        <Field label="CNPJ" htmlFor="d-cnpj" required error={errors.cnpj?.message}>
          <input
            id="d-cnpj"
            className={inputBase}
            {...cnpjReg}
            inputMode="numeric"
            placeholder="00.000.000/0000-00"
            onChange={(e) => {
              setValue("cnpj", maskCnpj(e.target.value));
              if (cnpjStatus !== "idle") setCnpjStatus("idle");
            }}
            onBlur={(e) => {
              cnpjReg.onBlur(e);
              void lookupCnpj(e.target.value);
            }}
          />
          {cnpjStatus === "loading" && (
            <span className="font-sans text-xs text-muted">Consultando Receita…</span>
          )}
          {cnpjStatus === "filled" && (
            <span className="font-sans text-xs font-medium text-gold">
              ✓ Dados preenchidos automaticamente pela Receita
            </span>
          )}
          {cnpjStatus === "notfound" && (
            <span className="font-sans text-xs text-muted">
              CNPJ não encontrado — preencha os dados manualmente.
            </span>
          )}
          {cnpjStatus === "error" && (
            <span className="font-sans text-xs text-muted">
              Não foi possível consultar agora — preencha manualmente.
            </span>
          )}
        </Field>
        <Field label="E-mail" htmlFor="d-email" required error={errors.email?.message}>
          <input id="d-email" type="email" className={inputBase} {...register("email")} autoComplete="email" />
        </Field>
        <Field label="WhatsApp" htmlFor="d-whatsapp" required error={errors.whatsapp?.message}>
          <input
            id="d-whatsapp"
            className={inputBase}
            {...register("whatsapp")}
            inputMode="tel"
            onChange={(e) => setValue("whatsapp", maskPhone(e.target.value))}
          />
        </Field>
        <div className="grid grid-cols-[1fr_120px] gap-3">
          <Field label="Cidade" htmlFor="d-city" required error={errors.city?.message}>
            <input id="d-city" className={inputBase} {...register("city")} />
          </Field>
          <Field label="Estado" htmlFor="d-state" required error={errors.state?.message}>
            <select id="d-state" className={inputBase} defaultValue="" {...register("state")}>
              <option value="" disabled>
                UF
              </option>
              {brazilianStates.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <Field label="Regiões atendidas" htmlFor="d-regions" required error={errors.regions?.message}>
          <input id="d-regions" className={inputBase} {...register("regions")} placeholder="Ex.: Região metropolitana, interior..." />
        </Field>
        <Field label="Segmento de atuação" htmlFor="d-segment" required error={errors.segment?.message}>
          <input id="d-segment" className={inputBase} {...register("segment")} placeholder="Ex.: distribuidora de bebidas" />
        </Field>
        <Field label="Possui estrutura de distribuição?" htmlFor="d-dist" required error={errors.hasDistribution?.message}>
          <select id="d-dist" className={inputBase} defaultValue="" {...register("hasDistribution")}>
            <option value="" disabled>
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </Field>
        <Field label="Possui frota?" htmlFor="d-fleet" required error={errors.hasFleet?.message}>
          <select id="d-fleet" className={inputBase} defaultValue="" {...register("hasFleet")}>
            <option value="" disabled>
              Selecione
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </Field>
        <Field label="Marcas / categorias já distribuídas" htmlFor="d-brands">
          <input id="d-brands" className={inputBase} {...register("currentBrands")} />
        </Field>
        <Field label="Volume estimado de compra" htmlFor="d-volume">
          <input id="d-volume" className={inputBase} {...register("estimatedVolume")} placeholder="Ex.: caixas / mês" />
        </Field>
      </div>

      <Field label="Mensagem" htmlFor="d-message">
        <textarea id="d-message" rows={4} className={inputBase} {...register("message")} />
      </Field>

      <label className="flex items-start gap-3 font-sans text-sm text-muted">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--gold-primary)]" {...register("wantsExclusivity")} />
        <span>Gostaria de solicitar uma análise de exclusividade territorial.</span>
      </label>

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
        {status === "sending" ? "Enviando..." : "Enviar interesse comercial"}
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
