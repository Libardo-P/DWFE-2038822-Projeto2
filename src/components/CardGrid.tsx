// src/components/CardGrid.tsx
import type { Item } from '../types';
import { Card } from './Card';

type CardGridProps = {
  items: Item[];
  loading: boolean;
};

export function CardGrid({ items, loading }: CardGridProps) {
  const gridClasses = "grid gap-6 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-lg mx-auto";

  if (loading) {
    return (
      <div className={gridClasses}>
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx} className="animate-pulse bg-white rounded-lg h-48" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return <p className="p-4 text-center text-gray-500">Nenhum artigo encontrado.</p>;
  }

  return (
    <main className={gridClasses}>
      {items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </main>
  );
}