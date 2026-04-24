"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, MessageSquare, Users, Package, ShoppingBag, Download, Newspaper, Settings } from "lucide-react";

const navLinks = [
  { label: "Dashboard", icon: LayoutDashboard, path: "admin" },
  { label: "Enquiries", icon: MessageSquare, path: "admin/enquiries" },
  { label: "Buyers", icon: Users, path: "admin/buyers" },
  { label: "Sample Requests", icon: Package, path: "admin/samples" },
  { label: "Products", icon: ShoppingBag, path: "admin/products" },
  { label: "Downloads", icon: Download, path: "admin/downloads" },
  { label: "Newsletter", icon: Newspaper, path: "admin/newsletter" },
  { label: "Settings", icon: Settings, path: "admin/settings" },
];

interface AdminNavProps {
  lang: string;
  email: string;
}

export default function AdminNav({ lang, email }: AdminNavProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar logo */}
      <div className="p-6 border-b border-gray-700">
        <Image
          src="/images/Vedant-Fashion-logo.png"
          alt="Vedant Fashion"
          width={120}
          height={36}
          className="h-8 w-auto object-contain brightness-0 invert"
        />
        <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Admin Panel</p>
      </div>

      {/* Nav links */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {navLinks.map(({ label, icon: Icon, path }) => {
          const href = `/${lang}/${path}`;
          const isActive =
            path === "admin"
              ? pathname === `/${lang}/admin`
              : pathname.startsWith(`/${lang}/${path}`);
          return (
            <Link
              key={path}
              href={href}
              className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                isActive
                  ? "bg-gray-700 text-white font-medium"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom user info */}
      <div className="p-4 border-t border-gray-700 space-y-2">
        <p className="text-xs text-gray-400 truncate">{email}</p>
        <form action="/api/auth/signout" method="post">
          <button
            type="submit"
            className="w-full text-left text-xs text-gray-400 hover:text-white transition-colors"
          >
            Sign Out
          </button>
        </form>
      </div>
    </>
  );
}
