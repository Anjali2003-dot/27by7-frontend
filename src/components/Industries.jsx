import React from "react";
import { Link } from "react-router-dom";

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
    <section className="py-12 sm:py-16 lg:py-20 bg-[#DFF0FF]">
      {/* ✅ fixed-width removed, responsive container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 text-center">

        <div className="inline-block bg-white/70 rounded-full px-4 py-1 text-sm mb-6">
          Services We Offer
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Innovative Solutions for Evolving Businesses
        </h2>

        {/* ✅ RESPONSIVE GRID FIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {services.map((s, i) => (
            <div
              key={i}
              className={`w-full rounded-xl p-6 sm:p-8 shadow-md transition
                ${s.highlight ? "bg-[#055ea8] text-white" : "bg-white text-black"}`}
            >

              {/* ✅ ICON (safe for mobile) */}
              <div
                className={`flex items-center justify-center w-[81.43px] h-[81.43px] rounded-full mb-6
                ${s.highlight ? "bg-white" : "bg-[#E1F1FF]"}`}
              >
                <div
                  className={`w-[60px] h-[60px] rounded-full flex items-center justify-center
                  ${s.highlight ? "bg-white/90" : "bg-white"}`}
                >
                  <img
                    src={s.icon}
                    alt={s.title}
                    className="w-[32px] h-[32px] object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {s.title}
              </h3>

              {/* Desc */}
              <p
                className={`text-sm mb-6 leading-relaxed ${
                  s.highlight ? "text-white/80" : "text-gray-600"
                }`}
              >
                {s.desc}
              </p>

              {/* Learn more */}
              {/* <div
                className={`inline-flex items-center gap-2 font-medium ${
                  s.highlight ? "text-white" : "text-[#0060DF]"
                }`}
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  stroke={s.highlight ? "white" : "#0060DF"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h8" />
                  <path d="M11 8l4 4-4 4" />
                </svg>
              </div> */}
              
              {/* <Link 
                to={s.title === "Cloud Solutions" ? "/cloud-solution" : undefined}
                className={`inline-flex items-center gap-2 font-medium ${
                  s.highlight ? "text-white" : "text-[#0060DF]"
                }`}
              > */}

              <div
              className={`inline-flex items-center gap-2 font-medium ${
                 s.highlight ? "text-white" : "text-[#0060DF]"
               }`}
              >
              {s.title === "Cloud Solutions" ? (
              <Link to="/cloud-solutions" className="cursor-pointer">
                Learn More →
              </Link>
              ) : (
               <span>Learn More →</span>
              )}
              </div>



              

              

            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="px-8 py-3 bg-[#2D8CFF] text-white rounded-full shadow">
            Explore All Services
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
