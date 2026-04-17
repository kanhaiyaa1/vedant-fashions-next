import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vedant Fashion Global | Sustainable Garment Manufacturer",
    template: "%s | Vedant Fashion Global",
  },
  description:
    "Premium sustainable garment manufacturer and exporter from India. Specializing in woven blouses, cotton dresses, linen shirts, and resort wear for global wholesale buyers.",
  metadataBase: new URL("https://www.vedantfashion.com"),
  openGraph: {
    type: "website",
    siteName: "Vedant Fashion Global",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Vedant Fashion Global — Sustainable Garment Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vedantfashion",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vedant Fashion",
  url: "https://www.vedantfashion.com",
  description:
    "B2B manufacturer and exporter of ladies woven wear — blouses, tops, dresses. 25,000 pieces/month. Exporting to Middle East, Russia, and Europe.",
  foundingDate: "2015",
  areaServed: [
    "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain",
    "Egypt", "Russia", "Poland", "France", "Italy", "Netherlands",
  ],
  availableLanguage: ["Arabic", "English", "Russian", "Polish", "French", "Italian", "Dutch"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Gujarat",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["Arabic", "English", "Russian"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "en";

  return (
    <html lang={locale} suppressHydrationWarning className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
