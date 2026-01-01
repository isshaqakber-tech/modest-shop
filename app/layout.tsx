import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Modest Shop",
  description: "Luxury Cosmetics, Jewellery & Modest Fashion",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <CartProvider>
  <Navbar />
  {children}
  <Footer />
</CartProvider>

      </body>
    </html>
  );
}

