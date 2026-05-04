import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 })
  }

  const authHeader = req.headers.get("Authorization")
  if (!authHeader?.startsWith("Bearer ")) {
    return new Response("Unauthorized", { status: 401 })
  }

  const { buyerEmail, buyerName, buyerCompany, buyerCountry, step, sequenceId } = await req.json()

  if (!buyerEmail || !step) {
    return new Response("Missing required fields", { status: 400 })
  }

  const baseUrl = "https://vedantfashion.com"
  let subject = ""
  let html = ""

  if (step === 1) {
    subject = `Welcome to Vedant Fashion, ${buyerCompany || buyerName} 🎉`
    html = buildWelcomeEmail(buyerName, buyerCompany, buyerCountry, baseUrl)
  } else if (step === 2) {
    subject = "Have you seen our latest collection? — Vedant Fashion"
    html = buildDay2Email(buyerName, buyerCompany, baseUrl)
  } else if (step === 3) {
    subject = "Your wholesale catalogue is ready — Vedant Fashion"
    html = buildDay5Email(buyerName, buyerCompany, buyerCountry, baseUrl)
  } else if (step === 4) {
    subject = "We'd love to work with you — Vedant Fashion"
    html = buildDay30Email(buyerName, buyerCompany, baseUrl)
  } else {
    return new Response("Unknown step", { status: 400 })
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Vedant Fashion <notifications@vedantfashion.com>",
      to: buyerEmail,
      subject,
      html,
      reply_to: "contact@vedantfashion.com",
    }),
  })

  const resendData = await resendResponse.json()

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY)
  await supabase
    .from("email_logs")
    .update({
      status: resendResponse.ok ? "sent" : "failed",
      resend_id: resendData.id ?? null,
    })
    .eq("template_name", `onboarding_step_${step}`)
    .eq("recipient_email", buyerEmail)
    .order("created_at", { ascending: false })
    .limit(1)

  return new Response(
    JSON.stringify({ success: resendResponse.ok, id: resendData.id }),
    { headers: { "Content-Type": "application/json" } }
  )
})

function buildWelcomeEmail(name: string, company: string, country: string, baseUrl: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="600" style="max-width:600px;width:100%;">
        <tr><td style="background:#1a1a1a;padding:32px 40px;text-align:center;border-radius:8px 8px 0 0;">
          <img src="${baseUrl}/images/Vedant-Fashion-logo.png" alt="Vedant Fashion" width="160" style="filter:brightness(0) invert(1);max-width:160px;">
          <p style="color:#c9a96e;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:12px 0 0;">B2B Garment Manufacturer · Mumbai, India</p>
        </td></tr>
        <tr><td style="background:#fff;padding:48px 40px;">
          <h1 style="font-size:28px;color:#1a1a1a;margin:0 0 8px;">Welcome, ${name}!</h1>
          <div style="width:40px;height:2px;background:#c9a96e;margin:0 0 24px;"></div>
          <p style="color:#555;line-height:1.8;margin:0 0 24px;">Thank you for creating your account with Vedant Fashion. We're excited to work with you.</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
            <tr>
              <td style="width:33%;padding:16px;border:1px solid #e9e9e9;border-radius:6px;text-align:center;">
                <p style="font-size:24px;margin:0 0 8px;">🧵</p>
                <p style="font-weight:bold;color:#1a1a1a;font-size:13px;margin:0 0 4px;">25,000+ Pieces/Month</p>
                <p style="color:#888;font-size:11px;margin:0;">Consistent production capacity</p>
              </td>
              <td style="width:4%;"></td>
              <td style="width:33%;padding:16px;border:1px solid #e9e9e9;border-radius:6px;text-align:center;">
                <p style="font-size:24px;margin:0 0 8px;">✈️</p>
                <p style="font-weight:bold;color:#1a1a1a;font-size:13px;margin:0 0 4px;">18-22 Days to UAE</p>
                <p style="color:#888;font-size:11px;margin:0;">Fast sea freight from Mumbai</p>
              </td>
              <td style="width:4%;"></td>
              <td style="width:33%;padding:16px;border:1px solid #e9e9e9;border-radius:6px;text-align:center;">
                <p style="font-size:24px;margin:0 0 8px;">🏆</p>
                <p style="font-weight:bold;color:#1a1a1a;font-size:13px;margin:0 0 4px;">MOQ 100 Pieces</p>
                <p style="color:#888;font-size:11px;margin:0;">Lower than most manufacturers</p>
              </td>
            </tr>
          </table>
          <div style="text-align:center;">
            <a href="${baseUrl}/en/products" style="background:#c9a96e;color:#1a1a1a;padding:14px 32px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;margin:0 0 16px;">Browse Our Collections</a>
            <br>
            <a href="${baseUrl}/en/inquiry" style="color:#c9a96e;font-size:13px;">Send Your First Enquiry →</a>
          </div>
        </td></tr>
        <tr><td style="background:#1a1a1a;padding:24px 40px;border-radius:0 0 8px 8px;">
          <p style="color:#888;font-size:11px;margin:0;">Vedant Fashion · Building B 12, Asalpha Ghatkopar, Mumbai 400084 · <a href="mailto:contact@vedantfashion.com" style="color:#c9a96e;">contact@vedantfashion.com</a></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function buildDay2Email(name: string, company: string, baseUrl: string): string {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f5f5f0;font-family:Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
  <table width="600" style="max-width:600px;">
    <tr><td style="background:#1a1a1a;padding:32px 40px;text-align:center;border-radius:8px 8px 0 0;">
      <img src="${baseUrl}/images/Vedant-Fashion-logo.png" alt="Vedant Fashion" width="160" style="filter:brightness(0) invert(1);">
    </td></tr>
    <tr><td style="background:#fff;padding:48px 40px;">
      <h2 style="color:#1a1a1a;margin:0 0 16px;">Hi ${name}, exploring our range?</h2>
      <p style="color:#555;line-height:1.8;margin:0 0 24px;">Here's a quick overview of what we manufacture at Vedant Fashion:</p>
      <table width="100%" cellpadding="0" cellspacing="8">
        <tr>
          <td style="background:#f9f9f7;border:1px solid #eee;border-radius:6px;padding:16px;">
            <p style="font-weight:bold;color:#1a1a1a;margin:0 0 4px;">👔 Woven Blouses</p>
            <p style="color:#888;font-size:12px;margin:0;">Viscose, rayon, georgette. MOQ 100 pcs.</p>
          </td>
          <td style="width:8px;"></td>
          <td style="background:#f9f9f7;border:1px solid #eee;border-radius:6px;padding:16px;">
            <p style="font-weight:bold;color:#1a1a1a;margin:0 0 4px;">👗 Dresses & Co-ords</p>
            <p style="color:#888;font-size:12px;margin:0;">Printed, plain, occasion. MOQ 100 pcs.</p>
          </td>
        </tr>
        <tr><td colspan="3" style="height:8px;"></td></tr>
        <tr>
          <td style="background:#f9f9f7;border:1px solid #eee;border-radius:6px;padding:16px;">
            <p style="font-weight:bold;color:#1a1a1a;margin:0 0 4px;">✨ Embroidery & Sequin</p>
            <p style="color:#888;font-size:12px;margin:0;">In-house embroidery. MOQ 100 pcs.</p>
          </td>
          <td style="width:8px;"></td>
          <td style="background:#f9f9f7;border:1px solid #eee;border-radius:6px;padding:16px;">
            <p style="font-weight:bold;color:#1a1a1a;margin:0 0 4px;">🏖️ Resort & Kurtis</p>
            <p style="color:#888;font-size:12px;margin:0;">Kaftans, palazzo, kurtis. MOQ 100 pcs.</p>
          </td>
        </tr>
      </table>
      <div style="text-align:center;margin-top:32px;">
        <a href="${baseUrl}/en/dashboard/samples/new" style="background:#c9a96e;color:#1a1a1a;padding:14px 32px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:14px;">Request a Sample Pack</a>
        <p style="color:#888;font-size:12px;margin-top:12px;">Sample charges USD 30–80 per style. 100% credited on bulk order.</p>
      </div>
    </td></tr>
    <tr><td style="background:#1a1a1a;padding:24px 40px;border-radius:0 0 8px 8px;">
      <p style="color:#888;font-size:11px;margin:0;">Vedant Fashion · contact@vedantfashion.com · +91 99309 68116</p>
    </td></tr>
  </table></td></tr></table></body></html>`
}

function buildDay5Email(name: string, company: string, country: string, baseUrl: string): string {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f5f5f0;font-family:Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
  <table width="600" style="max-width:600px;">
    <tr><td style="background:#1a1a1a;padding:32px 40px;text-align:center;border-radius:8px 8px 0 0;">
      <img src="${baseUrl}/images/Vedant-Fashion-logo.png" alt="Vedant Fashion" width="160" style="filter:brightness(0) invert(1);">
    </td></tr>
    <tr><td style="background:#fff;padding:48px 40px;">
      <h2 style="color:#1a1a1a;margin:0 0 16px;">Still exploring, ${name}?</h2>
      <p style="color:#555;line-height:1.8;margin:0 0 24px;">Many buyers from ${country || "your region"} start with a catalogue download to shortlist styles before requesting samples.</p>
      <div style="border-left:4px solid #c9a96e;padding:16px 20px;background:#fafaf8;margin:0 0 32px;">
        <p style="color:#1a1a1a;font-size:13px;margin:0;">📋 Our catalogue includes: fabric specifications, GSM weights, MOQ per category, FOB price ranges USD 5–8, compliance certifications, and size charts.</p>
      </div>
      <div style="text-align:center;">
        <a href="${baseUrl}/en/catalog" style="background:#c9a96e;color:#1a1a1a;padding:14px 32px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;margin:0 8px 16px;">Download Catalogue</a>
        <a href="${baseUrl}/en/inquiry" style="border:2px solid #c9a96e;color:#c9a96e;padding:12px 32px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;margin:0 8px 16px;">Send an Enquiry</a>
      </div>
      <p style="text-align:center;color:#888;font-size:12px;margin-top:16px;">✓ GOTS Certified &nbsp;·&nbsp; ✓ OEKO-TEX &nbsp;·&nbsp; ✓ FOB Mumbai &nbsp;·&nbsp; ✓ 18–22 Days to UAE</p>
    </td></tr>
    <tr><td style="background:#1a1a1a;padding:24px 40px;border-radius:0 0 8px 8px;">
      <p style="color:#888;font-size:11px;margin:0;">Vedant Fashion · contact@vedantfashion.com · +91 99309 68116</p>
    </td></tr>
  </table></td></tr></table></body></html>`
}

function buildDay30Email(name: string, company: string, baseUrl: string): string {
  return `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f5f5f0;font-family:Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
  <table width="600" style="max-width:600px;">
    <tr><td style="background:#1a1a1a;padding:32px 40px;text-align:center;border-radius:8px 8px 0 0;">
      <img src="${baseUrl}/images/Vedant-Fashion-logo.png" alt="Vedant Fashion" width="160" style="filter:brightness(0) invert(1);">
    </td></tr>
    <tr><td style="background:#fff;padding:48px 40px;">
      <h2 style="color:#1a1a1a;margin:0 0 16px;">Hi ${name}, let's talk business</h2>
      <p style="color:#555;line-height:1.8;margin:0 0 24px;">It's been a month since you joined Vedant Fashion. We'd love to understand your sourcing requirements better.</p>
      <div style="background:#1a1a1a;border-radius:8px;padding:24px;text-align:center;margin:0 0 32px;">
        <p style="color:#c9a96e;font-size:18px;font-weight:bold;margin:0 0 8px;">🎁 First Order Offer</p>
        <p style="color:#fff;font-size:13px;margin:0;">Free samples on your first bulk order above 500 pieces. Valid for new buyers only.</p>
      </div>
      <div style="text-align:center;">
        <a href="${baseUrl}/en/contact" style="background:#c9a96e;color:#1a1a1a;padding:14px 32px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;margin:0 0 12px;">Book a Video Call</a>
        <br>
        <a href="${baseUrl}/en/inquiry" style="color:#c9a96e;font-size:13px;">Or send us your requirements →</a>
      </div>
      <p style="color:#888;font-size:13px;text-align:center;margin-top:32px;">— Shravan Diwan, Director, Vedant Fashion</p>
    </td></tr>
    <tr><td style="background:#1a1a1a;padding:24px 40px;border-radius:0 0 8px 8px;">
      <p style="color:#888;font-size:11px;margin:0;">Vedant Fashion · contact@vedantfashion.com · +91 99309 68116</p>
    </td></tr>
  </table></td></tr></table></body></html>`
}
