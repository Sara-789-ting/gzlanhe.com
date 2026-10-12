"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { featuredPath, featuredProduct, whatsappHref } from "@/lib/inquiry";

type Props = { product?: string; pagePath?: string; source?: string; className?: string; children?: React.ReactNode; floating?: boolean };

export function WhatsAppLink({ product, pagePath, source = "Website", className, children, floating = false }: Props) {
  const pathname = usePathname() || "/";
  const path = pagePath || pathname;
  const fallback = path === featuredPath || path === "/pool-light-partners" ? featuredProduct : "LED Pool Lights";
  const [search, setSearch] = useState("");
  const [pageProduct, setPageProduct] = useState(fallback);
  useEffect(() => {
    setSearch(window.location.search);
    setPageProduct(document.querySelector("h1")?.textContent?.trim() || fallback);
  }, [path, fallback]);
  const href = whatsappHref(product || pageProduct, path, source, search);
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}
    aria-label={floating ? "Ask LANHE for a quote on WhatsApp" : undefined}
    onClick={(event) => { event.currentTarget.href = whatsappHref(product || pageProduct, path, source, window.location.search); }}>
    <MessageCircle size={19} aria-hidden="true" />{children || "Get WhatsApp quote"}
  </a>;
}
