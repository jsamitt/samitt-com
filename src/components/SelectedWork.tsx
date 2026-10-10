import { selectedWork } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-1 text-[13px] font-semibold tracking-[0.12em] uppercase text-ink-muted">
      {children}
    </p>
  );
}

export function SelectedWork() {
  return (
    <section id="work">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-24">
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <SectionHeading number="02" title="Selected work" className="" />
            <p className="max-w-[420px] text-ink-muted">
              A mix of executive-led initiatives and hands-on builds.
            </p>
          </div>
        </FadeIn>

        <div className="border-t-2 border-ink">
          {selectedWork.map((entry, i) => (
            <FadeIn key={`${entry.company}-${i}`} delay={i * 80}>
              <article className="py-10 border-b border-rule flex flex-wrap gap-x-14 gap-y-5">
                <div className="flex-[1_1_260px] flex flex-col items-start gap-2">
                  <h3 className="font-display font-extrabold text-[30px] leading-[1.1]">
                    {entry.company}
                  </h3>
                  <p className="text-base text-ink-muted">{entry.context}</p>
                  {entry.builtByMe && (
                    <span className="mt-1.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent text-sm font-semibold">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z" />
                      </svg>
                      Built by me
                    </span>
                  )}
                </div>

                <div className="flex-[2_1_560px] min-w-0 flex flex-col gap-5">
                  <div>
                    <Label>Outcome</Label>
                    <p className="font-display font-bold text-[26px] leading-tight">
                      {entry.outcome}
                    </p>
                  </div>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 gap-y-5">
                    <div>
                      <Label>Challenge</Label>
                      <p className="text-base text-ink-muted">{entry.challenge}</p>
                    </div>
                    <div>
                      <Label>What I did</Label>
                      <p className="text-base text-ink-muted">{entry.whatIDid}</p>
                    </div>
                  </div>
                  {entry.tech && (
                    <p className="pt-3.5 border-t border-dashed border-rule text-[15px] text-ink-muted">
                      <strong className="font-semibold text-ink">Tech:</strong>{" "}
                      {entry.tech}
                    </p>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
