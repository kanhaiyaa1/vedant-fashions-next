import type { Metadata } from "next";
import buildHreflangAlternates from "@/i18n/HreflangTags";
import PageHero from "@/components/vedant/PageHero";
import ContentBlock from "@/components/vedant/ContentBlock";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: "Terms of Trade | Vedant Fashion",
    description: "Standard terms governing wholesale orders, payment, production, shipping, and quality for all Vedant Fashion buyers.",
    alternates: buildHreflangAlternates("/terms-of-trade"),
  };
}

export default async function TermsOfTradePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  void lang;

  return (
    <>
      <PageHero
        subtitle="Legal"
        title="Terms of Trade"
        description="Standard terms governing wholesale orders, payment, production, shipping, and quality for all Vedant Fashion buyers."
      />

      <ContentBlock bg="default">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-700">

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Application of Terms</h2>
            <p className="mb-2">These terms apply to all wholesale buyers placing orders with Vedant Fashion.</p>
            <p className="mb-2">These are B2B commercial terms. Vedant Fashion does not sell to retail consumers.</p>
            <p>By placing an order you agree to these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Quotations &amp; Pricing</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>All prices quoted FOB Mumbai (Nhava Sheva / JNPT)</li>
              <li>Prices in USD or EUR</li>
              <li>Quotations valid for 30 days from issue date</li>
              <li>Final price confirmed on signed purchase order</li>
              <li>Prices subject to change if raw material costs change significantly before order confirmation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Minimum Order Quantity</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Standard MOQ: 100 pieces per design per colour</li>
              <li>Mixed colours within same design: 100 pieces per colour minimum</li>
              <li>No minimum on number of styles per purchase order</li>
              <li>Lower MOQ available on first trial orders — contact us to discuss</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Order Confirmation &amp; Payment</h2>
            <p className="mb-3 font-medium text-gray-800">Orders confirmed only upon:</p>
            <ul className="space-y-1 list-disc list-inside mb-4">
              <li>Written purchase order (PO) received</li>
              <li>Payment or LC received as per agreed terms</li>
            </ul>
            <p className="mb-3 font-medium text-gray-800">Payment options:</p>
            <ul className="space-y-2 list-disc list-inside mb-4">
              <li><strong>LC at sight (60-day):</strong> irrevocable Letter of Credit via SWIFT</li>
              <li><strong>TT:</strong> 30% advance before production, 70% before shipment</li>
              <li><strong>Full advance TT:</strong> 100% before production — qualifies for 2% discount</li>
            </ul>
            <p className="mb-1">Accepted currencies: USD, EUR</p>
            <p>Bank: Union Bank of India</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Samples</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Sample lead time: 2 weeks (10–14 working days)</li>
              <li>Sample charges: USD 30–80 per style depending on complexity</li>
              <li>Sample courier costs billed separately at cost (DHL/FedEx)</li>
              <li>100% of sample charges credited against bulk order invoice if PO placed within 90 days</li>
              <li>Buyer must approve sample before bulk production begins</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Production &amp; Lead Times</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Bulk production lead time: 60–90 days from order confirmation and fabric receipt</li>
              <li>Production begins only after sample approval and payment received</li>
              <li>Weekly production updates provided to buyer</li>
              <li>Delays caused by buyer (late approvals, late payments) not counted in lead time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Shipping</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>All shipments on FOB Mumbai/JNPT basis (Incoterms 2020)</li>
              <li>Buyer arranges and pays freight forwarder</li>
              <li>Risk and title transfer to buyer at port of loading</li>
              <li>Documents provided: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin</li>
              <li>Airway Bill provided for air shipments</li>
              <li>Packaging as per buyer specifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Quality &amp; Claims</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>All garments produced per approved sample and buyer specifications</li>
              <li>10-step quality control process applied to every order</li>
              <li>Claims must be raised within 14 days of delivery receipt</li>
              <li>Claims require photographic/video evidence of defective units</li>
              <li>Claims not accepted on goods that have been washed, worn, or altered</li>
              <li>Resolution: replacement production, credit note, or negotiated refund</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">9. Cancellations</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Orders cannot be cancelled after production has commenced</li>
              <li>If cancelled after fabric purchase: fabric cost charged to buyer</li>
              <li>If cancelled mid-production: fabric + production cost charged</li>
              <li>Cancellation requests must be in writing to <a href="mailto:contact@vedantfashion.com" className="text-olive hover:underline">contact@vedantfashion.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">10. Private Label &amp; Intellectual Property</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Client supplies their own brand labels, hang-tags, and packaging specifications</li>
              <li>NDA available on request before design files are shared</li>
              <li>Client retains ownership of their designs and artwork</li>
              <li>Vedant Fashion retains ownership of its own patterns and designs</li>
              <li>Client designs are kept confidential and not shared with other buyers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">11. Limitation of Liability</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Vedant Fashion maximum liability limited to the value of the specific order in dispute</li>
              <li>No liability for indirect, consequential, or loss of profit claims</li>
              <li>Force majeure: no liability for delays caused by events beyond reasonable control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">12. Governing Law &amp; Disputes</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>These terms governed by laws of India</li>
              <li>Jurisdiction: courts of Mumbai, Maharashtra</li>
              <li>Disputes first resolved by amicable negotiation</li>
              <li>If unresolved: arbitration under Indian Arbitration and Conciliation Act 1996</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">13. Contact</h2>
            <p className="leading-relaxed">
              <strong>Shravan Diwan, Director</strong><br />
              Vedant Fashion, Building B 12, Asalpha Ghatkopar, Mumbai 400084<br />
              <a href="mailto:contact@vedantfashion.com" className="text-olive hover:underline">contact@vedantfashion.com</a> | +91 99309 68116
            </p>
          </section>

        </div>
      </ContentBlock>
    </>
  );
}
