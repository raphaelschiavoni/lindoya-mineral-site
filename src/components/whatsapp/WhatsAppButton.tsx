"use client";

import { useState } from "react";
import { MessageCircle, X, ChevronRight } from "lucide-react";
import {
  whatsappMenu,
  buildWhatsAppLink,
  isWhatsAppConfigured,
} from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  // Sem número configurado, não renderiza o botão (evita link quebrado).
  if (!isWhatsAppConfigured()) return null;

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="menu"
          className="w-[min(20rem,calc(100vw-2rem))] origin-bottom-right animate-fade-up overflow-hidden rounded-card border border-silver bg-white shadow-raised"
        >
          <div className="bg-navy px-4 py-3">
            <p className="font-serif text-lg text-white">Como podemos ajudar?</p>
            <p className="font-sans text-xs text-silver/80">
              Escolha uma opção para falar no WhatsApp
            </p>
          </div>
          <ul className="divide-y divide-silver">
            {whatsappMenu.map((item) => {
              const href = buildWhatsAppLink(item.audience);
              if (!href) return null;
              return (
                <li key={item.audience}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent({
                        event: "click_whatsapp",
                        source: "floating_menu",
                        audience: item.audience,
                      })
                    }
                    className="flex items-center justify-between gap-3 px-4 py-3 font-sans text-sm text-navy transition-colors hover:bg-offwhite"
                  >
                    {item.label}
                    <ChevronRight className="h-4 w-4 text-gold" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? "Fechar atendimento" : "Abrir atendimento no WhatsApp"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-raised transition-all duration-300 ease-smooth hover:scale-105",
          open ? "bg-navy" : "bg-[#25D366]",
        )}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
