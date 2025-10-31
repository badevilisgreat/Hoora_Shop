import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-neutral-800 bg-black text-white">
      <div className="flex justify-between items-center px-6 md:px-10 py-3">
        
        {/* ===== LEFT: LOGO ===== */}
        <a href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-14 border-transparent border-b-white"></div>
          <span>Rentify</span>
        </a>

        {/* ===== CENTER: SEARCH BAR ===== */}
        <div className="hidden md:flex items-center w-[300px] lg:w-[400px] relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search properties..."
            className="pl-9 bg-neutral-900 border-neutral-800 text-gray-200 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-neutral-700"
          />
        </div>

        {/* ===== RIGHT: ACTION BUTTONS ===== */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-transparent text-white border-neutral-700 hover:bg-neutral-800 hover:text-gray-100 transition-colors"
          >
            Log In
          </Button>

          <Button
            variant="outline"
            className="bg-transparent text-white border-neutral-700 hover:bg-neutral-800 hover:text-gray-100 transition-colors"
          >
            Contact
          </Button>

          <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
