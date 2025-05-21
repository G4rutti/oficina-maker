export interface Aula {
  id: string
  titulo: string
  videoUrl: string
  descricao: string
}

export interface Curso {
  id: string
  titulo: string
  instrutor: string
  categoria: string
  nivel: string
  thumbnail: string
  aulas: Aula[]
}
