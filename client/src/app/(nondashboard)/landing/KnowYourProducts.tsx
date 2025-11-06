"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Video = { id: number; thumbnail: string };

// Replace these with your real thumbnails
const videos: Video[] = [
  { id: 1, thumbnail: "/video-thumb-1.jpg" },
  { id: 2, thumbnail: "/video-thumb-2.jpg" },
  { id: 3, thumbnail: "/video-thumb-3.jpg" },
  { id: 4, thumbnail: "/video-thumb-4.jpg" },
  { id: 5, thumbnail: "/video-thumb-5.jpg" },
];

export default function KnowYourProducts() {
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState<number>(typeof window === "undefined" ? 1440 : window.innerWidth);

  // Responsive items per view (1 / 2 / 4)
  const visibleCount = useMemo(() => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 4;
  }, [width]);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const next = () => setCurrent((i) => (i + 1) % videos.length);
  const prev = () => setCurrent((i) => (i - 1 + videos.length) % videos.length);

  return (
    <section className="py-12 md:py-16 bg-[#f6f7f8]">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            Know your Products
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">
          {/* Prev */}
          <Button
            size="icon"
            variant="outline"
            onClick={prev}
            className="absolute -left-3 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-md hover:bg-white transition"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
          </Button>

          {/* Track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]"
              style={{
                transform: `translateX(-${current * (100 / visibleCount)}%)`,
              }}
            >
              {/* Duplicate a bit so the last items slide nicely */}
              {videos.concat(videos.slice(0, visibleCount)).map((v, idx) => (
                <div
                  key={`${v.id}-${idx}`}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2"
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-[16px] overflow-hidden bg-transparent h-full">
                    <CardContent className="p-0">
                      {/* Image wrapper = full visual area */}
                      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[16px] bg-neutral-900 group">
                        {/* Full-cover image (no white bands) */}
                        <Image
                          src={v.thumbnail}
                          alt="Product video"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="absolute inset-0 h-full w-full object-cover"
                          priority={idx < visibleCount}
                        />

                        {/* Hover shade */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Play button (glassy) */}
                        <button
                          type="button"
                          aria-label="Play video"
                          onClick={() => console.log("play video", v.id)}
                          className="absolute inset-0 grid place-content-center"
                        >
                          <span className="relative">
                            <span className="absolute inset-0 rounded-full bg-white/55 blur-[6px] opacity-90" />
                            <span className="relative grid place-items-center size-12 sm:size-[52px] rounded-full bg-white/95 ring-1 ring-black/10 shadow-sm hover:scale-105 transition">
                              <Play className="w-5 h-5 text-black fill-black" />
                            </span>
                          </span>
                        </button>

                        {/* Yellow rail inside the image wrapper */}
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#ffd400]" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <Button
            size="icon"
            variant="outline"
            onClick={next}
            className="absolute -right-3 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 backdrop-blur-md border border-black/10 shadow-md hover:bg-white transition"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
          </Button>
        </div>
      </div>
    </section>
  );
}
