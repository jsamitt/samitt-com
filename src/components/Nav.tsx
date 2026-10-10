"use client";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";

// "Contact" is reached through the "Let's talk" button, not a plain link.
const sectionLinks = navLinks.filter((link) => link.href !== "#contact");

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Solid bar once scrolled, or whenever the phone menu is open.
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        solid
          ? "bg-surface border-rule shadow-lg shadow-ink/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div
        className={`max-w-[1200px] mx-auto px-5 lg:px-8 flex items-center justify-between gap-4 transition-[height] duration-300 ${
          solid ? "h-[72px]" : "h-[92px] border-b border-rule"
        }`}
      >
        <a
          href="#hero"
          className="inline-flex items-center gap-3 font-display font-extrabold text-xl text-ink"
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-base"
          >
            JS
          </span>
          Jeff Samitt
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 font-medium text-ink"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="underline-offset-4 decoration-2 decoration-accent hover:underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center min-h-11 px-5 rounded-full bg-ink text-on-dark hover:bg-ink-muted transition-colors"
          >
            Let&apos;s talk
          </a>
        </nav>

        {/* Phone menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-ink bg-surface text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Phone menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-page px-5 pt-4 pb-7 flex flex-col"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3.5 border-b border-rule font-display font-bold text-[28px] leading-tight text-ink"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-auto pt-8 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center min-h-14 rounded-full bg-ink text-on-dark text-lg font-semibold"
            >
              Let&apos;s talk
            </a>
            <p className="flex items-center justify-center gap-2.5 text-[15px] font-semibold text-ink">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-positive"
              />
              Open to new opportunities
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
