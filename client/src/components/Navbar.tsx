"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
 


export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Categories",
    "Combos",
    "Bestsellers",
    "New Launches",
    "Shop By Usecase",
    "More",
    "Help",
  ];

  return (
  <nav className="fixed top-[30px] left-0 w-full h-[60px] bg-black text-white z-40 border-b border-neutral-800">

      <div className="max-w-[1300px] mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        {/* === LEFT: LOGO === */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative w-[120px] h-[36px] sm:w-[140px] sm:h-[40px]">
            <Image
              src="/hoora-logo.webp"
              alt="HOORA Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* === CENTER: MENU (Desktop) === */}
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-8 text-[15px] font-semibold tracking-wide">
          {menuItems.map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="hover:text-[#f5b700] transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* === RIGHT: ICONS === */}
        <div className="hidden lg:flex items-center justify-end gap-6">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#f5b700] transition" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#f5b700] transition" />
          <User className="w-5 h-5 cursor-pointer hover:text-[#f5b700] transition" />
        </div>

        {/* === MOBILE: HAMBURGER MENU === */}
        <div className="lg:hidden flex items-center gap-3">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-md hover:bg-neutral-800 transition">
                <Menu className="w-6 h-6 text-white" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-black text-white border-l border-neutral-800"
            >
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold text-white">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <ul className="mt-6 flex flex-col gap-5 text-lg font-medium">
                {menuItems.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      onClick={() => setOpen(false)}
                      className="hover:text-[#f5b700] transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-center gap-8 border-t border-neutral-800 pt-6">
                <Search className="w-6 h-6 cursor-pointer hover:text-[#f5b700]" />
                <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-[#f5b700]" />
                <User className="w-6 h-6 cursor-pointer hover:text-[#f5b700]" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
