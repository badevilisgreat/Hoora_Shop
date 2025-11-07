"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type Video = { id: number; thumbnail: string };

// Video thumbnails array (use your actual thumbnails)
const videos: Video[] = [
  { id: 1, thumbnail: "/video-thumb-1.jpg" },
  { id: 2, thumbnail: "/video-thumb-2.jpg" },
  { id: 3, thumbnail: "/video-thumb-3.jpg" },
  { id: 4, thumbnail: "/video-thumb-4.jpg" },
];

export default function KnowYourProducts() {
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState<number>(typeof window === "undefined" ? 1440 : window.innerWidth);

  // Responsive items per view (1 / 2 / 4)
  const visibleCount = width < 640 ? 1 : width < 1024 ? 2 : 4;

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const next = () => setCurrent((i) => (i + 1) % videos.length);
  const prev = () => setCurrent((i) => (i - 1 + videos.length) % videos.length);

  return (
    <section className="py-8 md:py-12 bg-[#f6f7f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            Know your Products
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">
          {/* Prev Button */}
          <Button
            size="icon"
            variant="outline"
            onClick={prev}
            className="absolute -left-2 sm:-left-3 md:-left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md hover:bg-white transition size-8 sm:size-9"
          >
            <ChevronLeft className="w-4 h-4 text-gray-800" />
          </Button>

          {/* Track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]"
              style={{
                transform: `translateX(-${current * (100 / visibleCount)}%)`,
              }}
            >
              {videos.concat(videos.slice(0, visibleCount)).map((v, idx) => (
                <div
                  key={`${v.id}-${idx}`}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 px-2"
                >
                  {/* Compact video card */}
                  <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden rounded-lg bg-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                    {/* Background image - full cover */}
                    <img
                      src={v.thumbnail}
                      alt="Product video"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    {/* Hover overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Play button */}
                    <button
                      type="button"
                      aria-label="Play video"
                      onClick={() => console.log("play video", v.id)}
                      className="absolute inset-0 grid place-content-center"
                    >
                      <span className="relative">
                        {/* Glow effect */}
                        <span className="absolute inset-0 rounded-full bg-white/50 blur-md opacity-70" />
                        {/* Play button circle */}
                        <span className="relative grid place-items-center size-10 sm:size-11 rounded-full bg-white/95 ring-1 ring-black/5 shadow-lg hover:scale-110 hover:bg-white transition-transform duration-200">
                          <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <Button
            size="icon"
            variant="outline"
            onClick={next}
            className="absolute -right-2 sm:-right-3 md:-right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md hover:bg-white transition size-8 sm:size-9"
          >
            <ChevronRight className="w-4 h-4 text-gray-800" />
          </Button>
        </div>
      </div>
    </section>
  );
}