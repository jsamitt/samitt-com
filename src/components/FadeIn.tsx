"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible, hasMounted } = useIntersectionObserver();

  // Before hydration, render visible (SSR-safe). After mount, animate.
  const shouldHide = hasMounted && !isVisible;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shouldHide ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
      } ${className}`}
      style={shouldHide ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
