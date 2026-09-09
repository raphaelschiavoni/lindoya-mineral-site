import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AudiencePath } from "@/data/homepage";

export function AudienceCard({ path }: { path: AudiencePath }) {
  const { icon: Icon, title, text, ctaLabel, href } = path;
  return (
    <Link
      href={href}
      className="group flex flex-col gap-5 rounded-card border border-silver bg-white p-7 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-gold/40 hover:shadow-raised"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="font-serif text-2xl font-medium text-navy">{title}</h3>
        <p className="font-sans leading-relaxed text-muted">{text}</p>
      </div>
      <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-navy transition-colors group-hover:text-gold">
        {ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
