import { services } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

const icons: Record<string, React.ReactNode> = {
  compass: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zm2.5 7.5L9.5 12l5 2.5-2.5-5z" />
    </svg>
  ),
  rocket: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 003.46-8.62 2.25 2.25 0 00-2.18-2.18 14.98 14.98 0 00-8.62 3.46m5.34 7.34L7.25 21V17m8.34-2.63L21 8.84V5m-9.75 5.75a2.25 2.25 0 103.18-3.18 2.25 2.25 0 00-3.18 3.18z" />
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  zap: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
};

export function WhatIDo() {
  return (
    <section id="what-i-do" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading title="What I Offer" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 100}>
              <div className="group p-8 rounded-xl bg-white/5 border border-white/10 hover:border-teal/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-teal mb-4">{icons[service.icon]}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-offwhite/60 leading-relaxed">
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
