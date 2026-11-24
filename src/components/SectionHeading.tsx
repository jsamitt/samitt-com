export function SectionHeading({
  title,
  subtitle,
  tone = "light",
  size = "md",
  className = "mb-12",
}: {
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
      <h2 className={`[overflow-wrap:anywhere] font-display font-extrabold ${titleSize} ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 [overflow-wrap:anywhere] text-lg ${subtitleColor} max-w-2xl`}>{subtitle}</p>
      )}
    </div>
  );
}
