"use client";

export default function OfferStrip() {
  const message = "• Extra 10% Off on all orders ";

  return (
    <div className="offer-strip fixed top-0 left-0 w-full bg-[#f5b700] text-black text-sm font-medium h-[30px] flex items-center overflow-hidden z-50">

      <div className="offer-strip-content animate-marquee whitespace-nowrap">
        {Array(40)
          .fill(message)
          .map((text, i) => (
            <span key={i} className="mx-3">
              {text}
            </span>
          ))}
      </div>
    </div>
  );
}
