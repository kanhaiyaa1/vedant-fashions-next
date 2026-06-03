export interface WholesaleFaqContent {
  hero: {
    subtitle: string;
    title: string;
    description: string;
  };
  nav: {
    subtitle: string;
    title: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  sectionOf: string;
  sectionHeadings: string[];
  questionsLabel: string;
}

export const wholesaleFaqContent: Record<string, WholesaleFaqContent> = {
  en: {
    hero: {
      subtitle: "Wholesale FAQ",
      title: "B2B Buyer Questions — Answered",
      description:
        "30+ detailed answers covering ordering, sampling, quality, certifications, shipping to UAE and GCC, payment terms, Middle East compliance, and Russia / CIS trade. Vedant Fashion export team.",
    },
    nav: { subtitle: "Quick Navigation", title: "Browse by Topic" },
    cta: {
      title: "Still Have Questions?",
      description:
        "Our GCC and Middle East export team responds within 24 hours — Monday to Friday, 09:00–18:00 IST.",
      buttonText: "Contact Export Team",
    },
    sectionOf: "Section {n} of {total}",
    sectionHeadings: [
      "Ordering",
      "Samples",
      "Quality Control",
      "Certifications & Compliance",
      "Shipping & Logistics",
      "Payment Terms",
      "Middle East Specific",
      "Russia & CIS",
    ],
    questionsLabel: "question",
  },

  ar: {
    hero: {
      subtitle: "الأسئلة الشائعة للجملة",
      title: "أسئلة المشترين بالجملة — إجابات شاملة",
      description:
        "أكثر من 30 إجابة تفصيلية تغطي الطلبات، وأخذ العينات، والجودة، والشهادات، والشحن إلى الإمارات ودول مجلس التعاون الخليجي، وشروط الدفع، والامتثال في الشرق الأوسط. فريق تصدير Vedant Fashion.",
    },
    nav: { subtitle: "التنقل السريع", title: "تصفح حسب الموضوع" },
    cta: {
      title: "هل لديك المزيد من الأسئلة؟",
      description:
        "يرد فريق التصدير الخاص بنا في دول مجلس التعاون الخليجي والشرق الأوسط خلال 24 ساعة — من الاثنين إلى الجمعة، 09:00–18:00 بتوقيت الهند.",
      buttonText: "تواصل مع فريق التصدير",
    },
    sectionOf: "القسم {n} من {total}",
    sectionHeadings: [
      "الطلب",
      "العينات",
      "مراقبة الجودة",
      "الشهادات والامتثال",
      "الشحن والخدمات اللوجستية",
      "شروط الدفع",
      "خاص بالشرق الأوسط",
      "روسيا ورابطة الدول المستقلة",
    ],
    questionsLabel: "سؤال",
  },

  ru: {
    hero: {
      subtitle: "Вопросы по оптовым закупкам",
      title: "Ответы на вопросы B2B-покупателей",
      description:
        "Более 30 подробных ответов о заказах, образцах, качестве, сертификатах, доставке в ОАЭ и страны Персидского залива, условиях оплаты и торговле с Россией / СНГ. Команда по экспорту Vedant Fashion.",
    },
    nav: { subtitle: "Быстрая навигация", title: "Просмотр по темам" },
    cta: {
      title: "Остались вопросы?",
      description:
        "Наша команда по экспорту в ОАЭ и Ближний Восток отвечает в течение 24 часов — с понедельника по пятницу, 09:00–18:00 IST.",
      buttonText: "Связаться с командой по экспорту",
    },
    sectionOf: "Раздел {n} из {total}",
    sectionHeadings: [
      "Заказы",
      "Образцы",
      "Контроль качества",
      "Сертификаты и соответствие",
      "Доставка и логистика",
      "Условия оплаты",
      "Специфика Ближнего Востока",
      "Россия и СНГ",
    ],
    questionsLabel: "вопрос",
  },

  pl: {
    hero: {
      subtitle: "FAQ dla hurtowników",
      title: "Pytania kupujących B2B — Odpowiedzi",
      description:
        "Ponad 30 szczegółowych odpowiedzi dotyczących zamówień, próbek, jakości, certyfikatów, wysyłki do ZEA i krajów Zatoki Perskiej, warunków płatności oraz handlu z Rosją / WNP. Zespół eksportowy Vedant Fashion.",
    },
    nav: { subtitle: "Szybka nawigacja", title: "Przeglądaj według tematu" },
    cta: {
      title: "Masz więcej pytań?",
      description:
        "Nasz zespół eksportowy ds. ZEA i Bliskiego Wschodu odpowiada w ciągu 24 godzin — od poniedziałku do piątku, 09:00–18:00 IST.",
      buttonText: "Skontaktuj się z zespołem eksportowym",
    },
    sectionOf: "Sekcja {n} z {total}",
    sectionHeadings: [
      "Zamówienie",
      "Próbki",
      "Kontrola jakości",
      "Certyfikaty i zgodność",
      "Wysyłka i logistyka",
      "Warunki płatności",
      "Specyfika Bliskiego Wschodu",
      "Rosja i WNP",
    ],
    questionsLabel: "pytanie",
  },

  fr: {
    hero: {
      subtitle: "FAQ Grossiste",
      title: "Questions des acheteurs B2B — Réponses détaillées",
      description:
        "Plus de 30 réponses détaillées sur les commandes, l'échantillonnage, la qualité, les certifications, l'expédition vers les Émirats arabes unis et les pays du Golfe, les conditions de paiement et le commerce avec la Russie / CEI. Équipe export Vedant Fashion.",
    },
    nav: { subtitle: "Navigation rapide", title: "Parcourir par thème" },
    cta: {
      title: "D'autres questions ?",
      description:
        "Notre équipe export CCG et Moyen-Orient répond sous 24 heures — du lundi au vendredi, 09h00–18h00 IST.",
      buttonText: "Contacter l'équipe export",
    },
    sectionOf: "Section {n} sur {total}",
    sectionHeadings: [
      "Commande",
      "Échantillons",
      "Contrôle qualité",
      "Certifications et conformité",
      "Expédition et logistique",
      "Conditions de paiement",
      "Spécifique Moyen-Orient",
      "Russie et CEI",
    ],
    questionsLabel: "question",
  },

  it: {
    hero: {
      subtitle: "FAQ Ingrosso",
      title: "Domande degli acquirenti B2B — Risposte",
      description:
        "Oltre 30 risposte dettagliate su ordini, campioni, qualità, certificazioni, spedizioni verso EAU e paesi del Golfo, termini di pagamento e commercio con Russia / CSI. Team export Vedant Fashion.",
    },
    nav: { subtitle: "Navigazione rapida", title: "Sfoglia per argomento" },
    cta: {
      title: "Hai altre domande?",
      description:
        "Il nostro team export per il CCG e il Medio Oriente risponde entro 24 ore — dal lunedì al venerdì, 09:00–18:00 IST.",
      buttonText: "Contatta il team export",
    },
    sectionOf: "Sezione {n} di {total}",
    sectionHeadings: [
      "Ordinazione",
      "Campioni",
      "Controllo qualità",
      "Certificazioni e conformità",
      "Spedizione e logistica",
      "Termini di pagamento",
      "Specifico Medio Oriente",
      "Russia e CSI",
    ],
    questionsLabel: "domanda",
  },

  nl: {
    hero: {
      subtitle: "Groothandel FAQ",
      title: "Vragen van B2B-kopers — Antwoorden",
      description:
        "Meer dan 30 gedetailleerde antwoorden over bestellingen, monsters, kwaliteit, certificeringen, verzending naar de VAE en Golfstaten, betalingsvoorwaarden en handel met Rusland / GOS. Exportteam Vedant Fashion.",
    },
    nav: { subtitle: "Snelle navigatie", title: "Bladeren op onderwerp" },
    cta: {
      title: "Nog meer vragen?",
      description:
        "Ons exportteam voor de GCC en het Midden-Oosten reageert binnen 24 uur — maandag t/m vrijdag, 09:00–18:00 IST.",
      buttonText: "Neem contact op met het exportteam",
    },
    sectionOf: "Sectie {n} van {total}",
    sectionHeadings: [
      "Bestelling",
      "Monsters",
      "Kwaliteitscontrole",
      "Certificeringen en naleving",
      "Verzending en logistiek",
      "Betalingsvoorwaarden",
      "Midden-Oosten specifiek",
      "Rusland en GOS",
    ],
    questionsLabel: "vraag",
  },
};
