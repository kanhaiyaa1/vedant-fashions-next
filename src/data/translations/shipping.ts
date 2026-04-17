// ─────────────────────────────────────────────────────────────────────────────
// Shipping page content translations
// Languages: en · ar · ru · pl · fr · it · nl
//
// NOT translated (stays in component): SEA_ROUTES, AIR_ROUTES, EXPORT_DOCS,
//   HS_CODES, INCOTERMS term codes (FOB/CIF/DDP), port names, HS codes,
//   transit times, frequency values.
// ─────────────────────────────────────────────────────────────────────────────

export interface ShippingIncotermContent {
  full: string;       // "Free on Board — Mumbai"
  meaning: string;    // paragraph explaining the term
  freight: string;    // short freight responsibility note
  customs: string;    // short customs responsibility note
}

export interface ShippingFaqItem {
  q: string;
  a: string;
}

export interface ShippingLocale {
  hero: { subtitle: string; title: string; description: string };
  incoterms: {
    subtitle: string;
    title: string;
    items: ShippingIncotermContent[]; // [FOB, CIF, DDP]
  };
  seaFreight: {
    subtitle: string;
    title: string;
    headers: [string, string, string, string];
    footnote: string;
  };
  airFreight: {
    subtitle: string;
    title: string;
    description: string;
    footnote: string;
  };
  exportDocs: { subtitle: string; title: string };
  hsCodes: {
    subtitle: string;
    title: string;
    headers: [string, string, string];
    footnote: string;
  };
  faqs: { subtitle: string; title: string; items: ShippingFaqItem[] };
  labels: { freight: string; customs: string };
  cta: { title: string; description: string; buttonText: string };
}

export const shippingContent: Record<string, ShippingLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Shipping & Logistics",
      title: "Shipping & Export from India to Middle East, Russia & Global",
      description:
        "FOB Mumbai sea freight to GCC ports in 17–24 days. Full export documentation including CEPA, GOTS certificates, and GCC compliance declarations. FOB, CIF, and DDP Incoterms available.",
    },
    incoterms: {
      subtitle: "Trade Terms",
      title: "Incoterms Explained",
      items: [
        {
          full: "Free on Board — Mumbai",
          meaning:
            "Vedant delivers goods to Nhava Sheva (JNPT) Mumbai. Risk and title transfer to the buyer at the ship's rail. Buyer arranges and pays ocean freight, insurance, and destination customs.",
          freight: "Buyer arranges and pays",
          customs: "Buyer handles destination customs",
        },
        {
          full: "Cost, Insurance & Freight",
          meaning:
            "Vedant pays ocean freight and minimum cargo insurance to the named destination port. Risk transfers at ship's rail in Mumbai — buyer is responsible once goods are afloat.",
          freight: "Vedant pays to destination port",
          customs: "Buyer handles destination customs",
        },
        {
          full: "Delivered Duty Paid",
          meaning:
            "Vedant handles everything including import duties, VAT, and customs clearance at destination. Goods are delivered to buyer's named warehouse. Maximum convenience for buyers without import infrastructure.",
          freight: "Vedant pays all freight",
          customs: "Vedant handles import duties & customs",
        },
      ],
    },
    seaFreight: {
      subtitle: "Sea Freight",
      title: "Transit Times from Mumbai (JNPT)",
      headers: ["Country", "Destination Port", "Transit Time", "Frequency"],
      footnote:
        "All transit times are indicative from JNPT Mumbai. Vessel schedules subject to carrier availability and port congestion. Production lead time (45–55 days) is in addition to the above transit times.",
    },
    airFreight: {
      subtitle: "Air Freight",
      title: "Express Delivery by Air",
      description:
        "Air freight is recommended for orders under 500 kg — typically sample sets, urgent replenishment, or high-value garment categories where speed outweighs cost. We ship from Ahmedabad (AMD) or Mumbai (BOM) to all major GCC and European hubs.",
      footnote:
        "Air freight pricing provided on request alongside sea freight quotation. Airway bill, commercial invoice, and certificate of origin included with all air shipments.",
    },
    exportDocs: {
      subtitle: "Export Documentation",
      title: "Documents Provided with Every Shipment",
    },
    hsCodes: {
      subtitle: "Classification",
      title: "HS Codes for Our Product Categories",
      headers: ["Product Category", "HS Code", "Description"],
      footnote:
        "HS codes are provided for guidance. Buyers should confirm classification with their customs broker as final tariff determination rests with the importing country's customs authority.",
    },
    faqs: {
      subtitle: "Common Questions",
      title: "Shipping & Logistics FAQ",
      items: [
        {
          q: "What incoterm is most common for UAE and GCC buyers?",
          a: "FOB Mumbai is the most common incoterm for experienced GCC importers who have their own freight forwarders or use established shipping agents in the region. Many UAE and Saudi buyers have preferred freight rates via their own forwarders, making FOB the most cost-effective option. CIF is available for buyers who prefer Vedant to arrange ocean freight — particularly for first orders where buyers want a single landed cost. DDP is available for buyers in markets with complex customs requirements.",
        },
        {
          q: "Can you consolidate multiple styles into one container?",
          a: "Yes. We regularly consolidate multi-style, multi-category orders into a single FCL (Full Container Load) or LCL (Less than Container Load) shipment. A standard 20ft container holds approximately 5,000–7,000 garments depending on category mix. For orders of 2,000 pieces or fewer, we use LCL consolidation via our freight forwarders at JNPT Mumbai. All styles within a consolidated shipment share a single Bill of Lading and set of shipping documents.",
        },
        {
          q: "What is the India-UAE CEPA and how does it reduce import duty?",
          a: "The India-UAE Comprehensive Economic Partnership Agreement (CEPA), in force since May 2022, grants preferential (zero or reduced) import duty on qualifying India-origin garments entering the UAE. Garments meeting the Rules of Origin criteria (substantial transformation in India — which our fully manufactured garments satisfy) qualify for 0% import duty under CEPA versus the standard 5% GCC common external tariff. We issue a CEPA Certificate of Origin per shipment, issued by authorised Indian export bodies. This is a significant cost saving for UAE wholesale buyers purchasing regularly.",
        },
        {
          q: "Do you handle customs clearance at the destination?",
          a: "Under FOB and CIF terms, the buyer is responsible for import customs clearance at the destination port. We provide all required documentation — commercial invoice, packing list, bill of lading, certificate of origin, and compliance certificates — in advance of vessel arrival to enable smooth clearance. Under DDP terms, we manage full customs clearance including payment of import duties and VAT through our logistics partners. We can recommend established customs agents in Jebel Ali, Dammam, Doha, and St. Petersburg for buyers operating under FOB who need local clearance support.",
        },
        {
          q: "What packaging do you use for export shipments?",
          a: "Individual garments are folded and poly-bagged (biodegradable bags available on request). Bags are packed into export cartons — typically 12 pieces per carton for dresses and blouses, 12–24 pieces for shirts. Cartons are double-walled export grade, strapped, and palletised for FCL shipments. Each carton carries a label with style number, colour, size ratio, PO number, carton number, gross/net weight, and country of origin. Inner packs (sets per size or per colour) are available for retail-ready orders. Recycled paper stuffing and plastic-free packaging options are available for sustainability-focused buyers.",
        },
        {
          q: "Can you ship to Russian ports given current sanctions?",
          a: "Yes, subject to applicable compliance checks. Russia is not under a blanket embargo for Indian textile exports. We export ladies woven wear to Russia via St. Petersburg and Novorossiysk under standard trade terms, with EAC / TR CU 017/2011 compliance documentation. All shipments are reviewed against current EU, US, and UN sanctions lists — Vedant does not ship to sanctioned entities or individuals. Payment must be via compliant banking channels (SWIFT remains available for many Russian correspondent banks for non-sanctioned trade). We recommend buyers confirm their import bank's SWIFT status before placing orders. Transit via third countries (Turkey, UAE re-export) is also available.",
        },
      ],
    },
    labels: { freight: "Freight:", customs: "Customs:" },
    cta: {
      title: "Get a Freight Quote",
      description:
        "Send your order size, destination port, and preferred incoterm. We respond with a full shipping quotation within 24 hours.",
      buttonText: "Get a Freight Quote",
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "الشحن واللوجستيات",
      title: "الشحن والتصدير من الهند إلى الشرق الأوسط وروسيا والعالم",
      description:
        "شحن بحري FOB من مومباي إلى موانئ دول مجلس التعاون الخليجي في 17–24 يوماً. وثائق تصدير كاملة تشمل شهادات CEPA وGOTS وإقرارات الامتثال الخليجي. شروط FOB وCIF وDDP متاحة.",
    },
    incoterms: {
      subtitle: "شروط التجارة",
      title: "شرح الإنكوتيرمز",
      items: [
        {
          full: "تسليم ظهر السفينة — مومباي",
          meaning:
            "تسلّم فيدانت البضاعة في ميناء نهافا شيفا (JNPT) مومباي. تنتقل المخاطر وملكية البضاعة إلى المشتري عند حافة السفينة. يتولى المشتري ترتيب دفع الشحن البحري والتأمين وجمارك الوجهة.",
          freight: "المشتري يرتب ويدفع",
          customs: "المشتري يتولى جمارك الوجهة",
        },
        {
          full: "التكلفة والتأمين والشحن",
          meaning:
            "تدفع فيدانت تكلفة الشحن البحري والتأمين الأدنى على البضائع حتى ميناء الوجهة المسمّى. تنتقل المخاطر عند حافة السفينة في مومباي — يتحمل المشتري المسؤولية بمجرد إبحار البضائع.",
          freight: "فيدانت تدفع حتى ميناء الوجهة",
          customs: "المشتري يتولى جمارك الوجهة",
        },
        {
          full: "التسليم مدفوعة الرسوم",
          meaning:
            "تتولى فيدانت كل شيء بما يشمل رسوم الاستيراد وضريبة القيمة المضافة وإجراءات التخليص الجمركي في الوجهة. تُسلَّم البضاعة إلى مستودع المشتري المحدد. أقصى درجات الراحة للمشترين الذين لا يمتلكون بنية تحتية استيرادية.",
          freight: "فيدانت تدفع كامل الشحن",
          customs: "فيدانت تتولى رسوم الاستيراد والجمارك",
        },
      ],
    },
    seaFreight: {
      subtitle: "الشحن البحري",
      title: "أوقات العبور من مومباي (JNPT)",
      headers: ["الدولة", "ميناء الوجهة", "وقت العبور", "التكرار"],
      footnote:
        "جميع أوقات العبور تقريبية من JNPT مومباي. جداول الملاحة تخضع لتوافر الناقل وازدحام الميناء. مهلة الإنتاج (45–55 يوماً) تُضاف إلى أوقات العبور أعلاه.",
    },
    airFreight: {
      subtitle: "الشحن الجوي",
      title: "التسليم السريع جواً",
      description:
        "يُوصى بالشحن الجوي للطلبيات التي تقل عن 500 كغ — عادةً مجموعات العينات أو التجديد العاجل أو فئات الملابس عالية القيمة حيث تتفوق السرعة على التكلفة. نشحن من أحمد آباد (AMD) أو مومباي (BOM) إلى جميع مراكز دول مجلس التعاون الخليجي وأوروبا الكبرى.",
      footnote:
        "يُقدَّم سعر الشحن الجوي عند الطلب جنباً إلى جنب مع عرض أسعار الشحن البحري. يشمل كل شحنة جوية بوليصة الشحن الجوي والفاتورة التجارية وشهادة المنشأ.",
    },
    exportDocs: {
      subtitle: "وثائق التصدير",
      title: "المستندات المرفقة مع كل شحنة",
    },
    hsCodes: {
      subtitle: "التصنيف",
      title: "رموز HS لفئات منتجاتنا",
      headers: ["فئة المنتج", "رمز HS", "الوصف"],
      footnote:
        "رموز HS مقدمة للإرشاد. يجب على المشترين التأكد من التصنيف مع وكيل الجمارك الخاص بهم، إذ يعود التحديد النهائي للتعرفة إلى سلطة الجمارك في بلد الاستيراد.",
    },
    faqs: {
      subtitle: "الأسئلة الشائعة",
      title: "أسئلة الشحن واللوجستيات",
      items: [
        {
          q: "ما هو أكثر شرط إنكوتيرمز شيوعاً لمشتري الإمارات ودول مجلس التعاون؟",
          a: "FOB مومباي هو الشرط الأكثر شيوعاً للمستوردين ذوي الخبرة في دول مجلس التعاون الذين لديهم وكلاء شحن خاصون أو يستخدمون وكلاء شحن راسخين في المنطقة. كثير من مشتري الإمارات والسعودية لديهم أسعار شحن تفضيلية عبر وكلائهم، مما يجعل FOB الخيار الأوفر. يتاح CIF للمشترين الراغبين في أن تتولى فيدانت الشحن البحري، لا سيما للطلبيات الأولى التي يرغب المشترون في معرفة تكلفة واحدة مستلمة. يتوفر DDP للمشترين في الأسواق ذات متطلبات جمركية معقدة.",
        },
        {
          q: "هل يمكنكم توحيد أنماط متعددة في حاوية واحدة؟",
          a: "نعم. نُوحِّد بانتظام طلبيات متعددة الأنماط والفئات في شحنة FCL أو LCL واحدة. تسع الحاوية القياسية 20 قدماً ما بين 5,000 و7,000 ملبوس تقريباً حسب مزيج الفئات. للطلبيات التي لا تتجاوز 2,000 قطعة، نستخدم توحيد LCL عبر وكلاء الشحن في JNPT مومباي. تشترك جميع الأنماط في الشحنة الموحدة في بوليصة شحن واحدة ومجموعة وثائق شحن موحدة.",
        },
        {
          q: "ما هي اتفاقية CEPA بين الهند والإمارات وكيف تُخفض رسوم الاستيراد؟",
          a: "اتفاقية الشراكة الاقتصادية الشاملة بين الهند والإمارات (CEPA)، السارية منذ مايو 2022، تمنح رسوماً استيرادية تفضيلية (صفر أو مخفضة) على الملابس ذات المنشأ الهندي المؤهلة الداخلة إلى الإمارات. الملابس المستوفية لمعايير قواعد المنشأ (التحويل الجوهري في الهند، وهو ما تستوفيه ملابسنا المصنوعة بالكامل) تؤهل للحصول على رسوم استيراد بنسبة 0% بموجب CEPA مقارنةً بالتعرفة الجمركية الخارجية المشتركة البالغة 5%. نُصدر شهادة منشأ CEPA لكل شحنة، وتصدرها هيئات التصدير الهندية المعتمدة. هذا وفر كبير في التكاليف لمشتري الجملة الإماراتيين الذين يتعاملون معنا بانتظام.",
        },
        {
          q: "هل تتولون التخليص الجمركي في الوجهة؟",
          a: "بموجب شروط FOB وCIF، يتحمل المشتري مسؤولية التخليص الجمركي للاستيراد في ميناء الوجهة. نُقدِّم جميع الوثائق المطلوبة — الفاتورة التجارية وقائمة التعبئة وبوليصة الشحن وشهادة المنشأ وشهادات الامتثال — قبل وصول السفينة لتيسير التخليص. بموجب شروط DDP، نتولى التخليص الجمركي الكامل بما يشمل سداد رسوم الاستيراد وضريبة القيمة المضافة عبر شركاء اللوجستيات. يمكننا التوصية بوكلاء جمارك راسخين في جبل علي والدمام والدوحة وسانت بطرسبرغ للمشترين العاملين في ظل شروط FOB الذين يحتاجون إلى دعم التخليص المحلي.",
        },
        {
          q: "ما هو نوع التغليف المستخدم للشحنات التصديرية؟",
          a: "تُطوى الملابس الفردية وتُوضع في أكياس بولي (متوفرة أكياس قابلة للتحلل عند الطلب). تُعبأ الأكياس في كراتين تصديرية — عادةً 12 قطعة لكل كرتون للفساتين والبلوزات، و12–24 قطعة للقمصان. الكراتين ذات جدار مزدوج ودرجة تصديرية ومربوطة ومُرصوفة على بالطات لشحنات FCL. يحمل كل كرتون ملصقاً يتضمن رقم الموديل واللون ونسبة المقاسات ورقم أمر الشراء ورقم الكرتون والوزن الإجمالي/الصافي وبلد المنشأ. التغليف الداخلي (مجموعات حسب المقاس أو اللون) متاح للطلبيات الجاهزة للبيع بالتجزئة. تغليف بلا بلاستيك وحشو ورق معاد التدوير متاح للمشترين المهتمين بالاستدامة.",
        },
        {
          q: "هل يمكنكم الشحن إلى الموانئ الروسية في ظل العقوبات الحالية؟",
          a: "نعم، مع مراعاة إجراءات الامتثال المعمول بها. روسيا ليست خاضعة لحظر شامل على الصادرات النسيجية الهندية. نُصدِّر ملابس نسائية منسوجة إلى روسيا عبر سانت بطرسبرغ ونوفوروسيسك وفق شروط التجارة المعيارية مع وثائق الامتثال EAC / TR CU 017/2011. تُراجَع جميع الشحنات مقابل قوائم العقوبات الأوروبية والأمريكية والأممية الحالية — لا تشحن فيدانت إلى كيانات أو أفراد خاضعين للعقوبات. يجب أن تتم المدفوعات عبر قنوات مصرفية متوافقة (لا يزال SWIFT متاحاً للعديد من البنوك الروسية المراسلة في التجارة غير الخاضعة للعقوبات). نوصي المشترين بتأكيد حالة SWIFT لبنك الاستيراد الخاص بهم قبل تقديم الطلبيات. العبور عبر دول ثالثة (تركيا، إعادة التصدير من الإمارات) متاح أيضاً.",
        },
      ],
    },
    labels: { freight: "الشحن:", customs: "الجمارك:" },
    cta: {
      title: "احصل على عرض سعر شحن",
      description:
        "أرسل حجم طلبيتك وميناء الوجهة وشرط الإنكوتيرمز المفضل. نرد بعرض سعر شحن كامل خلال 24 ساعة.",
      buttonText: "طلب عرض سعر شحن",
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Доставка и логистика",
      title: "Доставка и экспорт из Индии на Ближний Восток, в Россию и по всему миру",
      description:
        "Морской фрахт FOB из Мумбаи до портов GCC за 17–24 дня. Полный комплект экспортных документов включая CEPA, сертификаты GOTS и декларации соответствия GCC. Доступны условия FOB, CIF и DDP.",
    },
    incoterms: {
      subtitle: "Торговые условия",
      title: "Инкотермс — разъяснение",
      items: [
        {
          full: "Франко борт — Мумбаи",
          meaning:
            "Vedant доставляет товар в порт Нхава-Шева (JNPT) Мумбаи. Риски и право собственности переходят к покупателю у борта судна. Покупатель организует и оплачивает морской фрахт, страхование и таможенное оформление в порту назначения.",
          freight: "Покупатель организует и оплачивает",
          customs: "Покупатель оформляет таможню в порту назначения",
        },
        {
          full: "Стоимость, страхование и фрахт",
          meaning:
            "Vedant оплачивает морской фрахт и минимальное страхование груза до указанного порта назначения. Риски переходят у борта судна в Мумбаи — покупатель несёт ответственность с момента погрузки товара на судно.",
          freight: "Vedant оплачивает до порта назначения",
          customs: "Покупатель оформляет таможню в порту назначения",
        },
        {
          full: "Поставка с оплатой пошлин",
          meaning:
            "Vedant берёт на себя всё, включая импортные пошлины, НДС и таможенное оформление в пункте назначения. Товар доставляется на склад покупателя. Максимальное удобство для покупателей, не имеющих собственной импортной инфраструктуры.",
          freight: "Vedant оплачивает весь фрахт",
          customs: "Vedant оплачивает пошлины и оформляет таможню",
        },
      ],
    },
    seaFreight: {
      subtitle: "Морской фрахт",
      title: "Сроки транзита из Мумбаи (JNPT)",
      headers: ["Страна", "Порт назначения", "Срок транзита", "Частота"],
      footnote:
        "Все сроки транзита являются ориентировочными из JNPT Мумбаи. Расписание судов зависит от наличия перевозчиков и загруженности портов. Производственное время (45–55 дней) добавляется к указанным срокам транзита.",
    },
    airFreight: {
      subtitle: "Авиадоставка",
      title: "Экспресс-доставка воздушным транспортом",
      description:
        "Авиадоставка рекомендуется для заказов весом менее 500 кг — как правило, наборы образцов, срочное пополнение запасов или категории дорогостоящих изделий, где скорость важнее стоимости. Отправки выполняются из Ахмедабада (AMD) или Мумбаи (BOM) во все крупные хабы GCC и Европы.",
      footnote:
        "Стоимость авиадоставки предоставляется по запросу вместе с коммерческим предложением по морскому фрахту. К каждой авиаотправке прилагаются авианакладная, коммерческий инвойс и сертификат происхождения.",
    },
    exportDocs: {
      subtitle: "Экспортная документация",
      title: "Документы, прилагаемые к каждой отгрузке",
    },
    hsCodes: {
      subtitle: "Классификация",
      title: "Коды HS для нашей продукции",
      headers: ["Категория продукции", "Код HS", "Описание"],
      footnote:
        "Коды HS приводятся в справочных целях. Покупателям рекомендуется уточнять классификацию у своего таможенного брокера, поскольку окончательное определение тарифа остаётся за таможенными органами страны-импортёра.",
    },
    faqs: {
      subtitle: "Частые вопросы",
      title: "FAQ по доставке и логистике",
      items: [
        {
          q: "Какой инкотермс наиболее распространён среди покупателей из ОАЭ и GCC?",
          a: "FOB Мумбаи — наиболее распространённое условие для опытных импортёров GCC, имеющих собственных экспедиторов или пользующихся услугами проверенных агентов в регионе. Многие покупатели из ОАЭ и Саудовской Аравии пользуются льготными ставками фрахта через своих экспедиторов, что делает FOB наиболее экономически выгодным вариантом. CIF доступен для покупателей, которые предпочитают, чтобы Vedant организовывала морской фрахт, — особенно для первых заказов, где покупатели хотят получить единую итоговую цену с доставкой. DDP предоставляется для рынков со сложными таможенными требованиями.",
        },
        {
          q: "Возможна ли консолидация нескольких артикулов в одном контейнере?",
          a: "Да. Мы регулярно консолидируем заказы нескольких артикулов разных категорий в одну отгрузку FCL (полный контейнер) или LCL (сборный груз). Стандартный 20-футовый контейнер вмещает приблизительно 5 000–7 000 изделий в зависимости от ассортимента. Для заказов до 2 000 единиц используется консолидация LCL через наших экспедиторов в JNPT Мумбаи. Все артикулы в рамках консолидированной отгрузки объединяются в один коносамент и единый комплект товаросопроводительных документов.",
        },
        {
          q: "Что такое CEPA между Индией и ОАЭ и как это соглашение снижает импортные пошлины?",
          a: "Всеобъемлющее соглашение об экономическом партнёрстве между Индией и ОАЭ (CEPA), действующее с мая 2022 года, предоставляет преференциальные (нулевые или сниженные) импортные пошлины на соответствующую одежду индийского производства, ввозимую в ОАЭ. Одежда, соответствующая правилам происхождения (существенная переработка в Индии, которой удовлетворяет наша полностью произведённая продукция), имеет право на 0% импортной пошлины по CEPA в сравнении со стандартными 5% общего внешнего тарифа GCC. К каждой отгрузке мы оформляем сертификат происхождения CEPA через уполномоченные индийские экспортные организации. Это существенная экономия для оптовых покупателей из ОАЭ, осуществляющих регулярные закупки.",
        },
        {
          q: "Занимаетесь ли вы таможенным оформлением в пункте назначения?",
          a: "По условиям FOB и CIF таможенное оформление импорта в порту назначения лежит на покупателе. Мы предоставляем все необходимые документы — коммерческий инвойс, упаковочный лист, коносамент, сертификат происхождения и сертификаты соответствия — заблаговременно до прихода судна для беспрепятственного оформления. По условиям DDP мы полностью управляем таможенным оформлением, включая уплату импортных пошлин и НДС, через наших логистических партнёров. Для покупателей, работающих на условиях FOB и нуждающихся в местной поддержке при оформлении, мы можем рекомендовать надёжных таможенных агентов в Джебель-Али, Даммаме, Дохе и Санкт-Петербурге.",
        },
        {
          q: "Какую упаковку вы используете для экспортных отправок?",
          a: "Каждое изделие складывается и упаковывается в полиэтиленовый пакет (биоразлагаемые пакеты доступны по запросу). Пакеты укладываются в экспортные короба — как правило, 12 единиц на короб для платьев и блуз, 12–24 единицы для рубашек. Короба двустенные экспортного класса, перетянутые лентой и паллетированные для FCL-отправок. На каждом коробе — этикетка с номером модели, цветом, размерным соотношением, номером PO, номером короба, брутто/нетто-весом и страной происхождения. Внутренние упаковки (наборы по размеру или цвету) доступны для заказов ритейл-реди. Для покупателей, ориентированных на устойчивое потребление, доступны экологичная бумажная набивка и упаковка без пластика.",
        },
        {
          q: "Возможна ли доставка в российские порты с учётом текущих санкций?",
          a: "Да, при соблюдении применимых требований комплаенса. На индийский текстильный экспорт в Россию не введено полного эмбарго. Мы экспортируем женскую тканую одежду в Россию через Санкт-Петербург и Новороссийск на стандартных торговых условиях с документацией соответствия EAC / TR CU 017/2011. Все отгрузки проверяются по актуальным санкционным спискам ЕС, США и ООН — Vedant не отгружает товары санкционированным субъектам и физическим лицам. Расчёты должны проводиться через соответствующие банковские каналы (SWIFT по-прежнему доступен для многих российских банков-корреспондентов для несанкционированной торговли). Рекомендуем покупателям уточнить статус SWIFT их импортного банка до размещения заказов. Также доступен транзит через третьи страны (Турция, реэкспорт через ОАЭ).",
        },
      ],
    },
    labels: { freight: "Фрахт:", customs: "Таможня:" },
    cta: {
      title: "Запросить расчёт фрахта",
      description:
        "Сообщите объём заказа, порт назначения и предпочтительный инкотермс. Мы ответим полным коммерческим предложением по доставке в течение 24 часов.",
      buttonText: "Запросить расчёт фрахта",
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Wysyłka i logistyka",
      title: "Wysyłka i eksport z Indii na Bliski Wschód, do Rosji i na cały świat",
      description:
        "Morski transport FOB z Mumbaju do portów GCC w 17–24 dni. Pełna dokumentacja eksportowa, w tym certyfikaty CEPA i GOTS oraz deklaracje zgodności GCC. Dostępne warunki FOB, CIF i DDP.",
    },
    incoterms: {
      subtitle: "Warunki handlu",
      title: "Objaśnienie Incoterms",
      items: [
        {
          full: "Franco statek — Mumbaj",
          meaning:
            "Vedant dostarcza towar do Nhava Sheva (JNPT) w Mumbaju. Ryzyko i tytuł własności przechodzą na kupującego przy burcie statku. Kupujący organizuje i opłaca fracht morski, ubezpieczenie i cło w porcie docelowym.",
          freight: "Kupujący organizuje i opłaca",
          customs: "Kupujący obsługuje cło w miejscu przeznaczenia",
        },
        {
          full: "Koszt, ubezpieczenie i fracht",
          meaning:
            "Vedant opłaca fracht morski i minimalne ubezpieczenie ładunku do wskazanego portu docelowego. Ryzyko przechodzi przy burcie statku w Mumbaju — kupujący odpowiada od momentu załadowania towaru na statek.",
          freight: "Vedant płaci do portu docelowego",
          customs: "Kupujący obsługuje cło w miejscu przeznaczenia",
        },
        {
          full: "Dostawa z cłem opłaconym",
          meaning:
            "Vedant zajmuje się wszystkim, w tym cłem importowym, VAT i odprawą celną w miejscu przeznaczenia. Towar jest dostarczany do wskazanego magazynu kupującego. Maksymalna wygoda dla kupujących nieposiadających własnej infrastruktury importowej.",
          freight: "Vedant pokrywa cały fracht",
          customs: "Vedant obsługuje cło i opłaty importowe",
        },
      ],
    },
    seaFreight: {
      subtitle: "Transport morski",
      title: "Czasy tranzytu z Mumbaju (JNPT)",
      headers: ["Kraj", "Port docelowy", "Czas tranzytu", "Częstotliwość"],
      footnote:
        "Wszystkie czasy tranzytu są orientacyjne z JNPT Mumbaj. Harmonogramy statków zależą od dostępności przewoźnika i zatorów w portach. Czas realizacji produkcji (45–55 dni) jest doliczany do powyższych czasów tranzytu.",
    },
    airFreight: {
      subtitle: "Transport lotniczy",
      title: "Ekspresowa dostawa lotnicza",
      description:
        "Transport lotniczy jest zalecany dla zamówień poniżej 500 kg — zazwyczaj zestawy wzorców, pilne uzupełnienia lub kategorie odzieży o wysokiej wartości, gdzie szybkość jest ważniejsza od kosztu. Wysyłamy z Ahmedabadu (AMD) lub Mumbaju (BOM) do wszystkich głównych hubów GCC i Europy.",
      footnote:
        "Ceny frachtu lotniczego są podawane na życzenie wraz z ofertą frachtu morskiego. Do każdej przesyłki lotniczej dołączany jest list lotniczy, faktura handlowa i certyfikat pochodzenia.",
    },
    exportDocs: {
      subtitle: "Dokumentacja eksportowa",
      title: "Dokumenty dołączane do każdej przesyłki",
    },
    hsCodes: {
      subtitle: "Klasyfikacja",
      title: "Kody HS dla naszych kategorii produktów",
      headers: ["Kategoria produktu", "Kod HS", "Opis"],
      footnote:
        "Kody HS służą wyłącznie jako wskazówka. Kupujący powinni potwierdzić klasyfikację u swojego agenta celnego, ponieważ ostateczne ustalenie stawki taryfowej należy do urzędu celnego kraju importującego.",
    },
    faqs: {
      subtitle: "Najczęstsze pytania",
      title: "FAQ dotyczące wysyłki i logistyki",
      items: [
        {
          q: "Który Incoterm jest najczęściej stosowany przez kupujących z ZEA i GCC?",
          a: "FOB Mumbaj jest najczęściej stosowanym Incotermem przez doświadczonych importerów GCC, którzy mają własnych spedytorów lub korzystają z usług znanych agentów w regionie. Wielu kupujących z ZEA i Arabii Saudyjskiej ma preferencyjne stawki frachtowe u własnych spedytorów, co sprawia, że FOB jest najbardziej opłacalną opcją. CIF jest dostępny dla kupujących, którzy wolą, aby Vedant organizowała fracht morski — zwłaszcza przy pierwszych zamówieniach, gdzie kupujący chcą jednej ceny loco. DDP jest dostępny dla kupujących na rynkach o złożonych wymaganiach celnych.",
        },
        {
          q: "Czy można skonsolidować wiele stylów w jednym kontenerze?",
          a: "Tak. Regularnie konsolidujemy zamówienia wielostylowe i wielokategorialne w jedną przesyłkę FCL (pełny kontener) lub LCL (mniej niż pełny kontener). Standardowy kontener 20-stopowy mieści ok. 5 000–7 000 garniturów w zależności od asortymentu. Dla zamówień do 2 000 sztuk korzystamy z konsolidacji LCL przez naszych spedytorów w JNPT Mumbaj. Wszystkie style w skonsolidowanej przesyłce są objęte jednym konosamentem i jednym kompletem dokumentów wysyłkowych.",
        },
        {
          q: "Czym jest CEPA Indie–ZEA i jak obniża cła importowe?",
          a: "Kompleksowe Partnerstwo Gospodarcze między Indiami a ZEA (CEPA), obowiązujące od maja 2022 r., przyznaje preferencyjne (zerowe lub obniżone) cła importowe na kwalifikowaną odzież pochodzenia indyjskiego wchodzącą do ZEA. Odzież spełniająca kryteria reguł pochodzenia (zasadnicze przetworzenie w Indiach — co spełnia nasza w pełni wyprodukowana odzież) kwalifikuje się do 0% cła importowego na mocy CEPA w porównaniu ze standardową 5% wspólną taryfą zewnętrzną GCC. Wystawiamy certyfikat pochodzenia CEPA na każdą przesyłkę, wydany przez upoważnione indyjskie organy eksportowe. Jest to znaczna oszczędność kosztów dla hurtowych kupujących ze ZEA dokonujących regularnych zakupów.",
        },
        {
          q: "Czy zajmujecie się odprawą celną w miejscu przeznaczenia?",
          a: "Na warunkach FOB i CIF kupujący odpowiada za import celny w porcie docelowym. Dostarczamy wszystkie wymagane dokumenty — fakturę handlową, listę pakowania, konosament, certyfikat pochodzenia i certyfikaty zgodności — przed przybyciem statku, aby umożliwić sprawną odprawę. Na warunkach DDP zarządzamy pełną odprawą celną łącznie z opłatą cła importowego i VAT za pośrednictwem naszych partnerów logistycznych. Dla kupujących działających na warunkach FOB, którzy potrzebują wsparcia w miejscowej odprawie, możemy polecić sprawdzonych agentów celnych w Jebel Ali, Dammamie, Doha i St. Petersburgu.",
        },
        {
          q: "Jakie opakowania stosujecie do przesyłek eksportowych?",
          a: "Poszczególne wyroby są składane i pakowane w woreczki foliowe (woreczki biodegradowalne dostępne na życzenie). Woreczki są pakowane w kartony eksportowe — zazwyczaj 12 sztuk na karton dla sukienek i bluzek, 12–24 sztuk dla koszul. Kartony są dwuścienne w klasie eksportowej, taśmowane i paletowane dla przesyłek FCL. Każdy karton zawiera etykietę z numerem stylu, kolorem, proporcją rozmiarów, numerem PO, numerem kartonu, wagą brutto/netto i krajem pochodzenia. Opakowania wewnętrzne (zestawy według rozmiaru lub koloru) są dostępne dla zamówień gotowych do sprzedaży detalicznej. Dla kupujących skupionych na zrównoważonym rozwoju dostępne są wypełnienie z papieru makulaturowego i opakowania wolne od plastiku.",
        },
        {
          q: "Czy możliwa jest wysyłka do rosyjskich portów przy obecnych sankcjach?",
          a: "Tak, z zastrzeżeniem stosownych kontroli compliance. Na indyjski eksport tekstylny do Rosji nie wprowadzono powszechnego embarga. Eksportujemy damską odzież tkaną do Rosji przez St. Petersburg i Noworossyjsk na standardowych warunkach handlowych z dokumentacją zgodności EAC / TR CU 017/2011. Wszystkie przesyłki są sprawdzane pod kątem aktualnych list sankcyjnych UE, USA i ONZ — Vedant nie wysyła do podmiotów ani osób objętych sankcjami. Płatności muszą przebiegać przez zgodne kanały bankowe (SWIFT jest nadal dostępny dla wielu rosyjskich banków korespondentów w handlu nieobjętym sankcjami). Zalecamy kupującym potwierdzenie statusu SWIFT ich banku importowego przed złożeniem zamówień. Dostępny jest również tranzyt przez kraje trzecie (Turcja, reeksport przez ZEA).",
        },
      ],
    },
    labels: { freight: "Fracht:", customs: "Cło:" },
    cta: {
      title: "Uzyskaj wycenę frachtu",
      description:
        "Podaj wielkość zamówienia, port docelowy i preferowany Incoterm. Odpiszemy pełną ofertą wysyłkową w ciągu 24 godzin.",
      buttonText: "Uzyskaj wycenę frachtu",
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Expédition et logistique",
      title: "Expédition et export d'Inde vers le Moyen-Orient, la Russie et le monde",
      description:
        "Fret maritime FOB depuis Mumbai vers les ports GCC en 17–24 jours. Documentation d'export complète incluant certificats CEPA, GOTS et déclarations de conformité GCC. Incoterms FOB, CIF et DDP disponibles.",
    },
    incoterms: {
      subtitle: "Conditions commerciales",
      title: "Les Incoterms expliqués",
      items: [
        {
          full: "Franco à bord — Mumbai",
          meaning:
            "Vedant livre la marchandise à Nhava Sheva (JNPT) Mumbai. Les risques et la propriété sont transférés à l'acheteur au bord du navire. L'acheteur organise et paie le fret maritime, l'assurance et les douanes à destination.",
          freight: "L'acheteur organise et paie",
          customs: "L'acheteur gère les douanes à destination",
        },
        {
          full: "Coût, assurance et fret",
          meaning:
            "Vedant paie le fret maritime et l'assurance minimum sur les marchandises jusqu'au port de destination désigné. Les risques sont transférés au bord du navire à Mumbai — l'acheteur est responsable une fois les marchandises à flot.",
          freight: "Vedant paie jusqu'au port de destination",
          customs: "L'acheteur gère les douanes à destination",
        },
        {
          full: "Rendu droits acquittés",
          meaning:
            "Vedant prend tout en charge, y compris les droits d'importation, la TVA et le dédouanement à destination. Les marchandises sont livrées à l'entrepôt désigné de l'acheteur. Confort maximum pour les acheteurs sans infrastructure d'importation.",
          freight: "Vedant paie tout le fret",
          customs: "Vedant gère les droits d'importation et la douane",
        },
      ],
    },
    seaFreight: {
      subtitle: "Fret maritime",
      title: "Délais de transit depuis Mumbai (JNPT)",
      headers: ["Pays", "Port de destination", "Délai de transit", "Fréquence"],
      footnote:
        "Tous les délais de transit sont indicatifs depuis JNPT Mumbai. Les horaires des navires sont soumis à la disponibilité des transporteurs et à la congestion portuaire. Le délai de production (45–55 jours) s'ajoute aux délais de transit ci-dessus.",
    },
    airFreight: {
      subtitle: "Fret aérien",
      title: "Livraison express par avion",
      description:
        "Le fret aérien est recommandé pour les commandes inférieures à 500 kg — généralement des ensembles d'échantillons, des réassortiments urgents ou des catégories de vêtements à forte valeur où la rapidité prime sur le coût. Nous expédions depuis Ahmedabad (AMD) ou Mumbai (BOM) vers tous les grands hubs GCC et européens.",
      footnote:
        "Le prix du fret aérien est fourni sur demande avec le devis du fret maritime. Lettre de transport aérien, facture commerciale et certificat d'origine inclus dans toutes les expéditions aériennes.",
    },
    exportDocs: {
      subtitle: "Documentation d'export",
      title: "Documents fournis avec chaque expédition",
    },
    hsCodes: {
      subtitle: "Classification",
      title: "Codes SH pour nos catégories de produits",
      headers: ["Catégorie de produit", "Code SH", "Description"],
      footnote:
        "Les codes SH sont fournis à titre indicatif. Les acheteurs doivent confirmer la classification auprès de leur transitaire, la détermination tarifaire finale relevant des autorités douanières du pays importateur.",
    },
    faqs: {
      subtitle: "Questions fréquentes",
      title: "FAQ expédition et logistique",
      items: [
        {
          q: "Quel Incoterm est le plus courant pour les acheteurs des Émirats et du GCC ?",
          a: "FOB Mumbai est l'Incoterm le plus courant pour les importateurs GCC expérimentés qui ont leurs propres transitaires ou font appel à des agents de fret établis dans la région. De nombreux acheteurs des Émirats et d'Arabie saoudite bénéficient de tarifs de fret préférentiels via leurs propres transitaires, ce qui fait du FOB l'option la plus rentable. Le CIF est disponible pour les acheteurs qui préfèrent que Vedant organise le fret maritime, notamment pour les premières commandes où les acheteurs souhaitent un coût rendu unique. Le DDP est disponible pour les acheteurs sur les marchés aux exigences douanières complexes.",
        },
        {
          q: "Pouvez-vous consolider plusieurs styles dans un seul conteneur ?",
          a: "Oui. Nous consolidons régulièrement des commandes multi-styles et multi-catégories en une seule expédition FCL (conteneur complet) ou LCL (groupage). Un conteneur standard de 20 pieds contient environ 5 000 à 7 000 vêtements selon le mix de catégories. Pour les commandes de 2 000 pièces ou moins, nous utilisons la consolidation LCL via nos transitaires à JNPT Mumbai. Tous les styles d'une expédition consolidée partagent un seul connaissement et un seul jeu de documents d'expédition.",
        },
        {
          q: "Qu'est-ce que la CEPA Inde-Émirats et comment réduit-elle les droits d'importation ?",
          a: "L'Accord de partenariat économique global entre l'Inde et les Émirats (CEPA), en vigueur depuis mai 2022, accorde des droits d'importation préférentiels (nuls ou réduits) sur les vêtements d'origine indienne qualifiés entrant aux Émirats. Les vêtements satisfaisant aux critères des règles d'origine (transformation substantielle en Inde — ce que satisfont nos vêtements entièrement fabriqués) bénéficient de 0% de droits d'importation sous la CEPA contre le tarif extérieur commun GCC standard de 5%. Nous émettons un certificat d'origine CEPA par expédition, délivré par les organismes d'exportation indiens autorisés. C'est une économie significative pour les acheteurs en gros des Émirats effectuant des achats réguliers.",
        },
        {
          q: "Gérez-vous le dédouanement à destination ?",
          a: "Sous les conditions FOB et CIF, l'acheteur est responsable du dédouanement à l'importation dans le port de destination. Nous fournissons tous les documents requis — facture commerciale, liste de colisage, connaissement, certificat d'origine et certificats de conformité — avant l'arrivée du navire pour faciliter le dédouanement. Sous les conditions DDP, nous gérons le dédouanement complet y compris le paiement des droits d'importation et de la TVA via nos partenaires logistiques. Pour les acheteurs opérant en FOB ayant besoin de soutien local, nous pouvons recommander des agents en douane établis à Jebel Ali, Dammam, Doha et Saint-Pétersbourg.",
        },
        {
          q: "Quel emballage utilisez-vous pour les expéditions d'export ?",
          a: "Les vêtements individuels sont pliés et mis en sachet polybag (sachets biodégradables disponibles sur demande). Les sachets sont conditionnés dans des cartons d'export — généralement 12 pièces par carton pour les robes et chemisiers, 12 à 24 pièces pour les chemises. Les cartons sont double cannelure export, cerclés et palettisés pour les expéditions FCL. Chaque carton porte une étiquette indiquant le numéro de style, la couleur, le ratio de tailles, le numéro de PO, le numéro de carton, le poids brut/net et le pays d'origine. Les conditionnements intérieurs (ensembles par taille ou par couleur) sont disponibles pour les commandes prêtes à la vente au détail. Du rembourrage en papier recyclé et des options d'emballage sans plastique sont disponibles pour les acheteurs axés sur le développement durable.",
        },
        {
          q: "Pouvez-vous expédier vers des ports russes compte tenu des sanctions actuelles ?",
          a: "Oui, sous réserve des vérifications de conformité applicables. La Russie ne fait pas l'objet d'un embargo total sur les exportations textiles indiennes. Nous exportons des vêtements tissés pour femmes vers la Russie via Saint-Pétersbourg et Novorossiysk dans le cadre de conditions commerciales standard, avec la documentation de conformité EAC / TR CU 017/2011. Toutes les expéditions sont vérifiées par rapport aux listes de sanctions actuelles de l'UE, des États-Unis et de l'ONU — Vedant n'expédie pas vers des entités ou des individus sanctionnés. Le paiement doit passer par des canaux bancaires conformes (SWIFT reste disponible pour de nombreuses banques correspondantes russes pour le commerce non sanctionné). Nous recommandons aux acheteurs de confirmer le statut SWIFT de leur banque d'importation avant de passer commande. Le transit via des pays tiers (Turquie, réexportation via les Émirats) est également possible.",
        },
      ],
    },
    labels: { freight: "Fret :", customs: "Douane :" },
    cta: {
      title: "Obtenir une cotation de fret",
      description:
        "Envoyez la taille de votre commande, le port de destination et l'Incoterm souhaité. Nous répondons avec une cotation d'expédition complète dans les 24 heures.",
      buttonText: "Obtenir une cotation de fret",
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Spedizione e logistica",
      title: "Spedizione ed esportazione dall'India verso Medio Oriente, Russia e tutto il mondo",
      description:
        "Nolo marittimo FOB da Mumbai ai porti GCC in 17–24 giorni. Documentazione di esportazione completa inclusi certificati CEPA e GOTS e dichiarazioni di conformità GCC. Incoterms FOB, CIF e DDP disponibili.",
    },
    incoterms: {
      subtitle: "Condizioni commerciali",
      title: "Gli Incoterms spiegati",
      items: [
        {
          full: "Franco a bordo — Mumbai",
          meaning:
            "Vedant consegna la merce a Nhava Sheva (JNPT) Mumbai. I rischi e la proprietà passano all'acquirente alla murata della nave. L'acquirente organizza e paga il nolo marittimo, l'assicurazione e la dogana di destinazione.",
          freight: "L'acquirente organizza e paga",
          customs: "L'acquirente gestisce la dogana di destinazione",
        },
        {
          full: "Costo, assicurazione e nolo",
          meaning:
            "Vedant paga il nolo marittimo e l'assicurazione minima del carico fino al porto di destinazione designato. I rischi passano alla murata della nave a Mumbai — l'acquirente è responsabile dal momento in cui la merce è in mare.",
          freight: "Vedant paga fino al porto di destinazione",
          customs: "L'acquirente gestisce la dogana di destinazione",
        },
        {
          full: "Resa dazi pagati",
          meaning:
            "Vedant gestisce tutto inclusi dazi doganali, IVA e sdoganamento a destinazione. La merce viene consegnata al magazzino designato dell'acquirente. Massima comodità per gli acquirenti privi di infrastruttura d'importazione.",
          freight: "Vedant paga tutto il nolo",
          customs: "Vedant gestisce dazi doganali e sdoganamento",
        },
      ],
    },
    seaFreight: {
      subtitle: "Nolo marittimo",
      title: "Tempi di transito da Mumbai (JNPT)",
      headers: ["Paese", "Porto di destinazione", "Tempo di transito", "Frequenza"],
      footnote:
        "Tutti i tempi di transito sono indicativi da JNPT Mumbai. Gli orari delle navi dipendono dalla disponibilità dei vettori e dalla congestione portuale. I tempi di produzione (45–55 giorni) si aggiungono ai tempi di transito sopra indicati.",
    },
    airFreight: {
      subtitle: "Trasporto aereo",
      title: "Consegna express via aerea",
      description:
        "Il trasporto aereo è raccomandato per ordini inferiori a 500 kg — tipicamente set di campioni, rifornimenti urgenti o categorie di capi ad alto valore dove la velocità supera il costo. Spediamo da Ahmedabad (AMD) o Mumbai (BOM) verso tutti i principali hub GCC ed europei.",
      footnote:
        "Il prezzo del nolo aereo viene fornito su richiesta insieme al preventivo del nolo marittimo. Lettera di trasporto aereo, fattura commerciale e certificato d'origine inclusi in tutte le spedizioni aeree.",
    },
    exportDocs: {
      subtitle: "Documentazione di esportazione",
      title: "Documenti forniti con ogni spedizione",
    },
    hsCodes: {
      subtitle: "Classificazione",
      title: "Codici HS per le nostre categorie di prodotto",
      headers: ["Categoria di prodotto", "Codice HS", "Descrizione"],
      footnote:
        "I codici HS sono forniti a titolo orientativo. Gli acquirenti devono confermare la classificazione con il proprio spedizioniere doganale, poiché la determinazione definitiva della tariffa spetta all'autorità doganale del paese importatore.",
    },
    faqs: {
      subtitle: "Domande frequenti",
      title: "FAQ spedizione e logistica",
      items: [
        {
          q: "Quale Incoterm è più comune per gli acquirenti degli Emirati e del GCC?",
          a: "FOB Mumbai è l'Incoterm più comune per gli importatori GCC esperti che hanno i propri spedizionieri o si avvalgono di agenti marittimi consolidati nella regione. Molti acquirenti degli Emirati e dell'Arabia Saudita hanno tariffe di nolo preferenziali tramite i propri spedizionieri, rendendo il FOB l'opzione più conveniente. Il CIF è disponibile per gli acquirenti che preferiscono che Vedant organizzi il nolo marittimo, in particolare per i primi ordini in cui gli acquirenti desiderano un unico costo resa. Il DDP è disponibile per gli acquirenti nei mercati con requisiti doganali complessi.",
        },
        {
          q: "Potete consolidare più stili in un unico container?",
          a: "Sì. Consolidiamo regolarmente ordini multi-stile e multi-categoria in un'unica spedizione FCL (container completo) o LCL (groupage). Un container standard da 20 piedi contiene circa 5.000–7.000 capi a seconda del mix di categorie. Per ordini fino a 2.000 pezzi utilizziamo la consolidazione LCL tramite i nostri spedizionieri presso JNPT Mumbai. Tutti gli stili di una spedizione consolidata condividono un'unica polizza di carico e un unico set di documenti di spedizione.",
        },
        {
          q: "Cos'è il CEPA India-Emirati e come riduce i dazi doganali?",
          a: "L'Accordo di partenariato economico globale India-Emirati (CEPA), in vigore da maggio 2022, concede dazi doganali preferenziali (zero o ridotti) sui capi di abbigliamento di origine indiana qualificati che entrano negli Emirati. I capi che soddisfano i criteri delle regole d'origine (trasformazione sostanziale in India — che i nostri capi interamente fabbricati soddisfano) si qualificano per lo 0% di dazi doganali ai sensi del CEPA rispetto alla tariffa esterna comune GCC standard del 5%. Emettiamo un certificato d'origine CEPA per spedizione, rilasciato dagli enti di esportazione indiani autorizzati. Si tratta di un risparmio significativo per gli acquirenti all'ingrosso degli Emirati che acquistano regolarmente.",
        },
        {
          q: "Vi occupate dello sdoganamento a destinazione?",
          a: "Con le condizioni FOB e CIF, l'acquirente è responsabile dello sdoganamento all'importazione nel porto di destinazione. Forniamo tutta la documentazione richiesta — fattura commerciale, lista di imballaggio, polizza di carico, certificato d'origine e certificati di conformità — prima dell'arrivo della nave per facilitare lo sdoganamento. Con le condizioni DDP gestiamo lo sdoganamento completo incluso il pagamento dei dazi doganali e dell'IVA tramite i nostri partner logistici. Per gli acquirenti che operano in FOB e necessitano di assistenza locale, possiamo raccomandare agenti doganali consolidati a Jebel Ali, Dammam, Doha e San Pietroburgo.",
        },
        {
          q: "Che tipo di imballaggio usate per le spedizioni di esportazione?",
          a: "I singoli capi vengono piegati e imbustati in polybag (sacchetti biodegradabili disponibili su richiesta). Le buste vengono imballate in scatole da esportazione — tipicamente 12 pezzi per scatola per abiti e bluse, 12–24 pezzi per camicie. Le scatole sono a doppia parete di qualità export, fasciate e pallettizzate per le spedizioni FCL. Ogni scatola reca un'etichetta con il numero di stile, il colore, il rapporto taglie, il numero PO, il numero di scatola, il peso lordo/netto e il paese d'origine. Le confezioni interne (set per taglia o per colore) sono disponibili per gli ordini retail-ready. Per gli acquirenti orientati alla sostenibilità sono disponibili imbottitura in carta riciclata e opzioni di imballaggio plastic-free.",
        },
        {
          q: "È possibile spedire nei porti russi viste le sanzioni attuali?",
          a: "Sì, previa verifica dei requisiti di conformità applicabili. La Russia non è soggetta a un embargo totale per le esportazioni tessili indiane. Esportiamo abbigliamento tessuto da donna in Russia via San Pietroburgo e Novorossijsk in base a termini commerciali standard, con documentazione di conformità EAC / TR CU 017/2011. Tutte le spedizioni vengono verificate rispetto alle attuali liste di sanzioni UE, USA e ONU — Vedant non spedisce a entità o individui sanzionati. Il pagamento deve avvenire tramite canali bancari conformi (SWIFT rimane disponibile per molte banche corrispondenti russe per il commercio non sanzionato). Consigliamo agli acquirenti di confermare lo stato SWIFT della propria banca importatrice prima di effettuare ordini. È disponibile anche il transito via paesi terzi (Turchia, riesportazione via Emirati).",
        },
      ],
    },
    labels: { freight: "Nolo:", customs: "Dogana:" },
    cta: {
      title: "Richiedi un preventivo di nolo",
      description:
        "Inviaci le dimensioni dell'ordine, il porto di destinazione e l'Incoterm preferito. Risponderemo con un preventivo di spedizione completo entro 24 ore.",
      buttonText: "Richiedi preventivo nolo",
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Verzending en logistiek",
      title: "Verzending en export vanuit India naar Midden-Oosten, Rusland en de wereld",
      description:
        "FOB Mumbai zeevracht naar GCC-havens in 17–24 dagen. Volledige exportdocumentatie inclusief CEPA- en GOTS-certificaten en GCC-nalevingsverklaringen. FOB, CIF en DDP Incoterms beschikbaar.",
    },
    incoterms: {
      subtitle: "Handelsvoorwaarden",
      title: "Incoterms uitgelegd",
      items: [
        {
          full: "Vrij aan boord — Mumbai",
          meaning:
            "Vedant levert de goederen bij Nhava Sheva (JNPT) Mumbai. Risico en eigendom gaan over op de koper bij de scheepsreling. De koper regelt en betaalt zeevracht, verzekering en douane op bestemming.",
          freight: "Koper regelt en betaalt",
          customs: "Koper regelt douane op bestemming",
        },
        {
          full: "Kosten, verzekering en vracht",
          meaning:
            "Vedant betaalt de zeevracht en minimale cargoverzekering tot de genoemde bestemmingshaven. Het risico gaat over bij de scheepsreling in Mumbai — de koper is verantwoordelijk zodra de goederen op zee zijn.",
          freight: "Vedant betaalt tot de bestemmingshaven",
          customs: "Koper regelt douane op bestemming",
        },
        {
          full: "Franco inclusief rechten",
          meaning:
            "Vedant regelt alles inclusief invoerrechten, btw en douaneafhandeling op bestemming. Goederen worden afgeleverd bij het door de koper genoemde magazijn. Maximaal gemak voor kopers zonder eigen importinfrastructuur.",
          freight: "Vedant betaalt alle vracht",
          customs: "Vedant regelt invoerrechten en douane",
        },
      ],
    },
    seaFreight: {
      subtitle: "Zeevracht",
      title: "Transittijden vanuit Mumbai (JNPT)",
      headers: ["Land", "Bestemmingshaven", "Transittijd", "Frequentie"],
      footnote:
        "Alle transittijden zijn indicatief vanuit JNPT Mumbai. Scheepsschema's zijn afhankelijk van vervoerdersbeschikbaarheid en havencongestie. De productiedoorlooptijd (45–55 dagen) komt bovenop de bovenstaande transittijden.",
    },
    airFreight: {
      subtitle: "Luchtvracht",
      title: "Express levering per lucht",
      description:
        "Luchtvracht wordt aanbevolen voor bestellingen onder de 500 kg — doorgaans monstersets, urgente aanvulling of hoge waarde kledingcategorieën waarbij snelheid zwaarder weegt dan kosten. Wij verzenden vanuit Ahmedabad (AMD) of Mumbai (BOM) naar alle grote GCC- en Europese hubs.",
      footnote:
        "Luchtvrachttarieven worden op aanvraag verstrekt samen met de zeevrachtoffer. Luchtvrachtbrief, handelsfactuur en oorsprongscertificaat inbegrepen bij alle luchtzendingen.",
    },
    exportDocs: {
      subtitle: "Exportdocumentatie",
      title: "Documenten bij elke zending",
    },
    hsCodes: {
      subtitle: "Classificatie",
      title: "HS-codes voor onze productcategorieën",
      headers: ["Productcategorie", "HS-code", "Omschrijving"],
      footnote:
        "HS-codes zijn ter informatie verstrekt. Kopers dienen de indeling te bevestigen met hun douaneagent, aangezien de definitieve tariefbepaling bij de douaneautoriteiten van het invoerland berust.",
    },
    faqs: {
      subtitle: "Veelgestelde vragen",
      title: "FAQ verzending en logistiek",
      items: [
        {
          q: "Welke Incoterm is het meest gebruikelijk voor inkopers uit de VAE en GCC?",
          a: "FOB Mumbai is de meest gebruikte Incoterm voor ervaren GCC-importeurs met eigen vrachtagenten of gevestigde scheepvaartvertegenwoordigers in de regio. Veel inkopers uit de VAE en Saudi-Arabië hebben gunstige vrachtrangtarieven via hun eigen expediteurs, wat FOB de meest kosteneffectieve optie maakt. CIF is beschikbaar voor inkopers die de voorkeur geven aan Vedant voor de zeevrachtverzorging, met name voor eerste orders waarbij inkopers een eenmalige aankoopprijs wensen. DDP is beschikbaar voor inkopers op markten met complexe douanevereisten.",
        },
        {
          q: "Kunt u meerdere stijlen in één container consolideren?",
          a: "Ja. Wij consolideren regelmatig bestellingen met meerdere stijlen en categorieën in één FCL- (volle container) of LCL-zending (groepage). Een standaard 20ft-container bevat circa 5.000–7.000 kledingstukken afhankelijk van de categoriesamenstelling. Voor orders van 2.000 stuks of minder gebruiken wij LCL-consolidatie via onze expediteurs bij JNPT Mumbai. Alle stijlen in een geconsolideerde zending delen één cognossement en één set verzenddocumenten.",
        },
        {
          q: "Wat is de India-VAE CEPA en hoe verlaagt die de invoerrechten?",
          a: "Het Comprehensive Economic Partnership Agreement (CEPA) tussen India en de VAE, van kracht sinds mei 2022, verleent preferentiële (nul of verlaagde) invoerrechten op kwalificerende kledingstukken van Indische oorsprong die de VAE binnenkomen. Kledingstukken die voldoen aan de oorsprongscriteria (wezenlijke bewerking in India — waaraan onze volledig vervaardigde kledingstukken voldoen) komen in aanmerking voor 0% invoerrecht onder CEPA versus het standaard GCC-gemeenschappelijk buitentarief van 5%. Wij verstrekken een CEPA-oorsprongscertificaat per zending, afgegeven door bevoegde Indiase exportinstanties. Dit is een aanzienlijke kostenbesparing voor groothandelinkopers uit de VAE die regelmatig bestellen.",
        },
        {
          q: "Regelt u de douaneafhandeling op bestemming?",
          a: "Onder FOB- en CIF-voorwaarden is de koper verantwoordelijk voor de invoerdouaneafhandeling in de bestemmingshaven. Wij verstrekken alle vereiste documenten — handelsfactuur, paklijst, cognossement, oorsprongscertificaat en nalevingscertificaten — ruim voor aankomst van het schip om een vlotte afhandeling mogelijk te maken. Onder DDP-voorwaarden beheren wij de volledige douaneafhandeling inclusief betaling van invoerrechten en btw via onze logistieke partners. Voor inkopers die onder FOB werken en lokale ondersteuning nodig hebben, kunnen wij gevestigde douaneagenten in Jebel Ali, Dammam, Doha en Sint-Petersburg aanbevelen.",
        },
        {
          q: "Welke verpakking gebruikt u voor exportzendingen?",
          a: "Individuele kledingstukken worden gevouwen en verpakt in polybags (biologisch afbreekbare zakken op aanvraag beschikbaar). Zakken worden verpakt in exportkartons — doorgaans 12 stuks per karton voor jurken en blouses, 12–24 stuks voor shirts. Kartons zijn dubbelwandig exportkwaliteit, omband en gepalletiseerd voor FCL-zendingen. Elk karton is voorzien van een etiket met stijlnummer, kleur, maatverhouding, PO-nummer, kártonnummer, bruto-/nettogewicht en land van oorsprong. Binnenste verpakkingen (sets per maat of kleur) zijn beschikbaar voor retail-ready orders. Gerecycled papieren vulmateriaal en plasticvrije verpakkingsopties zijn beschikbaar voor duurzaamheidsbewuste inkopers.",
        },
        {
          q: "Kunt u naar Russische havens verzenden gezien de huidige sancties?",
          a: "Ja, onder voorbehoud van toepasselijke nalevingscontroles. Er geldt geen algeheel embargo op Indische textielexport naar Rusland. Wij exporteren damesgeweven kleding naar Rusland via Sint-Petersburg en Novorossiysk onder standaardhandelsvoorwaarden, met EAC / TR CU 017/2011-nalevingsdocumentatie. Alle zendingen worden gecontroleerd aan de hand van actuele sanctielijsten van de EU, de VS en de VN — Vedant verzendt niet naar gesanctioneerde entiteiten of personen. Betaling dient via conforme bankkanalen te verlopen (SWIFT blijft beschikbaar voor veel Russische correspondentbanken voor niet-gesanctioneerde handel). Wij raden inkopers aan de SWIFT-status van hun importbank te bevestigen voordat ze bestellen. Transit via derde landen (Turkije, wederuitvoer via VAE) is ook beschikbaar.",
        },
      ],
    },
    labels: { freight: "Vracht:", customs: "Douane:" },
    cta: {
      title: "Vraag een vrachtofferte aan",
      description:
        "Stuur uw ordergrootte, bestemmingshaven en gewenste Incoterm. Wij reageren met een volledige verzendofferte binnen 24 uur.",
      buttonText: "Vrachtofferte aanvragen",
    },
  },
};
