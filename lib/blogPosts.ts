export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  buyerStage: string;
  targetProducts: { label: string; href: string }[];
  targetApplications: { label: string; href: string }[];
  ctaProduct: string;
  introduction: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choose-swimming-pool-light-manufacturer-china",
    title: "How to Choose a Swimming Pool Light Manufacturer in China",
    metaTitle: "How to Choose a Swimming Pool Light Manufacturer in China",
    metaDescription:
      "A B2B buyer guide for importers, distributors and pool contractors choosing a swimming pool light manufacturer in China for IP68 LED pool lights and OEM projects.",
    primaryKeyword: "swimming pool light manufacturer China",
    secondaryKeywords: [
      "LED pool light factory",
      "pool light supplier China",
      "OEM pool light manufacturer",
      "IP68 underwater pool light supplier"
    ],
    searchIntent: "Commercial investigation with strong RFQ intent",
    buyerStage: "BOFU",
    targetProducts: [
      { label: "Swimming Pool Light Manufacturer", href: "/products/swimming-pool-light-manufacturer" },
      { label: "China LED Pool Light Supplier", href: "/products/china-led-pool-light-supplier" },
      { label: "OEM Pool Light Manufacturer", href: "/products/oem-pool-light-manufacturer" }
    ],
    targetApplications: [
      { label: "Hotel Swimming Pool Lighting", href: "/applications/hotel-pool-lighting" },
      { label: "Water Park Pool Lighting", href: "/applications/water-park-lighting" }
    ],
    ctaProduct: "LED Swimming Pool Light",
    introduction: [
      "Choosing a swimming pool light manufacturer in China is not only about asking for the lowest price. For importers, distributors, pool contractors and project buyers, the real question is whether the supplier can support waterproof reliability, stable production, OEM details and repeat orders.",
      "This guide explains what B2B buyers should confirm before sending an RFQ for LED swimming pool lights, underwater pool lights, RGB pool lights and custom pool lighting solutions."
    ],
    sections: [
      {
        id: "qualification",
        heading: "1. Check whether the supplier is a manufacturer or only a trader",
        paragraphs: [
          "A real manufacturer should be able to discuss product structure, IP68 waterproof design, material options, voltage requirements and installation details. If the supplier can only provide a price list without technical discussion, buyers should confirm the supply chain carefully.",
          "For long-term purchasing, ask how the factory supports model selection, sample confirmation, packaging, cable length and documentation before bulk orders."
        ],
        bullets: [
          "Ask whether OEM or ODM service is available.",
          "Confirm whether the supplier can support repeat wholesale orders.",
          "Request product specifications before comparing prices.",
          "Ask the manufacturer to confirm voltage, cable and control method for your market."
        ]
      },
      {
        id: "waterproof",
        heading: "2. Confirm IP68 waterproof design before discussing price",
        paragraphs: [
          "Pool lights work underwater, so waterproofing is a purchasing risk, not just a product feature. Buyers should review the sealing structure, cable outlet, lens, housing material and installation environment before confirming an order.",
          "If IP68 testing documents or inspection support are needed for your market, ask the manufacturer before ordering. Do not assume every low-voltage underwater light has the same waterproof performance."
        ]
      },
      {
        id: "specifications",
        heading: "3. Prepare project specifications for a useful quotation",
        table: {
          headers: ["Buyer information", "Why it matters"],
          rows: [
            ["Project type", "Hotel, villa, water park and distributor stock programs may need different models."],
            ["Voltage", "12V and 24V options depend on installation, cable distance and local requirements."],
            ["Color control", "White, RGB, RGBW and DMX512 options require different control planning."],
            ["Estimated quantity", "MOQ and pricing depend on model, customization and order quantity."],
            ["Destination country", "Packaging, labeling and documentation may vary by market."]
          ]
        }
      },
      {
        id: "oem",
        heading: "4. Review OEM and private label support",
        paragraphs: [
          "Importers and distributors often need custom logo, label, packaging, cable length, voltage, product manual or carton information. These details should be confirmed before bulk order, not after production starts.",
          "For private label programs, ask the manufacturer which items can be customized and which information depends on the selected model."
        ]
      },
      {
        id: "applications",
        heading: "5. Match products to real applications",
        paragraphs: [
          "A hotel pool, villa pool, public pool and water park do not always use the same light. Commercial projects may need stronger control planning, clearer installation drawings and more consistent batch supply.",
          "Before ordering, buyers should compare LED pool light options with the actual pool size, installation method, water depth, cable routing and control requirement."
        ]
      },
      {
        id: "rfq",
        heading: "6. What to include in your RFQ",
        bullets: [
          "Company type and target market",
          "Product type: LED pool light, underwater light, RGB light or OEM model",
          "Voltage: 12V, 24V or project-specific requirement",
          "Color: white, RGB, RGBW or DMX512 control",
          "Estimated quantity and delivery plan",
          "Application: hotel pool, villa pool, water park, SPA or distributor stock"
        ]
      }
    ],
    faqs: [
      {
        question: "What should importers check before choosing a pool light manufacturer in China?",
        answer:
          "Importers should confirm factory supply ability, IP68 waterproof design, voltage options, OEM support, packaging requirements, documentation and communication before comparing final prices."
      },
      {
        question: "Can a manufacturer support OEM pool light orders?",
        answer:
          "OEM support depends on the model and project requirement. Buyers should confirm logo, label, packaging, cable length, voltage and control method before ordering."
      },
      {
        question: "What information should I send for a pool light quotation?",
        answer:
          "Send product type, quantity, voltage, color option, application, destination country and any OEM requirements. The manufacturer can then recommend suitable models."
      }
    ]
  },
  {
    slug: "12v-vs-24v-pool-lights-commercial-projects",
    title: "12V vs 24V Pool Lights for Commercial Projects",
    metaTitle: "12V vs 24V Pool Lights for Commercial Projects",
    metaDescription:
      "Compare 12V and 24V LED pool lights for hotel pools, water parks and commercial projects. Learn what B2B buyers should confirm before ordering.",
    primaryKeyword: "12V vs 24V pool lights",
    secondaryKeywords: [
      "12V LED pool light",
      "24V swimming pool light",
      "low voltage pool light",
      "commercial pool lighting"
    ],
    searchIntent: "Commercial investigation for project specification",
    buyerStage: "MOFU / BOFU",
    targetProducts: [
      { label: "12V LED Pool Light", href: "/products/12v-led-pool-light" },
      { label: "24V Swimming Pool Light", href: "/products/24v-swimming-pool-light" },
      { label: "IP68 Underwater LED Pool Light", href: "/products/ip68-underwater-led-pool-light" }
    ],
    targetApplications: [
      { label: "Hotel Swimming Pool Lighting", href: "/applications/hotel-pool-lighting" },
      { label: "Water Park Pool Lighting", href: "/applications/water-park-lighting" }
    ],
    ctaProduct: "12V / 24V LED Pool Light",
    introduction: [
      "For commercial pool projects, the choice between 12V and 24V pool lights should not be made only by habit. Buyers need to confirm power supply, cable distance, installation method, controller compatibility and local project requirements before ordering.",
      "This guide helps pool contractors, hotel project buyers, distributors and engineering companies prepare a clearer RFQ for low-voltage LED pool lights."
    ],
    sections: [
      {
        id: "difference",
        heading: "1. The main difference between 12V and 24V pool lights",
        paragraphs: [
          "Both 12V and 24V pool lights are low-voltage options commonly used in swimming pool lighting. The better choice depends on the fixture model, installation distance, transformer or power supply design, control method and project environment.",
          "Before buying, confirm whether the selected light is designed for AC or DC input and whether the control system matches the voltage requirement."
        ]
      },
      {
        id: "selection",
        heading: "2. When buyers may consider 12V LED pool lights",
        bullets: [
          "Residential pool replacement projects",
          "Villa pools and SPA pools with compact installation",
          "Distributor stock programs where 12V is common in the target market",
          "Projects where the transformer and existing wiring are already designed for 12V"
        ]
      },
      {
        id: "commercial",
        heading: "3. When 24V pool lights may be suitable",
        bullets: [
          "Commercial pool projects with longer cable planning",
          "Hotel pools, public pools and water park areas",
          "Projects requiring centralized power supply or control cabinet planning",
          "Installations where the project engineer specifies 24V low-voltage lighting"
        ]
      },
      {
        id: "compare",
        heading: "4. B2B comparison checklist",
        table: {
          headers: ["Item", "What to confirm"],
          rows: [
            ["Voltage", "Confirm 12V or 24V according to power supply and project design."],
            ["AC/DC", "Ask the manufacturer whether the selected model supports AC, DC or both."],
            ["Cable distance", "Longer cable runs may require project-specific review."],
            ["RGB/RGBW control", "Controller compatibility must match voltage and wiring design."],
            ["DMX512", "Commercial RGB projects should confirm DMX protocol and address planning."],
            ["Waterproofing", "IP68 structure, cable seal and installation detail should be reviewed."]
          ]
        }
      },
      {
        id: "installation",
        heading: "5. Installation considerations for commercial projects",
        paragraphs: [
          "Commercial projects should review cable route, transformer location, junction treatment, mounting method and maintenance access before placing an order. For RGB, RGBW or DMX512 projects, control planning should be confirmed before production.",
          "If the buyer is not sure which voltage is suitable, send pool size, cable distance, installation drawings and control requirements to the manufacturer for recommendation."
        ]
      },
      {
        id: "rfq",
        heading: "6. RFQ information for 12V or 24V pool lights",
        bullets: [
          "Project type and destination country",
          "Pool size, water depth and installation method",
          "Required voltage or existing power supply",
          "Cable length and distance to transformer",
          "Color option: white, RGB, RGBW or DMX512",
          "Estimated quantity and delivery schedule"
        ]
      }
    ],
    faqs: [
      {
        question: "Are 12V pool lights better than 24V pool lights?",
        answer:
          "Not always. The better option depends on the project design, power supply, cable distance, control method and local installation requirement."
      },
      {
        question: "Can RGB pool lights use 12V or 24V?",
        answer:
          "Some RGB pool light models may support 12V or 24V options, but buyers should confirm the exact model, controller and wiring design before ordering."
      },
      {
        question: "What should contractors send before asking for a quotation?",
        answer:
          "Contractors should send project type, pool size, voltage requirement, cable length, control method, quantity and destination country."
      }
    ]
  }
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
