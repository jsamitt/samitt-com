import { timeline, socialLinks } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Background() {
  return (
    <section id="background" className="bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-24 flex flex-wrap gap-12">
        <div className="flex-[1_1_240px]">
          <FadeIn>
            <SectionHeading number="06" title="Background" className="mb-6" />
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 decoration-2 decoration-accent"
            >
              View full profile on LinkedIn →
            </a>
          </FadeIn>
        </div>

        <div className="flex-[3_1_560px] min-w-0 border-t-2 border-ink">
          {timeline.map((entry, i) => (
            <FadeIn key={entry.company} delay={i * 100}>
              <div className="py-[22px] border-b border-rule flex flex-wrap items-baseline gap-x-8 gap-y-1">
                <span className="flex-[0_0_150px] text-[15px] font-semibold tabular-nums text-ink-muted">
                  {entry.period}
                </span>
                <h3 className="flex-[1_1_200px] font-display font-bold text-2xl leading-tight">
                  {entry.company}
                </h3>
                <p className="flex-[1_1_240px] text-ink-muted">{entry.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
