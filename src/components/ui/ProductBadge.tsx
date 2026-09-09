import { cn } from "@/lib/utils";

/** Selo com/sem gás. Vermelho/vinho é usado APENAS para "com gás". */
export function ProductBadge({
  sparkling,
  className,
}: {
  sparkling: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wideish",
        sparkling
          ? "bg-sparkling/10 text-sparkling ring-1 ring-sparkling/30"
          : "bg-navy/5 text-navy ring-1 ring-navy/20",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          sparkling ? "bg-sparkling" : "bg-navy",
        )}
      />
      {sparkling ? "Com gás" : "Sem gás"}
    </span>
  );
}
