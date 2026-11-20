import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/data";

// On the page ground, not ink: Contact is the page's one dark section.
// Focus uses the global ink ring.
export function Footer() {
  return (
    <footer className="bg-page border-t border-rule">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-[15px] text-ink-muted">
        <Link href="/#hero" className="inline-flex items-center min-h-11 shrink-0">
          <Image
            src="/brand/proof-wordmark-ink.svg"
            alt="Proof Software home"
            width={72}
            height={24}
            unoptimized
            className="block h-6 w-auto"
          />
        </Link>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-1 font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center min-h-11 text-ink hover:text-ink-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p>&copy; 2026 Proof LLC &middot; Richmond, Virginia</p>
      </div>
    </footer>
  );
}
