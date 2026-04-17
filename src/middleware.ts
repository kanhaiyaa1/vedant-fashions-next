import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, localizedRoutes } from "./i18n/types";
import type { Locale } from "./i18n/types";

const localeCodes = locales.map((l) => l.code);

// Arab country ISO codes → route to /ar/
const ARAB_COUNTRY_CODES = new Set([
  "AE", "SA", "QA", "KW", "OM", "BH", "EG",
  "JO", "IQ", "LB", "SY", "YE", "PS",
]);

// Russia / CIS country ISO codes → route to /ru/
const CIS_COUNTRY_CODES = new Set([
  "RU", "KZ", "BY", "AM", "KG", "TJ", "UZ",
]);

function detectLocaleFromCountry(countryCode: string | null): string | null {
  if (!countryCode) return null;
  const code = countryCode.toUpperCase();
  if (ARAB_COUNTRY_CODES.has(code)) return "ar";
  if (CIS_COUNTRY_CODES.has(code)) return "ru";
  return null;
}

function detectLocaleFromAcceptLanguage(acceptLang: string | null): string | null {
  if (!acceptLang) return null;
  const preferred = acceptLang
    .split(",")
    .map((s) => s.split(";")[0].trim().substring(0, 2).toLowerCase());
  const match = preferred.find((lang) =>
    localeCodes.includes(lang as (typeof localeCodes)[number])
  );
  return match ?? null;
}

/**
 * Rewrites a locale-prefixed pathname with translated slugs back to the
 * equivalent path using English slugs, which match the filesystem layout.
 *
 * Examples:
 *   resolveToEnglishPath("/de/ueber-uns", "de")          → "/de/about"
 *   resolveToEnglishPath("/ru/kontakty", "ru")            → "/ru/contact"
 *   resolveToEnglishPath("/de/produkte/woven-blouses", "de") → "/de/products/woven-blouses"
 *   resolveToEnglishPath("/en/about", "en")               → "/en/about"  (unchanged)
 *   resolveToEnglishPath("/ar/contact", "ar")             → "/ar/contact" (unchanged — ar uses English slugs)
 *
 * Returns the original pathname unchanged if no translation is needed.
 */
function resolveToEnglishPath(pathname: string, locale: string): string {
  const localeRoutes = localizedRoutes[locale as Locale];
  if (!localeRoutes) return pathname;

  // Homepage — no segments to translate
  const withoutLocale = pathname.slice(locale.length + 1); // e.g. "/ueber-uns" or ""
  const segments = withoutLocale.split("/").filter(Boolean);
  if (segments.length === 0) return pathname;

  const enRoutes = localizedRoutes[defaultLocale];
  let changed = false;

  const englishSegments = segments.map((seg) => {
    // Search localizedRoutes[locale] for a key whose translated value equals this segment
    for (const [key, localSlug] of Object.entries(localeRoutes)) {
      if (localSlug === seg) {
        const enSlug = enRoutes[key as keyof typeof enRoutes];
        if (enSlug && enSlug !== seg) {
          changed = true;
          return enSlug;
        }
        // Same slug as English (e.g. ar locale, or shared slugs like "contact" in fr)
        return seg;
      }
    }
    // Unknown segment (dynamic param, product slug, etc.) — pass through untouched
    return seg;
  });

  if (!changed) return pathname;
  return `/${locale}/${englishSegments.join("/")}`;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let Next.js internals pass through
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if the path already starts with a valid locale prefix
  const firstSegment = pathname.split("/")[1];
  const hasLocalePrefix = localeCodes.includes(firstSegment as (typeof localeCodes)[number]);

  if (hasLocalePrefix) {
    // Resolve any translated slug back to the English slug the filesystem uses.
    // e.g. /de/ueber-uns → internally rewritten to /de/about
    const englishPathname = resolveToEnglishPath(pathname, firstSegment);

    if (englishPathname !== pathname) {
      // Internal rewrite — browser URL stays as the translated slug for SEO
      const rewriteUrl = request.nextUrl.clone();
      rewriteUrl.pathname = englishPathname;
      const response = NextResponse.rewrite(rewriteUrl);
      response.headers.set("x-locale", firstSegment);
      return response;
    }

    // Path already uses English slugs — pass through unchanged
    const response = NextResponse.next();
    response.headers.set("x-locale", firstSegment);
    return response;
  }

  // 1. CF-IPCountry header (Cloudflare) — most reliable signal
  const cfCountry = request.headers.get("cf-ipcountry");
  const countryLocale = detectLocaleFromCountry(cfCountry);

  // 2. Accept-Language fallback
  const acceptLang = request.headers.get("accept-language");
  const acceptLocale = detectLocaleFromAcceptLanguage(acceptLang);

  // Priority: CF country code > Accept-Language > default (en)
  const detectedLocale: string = countryLocale ?? acceptLocale ?? defaultLocale;

  // Redirect unprefixed paths to the detected locale
  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, { status: 307 });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
