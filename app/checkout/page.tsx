"use client";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    if (cart.length === 0) return alert("Cart is empty");

    const options: any = {
      key: "rzp_test_RyGCYtsbYvWWyp", // replace with your Razorpay test key
      amount: total * 100, // in paise
      currency: "INR",
      name: "Modest Shop",
      description: "Test Payment",
      handler: function (response: any) {
        setOrderPlaced(true);
        alert(`Payment Successful. Payment ID: ${response.razorpay_payment_id}`);
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

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Header />
      <main className="px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {orderPlaced ? (
          <div className="p-6 bg-green-100 border rounded">
            <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
            <p>Thank you for your purchase. Your order is confirmed.</p>
          </div>
        ) : cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <li key={index} className="border p-4 flex justify-between">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-bold mb-4">Total: ₹{total}</p>
            <button
              onClick={handlePayment}
              className="bg-green-600 text-white px-6 py-3 rounded"
            >
              Pay Now
            </button>
          </>
        )}
      </main>
    </>
  );
}
