"use client";

import { usePathname } from "next/navigation";
import { featuredProduct, inquiryContext, whatsappHref } from "@/lib/inquiry";
import { siteConfig } from "@/lib/site";

export function ProductInquiry({ source }: { source: string }) {
  const pathname = usePathname() || "/";
  function prepare(form: HTMLFormElement, email = false) {
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const details = [`Name / company: ${data.get("name") || "Not specified"}`, `Request: ${data.get("request")}`,
      `Quantity: ${data.get("quantity")}`, `Destination country: ${data.get("country")}`, `Requirements: ${data.get("message") || "To confirm"}`].join("\n");
    window.location.href = email
      ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(`RFQ - ${featuredProduct}`)}&body=${encodeURIComponent(`${featuredProduct}\n${details}\nSource: ${source}\n${inquiryContext(pathname, window.location.search)}`)}`
      : whatsappHref(featuredProduct, pathname, source, window.location.search, details);
  }
  return <form className="lead-form" onSubmit={(event) => { event.preventDefault(); prepare(event.currentTarget); }}>
    <label>Name / company<input name="name" autoComplete="organization" maxLength={120}/></label>
    <label>Request<select name="request"><option>Bulk quotation</option><option>Sample availability</option><option>Private label / OEM</option><option>Technical sheet and compatibility</option></select></label>
    <label>Estimated quantity<input required name="quantity" type="number" min={1} max={1000000} step={1} inputMode="numeric" placeholder="e.g. 50"/></label>
    <label>Destination country<input required name="country" autoComplete="country-name" maxLength={80} placeholder="e.g. Spain"/></label>
    <label className="full">Installation and requirements (optional)<textarea name="message" rows={3} maxLength={1500} placeholder="Voltage, dimensions, controller, cable or branding"/></label>
    <div className="sales-actions full"><button type="submit" className="sales-primary">Prepare WhatsApp inquiry</button><button type="button" className="sales-secondary" onClick={(event) => { if (event.currentTarget.form) prepare(event.currentTarget.form, true); }}>Ask by email</button></div>
    <p className="full">Opens WhatsApp or your email app with a draft. Review and send it yourself. This form does not submit your details to this website.</p>
  </form>;
}
