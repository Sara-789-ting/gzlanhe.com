import type { Metadata } from "next";
import Image from "next/image";
import { Award, ClipboardCheck, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Certificates | LED Pool Light Quality Inspection",
  description:
    "GZLANHE certificate and quality inspection page for CE, RoHS, IP68 waterproof testing and LED pool light quality control.",
  alternates: {
    canonical: `${siteConfig.url}/certificates`
  },
  keywords: [
    "LED pool light certificate",
    "CE pool light",
    "RoHS LED light",
    "IP68 waterproof test",
    "quality inspection"
  ]
};

const certificates = [
  {
    title: "CE",
    text: "Prepared for product compliance review in relevant overseas markets.",
    Icon: Award
  },
  {
    title: "RoHS",
    text: "Material and component compliance support for LED lighting buyers.",
    Icon: ClipboardCheck
  },
  {
    title: "IP68 Waterproof Test",
    text: "Waterproof testing focus for underwater pool and fountain lighting applications.",
    Icon: ShieldCheck
  },
  {
    title: "Quality Inspection",
    text: "Inspection process covering material, lighting performance, waterproof structure and packing.",
    Icon: ClipboardCheck
  }
];

export default function CertificatesPage() {
  return (
    <>
      <OrganizationJsonLd pageUrl={`${siteConfig.url}/certificates`} />
      <Header />
      <main>
        <section className="bg-ink py-20 text-white">
          <div className="section-shell">
            <p className="text-sm font-bold uppercase tracking-wide text-signal">
              Certificates & Quality
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
              Quality Support for LED Pool Light Buyers
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Certificate and inspection support for distributors, importers,
              contractors and engineering companies evaluating long-term supply.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/certificates/led-pool-light-certificates-testing.png"
                alt="LED pool light certificates and IP68 waterproof testing"
                width={1536}
                height={1024}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {certificates.map(({ title, text, Icon }) => (
                <div key={title} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded bg-mist text-ocean">
                    <Icon aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-ink">{title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
