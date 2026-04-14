import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./i18n/types";

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
    // Already locale-prefixed — pass through and expose locale to the root layout
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
