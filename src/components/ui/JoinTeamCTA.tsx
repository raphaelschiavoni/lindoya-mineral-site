import { UserPlus, Handshake } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

/**
 * Faixa "Seja um vendedor / Seja um distribuidor".
 * Reutilizada no rodapé (site inteiro) e na área comercial.
 */
export function JoinTeamCTA({ className }: { className?: string }) {
  return (
    <div className={cn("bg-navy-texture text-white", className)}>
      <div className="container flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <span className="brand-eyebrow text-gold-light">Faça parte</span>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight sm:text-3xl">
            Seja um vendedor ou distribuidor Lindóya Mineral
          </h2>
          <p className="mt-3 font-sans leading-relaxed text-silver/85">
            Leve uma marca de tradição para a sua região e conte com o apoio da
            nossa equipe comercial. Pureza para sua casa, oportunidade para o seu
            negócio.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button href="/seja-um-vendedor" variant="gold" size="lg">
            <UserPlus className="h-4 w-4" /> Seja um vendedor
          </Button>
          <Button
            href="/seja-um-distribuidor"
            variant="secondary"
            size="lg"
            className="border-white/40 text-white hover:bg-white hover:text-navy"
          >
            <Handshake className="h-4 w-4" /> Seja um distribuidor
          </Button>
        </div>
      </div>
    </div>
  );
}
