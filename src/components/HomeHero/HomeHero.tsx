import React from "react";

export const HomeHero: React.FC = () => {
  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6"
      aria-label="Hero"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes hero-fade-up {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes hero-pulse {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 0.8; }
            }
            @media (prefers-reduced-motion: reduce) {
              .hero-animate {
                animation: none !important;
                opacity: 1 !important;
              }
              .scroll-indicator {
                animation: none !important;
                opacity: 0.4 !important;
              }
            }
          `,
        }}
      />

      <div className="flex flex-col items-center text-center">
        {/* Name */}
        <h1
          className="hero-animate text-5xl font-bold tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-8xl"
          style={{
            opacity: 0,
            animation: "hero-fade-up 0.8s ease-out forwards",
            animationDelay: "0s",
            textWrap: "balance",
          }}
        >
          Lucas Figueiredo
        </h1>

        {/* Title */}
        <p
          className="hero-animate mt-4 text-xl font-medium text-text-secondary md:text-2xl"
          style={{
            opacity: 0,
            animation: "hero-fade-up 0.8s ease-out forwards",
            animationDelay: "0.15s",
          }}
        >
          Senior Mobile Engineer
        </p>

        {/* Tagline */}
        <p
          className="hero-animate mt-6 max-w-2xl text-lg font-normal text-text-tertiary"
          style={{
            opacity: 0,
            animation: "hero-fade-up 0.8s ease-out forwards",
            animationDelay: "0.3s",
            textWrap: "balance",
          }}
        >
          8+ years shipping production React Native apps — from architecture
          and native modules to performance optimization and team mentoring.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: 0,
          animation: "hero-fade-up 0.8s ease-out 0.6s forwards",
        }}
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-tertiary"
          style={{ animation: "hero-pulse 2.5s ease-in-out infinite" }}
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};
