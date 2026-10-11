"use client";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { FadeIn } from "./FadeIn";

const fieldClass =
  "w-full rounded-field border border-field bg-surface px-4 text-ink placeholder:text-ink-muted disabled:text-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
const labelClass = "text-[15px] font-semibold";
const darkLinkClass =
  "text-on-dark hover:text-on-dark-muted transition-colors focus-visible:outline-on-dark";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  // The disabled fieldset only applies after a re-render; this blocks a second
  // submit fired in the same tick (scripts, autofill).
  const inFlight = useRef(false);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const sentRef = useRef<HTMLDivElement>(null);

  // Disabling the fieldset drops focus to <body>; move it to the outcome so
  // keyboard and screen-reader visitors land on the result.
  useEffect(() => {
    if (error) errorRef.current?.focus();
  }, [error]);
  useEffect(() => {
    if (submitted) sentRef.current?.focus();
  }, [submitted]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  }

  return (
    <section id="contact" className="bg-ink text-on-dark">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[104px] flex flex-wrap gap-14">
        <FadeIn className="flex-[1_1_380px] min-w-0">
          <SectionHeading
            number="07"
            title="Let’s talk."
            tone="dark"
            size="lg"
            className="mb-5"
          />
          <p className="mb-9 max-w-[440px] text-lg leading-relaxed text-on-dark-muted">
            Open to fractional and interim leadership, project-based work, and
            the right long-term role. Remote-first, willing to travel up to 50%.
            Based in Richmond, VA.
          </p>

          <div className="flex flex-col gap-3.5">
            <a
              href="mailto:jeff@samitt.co"
              className={`inline-flex items-center gap-3.5 min-h-11 self-start font-medium ${darkLinkClass}`}
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-ink-muted">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              jeff@samitt.co
            </a>
            <a
              href="https://linkedin.com/in/jeffsamitt"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3.5 min-h-11 self-start font-medium ${darkLinkClass}`}
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-ink-muted">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
                </svg>
              </span>
              linkedin.com/in/jeffsamitt
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={100} className="flex-[1_1_440px] min-w-0">
          <div className="p-6 sm:p-9 rounded-[28px] bg-page text-ink">
            {submitted ? (
              <div
                ref={sentRef}
                role="status"
                tabIndex={-1}
                className="focus:outline-none flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </span>
                <h3 className="font-display font-extrabold text-[32px] leading-[1.1]">
                  Thanks for reaching out
                </h3>
                <p className="text-ink-muted">I’ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <fieldset disabled={sending} className="min-w-0 flex flex-col gap-[18px]">
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[18px]">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className={labelClass}>Name</label>
                      <input type="text" id="name" name="name" required placeholder="Your name" className={`${fieldClass} min-h-12`} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className={labelClass}>Email</label>
                      <input type="email" id="email" name="email" required placeholder="you@company.com" className={`${fieldClass} min-h-12`} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className={labelClass}>
                      Company <span className="font-normal text-ink-muted">(optional)</span>
                    </label>
                    <input type="text" id="company" name="company" placeholder="Your company" className={`${fieldClass} min-h-12`} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className={labelClass}>Message</label>
                    <textarea id="message" name="message" required rows={5} placeholder="How can I help?" className={`${fieldClass} py-3.5 resize-y`} />
                  </div>

                  {error && (
                    <p ref={errorRef} role="alert" tabIndex={-1} className="focus:outline-none flex items-start gap-2.5 font-semibold text-negative">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" className="flex-[0_0_20px] mt-0.5">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7.5v5.5M12 16.5v.01" />
                      </svg>
                      <span>
                        Something went wrong. Please email me directly at{" "}
                        <a href="mailto:jeff@samitt.co" className="text-negative underline">
                          jeff@samitt.co
                        </a>
                        .
                      </span>
                    </p>
                  )}

                  <button
                    type="submit"
                    aria-busy={sending}
                    className="self-start inline-flex items-center gap-2.5 min-h-[52px] px-8 rounded-full bg-accent text-ink font-bold cursor-pointer disabled:opacity-75 disabled:cursor-progress"
                  >
                    {sending && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden="true" className="animate-spin">
                        <path d="M21 12a9 9 0 1 1-9-9" />
                      </svg>
                    )}
                    {sending ? "Sending…" : "Send message"}
                  </button>
                </fieldset>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
