// ── Product Data Model ──────────────────────────────────────────────

export interface FabricOption {
  name: string;
  composition: string;
  gsm: number;
  weave: string;
  width: string;
  shrinkage: string;
  colorfastness: string;
  price?: string;
  washingInstructions?: string;
  hsCode?: string;
  tearStrength?: string;
  pillingResistance?: string;
  finish?: string;
}

export interface SizeChartRow {
  size: string;
  eu: string;
  uk: string;
  us: string;
  chest?: string;
  waist?: string;
  hip?: string;
  length?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  shortDescription: string;
  heroImage?: string;
  galleryImages: string[];
  fabricOptions: FabricOption[];
  certifications: string[];
  moq: string;
  leadTime: string;
  sizeChart: SizeChartRow[];
  exportCompliance: string[];
  features: string[];
  tags: string[];
  hsCode?: string;
  countryOfOrigin?: string;
  washCareSymbols?: string[];
  qualityStandards?: string[];
  colorOptions?: string[];
  sku?: string;
}

export type CategorySlug =
  | "woven-blouses"
  | "cotton-dresses"
  | "linen-shirts"
  | "resort-wear"
  | "summer-dresses"
  | "co-ord-sets"
  | "kaftans"
  | "loungewear"
  | "polo-shirts";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  productCount: number;
}

export const categories: Category[] = [
  { slug: "woven-blouses", name: "Woven Blouses", description: "Elegant woven blouses in organic cotton, Tencel™, and linen blends.", productCount: 24 },
  { slug: "cotton-dresses", name: "Cotton Dresses", description: "A-line, shirt dresses, wrap styles in 100% organic cotton.", productCount: 20 },
  { slug: "linen-shirts", name: "Linen Shirts", description: "European-cut linen shirts. Enzyme-washed for softness.", productCount: 18 },
  { slug: "resort-wear", name: "Resort Wear", description: "Kaftans, wide-leg trousers, co-ord sets in breathable fabrics.", productCount: 15 },
  { slug: "summer-dresses", name: "Summer Dresses", description: "Lightweight summer dresses in voile, lawn, and linen.", productCount: 14 },
  { slug: "co-ord-sets", name: "Co-ord Sets", description: "Matching top and bottom sets in organic cotton and linen.", productCount: 10 },
  { slug: "kaftans", name: "Kaftans", description: "Hand-printed and embroidered kaftans for resort and loungewear.", productCount: 9 },
  { slug: "loungewear", name: "Loungewear", description: "Organic cotton loungewear sets — jersey, interlock, and woven.", productCount: 8 },
  { slug: "polo-shirts", name: "Polo Shirts", description: "Premium piqué polo shirts in organic cotton for corporate and retail.", productCount: 4 },
];

// ── Shared Data ─────────────────────────────────────────────────────

const standardSizeChart: SizeChartRow[] = [
  { size: "XS", eu: "34", uk: "6", us: "2", chest: "80", waist: "62", hip: "88", length: "62" },
  { size: "S", eu: "36", uk: "8", us: "4", chest: "84", waist: "66", hip: "92", length: "64" },
  { size: "M", eu: "38", uk: "10", us: "6", chest: "88", waist: "70", hip: "96", length: "66" },
  { size: "L", eu: "40", uk: "12", us: "8", chest: "92", waist: "74", hip: "100", length: "68" },
  { size: "XL", eu: "42", uk: "14", us: "10", chest: "96", waist: "78", hip: "104", length: "70" },
  { size: "XXL", eu: "44", uk: "16", us: "12", chest: "100", waist: "82", hip: "108", length: "72" },
];

const mensSizeChart: SizeChartRow[] = [
  { size: "S", eu: "46", uk: "36", us: "36", chest: "92", waist: "80", length: "72" },
  { size: "M", eu: "48", uk: "38", us: "38", chest: "96", waist: "84", length: "74" },
  { size: "L", eu: "50", uk: "40", us: "40", chest: "100", waist: "88", length: "76" },
  { size: "XL", eu: "52", uk: "42", us: "42", chest: "104", waist: "92", length: "78" },
  { size: "XXL", eu: "54", uk: "44", us: "44", chest: "108", waist: "96", length: "80" },
];

const oneSizeChart: SizeChartRow[] = [
  { size: "One Size", eu: "36–42", uk: "8–14", us: "4–10", chest: "Free", waist: "Free", hip: "Free", length: "120" },
];

const exportCompliance = [
  "REACH Regulation (EC 1907/2006) compliant",
  "EU Textile Regulation No. 1007/2011 labelling",
  "AZO-free dyes certified",
  "Formaldehyde < 75 ppm (Category II)",
  "CPSIA compliant for US market",
  "Russian GOST R certification available",
];

// ── 120 Products ────────────────────────────────────────────────────

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════════════
  // WOVEN BLOUSES (24 products) — wb-001 to wb-024
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "wb-001", sku: "VF-WB-001", slug: "pintuck-organic-blouse", name: "Pintuck Organic Cotton Blouse", category: "woven-blouses", subcategory: "Pintuck",
    description: "A refined pintuck blouse crafted from 100% GOTS-certified organic cotton. Features delicate front pintucks, mother-of-pearl buttons, and a relaxed European fit. Pre-washed for a soft hand-feel.",
    shortDescription: "GOTS organic cotton blouse with pintuck detailing and MOP buttons.",
    galleryImages: [], colorOptions: ["White", "Ivory", "Pale Pink", "Sky Blue", "Sage", "Black"],
    fabricOptions: [
      { name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 110, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)", washingInstructions: "Machine wash 40°C, tumble dry low", hsCode: "6206.30.00", tearStrength: "≥ 15 N", pillingResistance: "Grade 4", finish: "Enzyme-washed, softener" },
      { name: "Organic Voile", composition: "100% Organic Cotton", gsm: 80, weave: "Plain", width: "56\"", shrinkage: "3–5%", colorfastness: "Grade 4 (ISO 105)", washingInstructions: "Machine wash 30°C, line dry", hsCode: "6206.30.00" },
    ],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "500 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Mother-of-pearl buttons", "French seam finishing", "Pre-washed", "Garment-dyed options"], tags: ["organic", "blouse", "pintuck", "sustainable", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India", qualityStandards: ["ISO 13934-1", "ISO 105-C06", "ISO 105-X12"],
  },
  {
    id: "wb-002", sku: "VF-WB-002", slug: "ruffle-tencel-blouse", name: "Ruffle Collar Tencel™ Blouse", category: "woven-blouses", subcategory: "Ruffle",
    description: "Flowing Tencel™ lyocell blouse with elegant ruffle collar and concealed placket. Enzyme-washed for silk-like softness.",
    shortDescription: "Tencel™ lyocell blouse with ruffle collar and concealed placket.",
    galleryImages: [], colorOptions: ["Ivory", "Dusty Rose", "Forest Green", "Navy", "Champagne"],
    fabricOptions: [{ name: "Tencel™ Satin", composition: "100% Tencel™ Lyocell", gsm: 120, weave: "Satin", width: "58\"", shrinkage: "2–3%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["OEKO-TEX Standard 100", "FSC"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Concealed placket", "Enzyme-washed", "Back yoke detail", "Curved hem"], tags: ["tencel", "blouse", "ruffle", "sustainable", "womenswear"],
    hsCode: "6206.40.00", countryOfOrigin: "India",
  },
  {
    id: "wb-003", sku: "VF-WB-003", slug: "embroidered-linen-blouse", name: "Embroidered Linen Blend Blouse", category: "woven-blouses", subcategory: "Embroidered",
    description: "Artisan-embroidered blouse in a linen-cotton blend. Hand-guided embroidery on collar and cuffs, coconut shell buttons.",
    shortDescription: "Linen-cotton blend with artisan embroidery and coconut shell buttons.",
    galleryImages: [], colorOptions: ["Natural", "White", "Ecru", "Terracotta", "Indigo"],
    fabricOptions: [{ name: "Linen-Cotton Blend", composition: "55% Linen, 45% Organic Cotton", gsm: 150, weave: "Plain", width: "56\"", shrinkage: "4–6%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "500 pcs", leadTime: "8–10 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Hand-guided embroidery", "Coconut shell buttons", "Boxy silhouette", "Garment-washed"], tags: ["linen", "embroidery", "blouse", "artisan", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-004", sku: "VF-WB-004", slug: "peter-pan-collar-blouse", name: "Peter Pan Collar Organic Blouse", category: "woven-blouses", subcategory: "Peter Pan",
    description: "Sweet Peter Pan collar blouse in organic cotton lawn. Lightweight and breathable with contrast collar option. Pearl-effect buttons.",
    shortDescription: "Organic cotton lawn blouse with Peter Pan collar and pearl buttons.",
    galleryImages: [], colorOptions: ["White", "Pale Blue", "Blush", "Mint", "Lilac", "Cream"],
    fabricOptions: [{ name: "Organic Lawn", composition: "100% Organic Cotton", gsm: 90, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Peter Pan collar", "Pearl-effect buttons", "Contrast collar option", "Lightweight"], tags: ["organic", "blouse", "collar", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-005", sku: "VF-WB-005", slug: "oversized-poplin-blouse", name: "Oversized Poplin Blouse", category: "woven-blouses", subcategory: "Oversized",
    description: "Contemporary oversized blouse in crisp organic poplin. Dropped shoulders, back box pleat, and adjustable cuff tabs.",
    shortDescription: "Oversized organic poplin blouse with dropped shoulders.",
    galleryImages: [], colorOptions: ["White", "Black", "Navy", "Khaki", "Terracotta", "Olive"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 120, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "500 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Dropped shoulders", "Back box pleat", "Adjustable cuff tabs", "Curved hem"], tags: ["organic", "blouse", "oversized", "contemporary", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-006", sku: "VF-WB-006", slug: "wrap-front-blouse", name: "Wrap Front Viscose Blouse", category: "woven-blouses", subcategory: "Wrap",
    description: "Elegant wrap-front blouse in EcoVero™ viscose. Self-tie waist with flutter sleeves. Fluid drape for a flattering silhouette.",
    shortDescription: "EcoVero™ viscose wrap blouse with flutter sleeves.",
    galleryImages: [], colorOptions: ["Burgundy", "Forest Green", "Navy", "Terracotta", "Black", "Dusty Pink"],
    fabricOptions: [{ name: "EcoVero™ Viscose", composition: "100% EcoVero™ Viscose", gsm: 110, weave: "Plain", width: "56\"", shrinkage: "3–4%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["OEKO-TEX Standard 100", "EU Ecolabel"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Wrap front", "Self-tie waist", "Flutter sleeves", "Fluid drape"], tags: ["viscose", "blouse", "wrap", "womenswear"],
    hsCode: "6206.40.00", countryOfOrigin: "India",
  },
  {
    id: "wb-007", sku: "VF-WB-007", slug: "band-collar-blouse", name: "Band Collar Cotton Blouse", category: "woven-blouses", subcategory: "Band Collar",
    description: "Minimalist band collar blouse in organic cotton oxford. Hidden button placket for a clean front. Structured yet comfortable.",
    shortDescription: "Organic cotton oxford blouse with band collar and hidden buttons.",
    galleryImages: [], colorOptions: ["White", "Pale Blue", "Pink", "Grey", "Navy"],
    fabricOptions: [{ name: "Organic Oxford", composition: "100% Organic Cotton", gsm: 130, weave: "Oxford", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "500 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Band collar", "Hidden button placket", "Back yoke", "Barrel cuffs"], tags: ["organic", "blouse", "minimalist", "oxford", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-008", sku: "VF-WB-008", slug: "peplum-blouse", name: "Peplum Hem Organic Blouse", category: "woven-blouses", subcategory: "Peplum",
    description: "Feminine peplum blouse in organic cotton with a fitted bodice and flared peplum hem. Back zip closure. Perfect for smart-casual lines.",
    shortDescription: "Organic cotton peplum blouse with fitted bodice.",
    galleryImages: [], colorOptions: ["White", "Black", "Red", "Cobalt Blue", "Emerald"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 115, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Peplum hem", "Back zip closure", "Fitted bodice", "Cap sleeves"], tags: ["organic", "blouse", "peplum", "feminine", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-009", sku: "VF-WB-009", slug: "bishop-sleeve-blouse", name: "Bishop Sleeve Tencel™ Blouse", category: "woven-blouses", subcategory: "Bishop Sleeve",
    description: "Romantic bishop sleeve blouse in Tencel™ Lyocell. Gathered cuffs, round neckline, and back keyhole closure. Flowing silhouette.",
    shortDescription: "Tencel™ blouse with gathered bishop sleeves.",
    galleryImages: [], colorOptions: ["Ivory", "Mauve", "Sage", "Slate", "Caramel"],
    fabricOptions: [{ name: "Tencel™ Twill", composition: "100% Tencel™ Lyocell", gsm: 130, weave: "Twill", width: "58\"", shrinkage: "2–3%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["OEKO-TEX Standard 100", "FSC"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Bishop sleeves", "Gathered cuffs", "Back keyhole", "Flowing fit"], tags: ["tencel", "blouse", "romantic", "womenswear"],
    hsCode: "6206.40.00", countryOfOrigin: "India",
  },
  {
    id: "wb-010", sku: "VF-WB-010", slug: "tailored-cotton-blouse", name: "Tailored Cotton Poplin Blouse", category: "woven-blouses", subcategory: "Tailored",
    description: "Classic tailored blouse in crisp organic cotton poplin. Princess seams, French cuffs, and mother-of-pearl buttons. Office-to-evening versatility.",
    shortDescription: "Tailored organic poplin blouse with French cuffs.",
    galleryImages: [], colorOptions: ["White", "Pale Blue", "Pink", "Stripe Blue/White", "Stripe Pink/White"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 120, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "500 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Princess seams", "French cuffs", "MOP buttons", "Fitted silhouette"], tags: ["organic", "blouse", "tailored", "formal", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-011", sku: "VF-WB-011", slug: "camp-collar-blouse", name: "Camp Collar Printed Blouse", category: "woven-blouses", subcategory: "Camp Collar",
    description: "Relaxed camp collar blouse in digitally printed organic cotton. Resort-inspired prints with a boxy fit and chest pocket.",
    shortDescription: "Camp collar blouse with digital prints on organic cotton.",
    galleryImages: [], colorOptions: ["Tropical Print", "Botanical Print", "Abstract Print", "Stripe", "Solid Colours"],
    fabricOptions: [{ name: "Printed Organic Poplin", composition: "100% Organic Cotton", gsm: 110, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "8–10 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Camp collar", "Digital print", "Chest pocket", "Boxy fit"], tags: ["printed", "blouse", "resort", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-012", sku: "VF-WB-012", slug: "victorian-lace-blouse", name: "Victorian Lace Insert Blouse", category: "woven-blouses", subcategory: "Victorian",
    description: "Vintage-inspired blouse with cotton lace inserts on yoke and sleeves. High neckline, covered buttons, and three-quarter sleeves.",
    shortDescription: "Victorian-style blouse with cotton lace inserts.",
    galleryImages: [], colorOptions: ["White", "Cream", "Black", "Dusty Blue"],
    fabricOptions: [{ name: "Organic Poplin + Lace", composition: "100% Organic Cotton (body & lace)", gsm: 110, weave: "Plain + Lace", width: "58\"", shrinkage: "3–5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS"], moq: "500 pcs", leadTime: "8–10 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Cotton lace inserts", "High neckline", "Covered buttons", "3/4 sleeves"], tags: ["lace", "blouse", "vintage", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-013", sku: "VF-WB-013", slug: "bow-tie-blouse", name: "Bow Tie Neck Organic Blouse", category: "woven-blouses", subcategory: "Bow Tie",
    description: "Sophisticated bow-tie neck blouse in organic cotton sateen. Self-fabric bow, darted bodice, and French seam construction.",
    shortDescription: "Organic cotton sateen blouse with self-fabric bow tie.",
    galleryImages: [], colorOptions: ["White", "Ivory", "Black", "Burgundy", "Navy"],
    fabricOptions: [{ name: "Organic Sateen", composition: "100% Organic Cotton", gsm: 125, weave: "Sateen", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Self-fabric bow tie", "Darted bodice", "French seams", "Subtle sheen"], tags: ["organic", "blouse", "bow", "formal", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-014", sku: "VF-WB-014", slug: "smocked-shoulder-blouse", name: "Smocked Shoulder Cotton Blouse", category: "woven-blouses", subcategory: "Smocked",
    description: "Playful blouse with smocked shoulder panels and puff sleeves. Organic cotton voile with elastic gathering for textured detail.",
    shortDescription: "Organic cotton voile blouse with smocked shoulders and puff sleeves.",
    galleryImages: [], colorOptions: ["White", "Lemon", "Coral", "Lilac", "Sky Blue"],
    fabricOptions: [{ name: "Organic Voile", composition: "100% Organic Cotton", gsm: 80, weave: "Plain", width: "56\"", shrinkage: "3–5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "8–10 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Smocked shoulders", "Puff sleeves", "Elastic gathering", "Relaxed body"], tags: ["organic", "blouse", "smocked", "summer", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-015", sku: "VF-WB-015", slug: "striped-oxford-blouse", name: "Yarn-Dyed Stripe Oxford Blouse", category: "woven-blouses", subcategory: "Striped",
    description: "Classic yarn-dyed stripe blouse in organic cotton oxford. Button-down collar, barrel cuffs, and rounded hem.",
    shortDescription: "Yarn-dyed stripe organic oxford blouse with button-down collar.",
    galleryImages: [], colorOptions: ["Blue/White Stripe", "Pink/White Stripe", "Green/White Stripe", "Navy/White Stripe"],
    fabricOptions: [{ name: "Yarn-Dyed Oxford", composition: "100% Organic Cotton", gsm: 135, weave: "Oxford", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "500 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Button-down collar", "Yarn-dyed stripes", "Barrel cuffs", "Rounded hem"], tags: ["organic", "blouse", "stripe", "classic", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-016", sku: "VF-WB-016", slug: "asymmetric-hem-blouse", name: "Asymmetric Hem Linen Blouse", category: "woven-blouses", subcategory: "Asymmetric",
    description: "Contemporary blouse with asymmetric hemline in pure linen. Relaxed fit with side vents and natural texture.",
    shortDescription: "Pure linen blouse with asymmetric hem and side vents.",
    galleryImages: [], colorOptions: ["Natural", "White", "Oatmeal", "Slate Grey", "Terracotta"],
    fabricOptions: [{ name: "Washed Linen", composition: "100% Linen", gsm: 155, weave: "Plain", width: "56\"", shrinkage: "5–7%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Asymmetric hem", "Side vents", "Dropped shoulders", "Natural texture"], tags: ["linen", "blouse", "contemporary", "womenswear"],
    hsCode: "6206.10.00", countryOfOrigin: "India",
  },
  {
    id: "wb-017", sku: "VF-WB-017", slug: "henley-cotton-blouse", name: "Henley Neckline Cotton Blouse", category: "woven-blouses", subcategory: "Henley",
    description: "Casual henley-style blouse in organic cotton. Partial button placket, rolled sleeves, and relaxed body.",
    shortDescription: "Organic cotton henley blouse with partial button placket.",
    galleryImages: [], colorOptions: ["White", "Sage", "Dusty Blue", "Clay", "Charcoal"],
    fabricOptions: [{ name: "Organic Slub Cotton", composition: "100% Organic Cotton", gsm: 125, weave: "Plain (slub)", width: "58\"", shrinkage: "3–5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Henley neckline", "Partial placket", "Rolled sleeves", "Slub texture"], tags: ["organic", "blouse", "casual", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-018", sku: "VF-WB-018", slug: "pleated-front-blouse", name: "Pleated Front Tencel™ Blouse", category: "woven-blouses", subcategory: "Pleated",
    description: "Luxurious Tencel™ blouse with knife-pleated front panel. Hidden side zip, three-quarter sleeves, and a sophisticated drape.",
    shortDescription: "Tencel™ blouse with knife-pleated front panel.",
    galleryImages: [], colorOptions: ["Ivory", "Blush", "Teal", "Charcoal", "Wine"],
    fabricOptions: [{ name: "Tencel™ Crepe", composition: "100% Tencel™ Lyocell", gsm: 115, weave: "Crepe", width: "56\"", shrinkage: "2–3%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["OEKO-TEX Standard 100", "FSC"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Knife pleats", "Hidden side zip", "3/4 sleeves", "Luxurious drape"], tags: ["tencel", "blouse", "pleated", "luxury", "womenswear"],
    hsCode: "6206.40.00", countryOfOrigin: "India",
  },
  {
    id: "wb-019", sku: "VF-WB-019", slug: "tunic-blouse-embroidered", name: "Embroidered Tunic Blouse", category: "woven-blouses", subcategory: "Tunic",
    description: "Longer-length tunic blouse with tonal embroidery at neckline. Organic cotton with side slits for ease of movement.",
    shortDescription: "Embroidered organic cotton tunic blouse with side slits.",
    galleryImages: [], colorOptions: ["White", "Natural", "Indigo", "Olive", "Rust"],
    fabricOptions: [{ name: "Organic Cambric", composition: "100% Organic Cotton", gsm: 100, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "500 pcs", leadTime: "8–10 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Tonal embroidery", "Tunic length", "Side slits", "Relaxed fit"], tags: ["organic", "blouse", "tunic", "embroidered", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-020", sku: "VF-WB-020", slug: "cropped-linen-blouse", name: "Cropped Linen Blouse", category: "woven-blouses", subcategory: "Cropped",
    description: "Cropped boxy blouse in pre-washed linen. Wide sleeves, button front, and raw-edge hem detail. Perfect for high-waisted pairings.",
    shortDescription: "Cropped pre-washed linen blouse with raw-edge hem.",
    galleryImages: [], colorOptions: ["Natural", "White", "Black", "Tobacco", "Sage"],
    fabricOptions: [{ name: "Washed Linen", composition: "100% Linen", gsm: 160, weave: "Plain", width: "56\"", shrinkage: "5–7%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Cropped length", "Wide sleeves", "Raw-edge hem", "Boxy fit"], tags: ["linen", "blouse", "cropped", "womenswear"],
    hsCode: "6206.10.00", countryOfOrigin: "India",
  },
  {
    id: "wb-021", sku: "VF-WB-021", slug: "dobby-weave-blouse", name: "Dobby Weave Cotton Blouse", category: "woven-blouses", subcategory: "Dobby",
    description: "Textured dobby-weave blouse in organic cotton. Self-pattern adds visual interest without print. Classic collar with pearl buttons.",
    shortDescription: "Textured dobby-weave organic cotton blouse.",
    galleryImages: [], colorOptions: ["White", "Pale Pink", "Light Blue", "Ecru"],
    fabricOptions: [{ name: "Organic Dobby", composition: "100% Organic Cotton", gsm: 120, weave: "Dobby", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "500 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Dobby weave texture", "Self-pattern", "Pearl buttons", "Classic collar"], tags: ["organic", "blouse", "dobby", "textured", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-022", sku: "VF-WB-022", slug: "sleeveless-cotton-blouse", name: "Sleeveless Cotton Shell Blouse", category: "woven-blouses", subcategory: "Sleeveless",
    description: "Clean sleeveless shell blouse in organic cotton. Round neckline, French seam finishing, and back button closure. Ideal for layering.",
    shortDescription: "Organic cotton sleeveless shell blouse for layering.",
    galleryImages: [], colorOptions: ["White", "Black", "Navy", "Grey", "Camel"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 115, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Sleeveless", "French seams", "Back button closure", "Layering piece"], tags: ["organic", "blouse", "sleeveless", "minimal", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-023", sku: "VF-WB-023", slug: "poet-sleeve-blouse", name: "Poet Sleeve Organic Blouse", category: "woven-blouses", subcategory: "Poet Sleeve",
    description: "Statement poet sleeve blouse in organic cotton mull. Gathered cuffs, V-neckline, and semi-sheer fabric for layered styling.",
    shortDescription: "Semi-sheer organic cotton blouse with poet sleeves.",
    galleryImages: [], colorOptions: ["White", "Cream", "Blush", "Sky"],
    fabricOptions: [{ name: "Organic Mull", composition: "100% Organic Cotton", gsm: 75, weave: "Plain", width: "56\"", shrinkage: "3–5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Poet sleeves", "V-neckline", "Semi-sheer", "Gathered cuffs"], tags: ["organic", "blouse", "romantic", "sheer", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },
  {
    id: "wb-024", sku: "VF-WB-024", slug: "utility-blouse-cotton", name: "Utility Pocket Cotton Blouse", category: "woven-blouses", subcategory: "Utility",
    description: "Workwear-inspired utility blouse with flap pockets and epaulettes. Organic cotton twill with a structured yet comfortable fit.",
    shortDescription: "Utility-style organic cotton twill blouse with flap pockets.",
    galleryImages: [], colorOptions: ["Khaki", "Olive", "Navy", "Sand", "Black"],
    fabricOptions: [{ name: "Organic Twill", composition: "100% Organic Cotton", gsm: 160, weave: "Twill", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "500 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Flap pockets", "Epaulettes", "Button-through", "Structured fit"], tags: ["organic", "blouse", "utility", "workwear", "womenswear"],
    hsCode: "6206.30.00", countryOfOrigin: "India",
  },

  // ═══════════════════════════════════════════════════════════════════
  // COTTON DRESSES (20 products) — cd-001 to cd-020
  // ═══════════════════════════════════════════════════════════════════
  {
    id: "cd-001", sku: "VF-CD-001", slug: "aline-organic-dress", name: "A-Line Organic Cotton Dress", category: "cotton-dresses", subcategory: "A-Line",
    description: "Classic A-line silhouette in GOTS-certified organic cotton. Knee-length with side seam pockets and back zip. 24 colourways.",
    shortDescription: "Classic A-line in GOTS organic cotton with side pockets.",
    galleryImages: [], colorOptions: ["White", "Black", "Navy", "Red", "Mustard", "Sage", "Terracotta", "Pale Pink"],
    fabricOptions: [
      { name: "Organic Twill", composition: "100% Organic Cotton", gsm: 160, weave: "Twill 2/1", width: "58\"", shrinkage: "3–5%", colorfastness: "Grade 4–5 (ISO 105)" },
      { name: "Organic Canvas", composition: "100% Organic Cotton", gsm: 200, weave: "Canvas", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" },
    ],
    certifications: ["GOTS", "OEKO-TEX Standard 100", "GRS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Side seam pockets", "Back zip closure", "24 colourways", "Garment-dyed option"], tags: ["organic", "dress", "a-line", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-002", sku: "VF-CD-002", slug: "shirt-dress-chambray", name: "Chambray Shirt Dress", category: "cotton-dresses", subcategory: "Shirt Dress",
    description: "Relaxed-fit shirt dress in organic chambray. Button-through front, roll-up sleeve tabs, and self-fabric belt.",
    shortDescription: "Organic chambray shirt dress with belt and roll-up sleeves.",
    galleryImages: [], colorOptions: ["Light Indigo", "Dark Indigo", "Faded Blue", "Black"],
    fabricOptions: [{ name: "Organic Chambray", composition: "100% Organic Cotton", gsm: 140, weave: "Plain (Chambray)", width: "58\"", shrinkage: "3–5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Button-through front", "Roll-up sleeve tabs", "Self-fabric belt", "Pre-washed"], tags: ["chambray", "dress", "shirt-dress", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-003", sku: "VF-CD-003", slug: "wrap-dress-cotton", name: "Wrap Dress in Organic Cotton", category: "cotton-dresses", subcategory: "Wrap",
    description: "True wrap dress with adjustable tie in organic cotton poplin. V-neckline, flutter sleeves, and midi length. Universally flattering.",
    shortDescription: "Organic cotton wrap dress with flutter sleeves.",
    galleryImages: [], colorOptions: ["Black", "Navy", "Burgundy", "Forest Green", "Terracotta", "Polka Dot"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 115, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["True wrap", "Adjustable tie", "Flutter sleeves", "Midi length"], tags: ["organic", "dress", "wrap", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-004", sku: "VF-CD-004", slug: "maxi-tiered-dress", name: "Tiered Maxi Dress", category: "cotton-dresses", subcategory: "Maxi",
    description: "Bohemian tiered maxi dress in organic cotton voile. Five tiers with gathered seams, adjustable straps, and smocked back bodice.",
    shortDescription: "Five-tier organic cotton voile maxi dress with smocked bodice.",
    galleryImages: [], colorOptions: ["White", "Ecru", "Terracotta", "Sage", "Indigo"],
    fabricOptions: [{ name: "Organic Voile", composition: "100% Organic Cotton", gsm: 80, weave: "Plain", width: "56\"", shrinkage: "3–5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "8–10 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Five tiers", "Smocked back", "Adjustable straps", "Maxi length"], tags: ["organic", "dress", "maxi", "tiered", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-005", sku: "VF-CD-005", slug: "pinafore-cotton-dress", name: "Organic Cotton Pinafore Dress", category: "cotton-dresses", subcategory: "Pinafore",
    description: "Structured pinafore dress in organic cotton twill. Cross-back straps, front pockets, and a clean A-line shape. Layer over blouses.",
    shortDescription: "Organic cotton twill pinafore with cross-back straps.",
    galleryImages: [], colorOptions: ["Navy", "Black", "Tan", "Olive", "Denim Blue"],
    fabricOptions: [{ name: "Organic Twill", composition: "100% Organic Cotton", gsm: 180, weave: "Twill", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Cross-back straps", "Front pockets", "A-line silhouette", "Layering piece"], tags: ["organic", "dress", "pinafore", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-006", sku: "VF-CD-006", slug: "smocked-midi-dress", name: "Smocked Bodice Midi Dress", category: "cotton-dresses", subcategory: "Smocked",
    description: "Romantic midi dress with smocked bodice in organic cotton lawn. Puff sleeves, tiered skirt, and a feminine silhouette.",
    shortDescription: "Organic cotton midi dress with smocked bodice and puff sleeves.",
    galleryImages: [], colorOptions: ["White", "Lavender", "Coral", "Sky Blue", "Floral Print"],
    fabricOptions: [{ name: "Organic Lawn", composition: "100% Organic Cotton", gsm: 90, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "8–10 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Smocked bodice", "Puff sleeves", "Tiered skirt", "Midi length"], tags: ["organic", "dress", "smocked", "romantic", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-007", sku: "VF-CD-007", slug: "button-front-midi-dress", name: "Button-Front Midi Dress", category: "cotton-dresses", subcategory: "Button-Front",
    description: "Vintage-inspired button-front midi dress in organic cotton. Notched collar, waist tie, and patch pockets. 12 solid colourways.",
    shortDescription: "Button-front organic cotton midi with collar and waist tie.",
    galleryImages: [], colorOptions: ["Mustard", "Rust", "Forest Green", "Navy", "Burgundy", "Black"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 120, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Button-front", "Notched collar", "Waist tie", "Patch pockets"], tags: ["organic", "dress", "vintage", "midi", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-008", sku: "VF-CD-008", slug: "linen-cotton-shift-dress", name: "Linen-Cotton Shift Dress", category: "cotton-dresses", subcategory: "Shift",
    description: "Minimal shift dress in linen-cotton blend. Straight cut, side seam pockets, and a clean round neckline. Effortless summer style.",
    shortDescription: "Linen-cotton blend shift dress with clean lines.",
    galleryImages: [], colorOptions: ["Natural", "White", "Oatmeal", "Pale Blue", "Blush"],
    fabricOptions: [{ name: "Linen-Cotton", composition: "60% Linen, 40% Organic Cotton", gsm: 145, weave: "Plain", width: "56\"", shrinkage: "4–6%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Shift silhouette", "Side pockets", "Round neckline", "Unlined"], tags: ["linen", "dress", "shift", "minimal", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-009", sku: "VF-CD-009", slug: "embroidered-cotton-dress", name: "Embroidered Bodice Cotton Dress", category: "cotton-dresses", subcategory: "Embroidered",
    description: "Elegant dress with hand-guided embroidery on the bodice. Organic cotton with a fitted waist and flared skirt.",
    shortDescription: "Organic cotton dress with hand-guided bodice embroidery.",
    galleryImages: [], colorOptions: ["White/Gold", "Navy/Silver", "Black/Copper", "Ivory/White"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 115, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS"], moq: "500 pcs", leadTime: "10–12 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Hand-guided embroidery", "Fitted waist", "Flared skirt", "Back zip"], tags: ["organic", "dress", "embroidered", "artisan", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-010", sku: "VF-CD-010", slug: "printed-cotton-midi-dress", name: "Digital Print Cotton Midi Dress", category: "cotton-dresses", subcategory: "Printed",
    description: "Fashion-forward midi dress in digitally printed organic cotton. Custom colourway and placement print options available.",
    shortDescription: "Digitally printed organic cotton midi dress — custom prints available.",
    galleryImages: [], colorOptions: ["Botanical", "Abstract Geo", "Tropical", "Paisley", "Custom"],
    fabricOptions: [{ name: "Printed Organic Poplin", composition: "100% Organic Cotton", gsm: 115, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "8–10 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Digital printing", "Custom colourways", "Placement print option", "Midi length"], tags: ["printed", "dress", "digital", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-011", sku: "VF-CD-011", slug: "fit-flare-cotton-dress", name: "Fit & Flare Organic Dress", category: "cotton-dresses", subcategory: "Fit & Flare",
    description: "Classic fit-and-flare dress in organic cotton. Princess seams, cap sleeves, and a full skirt with pockets.", shortDescription: "Organic cotton fit-and-flare dress with princess seams.",
    galleryImages: [], colorOptions: ["Red", "Navy", "Black", "Emerald", "Royal Blue"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 120, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Princess seams", "Cap sleeves", "Full skirt", "Side pockets"], tags: ["organic", "dress", "fit-flare", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-012", sku: "VF-CD-012", slug: "denim-look-cotton-dress", name: "Denim-Look Cotton Dress", category: "cotton-dresses", subcategory: "Denim",
    description: "Casual denim-look dress in organic cotton chambray. Western-style yoke, snap buttons, and a slightly flared skirt.",
    shortDescription: "Organic cotton chambray dress with western yoke detailing.",
    galleryImages: [], colorOptions: ["Light Wash", "Medium Wash", "Dark Wash"],
    fabricOptions: [{ name: "Organic Chambray", composition: "100% Organic Cotton", gsm: 150, weave: "Plain (Chambray)", width: "58\"", shrinkage: "3–5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Western yoke", "Snap buttons", "Flared skirt", "Pre-washed"], tags: ["chambray", "dress", "denim", "casual", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-013", sku: "VF-CD-013", slug: "puff-sleeve-cotton-dress", name: "Puff Sleeve Cotton Mini Dress", category: "cotton-dresses", subcategory: "Puff Sleeve",
    description: "Playful mini dress with statement puff sleeves. Organic cotton poplin with a gathered waist and tiered skirt.",
    shortDescription: "Organic cotton mini dress with puff sleeves and tiered skirt.",
    galleryImages: [], colorOptions: ["White", "Lemon", "Coral", "Lilac", "Mint"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 110, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Puff sleeves", "Gathered waist", "Tiered skirt", "Mini length"], tags: ["organic", "dress", "puff-sleeve", "summer", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-014", sku: "VF-CD-014", slug: "shirt-collar-midi-dress", name: "Shirt Collar Belted Midi Dress", category: "cotton-dresses", subcategory: "Belted",
    description: "Sophisticated midi dress with shirt collar and detachable belt. Organic cotton with button-front closure and cuffed sleeves.",
    shortDescription: "Belted shirt-collar organic cotton midi dress.",
    galleryImages: [], colorOptions: ["White", "Camel", "Navy", "Olive", "Burgundy"],
    fabricOptions: [{ name: "Organic Twill", composition: "100% Organic Cotton", gsm: 150, weave: "Twill", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Shirt collar", "Detachable belt", "Cuffed sleeves", "Button-front"], tags: ["organic", "dress", "belted", "midi", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-015", sku: "VF-CD-015", slug: "peter-pan-cotton-dress", name: "Peter Pan Collar Cotton Dress", category: "cotton-dresses", subcategory: "Peter Pan",
    description: "Retro-inspired dress with Peter Pan collar in organic cotton. Gathered waist, full skirt, and contrast collar option.",
    shortDescription: "Retro organic cotton dress with Peter Pan collar.",
    galleryImages: [], colorOptions: ["Navy/White Collar", "Black/White Collar", "Red/White Collar", "Forest Green/White Collar"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 115, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Peter Pan collar", "Contrast collar", "Gathered waist", "Full skirt"], tags: ["organic", "dress", "retro", "collar", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-016", sku: "VF-CD-016", slug: "tiered-cotton-sundress", name: "Tiered Cotton Sundress", category: "cotton-dresses", subcategory: "Sundress",
    description: "Light and breezy tiered sundress with spaghetti straps. Organic cotton voile in seasonal prints and solid colours.",
    shortDescription: "Organic cotton voile tiered sundress with spaghetti straps.",
    galleryImages: [], colorOptions: ["White", "Yellow", "Pink", "Blue Floral", "Tropical Print"],
    fabricOptions: [{ name: "Organic Voile", composition: "100% Organic Cotton", gsm: 80, weave: "Plain", width: "56\"", shrinkage: "3–5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Spaghetti straps", "Three tiers", "Lined bodice", "Midi length"], tags: ["organic", "dress", "sundress", "summer", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-017", sku: "VF-CD-017", slug: "overall-cotton-dress", name: "Overall Cotton Dress", category: "cotton-dresses", subcategory: "Overall",
    description: "Workwear-inspired overall dress in organic cotton twill. Adjustable buckle straps, front bib pocket, and relaxed fit.",
    shortDescription: "Organic cotton twill overall dress with buckle straps.",
    galleryImages: [], colorOptions: ["Indigo", "Black", "Khaki", "Olive"],
    fabricOptions: [{ name: "Organic Twill", composition: "100% Organic Cotton", gsm: 190, weave: "Twill", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Buckle straps", "Bib pocket", "Relaxed fit", "Midi length"], tags: ["organic", "dress", "overall", "workwear", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-018", sku: "VF-CD-018", slug: "gathered-waist-cotton-dress", name: "Gathered Waist Organic Dress", category: "cotton-dresses", subcategory: "Gathered",
    description: "Feminine dress with gathered waist and three-quarter sleeves. Organic cotton with a flattering V-neckline.",
    shortDescription: "Organic cotton dress with gathered waist and V-neck.",
    galleryImages: [], colorOptions: ["Dusty Rose", "Sage", "Slate Blue", "Terracotta", "Plum"],
    fabricOptions: [{ name: "Organic Poplin", composition: "100% Organic Cotton", gsm: 110, weave: "Plain", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Gathered waist", "V-neckline", "3/4 sleeves", "Midi length"], tags: ["organic", "dress", "feminine", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-019", sku: "VF-CD-019", slug: "stripe-cotton-dress", name: "Yarn-Dyed Stripe Cotton Dress", category: "cotton-dresses", subcategory: "Stripe",
    description: "Nautical-inspired stripe dress in yarn-dyed organic cotton. Boat neckline, 3/4 sleeves, and a fitted-to-flare silhouette.",
    shortDescription: "Yarn-dyed stripe organic cotton dress with boat neck.",
    galleryImages: [], colorOptions: ["Navy/White", "Red/White", "Blue/Ecru", "Green/White"],
    fabricOptions: [{ name: "Yarn-Dyed Organic", composition: "100% Organic Cotton", gsm: 130, weave: "Plain (Yarn-Dyed)", width: "58\"", shrinkage: "3–4%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS"], moq: "500 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Boat neckline", "Yarn-dyed stripes", "3/4 sleeves", "Fit-and-flare"], tags: ["organic", "dress", "stripe", "nautical", "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  },
  {
    id: "cd-020", sku: "VF-CD-020", slug: "tencel-midi-dress", name: "Tencel™ Midi Shirt Dress", category: "cotton-dresses", subcategory: "Tencel",
    description: "Luxurious midi shirt dress in Tencel™ Lyocell. Fluid drape, concealed button placket, and self-tie belt. 8 sophisticated colourways.",
    shortDescription: "Tencel™ Lyocell midi shirt dress with fluid drape.",
    galleryImages: [], colorOptions: ["Ivory", "Camel", "Olive", "Navy", "Black", "Dusty Rose", "Slate", "Teal"],
    fabricOptions: [{ name: "Tencel™ Twill", composition: "100% Tencel™ Lyocell", gsm: 130, weave: "Twill", width: "58\"", shrinkage: "2–3%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["OEKO-TEX Standard 100", "FSC"], moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Concealed placket", "Self-tie belt", "Fluid drape", "8 colourways"], tags: ["tencel", "dress", "shirt-dress", "luxury", "womenswear"],
    hsCode: "6204.49.00", countryOfOrigin: "India",
  },

  // ═══════════════════════════════════════════════════════════════════
  // LINEN SHIRTS (18 products) — ls-001 to ls-018
  // ═══════════════════════════════════════════════════════════════════
  ...[
    { id: "ls-001", sku: "VF-LS-001", slug: "classic-linen-shirt", name: "Classic European Linen Shirt", sub: "Classic", desc: "Timeless European-cut linen shirt in 100% European flax. Enzyme-washed for softness. MOP buttons, single-needle stitching.", short: "100% European flax linen shirt with enzyme wash.", colors: ["White", "Ecru", "Sky Blue", "Olive", "Navy", "Black"], fab: { name: "European Flax Linen", comp: "100% Linen (European Flax)", gsm: 160, weave: "Plain" }, certs: ["OEKO-TEX Standard 100", "European Flax®"], features: ["Enzyme-washed", "Single-needle stitching", "MOP buttons", "Unisex sizing"], chart: mensSizeChart },
    { id: "ls-002", sku: "VF-LS-002", slug: "mandarin-linen-shirt", name: "Mandarin Collar Linen Shirt", sub: "Mandarin", desc: "Contemporary mandarin collar with oversized fit and dropped shoulders. Stone-washed for casual luxury.", short: "Mandarin collar linen shirt with oversized fit.", colors: ["Natural", "White", "Charcoal", "Sand", "Olive"], fab: { name: "Washed Linen", comp: "100% Linen", gsm: 170, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], features: ["Mandarin collar", "Dropped shoulders", "Oversized fit", "Stone-washed"], chart: mensSizeChart },
    { id: "ls-003", sku: "VF-LS-003", slug: "camp-collar-linen-shirt", name: "Camp Collar Linen Shirt", sub: "Camp Collar", desc: "Relaxed camp collar linen shirt for resort and summer collections. Chest pocket and a loose, breezy fit.", short: "Camp collar linen shirt for resort collections.", colors: ["White", "Sand", "Terracotta", "Ocean Blue", "Sage"], fab: { name: "Washed Linen", comp: "100% Linen", gsm: 150, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], features: ["Camp collar", "Chest pocket", "Breezy fit", "Coconut buttons"], chart: mensSizeChart },
    { id: "ls-004", sku: "VF-LS-004", slug: "linen-cotton-shirt", name: "Linen-Cotton Blend Shirt", sub: "Blend", desc: "Comfortable linen-cotton blend shirt balancing linen's texture with cotton's softness. Less wrinkling than pure linen.", short: "Linen-cotton blend shirt — texture with softness.", colors: ["White", "Pale Blue", "Pink", "Grey", "Navy", "Khaki"], fab: { name: "Linen-Cotton", comp: "55% Linen, 45% Cotton", gsm: 140, weave: "Plain" }, certs: ["OEKO-TEX Standard 100", "GOTS"], features: ["Less wrinkling", "Soft hand-feel", "Classic collar", "Barrel cuffs"], chart: mensSizeChart },
    { id: "ls-005", sku: "VF-LS-005", slug: "grandad-collar-linen", name: "Grandad Collar Linen Shirt", sub: "Grandad", desc: "Relaxed grandad collar shirt in stone-washed linen. Partial button placket with a casual, layered look.", short: "Grandad collar stone-washed linen shirt.", colors: ["White", "Natural", "Sky Blue", "Sage", "Charcoal"], fab: { name: "Stone-Washed Linen", comp: "100% Linen", gsm: 155, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], features: ["Grandad collar", "Partial placket", "Stone-washed", "Relaxed fit"], chart: mensSizeChart },
    { id: "ls-006", sku: "VF-LS-006", slug: "henley-linen-shirt", name: "Henley Linen Pullover Shirt", sub: "Henley", desc: "Casual henley-style linen shirt with coconut shell buttons and roll-up sleeve tabs. No collar — modern minimalism.", short: "Henley linen pullover with coconut buttons.", colors: ["Natural", "White", "Tobacco", "Olive", "Slate"], fab: { name: "Enzyme-Washed Linen", comp: "100% Linen", gsm: 160, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], features: ["Henley neckline", "Coconut shell buttons", "Roll-up tabs", "No collar"], chart: mensSizeChart },
    { id: "ls-007", sku: "VF-LS-007", slug: "oversized-linen-shirt", name: "Oversized Linen Drop Shoulder Shirt", sub: "Oversized", desc: "Ultra-relaxed oversized linen shirt with dropped shoulders and extended length. Gender-neutral sizing.", short: "Oversized drop-shoulder linen shirt — gender-neutral.", colors: ["White", "Black", "Oatmeal", "Sage", "Terracotta", "Navy"], fab: { name: "Washed Linen", comp: "100% Linen", gsm: 165, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], features: ["Drop shoulders", "Extended length", "Gender-neutral", "Side slits"], chart: mensSizeChart },
    { id: "ls-008", sku: "VF-LS-008", slug: "linen-shirt-embroidered", name: "Embroidered Linen Shirt", sub: "Embroidered", desc: "Linen shirt with tonal embroidery on collar and chest pocket. Artisan detailing elevates a classic silhouette.", short: "Linen shirt with tonal collar embroidery.", colors: ["White/White", "Natural/Natural", "Blue/Blue"], fab: { name: "European Flax Linen", comp: "100% Linen (European Flax)", gsm: 160, weave: "Plain" }, certs: ["OEKO-TEX Standard 100", "European Flax®"], features: ["Tonal embroidery", "Classic collar", "Chest pocket", "Enzyme-washed"], chart: mensSizeChart },
    { id: "ls-009", sku: "VF-LS-009", slug: "yarn-dyed-linen-shirt", name: "Yarn-Dyed Stripe Linen Shirt", sub: "Stripe", desc: "Classic linen shirt in yarn-dyed stripes. European flax with a relaxed fit and button-down collar.", short: "Yarn-dyed stripe European flax linen shirt.", colors: ["Blue/White", "Navy/Ecru", "Green/White", "Pink/White"], fab: { name: "Yarn-Dyed Linen", comp: "100% Linen", gsm: 155, weave: "Plain (Yarn-Dyed)" }, certs: ["OEKO-TEX Standard 100"], features: ["Yarn-dyed stripes", "Button-down collar", "Relaxed fit", "Enzyme-washed"], chart: mensSizeChart },
    { id: "ls-010", sku: "VF-LS-010", slug: "linen-guayabera-shirt", name: "Linen Guayabera Shirt", sub: "Guayabera", desc: "Traditional guayabera construction in European flax linen. Four pockets, pintuck detailing, and a straight hem worn untucked.", short: "European linen guayabera with pintuck detailing.", colors: ["White", "Ecru", "Pale Blue", "Sand"], fab: { name: "European Flax Linen", comp: "100% Linen", gsm: 160, weave: "Plain" }, certs: ["OEKO-TEX Standard 100", "European Flax®"], features: ["Four pockets", "Pintuck detail", "Straight hem", "Untucked style"], chart: mensSizeChart },
    { id: "ls-011", sku: "VF-LS-011", slug: "linen-safari-shirt", name: "Linen Safari Shirt", sub: "Safari", desc: "Safari-inspired linen shirt with military pockets and epaulettes. Structured yet breathable for warm climates.", short: "Linen safari shirt with military pockets.", colors: ["Khaki", "Olive", "Sand", "Tobacco", "Stone"], fab: { name: "Washed Linen", comp: "100% Linen", gsm: 170, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], features: ["Military pockets", "Epaulettes", "Roll-up tabs", "Structured fit"], chart: mensSizeChart },
    { id: "ls-012", sku: "VF-LS-012", slug: "short-sleeve-linen-shirt", name: "Short Sleeve Linen Shirt", sub: "Short Sleeve", desc: "Clean short-sleeve linen shirt for summer. Cuban-inspired fit with a straight hem and minimal detailing.", short: "Short-sleeve linen shirt with Cuban fit.", colors: ["White", "Black", "Navy", "Terracotta", "Sage", "Sand"], fab: { name: "Enzyme-Washed Linen", comp: "100% Linen", gsm: 150, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], features: ["Short sleeves", "Straight hem", "Cuban fit", "Minimal design"], chart: mensSizeChart },
    { id: "ls-013", sku: "VF-LS-013", slug: "linen-popover-shirt", name: "Linen Popover Shirt", sub: "Popover", desc: "Half-placket popover shirt in washed linen. Casual pullover style with chest pocket and relaxed body.", short: "Half-placket linen popover shirt.", colors: ["Natural", "White", "Sky Blue", "Olive", "Clay"], fab: { name: "Washed Linen", comp: "100% Linen", gsm: 155, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], features: ["Half placket", "Popover style", "Chest pocket", "Relaxed body"], chart: mensSizeChart },
    { id: "ls-014", sku: "VF-LS-014", slug: "linen-band-collar-shirt", name: "Band Collar Linen Shirt", sub: "Band Collar", desc: "Minimalist band collar linen shirt with concealed placket. Clean, contemporary lines for modern menswear.", short: "Band collar linen shirt with concealed buttons.", colors: ["White", "Black", "Navy", "Charcoal", "Sand"], fab: { name: "European Flax Linen", comp: "100% Linen (European Flax)", gsm: 160, weave: "Plain" }, certs: ["OEKO-TEX Standard 100", "European Flax®"], features: ["Band collar", "Concealed placket", "Clean lines", "Contemporary"], chart: mensSizeChart },
    { id: "ls-015", sku: "VF-LS-015", slug: "linen-herringbone-shirt", name: "Herringbone Weave Linen Shirt", sub: "Herringbone", desc: "Textured herringbone weave linen shirt. Self-pattern adds visual depth without print. Classic collar and barrel cuffs.", short: "Herringbone weave linen shirt with textured pattern.", colors: ["Natural", "White", "Pale Blue", "Grey"], fab: { name: "Linen Herringbone", comp: "100% Linen", gsm: 165, weave: "Herringbone" }, certs: ["OEKO-TEX Standard 100"], features: ["Herringbone weave", "Self-pattern", "Classic collar", "Barrel cuffs"], chart: mensSizeChart },
    { id: "ls-016", sku: "VF-LS-016", slug: "linen-western-shirt", name: "Western Yoke Linen Shirt", sub: "Western", desc: "Western-inspired linen shirt with pointed yoke, snap buttons, and slim fit. Modern take on Americana.", short: "Western yoke linen shirt with snap buttons.", colors: ["White", "Indigo", "Black", "Tan"], fab: { name: "Washed Linen", comp: "100% Linen", gsm: 160, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], features: ["Pointed yoke", "Snap buttons", "Slim fit", "Pre-washed"], chart: mensSizeChart },
    { id: "ls-017", sku: "VF-LS-017", slug: "linen-resort-shirt-women", name: "Women's Resort Linen Shirt", sub: "Women's Resort", desc: "Relaxed women's linen shirt designed for resort and holiday wardrobes. Longer length, side slits, and rolled cuffs.", short: "Women's resort linen shirt with side slits.", colors: ["White", "Natural", "Pale Pink", "Sky Blue", "Sage"], fab: { name: "Enzyme-Washed Linen", comp: "100% Linen", gsm: 155, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], features: ["Women's fit", "Longer length", "Side slits", "Rolled cuffs"], chart: standardSizeChart },
    { id: "ls-018", sku: "VF-LS-018", slug: "linen-check-shirt", name: "Gingham Check Linen Shirt", sub: "Check", desc: "Classic gingham check in yarn-dyed linen. Button-down collar with a regular fit — timeless for smart-casual.", short: "Yarn-dyed gingham check linen shirt.", colors: ["Blue/White", "Red/White", "Green/White", "Black/White"], fab: { name: "Yarn-Dyed Linen", comp: "100% Linen", gsm: 155, weave: "Plain (Yarn-Dyed)" }, certs: ["OEKO-TEX Standard 100"], features: ["Gingham check", "Button-down collar", "Regular fit", "Locker loop"], chart: mensSizeChart },
  ].map((s) => ({
    id: s.id, sku: s.sku, slug: s.slug, name: s.name, category: "linen-shirts" as const, subcategory: s.sub,
    description: s.desc, shortDescription: s.short, galleryImages: [] as string[], colorOptions: s.colors,
    fabricOptions: [{ name: s.fab.name, composition: s.fab.comp, gsm: s.fab.gsm, weave: s.fab.weave, width: "58\"", shrinkage: "5–7%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: s.certs, moq: "500 pcs", leadTime: "6–8 weeks", sizeChart: s.chart, exportCompliance,
    features: s.features, tags: ["linen", "shirt", s.sub.toLowerCase().replace(/[^a-z0-9]/g, "-")],
    hsCode: "6205.90.00", countryOfOrigin: "India",
  })),

  // ═══════════════════════════════════════════════════════════════════
  // RESORT WEAR (15 products) — rw-001 to rw-015
  // ═══════════════════════════════════════════════════════════════════
  ...[
    { id: "rw-001", slug: "kaftan-cotton-voile", name: "Cotton Voile Kaftan", sub: "Kaftan", desc: "Lightweight cotton voile kaftan with hand-block printed borders. Oversized silhouette with side slits.", short: "Hand-block printed cotton voile kaftan.", colors: ["White/Indigo", "Ecru/Terracotta", "Natural/Olive"], fab: { comp: "100% Organic Cotton", gsm: 80, weave: "Plain" }, certs: ["GOTS", "OEKO-TEX Standard 100"], chart: oneSizeChart },
    { id: "rw-002", slug: "wide-leg-linen-trousers", name: "Wide-Leg Linen Trousers", sub: "Trousers", desc: "Elegant wide-leg trousers in enzyme-washed linen. Elasticated back waist, front pleats, co-ord matching.", short: "Wide-leg linen trousers with elasticated waist.", colors: ["White", "Natural", "Black", "Navy", "Olive", "Sand"], fab: { comp: "100% Linen", gsm: 180, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], chart: standardSizeChart },
    { id: "rw-003", slug: "linen-blazer-unstructured", name: "Unstructured Linen Blazer", sub: "Blazer", desc: "Relaxed unstructured blazer in washed linen. No lining, patch pockets, and a soft shoulder. Resort and smart-casual.", short: "Unstructured washed linen blazer.", colors: ["Natural", "Navy", "Khaki", "Charcoal", "White"], fab: { comp: "100% Linen", gsm: 190, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], chart: mensSizeChart },
    { id: "rw-004", slug: "printed-sarong-wrap", name: "Printed Cotton Sarong", sub: "Sarong", desc: "Large-format printed sarong in organic cotton voile. Multi-use — beach wrap, skirt, or shawl. Block print and digital options.", short: "Organic cotton sarong — block print and digital options.", colors: ["Indigo/White", "Tropical", "Botanical", "Geometric"], fab: { comp: "100% Organic Cotton", gsm: 70, weave: "Plain" }, certs: ["GOTS"], chart: oneSizeChart },
    { id: "rw-005", slug: "resort-jumpsuit", name: "Linen Resort Jumpsuit", sub: "Jumpsuit", desc: "Elegant wide-leg jumpsuit in washed linen. Button-front bodice, self-tie waist, and a relaxed Mediterranean aesthetic.", short: "Wide-leg linen jumpsuit with tie waist.", colors: ["White", "Navy", "Terracotta", "Olive", "Black"], fab: { comp: "100% Linen", gsm: 165, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], chart: standardSizeChart },
    { id: "rw-006", slug: "palazzo-pants-cotton", name: "Organic Cotton Palazzo Pants", sub: "Palazzo", desc: "Ultra-wide palazzo pants in organic cotton. Elasticated waist for comfort with a flowing, dramatic silhouette.", short: "Organic cotton palazzo pants with elastic waist.", colors: ["White", "Black", "Navy", "Terracotta", "Sage"], fab: { comp: "100% Organic Cotton", gsm: 120, weave: "Plain" }, certs: ["GOTS"], chart: standardSizeChart },
    { id: "rw-007", slug: "beach-cover-up-crochet", name: "Crochet Trim Beach Cover-Up", sub: "Cover-Up", desc: "Lightweight cover-up with hand-crochet trim at neckline and hem. Organic cotton voile body with an oversized silhouette.", short: "Organic cotton cover-up with crochet trim.", colors: ["White", "Ecru", "Sand"], fab: { comp: "100% Organic Cotton", gsm: 75, weave: "Plain" }, certs: ["GOTS"], chart: oneSizeChart },
    { id: "rw-008", slug: "linen-shorts", name: "Relaxed Linen Bermuda Shorts", sub: "Shorts", desc: "Knee-length Bermuda shorts in washed linen. Elasticated waist with drawstring, side pockets, and a relaxed fit.", short: "Washed linen Bermuda shorts with drawstring.", colors: ["Natural", "White", "Navy", "Olive", "Sand", "Charcoal"], fab: { comp: "100% Linen", gsm: 170, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], chart: mensSizeChart },
    { id: "rw-009", slug: "cotton-wrap-skirt", name: "Organic Cotton Wrap Skirt", sub: "Wrap Skirt", desc: "Versatile wrap skirt in organic cotton with adjustable tie. Midi length with a flowing silhouette.", short: "Organic cotton midi wrap skirt.", colors: ["Black", "Navy", "Terracotta", "Olive", "Floral Print"], fab: { comp: "100% Organic Cotton", gsm: 115, weave: "Plain" }, certs: ["GOTS"], chart: standardSizeChart },
    { id: "rw-010", slug: "resort-maxi-skirt", name: "Tiered Resort Maxi Skirt", sub: "Maxi Skirt", desc: "Floor-length tiered maxi skirt in organic cotton voile. Elasticated waist with three tiers for maximum movement.", short: "Organic cotton voile tiered maxi skirt.", colors: ["White", "Terracotta", "Indigo", "Sage", "Printed"], fab: { comp: "100% Organic Cotton", gsm: 80, weave: "Plain" }, certs: ["GOTS"], chart: standardSizeChart },
    { id: "rw-011", slug: "resort-cropped-top", name: "Linen Cropped Resort Top", sub: "Cropped Top", desc: "Cropped linen top with tie-back detail and puff sleeves. Pairs with high-waisted trousers and skirts.", short: "Cropped linen top with tie-back and puff sleeves.", colors: ["White", "Natural", "Terracotta", "Sage"], fab: { comp: "100% Linen", gsm: 155, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], chart: standardSizeChart },
    { id: "rw-012", slug: "drawstring-cotton-trousers", name: "Drawstring Cotton Trousers", sub: "Drawstring", desc: "Easy-wear drawstring trousers in organic cotton. Tapered leg, side pockets, and a relaxed waist.", short: "Organic cotton drawstring trousers — tapered leg.", colors: ["White", "Black", "Navy", "Khaki", "Sage", "Terracotta"], fab: { comp: "100% Organic Cotton", gsm: 140, weave: "Twill" }, certs: ["GOTS"], chart: standardSizeChart },
    { id: "rw-013", slug: "linen-tunic-dress", name: "Linen Tunic Dress", sub: "Tunic Dress", desc: "Relaxed linen tunic dress with side pockets and a rolled-cuff detail. Wear as a dress or over trousers.", short: "Linen tunic dress with pockets.", colors: ["Natural", "White", "Sky Blue", "Olive", "Sand"], fab: { comp: "100% Linen", gsm: 160, weave: "Plain" }, certs: ["OEKO-TEX Standard 100"], chart: standardSizeChart },
    { id: "rw-014", slug: "resort-halter-top", name: "Organic Cotton Halter Top", sub: "Halter", desc: "Minimal halter top in organic cotton with adjustable ties and a clean back. Perfect for resort layering.", short: "Organic cotton halter top with adjustable ties.", colors: ["White", "Black", "Terracotta", "Sage", "Coral"], fab: { comp: "100% Organic Cotton", gsm: 110, weave: "Plain" }, certs: ["GOTS"], chart: standardSizeChart },
    { id: "rw-015", slug: "linen-shirt-jacket", name: "Linen Shirt Jacket (Shacket)", sub: "Shacket", desc: "Oversized linen shirt jacket for layering. Patch pockets, button-through, and a relaxed shoulder. Resort and transitional.", short: "Linen shacket — oversized shirt jacket for layering.", colors: ["Natural", "Olive", "Navy", "Sand", "Charcoal"], fab: { comp: "100% Linen", gsm: 200, weave: "Twill" }, certs: ["OEKO-TEX Standard 100"], chart: mensSizeChart },
  ].map((s) => ({
    id: s.id, sku: `VF-${s.id.toUpperCase()}`, slug: s.slug, name: s.name, category: "resort-wear" as const, subcategory: s.sub,
    description: s.desc, shortDescription: s.short, galleryImages: [] as string[], colorOptions: s.colors,
    fabricOptions: [{ name: s.fab.comp.split("(")[0].trim(), composition: s.fab.comp, gsm: s.fab.gsm, weave: s.fab.weave, width: "56–58\"", shrinkage: s.fab.gsm > 150 ? "5–7%" : "3–5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: s.certs, moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: s.chart, exportCompliance,
    features: ["Resort styling", "Pre-washed finish", "Co-ord matching available", "Custom colourways"], tags: ["resort", s.sub.toLowerCase().replace(/[^a-z0-9]/g, "-")],
    hsCode: "6204.49.00", countryOfOrigin: "India",
  })),

  // ═══════════════════════════════════════════════════════════════════
  // SUMMER DRESSES (14) — sd-001 to sd-014
  // ═══════════════════════════════════════════════════════════════════
  ...[
    { id: "sd-001", slug: "voile-sundress", name: "Organic Voile Sundress", sub: "Sundress" },
    { id: "sd-002", slug: "lawn-midi-dress", name: "Cotton Lawn Midi Dress", sub: "Lawn" },
    { id: "sd-003", slug: "printed-summer-dress", name: "Digital Print Summer Dress", sub: "Printed" },
    { id: "sd-004", slug: "linen-summer-shift", name: "Linen Summer Shift Dress", sub: "Shift" },
    { id: "sd-005", slug: "strappy-cotton-dress", name: "Strappy Organic Cotton Dress", sub: "Strappy" },
    { id: "sd-006", slug: "babydoll-summer-dress", name: "Babydoll Summer Dress", sub: "Babydoll" },
    { id: "sd-007", slug: "peasant-summer-dress", name: "Peasant Sleeve Summer Dress", sub: "Peasant" },
    { id: "sd-008", slug: "eyelet-cotton-dress", name: "Eyelet Cotton Summer Dress", sub: "Eyelet" },
    { id: "sd-009", slug: "off-shoulder-summer-dress", name: "Off-Shoulder Cotton Dress", sub: "Off-Shoulder" },
    { id: "sd-010", slug: "handkerchief-hem-dress", name: "Handkerchief Hem Dress", sub: "Handkerchief" },
    { id: "sd-011", slug: "linen-cami-dress", name: "Linen Cami Dress", sub: "Cami" },
    { id: "sd-012", slug: "blouson-summer-dress", name: "Blouson Waist Summer Dress", sub: "Blouson" },
    { id: "sd-013", slug: "ruched-cotton-dress", name: "Ruched Bodice Cotton Dress", sub: "Ruched" },
    { id: "sd-014", slug: "flutter-sleeve-sundress", name: "Flutter Sleeve Sundress", sub: "Flutter Sleeve" },
  ].map((s, i) => ({
    id: s.id, sku: `VF-${s.id.toUpperCase()}`, slug: s.slug, name: s.name, category: "summer-dresses" as const, subcategory: s.sub,
    description: `Lightweight ${s.name.toLowerCase()} designed for European summer collections. GOTS organic cotton or linen construction with breathable comfort and effortless style. Available in seasonal colourways.`,
    shortDescription: `${s.name} in organic cotton — perfect for summer collections.`,
    galleryImages: [] as string[], colorOptions: ["White", "Ecru", "Terracotta", "Sage", "Sky Blue", "Coral"],
    fabricOptions: [{ name: i % 3 === 0 ? "Organic Voile" : i % 3 === 1 ? "Organic Lawn" : "Washed Linen", composition: i % 3 === 2 ? "100% Linen" : "100% Organic Cotton", gsm: i % 3 === 0 ? 80 : i % 3 === 1 ? 90 : 150, weave: "Plain", width: "56–58\"", shrinkage: i % 3 === 2 ? "5–7%" : "3–5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: i % 3 === 2 ? ["OEKO-TEX Standard 100"] : ["GOTS", "OEKO-TEX Standard 100"],
    moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Lightweight", "Breathable", "Pre-washed", "Seasonal colourways"], tags: ["summer", "dress", s.sub.toLowerCase().replace(/[^a-z0-9]/g, "-"), "womenswear"],
    hsCode: "6204.42.00", countryOfOrigin: "India",
  })),

  // ═══════════════════════════════════════════════════════════════════
  // CO-ORD SETS (10) — cs-001 to cs-010
  // ═══════════════════════════════════════════════════════════════════
  ...[
    { id: "cs-001", slug: "cotton-co-ord-set", name: "Organic Cotton Co-ord Set", sub: "Cotton" },
    { id: "cs-002", slug: "linen-co-ord-set", name: "European Linen Co-ord Set", sub: "Linen" },
    { id: "cs-003", slug: "printed-co-ord-set", name: "Printed Cotton Co-ord Set", sub: "Printed" },
    { id: "cs-004", slug: "striped-co-ord-set", name: "Stripe Yarn-Dyed Co-ord Set", sub: "Striped" },
    { id: "cs-005", slug: "tencel-co-ord-set", name: "Tencel™ Lounge Co-ord Set", sub: "Tencel" },
    { id: "cs-006", slug: "resort-co-ord-set", name: "Resort Linen Co-ord Set", sub: "Resort" },
    { id: "cs-007", slug: "embroidered-co-ord-set", name: "Embroidered Cotton Co-ord Set", sub: "Embroidered" },
    { id: "cs-008", slug: "oversized-co-ord-set", name: "Oversized Linen Co-ord Set", sub: "Oversized" },
    { id: "cs-009", slug: "cropped-co-ord-set", name: "Cropped Top & Palazzo Co-ord", sub: "Cropped" },
    { id: "cs-010", slug: "tailored-co-ord-set", name: "Tailored Cotton Co-ord Set", sub: "Tailored" },
  ].map((s, i) => ({
    id: s.id, sku: `VF-${s.id.toUpperCase()}`, slug: s.slug, name: s.name, category: "co-ord-sets" as const, subcategory: s.sub,
    description: `Matching ${s.name.toLowerCase()} — top and bottom sold as a set. Premium construction with coordinated fabric and colourways. Designed for European wholesale and private label.`,
    shortDescription: `${s.name} — matching top & bottom set.`,
    galleryImages: [] as string[], colorOptions: ["White", "Black", "Navy", "Sage", "Terracotta", "Sand"],
    fabricOptions: [{ name: i % 2 === 0 ? "Organic Cotton Poplin" : "Washed Linen", composition: i % 2 === 0 ? "100% Organic Cotton" : "100% Linen", gsm: i % 2 === 0 ? 120 : 160, weave: "Plain", width: "58\"", shrinkage: i % 2 === 0 ? "3–4%" : "5–7%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: i % 2 === 0 ? ["GOTS", "OEKO-TEX Standard 100"] : ["OEKO-TEX Standard 100"],
    moq: "200 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Matching top & bottom", "Coordinated fabric", "Mix-and-match sizing", "Custom colourways"], tags: ["co-ord", "set", s.sub.toLowerCase().replace(/[^a-z0-9]/g, "-"), "womenswear"],
    hsCode: "6204.49.00", countryOfOrigin: "India",
  })),

  // ═══════════════════════════════════════════════════════════════════
  // KAFTANS (9) — kf-001 to kf-009
  // ═══════════════════════════════════════════════════════════════════
  ...[
    { id: "kf-001", slug: "block-print-kaftan", name: "Hand Block Print Kaftan", sub: "Block Print" },
    { id: "kf-002", slug: "embroidered-kaftan", name: "Embroidered Neckline Kaftan", sub: "Embroidered" },
    { id: "kf-003", slug: "silk-trim-kaftan", name: "Silk Trim Cotton Kaftan", sub: "Silk Trim" },
    { id: "kf-004", slug: "tie-dye-kaftan", name: "Shibori Tie-Dye Kaftan", sub: "Shibori" },
    { id: "kf-005", slug: "maxi-kaftan", name: "Full-Length Maxi Kaftan", sub: "Maxi" },
    { id: "kf-006", slug: "short-kaftan", name: "Short Beach Kaftan", sub: "Short" },
    { id: "kf-007", slug: "tassel-trim-kaftan", name: "Tassel Trim Cotton Kaftan", sub: "Tassel" },
    { id: "kf-008", slug: "linen-kaftan", name: "Washed Linen Kaftan", sub: "Linen" },
    { id: "kf-009", slug: "digital-print-kaftan", name: "Digital Print Resort Kaftan", sub: "Digital Print" },
  ].map((s) => ({
    id: s.id, sku: `VF-${s.id.toUpperCase()}`, slug: s.slug, name: s.name, category: "kaftans" as const, subcategory: s.sub,
    description: `${s.name} crafted from organic cotton voile or mulmul. Artisan finishing with resort and cruise collections in mind. One-size fits most with relaxed, flowing silhouette.`,
    shortDescription: `${s.name} in organic cotton — resort and beachwear.`,
    galleryImages: [] as string[], colorOptions: ["White", "Indigo", "Terracotta", "Natural", "Multi-Colour"],
    fabricOptions: [{ name: "Organic Cotton Voile", composition: "100% Organic Cotton", gsm: 75, weave: "Plain", width: "56\"", shrinkage: "3–5%", colorfastness: "Grade 3–4 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "200 pcs", leadTime: "8–10 weeks", sizeChart: oneSizeChart, exportCompliance,
    features: ["One-size", "Artisan finish", "Side slits", "Custom prints available"], tags: ["kaftan", "resort", s.sub.toLowerCase().replace(/[^a-z0-9]/g, "-"), "womenswear"],
    hsCode: "6204.49.00", countryOfOrigin: "India",
  })),

  // ═══════════════════════════════════════════════════════════════════
  // LOUNGEWEAR (8) — lw-001 to lw-008
  // ═══════════════════════════════════════════════════════════════════
  ...[
    { id: "lw-001", slug: "jersey-pyjama-set", name: "Organic Jersey Pyjama Set", sub: "Pyjama Set" },
    { id: "lw-002", slug: "lounge-jogger-set", name: "Lounge Jogger & Tee Set", sub: "Jogger Set" },
    { id: "lw-003", slug: "woven-cotton-pyjamas", name: "Woven Cotton Pyjamas", sub: "Woven PJ" },
    { id: "lw-004", slug: "sleep-shirt-cotton", name: "Organic Cotton Sleep Shirt", sub: "Sleep Shirt" },
    { id: "lw-005", slug: "bamboo-lounge-set", name: "Bamboo Viscose Lounge Set", sub: "Bamboo" },
    { id: "lw-006", slug: "kimono-robe", name: "Cotton Kimono Robe", sub: "Robe" },
    { id: "lw-007", slug: "french-terry-hoodie-set", name: "Organic French Terry Set", sub: "French Terry" },
    { id: "lw-008", slug: "ribbed-cotton-lounge", name: "Ribbed Cotton Lounge Set", sub: "Ribbed" },
  ].map((s, i) => ({
    id: s.id, sku: `VF-${s.id.toUpperCase()}`, slug: s.slug, name: s.name, category: "loungewear" as const, subcategory: s.sub,
    description: `Premium ${s.name.toLowerCase()} for the European loungewear market. Soft, sustainable fabrics with attention to comfort and durability. Private label packaging available.`,
    shortDescription: `${s.name} — sustainable loungewear for private label.`,
    galleryImages: [] as string[], colorOptions: ["White", "Grey Marl", "Navy", "Blush", "Sage", "Oatmeal"],
    fabricOptions: [{ name: i < 4 ? "Organic Cotton Jersey" : i === 4 ? "Bamboo Viscose Jersey" : "Organic Cotton Interlock", composition: i === 4 ? "95% Bamboo Viscose, 5% Elastane" : "100% Organic Cotton", gsm: i < 2 ? 160 : i < 5 ? 140 : 200, weave: i < 2 ? "Jersey" : i === 4 ? "Jersey" : i === 6 ? "French Terry" : "Interlock", width: "60\"", shrinkage: "±5%", colorfastness: "Grade 4 (ISO 105)" }],
    certifications: i === 4 ? ["OEKO-TEX Standard 100", "FSC"] : ["GOTS", "OEKO-TEX Standard 100"],
    moq: "300 pcs", leadTime: "6–8 weeks", sizeChart: standardSizeChart, exportCompliance,
    features: ["Ultra-soft finish", "Sustainable fabric", "Co-ord set", "Custom packaging"], tags: ["loungewear", s.sub.toLowerCase().replace(/[^a-z0-9]/g, "-"), "comfort"],
    hsCode: "6108.39.00", countryOfOrigin: "India",
  })),

  // ═══════════════════════════════════════════════════════════════════
  // POLO SHIRTS (4) — ps-001 to ps-004
  // ═══════════════════════════════════════════════════════════════════
  ...[
    { id: "ps-001", slug: "classic-pique-polo", name: "Classic Piqué Polo Shirt", sub: "Classic" },
    { id: "ps-002", slug: "organic-jersey-polo", name: "Organic Jersey Polo Shirt", sub: "Jersey" },
    { id: "ps-003", slug: "tipped-collar-polo", name: "Tipped Collar Polo Shirt", sub: "Tipped" },
    { id: "ps-004", slug: "long-sleeve-polo", name: "Long Sleeve Piqué Polo", sub: "Long Sleeve" },
  ].map((s) => ({
    id: s.id, sku: `VF-${s.id.toUpperCase()}`, slug: s.slug, name: s.name, category: "polo-shirts" as const, subcategory: s.sub,
    description: `Premium ${s.name.toLowerCase()} in GOTS-certified organic cotton piqué. Rib-knit collar and cuffs, side vents, and embroidery-ready chest panel. Corporate and retail wholesale.`,
    shortDescription: `${s.name} in GOTS organic cotton piqué.`,
    galleryImages: [] as string[], colorOptions: ["White", "Black", "Navy", "Red", "Royal Blue", "Forest Green", "Grey Marl"],
    fabricOptions: [{ name: "Organic Cotton Piqué", composition: "100% Organic Cotton", gsm: 200, weave: "Piqué", width: "60\"", shrinkage: "±5%", colorfastness: "Grade 4–5 (ISO 105)" }],
    certifications: ["GOTS", "OEKO-TEX Standard 100"], moq: "500 pcs", leadTime: "5–6 weeks", sizeChart: mensSizeChart, exportCompliance,
    features: ["Rib-knit collar", "Side vents", "Embroidery-ready", "Pre-shrunk"], tags: ["polo", "piqué", s.sub.toLowerCase().replace(/[^a-z0-9]/g, "-"), "corporate"],
    hsCode: "6105.10.00", countryOfOrigin: "India",
  })),
];

// ── Helper functions ────────────────────────────────────────────────

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  products.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getAllCertifications(): string[] {
  const certs = new Set<string>();
  products.forEach((p) => p.certifications.forEach((c) => certs.add(c)));
  return Array.from(certs).sort();
}

export function filterProducts(opts: {
  category?: string;
  certification?: string;
  search?: string;
  gsmMin?: number;
  gsmMax?: number;
}): Product[] {
  return products.filter((p) => {
    if (opts.category && p.category !== opts.category) return false;
    if (opts.certification && !p.certifications.includes(opts.certification)) return false;
    if (opts.search) {
      const q = opts.search.toLowerCase();
      if (!p.name.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q) && !p.tags.some((t) => t.includes(q))) return false;
    }
    if (opts.gsmMin || opts.gsmMax) {
      const gsms = p.fabricOptions.map((f) => f.gsm);
      if (opts.gsmMin && !gsms.some((g) => g >= opts.gsmMin!)) return false;
      if (opts.gsmMax && !gsms.some((g) => g <= opts.gsmMax!)) return false;
    }
    return true;
  });
}
