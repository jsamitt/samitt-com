# Samitt.co — Open Items

## Placeholders

- [ ] **"Product Mindset in the AI Era" link** — Points to a LinkedIn media-viewer overlay. Replace with a direct post URL once Jeff provides one (`src/lib/data.ts`, `articles` array)
- [x] **GitHub repos** — Tiles use real repo names and descriptions (`src/lib/data.ts`, `githubRepos` array)
- [x] **Open Graph image** — Sage link-preview card generated at build time by `src/app/opengraph-image.tsx` (1200×630)
- [x] **Favicon** — Marigold disc: `src/app/icon.svg`, `favicon.ico` (16/32/48) and a 180px `apple-icon.png`

## Contact Form

- [x] **Email field added** — Form now collects name, email, company, and message
- [x] **API route created** — `src/app/api/contact/route.ts` handles POST requests
- [x] **Email delivery live** — Resend connected, submissions go to Gmail with reply-to set
- [x] **Verify sending domain** — The form sends from `jeff@samitt.co` via Resend
- [x] **Spam protection** — `contact_ref` honeypot field, server-side type, length and email checks in `src/app/api/contact/route.ts`, and a Vercel firewall rate limit set in the dashboard (#3)

## Analytics

- [x] **Google Analytics wired up** — Loaded via `NEXT_PUBLIC_GA_ID` in `src/app/layout.tsx`
- [x] **Set GA measurement ID** — `NEXT_PUBLIC_GA_ID` is set in Vercel

## SEO

- [x] **robots.txt** — Auto-generated via `src/app/robots.ts`
- [x] **sitemap.xml** — Auto-generated via `src/app/sitemap.ts` (using `samitt.co`)

## Deployment

- [x] **GitHub repo** — https://github.com/jsamitt/samitt-com
- [x] **Deployed to Vercel** — samitt-com.vercel.app
- [x] **Domain** — samitt.co (Cloudflare registrar, DNS pointing to Vercel)
- [x] **One address** — `samitt.co` is the primary domain, and `www.samitt.co` redirects to it with a 308. Pages name `https://samitt.co` as canonical (#24)
- [x] **Email forwarding** — jeff@samitt.co → Gmail via Cloudflare Email Routing
