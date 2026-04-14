export type Locale = "en" | "de" | "fr" | "it" | "es" | "nl" | "pl" | "ru" | "ar";

export interface LocaleConfig {
  code: Locale;
  label: string;
  nativeName: string;
  flag: string;
}

export const locales: LocaleConfig[] = [
  { code: "en", label: "EN", nativeName: "English", flag: "🇬🇧" },
  { code: "de", label: "DE", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "FR", nativeName: "Français", flag: "🇫🇷" },
  { code: "it", label: "IT", nativeName: "Italiano", flag: "🇮🇹" },
  { code: "es", label: "ES", nativeName: "Español", flag: "🇪🇸" },
  { code: "nl", label: "NL", nativeName: "Nederlands", flag: "🇳🇱" },
  { code: "pl", label: "PL", nativeName: "Polski", flag: "🇵🇱" },
  { code: "ru", label: "RU", nativeName: "Русский", flag: "🇷🇺" },
  { code: "ar", label: "AR", nativeName: "العربية", flag: "🇦🇪" },
];

export const defaultLocale: Locale = "en";

// Flexible translation map — allows any string key
export type Translations = Record<string, string>;

// Localized route slugs for each language
export interface RouteMap {
  products: string;
  about: string;
  manufacturing: string;
  sustainability: string;
  certifications: string;
  qualityControl: string;
  privateLabel: string;
  oem: string;
  fabricSourcing: string;
  sizeGuide: string;
  wholesaleFaq: string;
  shipping: string;
  catalog: string;
  inquiry: string;
  contact: string;
  knowledge: string;
  sitemap: string;
}

export const localizedRoutes: Record<Locale, RouteMap> = {
  en: {
    products: "products",
    about: "about",
    manufacturing: "manufacturing",
    sustainability: "sustainability",
    certifications: "certifications",
    qualityControl: "quality-control",
    privateLabel: "private-label",
    oem: "oem",
    fabricSourcing: "fabric-sourcing",
    sizeGuide: "size-guide",
    wholesaleFaq: "wholesale-faq",
    shipping: "shipping",
    catalog: "catalog",
    inquiry: "inquiry",
    contact: "contact",
    knowledge: "knowledge",
    sitemap: "sitemap",
  },
  de: {
    products: "produkte",
    about: "ueber-uns",
    manufacturing: "fertigung",
    sustainability: "nachhaltigkeit",
    certifications: "zertifizierungen",
    qualityControl: "qualitaetskontrolle",
    privateLabel: "eigenmarke",
    oem: "oem-produktion",
    fabricSourcing: "stoffbeschaffung",
    sizeGuide: "groessentabelle",
    wholesaleFaq: "grosshandel-faq",
    shipping: "versand",
    catalog: "katalog",
    inquiry: "anfrage",
    contact: "kontakt",
    knowledge: "wissen",
    sitemap: "seitenplan",
  },
  fr: {
    products: "produits",
    about: "a-propos",
    manufacturing: "fabrication",
    sustainability: "durabilite",
    certifications: "certifications",
    qualityControl: "controle-qualite",
    privateLabel: "marque-privee",
    oem: "production-oem",
    fabricSourcing: "approvisionnement-tissus",
    sizeGuide: "guide-tailles",
    wholesaleFaq: "faq-grossiste",
    shipping: "expedition",
    catalog: "catalogue",
    inquiry: "demande",
    contact: "contact",
    knowledge: "connaissances",
    sitemap: "plan-du-site",
  },
  it: {
    products: "prodotti",
    about: "chi-siamo",
    manufacturing: "produzione",
    sustainability: "sostenibilita",
    certifications: "certificazioni",
    qualityControl: "controllo-qualita",
    privateLabel: "marchio-privato",
    oem: "produzione-oem",
    fabricSourcing: "approvvigionamento-tessuti",
    sizeGuide: "guida-taglie",
    wholesaleFaq: "faq-ingrosso",
    shipping: "spedizione",
    catalog: "catalogo",
    inquiry: "richiesta",
    contact: "contatti",
    knowledge: "conoscenze",
    sitemap: "mappa-sito",
  },
  es: {
    products: "productos",
    about: "sobre-nosotros",
    manufacturing: "fabricacion",
    sustainability: "sostenibilidad",
    certifications: "certificaciones",
    qualityControl: "control-calidad",
    privateLabel: "marca-privada",
    oem: "produccion-oem",
    fabricSourcing: "abastecimiento-telas",
    sizeGuide: "guia-tallas",
    wholesaleFaq: "faq-mayorista",
    shipping: "envio",
    catalog: "catalogo",
    inquiry: "consulta",
    contact: "contacto",
    knowledge: "conocimiento",
    sitemap: "mapa-sitio",
  },
  nl: {
    products: "producten",
    about: "over-ons",
    manufacturing: "productie",
    sustainability: "duurzaamheid",
    certifications: "certificeringen",
    qualityControl: "kwaliteitscontrole",
    privateLabel: "eigen-merk",
    oem: "oem-productie",
    fabricSourcing: "stofinkoop",
    sizeGuide: "maattabel",
    wholesaleFaq: "groothandel-faq",
    shipping: "verzending",
    catalog: "catalogus",
    inquiry: "aanvraag",
    contact: "contact",
    knowledge: "kenniscentrum",
    sitemap: "sitemap",
  },
  pl: {
    products: "produkty",
    about: "o-nas",
    manufacturing: "produkcja",
    sustainability: "zrownowazonosc",
    certifications: "certyfikaty",
    qualityControl: "kontrola-jakosci",
    privateLabel: "marka-wlasna",
    oem: "produkcja-oem",
    fabricSourcing: "zaopatrzenie-tkanin",
    sizeGuide: "tabela-rozmiarow",
    wholesaleFaq: "faq-hurtowy",
    shipping: "wysylka",
    catalog: "katalog",
    inquiry: "zapytanie",
    contact: "kontakt",
    knowledge: "baza-wiedzy",
    sitemap: "mapa-strony",
  },
  ru: {
    products: "produktsiya",
    about: "o-kompanii",
    manufacturing: "proizvodstvo",
    sustainability: "ustojchivost",
    certifications: "sertifikatsii",
    qualityControl: "kontrol-kachestva",
    privateLabel: "chastnaya-marka",
    oem: "oem-proizvodstvo",
    fabricSourcing: "zakupka-tkanej",
    sizeGuide: "tablitsa-razmerov",
    wholesaleFaq: "faq-optovyj",
    shipping: "dostavka",
    catalog: "katalog",
    inquiry: "zapros",
    contact: "kontakty",
    knowledge: "baza-znanij",
    sitemap: "karta-sajta",
  },
  ar: {
    products: "products",
    about: "about",
    manufacturing: "manufacturing",
    sustainability: "sustainability",
    certifications: "certifications",
    qualityControl: "quality-control",
    privateLabel: "private-label",
    oem: "oem",
    fabricSourcing: "fabric-sourcing",
    sizeGuide: "size-guide",
    wholesaleFaq: "wholesale-faq",
    shipping: "shipping",
    catalog: "catalog",
    inquiry: "inquiry",
    contact: "contact",
    knowledge: "knowledge",
    sitemap: "sitemap",
  },
};
