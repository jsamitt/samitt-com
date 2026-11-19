"use client";
import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/data";

// "Contact" is reached through the "Start a project" button, not a plain link.
const CONTACT_HREF = "/#contact";
const sectionLinks = navLinks.filter((link) => link.href !== CONTACT_HREF);

// Scroll position as an external store, so a page that loads already scrolled
// (a reload mid-page, or a shared /#work link) gets the scrolled nav at once.
function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}
const getScrolled = () => window.scrollY > 20;
const getServerScrolled = () => false;

// Tailwind's lg breakpoint, where the desktop nav takes over. Kept in rem like
// Tailwind's, so it moves with the browser's default font size as the CSS does.
const DESKTOP_QUERY = "(min-width: 64rem)";

// Following a menu link removes the focused link with the menu, so hand focus
// to the section it jumps to; the next Tab then continues from there.
// Links are root-relative ("/#work") so they also work from /about. A route
// without a hash, or a section not on this page, has nothing here to focus, so
// focus goes to the fallback (the menu button) rather than dropping to <body>;
// a route change then reloads the page anyway.
function focusLinkTarget(href: string, fallback?: HTMLElement | null) {
  const hashAt = href.indexOf("#");
  const target =
    hashAt === -1 ? null : document.getElementById(href.slice(hashAt + 1));
  if (!target) {
    if (fallback) requestAnimationFrame(() => fallback.focus());
    return;
  }
  requestAnimationFrame(() => {
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrolled,
    getServerScrolled,
  );
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    firstMenuLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    // Widening to desktop hides the menu button, so close the menu with it.
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", onBreakpoint);

    // Everything outside the header is behind the menu: take it out of the
    // tab order and the accessibility tree, and stop it scrolling.
    const behind: Element[] = [];
    for (let el = headerRef.current; el && el !== document.body; el = el.parentElement) {
      for (const sibling of el.parentElement?.children ?? []) {
        if (sibling !== el && !sibling.hasAttribute("inert")) behind.push(sibling);
      }
    }
    behind.forEach((el) => el.setAttribute("inert", ""));
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      behind.forEach((el) => el.removeAttribute("inert"));
      root.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  // Compact bar once scrolled, or whenever the phone menu is open.
  const compact = scrolled || menuOpen;

  return (
    // Same page ground and hairline at every scroll position; no shadow (the
    // design system has none). Only the bar's height eases on scroll.
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 bg-page border-b border-rule"
    >
      <div
        className={`max-w-[1200px] mx-auto px-5 lg:px-8 flex items-center justify-between gap-4 transition-[height] duration-300 motion-reduce:transition-none ${
          compact ? "h-[72px]" : "h-[92px]"
        }`}
      >
        <Link href="/#hero" className="inline-flex items-center min-h-11 shrink-0">
          <Image
            src="/brand/proof-wordmark-ink.svg"
            alt="Proof Software home"
            width={96}
            height={32}
            unoptimized
            loading="eager"
            className="block h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 font-semibold text-ink"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center min-h-11 underline-offset-4 decoration-2 decoration-accent hover:underline focus-visible:underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT_HREF}
            className="inline-flex items-center min-h-11 px-5 rounded-full bg-ink text-on-dark hover:bg-ink-muted transition-colors"
          >
            Start a project
          </a>
        </nav>

        {/* Phone menu button */}
        <button
          ref={menuButtonRef}
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
          {sectionLinks.map((link, i) => (
            <a
              key={link.href}
              ref={i === 0 ? firstMenuLinkRef : undefined}
              href={link.href}
              onClick={() => {
                setMenuOpen(false);
                focusLinkTarget(link.href, menuButtonRef.current);
              }}
              className="py-3.5 border-b border-rule font-display font-bold text-[28px] leading-tight text-ink"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-auto pt-8 flex flex-col gap-4">
            <a
              href={CONTACT_HREF}
              onClick={() => {
                setMenuOpen(false);
                focusLinkTarget(CONTACT_HREF, menuButtonRef.current);
              }}
              className="flex items-center justify-center min-h-[52px] rounded-full bg-ink text-on-dark text-lg font-semibold"
            >
              Start a project
            </a>
            <p className="flex items-center justify-center gap-2.5 text-[15px] font-semibold text-ink">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full bg-positive"
              />
              Taking on new projects
            </p>
          </div>
        </nav>
      )}
    </header>
  );
}
