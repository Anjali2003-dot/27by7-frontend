import React, { useState } from "react";

const faqData = [
  {
    q: "What services does 27by7 provide?",
    a: "We offer end-to-end IT services including Cloud Solutions, Managed IT Services, DevOps & Automation, Security (Zero Trust), IT Staffing, and XaaS (Anything-as-a-Service)."
  },
  {
    q: "Do you provide 24×7 support?",
    a: "Yes, our support teams are available round-the-clock for monitoring, incident response, and managed services."
  },
  {
    q: "Which industries do you work with?",
    a: "We work with BFSI, Manufacturing, Healthcare, Retail, IT, and several global enterprises."
  },
  {
    q: "Can you help us migrate to the cloud?",
    a: "Absolutely. We provide cloud migration, modernization, security, and cost-optimization services."
  },
  {
    q: "Do you offer flexible engagement models?",
    a: "Yes, we offer project-based, dedicated resources, and hybrid engagement models."
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Tag */}
        <p className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-center w-fit mx-auto">
          FAQs
        </p>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold mt-4 mb-10">
          Frequently asked question
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, i) => (
            <div key={i} className="border-b pb-4">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center text-left text-lg font-medium"
              >
                <span>{i + 1}. {faq.q}</span>

                {/* Arrow */}
                <span className="text-gray-600">
                  {openIndex === i ? "▲" : "▼"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === i && (
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
