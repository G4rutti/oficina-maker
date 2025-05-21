"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Curso } from "@/types/curso"
import { Badge } from "@/components/ui/badge"

interface CursoCardProps {
  curso: Curso
}

export default function CursoCard({ curso }: CursoCardProps) {
  const [imageLoading, setImageLoading] = useState(true)

  return (
    <Link href={`/curso/${curso.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48">
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
          )}
          <Image 
            src={curso.thumbnail || "/placeholder.svg"} 
            alt={curso.titulo} 
            fill 
            className={`object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoadingComplete={() => setImageLoading(false)}
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2 text-gray-800">{curso.titulo}</h3>
          <p className="text-sm text-gray-600 mb-2">Por {curso.instrutor}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              {curso.categoria}
            </Badge>
            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
              {curso.nivel}
            </Badge>
          </div>

          <div className="mt-4 text-sm text-gray-500">{curso.aulas.length} aulas</div>
        </div>
      </div>
    </Link>
  )
}
