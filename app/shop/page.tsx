"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = [
  {
    name: "Rose Face Cream",
    price: 499,
    category: "Cosmetics",
    image: "/products/rose-cream.jpg",
  },
  {
    name: "Gold Plated Necklace",
    price: 1999,
    category: "Jewellery",
    image: "/products/necklace.jpg",
  },
  {
    name: "Elegant Black Abaya",
    price: 2499,
    category: "Dresses",
    image: "/products/abaya.jpg",
  },
];

export default function Shop() {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Shop Collection
      </h1>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Cosmetics", "Jewellery", "Dresses"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-black text-white"
                : "bg-white hover:bg-black hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
