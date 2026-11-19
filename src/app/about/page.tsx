import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// A stub so the nav's About link never 404s; #56 fills it. Kept out of
// search results until then.
export const metadata: Metadata = {
  title: "About — Proof Software",
  robots: { index: false },
  // The root layout's canonical is "/"; don't let this page claim it.
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <Nav />
      {/* Top padding clears the fixed header, as the homepage hero does. */}
      <main className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-[164px] lg:pt-[188px] pb-[88px] min-h-[60vh]">
        <h1 className="max-w-[777px] font-display font-extrabold text-[clamp(40px,5vw,64px)] leading-[1.05] tracking-[-0.03em]">
          About Proof Software
        </h1>
        <p className="mt-6 max-w-[620px] text-lg text-ink-muted">
          We&rsquo;re writing this page now; it&rsquo;s on its way.
        </p>
      </main>
      <Footer />
    </>
  );
}
