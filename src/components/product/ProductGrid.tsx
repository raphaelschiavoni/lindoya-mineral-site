"use client";

import { useState } from "react";
import { PackageSearch } from "lucide-react";
import { products as allProducts, productFilters } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";

export function ProductGrid({ withFilters = true }: { withFilters?: boolean }) {
  const [active, setActive] = useState("todos");
  const filter = productFilters.find((f) => f.key === active) ?? productFilters[0];
  const visible = allProducts.filter(filter.test);

  return (
    <div className="flex flex-col gap-8">
      {withFilters && (
        <div className="flex flex-wrap justify-center gap-2">
          {productFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setActive(f.key)}
              aria-pressed={active === f.key}
              className={cn(
                "rounded-full border px-4 py-2 font-sans text-sm font-medium transition-all duration-200",
                active === f.key
                  ? "border-navy bg-navy text-white"
                  : "border-silver bg-white text-navy hover:border-gold hover:text-gold",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {visible.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={PackageSearch}
          title="Nenhum produto encontrado"
          description="Ajuste os filtros para ver outras opções da linha Lindóya Mineral."
        />
      )}
    </div>
  );
}
