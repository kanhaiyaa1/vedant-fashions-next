import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container-wide py-4 flex items-center justify-between">
          <Link href="/en" className="font-display text-xl font-semibold tracking-wide text-foreground">
            Vedant Fashion
          </Link>
          <span className="text-caption text-muted-foreground uppercase tracking-widest">
            B2B Garment Manufacturer
          </span>
        </div>
      </header>

      {/* Body */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg space-y-6">
          <p className="font-display text-[7rem] leading-none font-semibold text-gold/30 select-none">
            404
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Page Not Found
          </h1>
          <p className="text-body text-muted-foreground">
            The page you are looking for may have moved, been removed, or the
            URL may be incorrect.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded bg-foreground text-background px-6 py-3 text-body-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/en/inquiry"
              className="inline-flex items-center justify-center rounded border border-border px-6 py-3 text-body-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="border-t border-border">
        <div className="container-wide py-4 text-center">
          <p className="text-caption text-muted-foreground">
            © {new Date().getFullYear()} Vedant Fashion — Mumbai, India
          </p>
        </div>
      </footer>
    </div>
  );
}
