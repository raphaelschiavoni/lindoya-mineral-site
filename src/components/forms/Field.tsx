import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const inputBase =
  "w-full rounded-card border border-silver bg-white px-4 py-3 font-sans text-sm text-navy transition-colors placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

export function Field({
  label,
  htmlFor,
  error,
  required,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="font-sans text-sm font-medium text-navy">
        {label}
        {required && <span className="ml-0.5 text-sparkling">*</span>}
      </label>
      {children}
      {error && <span className="font-sans text-xs text-sparkling">{error}</span>}
    </div>
  );
}

export { inputBase };
