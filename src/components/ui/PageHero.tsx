import type { ReactNode } from "react";
import { GoldDivider } from "./GoldDivider";
import { Breadcrumb, type Crumb } from "./Breadcrumb";

/** Cabeçalho padrão das páginas internas — fundo azul-marinho. */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy-texture text-white">
      <div className="container py-14 sm:py-20">
        {breadcrumb && (
          <div className="mb-6 [&_*]:text-silver/70 [&_a:hover]:text-gold [&_[aria-current]]:text-white">
            <Breadcrumb items={breadcrumb} />
          </div>
        )}
        <div className="max-w-3xl">
          {eyebrow && <span className="brand-eyebrow text-gold-light">{eyebrow}</span>}
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          <GoldDivider align="left" className="mt-6" />
          {description && (
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-silver/90">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
