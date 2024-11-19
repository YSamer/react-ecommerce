import React from "react";

const TopBar = () => {
  return (
    <div className="bg-black text-white text-sm py-2 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="w-12 h-4 hidden sm:block"></div>
        <div className="flex items-center">
          {/* Left Section: Sale Text */}
          <p className="font-light mx-3 hidden md:block">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>

          {/* Middle Section: Shop Now Link */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-white underline hover:text-white transition font-bold"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Right Section: Language Selector */}
        <select
          className="bg-transparent rounded py-2 focus:outline-none"
          defaultValue="English"
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
