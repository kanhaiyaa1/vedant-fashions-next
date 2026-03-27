"use client";

import { useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";
import { locales } from "@/i18n/types";
import type { Locale } from "@/i18n/types";
import LocaleLink from "@/i18n/LocaleLink";

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
    labelKey: "nav.resources",
    children: [
      { labelKey: "nav.sizeGuide", href: "/size-guide" },
      { labelKey: "nav.wholesaleFaq", href: "/wholesale-faq" },
      { labelKey: "nav.shippingLogistics", href: "/shipping" },
    ],
  },
  {
    labelKey: "nav.contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const { locale, setLocale, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // setLocale already handles navigation via router.push in I18nProvider
  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <LocaleLink href="/" className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground shrink-0">
          Vedant<span className="font-light text-muted-foreground ml-1">Fashion</span>
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
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{locale}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded shadow-lg py-1 min-w-[180px] z-50">
                {locales.map((lang) => (
                  <button
                    key={lang.code}
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

          <LocaleLink href="/contact">
            <Button size="sm" className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 uppercase text-xs tracking-widest">
              {t("nav.inquireNow")}
            </Button>
          </LocaleLink>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden p-2 text-foreground">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
