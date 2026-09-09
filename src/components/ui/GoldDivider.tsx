import { cn } from "@/lib/utils";

/** Divisória dourada com losango central, inspirada nos rótulos. */
export function GoldDivider({
  className,
  align = "center",
}: {
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-gold",
        align === "left" ? "justify-start" : "justify-center",
        className,
      )}
      aria-hidden="true"
    >
      {align === "center" && (
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold sm:w-16" />
      )}
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span
        className={cn(
          "h-px bg-gradient-to-l from-transparent to-gold",
          align === "center" ? "w-10 sm:w-16" : "w-16 sm:w-24",
        )}
      />
    </div>
  );
}
