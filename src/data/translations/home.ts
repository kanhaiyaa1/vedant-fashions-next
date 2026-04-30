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
      badge: "B2B Wholesale · Mumbai, India",
      title: "Ladies Woven Wear Manufacturer — Exporting to Middle East & Global",
      subtitle: "B2B Wholesale Garment Manufacturer",
      description:
        "Ladies woven wear manufacturer based in Mumbai, India. Viscose, rayon, georgette, linen blends, and crepe. MOQ 100 pieces. FOB USD 5–8. Exporting to UAE, Russia, Poland, and South Africa.",
      ctaPrimary: "View Our Collections",
      ctaSecondary: "Send Enquiry",
      collectionLabel: "SS 2026 Collection",
      collectionAvailable: "Now Available",
      certBadge: "GOTS Certified",
      certBadgeDesc: "100% Organic Cotton",
    },
    stats: [
      { value: "10,000+", label: "Pieces / Month" },
      { value: "100", label: "MOQ per Style" },
      { value: "4", label: "Export Markets" },
      { value: "18-22", label: "Days to UAE" },
    ],
    exportMarkets: {
      subtitle: "Middle East & Global",
      title: "Export Markets",
      description:
        "Exporting ladies woven wear to UAE, Russia, Poland, and South Africa. Sea freight from Mumbai reaches Jebel Ali in 18–22 days.",
      countriesLabel: "4 Markets",
      exportShareLabel: "of exports",
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      badge: "تصنيع بالجملة · مومباي، الهند",
      title: "مصنع ملابس نسائية منسوجة — تصدير إلى الشرق الأوسط والعالم",
      subtitle: "مصنع ملابس بالجملة B2B",
      description:
        "ملابس نسائية منسوجة عالية الجودة من الهند. معتمدة بشهادات GOTS وOEKO-TEX. نخدم مشتري الجملة في الإمارات والسعودية وقطر والكويت وروسيا والأسواق العالمية. الحد الأدنى للطلب 300 قطعة. FOB مومباي.",
      ctaPrimary: "عرض مجموعاتنا",
      ctaSecondary: "إرسال استفسار",
      collectionLabel: "مجموعة SS 2026",
      collectionAvailable: "متوفرة الآن",
      certBadge: "معتمد GOTS",
      certBadgeDesc: "قطن عضوي 100%",
    },
    stats: [
      { value: "25,000+", label: "قطعة / شهر" },
      { value: "300", label: "حد أدنى للطلب" },
      { value: "9", label: "أسواق تصدير" },
      { value: "18-22", label: "يوم إلى الإمارات" },
    ],
    exportMarkets: {
      subtitle: "الشرق الأوسط والعالم",
      title: "أسواق التصدير",
      description:
        "نصدر الملابس النسائية المنسوجة إلى الإمارات والسعودية وقطر والكويت وعُمان والبحرين ومصر وروسيا وبولندا. الشحن البحري من مومباي يصل إلى جبل علي في 18–22 يوماً.",
      countriesLabel: "9 أسواق",
      exportShareLabel: "من الصادرات",
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      badge: "Оптовое производство · Мумбаи, Индия",
      title: "Производитель женской тканой одежды — экспорт на Ближний Восток и в мир",
      subtitle: "B2B оптовый производитель одежды",
      description:
        "Премиальная женская тканая одежда производства Индии. Сертификаты GOTS и OEKO-TEX. Поставки оптовым покупателям в ОАЭ, Саудовской Аравии, Катаре, Кувейте, России и на мировые рынки. МОЗ 300 единиц. FOB Мумбаи.",
      ctaPrimary: "Посмотреть коллекции",
      ctaSecondary: "Отправить запрос",
      collectionLabel: "Коллекция SS 2026",
      collectionAvailable: "Доступна сейчас",
      certBadge: "Сертификат GOTS",
      certBadgeDesc: "100% органический хлопок",
    },
    stats: [
      { value: "25,000+", label: "Единиц / месяц" },
      { value: "300", label: "МОЗ на стиль" },
      { value: "9", label: "Рынков экспорта" },
      { value: "18-22", label: "Дней до ОАЭ" },
    ],
    exportMarkets: {
      subtitle: "Ближний Восток и весь мир",
      title: "Рынки экспорта",
      description:
        "Экспортируем женскую тканую одежду в ОАЭ, Саудовскую Аравию, Катар, Кувейт, Оман, Бахрейн, Египет, Россию и Польшу. Морской фрахт из Мумбаи достигает Джебель-Али за 18–22 дня.",
      countriesLabel: "9 рынков",
      exportShareLabel: "экспорта",
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      badge: "Sprzedaż hurtowa B2B · Mumbaj, Indie",
      title: "Producent damskiej odzieży tkanej — eksport na Bliski Wschód i na świat",
      subtitle: "Hurtowy producent odzieży B2B",
      description:
        "Wysokiej jakości damska odzież tkana z Indii. Certyfikaty GOTS i OEKO-TEX. Dostawy dla hurtowników w ZEA, Arabii Saudyjskiej, Katarze, Kuwejcie, Rosji i na rynki globalne. MOQ 300 szt. FOB Mumbaj.",
      ctaPrimary: "Zobacz nasze kolekcje",
      ctaSecondary: "Wyślij zapytanie",
      collectionLabel: "Kolekcja SS 2026",
      collectionAvailable: "Dostępna teraz",
      certBadge: "Certyfikat GOTS",
      certBadgeDesc: "100% bawełna organiczna",
    },
    stats: [
      { value: "25,000+", label: "Sztuk / miesiąc" },
      { value: "300", label: "MOQ na styl" },
      { value: "9", label: "Rynków eksportowych" },
      { value: "18-22", label: "Dni do ZEA" },
    ],
    exportMarkets: {
      subtitle: "Bliski Wschód i świat",
      title: "Rynki eksportowe",
      description:
        "Eksportujemy damską odzież tkaną do ZEA, Arabii Saudyjskiej, Kataru, Kuwejtu, Omanu, Bahrajnu, Egiptu, Rosji i Polski. Transport morski z Mumbaju dociera do Dżabal Ali w 18–22 dni.",
      countriesLabel: "9 rynków",
      exportShareLabel: "eksportu",
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      badge: "Commerce de gros B2B · Mumbai, Inde",
      title: "Fabricant de vêtements tissés pour femmes — export Moyen-Orient & mondial",
      subtitle: "Fabricant de vêtements en gros B2B",
      description:
        "Vêtements tissés féminins haut de gamme fabriqués en Inde. Certifiés GOTS et OEKO-TEX. Livraison aux acheteurs en gros aux Émirats, en Arabie saoudite, au Qatar, au Koweït, en Russie et sur les marchés mondiaux. MOQ 300 pièces. FOB Mumbai.",
      ctaPrimary: "Voir nos collections",
      ctaSecondary: "Envoyer une demande",
      collectionLabel: "Collection SS 2026",
      collectionAvailable: "Disponible maintenant",
      certBadge: "Certifié GOTS",
      certBadgeDesc: "100% coton biologique",
    },
    stats: [
      { value: "25,000+", label: "Pièces / mois" },
      { value: "300", label: "MOQ par style" },
      { value: "9", label: "Marchés export" },
      { value: "18-22", label: "Jours vers EAU" },
    ],
    exportMarkets: {
      subtitle: "Moyen-Orient & mondial",
      title: "Marchés d'exportation",
      description:
        "Nous exportons des vêtements tissés féminins vers les EAU, l'Arabie saoudite, le Qatar, le Koweït, Oman, Bahreïn, l'Égypte, la Russie et la Pologne. Le fret maritime depuis Mumbai atteint Jebel Ali en 18–22 jours.",
      countriesLabel: "9 marchés",
      exportShareLabel: "des exportations",
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      badge: "Vendita all'ingrosso B2B · Mumbai, India",
      title: "Produttore di abbigliamento tessuto femminile — export Medio Oriente & globale",
      subtitle: "Produttore di abbigliamento all'ingrosso B2B",
      description:
        "Abbigliamento tessuto femminile premium prodotto in India. Certificazioni GOTS e OEKO-TEX. Fornitura a compratori all'ingrosso negli EAU, Arabia Saudita, Qatar, Kuwait, Russia e mercati globali. MOQ 300 pz. FOB Mumbai.",
      ctaPrimary: "Vedi le nostre collezioni",
      ctaSecondary: "Invia una richiesta",
      collectionLabel: "Collezione SS 2026",
      collectionAvailable: "Disponibile ora",
      certBadge: "Certificato GOTS",
      certBadgeDesc: "100% cotone biologico",
    },
    stats: [
      { value: "25,000+", label: "Pezzi / mese" },
      { value: "300", label: "MOQ per stile" },
      { value: "9", label: "Mercati export" },
      { value: "18-22", label: "Giorni verso EAU" },
    ],
    exportMarkets: {
      subtitle: "Medio Oriente & globale",
      title: "Mercati di esportazione",
      description:
        "Esportiamo abbigliamento tessuto femminile negli EAU, Arabia Saudita, Qatar, Kuwait, Oman, Bahrain, Egitto, Russia e Polonia. Il trasporto marittimo da Mumbai raggiunge Jebel Ali in 18–22 giorni.",
      countriesLabel: "9 mercati",
      exportShareLabel: "delle esportazioni",
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      badge: "B2B Groothandel · Mumbai, India",
      title: "Fabrikant van geweven dameskleding — export Midden-Oosten & wereldwijd",
      subtitle: "B2B groothandel kledingfabrikant",
      description:
        "Premium geweven dameskleding geproduceerd in India. GOTS en OEKO-TEX gecertificeerd. Levering aan groothandelinkopers in VAE, Saudi-Arabië, Qatar, Koeweit, Rusland en wereldwijde markten. MOQ 300 stuks. FOB Mumbai.",
      ctaPrimary: "Bekijk onze collecties",
      ctaSecondary: "Stuur een aanvraag",
      collectionLabel: "SS 2026 Collectie",
      collectionAvailable: "Nu beschikbaar",
      certBadge: "GOTS gecertificeerd",
      certBadgeDesc: "100% biologisch katoen",
    },
    stats: [
      { value: "25,000+", label: "Stuks / maand" },
      { value: "300", label: "MOQ per stijl" },
      { value: "9", label: "Exportmarkten" },
      { value: "18-22", label: "Dagen naar VAE" },
    ],
    exportMarkets: {
      subtitle: "Midden-Oosten & wereldwijd",
      title: "Exportmarkten",
      description:
        "Wij exporteren geweven dameskleding naar VAE, Saudi-Arabië, Qatar, Koeweit, Oman, Bahrein, Egypte, Rusland en Polen. Zeevracht vanuit Mumbai bereikt Jebel Ali in 18–22 dagen.",
      countriesLabel: "9 markten",
      exportShareLabel: "van de export",
    },
  },
};
