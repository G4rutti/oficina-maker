import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Code, Cpu, Lightbulb, Rocket } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Explorando o futuro com tecnologia!</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Oficinas práticas para estudantes do ensino médio aprenderem tecnologias emergentes de forma interativa e
            divertida.
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Acessar os Cursos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Sobre o Projeto</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-lg text-gray-700 mb-6">
              Projeto extensionista que aproxima estudantes de tecnologias como programação, robótica e impressão 3D.
              Conduzido por alunos de Engenharia de Software e Sistemas de Informação da UniDomBosco.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Programação</h3>
                <p className="text-gray-600">Aprenda lógica e programação com Arduino e outras plataformas.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Robótica</h3>
                <p className="text-gray-600">Construa e programe robôs utilizando componentes recicláveis.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Impressão 3D</h3>
                <p className="text-gray-600">Aprenda a modelar e imprimir objetos tridimensionais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Themes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Temas das Oficinas</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Introdução à Programação com Arduino</h3>
                  <p className="text-gray-600">
                    Aprenda os fundamentos da programação utilizando a plataforma Arduino.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Robótica com componentes recicláveis</h3>
                  <p className="text-gray-600">
                    Construa robôs funcionais utilizando materiais reciclados e de baixo custo.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Rocket className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Design e Impressão 3D</h3>
                  <p className="text-gray-600">
                    Aprenda a modelar objetos e utilizar impressoras 3D para criar protótipos.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Internet das Coisas na prática</h3>
                  <p className="text-gray-600">
                    Desenvolva projetos conectados à internet para automação e monitoramento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Materials Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Materiais de Apoio</h2>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="h-10 w-10 text-blue-600 mr-4" />
              <p className="text-lg text-gray-700">
                Em breve você encontrará aqui apostilas, vídeos tutoriais, exercícios e links úteis para acompanhar as
                oficinas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Apostilas</h3>
                <p className="text-gray-600 text-sm">Em breve</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Vídeos</h3>
                <p className="text-gray-600 text-sm">Em breve</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Exercícios</h3>
                <p className="text-gray-600 text-sm">Em breve</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Links Úteis</h3>
                <p className="text-gray-600 text-sm">Em breve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para começar sua jornada tecnológica?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Acesse nossa plataforma de cursos e comece a explorar o mundo da tecnologia hoje mesmo!
          </p>
          <Link href="/login">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
              Acessar os Cursos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
