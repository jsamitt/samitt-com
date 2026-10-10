import Image from "next/image";
import { outcomes } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section id="hero" className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-[164px] lg:pt-[188px] pb-[88px]">
      <div className="flex flex-wrap items-center gap-14">
        <div className="flex-[3_1_560px] min-w-0">
          <FadeIn>
            <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <p className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface text-[15px] font-semibold">
                <span aria-hidden="true" className="w-2 h-2 rounded-full bg-positive" />
                Open to new opportunities
              </p>
              <p className="text-sm font-semibold tracking-[0.12em] uppercase text-ink-muted">
                Fractional CPO · Product executive · Hands-on builder
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="max-w-[777px] font-display font-extrabold text-[clamp(46px,6.2vw,88px)] leading-[1.02] tracking-[-0.03em]">
              Hi there. I&rsquo;m <br />
              Jeff Samitt. I lead product teams —{" "}
              <span className="bg-accent rounded-[14px] px-3 [box-decoration-break:clone]">
                and still build.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-8 max-w-[560px] text-[21px] leading-relaxed text-ink-muted">
              AI-native product executive &amp; builder/operator. I embed, lead,
              and ship for growth-stage companies.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a
                href="#contact"
                className="inline-flex items-center min-h-[52px] px-7 rounded-full bg-ink text-on-dark font-semibold hover:bg-ink-muted transition-colors"
              >
                Let&rsquo;s talk
              </a>
              <a
                href="#work"
                className="font-semibold underline underline-offset-[6px] decoration-2 decoration-accent"
              >
                See my work →
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="flex-[2_1_300px] min-w-0 flex justify-center">
          <FadeIn delay={200}>
            <Image
              src="/jeff-samitt.jpg"
              alt="Jeff Samitt"
              width={800}
              height={800}
              preload
              sizes="(min-width: 640px) 360px, 280px"
              className="block w-[280px] sm:w-[360px] aspect-square object-cover rounded-full bg-band shadow-[0_0_0_12px_var(--color-surface),0_0_0_14px_var(--color-rule)]"
            />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={150}>
        <div className="mt-[88px] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] border-t-2 border-ink">
          {outcomes.map((outcome) => (
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
