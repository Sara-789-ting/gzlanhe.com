export type SolutionPage = {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  applications: string[];
  advantages: string[];
  oem: string;
  faqs: { question: string; answer: string }[];
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "led-pool-light-manufacturer",
    title: "LED Pool Light Manufacturer in China | Factory Direct Supply",
    h1: "LED Pool Light Manufacturer in China",
    metaDescription:
      "GZLANHE is a China LED pool light manufacturer offering factory direct supply, OEM service, quality control and export support for global B2B buyers.",
    keywords: [
      "LED Pool Light Manufacturer",
      "LED Swimming Pool Light Factory",
      "Pool Light Supplier China"
    ],
    intro:
      "GZLANHE manufactures LED swimming pool lights for distributors, contractors, importers and project buyers who need factory direct supply and long-term cooperation.",
    applications: ["Residential Swimming Pool", "Hotel Pool", "Villa Pool", "Commercial Pool"],
    advantages: [
      "Manufacturer capability for LED pool light production",
      "Factory production support for repeat orders",
      "OEM service for distributors and importers",
      "Quality control focused on waterproof lighting",
      "Export experience for overseas B2B buyers"
    ],
    oem:
      "OEM support can cover logo, packaging, voltage, cable length, color control and market-specific product requirements.",
    faqs: [
      {
        question: "Are you a LED pool light manufacturer?",
        answer: "Yes. GZLANHE focuses on LED pool lights, underwater lights and custom lighting solutions for B2B customers."
      },
      {
        question: "Can you support factory direct supply?",
        answer: "Yes. We support distributors, importers and project buyers with factory direct supply and quotation support."
      }
    ]
  },
  {
    slug: "ip68-underwater-pool-light",
    title: "IP68 Underwater Pool Light Manufacturer | Waterproof LED Lighting",
    h1: "IP68 Underwater Pool Light Manufacturer",
    metaDescription:
      "IP68 underwater pool light manufacturer supplying waterproof LED lighting, underwater LED lamps and OEM pool lighting solutions.",
    keywords: ["IP68 Underwater Light", "Waterproof Pool Light", "Underwater LED Lamp"],
    intro:
      "Our IP68 underwater pool light solutions are built for pool contractors, commercial pool projects and distributors that need reliable waterproof LED lighting.",
    applications: ["Swimming Pool", "SPA", "Hotel Pool", "Water Feature"],
    advantages: [
      "IP68 waterproof lighting focus",
      "Low-voltage underwater LED lamp options",
      "Suitable for new build and replacement projects",
      "Technical specification support before quotation"
    ],
    oem:
      "Custom options can include material, voltage, wattage, color temperature, RGB control and packaging requirements.",
    faqs: [
      {
        question: "What does IP68 mean for pool lights?",
        answer: "IP68 means the product is designed for underwater waterproof applications when installed according to product specifications."
      },
      {
        question: "Can you provide waterproof pool light specifications?",
        answer: "Yes. We can prepare model specifications after confirming the application, voltage and quantity."
      }
    ]
  },
  {
    slug: "rgb-pool-light",
    title: "RGB Pool Light Manufacturer | Color Changing LED Pool Lighting",
    h1: "RGB Pool Light Manufacturer",
    metaDescription:
      "RGB pool light manufacturer supplying color changing LED pool lighting, LED pool lamps and OEM RGB lighting solutions for pool projects.",
    keywords: ["RGB Pool Light", "Color Changing Pool Light", "LED Pool Lamp"],
    intro:
      "RGB pool lights help pool builders and lighting distributors offer color-changing upgrade options for villa pools, hotel pools and renovation projects.",
    applications: ["Villa Pool", "Hotel Pool", "SPA Pool", "Water Park"],
    advantages: [
      "RGB and RGBW color changing options",
      "Remote control and controller matching support",
      "Factory supply for LED pool lamp buyers",
      "OEM packaging and private label support"
    ],
    oem:
      "OEM customization can include color mode, remote control, controller matching, cable, label and packaging.",
    faqs: [
      {
        question: "Do you manufacture color changing pool lights?",
        answer: "Yes. RGB and RGBW color changing pool light options are available for B2B project and distributor needs."
      },
      {
        question: "Can RGB pool lights be customized?",
        answer: "Customization can be reviewed based on controller type, quantity, application and technical requirements."
      }
    ]
  },
  {
    slug: "oem-pool-light",
    title: "OEM Pool Light Manufacturer China | Custom LED Lighting Solution",
    h1: "OEM Pool Light Manufacturer China",
    metaDescription:
      "OEM pool light manufacturer in China supporting custom pool lighting, private label pool lights and LED lighting solutions for distributors.",
    keywords: ["OEM Pool Light", "Custom Pool Lighting", "Private Label Pool Light"],
    intro:
      "GZLANHE supports OEM pool light programs for importers, wholesalers and lighting distributors who need private label products and custom specifications.",
    applications: ["Distributor Product Line", "Private Label Program", "Wholesale Pool Lighting", "Project Supply"],
    advantages: [
      "Private label pool light support",
      "Custom packaging and logo options",
      "Flexible model selection for market needs",
      "Factory communication for long-term supply"
    ],
    oem:
      "OEM and ODM support can cover product appearance, technical requirements, label, packaging, installation accessories and export cartons.",
    faqs: [
      {
        question: "Can you make private label pool lights?",
        answer: "Yes. Private label and OEM packaging can be discussed for qualified B2B buyers."
      },
      {
        question: "What information is needed for OEM quotation?",
        answer: "Please share model type, quantity, voltage, color, package requirements and target market."
      }
    ]
  },
  {
    slug: "hotel-pool-lighting",
    title: "Hotel Pool Lighting Solutions | LED Pool Light Supplier",
    h1: "Hotel Pool Lighting Solutions",
    metaDescription:
      "LED pool light supplier for hotel pool lighting, commercial pool lighting and swimming pool project lighting with OEM support.",
    keywords: ["Hotel Pool Light", "Commercial Pool Lighting", "Swimming Pool Project Lighting"],
    intro:
      "Hotel pool lighting requires reliable waterproof products, clean visual effect and stable project supply. GZLANHE supports contractors and project buyers with LED pool lighting options.",
    applications: ["Hotel Pool", "Commercial Pool", "Resort Pool", "Swimming Pool Project"],
    advantages: [
      "Lighting options for commercial pool projects",
      "IP68 waterproof product direction",
      "Project quotation support",
      "OEM and packing support for contractors"
    ],
    oem:
      "Project customization can include voltage, color temperature, RGB control, beam preference, cable length and packing requirements.",
    faqs: [
      {
        question: "Can you support hotel pool lighting projects?",
        answer: "Yes. We can review project requirements and recommend LED pool lighting options for hotel and commercial pools."
      },
      {
        question: "Can you quote commercial pool lighting quantities?",
        answer: "Yes. Please provide quantity, application, voltage and product type so we can prepare a factory quotation."
      }
    ]
  }
];

export function getSolutionBySlug(slug: string) {
  return solutionPages.find((page) => page.slug === slug);
}
