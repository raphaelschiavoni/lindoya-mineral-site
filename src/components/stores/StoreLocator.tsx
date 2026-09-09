"use client";

import { useMemo, useState } from "react";
import { Search, MapPinOff } from "lucide-react";
import {
  stores,
  storeTypeLabels,
  brazilianStates,
  type StoreType,
} from "@/data/stores";
import { trackEvent } from "@/lib/analytics";
import { StoreCard } from "./StoreCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { Field, inputBase } from "@/components/forms/Field";

export function StoreLocator() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    return stores.filter((s) => {
      const matchState = !state || s.state === state;
      const matchCity = !city || s.city.toLowerCase().includes(city.toLowerCase());
      const matchType = !type || s.type === type;
      return matchState && matchCity && matchType;
    });
  }, [state, city, type]);

  return (
    <div className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          trackEvent({ event: "search_store", state, city, type });
        }}
        className="grid gap-4 rounded-card border border-silver bg-white p-5 shadow-card sm:grid-cols-2 lg:grid-cols-4 lg:items-end"
      >
        <Field label="Estado" htmlFor="s-state">
          <select id="s-state" className={inputBase} value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">Todos</option>
            {brazilianStates.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Cidade / Bairro" htmlFor="s-city">
          <input id="s-city" className={inputBase} value={city} onChange={(e) => setCity(e.target.value)} placeholder="Digite a cidade" />
        </Field>
        <Field label="Tipo de estabelecimento" htmlFor="s-type">
          <select id="s-type" className={inputBase} value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Todos</option>
            {(Object.keys(storeTypeLabels) as StoreType[]).map((t) => (
              <option key={t} value={t}>
                {storeTypeLabels[t]}
              </option>
            ))}
          </select>
        </Field>
        <Button type="submit" variant="primary" size="md" className="w-full">
          <Search className="h-4 w-4" /> Buscar pontos de venda
        </Button>
      </form>

      <div className="rounded-card border border-dashed border-gold/40 bg-offwhite px-4 py-3 font-sans text-xs text-muted">
        Os pontos de venda abaixo são exemplos demonstrativos. A lista oficial
        será integrada assim que os dados forem disponibilizados.
      </div>

      {results.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={MapPinOff}
          title={submitted ? "Nenhum ponto encontrado" : "Refine sua busca"}
          description="Não encontramos pontos de venda para os filtros selecionados. Fale conosco pelo WhatsApp para saber onde comprar."
        />
      )}
    </div>
  );
}
