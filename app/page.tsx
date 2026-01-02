"use client";

import Image from "next/image";
import Link from "next/link";
import { useProducts } from "./context/ProductContext";
import { useCart } from "./context/CartContext";

export default function Home() {
  const { products } = useProducts();
  const { addToCart } = useCart();

  const featured = products.slice(0, 3);

  return (
    <div className="bg-[#faf9f7]">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Modest Luxury, <br />
            <span className="text-emerald-700">Redefined</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Discover premium cosmetics, elegant jewellery, and timeless modest fashion curated for modern women.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/shop"
              className="bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 transition"
            >
              Explore Collection
            </Link>

            <Link
              href="/shop"
              className="border border-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/home.jpg"
            alt="Modest Shop"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Cosmetics", image: "/products/rose-cream.jpg" },
            { title: "Jewellery", image: "/products/necklace.jpg" },
            { title: "Modest Wear", image: "/products/abaya.jpg" },
          ].map((cat) => (
            <div
              key={cat.title}
              className="relative h-[300px] rounded-2xl overflow-hidden group"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold tracking-wide">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Editor’s Picks
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {featured.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <Link href={`/product/${item.slug}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={450}
                  className="w-full h-[320px] object-cover"
                />
              </Link>

              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="mt-2 font-bold text-gray-900">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 w-full bg-gray-900 text-white py-2 rounded-full hover:bg-black transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-emerald-700 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-white text-center">
          <div>
            <h4 className="font-bold text-xl">Premium Quality</h4>
            <p className="mt-2 text-sm opacity-90">
              Handpicked products with uncompromised quality.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl">Secure Shopping</h4>
            <p className="mt-2 text-sm opacity-90">
              Trusted & safe checkout experience.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl">Fast Support</h4>
            <p className="mt-2 text-sm opacity-90">
              We’re here to help you anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
