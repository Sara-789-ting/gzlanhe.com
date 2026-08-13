import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { applicationPages } from "@/lib/applicationPages";

export const metadata: Metadata = {
  title: "Pool Lighting Applications",
  description:
    "Explore hotel pool lighting, villa pool lighting, water park lighting, fountain lighting and SPA pool lighting solutions from Lanhe Pool Lighting.",
  alternates: {
    canonical: "https://gzlanhe.com/applications"
  }
};

export default function ApplicationsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-20 text-white">
          <div className="section-shell">
            <p className="text-sm font-bold uppercase tracking-wide text-signal">Applications</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
              LED Pool Lighting Applications for B2B Projects
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Practical lighting solution pages for contractors, pool builders,
              distributors and project purchasing teams.
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {applicationPages.map((page) => (
              <Link
                key={page.slug}
                href={`/applications/${page.slug}`}
                className="focus-ring group rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Building2 className="mb-5 text-ocean" aria-hidden="true" />
                <h2 className="text-xl font-bold text-ink">{page.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{page.metaDescription}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-ocean">
                  View Solution
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
