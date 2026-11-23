import type { ProjectStatus } from "@/lib/data";

type Style = { pill: string; dot: string };

const appStore: Style = {
  pill: "bg-ink text-on-dark",
  dot: "rounded-full bg-accent",
};
const beta: Style = { pill: "bg-band text-ink", dot: "bg-ink" };
const live: Style = {
  pill: "bg-surface text-ink border border-field",
  dot: "rounded-full bg-positive",
};
const client: Style = {
  pill: "bg-surface text-ink border border-field",
  dot: "rotate-45 bg-ink-muted",
};

const styles: Record<ProjectStatus, Style> = {
  "On the App Store": appStore,
  "Open beta": beta,
  "Closed beta": beta,
  Prototype: beta,
  "In production": live,
  "Open source": live,
  "Closed beta · client build": client,
};

/** Project status pill. The dot is decoration; the text carries the meaning. */
export function StatusBadge({ status }: { status: ProjectStatus }) {
  const style = styles[status];
  return (
    <span
      className={`inline-flex max-w-full items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-semibold leading-[1.3] ${style.pill}`}
    >
      <span
        aria-hidden="true"
        className={`shrink-0 w-2.5 h-2.5 ${style.dot}`}
      />
      <span className="min-w-0 [overflow-wrap:anywhere]">{status}</span>
    </span>
  );
}
