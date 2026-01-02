"use client";

import { createContext, useContext, useState } from "react";

export type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
  colors: string[];
  sizes: string[];
};

type ProductContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (slug: string) => void;
};

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([
    {
      slug: "black-abaya",
      name: "Elegant Black Abaya",
      price: 2499,
      category: "Dresses",
      image: "/products/abaya.jpg",
      colors: ["Black", "Brown"],
      sizes: ["S", "M", "L", "XL"],
    },
  ]);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const deleteProduct = (slug: string) => {
    setProducts((prev) => prev.filter((p) => p.slug !== slug));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used inside ProductProvider");
  return context;
}
