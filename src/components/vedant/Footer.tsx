"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import NewsletterSignup from "@/components/vedant/NewsletterSignup";
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
        { label: "Knowledge Hub", href: "/knowledge" },
        { label: "Inquiry", href: "/inquiry" },
      ],
    },
    {
      title: "Export Markets",
      links: [
        { label: "UAE", href: "/uae/garment-manufacturer" },
        { label: "Saudi Arabia", href: "/saudi-arabia/garment-manufacturer" },
        { label: "Qatar", href: "/qatar/garment-manufacturer" },
        { label: "Kuwait", href: "/kuwait/garment-manufacturer" },
        { label: "Oman", href: "/oman/garment-manufacturer" },
        { label: "Russia", href: "/russia/garment-manufacturer" },
        { label: "Poland", href: "/poland/garment-manufacturer" },
      ],
    },
  ];

  const bottomLinks = [
    { label: t("footer.privacyPolicy"),  href: "/privacy-policy" },
    { label: t("footer.termsOfTrade"),   href: "/terms-of-trade" },
    { label: t("footer.cookieSettings"), href: "/cookie-policy" },
    { label: "Sitemap",                  href: "/sitemap-page" },
  ];

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-wide section-spacing-sm">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <LocaleLink href="/">
              <Image
                src="/images/Vedant-Fashion-logo.png"
                alt="Vedant Fashion"
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </LocaleLink>
            <p className="text-sm leading-relaxed opacity-70 max-w-sm">
              {t("footer.tagline")}
            </p>
            <NewsletterSignup />
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-50 shrink-0" />
                <a href="mailto:shravan900@gmail.com" className="text-sm opacity-70 hover:opacity-100">shravan900@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-50 shrink-0" />
                <a href="tel:+919930968116" className="text-sm opacity-70 hover:opacity-100">+91 99309 68116</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 opacity-50 shrink-0 mt-0.5" />
                <span className="text-sm opacity-70">Asalpha Ghatkopar, Mumbai 400084, India</span>
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
                <LocaleLink key={link.href} href={link.href} className="text-xs opacity-40 hover:opacity-70 transition-opacity">
                  {link.label}
                </LocaleLink>
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
