// Server component — renders JSON-LD inline in the initial HTML response.
// No "use client" needed: dangerouslySetInnerHTML works in server components.

const BASE_URL = "https://www.vedantfashion.com";

// ── JSON-LD helper ───────────────────────────────────────────────────

const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

// ── Organization ────────────────────────────────────────────────────

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vedant Fashion Pvt. Ltd.",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: "Ladies woven garment manufacturer and exporter based in Mumbai, India, supplying the UAE, Russia, Poland, and South Africa.",
    contactPoint: [
      { "@type": "ContactPoint", telephone: "+91-79-2657-0000", contactType: "sales", areaServed: "Worldwide", availableLanguage: ["English", "Hindi"] },
      { "@type": "ContactPoint", telephone: "+91-79-2657-0000", contactType: "customer service", areaServed: "Worldwide", availableLanguage: ["English", "Hindi"] },
    ],
    address: [
      { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
    ],
    sameAs: ["https://www.linkedin.com/company/vedantfashion"],
  };
  return <JsonLd data={schema} />;
};

// ── WebSite ─────────────────────────────────────────────────────────

export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vedant Fashion",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/catalog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return <JsonLd data={schema} />;
};

// ── Product ─────────────────────────────────────────────────────────

interface ProductSchemaProps {
  name: string;
  description: string;
  sku: string;
  category: string;
  image?: string;
  url: string;
  brand?: string;
  certifications?: string[];
  moq?: string;
  fabricComposition?: string;
  countryOfOrigin?: string;
  colorOptions?: string[];
}

export const ProductSchema = ({
  name, description, sku, category, image, url,
  brand = "Vedant Fashion", certifications, moq,
  fabricComposition, countryOfOrigin = "India", colorOptions,
}: ProductSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    sku,
    category,
    image: image || `${BASE_URL}/og-default.jpg`,
    url: `${BASE_URL}${url}`,
    brand: { "@type": "Brand", name: brand },
    manufacturer: { "@type": "Organization", name: "Vedant Fashion Pvt. Ltd.", url: BASE_URL },
    countryOfOrigin: { "@type": "Country", name: countryOfOrigin },
  };

  const additionalProperty: unknown[] = [];

  if (certifications?.length) {
    additionalProperty.push(...certifications.map((c) => ({
      "@type": "PropertyValue", name: "Certification", value: c,
    })));
  }
  if (fabricComposition) {
    additionalProperty.push({ "@type": "PropertyValue", name: "Fabric Composition", value: fabricComposition });
  }
  if (additionalProperty.length) schema.additionalProperty = additionalProperty;
  if (colorOptions?.length) schema.color = colorOptions;

  if (moq) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "EUR",
      eligibleQuantity: { "@type": "QuantitativeValue", value: parseInt(moq) || 0, unitText: "pcs" },
      availability: "https://schema.org/InStock",
    };
  }

  return <JsonLd data={schema} />;
};

// ── FAQ ─────────────────────────────────────────────────────────────

export const FAQSchema = ({ items }: { items: { question: string; answer: string }[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return <JsonLd data={schema} />;
};

// ── Breadcrumb ──────────────────────────────────────────────────────

export const BreadcrumbSchema = ({ items }: { items: { name: string; url: string }[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
  return <JsonLd data={schema} />;
};

// ── Article ─────────────────────────────────────────────────────────

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  section?: string;
}

export const ArticleSchema = ({
  title, description, url,
  datePublished = "2025-01-15",
  dateModified, image, section,
}: ArticleSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    image: image || `${BASE_URL}/og-default.jpg`,
    author: { "@type": "Organization", name: "Vedant Fashion Pvt. Ltd.", url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: "Vedant Fashion Pvt. Ltd.",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}${url}` },
  };
  if (section) schema.articleSection = section;
  return <JsonLd data={schema} />;
};

// ── WebPage ─────────────────────────────────────────────────────────

export const WebPageSchema = ({ title, description, url, type = "WebPage" }: {
  title: string; description: string; url: string; type?: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: `${BASE_URL}${url}`,
    isPartOf: { "@type": "WebSite", name: "Vedant Fashion", url: BASE_URL },
    publisher: { "@type": "Organization", name: "Vedant Fashion Pvt. Ltd." },
  };
  return <JsonLd data={schema} />;
};

// ── LocalBusiness ────────────────────────────────────────────────────

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Vedant Fashion Pvt. Ltd. — Mumbai",
    image: `${BASE_URL}/logo.png`,
    telephone: "+91-79-2657-0000",
    email: "export@vedantfashion.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    }],
    url: `${BASE_URL}/contact`,
    priceRange: "€€",
  };
  return <JsonLd data={schema} />;
};

// ── ItemList ─────────────────────────────────────────────────────────

export const ItemListSchema = ({
  items, name = "Product Catalogue",
}: {
  items: { name: string; url: string; position: number; image?: string }[];
  name?: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      url: `${BASE_URL}${item.url}`,
      name: item.name,
      ...(item.image && { image: item.image }),
    })),
  };
  return <JsonLd data={schema} />;
};

// ── HowTo ───────────────────────────────────────────────────────────

export const HowToSchema = ({ name, description, steps }: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
  return <JsonLd data={schema} />;
};

// ── Service ─────────────────────────────────────────────────────────

export const ServiceSchema = ({ name, description, url, provider }: {
  name: string; description: string; url: string; provider?: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: { "@type": "Organization", name: provider || "Vedant Fashion Pvt. Ltd.", url: BASE_URL },
    areaServed: { "@type": "Place", name: "Europe" },
  };
  return <JsonLd data={schema} />;
};

// ── CollectionPage ───────────────────────────────────────────────────

export const CollectionPageSchema = ({ name, description, url }: {
  name: string; description: string; url: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${BASE_URL}${url}`,
    isPartOf: { "@type": "WebSite", name: "Vedant Fashion", url: BASE_URL },
  };
  return <JsonLd data={schema} />;
};
