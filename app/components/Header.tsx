"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="text-xl font-bold">MODEST SHOP</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/shop" className="hover:underline">Shop</Link>
        <Link href="/cart" className="hover:underline">Cart</Link>
        <Link href="/login" className="hover:underline">Login</Link>
        <Link href="/checkout" className="hover:underline">Checkout</Link>

      </nav>
    </header>
  );
}
