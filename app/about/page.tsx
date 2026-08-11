import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Factory, Globe2, Settings } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | LED Pool Light Manufacturer in China",
  description:
    "Learn about GZLANHE, a China LED pool light manufacturer supplying IP68 waterproof pool lights, underwater lights and OEM lighting solutions worldwide.",
  keywords: [
    "LED pool light manufacturer China",
    "IP68 underwater light factory",
    "OEM pool light manufacturer",
    "China LED lighting manufacturer"
  ]
};

const introItems = [
  {
    title: "LED Lighting Manufacturer",
    text: "Focused on pool lights, underwater lights, fountain lights and outdoor lighting products.",
    Icon: Factory
  },
  {
    title: "Factory Direct Supply",
    text: "Support for distributors, pool contractors, importers and engineering buyers.",
    Icon: BadgeCheck
  },
  {
    title: "OEM/ODM Capability",
    text: "Custom product specifications, packaging, logo and project-oriented requirements.",
    Icon: Settings
  },
  {
    title: "Global Export Experience",
    text: "Serving overseas B2B buyers with clear communication and export-ready packing.",
    Icon: Globe2
  }
];

export default function AboutPage() {
  return (
    <>
      <OrganizationJsonLd pageUrl={`${siteConfig.url}/about`} />
      <Header />
      <main>
        <section className="bg-[linear-gradient(120deg,#073847_0%,#075f73_50%,#f7fbfc_50%,#f7fbfc_100%)] py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-100">About GZLANHE</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Professional LED Pool Light Manufacturer in China
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
                We specialize in manufacturing IP68 waterproof LED pool lights,
                underwater lights and customized lighting solutions for global customers.
              </p>
            </div>
            <div className="overflow-hidden rounded border border-white/30 bg-white shadow-2xl">
              <Image
                src="/images/factory/led-pool-light-production-line.png"
                alt="GZLANHE LED swimming pool light manufacturer production line"
                width={1536}
                height={1024}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                Company Introduction
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Built for overseas B2B pool lighting buyers
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                GZLANHE supplies LED swimming pool lights, underwater lights and
                custom lighting products for buyers who need factory direct supply,
                stable production, OEM/ODM support and global export cooperation.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {introItems.map(({ title, text, Icon }) => (
                <div key={title} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="mb-4 text-ocean" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Company History",
                text: "GZLANHE is positioned as a practical LED lighting manufacturer serving overseas pool lighting buyers with stable communication and product support."
              },
              {
                title: "Manufacturing Capability",
                text: "Our manufacturing direction covers LED pool lights, underwater lights, fountain lights and OEM custom lighting products."
              },
              {
                title: "Export Market",
                text: "The website is built for buyers from the United States, Europe, Australia and other international project markets."
              },
              {
                title: "Production Capacity",
                text: "Production capacity can be planned according to model, quantity, packaging requirements and delivery schedule."
              }
            ].map((item) => (
              <div key={item.title} className="rounded border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-xl font-bold text-ink">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
