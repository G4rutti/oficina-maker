"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cursos } from "@/mock/cursos"
import type { Aula } from "@/types/curso"
import AulaPlayer from "@/components/aula-player"
import PlaylistItem from "@/components/playlist-item"
import LoadingSpinner from "@/components/loading-spinner"

export default function CursoPage({ params }: { params: { id: string } }) {
  const curso = cursos.find((c) => c.id === params.id)
  const [aulaAtual, setAulaAtual] = useState<Aula | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (curso && curso.aulas.length > 0) {
      // Simular carregamento
      setIsLoading(true)
      const timer = setTimeout(() => {
        setAulaAtual(curso.aulas[0])
        setIsLoading(false)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [curso])

  // Trocar aula com loading
  const trocarAula = (aula: Aula) => {
    setIsLoading(true)
    // Simular carregamento ao trocar de aula
    setTimeout(() => {
      setAulaAtual(aula)
      setIsLoading(false)
    }, 400)
  }

  if (!curso) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Curso não encontrado</h1>
        <Link href="/" className="text-blue-600 hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={16} />
          Voltar para Home
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:underline flex items-center gap-2 mb-6">
        <ArrowLeft size={16} />
        Voltar para Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">{curso.titulo}</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Coluna Principal - Player de Vídeo */}
        <div className="lg:w-2/3">
          {isLoading ? (
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <LoadingSpinner size={40} className="text-white" />
            </div>
          ) : (
            aulaAtual && <AulaPlayer aula={aulaAtual} />
          )}
        </div>

        {/* Coluna Lateral - Playlist */}
        <div className="lg:w-1/3 bg-gray-50 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Aulas do Curso</h2>
          <div className="space-y-2">
            {curso.aulas.map((aula) => (
              <PlaylistItem
                key={aula.id}
                aula={aula}
                isActive={aulaAtual?.id === aula.id}
                onClick={() => trocarAula(aula)}
                isLoading={isLoading && aulaAtual?.id === aula.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
