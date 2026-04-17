# Vedant Fashion — Dev Rules

## Token Conservation (STRICT)
- NEVER read a file you already read in this session
- NEVER re-read files to "verify" — trust what you already have in context
- When editing multiple files with the same pattern, batch all edits in one pass
- Use grep/bash to find specific lines before reading full files
- Read only the lines you need using view_range, not entire files
- NEVER run tsc --noEmit after every single file — run ONCE at the end
- NEVER run next build unless explicitly asked
- Do not re-read translation files to "confirm" — write and move on

## Project Context
- Next.js 14+ App Router, TypeScript, Tailwind CSS
- i18n: 7 locales (en, ar, ru, pl, fr, it, nl) via [lang] dynamic segment
- Translation pattern: src/data/translations/[page].ts → getContent(contentMap, lang)
- All pages: async server components, params: Promise<{lang: string}>
- Middleware rewrites translated slugs to English filesystem paths
- No duplicate canonical — use buildHreflangAlternates() only

## File Locations
- Pages: src/app/[lang]/[page]/page.tsx
- Translations: src/data/translations/[page].ts
- Helper: src/data/translations/page-content.ts (getContent function)
- Components: src/components/vedant/
- Data: src/data/products.ts, seo-pages.ts, knowledge-hub.ts

## Translation Pattern (copy exactly)
import { getContent } from "@/data/translations/page-content";
import { xyzContent } from "@/data/translations/xyz";
const c = getContent(xyzContent, lang);

## Do Not
- Do not add comments explaining what you changed
- Do not summarize changes after completing — just confirm done + exit code
- Do not read AGENTS.md or any memory files unless asked
- Do not run the dev server
- Do not install packages unless asked