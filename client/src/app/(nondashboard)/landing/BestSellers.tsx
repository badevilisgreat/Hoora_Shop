"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Frido Orthotics Posture Corrector",
    image: "/product-1.jpg",
    price: 843,
    oldPrice: 1343,
    discount: "38% OFF",
    rating: 4.2,
    reviews: 450,
    isNew: false,
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

  // 🟡 Helper to determine items per view based on screen width
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const visibleCount = getVisibleCount();

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Best Sellers
          </h2>
          <button className="text-sm font-semibold text-gray-700 hover:text-black transition">
            View all →
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-md p-1.5 sm:p-2 rounded-full hover:bg-gray-100 z-20 transition"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>

          {/* Product Track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * (100 / visibleCount)}%)`,
              }}
            >
              {products.concat(products.slice(0, 4)).map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2"
                >
                  <div className="bg-white rounded-[16px] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative w-full aspect-[4/5] bg-[#FFFBEA] overflow-hidden rounded-t-[16px] flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-6 transition-transform duration-500 ease-in-out hover:scale-105"
                      />
                      {item.isNew && (
                        <span className="absolute top-3 left-3 bg-black text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded">
                          New
                        </span>
                      )}
                      <span className="absolute top-3 right-3 bg-yellow-400 text-black text-[10px] sm:text-xs font-semibold px-2 py-1 rounded">
                        {item.discount}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="p-3 sm:p-4 flex flex-col flex-grow">
                      <p className="text-[13px] sm:text-[14px] font-medium text-gray-900 leading-snug mb-2 min-h-[36px] sm:min-h-[40px]">
                        {item.name}
                      </p>

                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 mb-1">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-800">
                          {item.rating}
                        </span>
                        <span className="text-gray-400 text-xs">
                          ({item.reviews})
                        </span>
                      </div>

                      <div className="text-xs sm:text-sm flex items-center gap-2 mb-3">
                        <span className="font-bold text-black text-[14px] sm:text-[15px]">
                          ₹{item.price}
                        </span>
                        <span className="text-gray-400 line-through text-xs">
                          ₹{item.oldPrice}
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <Button
                        className="w-full mt-auto bg-black text-white font-semibold py-2 sm:py-2.5 rounded-md text-xs sm:text-sm hover:bg-yellow-400 hover:text-black transition-all duration-300"
                      >
                        ADD TO CART
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute -right-3 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-md p-1.5 sm:p-2 rounded-full hover:bg-gray-100 z-20 transition"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
