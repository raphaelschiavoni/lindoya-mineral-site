import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function EmptyState({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon?: LucideIcon;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-card border border-dashed border-silver bg-offwhite px-6 py-14 text-center">
      {Icon && (
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-gold">
          <Icon className="h-6 w-6" />
        </span>
      )}
      <h3 className="font-serif text-xl font-medium text-navy">{title}</h3>
      {description && (
        <p className="max-w-md font-sans text-muted">{description}</p>
      )}
      {children}
    </div>
  );
}
