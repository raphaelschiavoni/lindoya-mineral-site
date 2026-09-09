"use client";

import { useMemo, useState } from "react";
import { Search, UsersRound } from "lucide-react";
import { reps, repTypeLabels, type RepType } from "@/data/reps";
import { brazilianStates } from "@/data/stores";
import { trackEvent } from "@/lib/analytics";
import { RepCard } from "./RepCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { Field, inputBase } from "@/components/forms/Field";
import { cn } from "@/lib/utils";

const typeTabs: { key: "todos" | RepType; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "vendedor", label: "Vendedores" },
  { key: "distribuidor", label: "Distribuidores" },
];

export function RepDirectory() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState<"todos" | RepType>("todos");
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    const q = city.trim().toLowerCase();
    return reps.filter((r) => {
      const matchState = !state || r.state === state;
      const matchType = type === "todos" || r.type === type;
      const matchCity =
        !q ||
        r.city.toLowerCase().includes(q) ||
        r.regions.some((rg) => rg.toLowerCase().includes(q));
      return matchState && matchType && matchCity;
    });
  }, [state, city, type]);

  return (
    <div className="flex flex-col gap-8">
      {/* Abas por tipo */}
      <div className="flex flex-wrap justify-center gap-2">
        {typeTabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setType(t.key)}
            aria-pressed={type === t.key}
            className={cn(
              "rounded-full border px-4 py-2 font-sans text-sm font-medium transition-all",
              type === t.key
                ? "border-navy bg-navy text-white"
                : "border-silver bg-white text-navy hover:border-gold hover:text-gold",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Busca */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          trackEvent({ event: "search_store", state, city, kind: "reps" });
        }}
        className="grid gap-4 rounded-card border border-silver bg-white p-5 shadow-card sm:grid-cols-[160px_1fr_auto] sm:items-end"
      >
        <Field label="Estado" htmlFor="r-state">
          <select id="r-state" className={inputBase} value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">Todos</option>
            {brazilianStates.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Cidade ou região" htmlFor="r-city">
          <input id="r-city" className={inputBase} value={city} onChange={(e) => setCity(e.target.value)} placeholder="Digite a cidade ou região" />
        </Field>
        <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
          <Search className="h-4 w-4" /> Buscar
        </Button>
      </form>

      <div className="rounded-card border border-dashed border-gold/40 bg-offwhite px-4 py-3 font-sans text-xs text-muted">
        Os contatos abaixo são exemplos demonstrativos. A rede oficial de
        vendedores e distribuidores será publicada assim que os dados forem
        disponibilizados.
      </div>

      {results.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((rep) => (
            <RepCard key={rep.id} rep={rep} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={UsersRound}
          title={submitted ? "Nenhum representante encontrado" : "Refine sua busca"}
          description="Não encontramos um representante para os filtros selecionados. Fale com nosso comercial que direcionamos você."
        >
          <Button href="/contato" variant="secondary" size="md">
            Falar com o comercial
          </Button>
        </EmptyState>
      )}
    </div>
  );
}
