import { Button } from "./Button";
import { GoldDivider } from "./GoldDivider";

type CTA = { label: string; href: string };

export function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: CTA;
  secondary?: CTA;
}) {
  return (
    <section className="bg-navy-texture text-white">
      <div className="container py-16 text-center sm:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h2>
          <GoldDivider />
          {description && (
            <p className="font-sans text-lg leading-relaxed text-silver/90">
              {description}
            </p>
          )}
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href={primary.href} variant="gold" size="lg">
              {primary.label}
            </Button>
            {secondary && (
              <Button
                href={secondary.href}
                variant="secondary"
                size="lg"
                className="border-white/40 text-white hover:bg-white hover:text-navy"
              >
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
