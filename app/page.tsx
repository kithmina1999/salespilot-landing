"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  MessageSquareText,
  PackageCheck,
  ReceiptText,
  Send,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { icons, landingContent, type Locale } from "@/lib/landing-content";
import { resources } from "@/lib/resources";
import { appUrl } from "@/lib/site";
import { StickyFooter } from "@/components/sticky-footer";

function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>
    </div>
  );
}

function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-4 top-8 hidden h-28 w-28 rounded-full border border-emerald-200 bg-emerald-50 md:block" />
      <div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/80">
        <div className="rounded-[1.45rem] border border-slate-200 bg-slate-950 p-4">
          <div className="grid gap-3 md:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-2xl bg-white p-3">
              <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-3">
                <span className="h-8 w-8 rounded-full bg-emerald-500" />
                <div>
                  <p className="text-xs font-black text-slate-950">WhatsApp Shop</p>
                  <p className="text-[10px] font-semibold text-emerald-600">online now</p>
                </div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-slate-100 p-2 text-slate-700">
                  Price kohomada? Delivery Colombo?
                </div>
                <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-emerald-500 p-2 font-semibold text-white">
                  It is Rs. 2,450. Colombo delivery is 1-2 days. Want to order?
                </div>
                <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-slate-100 p-2 text-slate-700">
                  Hari. Bank transfer karannam.
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-white">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-300">Order board</p>
                  <span className="rounded-full bg-amber-400/15 px-2 py-1 text-[10px] font-bold text-amber-200">
                    payment review
                  </span>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {["New", "Shipped", "Delivered"].map((label, index) => (
                    <div key={label} className="rounded-xl bg-white/10 p-3">
                      <p className="text-[10px] font-bold text-slate-400">{label}</p>
                      <p className="mt-1 text-xl font-black">{index === 0 ? 8 : index === 1 ? 12 : 31}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Revenue</p>
                  <p className="mt-2 text-2xl font-black text-slate-950">Rs. 418K</p>
                  <p className="mt-1 text-xs font-semibold text-emerald-600">+18% this month</p>
                </div>
                <div className="rounded-2xl bg-blue-500 p-4 text-white">
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-100">AI handled</p>
                  <p className="mt-2 text-2xl font-black">76%</p>
                  <p className="mt-1 text-xs font-semibold text-blue-100">owner can scan gaps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  const cards = [
    { icon: MessageSquareText, label: "Customer chat", text: "Do you have size M?" },
    { icon: PackageCheck, label: "Product match", text: "Stock checked automatically" },
    { icon: ReceiptText, label: "Payment proof", text: "Screenshot awaiting review" },
    { icon: CircleDollarSign, label: "Owner view", text: "Revenue and orders updated" },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={card.label} className="group relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            {index < cards.length - 1 && (
              <ArrowRight className="absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-300 md:block" />
            )}
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-black text-slate-950">{card.label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [openFaq, setOpenFaq] = useState(0);
  const t = landingContent[locale];
  const featuredResources = useMemo(() => resources.slice(0, 3), []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar locale={locale} labels={t.nav} onLocaleChange={setLocale} />

      <section className="overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_70%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              {t.hero.badge}
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl">{t.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`${appUrl}/register`} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-black text-white transition hover:bg-slate-800">
                {t.hero.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#workflow" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-black text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                {t.hero.secondary}
              </Link>
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-500">{t.hero.trust}</p>
            <div className="mt-9 grid max-w-lg grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
              {t.hero.stats.map(([value, label]) => (
                <div key={label} className="p-4">
                  <p className="text-2xl font-black text-slate-950">{value}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <ProductMockup />
        </div>
      </section>

      <section id="features" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader {...t.features} />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((feature) => {
              const Icon = icons[feature.icon];
              return (
                <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="workflow" className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader {...t.workflow} />
          <div className="mt-12">
            <WorkflowVisual />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {t.workflow.steps.map((step, index) => {
              const Icon = icons[step.icon];
              return (
                <div key={step.title} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-black text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-black text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader {...t.pricing} />
          <div className="mx-auto mt-8 flex w-fit rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-black">
            {(["monthly", "annual"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setBilling(item)}
                className={`rounded-full px-5 py-2 transition ${billing === item ? "bg-slate-950 text-white" : "text-slate-500 hover:text-slate-950"}`}
              >
                {item === "monthly" ? t.pricing.monthly : t.pricing.annual}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {t.pricing.plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 shadow-sm ${
                  plan.highlighted ? "border-slate-950 bg-slate-950 text-white shadow-2xl shadow-slate-300" : "border-slate-200 bg-white text-slate-950"
                }`}
              >
                <h3 className="text-xl font-black">{plan.name}</h3>
                <p className={`mt-2 text-sm leading-6 ${plan.highlighted ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-black">{billing === "monthly" ? plan.priceMonthly : plan.priceAnnual}</span>
                  <span className={`pb-1 text-sm font-bold ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>
                    {billing === "monthly" ? plan.periodMonthly : plan.periodAnnual}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 ${plan.highlighted ? "text-emerald-300" : "text-emerald-600"}`} />
                      <span className={plan.highlighted ? "text-slate-200" : "text-slate-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${appUrl}/register`}
                  className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-black ${
                    plan.highlighted ? "bg-white text-slate-950 hover:bg-slate-100" : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="border-y border-slate-200 bg-slate-50 px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader {...t.resources} center={false} />
            <Link href="/resources" className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">
              {t.resources.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredResources.map((resource) => (
              <Link key={resource.slug} href={`/resources/${resource.slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-600">{resource.category}</p>
                <h3 className="mt-4 text-xl font-black text-slate-950">{resource.title[locale]}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{resource.description[locale]}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-slate-950">
                  Read guide <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} description="" />
          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {t.faq.items.map((item, index) => (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="w-full px-6 py-5 text-left"
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-black text-slate-950">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-400 transition ${openFaq === index ? "rotate-180" : ""}`} />
                </span>
                {openFaq === index && <span className="mt-3 block text-sm leading-7 text-slate-600">{item.answer}</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-8 text-center text-white md:p-14">
          <Send className="mx-auto h-10 w-10 text-emerald-300" />
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">{t.finalCta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">{t.finalCta.description}</p>
          <Link href={`${appUrl}/register`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-slate-950">
            {t.finalCta.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <StickyFooter />
    </main>
  );
}
