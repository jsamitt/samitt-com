import { githubRepos, socialLinks } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  Python: "bg-yellow-400",
  JavaScript: "bg-yellow-300",
};

function RepoCard({ repo }: { repo: (typeof githubRepos)[number] }) {
  const inner = (
    <>
      <div className="flex items-center gap-2 mb-3">
        {repo.isPublic ? (
          <svg className="w-4 h-4 text-offwhite/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-offwhite/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        )}
        <h3 className="text-sm font-bold text-teal">{repo.name}</h3>
        {!repo.isPublic && (
          <span className="text-[10px] font-medium text-offwhite/30 border border-offwhite/15 rounded px-1.5 py-0.5">
            Private
          </span>
        )}
      </div>
      <p className="text-offwhite/60 text-sm mb-4 leading-relaxed">
        {repo.description}
      </p>
      <div className="flex items-center gap-2">
        <span className={`w-3 h-3 rounded-full ${langColors[repo.language] || "bg-gray-400"}`} />
        <span className="text-xs text-offwhite/50">{repo.language}</span>
      </div>
    </>
  );

  const baseClass =
    "flex flex-col h-full p-6 rounded-xl bg-white/5 border border-white/10 transition-all duration-300";

  if (repo.isPublic) {
    return (
      <a
        href={`${socialLinks.github}/${repo.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} hover:border-teal/50 hover:-translate-y-1`}
      >
        {inner}
      </a>
    );
  }

  return <div className={baseClass}>{inner}</div>;
}

export function GitHub() {
  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="On GitHub"
            subtitle="Public repos and private projects"
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {githubRepos.map((repo, i) => (
            <FadeIn key={repo.name} delay={i * 80}>
              <RepoCard repo={repo} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-10 text-center">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-offwhite/20 rounded-lg text-offwhite/70 hover:text-mint hover:border-mint transition-colors"
            >
              View all on GitHub
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
