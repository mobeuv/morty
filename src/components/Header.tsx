"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import { nav } from "@/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-mist-2 bg-white/90 text-navy-900 shadow-[0_1px_0_0_rgba(16,36,58,0.05)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-white",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-[72px]">
        <a
          href="#inicio"
          aria-label="MOBEUV — início"
          className="shrink-0 transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        {/* Navegação desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-current/75 transition-colors hover:text-current"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-600 transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contato"
            className={cn(
              "inline-flex h-10 items-center rounded-full border px-5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5",
              scrolled
                ? "border-navy-900/15 text-navy-900 hover:border-navy-900/40 hover:bg-navy-900/5"
                : "border-white/25 text-white hover:border-white/60 hover:bg-white/10",
            )}
          >
            Contato
          </a>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-b border-mist-2 bg-white text-navy-900 transition-[max-height,opacity] duration-300 ease-out md:hidden",
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav
          aria-label="Navegação mobile"
          className="container-x flex flex-col gap-1 py-4"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy-900 transition-colors hover:bg-mist"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-5 text-sm font-medium text-white transition-colors hover:bg-brand-500"
          >
            Entre em contato
          </a>
        </nav>
      </div>
    </header>
  );
}
