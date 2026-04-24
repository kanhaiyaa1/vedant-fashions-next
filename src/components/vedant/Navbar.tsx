"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import { locales } from "@/i18n/types";
import type { Locale } from "@/i18n/types";
import LocaleLink from "@/i18n/LocaleLink";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

type NavItem = {
  labelKey: string;
  href?: string;
  children?: { labelKey: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    labelKey: "nav.company",
    children: [
      { labelKey: "nav.about", href: "/about" },
      { labelKey: "nav.manufacturing", href: "/manufacturing" },
      { labelKey: "nav.sustainability", href: "/sustainability" },
      { labelKey: "nav.certifications", href: "/certifications" },
      { labelKey: "nav.qualityControl", href: "/quality-control" },
    ],
  },
  {
    labelKey: "nav.products",
    children: [
      { labelKey: "nav.allCategories", href: "/products" },
      { labelKey: "nav.catalog", href: "/catalog" },
      { labelKey: "nav.wovenBlouses", href: "/products/woven-blouses" },
      { labelKey: "nav.cottonDresses", href: "/products/cotton-dresses" },
      { labelKey: "nav.linenShirts", href: "/products/linen-shirts" },
      { labelKey: "nav.resortWear", href: "/products/resort-wear" },
    ],
  },
  {
    labelKey: "nav.services",
    children: [
      { labelKey: "nav.privateLabel", href: "/private-label" },
      { labelKey: "nav.oemProduction", href: "/oem" },
      { labelKey: "nav.fabricSourcing", href: "/fabric-sourcing" },
    ],
  },
  {
    labelKey: "Export Markets",
    children: [
      { labelKey: "UAE", href: "/uae/garment-manufacturer" },
      { labelKey: "Saudi Arabia", href: "/saudi-arabia/garment-manufacturer" },
      { labelKey: "Qatar", href: "/qatar/garment-manufacturer" },
      { labelKey: "Kuwait", href: "/kuwait/garment-manufacturer" },
      { labelKey: "Oman", href: "/oman/garment-manufacturer" },
      { labelKey: "Bahrain", href: "/bahrain/garment-manufacturer" },
      { labelKey: "Egypt", href: "/egypt/garment-manufacturer" },
      { labelKey: "Russia", href: "/russia/garment-manufacturer" },
      { labelKey: "Poland", href: "/poland/garment-manufacturer" },
    ],
  },
  {
    labelKey: "nav.resources",
    children: [
      { labelKey: "nav.sizeGuide", href: "/size-guide" },
      { labelKey: "nav.wholesaleFaq", href: "/wholesale-faq" },
      { labelKey: "nav.shippingLogistics", href: "/shipping" },
      { labelKey: "Knowledge Hub", href: "/knowledge" },
      { labelKey: "Sitemap", href: "/sitemap-page" },
    ],
  },
  {
    labelKey: "nav.contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const { locale, setLocale, t } = useI18n();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    router.push(`/${locale}`);
  };

  // setLocale already handles navigation via router.push in I18nProvider
  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setLangOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <LocaleLink href="/">
          <Image
            src="/images/Vedant-Fashion-logo.png"
            alt="Vedant Fashion"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </LocaleLink>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-1">
          {navItems.map((item) =>
            item.href ? (
              <LocaleLink
                key={item.labelKey}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {t(item.labelKey)}
              </LocaleLink>
            ) : (
              <div
                key={item.labelKey}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.labelKey)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">
                  {t(item.labelKey)}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.labelKey ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === item.labelKey && item.children && (
                  <div className="absolute top-full left-0 bg-card border border-border rounded shadow-lg py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <LocaleLink
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {t(child.labelKey)}
                      </LocaleLink>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            {langOpen && (
              <div className="fixed inset-0 z-40" aria-hidden="true" onClick={() => setLangOpen(false)} />
            )}
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Switch language"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors relative z-50"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{locale}</span>
            </button>
            {langOpen && (
              <div
                role="listbox"
                aria-label="Select language"
                className="absolute right-0 top-full mt-2 bg-card border border-border rounded shadow-lg py-1 min-w-[180px] z-50"
              >
                {locales.map((lang) => (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={locale === lang.code}
                    onClick={() => handleLocaleChange(lang.code as Locale)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm hover:bg-accent transition-colors ${
                      locale === lang.code ? "text-foreground font-medium bg-accent/50" : "text-muted-foreground"
                    }`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                    <span className="ml-auto text-caption">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {user ? (
            <div className="hidden md:flex items-center gap-2">
              <LocaleLink
                href="/dashboard"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                Dashboard
              </LocaleLink>
              <button
                onClick={handleSignOut}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <LocaleLink
              href="/login"
              className="hidden md:inline-flex text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              Login
            </LocaleLink>
          )}

          <LocaleLink href="/contact">
            <Button size="sm" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 uppercase text-xs tracking-widest">
              {t("nav.inquireNow")}
            </Button>
          </LocaleLink>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="xl:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="xl:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="container-wide py-4 space-y-1">
            {navItems.map((item) =>
              item.href ? (
                <LocaleLink
                  key={item.labelKey}
                  href={item.href}
                  className="block py-3 text-base font-display text-foreground border-b border-border"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(item.labelKey)}
                </LocaleLink>
              ) : (
                <div key={item.labelKey} className="border-b border-border">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.labelKey ? null : item.labelKey)}
                    className="flex items-center justify-between w-full py-3 text-base font-display text-foreground"
                  >
                    {t(item.labelKey)}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.labelKey ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === item.labelKey && item.children && (
                    <div className="pb-3 pl-4 space-y-1">
                      {item.children.map((child) => (
                        <LocaleLink
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileOpen(false)}
                        >
                          {t(child.labelKey)}
                        </LocaleLink>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
            <LocaleLink href="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-4 bg-primary text-primary-foreground uppercase text-xs tracking-widest">
                {t("nav.inquireNow")}
              </Button>
            </LocaleLink>

            {user ? (
              <div className="flex gap-2 mt-2">
                <LocaleLink
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center border border-border rounded py-2 text-sm font-medium text-foreground"
                >
                  Dashboard
                </LocaleLink>
                <button
                  onClick={() => { setMobileOpen(false); handleSignOut(); }}
                  className="flex-1 text-center border border-border rounded py-2 text-sm font-medium text-muted-foreground"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <LocaleLink
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block text-center border border-border rounded py-2 mt-2 text-sm font-medium text-foreground"
              >
                Login
              </LocaleLink>
            )}

            {/* Language switcher — mobile */}
            <div className="pt-4 border-t border-border mt-2">
              <p className="text-caption text-muted-foreground uppercase tracking-widest mb-2">Language</p>
              <div className="grid grid-cols-2 gap-1">
                {locales.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLocaleChange(lang.code as Locale)}
                    className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${
                      locale === lang.code
                        ? "bg-accent text-foreground font-medium"
                        : "text-muted-foreground hover:bg-accent/50"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
