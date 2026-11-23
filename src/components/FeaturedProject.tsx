import type { Project } from "@/lib/data";
import { StatusBadge } from "./StatusBadge";
import { DeviceFrame } from "./DeviceFrame";

const linkClass =
  "self-start inline-flex max-w-full items-center min-h-11 font-semibold underline underline-offset-[6px] decoration-2 decoration-accent [overflow-wrap:anywhere]";

/** A featured project: story and stack on the left, a screenshot on a band panel. */
export function FeaturedProject({
  name,
  status,
  story,
  stack,
  link,
  screenshot,
}: Project) {
  return (
    <article className="flex flex-wrap gap-8 sm:gap-10 p-6 sm:p-10 rounded-card bg-surface">
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
        <div className="flex flex-col gap-5 border-t-2 border-ink pt-5">
          <p>
            <StatusBadge status={status} />
          </p>
          <h3 className="[overflow-wrap:anywhere] font-display font-extrabold text-[clamp(2rem,6vw,2.5rem)] leading-[1.05] tracking-[-0.02em]">
            {name}
          </h3>
          <p className="[overflow-wrap:anywhere] text-lg leading-normal">{story}</p>
          {link && (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {link.label} {"→"}
            </a>
          )}
        </div>
        {stack && (
          <p className="mt-auto border-t border-rule pt-4 text-[15px] text-ink-muted [overflow-wrap:anywhere]">
            {stack}
          </p>
        )}
      </div>
      {screenshot && (
        <div className="flex min-w-0 flex-[1_1_320px] items-center justify-center rounded-card bg-band p-6 sm:p-8">
          <DeviceFrame {...screenshot} />
        </div>
      )}
    </article>
  );
}
