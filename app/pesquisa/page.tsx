"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { cursos } from "@/mock/cursos"
import type { Curso } from "@/types/curso"
import CursoCard from "@/components/curso-card"
import SearchBar from "@/components/search-bar"
import CursoSkeleton from "@/components/curso-skeleton"
import LoadingSpinner from "@/components/loading-spinner"

export default function PesquisaPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get("q") || ""

  const [searchTerm, setSearchTerm] = useState(initialQuery)
  const [categoriaFiltro, setCategoriaFiltro] = useState("")
  const [nivelFiltro, setNivelFiltro] = useState("")
  const [cursosFiltrados, setCursosFiltrados] = useState<Curso[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Extrair categorias e níveis únicos para os filtros
  const categorias = Array.from(new Set(cursos.map((curso) => curso.categoria)))
  const niveis = Array.from(new Set(cursos.map((curso) => curso.nivel)))

  // Atualizar a URL quando o termo de busca mudar
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchTerm) {
      params.set("q", searchTerm)
      router.replace(`/pesquisa?${params.toString()}`)
    } else if (initialQuery) {
      router.replace("/pesquisa")
    }
  }, [searchTerm, router, initialQuery])

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
    setCategoriaFiltro("")
    setNivelFiltro("")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-blue-600 hover:underline flex items-center gap-2 mb-6">
          <ArrowLeft size={16} />
          Voltar para Home
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4 flex items-center">
            Pesquisar Cursos
            {isLoading && <LoadingSpinner size={16} className="ml-2" />}
          </h1>
          <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} showSuggestions={true} />
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filtros</h2>
            {(categoriaFiltro || nivelFiltro) && (
              <button
                onClick={limparFiltros}
                className="text-sm text-blue-600 hover:text-blue-800"
                disabled={isLoading}
              >
                Limpar filtros
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-auto">
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Nível</label>
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
        </div>

        {/* Resultados */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{searchTerm ? `Resultados para "${searchTerm}"` : "Todos os Cursos"}</h2>
            {!isLoading && (
              <span className="text-sm text-gray-500">
                {cursosFiltrados.length} {cursosFiltrados.length === 1 ? "curso encontrado" : "cursos encontrados"}
              </span>
            )}
          </div>

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
              <p className="text-lg text-gray-600">Nenhum curso encontrado com os critérios selecionados.</p>
              <p className="mt-2 text-gray-500">Tente outros termos de busca ou remova alguns filtros.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cursosFiltrados.map((curso) => (
                <CursoCard key={curso.id} curso={curso} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
