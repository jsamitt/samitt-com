import { githubRepos, socialLinks } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

// Language dots are data, not brand colours; the language name always sits
// beside the dot, so colour is never the only cue.
const langColors: Record<string, string> = {
  TypeScript: "#3B6EA8",
  Swift: "#E07A3F",
  "React Native": "#4FA3C7",
  JavaScript: "#D9B43C",
};

function RepoCard({ repo }: { repo: (typeof githubRepos)[number] }) {
  return (
    <article className="h-full p-7 rounded-card border border-rule bg-surface flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display font-bold text-[22px] leading-tight">
          {repo.name}
        </h3>
        <span
          className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-semibold ${
            repo.isPublic ? "bg-band" : "bg-page"
          }`}
        >
          {!repo.isPublic && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
          )}
          {repo.isPublic ? "Public" : "Private"}
        </span>
      </div>
      <p className="grow text-base text-ink-muted">{repo.description}</p>
      <div className="pt-3 border-t border-band flex items-center justify-between gap-3 text-[15px]">
        <span className="inline-flex items-center gap-2 text-ink-muted">
          <span
            aria-hidden="true"
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: langColors[repo.language] ?? "var(--color-field)" }}
          />
          {repo.language}
        </span>
        {repo.isPublic && (
          <a
            href={`${socialLinks.github}/${repo.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 decoration-2 decoration-accent"
          >
            View repo →
          </a>
        )}
      </div>
    </article>
  );
}

export function GitHub() {
  return (
    <section id="github" className="bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-24">
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <SectionHeading number="04" title="On GitHub" className="" />
            <p className="max-w-[420px] text-ink-muted">
              Public repos and private projects.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {githubRepos.map((repo, i) => (
            <FadeIn key={repo.name} delay={i * 80}>
              <RepoCard repo={repo} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center min-h-12 px-6 rounded-full border-[1.5px] border-ink font-semibold"
          >
            View all on GitHub →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
