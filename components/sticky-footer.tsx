"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { FaFacebook, FaWhatsapp, FaMedium, FaLinkedin, FaGithub } from "react-icons/fa6";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const footerData = {
  sections: [
    { 
      title: "Product", 
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
      ] 
    },
    { 
      title: "Resources", 
      links: [
        { label: "Blog", href: "#" },
        { label: "WhatsApp Guide", href: "#" },
        { label: "Help Center", href: "#" },
      ] 
    },
    {
      title: "Contact",
      links: [
        { label: "support@salespilot.lk", href: "mailto:support@salespilot.lk" },
        { label: "+94 77 123 4567", href: "tel:+94771234567" },
        { label: "Colombo, Sri Lanka", href: "#" },
      ]
    },
    { 
      title: "Legal", 
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-and-conditions" },
        { label: "Refund Policy", href: "/refund-policy" },
      ] 
    },
  ],
  social: [
    { href: "#", label: "Facebook", icon: <FaFacebook size={18} /> },
    { href: "#", label: "WhatsApp", icon: <FaWhatsapp size={18} /> },
    { href: "#", label: "Medium", icon: <FaMedium size={18} /> },
    { href: "#", label: "LinkedIn", icon: <FaLinkedin size={18} /> },
    { href: "#", label: "GitHub", icon: <FaGithub size={18} /> },
    
  ],
  title: "SalesPilot.",
  subtitle: "WhatsApp Commerce OS",
  copyright: "© 2026 SalesPilot. All rights reserved.",
};

export function StickyFooter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax entrance animations synced with the scroll reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      }
    });

    tl.fromTo(".footer-nav", { y: 30, opacity: 0.5 }, { y: 0, opacity: 1, stagger: 0.1 })
      .fromTo(".footer-title", { y: 50, scale: 0.95, opacity: 0.5 }, { y: 0, scale: 1, opacity: 1 }, "<0.2");
  }, { scope: containerRef });

  return (
    <div 
      className="relative h-[80vh]" 
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} 
      ref={containerRef}
    >
      <div className="relative h-[calc(100vh+80vh)] -top-[100vh]">
        <div className="h-[80vh] sticky top-[calc(100vh-80vh)]">
          <div className="bg-slate-950 text-slate-200 py-16 px-8 md:px-16 h-full w-full flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {footerData.sections.map((section) => (
                <div key={section.title} className="footer-nav flex flex-col gap-5">
                  <h3 className="uppercase text-slate-500 text-xs font-black tracking-widest font-heading border-b border-slate-800 pb-2">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {section.links.map((link) => (
                      <Link 
                        key={link.label} 
                        href={link.href} 
                        className="text-slate-400 hover:text-white transition-colors duration-300 text-sm font-sans w-fit relative group"
                      >
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-12">
              <div className="flex-1 footer-title overflow-hidden">
                <h1 className="text-[18vw] md:text-[14vw] leading-none font-heading font-black text-white tracking-tighter cursor-default">
                  {footerData.title}
                </h1>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full" />
                  <p className="text-slate-400 font-sans text-sm font-semibold">{footerData.subtitle}</p>
                </div>
              </div>
              
              <div className="text-left md:text-right footer-title flex flex-col items-start md:items-end gap-5">
                <p className="text-slate-500 text-sm font-sans font-medium">{footerData.copyright}</p>
                <div className="flex gap-3">
                  {footerData.social.map((s) => (
                    <a 
                      key={s.label} 
                      href={s.href} 
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-emerald-500 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)]"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
