import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { VendorForm } from "@/components/forms/VendorForm";

export const metadata: Metadata = {
  title: "Seja um vendedor",
  description:
    "Torne-se vendedor/representante da Lindóya Mineral. Preencha seus dados e fale com nossa equipe comercial.",
  alternates: { canonical: "/seja-um-vendedor" },
};

const benefits = [
  "Marca de tradição e identidade forte",
  "Portfólio para diferentes canais de venda",
  "Apoio comercial e materiais de divulgação",
  "Flexibilidade para atuar na sua região",
];

export default function SejaUmVendedorPage() {
  return (
    <>
      <PageHero
        eyebrow="Seja um vendedor"
        title="Represente a Lindóya Mineral na sua região."
        description="Buscamos vendedores e representantes que valorizam qualidade e relacionamento. Preencha seus dados e fale com nossa equipe comercial."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Seja um vendedor" }]}
      />

      <section className="bg-silver-texture">
        <div className="container grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Oportunidade"
              title="Uma marca de tradição para você representar."
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
              Ao enviar, sua solicitação é encaminhada à equipe comercial, que
              avaliará as informações e retornará o contato.
            </p>
          </div>

          <div className="rounded-card border border-silver bg-white p-6 shadow-card sm:p-8">
            <VendorForm />
          </div>
        </div>
      </section>
    </>
  );
}
