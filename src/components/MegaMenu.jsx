// import { useState } from "react";

// export default function MegaMenu() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="relative w-full bg-white shadow-sm">
//       <nav className="flex items-center justify-between px-8 py-4">
//         {/* Logo */}
//         <div className="text-xl font-semibold flex items-center gap-2">
//           <span>27by7</span>
//         </div>

//         {/* Nav Items */}
//         <ul className="flex items-center gap-8 text-sm font-medium">
//           <li
//             className="relative cursor-pointer"
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//           >
//             <span className="flex items-center gap-1">
//               Services <span className="text-blue-500">▾</span>
//             </span>

//             {/* Mega Menu */}
//             {open && (
//               <div className="absolute left-0 top-8 w-[700px] bg-[#0A1A2F] text-white rounded-xl p-8 shadow-2xl grid grid-cols-2 gap-6 z-50">
//                 {/* Column 1 */}
//                 <div className="space-y-4">
//                   <h4 className="text-xs tracking-widest text-gray-400">
//                     ALL SERVICES
//                   </h4>

//                   <div className="flex items-start gap-3">
//                     <span>☁️</span>
//                     <div>
//                       <p className="font-semibold">Cloud & Infrastructure</p>
//                       <p className="text-xs text-gray-400">
//                         Secure, scalable cloud infrastructure.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <span>🖥️</span>
//                     <div>
//                       <p className="font-semibold">Managed IT Services</p>
//                       <p className="text-xs text-gray-400">
//                         24×7 monitoring and IT operations.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <span>👥</span>
//                     <div>
//                       <p className="font-semibold">Staffing & Talent Augmentation</p>
//                       <p className="text-xs text-gray-400">
//                         On‑demand skilled tech talent.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Column 2 */}
//                 <div className="space-y-4">
//                   <div className="flex items-start gap-3">
//                     <span>🧭</span>
//                     <div>
//                       <p className="font-semibold">Consulting & Strategy</p>
//                       <p className="text-xs text-gray-400">
//                         Roadmaps and expert IT guidance.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <span>⚙️</span>
//                     <div>
//                       <p className="font-semibold">XaaS (Anything‑as‑a‑Service)</p>
//                       <p className="text-xs text-gray-400">
//                         Flexible, scalable IT delivery.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <span>🎓</span>
//                     <div>
//                       <p className="font-semibold">Learning & Training</p>
//                       <p className="text-xs text-gray-400">
//                         Upskilling for modern tech teams.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </li>

//           <li>Industries</li>
//           <li>Our Partners</li>
//           <li>How We Work</li>
//           <li>About Us</li>
//         </ul>

//         {/* CTA Button */}
//         <button className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600">
//           Book a Call
//         </button>
//       </nav>
//     </div>
//   );
// }

import React from "react";
import { FaCloud, FaCogs, FaUserCog, FaTools } from "react-icons/fa";
import { MdSecurity, MdSchool } from "react-icons/md";

const MegaMenu = () => {
  const items = [
    {
      icon: <FaCloud size={20} />,
      title: "Cloud & Infrastructure",
      desc: "Secure, scalable cloud infrastructure."
    },
    {
      icon: <FaCogs size={20} />,
      title: "Managed IT Services",
      desc: "24x7 monitoring and IT operations."
    },
    {
      icon: <FaUserCog size={20} />,
      title: "Staffing & Talent Augmentation",
      desc: "On-demand skilled tech talent."
    },
    {
      icon: <FaTools size={20} />,
      title: "Consulting & Strategy",
      desc: "Roadmaps and expert IT guidance."
    },
    {
      icon: <MdSecurity size={20} />,
      title: "XaaS (Anything-as-a-Service)",
      desc: "Flexible, scalable IT delivery."
    },
    {
      icon: <MdSchool size={20} />,
      title: "Learning & Training",
      desc: "Upskilling for modern tech teams."
    }
  ];

  return (
    <div className="w-[850px] bg-[#0c1e36] text-white p-8 rounded-xl shadow-xl">
      <h3 className="text-gray-400 text-xs tracking-wider mb-4">
        ALL SERVICES
      </h3>

      <div className="grid grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="text-blue-400">{item.icon}</div>
            <div>
              <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-300 leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
