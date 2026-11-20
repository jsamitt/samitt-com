# Proof Software (proofsoftware.co) — Open Items

## Placeholders

- [x] **"Product Mindset in the AI Era" link** — The deck is now hosted on samitt.co at `/writing/product-mindset-in-the-ai-era-2026.pdf` (`src/lib/data.ts`, `articles` array)
- [x] **GitHub repos** — Tiles use real repo names and descriptions (`src/lib/data.ts`, `githubRepos` array)
- [x] **Open Graph image** — Proof Software link-preview card, a static `src/app/opengraph-image.png` (1200×630) from the design system, with `opengraph-image.alt.txt`
- [x] **Favicon** — Proof Software mark (ink disc, "p", marigold dot): `src/app/icon.svg`, `favicon.ico` (16/32) and a 180px `apple-icon.png`

## Contact Form

- [x] **Email field added** — Form now collects name, email, company, and message
- [x] **API route created** — `src/app/api/contact/route.ts` handles POST requests
- [x] **Email delivery live** — Resend connected, submissions go to Gmail with reply-to set
- [x] **Verify sending domain** — The form sends from `jeff@samitt.co` via Resend (display name "Proof Software Contact")
- [ ] **Send from proofsoftware.co** — Verify the domain in Resend, then switch the sender (#59)
- [x] **Spam protection** — `contact_ref` honeypot field, server-side type, length and email checks in `src/app/api/contact/route.ts`, and a Vercel firewall rate limit set in the dashboard (#3)

## Analytics

- [x] **Google Analytics wired up** — Loaded via `NEXT_PUBLIC_GA_ID` in `src/app/layout.tsx`
- [x] **Set GA measurement ID** — `NEXT_PUBLIC_GA_ID` is set in Vercel

## SEO

- [x] **robots.txt** — Auto-generated via `src/app/robots.ts`
- [x] **sitemap.xml** — Auto-generated via `src/app/sitemap.ts` (using `proofsoftware.co`)

## Deployment

- [x] **GitHub repo** — https://github.com/jsamitt/samitt-com
- [x] **Deployed to Vercel** — samitt-com.vercel.app
- [ ] **Domain** — proofsoftware.co (Cloudflare registrar) is the primary domain in Vercel, and `www.proofsoftware.co` redirects to it. Pages name `https://proofsoftware.co` as canonical (#58; the dashboard steps happen at launch)
- [ ] **Old address** — `samitt.co` and `www.samitt.co` 308-redirect, any path, to the same path on proofsoftware.co (#58). Before this, samitt.co was the primary domain (#24)
- [x] **Email forwarding** — jeff@samitt.co, and jeff@, hello@ and support@proofsoftware.co → Gmail via Cloudflare Email Routing
