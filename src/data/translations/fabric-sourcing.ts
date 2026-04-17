// ─────────────────────────────────────────────────────────────────────────────
// Fabric Sourcing page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// NOT translated: fabric names, GSM values, weave types, widths, shrinkage %,
//                 origin locations, cert badges (GOTS/OEKO-TEX/GRS)
// ─────────────────────────────────────────────────────────────────────────────

export interface FabricSourcingLocale {
  hero: { subtitle: string; title: string; description: string };
  sourcing: {
    subtitle: string;
    title: string;
    items: { title: string; desc: string }[]; // 4
  };
  library: {
    subtitle: string;
    title: string;
    headers: [string, string, string, string, string, string, string];
    footnote: string;
  };
  custom: {
    subtitle: string;
    title: string;
    intro: string;
    items: string[]; // 6
    footnote: string;
  };
  compliance: {
    subtitle: string;
    title: string;
    items: { title: string; desc: string }[]; // 3
  };
  cta: { title: string; description: string; buttonText: string };
}

export const fabricSourcingContent: Record<string, FabricSourcingLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Fabric Sourcing",
      title: "Certified Fabrics from Trusted Mills",
      description: "We source from 30+ GOTS and OEKO-TEX certified mills across India and Europe. Full chain-of-custody documentation, in-house testing, and REACH-compliant processing for every metre.",
    },
    sourcing: {
      subtitle: "Our Approach",
      title: "Responsible Fabric Sourcing",
      items: [
        { title: "Certified Supply Chain", desc: "Every metre of fabric comes with full chain-of-custody documentation. GOTS Transaction Certificates issued per shipment. No blending of certified and non-certified materials." },
        { title: "30+ Partner Mills", desc: "Long-standing relationships with mills in Gujarat, Maharashtra, Tamil Nadu, and European linen producers. Annual audits ensure compliance with our quality and social standards." },
        { title: "In-House Testing", desc: "All incoming fabric tested for GSM, shrinkage (ISO 6330), colorfastness (ISO 105-C06), tensile strength (ISO 13934-1), and composition verification before entering production." },
        { title: "Dyeing & Finishing", desc: "REACH-compliant, AZO-free reactive dyes. OEKO-TEX Standard 100 certified chemicals. Low-impact dyeing processes with water recycling. Lab dips within 5 working days." },
      ],
    },
    library: {
      subtitle: "Core Range",
      title: "Standard Fabric Library",
      headers: ["Fabric", "GSM", "Weave", "Width", "Shrinkage", "Origin", "Cert"],
      footnote: "Swatch cards and S/S & A/W seasonal shade cards available on request. Hangers shipped within 3 working days.",
    },
    custom: {
      subtitle: "Bespoke Development",
      title: "Custom Fabric Options",
      intro: "Can't find what you need in our standard range? Our fabric development team works directly with mills to create exclusive weaves, blends, and finishes for your brand.",
      items: [
        "Custom blends — cotton-linen, cotton-Tencel, linen-viscose in any ratio",
        "Custom weights — from 60 GSM voile to 300 GSM canvas",
        "Special finishes — enzyme wash, peach finish, wrinkle-free, anti-bacterial",
        "Print development — digital, screen, block, discharge, pigment print",
        "Yarn-dyed stripes and checks — custom colourways with 500m MOQ",
        "Exclusive fabric developments — dedicated loom allocation for 3,000m+ orders",
      ],
      footnote: "Minimum order for custom fabric development: 500 metres. Lab dips and strike-offs provided within 7 working days.",
    },
    compliance: {
      subtitle: "Compliance",
      title: "Chemical & Safety Standards",
      items: [
        { title: "REACH Compliant", desc: "All chemicals and dyes comply with EU REACH Regulation (EC) No 1907/2006. Restricted Substance List (RSL) tested by accredited labs." },
        { title: "AZO-Free Dyes", desc: "Zero use of AZO dyes across all production. Every dye lot tested per EU Directive 2002/61/EC. Test reports available per shipment." },
        { title: "OEKO-TEX Chemicals", desc: "Only OEKO-TEX Standard 100 certified auxiliaries used in wet processing. Annual chemical inventory audit by third-party labs." },
      ],
    },
    cta: { title: "Request Fabric Swatches", description: "Free swatch cards for our standard range. Custom development hangers available at cost. Ships worldwide within 3 days.", buttonText: "Order Swatches" },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "توريد الأقمشة",
      title: "أقمشة معتمدة من مطاحن موثوقة",
      description: "نوفّر من أكثر من 30 مطحناً معتمداً من GOTS وOEKO-TEX في الهند وأوروبا. وثائق كاملة لسلسلة الحيازة واختبارات داخلية ومعالجة مطابقة لمعايير REACH لكل متر.",
    },
    sourcing: {
      subtitle: "نهجنا",
      title: "توريد أقمشة مسؤول",
      items: [
        { title: "سلسلة توريد معتمدة", desc: "كل متر من القماش مرفق بوثائق كاملة لسلسلة الحيازة. تُصدر شهادات معاملة GOTS مع كل شحنة. لا يجري مزج المواد المعتمدة بغير المعتمدة." },
        { title: "أكثر من 30 مطحناً شريكاً", desc: "علاقات راسخة مع مطاحن في غوجارات ومهاراشترا وتاميل نادو ومنتجي الكتان الأوروبيين. تضمن المراجعات السنوية الامتثال لمعايير الجودة والمسؤولية الاجتماعية." },
        { title: "اختبارات داخلية", desc: "يُختبر كل قماش وارد لـ GSM والانكماش (ISO 6330) وثبات اللون (ISO 105-C06) ومقاومة الشد (ISO 13934-1) والتحقق من التركيب قبل الدخول في الإنتاج." },
        { title: "الصباغة والتشطيب", desc: "أصباغ تفاعلية خالية من AZO ومطابقة لمعايير REACH. كيماويات معتمدة من OEKO-TEX Standard 100. عمليات صباغة منخفضة التأثير مع إعادة تدوير الماء. عينات الألوان المعملية خلال 5 أيام عمل." },
      ],
    },
    library: {
      subtitle: "النطاق الأساسي",
      title: "مكتبة الأقمشة القياسية",
      headers: ["القماش", "GSM", "نوع النسج", "العرض", "الانكماش", "المنشأ", "الشهادة"],
      footnote: "بطاقات عينات وبطاقات ظلال موسمية (ربيع/صيف وخريف/شتاء) متاحة عند الطلب. شحن الشماعات خلال 3 أيام عمل.",
    },
    custom: {
      subtitle: "التطوير المخصص",
      title: "خيارات الأقمشة المخصصة",
      intro: "هل لم تجدوا ما تحتاجونه في نطاقنا القياسي؟ يعمل فريق تطوير الأقمشة لدينا مباشرةً مع المطاحن لإنشاء منسوجات ومزيجات وتشطيبات حصرية لعلامتكم.",
      items: [
        "مزيجات مخصصة — قطن-كتان، قطن-تنسيل، كتان-فيسكوز بأي نسبة",
        "أوزان مخصصة — من 60 GSM فوال إلى 300 GSM قماش كانفاس",
        "تشطيبات خاصة — غسيل إنزيمي، تشطيب خوخي، مقاوم للتجعد، مضاد للبكتيريا",
        "تطوير طباعة — رقمية وشاشية وبلوك وتفريغ وصبغة",
        "خطوط وشبكات مصبوغة بالخيط — ألوان مخصصة بحد أدنى 500 متر",
        "تطوير أقمشة حصرية — تخصيص أنوال مخصصة للطلبات التي تتجاوز 3,000 متر",
      ],
      footnote: "الحد الأدنى للطلب لتطوير أقمشة مخصصة: 500 متر. عينات الألوان المعملية خلال 7 أيام عمل.",
    },
    compliance: {
      subtitle: "الامتثال",
      title: "معايير الكيمياء والسلامة",
      items: [
        { title: "مطابق لـ REACH", desc: "جميع الكيماويات والأصباغ مطابقة للائحة REACH الأوروبية (EC) رقم 1907/2006. اختبار قائمة المواد المحظورة (RSL) من قِبل مختبرات معتمدة." },
        { title: "أصباغ خالية من AZO", desc: "عدم استخدام أصباغ AZO في أي إنتاج. يُختبر كل دُفعة صبغ وفق التوجيه الأوروبي 2002/61/EC. تقارير الاختبار متاحة مع كل شحنة." },
        { title: "كيماويات OEKO-TEX", desc: "تُستخدم فقط مواد مساعدة معتمدة من OEKO-TEX Standard 100 في المعالجة الرطبة. مراجعة سنوية لجرد الكيماويات من قِبل مختبرات مستقلة." },
      ],
    },
    cta: { title: "اطلبوا عينات الأقمشة", description: "بطاقات عينات مجانية لنطاقنا القياسي. شماعات التطوير المخصص متاحة بتكلفة. الشحن عالمياً خلال 3 أيام.", buttonText: "اطلب عينات" },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Закупка тканей",
      title: "Сертифицированные ткани от проверенных фабрик",
      description: "Мы закупаем у 30+ сертифицированных фабрик GOTS и OEKO-TEX по всей Индии и Европе. Полная документация цепочки хранения, собственное тестирование и обработка в соответствии с REACH для каждого метра.",
    },
    sourcing: {
      subtitle: "Наш подход",
      title: "Ответственная закупка тканей",
      items: [
        { title: "Сертифицированная цепочка поставок", desc: "Каждый метр ткани сопровождается полной документацией цепочки хранения. GOTS Transaction Certificates выдаются на каждую партию. Смешивание сертифицированных и несертифицированных материалов исключено." },
        { title: "30+ партнёрских фабрик", desc: "Долгосрочные отношения с фабриками в Гуджарате, Махараштре, Тамил Наду и европейскими производителями льна. Ежегодные аудиты обеспечивают соответствие нашим стандартам качества и социальной ответственности." },
        { title: "Собственное тестирование", desc: "Все входящие ткани проходят испытания на GSM, усадку (ISO 6330), устойчивость окраски (ISO 105-C06), прочность на разрыв (ISO 13934-1) и верификацию состава до поступления в производство." },
        { title: "Крашение и отделка", desc: "Реактивные красители, не содержащие AZO, соответствующие REACH. Химикаты, сертифицированные по OEKO-TEX Standard 100. Маловоздействующие процессы крашения с рециклингом воды. Лабораторные крашения в течение 5 рабочих дней." },
      ],
    },
    library: {
      subtitle: "Базовый ассортимент",
      title: "Стандартная библиотека тканей",
      headers: ["Ткань", "GSM", "Переплетение", "Ширина", "Усадка", "Происхождение", "Сертификат"],
      footnote: "Карточки образцов и сезонные карты оттенков (весна/лето и осень/зима) доступны по запросу. Вешалки отправляются в течение 3 рабочих дней.",
    },
    custom: {
      subtitle: "Разработка под заказ",
      title: "Ткани по индивидуальному заказу",
      intro: "Не нашли нужного в нашем стандартном ассортименте? Наша команда по разработке тканей работает непосредственно с фабриками для создания эксклюзивных переплетений, смесовых составов и отделок для вашего бренда.",
      items: [
        "Смесовые составы под заказ — хлопок-лён, хлопок-тенсель, лён-вискоза в любом соотношении",
        "Вес под заказ — от 60 г/м² вуаль до 300 г/м² канвас",
        "Специальные отделки — ферментная стирка, персиковая отделка, устойчивость к морщинам, антибактериальная",
        "Разработка печати — цифровая, шелкография, блок, выжигание, пигментная",
        "Полосы и клетки с набивкой в пряже — нестандартные цветовые решения при МЗО 500 м",
        "Разработка эксклюзивных тканей — выделение ткацкого станка для заказов от 3 000 м",
      ],
      footnote: "Минимальный заказ на разработку ткани под заказ: 500 метров. Лабораторные крашения и пробная печать в течение 7 рабочих дней.",
    },
    compliance: {
      subtitle: "Соответствие требованиям",
      title: "Химические и санитарные стандарты",
      items: [
        { title: "Соответствие REACH", desc: "Все химикаты и красители соответствуют Регламенту ЕС REACH (EC) № 1907/2006. Список ограниченных веществ (RSL) проверяется аккредитованными лабораториями." },
        { title: "Красители без AZO", desc: "Полный отказ от красителей AZO во всём производстве. Каждая партия красителя тестируется по Директиве ЕС 2002/61/EC. Протоколы испытаний доступны по каждой партии." },
        { title: "Химикаты OEKO-TEX", desc: "В мокрых процессах используются только вспомогательные вещества, сертифицированные по OEKO-TEX Standard 100. Ежегодный аудит химического инвентаря сторонними лабораториями." },
      ],
    },
    cta: { title: "Запросить образцы тканей", description: "Бесплатные карточки образцов для стандартного ассортимента. Вешалки для разработки под заказ — по стоимости. Доставка по всему миру в течение 3 дней.", buttonText: "Заказать образцы" },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Pozyskiwanie tkanin",
      title: "Certyfikowane tkaniny z zaufanych zakładów",
      description: "Pozyskujemy od 30+ certyfikowanych zakładów GOTS i OEKO-TEX w Indiach i Europie. Pełna dokumentacja łańcucha własności, testy wewnętrzne i przetwarzanie zgodne z REACH dla każdego metra.",
    },
    sourcing: {
      subtitle: "Nasze podejście",
      title: "Odpowiedzialne pozyskiwanie tkanin",
      items: [
        { title: "Certyfikowany łańcuch dostaw", desc: "Każdy metr tkaniny posiada pełną dokumentację łańcucha własności. Świadectwa transakcji GOTS wystawiane per przesyłka. Brak mieszania materiałów certyfikowanych z niecertyfikowanymi." },
        { title: "30+ zakładów partnerskich", desc: "Długotrwałe relacje z zakładami w Gujarat, Maharashtra, Tamil Nadu i europejskimi producentami lnu. Coroczne audyty zapewniają zgodność z naszymi standardami jakości i społecznymi." },
        { title: "Testy wewnętrzne", desc: "Wszystkie przychodzące tkaniny testowane pod kątem GSM, kurczliwości (ISO 6330), trwałości barwy (ISO 105-C06), wytrzymałości na rozciąganie (ISO 13934-1) i weryfikacji składu przed wejściem do produkcji." },
        { title: "Barwienie i wykańczanie", desc: "Barwniki reaktywne wolne od AZO, zgodne z REACH. Chemikalia certyfikowane przez OEKO-TEX Standard 100. Niskoemisyjne procesy barwienia z recyklingiem wody. Barwienia laboratoryjne w ciągu 5 dni roboczych." },
      ],
    },
    library: {
      subtitle: "Asortyment podstawowy",
      title: "Standardowa biblioteka tkanin",
      headers: ["Tkanina", "GSM", "Splot", "Szerokość", "Kurczliwość", "Pochodzenie", "Certyfikat"],
      footnote: "Karty próbek i sezonowe karty odcieni (wiosna/lato i jesień/zima) dostępne na żądanie. Wieszaki wysyłane w ciągu 3 dni roboczych.",
    },
    custom: {
      subtitle: "Opracowanie na miarę",
      title: "Opcje tkanin na zamówienie",
      intro: "Nie możesz znaleźć tego, czego potrzebujesz w naszym standardowym asortymencie? Nasz zespół ds. opracowania tkanin współpracuje bezpośrednio z zakładami, aby tworzyć ekskluzywne sploty, mieszanki i wykończenia dla Twojej marki.",
      items: [
        "Niestandardowe mieszanki — bawełna-len, bawełna-Tencel, len-wiskoza w dowolnym stosunku",
        "Niestandardowe gramatury — od 60 GSM woalu do 300 GSM kanwy",
        "Specjalne wykończenia — pranie enzymatyczne, wykończenie brzoskwiniowe, antygniotliwe, antybakteryjne",
        "Opracowanie nadruku — cyfrowy, sitodruk, stemplowy, wypalany, pigmentowy",
        "Paski i kratki barwione w przędzy — niestandardowe kolorystyki przy MOQ 500 m",
        "Ekskluzywny rozwój tkanin — dedykowane krosna dla zamówień 3 000 m+",
      ],
      footnote: "Minimalne zamówienie na opracowanie tkanin na zamówienie: 500 metrów. Barwienia laboratoryjne i próbki druku w ciągu 7 dni roboczych.",
    },
    compliance: {
      subtitle: "Zgodność",
      title: "Normy chemiczne i bezpieczeństwa",
      items: [
        { title: "Zgodność z REACH", desc: "Wszystkie chemikalia i barwniki są zgodne z rozporządzeniem UE REACH (WE) nr 1907/2006. Lista substancji ograniczonych (RSL) testowana przez akredytowane laboratoria." },
        { title: "Barwniki wolne od AZO", desc: "Zero użycia barwników AZO w całej produkcji. Każda partia barwnika testowana zgodnie z Dyrektywą UE 2002/61/WE. Raporty z testów dostępne per przesyłka." },
        { title: "Chemikalia OEKO-TEX", desc: "Wyłącznie środki pomocnicze certyfikowane przez OEKO-TEX Standard 100 stosowane w mokrym przetwarzaniu. Coroczny audyt inwentarza chemicznego przez zewnętrzne laboratoria." },
      ],
    },
    cta: { title: "Zamów próbki tkanin", description: "Bezpłatne karty próbek dla naszego standardowego asortymentu. Wieszaki do niestandardowego opracowania dostępne po kosztach. Wysyłka na cały świat w ciągu 3 dni.", buttonText: "Zamów próbki" },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Approvisionnement en tissus",
      title: "Tissus certifiés provenant de filatures de confiance",
      description: "Nous sourcions auprès de 30+ filatures certifiées GOTS et OEKO-TEX en Inde et en Europe. Documentation complète de la chaîne de traçabilité, tests internes et traitement conforme REACH pour chaque mètre.",
    },
    sourcing: {
      subtitle: "Notre approche",
      title: "Approvisionnement responsable en tissus",
      items: [
        { title: "Chaîne d'approvisionnement certifiée", desc: "Chaque mètre de tissu est accompagné d'une documentation complète de chaîne de traçabilité. Certificats de Transaction GOTS émis par expédition. Aucun mélange de matières certifiées et non certifiées." },
        { title: "30+ filatures partenaires", desc: "Relations de longue date avec des filatures au Gujarat, Maharashtra, Tamil Nadu et des producteurs de lin européens. Les audits annuels garantissent la conformité à nos standards de qualité et sociaux." },
        { title: "Tests internes", desc: "Tous les tissus entrants testés pour GSM, rétrécissement (ISO 6330), solidité des teintures (ISO 105-C06), résistance à la traction (ISO 13934-1) et vérification de composition avant d'entrer en production." },
        { title: "Teinture et finition", desc: "Colorants réactifs conformes REACH, sans AZO. Produits chimiques certifiés OEKO-TEX Standard 100. Processus de teinture à faible impact avec recyclage de l'eau. Bains de teinte dans les 5 jours ouvrables." },
      ],
    },
    library: {
      subtitle: "Gamme de base",
      title: "Bibliothèque de tissus standard",
      headers: ["Tissu", "GSM", "Armure", "Laize", "Rétrécissement", "Origine", "Cert."],
      footnote: "Cartes d'échantillons et cartes de teintes saisonnières P/É et A/H disponibles sur demande. Cintres expédiés dans les 3 jours ouvrables.",
    },
    custom: {
      subtitle: "Développement sur mesure",
      title: "Options de tissus personnalisés",
      intro: "Vous ne trouvez pas ce dont vous avez besoin dans notre gamme standard ? Notre équipe de développement de tissus travaille directement avec les filatures pour créer des armures, mélanges et finitions exclusifs pour votre marque.",
      items: [
        "Mélanges personnalisés — coton-lin, coton-Tencel, lin-viscose dans n'importe quel ratio",
        "Grammages personnalisés — de 60 GSM voile à 300 GSM canevas",
        "Finitions spéciales — lavage enzymatique, finition pêche, infroissable, antibactérien",
        "Développement d'impression — numérique, sérigraphie, bloc, décharge, pigment",
        "Rayures et carreaux teints en fil — coloris personnalisés avec MOQ 500 m",
        "Développements de tissus exclusifs — allocation de métier dédiée pour les commandes 3 000 m+",
      ],
      footnote: "Commande minimum pour développement de tissu personnalisé : 500 mètres. Bains de teinte et tirés de couleur fournis dans les 7 jours ouvrables.",
    },
    compliance: {
      subtitle: "Conformité",
      title: "Normes chimiques et de sécurité",
      items: [
        { title: "Conforme REACH", desc: "Tous les produits chimiques et colorants sont conformes au Règlement UE REACH (CE) No 1907/2006. Liste des substances restreintes (RSL) testée par des laboratoires accrédités." },
        { title: "Colorants sans AZO", desc: "Utilisation zéro de colorants AZO dans toute la production. Chaque lot de colorant testé selon la Directive UE 2002/61/CE. Rapports de test disponibles par expédition." },
        { title: "Produits chimiques OEKO-TEX", desc: "Seuls des auxiliaires certifiés OEKO-TEX Standard 100 sont utilisés en traitement humide. Audit annuel de l'inventaire chimique par des laboratoires tiers." },
      ],
    },
    cta: { title: "Demander des échantillons de tissus", description: "Cartes d'échantillons gratuites pour notre gamme standard. Cintres de développement personnalisé disponibles au prix coûtant. Expédition mondiale en 3 jours.", buttonText: "Commander des échantillons" },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Approvvigionamento tessuti",
      title: "Tessuti certificati da filature di fiducia",
      description: "Approvvigoniamo da 30+ filature certificate GOTS e OEKO-TEX in India e in Europa. Documentazione completa della catena di custodia, test interni e lavorazione conforme a REACH per ogni metro.",
    },
    sourcing: {
      subtitle: "Il nostro approccio",
      title: "Approvvigionamento responsabile di tessuti",
      items: [
        { title: "Catena di fornitura certificata", desc: "Ogni metro di tessuto è accompagnato da documentazione completa della catena di custodia. Certificati di Transazione GOTS emessi per spedizione. Nessuna miscelazione di materiali certificati e non certificati." },
        { title: "30+ filature partner", desc: "Relazioni consolidate con filature in Gujarat, Maharashtra, Tamil Nadu e produttori europei di lino. Audit annuali garantiscono la conformità ai nostri standard qualitativi e sociali." },
        { title: "Test interni", desc: "Tutti i tessuti in entrata testati per GSM, ritiro (ISO 6330), solidità del colore (ISO 105-C06), resistenza alla trazione (ISO 13934-1) e verifica della composizione prima di entrare in produzione." },
        { title: "Tintura e finitura", desc: "Coloranti reattivi conformi a REACH, senza AZO. Ausiliari certificati OEKO-TEX Standard 100. Processi di tintura a basso impatto con riciclo dell'acqua. Campionature di colore entro 5 giorni lavorativi." },
      ],
    },
    library: {
      subtitle: "Gamma base",
      title: "Libreria tessuti standard",
      headers: ["Tessuto", "GSM", "Armatura", "Larghezza", "Restringimento", "Origine", "Cert."],
      footnote: "Cartelle campioni e carte tonalità stagionali P/E e A/I disponibili su richiesta. Campioni spediti entro 3 giorni lavorativi.",
    },
    custom: {
      subtitle: "Sviluppo su misura",
      title: "Opzioni tessuti personalizzati",
      intro: "Non riuscite a trovare ciò di cui avete bisogno nella nostra gamma standard? Il nostro team di sviluppo tessuti lavora direttamente con le filature per creare armature, miscele e finiture esclusive per il vostro brand.",
      items: [
        "Miscele personalizzate — cotone-lino, cotone-Tencel, lino-viscosa in qualsiasi rapporto",
        "Grammature personalizzate — da 60 GSM voile a 300 GSM canvas",
        "Finiture speciali — lavaggio enzimatico, finitura pesca, antipiega, antibatterico",
        "Sviluppo stampe — digitale, serigrafia, blocco, discharge, pigmento",
        "Righe e quadri tinti in filo — colorazioni personalizzate con MOQ 500 m",
        "Sviluppo tessuti esclusivi — assegnazione telaio dedicato per ordini 3.000 m+",
      ],
      footnote: "Ordine minimo per sviluppo tessuto personalizzato: 500 metri. Campionature colore e prove stampa entro 7 giorni lavorativi.",
    },
    compliance: {
      subtitle: "Conformità",
      title: "Standard chimici e di sicurezza",
      items: [
        { title: "Conforme REACH", desc: "Tutti i prodotti chimici e i coloranti sono conformi al Regolamento UE REACH (CE) N. 1907/2006. Elenco delle sostanze limitatee (RSL) testato da laboratori accreditati." },
        { title: "Coloranti senza AZO", desc: "Zero utilizzo di coloranti AZO in tutta la produzione. Ogni lotto di colorante testato secondo la Direttiva UE 2002/61/CE. Rapporti di test disponibili per spedizione." },
        { title: "Prodotti chimici OEKO-TEX", desc: "Solo ausiliari certificati OEKO-TEX Standard 100 utilizzati nella lavorazione umida. Audit annuale dell'inventario chimico da parte di laboratori terzi." },
      ],
    },
    cta: { title: "Richiedere campioni di tessuto", description: "Cartelle campioni gratuite per la nostra gamma standard. Campioni di sviluppo personalizzato disponibili a costo. Spedizione in tutto il mondo entro 3 giorni.", buttonText: "Ordina campioni" },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Stofinkoop",
      title: "Gecertificeerde stoffen van vertrouwde fabrieken",
      description: "We sourcen bij 30+ GOTS- en OEKO-TEX-gecertificeerde fabrieken in India en Europa. Volledige documentatie van de bewaarderscyclus, interne tests en REACH-conforme verwerking voor elke meter.",
    },
    sourcing: {
      subtitle: "Onze aanpak",
      title: "Verantwoorde stofinkoop",
      items: [
        { title: "Gecertificeerde toeleveringsketen", desc: "Elke meter stof wordt vergezeld van volledige documentatie van de bewaarderscyclus. GOTS Transactiecertificaten uitgegeven per zending. Geen vermenging van gecertificeerde en niet-gecertificeerde materialen." },
        { title: "30+ partnerfabrieken", desc: "Langdurige relaties met fabrieken in Gujarat, Maharashtra, Tamil Nadu en Europese linnenproducenten. Jaarlijkse audits zorgen voor naleving van onze kwaliteits- en sociale normen." },
        { title: "Interne tests", desc: "Alle inkomende stoffen getest op GSM, krimp (ISO 6330), kleurechtheid (ISO 105-C06), treksterkte (ISO 13934-1) en samenstelling verificatie voor de productie ingaat." },
        { title: "Verven en afwerken", desc: "REACH-conforme reactieve verfstoffen zonder AZO. OEKO-TEX Standard 100 gecertificeerde chemicaliën. Laagsimpact verfprocessen met waterrecycling. Laboratoriumkleuringen binnen 5 werkdagen." },
      ],
    },
    library: {
      subtitle: "Kernassortiment",
      title: "Standaard stoffenbibliotheek",
      headers: ["Stof", "GSM", "Binding", "Breedte", "Krimp", "Herkomst", "Cert."],
      footnote: "Stalenkaarten en seizoensgebonden kleurkaarten (V/Z en H/W) beschikbaar op aanvraag. Hangers verzonden binnen 3 werkdagen.",
    },
    custom: {
      subtitle: "Maatwerkontwikkeling",
      title: "Maatwerk stoffen opties",
      intro: "Kunt u niet vinden wat u nodig heeft in ons standaardassortiment? Ons stofontwikkelingsteam werkt rechtstreeks samen met fabrieken om exclusieve bindingen, mengsels en afwerkingen voor uw merk te creëren.",
      items: [
        "Maatwerk mengsels — katoen-linnen, katoen-Tencel, linnen-viscose in elke verhouding",
        "Maatwerk gewichten — van 60 GSM voile tot 300 GSM canvas",
        "Speciale afwerkingen — enzymwas, perzikafwerking, kreukvrij, antibacterieel",
        "Printontwikkeling — digitaal, zeefdruk, blok, discharge, pigmentdruk",
        "Garengeverfd streep en ruit — maatwerk kleurstellingen met 500 m MOQ",
        "Exclusieve stofontwikkelingen — toegewijd weefgetouwgebruik voor orders 3.000 m+",
      ],
      footnote: "Minimale bestelling voor maatwerk stofontwikkeling: 500 meter. Laboratoriumkleuringen en proefafdrukken binnen 7 werkdagen.",
    },
    compliance: {
      subtitle: "Conformiteit",
      title: "Chemische en veiligheidsnormen",
      items: [
        { title: "REACH-conform", desc: "Alle chemicaliën en verfstoffen voldoen aan EU REACH-Verordening (EG) Nr. 1907/2006. Lijst Beperkte Stoffen (RSL) getest door geaccrediteerde laboratoria." },
        { title: "AZO-vrije verfstoffen", desc: "Nul gebruik van AZO-verfstoffen in de gehele productie. Elke verfstofpartij getest per EU-Richtlijn 2002/61/EG. Testrapporten beschikbaar per zending." },
        { title: "OEKO-TEX chemicaliën", desc: "Alleen OEKO-TEX Standard 100 gecertificeerde hulpstoffen gebruikt in natte verwerking. Jaarlijkse chemische inventarisaudit door externe laboratoria." },
      ],
    },
    cta: { title: "Stoffen stalenkaarten aanvragen", description: "Gratis stalenkaarten voor ons standaardassortiment. Maatwerkontwikkeling hangers beschikbaar tegen kostprijs. Wereldwijde verzending binnen 3 dagen.", buttonText: "Stalen bestellen" },
  },
};
