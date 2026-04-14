import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import CTASection from "@/components/vedant/CTASection";
import InquiryForm from "@/components/vedant/InquiryForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  await params;
  return {
    title: "Contact Vedant Fashion — Export Enquiries",
    description: "Contact Vedant Fashion export team — Gujarat, India. Wholesale enquiries for UAE, Saudi Arabia, Russia & global buyers. Response within 24 hours.",
    alternates: buildHreflangAlternates("/contact"),
  };
}

const offices = [
  {
    name: "India — Head Office & Factory",
    address: ["Vedant Fashion Pvt. Ltd.", "Survey No. 147, GIDC Industrial Estate", "Phase III, Vatva", "Ahmedabad 382445, Gujarat, India"],
    phone: "+91 79 2583 1234",
    email: "export@vedantfashion.com",
    hours: "Mon–Sat: 9:30–18:30 IST",
  },
  {
    name: "Germany — European Office",
    address: ["Vedant Fashion Europe GmbH", "Bleichenbrücke 10", "20354 Hamburg", "Germany"],
    phone: "+49 40 3210 1234",
    email: "europe@vedantfashion.com",
    hours: "Mon–Fri: 9:00–18:00 CET",
  },
  {
    name: "Russia — Moscow Representative",
    address: ["Vedant Fashion Russia", "Presnenskaya Naberezhnaya 12", "Moscow 123112", "Russia"],
    phone: "+7 495 123 4567",
    email: "russia@vedantfashion.com",
    hours: "Mon–Fri: 10:00–19:00 MSK",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />
      <PageHero
        subtitle="Contact"
        title="Let's Start a Conversation"
        description="Whether you're a boutique buyer or a major retail chain, our export team is ready to discuss your requirements. Samples dispatched within 3 business days."
      />

      {/* Contact Cards */}
      <section className="section-spacing bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {offices.map((office) => (
              <div key={office.name} className="border border-border rounded p-6 md:p-8 space-y-4 hover:shadow-md transition-shadow">
                <h3 className="font-display text-lg font-medium text-foreground">{office.name}</h3>
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
                    <span className="text-body-sm text-muted-foreground">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <InquiryForm />

      <CTASection
        variant="dark"
        title="Trade Shows 2026"
        description="Meet us at Texworld Paris (Feb), Munich Fabric Start (Mar), and Première Vision Paris (Sep). Schedule a meeting in advance."
        buttonText="Book a Meeting"
      />
    </div>
  );
};

export default ContactPage;
