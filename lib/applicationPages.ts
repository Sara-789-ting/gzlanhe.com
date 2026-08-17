import { getProductBySlug } from "@/lib/productPages";

export type ApplicationPage = {
  slug: string;
  title: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  recommendedSolutions: string[];
  recommendedProductSlugs: string[];
  waterproofRequirements: string;
  voltageOptions: string;
  controlOptions: string;
  installationConsiderations: string[];
  customization: string;
  conversion?: {
    projectOverview: string;
    suitableScenes: string[];
    requirementChecklist: string[];
    recommendedProductSlugs: string[];
    imagePlaceholders: { title: string; alt: string }[];
    topCta: string;
    midCta: string;
    bottomCta: string;
  };
  faqs: { question: string; answer: string }[];
};

export const applicationPages: ApplicationPage[] = [
  {
    slug: "hotel-pool-lighting",
    title: "Hotel Swimming Pool Lighting",
    keyword: "hotel swimming pool lighting",
    metaTitle: "Hotel Swimming Pool Lighting Solution | IP68 LED Pool Lights",
    metaDescription:
      "Hotel swimming pool lighting solution for contractors and project buyers, covering IP68 LED pool lights, RGB/RGBW options, 12V/24V voltage and OEM support.",
    introduction:
      "Hotel pool projects need reliable underwater lighting, clean visual effects and stable supply for renovation or new construction. Lanhe Pool Lighting supports hotel contractors, lighting distributors and project procurement teams with B2B pool lighting solutions.",
    recommendedSolutions: [
      "IP68 underwater LED pool lights for main pool illumination",
      "RGB/RGBW swimming pool lights for hotel atmosphere and guest experience",
      "DMX512 lighting control for synchronized commercial pool projects"
    ],
    recommendedProductSlugs: ["swimming-pool-light-manufacturer", "ip68-underwater-led-pool-light", "rgb-swimming-pool-light", "dmx512-pool-light"],
    waterproofRequirements:
      "Hotel pool lights should use IP68 waterproof construction, reliable cable sealing and low-voltage power design for long-term underwater operation.",
    voltageOptions:
      "12V and 24V options can be selected according to project design, cable distance and local electrical requirements.",
    controlOptions:
      "White, warm white, RGB, RGBW and DMX512 control options can be reviewed according to hotel lighting scenes.",
    installationConsiderations: [
      "Confirm pool wall type, niche size and cable route before quotation",
      "Plan transformer or control cabinet position before installation",
      "Confirm maintenance access for future replacement or service"
    ],
    customization:
      "OEM/project customization can include cable length, control mode, product labeling, packaging and specification documentation.",
    conversion: {
      projectOverview:
        "Hotel and resort pool lighting projects usually require reliable IP68 underwater fixtures, comfortable visual effects, low-voltage design and clear product selection before quotation.",
      suitableScenes: [
        "Hotel Swimming Pool",
        "Resort",
        "Villa",
        "Water Park",
        "Commercial Project"
      ],
      requirementChecklist: [
        "Pool Size",
        "Installation Type",
        "Voltage Requirement",
        "Lighting Color",
        "Control System",
        "Quantity"
      ],
      recommendedProductSlugs: [
        "rgb-swimming-pool-light",
        "ip68-underwater-led-pool-light",
        "dmx512-pool-light"
      ],
      imagePlaceholders: [
        { title: "Hotel Pool Project", alt: "Hotel swimming pool lighting project with LED pool lights" },
        { title: "Villa Pool Project", alt: "Villa pool lighting scene using IP68 LED pool lights" },
        { title: "Installation Scene", alt: "LED pool light installation scene for hotel swimming pool" }
      ],
      topCta: "Get Project Quote",
      midCta: "Discuss Your Lighting Solution",
      bottomCta: "Send Project Requirement"
    },
    faqs: [
      {
        question: "Can Lanhe support hotel pool lighting projects?",
        answer: "Yes. We support contractors, distributors and project buyers with IP68 pool lights, RGB options and quotation support."
      },
      {
        question: "What information is needed for a hotel pool lighting quotation?",
        answer: "Please provide pool size, quantity, voltage, color option, control method, installation type and project country."
      }
    ]
  },
  {
    slug: "villa-pool-lighting",
    title: "Villa Swimming Pool Lighting",
    keyword: "villa swimming pool lighting",
    metaTitle: "Villa Swimming Pool Lighting | RGB IP68 Pool Light Solution",
    metaDescription:
      "Villa swimming pool lighting solution using IP68 LED pool lights, RGB/RGBW options, 12V low-voltage lighting and OEM support for builders and distributors.",
    introduction:
      "Villa pool lighting often focuses on clean appearance, comfortable color temperature and easy replacement. Lanhe supports villa pool builders and distributors with compact, RGB and underwater LED light options.",
    recommendedSolutions: [
      "12V LED pool lights for residential and villa pool applications",
      "RGB swimming pool lights for private pool atmosphere",
      "Stainless steel or compact pool light options based on design style"
    ],
    recommendedProductSlugs: ["12v-led-pool-light", "rgb-swimming-pool-light", "stainless-steel-pool-light", "spa-pool-light"],
    waterproofRequirements:
      "Villa pools require IP68 waterproof lights with stable sealing, corrosion-aware material selection and safe low-voltage operation.",
    voltageOptions:
      "12V is commonly reviewed for villa pool lighting, while 24V can be considered for longer cable routes or project requirements.",
    controlOptions:
      "Single color, RGB and RGBW control options are available for private pool lighting scenes.",
    installationConsiderations: [
      "Confirm whether the pool uses surface mounted or recessed installation",
      "Check replacement size if the project is a renovation",
      "Plan cable length and transformer position before order"
    ],
    customization:
      "Customization can include finish, packaging, cable length, voltage, color mode and logo for distributors.",
    faqs: [
      {
        question: "Which pool light is suitable for villa pools?",
        answer: "12V LED pool lights, RGB pool lights and stainless steel pool lights are common options depending on installation and design style."
      },
      {
        question: "Can villa pool lights be customized for distributors?",
        answer: "Yes. OEM packaging, logo, color options and cable length can be reviewed for qualified B2B orders."
      }
    ]
  },
  {
    slug: "water-park-lighting",
    title: "Water Park Pool Lighting",
    keyword: "water park pool lighting",
    metaTitle: "Water Park Pool Lighting | DMX RGB LED Pool Light Supplier",
    metaDescription:
      "Water park pool lighting solution for contractors and project buyers, covering IP68 LED pool lights, 24V options, RGB/RGBW and DMX512 control.",
    introduction:
      "Water park lighting needs higher project coordination, stable waterproof performance and repeatable supply. Lanhe supports contractors and importers with RGB, DMX512 and low-voltage pool lighting solutions.",
    recommendedSolutions: [
      "24V swimming pool lights for commercial pool areas",
      "DMX512 pool lights for synchronized RGB scenes",
      "IP68 underwater lights for pool and water play zones"
    ],
    recommendedProductSlugs: ["24v-swimming-pool-light", "dmx512-pool-light", "rgb-swimming-pool-light", "ip68-underwater-led-pool-light"],
    waterproofRequirements:
      "Water park fixtures should focus on IP68 sealing, cable protection, impact-aware installation and stable performance in long operating hours.",
    voltageOptions:
      "24V and 12V low-voltage options can be selected according to electrical design, pool zone and cable distance.",
    controlOptions:
      "RGB, RGBW and DMX512 control can support dynamic lighting scenes for commercial attractions.",
    installationConsiderations: [
      "Separate lighting zones by pool area and control requirement",
      "Confirm cable length, control cabinet location and waterproof junction method",
      "Prepare spare units and maintenance access for commercial operation"
    ],
    customization:
      "Project customization can include DMX control matching, cable length, product marking, packing list and batch delivery plan.",
    faqs: [
      {
        question: "Can Lanhe supply pool lights for water park projects?",
        answer: "Yes. We can discuss RGB, DMX512, 24V and IP68 underwater lighting requirements for commercial projects."
      },
      {
        question: "Do water park projects need DMX512 control?",
        answer: "DMX512 is useful when synchronized color scenes or multiple lighting zones are required."
      }
    ]
  },
  {
    slug: "fountain-lighting",
    title: "Fountain Lighting Project",
    keyword: "fountain lighting project",
    metaTitle: "Fountain Lighting Project | IP68 RGB DMX Fountain Lights",
    metaDescription:
      "Fountain lighting project solution with IP68 underwater fountain lights, RGB/DMX options, stainless steel body and OEM support for engineering buyers.",
    introduction:
      "Fountain lighting projects require waterproof fixtures, correct beam angles and control compatibility. Lanhe supports landscape companies, fountain contractors and engineering buyers with IP68 fountain lighting options.",
    recommendedSolutions: [
      "Underwater fountain lights for submerged installation",
      "RGB or DMX512 fountain lights for dynamic water features",
      "Waterfall and pond underwater lights for landscape projects"
    ],
    recommendedProductSlugs: ["fountain-led-light", "underwater-fountain-light", "waterfall-led-light", "pond-led-underwater-light", "dmx512-pool-light"],
    waterproofRequirements:
      "Fountain lights should use IP68 waterproof design, stainless steel or suitable housing, and secure cable sealing for submerged operation.",
    voltageOptions:
      "12V and 24V options can be reviewed based on water depth, cable distance and control system.",
    controlOptions:
      "RGB, RGBW and DMX512 control options can support static, color changing and synchronized fountain scenes.",
    installationConsiderations: [
      "Confirm nozzle layout, water movement and beam angle before selecting fixtures",
      "Plan cable outlet and waterproof connector location",
      "Coordinate lighting control with fountain equipment and music control if needed"
    ],
    customization:
      "Engineering customization can include beam angle, cable length, control protocol, mounting accessories and packing requirements.",
    conversion: {
      projectOverview:
        "Fountain lighting projects need underwater-rated fixtures, cable sealing, mounting compatibility and control-system matching before contractors can confirm quotation and installation details.",
      suitableScenes: [
        "Hotel Swimming Pool",
        "Resort",
        "Villa",
        "Water Park",
        "Commercial Project"
      ],
      requirementChecklist: [
        "Pool Size",
        "Installation Type",
        "Voltage Requirement",
        "Lighting Color",
        "Control System",
        "Quantity"
      ],
      recommendedProductSlugs: ["fountain-led-light", "dmx512-pool-light"],
      imagePlaceholders: [
        { title: "Fountain Project", alt: "Fountain lighting project with IP68 LED fountain lights" },
        { title: "Installation Scene", alt: "Underwater fountain light installation scene" },
        { title: "Control System", alt: "DMX512 fountain lighting control system for project installation" }
      ],
      topCta: "Get Project Quote",
      midCta: "Discuss Your Lighting Solution",
      bottomCta: "Send Project Requirement"
    },
    faqs: [
      {
        question: "Can Lanhe support DMX fountain lighting?",
        answer: "Yes. RGB and DMX-ready options can be discussed for engineering and musical fountain projects."
      },
      {
        question: "What details are needed for a fountain lighting quotation?",
        answer: "Please provide water depth, fixture quantity, voltage, control method, beam angle and installation environment."
      }
    ]
  },
  {
    slug: "spa-pool-lighting",
    title: "SPA & Resort Pool Lighting",
    keyword: "SPA resort pool lighting",
    metaTitle: "SPA & Resort Pool Lighting | Compact IP68 LED Pool Lights",
    metaDescription:
      "SPA and resort pool lighting solution with compact IP68 LED pool lights, 12V options, RGB lighting and OEM support for resort project buyers.",
    introduction:
      "SPA and resort pool lighting requires comfortable light output, compact installation and waterproof reliability. Lanhe supports resort contractors and distributors with compact underwater lights and RGB pool lighting options.",
    recommendedSolutions: [
      "Compact SPA pool lights for small pool and spa installation",
      "12V LED pool lights for low-voltage resort projects",
      "RGB pool lights for atmosphere and guest experience"
    ],
    recommendedProductSlugs: ["spa-pool-light", "12v-led-pool-light", "rgb-swimming-pool-light", "ip68-underwater-led-pool-light"],
    waterproofRequirements:
      "SPA lighting should focus on IP68 sealing, low-voltage operation and compact housing suitable for small pool environments.",
    voltageOptions:
      "12V low-voltage options are common for SPA pool lighting; 24V may be reviewed for larger resort installations.",
    controlOptions:
      "White, warm white and RGB options can be selected based on comfort, atmosphere and project design.",
    installationConsiderations: [
      "Confirm compact mounting size and replacement compatibility",
      "Check cable length and transformer position for small pool areas",
      "Select suitable color temperature for guest comfort"
    ],
    customization:
      "OEM support can include compact model selection, packaging, logo, cable length, color temperature and documentation.",
    faqs: [
      {
        question: "Which lights are suitable for SPA pools?",
        answer: "Compact SPA pool lights, 12V LED pool lights and RGB pool lights are common options for SPA and resort projects."
      },
      {
        question: "Can resort pool lights be supplied for bulk order?",
        answer: "Yes. We can support bulk order planning, packing requirements and project quotation for B2B buyers."
      }
    ]
  }
];

export function getApplicationBySlug(slug: string) {
  return applicationPages.find((page) => page.slug === slug);
}

export function getApplicationProducts(page: ApplicationPage) {
  return page.recommendedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
}
