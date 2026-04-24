"use client";

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

export function SkeletonLine({
  width = "100%",
  height = "16px",
  className = "",
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return <div className={`skeleton rounded ${className}`} style={{ width, height }} />;
}

export function SkeletonBlock({
  height = "80px",
  className = "",
}: {
  height?: string;
  className?: string;
}) {
  return <div className={`skeleton rounded w-full ${className}`} style={{ height }} />;
}

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-border rounded p-6 space-y-4 ${className}`}>
      <div className="space-y-2">
        <SkeletonLine width="60%" height="20px" />
        <SkeletonLine width="40%" height="14px" />
      </div>
      <div className="space-y-2 pt-2">
        <SkeletonLine />
        <SkeletonLine width="90%" />
        <SkeletonLine width="75%" />
      </div>
      <div className="pt-2">
        <SkeletonLine width="30%" height="36px" />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Table
// ---------------------------------------------------------------------------

export function SkeletonTable({
  rows = 5,
  cols = 4,
}: {
  rows?: number;
  cols?: number;
}) {
  return (
    <div className="border border-border rounded overflow-hidden">
      <div
        className="grid gap-4 px-6 py-3 border-b border-border bg-muted/40"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: cols }).map((_, c) => (
          <SkeletonLine key={c} width="80px" height="12px" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, r) => (
        <div
          key={r}
          className="grid gap-4 px-6 py-4 border-b border-border/50 last:border-0"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: cols }).map((_, c) => (
            <SkeletonLine key={c} width={`${60 + ((r + c) % 4) * 10}%`} height="14px" />
          ))}
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// ContentBlock skeleton — mirrors ContentBlock exactly
// section-spacing > container-wide > text-center mb-16 + children
// ---------------------------------------------------------------------------

export function SkeletonContentBlock({
  contentHeight = "120px",
  bg = "default",
  className = "",
}: {
  contentHeight?: string;
  bg?: "default" | "cream" | "dark";
  className?: string;
}) {
  const bgClass = bg === "cream" ? "bg-cream" : bg === "dark" ? "bg-primary" : "bg-background";
  const lineOpacity = bg === "dark" ? "opacity-30" : "";
  return (
    <section className={`section-spacing ${bgClass} ${className}`}>
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
          {/* subtitle: text-subheading ~12px */}
          <SkeletonLine width="120px" height="12px" className={`mx-auto ${lineOpacity}`} />
          {/* h2: text-display-md ~40px */}
          <SkeletonLine width="55%" height="40px" className={`mx-auto ${lineOpacity}`} />
        </div>
        <SkeletonBlock height={contentHeight} className={lineOpacity} />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// PageHero skeleton — mirrors PageHero exactly
// relative pt-20 md:pt-24 > bg-cream > container-wide section-spacing > max-w-3xl space-y-6
// ---------------------------------------------------------------------------

export function SkeletonPageHero() {
  return (
    <section className="relative pt-20 md:pt-24">
      <div className="bg-cream">
        <div className="container-wide section-spacing">
          <div className="max-w-3xl space-y-6">
            {/* subtitle: text-subheading — small uppercase tracking */}
            <SkeletonLine width="160px" height="12px" />
            {/* h1: text-display-xl */}
            <SkeletonLine width="80%" height="56px" />
            {/* description: text-body-lg max-w-2xl */}
            <div className="max-w-2xl space-y-2">
              <SkeletonLine height="20px" />
              <SkeletonLine width="75%" height="20px" />
            </div>
            {/* gold divider: w-16 h-px */}
            <div className="skeleton rounded !w-16 !h-0.5 pt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Hero skeleton — mirrors Hero exactly
// relative min-h-screen flex col center bg-[#1a1a1a]
// max-w-4xl center column: badge > h1 > description > 2 CTAs > stats row
// + 2 floating cards bottom-left / bottom-right
// ---------------------------------------------------------------------------

export function SkeletonHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Center content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Badge pill */}
        <div className="skeleton rounded-full opacity-30" style={{ width: "280px", height: "32px" }} />

        {/* H1: text-5xl → text-7xl */}
        <div className="w-full space-y-3">
          <SkeletonLine width="90%" height="72px" className="mx-auto opacity-40" />
          <SkeletonLine width="70%" height="72px" className="mx-auto opacity-40" />
        </div>

        {/* Description: text-base md:text-lg max-w-2xl */}
        <div className="max-w-2xl w-full space-y-2">
          <SkeletonLine height="20px" className="opacity-30" />
          <SkeletonLine width="80%" height="20px" className="mx-auto opacity-30" />
        </div>

        {/* CTA buttons: h-12 */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <div className="skeleton rounded opacity-30" style={{ width: "192px", height: "48px" }} />
          <div className="skeleton rounded opacity-20" style={{ width: "176px", height: "48px" }} />
        </div>

        {/* Stats row with dividers */}
        <div className="flex flex-wrap items-center justify-center gap-0 pt-8 border-t border-white/10 w-full">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <div className="w-px h-10 bg-white/20 mx-6 md:mx-10" />}
              <div className="text-center space-y-1">
                <SkeletonLine width="64px" height="32px" className="mx-auto opacity-30" />
                <SkeletonLine width="88px" height="10px" className="mx-auto opacity-20" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating card — bottom left */}
      <div className="absolute bottom-8 left-6 z-10 bg-black/60 border border-white/10 rounded px-4 py-3 space-y-1">
        <SkeletonLine width="80px" height="10px" className="opacity-20" />
        <SkeletonLine width="120px" height="14px" className="opacity-30" />
      </div>

      {/* Floating card — bottom right */}
      <div className="absolute bottom-8 right-6 z-10 bg-black/60 border border-white/10 rounded px-4 py-3 space-y-1">
        <SkeletonLine width="80px" height="10px" className="opacity-20" />
        <SkeletonLine width="100px" height="14px" className="opacity-30" />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Product grid
// ---------------------------------------------------------------------------

export function SkeletonProductGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="border border-border rounded overflow-hidden">
          <div className="skeleton aspect-square w-full" />
          <div className="p-4 space-y-2">
            <SkeletonLine width="70%" height="18px" />
            <SkeletonLine width="50%" height="14px" />
            <SkeletonLine width="40%" height="14px" />
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Full page skeletons
// ---------------------------------------------------------------------------

// Mirrors a full product category page structure
export function SkeletonProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <SkeletonPageHero />

      {/* Overview ContentBlock */}
      <SkeletonContentBlock contentHeight="100px" />

      {/* Fabric spec table: 9 cols, 6 rows */}
      <section className="section-spacing bg-background">
        <div className="container-wide space-y-6">
          <div className="text-center space-y-4 mb-10">
            <SkeletonLine width="140px" height="12px" className="mx-auto" />
            <SkeletonLine width="50%" height="40px" className="mx-auto" />
          </div>
          <SkeletonTable rows={6} cols={9} />
        </div>
      </section>

      {/* Tech specs table: 2 cols, 10 rows */}
      <section className="section-spacing bg-cream">
        <div className="container-wide space-y-6">
          <div className="text-center space-y-4 mb-10">
            <SkeletonLine width="120px" height="12px" className="mx-auto" />
            <SkeletonLine width="45%" height="40px" className="mx-auto" />
          </div>
          <SkeletonTable rows={10} cols={2} />
        </div>
      </section>

      {/* GCC markets: ContentBlock with 4 cards */}
      <section className="section-spacing bg-background">
        <div className="container-wide">
          <div className="text-center mb-16 space-y-4">
            <SkeletonLine width="100px" height="12px" className="mx-auto" />
            <SkeletonLine width="55%" height="40px" className="mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="border border-border rounded p-5 space-y-3">
                <SkeletonLine width="60%" height="20px" />
                <SkeletonLine height="14px" />
                <SkeletonLine width="80%" height="14px" />
                <SkeletonLine width="50%" height="14px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance ContentBlock */}
      <SkeletonContentBlock contentHeight="80px" bg="cream" />

      {/* Size chart: 8 cols, 6 rows */}
      <section className="section-spacing bg-background">
        <div className="container-wide">
          <div className="text-center mb-10 space-y-4">
            <SkeletonLine width="100px" height="12px" className="mx-auto" />
            <SkeletonLine width="40%" height="40px" className="mx-auto" />
          </div>
          <SkeletonTable rows={6} cols={8} />
        </div>
      </section>

      {/* Ordering steps ContentBlock */}
      <SkeletonContentBlock contentHeight="120px" />

      {/* FAQ accordion — 6 items */}
      <section className="section-spacing bg-cream">
        <div className="container-wide max-w-3xl mx-auto space-y-4">
          <div className="text-center space-y-4 mb-10">
            <SkeletonLine width="80px" height="12px" className="mx-auto" />
            <SkeletonLine width="50%" height="40px" className="mx-auto" />
          </div>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-border rounded px-6 py-4 flex items-center justify-between">
              <SkeletonLine width={`${55 + (i % 3) * 10}%`} height="18px" />
              <SkeletonLine width="20px" height="20px" className="shrink-0 ml-4" />
            </div>
          ))}
        </div>
      </section>

      {/* Dark CTA block */}
      <section className="section-spacing bg-primary">
        <div className="container-wide text-center space-y-6">
          <SkeletonLine width="50%" height="40px" className="mx-auto opacity-30" />
          <SkeletonLine width="40%" height="20px" className="mx-auto opacity-20" />
          <SkeletonLine width="160px" height="48px" className="mx-auto opacity-30" />
        </div>
      </section>
    </div>
  );
}

// Mirrors admin page: p-6 md:p-10, title, stats row, filter bar, table
export function SkeletonAdminPage() {
  return (
    <div className="p-6 md:p-10 space-y-8">
      {/* Title + subtitle */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <SkeletonLine width="200px" height="28px" />
          <SkeletonLine width="260px" height="14px" />
        </div>
        <SkeletonLine width="120px" height="38px" />
      </div>
      {/* Stats row — 4 cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-gray-900 rounded-lg p-5 space-y-2">
            <SkeletonLine width="60px" height="28px" />
            <SkeletonLine width="80px" height="12px" />
          </div>
        ))}
      </div>
      {/* Filter bar: 3 inputs + button */}
      <div className="flex flex-wrap gap-3">
        <SkeletonLine width="180px" height="38px" />
        <SkeletonLine width="150px" height="38px" />
        <SkeletonLine width="180px" height="38px" />
        <SkeletonLine width="110px" height="38px" />
      </div>
      {/* Table: 8 rows × 6 cols */}
      <SkeletonTable rows={8} cols={6} />
    </div>
  );
}

// Mirrors dashboard page exactly
export function SkeletonDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Welcome header */}
      <div className="border-b border-border px-6 py-5 flex items-center justify-between">
        <div className="space-y-2">
          <SkeletonLine width="240px" height="28px" />
          <SkeletonLine width="180px" height="14px" />
        </div>
        <SkeletonLine width="100px" height="36px" />
      </div>

      <div className="container-wide py-10 space-y-10">
        {/* 4 stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border border-border rounded p-5 space-y-2">
              <SkeletonLine width="80px" height="12px" />
              <SkeletonLine width="60px" height="32px" />
              <SkeletonLine width="100px" height="12px" />
            </div>
          ))}
        </div>

        {/* Recent enquiries: 5 rows, 5 cols */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <SkeletonLine width="160px" height="20px" />
            <SkeletonLine width="80px" height="14px" />
          </div>
          <SkeletonTable rows={5} cols={5} />
        </div>

        {/* Sample requests: 5 rows, 4 cols */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <SkeletonLine width="180px" height="20px" />
            <SkeletonLine width="80px" height="14px" />
          </div>
          <SkeletonTable rows={5} cols={4} />
        </div>

        {/* Quick actions: 4 button skeletons */}
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonLine key={i} width="180px" height="44px" />
          ))}
        </div>
      </div>
    </div>
  );
}

// Mirrors wholesale-faq page: PageHero + 8 sections, each heading + 3-5 accordions (56px closed)
export function SkeletonFAQ() {
  const sections = [4, 5, 3, 4, 5, 3, 4, 5];
  return (
    <div className="min-h-screen bg-background">
      <SkeletonPageHero />
      <div className="container-wide section-spacing space-y-16 max-w-3xl mx-auto">
        {sections.map((count, s) => (
          <div key={s} className="space-y-4">
            {/* Section heading */}
            <SkeletonLine width={`${160 + (s % 3) * 40}px`} height="24px" />
            <div className="space-y-3">
              {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="border border-border rounded px-6 flex items-center justify-between" style={{ height: "56px" }}>
                  <SkeletonLine width={`${50 + (i % 4) * 10}%`} height="18px" />
                  <SkeletonLine width="20px" height="20px" className="shrink-0 ml-4" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Mirrors country landing page: PageHero + 5 ContentBlocks + dark CTA + 8 link cards
export function SkeletonCountryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SkeletonPageHero />

      {/* 5 ContentBlock skeletons alternating bg */}
      {Array.from({ length: 5 }).map((_, i) => (
        <SkeletonContentBlock
          key={i}
          bg={i % 2 === 1 ? "cream" : "default"}
          contentHeight={i === 2 ? "200px" : "100px"}
        />
      ))}

      {/* Dark CTA block */}
      <section className="section-spacing bg-primary">
        <div className="container-wide text-center space-y-6">
          <SkeletonLine width="50%" height="40px" className="mx-auto opacity-30" />
          <SkeletonLine width="40%" height="20px" className="mx-auto opacity-20" />
          <SkeletonLine width="160px" height="48px" className="mx-auto opacity-30" />
        </div>
      </section>

      {/* Grid of 8 small link cards */}
      <section className="section-spacing bg-background">
        <div className="container-wide">
          <div className="text-center mb-10 space-y-4">
            <SkeletonLine width="100px" height="12px" className="mx-auto" />
            <SkeletonLine width="45%" height="40px" className="mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border border-border rounded p-4 space-y-2">
                <SkeletonLine width="70%" height="16px" />
                <SkeletonLine width="50%" height="12px" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
