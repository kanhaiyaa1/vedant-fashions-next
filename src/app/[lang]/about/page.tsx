import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { Shield, Users, Globe, Award, Factory, Truck } from "lucide-react";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  await params;
  return {
    title: "About Vedant Fashion",
    description: "Ladies woven wear manufacturer India — exporting to UAE, Saudi Arabia, Russia & global markets since 2015. GOTS & OEKO-TEX certified. MOQ 300 pcs.",
    alternates: buildHreflangAlternates("/about"),
  };
}

const milestones = [
  { year: "1998", text: "Founded in Ahmedabad as a cotton textile unit" },
  { year: "2004", text: "First European export order — 20,000 pieces to Germany" },
  { year: "2010", text: "GOTS & OEKO-TEX certifications acquired" },
  { year: "2015", text: "Expanded to 4 manufacturing units, 800+ workers" },
  { year: "2019", text: "Opened Hamburg liaison office for EU buyers" },
  { year: "2023", text: "Achieved 15M+ garments annually, serving 27 countries" },
  { year: "2025", text: "Launched sustainable resort wear line for Mediterranean markets" },
];

const values = [
  { icon: Shield, title: "Quality First", desc: "AQL 2.5 inspection at every stage. Zero-defect philosophy from fabric to finished garment." },
  { icon: Users, title: "Fair Labor", desc: "SEDEX/SMETA audited. Living wages, safe conditions, no child labor. SA8000 aligned." },
  { icon: Globe, title: "Global Reach", desc: "Dedicated export teams for DACH, France, Benelux, Scandinavia, Italy, Iberia, and Eastern Europe." },
  { icon: Award, title: "Certified Excellence", desc: "GOTS, OEKO-TEX 100, GRS, ISO 9001:2015, BSCI, and REACH compliant." },
  { icon: Factory, title: "Vertical Integration", desc: "In-house fabric sourcing, cutting, stitching, finishing, and packaging — complete garment manufacturing." },
  { icon: Truck, title: "Reliable Logistics", desc: "FOB, CIF, DDP terms. EU warehouse in Hamburg for 5-day delivery across Europe." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <WebPageSchema title="About Vedant Fashion" description="Three decades of textile excellence — from Ahmedabad to Europe." url="/about" type="AboutPage" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />
      <PageHero
        subtitle="Our Story"
        title="Three Decades of Textile Excellence"
        description="From a single cotton unit in Ahmedabad to a vertically integrated garment manufacturer serving 200+ European brands. Vedant Fashion combines Indian craftsmanship with European quality standards."
      />

      {/* Mission */}
      <ContentBlock subtitle="Our Mission" title="Bridging Indian Craftsmanship & European Standards">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-body-lg text-muted-foreground">
              Vedant Fashion was founded with a singular vision: to make India's finest textile craftsmanship 
              accessible to European fashion brands at scale, without compromising on sustainability or ethics.
            </p>
            <p className="text-body text-muted-foreground">
              Today, we operate four state-of-the-art manufacturing facilities across Gujarat, employing 
              over 800 skilled workers. Our vertically integrated model — from fiber sourcing to finished 
              garment — gives us unmatched control over quality, lead times, and cost efficiency.
            </p>
            <p className="text-body text-muted-foreground">
              We specialize in woven blouses, cotton dresses, linen shirts, and resort wear for mid-to-premium 
              European labels. Every piece is produced under GOTS, OEKO-TEX, and GRS certifications, meeting 
              the stringent sustainability requirements of today's conscious consumer.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gradient-to-br from-primary/8 via-accent to-secondary rounded flex items-center justify-center">
            <div className="text-center p-8">
              <p className="font-display text-5xl font-semibold text-primary/30">VF</p>
              <p className="text-caption mt-2">Manufacturing Excellence Since 1998</p>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* Values */}
      <ContentBlock subtitle="Our Values" title="What Drives Us" bg="cream">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-olive" />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
              <p className="text-body-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Timeline */}
      <ContentBlock subtitle="Milestones" title="Our Journey">
        <div className="max-w-2xl mx-auto">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex gap-6 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gold shrink-0" />
                {i < milestones.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-2">
                <p className="font-display text-lg font-semibold text-foreground">{m.year}</p>
                <p className="text-body text-muted-foreground">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Team stats */}
      <ContentBlock subtitle="By The Numbers" title="Scale & Capability" bg="cream">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "800+", label: "Skilled Workers" },
            { num: "4", label: "Manufacturing Units" },
            { num: "15M+", label: "Garments Per Year" },
            { num: "27", label: "Countries Served" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-semibold text-charcoal">{s.num}</p>
              <p className="text-caption mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" />
    </div>
  );
};

export default AboutPage;
