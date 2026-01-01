import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    name: "Rose Face Cream",
    price: 499,
    image: "/products/rose-cream.jpg",
  },
  {
    name: "Gold Plated Necklace",
    price: 1999,
    image: "/products/necklace.jpg",
  },
  {
    name: "Elegant Black Abaya",
    price: 2499,
    image: "/products/abaya.jpg",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative h-[90vh] w-full">
        <Image
          src="/home.jpg"
          alt="Modest Shop"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Modest Luxury Store
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Cosmetics • Jewellery • Muslim Dresses
            </p>

            <Link
              href="/shop"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow hover:shadow-xl transition bg-white"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={500}
                className="object-cover w-full h-[350px]"
              />

              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="font-bold mt-2">₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-block border border-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
