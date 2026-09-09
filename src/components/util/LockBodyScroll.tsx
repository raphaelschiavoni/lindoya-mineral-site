"use client";

import { useEffect } from "react";

/**
 * Trava a rolagem do documento enquanto montado (usado pela capa "Em breve",
 * que é um overlay fixo por cima do site). A própria capa rola internamente.
 */
export function LockBodyScroll() {
  useEffect(() => {
    const html = document.documentElement;
    const prevHtml = html.style.overflow;
    const prevBody = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, []);
  return null;
}
