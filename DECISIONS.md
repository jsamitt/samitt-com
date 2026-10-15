# Decisions

Durable decisions and lessons about samitt.co — the product and the code — that should
outlive any single conversation.

Entries get here through Proof: `/proof-learn` sweeps each working session for lessons,
and only the ones that pass its durability gate are promoted into this file. Each entry
says what was decided, why, and when. Prune entries that stop being true.

<!-- Newest first. -->

## 2026-10-15 — A static-file link that works in `next dev` can still 404 in production  ([#40](https://github.com/jsamitt/samitt-com/issues/40))

**Gotcha:** On macOS, `next dev` serves files in `public/` case-insensitively. `/writing/Product-Mindset-2020.pdf` returns `200` locally, but `next start` and Vercel (Linux) return `404` for it, because the file is `product-mindset-2020.pdf`.
**Decision:** Verify links to static files by exact path, against a production build (`npm run build && npm start`) or the Vercel preview. A dev-server `200` is not proof.

## 2026-10-15 — Read every document in full before it goes into `public/`  ([#40](https://github.com/jsamitt/samitt-com/issues/40))

**Decision:** Before committing a PDF, deck or any other document to `public/`, read every page, and check its metadata and link annotations too (`pdftotext`, `pdfinfo`). A replacement file gets the same check. Compare it against the version already read, for example by diffing extracted text, rather than trusting that only the name changed.
**Why:** This repo is public and `public/` is served as-is, so anything in the file is published twice: at samitt.co and in git history, which keeps it after the file is swapped. The first export of *Product Mindset in the AI Era* had Jeff's phone number on its last slide. Reading all 20 pages caught it; a skim of the title slide would not have.

## 2026-10-15 — Check the `\u` escapes after editing `data.ts`  ([#34](https://github.com/jsamitt/samitt-com/issues/34))

**Gotcha:** `src/lib/data.ts` writes apostrophes and dashes as `\u2019`/`\u2014` escapes. Claude Code's Edit tool writes those escapes as the literal characters `’`/`—`, and can fail to match an existing string that contains one. The file still compiles and looks right, so the mixed style only shows up when you grep.
**Decision:** After editing `data.ts`, run `git diff -U0 src/lib/data.ts | grep '^+' | grep '[—’→–]'` and escape any new string it flags. Moved, unchanged lines can keep their original characters. A Python script that builds the backslash with `chr(92)` writes the escapes reliably.

## 2026-10-15 — Tick the `todo.md` line in the PR that finishes it  ([#35](https://github.com/jsamitt/samitt-com/issues/35))

**Decision:** When a change completes a `todo.md` item, that same PR ticks the item and updates its description. A manual step in a dashboard counts too, so record it as soon as it's confirmed live.
**Why:** Every Proof session reads `todo.md` before planning. Four finished items sat unticked, one of them describing a sender address the code no longer used. A later build would have believed it.

## 2026-10-11 — Check scroll and focus behaviour in a headless browser, not the in-app pane  ([#15](https://github.com/jsamitt/samitt-com/issues/15))

**Gotcha:** The Claude desktop app's browser pane is often hidden, and a hidden page doesn't run its rendering steps. Scroll events never fire, `scroll-smooth` (set on `<html>` in `layout.tsx`) never advances, and `#section` jumps on load don't happen. The nav looked broken there when it was correct.
**Decision:** Verify anything driven by scroll, focus or timing with headless Playwright against `npm run dev`. Chromium for it is already cached on this machine. The pane is fine for static reads.

## 2026-10-11 — Each git worktree needs its own `node_modules`  ([#9](https://github.com/jsamitt/samitt-com/issues/9))

**Gotcha:** Next 16's Turbopack refuses to start when `node_modules` is a symlink to another checkout. It panics with *"Symlink [project]/node_modules is invalid, it points out of the filesystem root"*. Lint and `tsc` work through the symlink, so it only fails once the dev server starts.
**Decision:** Run `npm ci` in every new worktree. Use one when the main checkout has someone else's uncommitted work.

## 2026-10-11 — Breakpoints in JavaScript use `rem`, the same as Tailwind's  ([#15](https://github.com/jsamitt/samitt-com/issues/15))

**Decision:** Any `matchMedia` query that mirrors a Tailwind breakpoint copies Tailwind's value in `rem`. `lg` is `(min-width: 64rem)`, not `1024px`.
**Why:** In a media query, `rem` follows the browser's default font size, not the page's. With a 20px default, `lg:` switches at 1280px while a `1024px` query switches at 1024px. Between the two, the JS and the CSS disagree. In #15 the phone menu closed itself while the phone layout was still showing.


## 2026-10-10 — Build visible keyboard focus even when the canvas doesn't draw it  ([#6](https://github.com/jsamitt/samitt-com/issues/6), [#7](https://github.com/jsamitt/samitt-com/issues/7), [#10](https://github.com/jsamitt/samitt-com/issues/10))

**Decision:** Every link and button gets a visible pine (`ink`) `focus-visible` outline, defined once in `globals.css`. Dark sections (the pine Contact section) override it with `on-dark`; form fields aren't covered by the global rule and get their own visible focus style in their component.
**Why:** The redesign artboards have no focus states, so builds made from them shipped with none — the browser default ring is easy to lose on sage and on the ink pill. Missed in #6, then repeated in #7 because the lesson lived only in an issue comment.
**Rejected:** Marigold (`accent`) as the ring colour — 1.7:1 on page, invisible.
**Also:** Visible outlines aren't enough when a control disappears or gets disabled. A `<fieldset disabled>` around a sending form disables the focused submit button and drops focus to `<body>`, so after an error or success the next Tab restarts from the top of the page. Move focus to the outcome on purpose (the alert or the result block, `tabIndex={-1}`). Found in [#10](https://github.com/jsamitt/samitt-com/issues/10)'s review.

## 2026-10-10 — Site-wide visual changes go through an integration branch  ([#5](https://github.com/jsamitt/samitt-com/issues/5))

**Decision:** Any change that restyles the whole site is built on a long-lived branch (with its Vercel preview), one PR per piece, and merged to `main` once.
**Why:** Every merge to `main` deploys straight to samitt.co, and colours and fonts are global — switching them flips every section at once, so a partial migration on `main` shows visitors a broken or mixed-looking site.
**Rejected:** Section-by-section on `main` (a half-old, half-new site live for days) and one giant PR (too big to review properly).
**Also:** `Closes #n` only fires when a PR merges into the default branch (`main`). Child PRs into the integration branch leave their issues open, so close each child issue by hand when its PR merges, and put `Closes` for the parent issue on the final PR into `main`. Found when #9 and #15 stayed open after merging.
