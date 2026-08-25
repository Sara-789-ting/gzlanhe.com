export type ProductCatalogCategory = {
  title: string;
  subtitle: string;
  buyerIntent: string;
  productSlugs: string[];
};

export const productCatalogCategories: ProductCatalogCategory[] = [
  {
    title: "LED Pool Lights",
    subtitle: "Core pool light models for distributors, contractors and pool builders.",
    buyerIntent: "Best for buyers comparing pool lamp type, voltage, material and installation method.",
    productSlugs: [
      "ip68-underwater-led-pool-light",
      "rgb-swimming-pool-light",
      "12v-led-pool-light",
      "24v-swimming-pool-light",
      "stainless-steel-pool-light",
      "spa-pool-light"
    ]
  },
  {
    title: "Underwater & Fountain Lights",
    subtitle: "IP68 lighting for fountains, ponds, waterfalls and landscape water features.",
    buyerIntent: "Best for project buyers who need waterproof fixtures for water feature applications.",
    productSlugs: [
      "fountain-led-light",
      "underwater-fountain-light",
      "waterfall-led-light",
      "pond-led-underwater-light"
    ]
  },
  {
    title: "RGB / DMX Control Solutions",
    subtitle: "Color-changing pool and fountain lighting for commercial projects.",
    buyerIntent: "Best for hotels, resorts, water parks and contractors requiring synchronized color control.",
    productSlugs: [
      "rgb-swimming-pool-light",
      "dmx512-pool-light",
      "custom-pool-lighting-solution"
    ]
  },
  {
    title: "OEM / Supplier Programs",
    subtitle: "Factory supply pages for importers, distributors and private label buyers.",
    buyerIntent: "Best for long-term purchasing teams comparing manufacturer capability and OEM support.",
    productSlugs: [
      "swimming-pool-light-manufacturer",
      "oem-pool-light-manufacturer",
      "china-led-pool-light-supplier",
      "custom-pool-lighting-solution"
    ]
  }
];

export const catalogSupportItems = [
  {
    title: "Pool Light Controllers",
    text: "RGB, RGBW, synchronization and DMX512 control options can be matched by product model and project requirement.",
    status: "Catalog details to be expanded"
  },
  {
    title: "Power Supply & Transformers",
    text: "Low-voltage pool lighting projects should confirm transformer type, voltage, cable distance and installation environment.",
    status: "Specification sheets needed"
  },
  {
    title: "Housings, Cables & Accessories",
    text: "Accessories such as housing, waterproof cable, connector and installation parts should be confirmed before quotation.",
    status: "Accessory photos needed"
  }
];
