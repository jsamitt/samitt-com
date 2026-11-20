import type { ReactNode } from "react";

export interface RuleRow {
  key: string;
  title: string;
  body: ReactNode;
}

/** Ruled list of title + body rows. `ratio` is the body's flex share against the title. */
export function RuleRows({
  rows,
  as: Title = "h3",
  ratio = 2,
}: {
  rows: RuleRow[];
  as?: "h3" | "h4";
  ratio?: 1 | 2;
}) {
  const bodyFlex = ratio === 2 ? "flex-[2_1_280px]" : "flex-[1_1_280px]";
  return (
    <ul>
      {rows.map((row, i) => (
        <li
          key={row.key}
          className={`py-7 flex flex-wrap gap-x-10 gap-y-2 ${
            i === 0 ? "border-t-2 border-ink" : "border-t border-rule"
          } ${i === rows.length - 1 ? "border-b border-b-rule" : ""}`}
        >
          <Title className="flex-[1_1_240px] min-w-0 [overflow-wrap:anywhere] font-display font-extrabold text-2xl leading-[1.15]">
            {row.title}
          </Title>
          <p className={`${bodyFlex} min-w-0 [overflow-wrap:anywhere] text-ink-muted leading-relaxed`}>
            {row.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
