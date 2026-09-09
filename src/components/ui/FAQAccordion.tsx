"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-silver border-y border-silver">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-serif text-lg font-medium text-navy sm:text-xl">
                {item.question}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-smooth",
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0">
                <p className="max-w-2xl font-sans leading-relaxed text-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
