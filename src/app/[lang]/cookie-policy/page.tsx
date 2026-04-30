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
    title: "Cookie Policy | Vedant Fashion",
    description: "How and why Vedant Fashion uses cookies on this website.",
    alternates: buildHreflangAlternates("/cookie-policy"),
  };
}

export default async function CookiePolicyPage({
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
        title="Cookie Policy"
        description="How and why Vedant Fashion uses cookies on this website."
      />

      <ContentBlock bg="default">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-700">

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. What Are Cookies</h2>
            <p className="mb-3">Cookies are small text files stored on your device when you visit a website.</p>
            <p>They help websites remember your preferences and understand how you use the site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Cookie Name</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Type</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Purpose</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Duration</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Can Opt Out?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["supabase-auth-token", "Necessary", "Keeps you logged in to your buyer account", "Session", "No — required for login"],
                    ["sb-access-token", "Necessary", "Authentication token for secure API access", "1 hour", "No — required for login"],
                    ["sb-refresh-token", "Necessary", "Renews your login session automatically", "1 year", "No — required for login"],
                    ["cookie-consent", "Necessary", "Remembers your cookie consent choice", "1 year", "No — required for compliance"],
                    ["_ga", "Analytics", "Google Analytics — counts visitors and page views", "2 years", "Yes — decline analytics cookies"],
                    ["_ga_XXXXX", "Analytics", "Google Analytics session tracking", "2 years", "Yes — decline analytics cookies"],
                    ["__vercel_live_token", "Technical", "Vercel deployment preview (development only)", "Session", "No — not present on live site"],
                  ].map(([name, type, purpose, duration, optOut], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-mono text-xs text-gray-700">{name}</td>
                      <td className="p-3 border border-gray-200">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                          type === "Necessary" ? "bg-green-100 text-green-700" :
                          type === "Analytics" ? "bg-blue-100 text-blue-700" :
                          "bg-gray-100 text-gray-600"
                        }`}>
                          {type}
                        </span>
                      </td>
                      <td className="p-3 border border-gray-200">{purpose}</td>
                      <td className="p-3 border border-gray-200 whitespace-nowrap">{duration}</td>
                      <td className="p-3 border border-gray-200 text-sm">{optOut}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. What We Do NOT Use</h2>
            <ul className="space-y-2 list-disc list-inside mb-4">
              <li>No advertising or retargeting cookies</li>
              <li>No Facebook Pixel</li>
              <li>No Google Ads tracking</li>
              <li>No third-party social media tracking</li>
              <li>No cookies that track you across other websites</li>
            </ul>
            <p className="text-sm text-gray-600 italic">We are a B2B manufacturer — we do not run consumer advertising.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Services</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Service</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Purpose</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-800">Their Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Supabase", "User authentication and data storage", "supabase.com/privacy"],
                    ["Google Analytics", "Website traffic analysis", "policies.google.com/privacy"],
                    ["Vercel", "Website hosting and performance", "vercel.com/legal/privacy-policy"],
                    ["Resend", "Email delivery", "resend.com/privacy"],
                  ].map(([service, purpose, policy], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-800">{service}</td>
                      <td className="p-3 border border-gray-200">{purpose}</td>
                      <td className="p-3 border border-gray-200 font-mono text-xs text-gray-600">{policy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Cookie Choices</h2>
            <ul className="space-y-2 list-disc list-inside mb-4">
              <li>Use our cookie consent banner to accept or decline analytics cookies</li>
              <li>Change your choice anytime: click "Cookie Settings" in the footer</li>
              <li>Necessary cookies cannot be disabled — they are required for the website to function</li>
              <li>Browser settings: you can block or delete cookies in your browser settings</li>
            </ul>
            <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-1">
              <p className="font-medium text-gray-800 mb-2">How to manage cookies in your browser:</p>
              <p><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</p>
              <p><strong>Firefox:</strong> Settings → Privacy and Security → Cookies and Site Data</p>
              <p><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Contact</h2>
            <p>Questions about cookies: <a href="mailto:contact@vedantfashion.com" className="text-olive hover:underline">contact@vedantfashion.com</a></p>
          </section>

        </div>
      </ContentBlock>
    </>
  );
}
