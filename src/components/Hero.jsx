
import React from "react";
//import { Link } from "react-router-dom";
import GlobeImage from "../assets/heroimage.png";
const Hero = () => {
  return (
    <section
      className="
        w-full 
        bg-gradient-to-b from-white to-[#dff0ff]
        rounded-bl-[80px] rounded-br-[80px]
        overflow-hidden
        
      "
    >
      {/* LEFT TEXT */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-12 sm:py-20 flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2"> 

        
        <h2 className="text-2xl sm:text-3xl text-blue-600 font-semibold">
          Beyond the clock
        </h2>

        <h1 className="text-3xl sm:text-4xl ms:test-5xl font-bold leading-tight mt-3">
          We Keep Your Business <br /> Running
        </h1>

        <p className="mt-4 text-gray-600 max-w-md">
          We design, manage, and scale IT systems with 24x7 support so your
          business never slows down.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="px-5 py-3 rounded-full bg-blue-600 text-white shadow">
            View Our Services
          </button>
        {/* <Link to="/contact">   */}
          <button className="px-5 py-3 rounded-full bg-white border flex items-center gap-2">
            Contact Us
            <span className="text-blue-600">→</span>
          </button>
        {/* </Link> */}
          
          
          
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-end">
        <img
          src={GlobeImage}
          alt="Hero Graphic"
          className="w-[370px] sm:w-[480px] md:w-[560px] lg:w-[610px] h-auto object-contain"
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
