// import React from "react";

// function CloudSolutions() {
//   return (
//     <>
//       {/* HERO SECTION */}
//       <section className="bg-[#0b1c3d] text-white py-24 text-center">
//         <h1 className="text-4xl font-bold mb-4">Cloud Solutions</h1>
//         <p className="max-w-xl mx-auto mb-6">
//           Secure, scalable cloud services built for high performance,
//           cost efficiency, and 24×7 reliability.
//         </p>
//         <button className="bg-blue-500 px-6 py-3 rounded-full">
//           Talk to an Expert
//         </button>
//       </section>

//       {/* CONTENT */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <h2 className="text-2xl font-semibold mb-6">
//           What This Service Includes
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="p-6 border rounded">Cloud Migration & Modernization</div>
//           <div className="p-6 border rounded">Multi-Cloud Setup (AWS, Azure, GCP)</div>
//           <div className="p-6 border rounded">Infrastructure Automation</div>
//           <div className="p-6 border rounded">Architecture & Cost Optimization</div>
//           <div className="p-6 border rounded">24×7 Monitoring & Support</div>
//           <div className="p-6 border rounded">Security & Compliance</div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default CloudSolutions;

// function CloudSolutions() {
//   return (
//     <div className="min-h-screen">
//       {/* HERO */}
//       <section className="bg-[#0b1c3d] text-white py-24 text-center">
//         <h1 className="text-4xl font-bold mb-4">Cloud Solutions</h1>
//         <p className="max-w-xl mx-auto mb-6">
//           Secure, scalable cloud services built for high performance,
//           cost efficiency, and 24×7 reliability.
//         </p>
//         <button className="bg-blue-500 px-6 py-3 rounded-full">
//           Talk to an Expert
//         </button>
//       </section>

//       {/* CONTENT */}
//       <section className="py-16 max-w-6xl mx-auto px-6">
//         <h2 className="text-2xl font-semibold mb-6">
//           What This Service Includes
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="p-6 border rounded">Cloud Migration & Modernization</div>
//           <div className="p-6 border rounded">Multi-Cloud Setup</div>
//           <div className="p-6 border rounded">Infrastructure Automation</div>
//           <div className="p-6 border rounded">Cost Optimization</div>
//           <div className="p-6 border rounded">24×7 Monitoring</div>
//           <div className="p-6 border rounded">Security & Compliance</div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default CloudSolutions;

import React from "react";

const CloudSolutions = () => {
  return (
    <div className="w-full">

      {/* ---------- Hero / Top banner ---------- */}
      <section
        className="relative w-full bg-[#0b1c3d] text-white pt-28 pb-20"
        // Replace the URL with your actual hero image path
        style={{
          backgroundImage: "url(/cloud-hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional overlay to darken a bit if image is bright */}
        <div className="absolute inset-0 bg-[#0b1c3d]/80"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Cloud Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl mb-8">
            Secure, scalable cloud services built for high performance,
            cost efficiency, and 24×7 reliability.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-full text-white font-medium">
            Talk to an Expert
          </button>
        </div>
      </section>


      {/* ---------- Deliverables / What this service includes ---------- */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">

          <div className="inline-block bg-[#E8F4FF] text-[#0058A2] px-4 py-1 rounded-full text-sm mb-4">
            Deliverables
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            What This Service Includes
          </h2>

          {/* Grid of cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                {/* icon placeholder */}
                <img src="/icons/cloud.png" alt="Cloud" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Cloud Migration & Modernization</h3>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <img src="/icons/server.png" alt="Multi-cloud" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">
                Multi-Cloud Setup (AWS, Azure, GCP)
              </h3>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <img src="/icons/automation.png" alt="Automation" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Infrastructure Automation</h3>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <img src="/icons/architecture.png" alt="Architecture" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">
                Architecture & Cost Optimization
              </h3>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <img src="/icons/security.png" alt="Security" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Cloud Security & Compliance</h3>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <img src="/icons/monitoring.png" alt="Monitoring" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">24×7 Monitoring & Support</h3>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <img src="/icons/cost.png" alt="Cost" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Cloud Cost Management</h3>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <img src="/icons/governance.png" alt="Governance" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">
                Security, Compliance & Governance
              </h3>
              <p className="text-sm text-gray-600">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- You can add next sections like Process here ---------- */}
    </div>
  );
};

export default CloudSolutions;






