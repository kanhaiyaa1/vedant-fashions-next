import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./i18n/types";

const localeCodes = locales.map((l) => l.code);

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

  // Detect preferred locale from Accept-Language header (optional enhancement)
  const acceptLang = request.headers.get("accept-language");
  let detectedLocale = defaultLocale;
  if (acceptLang) {
    const preferred = acceptLang
      .split(",")
      .map((s) => s.split(";")[0].trim().substring(0, 2).toLowerCase());
    const match = preferred.find((lang) =>
      localeCodes.includes(lang as (typeof localeCodes)[number])
    );
    if (match) detectedLocale = match as typeof defaultLocale;
  }

  // Redirect unprefixed paths to the detected locale
  // e.g., /about → /en/about  (or /de/about if browser prefers German)
  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, { status: 307 });
}

export const config = {
  // Match everything except static files, api routes, and Next.js internals
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
