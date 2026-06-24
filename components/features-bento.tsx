"use client";

import { useEffect, useRef } from "react";
import { icons } from "@/lib/landing-content";
import type { LandingContent } from "@/lib/landing-content";

type FeaturesContent = LandingContent["features"];

export function FeaturesBento({ t }: { t: FeaturesContent }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.children) as HTMLElement[];

    // Set initial state: all cards hidden and offset downward
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      card.style.transition = "none"; // No transition until IO fires
    });

    // Intersection Observer watches the GRID container.
    // The moment it enters the viewport, we cascade-reveal each card.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              // Stagger each card by 100ms
              setTimeout(() => {
                card.style.transition = "opacity 0.7s ease, transform 0.7s ease";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 100);
            });
            observer.disconnect(); // Only animate once
          }
        });
      },
      {
        threshold: 0.1, // Fire when 10% of the grid is visible
        rootMargin: "0px 0px -50px 0px", // Slightly before bottom edge
      }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="bg-zinc-950 py-24 sm:py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-5 relative z-10">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-sm font-black uppercase tracking-widest text-emerald-400">
            {t.eyebrow}
          </h2>
          <p className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            {t.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            {t.description}
          </p>
        </div>

        <div ref={gridRef} className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense">
          {t.items.map((feature, index) => {
            const Icon = icons[feature.icon];
            const isLarge = index === 0 || index === 4;

            return (
              <div
                key={feature.title}
                className={`group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/50 p-8 transition-colors duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.07)] ${
                  isLarge ? "sm:col-span-2" : "sm:col-span-1"
                }`}
              >
                {/* Emerald glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <div
                    className={`mb-6 flex items-center justify-center rounded-2xl border border-zinc-800 bg-black text-emerald-400 ${
                      isLarge ? "h-14 w-14" : "h-12 w-12"
                    }`}
                  >
                    <Icon className={isLarge ? "h-6 w-6" : "h-5 w-5"} />
                  </div>
                  <h3
                    className={`font-black text-white ${
                      isLarge ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`mt-4 leading-relaxed text-zinc-400 ${
                      isLarge ? "text-base" : "text-sm"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
