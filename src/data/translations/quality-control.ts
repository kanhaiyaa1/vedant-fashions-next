// ─────────────────────────────────────────────────────────────────────────────
// Quality Control page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// NOT translated: ISO/standard codes, equipment model names, tolerance values,
//                 test method codes (ISO 6330, etc.), AQL numbers
// ─────────────────────────────────────────────────────────────────────────────

export interface QcStageLocale {
  stage: string;
  checks: string[]; // 6 checks each
}

export interface DefectPolicyItem {
  level: string;
  desc: string;
}

export interface BuyerCard {
  title: string;
  desc: string;
}

export interface QualityControlLocale {
  hero: { subtitle: string; title: string; description: string };
  process: {
    subtitle: string;
    title: string;
    stages: QcStageLocale[]; // 4 stages
  };
  defects: {
    subtitle: string;
    title: string;
    items: DefectPolicyItem[]; // 3
    footnote: string;
  };
  lab: {
    subtitle: string;
    title: string;
    headers: [string, string, string, string];
    testNames: string[]; // 12 test names
    footnote: string;
  };
  buyers: {
    subtitle: string;
    title: string;
    cards: BuyerCard[]; // 3
  };
  cta: { title: string; description: string; buttonText: string };
}

export const qualityControlContent: Record<string, QualityControlLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Quality Control",
      title: "Zero-Defect Manufacturing Philosophy",
      description: "10-step quality control process from fabric sourcing to final dispatch. Every garment inspected for measurement, finishing, and appearance before packing. In-house cutting, stitching, and finishing with dedicated QC checks at each stage.",
    },
    process: {
      subtitle: "Process",
      title: "10-Step Quality Control Process",
      stages: [
        {
          stage: "Step 1 — Fabric Sourcing & Initial Inspection",
          checks: [
            "Check fabric quality, colour, and texture on arrival",
            "Verify fabric quantity against purchase order",
            "Inspect for weaving defects, holes, or stains",
            "Confirm fabric matches approved sample swatch",
          ],
        },
        {
          stage: "Step 2 — Fabric Testing",
          checks: [
            "GSM (weight per square metre) check",
            "Washing test — check for shrinkage after wash",
            "Colour fastness test — check colour after washing and rubbing",
            "Shrinkage test before cutting",
            "Shade matching across all fabric rolls",
          ],
        },
        {
          stage: "Step 3 — Trims & Accessories Checking",
          checks: [
            "Verify buttons, zippers, elastic, lace, and threads",
            "Check colours match approved specifications",
            "Count quantities before production begins",
            "Confirm labels, tags, and packaging materials are correct",
          ],
        },
        {
          stage: "Step 4 — Pattern & Sample Approval",
          checks: [
            "Prepare pattern as per tech pack or buyer specifications",
            "Stitch sample garment and check measurements",
            "Review fit, silhouette, and construction details",
            "Get buyer approval before bulk production starts",
          ],
        },
        {
          stage: "Step 5 — Cutting Quality Check",
          checks: [
            "Lay fabric carefully — avoid tension, creases, or uneven layers",
            "Check pattern placement and grain line accuracy",
            "Inspect cut pieces for correct size and shape",
            "Separate pieces size-wise and bundle correctly",
          ],
        },
        {
          stage: "Step 6 — In-Line Stitching Inspection",
          checks: [
            "Check stitch type and stitch density (SPI)",
            "Inspect seam strength and seam allowance",
            "Check thread colour matching fabric",
            "Identify and correct stitching defects at each machine",
          ],
        },
        {
          stage: "Step 7 — Measurement Checking During Production",
          checks: [
            "Measure garments against approved size chart",
            "Check chest, waist, hip, length, and sleeve measurements",
            "Identify and correct measurement issues during production",
            "Document measurement records for each batch",
          ],
        },
        {
          stage: "Step 8 — Finishing Quality Check",
          checks: [
            "Remove loose threads from all garments",
            "Check buttons, buttonholes, zippers, and hooks",
            "Inspect embroidery or sequin work for loose threads",
            "Iron and press garments as per specification",
          ],
        },
        {
          stage: "Step 9 — Final Garment Inspection",
          checks: [
            "Inspect every garment for appearance and finish",
            "Check label placement, content, and care instructions",
            "Verify colour and style against buyer's approved sample",
            "Reject and rework any defective pieces",
          ],
        },
        {
          stage: "Step 10 — Packing & Dispatch Check",
          checks: [
            "Fold and pack garments as per client's packing specifications",
            "Attach hangtags and insert size labels correctly",
            "Pack cartons with correct assortment and quantities",
            "Verify carton labels, shipment details, and total piece count before dispatch",
          ],
        },
      ],
    },
    defects: {
      subtitle: "Standards",
      title: "Defect Classification Policy",
      items: [
        { level: "Critical Defects", desc: "Safety hazards — needles, sharp objects, harmful chemicals. Zero tolerance. 100% inspection triggered." },
        { level: "Major Defects", desc: "Visible defects affecting salability — stains, holes, wrong size, mismatched patterns. AQL 2.5 applied." },
        { level: "Minor Defects", desc: "Slight imperfections not visible to end consumer at arm's length. AQL 4.0 applied." },
      ],
      footnote: "Inspection level adjustable to buyer requirements. Tightened inspection (Level III) available on request.",
    },
    lab: {
      subtitle: "Testing Lab",
      title: "In-House Textile Laboratory",
      headers: ["Test", "Method / Standard", "Equipment", "Tolerance"],
      testNames: [
        "Dimensional Stability",
        "Colorfastness — Washing",
        "Colorfastness — Rubbing",
        "Colorfastness — Light",
        "Tensile Strength",
        "Tear Strength",
        "Pilling Resistance",
        "GSM Verification",
        "Colour Matching",
        "pH Value",
        "Formaldehyde Content",
        "AZO Dye Detection",
      ],
      footnote: "Third-party testing via SGS, Bureau Veritas, and Intertek available for buyer-nominated standards. Reports in English or German.",
    },
    buyers: {
      subtitle: "For Buyers",
      title: "Your Quality, Our Priority",
      cards: [
        { title: "On-Site Inspections", desc: "Your QC team is welcome at any stage. We provide workspace, internet, and logistical support. Pre-shipment inspection slots reserved 5 days in advance." },
        { title: "Third-Party Audits", desc: "We coordinate with SGS, Bureau Veritas, Intertek, and TÜV on your behalf. Inspection costs billed transparently. Results shared within 24 hours." },
        { title: "Digital QC Reports", desc: "Real-time inspection photos, measurement reports, and AQL results shared via email or your PLM system. Full traceability from fabric lot to packed carton." },
      ],
    },
    cta: { title: "Want a Quality Audit?", description: "We welcome buyer QC teams and third-party auditors. Schedule a visit or request our latest inspection reports and test certificates.", buttonText: "Schedule Audit" },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "ضبط الجودة",
      title: "فلسفة التصنيع بلا عيوب",
      description: "مختبر نسيج داخلي، وفحص AQL 2.5 في كل مرحلة، والتزام كامل بإجراءات أخذ العينات وفق ISO 2859-1. نرصد العيوب قبل مغادرة منشأتنا — مضمون.",
    },
    process: {
      subtitle: "العملية",
      title: "ضمان الجودة بأربع مراحل",
      stages: [
        {
          stage: "فحص القماش الوارد",
          checks: [
            "التحقق من وزن GSM (ISO 3801)",
            "اختبار الانكماش — غسيل وتجفيف (ISO 6330)",
            "ثبات اللون للغسيل (ISO 105-C06، الدرجة 4+ مطلوبة)",
            "ثبات اللون للحك — رطب وجاف (ISO 105-X12)",
            "مسح العيوب البصرية — نظام 4 نقاط",
            "تحليل تركيب الألياف بالطيف تحت الأحمر (FTIR)",
          ],
        },
        {
          stage: "اعتماد ما قبل الإنتاج",
          checks: [
            "عينة المضاهاة مقابل جدول مواصفات المشتري المعتمد",
            "اعتماد الاحتواء على موديل حي لـ 3–5 مقاسات",
            "عدد الغرزات في البوصة وفحص متانة الدرزات",
            "التحقق من تطابق الزخارف والأزرار والإكسسوارات",
            "اختبار الغسيل على عينة PP — 3 غسلات منزلية",
            "الامتثال لموضع البطاقة ومحتواها ولوائح الاتحاد الأوروبي",
          ],
        },
        {
          stage: "الفحص أثناء الإنتاج",
          checks: [
            "تتبع العيوب في الوقت الفعلي لكل عملية خياطة",
            "أخذ عينات عشوائية AQL 2.5 خلال الإنتاج",
            "سياسة الإبرة المكسورة — محاسبة كل إبرة",
            "مراجعة توتر الخيط واتساق الغرزة",
            "مراجعة القياسات كل 500 قطعة (12 نقطة حرجة)",
            "تطابق النقش ومحاذاة الطباعة وفحص اتجاه الخيوط",
          ],
        },
        {
          stage: "الفحص النهائي (قبل الشحن)",
          checks: [
            "فحص AQL 2.5 وفق ISO 2859-1 المستوى II",
            "فحص قياسات 100% لجميع النقاط الحرجة",
            "كشف المعادن / مسح الإبر — لكل قطعة",
            "المظهر والكي والطي وفق معايير المشتري",
            "التحقق من مسح الباركود ودقة بطاقة الشنقل",
            "اختبار سقوط الكرتون (ISTA 1A) وفحص سلامة التعبئة",
          ],
        },
      ],
    },
    defects: {
      subtitle: "المعايير",
      title: "سياسة تصنيف العيوب",
      items: [
        { level: "العيوب الحرجة", desc: "مخاطر السلامة — إبر وأجسام حادة ومواد كيميائية ضارة. تسامح صفري. يُشغَّل فحص 100%." },
        { level: "العيوب الرئيسية", desc: "عيوب مرئية تؤثر على قابلية البيع — بقع وثقوب ومقاس خاطئ وأنماط غير متطابقة. يُطبَّق AQL 2.5." },
        { level: "العيوب الثانوية", desc: "شوائب طفيفة لا يراها المستهلك النهائي على مسافة ذراع. يُطبَّق AQL 4.0." },
      ],
      footnote: "مستوى الفحص قابل للتعديل وفق متطلبات المشتري. يتوفر الفحص المشدد (المستوى III) عند الطلب.",
    },
    lab: {
      subtitle: "مختبر الاختبار",
      title: "مختبر النسيج الداخلي",
      headers: ["الاختبار", "الطريقة / المعيار", "المعدات", "التسامح"],
      testNames: [
        "الثبات الأبعادي",
        "ثبات اللون — الغسيل",
        "ثبات اللون — الحك",
        "ثبات اللون — الضوء",
        "مقاومة الشد",
        "مقاومة التمزق",
        "مقاومة التنعيم",
        "التحقق من GSM",
        "مطابقة الألوان",
        "قيمة الحموضة pH",
        "محتوى الفورمالديهايد",
        "كشف أصباغ AZO",
      ],
      footnote: "يتوفر اختبار الطرف الثالث عبر SGS وBureau Veritas وIntertek للمعايير التي يحددها المشتري. تقارير باللغة الإنجليزية أو الألمانية.",
    },
    buyers: {
      subtitle: "للمشترين",
      title: "جودتكم — أولويتنا",
      cards: [
        { title: "الفحوصات الميدانية", desc: "فريق ضبط الجودة لديكم مرحب به في أي مرحلة. نوفر مكان عمل وإنترنت ودعماً لوجستياً. تُحجز مواعيد فحص الشحن قبل 5 أيام." },
        { title: "مراجعات الطرف الثالث", desc: "ننسق مع SGS وBureau Veritas وIntertek وTÜV نيابةً عنكم. تُحسب تكاليف الفحص بشفافية. تُشارَك النتائج خلال 24 ساعة." },
        { title: "تقارير ضبط الجودة الرقمية", desc: "صور الفحص الفوري وتقارير القياسات ونتائج AQL مُشارَكة عبر البريد الإلكتروني أو نظام PLM الخاص بكم. تتبع كامل من بالة القماش إلى الكرتون المعبأ." },
      ],
    },
    cta: { title: "هل تريد مراجعة الجودة؟", description: "نرحب بفرق ضبط الجودة لدى المشترين والمراجعين من الطرف الثالث. جدول زيارة أو اطلب أحدث تقارير الفحص وشهادات الاختبار.", buttonText: "جدولة المراجعة" },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Контроль качества",
      title: "Философия производства без дефектов",
      description: "Собственная текстильная лаборатория, инспекция AQL 2.5 на каждом этапе и полное соответствие процедурам выборки ISO 2859-1. Мы выявляем дефекты до выхода продукции с завода — гарантировано.",
    },
    process: {
      subtitle: "Процесс",
      title: "4-этапное обеспечение качества",
      stages: [
        {
          stage: "Входной контроль ткани",
          checks: [
            "Проверка веса GSM (ISO 3801)",
            "Испытание на усадку — стирка и сушка (ISO 6330)",
            "Устойчивость окраски к стирке (ISO 105-C06, требуется оценка 4+)",
            "Устойчивость окраски к трению — сухому и влажному (ISO 105-X12)",
            "Визуальный контроль дефектов — система 4 баллов",
            "Анализ состава волокна методом ИК-спектроскопии (FTIR)",
          ],
        },
        {
          stage: "Предпроизводственное согласование",
          checks: [
            "Контрольный образец vs. утверждённая покупателем спецификация",
            "Согласование посадки на живой модели в 3–5 размерах",
            "Проверка плотности строчки и прочности швов",
            "Контроль соответствия фурнитуры, пуговиц и аксессуаров",
            "Испытание стиркой на образце PP — 3 домашних стирки",
            "Размещение этикеток, содержание и соответствие требованиям ЕС",
          ],
        },
        {
          stage: "Встроенный контроль",
          checks: [
            "Отслеживание дефектов в режиме реального времени на каждой операции пошива",
            "Случайная выборка AQL 2.5 в ходе производства",
            "Политика сломанных игл — строгий учёт каждой иглы",
            "Контроль натяжения нити и равномерности строчки",
            "Контроль замеров каждые 500 изделий (12 критических точек)",
            "Соответствие рисунка, выравнивание печати, проверка долевой нити",
          ],
        },
        {
          stage: "Финальная инспекция (перед отгрузкой)",
          checks: [
            "Инспекция AQL 2.5 по ISO 2859-1 Уровень II",
            "100% проверка замеров по всем критическим точкам",
            "Обнаружение металла / сканирование игл — каждое изделие",
            "Внешний вид, глажка и складывание по стандартам покупателя",
            "Проверка сканирования штрихкода и точность ярлыков",
            "Испытание коробки на падение (ISTA 1A) и контроль упаковки",
          ],
        },
      ],
    },
    defects: {
      subtitle: "Стандарты",
      title: "Политика классификации дефектов",
      items: [
        { level: "Критические дефекты", desc: "Угрозы безопасности — иглы, острые предметы, вредные химические вещества. Нулевая терпимость. Запускается 100% инспекция." },
        { level: "Серьёзные дефекты", desc: "Видимые дефекты, влияющие на товарный вид — пятна, дыры, неверный размер, несовпадение рисунка. Применяется AQL 2.5." },
        { level: "Незначительные дефекты", desc: "Лёгкие несовершенства, не видимые конечному потребителю на расстоянии вытянутой руки. Применяется AQL 4.0." },
      ],
      footnote: "Уровень инспекции регулируется по требованиям покупателя. Усиленная инспекция (Уровень III) доступна по запросу.",
    },
    lab: {
      subtitle: "Испытательная лаборатория",
      title: "Собственная текстильная лаборатория",
      headers: ["Испытание", "Метод / Стандарт", "Оборудование", "Допуск"],
      testNames: [
        "Размерная стабильность",
        "Устойчивость окраски — стирка",
        "Устойчивость окраски — трение",
        "Устойчивость окраски — свет",
        "Прочность на разрыв",
        "Прочность на раздирание",
        "Стойкость к пиллингу",
        "Проверка GSM",
        "Соответствие цвета",
        "Значение pH",
        "Содержание формальдегида",
        "Обнаружение красителей AZO",
      ],
      footnote: "Испытания третьей стороной через SGS, Bureau Veritas и Intertek доступны для стандартов по выбору покупателя. Отчёты на английском или немецком языке.",
    },
    buyers: {
      subtitle: "Для покупателей",
      title: "Ваше качество — наш приоритет",
      cards: [
        { title: "Инспекции на месте", desc: "Ваша команда ОК приветствуется на любом этапе. Мы предоставляем рабочее место, интернет и логистическую поддержку. Слоты для предотгрузочной инспекции резервируются за 5 дней." },
        { title: "Аудиты третьей стороны", desc: "Мы координируем работу с SGS, Bureau Veritas, Intertek и TÜV от вашего имени. Стоимость инспекции выставляется прозрачно. Результаты передаются в течение 24 часов." },
        { title: "Цифровые отчёты ОК", desc: "Фото инспекций в реальном времени, отчёты по замерам и результаты AQL передаются по email или в вашу PLM-систему. Полная прослеживаемость от лота ткани до упакованной коробки." },
      ],
    },
    cta: { title: "Хотите провести аудит качества?", description: "Мы приветствуем команды ОК покупателей и аудиторов третьей стороны. Запланируйте визит или запросите последние отчёты об инспекции и сертификаты испытаний.", buttonText: "Запланировать аудит" },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Kontrola jakości",
      title: "Filozofia produkcji bez wad",
      description: "Własne laboratorium tekstylne, inspekcja AQL 2.5 na każdym etapie i pełna zgodność z procedurami pobierania próbek ISO 2859-1. Wykrywamy wady zanim opuszczą nasz zakład — gwarantujemy.",
    },
    process: {
      subtitle: "Proces",
      title: "4-etapowe zapewnienie jakości",
      stages: [
        {
          stage: "Kontrola tkaniny przychodzącej",
          checks: [
            "Weryfikacja gramatury GSM (ISO 3801)",
            "Badanie kurczliwości — pranie i suszenie (ISO 6330)",
            "Trwałość barwy na pranie (ISO 105-C06, wymagany stopień 4+)",
            "Trwałość barwy na tarcie — suche i mokre (ISO 105-X12)",
            "Wizualne skanowanie wad — system 4-punktowy",
            "Analiza składu włókna metodą spektroskopii FTIR",
          ],
        },
        {
          stage: "Zatwierdzenie przedprodukcyjne",
          checks: [
            "Próbka wzorcowa vs. arkusz specyfikacji zatwierdzony przez kupującego",
            "Zatwierdzenie dopasowania na żywym modelu w 3–5 rozmiarach",
            "Weryfikacja liczby ściegów i wytrzymałości szwów",
            "Kontrola zgodności wykończeń, guzików i akcesoriów",
            "Test prania na próbce PP — 3 prania domowe",
            "Umieszczenie etykiety, treść i zgodność z przepisami UE",
          ],
        },
        {
          stage: "Kontrola w trakcie produkcji",
          checks: [
            "Śledzenie wad w czasie rzeczywistym przy każdej operacji szycia",
            "Losowe pobieranie próbek AQL 2.5 podczas produkcji",
            "Polityka złamanych igieł — każda igła jest rozliczana",
            "Kontrola naprężenia nici i spójności ściegów",
            "Kontrola wymiarów co 500 sztuk (12 krytycznych punktów)",
            "Dopasowanie wzoru, wyrównanie nadruku i kontrola kierunku osnowy",
          ],
        },
        {
          stage: "Inspekcja końcowa (przed wysyłką)",
          checks: [
            "Inspekcja AQL 2.5 wg ISO 2859-1 Poziom II",
            "100% kontrola wymiarów wszystkich punktów krytycznych",
            "Wykrywanie metali / skanowanie igieł — każda sztuka",
            "Wygląd, prasowanie i składanie według standardów kupującego",
            "Weryfikacja skanowania kodów kreskowych i dokładność zawieszek",
            "Test upuszczenia kartonu (ISTA 1A) i kontrola integralności opakowania",
          ],
        },
      ],
    },
    defects: {
      subtitle: "Standardy",
      title: "Polityka klasyfikacji wad",
      items: [
        { level: "Wady krytyczne", desc: "Zagrożenia bezpieczeństwa — igły, ostre przedmioty, szkodliwe chemikalia. Zero tolerancji. Uruchamiana inspekcja 100%." },
        { level: "Wady poważne", desc: "Widoczne wady wpływające na sprzedawalność — plamy, dziury, zły rozmiar, niezgodne wzory. Stosowany AQL 2.5." },
        { level: "Wady drobne", desc: "Drobne niedoskonałości niewidoczne dla konsumenta końcowego z odległości wyciągniętej ręki. Stosowany AQL 4.0." },
      ],
      footnote: "Poziom inspekcji dostosowywany do wymagań kupującego. Zaostrzona inspekcja (Poziom III) dostępna na żądanie.",
    },
    lab: {
      subtitle: "Laboratorium testowe",
      title: "Własne laboratorium tekstylne",
      headers: ["Test", "Metoda / Standard", "Wyposażenie", "Tolerancja"],
      testNames: [
        "Stabilność wymiarowa",
        "Trwałość barwy — pranie",
        "Trwałość barwy — tarcie",
        "Trwałość barwy — światło",
        "Wytrzymałość na rozciąganie",
        "Wytrzymałość na rozdzieranie",
        "Odporność na pillowanie",
        "Weryfikacja GSM",
        "Dopasowanie kolorów",
        "Wartość pH",
        "Zawartość formaldehydu",
        "Wykrywanie barwników AZO",
      ],
      footnote: "Testy przez trzecią stronę via SGS, Bureau Veritas i Intertek dostępne dla standardów wskazanych przez kupującego. Raporty w języku angielskim lub niemieckim.",
    },
    buyers: {
      subtitle: "Dla kupujących",
      title: "Twoja jakość — nasz priorytet",
      cards: [
        { title: "Inspekcje na miejscu", desc: "Twój zespół QC jest mile widziany na każdym etapie. Zapewniamy miejsce pracy, internet i wsparcie logistyczne. Terminy inspekcji przed wysyłką rezerwowane 5 dni wcześniej." },
        { title: "Audyty stron trzecich", desc: "Koordynujemy działania SGS, Bureau Veritas, Intertek i TÜV w Twoim imieniu. Koszty inspekcji rozliczane przejrzyście. Wyniki udostępniane w ciągu 24 godzin." },
        { title: "Cyfrowe raporty QC", desc: "Zdjęcia inspekcji w czasie rzeczywistym, raporty pomiarowe i wyniki AQL udostępniane mailowo lub w systemie PLM. Pełna identyfikowalność od partii tkaniny do zapakowanego kartonu." },
      ],
    },
    cta: { title: "Chcesz przeprowadzić audyt jakości?", description: "Zapraszamy zespoły QC kupujących i audytorów stron trzecich. Zaplanuj wizytę lub poproś o najnowsze raporty z inspekcji i certyfikaty testów.", buttonText: "Zaplanuj audyt" },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Contrôle qualité",
      title: "Philosophie de fabrication zéro défaut",
      description: "Laboratoire textile interne, inspection AQL 2,5 à chaque étape et conformité totale aux procédures d'échantillonnage ISO 2859-1. Nous détectons les défauts avant qu'ils quittent notre usine — garanti.",
    },
    process: {
      subtitle: "Processus",
      title: "Assurance qualité en 4 étapes",
      stages: [
        {
          stage: "Inspection du tissu entrant",
          checks: [
            "Vérification du poids GSM (ISO 3801)",
            "Test de rétrécissement — lavage et séchage (ISO 6330)",
            "Solidité des teintures au lavage (ISO 105-C06, note 4+ requise)",
            "Solidité des teintures au frottement — sec et humide (ISO 105-X12)",
            "Contrôle visuel des défauts — système à 4 points",
            "Analyse de composition des fibres par spectroscopie FTIR",
          ],
        },
        {
          stage: "Approbation pré-production",
          checks: [
            "Contre-échantillon vs. fiche technique approuvée par l'acheteur",
            "Approbation de l'ajustement sur mannequin vivant en 3–5 tailles",
            "Vérification du nombre de points et de la résistance des coutures",
            "Contrôle de concordance des finitions, boutons et accessoires",
            "Test de lavage sur l'échantillon PP — 3 lavages domestiques",
            "Positionnement des étiquettes, contenu et conformité aux réglementations UE",
          ],
        },
        {
          stage: "Inspection en ligne",
          checks: [
            "Suivi des défauts en temps réel par opération de couture",
            "Échantillonnage aléatoire AQL 2,5 en cours de production",
            "Politique des aiguilles cassées — chaque aiguille comptabilisée",
            "Contrôle de la tension du fil et de la régularité des points",
            "Contrôle des mesures toutes les 500 pièces (12 points critiques)",
            "Correspondance des motifs, alignement des impressions et contrôle du droit-fil",
          ],
        },
        {
          stage: "Inspection finale (avant expédition)",
          checks: [
            "Inspection AQL 2,5 selon ISO 2859-1 Niveau II",
            "Contrôle des mesures à 100% sur tous les points critiques",
            "Détection de métal / balayage des aiguilles — chaque pièce",
            "Apparence, repassage et pliage aux normes de l'acheteur",
            "Vérification du scan code-barres et exactitude des étiquettes",
            "Test de chute du carton (ISTA 1A) et contrôle de l'intégrité de l'emballage",
          ],
        },
      ],
    },
    defects: {
      subtitle: "Normes",
      title: "Politique de classification des défauts",
      items: [
        { level: "Défauts critiques", desc: "Risques pour la sécurité — aiguilles, objets tranchants, produits chimiques nocifs. Tolérance zéro. Inspection à 100% déclenchée." },
        { level: "Défauts majeurs", desc: "Défauts visibles affectant la commercialisation — taches, trous, mauvaise taille, motifs non assortis. AQL 2,5 appliqué." },
        { level: "Défauts mineurs", desc: "Légères imperfections non visibles par le consommateur final à bout de bras. AQL 4,0 appliqué." },
      ],
      footnote: "Niveau d'inspection ajustable aux exigences de l'acheteur. Inspection renforcée (Niveau III) disponible sur demande.",
    },
    lab: {
      subtitle: "Laboratoire de tests",
      title: "Laboratoire textile interne",
      headers: ["Test", "Méthode / Norme", "Équipement", "Tolérance"],
      testNames: [
        "Stabilité dimensionnelle",
        "Solidité des teintures — lavage",
        "Solidité des teintures — frottement",
        "Solidité des teintures — lumière",
        "Résistance à la traction",
        "Résistance au déchirement",
        "Résistance au boulochage",
        "Vérification GSM",
        "Correspondance des couleurs",
        "Valeur pH",
        "Teneur en formaldéhyde",
        "Détection des colorants AZO",
      ],
      footnote: "Tests par tierce partie via SGS, Bureau Veritas et Intertek disponibles pour les normes désignées par l'acheteur. Rapports en anglais ou en allemand.",
    },
    buyers: {
      subtitle: "Pour les acheteurs",
      title: "Votre qualité, notre priorité",
      cards: [
        { title: "Inspections sur site", desc: "Votre équipe CQ est la bienvenue à toute étape. Nous fournissons un espace de travail, internet et un support logistique. Créneaux d'inspection pré-expédition réservés 5 jours à l'avance." },
        { title: "Audits tiers", desc: "Nous coordonnons avec SGS, Bureau Veritas, Intertek et TÜV en votre nom. Coûts d'inspection facturés de manière transparente. Résultats partagés dans les 24 heures." },
        { title: "Rapports CQ numériques", desc: "Photos d'inspection en temps réel, rapports de mesures et résultats AQL partagés par email ou votre système PLM. Traçabilité complète du lot de tissu au carton emballé." },
      ],
    },
    cta: { title: "Vous souhaitez un audit qualité ?", description: "Nous accueillons les équipes CQ des acheteurs et les auditeurs tiers. Planifiez une visite ou demandez nos derniers rapports d'inspection et certificats de tests.", buttonText: "Planifier un audit" },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Controllo qualità",
      title: "Filosofia di produzione a zero difetti",
      description: "Laboratorio tessile interno, ispezione AQL 2,5 ad ogni fase e piena conformità alle procedure di campionamento ISO 2859-1. Rilevare i difetti prima che lascino il nostro stabilimento — garantito.",
    },
    process: {
      subtitle: "Processo",
      title: "Garanzia qualità in 4 fasi",
      stages: [
        {
          stage: "Ispezione del tessuto in entrata",
          checks: [
            "Verifica del peso GSM (ISO 3801)",
            "Test di restringimento — lavaggio e asciugatura (ISO 6330)",
            "Solidità del colore al lavaggio (ISO 105-C06, voto 4+ richiesto)",
            "Solidità del colore allo sfregamento — asciutto e umido (ISO 105-X12)",
            "Scansione visiva dei difetti — sistema a 4 punti",
            "Analisi della composizione delle fibre tramite spettroscopia FTIR",
          ],
        },
        {
          stage: "Approvazione pre-produzione",
          checks: [
            "Campione di controllo vs. scheda tecnica approvata dall'acquirente",
            "Approvazione della vestibilità su modello in 3–5 taglie",
            "Verifica del numero di punti e della resistenza delle cuciture",
            "Controllo corrispondenza rifiniture, bottoni e accessori",
            "Test di lavaggio su campione PP — 3 lavaggi domestici",
            "Posizionamento etichette, contenuto e conformità alle normative UE",
          ],
        },
        {
          stage: "Ispezione in linea",
          checks: [
            "Tracciamento difetti in tempo reale per ogni operazione di cucitura",
            "Campionamento casuale AQL 2,5 durante la produzione",
            "Politica degli aghi rotti — ogni ago contabilizzato",
            "Controllo tensione del filo e uniformità del punto",
            "Controllo misure ogni 500 pezzi (12 punti critici)",
            "Corrispondenza del disegno, allineamento della stampa e controllo del dritto-filo",
          ],
        },
        {
          stage: "Ispezione finale (pre-spedizione)",
          checks: [
            "Ispezione AQL 2,5 per ISO 2859-1 Livello II",
            "Controllo misure al 100% su tutti i punti critici",
            "Rilevamento metalli / scansione aghi — ogni pezzo",
            "Aspetto, stiratura e piegatura secondo gli standard dell'acquirente",
            "Verifica scansione codice a barre e accuratezza dei cartellini",
            "Test caduta cartone (ISTA 1A) e verifica integrità imballo",
          ],
        },
      ],
    },
    defects: {
      subtitle: "Standard",
      title: "Politica di classificazione dei difetti",
      items: [
        { level: "Difetti critici", desc: "Rischi per la sicurezza — aghi, oggetti appuntiti, sostanze chimiche nocive. Tolleranza zero. Ispezione al 100% attivata." },
        { level: "Difetti gravi", desc: "Difetti visibili che influenzano la commerciabilità — macchie, fori, taglia errata, disegni non corrispondenti. AQL 2,5 applicato." },
        { level: "Difetti minori", desc: "Lievi imperfezioni non visibili al consumatore finale a distanza di un braccio. AQL 4,0 applicato." },
      ],
      footnote: "Livello di ispezione regolabile secondo i requisiti dell'acquirente. Ispezione rafforzata (Livello III) disponibile su richiesta.",
    },
    lab: {
      subtitle: "Laboratorio di test",
      title: "Laboratorio tessile interno",
      headers: ["Test", "Metodo / Standard", "Attrezzatura", "Tolleranza"],
      testNames: [
        "Stabilità dimensionale",
        "Solidità del colore — lavaggio",
        "Solidità del colore — sfregamento",
        "Solidità del colore — luce",
        "Resistenza alla trazione",
        "Resistenza alla lacerazione",
        "Resistenza al pilling",
        "Verifica GSM",
        "Corrispondenza colori",
        "Valore pH",
        "Contenuto di formaldeide",
        "Rilevamento coloranti AZO",
      ],
      footnote: "Test di terze parti tramite SGS, Bureau Veritas e Intertek disponibili per standard designati dall'acquirente. Rapporti in inglese o tedesco.",
    },
    buyers: {
      subtitle: "Per gli acquirenti",
      title: "La tua qualità, la nostra priorità",
      cards: [
        { title: "Ispezioni in loco", desc: "Il vostro team QC è benvenuto in qualsiasi fase. Forniamo spazio di lavoro, internet e supporto logistico. Slot per ispezioni pre-spedizione riservati 5 giorni prima." },
        { title: "Audit di terze parti", desc: "Coordiniamo con SGS, Bureau Veritas, Intertek e TÜV per vostro conto. Costi di ispezione fatturati in modo trasparente. Risultati condivisi entro 24 ore." },
        { title: "Rapporti QC digitali", desc: "Foto di ispezione in tempo reale, rapporti di misurazione e risultati AQL condivisi via email o nel vostro sistema PLM. Piena tracciabilità dal lotto di tessuto al cartone imballato." },
      ],
    },
    cta: { title: "Volete un audit di qualità?", description: "Accogliamo team QC degli acquirenti e auditor terzi. Programmate una visita o richiedete i nostri ultimi rapporti di ispezione e certificati di test.", buttonText: "Pianifica audit" },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Kwaliteitscontrole",
      title: "Productiefilosofie: nul defecten",
      description: "Intern textiellaboratorium, AQL 2,5 inspectie op elk stadium en volledige naleving van ISO 2859-1 steekproefprocedures. We detecteren defecten voordat ze onze fabriek verlaten — gegarandeerd.",
    },
    process: {
      subtitle: "Proces",
      title: "4-fasen kwaliteitsborging",
      stages: [
        {
          stage: "Inspectie inkomend weefsel",
          checks: [
            "GSM-gewichtsverificatie (ISO 3801)",
            "Krimptest — wassen en drogen (ISO 6330)",
            "Kleurechtheid aan wassen (ISO 105-C06, cijfer 4+ vereist)",
            "Kleurechtheid aan wrijving — droog en nat (ISO 105-X12)",
            "Visuele defectscan — 4-puntssysteem",
            "Vezelsamenstelling analyse via FTIR-spectroscopie",
          ],
        },
        {
          stage: "Voorproductie goedkeuring",
          checks: [
            "Controlemonster vs. door koper goedgekeurd spec-blad",
            "Pasgoedkeuring op levend model in 3–5 maten",
            "SPI-telling en naadsterkteverificatie",
            "Controle bijpassende garnituren, knopen en accessoires",
            "Wastest op PP-monster — 3 thuiswassen",
            "Etiketplaatsing, inhoud en EU-regelgevingsconformiteit",
          ],
        },
        {
          stage: "In-line inspectie",
          checks: [
            "Real-time defectregistratie per stikbewerking",
            "Willekeurige steekproef AQL 2,5 tijdens productie",
            "Gebroken-naaldbeleid — elke naald verantwoord",
            "Controle draadspanning en steekgelijkmatigheid",
            "Maatcontrole elke 500 stuks (12 kritieke punten)",
            "Dessinzekerheid, printuitlijning en draadrichtingcontrole",
          ],
        },
        {
          stage: "Eindcontrole (voor verzending)",
          checks: [
            "AQL 2,5 inspectie per ISO 2859-1 Niveau II",
            "100% maatcontrole op alle kritieke punten",
            "Metaaldetectie / naaldscanning — elk stuk",
            "Uiterlijk, strijken en vouwen op koopstandaarden",
            "Barcodescan verificatie en nauwkeurigheid hangtags",
            "Valdo0stest (ISTA 1A) en controle verpakkingsintegriteit",
          ],
        },
      ],
    },
    defects: {
      subtitle: "Normen",
      title: "Beleid defectclassificatie",
      items: [
        { level: "Kritieke defecten", desc: "Veiligheidsrisico's — naalden, scherpe voorwerpen, schadelijke chemicaliën. Nultolerantie. 100% inspectie geactiveerd." },
        { level: "Grote defecten", desc: "Zichtbare defecten die de verkoopbaarheid beïnvloeden — vlekken, gaten, verkeerde maat, niet-overeenkomende patronen. AQL 2,5 toegepast." },
        { level: "Kleine defecten", desc: "Lichte onvolkomenheden die niet zichtbaar zijn voor de eindconsument op armlengte. AQL 4,0 toegepast." },
      ],
      footnote: "Inspectieniveau aanpasbaar aan kopervereisten. Verscherpte inspectie (Niveau III) beschikbaar op aanvraag.",
    },
    lab: {
      subtitle: "Testlaboratorium",
      title: "Intern textiellaboratorium",
      headers: ["Test", "Methode / Norm", "Apparatuur", "Tolerantie"],
      testNames: [
        "Dimensionale stabiliteit",
        "Kleurechtheid — wassen",
        "Kleurechtheid — wrijving",
        "Kleurechtheid — licht",
        "Treksterkte",
        "Scheursterkte",
        "Pillingweerstand",
        "GSM-verificatie",
        "Kleurovereenkomst",
        "pH-waarde",
        "Formaldehydegehalte",
        "AZO-kleurstofdetectie",
      ],
      footnote: "Tests door derden via SGS, Bureau Veritas en Intertek beschikbaar voor door koper aangewezen normen. Rapporten in het Engels of Duits.",
    },
    buyers: {
      subtitle: "Voor kopers",
      title: "Uw kwaliteit, onze prioriteit",
      cards: [
        { title: "Inspecties op locatie", desc: "Uw QC-team is welkom in elke fase. We bieden werkruimte, internet en logistieke ondersteuning. Slots voor pre-verzending inspectie 5 dagen van tevoren gereserveerd." },
        { title: "Audits door derden", desc: "We coördineren met SGS, Bureau Veritas, Intertek en TÜV namens u. Inspectiekosten transparant gefactureerd. Resultaten gedeeld binnen 24 uur." },
        { title: "Digitale QC-rapporten", desc: "Real-time inspectiefoto's, meetrapporten en AQL-resultaten gedeeld via e-mail of uw PLM-systeem. Volledige traceerbaarheid van weefselpartij tot verpakte doos." },
      ],
    },
    cta: { title: "Wilt u een kwaliteitsaudit?", description: "We verwelkomen QC-teams van kopers en externe auditors. Plan een bezoek of vraag onze laatste inspectierapporten en testcertificaten op.", buttonText: "Audit plannen" },
  },
};
