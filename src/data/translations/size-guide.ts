// ─────────────────────────────────────────────────────────────────────────────
// Size guide page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// NOT translated: size codes (XS/S/M/L/XL/2XL/3XL), EU/UK/US numbers,
//                 cm measurement values
// ─────────────────────────────────────────────────────────────────────────────

export interface SizeGuideLocale {
  hero: { subtitle: string; title: string; description: string };
  women: {
    subtitle: string;
    title: string;
    headers: [string, string, string, string, string, string, string];
  };
  men: {
    subtitle: string;
    title: string;
    headers: [string, string, string, string, string, string, string];
  };
  custom: {
    subtitle: string;
    title: string;
    paragraph: string;
    caption: string;
  };
  cta: { buttonText: string };
}

export const sizeGuideContent: Record<string, SizeGuideLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Size Guide",
      title: "European Size Conversion Charts",
      description: "All garments are graded to EU size standards. We support custom grading to your brand's fit specifications. Measurements in centimeters.",
    },
    women: {
      subtitle: "Women's Sizing",
      title: "Women's Size Chart",
      headers: ["Size", "EU", "UK", "US", "Bust (cm)", "Waist (cm)", "Hip (cm)"],
    },
    men: {
      subtitle: "Men's Sizing",
      title: "Men's Size Chart",
      headers: ["Size", "EU", "UK", "US", "Chest (cm)", "Waist (cm)", "Hip (cm)"],
    },
    custom: {
      subtitle: "Custom Grading",
      title: "Need Custom Fit Specs?",
      paragraph: "We can grade garments to your brand's proprietary size charts. Send us your measurement specs and we'll adapt our patterns accordingly. We support EU, UK, US, and Scandinavian sizing systems.",
      caption: "Tolerance: ±1 cm on critical measurements. All garments measured flat per buyer spec sheets.",
    },
    cta: { buttonText: "Send Your Size Specs" },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "دليل المقاسات",
      title: "جداول تحويل المقاسات الأوروبية",
      description: "جميع الملابس مُدرَّجة وفق معايير المقاسات الأوروبية. ندعم التدريج المخصص وفق مواصفات الاحتواء الخاصة بعلامتكم التجارية. القياسات بالسنتيمتر.",
    },
    women: {
      subtitle: "مقاسات الإناث",
      title: "جدول مقاسات الإناث",
      headers: ["المقاس", "EU", "UK", "US", "الصدر (سم)", "الخصر (سم)", "الورك (سم)"],
    },
    men: {
      subtitle: "مقاسات الذكور",
      title: "جدول مقاسات الذكور",
      headers: ["المقاس", "EU", "UK", "US", "الصدر (سم)", "الخصر (سم)", "الورك (سم)"],
    },
    custom: {
      subtitle: "تدريج مخصص",
      title: "هل تحتاجون إلى مواصفات احتواء خاصة؟",
      paragraph: "يمكننا تدريج الملابس وفق جداول المقاسات الخاصة بعلامتكم التجارية. أرسلوا إلينا مواصفات القياسات وسنُكيِّف أنماطنا وفقاً لها. نحن ندعم أنظمة مقاسات الاتحاد الأوروبي والمملكة المتحدة والولايات المتحدة وإسكندنافيا.",
      caption: "التسامح: ±1 سم في القياسات الحرجة. تُقاس جميع الملابس مسطحةً وفق جداول مواصفات المشتري.",
    },
    cta: { buttonText: "أرسل مواصفات المقاسات" },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Руководство по размерам",
      title: "Таблицы конвертации европейских размеров",
      description: "Все изделия изготавливаются по европейским размерным стандартам. Мы поддерживаем нестандартную градацию по спецификациям посадки вашего бренда. Замеры в сантиметрах.",
    },
    women: {
      subtitle: "Женские размеры",
      title: "Таблица женских размеров",
      headers: ["Размер", "EU", "UK", "US", "Грудь (см)", "Талия (см)", "Бёдра (см)"],
    },
    men: {
      subtitle: "Мужские размеры",
      title: "Таблица мужских размеров",
      headers: ["Размер", "EU", "UK", "US", "Грудь (см)", "Талия (см)", "Бёдра (см)"],
    },
    custom: {
      subtitle: "Индивидуальная градация",
      title: "Нужны индивидуальные спецификации посадки?",
      paragraph: "Мы можем выполнить градацию по фирменным размерным таблицам вашего бренда. Пришлите нам спецификации замеров, и мы адаптируем наши лекала соответствующим образом. Мы поддерживаем европейские, британские, американские и скандинавские системы размеров.",
      caption: "Допуск: ±1 см по критическим замерам. Все изделия измеряются в разложенном виде согласно листу спецификаций покупателя.",
    },
    cta: { buttonText: "Отправить спецификации размеров" },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Przewodnik po rozmiarach",
      title: "Tabele przeliczania rozmiarów europejskich",
      description: "Wszystkie wyroby są stopniowane według europejskich standardów rozmiarów. Obsługujemy indywidualne stopniowanie według specyfikacji dopasowania Twojej marki. Pomiary w centymetrach.",
    },
    women: {
      subtitle: "Rozmiary damskie",
      title: "Tabela rozmiarów damskich",
      headers: ["Rozmiar", "EU", "UK", "US", "Biust (cm)", "Talia (cm)", "Biodra (cm)"],
    },
    men: {
      subtitle: "Rozmiary męskie",
      title: "Tabela rozmiarów męskich",
      headers: ["Rozmiar", "EU", "UK", "US", "Klatka (cm)", "Talia (cm)", "Biodra (cm)"],
    },
    custom: {
      subtitle: "Indywidualne stopniowanie",
      title: "Potrzebujesz indywidualnych specyfikacji dopasowania?",
      paragraph: "Możemy stopniować odzież według własnych tabel rozmiarów Twojej marki. Wyślij nam specyfikacje pomiarów, a my dostosujemy nasze wzorce. Obsługujemy systemy rozmiarów EU, UK, US oraz skandynawski.",
      caption: "Tolerancja: ±1 cm dla pomiarów krytycznych. Wszystkie wyroby mierzone na płasko zgodnie z arkuszami specyfikacji kupującego.",
    },
    cta: { buttonText: "Wyślij specyfikacje rozmiarów" },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Guide des tailles",
      title: "Tableaux de conversion des tailles européennes",
      description: "Tous les vêtements sont gradés selon les normes de taille européennes. Nous prenons en charge le gradage personnalisé selon les spécifications de coupe de votre marque. Mesures en centimètres.",
    },
    women: {
      subtitle: "Tailles femmes",
      title: "Tableau des tailles femmes",
      headers: ["Taille", "EU", "UK", "US", "Poitrine (cm)", "Taille (cm)", "Hanches (cm)"],
    },
    men: {
      subtitle: "Tailles hommes",
      title: "Tableau des tailles hommes",
      headers: ["Taille", "EU", "UK", "US", "Poitrine (cm)", "Taille (cm)", "Hanches (cm)"],
    },
    custom: {
      subtitle: "Gradage sur mesure",
      title: "Besoin de spécifications de coupe personnalisées ?",
      paragraph: "Nous pouvons grader les vêtements selon les tableaux de taille propriétaires de votre marque. Envoyez-nous vos spécifications de mesures et nous adapterons nos patrons en conséquence. Nous prenons en charge les systèmes EU, UK, US et scandinave.",
      caption: "Tolérance : ±1 cm sur les mesures critiques. Tous les vêtements mesurés à plat selon les feuilles de spécifications de l'acheteur.",
    },
    cta: { buttonText: "Envoyer vos spécifications de taille" },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Guida alle taglie",
      title: "Tabelle di conversione taglie europee",
      description: "Tutti i capi sono gradati secondo gli standard europei. Supportiamo la gradatura personalizzata secondo le specifiche di vestibilità del vostro brand. Misure in centimetri.",
    },
    women: {
      subtitle: "Taglie donna",
      title: "Tabella taglie donna",
      headers: ["Taglia", "EU", "UK", "US", "Busto (cm)", "Vita (cm)", "Fianchi (cm)"],
    },
    men: {
      subtitle: "Taglie uomo",
      title: "Tabella taglie uomo",
      headers: ["Taglia", "EU", "UK", "US", "Petto (cm)", "Vita (cm)", "Fianchi (cm)"],
    },
    custom: {
      subtitle: "Gradatura personalizzata",
      title: "Hai bisogno di specifiche di vestibilità personalizzate?",
      paragraph: "Possiamo gradare i capi secondo le tabelle taglie proprietarie del vostro brand. Inviateci le specifiche delle misure e adatteremo i nostri cartamodelli di conseguenza. Supportiamo i sistemi EU, UK, US e scandinavo.",
      caption: "Tolleranza: ±1 cm sulle misure critiche. Tutti i capi misurati piatti secondo i fogli di specifiche dell'acquirente.",
    },
    cta: { buttonText: "Invia le tue specifiche di taglia" },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Maatgids",
      title: "Europese maatconversietabellen",
      description: "Alle kledingstukken zijn gegradueerd op EU-maatstandaarden. We ondersteunen aangepaste gradering op basis van de pasvormspecificaties van uw merk. Maten in centimeters.",
    },
    women: {
      subtitle: "Damesmaten",
      title: "Dames maattabel",
      headers: ["Maat", "EU", "UK", "US", "Borst (cm)", "Taille (cm)", "Heupen (cm)"],
    },
    men: {
      subtitle: "Herenmaten",
      title: "Heren maattabel",
      headers: ["Maat", "EU", "UK", "US", "Borst (cm)", "Taille (cm)", "Heupen (cm)"],
    },
    custom: {
      subtitle: "Aangepaste gradering",
      title: "Aangepaste pasvormspecificaties nodig?",
      paragraph: "We kunnen kledingstukken graderen op de eigen maattabellen van uw merk. Stuur ons uw maatspecificaties en wij passen onze patronen dienovereenkomstig aan. We ondersteunen EU-, UK-, US- en Scandinavische maatsystemen.",
      caption: "Tolerantie: ±1 cm op kritische maten. Alle kledingstukken vlak gemeten per specificatieblad van de koper.",
    },
    cta: { buttonText: "Stuur uw maatspecificaties" },
  },
};
