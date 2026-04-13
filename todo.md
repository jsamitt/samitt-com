# Samitt.co — Open Items

## Placeholders

- [ ] **Article links** — Both articles in the Thinking section link to `#`. Replace with actual LinkedIn post / PDF links once published.
  - "Most Product Teams Are Still Staffed Like It's 2020" (`src/lib/data.ts`, line 181)
  - "Product Mindset in the AI Era" (`src/lib/data.ts`, line 187)
- [ ] **GitHub repos** — The four repo cards are static placeholder data. Options: replace with real repo names/descriptions, or fetch live from the GitHub API (`src/lib/data.ts`, `githubRepos` array)
- [ ] **Open Graph image** — No `og-image.png` in `/public` yet. Create a branded OG image for link previews (recommended: 1200x630px)
- [ ] **Favicon** — Currently using the default Next.js favicon. Replace `/public/favicon.ico` with a custom one

## Contact Form

- [x] **Email field added** — Form now collects name, email, company, and message
- [x] **API route created** — `src/app/api/contact/route.ts` handles POST requests
- [x] **Email delivery live** — Resend connected, submissions go to Gmail with reply-to set
- [ ] **Verify sending domain** — Currently sends from `onboarding@resend.dev`. Verify `samitt.co` in Resend to send from `jeff@samitt.co`
- [ ] **Spam protection** — Add honeypot field or reCAPTCHA if spam becomes a problem

## Analytics

- [x] **Google Analytics wired up** — Just needs the measurement ID
- [ ] **Set GA measurement ID** — Add `NEXT_PUBLIC_GA_ID` environment variable in Vercel (e.g. `G-XXXXXXXXXX`)

## SEO

- [x] **robots.txt** — Auto-generated via `src/app/robots.ts`
- [x] **sitemap.xml** — Auto-generated via `src/app/sitemap.ts` (using `samitt.co`)

## Deployment

- [x] **GitHub repo** — https://github.com/jsamitt/samitt-com
- [x] **Deployed to Vercel** — samitt-com.vercel.app
- [x] **Domain** — samitt.co (Cloudflare registrar, DNS pointing to Vercel)
- [x] **Email forwarding** — jeff@samitt.co → Gmail via Cloudflare Email Routing
