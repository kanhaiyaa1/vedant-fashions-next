import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/types";
import { I18nProvider } from "@/i18n/I18nProvider";
import Providers from "@/components/Providers";
import Navbar from "@/components/vedant/Navbar";
import Footer from "@/components/vedant/Footer";
import ScrollToTop from "@/components/vedant/ScrollToTop";

// Maps locale codes to BCP-47 locale strings for OpenGraph
const ogLocaleMap: Record<string, string> = {
  en: "en_US", de: "de_DE", fr: "fr_FR", it: "it_IT",
  es: "es_ES", nl: "nl_NL", pl: "pl_PL", ru: "ru_RU",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    openGraph: { locale: ogLocaleMap[lang] ?? "en_US" },
  };
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale.code }));
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  const isValidLocale = locales.some((l) => l.code === lang);
  if (!isValidLocale) notFound();

  return (
    <I18nProvider locale={lang as Locale}>
      <Providers>
        <ScrollToTop />
        <Navbar />
        <div className="pt-16 md:pt-20 flex flex-col min-h-screen">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </Providers>
    </I18nProvider>
  );
}
