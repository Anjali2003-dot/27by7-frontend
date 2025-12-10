// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-white border-b">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
        
//         {/* MAIN FLEX ROW */}
//         <div className="flex items-center justify-between h-[76px]">

//           {/* LEFT – Logo */}
//           <div className="flex items-center gap-3">
//             <img
//               src="/mainlogo.png"
//               alt="27by7 logo"
//               className="h-[59px] w-[176.93px] object-contain"
//             />
//           </div>

//           {/* CENTER – MENU (Desktop only) */}
//           <ul className="hidden lg:flex items-center gap-8 text-sm text-gray-800">
//             <li className="flex items-center gap-1 cursor-pointer">
//               Services <span>▼</span>
//             </li>
//             <li className="flex items-center gap-1 cursor-pointer">
//               Industries <span>▼</span>
//             </li>
//             <li className="flex items-center gap-1 cursor-pointer">
//               Our Partners <span>▼</span>
//             </li>
//             <li className="flex items-center gap-1 cursor-pointer">
//               How We Work <span>▼</span>
//             </li>
//             <li className="flex items-center gap-1 cursor-pointer">
//               About Us <span>▼</span>
//             </li>
//           </ul>

//           {/* RIGHT – CTA (Desktop only) */}
//           <div className="hidden lg:flex">
//             <button className="flex items-center gap-2 bg-[#2D8CFF] text-white px-5 py-2 rounded-full">
//               <div className="bg-white p-1 rounded-full text-[#2D8CFF]">→</div>
//               Book a Call
//             </button>
//           </div>

//           {/* MOBILE MENU ICON */}
//           <div className="lg:hidden">
//             <button className="text-2xl">☰</button>
//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll for shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300
        ${scrolled ? "shadow-md" : "shadow-none"}`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-4 flex items-center justify-between">

          {/* LEFT – Logo */}
          <div className="flex items-center">
            <img
              src="/mainlogo.png"
              alt="27by7 logo"
              className="h-[59px] w-[176.93px] object-contain"
            />
          </div>

          {/* CENTER – Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-sm text-gray-800">
            <li className="cursor-pointer hover:text-[#2D8CFF]">Services ▼</li>
            <li className="cursor-pointer hover:text-[#2D8CFF]">Industries ▼</li>
            <li className="cursor-pointer hover:text-[#2D8CFF]">Our Partners ▼</li>
            <li className="cursor-pointer hover:text-[#2D8CFF]">How We Work ▼</li>
            <li className="cursor-pointer hover:text-[#2D8CFF]">About Us ▼</li>
          </ul>

          {/* RIGHT – Desktop CTA */}
          <div className="hidden lg:flex">
            <button className="flex items-center gap-2 bg-[#2D8CFF] text-white px-5 py-2 rounded-full hover:bg-blue-600 transition">
              <span className="bg-white p-1 rounded-full text-[#2D8CFF]">→</span>
              Book a Call
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(true)}
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* BACKDROP */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50
        transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 text-gray-800">

          {/* Close */}
          <button
            className="self-end text-2xl"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>

          {/* Menu */}
          <nav className="flex flex-col gap-5 text-lg font-medium">
            <span className="cursor-pointer">Services</span>
            <span className="cursor-pointer">Industries</span>
            <span className="cursor-pointer">Our Partners</span>
            <span className="cursor-pointer">How We Work</span>
            <span className="cursor-pointer">About Us</span>
          </nav>

          <button className="mt-6 bg-[#2D8CFF] text-white py-3 rounded-full">
            Book a Call
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
