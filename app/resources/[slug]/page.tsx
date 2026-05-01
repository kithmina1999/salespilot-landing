import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import MdxContent from "@/components/mdx-content";
import Navbar from "@/components/Navbar";
import { landingContent, type Locale } from "@/lib/landing-content";
import { getResourceBody } from "@/lib/resource-files";
import { categoryLabels, getResource, resources } from "@/lib/resources";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

function normalizeLocale(lang?: string): Locale {
  return lang === "si" ? "si" : "en";
}

export async function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await searchParams;
  const locale = normalizeLocale(lang);
  const resource = getResource(slug);
  if (!resource) return {};

  return {
    title: resource.seoTitle[locale],
    description: resource.seoDescription[locale],
  };
}

export default async function ResourceArticlePage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const locale = normalizeLocale(lang);
  const resource = getResource(slug);
  if (!resource) notFound();

  const body = await getResourceBody(resource.slug, locale);
  const labels = landingContent[locale].nav;

  return (
    <main className="min-h-screen bg-white">
      <Navbar locale={locale} labels={labels} />
      <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <Link href="/resources" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" />
          {locale === "en" ? "Back to resources" : "Resources වෙත ආපසු"}
        </Link>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-widest text-emerald-700">
            {categoryLabels[resource.category][locale]}
          </span>
          <span className="text-xs font-bold text-slate-400">Updated {resource.updatedAt}</span>
          <span className="text-xs font-bold text-slate-400">{resource.readingTime}</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{resource.title[locale]}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{resource.description[locale]}</p>
        <div className="mt-8 flex w-fit rounded-full border border-slate-200 bg-slate-50 p-1 text-sm font-black">
          <Link
            href={`/resources/${resource.slug}?lang=en`}
            className={`rounded-full px-4 py-2 ${locale === "en" ? "bg-slate-950 text-white" : "text-slate-500"}`}
          >
            EN
          </Link>
          <Link
            href={`/resources/${resource.slug}?lang=si`}
            className={`rounded-full px-4 py-2 ${locale === "si" ? "bg-slate-950 text-white" : "text-slate-500"}`}
          >
            SI
          </Link>
        </div>
        <div className="mt-12">
          <MdxContent source={body} />
        </div>
      </article>
    </main>
  );
}
