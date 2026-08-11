# gzlanhe.com Website Structure

Project goal: build an English B2B supplier website for overseas customer development.

Positioning:
- China manufacturer
- LED pool light, underwater LED light, fountain light, and outdoor lighting supplier
- Target buyers: swimming pool contractors, pool builders, lighting distributors, wholesale buyers, importers, and engineering companies

## Recommended Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Static SEO pages for product keywords
- Inquiry form prepared for email delivery to sara@gzlanhe.com

## Directory Structure

```text
gzlanhe.com/
  app/
    layout.tsx
    page.tsx
    globals.css
    led-pool-light/
      page.tsx
    ip68-underwater-light/
      page.tsx
    submersible-pool-light/
      page.tsx
    about/
      page.tsx
    contact/
      page.tsx
    api/
      inquiry/
        route.ts
  components/
    Header.tsx
    Footer.tsx
    InquiryForm.tsx
    ProductCard.tsx
    SeoJsonLd.tsx
  lib/
    products.ts
    seo.ts
    site.ts
  public/
    images/
      products/
      applications/
  package.json
  next.config.mjs
  tailwind.config.ts
  postcss.config.mjs
  tsconfig.json
  .env.example
```

## Page Plan

### Home

Route: `/`

Sections:
- Hero: factory strength, product image area, MOQ, OEM/ODM, inquiry button
- Product categories: LED Pool Lights, Submersible Pool Lights, Underwater Fountain Lights, Landscape Lighting
- Company advantages: Factory Direct, OEM/ODM Support, Quality Control, Global Shipping
- Applications: Swimming Pool, Water Fountain, Hotel Project, Villa Project
- Inquiry entry

### Product SEO Pages

Routes:
- `/led-pool-light`
- `/ip68-underwater-light`
- `/submersible-pool-light`

Each page includes:
- Product image
- Parameters
- Material
- Power
- Waterproof rating
- Applications
- OEM explanation
- FAQ
- Inquiry button

### About

Route: `/about`

Sections:
- Factory introduction
- Production capacity
- QC workflow
- Export experience

### Contact

Route: `/contact`

Includes:
- Email: sara@gzlanhe.com
- Inquiry form fields: Name, Company, Email, Country, Product Interested, Message

## SEO Plan

Every page should include:
- Title
- Meta description
- Keywords
- Schema JSON-LD structured data

Primary keywords:
- LED pool light
- Swimming pool light manufacturer
- Underwater LED light supplier
- IP68 pool light factory
- China LED lighting manufacturer

## Deployment Options

Recommended for overseas access:
- Vercel: best fit for Next.js and overseas speed

Alternative:
- Alibaba Cloud server: workable, but requires server maintenance and may be slower for US/EU visitors unless CDN is configured.
