import { Mail, MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/lib/site";

type ContactActionsProps = {
  product?: string;
  compact?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  whatsappLabel?: string;
  leadSource?: string;
  pagePath?: string;
};

export function ContactActions({
  product = "LED Pool Light",
  compact = false,
  primaryLabel = "Get Quote",
  secondaryLabel = "Contact Manufacturer",
  whatsappLabel = "Chat on WhatsApp",
  leadSource = "Website CTA",
  pagePath
}: ContactActionsProps) {
  const rfqSubject = encodeURIComponent(`RFQ - ${product}`);
  const rfqBody = encodeURIComponent(
    `Hello Lanhe Pool Lighting,\n\nWe are interested in ${product}.\nPlease send product catalog, factory price and MOQ information.\n\nCompany:\nCountry:\nQuantity:\nApplication:\n`
  );
  const inquiryParams = new URLSearchParams({
    source: leadSource,
    product
  });

  if (pagePath) {
    inquiryParams.set("page", pagePath);
  }

  const inquiryHref = `/contact?${inquiryParams.toString()}#inquiry`;
  const buttonClass =
    "focus-ring inline-flex items-center justify-center gap-2 rounded px-4 py-3 text-sm font-bold";

  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "mt-6"}`}>
      <a className={`${buttonClass} bg-ocean text-white hover:bg-cyan-800`} href={inquiryHref}>
        <Send size={17} aria-hidden="true" />
        {primaryLabel}
      </a>
      <a
        className={`${buttonClass} border border-slate-300 bg-white text-ink hover:border-ocean hover:text-ocean`}
        href={`mailto:${siteConfig.email}?subject=${rfqSubject}&body=${rfqBody}`}
      >
        <Mail size={17} aria-hidden="true" />
        {secondaryLabel}
      </a>
      <a
        className={`${buttonClass} border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100`}
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={17} aria-hidden="true" />
        {whatsappLabel}
      </a>
    </div>
  );
}
