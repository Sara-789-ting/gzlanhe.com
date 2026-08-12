import type { Metadata } from "next";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gzlanhe.com"),
  title: {
    default: "LED Pool Light Manufacturer China | IP68 Underwater Swimming Pool Lights",
    template: "%s | Lanhe Pool Lighting"
  },
  description:
    "Professional LED pool light manufacturer in China. IP68 waterproof underwater lights, RGB pool lamps, fountain lights and OEM lighting solutions.",
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
    title: "LED Pool Light Manufacturer China | Lanhe Pool Lighting",
    description:
      "Professional LED pool light manufacturer in China supplying IP68 underwater lights, RGB pool lamps, fountain lights and OEM lighting solutions.",
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
  },
  verification: {
    google: "saYah08eknoDs1OzoGLEdnTv2fIxFBVBlS9Qf-zOseg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
