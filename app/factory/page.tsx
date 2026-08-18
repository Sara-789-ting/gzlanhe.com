import type { Metadata } from "next";
import Image from "next/image";
import { ContactActions } from "@/components/ContactActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Factory Strength | LED Pool Light Factory China",
  description:
    "View GZLANHE factory overview, production line, quality control, testing equipment, packaging and shipping for LED pool lights.",
  alternates: {
    canonical: `${siteConfig.url}/factory`
  },
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

const factoryTrustSections = [
  {
    title: "Manufacturer Introduction",
    text: "Lanhe Pool Lighting supplies LED pool lights, underwater LED lights, fountain lights and OEM lighting solutions for overseas B2B buyers."
  },
  {
    title: "Production Capability",
    text: "Production planning can support distributor stock, project orders and OEM requirements after model, quantity and specification confirmation."
  },
  {
    title: "Quality Control Process",
    text: "Quality review can include material inspection, assembly checks, lighting performance, cable details, waterproof structure and final packing."
  },
  {
    title: "Testing Equipment",
    text: "Testing requirements should be confirmed by product model and project use, including waterproof reliability and electrical performance checks."
  },
  {
    title: "OEM Service",
    text: "Logo, packaging, cable length, voltage and product specification customization can be discussed for private-label and wholesale buyers."
  }
];

const factoryImagePlaceholders = [
  { title: "Factory Building", alt: "Factory building of LED pool light manufacturer" },
  { title: "Production Line", alt: "Factory production line of LED pool lights" },
  { title: "LED Assembly", alt: "LED pool light assembly process" },
  { title: "Waterproof Testing", alt: "IP68 waterproof test for underwater pool light" },
  { title: "Quality Inspection", alt: "Quality inspection for LED swimming pool lights" },
  { title: "Packing Area", alt: "Export packing area for LED pool light orders" }
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

        <section className="bg-mist py-20">
          <div className="section-shell">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Factory Trust Section</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Supplier Capability for Overseas B2B Buyers</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                Importers, distributors, contractors and project buyers need more
                than product photos. These factory details help confirm whether a
                supplier can support repeated orders, OEM requirements and project quotations.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {factoryTrustSections.map((item) => (
                <div key={item.title} className="rounded border border-cyan-100 bg-white p-5 shadow-sm">
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded border border-cyan-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">Request Factory Information or Quotation</h2>
              <p className="mt-3 max-w-3xl leading-8 text-slate-600">
                Send your product model, quantity, application, voltage and
                destination country. Lanhe Pool Lighting can review product
                selection, OEM details and export packing requirements.
              </p>
              <ContactActions
                product="LED Pool Light Factory Supply"
                primaryLabel="Get Factory Quote"
                secondaryLabel="Contact Manufacturer"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Real Image Placeholders</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Factory Images to Add After Confirmation</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                These placeholders mark the real factory images needed later.
                Do not use generated images or competitor factory photos.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {factoryImagePlaceholders.map((image) => (
                <div key={image.title} className="rounded border border-dashed border-slate-300 bg-slate-50 p-6">
                  <h3 className="font-bold text-ink">{image.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    ALT suggestion: {image.alt}
                  </p>
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
