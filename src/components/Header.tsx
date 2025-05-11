// src/components/Header.tsx
import { useState, useRef, useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'

interface HeaderProps {
  onSearch: Dispatch<SetStateAction<string>>
  onLoginClick: () => void
}

export function Header({ onSearch, onLoginClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Fecha o dropdown se clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuOpen && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <header className="bg-white border-b">
      <div className="max-w-screen-lg mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="font-bold text-xl">LOGO</div>

        {/* Search */}
        <input
          type="text"
          placeholder="O que procura?"
          onChange={e => onSearch(e.target.value)}
          className="flex-1 max-w-md mx-4 px-4 py-2 border rounded-full focus:outline-none focus:ring"
        />

        {/* Perfil + Dropdown */}
        <div className="relative" ref={containerRef}>
          <button
            onClick={() => setMenuOpen(open => !open)}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center focus:outline-none"
            aria-label="Menu de perfil"
          >
            {/* Podes substituir por ícone real */}
            👤
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-20">
              <button
                onClick={() => { setMenuOpen(false); onLoginClick() }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Entrar
              </button>
              <button
                onClick={() => { /* futuro Registrar */ }}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Registar
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
