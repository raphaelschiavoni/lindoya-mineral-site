import type { Metadata } from "next";
import {
  Mountain,
  Droplets,
  ShieldCheck,
  Thermometer,
  Leaf,
  Recycle,
  FileText,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { qualityFaqs } from "@/data/faqs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Qualidade",
  description:
    "Origem, envase, controle de qualidade, conservação e sustentabilidade da Lindóya Mineral. Transparência e confiança em cada gota.",
  alternates: { canonical: "/qualidade" },
};

// TODO: Substituir este conteúdo por informações técnicas
// revisadas e aprovadas pela equipe responsável da Lindóya Mineral.
const pillars = [
  {
    icon: Mountain,
    title: "Origem da água",
    text: "Água mineral natural proveniente da tradicional região hidromineral de Águas de Lindóia (SP).",
  },
  {
    icon: Droplets,
    title: "Cuidado no envase",
    text: "Processo de envase pensado para preservar as características naturais da água.",
  },
  {
    icon: ShieldCheck,
    title: "Controle de qualidade",
    text: "Acompanhamento para garantir a integridade do produto que chega até você.",
  },
  {
    icon: Thermometer,
    title: "Conservação",
    text: "Conserve em local seco, fresco e ao abrigo da luz solar, conforme o rótulo.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    text: "Compromisso com a preservação das nascentes e da natureza da região.",
  },
  {
    icon: Recycle,
    title: "Reciclagem",
    text: "Embalagens PET recicláveis. Faça sua parte e preserve a natureza.",
  },
];

export default function QualidadePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qualityFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        eyebrow="Qualidade"
        title="Transparência e confiança em cada gota."
        description="Da origem à sua mesa, o cuidado com a qualidade acompanha cada etapa da Lindóya Mineral."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Qualidade" }]}
      />

      <section className="bg-white">
        <div className="container py-16 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col gap-3 rounded-card border border-silver bg-offwhite p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl font-medium text-navy">{title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-card border border-dashed border-gold/40 bg-offwhite px-5 py-4 font-sans text-sm text-muted">
            As informações desta página têm caráter institucional e serão
            complementadas com laudos, licenças, certificações e análises
            físico-químicas oficiais assim que disponibilizados pela empresa.
          </div>
        </div>
      </section>

      {/* Documentos (preparado para receber arquivos oficiais) */}
      <section className="bg-silver-texture">
        <div className="container py-16 sm:py-20">
          <SectionHeading
            eyebrow="Documentação"
            title="Informações oficiais"
            description="Espaço reservado para laudos, licenças, certificações e análises. Documentos serão publicados após validação."
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {["Laudos físico-químicos", "Licenças e registros", "Certificações", "Informações do rótulo"].map(
              (doc) => (
                <div key={doc} className="flex items-center gap-3 rounded-card border border-silver bg-white px-5 py-4 text-muted">
                  <FileText className="h-5 w-5 shrink-0 text-gold" />
                  <span className="font-sans text-sm">{doc}</span>
                  <span className="ml-auto font-sans text-xs uppercase tracking-wideish text-muted/70">
                    Em breve
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="container py-16 sm:py-24">
          <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas e respostas" />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={qualityFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Ficou com alguma dúvida?"
        description={`Fale com a equipe ${siteConfig.name}. Teremos prazer em ajudar.`}
        primary={{ label: "Entrar em contato", href: "/contato" }}
        secondary={{ label: "Onde encontrar", href: "/onde-encontrar" }}
      />
    </>
  );
}
