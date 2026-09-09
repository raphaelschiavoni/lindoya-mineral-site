import type { Metadata } from "next";
import { Mail, MessageCircle, Instagram, MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { companyInfo, hasCompanyData } from "@/config/company";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Lindóya Mineral. Atendimento para consumidores, empresas e distribuidores.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const wa = buildWhatsAppLink("sales");

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a Lindóya Mineral."
        description="Atendimento para consumidores, empresas e distribuidores. Escolha o canal de sua preferência."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      <section className="bg-white">
        <div className="container grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Canais" title="Como podemos ajudar?" align="left" />
            <ul className="flex flex-col gap-4">
              {wa && (
                <li>
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-card border border-silver bg-offwhite p-4 transition-colors hover:border-gold/40">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-gold">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-serif text-lg text-navy">WhatsApp</span>
                      <span className="font-sans text-sm text-muted">Atendimento rápido pelo WhatsApp</span>
                    </span>
                  </a>
                </li>
              )}
              {hasCompanyData(companyInfo.email) && (
                <li>
                  <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-4 rounded-card border border-silver bg-offwhite p-4 transition-colors hover:border-gold/40">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-gold">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-serif text-lg text-navy">E-mail</span>
                      <span className="font-sans text-sm text-muted">{companyInfo.email}</span>
                    </span>
                  </a>
                </li>
              )}
              <li>
                <a href={companyInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-card border border-silver bg-offwhite p-4 transition-colors hover:border-gold/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-gold">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-serif text-lg text-navy">Instagram</span>
                    <span className="font-sans text-sm text-muted">{companyInfo.instagram}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-card border border-silver bg-offwhite p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/5 text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-serif text-lg text-navy">Localização</span>
                  <span className="font-sans text-sm text-muted">
                    {hasCompanyData(companyInfo.address)
                      ? companyInfo.address
                      : `${companyInfo.city} — ${companyInfo.state}`}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-card border border-silver bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-serif text-2xl font-medium text-navy">Envie uma mensagem</h2>
            <p className="mt-1 font-sans text-sm text-muted">
              Preencha o formulário e retornaremos o mais breve possível.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
