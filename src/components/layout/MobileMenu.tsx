"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const wa = buildWhatsAppLink("consumer");

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-navy-dark/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-raised transition-transform duration-300 ease-smooth",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-silver px-5 py-4">
          <Image
            src="/images/logo-lindoya-fonte-cristal.png"
            alt="Lindóya Mineral"
            width={69}
            height={60}
            className="h-12 w-auto object-contain"
          />
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-card text-navy hover:text-gold"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label="Menu mobile" className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-card px-3 py-3 font-serif text-xl text-navy transition-colors hover:bg-offwhite hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/area-comercial"
                onClick={onClose}
                className="block rounded-card px-3 py-3 font-serif text-xl text-navy transition-colors hover:bg-offwhite hover:text-gold"
              >
                Área comercial
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-silver px-5 py-5">
          <Button href="/seja-um-distribuidor" variant="primary" size="md" className="w-full">
            Seja um distribuidor
          </Button>
          {wa && (
            <Button href={wa} external variant="secondary" size="md" className="w-full">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
