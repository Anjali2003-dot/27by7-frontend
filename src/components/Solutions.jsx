import React from "react";

const solutionsData = [
  { title: "Cloud Infrastructure", description: "Scalable and secure cloud solutions." },
  { title: "Managed IT", description: "End-to-end IT management services." },
  { title: "Staff Augmentation", description: "Flexible staffing for your projects." },
  { title: "Cybersecurity", description: "Protect your business from cyber threats." },
  { title: "Software Development", description: "Custom applications tailored to you." },
  { title: "Data Analytics", description: "Turn data into actionable insights." },
];

const Solutions = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Our Solutions</h2>
        <p className="mt-4 text-lg text-blue-100">
          Innovative services designed to accelerate your business.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {solutionsData.map((solution, index) => (
          <div key={index} className="bg-blue-500 hover:bg-blue-700 transition p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
            <p className="text-blue-100">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
