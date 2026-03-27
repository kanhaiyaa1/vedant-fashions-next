"use client";

import { createContext, useContext, useCallback, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Locale, Translations } from "./types";
import { switchLocalePath } from "@/lib/routes";
import en from "./locales/en";
import de from "./locales/de";
import fr from "./locales/fr";
import it from "./locales/it";
import es from "./locales/es";
import nl from "./locales/nl";
import pl from "./locales/pl";
import ru from "./locales/ru";

const translationMap: Record<Locale, Translations> = { en, de, fr, it, es, nl, pl, ru };

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Client-side i18n provider.
 * Locale is determined server-side from the [lang] URL segment and passed as a prop.
 * Switching locale navigates to the equivalent path in the new locale.
 */
export const I18nProvider = ({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = useCallback(
    (newLocale: Locale) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("vedant-lang", newLocale);
        document.documentElement.lang = newLocale;
      }
      const newPath = switchLocalePath(pathname, newLocale);
      router.push(newPath);
    },
    [pathname, router]
  );

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      let str = translationMap[locale]?.[key] ?? translationMap.en[key] ?? key;
      if (vars) {
        Object.entries(vars).forEach(([k, v]) => {
          str = str.replace(`{${k}}`, String(v));
        });
      }
      return str;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
