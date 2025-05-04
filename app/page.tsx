"use client";

import { products } from "../data/products";
import Image from "next/image";
import { FaShoppingCart, FaStar, FaRegStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen p-8 bg-[#0a0a0a]">
      <div className="max-w-[1800px] mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-[#ffffff] text-center">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-200 group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 to-[#00ff88]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {product.features.map((feature: string) => (
                    <motion.span
                      key={feature}
                      whileHover={{ scale: 1.1 }}
                      className="bg-[#2a2a2a] text-[#00ff88] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-[#ffffff] mb-2 group-hover:text-[#00ff88] transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-[#a0a0a0] line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-[#00ff88]"
                        whileHover={{ scale: 1.2 }}
                      >
                        {i < product.rating ? <FaStar /> : <FaRegStar />}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-[#00ff88]">
                      ${product.price}
                    </p>
                    <p className="text-sm text-[#a0a0a0]">
                      {product.stock} in stock
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                    className="bg-[#00ff88] text-[#0a0a0a] px-4 py-2 rounded-lg hover:bg-[#00cc66] transition-colors flex items-center space-x-2"
                  >
                    <FaShoppingCart />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
