'use client';
import "@/styles/animated-btn.css";

export default function AnimatedBtn1({
  label = "ADD TO CART",
}: {
  label?: string;
}) {
  return (
    <div className="flex items-center justify-center w-full">
      <button className="hoora-btn w-full" type="button">
        <span className="text-sm font-semibold tracking-wide">{label}</span>
      </button>
    </div>
  );
}
