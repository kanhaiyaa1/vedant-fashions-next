// ─────────────────────────────────────────────────────────────────────────────
// Manufacturing page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// ─────────────────────────────────────────────────────────────────────────────

export interface ManufacturingAdvantage {
  title: string;
  desc: string;
}

export interface ManufacturingCapability {
  stage: string;
  title: string;
  desc: string;
}

export interface ManufacturingFacilityUnit {
  name: string;
  desc: string;
  location?: string;
}

export interface ManufacturingLocale {
  hero: { subtitle: string; title: string; description: string };
  advantages: {
    subtitle: string;
    title: string;
    items: ManufacturingAdvantage[]; // [Lead Time, Quality, Account Team, Vertical]
  };
  process: {
    subtitle: string;
    title: string;
    items: ManufacturingCapability[]; // [Stage 1–6]
  };
  facilities: {
    subtitle: string;
    title: string;
    units: ManufacturingFacilityUnit[]; // [Unit 1–4]
    imagePlaceholders: { factoryFloor: string; cuttingRoom: string; qualityLab: string };
  };
  equipment: {
    subtitle: string;
    title: string;
    headers: [string, string, string, string];
    rows: { use: string }[]; // 8 rows — translates only the "use" column
  };
  metrics: {
    subtitle: string;
    title: string;
    items: { label: string }[]; // 4 items — num stays in component
  };
  cta: { title: string; description: string; buttonText: string };
}

export const manufacturingContent: Record<string, ManufacturingLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Manufacturing",
      title: "Garment Production in Mumbai",
      description:
        "5,000 sq ft manufacturing facility in Mumbai with 60 machines and 15 skilled workers. In-house cutting, stitching, and finishing. 60–90 day bulk lead time. Exporting ladies woven wear to UAE, Russia, Poland, and South Africa.",
    },
    advantages: {
      subtitle: "Why Middle East & Global Buyers Choose Us",
      title: "Manufacturing Advantages",
      items: [
        {
          title: "Reliable Lead Times",
          desc: "60–90 days bulk production from order confirmation. 2-week sample turnaround. We plan production carefully and communicate updates throughout.",
        },
        {
          title: "Quality at Every Stage",
          desc: "10-step quality control process covering fabric inspection, in-line stitching checks, measurement verification, finishing, and final inspection before packing.",
        },
        {
          title: "Direct Communication",
          desc: "Every client works directly with Shravan Diwan, Director. No middlemen, no miscommunication. WhatsApp: +91 9930968116",
        },
        {
          title: "Flexible MOQ",
          desc: "Minimum 100 pieces per design per colour — lower than most Indian manufacturers. Private label and custom packaging available.",
        },
      ],
    },
    process: {
      subtitle: "Production Process",
      title: "End-to-End Manufacturing",
      items: [
        {
          stage: "Stage 1",
          title: "Fabric Sourcing & Testing",
          desc: "In-house textile lab for shrinkage, colorfastness, GSM, and tensile strength testing. Fabrics sourced from trusted mills across India, with a growing share of sustainable and recycled fabrics.",
        },
        {
          stage: "Stage 2",
          title: "Pattern Making & Grading",
          desc: "CAD-based pattern development with digital grading across EU size ranges (XS–3XL). Gerber AccuMark system ensures precision within ±2mm tolerance.",
        },
        {
          stage: "Stage 3",
          title: "Cutting",
          desc: "Automated spreading and CNC cutting with Lectra Vector iX. Marker efficiency above 85%. Laser cutting available for delicate fabrics and intricate designs.",
        },
        {
          stage: "Stage 4",
          title: "Stitching & Assembly",
          desc: "12 production lines with 600+ machines — single needle, overlock, flatlock, coverstitch, buttonhole. Dedicated lines for complex constructions.",
        },
        {
          stage: "Stage 5",
          title: "Finishing & Pressing",
          desc: "Steam pressing, enzyme washing, garment dyeing, embroidery, screen print, and digital print. Softener treatments to buyer hand-feel specifications.",
        },
        {
          stage: "Stage 6",
          title: "Packaging & Dispatch",
          desc: "Custom packaging per buyer specs — tissue-wrapped, polybags, hangtags, barcoding, carton packing with moisture-proof lining. FCL/LCL ready.",
        },
      ],
    },
    facilities: {
      subtitle: "Our Facilities",
      title: "Manufacturing Infrastructure",
      units: [
        {
          name: "Vedant Fashion — Mumbai Facility",
          location: "Asalpha Ghatkopar, Mumbai",
          desc: "5,000 sq ft production facility in Asalpha Ghatkopar, Mumbai. Houses all in-house operations: fabric inspection, cutting room, 60-machine stitching floor, finishing section, and QC area. Fabric printing outsourced to specialist printers.",
        },
        {
          name: "Cutting & Fabric Section",
          desc: "Dedicated cutting room with careful pattern placement, size-wise cutting, and fabric defect checking before production begins. Handles viscose, linen blends, rayon, georgette, and crepe fabrics.",
        },
        {
          name: "Stitching & Finishing Floor",
          desc: "60 machines covering single-needle lockstitch, overlock, and finishing. In-line quality checks at every stitching stage. Embroidery and sequin work handled in-house.",
        },
        {
          name: "QC & Packing Section",
          desc: "Final inspection, measurement checking, thread trimming, ironing, folding, and packing as per client specifications. Private label tags and custom packaging available.",
        },
      ],
      imagePlaceholders: { factoryFloor: "Factory Floor", cuttingRoom: "Cutting Room", qualityLab: "Quality Lab" },
    },
    equipment: {
      subtitle: "Equipment",
      title: "Production Technology",
      headers: ["Equipment", "Application", "Capacity", "Standard"],
      rows: [
        { use: "Automated fabric cutting" },
        { use: "Single-needle lockstitch" },
        { use: "Programmable pattern stitching" },
        { use: "Garment finishing & pressing" },
        { use: "Multi-head embroidery" },
        { use: "Spectrophotometer — colour matching" },
        { use: "Dimensional stability testing" },
        { use: "Tensile & tear strength testing" },
      ],
    },
    metrics: {
      subtitle: "At a Glance",
      title: "Production Capacity",
      items: [
        { label: "Pieces / Month capacity" },
        { label: "Production Unit" },
        { label: "Skilled Workers" },
        { label: "Days Bulk Lead Time" },
      ],
    },
    cta: {
      title: "Request a Sample or Quote",
      description:
        "Send us your design brief or sample requirement. We will respond within 24 hours with lead time, FOB pricing, and production availability.",
      buttonText: "Get a Quote",
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "التصنيع",
      title: "إنتاج الملابس في مومباي",
      description:
        "منشأة تصنيع بمساحة 5,000 قدم مربع في مومباي مزودة بـ 60 آلة و15 عاملاً ماهراً. قص وخياطة وتشطيب داخلي بالكامل. مهلة تسليم 60–90 يوماً للطلبيات الكبيرة. تصدير ملابس نسائية منسوجة إلى الإمارات وروسيا وبولندا وجنوب أفريقيا.",
    },
    advantages: {
      subtitle: "لماذا يختارنا مشترو الشرق الأوسط والعالم",
      title: "مزايا التصنيع",
      items: [
        {
          title: "مهل تسليم موثوقة",
          desc: "إنتاج بالجملة خلال 60–90 يوماً من تأكيد الطلب. تسليم العينات خلال أسبوعين. نخطط للإنتاج بعناية ونطلعكم على المستجدات باستمرار.",
        },
        {
          title: "ضمان الجودة",
          desc: "عملية مراقبة جودة من 10 خطوات تغطي فحص الأقمشة وفحوصات الخياطة أثناء الإنتاج والتحقق من القياسات والتشطيب والفحص النهائي قبل التعبئة.",
        },
        {
          title: "تواصل مباشر",
          desc: "يتعامل كل عميل مباشرة مع شرافان ديوان، المدير. بلا وسطاء وبلا سوء تفاهم. واتساب: +91 9930968116",
        },
        {
          title: "حد أدنى مرن للطلبية",
          desc: "حد أدنى 100 قطعة لكل تصميم ولون — أقل من معظم المصنعين الهنود. العلامة الخاصة والتعبئة المخصصة متاحة.",
        },
      ],
    },
    process: {
      subtitle: "عملية الإنتاج",
      title: "تصنيع شامل من البداية إلى النهاية",
      items: [
        {
          stage: "المرحلة 1",
          title: "توريد الأقمشة والاختبار",
          desc: "مختبر نسيج داخلي لاختبار الانكماش والثبات اللوني وكثافة الغرام والمتانة. الأقمشة من مصانع موثوقة في الهند، مع حصة متزايدة من الأقمشة المستدامة والمعاد تدويرها.",
        },
        {
          stage: "المرحلة 2",
          title: "تصميم الأنماط والتدريج",
          desc: "تطوير أنماط بالحاسوب مع تدريج رقمي عبر مقاسات الاتحاد الأوروبي (XS–3XL). يضمن نظام Gerber AccuMark دقة تصل إلى ±2mm.",
        },
        {
          stage: "المرحلة 3",
          title: "القطع",
          desc: "تمديد آلي وقطع CNC باستخدام Lectra Vector iX. كفاءة ماركر تتجاوز 85%. القطع بالليزر متاح للأقمشة الدقيقة والتصاميم المعقدة.",
        },
        {
          stage: "المرحلة 4",
          title: "الخياطة والتجميع",
          desc: "12 خط إنتاج بأكثر من 600 آلة — إبرة واحدة، أوفرلوك، فلاتلوك، كوفرستيتش، أزرار. خطوط مخصصة للتركيبات المعقدة.",
        },
        {
          stage: "المرحلة 5",
          title: "الإنهاء والكي",
          desc: "كي بالبخار، غسيل إنزيمي، صباغة الملابس، تطريز، طباعة شاشة وطباعة رقمية. معالجة بمرطبات وفق مواصفات اللمسة الأوروبية.",
        },
        {
          stage: "المرحلة 6",
          title: "التعبئة والشحن",
          desc: "تعبئة مخصصة وفق مواصفات المشتري — ورق تيشو، أكياس بولي، بطاقات شنق، باركود، تعبئة كرتونية بطبقة مقاومة للرطوبة. جاهزة لـ FCL/LCL.",
        },
      ],
    },
    facilities: {
      subtitle: "مرافقنا",
      title: "البنية التحتية للتصنيع",
      units: [
        {
          name: "منشأة فيدانت فاشون — مومباي",
          desc: "منشأة إنتاج بمساحة 5,000 قدم مربع في أسالفا غاتكوبار، مومباي. تضم جميع العمليات الداخلية: فحص الأقمشة وغرفة القص وطابق خياطة بـ 60 آلة وقسم التشطيب ومنطقة مراقبة الجودة. طباعة الأقمشة يتم تنفيذها لدى مطابع متخصصة.",
        },
        {
          name: "قسم القص والأقمشة",
          desc: "غرفة قص مخصصة مع وضع دقيق للأنماط وقص حسب المقاس وفحص عيوب الأقمشة قبل بدء الإنتاج. تتعامل مع الفسكوز وخلطات الكتان والريون والجورجيت والكريب.",
        },
        {
          name: "طابق الخياطة والتشطيب",
          desc: "60 آلة تغطي الخياطة بإبرة واحدة والأوفرلوك والتشطيب. فحوصات جودة أثناء كل مرحلة خياطة. أعمال التطريز والترتر تُنفذ داخلياً.",
        },
        {
          name: "قسم مراقبة الجودة والتعبئة",
          desc: "الفحص النهائي والتحقق من القياسات وتشذيب الخيوط والكي والطي والتعبئة وفق مواصفات العميل. بطاقات العلامة الخاصة والتعبئة المخصصة متاحة.",
        },
      ],
      imagePlaceholders: { factoryFloor: "أرضية المصنع", cuttingRoom: "غرفة القطع", qualityLab: "مختبر الجودة" },
    },
    equipment: {
      subtitle: "المعدات",
      title: "تكنولوجيا الإنتاج",
      headers: ["المعدة", "التطبيق", "الطاقة", "المعيار"],
      rows: [
        { use: "قطع الأقمشة الآلي" },
        { use: "خياطة إبرة واحدة" },
        { use: "خياطة نمط قابل للبرمجة" },
        { use: "إنهاء الملابس وكيّها" },
        { use: "تطريز متعدد الرؤوس" },
        { use: "مطياف ضوئي — مطابقة الألوان" },
        { use: "اختبار الثبات الأبعادي" },
        { use: "اختبار مقاومة الشد والتمزق" },
      ],
    },
    metrics: {
      subtitle: "نظرة عامة",
      title: "طاقة الإنتاج",
      items: [
        { label: "قطعة / شهر" },
        { label: "وحدة تصنيع" },
        { label: "عامل ماهر" },
        { label: "مهلة التسليم القياسية" },
      ],
    },
    cta: {
      title: "اطلب عينة أو عرض سعر",
      description:
        "أرسل لنا ملخص التصميم أو متطلبات العينة. سنرد خلال 24 ساعة بمهلة التسليم وسعر FOB وتوفر الإنتاج.",
      buttonText: "احصل على عرض سعر",
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Производство",
      title: "Швейное производство в Мумбаи",
      description:
        "Производственное предприятие площадью 5 000 кв. футов в Мумбаи, 60 единиц оборудования и 15 квалифицированных рабочих. Собственный раскрой, пошив и отделка. Срок выполнения оптовых заказов — 60–90 дней. Экспорт женской тканой одежды в ОАЭ, Россию, Польшу и Южную Африку.",
    },
    advantages: {
      subtitle: "Почему покупатели с Ближнего Востока и всего мира выбирают нас",
      title: "Преимущества производства",
      items: [
        {
          title: "Надёжные сроки",
          desc: "60–90 дней на оптовое производство с момента подтверждения заказа. Образцы — за 2 недели. Мы тщательно планируем производство и держим вас в курсе на каждом этапе.",
        },
        {
          title: "Качество на каждом этапе",
          desc: "10-этапный процесс контроля качества: проверка тканей, контроль пошива в процессе, проверка размеров, отделка и финальная инспекция перед упаковкой.",
        },
        {
          title: "Прямое общение",
          desc: "Каждый клиент работает напрямую со Шраваном Дываном, директором. Без посредников и недопонимания. WhatsApp: +91 9930968116",
        },
        {
          title: "Гибкий минимальный заказ",
          desc: "Минимум 100 единиц на дизайн и цвет — меньше, чем у большинства индийских производителей. Доступны частная марка и индивидуальная упаковка.",
        },
      ],
    },
    process: {
      subtitle: "Производственный процесс",
      title: "Полный производственный цикл",
      items: [
        {
          stage: "Этап 1",
          title: "Закупка и тестирование ткани",
          desc: "Собственная текстильная лаборатория для проверки усадки, устойчивости окраски, плотности GSM и прочности на разрыв. Ткани закупаются на проверенных фабриках Индии, с растущей долей устойчивых и переработанных тканей.",
        },
        {
          stage: "Этап 2",
          title: "Разработка и градация лекал",
          desc: "Автоматизированная разработка лекал с цифровой градацией по размерной сетке ЕС (XS–3XL). Система Gerber AccuMark обеспечивает точность ±2 мм.",
        },
        {
          stage: "Этап 3",
          title: "Раскрой",
          desc: "Автоматизированное настилание и CNC-раскрой на оборудовании Lectra Vector iX. КПД раскладки выше 85%. Лазерный раскрой доступен для деликатных тканей и сложных фасонов.",
        },
        {
          stage: "Этап 4",
          title: "Пошив и сборка",
          desc: "12 производственных линий с 600+ машинами — одноигольные, оверлочные, флатлочные, цепного стежка, петельные. Специализированные линии для сложных конструкций.",
        },
        {
          stage: "Этап 5",
          title: "Отделка и глажка",
          desc: "Паровая глажка, ферментная стирка, крашение изделий, вышивка, трафаретная и цифровая печать. Смягчающие обработки по европейским требованиям к грифу.",
        },
        {
          stage: "Этап 6",
          title: "Упаковка и отгрузка",
          desc: "Индивидуальная упаковка по спецификации покупателя — тишью, полиэтиленовые пакеты, бирки, штрих-коды, картонная упаковка с влагостойкой вкладкой. Готово для FCL/LCL.",
        },
      ],
    },
    facilities: {
      subtitle: "Наши предприятия",
      title: "Производственная инфраструктура",
      units: [
        {
          name: "Vedant Fashion — предприятие в Мумбаи",
          desc: "Производственное предприятие площадью 5 000 кв. футов в Асалфа Гхаткопар, Мумбаи. Все операции под одной крышей: проверка ткани, раскройный цех, пошивочный участок на 60 машин, отделка и зона контроля качества. Печать по ткани выполняется у специализированных подрядчиков.",
        },
        {
          name: "Раскройный участок",
          desc: "Отдельный раскройный цех с точной раскладкой лекал, раскроем по размерам и проверкой дефектов ткани перед началом производства. Работа с вискозой, льняными смесями, вискозой, жоржетом и крепом.",
        },
        {
          name: "Пошивочный и отделочный участок",
          desc: "60 машин: одноигольный стачной шов, оверлок и отделка. Контроль качества на каждом этапе пошива. Вышивка и пайетки выполняются собственными силами.",
        },
        {
          name: "Участок контроля качества и упаковки",
          desc: "Финальная инспекция, проверка размеров, обрезка нитей, глажка, складывание и упаковка по спецификации клиента. Доступны бирки частной марки и индивидуальная упаковка.",
        },
      ],
      imagePlaceholders: { factoryFloor: "Производственный зал", cuttingRoom: "Раскройный цех", qualityLab: "Лаборатория качества" },
    },
    equipment: {
      subtitle: "Оборудование",
      title: "Производственные технологии",
      headers: ["Оборудование", "Применение", "Мощность", "Стандарт"],
      rows: [
        { use: "Автоматический раскрой ткани" },
        { use: "Однониточный стачной шов" },
        { use: "Программируемая строчка по контуру" },
        { use: "Отделка и глажка изделий" },
        { use: "Многоголовочная вышивка" },
        { use: "Спектрофотометр — цветоподбор" },
        { use: "Испытание на усадку" },
        { use: "Испытание на разрыв и раздир" },
      ],
    },
    metrics: {
      subtitle: "Ключевые показатели",
      title: "Производственные мощности",
      items: [
        { label: "Единиц / месяц" },
        { label: "Производственное предприятие" },
        { label: "Квалифицированных сотрудников" },
        { label: "Дней срок оптового производства" },
      ],
    },
    cta: {
      title: "Запросить образец или расчёт стоимости",
      description:
        "Отправьте нам бриф на дизайн или требования к образцу. Мы ответим в течение 24 часов со сроками, ценой FOB и доступностью производства.",
      buttonText: "Получить расчёт стоимости",
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Produkcja",
      title: "Produkcja odzieży w Mumbaju",
      description:
        "Zakład produkcyjny o powierzchni 5000 stóp kwadratowych w Mumbaju, z 60 maszynami i 15 wykwalifikowanymi pracownikami. Własne krojenie, szycie i wykańczanie. Termin realizacji zamówień hurtowych 60–90 dni. Eksport damskiej odzieży tkanej do ZEA, Rosji, Polski i RPA.",
    },
    advantages: {
      subtitle: "Dlaczego kupujący z Bliskiego Wschodu i całego świata nas wybierają",
      title: "Zalety produkcji",
      items: [
        {
          title: "Niezawodne terminy realizacji",
          desc: "60–90 dni na produkcję hurtową od potwierdzenia zamówienia. 2 tygodnie na próbki. Starannie planujemy produkcję i informujemy na bieżąco.",
        },
        {
          title: "Jakość na każdym etapie",
          desc: "10-etapowy proces kontroli jakości obejmujący kontrolę tkanin, kontrolę szycia w trakcie produkcji, weryfikację wymiarów, wykańczanie i kontrolę końcową przed pakowaniem.",
        },
        {
          title: "Bezpośredni kontakt",
          desc: "Każdy klient współpracuje bezpośrednio ze Shravanem Diwanem, dyrektorem. Bez pośredników i nieporozumień. WhatsApp: +91 9930968116",
        },
        {
          title: "Elastyczne minimum zamówienia",
          desc: "Minimum 100 sztuk na wzór i kolor — mniej niż u większości indyjskich producentów. Dostępna marka własna i niestandardowe pakowanie.",
        },
      ],
    },
    process: {
      subtitle: "Proces produkcji",
      title: "Kompletna produkcja od A do Z",
      items: [
        {
          stage: "Etap 1",
          title: "Pozyskiwanie i testowanie tkanin",
          desc: "Własne laboratorium tekstylne do badania kurczliwości, trwałości barwy, gęstości GSM i wytrzymałości na zerwanie. Tkaniny pochodzą ze sprawdzonych zakładów w Indiach, z rosnącym udziałem tkanin zrównoważonych i pochodzących z recyklingu.",
        },
        {
          stage: "Etap 2",
          title: "Tworzenie wzorów i stopniowanie",
          desc: "Projektowanie wzorów CAD z cyfrowym stopniowaniem w rozmiarach EU (XS–3XL). System Gerber AccuMark zapewnia precyzję ±2mm.",
        },
        {
          stage: "Etap 3",
          title: "Krojenie",
          desc: "Automatyczne rozpościeranie i cięcie CNC z Lectra Vector iX. Wydajność układania powyżej 85%. Cięcie laserowe dostępne dla delikatnych tkanin i skomplikowanych wzorów.",
        },
        {
          stage: "Etap 4",
          title: "Szycie i montaż",
          desc: "12 linii produkcyjnych z 600+ maszynami — jednoigłowe, overlock, flatlock, coverstitch, dziurkarki. Dedykowane linie dla złożonych konstrukcji.",
        },
        {
          stage: "Etap 5",
          title: "Wykańczanie i prasowanie",
          desc: "Prasowanie parowe, pranie enzymatyczne, barwienie odzieży, haft, sitodruk i druk cyfrowy. Obróbki zmiękczające zgodnie z europejskimi wymaganiami chwytu.",
        },
        {
          stage: "Etap 6",
          title: "Pakowanie i wysyłka",
          desc: "Niestandardowe pakowanie wg specyfikacji kupującego — bibułka, woreczki foliowe, metki, kody kreskowe, pakowanie kartonowe z wkładką wilgocioodporną. Gotowe na FCL/LCL.",
        },
      ],
    },
    facilities: {
      subtitle: "Nasze zakłady",
      title: "Infrastruktura produkcyjna",
      units: [
        {
          name: "Vedant Fashion — zakład w Mumbaju",
          desc: "Zakład produkcyjny o powierzchni 5000 stóp kwadratowych w Asalpha Ghatkopar, Mumbaj. Wszystkie operacje pod jednym dachem: kontrola tkanin, krojownia, hala szwalnicza z 60 maszynami, dział wykańczania i kontrola jakości. Druk na tkaninach zlecany wyspecjalizowanym drukarniom.",
        },
        {
          name: "Dział krojenia i tkanin",
          desc: "Dedykowana krojownia z precyzyjnym rozplanowaniem wzorów, krojeniem wg rozmiarów i kontrolą wad tkanin przed rozpoczęciem produkcji. Obsługuje wiskozę, mieszanki lnu, rayon, żorżetę i krepę.",
        },
        {
          name: "Hala szycia i wykańczania",
          desc: "60 maszyn obejmujących ścieg jednoigłowy, overlock i wykańczanie. Kontrola jakości na każdym etapie szycia. Haft i cekiny wykonywane wewnętrznie.",
        },
        {
          name: "Dział kontroli jakości i pakowania",
          desc: "Kontrola końcowa, weryfikacja wymiarów, obcinanie nitek, prasowanie, składanie i pakowanie zgodnie ze specyfikacją klienta. Dostępne metki marki własnej i niestandardowe pakowanie.",
        },
      ],
      imagePlaceholders: { factoryFloor: "Hala produkcyjna", cuttingRoom: "Krojownia", qualityLab: "Laboratorium jakości" },
    },
    equipment: {
      subtitle: "Maszyny",
      title: "Technologia produkcji",
      headers: ["Maszyna", "Zastosowanie", "Wydajność", "Standard"],
      rows: [
        { use: "Automatyczne krojenie tkanin" },
        { use: "Szew jednoigłowy" },
        { use: "Programowalne szycie po konturze" },
        { use: "Wykańczanie i prasowanie odzieży" },
        { use: "Haft wielogłowicowy" },
        { use: "Spektrofotometr — dopasowanie kolorów" },
        { use: "Badanie stabilności wymiarowej" },
        { use: "Badanie wytrzymałości na zerwanie i rozdarcie" },
      ],
    },
    metrics: {
      subtitle: "Rzut oka",
      title: "Zdolności produkcyjne",
      items: [
        { label: "Sztuk / miesiąc" },
        { label: "Zakład produkcyjny" },
        { label: "Wykwalifikowanych pracowników" },
        { label: "Dni terminu realizacji hurtowej" },
      ],
    },
    cta: {
      title: "Zamów próbkę lub wycenę",
      description:
        "Prześlij nam brief projektowy lub wymagania dotyczące próbki. Odpowiemy w ciągu 24 godzin z terminem realizacji, ceną FOB i dostępnością produkcji.",
      buttonText: "Uzyskaj wycenę",
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Production",
      title: "Fabrication de vêtements à Mumbai",
      description:
        "Site de fabrication de 5 000 pieds carrés à Mumbai avec 60 machines et 15 ouvriers qualifiés. Coupe, couture et finition en interne. Délai de production en gros de 60 à 90 jours. Exportation de vêtements tissés pour femmes vers les Émirats arabes unis, la Russie, la Pologne et l'Afrique du Sud.",
    },
    advantages: {
      subtitle: "Pourquoi les acheteurs du Moyen-Orient et du monde entier nous choisissent",
      title: "Avantages de fabrication",
      items: [
        {
          title: "Délais fiables",
          desc: "Production en gros de 60 à 90 jours à partir de la confirmation de commande. Échantillons livrés en 2 semaines. Nous planifions la production avec soin et communiquons régulièrement.",
        },
        {
          title: "Qualité à chaque étape",
          desc: "Processus de contrôle qualité en 10 étapes couvrant l'inspection des tissus, les contrôles de couture en cours de production, la vérification des mesures, la finition et l'inspection finale avant emballage.",
        },
        {
          title: "Communication directe",
          desc: "Chaque client travaille directement avec Shravan Diwan, directeur. Sans intermédiaires ni malentendus. WhatsApp : +91 9930968116",
        },
        {
          title: "MOQ flexible",
          desc: "Minimum 100 pièces par modèle et par couleur — inférieur à la plupart des fabricants indiens. Marque privée et emballage personnalisé disponibles.",
        },
      ],
    },
    process: {
      subtitle: "Processus de production",
      title: "Fabrication de bout en bout",
      items: [
        {
          stage: "Étape 1",
          title: "Approvisionnement et test des tissus",
          desc: "Laboratoire textile interne pour les tests de rétrécissement, solidité des couleurs, GSM et résistance à la traction. Tissus provenant d'usines fiables en Inde, avec une part croissante de tissus durables et recyclés.",
        },
        {
          stage: "Étape 2",
          title: "Patronage et gradation",
          desc: "Développement de patrons par CAO avec gradation numérique dans les tailles EU (XS–3XL). Le système Gerber AccuMark garantit une précision de ±2mm.",
        },
        {
          stage: "Étape 3",
          title: "Coupe",
          desc: "Matelassage automatisé et coupe CNC avec Lectra Vector iX. Efficacité de placement supérieure à 85%. Coupe laser disponible pour les tissus délicats et les modèles complexes.",
        },
        {
          stage: "Étape 4",
          title: "Couture et assemblage",
          desc: "12 lignes de production avec 600+ machines — point noué simple aiguille, surjet, point plat, recouvrement, boutonnière. Lignes dédiées aux constructions complexes.",
        },
        {
          stage: "Étape 5",
          title: "Finition et repassage",
          desc: "Repassage vapeur, lavage enzymatique, teinture sur vêtement, broderie, sérigraphie et impression numérique. Traitements adoucissants selon les spécifications de main européennes.",
        },
        {
          stage: "Étape 6",
          title: "Emballage et expédition",
          desc: "Emballage personnalisé selon spec acheteur — papier de soie, sachets polybag, étiquettes, codes-barres, cartons avec doublure anti-humidité. Prêt FCL/LCL.",
        },
      ],
    },
    facilities: {
      subtitle: "Nos installations",
      title: "Infrastructure de fabrication",
      units: [
        {
          name: "Vedant Fashion — Site de Mumbai",
          desc: "Site de production de 5 000 pieds carrés à Asalpha Ghatkopar, Mumbai. Regroupe toutes les opérations internes : inspection des tissus, salle de coupe, atelier de couture de 60 machines, section de finition et zone de contrôle qualité. L'impression des tissus est sous-traitée à des imprimeurs spécialisés.",
        },
        {
          name: "Section coupe et tissus",
          desc: "Salle de coupe dédiée avec placement soigneux des patrons, coupe par taille et vérification des défauts de tissu avant le début de production. Traite le viscose, les mélanges de lin, le rayonne, la georgette et le crêpe.",
        },
        {
          name: "Atelier couture et finition",
          desc: "60 machines couvrant le point noué simple aiguille, le surjet et la finition. Contrôles qualité à chaque étape de couture. Broderie et travaux de sequins réalisés en interne.",
        },
        {
          name: "Section QC et emballage",
          desc: "Inspection finale, vérification des mesures, coupe des fils, repassage, pliage et emballage selon les spécifications du client. Étiquettes marque privée et emballage personnalisé disponibles.",
        },
      ],
      imagePlaceholders: { factoryFloor: "Salle de production", cuttingRoom: "Salle de coupe", qualityLab: "Laboratoire qualité" },
    },
    equipment: {
      subtitle: "Équipements",
      title: "Technologie de production",
      headers: ["Équipement", "Application", "Capacité", "Norme"],
      rows: [
        { use: "Coupe automatisée de tissu" },
        { use: "Point noué simple aiguille" },
        { use: "Piqûre de contour programmable" },
        { use: "Finition et repassage de vêtements" },
        { use: "Broderie multi-têtes" },
        { use: "Spectrophotomètre — correspondance des couleurs" },
        { use: "Test de stabilité dimensionnelle" },
        { use: "Test de résistance à la traction et à la déchirure" },
      ],
    },
    metrics: {
      subtitle: "En bref",
      title: "Capacité de production",
      items: [
        { label: "Pièces / mois" },
        { label: "Site de fabrication" },
        { label: "Travailleurs qualifiés" },
        { label: "Jours délai de production en gros" },
      ],
    },
    cta: {
      title: "Demander un échantillon ou un devis",
      description:
        "Envoyez-nous votre brief de conception ou vos exigences d'échantillon. Nous répondrons sous 24 heures avec le délai, le prix FOB et la disponibilité de production.",
      buttonText: "Obtenir un devis",
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Produzione",
      title: "Produzione di abbigliamento a Mumbai",
      description:
        "Stabilimento produttivo di 5.000 piedi quadrati a Mumbai con 60 macchine e 15 lavoratori qualificati. Taglio, cucitura e finitura interni. Tempi di produzione all'ingrosso di 60–90 giorni. Esportazione di abbigliamento tessuto da donna verso Emirati Arabi Uniti, Russia, Polonia e Sudafrica.",
    },
    advantages: {
      subtitle: "Perché gli acquirenti del Medio Oriente e del mondo ci scelgono",
      title: "Vantaggi produttivi",
      items: [
        {
          title: "Tempi di consegna affidabili",
          desc: "Produzione all'ingrosso in 60–90 giorni dalla conferma dell'ordine. Campioni in 2 settimane. Pianifichiamo la produzione con cura e comunichiamo aggiornamenti costanti.",
        },
        {
          title: "Qualità in ogni fase",
          desc: "Processo di controllo qualità in 10 fasi che copre l'ispezione dei tessuti, i controlli di cucitura in linea, la verifica delle misure, la finitura e l'ispezione finale prima dell'imballaggio.",
        },
        {
          title: "Comunicazione diretta",
          desc: "Ogni cliente lavora direttamente con Shravan Diwan, Direttore. Nessun intermediario, nessun malinteso. WhatsApp: +91 9930968116",
        },
        {
          title: "MOQ flessibile",
          desc: "Minimo 100 pezzi per design e colore — inferiore alla maggior parte dei produttori indiani. Private label e imballaggio personalizzato disponibili.",
        },
      ],
    },
    process: {
      subtitle: "Processo produttivo",
      title: "Produzione dall'inizio alla fine",
      items: [
        {
          stage: "Fase 1",
          title: "Approvvigionamento e test dei tessuti",
          desc: "Laboratorio tessile interno per test di restringimento, solidità del colore, GSM e resistenza alla trazione. Tessuti da fornitori affidabili in India, con una quota crescente di tessuti sostenibili e riciclati.",
        },
        {
          stage: "Fase 2",
          title: "Creazione patroni e gradazione",
          desc: "Sviluppo patroni CAD con gradazione digitale nelle taglie UE (XS–3XL). Il sistema Gerber AccuMark garantisce una precisione di ±2mm.",
        },
        {
          stage: "Fase 3",
          title: "Taglio",
          desc: "Stesura automatizzata e taglio CNC con Lectra Vector iX. Efficienza di piazzamento oltre l'85%. Taglio laser disponibile per tessuti delicati e design intricati.",
        },
        {
          stage: "Fase 4",
          title: "Cucitura e assemblaggio",
          desc: "12 linee di produzione con 600+ macchine — punto fisso ago singolo, overlock, flatlock, copertina, asole. Linee dedicate per costruzioni complesse.",
        },
        {
          stage: "Fase 5",
          title: "Finitura e stiratura",
          desc: "Stiratura a vapore, lavaggio enzimatico, tintura su capo, ricamo, serigrafia e stampa digitale. Trattamenti ammorbidenti secondo le specifiche europee di mano.",
        },
        {
          stage: "Fase 6",
          title: "Imballaggio e spedizione",
          desc: "Imballaggio personalizzato per spec acquirente — carta velina, polybag, cartellini, codici a barre, cartoni con fodera anti-umidità. Pronti per FCL/LCL.",
        },
      ],
    },
    facilities: {
      subtitle: "I nostri stabilimenti",
      title: "Infrastruttura produttiva",
      units: [
        {
          name: "Vedant Fashion — Stabilimento di Mumbai",
          desc: "Stabilimento produttivo di 5.000 piedi quadrati ad Asalpha Ghatkopar, Mumbai. Ospita tutte le operazioni interne: ispezione tessuti, sala taglio, reparto cucitura con 60 macchine, sezione finitura e area controllo qualità. La stampa su tessuto è affidata a stampatori specializzati esterni.",
        },
        {
          name: "Sezione taglio e tessuti",
          desc: "Sala taglio dedicata con posizionamento accurato dei patroni, taglio per taglia e controllo difetti tessuto prima dell'inizio produzione. Gestisce viscosa, misti lino, rayon, georgette e crêpe.",
        },
        {
          name: "Reparto cucitura e finitura",
          desc: "60 macchine per punto fisso ago singolo, overlock e finitura. Controlli qualità ad ogni fase di cucitura. Ricamo e paillettes eseguiti internamente.",
        },
        {
          name: "Sezione QC e imballaggio",
          desc: "Ispezione finale, verifica misure, taglio fili, stiratura, piegatura e imballaggio secondo le specifiche del cliente. Etichette private label e imballaggio personalizzato disponibili.",
        },
      ],
      imagePlaceholders: { factoryFloor: "Piano di produzione", cuttingRoom: "Sala taglio", qualityLab: "Laboratorio qualità" },
    },
    equipment: {
      subtitle: "Macchinari",
      title: "Tecnologia produttiva",
      headers: ["Macchinario", "Applicazione", "Capacità", "Standard"],
      rows: [
        { use: "Taglio tessuto automatizzato" },
        { use: "Punto fisso ago singolo" },
        { use: "Cucitura di contorno programmabile" },
        { use: "Finitura e stiratura capi" },
        { use: "Ricamo multi-testa" },
        { use: "Spettrofotometro — abbinamento colori" },
        { use: "Test di stabilità dimensionale" },
        { use: "Test di resistenza a trazione e strappo" },
      ],
    },
    metrics: {
      subtitle: "In sintesi",
      title: "Capacità produttiva",
      items: [
        { label: "Pezzi / mese" },
        { label: "Stabilimento produttivo" },
        { label: "Lavoratori qualificati" },
        { label: "Giorni tempi produzione ingrosso" },
      ],
    },
    cta: {
      title: "Richiedi un campione o un preventivo",
      description:
        "Inviaci il tuo brief di design o le tue esigenze di campionatura. Risponderemo entro 24 ore con tempi di consegna, prezzo FOB e disponibilità produttiva.",
      buttonText: "Richiedi un preventivo",
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Productie",
      title: "Kledingproductie in Mumbai",
      description:
        "Productiefaciliteit van 5.000 vierkante voet in Mumbai met 60 machines en 15 vakbekwame werknemers. Eigen snijden, naaien en afwerking. Levertijd van 60–90 dagen voor grootschalige bestellingen. Export van geweven dameskleding naar de VAE, Rusland, Polen en Zuid-Afrika.",
    },
    advantages: {
      subtitle: "Waarom inkopers uit het Midden-Oosten en wereldwijd voor ons kiezen",
      title: "Productie­voordelen",
      items: [
        {
          title: "Betrouwbare levertijden",
          desc: "60–90 dagen bulkproductie vanaf orderbevestiging. 2 weken doorlooptijd voor stalen. We plannen productie zorgvuldig en houden u voortdurend op de hoogte.",
        },
        {
          title: "Kwaliteit in elke fase",
          desc: "10-stappen kwaliteitscontroleproces: stofinspectie, controles tijdens het naaien, maatverificatie, afwerking en eindcontrole voor het verpakken.",
        },
        {
          title: "Direct contact",
          desc: "Elke klant werkt rechtstreeks met Shravan Diwan, directeur. Geen tussenpersonen, geen miscommunicatie. WhatsApp: +91 9930968116",
        },
        {
          title: "Flexibele MOQ",
          desc: "Minimaal 100 stuks per ontwerp per kleur — lager dan de meeste Indiase fabrikanten. Private label en aangepaste verpakking beschikbaar.",
        },
      ],
    },
    process: {
      subtitle: "Productieproces",
      title: "End-to-end productie",
      items: [
        {
          stage: "Stap 1",
          title: "Stofinkoop en -testen",
          desc: "Eigen textiellaboratorium voor krimp, kleurechtheid, GSM en treksterkte. Stoffen van betrouwbare fabrieken in India, met een groeiend aandeel duurzame en gerecyclede stoffen.",
        },
        {
          stage: "Stap 2",
          title: "Patroonontwerp en -gradatie",
          desc: "CAD-patronontwikkeling met digitale gradatie voor EU-maten (XS–3XL). Het Gerber AccuMark-systeem garandeert nauwkeurigheid van ±2mm.",
        },
        {
          stage: "Stap 3",
          title: "Snijden",
          desc: "Geautomatiseerd opleggen en CNC-snijden met Lectra Vector iX. Legplan-efficiëntie boven 85%. Lasersnijden beschikbaar voor delicate stoffen en complexe ontwerpen.",
        },
        {
          stage: "Stap 4",
          title: "Naaien en assemblage",
          desc: "12 productielijnen met 600+ machines — eennaaldstiksels, overlock, flatlock, coversteek, knoopsgaten. Speciale lijnen voor complexe constructies.",
        },
        {
          stage: "Stap 5",
          title: "Afwerking en strijken",
          desc: "Stoomstrijken, enzymatisch wassen, kledingverven, borduren, zeefdruk en digitaal printen. Verzachtersbehandelingen naar Europese handvoelspecificaties.",
        },
        {
          stage: "Stap 6",
          title: "Verpakking en verzending",
          desc: "Maatwerk­verpakking per inkoperspecificatie — vloeipapier, polybags, labels, barcodes, kartonnen dozen met vochtbestendige voering. Klaar voor FCL/LCL.",
        },
      ],
    },
    facilities: {
      subtitle: "Onze vestigingen",
      title: "Productie-infrastructuur",
      units: [
        {
          name: "Vedant Fashion — Vestiging Mumbai",
          desc: "Productiefaciliteit van 5.000 vierkante voet in Asalpha Ghatkopar, Mumbai. Huisvest alle interne operaties: stofinspectie, snijzaal, naaivloer met 60 machines, afwerkingssectie en QC-zone. Stofbedrukking wordt uitbesteed aan gespecialiseerde drukkerijen.",
        },
        {
          name: "Snij- en stofsectie",
          desc: "Speciale snijzaal met zorgvuldige patroonplaatsing, snijden op maat en controle op stofgebreken voordat de productie begint. Verwerkt viscose, linnenmengsels, rayon, georgette en crêpe.",
        },
        {
          name: "Naai- en afwerkingsvloer",
          desc: "60 machines voor eennaaldstiksel, overlock en afwerking. Kwaliteitscontroles bij elke naaifase. Borduur- en pailletwerk intern uitgevoerd.",
        },
        {
          name: "QC- en verpakkingssectie",
          desc: "Eindcontrole, maatcontrole, draadjes knippen, strijken, vouwen en verpakken volgens klantspecificaties. Private label-labels en aangepaste verpakking beschikbaar.",
        },
      ],
      imagePlaceholders: { factoryFloor: "Productievloer", cuttingRoom: "Snijzaal", qualityLab: "Kwaliteitslab" },
    },
    equipment: {
      subtitle: "Machines",
      title: "Productietechnologie",
      headers: ["Machine", "Toepassing", "Capaciteit", "Norm"],
      rows: [
        { use: "Geautomatiseerd stofsnijden" },
        { use: "Eennaalds­stiksteek" },
        { use: "Programmeerbaar contourstiksels" },
        { use: "Kledingafwerking en strijken" },
        { use: "Meerkopsborduren" },
        { use: "Spectrofotometer — kleuranalyse" },
        { use: "Maatvastheidstesten" },
        { use: "Trek- en scheursterkte­testen" },
      ],
    },
    metrics: {
      subtitle: "In één oogopslag",
      title: "Productiecapaciteit",
      items: [
        { label: "Stuks / maand" },
        { label: "Productiefaciliteit" },
        { label: "Gekwalificeerde medewerkers" },
        { label: "Dagen levertijd bulkproductie" },
      ],
    },
    cta: {
      title: "Vraag een staal of offerte aan",
      description:
        "Stuur ons uw ontwerpbrief of stalenvereisten. Wij reageren binnen 24 uur met levertijd, FOB-prijs en productiebeschikbaarheid.",
      buttonText: "Offerte aanvragen",
    },
  },
};
