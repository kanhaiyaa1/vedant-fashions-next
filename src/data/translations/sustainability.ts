// ─────────────────────────────────────────────────────────────────────────────
// Sustainability page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// NOTE: practice names, reference tags, and metric numbers stay
//       in the component. statusKey ("onTrack" | "inProgress" | "planning" |
//       "committed") drives colours — translated label comes from statusLabels.
// ─────────────────────────────────────────────────────────────────────────────

export interface SustainabilityPillar {
  title: string;
  desc: string;
}

export interface SustainabilityLocale {
  hero: { subtitle: string; title: string; description: string };
  pillars: {
    subtitle: string;
    title: string;
    items: SustainabilityPillar[]; // 6 items
  };
  metrics: {
    subtitle: string;
    title: string;
    items: { label: string }[]; // 6 items — num stays in component
  };
  certSection: {
    subtitle: string;
    title: string;
    certs: { body: string; scope: string }[]; // 5 items — name & number in component
  };
  roadmap: {
    subtitle: string;
    title: string;
    items: { goal: string }[]; // 6 items
  };
  docs: {
    subtitle: string;
    title: string;
    heading: string;
    items: string[]; // 8 documentation items
  };
  statusLabels: {
    onTrack: string;
    inProgress: string;
    planning: string;
    committed: string;
  };
  cta: { title: string; description: string; buttonText: string };
}

export const sustainabilityContent: Record<string, SustainabilityLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Sustainability",
      title: "Fashion That Respects the Planet",
      description:
        "Sustainability isn't a marketing claim — it's a direction we're building into every thread we weave, every garment we stitch, and every shipment we dispatch. Practices we follow today, and a roadmap we're transparent about with our buyers in the UAE, Russia, Poland, and South Africa.",
    },
    pillars: {
      subtitle: "Our Approach",
      title: "Six Pillars of Sustainable Manufacturing",
      items: [
        {
          title: "Sustainable Fibres",
          desc: "A growing share of our production uses sustainable and recycled fabrics, including Tencel™ Lyocell and recycled blends. We are working toward full traceability from mill to finished garment as we expand our sustainable fabric sourcing.",
        },
        {
          title: "Water Stewardship",
          desc: "We are investing in water-conscious dyeing and finishing practices as we expand, including rainwater harvesting and closed-loop processes, with the goal of measurably reducing water use over time.",
        },
        {
          title: "Renewable Energy",
          desc: "We are exploring rooftop solar and renewable energy options as part of our expansion plans, with the aim of increasing the share of clean energy in our operations.",
        },
        {
          title: "Circular Production",
          desc: "Fabric offcuts are reused as insulation material and industrial rags wherever possible. We are increasing our use of recycled polyester and other recycled inputs, and recycling cardboard and poly packaging.",
        },
        {
          title: "Responsible Chemistry",
          desc: "We work toward REACH-compliant, AZO-free dyes and safer chemical inputs. Reducing our chemical footprint and moving toward internationally recognised safety benchmarks is part of our expansion roadmap.",
        },
        {
          title: "Social Impact",
          desc: "Living wages above local minimum at our facility. Women constitute a majority of our workforce. On-site skill development and a respectful, safe working environment for every worker.",
        },
      ],
    },
    metrics: {
      subtitle: "Impact",
      title: "Where We Stand Today",
      items: [
        { label: "Sustainable / Recycled Fibre Input" },
        { label: "Fabric Offcuts Reused" },
        { label: "Facility Expanding" },
        { label: "Textile Waste to Landfill Goal" },
        { label: "Women in Workforce" },
        { label: "REACH-Aware Chemistry" },
      ],
    },
    certSection: {
      subtitle: "Compliance & Quality",
      title: "Practices We Follow",
      certs: [
        { body: "Fabric Sourcing", scope: "Sustainable and recycled fabrics used wherever available, with sourcing expanding as we grow" },
        { body: "Product Safety", scope: "In-house checks for harmful substances and safe chemical inputs" },
        { body: "Recycled Materials", scope: "Growing use of recycled polyester and regenerated cotton blends" },
        { body: "Ethical Workplace", scope: "Fair labour practices, health & safety, and business ethics followed at our facility" },
        { body: "Environmental Care", scope: "Waste reduction and responsible practices across manufacturing and finishing" },
      ],
    },
    roadmap: {
      subtitle: "Roadmap",
      title: "Sustainability Targets",
      items: [
        { goal: "Increase organic and sustainable cotton share across all production lines" },
        { goal: "Expand renewable energy use at our Mumbai facility" },
        { goal: "Grow the share of recycled and sustainable fabrics in our supply chain" },
        { goal: "Formalise emissions tracking as we expand" },
        { goal: "Work toward internationally recognised chemical safety benchmarks" },
        { goal: "Pursue relevant certifications as the business scales" },
      ],
    },
    docs: {
      subtitle: "For Buyers",
      title: "Sustainability Documentation",
      heading: "Available on request:",
      items: [
        "Fabric composition and sourcing declaration",
        "In-house quality and safety inspection report",
        "Recycled content information where applicable",
        "Chemical safety declarations (REACH-aware)",
        "Order-level production details",
        "Factory working conditions overview",
        "Traceability information — mill to garment",
        "Sustainability practices summary",
      ],
    },
    statusLabels: { onTrack: "On Track", inProgress: "In Progress", planning: "Planning", committed: "Committed" },
    cta: {
      title: "Need Sustainability Documentation?",
      description:
        "We provide fabric sourcing information, quality inspection reports, and production documentation for every order. Ask us about our sustainability practices and expansion roadmap.",
      buttonText: "Request Documentation",
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "الاستدامة",
      title: "أزياء تحترم كوكبنا",
      description:
        "الاستدامة ليست ادعاءً تسويقياً — إنها اتجاه نبنيه في كل خيط ننسجه وكل ملبوس نخيطه وكل شحنة نرسلها. ممارسات نتبعها اليوم، وخارطة طريق نتحلى بالشفافية بشأنها مع مشترينا في الإمارات وروسيا وبولندا وجنوب أفريقيا.",
    },
    pillars: {
      subtitle: "نهجنا",
      title: "ستة ركائز للتصنيع المستدام",
      items: [
        {
          title: "أقمشة مستدامة",
          desc: "حصة متزايدة من إنتاجنا تستخدم أقمشة مستدامة ومعاد تدويرها، بما في ذلك Lyocell من Tencel™ والخلطات المعاد تدويرها. نعمل على تحقيق تتبع كامل من المصنع إلى الملبوس النهائي مع توسيع مصادر أقمشتنا المستدامة.",
        },
        {
          title: "إدارة المياه",
          desc: "نستثمر في ممارسات صباغة وتشطيب واعية بالمياه مع توسعنا، بما في ذلك تجميع مياه الأمطار والأنظمة الحلقية، بهدف خفض استهلاك المياه بشكل قابل للقياس مع مرور الوقت.",
        },
        {
          title: "الطاقة المتجددة",
          desc: "نستكشف خيارات الطاقة الشمسية على السطح والطاقة المتجددة كجزء من خطط توسعنا، بهدف زيادة حصة الطاقة النظيفة في عملياتنا.",
        },
        {
          title: "الإنتاج الدائري",
          desc: "يُعاد استخدام مخلفات الأقمشة كمواد عزل وخرق صناعية حيثما أمكن. نزيد استخدامنا للبوليستر المعاد تدويره ومدخلات أخرى معاد تدويرها، ونعيد تدوير التغليف الكرتوني والبلاستيكي.",
        },
        {
          title: "الكيمياء المسؤولة",
          desc: "نعمل نحو أصباغ متوافقة مع REACH وخالية من AZO ومدخلات كيميائية أكثر أماناً. تقليل بصمتنا الكيميائية والتحرك نحو معايير سلامة معترف بها دولياً جزء من خارطة طريق توسعنا.",
        },
        {
          title: "الأثر الاجتماعي",
          desc: "أجور معيشية تفوق الحد الأدنى المحلي في منشأتنا. تشكّل النساء غالبية قوتنا العاملة. برامج تطوير مهارات في الموقع وبيئة عمل آمنة ومحترمة لكل عامل.",
        },
      ],
    },
    metrics: {
      subtitle: "الأثر",
      title: "تقدم قابل للقياس",
      items: [
        { label: "مدخلات الألياف المستدامة / المعاد تدويرها" },
        { label: "إعادة استخدام مخلفات الأقمشة" },
        { label: "توسع المنشأة" },
        { label: "هدف تقليل النفايات النسيجية" },
        { label: "النساء في القوى العاملة" },
        { label: "الوعي بمعايير REACH الكيميائية" },
      ],
    },
    certSection: {
      subtitle: "الامتثال والجودة",
      title: "الممارسات التي نتبعها",
      certs: [
        { body: "توريد الأقمشة", scope: "استخدام أقمشة مستدامة ومعاد تدويرها حيثما توفرت، مع توسّع مستمر في مصادرنا" },
        { body: "سلامة المنتج", scope: "فحوصات داخلية للمواد الضارة ومدخلات كيميائية آمنة" },
        { body: "المواد المعاد تدويرها", scope: "استخدام متزايد للبوليستر المعاد تدويره وخلطات القطن المتجدد" },
        { body: "بيئة عمل أخلاقية", scope: "ممارسات عمل عادلة وصحة وسلامة وأخلاقيات عمل في منشأتنا" },
        { body: "العناية البيئية", scope: "تقليل النفايات وممارسات مسؤولة عبر التصنيع والتشطيب" },
      ],
    },
    roadmap: {
      subtitle: "خارطة الطريق",
      title: "أهداف الاستدامة",
      items: [
        { goal: "زيادة حصة القطن العضوي والمستدام عبر جميع خطوط الإنتاج" },
        { goal: "توسيع استخدام الطاقة المتجددة في منشأتنا بمومباي" },
        { goal: "زيادة حصة الأقمشة المعاد تدويرها والمستدامة في سلسلة التوريد" },
        { goal: "إضفاء الطابع الرسمي على تتبع الانبعاثات مع توسعنا" },
        { goal: "العمل نحو معايير سلامة كيميائية معترف بها دولياً" },
        { goal: "السعي للحصول على الشهادات ذات الصلة مع نمو الأعمال" },
      ],
    },
    docs: {
      subtitle: "للمشترين",
      title: "وثائق الاستدامة",
      heading: "متاح عند الطلب:",
      items: [
        "إقرار تركيب الأقمشة ومصدرها",
        "تقرير فحص الجودة والسلامة الداخلي",
        "معلومات المحتوى المعاد تدويره عند توفرها",
        "إقرارات السلامة الكيميائية (وفق REACH)",
        "تفاصيل الإنتاج على مستوى الطلبية",
        "نظرة عامة على ظروف العمل في المصنع",
        "معلومات التتبع — من المصنع إلى الملبوس",
        "ملخص ممارسات الاستدامة",
      ],
    },
    statusLabels: { onTrack: "في المسار الصحيح", inProgress: "قيد التنفيذ", planning: "قيد التخطيط", committed: "ملتزمون" },
    cta: {
      title: "هل تحتاج إلى وثائق الاستدامة؟",
      description:
        "نقدم معلومات مصادر الأقمشة وتقارير فحص الجودة ووثائق الإنتاج لكل طلبية. اسألنا عن ممارسات الاستدامة وخارطة طريق التوسع لدينا.",
      buttonText: "طلب الوثائق",
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Устойчивое развитие",
      title: "Мода, уважающая планету",
      description:
        "Устойчивое развитие — не маркетинговый лозунг, а направление, которое мы закладываем в каждую нить, каждое изделие и каждую отгрузку. Практики, которым мы следуем сегодня, и план развития, о котором мы открыто рассказываем нашим покупателям в ОАЭ, России, Польше и Южной Африке.",
    },
    pillars: {
      subtitle: "Наш подход",
      title: "Шесть столпов устойчивого производства",
      items: [
        {
          title: "Устойчивые волокна",
          desc: "Растущая доля нашего производства использует устойчивые и переработанные ткани, включая Tencel™ Lyocell и переработанные смеси. Мы работаем над полной прослеживаемостью от фабрики до готового изделия по мере расширения закупок устойчивых тканей.",
        },
        {
          title: "Управление водными ресурсами",
          desc: "Мы инвестируем в осознанные практики крашения и отделки по мере расширения, включая сбор дождевой воды и замкнутые системы, с целью измеримого снижения потребления воды со временем.",
        },
        {
          title: "Возобновляемая энергия",
          desc: "Мы изучаем варианты крышных солнечных установок и возобновляемой энергии в рамках планов расширения, с целью увеличения доли чистой энергии в наших операциях.",
        },
        {
          title: "Замкнутое производство",
          desc: "Текстильные отходы по возможности повторно используются как утеплитель и производственные тряпки. Мы увеличиваем использование переработанного полиэстера и других переработанных материалов, перерабатываем картон и упаковку.",
        },
        {
          title: "Ответственная химия",
          desc: "Мы работаем над переходом на красители, соответствующие REACH, без AZO, и более безопасные химические вещества. Снижение химического воздействия и переход к международно признанным стандартам безопасности — часть нашего плана расширения.",
        },
        {
          title: "Социальное воздействие",
          desc: "Заработная плата выше местного прожиточного минимума на нашем предприятии. Женщины составляют большинство персонала. Программы развития навыков на месте и безопасная, уважительная рабочая среда для каждого сотрудника.",
        },
      ],
    },
    metrics: {
      subtitle: "Результаты",
      title: "Измеримый прогресс",
      items: [
        { label: "Устойчивые / переработанные волокна" },
        { label: "Повторное использование обрезков ткани" },
        { label: "Предприятие расширяется" },
        { label: "Цель по отходам на свалку" },
        { label: "Женщин в коллективе" },
        { label: "Осведомлённость о стандарте REACH" },
      ],
    },
    certSection: {
      subtitle: "Соответствие и качество",
      title: "Практики, которым мы следуем",
      certs: [
        { body: "Закупка тканей", scope: "Использование устойчивых и переработанных тканей там, где это возможно, с расширением источников" },
        { body: "Безопасность продукции", scope: "Внутренние проверки на вредные вещества и безопасные химические материалы" },
        { body: "Переработанные материалы", scope: "Растущее использование переработанного полиэстера и смесей регенерированного хлопка" },
        { body: "Этичное рабочее место", scope: "Справедливые трудовые практики, охрана труда и деловая этика на нашем предприятии" },
        { body: "Забота об окружающей среде", scope: "Снижение отходов и ответственные практики в производстве и отделке" },
      ],
    },
    roadmap: {
      subtitle: "Дорожная карта",
      title: "Цели устойчивого развития",
      items: [
        { goal: "Увеличить долю органического и устойчивого хлопка на всех производственных линиях" },
        { goal: "Расширить использование возобновляемой энергии на предприятии в Мумбаи" },
        { goal: "Увеличить долю переработанных и устойчивых тканей в цепочке поставок" },
        { goal: "Формализовать учёт выбросов по мере расширения" },
        { goal: "Двигаться к международно признанным стандартам химической безопасности" },
        { goal: "Стремиться к получению соответствующих сертификатов по мере роста бизнеса" },
      ],
    },
    docs: {
      subtitle: "Для покупателей",
      title: "Документация по устойчивому развитию",
      heading: "Доступно по запросу:",
      items: [
        "Декларация состава и происхождения ткани",
        "Внутренний отчёт о проверке качества и безопасности",
        "Информация о переработанном содержимом, если применимо",
        "Декларации химической безопасности (с учётом REACH)",
        "Детали производства по заказу",
        "Обзор условий труда на фабрике",
        "Информация о прослеживаемости — от фабрики до изделия",
        "Краткое описание практик устойчивого развития",
      ],
    },
    statusLabels: { onTrack: "В плане", inProgress: "Выполняется", planning: "Планируется", committed: "Принято" },
    cta: {
      title: "Нужна документация по устойчивому развитию?",
      description:
        "Предоставляем информацию о происхождении тканей, отчёты о проверке качества и производственную документацию для каждого заказа. Спросите нас о наших практиках устойчивого развития и планах расширения.",
      buttonText: "Запросить документацию",
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Zrównoważony rozwój",
      title: "Moda szanująca naszą planetę",
      description:
        "Zrównoważony rozwój to nie hasło marketingowe — to kierunek, który wbudowujemy w każdą nitkę, każdy szyty wyrób i każdą wysyłkę. Praktyki, których przestrzegamy dziś, i plan rozwoju, o którym otwarcie mówimy naszym kupującym w ZEA, Rosji, Polsce i RPA.",
    },
    pillars: {
      subtitle: "Nasze podejście",
      title: "Sześć filarów zrównoważonej produkcji",
      items: [
        {
          title: "Zrównoważone włókna",
          desc: "Rosnąca część naszej produkcji korzysta ze zrównoważonych i z recyklingu tkanin, w tym Tencel™ Lyocell i mieszanek z recyklingu. Pracujemy nad pełną identyfikowalnością od zakładu do gotowego wyrobu w miarę rozszerzania naszych zrównoważonych źródeł tkanin.",
        },
        {
          title: "Gospodarka wodna",
          desc: "Inwestujemy w świadome praktyki barwienia i wykańczania w miarę rozwoju, w tym zbieranie wody deszczowej i systemy zamknięte, z celem mierzalnej redukcji zużycia wody w czasie.",
        },
        {
          title: "Energia odnawialna",
          desc: "Rozważamy dachowe instalacje fotowoltaiczne i opcje energii odnawialnej w ramach naszych planów rozwoju, dążąc do zwiększenia udziału czystej energii w naszych operacjach.",
        },
        {
          title: "Produkcja cyrkularna",
          desc: "Odpady tkaninowe są ponownie wykorzystywane jako materiał izolacyjny i szmaty przemysłowe, gdy tylko to możliwe. Zwiększamy wykorzystanie poliestru z recyklingu i innych materiałów z recyklingu, a tekturę i opakowania z tworzyw sztucznych poddajemy recyklingowi.",
        },
        {
          title: "Odpowiedzialna chemia",
          desc: "Dążymy do barwników zgodnych z REACH, bez AZO, oraz bezpieczniejszych składników chemicznych. Redukcja naszego śladu chemicznego i dążenie do uznanych międzynarodowo standardów bezpieczeństwa są częścią naszego planu rozwoju.",
        },
        {
          title: "Wpływ społeczny",
          desc: "Wynagrodzenia wyższe od lokalnego minimum w naszym zakładzie. Kobiety stanowią większość naszej siły roboczej. Programy rozwoju umiejętności na miejscu oraz bezpieczne, oparte na szacunku środowisko pracy dla każdego pracownika.",
        },
      ],
    },
    metrics: {
      subtitle: "Wyniki",
      title: "Mierzalny postęp",
      items: [
        { label: "Udział włókien zrównoważonych / z recyklingu" },
        { label: "Ponowne wykorzystanie odpadów tkaninowych" },
        { label: "Zakład się rozwija" },
        { label: "Cel redukcji odpadów na składowisku" },
        { label: "Kobiety w sile roboczej" },
        { label: "Świadomość standardu REACH" },
      ],
    },
    certSection: {
      subtitle: "Zgodność i jakość",
      title: "Praktyki, których przestrzegamy",
      certs: [
        { body: "Pozyskiwanie tkanin", scope: "Wykorzystanie zrównoważonych i pochodzących z recyklingu tkanin tam, gdzie to możliwe, z rosnącym zakresem źródeł" },
        { body: "Bezpieczeństwo produktu", scope: "Wewnętrzne kontrole szkodliwych substancji i bezpiecznych składników chemicznych" },
        { body: "Materiały z recyklingu", scope: "Rosnące wykorzystanie poliestru z recyklingu i mieszanek regenerowanej bawełny" },
        { body: "Etyczne miejsce pracy", scope: "Uczciwe praktyki pracy, BHP i etyka biznesowa w naszym zakładzie" },
        { body: "Troska o środowisko", scope: "Redukcja odpadów i odpowiedzialne praktyki w produkcji i wykańczaniu" },
      ],
    },
    roadmap: {
      subtitle: "Plan działania",
      title: "Cele zrównoważonego rozwoju",
      items: [
        { goal: "Zwiększenie udziału bawełny organicznej i zrównoważonej na wszystkich liniach produkcyjnych" },
        { goal: "Rozszerzenie wykorzystania energii odnawialnej w zakładzie w Mumbaju" },
        { goal: "Zwiększenie udziału tkanin z recyklingu i zrównoważonych w łańcuchu dostaw" },
        { goal: "Sformalizowanie monitorowania emisji w miarę rozwoju" },
        { goal: "Dążenie do uznanych międzynarodowo standardów bezpieczeństwa chemicznego" },
        { goal: "Dążenie do odpowiednich certyfikatów w miarę rozwoju firmy" },
      ],
    },
    docs: {
      subtitle: "Dla kupujących",
      title: "Dokumentacja zrównoważonego rozwoju",
      heading: "Dostępne na życzenie:",
      items: [
        "Deklaracja składu i pochodzenia tkaniny",
        "Wewnętrzny raport kontroli jakości i bezpieczeństwa",
        "Informacje o zawartości materiałów z recyklingu, jeśli dotyczy",
        "Deklaracje bezpieczeństwa chemicznego (z uwzględnieniem REACH)",
        "Szczegóły produkcji na poziomie zamówienia",
        "Przegląd warunków pracy w fabryce",
        "Informacje o identyfikowalności — od zakładu do wyrobu",
        "Podsumowanie praktyk zrównoważonego rozwoju",
      ],
    },
    statusLabels: { onTrack: "Zgodnie z planem", inProgress: "W realizacji", planning: "W planowaniu", committed: "Zobowiązanie" },
    cta: {
      title: "Potrzebujesz dokumentacji zrównoważonego rozwoju?",
      description:
        "Dostarczamy informacje o pochodzeniu tkanin, raporty kontroli jakości i dokumentację produkcyjną dla każdego zamówienia. Zapytaj nas o nasze praktyki zrównoważonego rozwoju i plan rozwoju.",
      buttonText: "Zamów dokumentację",
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Durabilité",
      title: "Une mode qui respecte la planète",
      description:
        "La durabilité n'est pas une promesse marketing — c'est une direction que nous intégrons dans chaque fil tissé, chaque vêtement cousu et chaque expédition. Des pratiques que nous suivons aujourd'hui, et une feuille de route dont nous sommes transparents avec nos acheteurs aux Émirats arabes unis, en Russie, en Pologne et en Afrique du Sud.",
    },
    pillars: {
      subtitle: "Notre approche",
      title: "Six piliers d'une fabrication durable",
      items: [
        {
          title: "Fibres durables",
          desc: "Une part croissante de notre production utilise des tissus durables et recyclés, dont le Tencel™ Lyocell et des mélanges recyclés. Nous travaillons vers une traçabilité complète de l'usine jusqu'au vêtement fini à mesure que nous développons nos sources de tissus durables.",
        },
        {
          title: "Gestion de l'eau",
          desc: "Nous investissons dans des pratiques de teinture et de finition économes en eau à mesure de notre développement, incluant la récupération des eaux de pluie et des systèmes en boucle fermée, avec l'objectif de réduire mesurablement notre consommation d'eau au fil du temps.",
        },
        {
          title: "Énergie renouvelable",
          desc: "Nous explorons les options solaires en toiture et d'énergie renouvelable dans le cadre de nos plans de développement, avec l'objectif d'augmenter la part d'énergie propre dans nos opérations.",
        },
        {
          title: "Production circulaire",
          desc: "Les chutes de tissu sont réutilisées comme matériau d'isolation et chiffons industriels dans la mesure du possible. Nous augmentons notre utilisation de polyester recyclé et d'autres intrants recyclés, et recyclons cartons et emballages plastiques.",
        },
        {
          title: "Chimie responsable",
          desc: "Nous travaillons vers des colorants conformes REACH, sans AZO, et des intrants chimiques plus sûrs. Réduire notre empreinte chimique et évoluer vers des référentiels de sécurité reconnus internationalement fait partie de notre feuille de route de développement.",
        },
        {
          title: "Impact social",
          desc: "Salaires supérieurs au minimum local dans notre site. Les femmes représentent la majorité de notre effectif. Programmes de développement des compétences sur site et environnement de travail sûr et respectueux pour chaque employé.",
        },
      ],
    },
    metrics: {
      subtitle: "Impact",
      title: "Progrès mesurables",
      items: [
        { label: "Fibres durables / recyclées" },
        { label: "Chutes de tissu réutilisées" },
        { label: "Site en développement" },
        { label: "Objectif de réduction des déchets" },
        { label: "Femmes dans l'effectif" },
        { label: "Sensibilisation à la norme REACH" },
      ],
    },
    certSection: {
      subtitle: "Conformité et qualité",
      title: "Pratiques que nous suivons",
      certs: [
        { body: "Approvisionnement en tissus", scope: "Utilisation de tissus durables et recyclés dès que possible, avec un approvisionnement en expansion" },
        { body: "Sécurité produit", scope: "Contrôles internes des substances nocives et intrants chimiques sûrs" },
        { body: "Matériaux recyclés", scope: "Utilisation croissante de polyester recyclé et de mélanges de coton régénéré" },
        { body: "Lieu de travail éthique", scope: "Pratiques de travail équitables, santé & sécurité et éthique des affaires sur notre site" },
        { body: "Soin environnemental", scope: "Réduction des déchets et pratiques responsables dans la fabrication et la finition" },
      ],
    },
    roadmap: {
      subtitle: "Feuille de route",
      title: "Objectifs de durabilité",
      items: [
        { goal: "Augmenter la part de coton biologique et durable sur toutes les lignes de production" },
        { goal: "Développer l'utilisation d'énergie renouvelable sur notre site de Mumbai" },
        { goal: "Augmenter la part de tissus recyclés et durables dans notre chaîne d'approvisionnement" },
        { goal: "Formaliser le suivi des émissions à mesure de notre développement" },
        { goal: "Progresser vers des référentiels de sécurité chimique reconnus internationalement" },
        { goal: "Rechercher les certifications pertinentes à mesure que l'entreprise se développe" },
      ],
    },
    docs: {
      subtitle: "Pour les acheteurs",
      title: "Documentation sur la durabilité",
      heading: "Disponible sur demande :",
      items: [
        "Déclaration de composition et d'origine du tissu",
        "Rapport interne d'inspection qualité et sécurité",
        "Informations sur le contenu recyclé le cas échéant",
        "Déclarations de sécurité chimique (conformité REACH)",
        "Détails de production par commande",
        "Aperçu des conditions de travail en usine",
        "Informations de traçabilité — de l'usine au vêtement",
        "Résumé des pratiques de durabilité",
      ],
    },
    statusLabels: { onTrack: "Dans les temps", inProgress: "En cours", planning: "En planification", committed: "Engagé" },
    cta: {
      title: "Besoin de documentation sur la durabilité ?",
      description:
        "Nous fournissons des informations sur l'origine des tissus, des rapports d'inspection qualité et une documentation de production pour chaque commande. Demandez-nous nos pratiques de durabilité et notre feuille de route de développement.",
      buttonText: "Demander la documentation",
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Sostenibilità",
      title: "Moda che rispetta il pianeta",
      description:
        "La sostenibilità non è un claim di marketing — è una direzione che stiamo integrando in ogni filo che tessiamo, ogni capo che cuciamo e ogni spedizione che inviamo. Pratiche che seguiamo oggi, e un percorso di crescita di cui siamo trasparenti con i nostri acquirenti negli Emirati Arabi Uniti, in Russia, Polonia e Sudafrica.",
    },
    pillars: {
      subtitle: "Il nostro approccio",
      title: "Sei pilastri della produzione sostenibile",
      items: [
        {
          title: "Fibre sostenibili",
          desc: "Una quota crescente della nostra produzione utilizza tessuti sostenibili e riciclati, tra cui Tencel™ Lyocell e misti riciclati. Stiamo lavorando verso una tracciabilità completa dallo stabilimento al capo finito, ampliando le nostre fonti di tessuti sostenibili.",
        },
        {
          title: "Gestione delle acque",
          desc: "Stiamo investendo in pratiche di tintura e finitura attente all'acqua man mano che cresciamo, inclusa la raccolta dell'acqua piovana e sistemi a circuito chiuso, con l'obiettivo di ridurre in modo misurabile il consumo d'acqua nel tempo.",
        },
        {
          title: "Energia rinnovabile",
          desc: "Stiamo esplorando opzioni solari sul tetto ed energia rinnovabile come parte dei nostri piani di espansione, con l'obiettivo di aumentare la quota di energia pulita nelle nostre operazioni.",
        },
        {
          title: "Produzione circolare",
          desc: "Gli scarti di tessuto vengono riutilizzati come materiale isolante e stracci industriali ove possibile. Stiamo aumentando l'uso di poliestere riciclato e altri materiali riciclati, riciclando cartone e imballaggi in plastica.",
        },
        {
          title: "Chimica responsabile",
          desc: "Lavoriamo verso coloranti conformi REACH, privi di AZO, e ingredienti chimici più sicuri. Ridurre la nostra impronta chimica e muoverci verso standard di sicurezza riconosciuti a livello internazionale fa parte del nostro percorso di espansione.",
        },
        {
          title: "Impatto sociale",
          desc: "Salari superiori al minimo locale nel nostro stabilimento. Le donne costituiscono la maggioranza della nostra forza lavoro. Programmi di sviluppo delle competenze in loco e un ambiente di lavoro sicuro e rispettoso per ogni lavoratore.",
        },
      ],
    },
    metrics: {
      subtitle: "Impatto",
      title: "Progressi misurabili",
      items: [
        { label: "Fibre sostenibili / riciclate" },
        { label: "Scarti di tessuto riutilizzati" },
        { label: "Stabilimento in espansione" },
        { label: "Obiettivo riduzione rifiuti" },
        { label: "Donne nella forza lavoro" },
        { label: "Consapevolezza standard REACH" },
      ],
    },
    certSection: {
      subtitle: "Conformità e qualità",
      title: "Pratiche che seguiamo",
      certs: [
        { body: "Approvvigionamento tessuti", scope: "Utilizzo di tessuti sostenibili e riciclati ove disponibili, con fonti in espansione" },
        { body: "Sicurezza del prodotto", scope: "Controlli interni per sostanze nocive e ingredienti chimici sicuri" },
        { body: "Materiali riciclati", scope: "Uso crescente di poliestere riciclato e misti di cotone rigenerato" },
        { body: "Ambiente di lavoro etico", scope: "Pratiche di lavoro eque, salute e sicurezza ed etica aziendale nel nostro stabilimento" },
        { body: "Cura ambientale", scope: "Riduzione dei rifiuti e pratiche responsabili nella produzione e finitura" },
      ],
    },
    roadmap: {
      subtitle: "Tabella di marcia",
      title: "Obiettivi di sostenibilità",
      items: [
        { goal: "Aumentare la quota di cotone biologico e sostenibile su tutte le linee di produzione" },
        { goal: "Ampliare l'uso di energia rinnovabile nello stabilimento di Mumbai" },
        { goal: "Aumentare la quota di tessuti riciclati e sostenibili nella catena di fornitura" },
        { goal: "Formalizzare il monitoraggio delle emissioni man mano che cresciamo" },
        { goal: "Progredire verso standard di sicurezza chimica riconosciuti a livello internazionale" },
        { goal: "Perseguire le certificazioni pertinenti man mano che l'azienda cresce" },
      ],
    },
    docs: {
      subtitle: "Per gli acquirenti",
      title: "Documentazione sulla sostenibilità",
      heading: "Disponibile su richiesta:",
      items: [
        "Dichiarazione di composizione e origine del tessuto",
        "Report interno di ispezione qualità e sicurezza",
        "Informazioni sul contenuto riciclato ove applicabile",
        "Dichiarazioni di sicurezza chimica (conformità REACH)",
        "Dettagli di produzione per ordine",
        "Panoramica delle condizioni di lavoro in fabbrica",
        "Informazioni di tracciabilità — dallo stabilimento al capo",
        "Riepilogo delle pratiche di sostenibilità",
      ],
    },
    statusLabels: { onTrack: "In linea", inProgress: "In corso", planning: "In pianificazione", committed: "Impegno preso" },
    cta: {
      title: "Hai bisogno di documentazione sulla sostenibilità?",
      description:
        "Forniamo informazioni sull'origine dei tessuti, report di ispezione qualità e documentazione di produzione per ogni ordine. Chiedici delle nostre pratiche di sostenibilità e del percorso di espansione.",
      buttonText: "Richiedi documentazione",
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Duurzaamheid",
      title: "Mode die de planeet respecteert",
      description:
        "Duurzaamheid is geen marketingclaim — het is een richting die we inbouwen in elke draad die we weven, elk kledingstuk dat we naaien en elke zending die we versturen. Praktijken die we vandaag volgen, en een routekaart waarover we transparant zijn met onze inkopers in de VAE, Rusland, Polen en Zuid-Afrika.",
    },
    pillars: {
      subtitle: "Onze aanpak",
      title: "Zes pijlers van duurzame productie",
      items: [
        {
          title: "Duurzame vezels",
          desc: "Een groeiend deel van onze productie gebruikt duurzame en gerecyclede stoffen, waaronder Tencel™ Lyocell en gerecyclede mengsels. We werken aan volledige traceerbaarheid van fabriek tot afgewerkt kledingstuk terwijl we onze duurzame stofinkoop uitbreiden.",
        },
        {
          title: "Waterbeheer",
          desc: "We investeren in waterbewuste verf- en afwerkpraktijken naarmate we groeien, waaronder regenwateropvang en gesloten systemen, met als doel het waterverbruik meetbaar te verminderen in de loop van de tijd.",
        },
        {
          title: "Hernieuwbare energie",
          desc: "We verkennen dakzonne-opties en hernieuwbare energie als onderdeel van onze uitbreidingsplannen, met als doel het aandeel schone energie in onze operaties te vergroten.",
        },
        {
          title: "Circulaire productie",
          desc: "Textielresten worden waar mogelijk hergebruikt als isolatiemateriaal en industriële doekjes. We vergroten ons gebruik van gerecycled polyester en andere gerecyclede materialen, en recyclen karton en plastic verpakkingen.",
        },
        {
          title: "Verantwoorde chemie",
          desc: "We werken toe naar REACH-conforme, AZO-vrije kleurstoffen en veiligere chemische ingrediënten. Onze chemische voetafdruk verminderen en toewerken naar internationaal erkende veiligheidsnormen maakt deel uit van onze uitbreidingsroutekaart.",
        },
        {
          title: "Sociale impact",
          desc: "Leefbaar loon boven het lokale minimum bij onze vestiging. Vrouwen vormen de meerderheid van ons personeelsbestand. Opleidingsprogramma's op locatie en een veilige, respectvolle werkomgeving voor elke werknemer.",
        },
      ],
    },
    metrics: {
      subtitle: "Impact",
      title: "Meetbare voortgang",
      items: [
        { label: "Duurzame / gerecyclede vezelinput" },
        { label: "Textielresten hergebruikt" },
        { label: "Vestiging in uitbreiding" },
        { label: "Doel afvalreductie" },
        { label: "Vrouwen in het personeelsbestand" },
        { label: "Bewustzijn REACH-normen" },
      ],
    },
    certSection: {
      subtitle: "Naleving & kwaliteit",
      title: "Praktijken die wij volgen",
      certs: [
        { body: "Stofinkoop", scope: "Gebruik van duurzame en gerecyclede stoffen waar beschikbaar, met uitbreidende bronnen" },
        { body: "Productveiligheid", scope: "Interne controles op schadelijke stoffen en veilige chemische ingrediënten" },
        { body: "Gerecyclede materialen", scope: "Groeiend gebruik van gerecycled polyester en geregenereerde katoenmengsels" },
        { body: "Ethische werkplek", scope: "Eerlijke arbeidspraktijken, gezondheid & veiligheid en bedrijfsethiek bij onze vestiging" },
        { body: "Milieuzorg", scope: "Afvalreductie en verantwoorde praktijken in productie en afwerking" },
      ],
    },
    roadmap: {
      subtitle: "Routekaart",
      title: "Duurzaamheidsdoelen",
      items: [
        { goal: "Vergroten van het aandeel biologisch en duurzaam katoen op alle productielijnen" },
        { goal: "Uitbreiden van hernieuwbaar energiegebruik bij onze vestiging in Mumbai" },
        { goal: "Vergroten van het aandeel gerecyclede en duurzame stoffen in onze toeleveringsketen" },
        { goal: "Formaliseren van emissietracking naarmate we groeien" },
        { goal: "Toewerken naar internationaal erkende chemische veiligheidsnormen" },
        { goal: "Nastreven van relevante certificeringen naarmate het bedrijf groeit" },
      ],
    },
    docs: {
      subtitle: "Voor inkopers",
      title: "Duurzaamheidsdocumentatie",
      heading: "Op verzoek beschikbaar:",
      items: [
        "Verklaring van stofsamenstelling en herkomst",
        "Interne kwaliteits- en veiligheidsinspectierapport",
        "Informatie over gerecycled gehalte indien van toepassing",
        "Chemische veiligheidsverklaringen (REACH-bewust)",
        "Productiedetails per bestelling",
        "Overzicht van arbeidsomstandigheden in de fabriek",
        "Traceerbaarheidsinformatie — van fabriek tot kledingstuk",
        "Samenvatting duurzaamheidspraktijken",
      ],
    },
    statusLabels: { onTrack: "Op schema", inProgress: "In uitvoering", planning: "In planning", committed: "Toegezegd" },
    cta: {
      title: "Duurzaamheidsdocumentatie nodig?",
      description:
        "Wij leveren informatie over stofherkomst, kwaliteitsinspectierapporten en productiedocumentatie voor elke bestelling. Vraag ons naar onze duurzaamheidspraktijken en uitbreidingsroutekaart.",
      buttonText: "Documentatie opvragen",
    },
  },
};
