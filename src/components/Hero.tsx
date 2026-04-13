import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated dot grid background */}
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-transparent to-navy-900 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            AI-Native Product Executive
            <br />
            <span className="text-teal">&amp; Builder/Operator</span>
          </h1>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-lg md:text-xl text-offwhite/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            I embed, lead, and ship. Builder/operator for growth-stage
            companies.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-teal text-offwhite font-semibold rounded-lg hover:bg-teal-light transition-colors"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-offwhite/20 text-offwhite font-semibold rounded-lg hover:border-mint hover:text-mint transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
