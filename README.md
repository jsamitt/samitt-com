This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to self-host [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (headings) and [Figtree](https://fonts.google.com/specimen/Figtree) (body text). The link-preview image can't use web fonts, so static copies of both live in `assets/fonts/` (see its README).

## Contact form protection

`/api/contact` sends through Resend, so every accepted submission costs quota and lands in Gmail. Three layers keep bots out without asking visitors to do anything:

- **Honeypot.** A `contact_ref` field in `src/components/Contact.tsx` is labelled "Leave this field empty". Its wrapper is `inert` and clipped to 1px, so people can't see, focus, click or hear it, and its name and label match no autofill or password-manager field. A submission with it filled gets a normal success response, and nothing is sent. Don't rename it to anything a filler might recognise (fax, phone, website…): a real visitor's autofill would then trigger the fake success, and their message would be silently lost.
- **Input checks.** The route rejects anything that isn't text within these limits, after trimming, with a 400: name 1–100 characters, company up to 100, email up to 254 and email-shaped, message 1–5,000. The form fields carry the same `maxLength`, so a real visitor can't hit this. Line breaks and other control characters in name and company become spaces before they reach the subject line, and a name made only of invisible characters (zero-width spaces and the like) counts as empty. Joiners and direction marks are kept, because Persian, Indic, Hebrew and emoji names need them. The email must be a single plain address, so Reply-To can't become a list.
- **Rate limit.** This lives in the Vercel dashboard, not the code, and until it's published nothing limits how many valid submissions a script can post. Firewall → Configure → New rule, named e.g. "Contact form rate limit":
  - **If:** Request path equals `/api/contact` *and* Method equals `POST`
  - **Then:** Rate limit, Fixed window, 60 seconds, 5 requests, key: IP. Action when exceeded: **Default (429)**.
  - **Then click Review Changes → Publish.** Firewall changes do nothing until published. To check the rule matches before it blocks anything, publish it with the Log action first, then switch to Default (429).

  Hobby allows one rate-limit rule per project. Counters are kept per region, so a bot spread across regions can slightly exceed 5 a minute, which is fine for this threat. A blocked visitor sees the form's usual error, which includes Jeff's email address.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
