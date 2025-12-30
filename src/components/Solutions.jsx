// import React from "react";

// const solutionsData = [
//   { title: "Cloud Infrastructure", description: "Scalable and secure cloud solutions." },
//   { title: "Managed IT", description: "End-to-end IT management services." },
//   { title: "Staff Augmentation", description: "Flexible staffing for your projects." },
//   { title: "Cybersecurity", description: "Protect your business from cyber threats." },
//   { title: "Software Development", description: "Custom applications tailored to you." },
//   { title: "Data Analytics", description: "Turn data into actionable insights." },
// ];

// const Solutions = () => {
//   return (
//     <section className="py-16 bg-blue-600 text-white">
//       <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-bold">Our Solutions</h2>
//         <p className="mt-4 text-lg text-blue-100">
//           Innovative services designed to accelerate your business.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
//         {solutionsData.map((solution, index) => (
//           <div key={index} className="bg-blue-500 hover:bg-blue-700 transition p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
//             <p className="text-blue-100">{solution.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Solutions;

import React from "react";

const industries = [
  {
    title: "Public Sector & Government",
    desc: "Digital infrastructure, security, and scalable IT systems that power public services efficiently.",
    icon: "/industry-icons/gov.svg",
  },
  {
    title: "Research & Development",
    desc: "Technology, data, and collaborative environments that accelerate innovation and discovery.",
    icon: "/industry-icons/research.png",
  },
  {
    title: "Banking, Financial Services & Insurance (BFSI)",
    desc: "Secure, compliant, and high-uptime IT systems built for trust, transactions, and growth.",
    icon: "/industry-icons/banking.png",
  },
  {
    title: "Energy & Utilities",
    desc: "Reliable, automated, and sustainable IT solutions supporting operations and customer delivery.",
    icon: "/industry-icons/energy.png",
  },
  {
    title: "Telecom",
    desc: "High-performance network, cloud, and support services built for speed, scale, and connectivity.",
    icon: "/industry-icons/telecom.png",
  },
  {
    title: "Consumer Products & Goods",
    desc: "Agile, scalable IT that improves supply chains, customer experience, and business performance.",
    icon: "/industry-icons/consumer.png",
  },
  {
    title: "Manufacturing",
    desc: "Smart infrastructure, automation, and monitoring solutions that reduce downtime and boost productivity.",
    icon: "/industry-icons/manufacturing.png",
  },
  {
    title: "Construction & Infrastructure",
    desc: "Technology solutions that streamline project management, operations, and on-site coordination.",
    icon: "/industry-icons/construction.png",
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-white">
      {/* Small Tag */}
      <div className="flex justify-center mb-4">
        <span className="px-4 py-1 bg-[#DFF0FF] text-[#0060DF] rounded-full text-sm font-medium">
          Industries We Serve
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Empowering Businesses Across Industries
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
        {industries.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-xl flex gap-4 hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-full bg-[#E6F3FF] flex items-center justify-center">
              <img src={item.icon} className="w-7 h-7" />
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-[#0060DF] text-white rounded-full hover:bg-blue-700 transition">
          Talk to an Expert
        </button>
      </div>
    </section>
  );
};

export default IndustriesSection;
