import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto" />
        <h2 className="mt-4 text-xl font-semibold text-gray-700">Carregando...</h2>
      </div>
    </div>
  )
}
