import type { Metadata } from "next";
import Image from "next/image";
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
    address: ["Vedant Fashion", "Building B 12, 1st Floor, Sheetal Nagar", "Asalpha Ghatkopar, Mumbai 400084", "India"],
    phone: "+91 99309 68116",
    email: "contact@vedantfashion.com",
  },
  {
    address: ["Shravan Diwan — Director", "WhatsApp / Call / Email", "Mon–Sat 9:30am–6:00pm IST", ""],
    phone: "+91 99309 68116",
    email: "contact@vedantfashion.com",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  await params;
  return {
    title: "Contact Vedant Fashion — Export Enquiries",
    description: "Contact Shravan Diwan, Director at Vedant Fashion Mumbai. Wholesale enquiries for UAE, Russia, Poland & global buyers. MOQ 100 pcs. Response within 24 hours.",
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
          {/* Founder card */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 p-6 md:p-8 bg-cream rounded-xl border border-border">
            <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-full overflow-hidden shadow-md">
              <Image
                src="/images/docs/shravan-diwan.png"
                alt="Shravan Diwan, Director — Vedant Fashion"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-foreground">Shravan Diwan</p>
              <p className="text-muted-foreground text-sm mb-3">Director, Vedant Fashion</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="tel:+919930968116" className="flex items-center gap-2 text-olive hover:underline font-medium">
                  <Phone className="w-4 h-4" /> +91 99309 68116
                </a>
                <a href="mailto:contact@vedantfashion.com" className="flex items-center gap-2 text-olive hover:underline font-medium">
                  <Mail className="w-4 h-4" /> contact@vedantfashion.com
                </a>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-20">
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
