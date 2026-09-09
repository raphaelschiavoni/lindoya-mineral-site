import { Droplets } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-silver-texture">
      <div className="flex flex-col items-center gap-4">
        <span className="flex h-14 w-14 animate-float items-center justify-center rounded-full bg-white text-gold shadow-card">
          <Droplets className="h-6 w-6" />
        </span>
        <span className="font-sans text-sm uppercase tracking-brand text-muted">
          Carregando…
        </span>
      </div>
    </div>
  );
}
