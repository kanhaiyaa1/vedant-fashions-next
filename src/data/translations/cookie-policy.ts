export interface CookiePolicyContent {
  hero: { subtitle: string; title: string; description: string };
  langNote: string;
}

export const cookiePolicyContent: Record<string, CookiePolicyContent> = {
  en: {
    hero: {
      subtitle: "Legal",
      title: "Cookie Policy",
      description: "How and why Vedant Fashion uses cookies on this website.",
    },
    langNote: "",
  },
  ar: {
    hero: {
      subtitle: "قانوني",
      title: "سياسة ملفات تعريف الارتباط",
      description: "كيف ولماذا تستخدم Vedant Fashion ملفات تعريف الارتباط على هذا الموقع.",
    },
    langNote: "هذه الوثيقة القانونية متاحة باللغة الإنجليزية. يمكن تقديم ملخص مترجم عند الطلب.",
  },
  ru: {
    hero: {
      subtitle: "Правовая информация",
      title: "Политика в отношении файлов cookie",
      description: "Как и почему Vedant Fashion использует файлы cookie на этом сайте.",
    },
    langNote: "Этот юридический документ доступен на английском языке. Переведённое резюме предоставляется по запросу.",
  },
  pl: {
    hero: {
      subtitle: "Prawne",
      title: "Polityka plików cookie",
      description: "Jak i dlaczego Vedant Fashion używa plików cookie na tej stronie.",
    },
    langNote: "Ten dokument prawny jest dostępny w języku angielskim. Przetłumaczone podsumowanie jest dostępne na żądanie.",
  },
  fr: {
    hero: {
      subtitle: "Juridique",
      title: "Politique de cookies",
      description: "Comment et pourquoi Vedant Fashion utilise des cookies sur ce site.",
    },
    langNote: "Ce document juridique est disponible en anglais. Un résumé traduit est disponible sur demande.",
  },
  it: {
    hero: {
      subtitle: "Legale",
      title: "Politica sui cookie",
      description: "Come e perché Vedant Fashion utilizza i cookie su questo sito.",
    },
    langNote: "Questo documento legale è disponibile in inglese. Un riepilogo tradotto è disponibile su richiesta.",
  },
  nl: {
    hero: {
      subtitle: "Juridisch",
      title: "Cookiebeleid",
      description: "Hoe en waarom Vedant Fashion cookies gebruikt op deze website.",
    },
    langNote: "Dit juridische document is beschikbaar in het Engels. Een vertaalde samenvatting is op aanvraag beschikbaar.",
  },
};
