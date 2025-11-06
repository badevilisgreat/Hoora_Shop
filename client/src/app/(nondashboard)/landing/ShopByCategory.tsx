"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Exterior Care",
    image: "/category-exterior.jpg",
  },
  {
    id: 2,
    name: "Interior Care",
    image: "/category-interior.jpg",
  },
  {
    id: 3,
    name: "Complete Kits",
    image: "/category-complete.jpg",
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-10 text-left md:text-left">
          Shop by Category
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md cursor-pointer group bg-gray-100"
            >
              {/* Image */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500" />

              {/* Text */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
                <p className="text-lg md:text-xl font-semibold drop-shadow-md">
                  {cat.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
