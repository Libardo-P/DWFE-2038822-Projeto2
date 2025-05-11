// src/components/Header.tsx
import type { Dispatch, SetStateAction } from 'react'

interface HeaderProps {
  onSearch: Dispatch<SetStateAction<string>>
}

export function Header({ onSearch }: HeaderProps) {
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

        {/* Perfil (icone redondo) */}
        <div className="w-10 h-10 bg-gray-200 rounded-full" />
      </div>
    </header>
  )
}
