// ─────────────────────────────────────────────────────────────────────────────
// Certifications page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// NOTE: Vedant Fashion currently holds no third-party certifications. This page
//       is framed honestly around the compliance and quality practices we
//       follow in-house, not around certifications we do not hold.
//       Practice names and responsibility tags are kept in English in the
//       component — only scope, frequency, and details translate.
// ─────────────────────────────────────────────────────────────────────────────

export interface CertificationItem {
  scope: string;
  validity: string;
  details: string;
}

export interface CertificationsLocale {
  hero: { subtitle: string; title: string; description: string };
  section: { subtitle: string; title: string };
  certs: CertificationItem[]; // 8 items — order matches practices array in page
  activeBadge: string;
  validityLabel: string;
  auditorLabel: string;
  cta: { title: string; description: string; buttonText: string };
}

export const certificationsContent: Record<string, CertificationsLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Compliance & Quality",
      title: "Honest About Where We Stand",
      description:
        "We don't hold third-party certifications yet — and we'd rather tell you that plainly than make claims we can't back up. Here's what we do follow: in-house quality checks, sustainable fabric sourcing, and compliance practices, with certifications on our roadmap as we expand.",
    },
    section: { subtitle: "Our Practices", title: "What We Follow Today" },
    certs: [
      {
        scope: "Fabric inspection before production begins",
        validity: "Every batch",
        details:
          "Shrinkage, colorfastness, GSM, and tensile strength checked in our in-house textile lab before cutting starts.",
      },
      {
        scope: "Product safety — awareness of harmful substances",
        validity: "Ongoing",
        details:
          "We work with dyes and finishes chosen to avoid known harmful substances, and are moving toward formal REACH-aligned documentation.",
      },
      {
        scope: "Sustainable and recycled fabric sourcing",
        validity: "Growing share",
        details:
          "An increasing share of our fabric comes from sustainable and recycled sources as we expand our supplier network.",
      },
      {
        scope: "Quality management within our facility",
        validity: "Every order",
        details:
          "In-house checks covering design, cutting, stitching, finishing, and export packing — not yet third-party certified.",
      },
      {
        scope: "Chemical safety awareness (REACH-aligned)",
        validity: "Ongoing",
        details:
          "We favour REACH-aligned dyes and finishes and are working toward formal chemical compliance documentation.",
      },
      {
        scope: "Fair labour practices at our facility",
        validity: "Ongoing",
        details:
          "Living wages above local minimum, a majority-women workforce, and a respectful working environment — not yet independently audited.",
      },
      {
        scope: "Responsible waste handling",
        validity: "Ongoing",
        details:
          "Fabric offcuts reused where possible; packaging materials recycled. Formal environmental management is part of our expansion plan.",
      },
      {
        scope: "Export documentation and customs compliance",
        validity: "Every shipment",
        details:
          "Correct HS code classification, Certificate of Origin, and shipment documentation provided for every order.",
      },
    ],
    activeBadge: "In Practice",
    validityLabel: "Frequency:",
    auditorLabel: "Responsibility:",
    cta: {
      title: "Have Questions About Our Practices?",
      description:
        "Ask us directly about fabric sourcing, quality checks, or working conditions at our Mumbai facility. We'll answer honestly, including where we're still building toward certification.",
      buttonText: "Get in Touch",
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "الامتثال والجودة",
      title: "صراحة حول موقعنا الحالي",
      description:
        "لا نملك حتى الآن شهادات معتمدة من طرف ثالث — ونفضّل أن نخبرك بذلك بوضوح بدلاً من تقديم ادعاءات لا يمكننا إثباتها. إليك ما نتبعه فعلاً: فحوصات جودة داخلية، وتوريد أقمشة مستدامة، وممارسات امتثال، مع خطط للحصول على شهادات ضمن خارطة طريق التوسع.",
    },
    section: { subtitle: "ممارساتنا", title: "ما نتبعه اليوم" },
    certs: [
      {
        scope: "فحص الأقمشة قبل بدء الإنتاج",
        validity: "كل دفعة",
        details: "فحص الانكماش والثبات اللوني وكثافة الغرام والمتانة في مختبرنا النسيجي الداخلي قبل بدء القص.",
      },
      {
        scope: "سلامة المنتج — الوعي بالمواد الضارة",
        validity: "مستمر",
        details: "نعمل بأصباغ وإنهاءات مختارة لتجنب المواد الضارة المعروفة، ونتحرك نحو توثيق رسمي متوافق مع REACH.",
      },
      {
        scope: "توريد أقمشة مستدامة ومعاد تدويرها",
        validity: "حصة متزايدة",
        details: "حصة متزايدة من أقمشتنا تأتي من مصادر مستدامة ومعاد تدويرها مع توسيع شبكة مورّدينا.",
      },
      {
        scope: "إدارة الجودة داخل منشأتنا",
        validity: "كل طلبية",
        details: "فحوصات داخلية تغطي التصميم والقص والخياطة والتشطيب وتعبئة التصدير — لم تُعتمد بعد من طرف ثالث.",
      },
      {
        scope: "الوعي بالسلامة الكيميائية (متوافق مع REACH)",
        validity: "مستمر",
        details: "نفضّل الأصباغ والإنهاءات المتوافقة مع REACH ونعمل نحو توثيق رسمي للامتثال الكيميائي.",
      },
      {
        scope: "ممارسات عمل عادلة في منشأتنا",
        validity: "مستمر",
        details: "أجور معيشية تفوق الحد الأدنى المحلي، وقوة عاملة غالبيتها من النساء، وبيئة عمل محترمة — لم تخضع بعد لتدقيق مستقل.",
      },
      {
        scope: "إدارة مسؤولة للنفايات",
        validity: "مستمر",
        details: "إعادة استخدام مخلفات الأقمشة حيثما أمكن؛ وإعادة تدوير مواد التغليف. الإدارة البيئية الرسمية جزء من خطة توسعنا.",
      },
      {
        scope: "وثائق التصدير والامتثال الجمركي",
        validity: "كل شحنة",
        details: "تصنيف صحيح لرموز HS، وشهادة منشأ، ووثائق شحن لكل طلبية.",
      },
    ],
    activeBadge: "مطبّق",
    validityLabel: "التكرار:",
    auditorLabel: "المسؤولية:",
    cta: {
      title: "لديك أسئلة حول ممارساتنا؟",
      description:
        "اسألنا مباشرة عن مصادر الأقمشة أو فحوصات الجودة أو ظروف العمل في منشأتنا بمومباي. سنجيب بصراحة، بما في ذلك ما زلنا نعمل على تحقيقه للحصول على الشهادات.",
      buttonText: "تواصل معنا",
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Соответствие и качество",
      title: "Честно о том, где мы находимся",
      description:
        "У нас пока нет сертификатов от независимых органов — и мы предпочитаем сказать об этом прямо, вместо того чтобы делать заявления, которые не можем подтвердить. Вот что мы действительно соблюдаем: внутренний контроль качества, закупку устойчивых тканей и практики соответствия, а сертификация — часть нашего плана расширения.",
    },
    section: { subtitle: "Наши практики", title: "Чему мы следуем сегодня" },
    certs: [
      {
        scope: "Проверка ткани перед началом производства",
        validity: "Каждая партия",
        details: "Усадка, устойчивость окраски, плотность GSM и прочность на разрыв проверяются в нашей внутренней текстильной лаборатории перед раскроем.",
      },
      {
        scope: "Безопасность продукции — осведомлённость о вредных веществах",
        validity: "Постоянно",
        details: "Мы работаем с красителями и отделками, выбранными для избежания известных вредных веществ, и движемся к формальной документации, соответствующей REACH.",
      },
      {
        scope: "Закупка устойчивых и переработанных тканей",
        validity: "Растущая доля",
        details: "Растущая доля наших тканей поступает из устойчивых и переработанных источников по мере расширения сети поставщиков.",
      },
      {
        scope: "Управление качеством на нашем предприятии",
        validity: "Каждый заказ",
        details: "Внутренние проверки охватывают дизайн, раскрой, пошив, отделку и экспортную упаковку — пока без сертификации третьей стороной.",
      },
      {
        scope: "Осведомлённость о химической безопасности (соответствие REACH)",
        validity: "Постоянно",
        details: "Мы отдаём предпочтение красителям и отделкам, соответствующим REACH, и работаем над формальной документацией химического соответствия.",
      },
      {
        scope: "Справедливые трудовые практики на нашем предприятии",
        validity: "Постоянно",
        details: "Заработная плата выше местного минимума, преимущественно женский коллектив и уважительная рабочая среда — пока без независимого аудита.",
      },
      {
        scope: "Ответственное обращение с отходами",
        validity: "Постоянно",
        details: "Обрезки ткани повторно используются там, где это возможно; упаковочные материалы перерабатываются. Формальный экологический менеджмент — часть нашего плана расширения.",
      },
      {
        scope: "Экспортная документация и таможенное соответствие",
        validity: "Каждая отгрузка",
        details: "Корректная классификация кодов ТН ВЭД, сертификат происхождения и документация по отгрузке для каждого заказа.",
      },
    ],
    activeBadge: "Соблюдается",
    validityLabel: "Периодичность:",
    auditorLabel: "Ответственность:",
    cta: {
      title: "Есть вопросы о наших практиках?",
      description:
        "Спросите нас напрямую о закупке тканей, контроле качества или условиях труда на нашем предприятии в Мумбаи. Мы ответим честно, включая то, над чем мы всё ещё работаем на пути к сертификации.",
      buttonText: "Связаться с нами",
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Zgodność i jakość",
      title: "Szczerze o tym, gdzie jesteśmy",
      description:
        "Nie posiadamy jeszcze certyfikatów strony trzeciej — i wolimy powiedzieć to wprost, niż składać deklaracje, których nie możemy poprzeć. Oto, czego faktycznie przestrzegamy: wewnętrzna kontrola jakości, pozyskiwanie zrównoważonych tkanin oraz praktyki zgodności, a certyfikacja jest częścią naszego planu rozwoju.",
    },
    section: { subtitle: "Nasze praktyki", title: "Czego przestrzegamy dziś" },
    certs: [
      {
        scope: "Kontrola tkanin przed rozpoczęciem produkcji",
        validity: "Każda partia",
        details: "Kurczliwość, trwałość barwy, gęstość GSM i wytrzymałość na zerwanie sprawdzane w naszym wewnętrznym laboratorium tekstylnym przed krojeniem.",
      },
      {
        scope: "Bezpieczeństwo produktu — świadomość substancji szkodliwych",
        validity: "Na bieżąco",
        details: "Pracujemy z barwnikami i wykończeniami dobranymi tak, by unikać znanych substancji szkodliwych, dążąc do formalnej dokumentacji zgodnej z REACH.",
      },
      {
        scope: "Pozyskiwanie tkanin zrównoważonych i z recyklingu",
        validity: "Rosnący udział",
        details: "Rosnący udział naszych tkanin pochodzi ze zrównoważonych i pochodzących z recyklingu źródeł w miarę rozwoju sieci dostawców.",
      },
      {
        scope: "Zarządzanie jakością w naszym zakładzie",
        validity: "Każde zamówienie",
        details: "Wewnętrzne kontrole obejmujące projektowanie, krojenie, szycie, wykańczanie i pakowanie eksportowe — jeszcze bez certyfikacji strony trzeciej.",
      },
      {
        scope: "Świadomość bezpieczeństwa chemicznego (zgodność z REACH)",
        validity: "Na bieżąco",
        details: "Preferujemy barwniki i wykończenia zgodne z REACH i pracujemy nad formalną dokumentacją zgodności chemicznej.",
      },
      {
        scope: "Uczciwe praktyki pracy w naszym zakładzie",
        validity: "Na bieżąco",
        details: "Wynagrodzenia powyżej lokalnego minimum, siła robocza w większości kobieca i środowisko pracy oparte na szacunku — jeszcze bez niezależnego audytu.",
      },
      {
        scope: "Odpowiedzialne gospodarowanie odpadami",
        validity: "Na bieżąco",
        details: "Odpady tkaninowe ponownie wykorzystywane, gdy to możliwe; materiały opakowaniowe poddawane recyklingowi. Formalne zarządzanie środowiskowe jest częścią naszego planu rozwoju.",
      },
      {
        scope: "Dokumentacja eksportowa i zgodność celna",
        validity: "Każda wysyłka",
        details: "Poprawna klasyfikacja kodów HS, świadectwo pochodzenia i dokumentacja wysyłkowa dla każdego zamówienia.",
      },
    ],
    activeBadge: "Stosowane",
    validityLabel: "Częstotliwość:",
    auditorLabel: "Odpowiedzialność:",
    cta: {
      title: "Masz pytania dotyczące naszych praktyk?",
      description:
        "Zapytaj nas bezpośrednio o pozyskiwanie tkanin, kontrolę jakości lub warunki pracy w naszym zakładzie w Mumbaju. Odpowiemy szczerze, w tym o tym, nad czym wciąż pracujemy w drodze do certyfikacji.",
      buttonText: "Skontaktuj się",
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Conformité et qualité",
      title: "Honnêtes sur notre situation actuelle",
      description:
        "Nous ne détenons pas encore de certifications tierces — et nous préférons vous le dire clairement plutôt que de faire des allégations que nous ne pouvons pas étayer. Voici ce que nous suivons réellement : des contrôles qualité internes, un approvisionnement en tissus durables et des pratiques de conformité, avec la certification inscrite dans notre feuille de route de développement.",
    },
    section: { subtitle: "Nos pratiques", title: "Ce que nous suivons aujourd'hui" },
    certs: [
      {
        scope: "Inspection des tissus avant le début de la production",
        validity: "Chaque lot",
        details: "Rétrécissement, solidité des couleurs, GSM et résistance à la traction vérifiés dans notre laboratoire textile interne avant la coupe.",
      },
      {
        scope: "Sécurité produit — sensibilisation aux substances nocives",
        validity: "En continu",
        details: "Nous travaillons avec des colorants et finitions choisis pour éviter les substances nocives connues, et évoluons vers une documentation formelle alignée sur REACH.",
      },
      {
        scope: "Approvisionnement en tissus durables et recyclés",
        validity: "Part croissante",
        details: "Une part croissante de nos tissus provient de sources durables et recyclées à mesure que nous développons notre réseau de fournisseurs.",
      },
      {
        scope: "Gestion de la qualité au sein de notre site",
        validity: "Chaque commande",
        details: "Contrôles internes couvrant la conception, la coupe, la couture, la finition et l'emballage export — pas encore certifiés par un tiers.",
      },
      {
        scope: "Sensibilisation à la sécurité chimique (alignée REACH)",
        validity: "En continu",
        details: "Nous privilégions les colorants et finitions alignés REACH et travaillons vers une documentation formelle de conformité chimique.",
      },
      {
        scope: "Pratiques de travail équitables sur notre site",
        validity: "En continu",
        details: "Salaires supérieurs au minimum local, effectif majoritairement féminin et environnement de travail respectueux — pas encore audités de façon indépendante.",
      },
      {
        scope: "Gestion responsable des déchets",
        validity: "En continu",
        details: "Chutes de tissu réutilisées dans la mesure du possible ; matériaux d'emballage recyclés. Une gestion environnementale formelle fait partie de notre plan de développement.",
      },
      {
        scope: "Documentation d'exportation et conformité douanière",
        validity: "Chaque expédition",
        details: "Classification correcte des codes SH, certificat d'origine et documentation d'expédition fournis pour chaque commande.",
      },
    ],
    activeBadge: "En pratique",
    validityLabel: "Fréquence :",
    auditorLabel: "Responsabilité :",
    cta: {
      title: "Des questions sur nos pratiques ?",
      description:
        "Demandez-nous directement des informations sur l'approvisionnement en tissus, les contrôles qualité ou les conditions de travail sur notre site de Mumbai. Nous répondrons honnêtement, y compris sur ce que nous construisons encore vers la certification.",
      buttonText: "Nous contacter",
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Conformità e qualità",
      title: "Onesti sulla nostra situazione attuale",
      description:
        "Non deteniamo ancora certificazioni di terze parti — e preferiamo dirlo chiaramente piuttosto che fare affermazioni che non possiamo dimostrare. Ecco cosa seguiamo realmente: controlli qualità interni, approvvigionamento di tessuti sostenibili e pratiche di conformità, con la certificazione parte del nostro percorso di espansione.",
    },
    section: { subtitle: "Le nostre pratiche", title: "Cosa seguiamo oggi" },
    certs: [
      {
        scope: "Ispezione dei tessuti prima dell'inizio della produzione",
        validity: "Ogni lotto",
        details: "Restringimento, solidità del colore, GSM e resistenza alla trazione verificati nel nostro laboratorio tessile interno prima del taglio.",
      },
      {
        scope: "Sicurezza del prodotto — consapevolezza delle sostanze nocive",
        validity: "Continuo",
        details: "Lavoriamo con coloranti e finiture scelti per evitare sostanze nocive note, muovendoci verso una documentazione formale allineata a REACH.",
      },
      {
        scope: "Approvvigionamento di tessuti sostenibili e riciclati",
        validity: "Quota crescente",
        details: "Una quota crescente dei nostri tessuti proviene da fonti sostenibili e riciclate man mano che ampliamo la nostra rete di fornitori.",
      },
      {
        scope: "Gestione della qualità all'interno del nostro stabilimento",
        validity: "Ogni ordine",
        details: "Controlli interni che coprono design, taglio, cucitura, finitura e imballaggio per l'export — non ancora certificati da terzi.",
      },
      {
        scope: "Consapevolezza della sicurezza chimica (allineata REACH)",
        validity: "Continuo",
        details: "Privilegiamo coloranti e finiture allineati a REACH e lavoriamo verso una documentazione formale di conformità chimica.",
      },
      {
        scope: "Pratiche di lavoro eque nel nostro stabilimento",
        validity: "Continuo",
        details: "Salari superiori al minimo locale, forza lavoro a maggioranza femminile e ambiente di lavoro rispettoso — non ancora sottoposti ad audit indipendente.",
      },
      {
        scope: "Gestione responsabile dei rifiuti",
        validity: "Continuo",
        details: "Scarti di tessuto riutilizzati ove possibile; materiali di imballaggio riciclati. La gestione ambientale formale fa parte del nostro piano di espansione.",
      },
      {
        scope: "Documentazione di esportazione e conformità doganale",
        validity: "Ogni spedizione",
        details: "Corretta classificazione dei codici HS, certificato di origine e documentazione di spedizione forniti per ogni ordine.",
      },
    ],
    activeBadge: "In pratica",
    validityLabel: "Frequenza:",
    auditorLabel: "Responsabilità:",
    cta: {
      title: "Hai domande sulle nostre pratiche?",
      description:
        "Chiedici direttamente informazioni sull'approvvigionamento dei tessuti, i controlli di qualità o le condizioni di lavoro presso il nostro stabilimento di Mumbai. Risponderemo onestamente, incluso su cosa stiamo ancora costruendo verso la certificazione.",
      buttonText: "Contattaci",
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Naleving & kwaliteit",
      title: "Eerlijk over waar wij staan",
      description:
        "Wij bezitten nog geen certificeringen van derden — en dat zeggen we liever ronduit dan claims te doen die we niet kunnen onderbouwen. Dit volgen we wél: interne kwaliteitscontroles, inkoop van duurzame stoffen en nalevingspraktijken, met certificering als onderdeel van onze uitbreidingsroutekaart.",
    },
    section: { subtitle: "Onze praktijken", title: "Wat wij vandaag volgen" },
    certs: [
      {
        scope: "Stofinspectie voordat de productie begint",
        validity: "Elke partij",
        details: "Krimp, kleurechtheid, GSM en treksterkte gecontroleerd in ons interne textiellaboratorium voordat het snijden begint.",
      },
      {
        scope: "Productveiligheid — bewustzijn van schadelijke stoffen",
        validity: "Doorlopend",
        details: "Wij werken met kleurstoffen en afwerkingen die gekozen zijn om bekende schadelijke stoffen te vermijden, en werken toe naar formele REACH-conforme documentatie.",
      },
      {
        scope: "Inkoop van duurzame en gerecyclede stoffen",
        validity: "Groeiend aandeel",
        details: "Een groeiend aandeel van onze stoffen komt uit duurzame en gerecyclede bronnen naarmate we ons leveranciersnetwerk uitbreiden.",
      },
      {
        scope: "Kwaliteitsmanagement binnen onze vestiging",
        validity: "Elke bestelling",
        details: "Interne controles voor ontwerp, snijden, naaien, afwerking en exportverpakking — nog niet extern gecertificeerd.",
      },
      {
        scope: "Bewustzijn van chemische veiligheid (REACH-conform)",
        validity: "Doorlopend",
        details: "Wij geven de voorkeur aan REACH-conforme kleurstoffen en afwerkingen en werken toe naar formele chemische nalevingsdocumentatie.",
      },
      {
        scope: "Eerlijke arbeidspraktijken bij onze vestiging",
        validity: "Doorlopend",
        details: "Leefbaar loon boven het lokale minimum, een overwegend vrouwelijk personeelsbestand en een respectvolle werkomgeving — nog niet onafhankelijk geauditeerd.",
      },
      {
        scope: "Verantwoorde afvalverwerking",
        validity: "Doorlopend",
        details: "Textielresten waar mogelijk hergebruikt; verpakkingsmaterialen gerecycled. Formeel milieubeheer maakt deel uit van ons uitbreidingsplan.",
      },
      {
        scope: "Exportdocumentatie en douaneconformiteit",
        validity: "Elke zending",
        details: "Correcte HS-codeclassificatie, oorsprongscertificaat en verzenddocumentatie geleverd bij elke bestelling.",
      },
    ],
    activeBadge: "In praktijk",
    validityLabel: "Frequentie:",
    auditorLabel: "Verantwoordelijkheid:",
    cta: {
      title: "Vragen over onze praktijken?",
      description:
        "Vraag ons rechtstreeks naar stofinkoop, kwaliteitscontroles of arbeidsomstandigheden bij onze vestiging in Mumbai. Wij antwoorden eerlijk, ook over waar we nog naartoe werken op weg naar certificering.",
      buttonText: "Neem contact op",
    },
  },
};
