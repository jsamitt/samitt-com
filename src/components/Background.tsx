import { timeline, socialLinks } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function Background() {
  return (
    <section id="background" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionHeading title="Background" />
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-teal/30" />

          <div className="space-y-8">
            {timeline.map((entry, i) => (
              <FadeIn key={entry.company} delay={i * 100}>
                <div className="relative flex items-start gap-6 pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-teal border-2 border-navy-900" />

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="text-lg font-bold">{entry.company}</h3>
                      <span className="text-sm text-teal font-medium">
                        {entry.period}
                      </span>
                    </div>
                    <p className="text-offwhite/60">{entry.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={600}>
          <div className="mt-12 pl-12 md:pl-16">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-teal hover:text-teal-light transition-colors font-medium"
            >
              View full profile on LinkedIn
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
