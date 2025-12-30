// import React, { useState } from "react";

// const testimonials = [
//   {
//     name: "Project Lead, Hitachi",
//     img: "/testimonials/user1.png",
//     quote:
//       "27by7 proved to be a strategic partner in our cloud transformation journey. Their Azure migration expertise improved deployment efficiency and reduced infrastructure costs by 30% — with zero downtime.",
//   },
//   {
//     name: "Project Lead, Hitachi",
//     img: "/testimonials/user2.png",
//     quote:
//       "27by7 proved to be a strategic partner in our cloud transformation journey. Their Azure migration expertise improved deployment efficiency and reduced infrastructure costs by 30% — with zero downtime.",
//   },
//   {
//     name: "Project Lead, Hitachi",
//     img: "/testimonials/user3.png",
//     quote:
//       "27by7 proved to be a strategic partner in our cloud transformation journey. Their Azure migration expertise improved deployment efficiency and reduced infrastructure costs by 30% — with zero downtime.",
//   },
// ];

// const Testimonials = () => {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((index + 1) % testimonials.length);
//   const prev = () =>
//     setIndex((index - 1 + testimonials.length) % testimonials.length);

//   return (
//     <section className="relative py-20 bg-[#022345] text-white overflow-hidden">

//       {/* Background Wave Pattern */}
//       <img
//         src="/background/waves.png"
//         className="absolute bottom-0 left-0 w-full opacity-40 pointer-events-none"
//       />

//       {/* Tag */}
//       <div className="flex justify-center mb-4 relative z-10">
//         <span className="px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
//           Testimonials
//         </span>
//       </div>

//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative z-10">
//         What Our Clients Say About Their <br /> Journey With Us
//       </h2>

//       {/* Slider Wrapper */}
//       <div className="max-w-6xl mx-auto flex gap-6 px-6 relative z-10">

//         {/* Card */}
//         {testimonials.map((item, i) => (
//           <div
//             key={i}
//             className={`min-w-[350px] bg-white text-black rounded-xl p-8 shadow-lg transition-all duration-300
//             ${i === index ? "scale-100 opacity-100" : "scale-95 opacity-50"}`}
//           >
//             {/* Profile Image */}
//             <div className="flex justify-center mb-4">
//               <img
//                 src={item.img}
//                 className="w-20 h-20 rounded-full object-cover"
//               />
//             </div>

//             {/* Quote */}
//             <p className="text-sm text-gray-700 mb-4 text-center">{item.quote}</p>

//             {/* Name */}
//             <p className="text-center font-semibold text-sm">
//               – {item.name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Arrows */}
//       <div className="flex justify-center gap-4 mt-10 relative z-10">
//         <button
//           onClick={prev}
//           className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full"
//         >
//           <span className="text-white text-xl">←</span>
//         </button>

//         <button
//           onClick={next}
//           className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full"
//         >
//           <span className="text-white text-xl">→</span>
//         </button>
//       </div>

//     </section>
//   );
// };

// export default Testimonials;


import React, { useState } from "react";

const testimonials = [
  {
    name: "Project Lead, Hitachi",
    img: "/testimonials/user1.png",
    quote:
      "27by7 proved to be a strategic partner in our cloud transformation journey. Their Azure migration expertise improved deployment efficiency and reduced infrastructure costs by 30% — with zero downtime.",
  },
  {
    name: "Project Lead, Hitachi",
    img: "/testimonials/user2.png",
    quote:
      "27by7 proved to be a strategic partner in our cloud transformation journey. Their Azure migration expertise improved deployment efficiency and reduced infrastructure costs by 30% — with zero downtime.",
  },
  {
    name: "Project Lead, Hitachi",
    img: "/testimonials/user3.png",
    quote:
      "27by7 proved to be a strategic partner in our cloud transformation journey. Their Azure migration expertise improved deployment efficiency and reduced infrastructure costs by 30% — with zero downtime.",
  },
];

const fallbackAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect fill='%23e6f3ff' width='100%' height='100%'/><circle cx='40' cy='30' r='18' fill='%230060df'/></svg>";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null; // safe-guard
  }

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-[#022345] text-white">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium">Testimonials</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say About Their <br /> Journey With Us
        </h2>

        <div className="flex gap-6 justify-center">
          {testimonials.map((t, i) => {
            const isActive = i === index;
            return (
              <article
                key={i}
                className={`min-w-[300px] max-w-xs bg-white text-black rounded-xl p-6 shadow-lg transform transition-all duration-300 ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-60"}`}
                aria-hidden={!isActive}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    onError={(e) => (e.currentTarget.src = fallbackAvatar)}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                <p className="text-sm text-gray-700 mb-4 text-center">{t.quote}</p>
                <p className="text-center font-semibold text-sm">– {t.name}</p>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <button onClick={prev} className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full">‹</button>
          <button onClick={next} className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full">›</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
