// ─────────────────────────────────────────────────────────────────────────────
// Private Label page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// NOT translated: certification names (GOTS, OEKO-TEX), regulation numbers,
//                 pricing figures (€4.50–€18.00, MOQ 300/200)
// ─────────────────────────────────────────────────────────────────────────────

export interface PrivateLabelLocale {
  hero: { subtitle: string; title: string; description: string };
  advantages: {
    subtitle: string;
    title: string;
    items: { title: string; desc: string }[]; // 3
  };
  process: {
    subtitle: string;
    title: string;
    steps: { step: string; desc: string }[]; // 6
  };
  included: {
    subtitle: string;
    title: string;
    items: string[]; // 10
  };
  pricing: {
    subtitle: string;
    title: string;
    intro: string;
    items: string[]; // 6 bullet points
    note: string;
  };
  stats: {
    subtitle: string;
    title: string;
    labels: string[]; // 4 labels — nums stay in component
  };
  cta: { title: string; description: string; buttonText: string };
}

export const privateLabelContent: Record<string, PrivateLabelLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Private Label",
      title: "Your Brand, Our Manufacturing",
      description: "Full private-label manufacturing from concept to delivery. We produce under your brand with complete confidentiality, EU-compliant labelling, and certification traceability. Serving 200+ European brands since 1998.",
    },
    advantages: {
      subtitle: "Why Vedant",
      title: "Private Label Advantages",
      items: [
        { title: "Complete Confidentiality", desc: "NDA signed before project commencement. Dedicated production lines — no sharing with other brands. All designs, patterns, and tech packs remain your IP." },
        { title: "EU-Compliant Labelling", desc: "We handle all labelling requirements per EU Regulation 1007/2011 — fibre composition, care symbols (ISO 3758), country of origin, and importer details in your required languages." },
        { title: "Full Creative Control", desc: "From fabric selection to final packaging, every element is produced to your brand specifications. No Vedant branding appears anywhere on the product." },
      ],
    },
    process: {
      subtitle: "Process",
      title: "How Private Label Works",
      steps: [
        { step: "Brief & Concept", desc: "Share your brand guidelines, mood boards, and tech packs. We assign a dedicated merchandiser and QC officer to your account. NDA signed before any information exchange." },
        { step: "Fabric & Trim Sourcing", desc: "We source fabrics from our certified mill network and develop custom trims — woven labels, printed tags, buttons, zips. Lab dips and strike-offs for colour approval." },
        { step: "Pattern & Sampling", desc: "CAD pattern development with digital grading across your size range. 2 rounds of sampling included: development sample and pre-production sample with all branding." },
        { step: "Fit Approval", desc: "Size set produced across 3–5 sizes. Virtual or in-person fit sessions. Measurement chart with tolerance limits agreed before bulk production begins." },
        { step: "Bulk Production", desc: "Production with in-line QC checks every 500 pieces. Real-time progress photos and weekly status reports. AQL 2.5 final inspection per ISO 2859-1." },
        { step: "Packing & Delivery", desc: "Packed to your specifications — polybags, tissue wrap, hangtags, barcoding, carton marks. FOB/CIF/DDP to your European warehouse. Full documentation included." },
      ],
    },
    included: {
      subtitle: "What's Included",
      title: "Private Label Services",
      items: [
        "Your brand woven labels and printed care labels",
        "Custom hangtags, swing tags, and price tickets",
        "Custom packaging design — tissue, polybags, boxes",
        "EU textile care labelling (Regulation 1007/2011)",
        "Country-specific size conversions (EU/UK/US)",
        "Barcode, EAN, and UPC generation",
        "Composition and country-of-origin labelling",
        "GOTS / OEKO-TEX chain of custody on your labels",
        "Custom colourways and exclusive prints",
        "Embroidery, screen print, or digital print branding",
      ],
    },
    pricing: {
      subtitle: "Pricing",
      title: "Transparent Costing",
      intro: "Our pricing is fully transparent — no hidden costs. Every quote includes an itemised cost breakdown:",
      items: [
        "Fabric cost per metre (including wastage allowance and testing)",
        "CMT (Cut-Make-Trim) cost per garment",
        "Trims, labels, and packaging — itemised",
        "Testing and certification costs (GOTS TC, lab reports)",
        "FOB / CIF / DDP pricing options with freight estimates",
        "Sample development costs (credited against first bulk order)",
      ],
      note: "Typical price range: €4.50–€18.00 FOB per unit depending on fabric, construction complexity, and embellishments. MOQ: 300 pieces per style per colour for first order; 200 pieces for repeat.",
    },
    stats: {
      subtitle: "At a Glance",
      title: "Private Label Track Record",
      labels: ["Brands Served", "Countries Exported To", "On-Time Delivery Rate", "Defect Rate (Final Audit)"],
    },
    cta: { title: "Start Your Private Label Programme", description: "Send us your brand brief and we'll provide a comprehensive proposal within 48 hours. NDA available on request.", buttonText: "Get Started" },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "العلامة التجارية الخاصة",
      title: "علامتكم التجارية — تصنيعنا",
      description: "تصنيع كامل للعلامة التجارية الخاصة من الفكرة حتى التسليم. ننتج تحت علامتكم بسرية تامة وعلامات الاتحاد الأوروبي الممتثلة وتتبع الشهادات. نخدم أكثر من 200 علامة أوروبية منذ عام 1998.",
    },
    advantages: {
      subtitle: "لماذا Vedant",
      title: "مزايا العلامة التجارية الخاصة",
      items: [
        { title: "سرية تامة", desc: "يُوقَّع اتفاقية عدم الإفصاح قبل بدء المشروع. خطوط إنتاج مخصصة — لا مشاركة مع علامات أخرى. جميع التصاميم والأنماط ووثائق المواصفات التقنية تبقى ملكاً لكم." },
        { title: "علامات مطابقة لمعايير الاتحاد الأوروبي", desc: "نتولى جميع متطلبات الوسم وفق اللائحة الأوروبية 1007/2011 — تركيب الألياف ورموز العناية (ISO 3758) وبلد المنشأ وتفاصيل المستورد بلغاتكم المطلوبة." },
        { title: "تحكم إبداعي كامل", desc: "من اختيار القماش حتى التغليف النهائي، كل عنصر يُنتَج وفق مواصفات علامتكم. لا تظهر علامة Vedant في أي مكان على المنتج." },
      ],
    },
    process: {
      subtitle: "العملية",
      title: "كيف تعمل العلامة التجارية الخاصة",
      steps: [
        { step: "الإحاطة والمفهوم", desc: "شاركونا إرشادات العلامة ولوحات المزاج والوثائق التقنية. نعيّن مندوب مبيعات مخصصاً ومسؤول ضبط جودة لحسابكم. يُوقَّع اتفاقية عدم الإفصاح قبل أي تبادل للمعلومات." },
        { step: "توريد القماش والزخارف", desc: "نوفر الأقمشة من شبكة مطاحننا المعتمدة ونطور الزخارف المخصصة — بطاقات منسوجة وعلامات مطبوعة وأزرار وسحابات. عينات الألوان المعملية للموافقة اللونية." },
        { step: "النمط والأخذ بالعينات", desc: "تطوير نمط CAD بتدريج رقمي عبر نطاق مقاساتكم. جولتان من أخذ العينات مدرجتان: عينة تطوير وعينة ما قبل الإنتاج بكامل العلامة التجارية." },
        { step: "اعتماد الاحتواء", desc: "مجموعة مقاسات من 3–5 مقاسات. جلسات احتواء افتراضية أو حضورية. جدول قياسات مع حدود التسامح يُتفَق عليه قبل بدء الإنتاج الضخم." },
        { step: "الإنتاج الضخم", desc: "إنتاج مع فحوصات QC أثناء الإنتاج كل 500 قطعة. صور تقدم فورية وتقارير حالة أسبوعية. فحص AQL 2.5 النهائي وفق ISO 2859-1." },
        { step: "التعبئة والتسليم", desc: "تعبئة وفق مواصفاتكم — أكياس بولي وورق أنسجة وبطاقات الشنقل وترميز الباركود وعلامات الكرتون. FOB/CIF/DDP إلى مستودعكم الأوروبي. وثائق كاملة مرفقة." },
      ],
    },
    included: {
      subtitle: "ما هو مدرج",
      title: "خدمات العلامة التجارية الخاصة",
      items: [
        "بطاقات منسوجة وبطاقات عناية مطبوعة بعلامتكم",
        "علامات شنقل مخصصة وبطاقات أسعار",
        "تصميم تغليف مخصص — أنسجة وأكياس بولي وصناديق",
        "وسم عناية نسيج الاتحاد الأوروبي (اللائحة 1007/2011)",
        "تحويلات مقاسات خاصة بالبلد (EU/UK/US)",
        "توليد الباركود وEAN وUPC",
        "وسم التركيب وبلد المنشأ",
        "سلسلة حيازة GOTS / OEKO-TEX على بطاقاتكم",
        "ألوان مخصصة وطبعات حصرية",
        "علامات تجارية بالتطريز أو الطباعة الشاشية أو الرقمية",
      ],
    },
    pricing: {
      subtitle: "التسعير",
      title: "تكاليف شفافة",
      intro: "تسعيرنا شفاف تماماً — لا تكاليف خفية. كل عرض أسعار يشمل تفصيلاً مفصلاً للتكاليف:",
      items: [
        "تكلفة القماش لكل متر (بما فيها بدل الهدر والاختبار)",
        "تكلفة CMT (قص وخياطة وتشطيب) لكل قطعة",
        "الزخارف والبطاقات والتغليف — مفصلة",
        "تكاليف الاختبار والشهادات (GOTS TC وتقارير المختبر)",
        "خيارات تسعير FOB / CIF / DDP مع تقديرات الشحن",
        "تكاليف تطوير العينات (تُخصم من أول طلب ضخم)",
      ],
      note: "نطاق السعر النموذجي: €4.50–€18.00 FOB للوحدة حسب القماش وتعقيد البناء والتزيين. الحد الأدنى للطلب: 300 قطعة لكل تصميم لكل لون للطلب الأول؛ 200 قطعة للطلبات المتكررة.",
    },
    stats: {
      subtitle: "لمحة عامة",
      title: "سجل العلامة التجارية الخاصة",
      labels: ["علامة تجارية تم خدمتها", "دولة تم التصدير إليها", "معدل التسليم في الوقت المحدد", "معدل العيوب (التدقيق النهائي)"],
    },
    cta: { title: "ابدأ برنامج العلامة التجارية الخاصة", description: "أرسلوا إلينا موجز علامتكم وسنقدم اقتراحاً شاملاً خلال 48 ساعة. اتفاقية عدم الإفصاح متاحة عند الطلب.", buttonText: "ابدأ الآن" },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Собственная торговая марка",
      title: "Ваш бренд — наше производство",
      description: "Полный производственный цикл под частной торговой маркой — от концепции до поставки. Производим под вашим брендом с полной конфиденциальностью, маркировкой по стандартам ЕС и прослеживаемостью сертификатов. Обслуживаем 200+ европейских брендов с 1998 года.",
    },
    advantages: {
      subtitle: "Почему Vedant",
      title: "Преимущества частной торговой марки",
      items: [
        { title: "Полная конфиденциальность", desc: "НДА подписывается до начала проекта. Выделенные производственные линии — без совместного использования с другими брендами. Все дизайны, лекала и технические файлы остаются вашей интеллектуальной собственностью." },
        { title: "Маркировка по стандартам ЕС", desc: "Мы берём на себя все требования к маркировке по Регламенту ЕС 1007/2011 — состав волокна, символы ухода (ISO 3758), страна происхождения и данные импортёра на требуемых вами языках." },
        { title: "Полный творческий контроль", desc: "От выбора ткани до финальной упаковки — каждый элемент производится по спецификациям вашего бренда. Брендинг Vedant нигде на продукции не присутствует." },
      ],
    },
    process: {
      subtitle: "Процесс",
      title: "Как работает производство под частной маркой",
      steps: [
        { step: "Бриф и концепция", desc: "Поделитесь руководством по бренду, мудбордами и техническими файлами. Мы назначаем выделенного мерчандайзера и специалиста по контролю качества для вашего аккаунта. НДА подписывается до обмена любой информацией." },
        { step: "Sourcing ткани и фурнитуры", desc: "Мы закупаем ткани из нашей сети сертифицированных фабрик и разрабатываем фурнитуру под заказ — тканые этикетки, печатные бирки, пуговицы, молнии. Лабораторные крашения и пробная печать для утверждения цветов." },
        { step: "Лекала и образцы", desc: "Разработка лекал CAD с цифровой градацией по вашей размерной линейке. Включено 2 раунда образцов: конструктивный образец и предпроизводственный образец с полным брендингом." },
        { step: "Утверждение посадки", desc: "Размерный ряд из 3–5 размеров. Примерки виртуально или очно. Таблица замеров с допусками согласовывается до начала серийного производства." },
        { step: "Серийное производство", desc: "Производство с встроенным контролем качества каждые 500 изделий. Фотоотчёты в реальном времени и еженедельные отчёты о ходе работ. Финальная инспекция AQL 2.5 по ISO 2859-1." },
        { step: "Упаковка и доставка", desc: "Упаковка по вашим спецификациям — полиэтиленовые пакеты, папиросная бумага, бирки, штрихкодирование, маркировка коробок. FOB/CIF/DDP на ваш европейский склад. Полная документация включена." },
      ],
    },
    included: {
      subtitle: "Что входит",
      title: "Услуги частной торговой марки",
      items: [
        "Тканые этикетки и печатные этикетки по уходу вашего бренда",
        "Фирменные бирки, информационные ярлыки и ценники",
        "Дизайн упаковки под заказ — папиросная бумага, пакеты, коробки",
        "Уходовая маркировка по стандартам ЕС (Регламент 1007/2011)",
        "Конвертация размеров для конкретных стран (EU/UK/US)",
        "Генерация штрихкодов EAN и UPC",
        "Маркировка состава и страны происхождения",
        "Цепочка хранения GOTS / OEKO-TEX на ваших этикетках",
        "Цветовые решения под заказ и эксклюзивные принты",
        "Брендинг вышивкой, шелкографией или цифровой печатью",
      ],
    },
    pricing: {
      subtitle: "Ценообразование",
      title: "Прозрачное ценообразование",
      intro: "Наше ценообразование полностью прозрачно — никаких скрытых расходов. Каждое коммерческое предложение включает детальную разбивку стоимости:",
      items: [
        "Стоимость ткани за метр (включая припуск на отходы и тестирование)",
        "Стоимость CMT (раскрой-пошив-фурнитура) за изделие",
        "Фурнитура, этикетки и упаковка — по статьям",
        "Затраты на тестирование и сертификацию (GOTS TC, лабораторные отчёты)",
        "Варианты цен FOB / CIF / DDP с оценкой стоимости фрахта",
        "Затраты на разработку образцов (зачитываются в первый серийный заказ)",
      ],
      note: "Типичный ценовой диапазон: €4,50–€18,00 FOB за единицу в зависимости от ткани, сложности конструкции и отделки. МЗО: 300 единиц на модель на цвет для первого заказа; 200 единиц для повторных.",
    },
    stats: {
      subtitle: "Коротко о главном",
      title: "Опыт в частных торговых марках",
      labels: ["Обслуженных брендов", "Стран экспорта", "Доля своевременных поставок", "Уровень дефектов (финальный аудит)"],
    },
    cta: { title: "Запустите программу частной торговой марки", description: "Пришлите нам бриф вашего бренда, и мы подготовим комплексное предложение в течение 48 часов. НДА доступен по запросу.", buttonText: "Начать" },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Marka własna",
      title: "Twoja marka, nasza produkcja",
      description: "Pełna produkcja marki własnej od koncepcji do dostawy. Produkujemy pod Twoją marką z pełną poufnością, etykietowaniem zgodnym z UE i identyfikowalnością certyfikatów. Obsługujemy 200+ europejskich marek od 1998 roku.",
    },
    advantages: {
      subtitle: "Dlaczego Vedant",
      title: "Zalety marki własnej",
      items: [
        { title: "Pełna poufność", desc: "NDA podpisywana przed rozpoczęciem projektu. Dedykowane linie produkcyjne — bez udostępniania innym markom. Wszystkie projekty, wzorce i dokumenty techniczne pozostają Twoją własnością intelektualną." },
        { title: "Etykietowanie zgodne z UE", desc: "Obsługujemy wszystkie wymagania dotyczące etykietowania zgodnie z Rozporządzeniem UE 1007/2011 — skład włókien, symbole pielęgnacji (ISO 3758), kraj pochodzenia i dane importera w wymaganych językach." },
        { title: "Pełna kontrola twórcza", desc: "Od wyboru tkaniny po ostateczne opakowanie — każdy element jest produkowany według specyfikacji Twojej marki. Branding Vedant nie pojawia się nigdzie na produkcie." },
      ],
    },
    process: {
      subtitle: "Proces",
      title: "Jak działa marka własna",
      steps: [
        { step: "Brief i koncepcja", desc: "Podziel się wytycznymi marki, moodboardami i dokumentami technicznymi. Przypisujemy dedykowanego merchandisera i inspektora QC do Twojego konta. NDA podpisywana przed wymianą jakichkolwiek informacji." },
        { step: "Pozyskiwanie tkanin i wykończeń", desc: "Pozyskujemy tkaniny z naszej sieci certyfikowanych zakładów i rozwijamy niestandardowe wykończenia — etykiety tkane, drukowane metki, guziki, zamki. Barwienia laboratoryjne i próbki druku do zatwierdzenia kolorów." },
        { step: "Wzorzec i próbkowanie", desc: "Opracowanie wzorca CAD z cyfrowym stopniowaniem w całym zakresie rozmiarów. Dwie rundy próbkowania wliczone: próbka rozwojowa i próbka przedprodukcyjna ze wszystkimi elementami marki." },
        { step: "Zatwierdzenie dopasowania", desc: "Zestaw rozmiarów w 3–5 rozmiarach. Wirtualne lub bezpośrednie sesje dopasowania. Tabela pomiarów z limitami tolerancji uzgodniona przed rozpoczęciem produkcji masowej." },
        { step: "Produkcja masowa", desc: "Produkcja z kontrolami QC co 500 sztuk. Zdjęcia postępu w czasie rzeczywistym i cotygodniowe raporty statusu. Końcowa inspekcja AQL 2.5 wg ISO 2859-1." },
        { step: "Pakowanie i dostawa", desc: "Pakowanie według Twoich specyfikacji — torby foliowe, bibułka, zawieszki, kody kreskowe, oznaczenia kartonów. FOB/CIF/DDP do Twojego europejskiego magazynu. Pełna dokumentacja w zestawie." },
      ],
    },
    included: {
      subtitle: "Co jest wliczone",
      title: "Usługi marki własnej",
      items: [
        "Tkane etykiety marki i drukowane etykiety pielęgnacji",
        "Niestandardowe zawieszki i metki cenowe",
        "Projekt niestandardowego opakowania — bibułka, torby foliowe, pudełka",
        "Etykietowanie pielęgnacji tekstyliów UE (Rozporządzenie 1007/2011)",
        "Konwersje rozmiarów dla poszczególnych krajów (EU/UK/US)",
        "Generowanie kodów kreskowych, EAN i UPC",
        "Etykietowanie składu i kraju pochodzenia",
        "Łańcuch własności GOTS / OEKO-TEX na Twoich etykietach",
        "Niestandardowe kolorystyki i ekskluzywne nadruki",
        "Branding haftowany, sitodruk lub nadruk cyfrowy",
      ],
    },
    pricing: {
      subtitle: "Ceny",
      title: "Przejrzyste kalkulacje",
      intro: "Nasze ceny są w pełni przejrzyste — bez ukrytych kosztów. Każda oferta zawiera szczegółowy podział kosztów:",
      items: [
        "Koszt tkaniny za metr (w tym naddatek na odpady i testy)",
        "Koszt CMT (krój-szycie-wykończenie) za sztukę",
        "Wykończenia, etykiety i opakowania — wyszczególnione",
        "Koszty testów i certyfikacji (GOTS TC, raporty laboratoryjne)",
        "Opcje cenowe FOB / CIF / DDP z szacunkami frachtu",
        "Koszty opracowania próbek (zaliczane na poczet pierwszego zamówienia masowego)",
      ],
      note: "Typowy zakres cenowy: €4,50–€18,00 FOB za sztukę w zależności od tkaniny, złożoności konstrukcji i ozdób. MOQ: 300 sztuk na styl na kolor dla pierwszego zamówienia; 200 sztuk dla powtórnych.",
    },
    stats: {
      subtitle: "W skrócie",
      title: "Doświadczenie w marce własnej",
      labels: ["Obsłużonych marek", "Krajów eksportu", "Wskaźnik dostaw na czas", "Wskaźnik wad (audyt końcowy)"],
    },
    cta: { title: "Rozpocznij program marki własnej", description: "Wyślij nam brief marki, a my przedstawimy kompleksową propozycję w ciągu 48 godzin. NDA dostępna na żądanie.", buttonText: "Rozpocznij" },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Marque privée",
      title: "Votre marque, notre fabrication",
      description: "Fabrication complète en marque privée de la conception à la livraison. Nous produisons sous votre marque avec une confidentialité totale, un étiquetage conforme UE et une traçabilité des certifications. Au service de 200+ marques européennes depuis 1998.",
    },
    advantages: {
      subtitle: "Pourquoi Vedant",
      title: "Avantages de la marque privée",
      items: [
        { title: "Confidentialité totale", desc: "NDA signé avant le début du projet. Lignes de production dédiées — sans partage avec d'autres marques. Tous les designs, patrons et cahiers des charges techniques restent votre propriété intellectuelle." },
        { title: "Étiquetage conforme UE", desc: "Nous gérons toutes les exigences d'étiquetage selon le Règlement UE 1007/2011 — composition des fibres, symboles d'entretien (ISO 3758), pays d'origine et coordonnées de l'importateur dans vos langues requises." },
        { title: "Contrôle créatif total", desc: "De la sélection des tissus à l'emballage final, chaque élément est produit selon les spécifications de votre marque. Aucun logo Vedant n'apparaît nulle part sur le produit." },
      ],
    },
    process: {
      subtitle: "Processus",
      title: "Comment fonctionne la marque privée",
      steps: [
        { step: "Brief et concept", desc: "Partagez vos directives de marque, moodboards et cahiers des charges. Nous assignons un merchandiser dédié et un responsable QC à votre compte. NDA signé avant tout échange d'informations." },
        { step: "Approvisionnement tissu et finitions", desc: "Nous sourçons les tissus depuis notre réseau de filatures certifiées et développons des finitions sur mesure — étiquettes tissées, étiquettes imprimées, boutons, fermetures. Bains de teinte et tirés de couleur pour approbation." },
        { step: "Patron et échantillonnage", desc: "Développement de patron CAO avec gradation numérique sur votre gamme de tailles. 2 tours d'échantillonnage inclus : échantillon de développement et échantillon de pré-production avec tout le branding." },
        { step: "Approbation d'ajustement", desc: "Set de tailles en 3–5 tailles. Sessions d'ajustement virtuelles ou en personne. Tableau de mesures avec limites de tolérance convenu avant le lancement de la production en série." },
        { step: "Production en série", desc: "Production avec contrôles QC intégrés toutes les 500 pièces. Photos de progression en temps réel et rapports hebdomadaires. Inspection finale AQL 2,5 selon ISO 2859-1." },
        { step: "Emballage et livraison", desc: "Emballé selon vos spécifications — sachets polyéthylène, papier de soie, étiquettes volantes, codes-barres, marquages cartons. FOB/CIF/DDP vers votre entrepôt européen. Documentation complète incluse." },
      ],
    },
    included: {
      subtitle: "Ce qui est inclus",
      title: "Services marque privée",
      items: [
        "Étiquettes tissées et étiquettes d'entretien imprimées de votre marque",
        "Étiquettes volantes, swing tags et étiquettes de prix personnalisés",
        "Design d'emballage sur mesure — papier de soie, sachets, boîtes",
        "Étiquetage d'entretien textile UE (Règlement 1007/2011)",
        "Conversions de tailles spécifiques au pays (EU/UK/US)",
        "Génération de codes-barres, EAN et UPC",
        "Étiquetage de composition et du pays d'origine",
        "Chaîne de custody GOTS / OEKO-TEX sur vos étiquettes",
        "Coloris personnalisés et imprimés exclusifs",
        "Branding broderie, sérigraphie ou impression numérique",
      ],
    },
    pricing: {
      subtitle: "Tarification",
      title: "Coûts transparents",
      intro: "Notre tarification est totalement transparente — aucun coût caché. Chaque devis inclut une décomposition détaillée des coûts :",
      items: [
        "Coût du tissu par mètre (incluant la tolérance de perte et les tests)",
        "Coût CMT (Coupe-Confection-Finitions) par vêtement",
        "Finitions, étiquettes et emballages — détaillés",
        "Coûts de tests et certifications (GOTS TC, rapports de laboratoire)",
        "Options de prix FOB / CIF / DDP avec estimations de fret",
        "Coûts de développement des échantillons (crédités sur le premier ordre en série)",
      ],
      note: "Plage de prix typique : 4,50–18,00 € FOB par unité selon le tissu, la complexité de construction et les ornements. MOQ : 300 pièces par style par couleur pour la première commande ; 200 pièces pour les reconductions.",
    },
    stats: {
      subtitle: "En un coup d'œil",
      title: "Bilan marque privée",
      labels: ["Marques servies", "Pays d'exportation", "Taux de livraison à temps", "Taux de défauts (audit final)"],
    },
    cta: { title: "Lancez votre programme de marque privée", description: "Envoyez-nous votre brief de marque et nous fournirons une proposition complète dans les 48 heures. NDA disponible sur demande.", buttonText: "Commencer" },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Marca privata",
      title: "Il tuo brand, la nostra produzione",
      description: "Produzione completa a marchio privato dalla concezione alla consegna. Produciamo sotto il vostro brand con totale riservatezza, etichettatura conforme UE e tracciabilità delle certificazioni. Al servizio di 200+ brand europei dal 1998.",
    },
    advantages: {
      subtitle: "Perché Vedant",
      title: "Vantaggi del marchio privato",
      items: [
        { title: "Totale riservatezza", desc: "NDA firmato prima dell'inizio del progetto. Linee produttive dedicate — nessuna condivisione con altri brand. Tutti i design, i cartamodelli e le specifiche tecniche rimangono di vostra proprietà intellettuale." },
        { title: "Etichettatura conforme UE", desc: "Gestiamo tutti i requisiti di etichettatura secondo il Regolamento UE 1007/2011 — composizione delle fibre, simboli di cura (ISO 3758), paese di origine e dettagli dell'importatore nelle lingue richieste." },
        { title: "Pieno controllo creativo", desc: "Dalla selezione del tessuto al packaging finale, ogni elemento è prodotto secondo le specifiche del vostro brand. Nessun branding Vedant appare sul prodotto." },
      ],
    },
    process: {
      subtitle: "Processo",
      title: "Come funziona il marchio privato",
      steps: [
        { step: "Brief e concept", desc: "Condividete le linee guida del brand, moodboard e specifiche tecniche. Assegniamo un merchandiser dedicato e un responsabile QC al vostro account. NDA firmato prima di qualsiasi scambio di informazioni." },
        { step: "Approvvigionamento tessuti e rifiniture", desc: "Approvvigoniamo tessuti dalla nostra rete di filature certificate e sviluppiamo rifiniture su misura — etichette tessute, tag stampati, bottoni, zip. Campionature di colore e prove stampa per l'approvazione." },
        { step: "Cartamodello e campionatura", desc: "Sviluppo cartamodello CAD con gradazione digitale sulla vostra gamma taglie. 2 turni di campionatura inclusi: campione di sviluppo e campione pre-produzione con tutto il branding." },
        { step: "Approvazione vestibilità", desc: "Serie taglie in 3–5 misure. Sessioni di prova virtuali o di persona. Tabella misure con limiti di tolleranza concordata prima dell'avvio della produzione in serie." },
        { step: "Produzione in serie", desc: "Produzione con controlli QC integrati ogni 500 pezzi. Foto di avanzamento in tempo reale e report settimanali. Ispezione finale AQL 2,5 per ISO 2859-1." },
        { step: "Imballaggio e consegna", desc: "Imballato secondo le vostre specifiche — buste in polietilene, carta velina, cartellini, codici a barre, marchi cartoni. FOB/CIF/DDP al vostro magazzino europeo. Documentazione completa inclusa." },
      ],
    },
    included: {
      subtitle: "Cosa è incluso",
      title: "Servizi marchio privato",
      items: [
        "Etichette tessute e etichette di cura stampate del vostro brand",
        "Cartellini personalizzati e targhette prezzi",
        "Design packaging personalizzato — carta velina, buste, scatole",
        "Etichettatura di cura tessile UE (Regolamento 1007/2011)",
        "Conversioni taglie specifiche per paese (EU/UK/US)",
        "Generazione codici a barre, EAN e UPC",
        "Etichettatura composizione e paese di origine",
        "Catena di custodia GOTS / OEKO-TEX sulle vostre etichette",
        "Colorazioni personalizzate e stampe esclusive",
        "Branding ricamo, serigrafia o stampa digitale",
      ],
    },
    pricing: {
      subtitle: "Prezzi",
      title: "Costi trasparenti",
      intro: "Il nostro pricing è completamente trasparente — nessun costo nascosto. Ogni preventivo include un dettaglio dei costi:",
      items: [
        "Costo del tessuto al metro (incluso margine per scarti e test)",
        "Costo CMT (Taglio-Confezione-Rifiniture) per capo",
        "Rifiniture, etichette e packaging — voce per voce",
        "Costi di test e certificazione (GOTS TC, rapporti di laboratorio)",
        "Opzioni di prezzo FOB / CIF / DDP con stime nolo",
        "Costi sviluppo campioni (accreditati sul primo ordine in serie)",
      ],
      note: "Fascia di prezzo tipica: €4,50–€18,00 FOB per unità in base a tessuto, complessità costruttiva e decorazioni. MOQ: 300 pezzi per stile per colore per il primo ordine; 200 pezzi per i rinnovi.",
    },
    stats: {
      subtitle: "In sintesi",
      title: "Track record marchio privato",
      labels: ["Brand serviti", "Paesi di esportazione", "Tasso di consegne puntuali", "Tasso difetti (audit finale)"],
    },
    cta: { title: "Avvia il tuo programma di marchio privato", description: "Inviateci il vostro brief e forniremo una proposta completa entro 48 ore. NDA disponibile su richiesta.", buttonText: "Inizia" },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Eigen merk",
      title: "Uw merk, onze productie",
      description: "Volledige productie onder eigen merk van concept tot levering. We produceren onder uw merk met volledige vertrouwelijkheid, EU-conforme etikettering en certificaattraceerbaarheid. Wij bedienen 200+ Europese merken sinds 1998.",
    },
    advantages: {
      subtitle: "Waarom Vedant",
      title: "Voordelen van eigen merk",
      items: [
        { title: "Volledige vertrouwelijkheid", desc: "NDA ondertekend voor aanvang van het project. Toegewezen productielijnen — geen deling met andere merken. Alle ontwerpen, patronen en technische specificaties blijven uw intellectueel eigendom." },
        { title: "EU-conforme etikettering", desc: "We beheren alle etiketteringsvereisten per EU-Verordening 1007/2011 — vezelsamenstelling, verzorgingssymbolen (ISO 3758), land van oorsprong en importeursgegevens in uw vereiste talen." },
        { title: "Volledige creatieve controle", desc: "Van stofselectie tot definitieve verpakking — elk element wordt geproduceerd naar de specificaties van uw merk. Geen Vedant-branding verschijnt ergens op het product." },
      ],
    },
    process: {
      subtitle: "Proces",
      title: "Hoe eigen merk werkt",
      steps: [
        { step: "Brief en concept", desc: "Deel uw merkrichtlijnen, moodboards en technische specificaties. We wijzen een toegewijde merchandiser en QC-functionaris toe aan uw account. NDA ondertekend voor enige informatie-uitwisseling." },
        { step: "Inkoop stof en garnituren", desc: "We sourcen stoffen uit ons netwerk van gecertificeerde fabrieken en ontwikkelen maatwerk garnituren — geweven labels, gedrukte tags, knopen, ritssluitingen. Laboratoriumkleuringen voor kleurgoedkeuring." },
        { step: "Patroon en bemonstering", desc: "CAD-paternontwikkeling met digitale gradering over uw maatreeks. 2 ronden bemonstering inbegrepen: ontwikkelingsmonster en voorproductiemonster met alle branding." },
        { step: "Pasgoedkeuring", desc: "Maatset in 3–5 maten. Virtuele of persoonlijke passe sessies. Maattabel met tolerantiegrenzen overeengekomen voor aanvang van serieproductie." },
        { step: "Serieproductie", desc: "Productie met ingebouwde QC-controles elke 500 stuks. Real-time voortgangsfoto's en wekelijkse statusrapporten. Eindcontrole AQL 2,5 per ISO 2859-1." },
        { step: "Verpakking en levering", desc: "Verpakt volgens uw specificaties — polybags, vloeipapier, hangtags, barcodes, kartonmarkeringen. FOB/CIF/DDP naar uw Europees magazijn. Volledige documentatie inbegrepen." },
      ],
    },
    included: {
      subtitle: "Wat is inbegrepen",
      title: "Eigen merk diensten",
      items: [
        "Geweven merkLabels en gedrukte verzorgingsetiketten",
        "Maatwerk hangtags, swing tags en prijskaartjes",
        "Maatwerk verpakkingsontwerp — vloeipapier, polybags, dozen",
        "EU-textielverzorgingsetikettering (Verordening 1007/2011)",
        "Landspecifieke maatconversies (EU/UK/US)",
        "Generatie barcodes, EAN en UPC",
        "Etikettering samenstelling en land van oorsprong",
        "GOTS / OEKO-TEX bewaarders ketting op uw labels",
        "Maatwerk kleurstellingen en exclusieve prints",
        "Branding borduurwerk, zeefdruk of digitale print",
      ],
    },
    pricing: {
      subtitle: "Prijzen",
      title: "Transparante kostprijsberekening",
      intro: "Onze prijzen zijn volledig transparant — geen verborgen kosten. Elke offerte bevat een gespecificeerde kostenopbouw:",
      items: [
        "Stofkosten per meter (inclusief uitvalmarges en tests)",
        "CMT-kosten (Snijden-Maken-Bijwerken) per kledingstuk",
        "Garnituren, labels en verpakking — gespecificeerd",
        "Test- en certificeringskosten (GOTS TC, laboratoriumrapporten)",
        "Prijsopties FOB / CIF / DDP met vrachtramingen",
        "Monsterontwikkelingskosten (verrekend met eerste serieorder)",
      ],
      note: "Typische prijsrange: €4,50–€18,00 FOB per eenheid afhankelijk van stof, constructiecomplexiteit en versieringen. MOQ: 300 stuks per stijl per kleur voor eerste order; 200 stuks voor herhalingsorders.",
    },
    stats: {
      subtitle: "In één oogopslag",
      title: "Eigen merk trackrecord",
      labels: ["Bediende merken", "Exportlanden", "Op-tijd leveringspercentage", "Defectpercentage (eindaudit)"],
    },
    cta: { title: "Start uw eigen merkprogramma", description: "Stuur ons uw merkbriefing en we zullen binnen 48 uur een uitgebreid voorstel opstellen. NDA beschikbaar op verzoek.", buttonText: "Beginnen" },
  },
};
