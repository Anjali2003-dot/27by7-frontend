

import React from "react";


const services = [
  {
    title: "Cloud Solutions",
    desc: "Migrate, modernize, and optimize your cloud infrastructure with AWS, Azure, and GCP.",
    icon: "/icons/cloud.png",
    highlight: false,
  },
  {
    title: "Managed IT Services",
    desc: "24×7 monitoring, incident management, and guaranteed uptime to keep your business running.",
    icon: "/icons/server.png",
    highlight: true,
  },
  {
    title: "Staffing & Talent Augmentation",
    desc: "Scale your team with on-demand skilled professionals across technologies.",
    icon: "/icons/team.png",
    highlight: false,
  },
  {
    title: "Consulting & Strategy",
    desc: "Actionable IT roadmaps and risk assessments aligned to your business goals.",
    icon: "/icons/bulb.png",
    highlight: true,
  },
  {
    title: "XaaS (Anything-as-a-Service)",
    desc: "Modern IT models including DevOps, AI/ML, and app development as scalable services.",
    icon: "/icons/network.png",
    highlight: false,
  },
  {
    title: "Learning & Training",
    desc: "Upskilling programs designed to close skill gaps and future-proof your workforce.",
    icon: "/icons/graduate.png",
    highlight: true,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[#DFF0FF]">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <div className="inline-block bg-white/70 rounded-full px-4 py-1 text-sm mb-6">Services We Offer</div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Innovative Solutions for Evolving Businesses</h2>
        

        {/* ===== GRID (3x2) ===== */}
        <div className="grid grid-cols-3 gap-8 px-6 max-w-7xl mx-auto mt-12 ">

          {services.map((s, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 shadow-md transition overflow-hidden ${
                s.highlight ? "bg-[#055ea8] text-white" : "bg-white text-black"
              }`}
            >
              {/* icon wrapper */}
              <div className={`flex items-center justify-center w-[81.43px] h-[81.43px] rounded-full
                ${s.highlight ? 'bg-white' : 'bg-[#E1F1FF]'}`}>
                {/* inner visual circle to match screenshot */}
                <div className={`flex items-center justify-center w-[32px] h-[32px] rounded-full
                  ${s.highlight ? 'bg-white/80' : 'bg-white'}`}>
                  {/* icon image */}
                  <img
                    src={s.icon}
                    alt={s.title}
                    className="w-6 h-6 object-contain"
                    // filter invert: if icon is black (dark) this will make it white on dark bg.
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-lg font-semibold mb-2 ${s.highlight ? "text-white" : "text-black"}`}>{s.title}</h3>

              {/* Desc */}
              <p className={`text-sm mb-6 ${s.highlight ? "text-white/80" : "text-gray-600"}`}>{s.desc}</p>

              {/* Learn more */}
              <div className={`${s.highlight ? "text-white" : "text-[#0060DF]"} font-medium inline-flex items-center gap-2`}>
                <span>Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke={s.highlight ? "white" : "#0060DF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h8"/><path d="M11 8l4 4-4 4"/></svg>
              </div>
            </div>
          ))}

        </div>

        {/* Explore button */}
        <div className="mt-10">
          <button className="px-8 py-3 bg-[#2D8CFF] text-white rounded-full shadow">Explore All Services</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
