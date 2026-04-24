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
- NEVER read a file just to "understand the pattern" — ask if unclear
- NEVER print full file contents back — just confirm what was changed
- NEVER repeat the task back before doing it — just do it
- NEVER explain what you are about to do — just do it
- NEVER write code comments unless asked
- NEVER add console.log unless asked
- When creating a new file, write it once — do not read it back after
- When multiple files need same import added, do it in one bash sed command not one by one

## Project Context
- Next.js 14+ App Router, TypeScript, Tailwind CSS
- i18n: 7 locales (en, ar, ru, pl, fr, it, nl) via [lang] dynamic segment
- Translation pattern: src/data/translations/[page].ts → getContent(contentMap, lang)
- All pages: async server components, params: Promise<{lang: string}>
- Middleware rewrites translated slugs to English filesystem paths
- No duplicate canonical — use buildHreflangAlternates() only
- Supabase: client at src/lib/supabase/client.ts, server at src/lib/supabase/server.ts
- Admin routes: src/app/[lang]/admin/* — protected by admins table check
- Buyer routes: src/app/[lang]/dashboard — protected by auth session
- Server Actions: colocated in actions.ts next to the page that uses them

## File Locations
- Pages: src/app/[lang]/[page]/page.tsx
- Translations: src/data/translations/[page].ts
- Helper: src/data/translations/page-content.ts (getContent function)
- Components: src/components/vedant/
- Data: src/data/products.ts, seo-pages.ts, knowledge-hub.ts
- Supabase client: src/lib/supabase/client.ts (browser)
- Supabase server: src/lib/supabase/server.ts (server components)
- Supabase middleware: src/lib/supabase/middleware.ts
- Admin pages: src/app/[lang]/admin/
- Auth pages: src/app/[lang]/login, signup, forgot-password, dashboard

## Database (Supabase)
- Tables: buyers, enquiries, sample_requests, catalogue_downloads, admins
- buyers: id, email, full_name, company_name, country, phone, created_at
- enquiries: id, buyer_id, form_type, name, company, email, phone, country, product_interest, quantity, message, incoterm, shipping_port, status, reply_text, replied_at, replied_by, created_at
- sample_requests: id, buyer_id, product_category, styles, quantity, delivery_address, status, created_at
- admins: id, email, role (super_admin/manager), created_at
- Status values — enquiries: new/read/replied/closed
- Status values — samples: pending/approved/dispatched/delivered/rejected
- RLS enabled on all tables
- Email service: Resend, key in RESEND_API_KEY, send to contact@vedantfashion.com

## Translation Pattern (copy exactly)
import { getContent } from "@/data/translations/page-content";
import { xyzContent } from "@/data/translations/xyz";
const c = getContent(xyzContent, lang);

## Supabase Pattern (copy exactly)
// Server component:
import { createClient } from "@/lib/supabase/server";
const supabase = await createClient();

// Client component:
import { createClient } from "@/lib/supabase/client";
const supabase = createClient();

## Do Not
- Do not add comments explaining what you changed
- Do not summarize changes after completing — just confirm done + exit code
- Do not read AGENTS.md or any memory files unless asked
- Do not run the dev server
- Do not install packages unless asked
- Do not explain code you just wrote
- Do not list files you changed unless there was an error
- Do not ask clarifying questions — make a reasonable decision and proceed
- Do not wrap responses in markdown code blocks when confirming done
- Do not repeat instructions back to confirm you understood them