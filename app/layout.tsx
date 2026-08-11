import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gzlanhe.com"),
  title: {
    default: "LED Pool Light Manufacturer | IP68 Underwater Light Factory China",
    template: "%s | GZ Lanhe"
  },
  description:
    "Professional LED pool light manufacturer in China. Supply IP68 waterproof swimming pool lights, underwater lights and OEM custom lighting solutions worldwide.",
  keywords: [
    "LED pool light",
    "Swimming pool light manufacturer",
    "Underwater LED light supplier",
    "IP68 pool light factory",
    "China LED lighting manufacturer"
  ],
  openGraph: {
    title: "LED Pool Light Manufacturer | IP68 Underwater Light Factory China",
    description:
      "Professional LED pool light manufacturer in China supplying IP68 pool lights, underwater lights and OEM custom lighting solutions worldwide.",
    url: "https://gzlanhe.com",
    siteName: "GZ Lanhe",
    images: [{ url: "/images/hero-pool-lights.png", width: 1536, height: 1024 }],
    locale: "en_US",
    type: "website"
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
