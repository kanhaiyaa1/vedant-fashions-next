"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import LocaleLink from "@/i18n/LocaleLink";

const Footer = () => {
  const { t } = useI18n();

  const footerNav = [
    {
      title: t("footer.company"),
      links: [
        { label: t("nav.about"), href: "/about" },
        { label: t("nav.manufacturing"), href: "/manufacturing" },
        { label: t("nav.sustainability"), href: "/sustainability" },
        { label: t("nav.certifications"), href: "/certifications" },
        { label: t("nav.qualityControl"), href: "/quality-control" },
      ],
    },
    {
      title: t("footer.products"),
      links: [
        { label: t("nav.wovenBlouses"), href: "/products/woven-blouses" },
        { label: t("nav.cottonDresses"), href: "/products/cotton-dresses" },
        { label: t("nav.linenShirts"), href: "/products/linen-shirts" },
        { label: t("nav.resortWear"), href: "/products/resort-wear" },
        { label: t("nav.catalog"), href: "/catalog" },
      ],
    },
    {
      title: t("footer.services"),
      links: [
        { label: t("nav.privateLabel"), href: "/private-label" },
        { label: t("nav.oemProduction"), href: "/oem" },
        { label: t("nav.fabricSourcing"), href: "/fabric-sourcing" },
        { label: t("nav.sizeGuide"), href: "/size-guide" },
        { label: t("nav.wholesaleFaq"), href: "/wholesale-faq" },
        { label: t("nav.shippingLogistics"), href: "/shipping" },
      ],
    },
  ];

  const bottomLinks = [
    t("footer.privacyPolicy"),
    t("footer.termsOfTrade"),
    t("footer.cookieSettings"),
    t("footer.imprint"),
  ];

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-wide section-spacing-sm">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <LocaleLink href="/" className="font-display text-2xl font-semibold inline-block">
              Vedant<span className="font-light opacity-60 ml-1">Fashion</span>
            </LocaleLink>
            <p className="text-sm leading-relaxed opacity-70 max-w-sm">
              {t("footer.tagline")}
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-50 shrink-0" />
                <a href="mailto:export@vedantfashion.com" className="text-sm opacity-70 hover:opacity-100">export@vedantfashion.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-50 shrink-0" />
                <a href="tel:+494032101234" className="text-sm opacity-70 hover:opacity-100">+49 40 3210 1234 (EU)</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 opacity-50 shrink-0 mt-0.5" />
                <span className="text-sm opacity-70">Hamburg, Germany · Ahmedabad, India</span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="text-xs uppercase tracking-[0.15em] font-medium opacity-50">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <LocaleLink href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                      {link.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-xs opacity-40">
              {t("footer.copyright", { year: String(new Date().getFullYear()) })}
            </p>
            <div className="flex items-center gap-6">
              {bottomLinks.map((link) => (
                <a key={link} href="#" className="text-xs opacity-40 hover:opacity-70 transition-opacity">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="pt-6 border-t border-primary-foreground/10">
            <p className="text-xs opacity-40">
              Designed and Developed By:{" "}
              <a href="https://www.kanhaiyasuthar.com/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity underline">
                TechSpeeX
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
