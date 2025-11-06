"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Ceramic Wash",
    image: "/product-1.jpg",
    price: 843,
    oldPrice: 1343,
    discount: "38% OFF",
    rating: 4.2,
    reviews: 450,
    isNew: true,
  },
  {
    id: 2,
    name: "Polish Applicator Pads",
    image: "/product-2.jpg",
    price: 843,
    oldPrice: 1343,
    discount: "38% OFF",
    rating: 4.2,
    reviews: 450,
  },
  {
    id: 3,
    name: "Bucket Wash Combo",
    image: "/product-3.jpg",
    price: 843,
    oldPrice: 1343,
    discount: "38% OFF",
    rating: 4.2,
    reviews: 450,
  },
  {
    id: 4,
    name: "Microfiber Cloth Pack",
    image: "/product-4.jpg",
    price: 843,
    oldPrice: 1343,
    discount: "38% OFF",
    rating: 4.2,
    reviews: 450,
  },
  {
    id: 5,
    name: "Dashboard Dazzle",
    image: "/product-1.jpg",
    price: 799,
    oldPrice: 999,
    discount: "20% OFF",
    rating: 4.4,
    reviews: 320,
  },
  {
    id: 6,
    name: "Tyre Gloss",
    image: "/product-2.jpg",
    price: 899,
    oldPrice: 1199,
    discount: "25% OFF",
    rating: 4.3,
    reviews: 220,
  },
];

export default function BestSellers() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % products.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + products.length) % products.length);

  // Auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, []);

  // Compute visible items (4 at a time)
  const visibleProducts = [];
  for (let i = 0; i < 4; i++) {
    visibleProducts.push(products[(current + i) % products.length]);
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Best Sellers</h2>
          <button className="text-sm font-semibold text-gray-700 hover:text-black transition">
            View all →
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-sm p-2 rounded-full hover:bg-gray-100 z-20"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Product Track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]"
              style={{
                transform: `translateX(-${current * (100 / 4)}%)`,
              }}
            >
              {products.concat(products.slice(0, 4)).map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 w-[calc(25%-1rem)] sm:w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 mx-2"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/5] bg-yellow-50 overflow-hidden rounded-t-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-6 transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                    {item.isNew && (
                      <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
                        New
                      </span>
                    )}
                    <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
                      {item.discount}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col items-center text-center space-y-1">
                    <p className="text-sm font-medium text-gray-900 min-h-[40px]">
                      {item.name}
                    </p>

                    <div className="flex justify-center items-center gap-1 text-sm text-gray-600">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{item.rating}</span>
                      <span className="text-gray-400">({item.reviews})</span>
                    </div>

                    <div className="text-sm">
                      <span className="font-bold text-black mr-1">
                        ₹{item.price}
                      </span>
                      <span className="text-gray-400 line-through text-xs">
                        ₹{item.oldPrice}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                      className="w-full mt-3 bg-black text-white font-semibold py-2 rounded-md text-sm hover:bg-yellow-400 hover:text-black hover:scale-[1.02] transition-all duration-300"
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-sm p-2 rounded-full hover:bg-gray-100 z-20"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
