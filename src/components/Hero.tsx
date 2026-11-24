import { shippedFacts } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { ProofLoop } from "./ProofLoop";

export function Hero() {
  return (
    <section id="hero" className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-[164px] lg:pt-[188px] pb-[88px]">
      <div className="flex flex-wrap items-center gap-14">
        <div className="flex-[3_1_560px] min-w-0">
          <FadeIn>
            <h1 className="max-w-[800px] font-display font-extrabold text-[clamp(46px,6.2vw,88px)] leading-[1.02] tracking-[-0.03em]">
              We build software that solves{" "}
              <span className="bg-accent rounded-[14px] px-3 [box-decoration-break:clone]">
                real-world problems.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-8 max-w-[580px] text-[21px] leading-relaxed text-ink-muted">
              AI made it easy to ship bad software fast. We start from the
              user, understand the problems worth solving, hypothesize
              solutions, prove the approach, then build and ship &mdash; so
              what you launch is worth launching.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a
                href="#contact"
                className="inline-flex items-center min-h-[52px] px-7 rounded-full bg-ink text-on-dark font-semibold hover:bg-ink-muted transition-colors"
              >
                Tell us what you&rsquo;re building
              </a>
              <a
                href="#how"
                className="inline-flex items-center min-h-11 font-semibold underline underline-offset-[6px] decoration-2 decoration-accent"
              >
                How we work →
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="flex-[2_1_300px] min-w-0 flex justify-center">
          <FadeIn delay={200} className="w-full max-w-[440px]">
            <ProofLoop />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={150}>
        <h2 className="mt-[88px] mb-5 text-sm font-semibold tracking-[0.12em] uppercase text-ink-muted">
          Proof, in action
        </h2>
        {/* Word figures at 52px: "production" alone is ~270px, so columns
            need ~310px (text 278px after the gutter) before a third one fits, and min() keeps one column on
            phones. Below ~370px wide even one column is too narrow for it at
            52px, so the figure eases down (to ~45px at 320px). */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(310px,100%),1fr))] border-t-2 border-ink">
          {shippedFacts.map((fact) => (
            <div key={fact.figure} className="pt-7 pr-8">
              <p className="font-display font-extrabold text-[clamp(40px,14vw,52px)] leading-none tracking-[-0.03em]">
                {fact.figure}
              </p>
              <p className="mt-3 text-[15px] text-ink-muted">{fact.caption}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
