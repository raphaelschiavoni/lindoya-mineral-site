import { Droplets } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";

export default function NotFound() {
  return (
    <section className="bg-silver-texture">
      <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-gold shadow-card">
          <Droplets className="h-8 w-8" />
        </span>
        <p className="brand-eyebrow">Erro 404</p>
        <h1 className="font-serif text-4xl font-semibold text-navy sm:text-5xl">
          Página não encontrada
        </h1>
        <GoldDivider />
        <p className="max-w-md font-sans text-muted">
          A página que você procura pode ter sido movida ou não existe mais. Que
          tal voltar ao início?
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Voltar ao início
          </Button>
          <Button href="/produtos" variant="secondary" size="lg">
            Ver produtos
          </Button>
        </div>
      </div>
    </section>
  );
}
