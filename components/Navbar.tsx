"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-[#21212c] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-wider text-[#00ff88] text-text-primary"
            >
              Coffee Shop
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-surface-light text-white hover:text-[#00ff88] transition-colors">
              <FaSearch className="text-text-primary" />
            </button>
            <Link
              href="/cart"
              className="relative p-2 rounded-full text-white hover:bg-surface-light transition-colors hover:text-[#00ff88]"
            >
              <FaShoppingCart className="text-text-primary " />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center hover:text-[#00ff88]">
                  {cart.length}
                </span>
              )}
            </Link>
            <button className="p-2 rounded-full hover:bg-surface-light transition-colors hover:text-[#00ff88] text-white">
              <FaUser className="text-text-primary" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
