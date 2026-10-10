export function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <p
        aria-hidden="true"
        className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent text-ink font-display font-extrabold text-lg"
      >
        {number}
      </p>
      <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-ink-muted max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
