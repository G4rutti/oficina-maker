"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cursos } from "@/mock/cursos"

interface SearchBarProps {
  onSearch: (term: string) => void
  searchTerm: string
  className?: string
  showSuggestions?: boolean
}

export default function SearchBar({ onSearch, searchTerm, className = "", showSuggestions = false }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<Array<{ id: string; titulo: string; tipo: string }>>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Fechar sugestões quando clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Gerar sugestões baseadas no termo de busca com um pequeno delay
  useEffect(() => {
    const gerarSugestoes = async () => {
      if (searchTerm.length < 2) {
        setSuggestions([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)

      // Simular um pequeno delay para mostrar o efeito de loading (remover em produção)
      await new Promise((resolve) => setTimeout(resolve, 200))

      const term = searchTerm.toLowerCase()
      const cursoSuggestions = cursos
        .filter((curso) => curso.titulo.toLowerCase().includes(term))
        .slice(0, 3)
        .map((curso) => ({ id: curso.id, titulo: curso.titulo, tipo: "curso" }))

      const categoriaSuggestions = Array.from(new Set(cursos.map((curso) => curso.categoria)))
        .filter((categoria) => categoria.toLowerCase().includes(term))
        .slice(0, 2)
        .map((categoria) => ({ id: categoria, titulo: categoria, tipo: "categoria" }))

      const instrutorSuggestions = Array.from(new Set(cursos.map((curso) => curso.instrutor)))
        .filter((instrutor) => instrutor.toLowerCase().includes(term))
        .slice(0, 2)
        .map((instrutor) => ({ id: instrutor, titulo: instrutor, tipo: "instrutor" }))

      setSuggestions([...cursoSuggestions, ...categoriaSuggestions, ...instrutorSuggestions])
      setIsLoading(false)
      setIsOpen(true)
    }

    // Adicionar debounce para evitar muitas requisições em sequência
    const timer = setTimeout(() => {
      gerarSugestoes()
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
    if (e.target.value.length >= 2) {
      setIsLoading(true)
    } else {
      setIsOpen(false)
    }
  }

  const handleSuggestionClick = (suggestion: { titulo: string; tipo: string }) => {
    onSearch(suggestion.titulo)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {isLoading ? (
            <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>
        <Input
          type="text"
          placeholder="Buscar por curso, instrutor ou categoria..."
          className="pl-10 bg-white text-gray-900 w-full"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => searchTerm.length >= 2 && setIsOpen(true)}
        />
        {searchTerm && (
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => {
              onSearch("")
              setIsOpen(false)
            }}
            aria-label="Limpar busca"
          >
            <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Sugestões de busca */}
      {isOpen && showSuggestions && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {isLoading ? (
            <div className="py-8 text-center text-gray-500">
              <Loader2 className="h-5 w-5 mx-auto mb-2 animate-spin" />
              <p>Buscando sugestões...</p>
            </div>
          ) : suggestions.length > 0 ? (
            <ul className="py-1">
              {suggestions.map((suggestion, index) => (
                <li key={`${suggestion.tipo}-${index}`}>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <span className="flex-1">{suggestion.titulo}</span>
                    <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full ml-2">
                      {suggestion.tipo === "curso"
                        ? "Curso"
                        : suggestion.tipo === "categoria"
                          ? "Categoria"
                          : "Instrutor"}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-6 text-center text-gray-500">
              <p>Nenhuma sugestão encontrada</p>
            </div>
          )}
        </div>
      )}

      {/* Sugestões rápidas */}
      {showSuggestions && (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-sm text-gray-500">Sugestões:</span>
          {["Arduino", "Raspberry Pi", "Impressão 3D", "Robótica", "Eletrônica"].map((termo) => (
            <button
              key={termo}
              onClick={() => {
                onSearch(termo)
                setIsOpen(false)
              }}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
              disabled={isLoading}
            >
              {termo}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
