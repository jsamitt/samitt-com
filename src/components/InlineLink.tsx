/** The sentence, with `link.text` (if any) turned into an external link. */
export function InlineLink({
  description,
  link,
}: {
  description: string;
  link?: { text: string; href: string };
}) {
  const at = link ? description.indexOf(link.text) : -1;
  if (!link || at === -1) return <>{description}</>;
  return (
    <>
      {description.slice(0, at)}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ink font-semibold underline underline-offset-4 decoration-2 decoration-accent"
      >
        {link.text}
      </a>
      {description.slice(at + link.text.length)}
    </>
  );
}
