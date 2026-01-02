"use client";

import { useState } from "react";

type Product = {
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
  colors: string[];
  sizes: string[];
};

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const [products, setProducts] = useState<Product[]>([]);

  const [form, setForm] = useState<Product>({
    slug: "",
    name: "",
    price: 0,
    category: "",
    image: "",
    colors: [],
    sizes: [],
  });

  const login = () => {
    if (password === "admin123") {
      setLoggedIn(true);
    } else {
      alert("Wrong password");
    }
  };

  const addProduct = () => {
    if (!form.slug || !form.name || !form.image) {
      alert("Please fill all required fields");
      return;
    }

    setProducts([...products, form]);

    setForm({
      slug: "",
      name: "",
      price: 0,
      category: "",
      image: "",
      colors: [],
      sizes: [],
    });
  };

  const deleteProduct = (slug: string) => {
    setProducts(products.filter((p) => p.slug !== slug));
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-80">
          <h1 className="text-xl font-bold mb-4 text-center">
            Admin Login
          </h1>

          <input
            type="password"
            placeholder="Enter admin password"
            className="w-full border px-3 py-2 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            className="w-full bg-black text-white py-2 rounded"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* ADD PRODUCT FORM */}
      <div className="bg-gray-100 p-6 rounded-xl mb-10 max-w-xl">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>

        <input
          placeholder="Slug (example: blue-abaya)"
          className="w-full border p-2 rounded mb-3"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />

        <input
          placeholder="Product Name"
          className="w-full border p-2 rounded mb-3"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded mb-3"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: Number(e.target.value) })
          }
        />

        <input
          placeholder="Category (Dresses / Cosmetics)"
          className="w-full border p-2 rounded mb-3"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          placeholder="Image URL (example: /products/abaya.jpg)"
          className="w-full border p-2 rounded mb-3"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <input
          placeholder="Colors (comma separated: Black,Brown)"
          className="w-full border p-2 rounded mb-3"
          onChange={(e) =>
            setForm({
              ...form,
              colors: e.target.value.split(",").map((c) => c.trim()),
            })
          }
        />

        <input
          placeholder="Sizes (comma separated: S,M,L,XL)"
          className="w-full border p-2 rounded mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              sizes: e.target.value.split(",").map((s) => s.trim()),
            })
          }
        />

        <button
          onClick={addProduct}
          className="bg-black text-white px-6 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* PRODUCT LIST */}
      <h2 className="text-xl font-semibold mb-4">Products</h2>

      <div className="space-y-3 max-w-xl">
        {products.map((p) => (
          <div
            key={p.slug}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-500">
                ₹{p.price} • {p.category}
              </p>
              <p className="text-xs text-gray-400">
                Colors: {p.colors.join(", ")} | Sizes: {p.sizes.join(", ")}
              </p>
            </div>

            <button
              onClick={() => deleteProduct(p.slug)}
              className="text-red-600 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
