import { selectedWork } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="Selected Work"
            subtitle="A mix of executive-led initiatives and hands-on builds"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedWork.map((entry, i) => (
            <FadeIn key={`${entry.company}-${i}`} delay={i * 80}>
              <div className="group flex flex-col h-full p-8 rounded-xl bg-white/5 border border-white/10 hover:border-teal/50 transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{entry.company}</h3>
                    <p className="text-sm text-teal mt-1">{entry.context}</p>
                  </div>
                  {entry.builtByMe && (
                    <span className="shrink-0 text-xs font-semibold bg-mint text-navy-900 px-2.5 py-1 rounded-full">
                      Built by me
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-offwhite/40 mb-1">
                      Challenge
                    </p>
                    <p className="text-offwhite/70 text-sm leading-relaxed">
                      {entry.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-offwhite/40 mb-1">
                      What I Did
                    </p>
                    <p className="text-offwhite/70 text-sm leading-relaxed">
                      {entry.whatIDid}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-offwhite/40 mb-1">
                      Outcome
                    </p>
                    <p className="text-offwhite/90 text-sm font-medium leading-relaxed">
                      {entry.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech stack */}
                {entry.tech && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-offwhite/40">
                      <span className="font-semibold">Tech:</span>{" "}
                      {entry.tech}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
