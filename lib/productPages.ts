export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductPage = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  image: string;
  gallery: { src: string; alt: string; label: string }[];
  specs: ProductSpec[];
  advantages: string[];
  applications: string[];
  oem: string;
  moq: string;
  faqs: { question: string; answer: string }[];
};

export const productPages: ProductPage[] = [
  {
    slug: "swimming-pool-led-light",
    name: "Swimming Pool LED Light",
    shortName: "LED Pool Light",
    title: "IP68 Waterproof LED Swimming Pool Light Manufacturer",
    metaTitle: "Swimming Pool LED Light Manufacturer | IP68 Pool Light Factory",
    metaDescription:
      "China swimming pool LED light manufacturer supplying IP68 waterproof pool lights, RGB swimming pool lights and OEM custom lighting for distributors and contractors.",
    description:
      "Lanhe manufactures LED swimming pool lights for residential pools, hotel pools, villa pools and commercial pool projects. The product range supports white, RGB and RGBW options for buyers who need stable factory supply.",
    image: "/images/hero-pool-lights.png",
    gallery: [
      { src: "/images/hero-pool-lights.png", alt: "swimming pool LED light manufacturer product main image", label: "Main Image" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "IP68 swimming pool LED light detail image", label: "Detail Image" },
      { src: "/images/hero-pool-lights.png", alt: "LED pool light installation effect in swimming pool", label: "Installation Effect" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "LED swimming pool light application for hotel pool", label: "Application Scene" }
    ],
    specs: [
      { label: "Material", value: "Stainless steel / PC / ABS options" },
      { label: "Power", value: "6W / 12W / 18W / 24W / custom" },
      { label: "Voltage", value: "12V AC/DC or customized" },
      { label: "LED Type", value: "SMD LED / high brightness LED options" },
      { label: "IP Rating", value: "IP68 waterproof" },
      { label: "Color", value: "White / Warm white / RGB / RGBW" },
      { label: "Beam Angle", value: "30 / 45 / 60 / 90 degree options" },
      { label: "Installation", value: "Surface mounted / recessed / wall mounted" }
    ],
    advantages: [
      "Factory direct supply for distributors and importers",
      "IP68 waterproof structure for pool environments",
      "RGB and RGBW options for upgrade projects",
      "OEM label and packaging support"
    ],
    applications: ["Swimming Pool", "Hotel Pool", "Villa Pool", "Water Park"],
    oem: "OEM and ODM support is available for logo, cable length, voltage, color control, packaging and distributor product lines.",
    moq: "MOQ can be discussed based on model and customization level. Trial orders are supported for qualified B2B buyers.",
    faqs: [
      {
        question: "Can you supply private label LED pool lights?",
        answer: "Yes. We can support OEM labels, packaging and model selection for distributor programs."
      },
      {
        question: "Do you support RGB pool light projects?",
        answer: "Yes. RGB and RGBW options are available for pool upgrade and project lighting needs."
      }
    ]
  },
  {
    slug: "underwater-led-light",
    name: "Underwater LED Light",
    shortName: "Underwater LED Light",
    title: "IP68 Underwater LED Light Supplier for Pool Projects",
    metaTitle: "Underwater LED Light Supplier | IP68 Pool Light China",
    metaDescription:
      "IP68 underwater LED light supplier in China for swimming pool contractors, pool builders, importers and project lighting buyers.",
    description:
      "Our underwater LED lights are built for pool walls, commercial projects, fountains and replacement lighting demand. The range focuses on waterproof reliability, clear light output and project-friendly specifications.",
    image: "/images/hero-pool-lights.png",
    gallery: [
      { src: "/images/hero-pool-lights.png", alt: "IP68 underwater LED light supplier main product image", label: "Main Image" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "underwater LED light waterproof cable detail", label: "Detail Image" },
      { src: "/images/hero-pool-lights.png", alt: "underwater LED light installation effect", label: "Installation Effect" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "underwater LED pool light application scene", label: "Application Scene" }
    ],
    specs: [
      { label: "Material", value: "Stainless steel housing with waterproof sealing" },
      { label: "Power", value: "9W / 12W / 18W / 24W / custom" },
      { label: "Voltage", value: "Low-voltage 12V options" },
      { label: "LED Type", value: "SMD LED / COB options by model" },
      { label: "IP Rating", value: "IP68" },
      { label: "Color", value: "Single color / RGB / RGBW" },
      { label: "Beam Angle", value: "30 / 45 / 60 degree options" },
      { label: "Installation", value: "Recessed or surface installation" }
    ],
    advantages: [
      "Suitable for new pool and replacement projects",
      "Low-voltage lighting options",
      "Stable supply for contractors and wholesalers",
      "Technical specification support before quotation"
    ],
    applications: ["Commercial Pool", "Residential Pool", "Hotel Pool", "SPA"],
    oem: "Custom voltage, power, cable and color control requirements can be reviewed for project orders.",
    moq: "MOQ depends on model and specifications. Sample and small trial orders can be discussed before bulk purchasing.",
    faqs: [
      {
        question: "Are the lights suitable for underwater installation?",
        answer: "Yes. These products are designed around IP68 waterproof requirements for underwater lighting applications."
      },
      {
        question: "Can you provide technical specifications?",
        answer: "Yes. We can prepare specification sheets after confirming the model, voltage and application."
      }
    ]
  },
  {
    slug: "fountain-led-light",
    name: "Fountain LED Light",
    shortName: "Fountain LED Light",
    title: "IP68 Fountain LED Light Manufacturer for Water Feature Projects",
    metaTitle: "Fountain LED Light Manufacturer | RGB DMX Underwater Light",
    metaDescription:
      "Fountain LED light manufacturer supplying IP68 underwater RGB and DMX fountain lights for water feature, landscape and engineering projects.",
    description:
      "Fountain LED lights are designed for water feature contractors, landscape lighting companies and engineering buyers who need reliable underwater RGB or DMX lighting solutions.",
    image: "/images/hero-pool-lights.png",
    gallery: [
      { src: "/images/hero-pool-lights.png", alt: "fountain LED light manufacturer main product image", label: "Main Image" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "RGB DMX fountain LED light detail", label: "Detail Image" },
      { src: "/images/hero-pool-lights.png", alt: "fountain LED light installation effect", label: "Installation Effect" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "underwater fountain LED light application scene", label: "Application Scene" }
    ],
    specs: [
      { label: "Material", value: "Stainless steel / PC / ABS by model" },
      { label: "Power", value: "9W / 12W / 18W / 24W / custom" },
      { label: "Voltage", value: "12V / 24V options" },
      { label: "LED Type", value: "High brightness LED / RGB LED" },
      { label: "IP Rating", value: "IP68 waterproof" },
      { label: "Color", value: "White / RGB / RGBW / DMX options" },
      { label: "Beam Angle", value: "Narrow / medium / wide beam by project" },
      { label: "Installation", value: "Submersible / recessed / project mounting" }
    ],
    advantages: [
      "Designed for fountain and water feature environments",
      "RGB and DMX-ready lighting options",
      "Stainless steel body options",
      "Engineering project support"
    ],
    applications: ["Water Fountain", "Landscape Water Feature", "Hotel Project", "Public Plaza"],
    oem: "OEM and project customization can cover beam angle, power, cable, control method, stainless steel body and packing.",
    moq: "MOQ is reviewed by model and project specifications. Project quantity quotations are available.",
    faqs: [
      {
        question: "Do you support DMX fountain lighting?",
        answer: "DMX-ready options can be discussed for engineering and musical fountain projects."
      },
      {
        question: "Can fountain lights be used underwater?",
        answer: "Yes. The product direction focuses on IP68 underwater fountain and water feature lighting."
      }
    ]
  },
  {
    slug: "custom-lighting-solution",
    name: "Custom Lighting Solution",
    shortName: "Custom Lighting",
    title: "Custom LED Pool Lighting Solution for OEM and Project Buyers",
    metaTitle: "Custom Pool Lighting Solution | OEM LED Pool Light Manufacturer",
    metaDescription:
      "OEM custom LED pool lighting solution from China for private label distributors, pool contractors, importers and engineering project buyers.",
    description:
      "Lanhe Pool Lighting supports OEM and ODM requirements for swimming pool LED lights, IP68 underwater LED lights, RGB pool lights, fountain lights and project-specific lighting solutions.",
    image: "/images/hero-pool-lights.png",
    gallery: [
      { src: "/images/hero-pool-lights.png", alt: "custom LED pool lighting solution main image", label: "Main Image" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "OEM underwater LED light product detail", label: "Detail Image" },
      { src: "/images/hero-pool-lights.png", alt: "custom swimming pool light installation effect", label: "Installation Effect" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "OEM pool lighting application scene", label: "Application Scene" }
    ],
    specs: [
      { label: "Material", value: "Stainless steel / PC / ABS / custom options" },
      { label: "Power", value: "Customized by product model and project demand" },
      { label: "Voltage", value: "12V / 24V / market-specific options" },
      { label: "LED Type", value: "SMD LED / RGB LED / RGBW LED options" },
      { label: "IP Rating", value: "IP68 waterproof" },
      { label: "Color", value: "White / warm white / RGB / RGBW / custom" },
      { label: "Beam Angle", value: "Customized by application" },
      { label: "Installation", value: "Surface / recessed / wall mounted / submersible" }
    ],
    advantages: [
      "OEM logo, label and export packaging support",
      "Custom specification review for market requirements",
      "Private label support for distributors and importers",
      "Factory direct communication for project buyers"
    ],
    applications: ["Distributor Product Line", "Hotel Pool Project", "Villa Pool", "Water Feature Project"],
    oem: "OEM and ODM support can include logo, packaging, model selection, voltage, cable length, color control, beam angle and product documentation.",
    moq: "MOQ depends on customization level. Trial orders and project quantity quotations can be discussed with qualified B2B buyers.",
    faqs: [
      {
        question: "Can you support private label pool lights?",
        answer: "Yes. We can review logo, packaging and product specification requirements for distributor programs."
      },
      {
        question: "Can you customize RGB pool light solutions?",
        answer: "Yes. RGB, RGBW and controller matching requirements can be discussed based on quantity and application."
      }
    ]
  },
  {
    slug: "spa-pool-light",
    name: "SPA Pool Light",
    shortName: "SPA Pool Light",
    title: "Compact SPA Pool Light Supplier for Small Pool Applications",
    metaTitle: "SPA Pool Light Supplier | Compact Underwater LED Light China",
    metaDescription:
      "Compact SPA pool light supplier in China for SPA pools, small swimming pools, villa pools and OEM lighting buyers.",
    description:
      "SPA pool lights are compact underwater lighting options for small pool environments, SPA projects and villa applications where clean size, waterproof performance and easy replacement matter.",
    image: "/images/hero-pool-lights.png",
    gallery: [
      { src: "/images/hero-pool-lights.png", alt: "SPA pool light supplier main product image", label: "Main Image" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "compact SPA pool light detail image", label: "Detail Image" },
      { src: "/images/hero-pool-lights.png", alt: "SPA pool light installation effect", label: "Installation Effect" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "compact underwater LED light application scene", label: "Application Scene" }
    ],
    specs: [
      { label: "Material", value: "Stainless steel / PC by model" },
      { label: "Power", value: "3W / 6W / 9W / custom" },
      { label: "Voltage", value: "12V low-voltage options" },
      { label: "LED Type", value: "SMD LED compact module" },
      { label: "IP Rating", value: "IP68 waterproof" },
      { label: "Color", value: "White / warm white / RGB" },
      { label: "Beam Angle", value: "Wide beam for compact pool lighting" },
      { label: "Installation", value: "Compact surface or recessed installation" }
    ],
    advantages: [
      "Compact size for SPA and small pools",
      "Low-voltage waterproof lighting",
      "OEM packing for accessory distributors",
      "Suitable for pool renovation and replacement"
    ],
    applications: ["SPA", "Villa Pool", "Small Pool", "Hotel Pool"],
    oem: "OEM can include label, packaging, cable length, color temperature and compact model selection.",
    moq: "Trial order MOQ can be discussed for distributors and importers evaluating SPA pool light lines.",
    faqs: [
      {
        question: "Are SPA pool lights suitable for small pools?",
        answer: "Yes. These compact lights are intended for small pools, SPA and villa pool applications."
      },
      {
        question: "Can I request different color temperatures?",
        answer: "Yes. White, warm white and RGB options can be reviewed based on the chosen model."
      }
    ]
  }
];

export function getProductBySlug(slug: string) {
  return productPages.find((product) => product.slug === slug);
}
