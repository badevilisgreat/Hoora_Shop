"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-neutral-800 bg-black text-white">
      <div className="flex justify-between items-center px-4 md:px-10 py-3">
        {/* ===== LEFT: LOGO ===== */}
        <a href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-14 border-transparent border-b-white"></div>
          <span>Rentify</span>
        </a>

        {/* ===== CENTER: SEARCH BAR (desktop only) ===== */}
        <div className="hidden md:flex items-center w-[280px] lg:w-[400px] relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search properties..."
            className="pl-9 bg-neutral-900 border-neutral-800 text-gray-200 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-neutral-700"
          />
        </div>

        {/* ===== RIGHT: ACTION BUTTONS (desktop) ===== */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-transparent text-white border-neutral-700 hover:bg-neutral-800 hover:text-gray-100 transition-colors"
          >
            Log In
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
            Sign Up
          </Button>
        </div>

        {/* ===== MOBILE: MENU BUTTON ===== */}
        <div className="flex sm:hidden items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md hover:bg-neutral-800 transition-colors">
                <Menu className="h-5 w-5 text-gray-300" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-black text-white border-neutral-800 w-[85%] sm:w-[380px]"
            >
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold text-white">
                  Menu
                </SheetTitle>
              </SheetHeader>

              {/* Mobile menu content */}
              <div className="mt-6 flex flex-col items-center gap-5">
                {/* Search bar */}
                <div className="relative w-[90%]">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search properties..."
                    className="pl-9 bg-neutral-900 border-neutral-800 text-gray-200 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-neutral-700"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col items-center gap-3 w-[90%] mt-2">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent text-white border-neutral-700 hover:bg-neutral-800 hover:text-gray-100 transition-colors"
                  >
                    Log In
                  </Button>

                  <Button className="w-full bg-white text-black hover:bg-gray-200 transition-colors">
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
