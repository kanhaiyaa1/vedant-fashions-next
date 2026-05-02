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
  fabricSourcing?: {
    subtitle: string;
    title: string;
    story: string;
    fabricDetails: Array<{ name: string; origin: string; gsm: string; bestFor: string; moqNote: string }>;
  };
  seasonalGuide?: {
    subtitle: string;
    title: string;
    intro: string;
    seasons: Array<{ season: string; months: string; demand: string; styles: string; orderAdvice: string }>;
    bookingNote: string;
  };
  whyVedant?: {
    subtitle: string;
    title: string;
    intro: string;
    points: Array<{ title: string; desc: string }>;
    closingNote: string;
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
    fabricSourcing: {
      subtitle: "Fabric Intelligence",
      title: "Where Your Fabric Begins",
      story: "Every garment we ship starts with a conversation we've been having with mill owners for over a decade. Vedant Fashion's sourcing network spans Surat's woven clusters, Erode's cotton belt, Tirupur's knit hubs, and Bhilwara's suiting mills — meaning your buyer brief translates directly into the right base fabric without the back-and-forth that wastes 3–4 weeks in a typical import cycle.\n\nWhen a UAE buyer asks for a lightweight abaya-friendly woven that drapes well and passes OEKO-TEX 100, we don't search — we call. When a Saudi retailer needs 180 GSM cotton poplin with moisture-wicking finish for Ramadan season, we have mill-direct pricing ready in 48 hours. That speed comes from 10+ years of supply-side relationships, not algorithms.\n\nFor seasonal buyers — especially those ordering for Eid, Summer, or Christmas retail windows — fabric lock-in is the single biggest lead time lever. We can hold fabric against a confirmed purchase order, compress your production window by up to 3 weeks, and protect you from GSM or shade variations that otherwise creep in when mills fulfil multiple orders from the same lot.\n\nBelow is a representative view of the fabrics we regularly work with for this category.",
      fabricDetails: [
        { name: "Cotton Poplin (Plain)", origin: "Erode, Tamil Nadu", gsm: "90–120", bestFor: "Shirts, blouses, lightweight dresses", moqNote: "From 500m" },
        { name: "Linen-Cotton Blend", origin: "Surat, Gujarat", gsm: "140–180", bestFor: "Resort wear, summer co-ords", moqNote: "From 300m" },
        { name: "Woven Viscose (Printed)", origin: "Surat, Gujarat", gsm: "80–110", bestFor: "Dresses, kaftans, co-ords", moqNote: "From 200m" },
        { name: "Rayon Challis", origin: "Surat, Gujarat", gsm: "70–95", bestFor: "Flowy blouses, beach cover-ups", moqNote: "From 200m" },
        { name: "Cotton Oxford Weave", origin: "Coimbatore, Tamil Nadu", gsm: "150–180", bestFor: "Structured shirts, tunics", moqNote: "From 500m" },
      ],
    },
    seasonalGuide: {
      subtitle: "Order Calendar",
      title: "When to Order for Maximum Shelf Impact",
      intro: "GCC and European retail operates on 4 distinct buying windows. Missing the order cut-off by even 2 weeks can mean arriving after peak sell-through, sitting on excess inventory, or — in the worst case — paying air-freight to catch up. This guide maps Vedant's production calendar to your retail demand peaks.",
      seasons: [
        {
          season: "Eid / Ramadan",
          months: "Order: Oct–Nov | Retail: Mar–Apr",
          demand: "Very High — GCC",
          styles: "Modest silhouettes, embellished blouses, co-ord sets in rich fabrics",
          orderAdvice: "Confirm by 15 November for FOB February dispatch. Fabric pre-booking recommended.",
        },
        {
          season: "Spring / Summer",
          months: "Order: Nov–Jan | Retail: Mar–Jun",
          demand: "High — Europe, South Africa",
          styles: "Linen shirts, cotton dresses, resort wear, printed wovens",
          orderAdvice: "Confirm by 15 January for FOB March dispatch. Lead time: 60–75 days.",
        },
        {
          season: "Autumn / Winter",
          months: "Order: May–Jul | Retail: Sep–Nov",
          demand: "Moderate — Europe, Russia",
          styles: "Layering pieces, heavier weaves, embroidered jackets",
          orderAdvice: "Confirm by 15 July for FOB September dispatch. Lead time: 60–90 days.",
        },
        {
          season: "Holiday / Year-End",
          months: "Order: Jul–Aug | Retail: Dec–Jan",
          demand: "High — Global",
          styles: "Sequin, occasion wear, festive co-ords",
          orderAdvice: "Confirm by 31 August for FOB October dispatch. Air-freight available as backup.",
        },
      ],
      bookingNote: "Vedant holds mill stock for confirmed POs. If you're 4–6 weeks behind your ideal order window, contact us before assuming it's too late — we've solved tighter timelines.",
    },
    whyVedant: {
      subtitle: "Why Vedant",
      title: "What Buyers Say After the First Order",
      intro: "We don't ask you to take our word for it. Here's what actually changes once you move production to Vedant Fashion — based on feedback from repeat buyers in UAE, Poland, South Africa, and Russia.",
      points: [
        { title: "Lead Times That Hold", desc: "Our production calendar is committed at PO stage — not renegotiated at dispatch. 94% of our shipments leave within 3 days of the agreed FOB date." },
        { title: "Sampling Without Drama", desc: "Proto samples dispatched within 12–15 working days. Counter samples (post-approval revisions) within 7 days. No 6-week sample loops." },
        { title: "FOB Pricing That's Actually FOB", desc: "The price we quote includes export packing, labelling, all pre-shipment documentation, and Customs clearance at JNPT Mumbai. No hidden freight or handling surprises." },
        { title: "GCC Compliance Built In", desc: "OEKO-TEX 100, GOTS-traceable cotton, and Gulf standard-ready documentation are part of our default process — not premium add-ons that inflate the price." },
        { title: "Private Label That Scales", desc: "Woven labels, hang tags, tissue wrapping, and custom packaging available from 300 pcs per style. Brand-ready retail packaging for omnichannel sellers." },
        { title: "One Account Manager", desc: "You deal with one person from RFQ to shipment — not a rotating helpdesk. They know your sizing, your market, your QC preferences." },
      ],
      closingNote: "Still comparing suppliers? Ask us for a reference call with a current buyer in your market.",
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
    fabricSourcing: {
      subtitle: "معلومات الأقمشة",
      title: "من أين يبدأ قماشك",
      story: "كل قطعة ملابس نشحنها تبدأ بمحادثة ظللنا نجريها مع أصحاب المصانع لأكثر من عقد. تمتد شبكة التوريد في Vedant Fashion عبر مجموعات النسيج في سورات، وحزام القطن في إيرود، ومراكز الحياكة في تيروبور، ومصانع الأقمشة في بيلوارا — مما يعني أن متطلبات المشتري تترجم مباشرة إلى القماش الأساسي المناسب دون الرسائل المتبادلة التي تضيع 3-4 أسابيع في دورة الاستيراد النموذجية.\n\nعندما يطلب مشتري إماراتي نسيجاً خفيف الوزن مناسباً للعباءة يتدفق بشكل جيد ويجتاز معايير OEKO-TEX 100، فنحن لا نبحث — نتصل مباشرة. عندما يحتاج تاجر سعودي إلى بوبلين قطني 180 جرام بتشطيب مقاوم للرطوبة لموسم رمضان، نملك التسعير المباشر من المصنع في غضون 48 ساعة. هذه السرعة تأتي من علاقات تمتد لأكثر من 10 سنوات مع الموردين، لا من الخوارزميات.",
      fabricDetails: [
        { name: "بوبلين قطني (سادة)", origin: "إيرود، تاميل نادو", gsm: "90–120", bestFor: "قمصان، بلوزات، فساتين خفيفة", moqNote: "من 500 متر" },
        { name: "مزيج كتان-قطن", origin: "سورات، غوجارات", gsm: "140–180", bestFor: "ملابس المنتجعات، طقم صيفي", moqNote: "من 300 متر" },
        { name: "فيسكوز منسوج (مطبوع)", origin: "سورات، غوجارات", gsm: "80–110", bestFor: "فساتين، قفاطين، أطقم", moqNote: "من 200 متر" },
        { name: "شاليه ريون", origin: "سورات، غوجارات", gsm: "70–95", bestFor: "بلوزات سائلة، أغطية الشاطئ", moqNote: "من 200 متر" },
        { name: "نسيج قطني أكسفورد", origin: "كويمباتور، تاميل نادو", gsm: "150–180", bestFor: "قمصان هيكلية، تونيكات", moqNote: "من 500 متر" },
      ],
    },
    seasonalGuide: {
      subtitle: "تقويم الطلبات",
      title: "متى تطلب لتحقيق أقصى تأثير في المتاجر",
      intro: "تعمل تجارة التجزئة في دول الخليج وأوروبا وفق 4 نوافذ شراء مميزة. تجاوز الموعد النهائي للطلب حتى بأسبوعين قد يعني الوصول بعد ذروة المبيعات، أو تكدس مخزون زائد، أو — في أسوأ الأحوال — دفع تكاليف الشحن الجوي للتعويض.",
      seasons: [
        {
          season: "العيد / رمضان",
          months: "الطلب: أكتوبر-نوفمبر | التجزئة: مارس-أبريل",
          demand: "مرتفع جداً — دول الخليج",
          styles: "تصاميم محتشمة، بلوزات مزخرفة، أطقم بأقمشة فاخرة",
          orderAdvice: "التأكيد بحلول 15 نوفمبر لشحن FOB في فبراير. يُنصح بالحجز المسبق للأقمشة.",
        },
        {
          season: "الربيع / الصيف",
          months: "الطلب: نوفمبر-يناير | التجزئة: مارس-يونيو",
          demand: "مرتفع — أوروبا، جنوب أفريقيا",
          styles: "قمصان كتان، فساتين قطنية، ملابس منتجعات، منسوجات مطبوعة",
          orderAdvice: "التأكيد بحلول 15 يناير لشحن FOB في مارس. مدة التسليم: 60-75 يوماً.",
        },
        {
          season: "الخريف / الشتاء",
          months: "الطلب: مايو-يوليو | التجزئة: سبتمبر-نوفمبر",
          demand: "متوسط — أوروبا، روسيا",
          styles: "قطع طبقية، أقمشة ثقيلة، سترات مطرزة",
          orderAdvice: "التأكيد بحلول 15 يوليو لشحن FOB في سبتمبر. مدة التسليم: 60-90 يوماً.",
        },
        {
          season: "العطلات / نهاية العام",
          months: "الطلب: يوليو-أغسطس | التجزئة: ديسمبر-يناير",
          demand: "مرتفع — عالمي",
          styles: "ملابس ترتر، ملابس مناسبات، أطقم احتفالية",
          orderAdvice: "التأكيد بحلول 31 أغسطس لشحن FOB في أكتوبر. الشحن الجوي متاح كخيار احتياطي.",
        },
      ],
      bookingNote: "تحتجز Vedant مخزون المصانع للأوامر المؤكدة. إذا كنت متأخراً 4-6 أسابيع عن نافذة طلبك المثالية، تواصل معنا قبل افتراض أن الوقت قد فات.",
    },
    whyVedant: {
      subtitle: "لماذا Vedant",
      title: "ما يقوله المشترون بعد الطلب الأول",
      intro: "لا نطلب منك الاكتفاء بكلامنا. إليك ما يتغير فعلاً بمجرد نقل الإنتاج إلى Vedant Fashion — بناءً على ملاحظات المشترين المتكررين في الإمارات وبولندا وجنوب أفريقيا وروسيا.",
      points: [
        { title: "مواعيد تسليم ثابتة", desc: "يتم الالتزام بتقويم الإنتاج عند مرحلة أمر الشراء — لا إعادة تفاوض عند الشحن. 94% من شحناتنا تغادر خلال 3 أيام من تاريخ FOB المتفق عليه." },
        { title: "عينات بدون تعقيدات", desc: "ترسل العينات الأولية خلال 12-15 يوم عمل. العينات المضادة خلال 7 أيام. لا حلقات عينات تمتد 6 أسابيع." },
        { title: "أسعار FOB حقيقية", desc: "السعر الذي نقتبسه يشمل التغليف للتصدير والتسمية وجميع وثائق ما قبل الشحن وتخليص الجمارك في JNPT مومباي. لا مفاجآت." },
        { title: "امتثال خليجي مدمج", desc: "OEKO-TEX 100، قطن يمكن تتبعه وفق GOTS، ووثائق جاهزة لمعايير الخليج — كلها جزء من عمليتنا الافتراضية." },
        { title: "علامة خاصة قابلة للتوسع", desc: "التسميات المنسوجة وبطاقات الشنق وتغليف الأنسجة والتعبئة المخصصة متاحة من 300 قطعة لكل تصميم." },
        { title: "مدير حساب واحد", desc: "تتعامل مع شخص واحد من طلب عرض الأسعار حتى الشحن — لا مكتب مساعدة متناوب. يعرف مقاساتك وسوقك وتفضيلات مراقبة الجودة لديك." },
      ],
      closingNote: "لا تزال تقارن الموردين؟ اطلب منا مكالمة مرجعية مع مشترٍ حالي في سوقك.",
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
    fabricSourcing: {
      subtitle: "Сведения о тканях",
      title: "Откуда начинается ваша ткань",
      story: "Каждое изделие, которое мы отправляем, начинается с разговора, который мы ведём с владельцами фабрик уже более десяти лет. Сеть снабжения Vedant Fashion охватывает кластеры тканых изделий Сурата, хлопковый пояс Эроде, трикотажные хабы Тирупура и суконные фабрики Бхилвары — это означает, что требования покупателя переводятся напрямую в нужную базовую ткань без переписки, которая тратит 3–4 недели в типичном цикле импорта.\n\nКогда покупатель из ОАЭ просит лёгкую тканую основу, подходящую для абайи, с хорошим драпированием и соответствием OEKO-TEX 100, мы не ищем — мы звоним. Когда саудовский ритейлер нуждается в хлопковом поплине 180 г/м² с влагоотводящей отделкой для сезона Рамадана, у нас есть прямые цены с фабрики в течение 48 часов. Эта скорость — результат более чем 10-летних отношений с поставщиками, а не алгоритмов.",
      fabricDetails: [
        { name: "Хлопковый поплин (гладкий)", origin: "Эроде, Тамилнаду", gsm: "90–120", bestFor: "Рубашки, блузы, лёгкие платья", moqNote: "От 500 м" },
        { name: "Льняно-хлопковый микс", origin: "Сурат, Гуджарат", gsm: "140–180", bestFor: "Одежда для курортов, летние комплекты", moqNote: "От 300 м" },
        { name: "Тканый вискоз (с принтом)", origin: "Сурат, Гуджарат", gsm: "80–110", bestFor: "Платья, кафтаны, комплекты", moqNote: "От 200 м" },
        { name: "Шали из вискозы", origin: "Сурат, Гуджарат", gsm: "70–95", bestFor: "Струящиеся блузки, пляжные накидки", moqNote: "От 200 м" },
        { name: "Хлопковая ткань Оксфорд", origin: "Коимбатур, Тамилнаду", gsm: "150–180", bestFor: "Структурированные рубашки, туники", moqNote: "От 500 м" },
      ],
    },
    seasonalGuide: {
      subtitle: "Календарь заказов",
      title: "Когда заказывать для максимального воздействия на полках",
      intro: "Розничная торговля в странах Персидского залива и Европе работает по 4 чётким покупательским окнам. Пропуск дедлайна заказа даже на 2 недели может означать поставку после пика продаж, избыточные запасы или авиадоставку в срочном порядке.",
      seasons: [
        {
          season: "Ид / Рамадан",
          months: "Заказ: окт–ноя | Продажи: мар–апр",
          demand: "Очень высокий — страны Персидского залива",
          styles: "Скромные силуэты, украшенные блузы, комплекты из дорогих тканей",
          orderAdvice: "Подтвердить до 15 ноября для отправки FOB в феврале. Рекомендуется предварительное бронирование ткани.",
        },
        {
          season: "Весна / Лето",
          months: "Заказ: ноя–янв | Продажи: мар–июн",
          demand: "Высокий — Европа, ЮАР",
          styles: "Льняные рубашки, хлопковые платья, курортная одежда, тканые принты",
          orderAdvice: "Подтвердить до 15 января для отправки FOB в марте. Срок: 60–75 дней.",
        },
        {
          season: "Осень / Зима",
          months: "Заказ: май–июл | Продажи: сен–ноя",
          demand: "Умеренный — Европа, Россия",
          styles: "Многослойные вещи, тяжёлые ткани, вышитые жакеты",
          orderAdvice: "Подтвердить до 15 июля для отправки FOB в сентябре. Срок: 60–90 дней.",
        },
        {
          season: "Праздники / Конец года",
          months: "Заказ: июл–авг | Продажи: дек–янв",
          demand: "Высокий — весь мир",
          styles: "Пайетки, праздничная одежда, нарядные комплекты",
          orderAdvice: "Подтвердить до 31 августа для отправки FOB в октябре. Авиадоставка доступна как резерв.",
        },
      ],
      bookingNote: "Vedant удерживает запасы фабрики под подтверждённые заказы. Если вы опаздываете на 4–6 недель от идеального окна заказа, свяжитесь с нами — мы решали и более сжатые сроки.",
    },
    whyVedant: {
      subtitle: "Почему Vedant",
      title: "Что говорят покупатели после первого заказа",
      intro: "Мы не просим верить нам на слово. Вот что реально меняется после перевода производства в Vedant Fashion — по отзывам постоянных покупателей из ОАЭ, Польши, ЮАР и России.",
      points: [
        { title: "Сроки, которые соблюдаются", desc: "Производственный календарь фиксируется на этапе оформления заказа — не пересматривается при отгрузке. 94% наших отправлений уходят в течение 3 дней от согласованной даты FOB." },
        { title: "Образцы без задержек", desc: "Прото-образцы отправляются в течение 12–15 рабочих дней. Контрольные образцы в течение 7 дней. Никаких 6-недельных циклов согласования." },
        { title: "Цены FOB без скрытых доплат", desc: "Наша цена включает экспортную упаковку, маркировку, все документы перед отгрузкой и таможенное оформление в JNPT Мумбаи." },
        { title: "Соответствие стандартам Залива", desc: "OEKO-TEX 100, отслеживаемый по GOTS хлопок и документация для стандартов Залива — всё это часть нашего стандартного процесса." },
        { title: "Частная марка с масштабированием", desc: "Тканые этикетки, бирки, тканевая обёртка и индивидуальная упаковка доступны от 300 единиц на артикул." },
        { title: "Один аккаунт-менеджер", desc: "Вы общаетесь с одним человеком от запроса до отгрузки. Он знает ваши размеры, ваш рынок, ваши предпочтения по контролю качества." },
      ],
      closingNote: "Всё ещё сравниваете поставщиков? Попросите нас организовать звонок с нашим действующим покупателем на вашем рынке.",
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
    fabricSourcing: {
      subtitle: "Wiedza o tkaninach",
      title: "Skąd pochodzi Twoja tkanina",
      story: "Każda odzież, którą wysyłamy, zaczyna się od rozmowy, którą prowadzimy z właścicielami fabryk od ponad dekady. Sieć zaopatrzenia Vedant Fashion obejmuje klastry tkanin w Suracie, pas bawełniany w Erode, centra dzianin w Tirupur i zakłady sukiennicze w Bhilwarze — co oznacza, że zapotrzebowanie kupującego przekłada się bezpośrednio na właściwą tkaninę bazową bez wymiany wiadomości trwającej 3–4 tygodnie w typowym cyklu importu.\n\nKiedy kupujący ze Zjednoczonych Emiratów Arabskich prosi o lekką tkaninę odpowiednią do abai, która pięknie układa się i przechodzi certyfikat OEKO-TEX 100, nie szukamy — dzwonimy. Kiedy saudyjski sprzedawca potrzebuje poplinu bawełnianego 180 g/m² z wykończeniem odprowadzającym wilgoć na sezon Ramadanu, mamy ceny bezpośrednio od fabryki w ciągu 48 godzin.",
      fabricDetails: [
        { name: "Poplin bawełniany (gładki)", origin: "Erode, Tamil Nadu", gsm: "90–120", bestFor: "Koszule, bluzki, lekkie sukienki", moqNote: "Od 500 m" },
        { name: "Mieszanka lnu i bawełny", origin: "Surat, Gudżarat", gsm: "140–180", bestFor: "Odzież resort, letnie zestawy", moqNote: "Od 300 m" },
        { name: "Wiskoza tkana (drukowana)", origin: "Surat, Gudżarat", gsm: "80–110", bestFor: "Sukienki, kaftany, zestawy", moqNote: "Od 200 m" },
        { name: "Szalon wiskozowy", origin: "Surat, Gudżarat", gsm: "70–95", bestFor: "Zwiewne bluzki, przykrycia plażowe", moqNote: "Od 200 m" },
        { name: "Tkanina Oxford bawełniana", origin: "Coimbatore, Tamil Nadu", gsm: "150–180", bestFor: "Strukturalne koszule, tuniki", moqNote: "Od 500 m" },
      ],
    },
    seasonalGuide: {
      subtitle: "Kalendarz zamówień",
      title: "Kiedy zamawiać, aby zmaksymalizować sprzedaż w sklepach",
      intro: "Sprzedaż detaliczna w krajach Zatoki Perskiej i Europie funkcjonuje według 4 wyraźnych okien zakupowych. Przekroczenie terminu zamówienia nawet o 2 tygodnie może oznaczać dostawę po szczycie sprzedaży, nadwyżkę zapasów lub opłacanie frachtu lotniczego.",
      seasons: [
        {
          season: "Eid / Ramadan",
          months: "Zamówienie: paź–lis | Sprzedaż: mar–kwi",
          demand: "Bardzo wysoki — Zatoka Perska",
          styles: "Skromne sylwetki, ozdobne bluzki, zestawy w bogatych tkaninach",
          orderAdvice: "Potwierdź do 15 listopada na wysyłkę FOB w lutym. Zalecana wcześniejsza rezerwacja tkanin.",
        },
        {
          season: "Wiosna / Lato",
          months: "Zamówienie: lis–sty | Sprzedaż: mar–cze",
          demand: "Wysoki — Europa, RPA",
          styles: "Koszule lniane, sukienki bawełniane, odzież resort, drukowane tkaniny",
          orderAdvice: "Potwierdź do 15 stycznia na wysyłkę FOB w marcu. Czas realizacji: 60–75 dni.",
        },
        {
          season: "Jesień / Zima",
          months: "Zamówienie: maj–lip | Sprzedaż: wrz–lis",
          demand: "Umiarkowany — Europa, Rosja",
          styles: "Warstwy, cięższe tkaniny, haftowane kurtki",
          orderAdvice: "Potwierdź do 15 lipca na wysyłkę FOB we wrześniu. Czas realizacji: 60–90 dni.",
        },
        {
          season: "Święta / Koniec roku",
          months: "Zamówienie: lip–sie | Sprzedaż: gru–sty",
          demand: "Wysoki — globalny",
          styles: "Cekiny, stroje na okazje, świąteczne zestawy",
          orderAdvice: "Potwierdź do 31 sierpnia na wysyłkę FOB w październiku. Fracht lotniczy dostępny jako opcja zapasowa.",
        },
      ],
      bookingNote: "Vedant zatrzymuje zapasy fabryczne dla potwierdzonych zamówień. Jeśli jesteś 4–6 tygodni za idealnym oknem zamówień, skontaktuj się z nami — rozwiązywaliśmy ciasniejsze terminy.",
    },
    whyVedant: {
      subtitle: "Dlaczego Vedant",
      title: "Co mówią kupujący po pierwszym zamówieniu",
      intro: "Nie prosimy Cię, abyś nam uwierzył na słowo. Oto co naprawdę się zmienia, gdy przenosisz produkcję do Vedant Fashion — na podstawie opinii stałych kupujących z ZEA, Polski, RPA i Rosji.",
      points: [
        { title: "Terminy, które są dotrzymywane", desc: "Harmonogram produkcji jest zatwierdzany na etapie zamówienia — nie renegocjowany przy wysyłce. 94% naszych przesyłek opuszcza magazyn w ciągu 3 dni od uzgodnionej daty FOB." },
        { title: "Próbki bez dramatów", desc: "Próbki prototypowe wysyłane w ciągu 12–15 dni roboczych. Próbki kontrowe w ciągu 7 dni. Żadnych 6-tygodniowych pętli próbek." },
        { title: "Ceny FOB, które są naprawdę FOB", desc: "Nasza cena obejmuje opakowanie eksportowe, etykietowanie, całą dokumentację przed wysyłką i odprawę celną w JNPT Mumbai." },
        { title: "Zgodność z normami Zatoki wbudowana", desc: "OEKO-TEX 100, bawełna z certyfikatem GOTS i dokumentacja gotowa do standardów Zatoki Perskiej są częścią naszego standardowego procesu." },
        { title: "Marka własna, która się skaluje", desc: "Etykiety tkane, metki, opakowania z bibuły i indywidualne pakowanie dostępne od 300 szt. na styl." },
        { title: "Jeden opiekun konta", desc: "Masz do czynienia z jedną osobą od zapytania ofertowego do wysyłki. Zna Twoje rozmiary, Twój rynek, Twoje preferencje QC." },
      ],
      closingNote: "Nadal porównujesz dostawców? Poproś nas o rozmowę referencyjną z aktualnym kupującym na Twoim rynku.",
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
    fabricSourcing: {
      subtitle: "Intelligence tissu",
      title: "D'où vient votre tissu",
      story: "Chaque vêtement que nous expédions commence par une conversation que nous avons avec les propriétaires de manufactures depuis plus d'une décennie. Le réseau d'approvisionnement de Vedant Fashion couvre les clusters de tissus woven de Surat, la ceinture coton d'Erode, les hubs de tricotage de Tirupur et les manufactures de Bhilwara — ce qui signifie que vos besoins d'acheteur se traduisent directement en tissu de base approprié, sans allers-retours qui font perdre 3 à 4 semaines dans un cycle d'importation typique.\n\nLorsqu'un acheteur des Émirats arabes unis demande un woven léger adapté aux abayas qui se drapent bien et répond à la norme OEKO-TEX 100, nous n'effectuons pas de recherche — nous appelons. Lorsqu'un détaillant saoudien a besoin d'un popeline de coton 180 g/m² avec finition hydrofuge pour la saison du Ramadan, nous avons des prix directs depuis la manufacture en 48 heures.",
      fabricDetails: [
        { name: "Popeline de coton (uni)", origin: "Erode, Tamil Nadu", gsm: "90–120", bestFor: "Chemises, blouses, robes légères", moqNote: "À partir de 500 m" },
        { name: "Mélange lin-coton", origin: "Surat, Gujarat", gsm: "140–180", bestFor: "Vêtements resort, ensembles d'été", moqNote: "À partir de 300 m" },
        { name: "Viscose tissée (imprimée)", origin: "Surat, Gujarat", gsm: "80–110", bestFor: "Robes, kaftans, ensembles", moqNote: "À partir de 200 m" },
        { name: "Challis viscose", origin: "Surat, Gujarat", gsm: "70–95", bestFor: "Blouses fluides, paréos de plage", moqNote: "À partir de 200 m" },
        { name: "Oxford coton tissé", origin: "Coimbatore, Tamil Nadu", gsm: "150–180", bestFor: "Chemises structurées, tuniques", moqNote: "À partir de 500 m" },
      ],
    },
    seasonalGuide: {
      subtitle: "Calendrier des commandes",
      title: "Quand commander pour maximiser l'impact en rayon",
      intro: "La vente au détail dans les pays du Golfe et en Europe fonctionne selon 4 fenêtres d'achat distinctes. Manquer la date limite de commande de seulement 2 semaines peut signifier arriver après le pic des ventes, se retrouver avec des stocks excédentaires ou payer le fret aérien pour rattraper le retard.",
      seasons: [
        {
          season: "Eid / Ramadan",
          months: "Commande : oct–nov | Vente : mar–avr",
          demand: "Très élevé — CCG",
          styles: "Silhouettes modestes, blouses ornées, ensembles en tissus riches",
          orderAdvice: "Confirmer avant le 15 novembre pour expédition FOB en février. Réservation anticipée des tissus recommandée.",
        },
        {
          season: "Printemps / Été",
          months: "Commande : nov–jan | Vente : mar–juin",
          demand: "Élevé — Europe, Afrique du Sud",
          styles: "Chemises en lin, robes en coton, vêtements resort, tissus imprimés",
          orderAdvice: "Confirmer avant le 15 janvier pour expédition FOB en mars. Délai : 60–75 jours.",
        },
        {
          season: "Automne / Hiver",
          months: "Commande : mai–juil | Vente : sep–nov",
          demand: "Modéré — Europe, Russie",
          styles: "Pièces de superposition, tissus plus lourds, vestes brodées",
          orderAdvice: "Confirmer avant le 15 juillet pour expédition FOB en septembre. Délai : 60–90 jours.",
        },
        {
          season: "Fêtes / Fin d'année",
          months: "Commande : juil–août | Vente : déc–jan",
          demand: "Élevé — mondial",
          styles: "Paillettes, tenues de soirée, ensembles festifs",
          orderAdvice: "Confirmer avant le 31 août pour expédition FOB en octobre. Fret aérien disponible en option.",
        },
      ],
      bookingNote: "Vedant conserve les stocks de la manufacture pour les commandes confirmées. Si vous avez 4 à 6 semaines de retard sur votre fenêtre de commande idéale, contactez-nous — nous avons résolu des délais encore plus serrés.",
    },
    whyVedant: {
      subtitle: "Pourquoi Vedant",
      title: "Ce que disent les acheteurs après la première commande",
      intro: "Nous ne vous demandons pas de nous croire sur parole. Voici ce qui change réellement une fois que vous transférez votre production chez Vedant Fashion — sur la base des retours d'acheteurs récurrents aux Émirats, en Pologne, en Afrique du Sud et en Russie.",
      points: [
        { title: "Des délais qui tiennent", desc: "Notre calendrier de production est fixé au stade du bon de commande — pas renégocié à l'expédition. 94 % de nos envois partent dans les 3 jours suivant la date FOB convenue." },
        { title: "Des échantillons sans complications", desc: "Échantillons proto expédiés dans 12 à 15 jours ouvrables. Contre-échantillons dans 7 jours. Pas de cycles d'échantillons de 6 semaines." },
        { title: "Des prix FOB vraiment FOB", desc: "Le prix que nous proposons comprend l'emballage export, l'étiquetage, toute la documentation pré-expédition et le dédouanement à JNPT Mumbai." },
        { title: "Conformité CCG intégrée", desc: "OEKO-TEX 100, coton traçable GOTS et documentation prête pour les normes du Golfe font partie de notre processus standard." },
        { title: "Marque propre évolutive", desc: "Étiquettes tissées, étiquettes volantes, emballage papier de soie et emballage personnalisé disponibles dès 300 pcs par style." },
        { title: "Un seul responsable de compte", desc: "Vous traitez avec une seule personne de la demande de devis à l'expédition. Il connaît vos tailles, votre marché, vos préférences QC." },
      ],
      closingNote: "Vous comparez encore des fournisseurs ? Demandez-nous un appel de référence avec un acheteur actuel sur votre marché.",
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
    fabricSourcing: {
      subtitle: "Conoscenza dei tessuti",
      title: "Da dove inizia il tuo tessuto",
      story: "Ogni capo che spediamo inizia da una conversazione che intratteniamo con i proprietari dei tessutifici da oltre un decennio. La rete di approvvigionamento di Vedant Fashion copre i cluster di tessuto woven di Surat, la fascia del cotone di Erode, gli hub di maglieria di Tirupur e i tessutifici di Bhilwara — il che significa che le esigenze dell'acquirente si traducono direttamente nel tessuto base corretto, senza gli scambi di messaggi che fanno perdere 3–4 settimane in un tipico ciclo di importazione.\n\nQuando un acquirente degli Emirati chiede un woven leggero adatto all'abaya, che drappa bene e supera OEKO-TEX 100, non cerchiamo — chiamiamo. Quando un rivenditore saudita ha bisogno di popeline di cotone 180 g/m² con finitura idrorepellente per la stagione del Ramadan, abbiamo i prezzi diretti dal tessutificio entro 48 ore.",
      fabricDetails: [
        { name: "Popeline di cotone (tinta unita)", origin: "Erode, Tamil Nadu", gsm: "90–120", bestFor: "Camicie, bluse, abiti leggeri", moqNote: "Da 500 m" },
        { name: "Misto lino-cotone", origin: "Surat, Gujarat", gsm: "140–180", bestFor: "Abbigliamento resort, coordinati estivi", moqNote: "Da 300 m" },
        { name: "Viscosa tessuta (stampata)", origin: "Surat, Gujarat", gsm: "80–110", bestFor: "Vestiti, kaftan, coordinati", moqNote: "Da 200 m" },
        { name: "Challis di viscosa", origin: "Surat, Gujarat", gsm: "70–95", bestFor: "Bluse fluenti, copricostume", moqNote: "Da 200 m" },
        { name: "Oxford di cotone", origin: "Coimbatore, Tamil Nadu", gsm: "150–180", bestFor: "Camicie strutturate, tuniche", moqNote: "Da 500 m" },
      ],
    },
    seasonalGuide: {
      subtitle: "Calendario degli ordini",
      title: "Quando ordinare per massimizzare l'impatto sugli scaffali",
      intro: "Il retail nei paesi del Golfo e in Europa opera secondo 4 finestre di acquisto distinte. Perdere il termine dell'ordine anche di sole 2 settimane può significare arrivare dopo il picco di vendita, avere scorte in eccesso o pagare il trasporto aereo per recuperare.",
      seasons: [
        {
          season: "Eid / Ramadan",
          months: "Ordine: ott–nov | Vendita: mar–apr",
          demand: "Molto alto — CCG",
          styles: "Silhouette modeste, bluse ornate, coordinati in tessuti pregiati",
          orderAdvice: "Confermare entro il 15 novembre per spedizione FOB a febbraio. Consigliata la prenotazione anticipata dei tessuti.",
        },
        {
          season: "Primavera / Estate",
          months: "Ordine: nov–gen | Vendita: mar–giu",
          demand: "Alto — Europa, Sudafrica",
          styles: "Camicie di lino, abiti in cotone, abbigliamento resort, tessuti stampati",
          orderAdvice: "Confermare entro il 15 gennaio per spedizione FOB a marzo. Tempi: 60–75 giorni.",
        },
        {
          season: "Autunno / Inverno",
          months: "Ordine: mag–lug | Vendita: set–nov",
          demand: "Moderato — Europa, Russia",
          styles: "Capi a strati, tessuti più pesanti, giacche ricamate",
          orderAdvice: "Confermare entro il 15 luglio per spedizione FOB a settembre. Tempi: 60–90 giorni.",
        },
        {
          season: "Festività / Fine anno",
          months: "Ordine: lug–ago | Vendita: dic–gen",
          demand: "Alto — globale",
          styles: "Paillettes, abbigliamento da cerimonia, coordinati festivi",
          orderAdvice: "Confermare entro il 31 agosto per spedizione FOB a ottobre. Trasporto aereo disponibile come opzione.",
        },
      ],
      bookingNote: "Vedant trattiene le scorte del tessutificio per gli ordini confermati. Se sei in ritardo di 4–6 settimane rispetto alla finestra d'ordine ideale, contattaci — abbiamo risolto scadenze ancora più strette.",
    },
    whyVedant: {
      subtitle: "Perché Vedant",
      title: "Cosa dicono gli acquirenti dopo il primo ordine",
      intro: "Non ti chiediamo di crederci sulla parola. Ecco cosa cambia davvero una volta che sposti la produzione a Vedant Fashion — basato sul feedback di acquirenti abituali negli Emirati, in Polonia, in Sudafrica e in Russia.",
      points: [
        { title: "Tempistiche che reggono", desc: "Il calendario di produzione è confermato nella fase dell'ordine — non rinegoziato alla spedizione. Il 94% delle nostre spedizioni parte entro 3 giorni dalla data FOB concordata." },
        { title: "Campioni senza problemi", desc: "Campioni proto spediti entro 12–15 giorni lavorativi. Controcampioni entro 7 giorni. Nessun ciclo di campioni da 6 settimane." },
        { title: "Prezzi FOB che sono davvero FOB", desc: "Il prezzo che quotiamo include imballaggio export, etichettatura, tutta la documentazione pre-spedizione e lo sdoganamento a JNPT Mumbai." },
        { title: "Conformità CCG integrata", desc: "OEKO-TEX 100, cotone tracciabile GOTS e documentazione pronta per gli standard del Golfo fanno parte del nostro processo standard." },
        { title: "Private label che scala", desc: "Etichette tessute, cartellini, carta velina e imballaggi personalizzati disponibili da 300 pz per stile." },
        { title: "Un unico account manager", desc: "Hai a che fare con una sola persona dal preventivo alla spedizione. Conosce le tue taglie, il tuo mercato, le tue preferenze di QC." },
      ],
      closingNote: "Stai ancora confrontando fornitori? Chiedi una chiamata di riferimento con un acquirente attuale nel tuo mercato.",
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
    fabricSourcing: {
      subtitle: "Stofkennis",
      title: "Waar uw stof begint",
      story: "Elk kledingstuk dat we verzenden begint met een gesprek dat we al meer dan tien jaar voeren met fabriekeigenaren. Het bevoorradingsnetwerk van Vedant Fashion omvat de geweven stofclusters van Surat, de katoengordel van Erode, de brei-hubs van Tirupur en de stofffabrieken van Bhilwara — wat betekent dat uw kopersbrief zich direct vertaalt naar de juiste basisstof zonder de heen-en-weercommunicatie die 3–4 weken kost in een typische importcyclus.\n\nWanneer een koper uit de VAE vraagt om een lichtgewicht geweven stof geschikt voor abayas die mooi valt en voldoet aan OEKO-TEX 100, zoeken we niet — we bellen. Wanneer een Saudische retailer 180 g/m² katoenen popeline nodig heeft met vochtafvoerende afwerking voor het Ramadan-seizoen, hebben we directe fabrieksprijzen binnen 48 uur.",
      fabricDetails: [
        { name: "Katoenen popeline (effen)", origin: "Erode, Tamil Nadu", gsm: "90–120", bestFor: "Hemden, blouses, lichte jurken", moqNote: "Vanaf 500 m" },
        { name: "Linnen-katoen mix", origin: "Surat, Gujarat", gsm: "140–180", bestFor: "Resortwear, zomerse sets", moqNote: "Vanaf 300 m" },
        { name: "Geweven viscose (bedrukt)", origin: "Surat, Gujarat", gsm: "80–110", bestFor: "Jurken, kaftans, sets", moqNote: "Vanaf 200 m" },
        { name: "Viscose challis", origin: "Surat, Gujarat", gsm: "70–95", bestFor: "Vloeiende blouses, strandomslagen", moqNote: "Vanaf 200 m" },
        { name: "Oxford katoenen weefsel", origin: "Coimbatore, Tamil Nadu", gsm: "150–180", bestFor: "Gestructureerde hemden, tunieken", moqNote: "Vanaf 500 m" },
      ],
    },
    seasonalGuide: {
      subtitle: "Bestelkalender",
      title: "Wanneer bestellen voor maximale impact in de winkel",
      intro: "Retailhandel in de Golfstaten en Europa werkt volgens 4 duidelijke inkoopvensters. De besteldeadline met slechts 2 weken missen kan betekenen dat u aankomt na de piekomzet, te veel voorraad heeft of luchtvrachtkosten moet betalen.",
      seasons: [
        {
          season: "Eid / Ramadan",
          months: "Bestelling: okt–nov | Retail: mrt–apr",
          demand: "Zeer hoog — GCC",
          styles: "Bescheiden silhouetten, versierde blouses, sets in rijke stoffen",
          orderAdvice: "Bevestig vóór 15 november voor FOB-verzending in februari. Aanbevolen: stof vooraf boeken.",
        },
        {
          season: "Lente / Zomer",
          months: "Bestelling: nov–jan | Retail: mrt–jun",
          demand: "Hoog — Europa, Zuid-Afrika",
          styles: "Linnen hemden, katoenen jurken, resortwear, bedrukte weefsels",
          orderAdvice: "Bevestig vóór 15 januari voor FOB-verzending in maart. Doorlooptijd: 60–75 dagen.",
        },
        {
          season: "Herfst / Winter",
          months: "Bestelling: mei–jul | Retail: sep–nov",
          demand: "Matig — Europa, Rusland",
          styles: "Gelaagde stukken, zwaardere weefsels, geborduurd jasjes",
          orderAdvice: "Bevestig vóór 15 juli voor FOB-verzending in september. Doorlooptijd: 60–90 dagen.",
        },
        {
          season: "Feestdagen / Jaarafsluiting",
          months: "Bestelling: jul–aug | Retail: dec–jan",
          demand: "Hoog — wereldwijd",
          styles: "Pailletten, gelegenheidskleding, feestelijke sets",
          orderAdvice: "Bevestig vóór 31 augustus voor FOB-verzending in oktober. Luchtvracht beschikbaar als back-up.",
        },
      ],
      bookingNote: "Vedant houdt fabrieksvoorraad aan voor bevestigde orders. Als u 4–6 weken achter uw ideale bestelvenster zit, neem dan contact op — we hebben krappere deadlines opgelost.",
    },
    whyVedant: {
      subtitle: "Waarom Vedant",
      title: "Wat kopers zeggen na de eerste bestelling",
      intro: "We vragen u niet om ons op ons woord te geloven. Dit is wat er werkelijk verandert wanneer u productie verplaatst naar Vedant Fashion — gebaseerd op feedback van terugkerende kopers in de VAE, Polen, Zuid-Afrika en Rusland.",
      points: [
        { title: "Doorlooptijden die standhouden", desc: "Onze productiekalender wordt vastgelegd bij de orderfase — niet heronderhandeld bij verzending. 94% van onze zendingen vertrekt binnen 3 dagen na de overeengekomen FOB-datum." },
        { title: "Monsters zonder drama", desc: "Proto-monsters verzonden binnen 12–15 werkdagen. Contrastmonsters binnen 7 dagen. Geen 6-weekse monstercycli." },
        { title: "FOB-prijzen die echt FOB zijn", desc: "De prijs die we offreren omvat exportverpakking, etikettering, alle pre-verzendingsdocumentatie en douaneklaring bij JNPT Mumbai." },
        { title: "GCC-compliance ingebouwd", desc: "OEKO-TEX 100, GOTS-traceerbaar katoen en Golf-standaard documentatie maken deel uit van ons standaard proces." },
        { title: "Private label dat schaalt", desc: "Geweven labels, hangtags, tissuepapier en aangepaste verpakkingen beschikbaar vanaf 300 stuks per stijl." },
        { title: "Één accountmanager", desc: "U heeft met één persoon te maken van offerteaanvraag tot verzending. Hij kent uw maatvoering, uw markt, uw QC-voorkeuren." },
      ],
      closingNote: "Vergelijkt u nog steeds leveranciers? Vraag ons om een referentiegesprek met een huidige koper in uw markt.",
    },
  },
};
