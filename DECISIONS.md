# Decisions

Durable decisions and lessons about samitt.co — the product and the code — that should
outlive any single conversation.

Entries get here through Proof: `/proof-learn` sweeps each working session for lessons,
and only the ones that pass its durability gate are promoted into this file. Each entry
says what was decided, why, and when. Prune entries that stop being true.

<!-- Newest first. -->

## 2026-10-10 — Build visible keyboard focus even when the canvas doesn't draw it  ([#6](https://github.com/jsamitt/samitt-com/issues/6), [#7](https://github.com/jsamitt/samitt-com/issues/7))

**Decision:** Every link and button gets a visible pine (`ink`) `focus-visible` outline, defined once in `globals.css`. Dark sections (the pine Contact section) override it with `on-dark`.
**Why:** The redesign artboards have no focus states, so builds made from them shipped with none — the browser default ring is easy to lose on sage and on the ink pill. Missed in #6, then repeated in #7 because the lesson lived only in an issue comment.
**Rejected:** Marigold (`accent`) as the ring colour — 1.7:1 on page, invisible.

## 2026-10-10 — Site-wide visual changes go through an integration branch  ([#5](https://github.com/jsamitt/samitt-com/issues/5))

**Decision:** Any change that restyles the whole site is built on a long-lived branch (with its Vercel preview), one PR per piece, and merged to `main` once.
**Why:** Every merge to `main` deploys straight to samitt.co, and colours and fonts are global — switching them flips every section at once, so a partial migration on `main` shows visitors a broken or mixed-looking site.
**Rejected:** Section-by-section on `main` (a half-old, half-new site live for days) and one giant PR (too big to review properly).
