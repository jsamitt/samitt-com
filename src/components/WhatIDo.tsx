import { services } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

const iconProps = {
  width: 32,
  height: 32,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "shrink-0",
};

const icons: Record<string, React.ReactNode> = {
  compass: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </svg>
  ),
  rocket: (
    <svg {...iconProps}>
      <path d="M5 19c1-4 3-7 7-11 3-3 6-4 7-4 0 1-1 4-4 7-4 4-7 6-11 7" />
      <path d="M9 15l-3 3" />
    </svg>
  ),
  users: (
    <svg {...iconProps}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19c0-3 3-5 6-5s6 2 6 5" />
      <path d="M15 14c3 0 6 1.5 6 4" />
    </svg>
  ),
  zap: (
    <svg {...iconProps}>
      <path d="M4 14L14 3l-2 8h8L10 21l2-7z" />
    </svg>
  ),
};

export function WhatIDo() {
  return (
    <section id="what-i-do" className="bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-24 flex flex-wrap gap-12">
        <div className="flex-[1_1_240px]">
          <FadeIn>
            <SectionHeading
              number="01"
              title="How I can help"
              subtitle="Four ways to work together."
            />
          </FadeIn>
        </div>

        <div className="flex-[3_1_560px] min-w-0">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 100}>
              <div
                className={`py-7 flex flex-wrap items-start gap-x-8 gap-y-3 ${
                  i === 0 ? "border-t-2 border-ink" : "border-t border-rule"
                } ${i === services.length - 1 ? "border-b border-b-rule" : ""}`}
              >
                {icons[service.icon]}
                <h3 className="flex-[1_1_240px] font-display font-bold text-[26px] leading-tight">
                  {service.title}
                </h3>
                <p className="flex-[1_1_260px] text-ink-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
