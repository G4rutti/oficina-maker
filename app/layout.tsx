import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Mountain } from "lucide-react"
import { Providers } from "./providers"
import { NavLinks } from "../components/nav-links"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Oficina Maker - Aprenda Eletrônica, Programação e DIY",
  description: "Plataforma de cursos gratuitos sobre eletrônica, programação, robótica e impressão 3D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2">
                  <Mountain className="h-8 w-8 text-blue-600" />
                  <span className="font-bold text-xl text-gray-900">Oficina Maker</span>
                </Link>
                <nav className="hidden md:flex space-x-8">
                  <Link href="/" className="text-gray-600 hover:text-blue-600">
                    Home
                  </Link>
                  <NavLinks />
                </nav>
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Oficina Maker</h3>
                  <p className="text-gray-400">
                    Plataforma de cursos gratuitos sobre eletrônica, programação, robótica e impressão 3D.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link href="/home" className="hover:text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/pesquisa" className="hover:text-white">
                        Cursos
                      </Link>
                    </li>
                    <li>
                      <Link href="/home" className="hover:text-white">
                        Sobre
                      </Link>
                    </li>
                    <li>
                      <Link href="/home" className="hover:text-white">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Categorias</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link href="/pesquisa" className="hover:text-white">
                        Eletrônica
                      </Link>
                    </li>
                    <li>
                      <Link href="/pesquisa" className="hover:text-white">
                        Programação
                      </Link>
                    </li>
                    <li>
                      <Link href="/pesquisa" className="hover:text-white">
                        Robótica
                      </Link>
                    </li>
                    <li>
                      <Link href="/pesquisa" className="hover:text-white">
                        Impressão 3D
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Oficina Maker. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
