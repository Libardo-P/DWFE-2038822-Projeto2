// src/components/Card.tsx
import type { Item } from '../types';

type CardProps = {
  item: Item;
};

export function Card({ item }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4 flex flex-col">
      {/* fixed height container for image */}
      <div className="w-full h-48 bg-gray-100 mb-4">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded" />
      </div>
      <h3 className="text-lg font-semibold truncate mb-1">{item.title}</h3>
      <p className="text-sm text-gray-500 truncate mb-2">{item.location}</p>
      <div className="mt-auto text-blue-600 font-bold text-xl">€{item.price.toFixed(2)}</div>
    </div>
  );
}