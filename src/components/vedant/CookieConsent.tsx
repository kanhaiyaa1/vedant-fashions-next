"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("vf-cookie-consent");
    if (consent === "accepted" && typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
    }
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("vf-cookie-consent", "accepted");
    setVisible(false);
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
    }
  }

  function handleDecline() {
    localStorage.setItem("vf-cookie-consent", "declined");
    setVisible(false);
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-card border-t border-border shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          We use cookies to analyse site traffic and improve your experience. You can accept or decline analytics cookies.{" "}
          <a href="/en/cookie-policy" className="underline hover:text-foreground">
            Cookie Policy
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-xs uppercase tracking-widest border border-border rounded text-muted-foreground hover:text-foreground transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-xs uppercase tracking-widest bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
