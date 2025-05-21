import CursoSkeleton from "@/components/curso-skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Skeleton para banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-64 rounded-lg mb-12 flex items-center justify-center">
          <div className="text-white text-xl">Carregando...</div>
        </div>

        {/* Skeleton para títulos */}
        <div className="h-8 bg-gray-200 rounded w-64 max-w-full mb-8 animate-pulse" />

        {/* Skeleton para filtros */}
        <div className="flex gap-4 mb-8">
          <div className="h-10 bg-gray-200 rounded w-48 animate-pulse" />
          <div className="h-10 bg-gray-200 rounded w-48 animate-pulse" />
        </div>

        {/* Skeleton grid para cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <CursoSkeleton key={i} />
            ))}
        </div>
      </div>
    </div>
  )
}
