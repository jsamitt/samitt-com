import { engagements, offerings } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { OfferingCard } from "./OfferingCard";
import { RuleRows } from "./RuleRows";
import { InlineLink } from "./InlineLink";

export function Offerings() {
  return (
    <section id="offerings" className="bg-band">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-24 pb-28">
        <FadeIn>
          <SectionHeading
            title="Ways to work with us"
            subtitle="Most teams start with a sprint. Some never need more than that, which is fine by us."
            className="mb-14"
          />
        </FadeIn>

        {/* 290px columns: three fit from ~920px of content, then two, and
            min() keeps a single column on phones narrower than that. */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(290px,100%),1fr))] gap-6">
          {engagements.map((engagement, i) => (
            <FadeIn key={engagement.title} delay={i * 100} className="h-full">
              <OfferingCard {...engagement} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mt-8 max-w-3xl text-ink-muted leading-relaxed">
            Payment options that work for your business: fixed fee, time &amp;
            expense, monthly retainer, or a fee tied to outcomes we agree upon
            up front.
          </p>
        </FadeIn>

        <FadeIn>
          <h3 className="[overflow-wrap:anywhere] mt-20 mb-8 font-display font-extrabold text-[32px] leading-[1.05] tracking-[-0.02em]">
            What we build
          </h3>
        </FadeIn>
        <RuleRows
          as="h4"
          ratio={2}
          rows={offerings.map((offering) => ({
            key: offering.name,
            title: offering.name,
            body: (
              <InlineLink
                description={offering.description}
                link={offering.link}
              />
            ),
          }))}
        />
      </div>
    </section>
  );
}
