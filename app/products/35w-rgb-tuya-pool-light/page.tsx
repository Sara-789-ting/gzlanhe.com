import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturedPoolLight } from "@/components/FeaturedPoolLight";
export const metadata: Metadata = {
  title: "35W RGB Pool Light with Tuya Control | LANHE",
  description: "Discuss a LANHE 35W RGB pool light configuration with compatible Tuya control. Confirm accessories, sample availability and bulk quotation.",
  alternates: { canonical: "https://gzlanhe.com/products/35w-rgb-tuya-pool-light" },
  openGraph: { title: "35W RGB Pool Light with Tuya Control", url: "https://gzlanhe.com/products/35w-rgb-tuya-pool-light", images: ["/images/products/rgb/rgb-swimming-pool-light-main.jpeg"] }
};
export default function Page() { return <><Header/><FeaturedPoolLight/><Footer/></>; }
