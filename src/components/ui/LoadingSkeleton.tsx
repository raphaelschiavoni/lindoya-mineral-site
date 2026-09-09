import { cn } from "@/lib/utils";

export function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "shimmer-loading rounded-card bg-silver/60",
        className,
      )}
      aria-hidden="true"
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-card border border-silver p-5">
      <LoadingSkeleton className="aspect-[3/4] w-full" />
      <LoadingSkeleton className="h-4 w-2/3" />
      <LoadingSkeleton className="h-3 w-full" />
      <LoadingSkeleton className="h-3 w-4/5" />
    </div>
  );
}
