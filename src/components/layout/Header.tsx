"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth",
          scrolled
            ? "border-b border-silver/70 bg-white/85 py-2 shadow-card backdrop-blur-md"
            : "bg-transparent py-4",
        )}
      >
        <div className="container flex items-center justify-between gap-4">
          <Link href="/" aria-label="Lindóya Mineral — página inicial" className="relative z-10 flex items-center">
            <Image
              src="/images/logo-lindoya-fonte-cristal.png"
              alt="Lindóya Mineral — Fonte de pureza e tradição"
              width={92}
              height={80}
              priority
              className={cn(
                "w-auto object-contain transition-all duration-300",
                scrolled
                  ? "h-12"
                  : "h-14 opacity-100 brightness-0 invert drop-shadow-md sm:h-16",
              )}
            />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul
              className={cn(
                "flex items-center gap-7 font-sans text-sm font-medium transition-colors",
                scrolled ? "text-navy" : "text-white",
              )}
            >
              {mainNav.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "link-underline transition-colors hover:text-gold",
                        active && "text-gold",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href="/area-comercial"
              variant="ghost"
              size="sm"
              className={cn(!scrolled && "!text-white hover:!text-gold-light")}
            >
              Área comercial
            </Button>
            <Button href="/seja-um-distribuidor" variant="primary" size="sm">
              Seja um distribuidor
            </Button>
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-card transition-colors hover:text-gold lg:hidden",
              scrolled ? "text-navy" : "text-white",
            )}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
