"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { landingContent, type Locale } from "@/lib/landing-content";
import { categoryLabels, resources, type ResourceCategory } from "@/lib/resources";

type Filter = ResourceCategory | "all";

export default function ResourcesIndex() {
  const [locale, setLocale] = useState<Locale>("en");
  const [filter, setFilter] = useState<Filter>("all");
  const labels = landingContent[locale].nav;
  const filtered = useMemo(
    () => resources.filter((resource) => filter === "all" || resource.category === filter),
    [filter]
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar locale={locale} labels={labels} onLocaleChange={setLocale} />
      <section className="border-b border-slate-200 bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-600">Resources</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            {locale === "en" ? "Guides for setup, payments, and growth." : "Setup, payments, growth සඳහා guides."}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {locale === "en"
              ? "Use these practical articles to connect Meta WhatsApp, explain payment activation, and think about WhatsApp as a measurable commerce channel."
              : "Meta WhatsApp connect කරන්න, payment activation explain කරන්න, WhatsApp measurable commerce channel එකක් විදියට බලන්න මේ guides use කරන්න."}
          </p>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap gap-2">
            {(["all", "setup", "payments", "growth"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full border px-4 py-2 text-sm font-black transition ${
                  filter === item
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950"
                }`}
              >
                {categoryLabels[item][locale]}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {filtered.map((resource) => (
              <Link key={resource.slug} href={`/resources/${resource.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-600">{categoryLabels[resource.category][locale]}</p>
                  <p className="text-xs font-bold text-slate-400">{resource.readingTime}</p>
                </div>
                <h2 className="mt-5 text-xl font-black text-slate-950">{resource.title[locale]}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{resource.description[locale]}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-slate-950">
                  {locale === "en" ? "Read resource" : "Guide එක බලන්න"}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
