"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { appUrl } from "@/lib/site";
import type { Locale } from "@/lib/landing-content";

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
  login: "Login",
  cta: "Start free trial",
};

const navLinks = [
  ["/#features", "features"],
  ["/#workflow", "workflow"],
  ["/#pricing", "pricing"],
  ["/resources", "resources"],
  ["/#faq", "faq"],
] as const;

function LanguageToggle({
  locale,
  onLocaleChange,
}: {
  locale: Locale;
  onLocaleChange?: (locale: Locale) => void;
}) {
  if (!onLocaleChange) return null;

  return (
    <div className="flex rounded-full border border-slate-200 bg-white p-1 text-xs font-bold text-slate-500 shadow-sm">
      {(["en", "si"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onLocaleChange(item)}
          className={`rounded-full px-3 py-1.5 transition ${
            locale === item ? "bg-slate-950 text-white" : "hover:text-slate-900"
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Navbar({ locale = "en", labels = fallbackLabels, onLocaleChange }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2" aria-label="SalesPilot home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white">
            SP
          </span>
          <span className="text-lg font-black tracking-tight text-slate-950">SalesPilot</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map(([href, key]) => (
            <Link key={key} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-slate-950">
              {labels[key]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle locale={locale} onLocaleChange={onLocaleChange} />
          <Link href={`${appUrl}/login`} className="text-sm font-bold text-slate-600 transition hover:text-slate-950">
            {labels.login}
          </Link>
          <Link
            href={`${appUrl}/register`}
            className="rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
          >
            {labels.cta}
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open navigation" className="rounded-lg border border-slate-200 p-2 text-slate-700">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-black">SalesPilot</SheetTitle>
              </SheetHeader>
              <div className="flex flex-1 flex-col gap-2 px-4">
                {navLinks.map(([href, key]) => (
                  <SheetClose asChild key={key}>
                    <Link href={href} className="rounded-lg px-3 py-3 text-lg font-semibold text-slate-700 hover:bg-slate-100">
                      {labels[key]}
                    </Link>
                  </SheetClose>
                ))}
                <div className="mt-4">
                  <LanguageToggle locale={locale} onLocaleChange={onLocaleChange} />
                </div>
                <div className="mt-6 grid gap-3">
                  <SheetClose asChild>
                    <Link href={`${appUrl}/login`} className="rounded-lg border border-slate-200 px-4 py-3 text-center font-bold">
                      {labels.login}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href={`${appUrl}/register`} className="rounded-lg bg-slate-950 px-4 py-3 text-center font-bold text-white">
                      {labels.cta}
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
