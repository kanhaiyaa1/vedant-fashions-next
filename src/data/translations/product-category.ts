// ─────────────────────────────────────────────────────────────────────────────
// Product Category page content translations
// Covers: Overview, Fabric Table, Tech Specs, GCC Markets, Compliance,
//         Size Chart, Ordering Process, CTA section
// Languages: en · ar · ru · pl · fr · it · nl
//
// Placeholders used in template strings:
//   {productCount}         — e.g. "12"
//   {category}            — category display name, e.g. "Woven Blouses"
//   {markets}             — comma-joined market list, e.g. "UAE, Saudi Arabia, Qatar"
//   {fobPrice}            — price range string, e.g. "FOB USD 4.50–7.00 / pc"
// ─────────────────────────────────────────────────────────────────────────────

export interface OrderingStep {
  step: string;
  title: string;
  desc: string;
}

export interface ProductCategoryLocale {
  overview: {
    subtitle: string;
    title: string;
    /** Static paragraph — prepend category.description before rendering */
    paragraph1: string; // uses {productCount}
    paragraph2: string;
  };
  fabricTable: {
    subtitle: string;
    title: string;
    headers: string[]; // 9 columns
    footnote: string;
  };
  techSpecs: {
    subtitle: string;
    title: string;
    labels: {
      moq: string;
      sampleLeadTime: string;
      productionLeadTime: string;
      sizeRange: string;
      fobPrice: string;
      incoterms: string;
      payment: string;
      countryOfOrigin: string;
      qualityStandard: string;
      qualityCerts: string;
    };
  };
  gccMarkets: {
    subtitle: string;
    title: string;
    viewExportPage: string; // "View {country} export page →"
    seaFreight: string;
    seaFreightDesc: string;
  };
  compliance: {
    subtitle: string;
    title: string;
    gccNote: string;
    cepaNote: string;
  };
  sizeChart: {
    subtitle: string;
    title: string;
    headers: string[]; // 8 columns
    footnote: string;
  };
  ordering: {
    subtitle: string;
    title: string;
    steps: OrderingStep[];
  };
  cta: {
    subtitle: string;
    title: string;   // uses {category} and {markets}
    desc: string;    // uses {fobPrice}
    catalogBtn: string;
    sampleBtn: string;
  };
}

export const productCategoryContent: Record<string, ProductCategoryLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    overview: {
      subtitle: "B2B Overview",
      title: "Wholesale Manufacturing",
      paragraph1:
        "Our {productCount}+ SKU range covers the full spectrum of wholesale buyer requirements — from core basics to fashion-forward seasonal styles, all produced in our ISO 9001:2015 certified manufacturing facility in Mumbai, India.",
      paragraph2:
        "Every style is available for private label, OEM, and ODM production. GOTS 6.0 and OEKO-TEX Standard 100 certification maintained across the full range. MOQ from 300 pieces per style per colour. Sea freight from Mumbai reaches UAE (Jebel Ali) in 18–22 days, Saudi Arabia in 20–24 days, Qatar in 20–23 days — making India one of the most efficient manufacturing origins for GCC buyers.",
    },
    fabricTable: {
      subtitle: "Technical Data",
      title: "Fabric Specification Table",
      headers: ["Fabric Name", "Composition", "GSM", "Weave", "Width", "Shrinkage", "Colourfastness", "HS Code", "FOB Price"],
      footnote:
        "* Prices are indicative FOB Mumbai. Final pricing subject to style complexity, fabric selection, and confirmed order quantity. Request a formal quotation for binding pricing.",
    },
    techSpecs: {
      subtitle: "Order Specifications",
      title: "Technical Order Parameters",
      labels: {
        moq: "Minimum Order Quantity (MOQ)",
        sampleLeadTime: "Sample Lead Time",
        productionLeadTime: "Production Lead Time",
        sizeRange: "Available Size Range",
        fobPrice: "FOB Price Range",
        incoterms: "Incoterms Available",
        payment: "Payment Terms",
        countryOfOrigin: "Country of Origin",
        qualityStandard: "Quality Standard",
        qualityCerts: "Quality Certificates",
      },
    },
    gccMarkets: {
      subtitle: "GCC Export Markets",
      title: "Middle East Market Suitability",
      viewExportPage: "View {country} export page →",
      seaFreight: "Sea Freight — India to GCC",
      seaFreightDesc:
        "Mumbai / JNPT to Jebel Ali (UAE): 18–22 days · Dammam (KSA): 20–24 days · Doha (Qatar): 20–23 days · Shuwaikh (Kuwait): 19–22 days · Muscat (Oman): 17–20 days",
    },
    compliance: {
      subtitle: "Regulatory Compliance",
      title: "Export Compliance & Standards",
      gccNote:
        "GCC / UAE ESMA, Saudi SASO, Qatar GQSM — bilingual Arabic / English care label compliance for all Middle East shipments",
      cepaNote:
        "India-UAE CEPA Certificate of Origin available — qualifying garments attract preferential / nil import duty into UAE",
    },
    sizeChart: {
      subtitle: "Size Reference",
      title: "Standard Size Chart",
      headers: ["Size", "EU", "UK", "US", "Chest (cm)", "Waist (cm)", "Hip (cm)", "Length (cm)"],
      footnote:
        "Custom grading available up to size 5XL. GCC / Middle East market sizing available on request — measurements provided in both cm and inches.",
    },
    ordering: {
      subtitle: "How to Order",
      title: "B2B Ordering Process",
      steps: [
        {
          step: "01",
          title: "Enquiry & RFQ",
          desc: "Send your product brief, target quantity, delivery port, and required certifications. We respond with indicative FOB pricing within 24 hours.",
        },
        {
          step: "02",
          title: "Sample Approval",
          desc: "Proto or counter samples dispatched within 12–15 working days. Fabric, construction, and labelling reviewed and approved by the buyer before production sign-off.",
        },
        {
          step: "03",
          title: "Production",
          desc: "Bulk fabric sourced, cut, sewn, and finished in our 45,000 sq ft facility. Production updates shared weekly via your dedicated account manager.",
        },
        {
          step: "04",
          title: "QC — AQL 2.5 (ISO 2859-1)",
          desc: "In-line and final random inspection per AQL 2.5 standard under ISO 2859-1. Third-party inspection (SGS / Intertek) arranged on request at buyer's cost.",
        },
        {
          step: "05",
          title: "Shipment — FOB Mumbai",
          desc: "Export packing, Bill of Lading, Commercial Invoice, Packing List, Certificate of Origin, and compliance declarations prepared. Goods handed to freight forwarder at JNPT Mumbai.",
        },
      ],
    },
    cta: {
      subtitle: "Ready to Source?",
      title: "Source {category} from India for {markets}",
      desc: "Dedicated GCC account team. Respond within 24 hours with FOB pricing, samples, and a production timeline. {fobPrice}.",
      catalogBtn: "Download Catalogue",
      sampleBtn: "Request Sample — Middle East",
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    overview: {
      subtitle: "نظرة عامة B2B",
      title: "التصنيع بالجملة",
      paragraph1:
        "تغطي مجموعتنا التي تضم أكثر من {productCount} SKU كامل متطلبات مشتري الجملة — من التصاميم الأساسية الثابتة إلى المجموعات الموسمية العصرية، وكلها تُنتَج في منشأتنا المعتمدة بشهادة ISO 9001:2015 بمساحة 45,000 قدم مربع في غوجارات بالهند.",
      paragraph2:
        "جميع التصاميم متاحة لإنتاج العلامة الخاصة وOEM وODM. يتم الحفاظ على شهادات GOTS 6.0 وOEKO-TEX Standard 100 عبر المجموعة الكاملة، مع إمكانية طلب تدقيقات الامتثال الاجتماعي BSCI / SEDEX. يبدأ الحد الأدنى للطلب من 300 قطعة لكل تصميم ولون، مع مهل إنتاج قياسية تتراوح بين 45 و55 يوماً. يصل الشحن البحري من مومباي / JNPT إلى موانئ الشرق الأوسط في 17–22 يوماً.",
    },
    fabricTable: {
      subtitle: "البيانات التقنية",
      title: "جدول مواصفات الأقمشة",
      headers: ["اسم القماش", "التركيب", "GSM", "نوع النسيج", "العرض", "الانكماش", "ثبات اللون", "رمز HS", "سعر FOB"],
      footnote:
        "* الأسعار استرشادية FOB مومباي. السعر النهائي يخضع لتعقيد التصميم واختيار القماش والكمية المؤكدة. اطلب عرض سعر رسمياً للحصول على تسعيرة ملزمة.",
    },
    techSpecs: {
      subtitle: "مواصفات الطلب",
      title: "المعاملات التقنية للطلب",
      labels: {
        moq: "الحد الأدنى للطلب (MOQ)",
        sampleLeadTime: "مهلة العينة",
        productionLeadTime: "مهلة الإنتاج",
        sizeRange: "نطاق المقاسات المتاحة",
        fobPrice: "نطاق سعر FOB",
        incoterms: "شروط Incoterms المتاحة",
        payment: "شروط الدفع",
        countryOfOrigin: "بلد المنشأ",
        qualityStandard: "معيار الجودة",
        qualityCerts: "شهادات الجودة",
      },
    },
    gccMarkets: {
      subtitle: "أسواق تصدير دول الخليج",
      title: "ملاءمة أسواق الشرق الأوسط",
      viewExportPage: "عرض صفحة تصدير {country} ←",
      seaFreight: "الشحن البحري — من الهند إلى دول الخليج",
      seaFreightDesc:
        "من ميناء JNPT مومباي إلى جبل علي (الإمارات): 18–22 يوماً · الدمام (السعودية): 20–24 يوماً · الدوحة (قطر): 20–23 يوماً · الشويخ (الكويت): 19–22 يوماً · مسقط (عُمان): 17–20 يوماً",
    },
    compliance: {
      subtitle: "الامتثال التنظيمي",
      title: "الامتثال التصديري والمعايير",
      gccNote:
        "الامتثال لمتطلبات هيئة الإمارات للمواصفات والمقاييس (ESMA) وهيئة المواصفات والمقاييس والجودة السعودية (SASO) ومنظمة الجودة القطرية (GQSM) — بطاقات عناية ثنائية اللغة (العربية / الإنجليزية) لجميع شحنات الشرق الأوسط",
      cepaNote:
        "شهادة منشأ اتفاقية CEPA بين الهند والإمارات متاحة — الملابس المؤهلة تستفيد من تخفيض أو إعفاء كامل من رسوم الاستيراد في الإمارات",
    },
    sizeChart: {
      subtitle: "مرجع المقاسات",
      title: "جدول المقاسات القياسي",
      headers: ["المقاس", "EU", "UK", "US", "الصدر (سم)", "الخصر (سم)", "الوركان (سم)", "الطول (سم)"],
      footnote:
        "التدريج المخصص متاح حتى مقاس 5XL. مقاسات أسواق الخليج والشرق الأوسط متاحة عند الطلب — القياسات بالسنتيمتر والإنش.",
    },
    ordering: {
      subtitle: "طريقة الطلب",
      title: "مراحل الطلب B2B",
      steps: [
        {
          step: "01",
          title: "الاستفسار وطلب عروض الأسعار",
          desc: "أرسل لنا ملخص المنتج والكمية المطلوبة وميناء التسليم والشهادات المطلوبة. سنرد بأسعار FOB الاسترشادية خلال 24 ساعة.",
        },
        {
          step: "02",
          title: "اعتماد العينات",
          desc: "يتم إرسال العينات الأولية أو عينات المقارنة خلال 12–15 يوم عمل. يراجع المشتري ويعتمد القماش والتصميم وبطاقات التسمية قبل انطلاق الإنتاج.",
        },
        {
          step: "03",
          title: "الإنتاج",
          desc: "يتم توريد القماش الأساسي وقطعه وخياطته وإنهاؤه في منشأتنا البالغة مساحتها 45,000 قدم مربع. تحديثات أسبوعية عبر مدير حسابك المخصص.",
        },
        {
          step: "04",
          title: "مراقبة الجودة — AQL 2.5 (ISO 2859-1)",
          desc: "فحص عشوائي أثناء الإنتاج وبعد اكتماله وفق معيار AQL 2.5 بموجب ISO 2859-1. يمكن ترتيب تفتيش طرف ثالث (SGS / Intertek) عند الطلب على نفقة المشتري.",
        },
        {
          step: "05",
          title: "الشحن — FOB مومباي",
          desc: "إعداد التغليف التصديري وبوليصة الشحن والفاتورة التجارية وقائمة التعبئة وشهادة المنشأ وإعلانات الامتثال. تُسلَّم البضاعة لوكيل الشحن في ميناء JNPT مومباي.",
        },
      ],
    },
    cta: {
      subtitle: "مستعد للتوريد؟",
      title: "استورد {category} من الهند إلى {markets}",
      desc: "فريق حسابات الخليج المخصص يرد خلال 24 ساعة بأسعار FOB والعينات وجدول الإنتاج. {fobPrice}.",
      catalogBtn: "تحميل الكتالوج",
      sampleBtn: "طلب عينة — الشرق الأوسط",
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    overview: {
      subtitle: "Обзор B2B",
      title: "Оптовое производство",
      paragraph1:
        "Наш ассортимент включает более {productCount} SKU и охватывает весь спектр потребностей оптовых покупателей — от базовых классических стилей до модных сезонных новинок. Всё производится на нашем предприятии площадью 45 000 кв. футов в штате Гуджарат, Индия, сертифицированном по ISO 9001:2015.",
      paragraph2:
        "Каждый стиль доступен для производства под частной торговой маркой, по схемам OEM и ODM. Сертификация GOTS 6.0 и OEKO-TEX Standard 100 поддерживается по всему ассортименту; проверки BSCI / SEDEX проводятся по запросу. Минимальный заказ — от 300 единиц на стиль и цвет, стандартные сроки производства — 45–55 дней. Доставка морем из Мумбаи / JNPT в порты Ближнего Востока занимает 17–22 дня.",
    },
    fabricTable: {
      subtitle: "Технические данные",
      title: "Таблица характеристик тканей",
      headers: ["Название ткани", "Состав", "GSM", "Переплетение", "Ширина", "Усадка", "Устойчивость окраски", "Код HS", "Цена FOB"],
      footnote:
        "* Цены являются ориентировочными FOB Мумбаи. Окончательная стоимость зависит от сложности модели, выбора ткани и подтверждённого объёма заказа. Запросите официальное коммерческое предложение для получения обязывающих цен.",
    },
    techSpecs: {
      subtitle: "Параметры заказа",
      title: "Технические условия заказа",
      labels: {
        moq: "Минимальный объём заказа (MOQ)",
        sampleLeadTime: "Срок изготовления образцов",
        productionLeadTime: "Срок производства",
        sizeRange: "Доступный диапазон размеров",
        fobPrice: "Ценовой диапазон FOB",
        incoterms: "Доступные условия Инкотермс",
        payment: "Условия оплаты",
        countryOfOrigin: "Страна происхождения",
        qualityStandard: "Стандарт качества",
        qualityCerts: "Сертификаты качества",
      },
    },
    gccMarkets: {
      subtitle: "Рынки экспорта ССЗ",
      title: "Рынки Ближнего Востока",
      viewExportPage: "Страница экспорта {country} →",
      seaFreight: "Морская доставка — Индия — ССЗ",
      seaFreightDesc:
        "Мумбаи / JNPT → Джебель Али (ОАЭ): 18–22 дня · Даммам (Саудовская Аравия): 20–24 дня · Доха (Катар): 20–23 дня · Шувайх (Кувейт): 19–22 дня · Маскат (Оман): 17–20 дней",
    },
    compliance: {
      subtitle: "Нормативное соответствие",
      title: "Экспортное соответствие и стандарты",
      gccNote:
        "Соответствие требованиям ОАЭ ESMA, Саудовской SASO и катарской GQSM — двуязычные (арабский / английский) ярлыки по уходу для всех поставок на Ближний Восток",
      cepaNote:
        "Доступен сертификат происхождения по соглашению CEPA между Индией и ОАЭ — квалифицированные изделия пользуются льготными или нулевыми ввозными пошлинами в ОАЭ",
    },
    sizeChart: {
      subtitle: "Размерный справочник",
      title: "Стандартная таблица размеров",
      headers: ["Размер", "EU", "UK", "US", "Грудь (см)", "Талия (см)", "Бёдра (см)", "Длина (см)"],
      footnote:
        "Доступна индивидуальная разработка размерной сетки до 5XL. Таблицы размеров для рынков ССЗ и Ближнего Востока предоставляются по запросу — в сантиметрах и дюймах.",
    },
    ordering: {
      subtitle: "Как разместить заказ",
      title: "Процесс B2B заказа",
      steps: [
        {
          step: "01",
          title: "Запрос и коммерческое предложение",
          desc: "Отправьте описание продукта, целевой объём, порт доставки и требуемые сертификаты. Ответим ориентировочными ценами FOB в течение 24 часов.",
        },
        {
          step: "02",
          title: "Утверждение образцов",
          desc: "Прото-образцы или контрольные образцы отправляются в течение 12–15 рабочих дней. Покупатель проверяет и утверждает ткань, конструкцию и маркировку до начала производства.",
        },
        {
          step: "03",
          title: "Производство",
          desc: "Закупка основной ткани, раскрой, пошив и финишная обработка на нашем производстве площадью 45 000 кв. футов. Еженедельные обновления через вашего персонального менеджера.",
        },
        {
          step: "04",
          title: "Контроль качества — AQL 2.5 (ISO 2859-1)",
          desc: "Пооперационный и финальный выборочный контроль по стандарту AQL 2.5 согласно ISO 2859-1. Инспекция третьей стороны (SGS / Intertek) организуется по запросу за счёт покупателя.",
        },
        {
          step: "05",
          title: "Отгрузка — FOB Мумбаи",
          desc: "Подготовка экспортной упаковки, коносамента, коммерческого инвойса, упаковочного листа, сертификата происхождения и деклараций соответствия. Передача груза экспедитору в порту JNPT Мумбаи.",
        },
      ],
    },
    cta: {
      subtitle: "Готовы к заказу?",
      title: "Закупайте {category} из Индии для {markets}",
      desc: "Персональный менеджер по ССЗ. Ответ в течение 24 часов с ценами FOB, образцами и производственным графиком. {fobPrice}.",
      catalogBtn: "Скачать каталог",
      sampleBtn: "Запросить образцы — Ближний Восток",
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    overview: {
      subtitle: "Przegląd B2B",
      title: "Produkcja hurtowa",
      paragraph1:
        "Nasz asortyment obejmuje ponad {productCount} SKU i pokrywa pełne spektrum potrzeb hurtowników — od podstawowych stylów kolekcji stałej po modne nowości sezonowe. Całość produkowana jest w naszym zakładzie w stanie Gudźarat w Indiach, certyfikowanym wg ISO 9001:2015, o powierzchni 45 000 stóp kwadratowych.",
      paragraph2:
        "Każdy styl dostępny jest do produkcji pod marką własną, OEM i ODM. Certyfikacja GOTS 6.0 i OEKO-TEX Standard 100 obowiązuje w całym asortymencie; audyty BSCI / SEDEX dostępne na żądanie. Minimalny poziom zamówienia to 300 szt. na styl i kolor, standardowy czas realizacji wynosi 45–55 dni. Transport morski z Mumbaju / JNPT dociera do portów Bliskiego Wschodu w 17–22 dni.",
    },
    fabricTable: {
      subtitle: "Dane techniczne",
      title: "Tabela specyfikacji tkanin",
      headers: ["Nazwa tkaniny", "Skład", "GSM", "Splot", "Szerokość", "Kurczliwość", "Trwałość barwy", "Kod HS", "Cena FOB"],
      footnote:
        "* Ceny są orientacyjne FOB Mumbaj. Cena ostateczna zależy od złożoności stylu, wyboru tkaniny i potwierdzonej ilości zamówienia. Prosimy o formalne zapytanie ofertowe w celu uzyskania wiążącej wyceny.",
    },
    techSpecs: {
      subtitle: "Parametry zamówienia",
      title: "Techniczne warunki zamówienia",
      labels: {
        moq: "Minimalna wielkość zamówienia (MOQ)",
        sampleLeadTime: "Czas realizacji próbki",
        productionLeadTime: "Czas realizacji produkcji",
        sizeRange: "Dostępny zakres rozmiarów",
        fobPrice: "Zakres cen FOB",
        incoterms: "Dostępne Incoterms",
        payment: "Warunki płatności",
        countryOfOrigin: "Kraj pochodzenia",
        qualityStandard: "Standard jakości",
        qualityCerts: "Certyfikaty jakości",
      },
    },
    gccMarkets: {
      subtitle: "Rynki eksportowe GCC",
      title: "Przydatność dla rynków Bliskiego Wschodu",
      viewExportPage: "Strona eksportowa {country} →",
      seaFreight: "Transport morski — Indie do GCC",
      seaFreightDesc:
        "Mumbaj / JNPT do Dżabal Ali (ZEA): 18–22 dni · Dammam (Arabia Saudyjska): 20–24 dni · Doha (Katar): 20–23 dni · Szuwajch (Kuwejt): 19–22 dni · Maskat (Oman): 17–20 dni",
    },
    compliance: {
      subtitle: "Zgodność regulacyjna",
      title: "Zgodność eksportowa i normy",
      gccNote:
        "Zgodność z wymaganiami UAE ESMA, Saudi SASO i Qatar GQSM — dwujęzyczne etykiety pielęgnacyjne (arabski / angielski) dla wszystkich przesyłek na Bliski Wschód",
      cepaNote:
        "Dostępny certyfikat pochodzenia CEPA Indie–ZEA — kwalifikowane wyroby korzystają z preferencyjnych lub zerowych stawek importowych do ZEA",
    },
    sizeChart: {
      subtitle: "Tabela rozmiarów",
      title: "Standardowa tabela rozmiarów",
      headers: ["Rozmiar", "EU", "UK", "US", "Biust (cm)", "Talia (cm)", "Biodra (cm)", "Długość (cm)"],
      footnote:
        "Indywidualne stopniowanie dostępne do rozmiaru 5XL. Tabele rozmiarów dla rynków GCC i Bliskiego Wschodu dostępne na życzenie — wymiary w cm i calach.",
    },
    ordering: {
      subtitle: "Jak zamówić",
      title: "Proces zamówienia B2B",
      steps: [
        {
          step: "01",
          title: "Zapytanie i oferta cenowa",
          desc: "Prześlij brief produktowy, docelową ilość, port dostawy i wymagane certyfikaty. Odpowiemy orientacyjnymi cenami FOB w ciągu 24 godzin.",
        },
        {
          step: "02",
          title: "Zatwierdzenie próbek",
          desc: "Próbki proto lub wzorcowe wysyłane są w ciągu 12–15 dni roboczych. Kupujący ocenia i zatwierdza tkaninę, konstrukcję i etykiety przed potwierdzeniem produkcji.",
        },
        {
          step: "03",
          title: "Produkcja",
          desc: "Tkanina podstawowa kupiona, skrojona, uszyta i wykończona w naszym zakładzie o powierzchni 45 000 stóp kwadratowych. Cotygodniowe raporty przez dedykowanego opiekuna klienta.",
        },
        {
          step: "04",
          title: "Kontrola jakości — AQL 2.5 (ISO 2859-1)",
          desc: "Kontrola śródseryjna i losowa kontrola końcowa wg AQL 2.5 zgodnie z ISO 2859-1. Inspekcja przez stronę trzecią (SGS / Intertek) na życzenie na koszt kupującego.",
        },
        {
          step: "05",
          title: "Wysyłka — FOB Mumbai",
          desc: "Przygotowanie opakowania eksportowego, konosamentu, faktury handlowej, listy pakunkowej, certyfikatu pochodzenia i deklaracji zgodności. Towar przekazywany spedytorowi w porcie JNPT Mumbai.",
        },
      ],
    },
    cta: {
      subtitle: "Gotowy do zakupu?",
      title: "Zamawiaj {category} z Indii dla {markets}",
      desc: "Dedykowany opiekun dla regionu GCC. Odpowiedź w ciągu 24 godzin z cenami FOB, próbkami i harmonogramem produkcji. {fobPrice}.",
      catalogBtn: "Pobierz katalog",
      sampleBtn: "Zamów próbkę — Bliski Wschód",
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    overview: {
      subtitle: "Aperçu B2B",
      title: "Fabrication en gros",
      paragraph1:
        "Notre gamme de plus de {productCount} SKU couvre l'ensemble des besoins des acheteurs en gros — des styles de base intemporels aux nouveautés saisonnières tendance, tous fabriqués dans notre atelier certifié ISO 9001:2015 de 45 000 pieds carrés au Gujarat, en Inde.",
      paragraph2:
        "Chaque style est disponible en marque privée, OEM et ODM. La certification GOTS 6.0 et OEKO-TEX Standard 100 est maintenue sur toute la gamme ; les audits BSCI / SEDEX sont disponibles sur demande. Les quantités minimales commencent à 300 pièces par style et couleur, avec des délais de production standards de 45 à 55 jours. Le fret maritime depuis Mumbai / JNPT atteint les ports du Moyen-Orient en 17 à 22 jours.",
    },
    fabricTable: {
      subtitle: "Données techniques",
      title: "Tableau de spécifications des tissus",
      headers: ["Nom du tissu", "Composition", "GSM", "Armure", "Laize", "Rétrécissement", "Solidité des coloris", "Code SH", "Prix FOB"],
      footnote:
        "* Prix indicatifs FOB Mumbai. Le tarif définitif dépend de la complexité du modèle, du tissu choisi et de la quantité confirmée. Demandez un devis formel pour un prix contractuel.",
    },
    techSpecs: {
      subtitle: "Spécifications de commande",
      title: "Paramètres techniques de commande",
      labels: {
        moq: "Quantité minimale de commande (MOQ)",
        sampleLeadTime: "Délai de confection des échantillons",
        productionLeadTime: "Délai de production",
        sizeRange: "Gamme de tailles disponibles",
        fobPrice: "Fourchette de prix FOB",
        incoterms: "Incoterms disponibles",
        payment: "Conditions de paiement",
        countryOfOrigin: "Pays d'origine",
        qualityStandard: "Norme qualité",
        qualityCerts: "Certificats qualité",
      },
    },
    gccMarkets: {
      subtitle: "Marchés export CCG",
      title: "Marchés du Moyen-Orient",
      viewExportPage: "Page export {country} →",
      seaFreight: "Fret maritime — Inde vers CCG",
      seaFreightDesc:
        "Mumbai / JNPT vers Jebel Ali (EAU) : 18–22 jours · Dammam (Arabie saoudite) : 20–24 jours · Doha (Qatar) : 20–23 jours · Shuwaikh (Koweït) : 19–22 jours · Muscat (Oman) : 17–20 jours",
    },
    compliance: {
      subtitle: "Conformité réglementaire",
      title: "Conformité à l'export et normes",
      gccNote:
        "Conformité UAE ESMA, Saudi SASO et Qatar GQSM — étiquettes d'entretien bilingues arabe / anglais pour toutes les expéditions vers le Moyen-Orient",
      cepaNote:
        "Certificat d'origine CEPA Inde–EAU disponible — les articles éligibles bénéficient de droits d'importation préférentiels ou nuls aux EAU",
    },
    sizeChart: {
      subtitle: "Référence des tailles",
      title: "Tableau des tailles standard",
      headers: ["Taille", "EU", "UK", "US", "Poitrine (cm)", "Taille (cm)", "Hanches (cm)", "Longueur (cm)"],
      footnote:
        "Gradation sur mesure disponible jusqu'à la taille 5XL. Tableaux de tailles pour les marchés CCG et Moyen-Orient disponibles sur demande — mesures en cm et en pouces.",
    },
    ordering: {
      subtitle: "Comment commander",
      title: "Processus de commande B2B",
      steps: [
        {
          step: "01",
          title: "Demande de devis",
          desc: "Envoyez-nous votre brief produit, la quantité cible, le port de livraison et les certifications requises. Nous répondons avec une tarification FOB indicative sous 24 heures.",
        },
        {
          step: "02",
          title: "Approbation des échantillons",
          desc: "Les proto-échantillons ou contre-échantillons sont expédiés sous 12 à 15 jours ouvrés. L'acheteur examine et approuve le tissu, la construction et l'étiquetage avant le lancement de la production.",
        },
        {
          step: "03",
          title: "Production",
          desc: "Tissu en vrac approvisionné, coupé, cousu et fini dans notre atelier de 45 000 pieds carrés. Mises à jour hebdomadaires via votre chargé de compte dédié.",
        },
        {
          step: "04",
          title: "Contrôle qualité — AQL 2.5 (ISO 2859-1)",
          desc: "Inspection en cours de fabrication et contrôle final aléatoire selon la norme AQL 2.5 sous ISO 2859-1. Inspection tierce (SGS / Intertek) sur demande aux frais de l'acheteur.",
        },
        {
          step: "05",
          title: "Expédition — FOB Mumbai",
          desc: "Emballage export, connaissement, facture commerciale, liste de colisage, certificat d'origine et déclarations de conformité préparés. Marchandises remises au transitaire à JNPT Mumbai.",
        },
      ],
    },
    cta: {
      subtitle: "Prêt à sourcer ?",
      title: "Approvisionnez-vous en {category} depuis l'Inde pour {markets}",
      desc: "Équipe dédiée aux comptes CCG. Réponse sous 24 heures avec tarifs FOB, échantillons et calendrier de production. {fobPrice}.",
      catalogBtn: "Télécharger le catalogue",
      sampleBtn: "Demander un échantillon — Moyen-Orient",
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    overview: {
      subtitle: "Panoramica B2B",
      title: "Produzione all'ingrosso",
      paragraph1:
        "La nostra gamma di oltre {productCount} SKU copre l'intero spettro delle esigenze degli acquirenti all'ingrosso — dagli stili di base perennemente richiesti alle novità stagionali più attuali. Tutto prodotto nel nostro stabilimento certificato ISO 9001:2015 di 45.000 piedi quadrati nel Gujarat, India.",
      paragraph2:
        "Ogni stile è disponibile per la produzione a marchio privato, OEM e ODM. La certificazione GOTS 6.0 e OEKO-TEX Standard 100 è mantenuta su tutta la gamma; gli audit BSCI / SEDEX sono disponibili su richiesta. Il quantitativo minimo parte da 300 pezzi per stile e colore, con tempi di produzione standard di 45–55 giorni. La spedizione via mare da Mumbai / JNPT raggiunge i porti del Medio Oriente in 17–22 giorni.",
    },
    fabricTable: {
      subtitle: "Dati tecnici",
      title: "Tabella specifiche tessuti",
      headers: ["Nome tessuto", "Composizione", "GSM", "Armatura", "Altezza", "Restringimento", "Solidità al colore", "Codice HS", "Prezzo FOB"],
      footnote:
        "* I prezzi sono indicativi FOB Mumbai. Il prezzo finale dipende dalla complessità del modello, dalla scelta del tessuto e dalla quantità confermata. Richiedere un preventivo formale per un prezzo vincolante.",
    },
    techSpecs: {
      subtitle: "Specifiche ordine",
      title: "Parametri tecnici dell'ordine",
      labels: {
        moq: "Quantità minima d'ordine (MOQ)",
        sampleLeadTime: "Tempi per i campioni",
        productionLeadTime: "Tempi di produzione",
        sizeRange: "Gamma taglie disponibili",
        fobPrice: "Fascia di prezzo FOB",
        incoterms: "Incoterms disponibili",
        payment: "Condizioni di pagamento",
        countryOfOrigin: "Paese di origine",
        qualityStandard: "Standard di qualità",
        qualityCerts: "Certificati di qualità",
      },
    },
    gccMarkets: {
      subtitle: "Mercati export CCG",
      title: "Mercati del Medio Oriente",
      viewExportPage: "Pagina export {country} →",
      seaFreight: "Trasporto marittimo — India verso CCG",
      seaFreightDesc:
        "Mumbai / JNPT a Jebel Ali (EAU): 18–22 giorni · Dammam (Arabia Saudita): 20–24 giorni · Doha (Qatar): 20–23 giorni · Shuwaikh (Kuwait): 19–22 giorni · Muscat (Oman): 17–20 giorni",
    },
    compliance: {
      subtitle: "Conformità normativa",
      title: "Conformità all'export e standard",
      gccNote:
        "Conformità UAE ESMA, Saudi SASO e Qatar GQSM — etichette di manutenzione bilingui arabo / inglese per tutte le spedizioni verso il Medio Oriente",
      cepaNote:
        "Certificato di origine CEPA India–EAU disponibile — i capi qualificati beneficiano di dazi doganali preferenziali o nulli negli EAU",
    },
    sizeChart: {
      subtitle: "Riferimento taglie",
      title: "Tabella taglie standard",
      headers: ["Taglia", "EU", "UK", "US", "Petto (cm)", "Vita (cm)", "Fianchi (cm)", "Lunghezza (cm)"],
      footnote:
        "Gradazione personalizzata disponibile fino alla taglia 5XL. Tabelle taglie per i mercati CCG e Medio Oriente disponibili su richiesta — misure in cm e pollici.",
    },
    ordering: {
      subtitle: "Come ordinare",
      title: "Processo d'ordine B2B",
      steps: [
        {
          step: "01",
          title: "Richiesta preventivo",
          desc: "Inviateci il vostro brief prodotto, la quantità target, il porto di destinazione e le certificazioni richieste. Risponderemo con prezzi FOB indicativi entro 24 ore.",
        },
        {
          step: "02",
          title: "Approvazione dei campioni",
          desc: "Campioni proto o contro-campioni spediti entro 12–15 giorni lavorativi. L'acquirente esamina e approva tessuto, costruzione ed etichettatura prima della conferma di produzione.",
        },
        {
          step: "03",
          title: "Produzione",
          desc: "Tessuto acquistato, tagliato, cucito e rifinito nel nostro stabilimento di 45.000 piedi quadrati. Aggiornamenti settimanali tramite il vostro account manager dedicato.",
        },
        {
          step: "04",
          title: "Controllo qualità — AQL 2.5 (ISO 2859-1)",
          desc: "Ispezione in linea e controllo finale casuale secondo AQL 2.5 ai sensi di ISO 2859-1. Ispezione di terze parti (SGS / Intertek) organizzabile su richiesta a spese dell'acquirente.",
        },
        {
          step: "05",
          title: "Spedizione — FOB Mumbai",
          desc: "Imballaggio export, polizza di carico, fattura commerciale, lista di imballaggio, certificato di origine e dichiarazioni di conformità predisposti. Merce consegnata allo spedizioniere a JNPT Mumbai.",
        },
      ],
    },
    cta: {
      subtitle: "Pronti a ordinare?",
      title: "Acquistate {category} dall'India per {markets}",
      desc: "Team dedicato ai conti CCG. Risposta entro 24 ore con prezzi FOB, campioni e piano di produzione. {fobPrice}.",
      catalogBtn: "Scarica il catalogo",
      sampleBtn: "Richiedi campione — Medio Oriente",
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    overview: {
      subtitle: "B2B Overzicht",
      title: "Groothandelsproductie",
      paragraph1:
        "Ons assortiment van meer dan {productCount} SKU's dekt het volledige spectrum van groothandelsbehoeften — van basiscollecties tot modegerichte seizoensintr​oducties, allemaal geproduceerd in onze ISO 9001:2015-gecertificeerde fabriek van 45.000 vierkante voet in Gujarat, India.",
      paragraph2:
        "Elk model is beschikbaar voor private label-, OEM- en ODM-productie. GOTS 6.0- en OEKO-TEX Standard 100-certificering geldt voor het gehele assortiment; BSCI / SEDEX sociale compliance-audits op verzoek beschikbaar. Minimale bestelhoeveelheid vanaf 300 stuks per model per kleur, standaard doorlooptijd 45–55 dagen. Zeevracht van Mumbai / JNPT bereikt Midden-Oostenpoorten in 17–22 dagen.",
    },
    fabricTable: {
      subtitle: "Technische gegevens",
      title: "Stofspecificatietabel",
      headers: ["Stofnaam", "Samenstelling", "GSM", "Binding", "Breedte", "Krimp", "Kleurechtheid", "HS-code", "FOB-prijs"],
      footnote:
        "* Prijzen zijn indicatief FOB Mumbai. De definitieve prijs is afhankelijk van modelcomplexiteit, stofkeuze en bevestigde bestelhoeveelheid. Vraag een formele offerte aan voor bindende prijzen.",
    },
    techSpecs: {
      subtitle: "Orderspecificaties",
      title: "Technische orderparameters",
      labels: {
        moq: "Minimale bestelhoeveelheid (MOQ)",
        sampleLeadTime: "Doorlooptijd monsters",
        productionLeadTime: "Productiedoorlooptijd",
        sizeRange: "Beschikbaar maatbereik",
        fobPrice: "FOB-prijsbereik",
        incoterms: "Beschikbare Incoterms",
        payment: "Betalingsvoorwaarden",
        countryOfOrigin: "Land van herkomst",
        qualityStandard: "Kwaliteitsstandaard",
        qualityCerts: "Kwaliteitscertificaten",
      },
    },
    gccMarkets: {
      subtitle: "GCC Exportmarkten",
      title: "Midden-Oosten marktgeschiktheid",
      viewExportPage: "Exportpagina {country} →",
      seaFreight: "Zeevracht — India naar GCC",
      seaFreightDesc:
        "Mumbai / JNPT naar Jebel Ali (VAE): 18–22 dagen · Dammam (Saudi-Arabië): 20–24 dagen · Doha (Qatar): 20–23 dagen · Shuwaikh (Koeweit): 19–22 dagen · Muscat (Oman): 17–20 dagen",
    },
    compliance: {
      subtitle: "Regelgevende naleving",
      title: "Exportnaleving en standaarden",
      gccNote:
        "Naleving van UAE ESMA, Saudi SASO en Qatar GQSM — tweetalige (Arabisch / Engels) verzorgingsetiketten voor alle Midden-Oostenzendingen",
      cepaNote:
        "India–VAE CEPA-oorsprongscertificaat beschikbaar — gekwalificeerde kledingstukken genieten preferentiële of nultarieven bij invoer in de VAE",
    },
    sizeChart: {
      subtitle: "Maatindicatie",
      title: "Standaard maattabel",
      headers: ["Maat", "EU", "UK", "US", "Borst (cm)", "Taille (cm)", "Heupen (cm)", "Lengte (cm)"],
      footnote:
        "Aangepaste gradatie beschikbaar tot maat 5XL. GCC / Midden-Oosten maattabellen op verzoek beschikbaar — maten in cm en inches.",
    },
    ordering: {
      subtitle: "Hoe te bestellen",
      title: "B2B Bestelproces",
      steps: [
        {
          step: "01",
          title: "Offerte-aanvraag",
          desc: "Stuur ons uw productbrief, doelhoeveelheid, leveringshaven en vereiste certificeringen. Wij reageren met indicatieve FOB-prijzen binnen 24 uur.",
        },
        {
          step: "02",
          title: "Monstergoedkeuring",
          desc: "Proto- of tegenmonsters verzonden binnen 12–15 werkdagen. De koper beoordeelt en keurt stof, constructie en etikettering goed vóór productiebevestiging.",
        },
        {
          step: "03",
          title: "Productie",
          desc: "Bulkstof ingekocht, gesneden, genaaid en afgewerkt in onze faciliteit van 45.000 vierkante voet. Wekelijkse updates via uw toegewezen accountmanager.",
        },
        {
          step: "04",
          title: "Kwaliteitscontrole — AQL 2.5 (ISO 2859-1)",
          desc: "In-line en finale steekproefinspectie per AQL 2.5-norm onder ISO 2859-1. Inspectie door derde partij (SGS / Intertek) op verzoek voor rekening van de koper.",
        },
        {
          step: "05",
          title: "Verzending — FOB Mumbai",
          desc: "Exportverpakking, cognossement, handelsfactuur, paklijst, certificaat van oorsprong en conformiteitsverklaringen opgesteld. Goederen overhandigd aan expediteur bij JNPT Mumbai.",
        },
      ],
    },
    cta: {
      subtitle: "Klaar om te sourcen?",
      title: "Bestel {category} uit India voor {markets}",
      desc: "Toegewijd GCC-accountteam. Reactie binnen 24 uur met FOB-prijzen, monsters en productieplanning. {fobPrice}.",
      catalogBtn: "Catalogus downloaden",
      sampleBtn: "Monster aanvragen — Midden-Oosten",
    },
  },
};
