// ─────────────────────────────────────────────────────────────────────────────
// Sustainability page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// NOTE: cert names (GOTS, OEKO-TEX, etc.), cert numbers, metric numbers stay
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
        "Sustainability isn't a marketing claim — it's embedded in every thread we weave, every garment we stitch, and every shipment we dispatch. Certified, audited, and transparently reported for our European partners.",
    },
    pillars: {
      subtitle: "Our Approach",
      title: "Six Pillars of Sustainable Manufacturing",
      items: [
        {
          title: "Organic Fibres",
          desc: "80% of our production uses GOTS-certified organic cotton, Tencel™ Lyocell, and European flax linen. Full traceability from certified farms to finished garment. We're committed to eliminating conventional cotton by 2027.",
        },
        {
          title: "Water Stewardship",
          desc: "Zero Liquid Discharge (ZLD) plant in our finishing unit since 2021. Rainwater harvesting across all facilities. 40% water reduction achieved since 2020 through closed-loop dyeing systems and waterless finishing technologies.",
        },
        {
          title: "Renewable Energy",
          desc: "800 kWp rooftop solar installation powers 35% of our operations. On track for 70% renewable energy by 2027. Carbon offset programme for remaining Scope 2 emissions through Gold Standard credits.",
        },
        {
          title: "Circular Production",
          desc: "Fabric waste recycled into insulation material and industrial rags. Zero textile waste to landfill since 2022. GRS-certified recycled polyester from post-consumer PET bottles. Cardboard and poly packaging recycled.",
        },
        {
          title: "Responsible Chemistry",
          desc: "All dyes REACH-compliant and AZO-free. OEKO-TEX Standard 100 certified chemicals only. ZDHC MRSL Level 2 conformance. FSC-certified packaging materials for all shipments.",
        },
        {
          title: "Social Impact",
          desc: "Living wages above local minimum across all facilities. Women constitute 65% of workforce. On-site childcare, health clinic, and skill development programmes. SEDEX/SMETA 4-pillar audited.",
        },
      ],
    },
    metrics: {
      subtitle: "Impact",
      title: "Measurable Progress",
      items: [
        { label: "Organic / Recycled Fibre Input" },
        { label: "Water Reduction Since 2020" },
        { label: "Solar-Powered Operations" },
        { label: "Textile Waste to Landfill" },
        { label: "Women in Workforce" },
        { label: "REACH-Compliant Chemistry" },
      ],
    },
    certSection: {
      subtitle: "Certifications",
      title: "Third-Party Verification",
      certs: [
        { body: "Global Organic Textile Standard", scope: "Full chain of custody — fibre to finished garment" },
        { body: "Hohenstein Institute", scope: "Product Class I (baby) and II (skin contact)" },
        { body: "Global Recycled Standard", scope: "Recycled polyester and regenerated cotton" },
        { body: "Supplier Ethical Data Exchange", scope: "4-pillar audit — labour, H&S, environment, business ethics" },
        { body: "Environmental Management System", scope: "All manufacturing and finishing facilities" },
      ],
    },
    roadmap: {
      subtitle: "Roadmap",
      title: "Sustainability Targets",
      items: [
        { goal: "100% organic cotton across all production lines" },
        { goal: "70% renewable energy across all four facilities" },
        { goal: "Eliminate conventional cotton from supply chain" },
        { goal: "Science-Based Target validated — 50% emission reduction (Scope 1 & 2)" },
        { goal: "ZDHC MRSL Level 3 conformance across wet processing" },
        { goal: "Net-zero Scope 1 and 2 emissions" },
      ],
    },
    docs: {
      subtitle: "For Buyers",
      title: "Sustainability Documentation",
      heading: "Every order includes:",
      items: [
        "GOTS Transaction Certificate per shipment",
        "OEKO-TEX test reports per fabric",
        "GRS certification for recycled materials",
        "Chemical compliance declarations (REACH, RSL)",
        "Carbon footprint estimate per order",
        "Social audit summary report",
        "Traceability documentation — farm to garment",
        "Annual sustainability impact report",
      ],
    },
    statusLabels: { onTrack: "On Track", inProgress: "In Progress", planning: "Planning", committed: "Committed" },
    cta: {
      title: "Need Sustainability Documentation?",
      description:
        "We provide full chain-of-custody documentation, certification copies, and carbon footprint reports for every order. Compliant with EU Green Claims Directive requirements.",
      buttonText: "Request Documentation",
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "الاستدامة",
      title: "أزياء تحترم كوكبنا",
      description:
        "الاستدامة ليست ادعاءً تسويقياً — إنها متجذرة في كل خيط ننسجه وكل ملبوس نخيطه وكل شحنة نرسلها. معتمدة ومدققة ومُبلَّغ عنها بشفافية لشركائنا الأوروبيين.",
    },
    pillars: {
      subtitle: "نهجنا",
      title: "ستة ركائز للتصنيع المستدام",
      items: [
        {
          title: "الألياف العضوية",
          desc: "80% من إنتاجنا يستخدم القطن العضوي المعتمد بـ GOTS وLyocell من Tencel™ وكتان الزهرة الأوروبي. تتبع كامل من المزارع المعتمدة إلى الملبوس النهائي. نلتزم بإلغاء القطن التقليدي بحلول 2027.",
        },
        {
          title: "إدارة المياه",
          desc: "محطة Zero Liquid Discharge في وحدة الإنهاء منذ 2021. تجميع مياه الأمطار في جميع المرافق. تحقيق خفض 40% في استهلاك المياه منذ 2020 من خلال أنظمة الصباغة الحلقية وتقنيات الإنهاء بدون ماء.",
        },
        {
          title: "الطاقة المتجددة",
          desc: "تغذي مصفوفة الطاقة الشمسية على السطح (800 كيلوواط ذروة) 35% من عملياتنا. في المسار الصحيح لبلوغ 70% طاقة متجددة بحلول 2027. برنامج تعويض الكربون للانبعاثات المتبقية (النطاق 2) عبر اعتمادات Gold Standard.",
        },
        {
          title: "الإنتاج الدائري",
          desc: "إعادة تدوير مخلفات الأقمشة في مواد العزل والخرق الصناعية. صفر نفايات نسيجية في المكب منذ 2022. بوليستر معاد تدويره معتمد بـ GRS من زجاجات PET المستهلكة. إعادة تدوير التغليف الكرتوني والبلاستيكي.",
        },
        {
          title: "الكيمياء المسؤولة",
          desc: "جميع الأصباغ متوافقة مع REACH وخالية من AZO. كيماويات معتمدة بـ OEKO-TEX Standard 100 حصراً. مطابقة ZDHC MRSL المستوى 2. مواد تغليف معتمدة بـ FSC لجميع الشحنات.",
        },
        {
          title: "الأثر الاجتماعي",
          desc: "أجور معيشية تفوق الحد الأدنى المحلي في جميع المرافق. تشكّل النساء 65% من القوى العاملة. رعاية نهارية للأطفال وعيادة صحية وبرامج تطوير المهارات في الموقع. خضعت للتدقيق الرباعي الأركان بـ SEDEX/SMETA.",
        },
      ],
    },
    metrics: {
      subtitle: "الأثر",
      title: "تقدم قابل للقياس",
      items: [
        { label: "مدخلات الألياف العضوية / المعاد تدويرها" },
        { label: "خفض استهلاك المياه منذ 2020" },
        { label: "العمليات المدعومة بالطاقة الشمسية" },
        { label: "النفايات النسيجية في المكب" },
        { label: "النساء في القوى العاملة" },
        { label: "الكيمياء المتوافقة مع REACH" },
      ],
    },
    certSection: {
      subtitle: "الشهادات",
      title: "التحقق من طرف ثالث",
      certs: [
        { body: "المعيار العالمي للنسيج العضوي", scope: "سلسلة حفظ الحيازة الكاملة — من الألياف إلى الملبوس النهائي" },
        { body: "معهد Hohenstein", scope: "فئة المنتج الأولى (الرضع) والثانية (ملامسة الجلد)" },
        { body: "المعيار العالمي لإعادة التدوير", scope: "بوليستر معاد تدويره وقطن متجدد" },
        { body: "تبادل البيانات الأخلاقية للموردين", scope: "تدقيق رباعي الأركان — العمل والصحة والسلامة والبيئة وأخلاقيات الأعمال" },
        { body: "نظام الإدارة البيئية", scope: "جميع مرافق التصنيع والإنهاء" },
      ],
    },
    roadmap: {
      subtitle: "خارطة الطريق",
      title: "أهداف الاستدامة",
      items: [
        { goal: "100% قطن عضوي عبر جميع خطوط الإنتاج" },
        { goal: "70% طاقة متجددة في جميع المرافق الأربعة" },
        { goal: "التخلص من القطن التقليدي من سلسلة التوريد" },
        { goal: "هدف قائم على العلم — خفض الانبعاثات 50% (النطاق 1 و2)" },
        { goal: "مطابقة ZDHC MRSL المستوى 3 في المعالجة الرطبة" },
        { goal: "صافي صفر انبعاثات النطاق 1 و2" },
      ],
    },
    docs: {
      subtitle: "للمشترين",
      title: "وثائق الاستدامة",
      heading: "كل طلبية تتضمن:",
      items: [
        "شهادة معاملة GOTS لكل شحنة",
        "تقارير اختبار OEKO-TEX لكل قماش",
        "شهادة GRS للمواد المعاد تدويرها",
        "إقرارات الامتثال الكيميائي (REACH, RSL)",
        "تقدير البصمة الكربونية لكل طلبية",
        "تقرير ملخص التدقيق الاجتماعي",
        "وثائق التتبع — من المزرعة إلى الملبوس",
        "تقرير الأثر الاستدامي السنوي",
      ],
    },
    statusLabels: { onTrack: "في المسار الصحيح", inProgress: "قيد التنفيذ", planning: "قيد التخطيط", committed: "ملتزمون" },
    cta: {
      title: "هل تحتاج إلى وثائق الاستدامة؟",
      description:
        "نقدم وثائق كاملة لسلسلة الحيازة ونسخ الشهادات وتقارير البصمة الكربونية لكل طلبية. متوافق مع متطلبات توجيه الادعاءات الخضراء للاتحاد الأوروبي.",
      buttonText: "طلب الوثائق",
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Устойчивое развитие",
      title: "Мода, уважающая планету",
      description:
        "Устойчивое развитие — не маркетинговый лозунг: оно заложено в каждой нити, каждом изделии и каждой отгрузке. Сертифицировано, проверено аудитом и прозрачно отчётно перед нашими европейскими партнёрами.",
    },
    pillars: {
      subtitle: "Наш подход",
      title: "Шесть столпов устойчивого производства",
      items: [
        {
          title: "Органические волокна",
          desc: "80% нашего производства использует органический хлопок с сертификатом GOTS, Tencel™ Lyocell и европейский льняной лён. Полная прослеживаемость — от сертифицированных ферм до готового изделия. К 2027 году планируем полностью отказаться от обычного хлопка.",
        },
        {
          title: "Управление водными ресурсами",
          desc: "Установка Zero Liquid Discharge в отделочном цехе работает с 2021 года. Сбор дождевой воды на всех предприятиях. С 2020 года достигнуто снижение потребления воды на 40% благодаря замкнутым системам крашения и безводным технологиям отделки.",
        },
        {
          title: "Возобновляемая энергия",
          desc: "Крышная солнечная установка мощностью 800 кВт обеспечивает 35% наших операций. К 2027 году планируем достичь 70% возобновляемой энергии. Программа компенсации углерода для оставшихся выбросов Scope 2 через кредиты Gold Standard.",
        },
        {
          title: "Замкнутое производство",
          desc: "Текстильные отходы перерабатываются в утеплитель и производственные тряпки. С 2022 года — ноль текстильных отходов на свалку. GRS-сертифицированный переработанный полиэстер из постпотребительских ПЭТ-бутылок. Картон и упаковочные материалы перерабатываются.",
        },
        {
          title: "Ответственная химия",
          desc: "Все красители соответствуют REACH и не содержат AZO. Только химикаты, сертифицированные по OEKO-TEX Standard 100. Соответствие ZDHC MRSL уровня 2. Упаковочные материалы с сертификатом FSC для всех отгрузок.",
        },
        {
          title: "Социальное воздействие",
          desc: "Заработная плата выше местного прожиточного минимума на всех предприятиях. Женщины составляют 65% персонала. Корпоративный детский сад, медицинский пункт и программы профессионального развития. Аудит SEDEX/SMETA по 4 направлениям.",
        },
      ],
    },
    metrics: {
      subtitle: "Результаты",
      title: "Измеримый прогресс",
      items: [
        { label: "Органические / вторичные волокна" },
        { label: "Экономия воды с 2020 года" },
        { label: "Работа на солнечной энергии" },
        { label: "Текстильных отходов на свалку" },
        { label: "Женщин в коллективе" },
        { label: "Химикаты, соответствующие REACH" },
      ],
    },
    certSection: {
      subtitle: "Сертификаты",
      title: "Независимая верификация",
      certs: [
        { body: "Глобальный органический текстильный стандарт", scope: "Полная цепочка хранения — от волокна до готового изделия" },
        { body: "Институт Hohenstein", scope: "Класс продукции I (для детей) и II (контакт с кожей)" },
        { body: "Глобальный стандарт переработки", scope: "Переработанный полиэстер и регенерированный хлопок" },
        { body: "Платформа этичного обмена данными о поставщиках", scope: "Аудит по 4 направлениям — труд, охрана здоровья и безопасность, экология, деловая этика" },
        { body: "Система экологического менеджмента", scope: "Все производственные и отделочные предприятия" },
      ],
    },
    roadmap: {
      subtitle: "Дорожная карта",
      title: "Цели устойчивого развития",
      items: [
        { goal: "100% органического хлопка на всех производственных линиях" },
        { goal: "70% возобновляемой энергии на всех четырёх предприятиях" },
        { goal: "Полный отказ от обычного хлопка в цепочке поставок" },
        { goal: "Научно обоснованная цель — снижение выбросов на 50% (Scope 1 и 2)" },
        { goal: "Соответствие ZDHC MRSL уровня 3 для мокрой обработки" },
        { goal: "Нулевые нетто-выбросы Scope 1 и 2" },
      ],
    },
    docs: {
      subtitle: "Для покупателей",
      title: "Документация по устойчивому развитию",
      heading: "Каждый заказ включает:",
      items: [
        "Транзакционный сертификат GOTS на каждую отгрузку",
        "Протоколы испытаний OEKO-TEX на каждую ткань",
        "Сертификация GRS для вторичных материалов",
        "Декларации соответствия химии (REACH, RSL)",
        "Оценка углеродного следа на заказ",
        "Краткий отчёт о социальном аудите",
        "Документация прослеживаемости — от фермы до изделия",
        "Ежегодный отчёт об устойчивом воздействии",
      ],
    },
    statusLabels: { onTrack: "В плане", inProgress: "Выполняется", planning: "Планируется", committed: "Принято" },
    cta: {
      title: "Нужна документация по устойчивому развитию?",
      description:
        "Предоставляем полную документацию цепочки хранения, копии сертификатов и отчёты об углеродном следе для каждого заказа. Соответствует требованиям Директивы ЕС о зелёных заявлениях.",
      buttonText: "Запросить документацию",
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Zrównoważony rozwój",
      title: "Moda szanująca naszą planetę",
      description:
        "Zrównoważony rozwój to nie hasło marketingowe — jest wbudowany w każdą nitkę, każdy szyty wyrób i każdą wysyłaną przez nas przesyłkę. Certyfikowany, audytowany i transparentnie raportowany dla naszych europejskich partnerów.",
    },
    pillars: {
      subtitle: "Nasze podejście",
      title: "Sześć filarów zrównoważonej produkcji",
      items: [
        {
          title: "Włókna organiczne",
          desc: "80% naszej produkcji korzysta z certyfikowanej organicznej bawełny GOTS, Tencel™ Lyocell i europejskiego lnu. Pełna identyfikowalność od certyfikowanych farm do gotowego wyrobu. Zobowiązujemy się do wyeliminowania bawełny konwencjonalnej do 2027 roku.",
        },
        {
          title: "Gospodarka wodna",
          desc: "Instalacja Zero Liquid Discharge w naszej wykończalni działa od 2021 r. Zbieranie wody deszczowej we wszystkich zakładach. Dzięki zamkniętym systemom barwienia i bezwodnym technologiom wykańczania osiągnięto 40% redukcji zużycia wody od 2020 r.",
        },
        {
          title: "Energia odnawialna",
          desc: "Dachowa instalacja fotowoltaiczna 800 kWp zasila 35% naszych operacji. Na dobrej drodze do 70% energii odnawialnej do 2027 r. Program offsetu węglowego dla pozostałych emisji Scope 2 poprzez kredyty Gold Standard.",
        },
        {
          title: "Produkcja cyrkularna",
          desc: "Odpady tkaninowe przerabiane na materiał izolacyjny i szmaty przemysłowe. Zero odpadów tekstylnych na składowisko od 2022 r. Poliester z recyklingu certyfikowany GRS z butelek PET po konsumentach. Tektura i opakowania z tworzyw sztucznych poddawane recyklingowi.",
        },
        {
          title: "Odpowiedzialna chemia",
          desc: "Wszystkie barwniki zgodne z REACH i bez AZO. Wyłącznie chemikalia certyfikowane OEKO-TEX Standard 100. Zgodność ZDHC MRSL poziom 2. Materiały opakowaniowe z certyfikatem FSC dla wszystkich wysyłek.",
        },
        {
          title: "Wpływ społeczny",
          desc: "Wynagrodzenia wyższe od lokalnego minimum we wszystkich zakładach. Kobiety stanowią 65% siły roboczej. Żłobek zakładowy, przychodnia zdrowia i programy rozwoju umiejętności. Audyt SEDEX/SMETA 4-filarowy.",
        },
      ],
    },
    metrics: {
      subtitle: "Wyniki",
      title: "Mierzalny postęp",
      items: [
        { label: "Udział włókien organicznych / z recyklingu" },
        { label: "Redukcja zużycia wody od 2020 r." },
        { label: "Operacje zasilane energią słoneczną" },
        { label: "Odpady tekstylne na składowisku" },
        { label: "Kobiety w sile roboczej" },
        { label: "Chemia zgodna z REACH" },
      ],
    },
    certSection: {
      subtitle: "Certyfikaty",
      title: "Weryfikacja trzeciej strony",
      certs: [
        { body: "Globalny Standard Tekstyliów Organicznych", scope: "Pełny łańcuch nadzoru — od włókna do gotowego wyrobu" },
        { body: "Instytut Hohenstein", scope: "Klasa produktu I (niemowlęta) i II (kontakt ze skórą)" },
        { body: "Globalny Standard Recyklingu", scope: "Poliester z recyklingu i bawełna regenerowana" },
        { body: "Platforma Danych Etycznych Dostawców", scope: "Audyt 4-filarowy — praca, BHP, środowisko, etyka biznesowa" },
        { body: "System Zarządzania Środowiskowego", scope: "Wszystkie zakłady produkcyjne i wykończalnie" },
      ],
    },
    roadmap: {
      subtitle: "Plan działania",
      title: "Cele zrównoważonego rozwoju",
      items: [
        { goal: "100% bawełny organicznej na wszystkich liniach produkcyjnych" },
        { goal: "70% energii odnawialnej we wszystkich czterech zakładach" },
        { goal: "Eliminacja bawełny konwencjonalnej z łańcucha dostaw" },
        { goal: "Naukowo ugruntowany cel — redukcja emisji o 50% (Scope 1 i 2)" },
        { goal: "Zgodność ZDHC MRSL poziom 3 w procesach mokrych" },
        { goal: "Neutralność węglowa dla emisji Scope 1 i 2" },
      ],
    },
    docs: {
      subtitle: "Dla kupujących",
      title: "Dokumentacja zrównoważonego rozwoju",
      heading: "Każde zamówienie zawiera:",
      items: [
        "Certyfikat transakcyjny GOTS dla każdej wysyłki",
        "Raporty badań OEKO-TEX dla każdej tkaniny",
        "Certyfikat GRS dla materiałów z recyklingu",
        "Deklaracje zgodności chemicznej (REACH, RSL)",
        "Szacunek śladu węglowego na zamówienie",
        "Podsumowanie raportu z audytu społecznego",
        "Dokumentacja identyfikowalności — od farmy do wyrobu",
        "Roczny raport wpływu na zrównoważony rozwój",
      ],
    },
    statusLabels: { onTrack: "Zgodnie z planem", inProgress: "W realizacji", planning: "W planowaniu", committed: "Zobowiązanie" },
    cta: {
      title: "Potrzebujesz dokumentacji zrównoważonego rozwoju?",
      description:
        "Dostarczamy pełną dokumentację łańcucha nadzoru, kopie certyfikatów i raporty dotyczące śladu węglowego dla każdego zamówienia. Zgodność z wymaganiami dyrektywy UE o zielonych twierdzeniach.",
      buttonText: "Zamów dokumentację",
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Durabilité",
      title: "Une mode qui respecte la planète",
      description:
        "La durabilité n'est pas une promesse marketing — elle est intégrée dans chaque fil tissé, chaque vêtement cousu et chaque expédition. Certifiée, auditée et rapportée de façon transparente à nos partenaires européens.",
    },
    pillars: {
      subtitle: "Notre approche",
      title: "Six piliers d'une fabrication durable",
      items: [
        {
          title: "Fibres biologiques",
          desc: "80% de notre production utilise du coton biologique certifié GOTS, du Tencel™ Lyocell et du lin de lin européen. Traçabilité complète des fermes certifiées jusqu'au vêtement fini. Nous nous engageons à éliminer le coton conventionnel d'ici 2027.",
        },
        {
          title: "Gestion de l'eau",
          desc: "Installation Zero Liquid Discharge dans notre unité de finition depuis 2021. Récupération des eaux de pluie sur tous les sites. Réduction de 40% de la consommation d'eau depuis 2020 grâce aux systèmes de teinture en boucle fermée et aux technologies de finition sans eau.",
        },
        {
          title: "Énergie renouvelable",
          desc: "Une installation solaire en toiture de 800 kWc alimente 35% de nos opérations. En bonne voie pour atteindre 70% d'énergie renouvelable d'ici 2027. Programme de compensation carbone pour les émissions Scope 2 résiduelles via des crédits Gold Standard.",
        },
        {
          title: "Production circulaire",
          desc: "Les déchets de tissu sont recyclés en matériaux d'isolation et en chiffons industriels. Zéro déchet textile en décharge depuis 2022. Polyester recyclé certifié GRS issu de bouteilles PET post-consommation. Cartons et emballages plastiques recyclés.",
        },
        {
          title: "Chimie responsable",
          desc: "Tous les colorants sont conformes REACH et sans AZO. Uniquement des produits chimiques certifiés OEKO-TEX Standard 100. Conformité ZDHC MRSL niveau 2. Matériaux d'emballage certifiés FSC pour toutes les expéditions.",
        },
        {
          title: "Impact social",
          desc: "Salaires supérieurs au minimum local dans tous les sites. Les femmes représentent 65% de l'effectif. Crèche, centre de santé et programmes de développement des compétences sur site. Audit SEDEX/SMETA 4 piliers.",
        },
      ],
    },
    metrics: {
      subtitle: "Impact",
      title: "Progrès mesurables",
      items: [
        { label: "Fibres biologiques / recyclées" },
        { label: "Réduction eau depuis 2020" },
        { label: "Opérations alimentées au solaire" },
        { label: "Déchets textiles en décharge" },
        { label: "Femmes dans la main-d'œuvre" },
        { label: "Chimie conforme REACH" },
      ],
    },
    certSection: {
      subtitle: "Certifications",
      title: "Vérification par des tiers",
      certs: [
        { body: "Standard Global pour les Textiles Biologiques", scope: "Chaîne de contrôle complète — de la fibre au vêtement fini" },
        { body: "Institut Hohenstein", scope: "Classe produit I (bébé) et II (contact cutané)" },
        { body: "Standard Mondial pour le Recyclage", scope: "Polyester recyclé et coton régénéré" },
        { body: "Plateforme d'échange de données éthiques", scope: "Audit 4 piliers — travail, santé & sécurité, environnement, éthique des affaires" },
        { body: "Système de management environnemental", scope: "Tous les sites de fabrication et de finition" },
      ],
    },
    roadmap: {
      subtitle: "Feuille de route",
      title: "Objectifs de durabilité",
      items: [
        { goal: "100% de coton biologique sur toutes les lignes de production" },
        { goal: "70% d'énergie renouvelable dans les quatre sites" },
        { goal: "Éliminer le coton conventionnel de la chaîne d'approvisionnement" },
        { goal: "Objectif fondé sur la science validé — réduction de 50% des émissions (Scope 1 & 2)" },
        { goal: "Conformité ZDHC MRSL niveau 3 pour le traitement humide" },
        { goal: "Émissions nettes nulles Scope 1 et 2" },
      ],
    },
    docs: {
      subtitle: "Pour les acheteurs",
      title: "Documentation sur la durabilité",
      heading: "Chaque commande comprend :",
      items: [
        "Certificat de transaction GOTS par expédition",
        "Rapports de tests OEKO-TEX par tissu",
        "Certification GRS pour les matériaux recyclés",
        "Déclarations de conformité chimique (REACH, RSL)",
        "Estimation de l'empreinte carbone par commande",
        "Rapport de synthèse de l'audit social",
        "Documentation de traçabilité — de la ferme au vêtement",
        "Rapport annuel d'impact sur la durabilité",
      ],
    },
    statusLabels: { onTrack: "Dans les temps", inProgress: "En cours", planning: "En planification", committed: "Engagé" },
    cta: {
      title: "Besoin de documentation sur la durabilité ?",
      description:
        "Nous fournissons une documentation complète de la chaîne de contrôle, des copies de certifications et des rapports d'empreinte carbone pour chaque commande. Conforme aux exigences de la directive européenne sur les allégations écologiques.",
      buttonText: "Demander la documentation",
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Sostenibilità",
      title: "Moda che rispetta il pianeta",
      description:
        "La sostenibilità non è un claim di marketing — è incorporata in ogni filo che tessiamo, ogni capo che cuciamo e ogni spedizione che inviamo. Certificata, sottoposta ad audit e rendicontata in modo trasparente per i nostri partner europei.",
    },
    pillars: {
      subtitle: "Il nostro approccio",
      title: "Sei pilastri della produzione sostenibile",
      items: [
        {
          title: "Fibre biologiche",
          desc: "L'80% della nostra produzione utilizza cotone biologico certificato GOTS, Tencel™ Lyocell e lino di lino europeo. Tracciabilità completa dalle fattorie certificate al capo finito. Ci impegniamo a eliminare il cotone convenzionale entro il 2027.",
        },
        {
          title: "Gestione delle acque",
          desc: "Impianto Zero Liquid Discharge nella nostra unità di finitura dal 2021. Raccolta dell'acqua piovana in tutti gli stabilimenti. Riduzione del 40% del consumo d'acqua dal 2020 grazie a sistemi di tintura a circuito chiuso e tecnologie di finitura senz'acqua.",
        },
        {
          title: "Energia rinnovabile",
          desc: "Un impianto solare sul tetto da 800 kWp alimenta il 35% delle nostre operazioni. Sulla buona strada per il 70% di energia rinnovabile entro il 2027. Programma di compensazione delle emissioni di Scope 2 residue tramite crediti Gold Standard.",
        },
        {
          title: "Produzione circolare",
          desc: "Gli scarti di tessuto vengono riciclati in materiale isolante e stracci industriali. Zero rifiuti tessili in discarica dal 2022. Poliestere riciclato certificato GRS da bottiglie PET post-consumo. Cartone e imballaggi in plastica riciclati.",
        },
        {
          title: "Chimica responsabile",
          desc: "Tutti i coloranti conformi a REACH e privi di AZO. Solo prodotti chimici certificati OEKO-TEX Standard 100. Conformità ZDHC MRSL livello 2. Materiali di imballaggio certificati FSC per tutte le spedizioni.",
        },
        {
          title: "Impatto sociale",
          desc: "Salari dignitosi superiori al minimo locale in tutti gli stabilimenti. Le donne costituiscono il 65% della forza lavoro. Asilo nido, ambulatorio e programmi di sviluppo delle competenze in loco. Audit SEDEX/SMETA a 4 pilastri.",
        },
      ],
    },
    metrics: {
      subtitle: "Impatto",
      title: "Progressi misurabili",
      items: [
        { label: "Fibre biologiche / riciclate" },
        { label: "Riduzione acqua dal 2020" },
        { label: "Operazioni ad energia solare" },
        { label: "Rifiuti tessili in discarica" },
        { label: "Donne nella forza lavoro" },
        { label: "Chimica conforme REACH" },
      ],
    },
    certSection: {
      subtitle: "Certificazioni",
      title: "Verifica di terze parti",
      certs: [
        { body: "Standard Tessile Organico Globale", scope: "Catena di custodia completa — dalla fibra al capo finito" },
        { body: "Istituto Hohenstein", scope: "Classe prodotto I (neonati) e II (contatto con la pelle)" },
        { body: "Standard Globale per il Riciclaggio", scope: "Poliestere riciclato e cotone rigenerato" },
        { body: "Piattaforma di scambio dati etici per i fornitori", scope: "Audit a 4 pilastri — lavoro, salute & sicurezza, ambiente, etica aziendale" },
        { body: "Sistema di gestione ambientale", scope: "Tutti gli stabilimenti di produzione e finitura" },
      ],
    },
    roadmap: {
      subtitle: "Tabella di marcia",
      title: "Obiettivi di sostenibilità",
      items: [
        { goal: "100% cotone biologico su tutte le linee di produzione" },
        { goal: "70% energia rinnovabile in tutti e quattro gli stabilimenti" },
        { goal: "Eliminare il cotone convenzionale dalla catena di fornitura" },
        { goal: "Obiettivo Science-Based validato — riduzione del 50% delle emissioni (Scope 1 & 2)" },
        { goal: "Conformità ZDHC MRSL livello 3 per i processi di bagnatura" },
        { goal: "Emissioni nette zero per Scope 1 e 2" },
      ],
    },
    docs: {
      subtitle: "Per gli acquirenti",
      title: "Documentazione sulla sostenibilità",
      heading: "Ogni ordine include:",
      items: [
        "Certificato di transazione GOTS per spedizione",
        "Report di test OEKO-TEX per tessuto",
        "Certificazione GRS per materiali riciclati",
        "Dichiarazioni di conformità chimica (REACH, RSL)",
        "Stima dell'impronta carbonica per ordine",
        "Report di sintesi dell'audit sociale",
        "Documentazione di tracciabilità — dalla fattoria al capo",
        "Rapporto annuale sull'impatto di sostenibilità",
      ],
    },
    statusLabels: { onTrack: "In linea", inProgress: "In corso", planning: "In pianificazione", committed: "Impegno preso" },
    cta: {
      title: "Hai bisogno di documentazione sulla sostenibilità?",
      description:
        "Forniamo documentazione completa della catena di custodia, copie delle certificazioni e report sull'impronta carbonica per ogni ordine. Conforme ai requisiti della direttiva UE sulle dichiarazioni ambientali.",
      buttonText: "Richiedi documentazione",
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Duurzaamheid",
      title: "Mode die de planeet respecteert",
      description:
        "Duurzaamheid is geen marketingclaim — het zit in elke draad die we weven, elk kledingstuk dat we naaien en elke zending die we versturen. Gecertificeerd, geauditeerd en transparant gerapporteerd aan onze Europese partners.",
    },
    pillars: {
      subtitle: "Onze aanpak",
      title: "Zes pijlers van duurzame productie",
      items: [
        {
          title: "Biologische vezels",
          desc: "80% van onze productie gebruikt GOTS-gecertificeerd biologisch katoen, Tencel™ Lyocell en Europees vlaslijnwaad. Volledige traceerbaarheid van gecertificeerde boerderijen tot het afgewerkte kledingstuk. We streven ernaar conventioneel katoen te elimineren voor 2027.",
        },
        {
          title: "Waterbeheer",
          desc: "Zero Liquid Discharge-installatie in onze afwerkeenheid sinds 2021. Regenwater­opvang in alle vestigingen. Dankzij gesloten verfloopsystemen en waterloze afwerktechnologieën 40% waterreductie bereikt sinds 2020.",
        },
        {
          title: "Hernieuwbare energie",
          desc: "Een dakzonne-installatie van 800 kWp voorziet 35% van onze operaties van stroom. Op koers voor 70% hernieuwbare energie in 2027. Koolstofcompensatieprogramma voor resterende Scope 2-emissies via Gold Standard-kredieten.",
        },
        {
          title: "Circulaire productie",
          desc: "Textielafval wordt gerecycled tot isolatiemateriaal en industriële doekjes. Nul textielafval naar stortplaatsen sinds 2022. GRS-gecertificeerd gerecycled polyester van post-consumer PET-flessen. Karton en plastic verpakkingen worden gerecycled.",
        },
        {
          title: "Verantwoorde chemie",
          desc: "Alle kleurstoffen REACH-conform en AZO-vrij. Uitsluitend OEKO-TEX Standard 100 gecertificeerde chemicaliën. ZDHC MRSL niveau 2 conformiteit. FSC-gecertificeerde verpakkingsmaterialen voor alle zendingen.",
        },
        {
          title: "Sociale impact",
          desc: "Leefbaar loon boven het lokale minimum in alle vestigingen. Vrouwen vormen 65% van het personeelsbestand. Bedrijfsdagopvang, gezondheidskliniek en opleidingsprogramma's op locatie. SEDEX/SMETA 4-pijler geauditeerd.",
        },
      ],
    },
    metrics: {
      subtitle: "Impact",
      title: "Meetbare voortgang",
      items: [
        { label: "Biologische / gerecyclede vezelinput" },
        { label: "Waterreductie sinds 2020" },
        { label: "Zonne-energie in bedrijf" },
        { label: "Textielafval naar stortplaats" },
        { label: "Vrouwen in het personeelsbestand" },
        { label: "REACH-conforme chemie" },
      ],
    },
    certSection: {
      subtitle: "Certificeringen",
      title: "Onafhankelijke verificatie",
      certs: [
        { body: "Mondiale Standaard voor Organisch Textiel", scope: "Volledige bewakingsketen — van vezel tot afgewerkt kledingstuk" },
        { body: "Hohenstein Instituut", scope: "Productklasse I (baby) en II (huidcontact)" },
        { body: "Mondiale Recyclingstandaard", scope: "Gerecycled polyester en geregenereerd katoen" },
        { body: "Leveranciersplatform voor ethische data-uitwisseling", scope: "4-pijleraudit — arbeid, gezondheid & veiligheid, milieu, bedrijfsethiek" },
        { body: "Milieumanagementsysteem", scope: "Alle productie- en afwerkvestigingen" },
      ],
    },
    roadmap: {
      subtitle: "Routekaart",
      title: "Duurzaamheidsdoelen",
      items: [
        { goal: "100% biologisch katoen op alle productielijnen" },
        { goal: "70% hernieuwbare energie in alle vier vestigingen" },
        { goal: "Conventioneel katoen uit de toeleveringsketen elimineren" },
        { goal: "Wetenschappelijk onderbouwd doel — 50% emissiereductie (Scope 1 & 2)" },
        { goal: "ZDHC MRSL niveau 3 conformiteit voor natbewerking" },
        { goal: "Netto-nul Scope 1- en 2-emissies" },
      ],
    },
    docs: {
      subtitle: "Voor inkopers",
      title: "Duurzaamheidsdocumentatie",
      heading: "Elke bestelling bevat:",
      items: [
        "GOTS-transactiecertificaat per zending",
        "OEKO-TEX-testrapporten per stof",
        "GRS-certificering voor gerecyclede materialen",
        "Chemische nalevingsverklaringen (REACH, RSL)",
        "CO₂-voetdrukschatting per bestelling",
        "Beknopt rapport sociale audit",
        "Traceerbaarheidsdocumentatie — van boerderij tot kledingstuk",
        "Jaarlijks duurzaamheidsimpactrapport",
      ],
    },
    statusLabels: { onTrack: "Op schema", inProgress: "In uitvoering", planning: "In planning", committed: "Toegezegd" },
    cta: {
      title: "Duurzaamheidsdocumentatie nodig?",
      description:
        "Wij leveren volledige bewakingsketen­documentatie, certificerings­kopieën en CO₂-voetdrukrapporten voor elke bestelling. Voldoet aan de vereisten van de EU-richtlijn inzake groene claims.",
      buttonText: "Documentatie opvragen",
    },
  },
};
