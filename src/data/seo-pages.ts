// ============================================================
// SEO Page Data — 250+ indexable pages for Vedant Fashion
// ============================================================

// ---- 1. CATEGORY SUBCATEGORY PAGES ----

export interface CategorySubPage {
  category: string;
  categoryLabel: string;
  subcategory: string;
  subcategoryLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  features: string[];
  moq: string;
  leadTime: string;
  priceRange: string;
  fabricDetails: string;
  certifications: string[];
}

const subcategories = [
  { slug: "cotton", label: "Cotton" },
  { slug: "linen", label: "Linen" },
  { slug: "voile", label: "Voile" },
  { slug: "handloom", label: "Handloom" },
  { slug: "organic", label: "Organic" },
  { slug: "sustainable", label: "Sustainable" },
  { slug: "white", label: "White" },
  { slug: "oversized", label: "Oversized" },
  { slug: "europe", label: "Europe Export" },
  { slug: "private-label", label: "Private Label" },
  { slug: "oem-manufacturer", label: "OEM Manufacturer" },
  { slug: "wholesale", label: "Wholesale" },
  { slug: "bulk-order", label: "Bulk Order" },
  { slug: "printed", label: "Printed" },
  { slug: "embroidered", label: "Embroidered" },
  { slug: "casual", label: "Casual" },
  { slug: "formal", label: "Formal" },
  { slug: "plus-size", label: "Plus Size" },
  { slug: "mini-moq", label: "Mini MOQ" },
  { slug: "custom-design", label: "Custom Design" },
];

const categories = [
  {
    slug: "woven-blouses",
    label: "Woven Blouses",
    baseDesc: "Premium woven blouses manufactured in India with GOTS and OEKO-TEX certification.",
    fabric: "100–140 GSM organic cotton poplin, voile, and linen blends",
    price: "€4.50–€9.00 FOB",
    moq: "300 pcs",
    lead: "45 days",
  },
  {
    slug: "cotton-dresses",
    label: "Cotton Dresses",
    baseDesc: "Organic cotton dresses for European wholesale — midi, maxi, and shirt dresses.",
    fabric: "100–180 GSM organic cotton poplin, twill, and jersey",
    price: "€6.00–€14.00 FOB",
    moq: "300 pcs",
    lead: "45 days",
  },
  {
    slug: "linen-shirts",
    label: "Linen Shirts",
    baseDesc: "European flax linen shirts manufactured in India for wholesale and private label.",
    fabric: "140–180 GSM European flax linen and linen-cotton blends",
    price: "€5.50–€11.00 FOB",
    moq: "300 pcs",
    lead: "45 days",
  },
  {
    slug: "resort-wear",
    label: "Resort Wear",
    baseDesc: "Luxury resort wear and beachwear manufactured for European fashion brands.",
    fabric: "80–150 GSM cotton voile, linen, and Tencel blends",
    price: "€5.00–€12.00 FOB",
    moq: "200 pcs",
    lead: "45 days",
  },
  {
    slug: "summer-dresses",
    label: "Summer Dresses",
    baseDesc: "Lightweight summer dresses in organic cotton and linen for the European market.",
    fabric: "70–120 GSM organic cotton voile, lawn, and linen",
    price: "€5.00–€13.00 FOB",
    moq: "300 pcs",
    lead: "45 days",
  },
  {
    slug: "co-ord-sets",
    label: "Co-ord Sets",
    baseDesc: "Matching co-ord sets — tops and bottoms in organic cotton and linen for wholesale.",
    fabric: "100–160 GSM cotton poplin, linen, and Tencel",
    price: "€8.00–€18.00 FOB",
    moq: "200 pcs",
    lead: "50 days",
  },
  {
    slug: "kaftans",
    label: "Kaftans",
    baseDesc: "Hand-printed and embroidered kaftans for resort and loungewear wholesale.",
    fabric: "70–100 GSM cotton voile, mulmul, and viscose",
    price: "€4.00–€10.00 FOB",
    moq: "200 pcs",
    lead: "40 days",
  },
  {
    slug: "loungewear",
    label: "Loungewear",
    baseDesc: "Organic cotton loungewear sets for European private label brands.",
    fabric: "140–200 GSM organic cotton jersey and interlock",
    price: "€7.00–€16.00 FOB",
    moq: "300 pcs",
    lead: "45 days",
  },
  {
    slug: "polo-shirts",
    label: "Polo Shirts",
    baseDesc: "Premium piqué polo shirts in organic cotton for corporate and retail wholesale.",
    fabric: "180–220 GSM organic cotton piqué",
    price: "€4.50–€9.00 FOB",
    moq: "500 pcs",
    lead: "40 days",
  },
  {
    slug: "workwear",
    label: "Workwear",
    baseDesc: "Sustainable workwear and corporate uniforms manufactured in India.",
    fabric: "180–280 GSM organic cotton twill and canvas",
    price: "€6.00–€15.00 FOB",
    moq: "500 pcs",
    lead: "50 days",
  },
];

function generateSubFeatures(catLabel: string, subLabel: string): string[] {
  const base = [
    `Premium ${subLabel.toLowerCase()} ${catLabel.toLowerCase()} manufactured in India`,
    "GOTS and OEKO-TEX certified production",
    "EU-compliant labelling and documentation",
    "Full private label and OEM services available",
    "AQL 2.5 quality inspection at every stage",
  ];
  const extras: Record<string, string[]> = {
    "Private Label": ["Your brand labels, hangtags, and packaging", "Complete confidentiality — NDA signed"],
    "OEM Manufacturer": ["FOB, CMT, and ODM manufacturing models", "Dedicated production lines available"],
    "Wholesale": ["Volume-based pricing tiers", "Repeat order discounts for loyal partners"],
    "Bulk Order": ["Orders from 1,000 to 50,000 pieces", "Containerised FCL shipping for cost efficiency"],
    "Organic": ["100% GOTS-certified organic fibres", "Full chain-of-custody documentation"],
    "Sustainable": ["Zero textile waste to landfill", "Carbon footprint reporting per order"],
    "Europe Export": ["Shipping to Hamburg, Rotterdam, Antwerp, Genoa", "EUR.1 certificates for preferential duty"],
    "Handloom": ["Hand-woven on traditional looms", "Artisan craftsmanship with fair trade practices"],
    "Printed": ["Digital, screen, block, and discharge printing", "Custom colourways and exclusive designs"],
    "Embroidered": ["Machine and hand embroidery available", "Schiffli, chain stitch, and appliqué techniques"],
    "Plus Size": ["Extended size range up to 5XL", "Custom grading for inclusive sizing"],
    "Mini MOQ": ["Start from just 100 pieces per style", "Ideal for emerging brands and test orders"],
    "Custom Design": ["Full ODM service from sketch to production", "2 rounds of sampling included"],
  };
  return [...base, ...(extras[subLabel] || [`${subLabel} finish and detailing`, `Custom ${subLabel.toLowerCase()} options available`])];
}

function generateCerts(subSlug: string): string[] {
  const base = ["OEKO-TEX Standard 100"];
  if (["organic", "sustainable", "handloom"].includes(subSlug)) return ["GOTS 6.0", ...base, "GRS 4.0", "SEDEX/SMETA"];
  if (["private-label", "oem-manufacturer"].includes(subSlug)) return ["GOTS 6.0", ...base, "BSCI", "ISO 9001"];
  return ["GOTS 6.0", ...base];
}

export const categorySubPages: CategorySubPage[] = categories.flatMap((cat) =>
  subcategories.map((sub) => ({
    category: cat.slug,
    categoryLabel: cat.label,
    subcategory: sub.slug,
    subcategoryLabel: sub.label,
    title: `${sub.label} ${cat.label}`,
    metaTitle: `${sub.label} ${cat.label} Manufacturer India | Vedant Fashion`,
    metaDescription: `${sub.label} ${cat.label.toLowerCase()} manufacturer in India. ${cat.baseDesc} MOQ ${cat.moq}. FOB/CIF/DDP to Europe.`,
    heroDescription: `${cat.baseDesc} Specialising in ${sub.label.toLowerCase()} variants for European wholesale buyers. ${cat.price} per unit.`,
    features: generateSubFeatures(cat.label, sub.label),
    moq: cat.moq,
    leadTime: cat.lead,
    priceRange: cat.price,
    fabricDetails: cat.fabric,
    certifications: generateCerts(sub.slug),
  }))
);

// ---- 2. COUNTRY LANDING PAGES ----

export interface CountryPage {
  slug: string;
  country: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  shippingTime: string;
  port: string;
  regulations: string[];
  certifications: string[];
  incoterms: string;
  dutyInfo: string;
  textileImportNotes: string;
  labellingLanguage: string;
  tradeAgreement: string;
  marketInsight: string;
}

export const countryPages: CountryPage[] = [
  { slug: "europe", country: "Europe", region: "EU", heroTitle: "Garment Manufacturer for European Brands", heroDescription: "Vedant Fashion is a GOTS and OEKO-TEX certified garment manufacturer exporting premium sustainable apparel to European wholesale buyers. FOB, CIF, and DDP delivery to all EU ports.", shippingTime: "18–22 days (sea)", port: "Hamburg, Rotterdam, Antwerp", regulations: ["EU Textile Regulation 1007/2011", "REACH (EC) No 1907/2006", "EU Product Safety Directive", "CE marking where applicable"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "GRS 4.0", "BSCI / SEDEX"], incoterms: "FOB / CIF / DDP", dutyInfo: "GSP preferential tariff rates applicable. EUR.1 Movement Certificate provided.", textileImportNotes: "All garments comply with EU textile labelling requirements including fibre composition, care instructions (ISO 3758), and country of origin.", labellingLanguage: "English (+ local language on request)", tradeAgreement: "India-EU GSP (Generalised Scheme of Preferences)", marketInsight: "The EU is the world's largest importer of garments. Germany, France, and the Netherlands are our top three destination markets, accounting for 65% of our European exports.", metaTitle: "Garment Manufacturer for Europe | Vedant Fashion India", metaDescription: "GOTS certified garment manufacturer exporting to Europe. Premium sustainable apparel — private label, OEM, wholesale. FOB/CIF/DDP delivery." },
  { slug: "germany", country: "Germany", region: "DACH", heroTitle: "Garment Manufacturer for German Brands", heroDescription: "Vedant Fashion exports GOTS-certified sustainable garments to Germany. Hamburg port delivery, German-language labelling, and full REACH compliance.", shippingTime: "18–20 days (sea to Hamburg)", port: "Hamburg", regulations: ["EU Textile Regulation 1007/2011", "REACH (EC) No 1907/2006", "German Supply Chain Due Diligence Act (LkSG)", "Verpackungsgesetz (Packaging Act)"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "GRS 4.0", "BSCI"], incoterms: "FOB / CIF Hamburg / DDP", dutyInfo: "GSP rates: 9.6% (woven garments). EUR.1 certificate provided. EORI number required for import.", textileImportNotes: "German market requires care labelling in German. Supply Chain Due Diligence Act (LkSG) compliance documentation provided.", labellingLanguage: "German", tradeAgreement: "India-EU GSP", marketInsight: "Germany is Europe's largest apparel market (€65B+). Sustainability is a key purchasing criterion — 72% of German buyers prioritise certified suppliers.", metaTitle: "Garment Manufacturer for Germany | GOTS Certified | Vedant Fashion", metaDescription: "Certified garment manufacturer exporting to Germany. GOTS, OEKO-TEX certified. Hamburg port delivery. German labelling. LkSG compliant." },
  { slug: "france", country: "France", region: "Western Europe", heroTitle: "Garment Manufacturer for French Brands", heroDescription: "Premium sustainable garment manufacturing for French fashion houses. Certified organic cotton, European linen, and eco-friendly production.", shippingTime: "20–22 days (sea to Le Havre)", port: "Le Havre / Marseille", regulations: ["EU Textile Regulation 1007/2011", "REACH", "French AGEC Law (Anti-Waste)", "French Duty of Vigilance Law"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "European Flax®", "BSCI"], incoterms: "FOB / CIF Le Havre / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate provided.", textileImportNotes: "French AGEC law requires environmental labelling. Loi de Vigilance compliance documentation available.", labellingLanguage: "French", tradeAgreement: "India-EU GSP", marketInsight: "France's fashion market values craftsmanship and sustainability. Growing demand for organic cotton and European linen garments from certified manufacturers.", metaTitle: "Garment Manufacturer for France | Vedant Fashion India", metaDescription: "Certified garment manufacturer for French brands. GOTS, OEKO-TEX. European linen specialists. Le Havre delivery. French labelling." },
  { slug: "italy", country: "Italy", region: "Southern Europe", heroTitle: "Garment Manufacturer for Italian Brands", heroDescription: "High-quality garment manufacturing for Italian fashion brands. Premium fabrics, expert construction, and sustainable production.", shippingTime: "18–20 days (sea to Genoa)", port: "Genoa / La Spezia", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Italian Made in / Textile Labelling"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "GRS 4.0"], incoterms: "FOB / CIF Genoa / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate provided.", textileImportNotes: "Italian market demands premium finish quality. Care labelling in Italian required.", labellingLanguage: "Italian", tradeAgreement: "India-EU GSP", marketInsight: "Italy's fashion industry values quality construction and premium fabrics. Our expertise in linen and fine cotton aligns with Italian market expectations.", metaTitle: "Garment Manufacturer for Italy | Vedant Fashion India", metaDescription: "Premium garment manufacturer for Italian brands. Expert construction, GOTS certified. Genoa port delivery. Italian labelling." },
  { slug: "spain", country: "Spain", region: "Iberian Peninsula", heroTitle: "Garment Manufacturer for Spanish Brands", heroDescription: "Sustainable garment manufacturing for the Spanish market. Organic cotton, resort wear, and summer collections.", shippingTime: "20–22 days (sea to Barcelona)", port: "Barcelona / Valencia", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Spanish Textile Labelling Requirements"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100"], incoterms: "FOB / CIF Barcelona / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Spanish labelling in Castilian Spanish required. Size conversions to EU standard.", labellingLanguage: "Spanish", tradeAgreement: "India-EU GSP", marketInsight: "Spain's fashion market is the 4th largest in Europe. Strong demand for resort wear and summer collections aligns with our specialisation.", metaTitle: "Garment Manufacturer for Spain | Vedant Fashion India", metaDescription: "Certified garment manufacturer for Spanish brands. Resort wear, summer dresses. Barcelona delivery. GOTS, OEKO-TEX certified." },
  { slug: "netherlands", country: "Netherlands", region: "Benelux", heroTitle: "Garment Manufacturer for Dutch Brands", heroDescription: "Sustainable garment manufacturing for Dutch fashion brands. Rotterdam port delivery, full EU compliance, and certified organic production.", shippingTime: "18–20 days (sea to Rotterdam)", port: "Rotterdam", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Dutch Covenant on Sustainable Garments & Textiles"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "GRS 4.0", "BSCI"], incoterms: "FOB / CIF Rotterdam / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Netherlands is a key EU distribution hub. Labelling in Dutch or English accepted.", labellingLanguage: "Dutch / English", tradeAgreement: "India-EU GSP", marketInsight: "The Netherlands leads Europe in sustainable fashion adoption. The Dutch Covenant on Sustainable Garments makes certified production a requirement for many Dutch brands.", metaTitle: "Garment Manufacturer for Netherlands | Vedant Fashion India", metaDescription: "Certified garment manufacturer for Dutch brands. GOTS, OEKO-TEX. Rotterdam delivery. Sustainable fashion specialists." },
  { slug: "poland", country: "Poland", region: "Central Europe", heroTitle: "Garment Manufacturer for Polish Brands", heroDescription: "Cost-effective garment manufacturing for the Polish market with full EU certification and Gdańsk port delivery.", shippingTime: "22–25 days (sea to Gdańsk)", port: "Gdańsk / Gdynia", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Polish Consumer Protection"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100"], incoterms: "FOB / CIF Gdańsk / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Growing market with increasing demand for certified sustainable garments. Polish labelling available.", labellingLanguage: "Polish", tradeAgreement: "India-EU GSP", marketInsight: "Poland's fashion market is growing rapidly. Competitive pricing with certified sustainability is a key differentiator for Polish importers.", metaTitle: "Garment Manufacturer for Poland | Vedant Fashion India", metaDescription: "Certified garment manufacturer for Polish brands. Competitive pricing. GOTS, OEKO-TEX. Gdańsk delivery." },
  { slug: "russia", country: "Russia", region: "CIS", heroTitle: "Garment Manufacturer for Russian Brands", heroDescription: "Premium garment manufacturing for the Russian market. St. Petersburg delivery, competitive pricing, and large-volume production capacity.", shippingTime: "25–30 days (sea to St. Petersburg)", port: "St. Petersburg", regulations: ["EAC (EurAsian Conformity)", "TR CU 017/2011 (Safety of Light Industry Products)", "Russian Customs Regulations"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "EAC Certificate"], incoterms: "FOB / CIF St. Petersburg / DDP", dutyInfo: "Import duties vary by HS code. Certificate of Origin provided for preferential rates where applicable.", textileImportNotes: "EAC certification required for textile products sold in EAEU countries. Russian-language care labels required.", labellingLanguage: "Russian", tradeAgreement: "India-Russia bilateral agreements", marketInsight: "Russia is a significant market for Indian garment exports. Premium positioning with certified sustainability appeals to growing conscious consumer segment.", metaTitle: "Garment Manufacturer for Russia | Vedant Fashion India", metaDescription: "Certified garment manufacturer exporting to Russia. GOTS, OEKO-TEX. St. Petersburg delivery. EAC compliant." },
  { slug: "uk", country: "United Kingdom", region: "UK & Ireland", heroTitle: "Garment Manufacturer for UK Brands", heroDescription: "Sustainable garment manufacturing for British fashion brands. Felixstowe/Southampton delivery, UKCA compliance, and certified organic production.", shippingTime: "20–22 days (sea to Felixstowe)", port: "Felixstowe / Southampton", regulations: ["UK Textile Products Regulation", "UK REACH", "Modern Slavery Act 2015", "UKCA marking"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "GRS 4.0", "SEDEX/SMETA"], incoterms: "FOB / CIF Felixstowe / DDP", dutyInfo: "UK DCTS (Developing Countries Trading Scheme) preferential rates. Certificate of Origin provided.", textileImportNotes: "Post-Brexit UK has separate textile regulations (UK REACH). UKCA marking applies. Labelling in English.", labellingLanguage: "English", tradeAgreement: "UK DCTS (formerly GSP)", marketInsight: "The UK is one of the world's largest fashion markets. Strong ethical sourcing requirements — Modern Slavery Act compliance is essential.", metaTitle: "Garment Manufacturer for UK | Vedant Fashion India", metaDescription: "Certified garment manufacturer for UK brands. GOTS, OEKO-TEX. Felixstowe delivery. UK REACH compliant. SEDEX audited." },
  { slug: "sweden", country: "Sweden", region: "Scandinavia", heroTitle: "Garment Manufacturer for Swedish Brands", heroDescription: "Sustainable garment manufacturing for Scandinavian brands. Organic, fair-trade, and carbon-conscious production.", shippingTime: "22–25 days (sea to Gothenburg)", port: "Gothenburg", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Swedish Chemicals Agency (KEMI) requirements"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "GRS 4.0", "SA8000"], incoterms: "FOB / CIF Gothenburg / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Swedish market has among the highest sustainability expectations globally. Full traceability documentation essential.", labellingLanguage: "Swedish / English", tradeAgreement: "India-EU GSP", marketInsight: "Sweden leads global sustainable fashion — 8 of the world's top 20 sustainable fashion brands are Swedish. Our certifications align perfectly with Swedish buyer requirements.", metaTitle: "Garment Manufacturer for Sweden | Vedant Fashion India", metaDescription: "Sustainable garment manufacturer for Swedish brands. GOTS, OEKO-TEX, SA8000. Gothenburg delivery." },
  { slug: "norway", country: "Norway", region: "Scandinavia", heroTitle: "Garment Manufacturer for Norwegian Brands", heroDescription: "Certified sustainable garment manufacturing for Norway. Premium organic cotton and linen garments with full traceability.", shippingTime: "22–25 days (sea to Oslo)", port: "Oslo", regulations: ["Norwegian Product Control Act", "REACH (via EEA)", "Norwegian Transparency Act"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "GRS 4.0"], incoterms: "FOB / CIF Oslo / DDP", dutyInfo: "Norway-India GSP+ rates. Certificate of Origin provided.", textileImportNotes: "Norwegian Transparency Act requires supply chain due diligence documentation. Full audit reports provided.", labellingLanguage: "Norwegian / English", tradeAgreement: "Norway GSP+", marketInsight: "Norway's premium fashion market values quality and sustainability. The Transparency Act aligns with our transparent supply chain practices.", metaTitle: "Garment Manufacturer for Norway | Vedant Fashion India", metaDescription: "Certified garment manufacturer for Norwegian brands. GOTS, OEKO-TEX. Oslo delivery. Transparency Act compliant." },
  { slug: "denmark", country: "Denmark", region: "Scandinavia", heroTitle: "Garment Manufacturer for Danish Brands", heroDescription: "Minimalist, sustainable garment manufacturing for Danish fashion brands. Clean design, organic materials, certified production.", shippingTime: "20–22 days (sea to Copenhagen)", port: "Copenhagen / Aarhus", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Danish Fashion Ethical Charter"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "Nordic Swan"], incoterms: "FOB / CIF Copenhagen / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Danish brands value clean, minimalist design with strong sustainability credentials. Care labels in Danish available.", labellingLanguage: "Danish / English", tradeAgreement: "India-EU GSP", marketInsight: "Denmark punches above its weight in fashion — home to brands like Ganni, Stine Goya, and Skall Studio. Strong alignment with our organic and sustainable production.", metaTitle: "Garment Manufacturer for Denmark | Vedant Fashion India", metaDescription: "Sustainable garment manufacturer for Danish brands. GOTS, OEKO-TEX certified. Copenhagen delivery. Organic specialists." },
  { slug: "belgium", country: "Belgium", region: "Benelux", heroTitle: "Garment Manufacturer for Belgian Brands", heroDescription: "Premium garment manufacturing for Belgian fashion brands. Antwerp delivery, EU compliance, and certified sustainable production.", shippingTime: "18–20 days (sea to Antwerp)", port: "Antwerp", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Belgian Textile Labelling"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100"], incoterms: "FOB / CIF Antwerp / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Antwerp is a major EU fashion and distribution hub. Labelling in French and Dutch for Belgian market.", labellingLanguage: "French / Dutch", tradeAgreement: "India-EU GSP", marketInsight: "Belgium's fashion industry centres on Antwerp — known for avant-garde design. Our flexible production supports both experimental and commercial volumes.", metaTitle: "Garment Manufacturer for Belgium | Vedant Fashion India", metaDescription: "Certified garment manufacturer for Belgian brands. GOTS, OEKO-TEX. Antwerp delivery. French/Dutch labelling." },
  { slug: "austria", country: "Austria", region: "DACH", heroTitle: "Garment Manufacturer for Austrian Brands", heroDescription: "GOTS-certified garment manufacturing for Austrian fashion brands. Premium organic and Tencel garments.", shippingTime: "20–22 days (sea to Hamburg, rail to Austria)", port: "Hamburg (rail to Vienna)", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Austrian Supply Chain Act"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "Lenzing Tencel™"], incoterms: "FOB / CIF Hamburg / DDP Vienna", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Austrian market closely follows German regulations. Strong preference for Lenzing Tencel™ and organic cotton.", labellingLanguage: "German", tradeAgreement: "India-EU GSP", marketInsight: "Austria — home of Lenzing AG — has deep expertise in sustainable textiles. Our Tencel partnership resonates strongly with Austrian buyers.", metaTitle: "Garment Manufacturer for Austria | Vedant Fashion India", metaDescription: "Certified garment manufacturer for Austrian brands. GOTS, Tencel specialists. DDP Vienna delivery. German labelling." },
  { slug: "switzerland", country: "Switzerland", region: "DACH", heroTitle: "Garment Manufacturer for Swiss Brands", heroDescription: "Premium garment manufacturing for Swiss fashion and luxury brands. Highest quality standards, certified sustainable production.", shippingTime: "20–22 days (sea to Hamburg, rail to Switzerland)", port: "Hamburg / Basel (rail)", regulations: ["Swiss Textile Ordinance", "Swiss Chemical Risk Reduction Ordinance (ChemRRV)", "Swiss Responsible Business Initiative"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "SA8000"], incoterms: "FOB / CIF Hamburg / DDP Zurich", dutyInfo: "Switzerland-India trade terms. Certificate of Origin provided for preferential rates.", textileImportNotes: "Switzerland has its own textile regulations separate from EU. Swiss ChemRRV aligns with but differs from REACH.", labellingLanguage: "German / French / Italian", tradeAgreement: "EFTA-India negotiations ongoing", marketInsight: "Swiss fashion market demands premium quality and ethical production. Our SA8000 and GOTS certifications meet Swiss buyer expectations.", metaTitle: "Garment Manufacturer for Switzerland | Vedant Fashion India", metaDescription: "Premium garment manufacturer for Swiss brands. GOTS, SA8000. DDP Zurich delivery. Multilingual labelling." },
  { slug: "portugal", country: "Portugal", region: "Iberian Peninsula", heroTitle: "Garment Manufacturer for Portuguese Brands", heroDescription: "Sustainable garment manufacturing complementing Portugal's textile heritage. Organic cotton and linen specialists.", shippingTime: "20–22 days (sea to Lisbon)", port: "Lisbon / Leixões", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Portuguese Textile Association Standards"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100"], incoterms: "FOB / CIF Lisbon / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Portugal has a strong domestic textile industry. Our value proposition is competitive pricing with matching quality and sustainability.", labellingLanguage: "Portuguese", tradeAgreement: "India-EU GSP", marketInsight: "Portuguese brands increasingly source from India for cost competitiveness while maintaining quality. Our GOTS certification is a key differentiator.", metaTitle: "Garment Manufacturer for Portugal | Vedant Fashion India", metaDescription: "Certified garment manufacturer for Portuguese brands. GOTS, OEKO-TEX. Lisbon delivery. Competitive pricing." },
  { slug: "finland", country: "Finland", region: "Scandinavia", heroTitle: "Garment Manufacturer for Finnish Brands", heroDescription: "Sustainable and functional garment manufacturing for Finnish brands. Organic, durable, and designed for Nordic aesthetics.", shippingTime: "22–25 days (sea to Helsinki)", port: "Helsinki", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Finnish Safety Standards"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "Nordic Swan"], incoterms: "FOB / CIF Helsinki / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Finnish market values durability and functionality alongside sustainability. Care labelling in Finnish available.", labellingLanguage: "Finnish / English", tradeAgreement: "India-EU GSP", marketInsight: "Finland's fashion market values minimalist design and sustainability. Brands like Marimekko set high standards that our certified production meets.", metaTitle: "Garment Manufacturer for Finland | Vedant Fashion India", metaDescription: "Sustainable garment manufacturer for Finnish brands. GOTS, OEKO-TEX. Helsinki delivery. Nordic design compatible." },
  { slug: "czech-republic", country: "Czech Republic", region: "Central Europe", heroTitle: "Garment Manufacturer for Czech Brands", heroDescription: "Certified garment manufacturing for the Czech market. Competitive pricing with EU-standard quality and sustainability.", shippingTime: "22–25 days (sea to Hamburg, rail to Prague)", port: "Hamburg (rail to Prague)", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Czech Consumer Protection"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100"], incoterms: "FOB / CIF Hamburg / DDP Prague", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Czech Republic is a growing market for sustainable fashion imports. Labelling in Czech available.", labellingLanguage: "Czech / English", tradeAgreement: "India-EU GSP", marketInsight: "The Czech fashion market is modernising rapidly with increasing demand for certified sustainable imports.", metaTitle: "Garment Manufacturer for Czech Republic | Vedant Fashion India", metaDescription: "Certified garment manufacturer for Czech brands. GOTS, OEKO-TEX. DDP Prague delivery. Competitive pricing." },
  { slug: "ireland", country: "Ireland", region: "UK & Ireland", heroTitle: "Garment Manufacturer for Irish Brands", heroDescription: "Sustainable garment manufacturing for Irish fashion brands. Dublin delivery, EU compliance, organic production.", shippingTime: "22–25 days (sea to Dublin)", port: "Dublin", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Irish Consumer Protection"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100"], incoterms: "FOB / CIF Dublin / DDP", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Ireland follows EU textile regulations. English-language labelling. Strong emphasis on ethical sourcing.", labellingLanguage: "English", tradeAgreement: "India-EU GSP", marketInsight: "Ireland's fashion market values quality and ethical production. Our certifications and transparent pricing align with Irish buyer expectations.", metaTitle: "Garment Manufacturer for Ireland | Vedant Fashion India", metaDescription: "Certified garment manufacturer for Irish brands. GOTS, OEKO-TEX. Dublin delivery. EU compliant." },
  { slug: "greece", country: "Greece", region: "Southern Europe", heroTitle: "Garment Manufacturer for Greek Brands", heroDescription: "Premium resort wear and summer garment manufacturing for Greek fashion brands. Mediterranean style with Indian craftsmanship.", shippingTime: "18–20 days (sea to Piraeus)", port: "Piraeus", regulations: ["EU Textile Regulation 1007/2011", "REACH", "Greek Consumer Protection"], certifications: ["GOTS 6.0", "OEKO-TEX Standard 100"], incoterms: "FOB / CIF Piraeus / DDP Athens", dutyInfo: "GSP preferential rates. EUR.1 certificate.", textileImportNotes: "Greece has strong demand for resort wear and summer collections. Labelling in Greek available.", labellingLanguage: "Greek / English", tradeAgreement: "India-EU GSP", marketInsight: "Greece's tourism-driven economy creates strong seasonal demand for resort wear and summer fashion — our core specialisation.", metaTitle: "Garment Manufacturer for Greece | Vedant Fashion India", metaDescription: "Resort wear garment manufacturer for Greek brands. GOTS, OEKO-TEX. Piraeus delivery. Summer collection specialists." },
];

// ---- 3. FABRIC EDUCATION PAGES ----

export interface FabricPage {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  properties: { label: string; value: string }[];
  gsmRange: string;
  weaveTypes: string[];
  applications: string[];
  careInstructions: string[];
  sustainability: string;
  certifications: string[];
  sourcing: string;
}

export const fabricPages: FabricPage[] = [
  { slug: "cotton", name: "Cotton", metaTitle: "Cotton Fabric for Garment Manufacturing | Vedant Fashion", metaDescription: "Cotton fabric specifications for garment manufacturing. GSM ranges, weave types, shrinkage data, and sourcing from GOTS-certified mills in India.", heroDescription: "Cotton is the backbone of garment manufacturing — versatile, breathable, and available in organic certified variants. We source from GOTS-certified mills across Gujarat and Maharashtra.", properties: [{ label: "Fibre Type", value: "Natural cellulose (Gossypium)" }, { label: "GSM Range", value: "70–300 GSM" }, { label: "Shrinkage", value: "±3% (woven) / ±5% (knit)" }, { label: "Colorfastness", value: "Grade 4+ (ISO 105-C06)" }, { label: "Moisture Absorption", value: "7–8%" }, { label: "Tensile Strength", value: "Good (varies by GSM)" }], gsmRange: "70–300 GSM", weaveTypes: ["Plain (poplin, voile, lawn)", "Twill (drill, gabardine)", "Satin", "Oxford", "Dobby", "Jacquard"], applications: ["Blouses", "Dresses", "Shirts", "Trousers", "T-shirts", "Workwear"], careInstructions: ["Machine wash 40°C", "Tumble dry low", "Iron medium heat", "Do not bleach"], sustainability: "Organic cotton (GOTS-certified) uses 91% less water and 62% less energy than conventional cotton. Full chain-of-custody documentation from farm to garment.", certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "BCI (Better Cotton)"], sourcing: "Gujarat, Maharashtra, and Tamil Nadu — India's premier cotton-growing regions. Direct relationships with GOTS-certified ginning and spinning mills." },
  { slug: "linen", name: "Linen", metaTitle: "Linen Fabric for Garment Manufacturing | Vedant Fashion", metaDescription: "European flax linen fabric specifications. GSM, weave types, shrinkage tolerance. Sourced from Belgium and France.", heroDescription: "Linen is prized for its natural lustre, breathability, and durability. We source European Flax® certified linen from mills in Belgium and France.", properties: [{ label: "Fibre Type", value: "Natural bast fibre (Linum usitatissimum)" }, { label: "GSM Range", value: "120–280 GSM" }, { label: "Shrinkage", value: "±5% (first wash)" }, { label: "Colorfastness", value: "Grade 4+ (ISO 105-C06)" }, { label: "Moisture Absorption", value: "12–15%" }, { label: "Tensile Strength", value: "Excellent — strongest natural fibre" }], gsmRange: "120–280 GSM", weaveTypes: ["Plain", "Twill", "Herringbone", "Chambray"], applications: ["Shirts", "Trousers", "Blazers", "Dresses", "Resort wear"], careInstructions: ["Machine wash 40°C", "Line dry recommended", "Iron while damp — high heat", "Softens with each wash"], sustainability: "Flax requires no irrigation and minimal pesticides. European Flax® certification guarantees origin and sustainable farming practices. Biodegradable fibre.", certifications: ["European Flax®", "OEKO-TEX Standard 100", "Masters of Linen"], sourcing: "European flax from Belgium and France. Woven at partner mills in India for cost-effective garment production." },
  { slug: "voile", name: "Voile", metaTitle: "Voile Fabric for Garment Manufacturing | Vedant Fashion", metaDescription: "Cotton voile fabric specifications for lightweight garments. GSM, construction, and applications for summer collections.", heroDescription: "Voile is a lightweight, semi-sheer cotton fabric ideal for summer garments, layering, and kaftans. We produce in organic cotton voile from 70–90 GSM.", properties: [{ label: "Fibre Type", value: "Fine-count cotton yarn" }, { label: "GSM Range", value: "60–90 GSM" }, { label: "Shrinkage", value: "±3%" }, { label: "Colorfastness", value: "Grade 3–4 (lighter shades)" }, { label: "Thread Count", value: "60×60 to 80×80" }, { label: "Hand Feel", value: "Soft, flowing, semi-sheer" }], gsmRange: "60–90 GSM", weaveTypes: ["Plain weave", "Crinkle voile", "Printed voile"], applications: ["Kaftans", "Summer dresses", "Layering tops", "Scarves", "Curtains"], careInstructions: ["Hand wash or gentle cycle 30°C", "Line dry in shade", "Iron low heat", "Handle with care — delicate fabric"], sustainability: "Available in GOTS-certified organic cotton. Lightweight fabric uses less material per garment, reducing environmental footprint.", certifications: ["GOTS 6.0", "OEKO-TEX Standard 100"], sourcing: "Tamil Nadu and West Bengal — traditional centres of fine cotton voile weaving in India." },
  { slug: "khadi", name: "Khadi", metaTitle: "Khadi Fabric — Handspun & Handwoven | Vedant Fashion", metaDescription: "Khadi (handspun, handwoven) fabric specifications. Artisanal Indian fabric for sustainable fashion brands.", heroDescription: "Khadi is India's iconic handspun and handwoven fabric — a symbol of sustainable craftsmanship. Each metre is unique, with natural texture variations that add character.", properties: [{ label: "Fibre Type", value: "Handspun cotton, silk, or wool" }, { label: "GSM Range", value: "100–200 GSM" }, { label: "Shrinkage", value: "±5–7%" }, { label: "Colorfastness", value: "Grade 3–4 (natural dyes)" }, { label: "Construction", value: "Handspun yarn, handwoven on pit loom" }, { label: "Hand Feel", value: "Textured, rustic, unique character" }], gsmRange: "100–200 GSM", weaveTypes: ["Plain handloom", "Khadi silk", "Khadi denim", "Muslin khadi"], applications: ["Shirts", "Dresses", "Jackets", "Accessories", "Premium casualwear"], careInstructions: ["Hand wash cold", "Line dry in shade", "Iron medium heat", "Expect natural texture variations"], sustainability: "Zero carbon footprint in spinning and weaving — entirely hand-powered. Supports rural artisan livelihoods. Fair trade certified options available.", certifications: ["Khadi Mark (KVIC)", "Fair Trade"], sourcing: "Gujarat and West Bengal khadi cooperatives. Direct relationships with artisan communities." },
  { slug: "viscose", name: "Viscose", metaTitle: "Viscose & Rayon Fabric for Garments | Vedant Fashion", metaDescription: "Viscose and rayon fabric specifications for garment manufacturing. EcoVero, Tencel, and conventional viscose options.", heroDescription: "Viscose offers the drape of silk at a fraction of the cost. We offer conventional, EcoVero™, and Tencel™ Lyocell options — all OEKO-TEX certified.", properties: [{ label: "Fibre Type", value: "Regenerated cellulose" }, { label: "GSM Range", value: "90–160 GSM" }, { label: "Shrinkage", value: "±3–5%" }, { label: "Colorfastness", value: "Grade 4 (ISO 105-C06)" }, { label: "Drape", value: "Excellent — fluid and flowing" }, { label: "Moisture Absorption", value: "11–14%" }], gsmRange: "90–160 GSM", weaveTypes: ["Plain", "Twill", "Satin", "Crepe"], applications: ["Dresses", "Blouses", "Skirts", "Wrap garments", "Resort wear"], careInstructions: ["Hand wash or gentle cycle 30°C", "Do not wring — reshape while damp", "Iron low-medium heat", "Dry clean for best results"], sustainability: "Tencel™ Lyocell (Lenzing) uses closed-loop solvent process. EcoVero™ has 50% lower carbon footprint than conventional viscose. FSC-certified wood pulp.", certifications: ["OEKO-TEX Standard 100", "Lenzing Tencel™", "EU Ecolabel (EcoVero)"], sourcing: "Lenzing AG (Austria) for Tencel and EcoVero. Indian mills for conventional viscose — all OEKO-TEX certified." },
  { slug: "organic-cotton", name: "Organic Cotton", metaTitle: "Organic Cotton Fabric — GOTS Certified | Vedant Fashion", metaDescription: "GOTS-certified organic cotton fabric for sustainable garment manufacturing. Full chain-of-custody from farm to finished garment.", heroDescription: "Organic cotton is grown without synthetic pesticides or GMO seeds, certified to GOTS standards from farm to finished garment. We are one of India's leading GOTS-certified organic cotton garment manufacturers.", properties: [{ label: "Fibre Type", value: "Organic Gossypium (non-GMO)" }, { label: "GSM Range", value: "70–300 GSM" }, { label: "Shrinkage", value: "±3% (pre-washed)" }, { label: "Colorfastness", value: "Grade 4+ (GOTS-approved dyes)" }, { label: "Certification", value: "GOTS 6.0 — full chain of custody" }, { label: "Chemical Processing", value: "GOTS-approved — no harmful chemicals" }], gsmRange: "70–300 GSM", weaveTypes: ["Poplin", "Twill", "Jersey", "Voile", "Oxford", "Canvas"], applications: ["All garment types", "Baby wear", "Intimate apparel", "Activewear"], careInstructions: ["Machine wash 40°C with eco-detergent", "Tumble dry low", "Iron medium heat", "Improves with washing — softer over time"], sustainability: "91% less water, 62% less energy than conventional cotton. No GMO seeds. No synthetic pesticides. Full traceability from organic farm to finished garment.", certifications: ["GOTS 6.0", "OEKO-TEX Standard 100", "OCS (Organic Content Standard)"], sourcing: "GOTS-certified farms in Gujarat, Maharashtra, and Madhya Pradesh. Spinning, weaving, dyeing, and finishing all within GOTS-certified supply chain." },
  { slug: "handloom", name: "Handloom", metaTitle: "Handloom Fabric — Artisan Woven in India | Vedant Fashion", metaDescription: "Handloom fabric specifications for sustainable fashion. Hand-woven in India by skilled artisans. Fair trade and heritage textiles.", heroDescription: "Handloom fabrics are woven on traditional looms by skilled Indian artisans. Each piece carries unique character and supports rural livelihoods — the ultimate sustainable textile.", properties: [{ label: "Fibre Type", value: "Cotton, silk, wool, or blends" }, { label: "GSM Range", value: "80–250 GSM" }, { label: "Shrinkage", value: "±5–8% (varies by weave)" }, { label: "Colorfastness", value: "Grade 3–4" }, { label: "Construction", value: "Hand-woven on traditional looms" }, { label: "Width", value: "44–56 inches (varies by loom)" }], gsmRange: "80–250 GSM", weaveTypes: ["Plain handloom", "Ikat", "Jamdani", "Kantha", "Chanderi", "Maheshwari"], applications: ["Premium shirts", "Dresses", "Accessories", "Home textiles", "Limited editions"], careInstructions: ["Hand wash cold — gentle handling", "Line dry in shade", "Iron medium heat", "Natural texture variations are a feature"], sustainability: "Zero-electricity weaving process. Supports artisan communities and preserves traditional craft. Handloom Mark certification guarantees authentic hand-weaving.", certifications: ["Handloom Mark (India)", "Fair Trade", "GI Tags (regional)"], sourcing: "Weaver cooperatives across Gujarat, West Bengal, Andhra Pradesh, and Tamil Nadu." },
  { slug: "tencel", name: "Tencel™ Lyocell", metaTitle: "Tencel Lyocell Fabric for Garments | Vedant Fashion", metaDescription: "Tencel Lyocell fabric from Lenzing AG. Sustainable, silky drape, biodegradable. For premium garment manufacturing.", heroDescription: "Tencel™ Lyocell by Lenzing AG is a premium sustainable fibre made from FSC-certified wood pulp using a closed-loop solvent process. Silky drape, excellent moisture management.", properties: [{ label: "Fibre Type", value: "Regenerated cellulose (Lyocell)" }, { label: "GSM Range", value: "90–160 GSM" }, { label: "Shrinkage", value: "±2%" }, { label: "Colorfastness", value: "Grade 4+" }, { label: "Moisture Management", value: "50% better than cotton" }, { label: "Biodegradable", value: "Yes — fully compostable" }], gsmRange: "90–160 GSM", weaveTypes: ["Plain", "Satin", "Twill", "Jersey"], applications: ["Dresses", "Blouses", "Loungewear", "Intimate apparel"], careInstructions: ["Machine wash 30°C gentle", "Do not tumble dry", "Iron low heat", "Retains shape well"], sustainability: "Closed-loop solvent process recovers 99.5% of chemicals. FSC-certified eucalyptus wood pulp. Carbon-neutral production at Lenzing facilities.", certifications: ["Lenzing Tencel™", "OEKO-TEX Standard 100", "EU Ecolabel"], sourcing: "Lenzing AG, Heiligenkreuz (Austria). Fibre shipped to Indian mills for fabric weaving and garment production." },
  { slug: "bamboo", name: "Bamboo Viscose", metaTitle: "Bamboo Viscose Fabric for Garments | Vedant Fashion", metaDescription: "Bamboo viscose fabric specifications. Soft, antibacterial, sustainable. For loungewear, T-shirts, and intimate apparel.", heroDescription: "Bamboo viscose offers exceptional softness with natural antibacterial properties. Ideal for loungewear, basics, and intimate apparel.", properties: [{ label: "Fibre Type", value: "Regenerated cellulose (bamboo)" }, { label: "GSM Range", value: "130–220 GSM" }, { label: "Shrinkage", value: "±3%" }, { label: "Colorfastness", value: "Grade 4" }, { label: "Special Properties", value: "Antibacterial, thermoregulating" }, { label: "Hand Feel", value: "Ultra-soft, silky" }], gsmRange: "130–220 GSM", weaveTypes: ["Jersey", "Interlock", "Rib", "French terry"], applications: ["Loungewear", "T-shirts", "Underwear", "Yoga wear", "Baby wear"], careInstructions: ["Machine wash 30°C gentle", "Do not bleach", "Line dry", "Iron low heat if needed"], sustainability: "Bamboo grows rapidly without pesticides. FSC-certified bamboo sources. Closed-loop viscose processing available.", certifications: ["OEKO-TEX Standard 100", "FSC"], sourcing: "FSC-certified bamboo from managed plantations. Processed at OEKO-TEX certified mills." },
  { slug: "silk", name: "Silk", metaTitle: "Silk Fabric for Premium Garments | Vedant Fashion", metaDescription: "Silk fabric specifications for luxury garment manufacturing. Mulberry silk, ahimsa silk, and silk blends.", heroDescription: "Silk is the ultimate luxury natural fibre — lustrous, strong, and temperature-regulating. We offer mulberry silk, ahimsa (peace) silk, and silk blends.", properties: [{ label: "Fibre Type", value: "Natural protein fibre (Bombyx mori)" }, { label: "GSM Range", value: "40–120 GSM (measured in momme)" }, { label: "Shrinkage", value: "±3% (dry clean recommended)" }, { label: "Colorfastness", value: "Grade 3–4" }, { label: "Lustre", value: "High — natural sheen" }, { label: "Momme Weight", value: "12–30 mm" }], gsmRange: "40–120 GSM (12–30 momme)", weaveTypes: ["Charmeuse", "Crepe de Chine", "Habotai", "Dupioni", "Organza"], applications: ["Evening wear", "Blouses", "Scarves", "Linings", "Bridal"], careInstructions: ["Dry clean recommended", "Hand wash cold with silk detergent", "Iron on silk setting", "Store away from direct light"], sustainability: "Ahimsa (peace) silk available — no silkworms harmed. Traditional sericulture supports rural Indian communities.", certifications: ["OEKO-TEX Standard 100", "Silk Mark (India)"], sourcing: "Karnataka and West Bengal — India's premier silk-producing regions. Mulberry and tussar silk variants." },
];

// ---- 4. KNOWLEDGE PAGES (Manufacturing, Compliance, Logistics, Buyer Resources) ----

export interface KnowledgePage {
  slug: string;
  cluster: "manufacturing" | "compliance" | "logistics" | "buyer";
  metaTitle: string;
  metaDescription: string;
  subtitle: string;
  title: string;
  heroDescription: string;
  sections: { heading: string; content: string; bullets?: string[] }[];
}

export const knowledgePages: KnowledgePage[] = [
  // -- Manufacturing Knowledge --
  {
    slug: "garment-manufacturing-process", cluster: "manufacturing",
    metaTitle: "Garment Manufacturing Process Explained | Vedant Fashion",
    metaDescription: "Complete guide to the garment manufacturing process — from fabric sourcing to finished garment. 6 production stages explained for B2B buyers.",
    subtitle: "Manufacturing Guide", title: "Garment Manufacturing Process",
    heroDescription: "A comprehensive guide to how garments are manufactured — from raw fabric to finished, packed product. Understanding the process helps buyers make informed sourcing decisions.",
    sections: [
      { heading: "1. Fabric Sourcing & Testing", content: "The manufacturing process begins with sourcing the right fabric. At Vedant Fashion, all fabrics are tested in our in-house lab for GSM, shrinkage, colorfastness, and tensile strength before entering production.", bullets: ["GSM verification (ISO 3801)", "Shrinkage testing (ISO 6330)", "Colorfastness to washing (ISO 105-C06)", "Fibre composition analysis"] },
      { heading: "2. Pattern Making & Grading", content: "Patterns are developed using CAD software (Gerber AccuMark) and graded across the buyer's size range. Digital grading ensures consistency across all sizes — from XS to 3XL for EU markets.", bullets: ["CAD pattern development", "Digital grading across EU sizes", "Marker efficiency optimisation (85%+)", "Pattern archive for repeat orders"] },
      { heading: "3. Cutting", content: "Fabric is spread on automated spreading machines and cut using CNC cutting machines (Lectra Vector iX). Laser cutting is available for delicate fabrics and intricate patterns.", bullets: ["Automated fabric spreading", "CNC cutting — 10,000 pcs/day capacity", "Laser cutting for delicates", "Fusible interlining application"] },
      { heading: "4. Stitching & Assembly", content: "Cut pieces are assembled on specialised sewing lines. Our 12 production lines use 600+ machines including single needle, overlock, flatlock, coverstitch, and buttonhole machines.", bullets: ["12 dedicated production lines", "600+ industrial sewing machines", "Specialised machines for complex constructions", "In-line quality checks every 500 pieces"] },
      { heading: "5. Finishing & Pressing", content: "Finished garments undergo washing (if required), pressing, and final quality inspection. Garment washing options include enzyme wash, stone wash, and softener treatments.", bullets: ["Steam pressing and finishing", "Garment washing and dyeing", "Embroidery and print application", "Thread trimming and cleaning"] },
      { heading: "6. Packaging & Dispatch", content: "Garments are packed according to buyer specifications — polybags, tissue wrap, hangtags, barcoding, and carton packing. Ready for FCL or LCL shipment.", bullets: ["Custom packaging per buyer spec", "Barcoding and EAN generation", "Carton packing with moisture protection", "FCL/LCL shipment coordination"] },
    ],
  },
  {
    slug: "private-label-garment-manufacturing", cluster: "manufacturing",
    metaTitle: "Private Label Garment Manufacturing — Complete Guide | Vedant Fashion",
    metaDescription: "How private label garment manufacturing works — from brand brief to delivery. NDA, sampling, production, and EU-compliant labelling.",
    subtitle: "Private Label Guide", title: "Private Label Garment Manufacturing",
    heroDescription: "A complete guide to private label manufacturing for fashion brands. Understand the process, timelines, costs, and what to expect from your manufacturer.",
    sections: [
      { heading: "What Is Private Label Manufacturing?", content: "Private label manufacturing is when a factory produces garments under your brand name. The manufacturer handles production while you own the design, branding, and intellectual property. At Vedant Fashion, we produce for 200+ brands across Europe — with complete confidentiality.", bullets: ["Your brand on every label and hangtag", "Full IP protection — NDA signed", "No Vedant branding on any product", "Dedicated production lines per client"] },
      { heading: "The Private Label Process", content: "Our private label process follows six stages: Brief → Development → Sampling → Approval → Production → Delivery. Each stage has clear timelines and buyer approval gates.", bullets: ["Stage 1: Brand brief and tech pack review (Day 1–3)", "Stage 2: Fabric sourcing and pattern development (Day 4–14)", "Stage 3: Counter sample production (Day 15–24)", "Stage 4: Fit approval and size set (Day 25–35)", "Stage 5: Bulk production with QC (Day 36–75)", "Stage 6: Packing and shipment (Day 76–80)"] },
      { heading: "EU Labelling Requirements", content: "For European markets, garment labels must comply with EU Textile Regulation 1007/2011. We handle all labelling requirements including fibre composition, care symbols (ISO 3758), country of origin, and importer details.", bullets: ["Fibre composition in required languages", "Care symbols per ISO 3758", "Country of origin marking", "Importer name and address", "Size labelling (EU/UK/US conversions)"] },
      { heading: "Pricing & MOQ", content: "Private label pricing is fully transparent with itemised cost breakdowns. Typical range: €4.50–€18.00 FOB per unit. MOQ starts at 300 pieces per style per colour for first orders, 200 for repeats.", bullets: ["Fabric cost per metre (with wastage)", "CMT cost per garment", "Trims, labels, packaging — itemised", "Testing and certification costs included", "Sample costs credited against first bulk order"] },
    ],
  },
  {
    slug: "oem-garment-production", cluster: "manufacturing",
    metaTitle: "OEM Garment Production — FOB, CMT, ODM Explained | Vedant Fashion",
    metaDescription: "OEM garment production models explained — FOB, CMT, ODM. Choose the right manufacturing model for your brand.",
    subtitle: "OEM Guide", title: "OEM Garment Production Models",
    heroDescription: "Understanding OEM garment production models — Full Package (FOB), Cut-Make-Trim (CMT), and Original Design Manufacturing (ODM). Choose the right model for your brand.",
    sections: [
      { heading: "FOB (Full Package Production)", content: "In FOB production, the manufacturer handles everything — fabric sourcing, trims, production, QC, and packing. The buyer receives finished garments at the origin port. Ideal for brands without a sourcing office in India.", bullets: ["Fabric sourcing from certified mills", "All trims and accessories included", "Complete QC at every stage", "FOB pricing includes everything to port"] },
      { heading: "CMT (Cut-Make-Trim)", content: "In CMT production, the buyer supplies fabric and trims. The manufacturer handles cutting, stitching, finishing, and packing. Ideal for brands with established fabric suppliers.", bullets: ["Lower per-unit cost (no fabric margin)", "Full control over fabric selection", "Faster lead times (no fabric sourcing)", "Ideal for brands with own fabric suppliers"] },
      { heading: "ODM (Original Design Manufacturing)", content: "In ODM, the manufacturer develops designs based on the buyer's brief, mood board, or trend direction. Full design-to-delivery service including pattern making, sampling, and production.", bullets: ["Design development from concept", "Pattern making and grading included", "2 rounds of sampling in quote", "Seasonal trend input from our design team"] },
    ],
  },
  {
    slug: "bulk-garment-production", cluster: "manufacturing",
    metaTitle: "Bulk Garment Production — Large Order Manufacturing | Vedant Fashion",
    metaDescription: "Bulk garment production capabilities. 50,000 pieces/month capacity. Volume pricing, containerised shipping, dedicated production lines.",
    subtitle: "Bulk Production", title: "Bulk Garment Production",
    heroDescription: "Large-volume garment production with dedicated lines, volume-based pricing, and containerised shipping. 50,000 pieces/month capacity across 4 facilities.",
    sections: [
      { heading: "Production Capacity", content: "Our four manufacturing units have a combined capacity of 50,000 pieces per month. For large orders, we allocate dedicated production lines and assign a senior merchandiser to your account.", bullets: ["50,000 pieces/month total capacity", "12 production lines across 4 units", "Dedicated lines for orders above 5,000 pcs", "Scalable capacity with partner units"] },
      { heading: "Volume Pricing", content: "Bulk orders benefit from volume-based pricing tiers. Fabric costs decrease with larger metreage, and CMT efficiency improves with longer production runs.", bullets: ["5–10% discount on orders above 3,000 pcs", "10–15% discount on orders above 10,000 pcs", "Fabric MOQ pricing from mill (3,000m+)", "Annual framework agreements available"] },
      { heading: "Containerised Shipping", content: "Large orders are shipped in full container loads (FCL) for maximum cost efficiency. We handle stuffing, container booking, and all export documentation.", bullets: ["20ft container: ~5,000–8,000 pcs (depending on style)", "40ft container: ~10,000–16,000 pcs", "Container tracking provided", "Multiple port options across India"] },
    ],
  },
  {
    slug: "garment-quality-control", cluster: "manufacturing",
    metaTitle: "Garment Quality Control Process | Vedant Fashion",
    metaDescription: "4-stage garment quality control process. AQL 2.5 inspection, in-house textile lab, ISO 2859-1 compliance.",
    subtitle: "Quality Guide", title: "Garment Quality Control Process",
    heroDescription: "A detailed look at our 4-stage quality control process — from incoming fabric inspection to pre-shipment audit. AQL 2.5 at every stage.",
    sections: [
      { heading: "Incoming Fabric Inspection", content: "Every fabric lot is tested before entering production. Our in-house lab checks GSM, shrinkage, colorfastness, and composition.", bullets: ["4-point fabric inspection system", "GSM verification (ISO 3801)", "Shrinkage testing (ISO 6330)", "Colorfastness — wash, rub, light"] },
      { heading: "In-Line Quality Control", content: "During production, our QC team monitors every sewing operation. Random sampling per AQL 2.5 ensures defects are caught early.", bullets: ["Roving QC inspectors per line", "Measurement audit every 500 pieces", "Needle tracking — broken needle policy", "Real-time defect logging"] },
      { heading: "Final Inspection", content: "Pre-shipment inspection per ISO 2859-1 Level II. AQL 2.5 for major defects, AQL 4.0 for minor. 100% needle detection on every piece.", bullets: ["AQL 2.5 — ISO 2859-1 Level II", "100% metal/needle detection", "Measurement check on all critical points", "Visual appearance and pressing standards"] },
      { heading: "Third-Party Inspection", content: "We coordinate with SGS, Bureau Veritas, Intertek, and TÜV for buyer-nominated third-party inspections. Buyer QC teams welcome on-site.", bullets: ["SGS, Bureau Veritas, Intertek, TÜV", "Buyer QC workspace provided", "Inspection reports within 24 hours", "Video inspection available for remote buyers"] },
    ],
  },
  {
    slug: "garment-sampling-process", cluster: "manufacturing",
    metaTitle: "Garment Sampling Process — From Concept to Production | Vedant Fashion",
    metaDescription: "Garment sampling process explained — development sample, fit sample, PP sample, size set. Timelines and costs.",
    subtitle: "Sampling Guide", title: "Garment Sampling Process",
    heroDescription: "Understanding the garment sampling process — each stage from initial concept to production-ready approval. Timelines, costs, and what to expect.",
    sections: [
      { heading: "Development Sample", content: "The first sample is created from your tech pack or design brief. Uses available fabric (may not be final fabric). Purpose: validate design, proportion, and construction.", bullets: ["Turnaround: 7–10 working days", "Made in available fabric (closest match)", "Basic construction — no branding", "Free for confirmed order enquiries"] },
      { heading: "Fit Sample", content: "Once design is approved, a fit sample is made in the actual fabric with correct construction. Measured against your spec sheet with tolerance report.", bullets: ["Turnaround: 5–7 working days", "Actual fabric and construction", "Full measurement report", "Fit approval required before PP"] },
      { heading: "Pre-Production (PP) Sample", content: "The final approval sample with all branding — labels, hangtags, packaging. This is exactly what bulk production will look like.", bullets: ["Turnaround: 5–7 working days", "All branding elements included", "Wash tested (3 home washes)", "Final approval gate before bulk"] },
      { heading: "Size Set", content: "Graded samples across 3–5 sizes for fit verification. Critical for ensuring consistent fit across the size range.", bullets: ["3–5 sizes per style", "Full measurement chart provided", "Turnaround: 7–10 working days", "Used for internal buyer fit sessions"] },
    ],
  },
  {
    slug: "fabric-sourcing-india", cluster: "manufacturing",
    metaTitle: "Fabric Sourcing from India — Guide for European Buyers | Vedant Fashion",
    metaDescription: "Guide to sourcing fabric from India. GOTS certified mills, pricing, MOQ, and logistics for European garment brands.",
    subtitle: "Sourcing Guide", title: "Fabric Sourcing from India",
    heroDescription: "A practical guide for European buyers sourcing fabric from India — certified mills, pricing structures, minimum orders, and quality standards.",
    sections: [
      { heading: "Why Source Fabric from India?", content: "India is the world's second-largest textile producer with a deep heritage in cotton, linen, and speciality weaves. GOTS-certified organic cotton, competitive pricing, and established export infrastructure make India a top sourcing destination.", bullets: ["World's largest organic cotton producer", "30% lower fabric costs vs. European mills", "Established GOTS certification infrastructure", "Rich heritage in handloom and specialty weaves"] },
      { heading: "Key Fabric Regions", content: "Each region of India specialises in different fabric types. Understanding regional strengths helps buyers source the right fabric.", bullets: ["Gujarat: Cotton poplin, twill, canvas (GOTS hub)", "Tamil Nadu: Fine count cotton, voile, jersey", "Maharashtra: Cotton blends, denim, workwear fabrics", "West Bengal: Handloom, khadi, muslin", "Karnataka: Silk — mulberry and tussar"] },
      { heading: "Certification & Compliance", content: "For European markets, fabric certification is essential. Indian mills offer GOTS, OEKO-TEX, GRS, and BCI certifications with full chain-of-custody documentation.", bullets: ["GOTS 6.0 — farm-to-fabric traceability", "OEKO-TEX Standard 100 — chemical safety", "GRS 4.0 — recycled content verification", "REACH compliance — EU chemical safety"] },
      { heading: "Pricing & MOQ", content: "Fabric pricing from India is competitive — typically 30–50% lower than European mills for comparable quality. MOQs vary by mill but typically start at 500 metres for stock qualities.", bullets: ["Stock fabrics: 500m MOQ", "Custom development: 1,500–3,000m MOQ", "Lab dips: 5–7 working days", "Strike-offs: 7–10 working days"] },
    ],
  },

  // -- Compliance Pages --
  {
    slug: "oeko-tex-certification", cluster: "compliance",
    metaTitle: "OEKO-TEX Standard 100 Certification for Garments | Vedant Fashion",
    metaDescription: "OEKO-TEX Standard 100 certification explained — what it means, testing criteria, and why it matters for European textile imports.",
    subtitle: "Certification Guide", title: "OEKO-TEX Standard 100 Certification",
    heroDescription: "OEKO-TEX Standard 100 is the world's leading testing and certification system for textile products. Every Vedant Fashion garment is OEKO-TEX certified — tested for harmful substances.",
    sections: [
      { heading: "What Is OEKO-TEX Standard 100?", content: "OEKO-TEX Standard 100 is an independent testing and certification system for raw, semi-finished, and finished textile products at all processing levels. It tests for harmful substances including AZO dyes, formaldehyde, heavy metals, and pesticides.", bullets: ["Tests for 100+ harmful chemicals", "4 product classes based on skin contact", "Annual renewal with random market testing", "Globally recognised — 10,000+ certified facilities"] },
      { heading: "Product Classes", content: "OEKO-TEX classifies products by end use, with stricter limits for items with more skin contact.", bullets: ["Class I: Baby products (strictest limits)", "Class II: Products worn next to skin", "Class III: Products not worn next to skin", "Class IV: Furnishing materials"] },
      { heading: "Our Certification", content: "Vedant Fashion holds OEKO-TEX Standard 100 certification for Product Class I and II — meaning our garments meet the strictest safety standards, even for baby wear.", bullets: ["Certificate: SH012 345678 (Hohenstein)", "Product Class I and II certified", "All fabrics and trims tested", "Annual renewal with third-party verification"] },
    ],
  },
  {
    slug: "gots-certification", cluster: "compliance",
    metaTitle: "GOTS Certification — Global Organic Textile Standard | Vedant Fashion",
    metaDescription: "GOTS certification explained — organic textile standard requirements, chain of custody, and what it means for your garments.",
    subtitle: "Certification Guide", title: "GOTS Certification (Global Organic Textile Standard)",
    heroDescription: "GOTS is the worldwide leading textile processing standard for organic fibres. Vedant Fashion is GOTS 6.0 certified with full chain-of-custody from certified organic farms to finished garments.",
    sections: [
      { heading: "What Is GOTS?", content: "The Global Organic Textile Standard (GOTS) is the world's leading processing standard for organic textiles. It covers the entire supply chain — from harvesting raw materials through manufacturing to labelling.", bullets: ["Requires minimum 70% organic fibre content", "Covers environmental and social criteria", "Full supply chain certification required", "Annual on-site inspection by accredited body"] },
      { heading: "GOTS Requirements", content: "GOTS certification goes beyond organic fibre content. It sets strict environmental criteria for processing and social criteria for labour conditions.", bullets: ["All chemical inputs must be GOTS-approved", "Wastewater treatment required", "No AZO dyes, formaldehyde, or heavy metals", "Living wages and safe working conditions", "No child labour — verified annually"] },
      { heading: "Transaction Certificate (TC)", content: "Every shipment of GOTS-certified goods comes with a Transaction Certificate issued by our certification body. This provides full traceability for your customers and regulators.", bullets: ["Issued per shipment by certification body", "Links organic fibre from farm to garment", "Required for GOTS claims on consumer labels", "Digital verification available online"] },
    ],
  },
  {
    slug: "bsci-audit", cluster: "compliance",
    metaTitle: "BSCI Audit — Business Social Compliance Initiative | Vedant Fashion",
    metaDescription: "BSCI audit explained — social compliance standards, audit process, and what European buyers should expect from BSCI-audited factories.",
    subtitle: "Social Compliance", title: "BSCI Audit (Business Social Compliance Initiative)",
    heroDescription: "BSCI is a leading supply chain management system for social compliance in global supply chains. Vedant Fashion is BSCI-audited with Grade A rating.",
    sections: [
      { heading: "What Is BSCI?", content: "The Business Social Compliance Initiative (BSCI) is a programme by amfori that helps companies monitor and improve social compliance in their global supply chains. It covers 11 core labour rights areas.", bullets: ["11 core performance areas", "Based on ILO conventions and UN declarations", "Used by 2,500+ companies worldwide", "Grading system: A (best) to E (critical)"] },
      { heading: "The 11 Performance Areas", content: "BSCI audits assess factories across 11 areas covering labour rights, health & safety, and environmental management.", bullets: ["Social management system", "Workers' involvement and protection", "Freedom of association and collective bargaining", "No discrimination, fair remuneration", "Decent working hours", "Occupational health and safety", "No child labour, no forced labour", "Protection of the environment", "Ethical business behaviour"] },
      { heading: "Our BSCI Status", content: "Vedant Fashion has maintained a BSCI Grade A rating since 2019. Our latest audit was conducted by TÜV Rheinland.", bullets: ["Grade A rating (highest)", "Audited by TÜV Rheinland", "Annual re-audit cycle", "Full report available to registered buyers"] },
    ],
  },
  {
    slug: "reach-compliance", cluster: "compliance",
    metaTitle: "REACH Compliance for Textile Exports to EU | Vedant Fashion",
    metaDescription: "REACH regulation compliance for garment exports to Europe. Restricted substances, testing requirements, and documentation.",
    subtitle: "Chemical Compliance", title: "REACH Compliance for Textiles",
    heroDescription: "EU REACH Regulation (EC) No 1907/2006 is the cornerstone of chemical safety for products sold in Europe. All Vedant Fashion garments are fully REACH-compliant.",
    sections: [
      { heading: "What Is REACH?", content: "REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals) is the EU regulation on chemical safety. It restricts or bans substances of very high concern (SVHCs) in products sold in the EU.", bullets: ["Applies to all products sold in the EU", "Substances of Very High Concern (SVHC) list", "Updated regularly — currently 200+ SVHCs", "Enforcement by national market surveillance"] },
      { heading: "Textile-Specific Requirements", content: "For textiles, REACH restricts chemicals commonly used in dyeing, finishing, and processing — including AZO dyes, formaldehyde, heavy metals, and certain flame retardants.", bullets: ["AZO dyes — 22 restricted aromatic amines (< 30 ppm each)", "Formaldehyde — ≤75 ppm for skin contact", "Heavy metals (lead, cadmium, chromium VI)", "Nickel release from metal components", "PFAS restrictions (increasing)"] },
      { heading: "Our Compliance", content: "All Vedant Fashion garments are tested for REACH-restricted substances by accredited labs. We maintain a Restricted Substance List (RSL) exceeding REACH requirements.", bullets: ["Testing by SGS and Bureau Veritas", "RSL exceeds REACH minimum requirements", "ZDHC MRSL Level 2 conformance", "Test reports available per shipment"] },
    ],
  },
  {
    slug: "eu-textile-regulations", cluster: "compliance",
    metaTitle: "EU Textile Regulations — Labelling & Compliance Guide | Vedant Fashion",
    metaDescription: "Guide to EU textile regulations — Regulation 1007/2011 labelling requirements, care symbols, and compliance for garment imports.",
    subtitle: "Regulatory Guide", title: "EU Textile Regulations",
    heroDescription: "A complete guide to EU textile regulations for garment importers — labelling requirements, fibre composition, care symbols, and product safety directives.",
    sections: [
      { heading: "EU Textile Regulation 1007/2011", content: "This regulation governs the labelling of textile products in the EU. It requires accurate fibre composition labelling in the official language(s) of the member state where the product is sold.", bullets: ["Fibre composition by weight percentage", "Must list all fibres above 0%", "Multi-component labelling for garments with different parts", "Labelling in official language(s) of sale country"] },
      { heading: "Care Labelling (ISO 3758)", content: "While not legally mandatory in the EU, care labelling is standard practice and expected by retailers. ISO 3758 defines the standard care symbols.", bullets: ["5 care symbol categories: wash, bleach, dry, iron, professional care", "Temperature and process limitations", "Symbols must be permanent and legible after washing", "Recommended: test all care instructions on garment"] },
      { heading: "Product Safety", content: "The EU General Product Safety Directive requires all products to be safe for consumers. For textiles, this covers chemical safety (REACH), mechanical safety (buttons, drawstrings), and flammability.", bullets: ["General Product Safety Directive 2001/95/EC", "Children's clothing — drawstring and cord requirements (EN 14682)", "Button and snap fastener strength", "Flammability requirements for nightwear"] },
    ],
  },
  {
    slug: "sustainable-fashion-manufacturing", cluster: "compliance",
    metaTitle: "Sustainable Fashion Manufacturing — Certifications & Practices | Vedant Fashion",
    metaDescription: "Sustainable fashion manufacturing practices — GOTS, OEKO-TEX, GRS certifications, water conservation, renewable energy, and fair labour.",
    subtitle: "Sustainability Guide", title: "Sustainable Fashion Manufacturing",
    heroDescription: "What does sustainable fashion manufacturing actually look like? Beyond marketing claims — measurable practices, third-party certifications, and transparent reporting.",
    sections: [
      { heading: "What Makes Manufacturing Sustainable?", content: "Sustainable garment manufacturing addresses environmental impact (materials, water, energy, waste) and social impact (fair wages, safe conditions, community development).", bullets: ["Certified organic and recycled materials", "Water recycling and ZLD systems", "Renewable energy (solar, wind)", "Fair wages and safe working conditions", "Zero textile waste to landfill", "Third-party verification of all claims"] },
      { heading: "Key Certifications", content: "Legitimate sustainability requires third-party verification. These are the certifications that matter for garment manufacturing.", bullets: ["GOTS — organic textile production", "OEKO-TEX — chemical safety testing", "GRS — recycled content verification", "SA8000 / BSCI — social compliance", "ISO 14001 — environmental management", "ZDHC — chemical management (MRSL)"] },
      { heading: "EU Green Claims Directive", content: "The upcoming EU Green Claims Directive will require substantiation of all environmental claims. Manufacturers need robust data and third-party certification to support sustainability marketing.", bullets: ["All green claims must be substantiated", "Third-party verification required", "Life cycle assessment data may be needed", "Penalties for greenwashing", "Effective from 2026 (expected)"] },
    ],
  },

  // -- Logistics Pages --
  {
    slug: "shipping-to-europe", cluster: "logistics",
    metaTitle: "Shipping Garments to Europe from India | Vedant Fashion",
    metaDescription: "Complete guide to shipping garments from India to Europe. Transit times, ports, Incoterms, documentation, and customs clearance.",
    subtitle: "Logistics Guide", title: "Shipping Garments to Europe",
    heroDescription: "Everything European buyers need to know about importing garments from India — shipping routes, transit times, documentation, and customs procedures.",
    sections: [
      { heading: "Shipping Routes", content: "We ship from three Indian ports/airports to major European destinations.", bullets: ["Nhava Sheva (JNPT) → Hamburg: 18–20 days", "Mundra → Rotterdam: 18–22 days", "Nhava Sheva → Antwerp: 20–22 days", "Nhava Sheva → Genoa: 16–18 days", "Ahmedabad Airport → any EU city: 3–5 days (air)"] },
      { heading: "Incoterms", content: "We offer FOB, CIF, and DDP terms depending on your preference and import setup.", bullets: ["FOB — most common, buyer arranges freight", "CIF — we arrange freight and insurance", "DDP — full door-to-door including duties and VAT"] },
      { heading: "Documentation", content: "Every shipment includes a complete set of export and customs clearance documents.", bullets: ["Commercial Invoice and Packing List", "Bill of Lading / Airway Bill", "Certificate of Origin (GSP preferential tariff)", "EUR.1 Movement Certificate", "GOTS Transaction Certificate", "AQL Inspection Report"] },
    ],
  },
  {
    slug: "shipping-to-russia", cluster: "logistics",
    metaTitle: "Shipping Garments to Russia from India | Vedant Fashion",
    metaDescription: "Guide to shipping garments from India to Russia. EAC certification, customs, transit times, and documentation.",
    subtitle: "Russia Logistics", title: "Shipping Garments to Russia",
    heroDescription: "Practical guide for shipping garments from India to Russia and CIS markets — EAC certification, customs requirements, and logistics.",
    sections: [
      { heading: "Shipping Route", content: "We ship to Russian ports via sea freight, with air freight available for urgent shipments.", bullets: ["Nhava Sheva → St. Petersburg: 25–30 days (sea)", "Mundra → Novorossiysk: 20–25 days (sea)", "Ahmedabad → Moscow: 3–5 days (air)"] },
      { heading: "EAC Certification", content: "Textile products sold in EAEU countries require EurAsian Conformity (EAC) certification under TR CU 017/2011.", bullets: ["EAC certification for textile safety", "TR CU 017/2011 compliance", "Russian-language labelling required", "Certificate of Conformity or Declaration of Conformity"] },
      { heading: "Documentation", content: "Russian customs require specific documentation in addition to standard export documents.", bullets: ["Commercial Invoice (Russian translation)", "Packing List with detailed product descriptions", "Certificate of Origin", "EAC Certificate of Conformity", "Fabric test reports", "Russian-language care labels on all garments"] },
    ],
  },
  {
    slug: "shipping-lead-times", cluster: "logistics",
    metaTitle: "Garment Shipping Lead Times — India to Europe | Vedant Fashion",
    metaDescription: "Garment shipping lead times from India to European ports. Production + transit time calculator for wholesale buyers.",
    subtitle: "Lead Times", title: "Shipping Lead Times",
    heroDescription: "Understanding total lead times — from order confirmation to delivery at your warehouse. Production time + transit time + customs clearance.",
    sections: [
      { heading: "Total Lead Time Breakdown", content: "Total lead time = Production time + Transit time + Customs clearance. For a standard order, expect 60–75 days total from order confirmation to warehouse delivery.", bullets: ["Production: 45 days (standard)", "Production: 30 days (repeat/express)", "Sea transit: 18–25 days (depending on port)", "Customs clearance: 3–5 days (EU)", "Buffer: 5 days recommended"] },
      { heading: "How to Reduce Lead Times", content: "There are several strategies to reduce your total lead time.", bullets: ["Use stock fabrics (saves 2–3 weeks)", "Pre-approved patterns for repeat orders", "Express production (30 days) for priority orders", "Air freight for urgent shipments (3–5 days)", "DDP terms — we handle customs for you"] },
    ],
  },
  {
    slug: "export-documentation", cluster: "logistics",
    metaTitle: "Garment Export Documentation — Complete Checklist | Vedant Fashion",
    metaDescription: "Complete checklist of export documents for garment shipments from India to Europe. Commercial invoice, BL, certificates, and customs docs.",
    subtitle: "Documentation Guide", title: "Export Documentation",
    heroDescription: "A complete checklist of export documents provided with every garment shipment. Ensure smooth customs clearance and regulatory compliance.",
    sections: [
      { heading: "Commercial Documents", content: "Standard commercial documents required for every shipment.", bullets: ["Commercial Invoice (with HS codes)", "Proforma Invoice (pre-shipment)", "Packing List (carton-wise breakdown)", "Purchase Order confirmation"] },
      { heading: "Shipping Documents", content: "Transport and logistics documents.", bullets: ["Bill of Lading (sea) / Airway Bill (air)", "Shipping Instructions", "Container tracking details", "Insurance Certificate (CIF terms)"] },
      { heading: "Regulatory Documents", content: "Compliance and certification documents for customs clearance.", bullets: ["Certificate of Origin (GSP)", "EUR.1 Movement Certificate", "GOTS Transaction Certificate", "OEKO-TEX / GRS Certificate copies", "Fabric test reports (shrinkage, colorfastness)", "AQL Final Inspection Report"] },
    ],
  },
  {
    slug: "import-duties-europe", cluster: "logistics",
    metaTitle: "Import Duties on Garments from India to Europe | Vedant Fashion",
    metaDescription: "Guide to import duties on Indian garments entering the EU. GSP rates, HS codes, duty calculation, and preferential tariffs.",
    subtitle: "Duty Guide", title: "Import Duties — India to Europe",
    heroDescription: "Understanding import duties on garments from India to the EU — GSP preferential rates, HS code classification, and how to minimise duty costs.",
    sections: [
      { heading: "EU Import Duty Rates", content: "Garments from India entering the EU are subject to customs duty based on HS code classification. India benefits from GSP (Generalised Scheme of Preferences) reduced rates.", bullets: ["Standard MFN rate: 12% (woven garments)", "GSP rate: 9.6% (with Certificate of Origin)", "HS 6204: Women's suits, dresses — 12% MFN / 9.6% GSP", "HS 6205: Men's shirts — 12% MFN / 9.6% GSP", "HS 6206: Women's blouses — 12% MFN / 9.6% GSP"] },
      { heading: "How to Claim GSP Rates", content: "To claim GSP preferential tariff rates, you need a Certificate of Origin from the Indian exporter and must declare it to customs at import.", bullets: ["Certificate of Origin issued by us", "EUR.1 Movement Certificate for EU import", "Declare at customs clearance", "EORI number required for EU importers"] },
      { heading: "VAT on Import", content: "In addition to customs duty, VAT is charged on imported goods at the rate of the destination country.", bullets: ["Germany: 19% VAT", "France: 20% VAT", "Netherlands: 21% VAT", "Italy: 22% VAT", "Sweden: 25% VAT", "UK: 20% VAT (post-Brexit)"] },
    ],
  },

  // -- Buyer Resource Pages --
  {
    slug: "size-charts", cluster: "buyer",
    metaTitle: "Garment Size Charts — EU, UK, US Conversions | Vedant Fashion",
    metaDescription: "Garment size charts with EU, UK, and US conversions. Body measurements and garment measurements for wholesale buyers.",
    subtitle: "Buyer Resource", title: "Size Charts & Conversions",
    heroDescription: "Comprehensive size charts with EU, UK, and US conversions. Body measurements and finished garment measurements for accurate ordering.",
    sections: [
      { heading: "Women's Tops & Blouses", content: "EU size chart for women's tops, blouses, and shirts with body measurements.", bullets: ["XS = EU 34 = UK 6 = US 2", "S = EU 36 = UK 8 = US 4", "M = EU 38 = UK 10 = US 6", "L = EU 40 = UK 12 = US 8", "XL = EU 42 = UK 14 = US 10", "XXL = EU 44 = UK 16 = US 12", "3XL = EU 46 = UK 18 = US 14"] },
      { heading: "Women's Dresses", content: "EU size chart for women's dresses with body and garment measurements.", bullets: ["Same size range as tops (XS–3XL)", "Length options: Mini, Midi, Maxi", "Custom length available on request", "Plus size range: 4XL–5XL available"] },
      { heading: "Custom Grading", content: "We can grade to your specific size chart and measurement specifications.", bullets: ["Custom base size available", "Grade rules per your specification", "Fit samples across all sizes", "Plus size grading up to 5XL"] },
    ],
  },
  {
    slug: "fabric-care-guides", cluster: "buyer",
    metaTitle: "Fabric Care Guide for Garment Buyers | Vedant Fashion",
    metaDescription: "Fabric care instructions for cotton, linen, silk, viscose, and blends. ISO 3758 care symbols and washing recommendations.",
    subtitle: "Buyer Resource", title: "Fabric Care Guide",
    heroDescription: "Care instructions for every fabric in our range — washing temperatures, drying methods, and ironing guidelines per ISO 3758 care symbols.",
    sections: [
      { heading: "Cotton Care", content: "Cotton is durable and easy to care for. Pre-washed cotton has minimal residual shrinkage.", bullets: ["Machine wash 40°C", "Tumble dry low or line dry", "Iron medium-high heat", "Whites: 60°C wash acceptable"] },
      { heading: "Linen Care", content: "Linen softens and improves with each wash. Some natural wrinkling is a characteristic of the fibre.", bullets: ["Machine wash 40°C", "Line dry recommended (avoid tumble)", "Iron while slightly damp — high heat", "Natural wrinkle is a feature, not a defect"] },
      { heading: "Viscose & Tencel Care", content: "Regenerated cellulose fibres require gentler handling than cotton.", bullets: ["Machine wash 30°C on gentle cycle", "Do not wring — reshape while damp", "Line dry or flat dry", "Iron low-medium heat"] },
    ],
  },
  {
    slug: "minimum-order-quantities", cluster: "buyer",
    metaTitle: "Minimum Order Quantities (MOQ) for Garment Manufacturing | Vedant Fashion",
    metaDescription: "MOQ guide for garment manufacturing — standard MOQs, mini-MOQ options, and how to optimise your first order.",
    subtitle: "Buyer Resource", title: "Minimum Order Quantities (MOQ)",
    heroDescription: "Understanding MOQs for garment manufacturing — standard quantities, mini-MOQ options for emerging brands, and how to optimise your first order.",
    sections: [
      { heading: "Standard MOQs", content: "Our standard MOQs are designed to balance production efficiency with accessibility for growing brands.", bullets: ["First order: 300 pcs per style per colour", "Repeat orders: 200 pcs per style per colour", "Mixed colours: 100 pcs minimum per colour", "Mixed sizes: standard size ratio or custom"] },
      { heading: "Mini-MOQ Programme", content: "For emerging brands and test orders, we offer a mini-MOQ programme with slightly higher per-unit pricing.", bullets: ["Mini-MOQ: 100 pcs per style (mixed colours)", "10–15% premium on per-unit price", "Limited to stock fabrics", "Ideal for first-time buyers and market testing"] },
      { heading: "Fabric MOQs", content: "Fabric MOQs from our mill partners affect overall order planning.", bullets: ["Stock fabrics: 500m (immediately available)", "Custom colours on stock quality: 1,000m", "Custom development: 3,000m MOQ", "Print minimums: 500m per design"] },
    ],
  },
  {
    slug: "production-lead-times", cluster: "buyer",
    metaTitle: "Garment Production Lead Times | Vedant Fashion",
    metaDescription: "Production lead times for garment manufacturing — sampling, fabric sourcing, production, and shipping timelines.",
    subtitle: "Buyer Resource", title: "Production Lead Times",
    heroDescription: "Detailed breakdown of production lead times — from initial inquiry to delivered garments. Plan your buying calendar with confidence.",
    sections: [
      { heading: "Timeline Overview", content: "Standard total lead time from order confirmation to delivery is 60–75 days for European destinations.", bullets: ["Development sample: 7–10 days", "Fabric sourcing (stock): 5–7 days", "Fabric sourcing (custom): 25–35 days", "Pre-production sample: 5–7 days", "Bulk production: 30–45 days", "Sea freight to Europe: 18–25 days"] },
      { heading: "Express Options", content: "For urgent orders, we offer express timelines with priority production allocation.", bullets: ["Express production: 30 days (repeat styles)", "Rush sample: 3–5 days", "Air freight: 3–5 days", "Total express timeline: 40–50 days"] },
      { heading: "Planning Your Calendar", content: "We recommend ordering 4–5 months before your retail delivery date to allow for all stages including shipping and customs.", bullets: ["Spring/Summer: Place orders by October", "Autumn/Winter: Place orders by April", "Mid-season: 3 months lead time (express)", "Continuity/basics: Framework agreement for ongoing delivery"] },
    ],
  },
  {
    slug: "private-label-process", cluster: "buyer",
    metaTitle: "Private Label Process for Fashion Brands | Vedant Fashion",
    metaDescription: "Step-by-step private label garment manufacturing process — from brand brief to delivery. Timeline, costs, and what to prepare.",
    subtitle: "Buyer Resource", title: "Private Label Process",
    heroDescription: "A step-by-step guide to starting your private label garment line with Vedant Fashion. What to prepare, what to expect, and how the process works.",
    sections: [
      { heading: "What You Need to Provide", content: "To start your private label project, prepare the following materials.", bullets: ["Tech packs or design sketches", "Brand guidelines (logo, colours, typography)", "Size chart and measurement specifications", "Label and hangtag designs (or we design for you)", "Target price range and quantities", "Delivery timeline and destination"] },
      { heading: "What We Provide", content: "Our end-to-end private label service covers everything from development to delivery.", bullets: ["Dedicated merchandiser and QC officer", "Fabric sourcing from certified mills", "Pattern making and sampling (2 rounds)", "EU-compliant labelling setup", "Bulk production with AQL 2.5 QC", "Full export documentation and shipping"] },
      { heading: "Typical Timeline", content: "From initial inquiry to first delivery, expect approximately 10–12 weeks for your first private label order.", bullets: ["Week 1–2: Brief review and costing", "Week 3–4: Fabric sourcing and development sample", "Week 5–6: Fit sample and approval", "Week 7–8: PP sample with branding", "Week 9–12: Bulk production", "Week 13–14: Shipping and delivery"] },
    ],
  },
];

// ---- SITEMAP GENERATION ----

export function getAllPagePaths(): { path: string; title: string; cluster: string }[] {
  const pages: { path: string; title: string; cluster: string }[] = [];

  // Static pages
  const staticPages = [
    { path: "/", title: "Home", cluster: "main" },
    { path: "/about", title: "About Us", cluster: "main" },
    { path: "/manufacturing", title: "Manufacturing", cluster: "main" },
    { path: "/sustainability", title: "Sustainability", cluster: "main" },
    { path: "/certifications", title: "Certifications", cluster: "main" },
    { path: "/quality-control", title: "Quality Control", cluster: "main" },
    { path: "/products", title: "Product Categories", cluster: "products" },
    { path: "/products/woven-blouses", title: "Woven Blouses", cluster: "products" },
    { path: "/products/cotton-dresses", title: "Cotton Dresses", cluster: "products" },
    { path: "/products/linen-shirts", title: "Linen Shirts", cluster: "products" },
    { path: "/products/resort-wear", title: "Resort Wear", cluster: "products" },
    { path: "/private-label", title: "Private Label", cluster: "services" },
    { path: "/oem", title: "OEM Production", cluster: "services" },
    { path: "/fabric-sourcing", title: "Fabric Sourcing", cluster: "services" },
    { path: "/size-guide", title: "Size Guide", cluster: "resources" },
    { path: "/wholesale-faq", title: "Wholesale FAQ", cluster: "resources" },
    { path: "/shipping", title: "Shipping & Logistics", cluster: "logistics" },
    { path: "/catalog", title: "Catalogue", cluster: "products" },
    { path: "/inquiry", title: "Inquiry", cluster: "main" },
    { path: "/contact", title: "Contact", cluster: "main" },
    { path: "/sitemap", title: "Sitemap", cluster: "main" },
  ];
  pages.push(...staticPages);

  // Category sub-pages
  categorySubPages.forEach((p) => {
    pages.push({
      path: `/products/${p.category}/${p.subcategory}`,
      title: `${p.subcategoryLabel} ${p.categoryLabel}`,
      cluster: "category",
    });
  });

  // Country pages
  countryPages.forEach((p) => {
    pages.push({
      path: `/${p.slug}/garment-manufacturer`,
      title: `Garment Manufacturer ${p.country}`,
      cluster: "country",
    });
  });

  // Fabric pages
  fabricPages.forEach((p) => {
    pages.push({
      path: `/fabrics/${p.slug}`,
      title: `${p.name} Fabric`,
      cluster: "fabric",
    });
  });

  // Knowledge pages
  knowledgePages.forEach((p) => {
    pages.push({
      path: `/${p.slug}`,
      title: p.title,
      cluster: p.cluster,
    });
  });

  // Knowledge Hub articles
  try {
    const { knowledgeHubArticles } = require("@/data/knowledge-hub");
    knowledgeHubArticles.forEach((a: { slug: string; title: string }) => {
      pages.push({
        path: `/knowledge/${a.slug}`,
        title: a.title,
        cluster: "knowledge-hub",
      });
    });
    pages.push({ path: "/knowledge", title: "Knowledge Hub", cluster: "knowledge-hub" });
  } catch {}

  return pages;
}
