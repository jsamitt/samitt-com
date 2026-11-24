import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { Thinking } from "@/components/Thinking";
import { socialLinks } from "@/lib/data";

const title = "About — Proof Software";
const description =
  "Proof Software is a product-first software studio in Richmond, Virginia. We help founders and teams decide what’s worth building, prove it with real users, and ship it.";

export const metadata: Metadata = {
  title,
  description,
  // The root layout's canonical is "/"; this page is its own address.
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website" },
};

// The one page that names Jeff in body copy (#56).
export default function About() {
  return (
    <>
      <Nav />
      <main>
        {/* Top padding clears the fixed header, as the homepage hero does. */}
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-[164px] lg:pt-[188px]">
          <h1 className="max-w-[777px] [overflow-wrap:anywhere] font-display font-extrabold text-[clamp(40px,5vw,64px)] leading-[1.05] tracking-[-0.03em]">
            About Proof Software
          </h1>
          <p className="mt-8 max-w-[720px] [overflow-wrap:anywhere] text-xl leading-relaxed">
            Proof Software is a product-first software studio in Richmond,
            Virginia. We help founders and teams decide what’s worth building,
            prove it with real users, and ship it. AI makes us fast; product
            judgment keeps that speed pointed at the right problem.
          </p>

          <FadeIn className="mt-20">
            <section className="border-t-2 border-ink pt-8">
              <SectionHeading title="How we’re built" className="mb-5" />
              <p className="max-w-[720px] [overflow-wrap:anywhere] text-lg leading-relaxed text-ink-muted">
                We’re small on purpose. Every engagement is led by our founder,
                and we bring in design and technology partners we’ve worked with
                before: product designers, engineers, and specialists where a
                project needs them. Each client gets expertise sized to the
                work, without paying to carry a big firm’s overhead.
              </p>
            </section>
          </FadeIn>

          <FadeIn className="mt-20">
            <section className="flex flex-wrap items-start gap-10 rounded-card bg-surface p-6 sm:p-10">
              <Image
                src="/jeff-samitt.jpg"
                alt="Jeff Samitt, founder"
                width={800}
                height={800}
                sizes="(min-width: 640px) 200px, 160px"
                className="h-40 w-40 sm:h-[200px] sm:w-[200px] shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0 flex-[1_1_360px]">
                <SectionHeading title="Jeff Samitt, founder" className="mb-5" />
                <p className="max-w-[720px] [overflow-wrap:anywhere] text-lg leading-relaxed">
                  Jeff Samitt founded Proof after more than 20 years leading
                  product at companies where software had to work at scale. At
                  Capital One, he built platforms and user experiences,
                  including a new ecommerce checkout product that grew from zero
                  to $150M in monthly spend, and shipped decisioning products
                  that saved more than $30M a year in fraud losses and operating
                  costs. At CarMax, he helped transform a retailer from walk-in
                  to omni-channel. At Koalafi, he launched the company’s first
                  premium lending product. Most recently, as President and COO
                  of Tigeraire, he built its ecommerce operation and its
                  AI-powered email ops. Today he leads every Proof engagement
                  personally.
                </p>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex max-w-full items-center min-h-11 font-semibold underline underline-offset-[6px] decoration-2 decoration-accent [overflow-wrap:anywhere]"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </section>
          </FadeIn>
        </div>

        <Thinking />
      </main>
      <Footer />
    </>
  );
}
