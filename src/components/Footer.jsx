import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-bold mb-4 md:mb-0">27by7</div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} 27by7. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
