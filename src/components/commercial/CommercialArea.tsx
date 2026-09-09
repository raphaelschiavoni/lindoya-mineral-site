"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Unlock, LogOut, ShieldCheck, FileText } from "lucide-react";
import {
  commercialMaterials,
  materialCategories,
} from "@/data/commercial-materials";
import { accessSchema, type AccessFormData } from "@/lib/schemas";
import { maskPhone } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { CommercialMaterialCard } from "./CommercialMaterialCard";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Field, inputBase } from "@/components/forms/Field";
import { FormError } from "@/components/forms/FormFeedback";

/**
 * Área comercial — fase leve.
 * O visitante faz um cadastro curto e os downloads liberam na hora (sem login).
 * A liberação fica marcada no navegador (localStorage). Para controle real de
 * acesso (revogar, aprovar), migrar para auth + banco.
 */
const ACCESS_KEY = "lindoya-commercial-access";

export function CommercialArea() {
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [category, setCategory] = useState("Todos");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AccessFormData>({ resolver: zodResolver(accessSchema) });

  useEffect(() => {
    try {
      if (localStorage.getItem(ACCESS_KEY)) setUnlocked(true);
    } catch {
      /* storage indisponível */
    }
    setMounted(true);
  }, []);

  async function onSubmit(data: AccessFormData) {
    setStatus("sending");
    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      trackEvent({ event: "download_commercial_material", action: "unlock", profile: data.profile });
      try {
        localStorage.setItem(ACCESS_KEY, JSON.stringify({ email: data.email }));
      } catch {
        /* ignore */
      }
      setUnlocked(true);
    } catch {
      setStatus("error");
    }
  }

  function signOut() {
    try {
      localStorage.removeItem(ACCESS_KEY);
    } catch {
      /* ignore */
    }
    setUnlocked(false);
  }

  // Evita flash antes de ler o localStorage
  if (!mounted) {
    return <div className="min-h-[280px]" aria-hidden />;
  }

  // -------- Cadastro (bloqueado) --------
  if (!unlocked) {
    return (
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-gold">
            <Lock className="h-5 w-5" />
          </span>
          <h2 className="font-serif text-2xl font-medium text-navy sm:text-3xl">
            Cadastre-se para acessar os materiais
          </h2>
          <p className="font-sans leading-relaxed text-muted">
            Preencha os dados abaixo e libere o acesso imediato a catálogo, tabela
            comercial, manual da marca, fotos e materiais de divulgação.
          </p>
          <GoldDivider align="left" />
          <ul className="flex flex-col gap-2 font-sans text-sm text-muted">
            {commercialMaterials.slice(0, 5).map((m) => (
              <li key={m.id} className="flex items-center gap-2">
                <FileText className="h-4 w-4 shrink-0 text-gold" /> {m.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-card border border-silver bg-white p-6 shadow-card sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
            {status === "error" && (
              <FormError message="Não foi possível liberar agora. Tente novamente em instantes." />
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome" htmlFor="a-name" required error={errors.name?.message}>
                <input id="a-name" className={inputBase} {...register("name")} autoComplete="name" />
              </Field>
              <Field label="E-mail" htmlFor="a-email" required error={errors.email?.message}>
                <input id="a-email" type="email" className={inputBase} {...register("email")} autoComplete="email" />
              </Field>
              <Field label="WhatsApp" htmlFor="a-whatsapp" required error={errors.whatsapp?.message}>
                <input
                  id="a-whatsapp"
                  className={inputBase}
                  {...register("whatsapp")}
                  inputMode="tel"
                  onChange={(e) => setValue("whatsapp", maskPhone(e.target.value))}
                />
              </Field>
              <Field label="Empresa (opcional)" htmlFor="a-company">
                <input id="a-company" className={inputBase} {...register("company")} autoComplete="organization" />
              </Field>
              <Field label="Seu perfil" htmlFor="a-profile" required error={errors.profile?.message} className="sm:col-span-2">
                <select id="a-profile" className={inputBase} defaultValue="" {...register("profile")}>
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="distribuidor">Distribuidor</option>
                  <option value="vendedor">Vendedor / representante</option>
                  <option value="lojista">Lojista / ponto de venda</option>
                  <option value="outro">Outro</option>
                </select>
              </Field>
            </div>
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
              {status === "sending" ? "Liberando..." : "Liberar acesso aos materiais"}
              <Unlock className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    );
  }

  // -------- Materiais (liberado) --------
  const filtered =
    category === "Todos"
      ? commercialMaterials
      : commercialMaterials.filter((m) => m.category === category);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 rounded-card border border-gold/30 bg-offwhite p-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex items-center gap-2 font-sans text-sm text-navy">
          <ShieldCheck className="h-5 w-5 text-gold" />
          Acesso liberado — você pode baixar todos os materiais.
        </span>
        <button
          type="button"
          onClick={signOut}
          className="inline-flex items-center gap-1.5 font-sans text-sm text-muted transition-colors hover:text-navy"
        >
          <LogOut className="h-4 w-4" /> Sair
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {materialCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={cn(
              "rounded-full border px-4 py-2 font-sans text-sm font-medium transition-all",
              category === c
                ? "border-navy bg-navy text-white"
                : "border-silver bg-white text-navy hover:border-gold hover:text-gold",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        onClickCapture={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest("a[download]")) {
            trackEvent({ event: "download_commercial_material" });
          }
        }}
      >
        {filtered.map((material) => (
          <CommercialMaterialCard key={material.id} material={material} unlocked />
        ))}
      </div>
    </div>
  );
}
