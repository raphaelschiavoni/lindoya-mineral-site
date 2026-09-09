"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { heroContent } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";

/**
 * Vídeo de fundo do hero.
 * Coloque o clipe em: public/videos/hero-water.mp4 (e, opcional, .webm).
 * Enquanto o arquivo não existir, o `poster` (foto real) é exibido — o hero
 * nunca fica quebrado.
 */
const HERO_VIDEO_MP4 = "/videos/hero-water.mp4";
const HERO_VIDEO_WEBM = "/videos/hero-water.webm";
const HERO_POSTER = "/images/fonte-serra-lindoya-mineral.png";

// Sombra sutil no texto para legibilidade sobre o vídeo (sem overlay colorido).
const TEXT_SHADOW = { textShadow: "0 1px 16px rgba(0,0,0,0.55)" } as const;

export function HeroSection() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-dark pt-24 sm:pt-28">
      {/* Vídeo ao fundo (fallback: poster com foto real) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster={HERO_POSTER}
        autoPlay={!reduce}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_WEBM} type="video/webm" />
        <source src={HERO_VIDEO_MP4} type="video/mp4" />
      </video>

      <div className="container relative z-10 flex py-16">
        <div
          className="flex max-w-2xl flex-col items-start gap-6"
          style={TEXT_SHADOW}
        >
          <motion.span {...rise(0)} className="brand-eyebrow text-gold-light">
            {heroContent.eyebrow}
          </motion.span>

          <motion.h1
            {...rise(0.08)}
            className="font-serif text-[2.5rem] font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[4rem]"
          >
            {heroContent.title}
          </motion.h1>

          <motion.div {...rise(0.16)}>
            <GoldDivider align="left" />
          </motion.div>

          <motion.p
            {...rise(0.24)}
            className="max-w-xl font-sans text-lg leading-relaxed text-white/90"
          >
            {heroContent.description}
          </motion.p>

          <motion.div {...rise(0.32)} className="flex flex-col gap-3 sm:flex-row">
            <Button href={heroContent.primaryCta.href} variant="gold" size="lg">
              {heroContent.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={heroContent.secondaryCta.href}
              variant="secondary"
              size="lg"
              className="border-white/40 text-white hover:bg-white hover:text-navy"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            {...rise(0.4)}
            className="mt-2 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-2 font-sans text-sm text-white backdrop-blur-sm"
          >
            <MapPin className="h-4 w-4 text-gold-light" />
            {heroContent.seal}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
