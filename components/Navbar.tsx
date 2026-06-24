"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { appUrl } from "@/lib/site";
import type { Locale } from "@/lib/landing-content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface NavbarProps {
  locale?: Locale;
  labels?: {
    features: string;
    workflow: string;
    pricing: string;
    resources: string;
    faq: string;
    login: string;
    cta: string;
  };
  onLocaleChange?: (locale: Locale) => void;
}

const fallbackLabels = {
  features: "Features",
  workflow: "Workflow",
  pricing: "Pricing",
  resources: "Resources",
  faq: "FAQ",
  login: "Log in",
  cta: "Start free trial",
};

const navLinks = [
  ["/#features", "features"],
  ["/#workflow", "workflow"],
  ["/#pricing", "pricing"],
  ["/resources", "resources"],
  ["/#faq", "faq"],
] as const;

export default function Navbar({ labels = fallbackLabels }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  // Scroll Detection for Pill Morphing
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Mobile Menu Animation (Top-Down Slide)
  useGSAP(() => {
    if (!menuRef.current) return;
    
    if (mobileMenuOpen) {
      // Open Menu
      gsap.to(menuRef.current, {
        yPercent: 100,
        duration: 0.7,
        ease: "power4.out",
      });
      // Stagger links in
      gsap.fromTo(
        ".mobile-link",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.7)", delay: 0.2 }
      );
    } else {
      // Close Menu
      gsap.to(menuRef.current, {
        yPercent: 0,
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Desktop & Mobile Header wrapper */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled ? "pt-4 px-4" : "pt-0 px-0"
        }`}
      >
        <nav 
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            isScrolled 
              ? "h-14 max-w-4xl rounded-full border border-slate-200/50 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6" 
              : "h-20 max-w-7xl px-5 lg:px-8 bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group relative z-50" 
            aria-label="SalesPilot home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className={`flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950 text-xs font-black text-white transition-transform group-hover:scale-105`}>
              SP
            </span>
            <span className={`font-black tracking-tight transition-colors ${
              mobileMenuOpen ? "text-white" : "text-slate-950"
            } ${isScrolled ? "text-base" : "text-lg"}`}>
              SalesPilot
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(([href, key]) => (
              <Link 
                key={key} 
                href={href} 
                className="text-[13px] font-bold text-slate-600 transition-colors hover:text-emerald-600 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full"
              >
                {labels[key]}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href={`${appUrl}/login`} 
              className="text-[13px] font-bold text-slate-600 transition-colors hover:text-slate-950"
            >
              {labels.login}
            </Link>
            <Link
              href={`${appUrl}/register`}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-5 py-2 font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <span className="relative z-10 text-[13px] tracking-wide">{labels.cta}</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>

          {/* Mobile Menu Toggle (Hamburger to X) */}
          <button 
            className="lg:hidden relative z-50 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? "bg-white rotate-45 translate-y-[9px]" : "bg-slate-950"}`} />
              <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? "bg-white opacity-0" : "bg-slate-950"}`} />
              <span className={`block w-full h-0.5 rounded-full transition-all duration-300 ${mobileMenuOpen ? "bg-white -rotate-45 -translate-y-[9px]" : "bg-slate-950"}`} />
            </div>
          </button>
        </nav>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        ref={menuRef}
        className="fixed top-[-100vh] left-0 w-full h-[100vh] bg-slate-950 z-30 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Subtle glowing orb in the background of the black menu */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-slate-950 to-slate-950 pointer-events-none" />
        
        <div ref={linksRef} className="flex flex-col items-center gap-8 z-10 relative w-full px-5">
          {navLinks.map(([href, key]) => (
            <Link 
              key={key} 
              href={href} 
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-link text-3xl font-black tracking-tight text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {labels[key]}
            </Link>
          ))}
          
          <div className="w-12 h-px bg-slate-800 my-4 mobile-link" />
          
          <Link 
            href={`${appUrl}/login`}
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link text-lg font-bold text-slate-400 hover:text-white transition-colors"
          >
            {labels.login}
          </Link>
          <Link
            href={`${appUrl}/register`}
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-link mt-4 flex w-full max-w-[280px] items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-base font-black text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-transform hover:scale-105"
          >
            {labels.cta}
          </Link>
        </div>
      </div>
    </>
  );
}
