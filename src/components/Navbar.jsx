
import React from "react";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="
        w-full
        bg-white
        flex
        items-center
        justify-between
        px-16
        py-4
        h-[90px]
      "
    >
      {/* LEFT – Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/mainlogo.png"
          alt="27by7 logo"
          className="h-[59px] w-[176.93px] object-contain"
        />
      </div>

      {/* CENTER – MENU */}
      <ul className="flex items-center gap-12 text-[16px] text-black font-medium">
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

      {/* RIGHT – CTA Button */}
      <button
        className="
          flex
          items-center
          gap-3
          bg-[#2D8CFF]
          text-white
          px-6
          py-2
          rounded-full
          text-[16px]
          font-medium
        "
      >
        <div className="bg-white text-[#2D8CFF] rounded-full p-1 flex items-center justify-center">
          <ArrowRight size={18} />
        </div>
        Book a Call
      </button>
    </nav>
  );
};

export default Navbar;

