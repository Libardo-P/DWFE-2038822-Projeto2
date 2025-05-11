// src/App.tsx
import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { CategoryBar } from './components/CategoryBar'
import { CardGrid } from './components/CardGrid'
import { Pagination } from './components/Pagination'
import { LoginForm } from './components/LoginForm'
import type { Item, Category } from './types'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory]     = useState<Category>('Eletrónica')
  const [items, setItems]           = useState<Item[]>([])
  const [page, setPage]             = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading]       = useState(false)
  const [showLogin, setShowLogin]   = useState(false)
  const perPage = 12

  useEffect(() => {
    // futuro fetch de items
  }, [searchTerm, category, page])

  if (showLogin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 relative">
        <LoginForm
          onSubmit={(email, password, remember) => {
            console.log('Login:', { email, password, remember })
            setShowLogin(false)
          }}
        />
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-gray-700"
          aria-label="Fechar login"
        >
          ✕
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header global */}
      <Header
        onSearch={setSearchTerm}
        onLoginClick={() => setShowLogin(true)}
      />

      {/* Barra de categorias reduzida */}
      <CategoryBar
        categories={['Eletrónica','Moda','Carros','Imóveis','Serviços','Informática']}
        active={category}
        onChange={c => {
          setCategory(c)
          setPage(1)
        }}
      />

      {/* Conteúdo principal: skeleton, grid ou “nenhum artigo” */}
      <main className="flex-1 max-w-screen-lg mx-auto w-full p-4">
        {loading ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: perPage }).map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        ) : items.length ? (
          <CardGrid items={items} loading={false} />
        ) : (
          <div className="text-center text-gray-500 py-8">
            Nenhum artigo encontrado.
          </div>
        )}
      </main>

      {/* Footer com paginação */}
      <footer className="p-4 text-center text-sm text-gray-400">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPrev={() => setPage(p => Math.max(1, p - 1))}
          onNext={() => setPage(p => Math.min(totalPages, p + 1))}
        />
        <div className="mt-2">
          © {new Date().getFullYear()} 2038822. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
