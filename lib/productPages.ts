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
  certification: string;
  faqs: { question: string; answer: string }[];
};

const mainImage = "/images/hero-pool-lights.png";
const detailImage = "/images/products/led-swimming-pool-light-detail.png";

const baseSpecs: ProductSpec[] = [
  { label: "Material", value: "Stainless steel / PC / ABS options" },
  { label: "Power", value: "3W / 6W / 9W / 12W / 18W / 24W / custom" },
  { label: "Voltage", value: "12V / 24V low-voltage options" },
  { label: "LED Type", value: "SMD LED / RGB LED / RGBW LED options" },
  { label: "IP Rating", value: "IP68 waterproof" },
  { label: "Color", value: "White / warm white / RGB / RGBW / DMX options" },
  { label: "Beam Angle", value: "30 / 45 / 60 / 90 degree options" },
  { label: "Installation", value: "Surface mounted / recessed / wall mounted / submersible" }
];

const baseAdvantages = [
  "Factory direct supply for distributors, importers and project buyers",
  "IP68 waterproof structure for swimming pool and underwater environments",
  "OEM/ODM support for logo, packaging and product specification",
  "Technical communication before quotation for B2B purchasing teams"
];

const defaultCertification =
  "Certification support can include CE, RoHS, IP68 waterproof testing and quality inspection documents for overseas purchasing review.";

const productSeed = [
  {
    slug: "swimming-pool-light-manufacturer",
    keyword: "swimming pool light manufacturer",
    name: "Swimming Pool Light Manufacturer",
    title: "Swimming Pool Light Manufacturer in China",
    description:
      "Lanhe Pool Lighting is a swimming pool light manufacturer in China supplying IP68 waterproof LED pool lights for contractors, distributors, importers and commercial pool projects.",
    applications: ["Swimming Pool", "Hotel Pool", "Villa Pool", "Water Park"],
    specOverrides: [{ label: "Product Range", value: "LED pool light / RGB pool light / underwater pool lamp" }]
  },
  {
    slug: "ip68-underwater-led-pool-light",
    keyword: "IP68 underwater LED pool light",
    name: "IP68 Underwater LED Pool Light",
    title: "IP68 Underwater LED Pool Light Supplier",
    description:
      "IP68 underwater LED pool lights are designed for pool walls, underwater installation and replacement lighting projects where waterproof reliability matters.",
    applications: ["Commercial Pool", "Residential Pool", "Hotel Pool", "SPA"],
    specOverrides: [{ label: "Waterproof Design", value: "IP68 sealing structure for underwater use" }]
  },
  {
    slug: "rgb-swimming-pool-light",
    keyword: "RGB swimming pool light",
    name: "RGB Swimming Pool Light",
    title: "RGB Swimming Pool Light Manufacturer",
    description:
      "RGB swimming pool lights support color changing pool projects for hotels, villas, SPA pools and water parks with OEM options for distributors.",
    applications: ["Hotel Pool", "Villa Pool", "SPA", "Water Park"],
    specOverrides: [{ label: "Color Control", value: "RGB / RGBW / remote control / controller options" }]
  },
  {
    slug: "12v-led-pool-light",
    keyword: "12V LED pool light",
    name: "12V LED Pool Light",
    title: "12V LED Pool Light for Low Voltage Pool Projects",
    description:
      "12V LED pool lights are low-voltage lighting options for pool contractors and distributors that need safer pool lighting supply for residential and commercial pools.",
    applications: ["Residential Pool", "Commercial Pool", "Villa Pool", "Hotel Pool"],
    specOverrides: [{ label: "Voltage", value: "12V AC/DC low-voltage options" }]
  },
  {
    slug: "24v-swimming-pool-light",
    keyword: "24V swimming pool light",
    name: "24V Swimming Pool Light",
    title: "24V Swimming Pool Light for Commercial Projects",
    description:
      "24V swimming pool lights support commercial pool and engineering projects where buyers need low-voltage LED lighting with stable factory supply.",
    applications: ["Commercial Pool", "Hotel Pool", "Water Park", "Public Pool"],
    specOverrides: [{ label: "Voltage", value: "24V low-voltage project options" }]
  },
  {
    slug: "stainless-steel-pool-light",
    keyword: "stainless steel pool light",
    name: "Stainless Steel Pool Light",
    title: "Stainless Steel Pool Light Manufacturer",
    description:
      "Stainless steel pool lights are built for underwater pool lighting buyers who need durable housing, clean appearance and IP68 waterproof performance.",
    applications: ["Swimming Pool", "Hotel Pool", "Villa Pool", "Commercial Pool"],
    specOverrides: [{ label: "Material", value: "Stainless steel housing with waterproof sealing" }]
  },
  {
    slug: "dmx512-pool-light",
    keyword: "DMX512 pool light",
    name: "DMX512 Pool Light",
    title: "DMX512 Pool Light for RGB Lighting Projects",
    description:
      "DMX512 pool lights are suitable for RGB pool lighting projects, commercial pools and water feature installations that require programmable lighting control.",
    applications: ["Hotel Pool", "Water Park", "Commercial Pool", "Project Lighting"],
    specOverrides: [{ label: "Control Method", value: "DMX512 / RGB controller options" }]
  },
  {
    slug: "fountain-led-light",
    keyword: "fountain LED light",
    name: "Fountain LED Light",
    title: "Fountain LED Light Manufacturer",
    description:
      "Fountain LED lights support water feature contractors, landscape companies and engineering buyers that need IP68 underwater RGB or DMX lighting.",
    applications: ["Water Fountain", "Landscape Water Feature", "Hotel Project", "Public Plaza"],
    specOverrides: [{ label: "Installation", value: "Submersible / recessed / project mounting" }]
  },
  {
    slug: "waterfall-led-light",
    keyword: "waterfall LED light",
    name: "Waterfall LED Light",
    title: "Waterfall LED Light for Pool Water Features",
    description:
      "Waterfall LED lights are used for swimming pool waterfalls, spillways and water feature projects requiring waterproof LED lighting effects.",
    applications: ["Pool Waterfall", "Water Feature", "Hotel Pool", "Villa Project"],
    specOverrides: [{ label: "Application", value: "Pool waterfall / spillway / water curtain lighting" }]
  },
  {
    slug: "spa-pool-light",
    keyword: "SPA pool light",
    name: "SPA Pool Light",
    title: "SPA Pool Light Supplier for Compact Underwater Lighting",
    description:
      "SPA pool lights are compact IP68 underwater LED lights for SPA pools, small pools, villa pools and replacement lighting buyers.",
    applications: ["SPA", "Villa Pool", "Small Pool", "Hotel Pool"],
    specOverrides: [{ label: "Power", value: "3W / 6W / 9W compact options" }]
  },
  {
    slug: "underwater-fountain-light",
    keyword: "underwater fountain light",
    name: "Underwater Fountain Light",
    title: "Underwater Fountain Light Supplier",
    description:
      "Underwater fountain lights are designed for submerged water feature lighting, RGB fountain projects and landscape engineering applications.",
    applications: ["Fountain", "Water Feature", "Landscape Project", "Public Plaza"],
    specOverrides: [{ label: "IP Rating", value: "IP68 underwater fountain lighting design" }]
  },
  {
    slug: "pond-led-underwater-light",
    keyword: "pond LED underwater light",
    name: "Pond LED Underwater Light",
    title: "Pond LED Underwater Light for Landscape Projects",
    description:
      "Pond LED underwater lights are used for garden ponds, landscape water features and outdoor water projects requiring IP68 waterproof lighting.",
    applications: ["Garden Pond", "Landscape Water Feature", "Outdoor Project", "Villa Garden"],
    specOverrides: [{ label: "Application", value: "Pond / garden water feature / landscape lighting" }]
  },
  {
    slug: "oem-pool-light-manufacturer",
    keyword: "OEM pool light manufacturer",
    name: "OEM Pool Light Manufacturer",
    title: "OEM Pool Light Manufacturer for Private Label Buyers",
    description:
      "Lanhe Pool Lighting supports OEM pool light manufacturing for distributors, importers and private label buyers needing custom logo, packaging and specifications.",
    applications: ["Distributor Product Line", "Private Label", "Wholesale Program", "Project Supply"],
    specOverrides: [{ label: "OEM Support", value: "Logo / packaging / cable / voltage / color control customization" }]
  },
  {
    slug: "china-led-pool-light-supplier",
    keyword: "China LED pool light supplier",
    name: "China LED Pool Light Supplier",
    title: "China LED Pool Light Supplier for Global B2B Buyers",
    description:
      "China LED pool light supplier for overseas distributors, pool contractors, importers and engineering companies sourcing IP68 LED pool lights.",
    applications: ["Distributor Supply", "Importer Program", "Pool Builder Project", "Wholesale Buyer"],
    specOverrides: [{ label: "Supply Type", value: "Factory direct B2B supply and export packing" }]
  },
  {
    slug: "custom-pool-lighting-solution",
    keyword: "custom swimming pool lighting solution",
    name: "Custom Swimming Pool Lighting Solution",
    title: "Custom Swimming Pool Lighting Solution for Projects",
    description:
      "Custom swimming pool lighting solutions support project buyers who need tailored LED pool lights, underwater lights, RGB control and OEM requirements.",
    applications: ["Hotel Pool Project", "Villa Pool", "Water Park", "Engineering Project"],
    specOverrides: [{ label: "Customization", value: "Voltage / power / cable length / beam angle / RGB control / packaging" }]
  }
];

function specsWith(overrides: ProductSpec[]) {
  const labels = new Set(overrides.map((item) => item.label));
  return [...overrides, ...baseSpecs.filter((item) => !labels.has(item.label))];
}

function galleryFor(keyword: string) {
  const alt = `IP68 waterproof RGB swimming pool LED light manufacturer for ${keyword}`;
  return [
    { src: mainImage, alt, label: "Main Image" },
    { src: detailImage, alt: `${alt} product detail`, label: "Detail Image" },
    { src: mainImage, alt: `${alt} installation effect`, label: "Installation Effect" },
    { src: detailImage, alt: `${alt} application scene`, label: "Application Scene" }
  ];
}

export const productPages: ProductPage[] = productSeed.map((product) => ({
  slug: product.slug,
  name: product.name,
  shortName: product.name,
  title: product.title,
  metaTitle: product.title,
  metaDescription: product.description,
  description: product.description,
  image: mainImage,
  gallery: galleryFor(product.keyword),
  specs: specsWith(product.specOverrides),
  advantages: baseAdvantages,
  applications: product.applications,
  oem:
    "OEM and ODM support is available for logo, cable length, voltage, color control, product labeling, export packaging and distributor product lines.",
  moq:
    "MOQ depends on model and customization level. Trial orders and project quantity quotations can be discussed with qualified B2B buyers.",
  certification: defaultCertification,
  faqs: [
    {
      question: `Can Lanhe supply ${product.name} for overseas B2B buyers?`,
      answer:
        "Yes. We support distributors, importers, pool contractors, engineering companies and project buyers with factory direct supply."
    },
    {
      question: "Can you provide OEM or private label service?",
      answer:
        "Yes. OEM service can include logo, packaging, cable length, voltage, color control and documentation support."
    },
    {
      question: "How can I get a quotation?",
      answer:
        "Please send product type, quantity, voltage, application and target market. Our sales team will reply with suitable product options."
    }
  ]
}));

export function getProductBySlug(slug: string) {
  return productPages.find((product) => product.slug === slug);
}
