import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full bg-[#042548] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Get in <span className="text-blue-400">touch</span>
        </h2>
        <p className="text-gray-300 mt-2">
          Reach out, we're here to help anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-[#062e58] p-8 rounded-xl shadow-xl border border-blue-900/30">
        
        {/* LEFT FORM */}
        <div className="bg-[#0b3b6b] p-6 rounded-xl shadow-lg border border-blue-800/40">
          <h3 className="text-xl font-semibold text-white mb-2">
            Let's Connect With Us
          </h3>
          <p className="text-gray-300 mb-6 text-sm">
            Let's discuss your IT needs and explore how 27by7 can support your business.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Request Submitted (Frontend Only)");
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 rounded bg-[#0d447d] text-white placeholder-gray-300 outline-none border border-blue-900/40"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 rounded bg-[#0d447d] text-white placeholder-gray-300 outline-none border border-blue-900/40"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded bg-[#0d447d] text-white placeholder-gray-300 outline-none border border-blue-900/40"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded bg-[#0d447d] text-white placeholder-gray-300 outline-none border border-blue-900/40"
            />

            <textarea
              placeholder="Message"
              rows={4}
              className="p-3 rounded bg-[#0d447d] text-white placeholder-gray-300 outline-none border border-blue-900/40"
            ></textarea>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded mt-2 transition">
              Request a Callback
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/public/contact-side.png"
            alt="Tech illustration"
            className="rounded-lg shadow-lg border border-blue-900/50"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
