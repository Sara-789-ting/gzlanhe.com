import type { Metadata } from "next";
import { ArrowRight, Mail, MessageSquare, PackageCheck } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InquiryForm } from "@/components/InquiryForm";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { siteConfig } from "@/lib/site";

const contactHighlights = [
  {
    title: "Factory Quote",
    text: "Send product and quantity requirements.",
    Icon: PackageCheck
  },
  {
    title: "OEM Support",
    text: "Ask about logo, packaging and custom specs.",
    Icon: MessageSquare
  },
  {
    title: "Sales Email",
    text: siteConfig.email,
    Icon: Mail
  }
];

const purchasingInfo = [
  {
    title: "MOQ",
    text: "MOQ depends on product model, order quantity and OEM requirements. Trial orders can be discussed for qualified B2B buyers."
  },
  {
    title: "Lead Time",
    text: "Lead time should be confirmed by model, quantity, voltage, packaging and customization requirements before ordering."
  },
  {
    title: "OEM Support",
    text: "Logo, packaging, cable length, voltage and specification customization can be reviewed by product model."
  },
  {
    title: "Sample Policy",
    text: "Sample availability and sample cost should be confirmed with the selected product model and delivery country."
  },
  {
    title: "Shipping Support",
    text: "Export packing and shipping support can be arranged according to destination country and order volume."
  }
];

export const metadata: Metadata = {
  title: "Contact LED Pool Light Manufacturer",
  description:
    "Contact Lanhe Pool Lighting for LED pool light factory price, WhatsApp inquiry, OEM service and custom underwater lighting solutions.",
  alternates: {
    canonical: `${siteConfig.url}/contact`
  },
  keywords: [
    "contact LED pool light manufacturer",
    "LED pool light factory price",
    "OEM pool light supplier",
    "underwater light inquiry"
  ]
};

export default function ContactPage() {
  return (
    <>
      <OrganizationJsonLd pageUrl={`${siteConfig.url}/contact`} />
      <Header />
      <main>
        <section className="bg-ink py-20 text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-signal">
                Contact Us
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Contact LED Pool Light Manufacturer
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Get factory price, OEM service and custom lighting solutions.
              </p>
              <a
                href="/contact#inquiry"
                className="focus-ring mt-8 inline-flex items-center gap-2 rounded bg-signal px-6 py-3 font-bold text-ink hover:bg-amber-300"
              >
                Get Factory Quote
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="mt-8 inline-flex font-bold text-signal" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              <ContactActions product="LED Pool Light" />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {contactHighlights.map(({ title, text, Icon }) => (
                <div key={title} className="rounded border border-white/15 bg-white/8 p-5">
                  <Icon className="mb-4 text-signal" aria-hidden="true" />
                  <p className="font-bold">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="inquiry" className="py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                Inquiry Form
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Tell us what pool lighting products you need
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Please provide your project details for faster quotation. Include
                product type, quantity, voltage, application, specification
                requirement, WhatsApp and target market. The inquiry will be sent to {siteConfig.email}.
              </p>
              <a
                href="/contact#inquiry"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded bg-ocean px-5 py-3 font-bold text-white hover:bg-cyan-800"
              >
                Send Your Project Requirement
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <div className="mt-8 grid gap-4 rounded border border-slate-200 bg-white p-6 shadow-sm">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-ocean">Company</p>
                  <p className="mt-1 text-lg font-bold text-ink">{siteConfig.company}</p>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-ocean">Email</p>
                  <a className="mt-1 block font-bold text-ocean" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-ocean">WhatsApp</p>
                  <a className="mt-1 block font-bold text-ocean" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                    {siteConfig.whatsapp}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-ocean">Service</p>
                  <p className="mt-1 font-bold text-ink">OEM / ODM / Wholesale</p>
                </div>
              </div>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-lg">
              <InquiryForm buttonLabel="Get Factory Quote" />
            </div>
          </div>
        </section>

        <section className="bg-mist py-20">
          <div className="section-shell">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Purchasing Information</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Information Buyers Usually Confirm Before RFQ</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                These details help overseas importers, distributors, pool contractors
                and project buyers receive a more accurate quotation from Lanhe Pool Lighting.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {purchasingInfo.map((item) => (
                <div key={item.title} className="rounded border border-cyan-100 bg-white p-5 shadow-sm">
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded border border-cyan-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">Contact LED Pool Light Manufacturer</h2>
              <p className="mt-3 max-w-3xl leading-8 text-slate-600">
                Send your project type, quantity, voltage and destination country.
                Our team can review product selection, OEM options and quotation details.
              </p>
              <ContactActions product="LED Pool Light RFQ" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
