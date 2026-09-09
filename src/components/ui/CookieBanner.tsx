"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "./Button";

const STORAGE_KEY = "lindoya-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* storage indisponível — não exibe */
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-card border border-silver bg-white/95 p-5 shadow-raised backdrop-blur sm:flex-row sm:items-center">
        <Cookie className="hidden h-8 w-8 shrink-0 text-gold sm:block" aria-hidden />
        <p className="flex-1 font-sans text-sm leading-relaxed text-muted">
          Utilizamos cookies para melhorar sua experiência de navegação. Ao
          continuar, você concorda com nossa{" "}
          <Link href="/politica-de-privacidade" className="text-navy underline">
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="secondary" size="sm" onClick={() => decide("declined")}>
            Recusar
          </Button>
          <Button variant="primary" size="sm" onClick={() => decide("accepted")}>
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
