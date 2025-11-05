"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  { id: 1, image: "/hero-slide-1.png", alt: "Hero Slide 1" },
  { id: 2, image: "/hero-slide-2.png", alt: "Hero Slide 2" },
  { id: 3, image: "/hero-slide-3.png", alt: "Hero Slide 3" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden mt-[70px]">
      {/* === SLIDER CONTAINER === */}
      <div
        className="flex transition-transform duration-[700ms] ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={slide.id === 1}
            />
          </div>
        ))}
      </div>

      {/* === ARROWS === */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full z-20 backdrop-blur-sm"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full z-20 backdrop-blur-sm"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* === DOT INDICATORS === */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white scale-110 shadow-md"
                : "bg-gray-400/70 hover:bg-gray-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
