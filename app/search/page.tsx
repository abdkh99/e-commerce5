"use client";

import React, { useState, useMemo } from "react";
import { products, Product } from "../../data/products";
import Link from "next/link";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [selectedFeature, setSelectedFeature] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // Get all unique features from products
  const allFeatures = useMemo(() => {
    const features = new Set<string>();
    products.forEach((product) => {
      product.features.forEach((feature) => features.add(feature));
    });
    return Array.from(features).sort();
  }, []);

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Search by name or description
        const matchesSearch =
          searchTerm === "" ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase());

        // Filter by price range
        const matchesPrice =
          product.price >= priceRange.min && product.price <= priceRange.max;

        // Filter by feature
        const matchesFeature =
          selectedFeature === "" || product.features.includes(selectedFeature);

        return matchesSearch && matchesPrice && matchesFeature;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price;
          case "price-high":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          case "name":
          default:
            return a.name.localeCompare(b.name);
        }
      });
  }, [searchTerm, priceRange, selectedFeature, sortBy]);

  return (
    <div className="min-h-[70vh] p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#00ff88]">
          Search for a product
        </h2>

        {/* Search and Filters */}
        <div className="bg-[#232336] p-6 rounded-lg shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Search
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded bg-[#181824] text-white border border-[#33334d] focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
                placeholder="Search by product name or description"
              />
            </div>

            {/* Price Range */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Price range
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange((prev) => ({
                      ...prev,
                      min: Number(e.target.value),
                    }))
                  }
                  className="w-1/2 px-3 py-2 rounded bg-[#181824] text-white border border-[#33334d] focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
                  placeholder="from"
                />
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange((prev) => ({
                      ...prev,
                      max: Number(e.target.value),
                    }))
                  }
                  className="w-1/2 px-3 py-2 rounded bg-[#181824] text-white border border-[#33334d] focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
                  placeholder="to"
                />
              </div>
            </div>

            {/* Feature Filter */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Features
              </label>
              <select
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}
                className="w-full px-4 py-2 rounded bg-[#181824] text-white border border-[#33334d] focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
              >
                <option value="">All features</option>
                {allFeatures.map((feature) => (
                  <option key={feature} value={feature}>
                    {feature}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 rounded bg-[#181824] text-white border border-[#33334d] focus:outline-none focus:ring-2 focus:ring-[#00ff88]"
              >
                <option value="name">Name</option>
                <option value="price-low">Lowest Price First</option>
                <option value="price-high">Highest Price First</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-white text-center">
            results were found {filteredProducts.length} Products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <div className="bg-[#232336] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#00ff88] font-bold">
                        ${product.price}
                      </span>
                      <span className="text-yellow-400 text-sm">
                        ★ {product.rating}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-[#33334d] text-white px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-white opacity-60 py-12">
            <p className="text-xl">No products were found.</p>
            <p className="text-sm mt-2">Try changing the search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
