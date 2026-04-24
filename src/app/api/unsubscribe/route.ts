import { NextRequest } from "next/server";
import { createHmac } from "crypto";
import { createServiceClient } from "@/lib/supabase/server";

function generateToken(email: string): string {
  return createHmac("sha256", process.env.CRON_SECRET ?? "secret")
    .update(email)
    .digest("hex")
    .slice(0, 32);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  if (!email || !token) {
    return new Response("Invalid unsubscribe link.", { status: 400, headers: { "Content-Type": "text/plain" } });
  }

  if (token !== generateToken(email)) {
    return new Response("Invalid token.", { status: 400, headers: { "Content-Type": "text/plain" } });
  }

  const supabase = createServiceClient();
  await supabase
    .from("newsletter_subscribers")
    .update({ status: "unsubscribed" })
    .eq("email", email);

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribed — Vedant Fashion</title>
  <style>
    body { margin: 0; padding: 0; background: #f5f5f0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .card { background: #fff; border-radius: 8px; padding: 48px 40px; max-width: 480px; text-align: center; box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
    h1 { font-size: 24px; color: #1a1a1a; margin: 0 0 12px 0; }
    p { font-size: 15px; color: #555; line-height: 1.7; margin: 0 0 28px 0; }
    a { display: inline-block; background: #c9a96e; color: #1a1a1a; text-decoration: none; padding: 12px 32px; border-radius: 4px; font-size: 14px; font-weight: 600; letter-spacing: 0.5px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>You've been unsubscribed</h1>
    <p>You have been successfully removed from the Vedant Fashion newsletter list. You will no longer receive marketing emails from us.</p>
    <a href="https://vedantfashion.com">Visit Our Website</a>
  </div>
</body>
</html>`;

  return new Response(html, { headers: { "Content-Type": "text/html" } });
}
