// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <div className="text-lg font-bold mb-4 md:mb-0">27by7</div>
//         <p className="text-gray-400">&copy; {new Date().getFullYear()} 27by7. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// const Footer = () => {
//   return (
//     <footer className="bg-[#001428] text-white py-14 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Logo + Description */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">27by7</h2>
//           <p className="text-gray-400 text-sm leading-6 mb-4">
//             Always-on IT solutions for modern, growing businesses.
//           </p>

//           {/* Social Icons */}
//           <div className="flex space-x-4 mt-4">
//             <FaFacebookF className="text-gray-300 hover:text-white cursor-pointer" />
//             <FaTwitter className="text-gray-300 hover:text-white cursor-pointer" />
//             <FaInstagram className="text-gray-300 hover:text-white cursor-pointer" />
//           </div>
//         </div>

//         {/* Explore */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Explore</h3>
//           <ul className="space-y-3 text-gray-300 text-sm">
//             <li>About Us</li>
//             <li>How We Work</li>
//             <li>Career</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>

//         {/* Services */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Services</h3>
//           <ul className="space-y-3 text-gray-300 text-sm">
//             <li>Cloud Consulting</li>
//             <li>Managed IT Services</li>
//             <li>DevOps & Automation</li>
//             <li>Zero Trust Security</li>
//             <li>XaaS (Anything-as-a-Service)</li>
//             <li>IT Staffing & Augmentation</li>
//             <li>Disaster Recovery</li>
//             <li>Learning & Training</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//           <ul className="space-y-3 text-gray-300 text-sm">
//             <li className="flex items-center space-x-2">
//               <FaMapMarkerAlt /> <span>Mumbai, Maharashtra, India</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <MdEmail /> <span>contact@27by7.com</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <FaPhoneAlt /> <span>+91 98765 43210</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
//         © {new Date().getFullYear()} 27by7. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Left Logo + Text */}
        <div>
          <h2 className="text-3xl font-bold mb-3">27by7</h2>
          <p className="text-gray-300 text-sm leading-relaxed w-56">
            Always-on IT solutions for modern, growing businesses.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <FaFacebookF className="text-white hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="text-white hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="text-white hover:text-pink-400 cursor-pointer" />
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>How We Work</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Cloud Consulting</li>
            <li>Managed IT Services</li>
            <li>DevOps & Automation</li>
            <li>Zero Trust Security</li>
            <li>XaaS (Anything-as-a-Service)</li>
            <li>IT Staffing & Augmentation</li>
            <li>Disaster Recovery</li>
            <li>Learning & Training</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

          <div className="flex items-start gap-3 text-gray-300 text-sm mb-3">
            <FaMapMarkerAlt className="mt-1" />
            <span>Mumbai, Maharashtra, India</span>
          </div>

          <div className="flex items-start gap-3 text-gray-300 text-sm mb-3">
            <MdEmail className="mt-1" />
            <span>contact@27by7.com</span>
          </div>

          <div className="flex items-start gap-3 text-gray-300 text-sm">
            <FaPhoneAlt className="mt-1" />
            <span>+91 98765 43210</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} 27by7. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
