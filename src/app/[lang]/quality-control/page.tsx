import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";
import CTASection from "@/components/vedant/CTASection";
import { CheckCircle, ShieldCheck, AlertTriangle } from "lucide-react";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Quality Control",
    description: "AQL 2.5 inspection, in-house textile lab, ISO-standard testing. Zero-defect philosophy for garment manufacturing.",
    alternates: { canonical: `https://www.vedantfashion.com/${lang}/quality-control`, ...buildHreflangAlternates("/quality-control") },
  };
}

const qcStages = [
  { stage: "Incoming Fabric Inspection", checks: ["GSM weight verification (ISO 3801)", "Shrinkage testing — wash & dry (ISO 6330)", "Colorfastness to washing (ISO 105-C06, Grade 4+ required)", "Colorfastness to rubbing — wet & dry (ISO 105-X12)", "Visual defect scanning — 4-point system", "Fibre composition analysis via FTIR spectroscopy"] },
  { stage: "Pre-Production Approval", checks: ["Counter sample vs. buyer-approved spec sheet", "Fit approval on live model across 3–5 sizes", "SPI count and seam strength verification", "Trim, button, and accessories match check", "Wash test on PP sample — 3 home washes", "Label placement, content, and EU regulation compliance"] },
  { stage: "In-Line Inspection", checks: ["Real-time defect tracking per sewing operation", "AQL 2.5 random sampling during production", "Broken needle policy — every needle accounted for", "Thread tension and stitch consistency audit", "Measurement audit every 500 pieces (12 critical points)", "Pattern matching, print alignment, and grain check"] },
  { stage: "Final Inspection (Pre-Shipment)", checks: ["AQL 2.5 inspection per ISO 2859-1 Level II", "100% measurement check on all critical points", "Metal detection / needle scanning — every piece", "Appearance, pressing, and folding to buyer standards", "Barcode scan verification and hangtag accuracy", "Carton drop test (ISTA 1A) and packing integrity check"] },
];

const testingCapabilities = [
  { test: "Dimensional Stability", method: "ISO 6330 / AATCC 135", equipment: "Wascator FOM 71", tolerance: "±3% (woven) / ±5% (knit)" },
  { test: "Colorfastness — Washing", method: "ISO 105-C06 A1S", equipment: "Gyrowash 815", tolerance: "Grade 4 minimum" },
  { test: "Colorfastness — Rubbing", method: "ISO 105-X12", equipment: "Crockmeter", tolerance: "Dry 4, Wet 3 minimum" },
  { test: "Colorfastness — Light", method: "ISO 105-B02", equipment: "Xenon Arc (Atlas)", tolerance: "Grade 4 minimum" },
  { test: "Tensile Strength", method: "ISO 13934-1 (strip)", equipment: "Instron 5969", tolerance: "≥200N warp, ≥150N weft" },
  { test: "Tear Strength", method: "ISO 13937-2 (Elmendorf)", equipment: "Elmendorf Tester", tolerance: "≥15N" },
  { test: "Pilling Resistance", method: "ISO 12945-2 (Martindale)", equipment: "Martindale Tester", tolerance: "Grade 3–4 at 2000 cycles" },
  { test: "GSM Verification", method: "ISO 3801", equipment: "GSM Cutter + Scale", tolerance: "±5% of declared" },
  { test: "Colour Matching", method: "CIE LAB ΔE measurement", equipment: "Datacolor 800", tolerance: "ΔE < 1.0 (CMC 2:1)" },
  { test: "pH Value", method: "ISO 3071", equipment: "Digital pH Meter", tolerance: "4.0–7.5 (skin contact)" },
  { test: "Formaldehyde Content", method: "ISO 14184-1", equipment: "Spectrophotometer", tolerance: "≤75 ppm (skin contact)" },
  { test: "AZO Dye Detection", method: "EU Dir. 2002/61/EC", equipment: "GC-MS", tolerance: "< 30 ppm each amine" },
];

const defectPolicy = [
  { level: "Critical Defects", desc: "Safety hazards — needles, sharp objects, harmful chemicals. Zero tolerance. 100% inspection triggered.", colour: "text-destructive" },
  { level: "Major Defects", desc: "Visible defects affecting salability — stains, holes, wrong size, mismatched patterns. AQL 2.5 applied.", colour: "text-gold" },
  { level: "Minor Defects", desc: "Slight imperfections not visible to end consumer at arm's length. AQL 4.0 applied.", colour: "text-muted-foreground" },
];

const QualityControlPage = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <WebPageSchema title="Quality Control" description="Multi-stage QC with AQL 2.5 inspection and accredited lab testing." url="/quality-control" />
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Quality Control", url: "/quality-control" }]} />
      <PageHero
        subtitle="Quality Control"
        title="Zero-Defect Manufacturing Philosophy"
        description="In-house textile lab, AQL 2.5 inspection at every stage, and full compliance with ISO 2859-1 sampling procedures. We catch defects before they leave our factory — guaranteed."
      />

      {/* QC Process */}
      <ContentBlock subtitle="Process" title="4-Stage Quality Assurance">
        <div className="space-y-8">
          {qcStages.map((s, i) => (
            <div key={s.stage} className="border border-border rounded p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded bg-gold/20 flex items-center justify-center font-display font-semibold text-gold text-sm">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">{s.stage}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {s.checks.map((check) => (
                  <div key={check} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                    <span className="text-body-sm text-muted-foreground">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* Defect Classification */}
      <ContentBlock subtitle="Standards" title="Defect Classification Policy" bg="cream">
        <div className="max-w-2xl mx-auto space-y-4">
          {defectPolicy.map((d) => (
            <div key={d.level} className="bg-card border border-border rounded p-6 flex gap-4 items-start">
              <AlertTriangle className={`w-5 h-5 shrink-0 mt-0.5 ${d.colour}`} />
              <div>
                <h4 className="font-display font-medium text-foreground">{d.level}</h4>
                <p className="text-body-sm text-muted-foreground mt-1">{d.desc}</p>
              </div>
            </div>
          ))}
          <p className="text-caption text-center pt-2">
            Inspection level adjustable to buyer requirements. Tightened inspection (Level III) available on request.
          </p>
        </div>
      </ContentBlock>

      {/* Lab */}
      <ContentBlock subtitle="Testing Lab" title="In-House Textile Laboratory">
        <div className="border border-border rounded overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 font-display font-semibold text-foreground">Test</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground">Method / Standard</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground hidden md:table-cell">Equipment</th>
                  <th className="text-left p-4 font-display font-semibold text-foreground hidden lg:table-cell">Tolerance</th>
                </tr>
              </thead>
              <tbody>
                {testingCapabilities.map((t) => (
                  <tr key={t.test} className="border-t border-border">
                    <td className="p-4 font-medium text-foreground">{t.test}</td>
                    <td className="p-4 text-muted-foreground">{t.method}</td>
                    <td className="p-4 text-muted-foreground hidden md:table-cell">{t.equipment}</td>
                    <td className="p-4 text-muted-foreground hidden lg:table-cell">{t.tolerance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-caption text-center mt-4">
          Third-party testing via SGS, Bureau Veritas, and Intertek available for buyer-nominated standards. Reports in English or German.
        </p>
      </ContentBlock>

      {/* Buyer QC */}
      <ContentBlock subtitle="For Buyers" title="Your Quality, Our Priority" bg="dark">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "On-Site Inspections", desc: "Your QC team is welcome at any stage. We provide workspace, internet, and logistical support. Pre-shipment inspection slots reserved 5 days in advance." },
            { icon: ShieldCheck, title: "Third-Party Audits", desc: "We coordinate with SGS, Bureau Veritas, Intertek, and TÜV on your behalf. Inspection costs billed transparently. Results shared within 24 hours." },
            { icon: ShieldCheck, title: "Digital QC Reports", desc: "Real-time inspection photos, measurement reports, and AQL results shared via email or your PLM system. Full traceability from fabric lot to packed carton." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-primary-foreground/10 rounded p-6 space-y-3">
              <Icon className="w-5 h-5 text-primary-foreground/70" />
              <h3 className="font-display text-lg font-medium">{title}</h3>
              <p className="text-sm text-primary-foreground/70">{desc}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      <CTASection variant="dark" title="Want a Quality Audit?" description="We welcome buyer QC teams and third-party auditors. Schedule a visit or request our latest inspection reports and test certificates." buttonText="Schedule Audit" />
    </div>
  );
};

export default QualityControlPage;
