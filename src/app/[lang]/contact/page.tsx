import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import CTASection from "@/components/vedant/CTASection";
import InquiryForm from "@/components/vedant/InquiryForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { getContent } from "@/data/translations/page-content";
import { contactContent } from "@/data/translations/contact";

// Non-translatable contact data (addresses, phones, emails)
const OFFICE_DETAILS = [
  {
    address: ["Vedant Fashion Pvt. Ltd.", "Survey No. 147, GIDC Industrial Estate", "Phase III, Vatva", "Ahmedabad 382445, Gujarat, India"],
    phone: "+91 79 2583 1234",
    email: "export@vedantfashion.com",
  },
  {
    address: ["Vedant Fashion — Middle East", "Business Bay", "Dubai", "UAE"],
    phone: "+971 4 000 0000",
    email: "uae@vedantfashion.com",
  },
  {
    address: ["Vedant Fashion Russia", "Presnenskaya Naberezhnaya 12", "Moscow 123112", "Russia"],
    phone: "+7 495 123 4567",
    email: "russia@vedantfashion.com",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  await params;
  return {
    title: "Contact Vedant Fashion — Export Enquiries",
    description: "Contact Vedant Fashion export team — Gujarat, India. Wholesale enquiries for UAE, Saudi Arabia, Russia & global buyers. Response within 24 hours.",
    alternates: buildHreflangAlternates("/contact"),
  };
}

const ContactPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const c = getContent(contactContent, lang);

  return (
    <div className="min-h-screen bg-background font-body">
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: c.breadcrumb.home, url: "/" }, { name: c.breadcrumb.contact, url: "/contact" }]} />
      <PageHero
        subtitle={c.hero.subtitle}
        title={c.hero.title}
        description={c.hero.description}
      />

      {/* Contact Cards */}
      <section className="section-spacing bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {OFFICE_DETAILS.map((office, i) => {
              const translated = c.offices[i];
              return (
                <div key={i} className="border border-border rounded p-6 md:p-8 space-y-4 hover:shadow-md transition-shadow">
                  <h3 className="font-display text-lg font-medium text-foreground">{translated.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />
                      <div className="text-body-sm text-muted-foreground">
                        {office.address.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-body-sm text-muted-foreground hover:text-foreground transition-colors">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                      <span className="text-body-sm text-muted-foreground">{translated.hours}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <InquiryForm />

      <CTASection
        variant="dark"
        title={c.cta.title}
        description={c.cta.description}
        buttonText={c.cta.buttonText}
      />
    </div>
  );
};

export default ContactPage;
