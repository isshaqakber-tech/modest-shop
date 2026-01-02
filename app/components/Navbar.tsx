"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Modest Shop
        </Link>

        <div className="flex gap-6 items-center">
          <Link href="/" className="text-gray-800 font-medium hover:text-emerald-700 transition">
            Home
          </Link>

          <Link href="/shop" className="text-gray-800 font-medium hover:text-emerald-700 transition">
            Shop
          </Link>

          <Link href="/cart" className="relative text-gray-800 font-medium hover:text-emerald-700 transition">
            Cart
            {mounted && cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
