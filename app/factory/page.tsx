import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Factory Strength | LED Pool Light Factory China",
  description:
    "View GZLANHE factory overview, production line, quality control, testing equipment, packaging and shipping for LED pool lights.",
  keywords: [
    "LED pool light factory",
    "pool light production line",
    "IP68 waterproof testing",
    "China underwater light factory"
  ]
};

const factorySections = [
  {
    image: "/images/factory/led-pool-light-production-line.png",
    alt: "LED pool light factory building and production workshop",
    title: "Factory Overview",
    text: "GZLANHE focuses on LED pool lighting and underwater lighting production for overseas B2B customers."
  },
  {
    image: "/images/factory/led-pool-light-production-line.png",
    alt: "LED swimming pool light production line",
    title: "Production Line",
    text: "Organized production helps support repeated distributor orders, project demand and OEM requirements."
  },
  {
    image: "/images/factory/led-pool-light-production-line.png",
    alt: "LED pool light assembly area",
    title: "Assembly Area",
    text: "Assembly workflow supports product consistency for LED pool lights, underwater lights and project lighting products."
  },
  {
    image: "/images/factory/led-pool-light-production-line.png",
    alt: "LED pool light quality control process",
    title: "Quality Control",
    text: "Key inspection points include material review, lighting performance, waterproof structure and packing checks."
  },
  {
    image: "/images/certificates/led-pool-light-certificates-testing.png",
    alt: "IP68 LED pool light testing room and waterproof test equipment",
    title: "Testing Equipment",
    text: "Testing support is prepared for waterproof reliability, electrical performance and product consistency."
  },
  {
    image: "/images/factory/led-pool-light-production-line.png",
    alt: "LED pool light warehouse and export packing area",
    title: "Warehouse",
    text: "Warehouse organization helps prepare wholesale orders, project products and export packing before shipment."
  },
  {
    image: "/images/certificates/led-pool-light-certificates-testing.png",
    alt: "LED pool light packaging and shipping inspection",
    title: "Packaging & Shipping",
    text: "Export-ready packaging helps protect products during international logistics and wholesale delivery."
  }
];

export default function FactoryPage() {
  return (
    <>
      <OrganizationJsonLd pageUrl={`${siteConfig.url}/factory`} />
      <Header />
      <main>
        <section className="bg-ink py-20 text-white">
          <div className="section-shell">
            <p className="text-sm font-bold uppercase tracking-wide text-signal">Factory</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
              LED Pool Light Factory Strength
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Manufacturing, quality control and export packing support for LED
              pool light distributors, contractors and engineering buyers.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell grid gap-6">
            {factorySections.map((section, index) => (
              <div
                key={section.title}
                className="grid gap-6 rounded border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:items-center"
              >
                <div className="overflow-hidden rounded bg-mist">
                  <Image
                    src={section.image}
                    alt={section.alt}
                    width={1536}
                    height={1024}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-ink">{section.title}</h2>
                  <p className="mt-4 leading-8 text-slate-600">{section.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
