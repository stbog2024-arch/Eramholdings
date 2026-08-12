export function PageSkeleton() {
  return (
    <div className="route-fade-in mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="h-3 w-28 rounded-full skeleton-shimmer" />
      <div className="mt-6 h-10 w-3/4 rounded-lg skeleton-shimmer sm:w-2/3" />
      <div className="mt-4 h-4 w-full max-w-2xl rounded skeleton-shimmer" />
      <div className="mt-2 h-4 w-5/6 max-w-xl rounded skeleton-shimmer" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border p-6">
            <div className="h-8 w-8 rounded-md skeleton-shimmer" />
            <div className="mt-4 h-4 w-2/3 rounded skeleton-shimmer" />
            <div className="mt-3 h-3 w-full rounded skeleton-shimmer" />
            <div className="mt-2 h-3 w-4/5 rounded skeleton-shimmer" />
          </div>
        ))}
      </div>
      <span className="sr-only" role="status">
        Loading page
      </span>
    </div>
  );
}
