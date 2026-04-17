// ─────────────────────────────────────────────────────────────────────────────
// Contact page content translations
// Languages: en · ar · ru · pl · fr · it · nl
// ─────────────────────────────────────────────────────────────────────────────

export interface ContactOffice {
  name: string;
  hours: string;
}

export interface ContactLocale {
  hero: {
    subtitle: string;
    title: string;
    description: string;
  };
  offices: ContactOffice[]; // index 0 = India, 1 = Germany, 2 = Russia
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  breadcrumb: {
    home: string;
    contact: string;
  };
}

export const contactContent: Record<string, ContactLocale> = {
  // ─── English ───────────────────────────────────────────────────────────────
  en: {
    hero: {
      subtitle: "Contact",
      title: "Let's Start a Conversation",
      description:
        "Whether you're a boutique buyer or a major retail chain, our export team is ready to discuss your requirements. Samples dispatched within 3 business days.",
    },
    offices: [
      { name: "India — Head Office & Factory", hours: "Mon–Sat: 9:30–18:30 IST" },
      { name: "Germany — European Office",     hours: "Mon–Fri: 9:00–18:00 CET" },
      { name: "Russia — Moscow Representative", hours: "Mon–Fri: 10:00–19:00 MSK" },
    ],
    cta: {
      title: "Trade Shows 2026",
      description:
        "Meet us at Texworld Paris (Feb), Munich Fabric Start (Mar), and Première Vision Paris (Sep). Schedule a meeting in advance.",
      buttonText: "Book a Meeting",
    },
    breadcrumb: { home: "Home", contact: "Contact" },
  },

  // ─── Arabic ────────────────────────────────────────────────────────────────
  ar: {
    hero: {
      subtitle: "تواصل معنا",
      title: "لنبدأ محادثة",
      description:
        "سواء كنت مشترياً صغيراً أو سلسلة تجزئة كبرى، فريق التصدير لدينا مستعد لمناقشة متطلباتك. يتم إرسال العينات خلال 3 أيام عمل.",
    },
    offices: [
      { name: "الهند — المكتب الرئيسي والمصنع",  hours: "الإثنين–السبت: 9:30–18:30 IST" },
      { name: "ألمانيا — المكتب الأوروبي",         hours: "الإثنين–الجمعة: 9:00–18:00 CET" },
      { name: "روسيا — مكتب موسكو",               hours: "الإثنين–الجمعة: 10:00–19:00 MSK" },
    ],
    cta: {
      title: "المعارض التجارية 2026",
      description:
        "التقِ بنا في معرض Texworld باريس (فبراير) ومعرض Munich Fabric Start (مارس) ومعرض Première Vision باريس (سبتمبر). احجز موعدك مسبقاً.",
      buttonText: "احجز اجتماعاً",
    },
    breadcrumb: { home: "الرئيسية", contact: "اتصل بنا" },
  },

  // ─── Russian ───────────────────────────────────────────────────────────────
  ru: {
    hero: {
      subtitle: "Контакты",
      title: "Начнём диалог",
      description:
        "Независимо от масштаба вашего бизнеса — небольшой бутик или крупная торговая сеть — наш отдел экспорта готов обсудить ваши требования. Образцы отправляются в течение 3 рабочих дней.",
    },
    offices: [
      { name: "Индия — Головной офис и фабрика",    hours: "Пн–Сб: 9:30–18:30 IST" },
      { name: "Германия — Европейский офис",        hours: "Пн–Пт: 9:00–18:00 CET" },
      { name: "Россия — Представительство в Москве", hours: "Пн–Пт: 10:00–19:00 МСК" },
    ],
    cta: {
      title: "Торговые выставки 2026",
      description:
        "Встретьтесь с нами на Texworld Paris (февраль), Munich Fabric Start (март) и Première Vision Paris (сентябрь). Запишитесь на встречу заблаговременно.",
      buttonText: "Записаться на встречу",
    },
    breadcrumb: { home: "Главная", contact: "Контакты" },
  },

  // ─── Polish ────────────────────────────────────────────────────────────────
  pl: {
    hero: {
      subtitle: "Kontakt",
      title: "Zacznijmy rozmowę",
      description:
        "Niezależnie czy jesteś małym nabywcą czy dużą siecią handlową, nasz zespół eksportowy jest gotowy omówić Twoje wymagania. Próbki wysyłamy w ciągu 3 dni roboczych.",
    },
    offices: [
      { name: "Indie — Siedziba główna i fabryka", hours: "Pon–Sob: 9:30–18:30 IST" },
      { name: "Niemcy — Biuro europejskie",        hours: "Pon–Pt: 9:00–18:00 CET" },
      { name: "Rosja — Biuro w Moskwie",           hours: "Pon–Pt: 10:00–19:00 MSK" },
    ],
    cta: {
      title: "Targi 2026",
      description:
        "Spotkaj nas na Texworld Paris (luty), Munich Fabric Start (marzec) i Première Vision Paris (wrzesień). Umów spotkanie z wyprzedzeniem.",
      buttonText: "Umów spotkanie",
    },
    breadcrumb: { home: "Strona główna", contact: "Kontakt" },
  },

  // ─── French ────────────────────────────────────────────────────────────────
  fr: {
    hero: {
      subtitle: "Contact",
      title: "Commençons une conversation",
      description:
        "Que vous soyez un acheteur indépendant ou une grande chaîne de distribution, notre équipe export est prête à discuter de vos besoins. Échantillons expédiés sous 3 jours ouvrés.",
    },
    offices: [
      { name: "Inde — Siège social et usine",       hours: "Lun–Sam : 9h30–18h30 IST" },
      { name: "Allemagne — Bureau européen",        hours: "Lun–Ven : 9h00–18h00 CET" },
      { name: "Russie — Représentation à Moscou",   hours: "Lun–Ven : 10h00–19h00 MSK" },
    ],
    cta: {
      title: "Salons professionnels 2026",
      description:
        "Retrouvez-nous à Texworld Paris (fév.), Munich Fabric Start (mars) et Première Vision Paris (sept.). Prenez rendez-vous à l'avance.",
      buttonText: "Prendre rendez-vous",
    },
    breadcrumb: { home: "Accueil", contact: "Contact" },
  },

  // ─── Italian ───────────────────────────────────────────────────────────────
  it: {
    hero: {
      subtitle: "Contatti",
      title: "Iniziamo una conversazione",
      description:
        "Che siate un piccolo buyer o una grande catena retail, il nostro team export è pronto a discutere le vostre esigenze. Campioni spediti entro 3 giorni lavorativi.",
    },
    offices: [
      { name: "India — Sede centrale e stabilimento", hours: "Lun–Sab: 9:30–18:30 IST" },
      { name: "Germania — Ufficio europeo",           hours: "Lun–Ven: 9:00–18:00 CET" },
      { name: "Russia — Rappresentanza a Mosca",      hours: "Lun–Ven: 10:00–19:00 MSK" },
    ],
    cta: {
      title: "Fiere 2026",
      description:
        "Incontrateci al Texworld Paris (feb.), Munich Fabric Start (mar.) e Première Vision Paris (set.). Prenotate un incontro in anticipo.",
      buttonText: "Prenota un incontro",
    },
    breadcrumb: { home: "Home", contact: "Contatti" },
  },

  // ─── Dutch ─────────────────────────────────────────────────────────────────
  nl: {
    hero: {
      subtitle: "Contact",
      title: "Laten we een gesprek beginnen",
      description:
        "Of u nu een kleine inkoper of een grote retailketen bent, ons exportteam staat klaar om uw wensen te bespreken. Monsters worden binnen 3 werkdagen verzonden.",
    },
    offices: [
      { name: "India — Hoofdkantoor en fabriek",     hours: "Ma–Za: 9:30–18:30 IST" },
      { name: "Duitsland — Europees kantoor",        hours: "Ma–Vr: 9:00–18:00 CET" },
      { name: "Rusland — Vertegenwoordiging Moskou", hours: "Ma–Vr: 10:00–19:00 MSK" },
    ],
    cta: {
      title: "Vakbeurzen 2026",
      description:
        "Ontmoet ons op Texworld Paris (feb.), Munich Fabric Start (mrt.) en Première Vision Paris (sep.). Plan van tevoren een afspraak.",
      buttonText: "Afspraak inplannen",
    },
    breadcrumb: { home: "Home", contact: "Contact" },
  },
};
