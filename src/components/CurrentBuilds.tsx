import { currentBuilds } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function CurrentBuilds() {
  return (
    <section id="building" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading
            title="Currently Building"
            subtitle="Independent projects — because I can't stop building things"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBuilds.map((project, i) => (
            <FadeIn key={project.name} delay={i * 120}>
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-teal/50 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-mint">
                    <span className="w-2 h-2 bg-mint rounded-full animate-pulse" />
                    {project.status}
                  </span>
                </div>

                <p className="text-offwhite/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-offwhite/40">
                    <span className="font-semibold">Built with:</span>{" "}
                    {project.builtWith}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
