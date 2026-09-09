import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { DistributorForm } from "@/components/forms/DistributorForm";

export const metadata: Metadata = {
  title: "Seja um distribuidor",
  description:
    "Preencha seus dados e fale com a equipe comercial da Lindóya Mineral. Buscamos parceiros que valorizam qualidade, relacionamento e crescimento.",
  alternates: { canonical: "/seja-um-distribuidor" },
};

const benefits = [
  "Marca de tradição e identidade forte",
  "Portfólio para diferentes canais de venda",
  "Suporte comercial e materiais de apoio",
  "Relacionamento de longo prazo",
  "Possibilidade de análise de exclusividade",
];

export default function SejaUmDistribuidorPage() {
  return (
    <>
      <PageHero
        eyebrow="Seja um distribuidor"
        title="Leve Lindóya Mineral para a sua região."
        description="Buscamos parceiros que valorizam qualidade, relacionamento e crescimento. Preencha seus dados e fale com nossa equipe comercial."
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Seja um distribuidor" },
        ]}
      />

      <section className="bg-silver-texture">
        <div className="container grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Parceria"
              title="Pureza para sua casa. Oportunidade para o seu negócio."
              align="left"
            />
            <ul className="flex flex-col gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 font-sans text-navy">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <GoldDivider align="left" />
            <p className="font-sans text-sm leading-relaxed text-muted">
              Ao enviar o formulário, sua solicitação é encaminhada à equipe
              comercial, que avaliará as informações e retornará o contato.
            </p>
          </div>

          <div className="rounded-card border border-silver bg-white p-6 shadow-card sm:p-8">
            <DistributorForm />
          </div>
        </div>
      </section>
    </>
  );
}
