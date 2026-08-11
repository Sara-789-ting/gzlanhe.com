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
    slug: "led-swimming-pool-light",
    name: "LED Swimming Pool Light",
    shortName: "LED Pool Light",
    title: "IP68 Waterproof LED Swimming Pool Light Manufacturer",
    metaTitle: "LED Swimming Pool Light Manufacturer | IP68 Pool Light Factory",
    metaDescription:
      "China LED swimming pool light manufacturer supplying IP68 waterproof pool lights, RGB pool lamps and OEM custom lighting for distributors and contractors.",
    description:
      "Lanhe manufactures LED swimming pool lights for residential pools, hotel pools, villa pools and commercial pool projects. The product range supports white, RGB and RGBW options for buyers who need stable factory supply.",
    image: "/images/hero-pool-lights.png",
    gallery: [
      { src: "/images/hero-pool-lights.png", alt: "LED swimming pool light manufacturer product main image", label: "Main Image" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "IP68 LED swimming pool light detail image", label: "Detail Image" },
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
    slug: "underwater-pool-light",
    name: "Underwater Pool Light",
    shortName: "Underwater Pool Light",
    title: "IP68 Underwater Pool Light Supplier for Pool Projects",
    metaTitle: "Underwater Pool Light Supplier | IP68 LED Pool Light China",
    metaDescription:
      "IP68 underwater pool light supplier in China for swimming pool contractors, pool builders, importers and project lighting buyers.",
    description:
      "Our underwater pool lights are built for pool walls, commercial projects and replacement lighting demand. The range focuses on waterproof reliability, clear light output and project-friendly specifications.",
    image: "/images/hero-pool-lights.png",
    gallery: [
      { src: "/images/hero-pool-lights.png", alt: "IP68 underwater pool light supplier main product image", label: "Main Image" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "underwater pool light waterproof cable detail", label: "Detail Image" },
      { src: "/images/hero-pool-lights.png", alt: "underwater pool light installation effect", label: "Installation Effect" },
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
    slug: "rgb-pool-light",
    name: "RGB Pool Light",
    shortName: "RGB Pool Light",
    title: "RGB LED Pool Light Manufacturer for Color Changing Projects",
    metaTitle: "RGB Pool Light Manufacturer | Color Changing LED Pool Light",
    metaDescription:
      "RGB LED pool light manufacturer supplying color changing swimming pool lights, remote control options and OEM custom lighting solutions.",
    description:
      "RGB pool lights are designed for buyers who need color-changing lighting for villa pools, hotel pools, SPA pools and pool renovation projects. Options can be matched with controller requirements.",
    image: "/images/hero-pool-lights.png",
    gallery: [
      { src: "/images/hero-pool-lights.png", alt: "RGB pool light manufacturer main product image", label: "Main Image" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "RGB pool light lens and LED detail", label: "Detail Image" },
      { src: "/images/hero-pool-lights.png", alt: "color changing pool light installation effect", label: "Installation Effect" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "RGB LED pool lamp application scene", label: "Application Scene" }
    ],
    specs: [
      { label: "Material", value: "Stainless steel / PC / ABS by model" },
      { label: "Power", value: "12W / 18W / 24W / high power options" },
      { label: "Voltage", value: "12V AC/DC" },
      { label: "LED Type", value: "RGB SMD LED / RGBW LED" },
      { label: "IP Rating", value: "IP68 waterproof" },
      { label: "Color", value: "RGB / RGBW / remote control" },
      { label: "Beam Angle", value: "Wide beam for pool illumination" },
      { label: "Installation", value: "Wall mounted / recessed / surface mounted" }
    ],
    advantages: [
      "Color changing lighting for pool upgrade projects",
      "Remote control and controller matching options",
      "OEM support for distributor product lines",
      "Factory supply for repeat wholesale demand"
    ],
    applications: ["Villa Pool", "Hotel Pool", "SPA", "Water Park"],
    oem: "OEM requests can include color mode, controller matching, packaging, branding and market-specific voltage needs.",
    moq: "MOQ is flexible for qualified B2B buyers and depends on model, controller and packaging requirements.",
    faqs: [
      {
        question: "Can RGB pool lights work with remote control?",
        answer: "Yes. Remote control and controller options can be selected based on project requirements."
      },
      {
        question: "Can you customize color modes?",
        answer: "Customization can be reviewed depending on quantity, controller type and technical requirements."
      }
    ]
  },
  {
    slug: "fountain-light",
    name: "Fountain Light",
    shortName: "Fountain Light",
    title: "IP68 LED Fountain Light Manufacturer for Water Features",
    metaTitle: "LED Fountain Light Manufacturer | Underwater RGB Fountain Light",
    metaDescription:
      "China LED fountain light manufacturer supplying IP68 underwater fountain lights, RGB lighting and OEM support for water feature projects.",
    description:
      "Lanhe fountain lighting supports water feature contractors, landscape companies and engineering buyers that need underwater RGB lighting for fountains, water curtains and landscape projects.",
    image: "/images/hero-pool-lights.png",
    gallery: [
      { src: "/images/hero-pool-lights.png", alt: "LED fountain light manufacturer main product image", label: "Main Image" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "underwater fountain light stainless steel detail", label: "Detail Image" },
      { src: "/images/hero-pool-lights.png", alt: "fountain light installation effect", label: "Installation Effect" },
      { src: "/images/products/led-swimming-pool-light-detail.png", alt: "RGB fountain light water feature application", label: "Application Scene" }
    ],
    specs: [
      { label: "Material", value: "Stainless steel housing" },
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
