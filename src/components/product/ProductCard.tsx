import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Droplet } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductBadge } from "@/components/ui/ProductBadge";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ProductCard({ product }: { product: Product }) {
  const wa = buildWhatsAppLink(
    "business",
    `Olá! Gostaria de informações sobre o produto ${product.name}.`,
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-silver bg-white shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-raised">
      <Link
        href={`/produtos/${product.slug}`}
        className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-silver-texture p-6"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 320px"
            className="object-contain p-4 transition-transform duration-500 ease-smooth group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-center text-muted">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-gold shadow-card">
              <Droplet className="h-7 w-7" />
            </span>
            <span className="font-sans text-xs uppercase tracking-wideish">
              Imagem em atualização
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4">
          <ProductBadge sparkling={product.sparkling} />
        </span>
        {!product.available && (
          <span className="absolute right-4 top-4 rounded-full bg-navy/80 px-3 py-1 font-sans text-[11px] uppercase tracking-wideish text-white">
            Em breve
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="brand-eyebrow">{product.categoryLabel} · {product.volume}</span>
        <h3 className="font-serif text-xl font-medium leading-snug text-navy">
          <Link href={`/produtos/${product.slug}`} className="transition-colors hover:text-gold">
            {product.name}
          </Link>
        </h3>
        <p className="flex-1 font-sans text-sm leading-relaxed text-muted">
          {product.shortDescription}
        </p>
        <div className="mt-2 flex flex-col gap-2">
          <Button href={`/produtos/${product.slug}`} variant="secondary" size="sm" className="w-full">
            Ver detalhes <ArrowRight className="h-4 w-4" />
          </Button>
          {wa && (
            <Button href={wa} external variant="ghost" size="sm" className="w-full">
              Solicitar informações
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
