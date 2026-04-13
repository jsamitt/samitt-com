import { articles } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Thinking() {
  return (
    <section id="thinking" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="Thinking"
            subtitle="Occasional writing on product, AI, and building"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 120}>
              <a
                href={article.link}
                className="group block p-8 rounded-xl bg-white/5 border border-white/10 hover:border-teal/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <svg
                    className="w-5 h-5 text-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                  <span className="text-xs text-offwhite/40 uppercase tracking-wider font-semibold">
                    Article
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-teal transition-colors">
                  {article.title}
                </h3>
                <p className="text-offwhite/60 leading-relaxed">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-1 mt-4 text-sm text-teal font-medium">
                  Read more
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
