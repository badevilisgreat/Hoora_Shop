import OfferStrip from "@/components/offer-strip";
import Navbar from "@/components/Navbar";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <OfferStrip />
      <Navbar />
      {/* Adjusted padding to match actual fixed height */}
      <main className="flex-1 pt-[calc(30px+60px)]">{children}</main>
    </div>
  );
}
