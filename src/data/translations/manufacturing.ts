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
      title: "Vertically Integrated Garment Production",
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
          desc: "In-house textile lab for shrinkage, colorfastness, GSM, and tensile strength testing. All fabrics sourced from GOTS-certified mills across India.",
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
      title: "إنتاج ملابس متكامل رأسياً",
      description:
        "أربعة مرافق حديثة في غوجارات بطاقة 50,000 قطعة/شهر. من الألياف إلى الملبوس النهائي — كل خطوة تحت سقف واحد، معتمد بالكامل بشهادتي GOTS وBSCI.",
    },
    advantages: {
      subtitle: "لماذا يختارنا المشترون الأوروبيون",
      title: "مزايا التصنيع",
      items: [
        {
          title: "ضمان مهلة التسليم",
          desc: "مهلة تسليم قياسية 45 يوماً من تأكيد الطلب. مهلة 30 يوماً للطلبيات المتكررة. نقبل بند العقوبة في حالة التأخير.",
        },
        {
          title: "ضمان الجودة",
          desc: "معيار AQL 2.5 في كل مرحلة. كشف إبر 100%. فرق مراقبة الجودة التابعة للمشتري مرحب بها في الموقع. الفحص من طرف ثالث متاح عند الطلب.",
        },
        {
          title: "فريق حساب مخصص",
          desc: "يحصل كل عميل أوروبي على مسؤول تجاري مخصص ومسؤول جودة ومنسق لوجستي. نقطة تواصل واحدة من مرحلة العينات إلى الشحن.",
        },
        {
          title: "التكامل الرأسي",
          desc: "توريد الأقمشة والصباغة والقطع والخياطة والإنهاء والتعبئة — كل ذلك تحت إدارة واحدة. لا مقاولة من الباطن دون موافقة المشتري.",
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
          desc: "مختبر نسيج داخلي لاختبار الانكماش والثبات اللوني وكثافة الغرام والمتانة. جميع الأقمشة مصدرها مصانع معتمدة بشهادة GOTS في الهند وأوروبا.",
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
          name: "الوحدة 1 — الملابس المنسوجة",
          desc: "منشأتنا الرئيسية تتولى جميع عمليات إنتاج الملابس المنسوجة — بلوزات وقمصان وفساتين. 8 خطوط خياطة وقطع آلي ومختبر داخلي. إضاءة طبيعية وأنظمة تهوية في جميع أنحاء المنشأة.",
        },
        {
          name: "الوحدة 2 — الإنهاء والزخرفة",
          desc: "مخصصة لغسيل الملابس والصباغة والتطريز والإنهاءات الخاصة. غسيل إنزيمي وحجري ومعالجات بمرطبات صديقة للبيئة. محطة Zero Liquid Discharge تعمل منذ 2021.",
        },
        {
          name: "الوحدة 3 — العينات والبحث والتطوير",
          desc: "مركز نماذج أولية سريعة لعينات المشترين. تسليم عينات خلال 48 ساعة للطلبات العاجلة. غرفة أنماط CAD ومختبر نسيج بمطياف ضوئي ومكتبة اتجاهات موسمية.",
        },
        {
          name: "الوحدة 4 — الحياكة الدائرية والجيرسيه",
          desc: "معالجة حياكة دائرية للتيشيرتات وقمصان البولو وفساتين الجيرسيه. 4 خطوط إنتاج بطاقة 15,000 قطعة/شهر. تخصص في جيرسيه القطن العضوي ومزيج Tencel.",
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
        { label: "وحدات تصنيع" },
        { label: "عامل ماهر" },
        { label: "مهلة التسليم القياسية" },
      ],
    },
    cta: {
      title: "جدولة جولة افتراضية بالمصنع",
      description:
        "شاهد خطوط إنتاجنا في العمل. نقدم جولات فيديو مباشرة للمشترين المحتملين عبر جميع المرافق الأربعة.",
      buttonText: "احجز جولة",
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Производство",
      title: "Вертикально интегрированное швейное производство",
      description:
        "Четыре современных предприятия в Гуджарате с мощностью 50 000 единиц в месяц. От волокна до готового изделия — каждый этап под одной крышей, полная сертификация GOTS и BSCI.",
    },
    advantages: {
      subtitle: "Почему европейские покупатели выбирают нас",
      title: "Преимущества производства",
      items: [
        {
          title: "Гарантия сроков",
          desc: "Стандартный срок производства — 45 дней с момента подтверждения заказа. Экспресс-производство за 30 дней для повторных заказов. Принимаем штрафные условия за просрочку.",
        },
        {
          title: "Контроль качества",
          desc: "AQL 2.5 на каждом этапе. Стопроцентный контроль игл. Инспекционные группы покупателя приветствуются на месте. Независимая инспекция организуется по запросу.",
        },
        {
          title: "Персональная команда",
          desc: "Каждый европейский клиент получает персонального мерчандайзера, инспектора качества и логистического координатора. Единая точка контакта — от образцов до отгрузки.",
        },
        {
          title: "Вертикальная интеграция",
          desc: "Закупка ткани, крашение, раскрой, пошив, отделка и упаковка — всё под единым управлением. Субподряд без согласования с покупателем не допускается.",
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
          desc: "Собственная текстильная лаборатория для проверки усадки, устойчивости окраски, плотности GSM и прочности на разрыв. Все ткани закупаются на сертифицированных по GOTS фабриках в Индии и Европе.",
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
          name: "Предприятие 1 — Тканые изделия",
          desc: "Флагманское предприятие для всего тканого производства — блузы, рубашки, платья. 8 пошивочных линий, автоматический раскрой, собственная лаборатория. Естественное освещение и вентиляция во всех помещениях.",
        },
        {
          name: "Предприятие 2 — Отделка и украшение",
          desc: "Специализируется на стирке, крашении, вышивке и специальных отделках. Ферментная стирка, стирка с камнями, экологичные смягчающие обработки. Установка Zero Liquid Discharge работает с 2021 года.",
        },
        {
          name: "Предприятие 3 — Образцы и НИОКР",
          desc: "Центр оперативного прототипирования для образцов покупателей. Срочное изготовление образцов за 48 часов. CAD-ателье, текстильная лаборатория со спектрофотометром, сезонная трендовая библиотека.",
        },
        {
          name: "Предприятие 4 — Трикотаж",
          desc: "Производство кругловязаного трикотажа для футболок, поло и платьев из джерси. 4 производственные линии мощностью 15 000 ед./мес. Специализация: органический хлопковый джерси и смесовый Tencel.",
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
        { label: "Производственных предприятий" },
        { label: "Квалифицированных сотрудников" },
        { label: "Стандартный срок производства" },
      ],
    },
    cta: {
      title: "Запланируйте виртуальный тур по фабрике",
      description:
        "Посмотрите наши производственные линии в действии. Мы проводим видеоэкскурсии для потенциальных покупателей по всем четырём предприятиям.",
      buttonText: "Записаться на тур",
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Produkcja",
      title: "Pionowo zintegrowana produkcja odzieży",
      description:
        "Cztery nowoczesne zakłady w Gudźaracie o wydajności 50 000 szt./mies. Od włókna do gotowego wyrobu — każdy etap pod jednym dachem, z pełną certyfikacją GOTS i BSCI.",
    },
    advantages: {
      subtitle: "Dlaczego europejscy kupujący nas wybierają",
      title: "Zalety produkcji",
      items: [
        {
          title: "Gwarancja terminu realizacji",
          desc: "Standardowy termin 45 dni od potwierdzenia zamówienia. Ekspres 30 dni dostępny dla zamówień powtarzalnych. Klauzula karna za opóźnienie akceptowana.",
        },
        {
          title: "Zapewnienie jakości",
          desc: "AQL 2.5 na każdym etapie. 100% detekcja igieł. Zespoły QC kupującego mile widziane na miejscu. Inspekcja strony trzeciej organizowana na życzenie.",
        },
        {
          title: "Dedykowany zespół opiekuński",
          desc: "Każdy klient europejski otrzymuje dedykowanego kupca, inspektora jakości i koordynatora logistyki. Jeden punkt kontaktu — od wzornictwa po wysyłkę.",
        },
        {
          title: "Integracja pionowa",
          desc: "Pozyskiwanie tkanin, barwienie, krojenie, szycie, wykańczanie i pakowanie — wszystko pod jednym zarządem. Brak podwykonawstwa bez zgody kupującego.",
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
          desc: "Własne laboratorium tekstylne do badania kurczliwości, trwałości barwy, gęstości GSM i wytrzymałości na zerwanie. Wszystkie tkaniny ze zleceniodawców z certyfikatem GOTS w Indiach i Europie.",
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
          name: "Zakład 1 — Odzież tkana",
          desc: "Nasz sztandarowy zakład obsługujący całą produkcję tkanin — bluzki, koszule, sukienki. 8 linii szwalniczych, automatyczne krojenie, własne laboratorium. Naturalne oświetlenie i wentylacja w całym obiekcie.",
        },
        {
          name: "Zakład 2 — Wykańczalnia i zdobnictwo",
          desc: "Dedykowany do prania, barwienia, haftu i specjalnych wykończeń. Pranie enzymatyczne, pranie kamienne i ekologiczne zmiękczacze. Instalacja Zero Liquid Discharge działa od 2021 roku.",
        },
        {
          name: "Zakład 3 — Wzorcownia i B+R",
          desc: "Centrum szybkiego prototypowania dla wzorców kupujących. Realizacja wzorców w 48 h dla pilnych zleceń. Pracownia CAD, laboratorium tekstylne ze spektrofotometrem i sezonowa biblioteka trendów.",
        },
        {
          name: "Zakład 4 — Dzianina okrągła i jersey",
          desc: "Produkcja dzianiny okrągłej do t-shirtów, koszulek polo i sukienek jersey. 4 linie produkcyjne o wydajności 15 000 szt./mies. Specjalizacja: organic cotton jersey i mieszanki Tencel.",
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
        { label: "Zakładów produkcyjnych" },
        { label: "Wykwalifikowanych pracowników" },
        { label: "Standardowy czas realizacji" },
      ],
    },
    cta: {
      title: "Zaplanuj wirtualną wycieczkę po fabryce",
      description:
        "Zobacz nasze linie produkcyjne w akcji. Oferujemy transmisje wideo na żywo dla potencjalnych kupujących ze wszystkich czterech zakładów.",
      buttonText: "Zarezerwuj wycieczkę",
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Production",
      title: "Fabrication de vêtements verticalement intégrée",
      description:
        "Quatre installations de pointe au Gujarat avec une capacité de 50 000 pièces/mois. De la fibre au vêtement fini — chaque étape sous un même toit, entièrement certifié GOTS et BSCI.",
    },
    advantages: {
      subtitle: "Pourquoi les acheteurs européens nous choisissent",
      title: "Avantages de fabrication",
      items: [
        {
          title: "Garantie de délai",
          desc: "Délai standard de 45 jours à partir de la confirmation de commande. Express 30 jours disponible pour les commandes répétées. Clause pénale acceptée en cas de retard.",
        },
        {
          title: "Contrôle qualité",
          desc: "AQL 2.5 à chaque étape. Détection d'aiguilles 100%. Équipes QC de l'acheteur bienvenues sur site. Inspection tierce organisée sur demande.",
        },
        {
          title: "Équipe dédiée",
          desc: "Chaque client européen bénéficie d'un merchandiseur, d'un responsable QC et d'un coordinateur logistique dédiés. Interlocuteur unique de l'échantillonnage à l'expédition.",
        },
        {
          title: "Intégration verticale",
          desc: "Approvisionnement en tissu, teinture, coupe, couture, finition et emballage — le tout sous une seule gestion. Pas de sous-traitance sans accord de l'acheteur.",
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
          desc: "Laboratoire textile interne pour les tests de rétrécissement, solidité des couleurs, GSM et résistance à la traction. Tous les tissus proviennent de filatures certifiées GOTS en Inde et en Europe.",
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
          name: "Unité 1 — Vêtements tissés",
          desc: "Notre installation phare pour toute la production tissée — chemisiers, chemises, robes. 8 lignes de couture, coupe automatisée, laboratoire interne. Éclairage naturel et ventilation dans tout le bâtiment.",
        },
        {
          name: "Unité 2 — Finition et embellissement",
          desc: "Dédiée au lavage, teinture, broderie et finitions spéciales. Lavage enzymatique, stone wash et adoucissants écologiques. Installation Zero Liquid Discharge opérationnelle depuis 2021.",
        },
        {
          name: "Unité 3 — Prototypage et R&D",
          desc: "Centre de prototypage rapide pour les échantillons acheteurs. Livraison d'échantillons en 48h pour les demandes urgentes. Atelier patronage CAO, laboratoire textile avec spectrophotomètre, bibliothèque de tendances saisonnières.",
        },
        {
          name: "Unité 4 — Maille et jersey",
          desc: "Tricotage circulaire pour t-shirts, polos et robes en jersey. 4 lignes de production avec 15 000 pcs/mois. Spécialisation en jersey coton bio et mélanges Tencel.",
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
        { label: "Unités de fabrication" },
        { label: "Travailleurs qualifiés" },
        { label: "Délai de production standard" },
      ],
    },
    cta: {
      title: "Planifiez une visite virtuelle de l'usine",
      description:
        "Regardez nos lignes de production en action. Nous proposons des visites vidéo en direct aux acheteurs potentiels dans les quatre installations.",
      buttonText: "Réserver une visite",
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Produzione",
      title: "Produzione abbigliamento verticalmente integrata",
      description:
        "Quattro stabilimenti all'avanguardia nel Gujarat con capacità di 50.000 pezzi/mese. Dalla fibra al capo finito — ogni fase sotto lo stesso tetto, con piena certificazione GOTS e BSCI.",
    },
    advantages: {
      subtitle: "Perché gli acquirenti europei ci scelgono",
      title: "Vantaggi produttivi",
      items: [
        {
          title: "Garanzia sui tempi di consegna",
          desc: "Tempi standard di 45 giorni dalla conferma ordine. Express 30 giorni disponibile per ordini ripetuti. Clausola penale accettata per consegne in ritardo.",
        },
        {
          title: "Controllo qualità",
          desc: "AQL 2.5 ad ogni fase. Rilevamento aghi 100%. I team QC dell'acquirente sono benvenuti in loco. Ispezione terze parti organizzata su richiesta.",
        },
        {
          title: "Team dedicato",
          desc: "Ogni cliente europeo ha un merchandiser, un responsabile QC e un coordinatore logistico dedicati. Unico punto di contatto dal campionamento alla spedizione.",
        },
        {
          title: "Integrazione verticale",
          desc: "Approvvigionamento tessuti, tintura, taglio, cucitura, finitura e imballaggio — tutto sotto un'unica gestione. Nessun subappalto senza approvazione dell'acquirente.",
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
          desc: "Laboratorio tessile interno per test di restringimento, solidità del colore, GSM e resistenza alla trazione. Tutti i tessuti da filature certificate GOTS in India e in Europa.",
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
          name: "Unità 1 — Capi tessuti",
          desc: "Il nostro stabilimento principale per tutta la produzione tessuta — bluse, camicie, abiti. 8 linee di cucitura, taglio automatizzato, laboratorio interno. Illuminazione naturale e ventilazione in tutto lo stabilimento.",
        },
        {
          name: "Unità 2 — Finitura e abbellimento",
          desc: "Dedicata a lavaggi, tintura, ricamo e finiture speciali. Lavaggio enzimatico, stone wash e trattamenti ammorbidenti ecologici. Impianto Zero Liquid Discharge operativo dal 2021.",
        },
        {
          name: "Unità 3 — Campionatura e R&S",
          desc: "Centro di prototipazione rapida per campioni acquirenti. Campioni urgenti in 48 ore. Sala patroni CAD, laboratorio tessile con spettrofotometro e biblioteca tendenze stagionali.",
        },
        {
          name: "Unità 4 — Maglieria circolare e jersey",
          desc: "Lavorazione a maglia circolare per t-shirt, polo e abiti in jersey. 4 linee produttive da 15.000 pz/mese. Specializzazione in jersey di cotone biologico e blend Tencel.",
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
        { label: "Unità produttive" },
        { label: "Lavoratori qualificati" },
        { label: "Tempi di produzione standard" },
      ],
    },
    cta: {
      title: "Programma un tour virtuale dello stabilimento",
      description:
        "Guarda le nostre linee di produzione in azione. Offriamo tour video in diretta per acquirenti potenziali in tutti e quattro gli stabilimenti.",
      buttonText: "Prenota un tour",
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Productie",
      title: "Verticaal geïntegreerde kledingproductie",
      description:
        "Vier ultramoderne vestigingen in Gujarat met een capaciteit van 50.000 stuks/maand. Van vezel tot afgewerkt kledingstuk — elke stap onder één dak, volledig GOTS- en BSCI-gecertificeerd.",
    },
    advantages: {
      subtitle: "Waarom Europese inkopers voor ons kiezen",
      title: "Productie­voordelen",
      items: [
        {
          title: "Levertijdgarantie",
          desc: "Standaard levertijd 45 dagen na orderbevestiging. Express 30 dagen beschikbaar voor herhalingsorders. Boeteclausule voor te late levering geaccepteerd.",
        },
        {
          title: "Kwaliteitsborging",
          desc: "AQL 2.5 in elke fase. 100% naalddetectie. QC-teams van de inkoper zijn welkom op locatie. Onafhankelijke inspectie op verzoek geregeld.",
        },
        {
          title: "Dedicated accountteam",
          desc: "Elke Europese klant krijgt een vaste merchandiser, QC-medewerker en logistiek coördinator. Eén aanspreekpunt van bemonstering tot verzending.",
        },
        {
          title: "Verticale integratie",
          desc: "Stofinkoop, verving, snijden, naaien, afwerking en verpakking — alles onder één management. Geen uitbesteding zonder toestemming van de inkoper.",
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
          desc: "Eigen textiellaboratorium voor krimp, kleurechtheid, GSM en treksterkte. Alle stoffen van GOTS-gecertificeerde weefmills in India en Europa.",
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
          name: "Vestiging 1 — Geweven kledij",
          desc: "Onze vlaggenschipvestiging voor alle geweven productie — blouses, shirts, jurken. 8 naailijnen, geautomatiseerd snijden, eigen laboratorium. Daglicht en ventilatie door het hele gebouw.",
        },
        {
          name: "Vestiging 2 — Afwerking en decoratie",
          desc: "Gewijd aan wassen, verven, borduren en speciale afwerkingen. Enzymatisch wassen, stonewash en milieuvriendelijke verzachters. Zero Liquid Discharge-installatie operationeel sinds 2021.",
        },
        {
          name: "Vestiging 3 — Staalmakerij en R&D",
          desc: "Snel prototypingcentrum voor inkopers­stalen. Spoedlevering stalen binnen 48 uur. CAD-atelier, textiellaboratorium met spectrofotometer en seizoenstrends­bibliotheek.",
        },
        {
          name: "Vestiging 4 — Breisel en jersey",
          desc: "Rondbreien voor t-shirts, polo's en jerseyjurken. 4 productielijnen met 15.000 st./maand. Specialisatie in organisch katoenen jersey en Tencel-mengsels.",
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
        { label: "Productiefaciliteiten" },
        { label: "Gekwalificeerde medewerkers" },
        { label: "Standaard levertijd" },
      ],
    },
    cta: {
      title: "Plan een virtuele fabrieksrondleiding",
      description:
        "Bekijk onze productielijnen in actie. Wij bieden live videorondleidingen aan voor potentiële inkopers in alle vier vestigingen.",
      buttonText: "Rondleiding boeken",
    },
  },
};
