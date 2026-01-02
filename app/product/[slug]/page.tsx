"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";
import { useState } from "react";

export default function ProductPage() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  // 🔹 RELATED & RECENT LOGIC (IMPORTANT)
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  const recentProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* MAIN PRODUCT */}
      <div className="grid md:grid-cols-2 gap-10">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={600}
          className="rounded-2xl"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-3">{product.description}</p>
          <p className="text-2xl font-bold mt-4">₹{product.price}</p>

          {/* COLOR */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Color</p>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-4 py-2 border rounded ${
                    selectedColor === c ? "bg-black text-white" : ""
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Size</p>
            <div className="flex gap-3 flex-wrap">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === s ? "bg-black text-white" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-8 bg-black text-white px-8 py-3 rounded-xl">
            Add to Cart
          </button>
        </div>
      </div>

      {/* 🔥 RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/product/${item.slug}`}
                className="border rounded-xl p-4 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover rounded-lg"
                />
                <h3 className="mt-3 font-semibold">{item.name}</h3>
                <p className="font-bold">₹{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 🔥 RECENT PRODUCTS */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Recently Added</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recentProducts.map((item) => (
            <Link
              key={item.slug}
              href={`/product/${item.slug}`}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-lg"
              />
              <h3 className="mt-3 font-semibold">{item.name}</h3>
              <p className="font-bold">₹{item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
