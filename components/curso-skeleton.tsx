export default function CursoSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Thumbnail */}
      <div className="h-48 bg-gray-200" />

      {/* Conteúdo */}
      <div className="p-4">
        {/* Título */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />

        {/* Instrutor */}
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />

        {/* Badges */}
        <div className="flex gap-2 mt-3">
          <div className="h-6 bg-gray-200 rounded-full w-20" />
          <div className="h-6 bg-gray-200 rounded-full w-24" />
        </div>

        {/* Contador de aulas */}
        <div className="h-4 bg-gray-200 rounded w-16 mt-4" />
      </div>
    </div>
  )
}
