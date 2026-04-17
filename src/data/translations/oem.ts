// ─────────────────────────────────────────────────────────────────────────────
// OEM page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// NOT translated: equipment model names (Lectra Vector iX, Gerber AccuMark),
//                 certification names, MOQ/lead-time numbers, incoterm codes
// ─────────────────────────────────────────────────────────────────────────────

export interface OEMServiceItem {
  title: string;
  desc: string;
  features: string[]; // 6 items
}

export interface OEMComparisonRow {
  feature: string;
  fob: string;
  cmt: string;
  odm: string;
}

export interface OEMLocale {
  hero: { subtitle: string; title: string; description: string };
  services: {
    subtitle: string;
    title: string;
    items: OEMServiceItem[]; // 3
  };
  comparison: {
    subtitle: string;
    title: string;
    headers: [string, string, string, string];
    rows: OEMComparisonRow[]; // 7
  };
  process: {
    subtitle: string;
    title: string;
    steps: { step: string; desc: string }[]; // 5
  };
  capacity: {
    subtitle: string;
    title: string;
    labels: string[]; // 4
  };
  cta: { title: string; description: string; buttonText: string };
}

export const oemContent: Record<string, OEMLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "OEM Production",
      title: "Contract Garment Manufacturing",
      description: "Flexible OEM and ODM manufacturing models — from full-package FOB to CMT-only services. We adapt to your production model with transparent costing, reliable delivery, and full certification compliance.",
    },
    services: {
      subtitle: "Services",
      title: "OEM Manufacturing Models",
      items: [
        {
          title: "Full-Package Production (FOB)",
          desc: "We handle everything — fabric sourcing, trims procurement, production, QC, and packing. You receive ready-to-sell garments at your warehouse. Ideal for brands without a sourcing office in India.",
          features: [
            "Fabric sourcing from GOTS / OEKO-TEX certified mills",
            "All trims, labels, and accessories included",
            "In-house QC at every stage — AQL 2.5",
            "EU-compliant labelling and documentation",
            "FOB / CIF / DDP delivery options",
            "GOTS Transaction Certificate per shipment",
          ],
        },
        {
          title: "CMT (Cut-Make-Trim)",
          desc: "You supply the fabric and trims, we handle cutting, stitching, finishing, and packing. Ideal for brands with established fabric suppliers or in-house design teams.",
          features: [
            "Precision CNC cutting — Lectra Vector iX",
            "12 stitching lines, 600+ machines",
            "Finishing, pressing, and packing to your spec",
            "Buyer QC team welcome on-site",
            "Flexible capacity allocation — 2,000 to 50,000 pcs",
            "Weekly progress reports with photos",
          ],
        },
        {
          title: "Fabric-to-Garment Development (ODM)",
          desc: "Start from a concept sketch, mood board, or reference garment. We develop patterns, source fabrics, create samples, and move to bulk production — full design-to-delivery.",
          features: [
            "CAD pattern development (Gerber AccuMark)",
            "2 rounds of sampling included in quote",
            "Lab dips and strike-offs within 5 working days",
            "Fit sessions with graded size set (3–5 sizes)",
            "Production-ready tech pack delivery",
            "Seasonal trend input from our design team",
          ],
        },
      ],
    },
    comparison: {
      subtitle: "Compare",
      title: "Service Model Comparison",
      headers: ["Feature", "FOB (Full Package)", "CMT", "ODM"],
      rows: [
        { feature: "Minimum Order", fob: "500 pcs/style/colour", cmt: "300 pcs/style/colour", odm: "500 pcs/style/colour" },
        { feature: "Lead Time", fob: "45 days", cmt: "30 days", odm: "60 days" },
        { feature: "Fabric Sourcing", fob: "Included", cmt: "Buyer supplies", odm: "Included" },
        { feature: "Pattern Development", fob: "Buyer provides", cmt: "Buyer provides", odm: "Included" },
        { feature: "Sampling", fob: "1 round included", cmt: "1 round included", odm: "2 rounds included" },
        { feature: "Certifications", fob: "GOTS TC included", cmt: "Upon request", odm: "GOTS TC included" },
        { feature: "Pricing Model", fob: "FOB per piece", cmt: "CMT per piece", odm: "FOB per piece" },
      ],
    },
    process: {
      subtitle: "How It Works",
      title: "Order Process",
      steps: [
        { step: "Inquiry & Costing", desc: "Send us your tech pack or design brief. We respond with itemised costing within 48 hours. Volume-based pricing tiers available." },
        { step: "Sample Development", desc: "Development sample in 7–10 days. PP sample with branding in 5–7 days. Courier shipped to your office at our cost." },
        { step: "Order Confirmation", desc: "Proforma invoice issued. 30% advance, 70% against BL/copy. LC at sight accepted for orders above €20,000." },
        { step: "Production", desc: "45-day standard lead time. 30-day express for repeat styles. Real-time updates via WhatsApp/email with in-line photos." },
        { step: "Inspection & Shipment", desc: "AQL 2.5 final inspection. Third-party audit coordinated on request. Full documentation pack with every shipment." },
      ],
    },
    capacity: {
      subtitle: "Capacity",
      title: "Production Numbers",
      labels: ["Pieces / Month", "Production Lines", "Machines", "Sample Turnaround"],
    },
    cta: { title: "Discuss Your OEM Requirements", description: "Send us your tech pack or design brief. We'll respond with a detailed costing and production timeline within 48 hours.", buttonText: "Get OEM Quote" },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "إنتاج OEM",
      title: "تصنيع الملابس بالعقود",
      description: "نماذج تصنيع OEM وODM مرنة — من الإنتاج الكامل FOB إلى خدمات CMT فقط. نتكيف مع نموذج إنتاجكم بتكاليف شفافة وتسليم موثوق وامتثال كامل للشهادات.",
    },
    services: {
      subtitle: "الخدمات",
      title: "نماذج تصنيع OEM",
      items: [
        {
          title: "الإنتاج الكامل (FOB)",
          desc: "نتولى كل شيء — توريد القماش وشراء الزخارف والإنتاج وضبط الجودة والتعبئة. تستلمون ملابس جاهزة للبيع في مستودعكم. مثالي للعلامات التي لا تمتلك مكتب توريد في الهند.",
          features: [
            "توريد أقمشة من مطاحن معتمدة GOTS / OEKO-TEX",
            "جميع الزخارف والبطاقات والإكسسوارات مدرجة",
            "ضبط جودة داخلي في كل مرحلة — AQL 2.5",
            "وثائق ووسم مطابق لمعايير الاتحاد الأوروبي",
            "خيارات تسليم FOB / CIF / DDP",
            "شهادة معاملة GOTS مع كل شحنة",
          ],
        },
        {
          title: "CMT (قص وخياطة وتشطيب)",
          desc: "أنتم تورّدون القماش والزخارف، ونحن نتولى القص والخياطة والتشطيب والتعبئة. مثالي للعلامات التي لديها موردو قماش راسخون أو فرق تصميم داخلية.",
          features: [
            "قص CNC دقيق — Lectra Vector iX",
            "12 خط خياطة، أكثر من 600 ماكينة",
            "تشطيب وكي وتعبئة وفق مواصفاتكم",
            "فريق QC الخاص بكم مرحب به في الموقع",
            "تخصيص طاقة مرنة — من 2,000 إلى 50,000 قطعة",
            "تقارير تقدم أسبوعية مع صور",
          ],
        },
        {
          title: "التطوير من القماش إلى الملبوس (ODM)",
          desc: "ابدأ من رسم مفاهيمي أو لوحة مزاج أو قطعة مرجعية. نطور الأنماط ونوفر الأقمشة وننشئ العينات وننتقل إلى الإنتاج الضخم — تصميم كامل حتى التسليم.",
          features: [
            "تطوير نمط CAD (Gerber AccuMark)",
            "جولتان من أخذ العينات مدرجتان في العرض",
            "عينات الألوان المعملية خلال 5 أيام عمل",
            "جلسات احتواء مع مجموعة مقاسات مدرّجة (3–5 مقاسات)",
            "تسليم ملف مواصفات تقنية جاهز للإنتاج",
            "مدخلات اتجاهات موسمية من فريق تصميمنا",
          ],
        },
      ],
    },
    comparison: {
      subtitle: "مقارنة",
      title: "مقارنة نماذج الخدمة",
      headers: ["الميزة", "FOB (الحزمة الكاملة)", "CMT", "ODM"],
      rows: [
        { feature: "الحد الأدنى للطلب", fob: "500 قطعة/تصميم/لون", cmt: "300 قطعة/تصميم/لون", odm: "500 قطعة/تصميم/لون" },
        { feature: "مدة التنفيذ", fob: "45 يوماً", cmt: "30 يوماً", odm: "60 يوماً" },
        { feature: "توريد القماش", fob: "مدرج", cmt: "يوفره المشتري", odm: "مدرج" },
        { feature: "تطوير النمط", fob: "يوفره المشتري", cmt: "يوفره المشتري", odm: "مدرج" },
        { feature: "أخذ العينات", fob: "جولة واحدة مدرجة", cmt: "جولة واحدة مدرجة", odm: "جولتان مدرجتان" },
        { feature: "الشهادات", fob: "GOTS TC مدرجة", cmt: "عند الطلب", odm: "GOTS TC مدرجة" },
        { feature: "نموذج التسعير", fob: "FOB للقطعة", cmt: "CMT للقطعة", odm: "FOB للقطعة" },
      ],
    },
    process: {
      subtitle: "كيف يعمل",
      title: "عملية الطلب",
      steps: [
        { step: "الاستفسار والتسعير", desc: "أرسلوا إلينا ملف المواصفات التقنية أو الموجز التصميمي. نردّ بتفصيل التكاليف خلال 48 ساعة. مستويات تسعير قائمة على الكميات متاحة." },
        { step: "تطوير العينات", desc: "عينة تطوير في 7–10 أيام. عينة PP بالعلامة التجارية في 5–7 أيام. شحن بالبريد السريع إلى مكتبكم على نفقتنا." },
        { step: "تأكيد الطلب", desc: "إصدار فاتورة أولية. 30% مقدماً، 70% مقابل نسخة بوليصة الشحن. يُقبل خطاب اعتماد بالاطلاع للطلبات التي تتجاوز €20,000." },
        { step: "الإنتاج", desc: "مدة تنفيذ قياسية 45 يوماً. 30 يوماً للتصاميم المتكررة. تحديثات فورية عبر واتساب/بريد إلكتروني مع صور داخلية." },
        { step: "الفحص والشحن", desc: "فحص AQL 2.5 النهائي. مراجعة طرف ثالث منسقة عند الطلب. حزمة وثائق كاملة مع كل شحنة." },
      ],
    },
    capacity: {
      subtitle: "الطاقة الإنتاجية",
      title: "أرقام الإنتاج",
      labels: ["قطعة / الشهر", "خط إنتاج", "ماكينة", "وقت تسليم العينة"],
    },
    cta: { title: "ناقشوا متطلبات OEM الخاصة بكم", description: "أرسلوا ملف المواصفات أو الموجز التصميمي. سنردّ بتفصيل تكاليف وجدول إنتاج خلال 48 ساعة.", buttonText: "احصل على عرض OEM" },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "OEM-производство",
      title: "Контрактное производство одежды",
      description: "Гибкие модели производства OEM и ODM — от полного пакета FOB до услуг только CMT. Мы адаптируемся к вашей производственной модели с прозрачным ценообразованием, надёжными поставками и полным соответствием сертификационным требованиям.",
    },
    services: {
      subtitle: "Услуги",
      title: "Модели OEM-производства",
      items: [
        {
          title: "Полный пакет производства (FOB)",
          desc: "Мы берём на себя всё — закупку тканей, фурнитуры, производство, контроль качества и упаковку. Вы получаете готовую к продаже продукцию на своём складе. Идеально для брендов без офиса закупок в Индии.",
          features: [
            "Закупка тканей из сертифицированных GOTS / OEKO-TEX фабрик",
            "Вся фурнитура, этикетки и аксессуары включены",
            "Собственный контроль качества на каждом этапе — AQL 2.5",
            "Маркировка и документация по стандартам ЕС",
            "Варианты поставки FOB / CIF / DDP",
            "GOTS Transaction Certificate с каждой партией",
          ],
        },
        {
          title: "CMT (Раскрой-Пошив-Фурнитура)",
          desc: "Вы поставляете ткань и фурнитуру, мы выполняем раскрой, пошив, отделку и упаковку. Идеально для брендов с налаженными поставщиками тканей или собственными дизайн-командами.",
          features: [
            "Прецизионный CNC-раскрой — Lectra Vector iX",
            "12 швейных линий, 600+ машин",
            "Отделка, глажка и упаковка по вашим спецификациям",
            "Команда ОК покупателя приветствуется на производстве",
            "Гибкое распределение мощностей — от 2 000 до 50 000 ед.",
            "Еженедельные отчёты о ходе работ с фотографиями",
          ],
        },
        {
          title: "Разработка от ткани до изделия (ODM)",
          desc: "Начните с концептуального эскиза, мудборда или образца. Мы разрабатываем лекала, закупаем ткани, создаём образцы и переходим к серийному производству — полный цикл от дизайна до поставки.",
          features: [
            "Разработка лекал CAD (Gerber AccuMark)",
            "2 раунда образцов включены в стоимость",
            "Лабораторные крашения и пробная печать в течение 5 рабочих дней",
            "Примерочные сессии с градированным размерным рядом (3–5 размеров)",
            "Передача технического файла, готового к производству",
            "Сезонные трендовые предложения от нашей дизайн-команды",
          ],
        },
      ],
    },
    comparison: {
      subtitle: "Сравнение",
      title: "Сравнение моделей обслуживания",
      headers: ["Параметр", "FOB (полный пакет)", "CMT", "ODM"],
      rows: [
        { feature: "Минимальный заказ", fob: "500 ед./модель/цвет", cmt: "300 ед./модель/цвет", odm: "500 ед./модель/цвет" },
        { feature: "Срок изготовления", fob: "45 дней", cmt: "30 дней", odm: "60 дней" },
        { feature: "Закупка ткани", fob: "Включена", cmt: "Поставляет покупатель", odm: "Включена" },
        { feature: "Разработка лекал", fob: "Предоставляет покупатель", cmt: "Предоставляет покупатель", odm: "Включена" },
        { feature: "Образцы", fob: "1 раунд включён", cmt: "1 раунд включён", odm: "2 раунда включены" },
        { feature: "Сертификаты", fob: "GOTS TC включён", cmt: "По запросу", odm: "GOTS TC включён" },
        { feature: "Модель ценообразования", fob: "FOB за единицу", cmt: "CMT за единицу", odm: "FOB за единицу" },
      ],
    },
    process: {
      subtitle: "Как это работает",
      title: "Процесс оформления заказа",
      steps: [
        { step: "Запрос и расчёт стоимости", desc: "Пришлите технический файл или дизайн-бриф. Мы отвечаем с детальным расчётом стоимости в течение 48 часов. Доступны ценовые уровни в зависимости от объёма." },
        { step: "Разработка образцов", desc: "Конструктивный образец за 7–10 дней. Предпроизводственный образец с брендингом за 5–7 дней. Курьерская доставка в ваш офис за наш счёт." },
        { step: "Подтверждение заказа", desc: "Выставляется проформа-фактура. 30% аванс, 70% против коносамента/копии. Аккредитив по предъявлении принимается для заказов свыше €20 000." },
        { step: "Производство", desc: "Стандартный срок — 45 дней. 30 дней для повторных моделей. Обновления в реальном времени через WhatsApp/email с фотографиями." },
        { step: "Инспекция и отгрузка", desc: "Финальная инспекция AQL 2.5. Аудит третьей стороны координируется по запросу. Полный комплект документов с каждой партией." },
      ],
    },
    capacity: {
      subtitle: "Мощности",
      title: "Производственные показатели",
      labels: ["Единиц / месяц", "Производственных линий", "Машин", "Срок изготовления образца"],
    },
    cta: { title: "Обсудите ваши требования OEM", description: "Пришлите технический файл или дизайн-бриф. Мы ответим с детальным расчётом и производственным графиком в течение 48 часов.", buttonText: "Получить предложение OEM" },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Produkcja OEM",
      title: "Kontraktowa produkcja odzieży",
      description: "Elastyczne modele produkcji OEM i ODM — od pełnego pakietu FOB po usługi wyłącznie CMT. Dostosowujemy się do Twojego modelu produkcji z przejrzystą kalkulacją, niezawodną dostawą i pełną zgodnością z certyfikatami.",
    },
    services: {
      subtitle: "Usługi",
      title: "Modele produkcji OEM",
      items: [
        {
          title: "Produkcja pełnopaketowa (FOB)",
          desc: "Obsługujemy wszystko — pozyskiwanie tkanin, zaopatrzenie w wykończenia, produkcję, QC i pakowanie. Otrzymujesz gotową do sprzedaży odzież w swoim magazynie. Idealny dla marek bez biura zakupów w Indiach.",
          features: [
            "Pozyskiwanie tkanin z certyfikowanych zakładów GOTS / OEKO-TEX",
            "Wszystkie wykończenia, etykiety i akcesoria wliczone",
            "Wewnętrzne QC na każdym etapie — AQL 2.5",
            "Etykietowanie i dokumentacja zgodne z UE",
            "Opcje dostawy FOB / CIF / DDP",
            "Świadectwo transakcji GOTS z każdą przesyłką",
          ],
        },
        {
          title: "CMT (Krój-Szycie-Wykończenie)",
          desc: "Dostarczasz tkaninę i wykończenia, my zajmujemy się krojeniem, szyciem, wykańczaniem i pakowaniem. Idealny dla marek z ustalonymi dostawcami tkanin lub wewnętrznymi zespołami projektowymi.",
          features: [
            "Precyzyjny krój CNC — Lectra Vector iX",
            "12 linii szycia, 600+ maszyn",
            "Wykańczanie, prasowanie i pakowanie według Twoich specyfikacji",
            "Zespół QC kupującego mile widziany na miejscu",
            "Elastyczna alokacja zdolności — od 2 000 do 50 000 szt.",
            "Cotygodniowe raporty postępu ze zdjęciami",
          ],
        },
        {
          title: "Rozwój od tkaniny do wyrobu gotowego (ODM)",
          desc: "Zacznij od koncepcyjnego szkicu, moodboardu lub wzorcowego wyrobu. Opracowujemy wzorce, pozyskujemy tkaniny, tworzymy próbki i przechodzimy do produkcji masowej — pełny cykl od projektu do dostawy.",
          features: [
            "Opracowanie wzorca CAD (Gerber AccuMark)",
            "2 rundy próbkowania wliczone w wycenę",
            "Barwienia laboratoryjne i próbki druku w ciągu 5 dni roboczych",
            "Sesje dopasowania ze stopniowanym zestawem rozmiarów (3–5 rozmiarów)",
            "Dostawa gotowego do produkcji arkusza technicznego",
            "Sezonowe sugestie trendów od naszego zespołu projektowego",
          ],
        },
      ],
    },
    comparison: {
      subtitle: "Porównanie",
      title: "Porównanie modeli usług",
      headers: ["Cecha", "FOB (Pełny pakiet)", "CMT", "ODM"],
      rows: [
        { feature: "Minimalne zamówienie", fob: "500 szt./styl/kolor", cmt: "300 szt./styl/kolor", odm: "500 szt./styl/kolor" },
        { feature: "Czas realizacji", fob: "45 dni", cmt: "30 dni", odm: "60 dni" },
        { feature: "Pozyskiwanie tkanin", fob: "Wliczone", cmt: "Dostarcza kupujący", odm: "Wliczone" },
        { feature: "Opracowanie wzorca", fob: "Dostarcza kupujący", cmt: "Dostarcza kupujący", odm: "Wliczone" },
        { feature: "Próbkowanie", fob: "1 runda wliczona", cmt: "1 runda wliczona", odm: "2 rundy wliczone" },
        { feature: "Certyfikaty", fob: "GOTS TC wliczone", cmt: "Na żądanie", odm: "GOTS TC wliczone" },
        { feature: "Model cenowy", fob: "FOB za sztukę", cmt: "CMT za sztukę", odm: "FOB za sztukę" },
      ],
    },
    process: {
      subtitle: "Jak to działa",
      title: "Proces zamówienia",
      steps: [
        { step: "Zapytanie i kalkulacja", desc: "Wyślij swój arkusz techniczny lub brief projektowy. Odpowiadamy ze szczegółową kalkulacją w ciągu 48 godzin. Dostępne poziomy cenowe oparte na wolumenie." },
        { step: "Opracowanie próbek", desc: "Próbka rozwojowa w 7–10 dni. Próbka PP z brandingiem w 5–7 dni. Wysyłka kurierska do Twojego biura na nasz koszt." },
        { step: "Potwierdzenie zamówienia", desc: "Wystawiana faktura proforma. 30% zaliczka, 70% na podstawie konosamentu/kopii. Akredytywa za okazaniem akceptowana dla zamówień powyżej €20 000." },
        { step: "Produkcja", desc: "Standardowy czas realizacji 45 dni. 30 dni dla powtarzających się stylów. Aktualizacje w czasie rzeczywistym przez WhatsApp/email ze zdjęciami." },
        { step: "Inspekcja i wysyłka", desc: "Końcowa inspekcja AQL 2.5. Audyt strony trzeciej koordynowany na żądanie. Pełny pakiet dokumentów z każdą przesyłką." },
      ],
    },
    capacity: {
      subtitle: "Zdolności produkcyjne",
      title: "Liczby produkcji",
      labels: ["Sztuk / miesiąc", "Linii produkcyjnych", "Maszyn", "Czas realizacji próbki"],
    },
    cta: { title: "Omów swoje wymagania OEM", description: "Wyślij arkusz techniczny lub brief projektowy. Odpowiemy szczegółową kalkulacją i harmonogramem produkcji w ciągu 48 godzin.", buttonText: "Uzyskaj wycenę OEM" },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Production OEM",
      title: "Fabrication de vêtements en sous-traitance",
      description: "Modèles de fabrication OEM et ODM flexibles — de la production complète FOB aux services CMT seuls. Nous nous adaptons à votre modèle de production avec une tarification transparente, une livraison fiable et une conformité certifications complète.",
    },
    services: {
      subtitle: "Services",
      title: "Modèles de fabrication OEM",
      items: [
        {
          title: "Production complète (FOB)",
          desc: "Nous gérons tout — approvisionnement en tissus, achats de finitions, production, CQ et emballage. Vous recevez des vêtements prêts à vendre dans votre entrepôt. Idéal pour les marques sans bureau d'approvisionnement en Inde.",
          features: [
            "Approvisionnement en tissus depuis des filatures certifiées GOTS / OEKO-TEX",
            "Toutes les finitions, étiquettes et accessoires inclus",
            "CQ interne à chaque étape — AQL 2,5",
            "Étiquetage et documentation conformes UE",
            "Options de livraison FOB / CIF / DDP",
            "Certificat de Transaction GOTS par expédition",
          ],
        },
        {
          title: "CMT (Coupe-Confection-Garnitures)",
          desc: "Vous fournissez le tissu et les finitions, nous gérons la coupe, la couture, la finition et l'emballage. Idéal pour les marques avec des fournisseurs de tissus établis ou des équipes de design en interne.",
          features: [
            "Coupe CNC de précision — Lectra Vector iX",
            "12 lignes de couture, 600+ machines",
            "Finition, repassage et emballage selon vos spécifications",
            "Équipe CQ acheteur bienvenue sur site",
            "Allocation de capacité flexible — 2 000 à 50 000 pcs",
            "Rapports de progression hebdomadaires avec photos",
          ],
        },
        {
          title: "Développement tissu-vêtement (ODM)",
          desc: "Partez d'un croquis conceptuel, d'un moodboard ou d'un vêtement de référence. Nous développons les patrons, sourcions les tissus, créons les échantillons et passons à la production en série — de la conception à la livraison.",
          features: [
            "Développement de patron CAO (Gerber AccuMark)",
            "2 tours d'échantillonnage inclus dans le devis",
            "Bains de teinte et tirés de couleur dans les 5 jours ouvrables",
            "Sessions d'ajustement avec set de tailles gradué (3–5 tailles)",
            "Livraison du cahier des charges prêt à produire",
            "Apport de tendances saisonnières de notre équipe de design",
          ],
        },
      ],
    },
    comparison: {
      subtitle: "Comparer",
      title: "Comparatif des modèles de service",
      headers: ["Caractéristique", "FOB (Package complet)", "CMT", "ODM"],
      rows: [
        { feature: "Commande minimum", fob: "500 pcs/style/couleur", cmt: "300 pcs/style/couleur", odm: "500 pcs/style/couleur" },
        { feature: "Délai de production", fob: "45 jours", cmt: "30 jours", odm: "60 jours" },
        { feature: "Approvisionnement tissu", fob: "Inclus", cmt: "Fourni par l'acheteur", odm: "Inclus" },
        { feature: "Développement patron", fob: "Fourni par l'acheteur", cmt: "Fourni par l'acheteur", odm: "Inclus" },
        { feature: "Échantillonnage", fob: "1 tour inclus", cmt: "1 tour inclus", odm: "2 tours inclus" },
        { feature: "Certifications", fob: "GOTS TC inclus", cmt: "Sur demande", odm: "GOTS TC inclus" },
        { feature: "Modèle tarifaire", fob: "FOB par pièce", cmt: "CMT par pièce", odm: "FOB par pièce" },
      ],
    },
    process: {
      subtitle: "Comment ça marche",
      title: "Processus de commande",
      steps: [
        { step: "Demande et costing", desc: "Envoyez-nous votre cahier des charges ou votre brief de design. Nous répondons avec une tarification détaillée dans les 48 heures. Paliers de tarification par volume disponibles." },
        { step: "Développement d'échantillons", desc: "Échantillon de développement en 7–10 jours. Échantillon PP avec branding en 5–7 jours. Expédition par coursier dans votre bureau à nos frais." },
        { step: "Confirmation de commande", desc: "Facture proforma émise. 30% d'avance, 70% contre connaissement/copie. LC à vue accepté pour les commandes supérieures à €20 000." },
        { step: "Production", desc: "Délai standard de 45 jours. 30 jours express pour les styles en répétition. Mises à jour en temps réel par WhatsApp/email avec photos en cours de production." },
        { step: "Inspection et expédition", desc: "Inspection finale AQL 2,5. Audit tiers coordonné sur demande. Pack complet de documentation avec chaque expédition." },
      ],
    },
    capacity: {
      subtitle: "Capacité",
      title: "Chiffres de production",
      labels: ["Pièces / mois", "Lignes de production", "Machines", "Délai de livraison d'échantillon"],
    },
    cta: { title: "Discutez de vos besoins OEM", description: "Envoyez-nous votre cahier des charges ou brief de design. Nous répondrons avec un costing détaillé et un calendrier de production dans les 48 heures.", buttonText: "Obtenir un devis OEM" },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Produzione OEM",
      title: "Produzione di abbigliamento in conto terzi",
      description: "Modelli di produzione OEM e ODM flessibili — dalla produzione completa FOB ai soli servizi CMT. Ci adattiamo al vostro modello produttivo con prezzi trasparenti, consegne affidabili e piena conformità alle certificazioni.",
    },
    services: {
      subtitle: "Servizi",
      title: "Modelli di produzione OEM",
      items: [
        {
          title: "Produzione completa (FOB)",
          desc: "Gestiamo tutto — approvvigionamento tessuti, acquisto rifiniture, produzione, QC e imballaggio. Ricevete capi pronti per la vendita nel vostro magazzino. Ideale per brand senza ufficio acquisti in India.",
          features: [
            "Approvvigionamento tessuti da filature certificate GOTS / OEKO-TEX",
            "Tutte le rifiniture, etichette e accessori inclusi",
            "QC interno ad ogni fase — AQL 2,5",
            "Etichettatura e documentazione conformi UE",
            "Opzioni di consegna FOB / CIF / DDP",
            "Certificato di Transazione GOTS per spedizione",
          ],
        },
        {
          title: "CMT (Taglio-Confezione-Rifiniture)",
          desc: "Voi fornite il tessuto e le rifiniture, noi gestiamo taglio, cucitura, finitura e imballaggio. Ideale per brand con fornitori di tessuti consolidati o team di design interni.",
          features: [
            "Taglio CNC di precisione — Lectra Vector iX",
            "12 linee di cucitura, 600+ macchine",
            "Finitura, stiratura e imballaggio secondo le vostre specifiche",
            "Team QC dell'acquirente benvenuto in loco",
            "Allocazione flessibile della capacità — da 2.000 a 50.000 pz",
            "Rapporti settimanali di avanzamento con foto",
          ],
        },
        {
          title: "Sviluppo dal tessuto al capo (ODM)",
          desc: "Partite da uno schizzo concettuale, moodboard o capo di riferimento. Sviluppiamo i cartamodelli, approvvigoniamo i tessuti, creiamo campioni e passiamo alla produzione in serie — dall'ideazione alla consegna.",
          features: [
            "Sviluppo cartamodello CAD (Gerber AccuMark)",
            "2 turni di campionatura inclusi nel preventivo",
            "Campionature di colore entro 5 giorni lavorativi",
            "Sessioni di prova con serie taglie gradate (3–5 taglie)",
            "Consegna scheda tecnica pronta per la produzione",
            "Suggerimenti di tendenza stagionale dal nostro team di design",
          ],
        },
      ],
    },
    comparison: {
      subtitle: "Confronto",
      title: "Confronto modelli di servizio",
      headers: ["Caratteristica", "FOB (Pacchetto completo)", "CMT", "ODM"],
      rows: [
        { feature: "Ordine minimo", fob: "500 pz/stile/colore", cmt: "300 pz/stile/colore", odm: "500 pz/stile/colore" },
        { feature: "Tempo di consegna", fob: "45 giorni", cmt: "30 giorni", odm: "60 giorni" },
        { feature: "Approvvigionamento tessuti", fob: "Incluso", cmt: "Fornisce l'acquirente", odm: "Incluso" },
        { feature: "Sviluppo cartamodello", fob: "Fornisce l'acquirente", cmt: "Fornisce l'acquirente", odm: "Incluso" },
        { feature: "Campionatura", fob: "1 turno incluso", cmt: "1 turno incluso", odm: "2 turni inclusi" },
        { feature: "Certificazioni", fob: "GOTS TC incluso", cmt: "Su richiesta", odm: "GOTS TC incluso" },
        { feature: "Modello di prezzo", fob: "FOB al pezzo", cmt: "CMT al pezzo", odm: "FOB al pezzo" },
      ],
    },
    process: {
      subtitle: "Come funziona",
      title: "Processo dell'ordine",
      steps: [
        { step: "Richiesta e preventivo", desc: "Inviateci la vostra scheda tecnica o il brief di design. Rispondiamo con un preventivo dettagliato entro 48 ore. Disponibili fasce di prezzo basate sul volume." },
        { step: "Sviluppo campioni", desc: "Campione di sviluppo in 7–10 giorni. Campione PP con branding in 5–7 giorni. Spedizione corriere al vostro ufficio a nostro carico." },
        { step: "Conferma dell'ordine", desc: "Emessa fattura proforma. 30% anticipo, 70% contro polizza di carico/copia. LC a vista accettato per ordini superiori a €20.000." },
        { step: "Produzione", desc: "Tempo standard 45 giorni. 30 giorni per stili ripetuti. Aggiornamenti in tempo reale via WhatsApp/email con foto in linea." },
        { step: "Ispezione e spedizione", desc: "Ispezione finale AQL 2,5. Audit terze parti coordinato su richiesta. Pacchetto documentazione completo con ogni spedizione." },
      ],
    },
    capacity: {
      subtitle: "Capacità",
      title: "Numeri di produzione",
      labels: ["Pezzi / mese", "Linee di produzione", "Macchine", "Tempi campione"],
    },
    cta: { title: "Discutete i vostri requisiti OEM", description: "Inviateci la scheda tecnica o il brief di design. Risponderemo con un preventivo dettagliato e un piano di produzione entro 48 ore.", buttonText: "Richiedi preventivo OEM" },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "OEM-productie",
      title: "Contractproductie van kleding",
      description: "Flexibele OEM- en ODM-productiemodellen — van volledig pakket FOB tot alleen CMT-diensten. We passen ons aan uw productiemodel aan met transparante kostprijsberekening, betrouwbare levering en volledige certificaatconformiteit.",
    },
    services: {
      subtitle: "Diensten",
      title: "OEM-productiemodellen",
      items: [
        {
          title: "Volledig pakket productie (FOB)",
          desc: "We beheren alles — stofinkooop, garnitureinkoop, productie, QC en verpakking. U ontvangt verkoopklare kledingstukken in uw magazijn. Ideaal voor merken zonder inkoopkantoor in India.",
          features: [
            "Stofinkoop bij gecertificeerde GOTS / OEKO-TEX fabrieken",
            "Alle garnituren, labels en accessoires inbegrepen",
            "Interne QC in elke fase — AQL 2,5",
            "EU-conforme etikettering en documentatie",
            "Leveringsopties FOB / CIF / DDP",
            "GOTS Transactiecertificaat per zending",
          ],
        },
        {
          title: "CMT (Snijden-Maken-Bijwerken)",
          desc: "U levert de stof en garnituren, wij verzorgen het snijden, stikken, afwerken en verpakken. Ideaal voor merken met gevestigde stofaanbieders of interne designteams.",
          features: [
            "Precisie CNC-snijden — Lectra Vector iX",
            "12 stiklijnen, 600+ machines",
            "Afwerking, strijken en verpakking naar uw specificaties",
            "QC-team van koper welkom op locatie",
            "Flexibele capaciteitstoewijzing — 2.000 tot 50.000 st.",
            "Wekelijkse voortgangsrapporten met foto's",
          ],
        },
        {
          title: "Ontwikkeling van stof tot kledingstuk (ODM)",
          desc: "Begin van een conceptschets, moodboard of referentiekledingstuk. We ontwikkelen patronen, sourcen stoffen, maken monsters en gaan over op serieproductie — volledig van ontwerp tot levering.",
          features: [
            "CAD-paternontwikkeling (Gerber AccuMark)",
            "2 ronden bemonstering inbegrepen in offerte",
            "Laboratoriumkleuringen en proefafdrukken binnen 5 werkdagen",
            "Passe sessies met gegradueerde maatset (3–5 maten)",
            "Levering productieklare technische specificaties",
            "Seizoensgebonden trendsuggesti es van ons designteam",
          ],
        },
      ],
    },
    comparison: {
      subtitle: "Vergelijken",
      title: "Vergelijking servicemodellen",
      headers: ["Kenmerk", "FOB (Volledig pakket)", "CMT", "ODM"],
      rows: [
        { feature: "Minimale bestelling", fob: "500 st./stijl/kleur", cmt: "300 st./stijl/kleur", odm: "500 st./stijl/kleur" },
        { feature: "Doorlooptijd", fob: "45 dagen", cmt: "30 dagen", odm: "60 dagen" },
        { feature: "Stofinkoop", fob: "Inbegrepen", cmt: "Koper levert", odm: "Inbegrepen" },
        { feature: "Paternontwikkeling", fob: "Koper levert", cmt: "Koper levert", odm: "Inbegrepen" },
        { feature: "Bemonstering", fob: "1 ronde inbegrepen", cmt: "1 ronde inbegrepen", odm: "2 ronden inbegrepen" },
        { feature: "Certificaten", fob: "GOTS TC inbegrepen", cmt: "Op aanvraag", odm: "GOTS TC inbegrepen" },
        { feature: "Prijsmodel", fob: "FOB per stuk", cmt: "CMT per stuk", odm: "FOB per stuk" },
      ],
    },
    process: {
      subtitle: "Hoe het werkt",
      title: "Bestelproces",
      steps: [
        { step: "Aanvraag en kostprijsberekening", desc: "Stuur ons uw technisch blad of ontwerpdocument. We reageren met een gespecificeerde kostprijsberekening binnen 48 uur. Volumegebaseerde prijsniveaus beschikbaar." },
        { step: "Monsterontwikkeling", desc: "Ontwikkelingsmonster in 7–10 dagen. PP-monster met branding in 5–7 dagen. Koerierslevering naar uw kantoor op onze kosten." },
        { step: "Orderbevestiging", desc: "Proforma factuur uitgebracht. 30% vooruitbetaling, 70% tegen connossement/kopie. LC op zicht geaccepteerd voor orders boven €20.000." },
        { step: "Productie", desc: "Standaard doorlooptijd 45 dagen. 30 dagen voor herhalingsmodellen. Real-time updates via WhatsApp/email met foto's." },
        { step: "Inspectie en verzending", desc: "Eindcontrole AQL 2,5. Audit door derden gecoördineerd op aanvraag. Volledig documentatiepakket bij elke zending." },
      ],
    },
    capacity: {
      subtitle: "Capaciteit",
      title: "Productiecijfers",
      labels: ["Stuks / maand", "Productielijnen", "Machines", "Doorlooptijd monster"],
    },
    cta: { title: "Bespreek uw OEM-vereisten", description: "Stuur ons uw technisch blad of ontwerpdocument. We reageren met een gedetailleerde kostprijsberekening en productieplanning binnen 48 uur.", buttonText: "OEM-offerte aanvragen" },
  },
};
