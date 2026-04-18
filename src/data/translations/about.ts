// ─────────────────────────────────────────────────────────────────────────────
// About page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// ─────────────────────────────────────────────────────────────────────────────

export interface AboutValueItem {
  title: string;
  desc: string;
}

export interface AboutMilestone {
  year: string;
  text: string;
}

export interface AboutStat {
  num: string;
  label: string;
}

export interface AboutLocale {
  hero: {
    subtitle: string;
    title: string;
    description: string;
  };
  mission: {
    subtitle: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    placeholderLabel: string;
  };
  values: {
    subtitle: string;
    title: string;
    items: AboutValueItem[];
  };
  milestones: {
    subtitle: string;
    title: string;
    items: AboutMilestone[];
  };
  stats: {
    subtitle: string;
    title: string;
    items: AboutStat[];
  };
}

export const aboutContent: Record<string, AboutLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Our Story",
      title: "Three Decades of Textile Excellence",
      description:
        "From a single woven unit in Mumbai to a specialist ladies woven wear manufacturer serving wholesale buyers across the Middle East, Russia, and global markets.",
    },
    mission: {
      subtitle: "Our Mission",
      title: "B2B Ladies Woven Wear Manufacturing from Mumbai",
      paragraph1:
        "Vedant Fashion is a B2B garment manufacturer based in Mumbai, India, specialising in ladies woven wear for wholesale buyers across the Middle East, Russia, and global markets. With 25,000+ pieces produced monthly, we supply blouses, dresses, tops, co-ords, and resort wear to buyers in UAE, Saudi Arabia, Qatar, Kuwait, and beyond.",
      paragraph2:
        "Our production facility in Asalpha Ghatkopar, Mumbai handles end-to-end manufacturing — from fabric sourcing and pattern making to cutting, stitching, quality inspection, and export packing. Every order ships FOB Mumbai with full compliance documentation.",
      paragraph3:
        "We work exclusively with B2B wholesale buyers — no retail, no domestic India sales. Our focus is on building long-term export partnerships with fashion brands, wholesalers, and importers who value quality, compliance, and reliable delivery.",
      placeholderLabel: "Manufacturing Excellence Since 2015",
    },
    values: {
      subtitle: "Our Values",
      title: "What Drives Us",
      items: [
        { title: "Quality First",          desc: "AQL 2.5 inspection at every stage. Zero-defect philosophy from fabric to finished garment." },
        { title: "Fair Labor",             desc: "SEDEX/SMETA audited. Living wages, safe conditions, no child labor. SA8000 aligned." },
        { title: "Global Reach",           desc: "Dedicated export teams for UAE, Saudi Arabia, Qatar, Kuwait, Russia, Egypt, and GCC markets." },
        { title: "Certified Excellence",   desc: "GOTS, OEKO-TEX 100, ISO 9001:2015, BSCI, and REACH compliant." },
        { title: "Vertical Integration",   desc: "In-house fabric sourcing, cutting, stitching, finishing, and packaging — complete garment manufacturing." },
        { title: "Reliable Logistics",     desc: "FOB, CIF, DDP terms. Sea freight from Mumbai reaches Jebel Ali in 18–22 days." },
      ],
    },
    milestones: {
      subtitle: "Milestones",
      title: "Our Journey",
      items: [
        { year: "2015", text: "Founded in Mumbai as a ladies woven wear B2B manufacturer" },
        { year: "2017", text: "First Middle East export shipment — woven blouses to UAE" },
        { year: "2018", text: "GOTS & OEKO-TEX Standard 100 certifications acquired" },
        { year: "2020", text: "ISO 9001:2015 and BSCI certification — expanded to Saudi Arabia and Qatar" },
        { year: "2022", text: "Reached 25,000 pieces/month capacity; Kuwait and Oman markets added" },
        { year: "2023", text: "Launched Russia/CIS export programme; Egypt and Bahrain markets added" },
        { year: "2025", text: "9 active export markets; India-UAE CEPA preferential duty benefit operational" },
      ],
    },
    stats: {
      subtitle: "By The Numbers",
      title: "Scale & Capability",
      items: [
        { num: "800+",  label: "Skilled Workers" },
        { num: "4",     label: "Manufacturing Units" },
        { num: "25,000+",  label: "Pieces / Month" },
        { num: "Mumbai",    label: "India" },
      ],
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "قصتنا",
      title: "ثلاثة عقود من التميز في صناعة النسيج",
      description:
        "من وحدة قطنية واحدة في أحمد آباد إلى مصنع ملابس متكامل يخدم أكثر من 200 علامة تجارية عالمية. تجمع فيدانت فاشيون بين الحرفية الهندية ومعايير الجودة الأوروبية.",
    },
    mission: {
      subtitle: "مهمتنا",
      title: "الجسر بين الحرفية الهندية والمعايير الأوروبية",
      paragraph1:
        "تأسست فيدانت فاشيون برؤية واحدة: إتاحة أرقى الحرف النسيجية الهندية لعلامات الأزياء الأوروبية على نطاق واسع، دون المساس بالاستدامة أو الأخلاقيات.",
      paragraph2:
        "اليوم، ندير أربعة مرافق تصنيع حديثة في ولاية غوجارات، يعمل فيها أكثر من 800 عامل ماهر. يمنحنا نموذجنا المتكامل رأسياً — من مصدر الألياف إلى الملبوس النهائي — تحكماً لا مثيل له في الجودة ومهل التسليم والكفاءة التكلفية.",
      paragraph3:
        "نتخصص في البلوزات المنسوجة والفساتين القطنية والقمصان الكتانية وملابس المنتجعات للعلامات الأوروبية المتوسطة والراقية. تُنتَج كل قطعة بموجب شهادات GOTS وOEKO-TEX وGRS، استيفاءً لمتطلبات الاستدامة الصارمة للمستهلك الواعي اليوم.",
      placeholderLabel: "التميز في التصنيع منذ 1998",
    },
    values: {
      subtitle: "قيمنا",
      title: "ما يحركنا",
      items: [
        { title: "الجودة أولاً",              desc: "فحص AQL 2.5 في كل مرحلة. فلسفة الصفر في العيوب من القماش إلى الملبوس النهائي." },
        { title: "العمل اللائق",              desc: "مدقق بمعيار SEDEX/SMETA. أجور معيشية وظروف آمنة وعدم توظيف الأطفال. متوافق مع SA8000." },
        { title: "الوصول العالمي",            desc: "فرق تصدير متخصصة لأسواق الشرق الأوسط وروسيا وأوروبا والخليج." },
        { title: "التميز المعتمد",             desc: "معتمد بشهادات GOTS وOEKO-TEX 100 وGRS وISO 9001:2015 وBSCI وREACH." },
        { title: "التكامل الرأسي",            desc: "توريد الأقمشة والقطع والخياطة والإنهاء والتعبئة داخلياً — تصنيع ملابس متكامل تحت سقف واحد." },
        { title: "لوجستيات موثوقة",           desc: "شروط FOB وCIF وDDP. مستودع أوروبي في هامبورغ للتسليم خلال 5 أيام عبر أوروبا." },
      ],
    },
    milestones: {
      subtitle: "المحطات الرئيسية",
      title: "مسيرتنا",
      items: [
        { year: "1998", text: "التأسيس في أحمد آباد كوحدة نسيج قطني" },
        { year: "2004", text: "أول طلبية تصدير أوروبية — 20,000 قطعة إلى ألمانيا" },
        { year: "2010", text: "الحصول على شهادتي GOTS وOEKO-TEX" },
        { year: "2015", text: "التوسع إلى 4 وحدات تصنيع وأكثر من 800 عامل" },
        { year: "2019", text: "افتتاح مكتب اتصال في هامبورغ لخدمة المشترين الأوروبيين" },
        { year: "2023", text: "بلوغ أكثر من 15 مليون ملبوس سنوياً وخدمة 27 دولة" },
        { year: "2025", text: "إطلاق تشكيلة ملابس المنتجعات المستدامة للأسواق المتوسطية" },
      ],
    },
    stats: {
      subtitle: "بالأرقام",
      title: "الحجم والقدرات",
      items: [
        { num: "800+",  label: "عامل ماهر" },
        { num: "4",     label: "وحدات تصنيع" },
        { num: "15M+",  label: "ملبوس سنوياً" },
        { num: "27",    label: "دولة مخدومة" },
      ],
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Наша история",
      title: "Три десятилетия текстильного совершенства",
      description:
        "От единственного хлопкового производства в Ахмедабаде до вертикально интегрированного предприятия, обслуживающего 200+ европейских брендов. Vedant Fashion сочетает индийское мастерство с европейскими стандартами качества.",
    },
    mission: {
      subtitle: "Наша миссия",
      title: "Связующее звено между индийским мастерством и европейскими стандартами",
      paragraph1:
        "Vedant Fashion была основана с единственной целью: открыть европейским модным брендам доступ к лучшим образцам индийского текстильного мастерства в промышленных масштабах, не жертвуя устойчивостью и этикой.",
      paragraph2:
        "Сегодня мы управляем четырьмя современными производственными комплексами в штате Гуджарат с численностью более 800 квалифицированных сотрудников. Вертикально интегрированная модель — от закупки волокна до готового изделия — обеспечивает непревзойдённый контроль качества, сроков производства и экономической эффективности.",
      paragraph3:
        "Мы специализируемся на тканых блузах, хлопковых платьях, льняных рубашках и курортной одежде для европейских марок среднего и премиального сегментов. Каждое изделие производится в соответствии с сертификатами GOTS, OEKO-TEX и GRS, удовлетворяя строгим требованиям современного ответственного потребителя.",
      placeholderLabel: "Производственное совершенство с 1998 года",
    },
    values: {
      subtitle: "Наши ценности",
      title: "Что нами движет",
      items: [
        { title: "Качество — прежде всего",    desc: "Контроль AQL 2.5 на каждом этапе. Философия нулевого брака — от ткани до готового изделия." },
        { title: "Справедливый труд",          desc: "Аудит SEDEX/SMETA. Достойная оплата, безопасные условия труда, отсутствие детского труда. Соответствие SA8000." },
        { title: "Глобальный охват",           desc: "Специализированные отделы экспорта для рынков DACH, Франции, Бенилюкса, Скандинавии, Италии, России и Восточной Европы." },
        { title: "Сертифицированное качество", desc: "Соответствие GOTS, OEKO-TEX 100, GRS, ISO 9001:2015, BSCI и REACH." },
        { title: "Вертикальная интеграция",    desc: "Закупка ткани, раскрой, пошив, финишная обработка и упаковка — полный производственный цикл." },
        { title: "Надёжная логистика",         desc: "Условия FOB, CIF, DDP. Склад в Гамбурге — доставка по всей Европе за 5 дней." },
      ],
    },
    milestones: {
      subtitle: "Ключевые даты",
      title: "Наш путь",
      items: [
        { year: "1998", text: "Основание в Ахмедабаде как хлопкового текстильного производства" },
        { year: "2004", text: "Первый европейский экспортный заказ — 20 000 изделий для Германии" },
        { year: "2010", text: "Получение сертификатов GOTS и OEKO-TEX" },
        { year: "2015", text: "Расширение до 4 производственных подразделений, более 800 сотрудников" },
        { year: "2019", text: "Открытие офиса связи в Гамбурге для европейских покупателей" },
        { year: "2023", text: "Достигнут объём 15 млн+ изделий в год, 27 стран-потребителей" },
        { year: "2025", text: "Запуск линии экологичной курортной одежды для средиземноморских рынков" },
      ],
    },
    stats: {
      subtitle: "В цифрах",
      title: "Масштаб и возможности",
      items: [
        { num: "800+",  label: "Квалифицированных сотрудников" },
        { num: "4",     label: "Производственных подразделения" },
        { num: "15M+",  label: "Изделий в год" },
        { num: "27",    label: "Стран-клиентов" },
      ],
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Nasza historia",
      title: "Trzy dekady doskonałości tekstylnej",
      description:
        "Od jednej jednostki bawełnianej w Ahmedabadzie do zintegrowanego pionowo producenta odzieży obsługującego 200+ europejskich marek. Vedant Fashion łączy indyjskie rzemiosło z europejskimi standardami jakości.",
    },
    mission: {
      subtitle: "Nasza misja",
      title: "Most między indyjskim rzemiosłem a europejskimi standardami",
      paragraph1:
        "Vedant Fashion powstała z jedną wizją: udostępnienie najlepszego indyjskiego rzemiosła tekstylnego europejskim markom modowym na dużą skalę, bez kompromisów w zakresie zrównoważonego rozwoju i etyki.",
      paragraph2:
        "Dziś zarządzamy czterema nowoczesnymi zakładami produkcyjnymi w stanie Gudźarat, zatrudniającymi ponad 800 wykwalifikowanych pracowników. Nasz zintegrowany pionowo model — od pozyskania włókien po gotowy wyrób — zapewnia nam niezrównany nadzór nad jakością, terminami realizacji i efektywnością kosztową.",
      paragraph3:
        "Specjalizujemy się w tkaninowych bluzkach, sukienkach bawełnianych, koszulach lnianych i odzieży plażowej dla europejskich marek średniego i premium segmentu. Każda sztuka produkowana jest zgodnie z certyfikatami GOTS, OEKO-TEX i GRS.",
      placeholderLabel: "Doskonałość produkcyjna od 1998 roku",
    },
    values: {
      subtitle: "Nasze wartości",
      title: "Co nami kieruje",
      items: [
        { title: "Jakość przede wszystkim", desc: "Inspekcja AQL 2.5 na każdym etapie. Filozofia zera defektów od tkaniny do gotowego wyrobu." },
        { title: "Uczciwa praca",           desc: "Audyt SEDEX/SMETA. Godziwe wynagrodzenia, bezpieczne warunki, brak pracy dzieci. Zgodność z SA8000." },
        { title: "Globalny zasięg",         desc: "Dedykowane zespoły eksportowe dla DACH, Francji, Beneluxu, Skandynawii, Włoch i Europy Wschodniej." },
        { title: "Certyfikowana jakość",    desc: "Certyfikaty GOTS, OEKO-TEX 100, GRS, ISO 9001:2015, BSCI i REACH." },
        { title: "Integracja pionowa",      desc: "Pozyskiwanie tkanin, krojenie, szycie, wykańczanie i pakowanie — kompletna produkcja odzieży." },
        { title: "Niezawodna logistyka",    desc: "Warunki FOB, CIF, DDP. Magazyn w Hamburgu — dostawa w 5 dni do całej Europy." },
      ],
    },
    milestones: {
      subtitle: "Kamienie milowe",
      title: "Nasza droga",
      items: [
        { year: "1998", text: "Założenie w Ahmedabadzie jako jednostki tekstylnej z bawełny" },
        { year: "2004", text: "Pierwsze europejskie zamówienie eksportowe — 20 000 sztuk do Niemiec" },
        { year: "2010", text: "Uzyskanie certyfikatów GOTS i OEKO-TEX" },
        { year: "2015", text: "Rozbudowa do 4 zakładów produkcyjnych, 800+ pracowników" },
        { year: "2019", text: "Otwarcie biura łącznikowego w Hamburgu dla kupujących z UE" },
        { year: "2023", text: "Osiągnięcie 15M+ szt. rocznie, obsługa 27 krajów" },
        { year: "2025", text: "Uruchomienie linii ekologicznej odzieży plażowej na rynki śródziemnomorskie" },
      ],
    },
    stats: {
      subtitle: "W liczbach",
      title: "Skala i możliwości",
      items: [
        { num: "800+",  label: "Wykwalifikowanych pracowników" },
        { num: "4",     label: "Zakładów produkcyjnych" },
        { num: "15M+",  label: "Wyrobów rocznie" },
        { num: "27",    label: "Obsługiwanych krajów" },
      ],
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Notre histoire",
      title: "Trois décennies d'excellence textile",
      description:
        "D'une seule unité cotonnière à Ahmedabad à un fabricant de vêtements verticalement intégré au service de 200+ marques européennes. Vedant Fashion allie savoir-faire indien et standards de qualité européens.",
    },
    mission: {
      subtitle: "Notre mission",
      title: "Le lien entre le savoir-faire indien et les standards européens",
      paragraph1:
        "Vedant Fashion a été fondée avec une vision unique : rendre le meilleur savoir-faire textile indien accessible aux marques de mode européennes à grande échelle, sans compromis sur la durabilité ni l'éthique.",
      paragraph2:
        "Aujourd'hui, nous gérons quatre sites de fabrication de pointe au Gujarat, employant plus de 800 travailleurs qualifiés. Notre modèle verticalement intégré — de l'approvisionnement en fibres au vêtement fini — nous confère un contrôle inégalé sur la qualité, les délais et l'efficacité des coûts.",
      paragraph3:
        "Nous sommes spécialisés dans les chemisiers tissés, les robes en coton, les chemises en lin et la collection resort pour les marques européennes moyen et haut de gamme. Chaque pièce est produite sous certifications GOTS, OEKO-TEX et GRS.",
      placeholderLabel: "Excellence manufacturière depuis 1998",
    },
    values: {
      subtitle: "Nos valeurs",
      title: "Ce qui nous anime",
      items: [
        { title: "La qualité avant tout",       desc: "Inspection AQL 2.5 à chaque étape. Philosophie zéro défaut du tissu au vêtement fini." },
        { title: "Travail équitable",            desc: "Audité SEDEX/SMETA. Salaires décents, conditions sûres, sans travail des enfants. Conforme SA8000." },
        { title: "Rayonnement mondial",          desc: "Équipes export dédiées pour DACH, France, Benelux, Scandinavie, Italie, Ibérie et Europe de l'Est." },
        { title: "Excellence certifiée",         desc: "Certifié GOTS, OEKO-TEX 100, GRS, ISO 9001:2015, BSCI et REACH." },
        { title: "Intégration verticale",        desc: "Approvisionnement, coupe, couture, finition et emballage en interne — fabrication complète." },
        { title: "Logistique fiable",            desc: "Incoterms FOB, CIF, DDP. Entrepôt à Hambourg — livraison en 5 jours dans toute l'Europe." },
      ],
    },
    milestones: {
      subtitle: "Étapes clés",
      title: "Notre parcours",
      items: [
        { year: "1998", text: "Fondée à Ahmedabad comme unité textile cotonnière" },
        { year: "2004", text: "Première commande d'export européenne — 20 000 pièces pour l'Allemagne" },
        { year: "2010", text: "Obtention des certifications GOTS et OEKO-TEX" },
        { year: "2015", text: "Extension à 4 unités de production, 800+ employés" },
        { year: "2019", text: "Ouverture du bureau de liaison à Hambourg pour les acheteurs européens" },
        { year: "2023", text: "15M+ vêtements par an, 27 pays clients" },
        { year: "2025", text: "Lancement d'une ligne de prêt-à-porter resort durable pour les marchés méditerranéens" },
      ],
    },
    stats: {
      subtitle: "En chiffres",
      title: "Échelle et capacités",
      items: [
        { num: "800+",  label: "Travailleurs qualifiés" },
        { num: "4",     label: "Unités de production" },
        { num: "15M+",  label: "Vêtements par an" },
        { num: "27",    label: "Pays desservis" },
      ],
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "La nostra storia",
      title: "Tre decenni di eccellenza tessile",
      description:
        "Da una singola unità cotoniera ad Ahmedabad a un produttore di abbigliamento verticalmente integrato al servizio di 200+ marchi europei. Vedant Fashion unisce la maestria indiana agli standard di qualità europei.",
    },
    mission: {
      subtitle: "La nostra missione",
      title: "Il ponte tra la maestria indiana e gli standard europei",
      paragraph1:
        "Vedant Fashion è nata con un'unica visione: rendere la migliore maestria tessile indiana accessibile ai marchi di moda europei su larga scala, senza compromessi su sostenibilità ed etica.",
      paragraph2:
        "Oggi gestiamo quattro stabilimenti all'avanguardia nel Gujarat, con oltre 800 lavoratori qualificati. Il nostro modello verticalmente integrato — dalla fibra al capo finito — ci garantisce un controllo ineguagliabile su qualità, tempi di consegna ed efficienza dei costi.",
      paragraph3:
        "Siamo specializzati in bluse tessute, abiti in cotone, camicie di lino e resort wear per i marchi europei di fascia media e premium. Ogni capo è prodotto secondo le certificazioni GOTS, OEKO-TEX e GRS.",
      placeholderLabel: "Eccellenza manifatturiera dal 1998",
    },
    values: {
      subtitle: "I nostri valori",
      title: "Cosa ci guida",
      items: [
        { title: "Qualità prima di tutto",    desc: "Ispezione AQL 2.5 ad ogni fase. Filosofia zero difetti dal tessuto al capo finito." },
        { title: "Lavoro equo",               desc: "Audit SEDEX/SMETA. Salari dignitosi, condizioni sicure, nessun lavoro minorile. Conforme SA8000." },
        { title: "Portata globale",           desc: "Team export dedicati per DACH, Francia, Benelux, Scandinavia, Italia, Iberia ed Europa orientale." },
        { title: "Eccellenza certificata",    desc: "Certificazioni GOTS, OEKO-TEX 100, GRS, ISO 9001:2015, BSCI e REACH." },
        { title: "Integrazione verticale",   desc: "Approvvigionamento tessuti, taglio, cucitura, finitura e confezionamento interni — produzione completa." },
        { title: "Logistica affidabile",     desc: "Incoterms FOB, CIF, DDP. Magazzino ad Amburgo — consegna in 5 giorni in tutta Europa." },
      ],
    },
    milestones: {
      subtitle: "Tappe fondamentali",
      title: "Il nostro percorso",
      items: [
        { year: "1998", text: "Fondata ad Ahmedabad come unità tessile cotoniera" },
        { year: "2004", text: "Primo ordine di export europeo — 20.000 pezzi per la Germania" },
        { year: "2010", text: "Acquisizione delle certificazioni GOTS e OEKO-TEX" },
        { year: "2015", text: "Espansione a 4 unità produttive, 800+ dipendenti" },
        { year: "2019", text: "Apertura dell'ufficio di collegamento ad Amburgo per gli acquirenti europei" },
        { year: "2023", text: "Raggiunto il traguardo di 15M+ capi all'anno, 27 paesi clienti" },
        { year: "2025", text: "Lancio della linea resort wear sostenibile per i mercati mediterranei" },
      ],
    },
    stats: {
      subtitle: "In numeri",
      title: "Dimensioni e capacità",
      items: [
        { num: "800+",  label: "Lavoratori qualificati" },
        { num: "4",     label: "Unità produttive" },
        { num: "15M+",  label: "Capi all'anno" },
        { num: "27",    label: "Paesi serviti" },
      ],
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Ons verhaal",
      title: "Drie decennia textielvakmanschap",
      description:
        "Van één katoenunit in Ahmedabad tot een verticaal geïntegreerde kledingproducent voor 200+ Europese merken. Vedant Fashion combineert Indiaas vakmanschap met Europese kwaliteitsnormen.",
    },
    mission: {
      subtitle: "Onze missie",
      title: "De brug tussen Indiaas vakmanschap en Europese normen",
      paragraph1:
        "Vedant Fashion is opgericht met één visie: het beste Indiase textielvakmanschap op grote schaal toegankelijk maken voor Europese modemerken, zonder concessies aan duurzaamheid of ethiek.",
      paragraph2:
        "Vandaag beheren wij vier ultramoderne productiefaciliteiten in Gujarat, met meer dan 800 gekwalificeerde medewerkers. Ons verticaal geïntegreerde model — van vezelinkoop tot afgewerkt kledingstuk — geeft ons ongeëvenaard grip op kwaliteit, levertijden en kostenefficiëntie.",
      paragraph3:
        "Wij zijn gespecialiseerd in geweven blouses, katoenen jurken, linnen shirts en strandkleding voor Europese merken in het midden- en premiumsegment. Elk stuk wordt geproduceerd onder GOTS-, OEKO-TEX- en GRS-certificering.",
      placeholderLabel: "Productie-uitmuntendheid sinds 1998",
    },
    values: {
      subtitle: "Onze waarden",
      title: "Wat ons drijft",
      items: [
        { title: "Kwaliteit voorop",       desc: "AQL 2.5-inspectie in elke fase. Nuldefectfilosofie van stof tot afgewerkt kledingstuk." },
        { title: "Eerlijk werk",           desc: "SEDEX/SMETA geauditeerd. Leefbaar loon, veilige omstandigheden, geen kinderarbeid. SA8000-conform." },
        { title: "Wereldwijde aanwezigheid", desc: "Dedicated exportteams voor DACH, Frankrijk, Benelux, Scandinavië, Italië en Oost-Europa." },
        { title: "Gecertificeerde kwaliteit", desc: "GOTS, OEKO-TEX 100, GRS, ISO 9001:2015, BSCI en REACH gecertificeerd." },
        { title: "Verticale integratie",   desc: "Stofinkoop, snijden, naaien, afwerking en verpakking in eigen beheer — volledige kledingproductie." },
        { title: "Betrouwbare logistiek",  desc: "FOB, CIF, DDP Incoterms. Magazijn in Hamburg — levering binnen 5 dagen door heel Europa." },
      ],
    },
    milestones: {
      subtitle: "Mijlpalen",
      title: "Onze reis",
      items: [
        { year: "1998", text: "Opgericht in Ahmedabad als katoenentextieleenheid" },
        { year: "2004", text: "Eerste Europese exportorder — 20.000 stuks naar Duitsland" },
        { year: "2010", text: "GOTS- en OEKO-TEX-certificeringen behaald" },
        { year: "2015", text: "Uitgebreid naar 4 productiefaciliteiten, 800+ medewerkers" },
        { year: "2019", text: "Liaisonkantoor in Hamburg geopend voor Europese inkopers" },
        { year: "2023", text: "15M+ stuks per jaar bereikt, 27 landen bediend" },
        { year: "2025", text: "Duurzame strandkledingslijn gelanceerd voor mediterrane markten" },
      ],
    },
    stats: {
      subtitle: "In cijfers",
      title: "Schaal en capaciteit",
      items: [
        { num: "800+",  label: "Gekwalificeerde medewerkers" },
        { num: "4",     label: "Productiefaciliteiten" },
        { num: "15M+",  label: "Stuks per jaar" },
        { num: "27",    label: "Bediende landen" },
      ],
    },
  },
};
