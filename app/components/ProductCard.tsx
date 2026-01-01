"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

type Product = {
  name: string;
  price: number;
  category: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-xl transition bg-white">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={350}
        className="rounded-xl object-cover"
      />

      <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold mt-2">₹{product.price}</p>

      <button
        onClick={() =>
          addToCart({ name: product.name, price: product.price })
        }
        className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:scale-105 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
