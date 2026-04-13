export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <div className="w-12 h-1 bg-teal rounded-full mb-4" />
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-offwhite/60 text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
