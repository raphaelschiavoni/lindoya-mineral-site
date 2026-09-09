import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "gold" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wideish transition-all duration-300 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none rounded-card";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:bg-blue-nascente shadow-card hover:shadow-raised",
  secondary:
    "border border-navy text-navy bg-transparent hover:bg-navy hover:text-white",
  gold: "bg-gold text-navy hover:bg-gold-light shadow-card",
  ghost: "text-navy hover:text-gold bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-4 py-2 min-h-[40px]",
  md: "text-sm px-6 py-3 min-h-[44px]",
  lg: "text-base px-8 py-4 min-h-[52px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
