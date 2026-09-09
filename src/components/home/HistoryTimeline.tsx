import { historyTimeline } from "@/data/history";

export function HistoryTimeline({ invert = false }: { invert?: boolean }) {
  return (
    <ol className="relative flex flex-col gap-8 border-l border-gold/40 pl-6 sm:pl-8">
      {historyTimeline.map((item) => (
        <li key={item.year} className="relative">
          <span
            className="absolute -left-[31px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gold ring-4 sm:-left-[39px]"
            style={{ boxShadow: "0 0 0 4px rgba(184,149,88,0.15)" }}
            aria-hidden
          />
          <span
            className={`font-sans text-xs font-semibold uppercase tracking-brand ${
              invert ? "text-gold-light" : "text-gold"
            }`}
          >
            {item.year}
          </span>
          <h3
            className={`mt-1 font-serif text-xl font-medium ${
              invert ? "text-white" : "text-navy"
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`mt-1 max-w-xl font-sans text-sm leading-relaxed ${
              invert ? "text-silver/80" : "text-muted"
            }`}
          >
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
