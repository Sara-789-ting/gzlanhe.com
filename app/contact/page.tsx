import type { Metadata } from "next";
import { Mail, MessageSquare, PackageCheck } from "lucide-react";
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

export const metadata: Metadata = {
  title: "Contact LED Pool Light Manufacturer",
  description:
    "Contact GZ Lanhe for LED pool light factory price, OEM service and custom underwater lighting solutions.",
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
              <a className="mt-8 inline-flex font-bold text-signal" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
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

        <section className="py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                Inquiry Form
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Tell us what pool lighting products you need
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Please include product type, quantity, voltage, color, installation
                method and target market. The inquiry will be sent to {siteConfig.email}.
              </p>
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
                  <p className="text-sm font-bold uppercase tracking-wide text-ocean">Service</p>
                  <p className="mt-1 font-bold text-ink">OEM / ODM / Wholesale</p>
                </div>
              </div>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-lg">
              <InquiryForm buttonLabel="Get Factory Price" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
