import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import CookieConsent from "@/components/vedant/CookieConsent";
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
  icons: {
    icon: "/images/Vedant-Fashion-Favicon.png",
    shortcut: "/images/Vedant-Fashion-Favicon.png",
    apple: "/images/Vedant-Fashion-Favicon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vedant Fashion",
  url: "https://www.vedantfashion.com",
  description:
    "B2B manufacturer and exporter of ladies woven wear — blouses, tops, dresses, co-ord sets, kurtis. MOQ 100 pcs. FOB USD 5–8. Exporting to UAE, Russia, Poland, and South Africa.",
  foundingDate: "2024",
  areaServed: [
    "UAE", "Russia", "Poland", "South Africa",
  ],
  availableLanguage: ["Arabic", "English", "Russian", "Polish", "French", "Italian", "Dutch"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Maharashtra",
  },
  founder: { "@type": "Person", name: "Shravan Diwan", jobTitle: "Director" },
  numberOfEmployees: 15,
  telephone: "+919930968116",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "export enquiries",
    telephone: "+919930968116",
    name: "Shravan Diwan",
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
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('consent', 'default', {
                  'analytics_storage': 'denied'
                });
                gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
