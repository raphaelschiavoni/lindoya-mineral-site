import Image from "next/image";
import { Download, Lock, FileText } from "lucide-react";
import type { CommercialMaterial } from "@/data/commercial-materials";

export function CommercialMaterialCard({
  material,
  unlocked,
}: {
  material: CommercialMaterial;
  unlocked: boolean;
}) {
  const isRestricted = material.access === "restricted" && !unlocked;
  const available = material.url !== "#" && !isRestricted;

  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-silver bg-white shadow-card transition-all duration-300 hover:shadow-raised">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-silver-texture">
        <Image
          src={material.coverImage}
          alt={material.title}
          fill
          sizes="(max-width: 768px) 90vw, 360px"
          className="object-contain p-6"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-wideish text-navy">
          {material.format}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="brand-eyebrow">{material.category}</span>
        <h3 className="font-serif text-lg font-medium text-navy">{material.title}</h3>
        <p className="flex-1 font-sans text-sm leading-relaxed text-muted">
          {material.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-sans text-xs text-muted">
            {material.size !== "—" ? material.size : "Tamanho a definir"}
          </span>
          {available ? (
            <a
              href={material.url}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-navy hover:text-gold"
            >
              <Download className="h-4 w-4" /> Baixar
            </a>
          ) : isRestricted ? (
            <span className="inline-flex items-center gap-1.5 font-sans text-sm text-muted">
              <Lock className="h-4 w-4" /> Restrito
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-sans text-sm text-muted">
              <FileText className="h-4 w-4" /> Em breve
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
