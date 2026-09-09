import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wine, Droplet } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { AudienceCard } from "@/components/home/AudienceCard";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { DistributorForm } from "@/components/forms/DistributorForm";
import {
  differentials,
  audiencePaths,
  commercialIndicators,
  distributionSection,
} from "@/data/homepage";
import { legendValues } from "@/data/history";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  const DistIcon = distributionSection.icon;

  return (
    <>
      <HeroSection />

      {/* 8.2 Faixa de diferenciais */}
      <section className="border-y border-silver bg-white">
        <div className="container grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
          {differentials.map(({ icon: Icon, title }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex items-center gap-3 text-navy">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/5 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-sans text-sm font-medium leading-snug">{title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8.3 Produtos */}
      <section className="bg-silver-texture">
        <div className="container py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Nossos produtos"
              title="Uma linha para cada momento."
              description="Da rotina da sua casa à mesa de restaurantes, hotéis, empresas e eventos, conheça as opções da Lindóya Mineral."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/produtos" variant="secondary" size="lg">
              Ver todos os produtos <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 8.4 Bloco comercial por público */}
      <section className="bg-white">
        <div className="container py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Para cada necessidade"
              title="Escolha o melhor caminho."
              description="Consumidores, empresas e distribuidores encontram na Lindóya Mineral o atendimento certo."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {audiencePaths.map((path, i) => (
              <Reveal key={path.title} delay={i * 0.1}>
                <AudienceCard path={path} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8.5 História e origem */}
      <section className="bg-navy-texture text-white">
        <div className="container grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <Reveal direction="left" className="relative order-2 flex justify-center lg:order-1">
            <div className="relative aspect-square w-full max-w-md">
              <Image
                src="/images/logo-lindoya-fonte-cristal.png"
                alt="Logotipo Lindóya Mineral — Fonte Cristal"
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-contain brightness-0 invert"
              />
            </div>
          </Reveal>
          <Reveal direction="right" className="order-1 flex flex-col gap-6 lg:order-2">
            <SectionHeading
              eyebrow="Nossa história"
              title="Uma história que nasce entre as águas e atravessa gerações."
              align="left"
              invert
              description="A Lindóya Mineral carrega em sua identidade a história da Índia Lindóya, símbolo de lealdade, formosura e honestidade."
            />
            <p className="max-w-xl font-sans leading-relaxed text-silver/85">
              Sua imagem representa a ligação entre o povo, as nascentes e a
              natureza de uma das mais tradicionais regiões hidrominerais do
              Brasil.
            </p>
            <div className="flex flex-wrap gap-6">
              {legendValues.map((v) => (
                <div key={v.title} className="flex flex-col">
                  <span className="font-serif text-xl text-gold-light">{v.title}</span>
                  <span className="font-sans text-xs uppercase tracking-wideish text-silver/70">
                    {v.description}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <Button href="/nossa-historia" variant="gold" size="lg" className="mt-2">
                Conheça nossa história <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8.6 Da fonte para o mercado */}
      <section className="bg-white">
        <div className="container grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <Reveal direction="left" className="relative order-1 overflow-hidden rounded-card shadow-raised">
            <Image
              src="/images/caminhao-lindoya-mineral.png"
              alt="Caminhão de distribuição Lindóya Mineral"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal direction="right" className="order-2 flex flex-col gap-6">
            <SectionHeading
              eyebrow={distributionSection.eyebrow}
              title={distributionSection.title}
              align="left"
              description={distributionSection.text}
            />
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {commercialIndicators.map(({ icon: Icon, title }) => (
                <li key={title} className="flex items-center gap-3 rounded-card border border-silver bg-offwhite px-4 py-3">
                  <Icon className="h-5 w-5 shrink-0 text-gold" />
                  <span className="font-sans text-sm text-navy">{title}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contato" variant="primary" size="md">
                Falar com o comercial
              </Button>
              <Button href="/seja-um-distribuidor" variant="secondary" size="md">
                Seja um distribuidor
              </Button>
            </div>
            <p className="font-sans text-xs italic text-muted">
              <DistIcon className="mr-1 inline h-3.5 w-3.5" />
              Indicadores institucionais — dados quantitativos serão adicionados
              conforme validação da empresa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8.7 Destaque da linha premium */}
      <section className="bg-silver-texture">
        <div className="container py-16 sm:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Linha Premium"
              title="Elegância à mesa. Pureza em cada detalhe."
              description="A linha premium da Lindóya Mineral para restaurantes, hotéis, eventos e ocasiões especiais."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal delay={0.05}>
              <PremiumColumn
                icon={Droplet}
                tone="still"
                title="Sem gás"
                volume="510 ml"
                text="Identificada pela cor azul, para restaurantes, hotéis, eventos e o consumo à mesa."
                image="/images/pet-premium-lindoya-mineral.png"
                href="/produtos/premium-510ml-sem-gas"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <PremiumColumn
                icon={Wine}
                tone="sparkling"
                title="Com gás"
                volume="510 ml"
                text="Identificada pela cor vinho, para gastronomia, encontros e ocasiões especiais."
                image="/images/pet-premium-azul-vermelha-lindoya-mineral.png"
                href="/produtos/premium-510ml-com-gas"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8.8 Onde encontrar (teaser) */}
      <section className="bg-navy-texture text-white">
        <div className="container flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <Reveal className="flex flex-col items-center gap-6">
            <SectionHeading
              eyebrow="Onde encontrar"
              title="Lindóya Mineral mais perto de você."
              invert
              description="Encontre os pontos de venda mais próximos e leve a pureza da Lindóya Mineral para a sua casa ou seu negócio."
            />
            <Button href="/onde-encontrar" variant="gold" size="lg">
              Buscar pontos de venda <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 8.9 Formulário para distribuidores */}
      <section id="distribuidor" className="bg-white">
        <div className="container grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.2fr]">
          <Reveal direction="left" className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Seja um distribuidor"
              title="Leve Lindóya Mineral para a sua região."
              align="left"
              description="Buscamos parceiros que valorizam qualidade, relacionamento e crescimento. Preencha seus dados e fale com nossa equipe comercial."
            />
            <div className="mt-2 rounded-card border border-gold/30 bg-offwhite p-6">
              <p className="font-serif text-2xl text-navy">
                Pureza para sua casa. Oportunidade para o seu negócio.
              </p>
              <GoldDivider align="left" className="mt-4" />
              <ul className="mt-4 flex flex-col gap-2 font-sans text-sm text-muted">
                <li>· Marca de tradição e identidade forte</li>
                <li>· Portfólio para diferentes canais</li>
                <li>· Suporte comercial e materiais de apoio</li>
              </ul>
            </div>
          </Reveal>
          <Reveal direction="right" className="rounded-card border border-silver bg-white p-6 shadow-card sm:p-8">
            <DistributorForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function PremiumColumn({
  icon: Icon,
  tone,
  title,
  volume,
  text,
  image,
  href,
}: {
  icon: typeof Droplet;
  tone: "still" | "sparkling";
  title: string;
  volume: string;
  text: string;
  image: string;
  href: string;
}) {
  const accent = tone === "sparkling" ? "text-sparkling" : "text-navy";
  const ring = tone === "sparkling" ? "ring-sparkling/20" : "ring-navy/15";
  return (
    <Link
      href={href}
      className="group flex items-center gap-6 rounded-card border border-silver bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-raised sm:p-8"
    >
      <div className="relative h-40 w-28 shrink-0 sm:h-52 sm:w-36">
        <Image src={image} alt={`Garrafa premium ${title}`} fill sizes="160px" className="object-contain transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-col gap-2">
        <span className={`inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wideish ring-1 ${ring} ${accent} w-fit rounded-full px-3 py-1`}>
          <Icon className="h-3.5 w-3.5" /> {title}
        </span>
        <h3 className="font-serif text-2xl font-medium text-navy">Premium {volume}</h3>
        <p className="font-sans text-sm leading-relaxed text-muted">{text}</p>
        <span className="mt-1 inline-flex items-center gap-1 font-sans text-sm font-semibold text-navy transition-colors group-hover:text-gold">
          Ver detalhes <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
