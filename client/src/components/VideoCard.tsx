"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  thumbnail: string;
  onPlay?: () => void;
  className?: string;
  duration?: string;   // optional tiny label (e.g., "0:37")
};

export default function VideoCard({
  thumbnail,
  onPlay,
  className,
  duration,
}: Props) {
  return (
    <div
      className={cn(
        // gradient border wrapper
        "rounded-2xl p-[1px] bg-[linear-gradient(135deg,#00000033,#0000000a,#00000033)]",
        "transition-[box-shadow,transform] duration-300 hover:shadow-xl hover:-translate-y-[2px]",
        className
      )}
    >
      <Card className="relative rounded-[1rem] overflow-hidden border-0 bg-white">
        {/* Thumbnail */}
        <div className="group relative w-full aspect-[4/5]">
          <Image
            src={thumbnail}
            alt="Video thumbnail"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 22vw"
            priority
          />

          {/* Subtle darkening on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Optional duration pill */}
          {duration && (
            <div className="absolute top-3 left-3 z-10 rounded-full bg-black/65 text-white text-[11px] px-2 py-[3px] tracking-wide">
              {duration}
            </div>
          )}

          {/* Glass play button */}
          <button
            aria-label="Play video"
            onClick={onPlay}
            className={cn(
              "absolute inset-0 z-10 grid place-content-center",
              "focus:outline-none"
            )}
          >
            <span className="relative">
              {/* soft outer ripple */}
              <span className="absolute inset-0 rounded-full bg-white/50 blur-[6px] opacity-70" />
              {/* main button */}
              <span className="relative grid place-items-center size-14 md:size-[3.75rem] rounded-full bg-white/90 ring-1 ring-black/10 shadow-md group-hover:scale-105 transition-transform">
                <Play className="size-5 md:size-[22px] text-black fill-black" />
              </span>
            </span>
          </button>

          {/* Bottom “watch” curtain on hover (very subtle) */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Card>
    </div>
  );
}
