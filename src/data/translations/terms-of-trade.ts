export interface TermsOfTradeContent {
  hero: { subtitle: string; title: string; description: string };
  langNote: string;
}

export const termsOfTradeContent: Record<string, TermsOfTradeContent> = {
  en: {
    hero: {
      subtitle: "Legal",
      title: "Terms of Trade",
      description:
        "Standard terms governing wholesale orders, payment, production, shipping, and quality for all Vedant Fashion buyers.",
    },
    langNote: "",
  },
  ar: {
    hero: {
      subtitle: "قانوني",
      title: "شروط التجارة",
      description:
        "الشروط القياسية التي تحكم أوامر الجملة والدفع والإنتاج والشحن والجودة لجميع مشتري Vedant Fashion.",
    },
    langNote: "هذه الوثيقة القانونية متاحة باللغة الإنجليزية. يمكن تقديم ملخص مترجم عند الطلب.",
  },
  ru: {
    hero: {
      subtitle: "Правовая информация",
      title: "Условия торговли",
      description:
        "Стандартные условия, регулирующие оптовые заказы, оплату, производство, доставку и качество для всех покупателей Vedant Fashion.",
    },
    langNote: "Этот юридический документ доступен на английском языке. Переведённое резюме предоставляется по запросу.",
  },
  pl: {
    hero: {
      subtitle: "Prawne",
      title: "Warunki handlowe",
      description:
        "Standardowe warunki regulujące zamówienia hurtowe, płatności, produkcję, wysyłkę i jakość dla wszystkich kupujących Vedant Fashion.",
    },
    langNote: "Ten dokument prawny jest dostępny w języku angielskim. Przetłumaczone podsumowanie jest dostępne na żądanie.",
  },
  fr: {
    hero: {
      subtitle: "Juridique",
      title: "Conditions commerciales",
      description:
        "Conditions standard régissant les commandes en gros, le paiement, la production, l'expédition et la qualité pour tous les acheteurs Vedant Fashion.",
    },
    langNote: "Ce document juridique est disponible en anglais. Un résumé traduit est disponible sur demande.",
  },
  it: {
    hero: {
      subtitle: "Legale",
      title: "Termini di commercio",
      description:
        "Termini standard che regolano gli ordini all'ingrosso, il pagamento, la produzione, la spedizione e la qualità per tutti gli acquirenti Vedant Fashion.",
    },
    langNote: "Questo documento legale è disponibile in inglese. Un riepilogo tradotto è disponibile su richiesta.",
  },
  nl: {
    hero: {
      subtitle: "Juridisch",
      title: "Handelsvoorwaarden",
      description:
        "Standaardvoorwaarden voor groothandelsbestellingen, betaling, productie, verzending en kwaliteit voor alle Vedant Fashion-kopers.",
    },
    langNote: "Dit juridische document is beschikbaar in het Engels. Een vertaalde samenvatting is op aanvraag beschikbaar.",
  },
};
