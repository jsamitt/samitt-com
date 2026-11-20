import type { Engagement } from "@/lib/data";

/**
 * One way to work with the studio (design system: OfferingCard). A surface
 * card with a title, three labelled rows under a 2px ink rule, and a text-link
 * CTA pinned to the bottom so cards in a row line up. No prices, ever.
 * `recommended` adds the 2px ink border and the "Start here" flag; use it on
 * one card per set.
 */
export function OfferingCard({
  title,
  recommended = false,
  who,
  what,
  shape,
  cta,
}: Engagement) {
  const rows = [
    { label: "Who it’s for", value: who },
    { label: "What you get", value: what },
    { label: "Typical shape", value: shape },
  ];

  return (
    <article
      className={`h-full flex flex-col gap-6 p-6 sm:p-8 rounded-card bg-surface border-2 ${
        recommended ? "border-ink" : "border-transparent"
      }`}
    >
      {recommended && (
        <p className="self-start px-3.5 py-1.5 rounded-full bg-accent text-ink text-sm font-semibold leading-[1.3]">
          Start here
        </p>
      )}
      <h3 className="[overflow-wrap:anywhere] font-display font-extrabold text-[32px] leading-[1.05] tracking-[-0.02em]">
        {title}
      </h3>
      <dl className="flex-1">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`py-4 ${i === 0 ? "border-t-2 border-ink" : "border-t border-rule"}`}
          >
            <dt className="[overflow-wrap:anywhere] text-sm font-semibold tracking-[0.12em] uppercase text-ink-muted">
              {row.label}
            </dt>
            <dd className="[overflow-wrap:anywhere] mt-1 text-[17px] leading-normal">{row.value}</dd>
          </div>
        ))}
      </dl>
      <a
        href={cta.href}
        className="self-start inline-flex items-center min-h-11 font-semibold underline underline-offset-[6px] decoration-2 decoration-accent"
      >
        {cta.label}
      </a>
    </article>
  );
}
