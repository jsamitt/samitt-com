# Samitt.com — Open Items

## Placeholders

- [ ] **Article links** — Both articles in the Thinking section link to `#` instead of real URLs. Replace with actual LinkedIn post / PDF links once published.
  - "Most Product Teams Are Still Staffed Like It's 2020" (`src/lib/data.ts`, line 181)
  - "Product Mindset in the AI Era" (`src/lib/data.ts`, line 187)
- [ ] **GitHub repos** — The four repo cards are static placeholder data. Options: replace with real repo names/descriptions, or fetch live from the GitHub API (`src/lib/data.ts`, `githubRepos` array)
- [ ] **Open Graph image** — No `og-image.png` in `/public` yet. Create a branded OG image for link previews (recommended: 1200x630px)
- [ ] **Favicon** — Currently using the default Next.js favicon. Replace `/public/favicon.ico` with a custom one

## Contact Form

- [ ] **Form backend** — The contact form currently shows a client-side "Thanks for reaching out" message but doesn't actually send data anywhere. Options:
  - Add a Next.js API route (`src/app/api/contact/route.ts`) that forwards to an email service (Resend, SendGrid, etc.)
  - Use a third-party form service (Formspree, Netlify Forms, Basin)
  - Connect to a CRM (HubSpot form endpoint)
- [ ] **Form validation** — Add email field if desired; add client-side validation beyond `required`
- [ ] **Spam protection** — Add honeypot field or reCAPTCHA once the form is live

## Domain Setup (samitt.com)

- [ ] **Register domain** — Purchase `samitt.com` from a registrar (Namecheap, Google Domains, Cloudflare Registrar, etc.)
- [ ] **Connect to Vercel** — In the Vercel dashboard, go to Project Settings > Domains and add `samitt.com`
- [ ] **Configure DNS** — Point the domain's DNS to Vercel:
  - `A` record: `76.76.21.21` (for apex domain `samitt.com`)
  - `CNAME` record: `cname.vercel-dns.com` (for `www.samitt.com`)
- [ ] **SSL** — Vercel provisions a free SSL certificate automatically once DNS propagates
- [ ] **Redirect** — Set up `www.samitt.com` → `samitt.com` redirect in Vercel (or vice versa)
