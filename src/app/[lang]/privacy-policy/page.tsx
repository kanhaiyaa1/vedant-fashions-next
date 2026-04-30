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
    title: "Privacy Policy | Vedant Fashion",
    description: "How Vedant Fashion collects, uses, and protects your personal data.",
    alternates: buildHreflangAlternates("/privacy-policy"),
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <PageHero
        subtitle="Legal"
        title="Privacy Policy"
        description="How Vedant Fashion collects, uses, and protects your personal data."
      />

      <ContentBlock bg="default">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-700">

          {/* 1. Who We Are */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Who We Are</h2>
            <p className="mb-3">
              <strong>Vedant Fashion</strong><br />
              Building B 12, 1st Floor, Sheetal Nagar, Asalpha Ghatkopar, Mumbai 400084, India.<br />
              Email: <a href="mailto:contact@vedantfashion.com" className="text-olive hover:underline">contact@vedantfashion.com</a> | Phone: +91 99309 68116
            </p>
            <p>This policy applies to <strong>vedantfashion.com</strong> and all related services operated by Vedant Fashion.</p>
          </section>

          {/* 2. What Data We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What Data We Collect</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Data Type</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">What We Collect</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">When</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Enquiry Data", "Name, company, email, phone, country, product interest, message", "When you submit an enquiry form"],
                    ["Account Data", "Name, company, email, password (hashed), country, phone", "When you create a buyer account"],
                    ["Catalogue Download", "Name, company, email, country, phone", "When you download our catalogue"],
                    ["Newsletter", "Email, name, company, country", "When you subscribe to updates"],
                    ["Usage Data", "Pages visited, time on site, browser type, country", "Automatically via analytics"],
                  ].map(([type, what, when], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-800 whitespace-nowrap">{type}</td>
                      <td className="p-3 border border-gray-200">{what}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Why We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Why We Collect Your Data</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>To respond to your wholesale enquiries within 24 business hours</li>
              <li>To send product catalogues and pricing information</li>
              <li>To manage your buyer account and order history</li>
              <li>To send transactional emails (enquiry confirmations, sample updates)</li>
              <li>To send newsletters and product updates (only with your consent)</li>
              <li>To improve our website based on usage patterns</li>
              <li>To comply with export documentation requirements</li>
            </ul>
          </section>

          {/* 4. Who Can See Your Data */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Who Can See Your Data</h2>
            <p className="mb-4">We share data only with these service providers:</p>
            <ul className="space-y-2 list-disc list-inside mb-4">
              <li><strong>Resend</strong> (resend.com) — email delivery, servers in USA</li>
              <li><strong>Supabase</strong> (supabase.com) — database hosting, servers in Singapore</li>
              <li><strong>Vercel</strong> (vercel.com) — website hosting, global CDN</li>
              <li><strong>Google Analytics</strong> — website analytics (only if you consent to analytics cookies)</li>
            </ul>
            <p className="font-medium text-gray-800">We never sell your data. We never share with advertisers.</p>
          </section>

          {/* 5. Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. How Long We Keep Your Data</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Data Type</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Enquiries", "3 years from submission"],
                    ["Buyer accounts", "Until you delete your account"],
                    ["Newsletter subscriptions", "Until you unsubscribe"],
                    ["Catalogue downloads", "2 years"],
                    ["Usage/analytics data", "14 months (Google Analytics default)"],
                  ].map(([type, period], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-800">{type}</td>
                      <td className="p-3 border border-gray-200">{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights (GDPR)</h2>
            <p className="mb-4">If you are based in the European Union, UAE, or any region with data protection laws, you have these rights:</p>
            <ul className="space-y-2 list-disc list-inside mb-4">
              <li><strong>Access:</strong> request a copy of your data</li>
              <li><strong>Correction:</strong> update incorrect data</li>
              <li><strong>Deletion:</strong> request deletion of your data</li>
              <li><strong>Objection:</strong> opt out of marketing emails</li>
              <li><strong>Portability:</strong> receive your data in a portable format</li>
            </ul>
            <p className="mb-2">To exercise any right: email <a href="mailto:contact@vedantfashion.com" className="text-olive hover:underline">contact@vedantfashion.com</a> with subject <strong>"Data Request"</strong></p>
            <p>We respond within 30 days.</p>
          </section>

          {/* 7. International Transfers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Data Transfers</h2>
            <p className="mb-3">Your data may be stored on servers in the <strong>USA</strong> (Supabase, Resend, Vercel) and <strong>Singapore</strong> (Supabase).</p>
            <p className="mb-3">These transfers are covered by standard contractual clauses and appropriate safeguards.</p>
            <p>By using our website you acknowledge this transfer.</p>
          </section>

          {/* 8. Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies</h2>
            <p>We use cookies as described in our <a href={`/${lang}/cookie-policy`} className="text-olive hover:underline">Cookie Policy</a>.</p>
          </section>

          {/* 9. Policy Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Policy Updates</h2>
            <p className="mb-3">We may update this policy. Significant changes will be notified by email.</p>
            <p className="text-sm text-gray-500">Last updated: April 2025.</p>
          </section>

        </div>
      </ContentBlock>
    </>
  );
}
