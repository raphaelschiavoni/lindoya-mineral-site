import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { footerNav } from "@/data/navigation";
import { companyInfo, hasCompanyData } from "@/config/company";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { JoinTeamCTA } from "@/components/ui/JoinTeamCTA";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const wa = buildWhatsAppLink("sales");
  const year = 2025;

  return (
    <footer className="bg-navy-dark text-silver/80">
      <JoinTeamCTA className="border-b border-white/10" />
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-5">
            <Image
              src="/images/logo-lindoya-fonte-cristal.png"
              alt="Lindóya Mineral"
              width={161}
              height={140}
              className="h-24 w-auto self-start object-contain object-left brightness-0 invert"
            />
            <div className="flex flex-col gap-2 font-sans text-sm">
              {hasCompanyData(companyInfo.address) ? (
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {companyInfo.address}
                </span>
              ) : (
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {companyInfo.city} — {companyInfo.state}
                </span>
              )}
              {hasCompanyData(companyInfo.email) && (
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-gold">
                  <Mail className="h-4 w-4 shrink-0 text-gold" /> {companyInfo.email}
                </a>
              )}
              {wa && (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                  <MessageCircle className="h-4 w-4 shrink-0 text-gold" /> WhatsApp
                </a>
              )}
              <a
                href={companyInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold"
              >
                <Instagram className="h-4 w-4 shrink-0 text-gold" /> {companyInfo.instagram}
              </a>
            </div>
          </div>

          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="brand-eyebrow text-gold-light">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5 font-sans text-sm">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-gold">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <GoldDivider align="left" className="my-10 opacity-60" />

        <div className="flex flex-col gap-4 font-sans text-xs text-silver/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Água mineral natural. Não contém glúten. Indústria brasileira.
            {hasCompanyData(companyInfo.cnpj) && <> · CNPJ {companyInfo.cnpj}</>}
          </p>
          <p>
            © {year} {companyInfo.companyName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
