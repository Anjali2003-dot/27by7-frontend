import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* MAIN FLEX ROW */}
        <div className="flex items-center justify-between h-[76px]">

          {/* LEFT – Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/mainlogo.png"
              alt="27by7 logo"
              className="h-[59px] w-[176.93px] object-contain"
            />
          </div>

          {/* CENTER – MENU (Desktop only) */}
          <ul className="hidden lg:flex items-center gap-8 text-sm text-gray-800">
            <li className="flex items-center gap-1 cursor-pointer">
              Services <span>▼</span>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Industries <span>▼</span>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Our Partners <span>▼</span>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              How We Work <span>▼</span>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              About Us <span>▼</span>
            </li>
          </ul>

          {/* RIGHT – CTA (Desktop only) */}
          <div className="hidden lg:flex">
            <button className="flex items-center gap-2 bg-[#2D8CFF] text-white px-5 py-2 rounded-full">
              <div className="bg-white p-1 rounded-full text-[#2D8CFF]">→</div>
              Book a Call
            </button>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="lg:hidden">
            <button className="text-2xl">☰</button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

