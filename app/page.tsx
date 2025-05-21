"use client"

import { useState, useEffect } from "react"
import { cursos } from "@/mock/cursos"
import CursoCard from "@/components/curso-card"
import type { Curso } from "@/types/curso"
import SearchBar from "@/components/search-bar"
import Link from "next/link"
import CursoSkeleton from "@/components/curso-skeleton"
import LoadingSpinner from "@/components/loading-spinner"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoriaFiltro, setCategoriaFiltro] = useState("")
  const [nivelFiltro, setNivelFiltro] = useState("")
  const [cursosFiltrados, setCursosFiltrados] = useState<Curso[]>(cursos)
  const [isLoading, setIsLoading] = useState(false)

  // Extrair categorias e níveis únicos para os filtros
  const categorias = Array.from(new Set(cursos.map((curso) => curso.categoria)))
  const niveis = Array.from(new Set(cursos.map((curso) => curso.nivel)))

  // Aplicar filtros quando qualquer critério mudar
  useEffect(() => {
    const aplicarFiltros = async () => {
      // Mostrar loading
      setIsLoading(true)

      // Simular um pequeno delay para mostrar o efeito de loading (remover em produção)
      await new Promise((resolve) => setTimeout(resolve, 300))

      const resultados = cursos.filter((curso) => {
        // Filtro de texto (título, instrutor, categoria e descrição da primeira aula)
        const matchesSearch =
          searchTerm === "" ||
          curso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          curso.instrutor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          curso.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (curso.aulas[0]?.descricao && curso.aulas[0].descricao.toLowerCase().includes(searchTerm.toLowerCase()))

        // Filtro de categoria
        const matchesCategoria = categoriaFiltro === "" || curso.categoria === categoriaFiltro

        // Filtro de nível
        const matchesNivel = nivelFiltro === "" || curso.nivel === nivelFiltro

        return matchesSearch && matchesCategoria && matchesNivel
      })

      setCursosFiltrados(resultados)
      setIsLoading(false)
    }

    aplicarFiltros()
  }, [searchTerm, categoriaFiltro, nivelFiltro])

  // Limpar todos os filtros
  const limparFiltros = () => {
    setSearchTerm("")
    setCategoriaFiltro("")
    setNivelFiltro("")
  }

  // Manipular mudança de busca com loading
  const handleSearch = (termo: string) => {
    setSearchTerm(termo)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Oficina Maker</h1>
            <p className="text-xl mb-8">
              Aprenda habilidades práticas de eletrônica, programação e DIY com nossos cursos gratuitos
            </p>
            <div className="relative max-w-xl mx-auto">
              <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
              <div className="mt-2 text-center">
                <Link href="/pesquisa" className="text-blue-200 hover:text-white text-sm">
                  Pesquisa avançada →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sugestões de Pesquisa */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500">Sugestões:</span>
            {["Arduino", "Raspberry Pi", "Impressão 3D", "Robótica", "Eletrônica"].map((termo) => (
              <button
                key={termo}
                onClick={() => handleSearch(termo)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
              >
                {termo}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos em Destaque */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            {searchTerm || categoriaFiltro || nivelFiltro ? "Resultados da Busca" : "Cursos em Destaque"}
            {isLoading && <LoadingSpinner size={16} className="ml-2" />}
          </h2>
          {(searchTerm || categoriaFiltro || nivelFiltro) && (
            <button onClick={limparFiltros} className="text-sm text-blue-600 hover:text-blue-800">
              Limpar filtros
            </button>
          )}
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="w-full md:w-auto">
            <select
              className="w-full md:w-48 p-2 border border-gray-300 rounded-md"
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value)}
              disabled={isLoading}
            >
              <option value="">Todas as Categorias</option>
              {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-auto">
            <select
              className="w-full md:w-48 p-2 border border-gray-300 rounded-md"
              value={nivelFiltro}
              onChange={(e) => setNivelFiltro(e.target.value)}
              disabled={isLoading}
            >
              <option value="">Todos os Níveis</option>
              {niveis.map((nivel) => (
                <option key={nivel} value={nivel}>
                  {nivel}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resultados com loading state */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <CursoSkeleton key={i} />
              ))}
          </div>
        ) : cursosFiltrados.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Nenhum curso encontrado com os filtros selecionados.</p>
            <button onClick={limparFiltros} className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
              Limpar filtros e mostrar todos os cursos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosFiltrados.map((curso) => (
              <CursoCard key={curso.id} curso={curso} />
            ))}
          </div>
        )}

        {/* Contador de resultados */}
        {!isLoading && cursosFiltrados.length > 0 && (
          <p className="mt-6 text-sm text-gray-500">
            {cursosFiltrados.length} {cursosFiltrados.length === 1 ? "curso encontrado" : "cursos encontrados"}
          </p>
        )}
      </section>
    </div>
  )
}
