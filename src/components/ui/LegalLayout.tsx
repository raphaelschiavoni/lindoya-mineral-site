import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

export function LegalLayout({
  title,
  updatedAt,
  breadcrumbLabel,
  children,
}: {
  title: string;
  updatedAt: string;
  breadcrumbLabel: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        breadcrumb={[{ label: "Início", href: "/" }, { label: breadcrumbLabel }]}
      />
      <section className="bg-white">
        <div className="container max-w-prose py-16 sm:py-20">
          <p className="mb-8 font-sans text-sm text-muted">
            Última atualização: {updatedAt}
          </p>
          <div className="flex flex-col gap-6 font-sans leading-relaxed text-muted [&_h2]:mt-4 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-navy [&_a]:text-navy [&_a]:underline">
            <div className="rounded-card border border-dashed border-gold/40 bg-offwhite px-5 py-4 text-sm">
              Conteúdo-modelo. Este texto deve ser revisado e aprovado pelo
              setor jurídico da Lindóya Mineral antes da publicação oficial.
            </div>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
