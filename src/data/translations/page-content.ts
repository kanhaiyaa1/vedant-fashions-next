/**
 * Retrieves locale-specific content from a content map.
 * Falls back to `fallback` locale (default: "en") if the requested locale
 * is not present in the map.
 */
export function getContent<T>(
  contentMap: Record<string, T>,
  lang: string,
  fallback = "en"
): T {
  return contentMap[lang] ?? contentMap[fallback];
}
