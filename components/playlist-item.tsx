"use client"

import type { Aula } from "@/types/curso"
import { Play, Loader2 } from "lucide-react"

interface PlaylistItemProps {
  aula: Aula
  isActive: boolean
  onClick: () => void
  isLoading?: boolean
}

export default function PlaylistItem({ aula, isActive, onClick, isLoading = false }: PlaylistItemProps) {
  return (
    <div
      className={`p-3 rounded-md cursor-pointer flex items-center gap-3 transition-colors ${
        isActive ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
        }`}
      >
        {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} className="ml-0.5" />}
      </div>
      <div className="flex-1">
        <h3 className={`font-medium ${isActive ? "text-blue-800" : "text-gray-800"}`}>{aula.titulo}</h3>
      </div>
    </div>
  )
}
