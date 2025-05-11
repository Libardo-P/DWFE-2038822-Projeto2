// src/components/CategoryBar.tsx
import type { Category } from '../types'

export interface CategoryBarProps {
  categories: Category[]
  active: Category
  onChange: (category: Category) => void
}

export function CategoryBar({
  categories,
  active,
  onChange,
}: CategoryBarProps) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-screen-lg mx-auto px-4">
        <nav className="flex justify-center gap-4 overflow-x-auto py-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => onChange(c)}
              className={`
                flex-shrink-0 text-sm px-4 py-2 rounded-full whitespace-nowrap
                ${c === active 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'}
              `}
            >
              {c}
            </button>
          ))}

          <button
            className="flex-shrink-0 text-sm px-4 py-2 rounded-full whitespace-nowrap bg-gray-200 text-gray-700"
            onClick={() => {/* …mais categorias… */}}
          >
            …mais
          </button>
        </nav>
      </div>
    </div>
  )
}
