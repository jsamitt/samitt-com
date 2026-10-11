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
                className="group block border-t-2 border-ink pt-7"
              >
                <div className="flex flex-col gap-4">
                  <span className="text-[13px] font-semibold tracking-[0.12em] uppercase text-ink-muted">
                    Article · LinkedIn
                  </span>
                  <h3 className="font-display font-extrabold text-[34px] leading-[1.1] tracking-[-0.01em] decoration-accent decoration-[3px] underline-offset-[6px] group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="text-ink-muted">{article.excerpt}</p>
                  <span className="font-semibold underline underline-offset-4 decoration-2 decoration-accent">
                    Read more <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
