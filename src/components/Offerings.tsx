import { engagements, offerings, type Offering } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { OfferingCard } from "./OfferingCard";

/** The sentence, with `link.text` (if any) turned into an external link. */
function Description({ description, link }: Offering) {
  const at = link ? description.indexOf(link.text) : -1;
  if (!link || at === -1) return <>{description}</>;
  return (
    <>
      {description.slice(0, at)}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ink font-semibold underline underline-offset-4 decoration-2 decoration-accent"
      >
        {link.text}
      </a>
      {description.slice(at + link.text.length)}
    </>
  );
}

export function Offerings() {
  return (
    <section id="offerings" className="bg-band">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-24 pb-28">
        <FadeIn>
          <SectionHeading
            number="03"
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
            We work on a fixed fee, a monthly retainer, or a fee tied to
            outcomes we agree up front and paid over time.
          </p>
        </FadeIn>

        <FadeIn>
          <h3 className="mt-20 mb-8 font-display font-extrabold text-[32px] leading-[1.05] tracking-[-0.02em]">
            What we build
          </h3>
        </FadeIn>
        <ul>
          {offerings.map((offering, i) => (
            <li
              key={offering.name}
              className={`py-7 flex flex-wrap gap-x-10 gap-y-2 ${
                i === 0 ? "border-t-2 border-ink" : "border-t border-rule"
              } ${i === offerings.length - 1 ? "border-b border-b-rule" : ""}`}
            >
              <h4 className="flex-[1_1_240px] min-w-0 font-display font-extrabold text-2xl leading-[1.15]">
                {offering.name}
              </h4>
              <p className="flex-[2_1_280px] min-w-0 text-ink-muted leading-relaxed">
                <Description {...offering} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
