import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, BadgeCheck, Factory, Globe2, PackageCheck, ShieldCheck, Star, Truck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactActions } from "@/components/ContactActions";
import { InquiryForm } from "@/components/InquiryForm";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { advantages, applications, productCategories } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://gzlanhe.com/"
  }
};

const factoryStrength = [
  {
    title: "Factory Capability",
    text: "Manufacturer-focused supply for B2B pool lighting buyers, importers and project contractors."
  },
  {
    title: "Production Line",
    text: "Stable production planning for repeat orders and project demand."
  },
  {
    title: "Quality Control",
    text: "IP68 waterproof focus, material checks and lighting performance review."
  },
  {
    title: "Packaging",
    text: "Export-ready packing for distributors, importers and wholesale buyers."
  }
];

const faqs = [
  {
    question: "Can you support OEM pool light orders?",
    answer: "Yes. We support OEM and ODM requirements including product specification, labeling, packaging and project-oriented customization."
  },
  {
    question: "What buyers do you usually work with?",
    answer: "We work with pool contractors, pool builders, lighting distributors, wholesale buyers, importers and engineering companies."
  },
  {
    question: "Can I request a quotation for a project?",
    answer: "Yes. Please share quantity, application, voltage, material, color control and target market so our sales team can prepare a suitable quotation."
  }
];

const advantageIcons = [Factory, BadgeCheck, Award, ShieldCheck, Globe2];
const trustItems = [
  {
    title: "Factory Capability",
    text: "Production planning for LED pool lights, underwater lights, fountain lights and OEM orders."
  },
  {
    title: "Quality Control",
    text: "Material checks, waterproof structure review and lighting performance inspection before packing."
  },
  {
    title: "Certifications",
    text: "CE, RoHS and IP68 waterproof testing support for overseas B2B purchasing review."
  }
];

export default function Home() {
  return (
    <>
      <SeoJsonLd />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(120deg,#073847_0%,#075f73_46%,#f7fbfc_46%,#f7fbfc_100%)]">
          <div className="section-shell grid min-h-[680px] items-center gap-10 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
            <div className="text-white">
              <p className="mb-4 inline-flex rounded bg-white/12 px-4 py-2 text-sm font-bold text-cyan-50 ring-1 ring-white/20">
                Factory Direct - MOQ Support - OEM/ODM
              </p>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
                Professional LED Pool Light Manufacturer in China
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-cyan-50">
                Professional manufacturer of IP68 waterproof LED pool lights,
                underwater lights and custom lighting solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact#inquiry"
                  className="focus-ring rounded bg-signal px-6 py-3 font-bold text-ink shadow-lg hover:bg-amber-300"
                >
                  Get Quote
                </a>
                <a
                  href="#products"
                  className="focus-ring rounded border border-white/70 px-6 py-3 font-bold text-white hover:bg-white/10"
                >
                  View Products
                </a>
              </div>
              <ContactActions product="LED Swimming Pool Light" />
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="block text-2xl text-white">IP68</strong>
                  Waterproof focus
                </div>
                <div>
                  <strong className="block text-2xl text-white">MOQ</strong>
                  Flexible trial order
                </div>
                <div>
                  <strong className="block text-2xl text-white">OEM</strong>
                  Distributor support
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded border border-white/30 bg-white shadow-2xl">
                <Image
                  src="/images/hero-pool-lights.png"
                  alt="LED pool lights and underwater lighting products"
                  width={1536}
                  height={1024}
                  priority
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-20">
          <div className="section-shell">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-ocean">Product Categories</p>
                <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                  Pool lighting products for distributors and projects
                </h2>
              </div>
              <p className="max-w-xl text-slate-600">
                Build dedicated SEO entry pages for pool lights, underwater lights,
                fountain lights and custom lighting requirements.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {productCategories.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="focus-ring rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded bg-mist text-ocean">
                    <PackageCheck aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-ink">{product.name}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-ocean">Why Work With Lanhe</p>
                <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                  Built for B2B supply, not one-time retail orders
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {advantages.map((advantage, index) => {
                  const Icon = advantageIcons[index];
                  return (
                    <div key={advantage} className="rounded border border-slate-200 bg-slate-50 p-5">
                      <div className="mb-3 text-ocean">
                        <Icon aria-hidden="true" />
                      </div>
                      <p className="font-bold text-ink">{advantage}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Why Choose Us</p>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                Built for overseas B2B pool light purchasing
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-5">
              {advantages.map((item) => (
                <div key={item} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                  <BadgeCheck className="mb-4 text-ocean" aria-hidden="true" />
                  <p className="font-bold text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="applications" className="py-20">
          <div className="section-shell">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Applications</p>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                Lighting solutions for pool and water projects
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-5">
              {applications.map((application) => (
                <div key={application} className="rounded bg-ink p-5 text-white">
                  <p className="text-lg font-bold">{application}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    IP68 lighting options for durable and clean project results.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="factory" className="bg-mist py-20">
          <div className="section-shell">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Factory Strength</p>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                Manufacturing support from production to export packing
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {factoryStrength.map((item) => (
                <div key={item.title} className="rounded border border-cyan-100 bg-white p-6 shadow-sm">
                  <Truck className="mb-4 text-ocean" aria-hidden="true" />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Trust</p>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                Ready for long-term overseas cooperation
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {trustItems.map((item) => (
                  <div key={item.title} className="rounded border border-slate-200 p-5">
                    <Star className="mb-3 text-signal" aria-hidden="true" />
                    <p className="font-bold">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {faqs.map((item) => (
                <div key={item.question} className="rounded border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-ink">{item.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="inquiry" className="py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Inquiry</p>
              <h2 className="mt-3 text-3xl font-bold text-ink md:text-4xl">
                Send your pool light purchasing request
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                Tell us your application, quantity, voltage, material, color control
                and OEM requirements. Our sales email is {siteConfig.email}.
              </p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-lg">
              <InquiryForm buttonLabel="Get Quote" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
