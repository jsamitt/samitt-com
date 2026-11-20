import { processSteps, thesisPoints } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { RuleRows } from "./RuleRows";
import { InlineLink } from "./InlineLink";

export function HowWeWork() {
  return (
    <>
      <section id="why" className="bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-24 pb-28">
          <div className="flex flex-wrap gap-12">
            <FadeIn className="flex-[1_1_280px] min-w-0">
              <SectionHeading
                number="01"
                title="The bottleneck moved"
                subtitle="Writing code used to be the hard part. Now it’s deciding what’s worth writing."
                className="mb-0"
              />
            </FadeIn>
            <FadeIn className="flex-[2_1_560px] min-w-0">
              <RuleRows
                as="h3"
                ratio={1}
                rows={thesisPoints.map((p) => ({
                  key: p.title,
                  title: p.title,
                  body: p.body,
                }))}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-24 pb-28">
          <FadeIn>
            <SectionHeading
              number="02"
              title="How we work"
              subtitle="Four steps, in the same order every time. The order is the point."
              className="mb-14"
            />
          </FadeIn>
          <ol
            role="list"
            className="grid grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-x-8"
          >
            {processSteps.map((step, i) => (
              <li key={step.title} className="pt-6 pb-8 border-t-2 border-ink">
                <span
                  aria-hidden="true"
                  className="block mb-4 font-display font-extrabold text-2xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="[overflow-wrap:anywhere] font-display font-extrabold text-2xl leading-[1.15]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[17px] leading-normal text-ink-muted [overflow-wrap:anywhere]">
                  <InlineLink description={step.description} link={step.link} />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
