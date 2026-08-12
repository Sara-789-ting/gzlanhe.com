import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gzlanhe.com"),
  title: {
    default: "Swimming Pool Light Manufacturer | IP68 Underwater LED Light Supplier China",
    template: "%s | Lanhe Pool Lighting"
  },
  description:
    "Lanhe Pool Lighting is a China LED pool light manufacturer supplying IP68 underwater LED lights, RGB swimming pool lights, fountain lights and OEM custom lighting solutions worldwide.",
  keywords: [
    "swimming pool light manufacturer",
    "IP68 underwater LED light",
    "LED pool light supplier China",
    "RGB swimming pool light",
    "fountain light manufacturer",
    "SPA pool light",
    "custom lighting solution"
  ],
  alternates: {
    canonical: "https://gzlanhe.com"
  },
  openGraph: {
    title: "Lanhe Pool Lighting | LED Pool Light Supplier China",
    description:
      "Factory direct IP68 waterproof LED swimming pool lights, underwater LED lights, fountain lights and OEM lighting solutions for global B2B buyers.",
    url: "https://gzlanhe.com",
    siteName: "Lanhe Pool Lighting",
    images: [{ url: "/images/hero-pool-lights.png", width: 1536, height: 1024 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lanhe Pool Lighting | IP68 LED Pool Light Manufacturer",
    description:
      "China LED pool light manufacturer for distributors, contractors, importers and engineering buyers.",
    images: ["/images/hero-pool-lights.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
