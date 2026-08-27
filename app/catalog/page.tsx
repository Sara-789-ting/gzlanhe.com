import type { Metadata } from "next";
import { Download, FileText, Mail } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { siteConfig } from "@/lib/site";

const catalogParts = [
  {
    title: "Catalog Part 1",
    pages: "Pages 1-10",
    href: "/catalogs/lanhe-pool-light-catalog-part-1.pdf",
    note: "Company profile and main pool light overview"
  },
  {
    title: "Catalog Part 2",
    pages: "Pages 11-20",
    href: "/catalogs/lanhe-pool-light-catalog-part-2.pdf",
    note: "Ultra-thin and wall mounted LED pool lights"
  },
  {
    title: "Catalog Part 3",
    pages: "Pages 21-30",
    href: "/catalogs/lanhe-pool-light-catalog-part-3.pdf",
    note: "Embedded, PAR56 and replacement pool light products"
  },
  {
    title: "Catalog Part 4",
    pages: "Pages 31-40",
    href: "/catalogs/lanhe-pool-light-catalog-part-4.pdf",
    note: "Fountain lights, underwater lights and water feature products"
  },
  {
    title: "Catalog Part 5",
    pages: "Pages 41-50",
    href: "/catalogs/lanhe-pool-light-catalog-part-5.pdf",
    note: "Water descent, waterfall and water curtain products"
  },
  {
    title: "Catalog Part 6",
    pages: "Pages 51-55",
    href: "/catalogs/lanhe-pool-light-catalog-part-6.pdf",
    note: "Accessories and installation-related products"
  }
];

export const metadata: Metadata = {
  title: "LED Pool Light Catalog | Lanhe Pool Lighting",
  description:
    "Download Lanhe Pool Lighting product catalog for IP68 LED swimming pool lights, underwater lights, RGB pool lights, fountain lights and water feature lighting.",
  alternates: {
    canonical: `${siteConfig.url}/catalog`
  },
  keywords: [
    "LED pool light catalog",
    "IP68 pool light catalog",
    "underwater LED light catalog",
    "fountain light catalog",
    "pool light manufacturer catalog"
  ]
};

export default function CatalogPage() {
  return (
    <>
      <OrganizationJsonLd pageUrl={`${siteConfig.url}/catalog`} />
      <Header />
      <main>
        <section className="bg-ink py-20 text-white">
          <div className="section-shell">
            <p className="text-sm font-bold uppercase tracking-wide text-signal">
              Product Catalog
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
              Download Lanhe LED Pool Light Catalog
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Review our product range for IP68 waterproof LED swimming pool lights,
              underwater lights, RGB/RGBW pool lights, fountain lights, water descent
              products and installation accessories.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/catalogs/lanhe-pool-light-catalog-part-1.pdf"
                className="focus-ring inline-flex items-center gap-2 rounded bg-signal px-6 py-3 font-bold text-ink hover:bg-amber-300"
                download
              >
                <Download size={18} aria-hidden="true" />
                Download Catalog
              </a>
              <a
                href="/contact?source=Catalog&page=%2Fcatalog#inquiry"
                className="focus-ring inline-flex items-center gap-2 rounded border border-white/60 px-6 py-3 font-bold text-white hover:bg-white/10"
              >
                <Mail size={18} aria-hidden="true" />
                Ask for Quotation
              </a>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                Catalog Downloads
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Full catalog split into faster PDF downloads
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                The original catalog is divided into smaller PDF files for faster
                loading and easier sharing with overseas B2B buyers.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {catalogParts.map((part) => (
                <a
                  key={part.href}
                  href={part.href}
                  className="focus-ring rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  download
                >
                  <FileText className="mb-4 text-ocean" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-ink">{part.title}</h3>
                  <p className="mt-2 text-sm font-bold text-ocean">{part.pages}</p>
                  <p className="mt-3 leading-7 text-slate-600">{part.note}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-bold text-ocean">
                    <Download size={17} aria-hidden="true" />
                    Download PDF
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mist py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                Need Product Recommendation?
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Send your project details for faster model selection
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                For quotation, please share product type, quantity, voltage,
                installation method, control requirement and destination country.
              </p>
            </div>
            <div className="rounded border border-cyan-100 bg-white p-6 shadow-sm">
              <ContactActions
                product="LED Pool Light Catalog"
                leadSource="Catalog page"
                pagePath="/catalog"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
