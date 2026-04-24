"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import CatalogueGateModal from "@/components/vedant/CatalogueGateModal";

interface CatalogDownloadSectionProps {
  lang: string;
  userId: string | null;
  userEmail: string | null;
}

export default function CatalogDownloadSection({ userId, userEmail }: CatalogDownloadSectionProps) {
  const [showModal, setShowModal] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [downloadMessage, setDownloadMessage] = useState("");

  async function handleLoggedInDownload() {
    if (!userEmail) return;
    try {
      const res = await fetch("/api/catalogue-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Buyer",
          company: "—",
          email: userEmail,
          country: "—",
          userId,
        }),
      });
      const json = await res.json();
      handleDownloadSuccess(json.downloadUrl ?? "#");
    } catch {
      setShowModal(true);
    }
  }

  function handleDownloadSuccess(url: string) {
    setShowModal(false);
    if (url && url !== "#") {
      window.open(url, "_blank");
      setDownloadMessage("Your download has started.");
    } else {
      setDownloadMessage("Thank you! Our team will email you the catalogue within 24 hours.");
    }
    setDownloaded(true);
  }

  function handleClick() {
    if (userId) {
      handleLoggedInDownload();
    } else {
      setShowModal(true);
    }
  }

  return (
    <>
      <section className="bg-secondary/50 border-t border-border py-16">
        <div className="container-wide text-center space-y-6 max-w-2xl mx-auto">
          <div className="space-y-2">
            <p className="text-subheading text-gold uppercase tracking-widest text-sm">
              Product Catalogue
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Download Our Full Catalogue
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Get our complete product catalogue with pricing, MOQs, fabric specs, and certification details for all 100+ styles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            {["100+ styles", "FOB prices included", "GOTS & OEKO-TEX specs", "MOQ per style"].map((f) => (
              <span key={f} className="flex items-center gap-1.5">
                <span className="text-gold">✓</span> {f}
              </span>
            ))}
          </div>

          {downloaded ? (
            <div className="bg-card border border-border rounded p-6 space-y-2">
              <p className="text-foreground font-medium">{downloadMessage}</p>
              <button
                onClick={() => setDownloaded(false)}
                className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Download again
              </button>
            </div>
          ) : (
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded text-sm font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Catalogue
            </button>
          )}
        </div>
      </section>

      <CatalogueGateModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={handleDownloadSuccess}
      />
    </>
  );
}
