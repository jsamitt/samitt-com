import { socialLinks } from "@/lib/data";

const linkClass =
  "text-on-dark hover:text-on-dark-muted transition-colors focus-visible:outline-on-dark";

// Sits directly under Contact on the same ink background, so the two read as one block.
export function Footer() {
  return (
    <footer className="bg-ink border-t border-dark-rule">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-7 flex flex-wrap items-center justify-between gap-4 text-[15px] text-on-dark-muted">
        <p>&copy; 2026 Jeff Samitt / Proof LLC</p>
        <nav aria-label="Social" className="flex flex-wrap gap-6">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
          <a href={socialLinks.email} className={linkClass}>
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
