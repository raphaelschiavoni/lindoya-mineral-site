import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { HistoryTimeline } from "@/components/home/HistoryTimeline";
import { CTASection } from "@/components/ui/CTASection";
import { legendText, legendValues } from "@/data/history";

export const metadata: Metadata = {
  title: "Nossa história",
  description:
    "A lenda da Índia Lindóya, a tradição hidromineral de Águas de Lindóia e a nova identidade da Lindóya Mineral: uma história que atravessa gerações.",
  alternates: { canonical: "/nossa-historia" },
};

export default function NossaHistoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa história"
        title="Uma história que atravessa gerações."
        description="Da lenda da Índia Lindóya à tradição das águas de Lindóia, conheça as raízes que inspiram a nossa marca."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Nossa história" }]}
      />

      {/* A lenda */}
      <section className="bg-white">
        <div className="container grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div className="relative order-2 flex justify-center lg:order-1">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-card shadow-raised">
              <Image
                src="/images/fonte-serra-lindoya-mineral.png"
                alt="A fonte e a serra da região de Águas de Lindóia"
                fill
                sizes="(max-width: 768px) 80vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 flex flex-col gap-5 lg:order-2">
            <SectionHeading
              eyebrow="Tradição"
              title={legendText.title}
              align="left"
            />
            {legendText.paragraphs.map((p, i) => (
              <p key={i} className="max-w-xl font-sans text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Literatura + valores */}
      <section className="bg-navy-texture text-white">
        <div className="container py-16 sm:py-24">
          <SectionHeading
            eyebrow="Índia Lindóya"
            title="Um nome presente na literatura brasileira."
            invert
            description={`No poema épico "O Uraguai" (1769), de Basílio da Gama, Lindóya é símbolo de valores que atravessam o tempo.`}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {legendValues.map((v) => (
              <div key={v.title} className="flex flex-col items-center gap-2 rounded-card border border-white/10 bg-white/5 px-6 py-8 text-center">
                <span className="font-serif text-3xl text-gold-light">{v.title}</span>
                <GoldDivider />
                <span className="font-sans text-sm uppercase tracking-wideish text-silver/80">
                  {v.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="bg-silver-texture">
        <div className="container py-16 sm:py-24">
          <SectionHeading
            eyebrow="As águas da região"
            title="Uma linha do tempo de tradição."
            description="Marcos históricos que ajudaram a construir a reputação das águas de Águas de Lindóia."
          />
          <div className="mx-auto mt-14 max-w-3xl">
            <HistoryTimeline />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center font-sans text-xs italic text-muted">
            Conteúdo de caráter histórico e institucional. Datas e marcos sujeitos
            a validação pela empresa.
          </p>
        </div>
      </section>

      {/* Tradição e futuro */}
      <section className="bg-white">
        <div className="container grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Tradição e futuro"
              title="Preservar a origem, construir o amanhã."
              align="left"
              description="A nova Lindóya Mineral honra sua origem e, ao mesmo tempo, desenvolve uma marca contemporânea, comercial e pronta para crescer — sem perder a essência que a tornou símbolo desta região."
            />
          </div>
          <div className="relative aspect-video overflow-hidden rounded-card shadow-raised">
            <Image
              src="/images/arquitetura-historica-lindoya.jpg"
              alt="Arquitetura histórica da região de Lindóia"
              fill
              sizes="(max-width: 768px) 90vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Faça parte desta história."
        description="Leve a tradição da Lindóya Mineral para a sua casa ou para o seu negócio."
        primary={{ label: "Conheça os produtos", href: "/produtos" }}
        secondary={{ label: "Seja um distribuidor", href: "/seja-um-distribuidor" }}
      />
    </>
  );
}
