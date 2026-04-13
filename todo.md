# Samitt.com — Open Items

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
- [ ] **Connect email service** — The API route logs submissions but doesn't send email yet. To enable:
  1. `npm install resend`
  2. Add `RESEND_API_KEY` to Vercel environment variables
  3. Uncomment the Resend block in `src/app/api/contact/route.ts`
- [ ] **Spam protection** — Add honeypot field or reCAPTCHA once the form is live

## Analytics

- [x] **Google Analytics wired up** — Just needs the measurement ID
- [ ] **Set GA measurement ID** — Add `NEXT_PUBLIC_GA_ID` environment variable in Vercel (e.g. `G-XXXXXXXXXX`)

## SEO

- [x] **robots.txt** — Auto-generated via `src/app/robots.ts`
- [x] **sitemap.xml** — Auto-generated via `src/app/sitemap.ts`
- [ ] **Update sitemap URL** — Currently hardcoded to `samitt.com`. Update if using a different domain.

## Deployment

- [x] **GitHub repo** — https://github.com/jsamitt/samitt-com
- [ ] **Deploy to Vercel** — Import the repo at https://vercel.com/new
- [ ] **Domain setup (samitt.com)**:
  1. Purchase `samitt.com` from a registrar (Namecheap, Cloudflare, etc.)
  2. In Vercel dashboard: Project Settings > Domains > Add `samitt.com`
  3. Configure DNS at the registrar:
     - `A` record → `76.76.21.21` (apex domain)
     - `CNAME` record → `cname.vercel-dns.com` (for `www`)
  4. SSL is provisioned automatically by Vercel
  5. Set up `www` → apex redirect in Vercel
- [ ] **Email forwarding** — If you want `jeff@samitt.com`, set up email forwarding or Google Workspace on the domain while configuring DNS
