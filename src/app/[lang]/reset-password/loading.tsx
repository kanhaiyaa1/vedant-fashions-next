export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 space-y-2">
          <div className="h-7 w-40 bg-muted rounded animate-pulse mx-auto" />
          <div className="h-4 w-24 bg-muted rounded animate-pulse mx-auto" />
          <div className="h-6 w-36 bg-muted rounded animate-pulse mx-auto" />
        </div>
        <div className="bg-card border border-border rounded p-8 shadow-sm space-y-5">
          <div className="space-y-1.5">
            <div className="h-4 w-28 bg-muted rounded animate-pulse" />
            <div className="h-10 w-full bg-muted rounded animate-pulse" />
          </div>
          <div className="space-y-1.5">
            <div className="h-4 w-36 bg-muted rounded animate-pulse" />
            <div className="h-10 w-full bg-muted rounded animate-pulse" />
          </div>
          <div className="h-10 w-full bg-muted rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
