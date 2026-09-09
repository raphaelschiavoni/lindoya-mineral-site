"use client";

import { MapPin, Phone, MessageCircle, Mail, Building2, UserRound } from "lucide-react";
import { type Rep, repTypeLabels, repWhatsAppLink } from "@/data/reps";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function RepCard({ rep }: { rep: Rep }) {
  const wa = repWhatsAppLink(rep);
  const Icon = rep.type === "distribuidor" ? Building2 : UserRound;

  return (
    <article className="flex flex-col gap-3 rounded-card border border-silver bg-white p-5 shadow-card">
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
            rep.type === "distribuidor" ? "bg-gold/10 text-gold" : "bg-navy/5 text-navy",
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <span className="brand-eyebrow">{repTypeLabels[rep.type]}</span>
          <h3 className="mt-0.5 font-serif text-lg font-medium text-navy">{rep.name}</h3>
          {rep.company && (
            <p className="font-sans text-sm text-muted">{rep.company}</p>
          )}
        </div>
      </div>

      <p className="flex items-start gap-2 font-sans text-sm text-muted">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
        {rep.city} / {rep.state}
      </p>

      {rep.regions.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {rep.regions.map((r) => (
            <span key={r} className="rounded-full bg-navy/5 px-2.5 py-1 font-sans text-xs text-navy">
              {r}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
        {wa ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent({ event: "click_sales_contact", rep: rep.id, state: rep.state })
            }
            className="inline-flex items-center gap-1.5 rounded-card bg-[#25D366] px-3 py-2 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        ) : (
          <span className="font-sans text-xs italic text-muted">
            Contato em atualização
          </span>
        )}
        {rep.phone && (
          <a href={`tel:${rep.phone}`} className="inline-flex items-center gap-1.5 font-sans text-sm text-navy hover:text-gold">
            <Phone className="h-4 w-4" /> {rep.phone}
          </a>
        )}
        {rep.email && (
          <a href={`mailto:${rep.email}`} className="inline-flex items-center gap-1.5 font-sans text-sm text-navy hover:text-gold">
            <Mail className="h-4 w-4" /> E-mail
          </a>
        )}
      </div>
    </article>
  );
}
