"use client";

import React, { useRef, useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Landing = () => {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/landing-splash.jpg"
        alt="Rentify Rental Platform Hero Section"
        fill
        className="z-0 object-cover object-center"
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white">
        {/* Title */}
        <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
          Find Your Perfect Rental Home
        </h1>

        {/* Subtitle */}
        <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
          Discover apartments, houses, and flats for rent — all in one place.
        </p>

        {/* Search Bar (square with rounded corners) */}
        <form onSubmit={onSubmit} className="w-full max-w-xl">
          <div
            role="search"
            aria-label="Property search"
            onClick={() => inputRef.current?.focus()}
            className="group flex cursor-text items-center overflow-hidden rounded-xl border border-white/25 bg-white/10 backdrop-blur-md shadow-lg transition hover:border-white/35"
          >
            <div className="flex items-center px-3">
              <Search className="h-5 w-5 text-gray-300" aria-hidden />
            </div>

            <label htmlFor="search" className="sr-only">
              Search properties, cities, or landmarks
            </label>
            <Input
              id="search"
              ref={inputRef}
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search properties, cities, or landmarks..."
              className="h-12 flex-1 border-0 bg-transparent px-2 text-white placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring-0"
              autoComplete="off"
            />

            {/* optional thin divider to emphasize the square look */}
            <span className="mx-2 hidden h-6 w-px bg-white/20 md:block" />

            <Button
              type="submit"
              className="m-1 rounded-lg bg-white px-5 py-2 font-medium text-black transition hover:bg-gray-200"
            >
              Search
            </Button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-linear-to-t from-black/50 to-transparent">
          <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-gray-300">
            © {new Date().getFullYear()} <span className="font-medium text-white">Rentify</span>. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Landing;
