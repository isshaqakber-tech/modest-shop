export default function Footer() {
  return (
    <footer className="border-t bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold mb-2">Modest Shop</h3>
          <p className="text-gray-600 text-sm">
            Luxury cosmetics, jewellery & modest fashion for modern women.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/cart" className="hover:underline">Cart</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-600">Email: support@modestshop.com</p>
          <p className="text-sm text-gray-600">Phone: +91 60053 84083</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 border-t py-4">
        Isshaq © {new Date().getFullYear()} Modest Shop. All rights reserved.
      </div>
    </footer>
  );
}
