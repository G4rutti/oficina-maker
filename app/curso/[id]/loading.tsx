export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back link skeleton */}
      <div className="h-6 bg-gray-200 rounded w-32 mb-6 animate-pulse" />

      {/* Title skeleton */}
      <div className="h-10 bg-gray-200 rounded w-3/4 mb-6 animate-pulse" />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main column - Video player skeleton */}
        <div className="lg:w-2/3">
          {/* Video skeleton */}
          <div className="aspect-video bg-gray-300 rounded-lg mb-4 animate-pulse" />

          {/* Content skeleton */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Sidebar - Playlist skeleton */}
        <div className="lg:w-1/3 bg-gray-50 rounded-lg p-4">
          <div className="h-8 bg-gray-200 rounded w-40 mb-4 animate-pulse" />

          <div className="space-y-2">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="p-3 rounded-md bg-gray-100 flex items-center gap-3 animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-gray-300" />
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded w-full" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
