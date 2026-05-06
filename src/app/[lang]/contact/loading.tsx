export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-20 md:pt-24">
        <div className="bg-cream">
          <div className="container-wide section-spacing">
            <div className="max-w-3xl space-y-6">
              <div className="skeleton rounded w-24 h-3" />
              <div className="skeleton rounded w-2/3 h-14" />
              <div className="skeleton rounded w-1/2 h-5" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton rounded h-12 w-full" />
              ))}
              <div className="skeleton rounded h-32 w-full" />
              <div className="skeleton rounded h-12 w-40" />
            </div>
            <div className="space-y-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="border border-border rounded p-6 space-y-3">
                  <div className="skeleton rounded w-6 h-6" />
                  <div className="skeleton rounded w-40 h-5" />
                  <div className="skeleton rounded w-full h-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
