export function SectionHeading({
  number,
  title,
  subtitle,
  tone = "light",
  size = "md",
  className = "mb-12",
}: {
  number: string;
  title: string;
  subtitle?: string;
  /** "dark" for sections on the ink background */
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
}) {
  const titleColor = tone === "dark" ? "text-on-dark" : "text-ink";
  const subtitleColor = tone === "dark" ? "text-on-dark-muted" : "text-ink-muted";
  const titleSize =
    size === "lg"
      ? "text-[clamp(2.75rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em]"
      : "text-4xl md:text-5xl leading-[1.05] tracking-tight";

  return (
    <div className={className}>
      <p
        aria-hidden="true"
        className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent text-ink font-display font-extrabold text-lg"
      >
        {number}
      </p>
      <h2 className={`mt-4 font-display font-extrabold ${titleSize} ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${subtitleColor} max-w-2xl`}>{subtitle}</p>
      )}
    </div>
  );
}
