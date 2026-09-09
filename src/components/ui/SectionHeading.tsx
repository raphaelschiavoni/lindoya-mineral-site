import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GoldDivider } from "./GoldDivider";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  divider = true,
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  invert?: boolean;
  divider?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "brand-eyebrow",
            invert && "text-gold-light",
          )}
        >
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          "font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]",
          invert ? "text-white" : "text-navy",
        )}
      >
        {title}
      </Tag>
      {divider && <GoldDivider align={align} className="my-1" />}
      {description && (
        <p
          className={cn(
            "max-w-2xl font-sans text-base leading-relaxed sm:text-lg",
            invert ? "text-silver/90" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
