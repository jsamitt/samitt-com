import { shippedFacts } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { ProofLoop } from "./ProofLoop";

export function Hero() {
  return (
    <section id="hero" className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-[164px] lg:pt-[188px] pb-[88px]">
      <div className="flex flex-wrap items-center gap-14">
        <div className="flex-[3_1_560px] min-w-0">
          <FadeIn>
            <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <p className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface text-[15px] font-semibold">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-positive" />
                Taking on new projects
              </p>
              <p className="text-sm font-semibold tracking-[0.12em] uppercase text-ink-muted">
                Product-first software studio
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
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
                href="#work"
                className="inline-flex items-center min-h-11 font-semibold underline underline-offset-[6px] decoration-2 decoration-accent"
              >
                See the work →
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
        <div className="mt-[88px] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t-2 border-ink">
          {shippedFacts.map((outcome) => (
            <div key={outcome.figure} className="pt-7 pr-8">
              <p className="font-display font-extrabold text-[52px] leading-none tracking-[-0.03em]">
                {outcome.figure}
              </p>
              <p className="mt-3 text-[15px] text-ink-muted">{outcome.caption}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
