// ─────────────────────────────────────────────────────────────────────────────
// Certifications page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// NOTE: cert names (GOTS, OEKO-TEX, etc.) and auditor company names are kept
//       in English in the component — only scope, validity, details translate.
// ─────────────────────────────────────────────────────────────────────────────

export interface CertificationItem {
  scope: string;
  validity: string;
  details: string;
}

export interface CertificationsLocale {
  hero: { subtitle: string; title: string; description: string };
  section: { subtitle: string; title: string };
  certs: CertificationItem[]; // 8 items — order matches certs array in page
  activeBadge: string;
  validityLabel: string;
  auditorLabel: string;
  cta: { title: string; description: string; buttonText: string };
}

export const certificationsContent: Record<string, CertificationsLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Certifications",
      title: "Verified, Audited, Transparent",
      description:
        "Every certification we hold is independently audited and publicly verifiable. We provide full documentation with every shipment for EU customs and buyer compliance teams.",
    },
    section: { subtitle: "Our Certifications", title: "Standards We Meet" },
    certs: [
      {
        scope: "Organic fiber processing — from raw material to finished product",
        validity: "Renewed annually",
        details:
          "Covers our entire organic cotton and linen supply chain. License No: CU-12345. Scope: processing, manufacturing, trading.",
      },
      {
        scope: "Product safety — tested for harmful substances",
        validity: "Renewed annually",
        details:
          "All product classes tested. Class I (baby) and Class II (skin contact) certified. Certificate No: OE-54321.",
      },
      {
        scope: "Recycled content verification and responsible production",
        validity: "Renewed annually",
        details:
          "Certified for recycled polyester and recycled cotton blends. Minimum 50% recycled input verified.",
      },
      {
        scope: "Quality management systems",
        validity: "3-year cycle",
        details:
          "Covers design, manufacturing, quality control, and export processes across all four facilities.",
      },
      {
        scope: "EU chemical safety regulation (EC 1907/2006)",
        validity: "Continuous",
        details:
          "All chemicals, dyes, and finishes are REACH-registered. Restricted Substance List (RSL) maintained per AAFA standards.",
      },
      {
        scope: "Ethical trade — labor, health & safety, environment, business ethics",
        validity: "Biennial audit",
        details:
          "All four facilities audited. Zero critical non-conformances in last 3 audits. Worker welfare committee operational.",
      },
      {
        scope: "Social compliance in global supply chains",
        validity: "Renewed biennially",
        details:
          "Rating: Good. Covers working conditions, environmental protection, and ethical business behavior.",
      },
      {
        scope: "Responsible cotton sourcing",
        validity: "Annual membership",
        details:
          "Licensed to source and use Better Cotton. Mass balance tracking through full supply chain.",
      },
    ],
    activeBadge: "Active",
    validityLabel: "Validity:",
    auditorLabel: "Auditor:",
    cta: {
      title: "Need Certificate Copies?",
      description:
        "We provide digital copies of all certifications, audit reports, and test results upon request.",
      buttonText: "Request Certificates",
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "الشهادات",
      title: "موثّق، مدقَّق، شفّاف",
      description:
        "كل شهادة نحملها تخضع لتدقيق مستقل ويمكن التحقق منها علناً. نقدم وثائق كاملة مع كل شحنة لفرق الامتثال لدى المشترين وجمارك الاتحاد الأوروبي.",
    },
    section: { subtitle: "شهاداتنا", title: "المعايير التي نستوفيها" },
    certs: [
      {
        scope: "معالجة الألياف العضوية — من المواد الخام إلى المنتج النهائي",
        validity: "تجديد سنوي",
        details:
          "يغطي سلسلة توريد القطن العضوي والكتان بالكامل. رقم الترخيص: CU-12345. النطاق: المعالجة والتصنيع والتداول.",
      },
      {
        scope: "سلامة المنتج — اختبار للمواد الضارة",
        validity: "تجديد سنوي",
        details:
          "اختبار جميع فئات المنتجات. معتمد للفئة الأولى (الرضع) والفئة الثانية (ملامسة الجلد). رقم الشهادة: OE-54321.",
      },
      {
        scope: "التحقق من المحتوى المُعاد تدويره والإنتاج المسؤول",
        validity: "تجديد سنوي",
        details:
          "معتمد للبوليستر المُعاد تدويره وخلطات القطن المُعاد تدويره. التحقق من نسبة مدخلات إعادة التدوير بحد أدنى 50%.",
      },
      {
        scope: "أنظمة إدارة الجودة",
        validity: "دورة 3 سنوات",
        details:
          "يغطي عمليات التصميم والتصنيع ومراقبة الجودة والتصدير في جميع المرافق الأربعة.",
      },
      {
        scope: "لائحة سلامة المواد الكيميائية الأوروبية (EC 1907/2006)",
        validity: "مستمر",
        details:
          "جميع المواد الكيميائية والأصباغ والإنهاءات مسجلة بموجب REACH. قائمة المواد المقيّدة (RSL) محفوظة وفق معايير AAFA.",
      },
      {
        scope: "التجارة الأخلاقية — العمل والصحة والسلامة والبيئة وأخلاقيات الأعمال",
        validity: "تدقيق مرة كل سنتين",
        details:
          "تم تدقيق جميع المرافق الأربعة. صفر حالات عدم مطابقة حرجة في آخر 3 عمليات تدقيق. لجنة رعاية العمال تعمل بكامل طاقتها.",
      },
      {
        scope: "الامتثال الاجتماعي في سلاسل التوريد العالمية",
        validity: "تجديد مرة كل سنتين",
        details:
          "التقييم: جيد. يغطي ظروف العمل وحماية البيئة والسلوك التجاري الأخلاقي.",
      },
      {
        scope: "المصادر المسؤولة للقطن",
        validity: "عضوية سنوية",
        details:
          "مرخص لمصادر القطن الأفضل واستخدامه. تتبع ميزان الكتلة عبر سلسلة التوريد الكاملة.",
      },
    ],
    activeBadge: "نشط",
    validityLabel: "الصلاحية:",
    auditorLabel: "المدقق:",
    cta: {
      title: "هل تحتاج إلى نسخ الشهادات؟",
      description:
        "نوفر نسخاً رقمية من جميع الشهادات وتقارير التدقيق ونتائج الاختبارات عند الطلب.",
      buttonText: "طلب الشهادات",
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Сертификаты",
      title: "Подтверждено, проверено, прозрачно",
      description:
        "Каждый наш сертификат проходит независимый аудит и доступен для публичной проверки. Полный пакет документов прилагается к каждой отгрузке для таможни ЕС и compliance-служб покупателей.",
    },
    section: { subtitle: "Наши сертификаты", title: "Стандарты, которым мы соответствуем" },
    certs: [
      {
        scope: "Переработка органического волокна — от сырья до готового изделия",
        validity: "Ежегодное обновление",
        details:
          "Охватывает всю цепочку поставок органического хлопка и льна. Лицензия №: CU-12345. Область применения: переработка, производство, торговля.",
      },
      {
        scope: "Безопасность продукции — тестирование на вредные вещества",
        validity: "Ежегодное обновление",
        details:
          "Протестированы все классы продукции. Сертификаты класса I (для детей) и класса II (контакт с кожей). Сертификат №: OE-54321.",
      },
      {
        scope: "Верификация переработанного содержимого и ответственного производства",
        validity: "Ежегодное обновление",
        details:
          "Сертификация для смесей вторичного полиэстера и вторичного хлопка. Подтверждено минимум 50% вторичного сырья.",
      },
      {
        scope: "Системы менеджмента качества",
        validity: "3-летний цикл",
        details:
          "Охватывает проектирование, производство, контроль качества и экспортные процессы на всех четырёх предприятиях.",
      },
      {
        scope: "Регламент ЕС по химической безопасности (EC 1907/2006)",
        validity: "Непрерывно",
        details:
          "Все химикаты, красители и отделочные вещества зарегистрированы в REACH. Список ограниченных веществ (RSL) ведётся по стандартам AAFA.",
      },
      {
        scope: "Этическая торговля — труд, охрана здоровья и безопасность, экология, деловая этика",
        validity: "Раз в два года",
        details:
          "Все четыре предприятия прошли аудит. Ноль критических несоответствий по итогам последних 3 аудитов. Комитет по социальному обеспечению работников действует.",
      },
      {
        scope: "Социальное соответствие в глобальных цепочках поставок",
        validity: "Обновление раз в два года",
        details:
          "Оценка: Хорошо. Охватывает условия труда, защиту окружающей среды и этику делового поведения.",
      },
      {
        scope: "Ответственные закупки хлопка",
        validity: "Ежегодное членство",
        details:
          "Лицензия на закупку и использование Better Cotton. Прослеживаемость через всю цепочку поставок.",
      },
    ],
    activeBadge: "Действует",
    validityLabel: "Срок действия:",
    auditorLabel: "Аудитор:",
    cta: {
      title: "Нужны копии сертификатов?",
      description:
        "По запросу предоставляем электронные копии всех сертификатов, аудиторских заключений и результатов тестирования.",
      buttonText: "Запросить сертификаты",
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Certyfikaty",
      title: "Zweryfikowane, audytowane, przejrzyste",
      description:
        "Każdy posiadany przez nas certyfikat jest niezależnie audytowany i publicznie weryfikowalny. Dostarczamy kompletną dokumentację z każdą wysyłką dla służb celnych UE i zespołów compliance kupujących.",
    },
    section: { subtitle: "Nasze certyfikaty", title: "Standardy, które spełniamy" },
    certs: [
      {
        scope: "Przetwarzanie włókien organicznych — od surowca do gotowego wyrobu",
        validity: "Odnawiane rocznie",
        details:
          "Obejmuje cały łańcuch dostaw organicznej bawełny i lnu. Nr licencji: CU-12345. Zakres: przetwarzanie, produkcja, handel.",
      },
      {
        scope: "Bezpieczeństwo produktu — badanie pod kątem substancji szkodliwych",
        validity: "Odnawiane rocznie",
        details:
          "Badane wszystkie klasy produktów. Certyfikat klasy I (niemowlęta) i klasy II (kontakt ze skórą). Nr certyfikatu: OE-54321.",
      },
      {
        scope: "Weryfikacja zawartości materiałów z recyklingu i odpowiedzialnej produkcji",
        validity: "Odnawiane rocznie",
        details:
          "Certyfikat dla mieszanek poliestrowych z recyklingu i bawełny z recyklingu. Potwierdzono min. 50% surowców z recyklingu.",
      },
      {
        scope: "Systemy zarządzania jakością",
        validity: "Cykl 3-letni",
        details:
          "Obejmuje procesy projektowania, produkcji, kontroli jakości i eksportu we wszystkich czterech zakładach.",
      },
      {
        scope: "Europejskie rozporządzenie o bezpieczeństwie chemicznym (EC 1907/2006)",
        validity: "Ciągłe",
        details:
          "Wszystkie chemikalia, barwniki i środki wykończeniowe zarejestrowane w REACH. Lista substancji ograniczonych (RSL) prowadzona zgodnie ze standardami AAFA.",
      },
      {
        scope: "Handel etyczny — praca, BHP, środowisko, etyka biznesowa",
        validity: "Audyt co dwa lata",
        details:
          "Audytowane wszystkie cztery zakłady. Zero krytycznych niezgodności w ostatnich 3 audytach. Komisja ds. dobrostanu pracowników jest aktywna.",
      },
      {
        scope: "Społeczna odpowiedzialność w globalnych łańcuchach dostaw",
        validity: "Odnawiane co dwa lata",
        details:
          "Ocena: Dobra. Obejmuje warunki pracy, ochronę środowiska i etyczne zachowanie w biznesie.",
      },
      {
        scope: "Odpowiedzialne pozyskiwanie bawełny",
        validity: "Roczne członkostwo",
        details:
          "Licencja na pozyskiwanie i stosowanie Better Cotton. Śledzenie bilansu masy przez cały łańcuch dostaw.",
      },
    ],
    activeBadge: "Aktywny",
    validityLabel: "Ważność:",
    auditorLabel: "Audytor:",
    cta: {
      title: "Potrzebujesz kopii certyfikatów?",
      description:
        "Na życzenie dostarczamy cyfrowe kopie wszystkich certyfikatów, raportów z audytów i wyników testów.",
      buttonText: "Zamów certyfikaty",
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Certifications",
      title: "Vérifiées, auditées, transparentes",
      description:
        "Chaque certification que nous détenons est auditée de façon indépendante et publiquement vérifiable. Nous fournissons une documentation complète avec chaque expédition pour les douanes européennes et les équipes conformité des acheteurs.",
    },
    section: { subtitle: "Nos certifications", title: "Les standards que nous respectons" },
    certs: [
      {
        scope: "Traitement des fibres biologiques — de la matière première au produit fini",
        validity: "Renouvelée annuellement",
        details:
          "Couvre l'ensemble de notre chaîne d'approvisionnement en coton biologique et en lin. N° de licence : CU-12345. Périmètre : transformation, fabrication, commerce.",
      },
      {
        scope: "Sécurité produit — testé pour les substances nocives",
        validity: "Renouvelée annuellement",
        details:
          "Toutes les classes de produits testées. Classe I (bébé) et classe II (contact cutané) certifiées. N° de certificat : OE-54321.",
      },
      {
        scope: "Vérification du contenu recyclé et production responsable",
        validity: "Renouvelée annuellement",
        details:
          "Certifié pour les mélanges de polyester recyclé et de coton recyclé. Minimum 50% de matières recyclées vérifiées.",
      },
      {
        scope: "Systèmes de management de la qualité",
        validity: "Cycle 3 ans",
        details:
          "Couvre les processus de conception, de fabrication, de contrôle qualité et d'exportation dans les quatre sites.",
      },
      {
        scope: "Réglementation européenne sur la sécurité chimique (CE 1907/2006)",
        validity: "Continue",
        details:
          "Tous les produits chimiques, colorants et finitions sont enregistrés REACH. Liste de substances restreintes (RSL) maintenue selon les standards AAFA.",
      },
      {
        scope: "Commerce éthique — travail, santé & sécurité, environnement, éthique des affaires",
        validity: "Audit biennal",
        details:
          "Les quatre sites ont été audités. Zéro non-conformité critique lors des 3 derniers audits. Comité de bien-être des travailleurs opérationnel.",
      },
      {
        scope: "Conformité sociale dans les chaînes d'approvisionnement mondiales",
        validity: "Renouvelée tous les deux ans",
        details:
          "Note : Bonne. Couvre les conditions de travail, la protection de l'environnement et l'éthique commerciale.",
      },
      {
        scope: "Approvisionnement responsable en coton",
        validity: "Adhésion annuelle",
        details:
          "Licence pour s'approvisionner et utiliser le Better Cotton. Traçabilité de la balance massique sur toute la chaîne.",
      },
    ],
    activeBadge: "Actif",
    validityLabel: "Validité :",
    auditorLabel: "Auditeur :",
    cta: {
      title: "Vous avez besoin de copies de certificats ?",
      description:
        "Nous fournissons des copies numériques de toutes les certifications, rapports d'audit et résultats de tests sur demande.",
      buttonText: "Demander les certificats",
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Certificazioni",
      title: "Verificate, controllate, trasparenti",
      description:
        "Ogni certificazione che deteniamo è sottoposta ad audit indipendente e pubblicamente verificabile. Forniamo documentazione completa con ogni spedizione per i team di conformità degli acquirenti e per la dogana UE.",
    },
    section: { subtitle: "Le nostre certificazioni", title: "Gli standard che rispettiamo" },
    certs: [
      {
        scope: "Lavorazione di fibre biologiche — dalla materia prima al prodotto finito",
        validity: "Rinnovata annualmente",
        details:
          "Copre l'intera catena di fornitura di cotone biologico e lino. N. licenza: CU-12345. Ambito: lavorazione, produzione, commercio.",
      },
      {
        scope: "Sicurezza del prodotto — testato per sostanze nocive",
        validity: "Rinnovata annualmente",
        details:
          "Tutte le classi di prodotti testate. Classe I (neonati) e Classe II (contatto con la pelle) certificate. N. certificato: OE-54321.",
      },
      {
        scope: "Verifica del contenuto riciclato e produzione responsabile",
        validity: "Rinnovata annualmente",
        details:
          "Certificazione per miscele di poliestere riciclato e cotone riciclato. Verificato almeno il 50% di materia prima riciclata.",
      },
      {
        scope: "Sistemi di gestione della qualità",
        validity: "Ciclo triennale",
        details:
          "Copre progettazione, produzione, controllo qualità e processi di esportazione in tutti e quattro gli stabilimenti.",
      },
      {
        scope: "Regolamento europeo sulla sicurezza chimica (CE 1907/2006)",
        validity: "Continua",
        details:
          "Tutti i prodotti chimici, coloranti e fissativi sono registrati REACH. Lista delle sostanze limitate (RSL) mantenuta secondo gli standard AAFA.",
      },
      {
        scope: "Commercio etico — lavoro, salute e sicurezza, ambiente, etica aziendale",
        validity: "Audit biennale",
        details:
          "Tutti e quattro gli stabilimenti sono stati auditati. Zero non conformità critiche negli ultimi 3 audit. Comitato benessere lavoratori operativo.",
      },
      {
        scope: "Conformità sociale nelle catene di fornitura globali",
        validity: "Rinnovata ogni due anni",
        details:
          "Valutazione: Buona. Comprende condizioni di lavoro, tutela ambientale e comportamento aziendale etico.",
      },
      {
        scope: "Approvvigionamento responsabile di cotone",
        validity: "Adesione annuale",
        details:
          "Licenza per l'approvvigionamento e l'utilizzo di Better Cotton. Tracciabilità del bilancio di massa sull'intera catena.",
      },
    ],
    activeBadge: "Attivo",
    validityLabel: "Validità:",
    auditorLabel: "Ente di controllo:",
    cta: {
      title: "Hai bisogno di copie dei certificati?",
      description:
        "Forniamo copie digitali di tutte le certificazioni, rapporti di audit e risultati dei test su richiesta.",
      buttonText: "Richiedi i certificati",
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Certificeringen",
      title: "Geverifieerd, geauditeerd, transparant",
      description:
        "Elk certificaat dat wij bezitten is onafhankelijk geauditeerd en publiek verifieerbaar. Wij leveren volledige documentatie bij elke zending voor EU-douane en compliance­teams van inkopers.",
    },
    section: { subtitle: "Onze certificeringen", title: "Normen waaraan wij voldoen" },
    certs: [
      {
        scope: "Verwerking van biologische vezels — van grondstof tot eindproduct",
        validity: "Jaarlijks vernieuwd",
        details:
          "Dekt onze volledige toeleveringsketen voor biologisch katoen en linnen. Licentie nr.: CU-12345. Scope: verwerking, productie, handel.",
      },
      {
        scope: "Productveiligheid — getest op schadelijke stoffen",
        validity: "Jaarlijks vernieuwd",
        details:
          "Alle productklassen getest. Klasse I (baby) en Klasse II (huidcontact) gecertificeerd. Certificaatnr.: OE-54321.",
      },
      {
        scope: "Verificatie gerecycled materiaal en verantwoorde productie",
        validity: "Jaarlijks vernieuwd",
        details:
          "Gecertificeerd voor gerecycled polyester en gerecycled katoenmengsel. Minimaal 50% gerecyclede input geverifieerd.",
      },
      {
        scope: "Kwaliteitsmanagementsystemen",
        validity: "3-jarige cyclus",
        details:
          "Dekt ontwerp, productie, kwaliteitscontrole en exportprocessen in alle vier vestigingen.",
      },
      {
        scope: "EU-verordening chemische veiligheid (EG 1907/2006)",
        validity: "Doorlopend",
        details:
          "Alle chemicaliën, kleurstoffen en afwerkingen zijn REACH-geregistreerd. Lijst van Beperkte Stoffen (RSL) bijgehouden per AAFA-normen.",
      },
      {
        scope: "Eerlijke handel — arbeid, gezondheid & veiligheid, milieu, bedrijfsethiek",
        validity: "Tweejaarlijkse audit",
        details:
          "Alle vier vestigingen geauditeerd. Nul kritieke non-conformiteiten in de laatste 3 audits. Commissie werknemerswelzijn operationeel.",
      },
      {
        scope: "Sociale naleving in wereldwijde toeleveringsketens",
        validity: "Tweejaarlijks vernieuwd",
        details:
          "Beoordeling: Goed. Omvat arbeidsomstandigheden, milieubescherming en ethisch zakelijk gedrag.",
      },
      {
        scope: "Verantwoorde katoeninkoop",
        validity: "Jaarlijks lidmaatschap",
        details:
          "Licentie voor inkoop en gebruik van Better Cotton. Massabalans-tracking door de volledige keten.",
      },
    ],
    activeBadge: "Actief",
    validityLabel: "Geldigheid:",
    auditorLabel: "Auditor:",
    cta: {
      title: "Certificaatkopieën nodig?",
      description:
        "Op verzoek leveren wij digitale kopieën van alle certificeringen, auditrapporten en testresultaten.",
      buttonText: "Certificaten opvragen",
    },
  },
};
