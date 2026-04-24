function emailBase({ previewText, content, unsubscribeUrl = "https://vedantfashion.com/unsubscribe" }: { previewText: string; content: string; unsubscribeUrl?: string }): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vedant Fashion</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;">${previewText}</div>
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f0;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;text-align:center;border-radius:8px 8px 0 0;">
              <img src="https://vedantfashion.com/images/Vedant-Fashion-logo.png" alt="Vedant Fashion" width="160" style="filter:brightness(0) invert(1);max-width:160px;height:auto;">
              <p style="color:#c9a96e;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:12px 0 0 0;">B2B Garment Manufacturer · Mumbai, India</p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#ffffff;padding:48px 40px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;border-radius:0 0 8px 8px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="color:#888;font-size:12px;line-height:1.8;">
                    <p style="margin:0 0 8px 0;color:#c9a96e;font-size:13px;font-weight:600;">Vedant Fashion</p>
                    <p style="margin:0;">Building B 12, 1st Floor, Sheetal Nagar</p>
                    <p style="margin:0;">Asalpha Ghatkopar, Mumbai 400084, India</p>
                    <p style="margin:8px 0 0 0;"><a href="mailto:contact@vedantfashion.com" style="color:#c9a96e;text-decoration:none;">contact@vedantfashion.com</a>&nbsp;·&nbsp;+91 99309 68116</p>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <p style="margin:0;font-size:11px;color:#555;"><a href="${unsubscribeUrl}" style="color:#555;text-decoration:underline;">Unsubscribe</a>&nbsp;·&nbsp;<a href="https://vedantfashion.com" style="color:#555;text-decoration:underline;">Visit Website</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function welcomeEmail({ name, company, country }: { name: string; company: string; country: string }): string {
  void country;
  const content = `
    <h1 style="margin:0 0 8px 0;font-size:28px;font-weight:700;color:#1a1a1a;line-height:1.2;">Welcome, ${name}!</h1>
    <div style="height:3px;background:linear-gradient(90deg,#c9a96e,#e8d5a3);margin:20px 0;border-radius:2px;"></div>
    <p style="margin:0 0 32px 0;font-size:16px;color:#444;line-height:1.7;">Thank you for creating your account with Vedant Fashion. We're excited to work with you.</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <td style="width:33%;padding:4px;">
          <div style="border:1px solid #c9a96e;border-radius:6px;padding:20px;text-align:center;">
            <p style="margin:0 0 8px 0;font-size:22px;">🧵</p>
            <p style="margin:0 0 4px 0;font-size:14px;font-weight:700;color:#1a1a1a;">25,000+ Pieces/Month</p>
            <p style="margin:0;font-size:12px;color:#666;line-height:1.5;">Consistent production capacity for your wholesale needs</p>
          </div>
        </td>
        <td style="width:33%;padding:4px;">
          <div style="border:1px solid #c9a96e;border-radius:6px;padding:20px;text-align:center;">
            <p style="margin:0 0 8px 0;font-size:22px;">✈️</p>
            <p style="margin:0 0 4px 0;font-size:14px;font-weight:700;color:#1a1a1a;">18-22 Days to UAE</p>
            <p style="margin:0;font-size:12px;color:#666;line-height:1.5;">Fast sea freight from Mumbai to all GCC ports</p>
          </div>
        </td>
        <td style="width:33%;padding:4px;">
          <div style="border:1px solid #c9a96e;border-radius:6px;padding:20px;text-align:center;">
            <p style="margin:0 0 8px 0;font-size:22px;">🏆</p>
            <p style="margin:0 0 4px 0;font-size:14px;font-weight:700;color:#1a1a1a;">GOTS &amp; OEKO-TEX</p>
            <p style="margin:0;font-size:12px;color:#666;line-height:1.5;">Internationally certified sustainable production</p>
          </div>
        </td>
      </tr>
    </table>
    <div style="text-align:center;margin-bottom:16px;">
      <a href="https://vedantfashion.com/en/products" style="display:inline-block;background-color:#c9a96e;color:#1a1a1a;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:4px;letter-spacing:1px;text-transform:uppercase;">Browse Our Collections</a>
    </div>
    <div style="text-align:center;margin-bottom:32px;">
      <a href="https://vedantfashion.com/en/inquiry" style="font-size:14px;color:#c9a96e;text-decoration:underline;">Send Your First Enquiry</a>
    </div>
    <p style="margin:0;font-size:14px;color:#666;line-height:1.7;border-top:1px solid #eee;padding-top:24px;">Our export team is here to help. Reply to this email anytime.</p>
  `;
  return emailBase({ previewText: "Your account is ready — explore our ladies woven wear collection", content });
}

export function day2FollowupEmail({ name, company }: { name: string; company: string }): string {
  void company;
  const content = `
    <h1 style="margin:0 0 20px 0;font-size:26px;font-weight:700;color:#1a1a1a;line-height:1.2;">Hi ${name}, exploring our range?</h1>
    <p style="margin:0 0 32px 0;font-size:16px;color:#444;line-height:1.7;">We noticed you recently joined Vedant Fashion. Here's a quick overview of what we manufacture:</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <td style="width:50%;padding:6px 6px 6px 0;vertical-align:top;">
          <div style="background:#f9f9f7;border-radius:6px;padding:20px;">
            <p style="margin:0 0 6px 0;font-size:20px;">👔</p>
            <p style="margin:0 0 4px 0;font-size:15px;font-weight:700;color:#1a1a1a;">Woven Blouses</p>
            <p style="margin:0;font-size:13px;color:#666;line-height:1.5;">Organic cotton, linen, Tencel™. MOQ 300 pcs.</p>
          </div>
        </td>
        <td style="width:50%;padding:6px 0 6px 6px;vertical-align:top;">
          <div style="background:#f9f9f7;border-radius:6px;padding:20px;">
            <p style="margin:0 0 6px 0;font-size:20px;">👗</p>
            <p style="margin:0 0 4px 0;font-size:15px;font-weight:700;color:#1a1a1a;">Cotton Dresses</p>
            <p style="margin:0;font-size:13px;color:#666;line-height:1.5;">A-line, wrap, maxi, modest-wear. MOQ 300 pcs.</p>
          </div>
        </td>
      </tr>
      <tr>
        <td style="width:50%;padding:6px 6px 6px 0;vertical-align:top;">
          <div style="background:#f9f9f7;border-radius:6px;padding:20px;">
            <p style="margin:0 0 6px 0;font-size:20px;">👕</p>
            <p style="margin:0 0 4px 0;font-size:15px;font-weight:700;color:#1a1a1a;">Linen Shirts</p>
            <p style="margin:0;font-size:13px;color:#666;line-height:1.5;">European flax, enzyme-washed. MOQ 500 pcs.</p>
          </div>
        </td>
        <td style="width:50%;padding:6px 0 6px 6px;vertical-align:top;">
          <div style="background:#f9f9f7;border-radius:6px;padding:20px;">
            <p style="margin:0 0 6px 0;font-size:20px;">🏖️</p>
            <p style="margin:0 0 4px 0;font-size:15px;font-weight:700;color:#1a1a1a;">Resort Wear</p>
            <p style="margin:0;font-size:13px;color:#666;line-height:1.5;">Kaftans, palazzo, jumpsuits. MOQ 300 pcs.</p>
          </div>
        </td>
      </tr>
    </table>
    <div style="text-align:center;margin-bottom:16px;">
      <a href="https://vedantfashion.com/en/dashboard/samples/new" style="display:inline-block;background-color:#c9a96e;color:#1a1a1a;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:4px;letter-spacing:1px;text-transform:uppercase;">Request a Sample Pack</a>
    </div>
    <p style="margin:0;font-size:13px;color:#888;text-align:center;">Sample charges USD 30-80 per style. 100% credited on bulk order.</p>
  `;
  return emailBase({ previewText: "Ladies woven blouses, dresses, resort wear and more", content });
}

export function day5ReminderEmail({ name, company, country }: { name: string; company: string; country: string }): string {
  void company;
  const content = `
    <h1 style="margin:0 0 20px 0;font-size:26px;font-weight:700;color:#1a1a1a;line-height:1.2;">Still exploring, ${name}?</h1>
    <p style="margin:0 0 24px 0;font-size:16px;color:#444;line-height:1.7;">Many buyers from <strong>${country}</strong> start with a catalogue download to shortlist styles before requesting samples.</p>
    <div style="border-left:4px solid #c9a96e;background:#fffdf7;padding:20px 24px;border-radius:0 6px 6px 0;margin-bottom:32px;">
      <p style="margin:0;font-size:14px;color:#444;line-height:1.8;">📋 <strong>Our catalogue includes:</strong> fabric specifications, GSM weights, MOQ per category, FOB price ranges, compliance certifications, and size charts.</p>
    </div>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <td style="padding-right:8px;">
          <a href="https://vedantfashion.com/en/catalog" style="display:block;background-color:#c9a96e;color:#1a1a1a;font-size:13px;font-weight:700;text-decoration:none;padding:14px 20px;border-radius:4px;letter-spacing:1px;text-transform:uppercase;text-align:center;">Download Catalogue</a>
        </td>
        <td style="padding-left:8px;">
          <a href="https://vedantfashion.com/en/inquiry" style="display:block;background-color:#ffffff;color:#1a1a1a;font-size:13px;font-weight:700;text-decoration:none;padding:14px 20px;border-radius:4px;letter-spacing:1px;text-transform:uppercase;text-align:center;border:2px solid #1a1a1a;">Send an Enquiry</a>
        </td>
      </tr>
    </table>
    <p style="margin:0;font-size:13px;color:#888;text-align:center;">✓ GOTS Certified &nbsp;·&nbsp; ✓ OEKO-TEX &nbsp;·&nbsp; ✓ FOB Mumbai &nbsp;·&nbsp; ✓ 18-22 Days to UAE</p>
  `;
  return emailBase({ previewText: "Download our full product range with pricing and specs", content });
}

export function day30ReengagementEmail({ name, company }: { name: string; company: string }): string {
  void company;
  const content = `
    <h1 style="margin:0 0 20px 0;font-size:26px;font-weight:700;color:#1a1a1a;line-height:1.2;">Hi ${name}, let's talk business</h1>
    <p style="margin:0 0 28px 0;font-size:16px;color:#444;line-height:1.7;">It's been a month since you joined Vedant Fashion. We'd love to understand your sourcing requirements better.</p>
    <div style="background:#1a1a1a;border-radius:8px;padding:28px;margin-bottom:32px;text-align:center;">
      <p style="margin:0 0 8px 0;font-size:22px;">🎁</p>
      <p style="margin:0 0 8px 0;font-size:18px;font-weight:700;color:#c9a96e;">First Order Offer</p>
      <p style="margin:0;font-size:14px;color:#ccc;line-height:1.7;">Free samples on your first bulk order above 1,000 pieces.<br>Valid for new buyers only.</p>
    </div>
    <div style="text-align:center;margin-bottom:16px;">
      <a href="https://vedantfashion.com/en/contact" style="display:inline-block;background-color:#c9a96e;color:#1a1a1a;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:4px;letter-spacing:1px;text-transform:uppercase;">Book a Video Call</a>
    </div>
    <div style="text-align:center;margin-bottom:32px;">
      <a href="https://vedantfashion.com/en/inquiry" style="font-size:14px;color:#c9a96e;text-decoration:underline;">Or send us your requirements</a>
    </div>
    <p style="margin:0;font-size:14px;color:#666;border-top:1px solid #eee;padding-top:24px;">— The Vedant Fashion Export Team</p>
  `;
  return emailBase({ previewText: "Special offer for new wholesale buyers", content });
}

export function newsletterEmail({ subject, previewText, content, unsubscribeUrl }: { subject: string; previewText: string; content: string; unsubscribeUrl: string }): string {
  void subject;
  return emailBase({ previewText, content, unsubscribeUrl });
}

export function enquiryConfirmationEmail({ name, company, enquiryId, productInterest, quantity, country }: { name: string; company: string; enquiryId: string; productInterest: string; quantity: string; country: string }): string {
  const content = `
    <h1 style="margin:0 0 8px 0;font-size:28px;font-weight:700;color:#1a1a1a;line-height:1.2;">Thank you, ${name}!</h1>
    <div style="height:3px;background:linear-gradient(90deg,#c9a96e,#e8d5a3);margin:20px 0;border-radius:2px;"></div>
    <p style="margin:0 0 28px 0;font-size:16px;color:#444;line-height:1.7;">We've received your enquiry and our export team will respond within 24 business hours.</p>
    <div style="background:#f5f5f5;border-radius:6px;padding:24px;margin-bottom:32px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:6px 0;font-size:13px;color:#888;width:40%;">Reference</td><td style="padding:6px 0;font-size:13px;font-weight:700;color:#1a1a1a;">${enquiryId}</td></tr>
        <tr><td style="padding:6px 0;font-size:13px;color:#888;">Company</td><td style="padding:6px 0;font-size:13px;color:#1a1a1a;">${company}</td></tr>
        <tr><td style="padding:6px 0;font-size:13px;color:#888;">Product</td><td style="padding:6px 0;font-size:13px;color:#1a1a1a;">${productInterest}</td></tr>
        <tr><td style="padding:6px 0;font-size:13px;color:#888;">Quantity</td><td style="padding:6px 0;font-size:13px;color:#1a1a1a;">${quantity}</td></tr>
        <tr><td style="padding:6px 0;font-size:13px;color:#888;">Country</td><td style="padding:6px 0;font-size:13px;color:#1a1a1a;">${country}</td></tr>
      </table>
    </div>
    <div style="text-align:center;margin-bottom:24px;">
      <a href="https://vedantfashion.com/en/dashboard" style="display:inline-block;background-color:#c9a96e;color:#1a1a1a;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:4px;letter-spacing:1px;text-transform:uppercase;">Track Your Enquiry</a>
    </div>
    <p style="margin:0;font-size:13px;color:#888;text-align:center;">Urgent? Call <a href="tel:+919930968116" style="color:#c9a96e;text-decoration:none;">+91 99309 68116</a></p>
  `;
  return emailBase({ previewText: "We'll respond within 24 business hours", content });
}

export function sampleConfirmationEmail({ name, company, category, quantity }: { name: string; company: string; category: string; quantity: string }): string {
  void company;
  const content = `
    <h1 style="margin:0 0 8px 0;font-size:28px;font-weight:700;color:#1a1a1a;line-height:1.2;">Sample Request Received!</h1>
    <div style="height:3px;background:linear-gradient(90deg,#c9a96e,#e8d5a3);margin:20px 0;border-radius:2px;"></div>
    <p style="margin:0 0 28px 0;font-size:16px;color:#444;line-height:1.7;">Dear ${name}, thank you for your sample request. Our production team is reviewing it and will be in touch shortly.</p>
    <div style="background:#f5f5f5;border-radius:6px;padding:24px;margin-bottom:28px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:6px 0;font-size:13px;color:#888;width:40%;">Product Category</td><td style="padding:6px 0;font-size:13px;font-weight:700;color:#1a1a1a;">${category}</td></tr>
        <tr><td style="padding:6px 0;font-size:13px;color:#888;">Quantity</td><td style="padding:6px 0;font-size:13px;color:#1a1a1a;">${quantity}</td></tr>
      </table>
    </div>
    <div style="border-left:4px solid #c9a96e;background:#fffdf7;padding:20px 24px;border-radius:0 6px 6px 0;margin-bottom:32px;">
      <p style="margin:0 0 8px 0;font-size:13px;font-weight:700;color:#1a1a1a;">Expected Timeline</p>
      <p style="margin:0;font-size:13px;color:#555;line-height:1.8;">
        Request review: <strong>1–2 business days</strong><br>
        Sample preparation: <strong>12–15 working days from approval</strong><br>
        Dispatch: <strong>Via courier to your address</strong>
      </p>
    </div>
    <div style="text-align:center;margin-bottom:24px;">
      <a href="https://vedantfashion.com/en/dashboard/samples" style="display:inline-block;background-color:#c9a96e;color:#1a1a1a;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:4px;letter-spacing:1px;text-transform:uppercase;">Track Your Request</a>
    </div>
    <p style="margin:0;font-size:13px;color:#888;text-align:center;">Questions? Call <a href="tel:+919930968116" style="color:#c9a96e;text-decoration:none;">+91 99309 68116</a> or email <a href="mailto:contact@vedantfashion.com" style="color:#c9a96e;text-decoration:none;">contact@vedantfashion.com</a></p>
  `;
  return emailBase({ previewText: "Your sample request is under review", content });
}

export function enquiryReplyEmail({ name, replyText, enquiryId }: { name: string; replyText: string; enquiryId: string }): string {
  void enquiryId;
  const content = `
    <h1 style="margin:0 0 8px 0;font-size:26px;font-weight:700;color:#1a1a1a;line-height:1.2;">Hi ${name}, here's our response:</h1>
    <div style="height:3px;background:linear-gradient(90deg,#c9a96e,#e8d5a3);margin:20px 0;border-radius:2px;"></div>
    <div style="border-left:4px solid #c9a96e;background:#f9f9f7;padding:24px;border-radius:0 6px 6px 0;margin-bottom:32px;">
      <p style="margin:0;font-size:15px;color:#333;line-height:1.8;white-space:pre-wrap;">${replyText}</p>
    </div>
    <div style="text-align:center;margin-bottom:16px;">
      <a href="https://vedantfashion.com/en/dashboard" style="display:inline-block;background-color:#c9a96e;color:#1a1a1a;font-size:14px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:4px;letter-spacing:1px;text-transform:uppercase;">View Full Enquiry History</a>
    </div>
    <p style="margin:0;font-size:13px;color:#888;text-align:center;">Reply to this email to continue the conversation</p>
  `;
  return emailBase({ previewText: "Response from the Vedant Fashion export team", content });
}
