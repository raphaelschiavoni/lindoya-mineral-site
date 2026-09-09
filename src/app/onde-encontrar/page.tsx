import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { StoreLocator } from "@/components/stores/StoreLocator";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Onde encontrar",
  description:
    "Encontre os pontos de venda da Lindóya Mineral mais próximos de você. Busque por estado, cidade e tipo de estabelecimento.",
  alternates: { canonical: "/onde-encontrar" },
};

export default function OndeEncontrarPage() {
  return (
    <>
      <PageHero
        eyebrow="Onde encontrar"
        title="Lindóya Mineral mais perto de você."
        description="Busque pontos de venda por estado, cidade e tipo de estabelecimento. A lista oficial será integrada assim que os dados forem disponibilizados."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Onde encontrar" }]}
      />

      <section className="bg-silver-texture">
        <div className="container py-16 sm:py-20">
          <StoreLocator />
        </div>
      </section>

      <CTASection
        title="Não encontrou perto de você?"
        description="Fale com nossa equipe para saber onde comprar ou para levar a Lindóya Mineral ao seu estabelecimento."
        primary={{ label: "Falar com o comercial", href: "/contato" }}
        secondary={{ label: "Seja um distribuidor", href: "/seja-um-distribuidor" }}
      />
    </>
  );
}
