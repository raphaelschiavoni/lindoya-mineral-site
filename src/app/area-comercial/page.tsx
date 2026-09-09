import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CommercialArea } from "@/components/commercial/CommercialArea";

export const metadata: Metadata = {
  title: "Área comercial",
  description:
    "Materiais de apoio para vendedores, representantes e distribuidores da Lindóya Mineral: catálogo, tabela comercial, fotos, logotipos e apresentações.",
  alternates: { canonical: "/area-comercial" },
  robots: { index: false, follow: false },
};

export default function AreaComercialPage() {
  return (
    <>
      <PageHero
        eyebrow="Área comercial"
        title="Materiais para vendedores e distribuidores."
        description="Catálogos, tabelas, fotos, logotipos e apresentações para apoiar as vendas e a divulgação da Lindóya Mineral."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Área comercial" }]}
      />

      <section className="bg-silver-texture">
        <div className="container py-16 sm:py-20">
          <CommercialArea />
        </div>
      </section>
    </>
  );
}
