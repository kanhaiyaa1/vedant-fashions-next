import type { Locale, RouteMap } from '@/i18n/types';
import { localizedRoutes, defaultLocale, locales } from '@/i18n/types';

/**
 * Convert an English path to a fully-prefixed localized path.
 * In Next.js App Router all locales (including English) carry their prefix.
 * e.g., buildLocalizedPath('/about', 'en') → '/en/about'
 *       buildLocalizedPath('/about', 'de') → '/de/ueber-uns'
 */
export function buildLocalizedPath(englishPath: string, locale: Locale): string {
  if (englishPath === '/') return `/${locale}`;

  const enRoutes = localizedRoutes.en;
  const targetRoutes = localizedRoutes[locale];

  const segments = englishPath.split('/');
  const localized = segments.map((seg) => {
    if (!seg || seg.startsWith(':')) return seg;
    for (const [key, enSlug] of Object.entries(enRoutes)) {
      if (seg === enSlug) {
        return targetRoutes[key as keyof RouteMap];
      }
    }
    return seg;
  });

  return `/${locale}${localized.join('/')}`;
}

/**
 * Resolve any locale-prefixed pathname to its locale + English equivalent.
 * Works for ALL locales including English (which is now prefixed too).
 * e.g., resolvePathLocale('/en/about')    → { locale: 'en', englishPath: '/about' }
 *       resolvePathLocale('/de/ueber-uns') → { locale: 'de', englishPath: '/about' }
 */
export function resolvePathLocale(pathname: string): { locale: Locale; englishPath: string } {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length > 0) {
    const first = segments[0];
    const found = locales.find((l) => l.code === first);

    if (found) {
      const locale = found.code as Locale;
      const rest = segments.slice(1);

      if (locale === defaultLocale) {
        // English segments are already the English slugs — no translation needed
        const englishPath = rest.length > 0 ? '/' + rest.join('/') : '/';
        return { locale, englishPath };
      }

      // Non-English: translate slugs back to English equivalents
      const targetRoutes = localizedRoutes[locale];
      const enRoutes = localizedRoutes.en;

      const englishSegments = rest.map((seg) => {
        for (const [key, localSlug] of Object.entries(targetRoutes)) {
          if (seg === localSlug) {
            return enRoutes[key as keyof RouteMap];
          }
        }
        return seg;
      });

      const englishPath = englishSegments.length > 0 ? '/' + englishSegments.join('/') : '/';
      return { locale, englishPath };
    }
  }

  // No locale prefix found — treat as English root
  return { locale: defaultLocale, englishPath: pathname };
}

/**
 * Switch locale: given the current pathname, return the equivalent path in targetLocale.
 * e.g., switchLocalePath('/de/ueber-uns', 'fr') → '/fr/a-propos'
 */
export function switchLocalePath(currentPathname: string, targetLocale: Locale): string {
  const { englishPath } = resolvePathLocale(currentPathname);
  return buildLocalizedPath(englishPath, targetLocale);
}

/**
 * Returns the English slug portion of a route key for use in generateStaticParams.
 */
export function localizeRoutePath(englishPath: string, locale: Locale): string {
  return buildLocalizedPath(englishPath, locale);
}
