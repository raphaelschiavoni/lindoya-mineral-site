import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import type { Store } from "@/data/stores";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function StoreCard({ store }: { store: Store }) {
  const wa = buildWhatsAppLink(
    "consumer",
    `Olá! Gostaria de saber sobre a disponibilidade de Lindóya Mineral em ${store.name} (${store.city}/${store.state}).`,
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${store.name} ${store.address} ${store.city} ${store.state}`,
  )}`;

  const tags = [
    store.hasStill && "Sem gás",
    store.hasSparkling && "Com gás",
    store.hasPremium && "Premium",
    store.hasPet && "PET",
  ].filter(Boolean) as string[];

  return (
    <article className="flex flex-col gap-3 rounded-card border border-silver bg-white p-5 shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="brand-eyebrow">{store.typeLabel}</span>
          <h3 className="mt-1 font-serif text-lg font-medium text-navy">{store.name}</h3>
        </div>
      </div>
      <p className="flex items-start gap-2 font-sans text-sm text-muted">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
        {store.address}, {store.neighborhood} — {store.city}/{store.state}
      </p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-navy/5 px-2.5 py-1 font-sans text-xs text-navy">
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="mt-1 flex flex-wrap gap-2">
        {store.phone && (
          <a href={`tel:${store.phone}`} className="inline-flex items-center gap-1.5 font-sans text-sm text-navy hover:text-gold">
            <Phone className="h-4 w-4" /> {store.phone}
          </a>
        )}
        {wa && (
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-sans text-sm text-navy hover:text-gold">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        )}
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-sans text-sm text-navy hover:text-gold">
          <ExternalLink className="h-4 w-4" /> Ver no mapa
        </a>
      </div>
    </article>
  );
}
