import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Check, MessageCircle, Droplet } from "lucide-react";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { siteConfig } from "@/config/site";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductBadge } from "@/components/ui/ProductBadge";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto não encontrado" };
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/produtos/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: product.image ? [product.image] : undefined,
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const waQuote = buildWhatsAppLink(
    "business",
    `Olá! Gostaria de solicitar um orçamento do produto ${product.name}.`,
  );
  const waSales = buildWhatsAppLink(
    "sales",
    `Olá! Gostaria de falar com um vendedor sobre o produto ${product.name}.`,
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: siteConfig.name },
    category: product.categoryLabel,
    image: product.image ? `${siteConfig.url}${product.image}` : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <section className="bg-silver-texture pt-24 sm:pt-28">
        <div className="container py-8">
          <Breadcrumb
            items={[
              { label: "Início", href: "/" },
              { label: "Produtos", href: "/produtos" },
              { label: product.name },
            ]}
          />
        </div>
        <div className="container grid items-start gap-10 pb-16 lg:grid-cols-2">
          {/* Galeria */}
          <div className="flex flex-col gap-4">
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-card border border-silver bg-white">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 500px"
                  className="object-contain p-8"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-muted">
                  <Droplet className="h-10 w-10 text-gold" />
                  <span className="font-sans text-sm uppercase tracking-wideish">
                    Imagem em atualização
                  </span>
                </div>
              )}
              <span className="absolute left-4 top-4">
                <ProductBadge sparkling={product.sparkling} />
              </span>
            </div>
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden rounded-card border border-silver bg-white">
                    <Image src={img} alt={`${product.name} — imagem ${i + 1}`} fill sizes="120px" className="object-contain p-2" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Informações */}
          <div className="flex flex-col gap-5">
            <span className="brand-eyebrow">{product.categoryLabel}</span>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              {product.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-navy px-4 py-1.5 font-sans text-sm font-semibold text-white">
                {product.volume}
              </span>
              <ProductBadge sparkling={product.sparkling} />
            </div>
            <GoldDivider align="left" />
            <p className="font-sans text-lg leading-relaxed text-muted">
              {product.description}
            </p>

            <div>
              <h2 className="font-serif text-xl font-medium text-navy">Ideal para</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {product.recommendedFor.map((r) => (
                  <li key={r} className="inline-flex items-center gap-1.5 rounded-full border border-silver bg-white px-3 py-1.5 font-sans text-sm text-navy">
                    <Check className="h-3.5 w-3.5 text-gold" /> {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-card border border-silver bg-offwhite p-5">
              <h2 className="font-serif text-xl font-medium text-navy">Especificações</h2>
              <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
                {product.specifications.map((s) => (
                  <div key={s.label} className="flex justify-between border-b border-silver/70 py-1.5 font-sans text-sm">
                    <dt className="text-muted">{s.label}</dt>
                    <dd className="font-medium text-navy">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 font-sans text-xs italic text-muted">
                Composição química e informações da embalagem serão adicionadas
                após validação técnica da empresa.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {waQuote && (
                <Button href={waQuote} external variant="primary" size="lg">
                  Solicitar orçamento
                </Button>
              )}
              {waSales ? (
                <Button href={waSales} external variant="secondary" size="lg">
                  <MessageCircle className="h-4 w-4" /> Falar com um vendedor
                </Button>
              ) : (
                <Button href="/contato" variant="secondary" size="lg">
                  Falar com um vendedor
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white">
          <div className="container py-16 sm:py-20">
            <SectionHeading eyebrow="Também da nossa linha" title="Produtos relacionados" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
