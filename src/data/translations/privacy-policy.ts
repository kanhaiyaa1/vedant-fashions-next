export interface PrivacyPolicyContent {
  hero: { subtitle: string; title: string; description: string };
  langNote: string;
}

export const privacyPolicyContent: Record<string, PrivacyPolicyContent> = {
  en: {
    hero: {
      subtitle: "Legal",
      title: "Privacy Policy",
      description: "How Vedant Fashion collects, uses, and protects your personal data.",
    },
    langNote: "",
  },
  ar: {
    hero: {
      subtitle: "قانوني",
      title: "سياسة الخصوصية",
      description: "كيف تجمع Vedant Fashion بياناتك الشخصية وتستخدمها وتحميها.",
    },
    langNote: "هذه الوثيقة القانونية متاحة باللغة الإنجليزية. يمكن تقديم ملخص مترجم عند الطلب.",
  },
  ru: {
    hero: {
      subtitle: "Правовая информация",
      title: "Политика конфиденциальности",
      description: "Как Vedant Fashion собирает, использует и защищает ваши персональные данные.",
    },
    langNote: "Этот юридический документ доступен на английском языке. Переведённое резюме предоставляется по запросу.",
  },
  pl: {
    hero: {
      subtitle: "Prawne",
      title: "Polityka prywatności",
      description: "Jak Vedant Fashion gromadzi, wykorzystuje i chroni Twoje dane osobowe.",
    },
    langNote: "Ten dokument prawny jest dostępny w języku angielskim. Przetłumaczone podsumowanie jest dostępne na żądanie.",
  },
  fr: {
    hero: {
      subtitle: "Juridique",
      title: "Politique de confidentialité",
      description: "Comment Vedant Fashion collecte, utilise et protège vos données personnelles.",
    },
    langNote: "Ce document juridique est disponible en anglais. Un résumé traduit est disponible sur demande.",
  },
  it: {
    hero: {
      subtitle: "Legale",
      title: "Informativa sulla privacy",
      description: "Come Vedant Fashion raccoglie, utilizza e protegge i tuoi dati personali.",
    },
    langNote: "Questo documento legale è disponibile in inglese. Un riepilogo tradotto è disponibile su richiesta.",
  },
  nl: {
    hero: {
      subtitle: "Juridisch",
      title: "Privacybeleid",
      description: "Hoe Vedant Fashion uw persoonsgegevens verzamelt, gebruikt en beschermt.",
    },
    langNote: "Dit juridische document is beschikbaar in het Engels. Een vertaalde samenvatting is op aanvraag beschikbaar.",
  },
};
