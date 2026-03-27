"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    activeClassName?: string;
    children?: React.ReactNode;
  };

/**
 * Next.js equivalent of React Router's NavLink.
 * Applies activeClassName when the current pathname matches href.
 */
const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className, activeClassName, children, ...props }, ref) => {
    const pathname = usePathname();
    const hrefStr = typeof href === "string" ? href : String(href);
    const isActive =
      pathname === hrefStr || (hrefStr !== "/" && pathname.startsWith(hrefStr));

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
