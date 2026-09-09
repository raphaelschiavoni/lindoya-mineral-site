import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Nossos produtos",
  description:
    "Conheça a linha Lindóya Mineral — água mineral natural com e sem gás, nas versões premium, PET e galões retornáveis, para casa, food service e distribuição.",
  alternates: { canonical: "/produtos" },
};

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Nossos produtos"
        description="Conheça a linha Lindóya Mineral e encontre a opção ideal para sua casa, seu estabelecimento ou sua operação de distribuição."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Produtos" }]}
      />

      <section className="bg-silver-texture">
        <div className="container py-16 sm:py-20">
          <ProductGrid withFilters />
        </div>
      </section>

      <CTASection
        title="Precisa de uma cotação?"
        description="Nossa equipe comercial ajuda você a escolher a linha ideal para o seu canal."
        primary={{ label: "Falar com o comercial", href: "/contato" }}
        secondary={{ label: "Seja um distribuidor", href: "/seja-um-distribuidor" }}
      />
    </>
  );
}
