import { articles } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Thinking() {
  return (
    <section id="thinking">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-24">
        <FadeIn>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
            <SectionHeading number="05" title="Thinking" className="" />
            <p className="max-w-[420px] text-ink-muted">
              Occasional writing on product, AI, and building.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-10">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 120}>
              <a
                href={article.link}
                className="block border-t-2 border-ink pt-7"
              >
                <span className="flex flex-col gap-4">
                  <span className="text-[13px] font-semibold tracking-[0.12em] uppercase text-ink-muted">
                    Article · LinkedIn
                  </span>
                  <span className="font-display font-extrabold text-[34px] leading-[1.1] tracking-[-0.01em]">
                    {article.title}
                  </span>
                  <span className="text-ink-muted">{article.excerpt}</span>
                  <span className="font-semibold underline underline-offset-4 decoration-2 decoration-accent">
                    Read more →
                  </span>
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
