import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://samitt.co"),
  title: "Proof Software — product-first software studio",
  description:
    "Proof Software is a product-first software studio. We start from the user, understand the problems worth solving, prove the approach, then build and ship.",
  // Tells search engines the bare domain is the one address, so www and any
  // preview URLs don't split the site's standing. Resolves against metadataBase.
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Proof Software — product-first software studio",
    description:
      "We build software that solves real-world problems. Start from the user. Prove it. Then ship.",
    type: "website",
  },
  // X shows a small thumbnail unless told to use the full preview card.
  // Next fills the twitter: title, description and image from the above.
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable} scroll-smooth antialiased`}>
      <body>
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
