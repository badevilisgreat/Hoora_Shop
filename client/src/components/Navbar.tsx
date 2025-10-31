import React from "react";

const NAVBAR_HEIGHT = 60; // You can adjust this value

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-purple-700 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="/"
            className="cursor-pointer font-bold text-lg md:text-2xl"
          >
            Rentify
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#about" className="hover:text-gray-200">About</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
