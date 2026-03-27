import { locales, defaultLocale, localizedRoutes, type Locale, type RouteMap } from "./types";

const BASE_URL = "https://www.vedantfashion.com";

/**
 * Builds the Next.js `alternates` metadata object for hreflang tags.
 * Use this in generateMetadata() for every page.
 *
 * @param englishPath - the English-language path, e.g. "/about" or "/catalog/my-product"
 *
 * Usage:
 *   export async function generateMetadata() {
 *     return {
 *       alternates: buildHreflangAlternates("/about"),
 *     };
 *   }
 */
export function buildHreflangAlternates(englishPath: string) {
  const languages: Record<string, string> = {};

  locales.forEach((loc) => {
    const localizedPath = buildLocalizedHref(englishPath, loc.code);
    languages[loc.code] = `${BASE_URL}${localizedPath}`;
  });

  // x-default points to the English canonical
  const englishCanonical =
    englishPath === "/" ? `${BASE_URL}/en` : `${BASE_URL}/en${englishPath}`;
  languages["x-default"] = englishCanonical;

  return {
    canonical: englishCanonical,
    languages,
  };
}

/**
 * Builds a locale-prefixed path for a given English path.
 * e.g., buildLocalizedHref('/about', 'de') → '/de/ueber-uns'
 *       buildLocalizedHref('/about', 'en') → '/en/about'
 */
function buildLocalizedHref(englishPath: string, locale: Locale): string {
  if (englishPath === "/") return `/${locale}`;
  if (locale === defaultLocale) return `/en${englishPath}`;

  const enRoutes = localizedRoutes.en;
  const targetRoutes = localizedRoutes[locale];

  const segments = englishPath.split("/");
  const localized = segments.map((seg) => {
    if (!seg) return seg;
    for (const [key, enSlug] of Object.entries(enRoutes)) {
      if (seg === enSlug) return targetRoutes[key as keyof RouteMap];
    }
    return seg;
  });

  return `/${locale}${localized.join("/")}`;
}

export default buildHreflangAlternates;
