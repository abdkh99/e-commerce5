"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen p-8 bg-[#0a0a0a]">
      <h1 className="text-3xl font-bold mb-8 text-[#ffffff]">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-[#a0a0a0] text-center">Your cart is empty</p>
      ) : (
        <div className="grid gap-8">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[#3a3a3a] transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="relative h-16 w-16">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#ffffff]">
                    {item.name}
                  </h2>
                  <p className="text-[#a0a0a0]">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="p-2 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
                  >
                    <FaMinus className="text-[#ffffff]" />
                  </button>
                  <span className="text-[#ffffff]">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
                  >
                    <FaPlus className="text-[#ffffff]" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
                >
                  <FaTrash className="text-[#ff4444]" />
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
            <h2 className="text-xl font-bold text-[#ffffff]">Total</h2>
            <span className="text-2xl font-bold text-[#00ff88]">
              ${total.toFixed(2)}
            </span>
          </div>
          <button className="px-4 py-2 bg-[#00ff88] text-[#0a0a0a] rounded-lg hover:bg-[#00cc66] transition-colors flex items-center justify-center w-full  text-lg font-bold">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
