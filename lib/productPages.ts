export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductPage = {
  slug: string;
  name: string;
  shortName: string;
  keyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  buyingFocus: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  image: string;
  gallery: { src: string; alt: string; label: string }[];
  specs: ProductSpec[];
  advantages: string[];
  applications: string[];
  applicationSlugs: string[];
  keyFeatures: string[];
  availableOptions: string[];
  installation: string;
  oem: string;
  moq: string;
  certification: string;
  conversion?: {
    purchasingInfo: ProductSpec[];
    rfqChecklist: string[];
    oemCapabilities: string[];
    factoryTrust: { title: string; text: string }[];
    imagePlaceholders: { title: string; alt: string }[];
    midCta: string;
    bottomCta: string;
  };
  relatedSlugs: string[];
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

const pageStrategy: Record<
  string,
  {
    intent: string;
    focus: string;
    related: string[];
    secondary: string[];
    applicationSlugs: string[];
    installation: string;
  }
> = {
  "swimming-pool-light-manufacturer": {
    intent: "finding a long-term LED pool light manufacturer",
    focus: "factory qualification, production stability, OEM service, IP68 testing and export support",
    related: ["china-led-pool-light-supplier", "oem-pool-light-manufacturer", "ip68-underwater-led-pool-light"],
    secondary: ["LED pool light factory", "pool light supplier China", "wholesale swimming pool lights"],
    applicationSlugs: ["hotel-pool-lighting", "villa-pool-lighting", "water-park-lighting"],
    installation: "Confirm pool wall type, niche size or surface mounting method before selecting cable length, voltage and control system."
  },
  "ip68-underwater-led-pool-light": {
    intent: "sourcing waterproof underwater pool lights",
    focus: "IP68 waterproof structure, low-voltage safety, cable sealing and underwater installation reliability",
    related: ["12v-led-pool-light", "stainless-steel-pool-light", "underwater-fountain-light"],
    secondary: ["underwater pool light supplier", "IP68 LED pool lamp", "waterproof pool light"],
    applicationSlugs: ["hotel-pool-lighting", "villa-pool-lighting", "spa-pool-lighting"],
    installation: "Use low-voltage power supply, waterproof junction treatment and correct sealing around the cable outlet for underwater installation."
  },
  "rgb-swimming-pool-light": {
    intent: "buying color changing pool lights for projects",
    focus: "RGB/RGBW control, color effects, controller matching and hotel or villa pool applications",
    related: ["dmx512-pool-light", "custom-pool-lighting-solution", "12v-led-pool-light"],
    secondary: ["color changing pool light", "RGBW pool light", "remote control pool light"],
    applicationSlugs: ["hotel-pool-lighting", "villa-pool-lighting", "water-park-lighting"],
    installation: "Plan controller position, cable route and synchronization requirements before choosing RGB, RGBW or DMX control."
  },
  "12v-led-pool-light": {
    intent: "sourcing low-voltage LED pool lights",
    focus: "12V AC/DC options, safer pool installation, replacement demand and distributor stock planning",
    related: ["24v-swimming-pool-light", "ip68-underwater-led-pool-light", "rgb-swimming-pool-light"],
    secondary: ["low voltage pool light", "12V underwater LED light", "12V pool lamp"],
    applicationSlugs: ["villa-pool-lighting", "spa-pool-lighting", "hotel-pool-lighting"],
    installation: "Check transformer compatibility, cable distance and AC/DC requirement before replacing or specifying 12V pool lights."
  },
  "24v-swimming-pool-light": {
    intent: "sourcing 24V pool lights for commercial projects",
    focus: "24V project specification, stable performance, hotel pools, water parks and engineering supply",
    related: ["12v-led-pool-light", "dmx512-pool-light", "china-led-pool-light-supplier"],
    secondary: ["24V pool lamp", "commercial pool light", "24V underwater light"],
    applicationSlugs: ["hotel-pool-lighting", "water-park-lighting", "fountain-lighting"],
    installation: "For commercial pools, confirm voltage drop, cable length and control cabinet layout before mass order."
  },
  "stainless-steel-pool-light": {
    intent: "finding durable stainless steel pool lights",
    focus: "stainless steel housing, corrosion resistance, waterproof sealing and long-term underwater use",
    related: ["ip68-underwater-led-pool-light", "underwater-fountain-light", "fountain-led-light"],
    secondary: ["stainless steel underwater light", "durable pool lamp", "IP68 stainless steel light"],
    applicationSlugs: ["hotel-pool-lighting", "fountain-lighting", "villa-pool-lighting"],
    installation: "Confirm mounting screws, wall surface and water chemistry requirements when specifying stainless steel underwater lights."
  },
  "dmx512-pool-light": {
    intent: "buying programmable RGB pool lighting",
    focus: "DMX512 control, RGB/RGBW effects, synchronized project lighting and commercial pool applications",
    related: ["rgb-swimming-pool-light", "fountain-led-light", "custom-pool-lighting-solution"],
    secondary: ["DMX RGB pool light", "programmable pool light", "DMX512 underwater light"],
    applicationSlugs: ["hotel-pool-lighting", "water-park-lighting", "fountain-lighting"],
    installation: "DMX projects should confirm controller protocol, address planning, cable route and waterproof connection details before production."
  },
  "fountain-led-light": {
    intent: "sourcing fountain lights from a manufacturer",
    focus: "IP68 underwater fountain use, RGB/DMX options, stainless steel body and engineering cooperation",
    related: ["underwater-fountain-light", "waterfall-led-light", "dmx512-pool-light"],
    secondary: ["fountain light manufacturer", "RGB fountain light", "DMX fountain lighting"],
    applicationSlugs: ["fountain-lighting", "hotel-pool-lighting", "water-park-lighting"],
    installation: "Fountain projects should define nozzle position, water depth, cable outlet and control system before selecting fixture power."
  },
  "waterfall-led-light": {
    intent: "finding LED lighting for pool waterfalls",
    focus: "waterfall, spillway and water curtain applications with waterproof LED lighting effects",
    related: ["fountain-led-light", "underwater-fountain-light", "pond-led-underwater-light"],
    secondary: ["pool waterfall light", "spillway LED light", "water curtain light"],
    applicationSlugs: ["fountain-lighting", "villa-pool-lighting", "hotel-pool-lighting"],
    installation: "Check spillway width, water flow direction and mounting space so the beam angle can match the waterfall effect."
  },
  "spa-pool-light": {
    intent: "buying compact lights for SPA pools",
    focus: "compact size, low-voltage lighting, IP68 sealing and replacement demand for SPA and small pools",
    related: ["12v-led-pool-light", "ip68-underwater-led-pool-light", "custom-pool-lighting-solution"],
    secondary: ["compact underwater light", "SPA LED light", "small pool light"],
    applicationSlugs: ["spa-pool-lighting", "villa-pool-lighting", "hotel-pool-lighting"],
    installation: "SPA lighting should confirm compact mounting size, low-voltage power supply and replacement compatibility."
  },
  "underwater-fountain-light": {
    intent: "sourcing underwater lights for fountains",
    focus: "submerged installation, RGB control, waterproof cable sealing and landscape project demand",
    related: ["fountain-led-light", "dmx512-pool-light", "pond-led-underwater-light"],
    secondary: ["submersible fountain light", "IP68 fountain lamp", "underwater RGB fountain light"],
    applicationSlugs: ["fountain-lighting", "water-park-lighting", "hotel-pool-lighting"],
    installation: "Submerged fountain lights need waterproof cable routing, stable mounting and suitable beam angle for water movement."
  },
  "pond-led-underwater-light": {
    intent: "buying underwater lights for ponds and landscapes",
    focus: "garden pond lighting, landscape water features, IP68 sealing and outdoor project use",
    related: ["underwater-fountain-light", "waterfall-led-light", "fountain-led-light"],
    secondary: ["pond underwater light", "garden pond LED light", "landscape underwater light"],
    applicationSlugs: ["fountain-lighting", "villa-pool-lighting", "spa-pool-lighting"],
    installation: "For ponds and outdoor water features, confirm water depth, cable protection and mounting base before choosing light power."
  },
  "oem-pool-light-manufacturer": {
    intent: "finding an OEM pool light factory",
    focus: "private label, custom packaging, voltage customization, logo service and repeat wholesale supply",
    related: ["custom-pool-lighting-solution", "swimming-pool-light-manufacturer", "china-led-pool-light-supplier"],
    secondary: ["private label pool light", "OEM LED pool lamp", "ODM pool light factory"],
    applicationSlugs: ["hotel-pool-lighting", "villa-pool-lighting", "water-park-lighting"],
    installation: "OEM projects should confirm target market standards, packaging language, cable specification and installation accessories."
  },
  "china-led-pool-light-supplier": {
    intent: "finding a China LED pool light supplier",
    focus: "factory direct supply, export packing, distributor support, bulk order planning and global shipping",
    related: ["swimming-pool-light-manufacturer", "oem-pool-light-manufacturer", "12v-led-pool-light"],
    secondary: ["LED pool light supplier China", "pool light wholesale", "China pool light factory"],
    applicationSlugs: ["hotel-pool-lighting", "villa-pool-lighting", "spa-pool-lighting"],
    installation: "For supply programs, confirm model mix, packaging, spare parts, market voltage and delivery schedule before bulk order."
  },
  "custom-pool-lighting-solution": {
    intent: "requesting a custom pool lighting solution",
    focus: "project specification, OEM/ODM customization, RGB/RGBW control, voltage and cable requirements",
    related: ["oem-pool-light-manufacturer", "rgb-swimming-pool-light", "dmx512-pool-light"],
    secondary: ["custom pool lighting", "project pool lighting solution", "OEM swimming pool light"],
    applicationSlugs: ["hotel-pool-lighting", "water-park-lighting", "fountain-lighting"],
    installation: "Custom projects should provide drawings, water depth, voltage, control mode and installation environment for technical review."
  }
};

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

function advantagesFor(name: string, keyword: string) {
  return [
    `Factory direct support for ${keyword} bulk orders`,
    `IP68 waterproof design for ${name} project use`,
    "OEM/ODM service for logo, packaging, voltage and cable requirements",
    "B2B quotation support for distributors, contractors and importers"
  ];
}

function keyFeaturesFor(product: (typeof productSeed)[number]) {
  return [
    `${product.name} designed for B2B procurement and project specification`,
    "IP68 waterproof design direction for pool and underwater environments",
    "12V / 24V, RGB / RGBW and DMX512 options depending on project demand",
    "Factory support for MOQ planning, OEM/ODM customization and bulk orders"
  ];
}

function optionsFor(product: (typeof productSeed)[number]) {
  return [
    `Voltage options for ${product.keyword}: 12V, 24V or project-specific low-voltage requirements`,
    "Color options: white, warm white, RGB, RGBW and DMX512 control by model",
    "Material options: stainless steel, ABS or PC housing according to application",
    "OEM options: logo, packaging, cable length, connector, label and specification sheet"
  ];
}

const sharedPurchasingInfo: ProductSpec[] = [
  { label: "MOQ", value: "Confirm by product model, quantity and customization level" },
  { label: "Lead Time", value: "Confirm by quantity, product model, packaging and OEM requirement" },
  { label: "Packaging", value: "Standard export carton or OEM packaging by requirement" },
  { label: "Payment Terms", value: "Confirm before order according to quotation and order details" },
  { label: "Shipping Support", value: "Export packing and shipping support by destination country" }
];

const sharedFactoryTrust = [
  {
    title: "Manufacturer Background",
    text: "Lanhe Pool Lighting supports overseas distributors, contractors, importers and project buyers with LED pool light and underwater lighting supply."
  },
  {
    title: "Quality Control Process",
    text: "Quality review can cover material, lighting performance, waterproof structure, cable details and packing before shipment."
  },
  {
    title: "Testing Capability",
    text: "Testing support can be discussed for waterproof reliability, electrical performance and product consistency by selected model."
  },
  {
    title: "Certifications",
    text: "Certification and document support should be confirmed by product model before bulk order or market submission."
  }
];

const conversionModules: Record<string, NonNullable<ProductPage["conversion"]>> = {
  "swimming-pool-light-manufacturer": {
    purchasingInfo: sharedPurchasingInfo,
    rfqChecklist: [
      "Product Model or product category",
      "Quantity for trial order, project order or wholesale supply",
      "Application such as hotel pool, villa pool, water park or distributor stock",
      "Voltage requirement: 12V, 24V or project-specific low voltage",
      "Destination Country and expected delivery schedule",
      "OEM requirement for logo, cable, label or packaging"
    ],
    oemCapabilities: [
      "Logo customization for distributor and private-label supply",
      "Packaging customization for export cartons, labels and market requirements",
      "Specification customization including voltage, cable length and color-control options by model",
      "Private label support for importers and long-term wholesale buyers"
    ],
    factoryTrust: sharedFactoryTrust,
    imagePlaceholders: [
      { title: "Factory Photo", alt: "Factory production line of LED pool lights" },
      { title: "Quality Control", alt: "Quality control process for LED swimming pool lights" },
      { title: "Waterproof Test", alt: "IP68 waterproof test for underwater pool light" },
      { title: "Export Packaging", alt: "Export packaging for LED pool light wholesale order" }
    ],
    midCta: "Send Product Requirements",
    bottomCta: "Ask for Product Catalog and Factory Quote"
  },
  "rgb-swimming-pool-light": {
    purchasingInfo: sharedPurchasingInfo,
    rfqChecklist: [
      "Product Model or RGB/RGBW pool light category",
      "Quantity for project or distributor stock",
      "Application such as hotel pool, villa pool, SPA or water park",
      "Voltage requirement: 12V, 24V or project-specific low voltage",
      "Destination Country and target market",
      "Control method: remote control, RGB/RGBW controller or DMX512 if required"
    ],
    oemCapabilities: [
      "Logo customization for RGB pool light distributor programs",
      "Packaging customization for retail, wholesale or project supply",
      "Specification customization including RGB/RGBW, voltage, cable and control method by model",
      "Private label support for color-changing pool light importers"
    ],
    factoryTrust: sharedFactoryTrust,
    imagePlaceholders: [
      { title: "RGB Product Detail", alt: "RGB swimming pool light product detail" },
      { title: "RGB/RGBW Effect", alt: "RGBW swimming pool light color changing effect" },
      { title: "Controller", alt: "RGB pool light controller and remote control" },
      { title: "Packaging", alt: "Packaging for RGB swimming pool light bulk order" }
    ],
    midCta: "Send Color Control Requirement",
    bottomCta: "Get RGB Pool Light Factory Quote"
  },
  "oem-pool-light-manufacturer": {
    purchasingInfo: sharedPurchasingInfo,
    rfqChecklist: [
      "Product Model or OEM pool light category",
      "Quantity for sample, trial order or bulk order",
      "Application or sales channel such as distributor line, hotel project or wholesale program",
      "Voltage requirement and installation requirement",
      "Destination Country and target market",
      "Logo, packaging, cable or specification customization requirement"
    ],
    oemCapabilities: [
      "Logo customization for private-label pool light buyers",
      "Packaging customization including label, carton mark and product information by requirement",
      "Specification customization including voltage, cable length, color option and control method by model",
      "Private label support for importers, distributors and repeat wholesale programs"
    ],
    factoryTrust: sharedFactoryTrust,
    imagePlaceholders: [
      { title: "OEM Product Range", alt: "OEM LED pool light product range for private label buyers" },
      { title: "Logo Customization", alt: "Logo customization for OEM swimming pool light" },
      { title: "OEM Packaging", alt: "OEM packaging for private label pool light order" },
      { title: "Factory QC", alt: "Quality control for OEM LED pool light manufacturing" }
    ],
    midCta: "Send OEM Requirement",
    bottomCta: "Ask for Private Label Support"
  }
};

export const productPages: ProductPage[] = productSeed.map((product) => ({
  slug: product.slug,
  name: product.name,
  shortName: product.name,
  keyword: product.keyword,
  secondaryKeywords: pageStrategy[product.slug].secondary,
  searchIntent: pageStrategy[product.slug].intent,
  buyingFocus: pageStrategy[product.slug].focus,
  title: product.title,
  metaTitle: product.title,
  metaDescription: product.description,
  description: product.description,
  image: mainImage,
  gallery: galleryFor(product.keyword),
  specs: specsWith(product.specOverrides),
  advantages: advantagesFor(product.name, product.keyword),
  applications: product.applications,
  applicationSlugs: pageStrategy[product.slug].applicationSlugs,
  keyFeatures: keyFeaturesFor(product),
  availableOptions: optionsFor(product),
  installation: pageStrategy[product.slug].installation,
  oem:
    "OEM and ODM support is available for logo, cable length, voltage, color control, product labeling, export packaging and distributor product lines.",
  moq:
    "MOQ depends on model and customization level. Trial orders and project quantity quotations can be discussed with qualified B2B buyers.",
  certification: defaultCertification,
  conversion: conversionModules[product.slug],
  relatedSlugs: pageStrategy[product.slug].related,
  faqs: [
    {
      question: `Can Lanhe supply ${product.name} for overseas B2B buyers?`,
      answer:
        `Yes. We support distributors, importers, pool contractors, engineering companies and project buyers looking for ${product.keyword} with factory direct supply.`
    },
    {
      question: `What should buyers confirm before requesting ${product.name} pricing?`,
      answer:
        `Please confirm quantity, voltage, installation method, color option, application and target market so we can recommend the right ${product.name} specification.`
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
