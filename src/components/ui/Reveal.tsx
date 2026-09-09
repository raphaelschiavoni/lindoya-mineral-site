"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Direction = "up" | "left" | "right";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  left: { x: -32 },
  right: { x: 32 },
};

/**
 * Revela o conteúdo com um leve deslize/fade quando entra na viewport.
 * Usado para dar sensação de movimento à home ao rolar a página.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
