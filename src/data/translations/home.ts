// ─────────────────────────────────────────────────────────────────────────────
// Homepage content translations
// Covers: Hero section, inline stats, Export Markets section
// Languages: en · ar · ru · pl · fr · it · nl
// ─────────────────────────────────────────────────────────────────────────────

export interface HomeStat {
  value: string;
  label: string;
}

export interface HomeLocale {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    collectionLabel: string;
    collectionAvailable: string;
    certBadge: string;
    certBadgeDesc: string;
  };
  stats: HomeStat[];
  exportMarkets: {
    subtitle: string;
    title: string;
    description: string;
    countriesLabel: string;
    exportShareLabel: string;
  };
}

export const homeContent: Record<string, HomeLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      badge: "B2B Wholesale · Since 1998",
      title: "Sustainable Textiles for European Markets",
      subtitle: "Premium Garment Manufacturer",
      description:
        "Premium organic and recycled fabrics crafted with precision. GOTS, OEKO-TEX® and GRS certified. Trusted by 200+ brands across Germany, France, Italy and the Netherlands.",
      ctaPrimary: "Request Catalogue",
      ctaSecondary: "Book a Showroom Visit",
      collectionLabel: "SS 2026 Collection",
      collectionAvailable: "Now Available",
      certBadge: "GOTS Certified",
      certBadgeDesc: "100% Organic Cotton",
    },
    stats: [
      { value: "200+", label: "Brands Served" },
      { value: "15M+", label: "Meters Annually" },
      { value: "27", label: "Countries" },
      { value: "50K+", label: "Garments / Month" },
    ],
    exportMarkets: {
      subtitle: "Global Reach",
      title: "Export Markets",
      description:
        "Exporting to 25+ countries with dedicated logistics for Europe. Hamburg office ensures local support across DACH and Northern European markets.",
      countriesLabel: "25+ Countries",
      exportShareLabel: "of exports",
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      badge: "تصنيع بالجملة B2B · منذ 1998",
      title: "ملابس نسائية منسوجة للشرق الأوسط والخليج",
      subtitle: "مصنع ملابس متخصص للتصدير",
      description:
        "ملابس نسائية منسوجة عالية الجودة معتمدة بشهادات GOTS وOEKO-TEX وGRS. نخدم أكثر من 200 علامة تجارية في الإمارات والسعودية وقطر والكويت. الحد الأدنى للطلب 300 قطعة، FOB مومباي.",
      ctaPrimary: "طلب الكتالوج",
      ctaSecondary: "تواصل مع فريق التصدير",
      collectionLabel: "مجموعة SS 2026",
      collectionAvailable: "متوفرة الآن",
      certBadge: "معتمد GOTS",
      certBadgeDesc: "قطن عضوي 100%",
    },
    stats: [
      { value: "200+", label: "علامة تجارية" },
      { value: "15M+", label: "متر سنوياً" },
      { value: "27", label: "دولة مُصدِّر" },
      { value: "50K+", label: "قطعة شهرياً" },
    ],
    exportMarkets: {
      subtitle: "انتشار عالمي",
      title: "أسواق التصدير",
      description:
        "نُصدِّر إلى أكثر من 25 دولة مع خدمات لوجستية متخصصة. نخدم الشرق الأوسط وروسيا وأوروبا بخبرة تمتد لأكثر من عقدين متواصلين.",
      countriesLabel: "أكثر من 25 دولة",
      exportShareLabel: "من الصادرات",
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      badge: "B2B Опт · С 1998 года",
      title: "Женская одежда из тканых материалов",
      subtitle: "Производитель и экспортёр одежды",
      description:
        "Сертифицированное производство одежды в Индии. Сертификаты GOTS, OEKO-TEX® и GRS. Экспорт в Россию, ОАЭ и страны Европы. Минимальный заказ от 300 единиц, условия FOB Мумбаи.",
      ctaPrimary: "Запросить каталог",
      ctaSecondary: "Связаться с отделом экспорта",
      collectionLabel: "Коллекция SS 2026",
      collectionAvailable: "Доступна сейчас",
      certBadge: "Сертификат GOTS",
      certBadgeDesc: "100% органический хлопок",
    },
    stats: [
      { value: "200+", label: "Брендов" },
      { value: "15M+", label: "Метров в год" },
      { value: "27", label: "Стран" },
      { value: "50K+", label: "Изделий в месяц" },
    ],
    exportMarkets: {
      subtitle: "Глобальное присутствие",
      title: "Рынки экспорта",
      description:
        "Экспортируем в 25+ стран. Специализированная логистика для России, ОАЭ и Европы. Более 15 лет успешной работы с российскими импортёрами одежды.",
      countriesLabel: "25+ стран",
      exportShareLabel: "экспорта",
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      badge: "Sprzedaż hurtowa B2B · Od 1998 roku",
      title: "Odzież damska z tkanin dla rynków europejskich",
      subtitle: "Producent i eksporter odzieży",
      description:
        "Certyfikowana produkcja odzieży w Indiach. Certyfikaty GOTS, OEKO-TEX® i GRS. Eksport do Polski, Niemiec, Francji i całej Europy. MOQ od 300 sztuk, warunki FOB Mumbaj.",
      ctaPrimary: "Zamów katalog",
      ctaSecondary: "Skontaktuj się z zespołem eksportowym",
      collectionLabel: "Kolekcja SS 2026",
      collectionAvailable: "Dostępna teraz",
      certBadge: "Certyfikat GOTS",
      certBadgeDesc: "100% bawełna organiczna",
    },
    stats: [
      { value: "200+", label: "Marek" },
      { value: "15M+", label: "Metrów rocznie" },
      { value: "27", label: "Krajów" },
      { value: "50K+", label: "Szt. miesięcznie" },
    ],
    exportMarkets: {
      subtitle: "Globalny zasięg",
      title: "Rynki eksportowe",
      description:
        "Eksportujemy do ponad 25 krajów z dedykowaną logistyką dla Europy. Biuro w Hamburgu zapewnia lokalne wsparcie na rynkach DACH i Europy Północnej.",
      countriesLabel: "25+ krajów",
      exportShareLabel: "eksportu",
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      badge: "Commerce de gros B2B · Depuis 1998",
      title: "Prêt-à-porter féminin tissé pour l'Europe",
      subtitle: "Fabricant et exportateur de vêtements",
      description:
        "Fabrication certifiée GOTS, OEKO-TEX® et GRS en Inde. Exportation vers la France, l'Allemagne, les Pays-Bas et toute l'Europe. MOQ dès 300 pièces, FOB Mumbai.",
      ctaPrimary: "Demander un catalogue",
      ctaSecondary: "Contacter l'équipe export",
      collectionLabel: "Collection SS 2026",
      collectionAvailable: "Disponible maintenant",
      certBadge: "Certifié GOTS",
      certBadgeDesc: "100% coton biologique",
    },
    stats: [
      { value: "200+", label: "Marques" },
      { value: "15M+", label: "Mètres / an" },
      { value: "27", label: "Pays" },
      { value: "50K+", label: "Pièces / mois" },
    ],
    exportMarkets: {
      subtitle: "Rayonnement mondial",
      title: "Marchés d'exportation",
      description:
        "Exportation vers plus de 25 pays avec une logistique dédiée pour l'Europe. Notre bureau à Hambourg assure un support local pour les marchés DACH et d'Europe du Nord.",
      countriesLabel: "25+ pays",
      exportShareLabel: "des exportations",
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      badge: "Vendita all'ingrosso B2B · Dal 1998",
      title: "Abbigliamento femminile tessuto per l'Europa",
      subtitle: "Produttore ed esportatore di abbigliamento",
      description:
        "Produzione certificata GOTS, OEKO-TEX® e GRS in India. Esportazione verso l'Italia, la Germania, la Francia e tutta l'Europa. MOQ da 300 pezzi, FOB Mumbai.",
      ctaPrimary: "Richiedi il catalogo",
      ctaSecondary: "Contatta il team export",
      collectionLabel: "Collezione SS 2026",
      collectionAvailable: "Disponibile ora",
      certBadge: "Certificato GOTS",
      certBadgeDesc: "100% cotone biologico",
    },
    stats: [
      { value: "200+", label: "Brand serviti" },
      { value: "15M+", label: "Metri / anno" },
      { value: "27", label: "Paesi" },
      { value: "50K+", label: "Capi / mese" },
    ],
    exportMarkets: {
      subtitle: "Presenza globale",
      title: "Mercati di esportazione",
      description:
        "Esportiamo in oltre 25 paesi con logistica dedicata per l'Europa. L'ufficio di Amburgo garantisce supporto locale per i mercati DACH e dell'Europa settentrionale.",
      countriesLabel: "25+ paesi",
      exportShareLabel: "delle esportazioni",
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      badge: "B2B Groothandel · Sinds 1998",
      title: "Geweven dameskleding voor Europese markten",
      subtitle: "Fabrikant en exporteur van kleding",
      description:
        "Gecertificeerde kledingproductie in India. GOTS, OEKO-TEX® en GRS gecertificeerd. Export naar Nederland, Duitsland, België en heel Europa. MOQ vanaf 300 stuks, FOB Mumbai.",
      ctaPrimary: "Catalogus aanvragen",
      ctaSecondary: "Contact exportteam",
      collectionLabel: "SS 2026 Collectie",
      collectionAvailable: "Nu beschikbaar",
      certBadge: "GOTS gecertificeerd",
      certBadgeDesc: "100% biologisch katoen",
    },
    stats: [
      { value: "200+", label: "Merken" },
      { value: "15M+", label: "Meter / jaar" },
      { value: "27", label: "Landen" },
      { value: "50K+", label: "Stuks / maand" },
    ],
    exportMarkets: {
      subtitle: "Wereldwijde aanwezigheid",
      title: "Exportmarkten",
      description:
        "Export naar meer dan 25 landen met toegewijde logistiek voor Europa. Ons kantoor in Hamburg biedt lokale ondersteuning voor de DACH-regio en Noord-Europa.",
      countriesLabel: "25+ landen",
      exportShareLabel: "van de export",
    },
  },
};
