"use client";

import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { cart } = useCart();

  // ✅ Hydration fix
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // ✅ Dynamic Razorpay load & payment
  const payNow = async () => {
    if (total === 0) {
      alert("Cart is empty");
      return;
    }

    if (typeof window === "undefined") return;

    if (!(window as any).Razorpay) {
      // dynamically load Razorpay script
      await new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }

    const options = {
      key: "rzp_test_RyZH8XMJvLEtHa", // TEST KEY
      amount: total * 100,
      currency: "INR",
      name: "Modest Shop",
      description: "Order Payment",
      handler: function (response: any) {
        alert(
          "Payment Successful ✅\nPayment ID: " +
            response.razorpay_payment_id
        );
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#000000",
      },
    };

    // @ts-ignore
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
  Your cart is empty. Please add some products.
</p>

      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b py-3"
            >
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}

          <div className="text-xl font-bold mt-6">Total: ₹{total}</div>

          <button
            onClick={payNow}
            className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  );
}
