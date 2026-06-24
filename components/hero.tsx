"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { appUrl } from "@/lib/site";
import type { LandingContent } from "@/lib/landing-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type HeroContent = LandingContent["hero"];

export function Hero({ t }: { t: HeroContent }) {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Entrance Stagger Animation
    const elements = textRef.current?.children;
    if (elements) {
      gsap.from(elements, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.1,
      });
    }

    // 2. Scroll-Scrubbed Carousel Animation
    if (carouselRef.current && carouselWrapperRef.current) {
      const carousel = carouselRef.current;
      const wrapper = carouselWrapperRef.current;
      
      // Calculate how far to scroll the carousel horizontally
      const getScrollAmount = () => {
        const carouselWidth = carousel.scrollWidth;
        // Scroll exactly enough so the last item aligns with the right edge
        return -(carouselWidth - window.innerWidth);
      };

      const tween = gsap.to(carousel, {
        x: getScrollAmount,
        ease: "none"
      });

      ScrollTrigger.create({
        trigger: wrapper, // Use the inner wrapper as the trigger, not the whole section!
        start: "top 10%", // Pin when the carousel reaches 10% from the top of the screen
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        animation: tween,
        scrub: 1, // 1 second lag for buttery smooth scrubbing
        invalidateOnRefresh: true,
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ecfdf5_100%)] pt-32 sm:pt-40 pb-32">
      {/* Centered Text Stack (No longer pinned, scrolls naturally) */}
      <div className="mx-auto max-w-5xl px-5 text-center relative z-10 mb-32">
        <div ref={textRef} className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-700 shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            {t.badge}
          </div>
          
          <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl md:text-7xl lg:text-8xl/none">
            {t.title}
          </h1>
          
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {t.description}
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={`${appUrl}/register`} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-sm font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 hover:shadow-emerald-600/30 hover:-translate-y-0.5">
              {t.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#workflow" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-sm px-8 py-4 text-sm font-black text-slate-700 transition hover:border-slate-300 hover:bg-white hover:-translate-y-0.5">
              {t.secondary}
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-sm font-semibold text-slate-500">
            <span>{t.trust}</span>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Wrapper (This is the part that pins) */}
      <div ref={carouselWrapperRef} className="relative w-full">
         <div ref={carouselRef} className="flex gap-8 px-[5vw]">
            {/* Mockup 1 */}
            <div className="w-[85vw] max-w-[1100px] shrink-0 rounded-[2rem] border border-slate-800 bg-slate-950 p-2 shadow-[0_20px_50px_rgba(5,150,105,0.15)] overflow-hidden relative">
                <img src="https://ui.shadcn.com/examples/dashboard-dark.png" alt="SalesPilot Dashboard 1" className="w-full h-auto rounded-2xl object-cover object-top border border-slate-800" />
            </div>
            {/* Mockup 2 */}
            <div className="w-[85vw] max-w-[1100px] shrink-0 rounded-[2rem] border border-slate-800 bg-slate-950 p-2 shadow-[0_20px_50px_rgba(5,150,105,0.15)] overflow-hidden relative">
                <img src="https://ui.shadcn.com/examples/dashboard-dark.png" alt="SalesPilot Dashboard 2" className="w-full h-auto rounded-2xl object-cover object-top border border-slate-800" />
            </div>
             {/* Mockup 3 */}
            <div className="w-[85vw] max-w-[1100px] shrink-0 rounded-[2rem] border border-slate-800 bg-slate-950 p-2 shadow-[0_20px_50px_rgba(5,150,105,0.15)] overflow-hidden relative">
                <img src="https://ui.shadcn.com/examples/dashboard-dark.png" alt="SalesPilot Dashboard 3" className="w-full h-auto rounded-2xl object-cover object-top border border-slate-800" />
            </div>
         </div>
      </div>
    </section>
  );
}
