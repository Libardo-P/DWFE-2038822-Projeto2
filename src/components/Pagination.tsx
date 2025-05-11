// src/components/Pagination.tsx
export interface PaginationProps {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

export function Pagination({
  page,
  totalPages,
  onPrev,
  onNext,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={onPrev}
        disabled={page <= 1}
        className="px-3 py-1 rounded disabled:opacity-50"
      >
        ← Anterior
      </button>

      <span className="text-sm text-gray-500">
        Página {page} de {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={page >= totalPages}
        className="px-3 py-1 rounded disabled:opacity-50"
      >
        Próxima →
      </button>
    </div>
  )
}
