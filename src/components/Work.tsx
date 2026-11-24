import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";
import { FeaturedProject } from "./FeaturedProject";
import { StatusBadge } from "./StatusBadge";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="work">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-24 pb-28">
        <FadeIn>
          <SectionHeading
            title="Proof, shipped"
            subtitle="Recent projects, built the same way we’d build yours."
            className="mb-14"
          />
        </FadeIn>

        <div className="flex flex-col gap-6">
          {featured.map((project) => (
            <FadeIn key={project.name}>
              <FeaturedProject {...project} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h3 className="[overflow-wrap:anywhere] mt-20 mb-4 font-display font-extrabold text-2xl leading-[1.1] tracking-[-0.02em]">
            More from the studio
          </h3>
        </FadeIn>
        <FadeIn>
          <ul role="list" className="border-t-2 border-ink">
            {more.map((project) => (
              <li
                key={project.name}
                className="flex flex-wrap items-center gap-x-8 gap-y-3 py-6 border-b border-rule"
              >
                <div className="min-w-0 flex-[1_1_320px]">
                  <h4 className="[overflow-wrap:anywhere] font-display font-extrabold text-[22px] leading-[1.15]">
                    {project.name}
                  </h4>
                  <p className="mt-1 [overflow-wrap:anywhere] text-[17px] leading-normal text-ink-muted">
                    {project.story}
                  </p>
                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex max-w-full items-center min-h-11 font-semibold underline underline-offset-[6px] decoration-2 decoration-accent [overflow-wrap:anywhere]"
                    >
                      {project.link.label} {"→"}
                    </a>
                  )}
                </div>
                <div className="min-w-0 max-w-full">
                  <StatusBadge status={project.status} />
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
