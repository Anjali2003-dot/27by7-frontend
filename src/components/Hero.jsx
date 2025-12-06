
import React from "react";
import GlobeImage from "../assets/heroimage.png";
const Hero = () => {
  return (
    <section
      className="
        w-full 
        min-h-[1080px]
        bg-gradient-to-b from-white to-[#dff0ff]
        rounded-bl-[80px] rounded-br-[80px]
        flex 
        items-center
        justify-between
        px-16
        pt-20
      "
    >
      {/* LEFT TEXT */}
      <div className="w-[50%]">
        <h2 className="text-[42px] font-semibold text-[#0066CC]">
          Beyond the clock
        </h2>

        <h1 className="text-[64px] font-bold leading-tight mt-4 text-black">
          We Keep Your Business <br /> Running
        </h1>

        <p className="text-lg text-gray-600 mt-6 max-w-[450px]">
          We design, manage, and scale IT systems with 24x7 support so your
          business never slows down.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button className="px-8 py-4 rounded-full bg-[#2d8cff] text-white text-lg font-medium shadow-md hover:bg-[#1976d2] transition">
            View Our Services
          </button>

          <button className="px-8 py-4 rounded-full bg-white border shadow-sm flex items-center gap-2 text-lg hover:bg-gray-50 transition">
            Contact Us
            <span className="text-[#2d8cff] text-2xl">→</span>
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-[50%] flex justify-end">
        <img
          src={GlobeImage}
          alt="Hero Graphic"
          className="w-[610px] h-[610px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
