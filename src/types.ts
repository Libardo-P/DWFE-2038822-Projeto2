// src/types.ts
export interface Item {
  id: string | number;
  image: string;
  title: string;
  location: string;
  price: number;
}

export type Category = string;