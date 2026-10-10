import { currentBuilds } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

export function CurrentBuilds() {
  return (
    <section id="building" className="bg-band">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-24 pb-28">
        <FadeIn>
          <SectionHeading
            number="03"
            title="What I’m building right now"
            className="mb-14"
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {currentBuilds.map((project, i) => {
            // A build still in development is the one highlighted in marigold.
            const active = project.status === "In development";
            return (
              <FadeIn key={project.name} delay={i * 120}>
                <article className="border-t-2 border-ink pt-6 flex flex-col gap-3.5">
                  <span
                    className={`self-start px-3.5 py-1.5 rounded-full text-sm font-semibold ${
                      active ? "bg-accent" : "bg-surface"
                    }`}
                  >
                    {project.status}
                  </span>
                  <h3 className="font-display font-extrabold text-[32px] leading-[1.05]">
                    {project.name}
                  </h3>
                  <p className="text-ink-muted">{project.description}</p>
                  <p className="text-[15px] text-ink-muted">
                    Built with {project.builtWith}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
