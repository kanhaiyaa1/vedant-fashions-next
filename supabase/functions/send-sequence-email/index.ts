// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")

const LOGO_URL = "https://vedant-fashions-next.vercel.app/images/Vedant-Fashion-logo.png"
const SITE_URL = "https://vedant-fashions-next.vercel.app"

function emailHeader(subtitle = "B2B Garment Manufacturer · Mumbai, India") {
  return `<tr><td style="background:#1a1a1a;padding:32px 40px;text-align:center;border-radius:8px 8px 0 0;">
  <img src="${LOGO_URL}" alt="Vedant Fashion" width="160" style="max-width:160px;height:auto;filter:brightness(0) invert(1);display:block;margin:0 auto;" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
  <p style="display:none;color:#fff;font-size:22px;font-weight:bold;margin:0;letter-spacing:2px;">VEDANT FASHION</p>
  <p style="color:#c9a96e;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:8px 0 0;">${subtitle}</p>
</td></tr>`
}

function emailFooter(buyerEmail) {
  return `<tr><td style="background:#1a1a1a;padding:32px 40px;border-radius:0 0 8px 8px;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td style="text-align:center;padding-bottom:16px;">
      <img src="${LOGO_URL}" alt="Vedant Fashion" width="120" style="max-width:120px;height:auto;filter:brightness(0) invert(0.5);opacity:0.6;">
    </td></tr>
    <tr><td style="text-align:center;">
      <p style="color:#c9a96e;font-size:12px;font-weight:600;margin:0 0 4px;letter-spacing:1px;">VEDANT FASHION</p>
      <p style="color:#666;font-size:11px;margin:0 0 4px;">Building B 12, Asalpha Ghatkopar, Mumbai 400084, India</p>
      <p style="color:#666;font-size:11px;margin:0 0 12px;"><a href="mailto:contact@vedantfashion.com" style="color:#c9a96e;text-decoration:none;">contact@vedantfashion.com</a>&nbsp;·&nbsp;+91 99309 68116&nbsp;·&nbsp;<a href="https://vedantfashion.com" style="color:#c9a96e;text-decoration:none;">vedantfashion.com</a></p>
      <p style="color:#444;font-size:10px;margin:0;"><a href="${SITE_URL}/api/unsubscribe?email=${buyerEmail}" style="color:#444;text-decoration:underline;">Unsubscribe</a>&nbsp;·&nbsp;<a href="${SITE_URL}/en/privacy-policy" style="color:#444;text-decoration:underline;">Privacy Policy</a></p>
    </td></tr>
  </table>
</td></tr>`
}

const replyPrompt = `<div style="background:#f9f9f7;border-left:4px solid #c9a96e;padding:16px 20px;margin:32px 0 0;border-radius:0 4px 4px 0;">
  <p style="color:#1a1a1a;font-size:13px;font-weight:bold;margin:0 0 4px;">Questions? Just reply to this email.</p>
  <p style="color:#888;font-size:12px;margin:0;">Shravan Diwan, Director — reads and responds personally.</p>
</div>`

const preheader = (text) =>
  `<div style="display:none;max-height:0;overflow:hidden;font-size:1px;color:#f5f5f0;">${text}</div>`

serve(async (req) => {
  try {
    if (req.method !== "POST") {
      return new Response("Method not allowed", { status: 405 })
    }

    console.log("Function called, parsing body...")

    const body = await req.json()
    console.log("Body received:", JSON.stringify(body))

    const { buyerEmail, buyerName, buyerCompany, buyerCountry, step } = body

    if (!buyerEmail || !step) {
      console.log("Missing required fields")
      return new Response(
        JSON.stringify({ success: false, error: "Missing buyerEmail or step" }),
        { headers: { "Content-Type": "application/json" }, status: 400 }
      )
    }

    if (!RESEND_API_KEY) {
      console.log("RESEND_API_KEY not set")
      return new Response(
        JSON.stringify({ success: false, error: "RESEND_API_KEY not configured" }),
        { headers: { "Content-Type": "application/json" }, status: 500 }
      )
    }

    console.log(`Sending step ${step} email to ${buyerEmail}`)

    const baseUrl = "https://vedantfashion.com"
    let subject = ""
    let html = ""

    if (step === 1) {
      subject = `Welcome to Vedant Fashion, ${buyerCompany || buyerName} 🎉`
      html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:Helvetica,Arial,sans-serif;">
${preheader("Your Vedant Fashion account is ready — explore ladies woven wear collections")}
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr><td align="center">
<table width="600" style="max-width:600px;width:100%;">
${emailHeader()}
<tr><td style="background:#fff;padding:48px 40px;">
  <h1 style="font-size:26px;color:#1a1a1a;margin:0 0 8px;">Welcome, ${buyerName}!</h1>
  <div style="width:40px;height:2px;background:#c9a96e;margin:8px 0 20px;"></div>
  <p style="color:#555;line-height:1.8;margin:0 0 24px;">Thank you for creating your account with Vedant Fashion. We're excited to work with you and ${buyerCompany || "your company"}.</p>
  <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
    <tr>
      <td style="background:#f9f9f7;border:1px solid #e9e9e9;border-top:3px solid #c9a96e;border-radius:6px;padding:20px;text-align:center;width:30%;">
        <p style="font-size:28px;margin:0 0 8px;">🧵</p>
        <p style="font-weight:bold;color:#1a1a1a;font-size:13px;margin:0 0 4px;">25,000+ Pieces/Month</p>
        <p style="color:#888;font-size:11px;margin:0;line-height:1.5;">Consistent production capacity for your wholesale needs</p>
      </td>
      <td style="width:4%;"></td>
      <td style="background:#f9f9f7;border:1px solid #e9e9e9;border-top:3px solid #c9a96e;border-radius:6px;padding:20px;text-align:center;width:30%;">
        <p style="font-size:28px;margin:0 0 8px;">✈️</p>
        <p style="font-weight:bold;color:#1a1a1a;font-size:13px;margin:0 0 4px;">18–22 Days to UAE</p>
        <p style="color:#888;font-size:11px;margin:0;line-height:1.5;">Fast sea freight from Mumbai to Jebel Ali</p>
      </td>
      <td style="width:4%;"></td>
      <td style="background:#f9f9f7;border:1px solid #e9e9e9;border-top:3px solid #c9a96e;border-radius:6px;padding:20px;text-align:center;width:30%;">
        <p style="font-size:28px;margin:0 0 8px;">📦</p>
        <p style="font-weight:bold;color:#1a1a1a;font-size:13px;margin:0 0 4px;">MOQ 100 Pieces</p>
        <p style="color:#888;font-size:11px;margin:0;line-height:1.5;">Lower than most Indian manufacturers</p>
      </td>
    </tr>
  </table>
  <div style="text-align:center;margin:32px 0 24px;">
    <a href="${baseUrl}/en/products" style="background:#c9a96e;color:#1a1a1a;padding:14px 32px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;">Browse Our Collections</a>
  </div>
  <p style="text-align:center;"><a href="${baseUrl}/en/inquiry" style="color:#c9a96e;font-size:13px;">Send Your First Enquiry →</a></p>
  ${replyPrompt}
</td></tr>
${emailFooter(buyerEmail)}
</table>
</td></tr>
</table>
</body>
</html>`

    } else if (step === 2) {
      subject = "Have you seen our latest collection? — Vedant Fashion"
      html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:Helvetica,Arial,sans-serif;">
${preheader("Woven blouses, dresses, co-ords, embroidery — MOQ 100 pcs, FOB USD 5–8")}
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr><td align="center">
<table width="600" style="max-width:600px;width:100%;">
${emailHeader()}
<tr><td style="background:#fff;padding:48px 40px;">
  <h2 style="color:#1a1a1a;margin:0 0 8px;">Hi ${buyerName}, exploring our range?</h2>
  <div style="width:40px;height:2px;background:#c9a96e;margin:8px 0 20px;"></div>
  <p style="color:#555;line-height:1.8;margin:0 0 24px;">Here is a quick overview of what we manufacture:</p>
  <table width="100%" cellpadding="8">
    <tr>
      <td style="background:#f9f9f7;border:1px solid #eee;border-radius:6px;padding:16px;">
        <p style="font-weight:bold;color:#1a1a1a;margin:0 0 4px;">👔 Woven Blouses</p>
        <p style="color:#888;font-size:12px;margin:0;">Viscose, rayon, georgette. MOQ 100 pcs. FOB USD 5–8.</p>
      </td>
      <td style="width:8px;"></td>
      <td style="background:#f9f9f7;border:1px solid #eee;border-radius:6px;padding:16px;">
        <p style="font-weight:bold;color:#1a1a1a;margin:0 0 4px;">👗 Dresses and Co-ords</p>
        <p style="color:#888;font-size:12px;margin:0;">Printed, plain, occasion. MOQ 100 pcs.</p>
      </td>
    </tr>
    <tr><td colspan="3" style="height:8px;"></td></tr>
    <tr>
      <td style="background:#f9f9f7;border:1px solid #eee;border-radius:6px;padding:16px;">
        <p style="font-weight:bold;color:#1a1a1a;margin:0 0 4px;">✨ Embroidery and Sequin</p>
        <p style="color:#888;font-size:12px;margin:0;">In-house work. MOQ 100 pcs. FOB USD 8–18.</p>
      </td>
      <td style="width:8px;"></td>
      <td style="background:#f9f9f7;border:1px solid #eee;border-radius:6px;padding:16px;">
        <p style="font-weight:bold;color:#1a1a1a;margin:0 0 4px;">🏖️ Kurtis and Resort Wear</p>
        <p style="color:#888;font-size:12px;margin:0;">Kaftans, palazzo, kurtis. MOQ 100 pcs.</p>
      </td>
    </tr>
  </table>
  <div style="text-align:center;margin-top:32px;">
    <a href="${baseUrl}/en/dashboard/samples/new" style="background:#c9a96e;color:#1a1a1a;padding:14px 32px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:14px;">Request a Sample Pack</a>
    <p style="color:#888;font-size:12px;margin-top:12px;">Sample charges USD 30–80 per style. 100% credited on bulk order.</p>
  </div>
  ${replyPrompt}
</td></tr>
${emailFooter(buyerEmail)}
</table>
</td></tr>
</table>
</body>
</html>`

    } else if (step === 3) {
      subject = "Your wholesale catalogue is ready — Vedant Fashion"
      html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:Helvetica,Arial,sans-serif;">
${preheader("Download our catalogue — fabric specs, GSM, MOQ, FOB prices all inside")}
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr><td align="center">
<table width="600" style="max-width:600px;width:100%;">
${emailHeader()}
<tr><td style="background:#fff;padding:48px 40px;">
  <h2 style="color:#1a1a1a;margin:0 0 8px;">Still exploring, ${buyerName}?</h2>
  <div style="width:40px;height:2px;background:#c9a96e;margin:8px 0 20px;"></div>
  <p style="color:#555;line-height:1.8;margin:0 0 24px;">Many buyers from ${buyerCountry || "your region"} start with a catalogue download to shortlist styles before requesting samples.</p>
  <div style="border-left:4px solid #c9a96e;padding:16px 20px;background:#fafaf8;margin:0 0 32px;">
    <p style="color:#1a1a1a;font-size:13px;margin:0;">Our catalogue includes: fabric specifications, GSM weights, MOQ per category, FOB price ranges USD 5–8, compliance certifications, and size charts.</p>
  </div>
  <div style="text-align:center;">
    <a href="${baseUrl}/en/catalog" style="background:#c9a96e;color:#1a1a1a;padding:14px 32px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;margin:0 8px 16px;">Download Catalogue</a>
  </div>
  ${replyPrompt}
</td></tr>
${emailFooter(buyerEmail)}
</table>
</td></tr>
</table>
</body>
</html>`

    } else if (step === 4) {
      subject = "We'd love to work with you — Vedant Fashion"
      html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:Helvetica,Arial,sans-serif;">
${preheader("Special offer for new buyers — free samples on first bulk order above 500 pcs")}
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
<tr><td align="center">
<table width="600" style="max-width:600px;width:100%;">
${emailHeader()}
<tr><td style="background:#fff;padding:48px 40px;">
  <h2 style="color:#1a1a1a;margin:0 0 8px;">Hi ${buyerName}, let's talk business</h2>
  <div style="width:40px;height:2px;background:#c9a96e;margin:8px 0 20px;"></div>
  <p style="color:#555;line-height:1.8;margin:0 0 24px;">It has been a month since you joined Vedant Fashion. We would love to understand your sourcing requirements better.</p>
  <div style="background:#1a1a1a;border-radius:8px;padding:24px;text-align:center;margin:0 0 32px;">
    <p style="color:#c9a96e;font-size:18px;font-weight:bold;margin:0 0 8px;">First Order Offer</p>
    <p style="color:#fff;font-size:13px;margin:0;">Free samples on your first bulk order above 500 pieces. Valid for new buyers only.</p>
  </div>
  <div style="text-align:center;">
    <a href="${baseUrl}/en/contact" style="background:#c9a96e;color:#1a1a1a;padding:14px 32px;border-radius:4px;text-decoration:none;font-weight:bold;font-size:14px;display:inline-block;margin:0 0 12px;">Send Your Requirements</a>
  </div>
  <p style="color:#888;font-size:13px;text-align:center;margin-top:32px;">— Shravan Diwan, Director, Vedant Fashion</p>
  ${replyPrompt}
</td></tr>
${emailFooter(buyerEmail)}
</table>
</td></tr>
</table>
</body>
</html>`

    } else {
      return new Response(
        JSON.stringify({ success: false, error: "Unknown step" }),
        { headers: { "Content-Type": "application/json" }, status: 400 }
      )
    }

    console.log(`Calling Resend API for step ${step}...`)

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
    console.log("Resend response:", JSON.stringify(resendData))

    if (!resendResponse.ok) {
      console.log("Resend error:", JSON.stringify(resendData))
      return new Response(
        JSON.stringify({ success: false, error: resendData }),
        { headers: { "Content-Type": "application/json" }, status: 500 }
      )
    }

    return new Response(
      JSON.stringify({ success: true, id: resendData.id }),
      { headers: { "Content-Type": "application/json" } }
    )

  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error))
    console.log("Caught error:", err.message)
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { headers: { "Content-Type": "application/json" }, status: 500 }
    )
  }
})
