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
      title: "Vedant Fashion — Made With Care",
      description:
        "Ladies woven wear manufacturer based in Mumbai, India. Founded by Shravan Diwan in 2024 with a focus on quality, timely delivery, and export excellence.",
    },
    mission: {
      subtitle: "Our Mission",
      title: "Why We Started",
      paragraph1:
        "Starting this ladies' garments manufacturing unit was not something that happened overnight. It began with a simple interest in clothing, fabrics, designs, and the way a well-made outfit can change how a woman feels about herself.",
      paragraph2:
        "I have always believed that garments are not just products. Behind every kurti, dress, co-ord set, blouse, or ethnic outfit, there is someone who will wear it for work, for a celebration, for daily comfort, or for a special moment. That thought has stayed with me from the beginning. When I started this unit, my aim was clear: to create women's garments with proper finishing, comfortable fits, good fabrics, and dependable quality. In this industry, people often notice the design first, but what truly makes a garment valuable is the work that goes into the details — the cutting, stitching, checking, ironing, packing, and consistency in every piece.",
      paragraph3:
        "Today, Vedant Fashion is built on that foundation: honest work, careful craftsmanship, and a strong commitment to quality. We do not see ourselves as just another garment manufacturer. We see ourselves as a team that helps bring women's fashion ideas to life. Every garment we make carries the effort of many hands. Our team works with patience and attention, because we know that even a small detail can make a big difference in the final product.",
      placeholderLabel: "Vedant Fashion — Made With Care, Finished With Pride",
    },
    values: {
      subtitle: "Our Values",
      title: "What Drives Us",
      items: [
        { title: "Quality First",          desc: "AQL inspection at every production stage — fabric, cutting, stitching, finishing, and packing. 60 machines, 15 skilled workers, 5,000 sq ft facility." },
        { title: "Reliability",            desc: "60–90 day bulk lead time with consistent quality. 2-week sample turnaround. We commit to timelines and deliver on them." },
        { title: "Global Reach",           desc: "Exporting to UAE, Russia, Poland, and South Africa since 2024. FOB Mumbai. USD and EUR accepted. 60-day LC payment terms." },
        { title: "Craftsmanship",          desc: "In-house cutting, stitching, and finishing. Viscose, linen blends, rayon, georgette, and crepe fabrics. Embroidery and sequin work specialisation." },
        { title: "Flexibility",            desc: "MOQ 100 pieces per design per colour. Private label and custom tags. Packaging as per client specifications." },
        { title: "Transparency",           desc: "Clear pricing USD 5–8 FOB. No hidden charges. Direct communication with Shravan Diwan, Director." },
      ],
    },
    milestones: {
      subtitle: "Milestones",
      title: "Our Journey",
      items: [
        { year: "2024", text: "Vedant Fashion established in Mumbai. Production facility set up with 60 machines and 15 skilled workers." },
        { year: "2024", text: "First export shipment to UAE. Began supplying ladies woven wear to international wholesale buyers." },
        { year: "2024", text: "Expanded export markets to Russia, Poland, and South Africa." },
        { year: "2024", text: "Achieved consistent 60–90 day bulk production lead time with 2-week sample turnaround." },
        { year: "2025", text: "Continuing to grow export operations with focus on UAE, Russia, and Poland as primary markets." },
      ],
    },
    stats: {
      subtitle: "By The Numbers",
      title: "Scale & Capability",
      items: [
        { num: "5,000", label: "sq ft Factory" },
        { num: "60",    label: "Machines" },
        { num: "15",    label: "Skilled Workers" },
        { num: "100",   label: "MOQ per Style" },
      ],
    },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "قصتنا",
      title: "فيدانت فاشون — صُنعت بعناية",
      description:
        "مُصنّع ملابس نسائية منسوجة مقرّه مومباي، الهند. أسسها شرافان ديوان عام 2024 مع التركيز على الجودة والتسليم في الوقت المحدد والتميز في التصدير.",
    },
    mission: {
      subtitle: "مهمتنا",
      title: "لماذا بدأنا",
      paragraph1:
        "لم يكن تأسيس وحدة تصنيع الملابس النسائية هذه أمراً حدث بين عشية وضحاها. بدأ باهتمام بسيط بالملابس والأقمشة والتصاميم، وبالطريقة التي يمكن أن يغيّر بها الزي المُتقن شعور المرأة تجاه نفسها.",
      paragraph2:
        "لطالما آمنتُ أن الملابس ليست مجرد منتجات. فخلف كل قميص كورتي أو فستان أو طقم كو-أورد أو بلوزة أو زي تقليدي، هناك شخص سيرتديه للعمل أو للاحتفال أو للراحة اليومية أو للحظة خاصة. رافقتني هذه الفكرة منذ البداية. عندما أسّست هذه الوحدة، كان هدفي واضحاً: صناعة ملابس نسائية بتشطيب مُتقن، وقصّات مريحة، وأقمشة جيدة، وجودة يُعتمد عليها. في هذه الصناعة، غالباً ما يلاحظ الناس التصميم أولاً، لكن ما يجعل الملبس ذا قيمة حقيقية هو العمل الذي يُبذل في التفاصيل — القص والخياطة والفحص والكي والتعبئة والاتساق في كل قطعة.",
      paragraph3:
        "اليوم، تُبنى فيدانت فاشون على هذا الأساس: عمل صادق، وحرفية دقيقة، والتزام قوي بالجودة. نحن لا نرى أنفسنا مجرد مُصنّع ملابس آخر. بل نرى أنفسنا فريقاً يساعد على تحقيق أفكار الأزياء النسائية على أرض الواقع. كل قطعة نصنعها تحمل جهد أياد كثيرة. يعمل فريقنا بصبر واهتمام، لأننا نعلم أن أصغر التفاصيل يمكن أن تُحدث فرقاً كبيراً في المنتج النهائي.",
      placeholderLabel: "فيدانت فاشون — صُنعت بعناية، أُنجزت بفخر",
    },
    values: {
      subtitle: "قيمنا",
      title: "ما يحركنا",
      items: [
        { title: "الجودة أولاً",   desc: "فحص AQL في كل مرحلة إنتاج — القماش والقص والخياطة والتشطيب والتعبئة. 60 ماكينة، 15 عاملاً ماهراً، منشأة بمساحة 5,000 قدم مربع." },
        { title: "الموثوقية",      desc: "مدة تنفيذ للطلبيات الكبيرة من 60 إلى 90 يوماً بجودة ثابتة. تسليم العينات خلال أسبوعين. نلتزم بالمواعيد ونفي بها." },
        { title: "الوصول العالمي", desc: "نُصدّر إلى الإمارات وروسيا وبولندا وجنوب أفريقيا منذ عام 2024. تسليم FOB مومباي. الدولار الأمريكي واليورو مقبولان. شروط دفع بخطاب اعتماد لمدة 60 يوماً." },
        { title: "الحرفية",       desc: "قص وخياطة وتشطيب داخلي بالكامل. أقمشة الفيسكوز وخلطات الكتان والرايون والجورجيت والكريب. تخصص في أعمال التطريز والترتر." },
        { title: "المرونة",       desc: "حد أدنى للطلب 100 قطعة لكل تصميم ولون. علامة خاصة وبطاقات مخصصة. تعبئة حسب مواصفات العميل." },
        { title: "الشفافية",      desc: "تسعير واضح من 5 إلى 8 دولارات أمريكية FOB. لا رسوم خفية. تواصل مباشر مع شرافان ديوان، المدير." },
      ],
    },
    milestones: {
      subtitle: "المحطات الرئيسية",
      title: "مسيرتنا",
      items: [
        { year: "2024", text: "تأسست فيدانت فاشون في مومباي. إنشاء منشأة الإنتاج بـ60 ماكينة و15 عاملاً ماهراً." },
        { year: "2024", text: "أول شحنة تصدير إلى الإمارات العربية المتحدة. بدء توريد الملابس النسائية المنسوجة للمشترين الدوليين بالجملة." },
        { year: "2024", text: "توسيع أسواق التصدير لتشمل روسيا وبولندا وجنوب أفريقيا." },
        { year: "2024", text: "تحقيق مدة تنفيذ ثابتة من 60 إلى 90 يوماً للطلبيات الكبيرة مع تسليم عينات خلال أسبوعين." },
        { year: "2025", text: "الاستمرار في تنمية عمليات التصدير مع التركيز على الإمارات وروسيا وبولندا كأسواق رئيسية." },
      ],
    },
    stats: {
      subtitle: "بالأرقام",
      title: "الحجم والقدرات",
      items: [
        { num: "5,000", label: "قدم مربع مساحة المصنع" },
        { num: "60",    label: "ماكينة" },
        { num: "15",    label: "عامل ماهر" },
        { num: "100",   label: "الحد الأدنى للطلب لكل تصميم" },
      ],
    },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Наша история",
      title: "Vedant Fashion — Сделано с заботой",
      description:
        "Производитель женской тканой одежды, базирующийся в Мумбаи, Индия. Основана Шраваном Диваном в 2024 году с фокусом на качество, своевременную поставку и экспортное совершенство.",
    },
    mission: {
      subtitle: "Наша миссия",
      title: "Почему мы начали",
      paragraph1:
        "Создание этого предприятия по производству женской одежды не произошло за одну ночь. Всё началось с простого интереса к одежде, тканям, дизайну и тому, как хорошо сшитый наряд может изменить то, как женщина ощущает себя.",
      paragraph2:
        "Я всегда верил, что одежда — это не просто продукт. За каждым кюрти, платьем, комплектом ко-орд, блузой или этническим нарядом стоит человек, который наденет его на работу, на праздник, для повседневного комфорта или особого момента. Эта мысль сопровождала меня с самого начала. Когда я основал это предприятие, моя цель была ясна: создавать женскую одежду с качественной отделкой, удобной посадкой, хорошими тканями и надёжным качеством. В этой индустрии люди часто замечают дизайн в первую очередь, но истинную ценность изделию придаёт работа над деталями — раскрой, пошив, контроль, глажка, упаковка и стабильность в каждом изделии.",
      paragraph3:
        "Сегодня Vedant Fashion строится на этом фундаменте: честный труд, тщательное мастерство и твёрдая приверженность качеству. Мы не считаем себя просто ещё одним производителем одежды. Мы видим себя командой, которая помогает воплощать идеи женской моды в жизнь. Каждое изделие, которое мы создаём, несёт в себе труд многих рук. Наша команда работает с терпением и вниманием, потому что мы знаем: даже небольшая деталь может кардинально изменить конечный результат.",
      placeholderLabel: "Vedant Fashion — Сделано с заботой, завершено с гордостью",
    },
    values: {
      subtitle: "Наши ценности",
      title: "Что нами движет",
      items: [
        { title: "Качество — прежде всего", desc: "Контроль AQL на каждом этапе производства — ткань, раскрой, пошив, отделка и упаковка. 60 станков, 15 квалифицированных работников, помещение площадью 5 000 кв. футов." },
        { title: "Надёжность",              desc: "Срок выполнения крупных заказов 60–90 дней со стабильным качеством. Изготовление образцов за 2 недели. Мы соблюдаем сроки и выполняем обязательства." },
        { title: "Глобальный охват",        desc: "Экспортируем в ОАЭ, Россию, Польшу и Южную Африку с 2024 года. Поставка FOB Мумбаи. Принимаются USD и EUR. Условия оплаты — аккредитив на 60 дней." },
        { title: "Мастерство",              desc: "Собственный раскрой, пошив и отделка. Вискоза, льняные смеси, вискозный шёлк, жоржет и креп. Специализация на вышивке и работе с пайетками." },
        { title: "Гибкость",                desc: "Минимальный заказ 100 изделий на модель и цвет. Собственный бренд и индивидуальные бирки. Упаковка по спецификациям клиента." },
        { title: "Прозрачность",            desc: "Понятное ценообразование 5–8 USD FOB. Без скрытых платежей. Прямое общение со Шраваном Диваном, директором." },
      ],
    },
    milestones: {
      subtitle: "Ключевые даты",
      title: "Наш путь",
      items: [
        { year: "2024", text: "Vedant Fashion основана в Мумбаи. Создано производство с 60 станками и 15 квалифицированными работниками." },
        { year: "2024", text: "Первая экспортная поставка в ОАЭ. Начало поставок женской тканой одежды международным оптовым покупателям." },
        { year: "2024", text: "Расширение экспортных рынков на Россию, Польшу и Южную Африку." },
        { year: "2024", text: "Достигнут стабильный срок выполнения крупных заказов 60–90 дней с 2-недельным сроком изготовления образцов." },
        { year: "2025", text: "Продолжение развития экспортной деятельности с фокусом на ОАЭ, Россию и Польшу как основные рынки." },
      ],
    },
    stats: {
      subtitle: "В цифрах",
      title: "Масштаб и возможности",
      items: [
        { num: "5 000", label: "кв. футов фабрики" },
        { num: "60",    label: "Станков" },
        { num: "15",    label: "Квалифицированных работников" },
        { num: "100",   label: "Мин. заказ на модель" },
      ],
    },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Nasza historia",
      title: "Vedant Fashion — Wykonane z troską",
      description:
        "Producent damskiej odzieży tkanej z siedzibą w Mumbaju, Indie. Założona przez Shravana Diwana w 2024 roku, z naciskiem na jakość, terminowe dostawy i doskonałość eksportową.",
    },
    mission: {
      subtitle: "Nasza misja",
      title: "Dlaczego zaczęliśmy",
      paragraph1:
        "Założenie tej fabryki odzieży damskiej nie wydarzyło się z dnia na dzień. Zaczęło się od prostego zainteresowania odzieżą, tkaninami, wzornictwem i tym, jak dobrze uszyty strój może zmienić to, jak kobieta czuje się we własnej skórze.",
      paragraph2:
        "Zawsze wierzyłem, że odzież to nie tylko produkty. Za każdą kurtą, sukienką, kompletem co-ord, bluzką czy strojem etnicznym stoi osoba, która będzie go nosić do pracy, na uroczystość, na co dzień lub w wyjątkowej chwili. Ta myśl towarzyszy mi od samego początku. Kiedy zakładałem tę fabrykę, mój cel był jasny: tworzyć odzież damską o starannym wykończeniu, wygodnym kroju, dobrych tkaninach i niezawodnej jakości. W tej branży ludzie często zwracają uwagę najpierw na design, ale prawdziwą wartość ubrania nadaje praca włożona w detale — krojenie, szycie, kontrolę, prasowanie, pakowanie i spójność każdej sztuki.",
      paragraph3:
        "Dziś Vedant Fashion opiera się na tym fundamencie: uczciwej pracy, starannym rzemiośle i silnym zaangażowaniu w jakość. Nie postrzegamy siebie jako kolejnego producenta odzieży. Widzimy się jako zespół, który pomaga wcielać w życie pomysły z zakresu mody damskiej. Każda sztuka, którą wykonujemy, niesie ze sobą pracę wielu rąk. Nasz zespół pracuje z cierpliwością i uwagą, ponieważ wiemy, że nawet mały detal może mieć duży wpływ na końcowy produkt.",
      placeholderLabel: "Vedant Fashion — Wykonane z troską, ukończone z dumą",
    },
    values: {
      subtitle: "Nasze wartości",
      title: "Co nami kieruje",
      items: [
        { title: "Jakość przede wszystkim", desc: "Inspekcja AQL na każdym etapie produkcji — tkanina, krojenie, szycie, wykończenie i pakowanie. 60 maszyn, 15 wykwalifikowanych pracowników, zakład o powierzchni 5000 stóp kw." },
        { title: "Niezawodność",            desc: "Czas realizacji zamówień hurtowych 60–90 dni przy stałej jakości. Wykonanie próbek w 2 tygodnie. Dotrzymujemy terminów i realizujemy zobowiązania." },
        { title: "Globalny zasięg",         desc: "Eksport do ZEA, Rosji, Polski i RPA od 2024 roku. Dostawa FOB Mumbaj. Akceptujemy USD i EUR. Warunki płatności — akredytywa 60-dniowa." },
        { title: "Rzemiosło",               desc: "Własne krojenie, szycie i wykończenie. Wiskoza, mieszanki lnu, rayon, żorżeta i krepa. Specjalizacja w haftach i cekinach." },
        { title: "Elastyczność",            desc: "MOQ 100 sztuk na wzór i kolor. Marka własna i indywidualne metki. Pakowanie zgodnie ze specyfikacją klienta." },
        { title: "Przejrzystość",           desc: "Jasne ceny 5–8 USD FOB. Brak ukrytych opłat. Bezpośredni kontakt z Shravanem Diwanem, dyrektorem." },
      ],
    },
    milestones: {
      subtitle: "Kamienie milowe",
      title: "Nasza droga",
      items: [
        { year: "2024", text: "Vedant Fashion założona w Mumbaju. Uruchomienie zakładu produkcyjnego z 60 maszynami i 15 wykwalifikowanymi pracownikami." },
        { year: "2024", text: "Pierwsza wysyłka eksportowa do ZEA. Rozpoczęcie dostaw damskiej odzieży tkanej do międzynarodowych nabywców hurtowych." },
        { year: "2024", text: "Rozszerzenie rynków eksportowych o Rosję, Polskę i RPA." },
        { year: "2024", text: "Osiągnięcie stałego czasu realizacji zamówień hurtowych 60–90 dni przy 2-tygodniowym czasie realizacji próbek." },
        { year: "2025", text: "Dalszy rozwój działalności eksportowej ze skupieniem na ZEA, Rosji i Polsce jako głównych rynkach." },
      ],
    },
    stats: {
      subtitle: "W liczbach",
      title: "Skala i możliwości",
      items: [
        { num: "5000", label: "stóp kw. fabryki" },
        { num: "60",   label: "Maszyn" },
        { num: "15",   label: "Wykwalifikowanych pracowników" },
        { num: "100",  label: "MOQ na wzór" },
      ],
    },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Notre histoire",
      title: "Vedant Fashion — Fabriqué avec soin",
      description:
        "Fabricant de vêtements tissés pour femmes basé à Mumbai, en Inde. Fondée par Shravan Diwan en 2024, avec un accent sur la qualité, la livraison dans les délais et l'excellence à l'export.",
    },
    mission: {
      subtitle: "Notre mission",
      title: "Pourquoi nous avons commencé",
      paragraph1:
        "La création de cette unité de fabrication de vêtements pour femmes ne s'est pas faite du jour au lendemain. Tout a commencé par un simple intérêt pour les vêtements, les tissus, les designs, et la façon dont une tenue bien confectionnée peut changer la manière dont une femme se sent.",
      paragraph2:
        "J'ai toujours cru que les vêtements ne sont pas de simples produits. Derrière chaque kurti, robe, ensemble co-ord, chemisier ou tenue ethnique, il y a quelqu'un qui le portera pour le travail, pour une célébration, pour le confort quotidien ou pour un moment spécial. Cette idée m'accompagne depuis le début. Lorsque j'ai fondé cette unité, mon objectif était clair : créer des vêtements pour femmes avec une finition soignée, des coupes confortables, de bons tissus et une qualité fiable. Dans cette industrie, les gens remarquent souvent le design en premier, mais ce qui donne réellement de la valeur à un vêtement, c'est le travail apporté aux détails — la coupe, la couture, le contrôle, le repassage, l'emballage et la constance de chaque pièce.",
      paragraph3:
        "Aujourd'hui, Vedant Fashion repose sur cette base : un travail honnête, un savoir-faire soigné et un engagement fort envers la qualité. Nous ne nous voyons pas comme un fabricant de vêtements parmi d'autres. Nous nous considérons comme une équipe qui aide à donner vie aux idées de mode féminine. Chaque vêtement que nous fabriquons porte le travail de nombreuses mains. Notre équipe travaille avec patience et attention, car nous savons qu'un petit détail peut faire une grande différence dans le produit final.",
      placeholderLabel: "Vedant Fashion — Fabriqué avec soin, achevé avec fierté",
    },
    values: {
      subtitle: "Nos valeurs",
      title: "Ce qui nous anime",
      items: [
        { title: "La qualité avant tout", desc: "Inspection AQL à chaque étape de production — tissu, coupe, couture, finition et emballage. 60 machines, 15 ouvriers qualifiés, atelier de 5 000 pieds carrés." },
        { title: "Fiabilité",             desc: "Délai de production en gros de 60 à 90 jours avec une qualité constante. Échantillons livrés en 2 semaines. Nous respectons les délais et tenons nos engagements." },
        { title: "Rayonnement mondial",   desc: "Exportation vers les Émirats arabes unis, la Russie, la Pologne et l'Afrique du Sud depuis 2024. Livraison FOB Mumbai. USD et EUR acceptés. Conditions de paiement par lettre de crédit à 60 jours." },
        { title: "Savoir-faire",          desc: "Coupe, couture et finition en interne. Viscose, mélanges de lin, rayonne, georgette et crêpe. Spécialisation en broderie et travail de paillettes." },
        { title: "Flexibilité",           desc: "MOQ de 100 pièces par modèle et couleur. Marque privée et étiquettes personnalisées. Emballage selon les spécifications du client." },
        { title: "Transparence",          desc: "Tarification claire de 5 à 8 USD FOB. Aucun frais caché. Communication directe avec Shravan Diwan, Directeur." },
      ],
    },
    milestones: {
      subtitle: "Étapes clés",
      title: "Notre parcours",
      items: [
        { year: "2024", text: "Vedant Fashion fondée à Mumbai. Mise en place de l'unité de production avec 60 machines et 15 ouvriers qualifiés." },
        { year: "2024", text: "Première expédition à l'export vers les Émirats arabes unis. Début de l'approvisionnement en vêtements tissés pour femmes auprès d'acheteurs internationaux en gros." },
        { year: "2024", text: "Extension des marchés d'exportation à la Russie, la Pologne et l'Afrique du Sud." },
        { year: "2024", text: "Atteinte d'un délai de production en gros constant de 60 à 90 jours, avec des échantillons livrés en 2 semaines." },
        { year: "2025", text: "Poursuite du développement des activités d'exportation, avec un accent sur les Émirats arabes unis, la Russie et la Pologne comme marchés principaux." },
      ],
    },
    stats: {
      subtitle: "En chiffres",
      title: "Échelle et capacités",
      items: [
        { num: "5 000", label: "pieds carrés d'usine" },
        { num: "60",    label: "Machines" },
        { num: "15",    label: "Ouvriers qualifiés" },
        { num: "100",   label: "MOQ par modèle" },
      ],
    },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "La nostra storia",
      title: "Vedant Fashion — Realizzato con cura",
      description:
        "Produttore di abbigliamento tessuto da donna con sede a Mumbai, India. Fondata da Shravan Diwan nel 2024, con un focus su qualità, consegne puntuali ed eccellenza nell'export.",
    },
    mission: {
      subtitle: "La nostra missione",
      title: "Perché abbiamo iniziato",
      paragraph1:
        "Avviare questa unità di produzione di abbigliamento femminile non è avvenuto da un giorno all'altro. È iniziato con un semplice interesse per abiti, tessuti, design e per il modo in cui un capo ben confezionato può cambiare il modo in cui una donna si sente riguardo a sé stessa.",
      paragraph2:
        "Ho sempre creduto che i capi d'abbigliamento non siano semplicemente prodotti. Dietro ogni kurti, vestito, completo co-ord, camicetta o abito etnico, c'è qualcuno che lo indosserà per lavoro, per una celebrazione, per il comfort quotidiano o per un momento speciale. Questo pensiero mi ha accompagnato fin dall'inizio. Quando ho fondato questa unità, il mio obiettivo era chiaro: creare abbigliamento femminile con una finitura curata, vestibilità comoda, buoni tessuti e qualità affidabile. In questo settore le persone notano spesso prima il design, ma ciò che rende davvero prezioso un capo è il lavoro dedicato ai dettagli — il taglio, la cucitura, il controllo, la stiratura, l'imballaggio e la coerenza di ogni pezzo.",
      paragraph3:
        "Oggi, Vedant Fashion si fonda su queste basi: lavoro onesto, artigianalità curata e un forte impegno verso la qualità. Non ci consideriamo semplicemente un altro produttore di abbigliamento. Ci vediamo come un team che aiuta a dare vita alle idee della moda femminile. Ogni capo che realizziamo porta con sé lo sforzo di molte mani. Il nostro team lavora con pazienza e attenzione, perché sappiamo che anche un piccolo dettaglio può fare una grande differenza nel prodotto finale.",
      placeholderLabel: "Vedant Fashion — Realizzato con cura, rifinito con orgoglio",
    },
    values: {
      subtitle: "I nostri valori",
      title: "Cosa ci guida",
      items: [
        { title: "Qualità prima di tutto", desc: "Ispezione AQL in ogni fase produttiva — tessuto, taglio, cucitura, finitura e imballaggio. 60 macchine, 15 lavoratori qualificati, stabilimento di 5.000 piedi quadrati." },
        { title: "Affidabilità",           desc: "Tempi di consegna per ordini all'ingrosso di 60–90 giorni con qualità costante. Campioni pronti in 2 settimane. Rispettiamo le scadenze e manteniamo gli impegni." },
        { title: "Portata globale",        desc: "Esportiamo negli Emirati Arabi Uniti, Russia, Polonia e Sudafrica dal 2024. Consegna FOB Mumbai. Accettiamo USD ed EUR. Termini di pagamento con lettera di credito a 60 giorni." },
        { title: "Artigianalità",          desc: "Taglio, cucitura e finitura interni. Tessuti in viscosa, misti lino, rayon, georgette e crêpe. Specializzazione in ricamo e lavorazioni con paillettes." },
        { title: "Flessibilità",           desc: "MOQ di 100 pezzi per modello e colore. Private label ed etichette personalizzate. Imballaggio secondo le specifiche del cliente." },
        { title: "Trasparenza",            desc: "Prezzi chiari 5–8 USD FOB. Nessun costo nascosto. Comunicazione diretta con Shravan Diwan, Direttore." },
      ],
    },
    milestones: {
      subtitle: "Tappe fondamentali",
      title: "Il nostro percorso",
      items: [
        { year: "2024", text: "Vedant Fashion fondata a Mumbai. Avviato lo stabilimento produttivo con 60 macchine e 15 lavoratori qualificati." },
        { year: "2024", text: "Prima spedizione export verso gli Emirati Arabi Uniti. Avvio della fornitura di abbigliamento tessuto da donna ad acquirenti internazionali all'ingrosso." },
        { year: "2024", text: "Espansione dei mercati export a Russia, Polonia e Sudafrica." },
        { year: "2024", text: "Raggiunto un tempo di consegna costante di 60–90 giorni per gli ordini all'ingrosso, con campioni pronti in 2 settimane." },
        { year: "2025", text: "Prosegue la crescita delle attività di export con focus su Emirati Arabi Uniti, Russia e Polonia come mercati principali." },
      ],
    },
    stats: {
      subtitle: "In numeri",
      title: "Dimensioni e capacità",
      items: [
        { num: "5.000", label: "piedi quadrati di stabilimento" },
        { num: "60",    label: "Macchine" },
        { num: "15",    label: "Lavoratori qualificati" },
        { num: "100",   label: "MOQ per modello" },
      ],
    },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Ons verhaal",
      title: "Vedant Fashion — Met zorg gemaakt",
      description:
        "Fabrikant van geweven dameskleding, gevestigd in Mumbai, India. Opgericht door Shravan Diwan in 2024, met focus op kwaliteit, tijdige levering en exportexcellentie.",
    },
    mission: {
      subtitle: "Onze missie",
      title: "Waarom we begonnen",
      paragraph1:
        "Het starten van deze productie-eenheid voor dameskleding gebeurde niet van de ene op de andere dag. Het begon met een eenvoudige interesse in kleding, stoffen, ontwerpen en de manier waarop een goed gemaakte outfit kan veranderen hoe een vrouw zich voelt.",
      paragraph2:
        "Ik heb altijd geloofd dat kleding niet zomaar producten zijn. Achter elke kurti, jurk, co-ord set, blouse of etnische outfit staat iemand die het zal dragen voor werk, voor een feestelijke gelegenheid, voor dagelijks comfort of voor een bijzonder moment. Die gedachte is bij me gebleven vanaf het begin. Toen ik deze eenheid oprichtte, was mijn doel duidelijk: dameskleding maken met een goede afwerking, comfortabele pasvorm, goede stoffen en betrouwbare kwaliteit. In deze branche merken mensen vaak eerst het ontwerp op, maar wat een kledingstuk echt waardevol maakt, is het werk dat in de details gaat — het snijden, naaien, controleren, strijken, verpakken en de consistentie in elk stuk.",
      paragraph3:
        "Vandaag is Vedant Fashion gebouwd op dat fundament: eerlijk werk, zorgvuldig vakmanschap en een sterke toewijding aan kwaliteit. Wij zien onszelf niet als zomaar weer een kledingfabrikant. Wij zien onszelf als een team dat helpt om dames-modeideeën tot leven te brengen. Elk kledingstuk dat we maken draagt de inspanning van vele handen. Ons team werkt met geduld en aandacht, omdat we weten dat zelfs een klein detail een groot verschil kan maken in het eindproduct.",
      placeholderLabel: "Vedant Fashion — Met zorg gemaakt, met trots afgewerkt",
    },
    values: {
      subtitle: "Onze waarden",
      title: "Wat ons drijft",
      items: [
        { title: "Kwaliteit voorop",         desc: "AQL-inspectie in elke productiefase — stof, snijden, naaien, afwerking en verpakking. 60 machines, 15 vakbekwame medewerkers, faciliteit van 5.000 vierkante voet." },
        { title: "Betrouwbaarheid",          desc: "60–90 dagen levertijd voor bulkorders met consistente kwaliteit. Monsters binnen 2 weken. Wij committeren ons aan deadlines en komen ze na." },
        { title: "Wereldwijde aanwezigheid", desc: "Export naar de VAE, Rusland, Polen en Zuid-Afrika sinds 2024. FOB Mumbai. USD en EUR geaccepteerd. Betalingsvoorwaarden: LC 60 dagen." },
        { title: "Vakmanschap",              desc: "Snijden, naaien en afwerking in eigen huis. Viscose, linnen mengsels, rayon, georgette en crêpestoffen. Specialisatie in borduurwerk en pailletten." },
        { title: "Flexibiliteit",            desc: "MOQ 100 stuks per ontwerp per kleur. Private label en aangepaste labels. Verpakking volgens klantspecificaties." },
        { title: "Transparantie",            desc: "Duidelijke prijzen USD 5–8 FOB. Geen verborgen kosten. Directe communicatie met Shravan Diwan, Directeur." },
      ],
    },
    milestones: {
      subtitle: "Mijlpalen",
      title: "Onze reis",
      items: [
        { year: "2024", text: "Vedant Fashion opgericht in Mumbai. Productiefaciliteit opgezet met 60 machines en 15 vakbekwame medewerkers." },
        { year: "2024", text: "Eerste exportzending naar de VAE. Start van levering van geweven dameskleding aan internationale groothandelskopers." },
        { year: "2024", text: "Exportmarkten uitgebreid naar Rusland, Polen en Zuid-Afrika." },
        { year: "2024", text: "Consistente levertijd van 60–90 dagen voor bulkorders behaald, met monsters binnen 2 weken." },
        { year: "2025", text: "Voortzetting van de groei van exportactiviteiten met focus op de VAE, Rusland en Polen als belangrijkste markten." },
      ],
    },
    stats: {
      subtitle: "In cijfers",
      title: "Schaal en capaciteit",
      items: [
        { num: "5.000", label: "vierkante voet fabriek" },
        { num: "60",    label: "Machines" },
        { num: "15",    label: "Vakbekwame medewerkers" },
        { num: "100",   label: "MOQ per model" },
      ],
    },
  },
};
