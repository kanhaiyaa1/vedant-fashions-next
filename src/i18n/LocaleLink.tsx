"use client";

import Link, { type LinkProps } from "next/link";
import { useI18n } from "./I18nProvider";
import { buildLocalizedPath } from "@/lib/routes";

/**
 * Locale-aware Link component.
 * Automatically converts English paths to localized paths based on current locale.
 *
 * Usage: <LocaleLink href="/about">About</LocaleLink>
 * In German: renders href="/de/ueber-uns"
 * In English: renders href="/en/about"
 */
const LocaleLink = ({
  href,
  children,
  ...props
}: LinkProps & { children?: React.ReactNode; className?: string }) => {
  const { locale } = useI18n();

  const localizedHref =
    typeof href === "string" ? buildLocalizedPath(href, locale) : href;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
};

export default LocaleLink;
