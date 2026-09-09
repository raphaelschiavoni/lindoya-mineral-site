import type { Metadata } from "next";
import Image from "next/image";
import {
  TrendingUp,
  Boxes,
  Headset,
  FileImage,
  Store,
  Building2,
  UtensilsCrossed,
  Hotel,
  Coffee,
  Dumbbell,
  PartyPopper,
  ShoppingBag,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Button } from "@/components/ui/Button";
import { distributorFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Distribuição",
  description:
    "Seja um parceiro Lindóya Mineral. Vantagens comerciais, portfólio, segmentos atendidos e suporte ao distribuidor para levar uma marca de tradição à sua região.",
  alternates: { canonical: "/distribuidores" },
};

const advantages = [
  { icon: TrendingUp, title: "Marca de tradição", text: "Uma identidade forte e reconhecida, com história e apelo comercial." },
  { icon: Boxes, title: "Portfólio versátil", text: "Linha para diferentes canais: premium, PET e retornáveis." },
  { icon: Headset, title: "Suporte ao distribuidor", text: "Atendimento comercial e relacionamento de longo prazo." },
  { icon: FileImage, title: "Materiais de marketing", text: "Peças e materiais de apoio para impulsionar as vendas." },
];

const segments = [
  { icon: Boxes, label: "Distribuidores de bebidas" },
  { icon: Building2, label: "Atacadistas" },
  { icon: Store, label: "Supermercados" },
  { icon: ShoppingBag, label: "Empórios" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: Hotel, label: "Hotéis" },
  { icon: Coffee, label: "Cafeterias" },
  { icon: Building2, label: "Empresas" },
  { icon: Dumbbell, label: "Academias" },
  { icon: PartyPopper, label: "Eventos" },
  { icon: ShoppingBag, label: "Lojas de conveniência" },
];

export default function DistribuidoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Distribuição"
        title="Uma marca de tradição. Uma oportunidade para o seu mercado."
        description="Leve a Lindóya Mineral para a sua região e conte com uma estrutura comercial preparada para crescer junto com o seu negócio."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Distribuição" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/seja-um-distribuidor" variant="gold" size="lg">
            Quero ser distribuidor
          </Button>
          <Button href="/contato" variant="secondary" size="lg" className="border-white/40 text-white hover:bg-white hover:text-navy">
            Falar com o comercial
          </Button>
        </div>
      </PageHero>

      {/* Vantagens */}
      <section className="bg-white">
        <div className="container py-16 sm:py-24">
          <SectionHeading eyebrow="Por que ser parceiro" title="Vantagens comerciais" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col gap-3 rounded-card border border-silver bg-offwhite p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-lg font-medium text-navy">{title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfólio (imagem) */}
      <section className="bg-navy-texture text-white">
        <div className="container grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div className="relative order-2 overflow-hidden rounded-card shadow-raised lg:order-1">
            <Image
              src="/images/equipe-lindoya-mineral.png"
              alt="Equipe e estrutura de distribuição Lindóya Mineral"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <SectionHeading
              eyebrow="Suporte ao distribuidor"
              title="Estrutura para apoiar o seu crescimento."
              align="left"
              invert
              description="Atendimento comercial dedicado, materiais de divulgação e relacionamento de longo prazo para que a parceria evolua de forma sólida."
            />
            <Button href="/area-comercial" variant="gold" size="md" className="w-fit">
              Acessar área comercial
            </Button>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="bg-silver-texture">
        <div className="container py-16 sm:py-24">
          <SectionHeading
            eyebrow="Segmentos atendidos"
            title="Para diferentes canais de venda."
            description="A Lindóya Mineral atende uma ampla variedade de estabelecimentos e operações."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {segments.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-card border border-silver bg-white px-4 py-4">
                <Icon className="h-5 w-5 shrink-0 text-gold" />
                <span className="font-sans text-sm text-navy">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container py-16 sm:py-24">
          <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas e respostas" />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={distributorFaqs} />
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/seja-um-distribuidor" variant="primary" size="lg">
              Enviar interesse comercial
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
