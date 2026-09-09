import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Gem, Droplet, Crown, Instagram, Globe, MapPin, MessageCircle } from "lucide-react";
import { companyInfo } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { LockBodyScroll } from "@/components/util/LockBodyScroll";

export const metadata: Metadata = {
  title: "Em breve — Nova Fonte Lindóya Mineral",
  description:
    "Em breve, uma nova experiência em Lindóia. Aguarde a inauguração da nova Fonte Lindóya Mineral — fonte de pureza e tradição.",
  robots: { index: false, follow: false },
};

const pillars = [
  { icon: Leaf, title: "Pureza natural", text: "Direto da fonte, sem adição de substâncias." },
  { icon: Gem, title: "Equilíbrio que faz bem", text: "Água mineral natural, leve e equilibrada." },
  { icon: Droplet, title: "Qualidade que se sente", text: "Rica em minerais essenciais para o seu bem-estar." },
  { icon: Crown, title: "Tradição de Lindóia", text: "Respeito à história, ao meio ambiente e ao que é essencial." },
];

export default function EmBrevePage() {
  const wa = buildWhatsAppLink(
    "consumer",
    "Olá! Vim pela página da Lindóya Mineral e gostaria de mais informações sobre a inauguração.",
  );
  const site = companyInfo.website.replace(/^https?:\/\//, "");

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-offwhite text-ink">
      <LockBodyScroll />
      {/* Foto da fonte, sangrando no topo à direita (como no flyer) */}
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-[45vh] w-[55%] max-w-[560px]">
        <Image
          src="/images/fonte-serra-lindoya-mineral.png"
          alt=""
          fill
          priority
          className="object-cover object-left"
          style={{
            WebkitMaskImage:
              "radial-gradient(120% 100% at 100% 0%, #000 35%, transparent 75%)",
            maskImage:
              "radial-gradient(120% 100% at 100% 0%, #000 35%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto min-h-full max-w-3xl px-5 py-6 sm:px-8 sm:py-8">
        {/* Moldura dourada dupla */}
        <div className="pointer-events-none absolute inset-3 rounded-sm border border-gold/50 sm:inset-4" />
        <div className="pointer-events-none absolute inset-[14px] rounded-sm border border-gold/25 sm:inset-[19px]" />

        <div className="relative flex flex-col items-center gap-8 px-3 py-10 text-center sm:px-8 sm:py-14">
          <Leaf className="h-7 w-7 text-gold" />

          {/* Headline */}
          <h1 className="font-serif text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-gold">Em breve,</span>
            <br />
            <span className="text-navy">uma nova experiência</span>
            <br />
            <span className="text-gold">em Lindóia.</span>
          </h1>

          <p className="max-w-md font-serif text-lg leading-relaxed text-navy/80 sm:text-xl">
            A natureza está preparando algo extraordinário. E muito em breve,
            você fará parte dessa história.
          </p>

          {/* Pilares */}
          <div className="mt-2 grid w-full grid-cols-2 gap-x-4 gap-y-8 rounded-sm border border-gold/30 bg-white/40 p-6 sm:grid-cols-4 sm:gap-x-2 sm:p-8">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-center gap-2 px-1">
                <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                <h2 className="font-serif text-sm font-semibold uppercase leading-tight tracking-wide text-navy">
                  {title}
                </h2>
                <p className="font-sans text-xs leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>

          {/* Frase de essência */}
          <p className="font-serif text-base uppercase leading-relaxed tracking-[0.15em] text-gold sm:text-lg">
            Uma nova fonte.
            <br />
            Um novo capítulo.
            <br />
            A mesma essência de Lindóia.
          </p>

          {/* Aguarde */}
          <div className="rounded-sm border border-gold/50 px-6 py-4">
            <p className="font-serif text-lg font-semibold uppercase tracking-[0.2em] text-navy">
              Aguarde!
            </p>
            <p className="mt-1 font-sans text-xs uppercase tracking-wideish text-muted">
              Inauguração da nova Fonte Lindóya Mineral.
            </p>
          </div>

          {/* Logo */}
          <Image
            src="/images/logo-lindoya-fonte-cristal.png"
            alt="Lindóya Mineral"
            width={260}
            height={228}
            className="mt-2 h-auto w-[180px] sm:w-[220px]"
          />

          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-card bg-navy px-6 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-blue-nascente"
            >
              <MessageCircle className="h-4 w-4" /> Fale conosco no WhatsApp
            </a>
          )}

          {/* Rodapé de contatos */}
          <div className="mt-2 flex flex-col items-center justify-center gap-3 border-t border-gold/30 pt-6 font-sans text-sm text-navy sm:flex-row sm:gap-8">
            <a href={companyInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
              <Instagram className="h-4 w-4 text-gold" /> {companyInfo.instagram}
            </a>
            <span className="inline-flex items-center gap-2">
              <Globe className="h-4 w-4 text-gold" /> {site}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> Lindóia/SP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
