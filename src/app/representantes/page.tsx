import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { RepDirectory } from "@/components/reps/RepDirectory";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Encontre um representante",
  description:
    "Encontre vendedores e distribuidores da Lindóya Mineral na sua região. Busque por estado e cidade e fale direto pelo WhatsApp.",
  alternates: { canonical: "/representantes" },
};

export default function RepresentantesPage() {
  return (
    <>
      <PageHero
        eyebrow="Rede comercial"
        title="Encontre um representante perto de você."
        description="Busque vendedores e distribuidores por estado e cidade e fale direto pelo WhatsApp para comprar ou revender Lindóya Mineral."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Representantes" }]}
      />

      <section className="bg-silver-texture">
        <div className="container py-16 sm:py-20">
          <RepDirectory />
        </div>
      </section>

      <CTASection
        title="Quer fazer parte da nossa rede?"
        description="Seja um vendedor ou distribuidor e leve a Lindóya Mineral para a sua região."
        primary={{ label: "Seja um vendedor", href: "/seja-um-vendedor" }}
        secondary={{ label: "Seja um distribuidor", href: "/seja-um-distribuidor" }}
      />
    </>
  );
}
