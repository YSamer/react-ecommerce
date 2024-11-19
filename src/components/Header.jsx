import React from "react";
import { Menu } from "react-feather";
import Cart from "../assets/Cart.svg";
import Search from "../assets/Search.svg";
import Wishlist from "../assets/Wishlist.svg";

const Header = () => {
  return (
    <div className="bg-white fixed top-12 w-full z-40 border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 py-4 mt-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Menu className="w-6 h-6 sm:hidden mx-2 cursor-pointer" />
          <a href="#" className="text-xl font-bold text-gray-800">
            Exclusive
          </a>
        </div>

        {/* Navigation Links (Visible on larger screens) */}
        <div className="hidden sm:flex py-2">
          <div className="container mx-auto flex space-x-6 px-4 lg:px-8">
            <a
              href="#"
              className="text-black hover:text-gray-800 border-b border-gray-500"
            >
              Home
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              Contact
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              About
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              Sign Up
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Search Input */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search.."
              className="w-full pl-4 pr-10 py-2 bg-[#f5f5f5] text-black text-[12px] font-light border rounded focus:outline-none"
            />
            {/* Search Icon */}
            <img
              src={Search}
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
          </div>

          <img src={Search} alt="Search" className="block md:hidden" />

          <img src={Wishlist} alt="Wishlist" />
          <img src={Cart} alt="Cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
