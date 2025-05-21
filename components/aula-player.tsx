"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import type { Aula } from "@/types/curso"

const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false })

interface AulaPlayerProps {
  aula: Aula
}

export default function AulaPlayer({ aula }: AulaPlayerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="space-y-4">
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
        <ReactPlayer url={aula.videoUrl} width="100%" height="100%" controls />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">{aula.titulo}</h2>
        <p className="text-gray-700">{aula.descricao}</p>
      </div>
    </div>
  )
}
