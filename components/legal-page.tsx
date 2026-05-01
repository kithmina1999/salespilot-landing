import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { legalPages, type LegalSlug } from "@/lib/legal-content";

export default function LegalPage({ slug }: { slug: LegalSlug }) {
  const page = legalPages[slug];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-slate-600 hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-600">Legal</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{page.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{page.description}</p>
        <p className="mt-4 text-sm font-bold text-slate-400">Last updated: {page.updatedAt}</p>
        <div className="prose-prose mt-12">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
