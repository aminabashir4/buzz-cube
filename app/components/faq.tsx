"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "What do I get for the $650/month package?",
    answer:
      "You’ll receive unlimited design requests and revisions, handled one at a time by our professional design team. This includes graphics, branding, and digital design deliverables.",
  },
  {
    question: "How many revisions can I get per project? Is there a limit?",
    answer:
      "There’s no limit to revisions. We’ll keep refining your project until you’re fully satisfied with the final design.",
  },
  {
    question: "How will my projects be queued for production?",
    answer:
      "Projects are handled on a first-come, first-served basis. You can submit as many requests as you like, and we’ll work on one at a time to ensure top quality.",
  },
  {
    question: "What if I want to stop the engagement, how do I cancel?",
    answer:
      "You can cancel anytime—no long-term contracts. Once canceled, your billing stops immediately, and you’ll retain access until the end of your paid period.",
  },
  {
    question: "What is your customer support like? What’s your office hours?",
    answer:
      "Our support team is available Monday to Friday, 9 AM – 6 PM (EST). You can reach us via chat or email for assistance anytime during those hours.",
  },
  {
    question: "How often do you bill your clients?",
    answer:
      "Billing is done monthly. You’ll be charged automatically each month until you decide to pause or cancel your subscription.",
  },
];

export default function FAQ() {
  const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(null);
  const [openRightIndex, setOpenRightIndex] = useState<number | null>(null);

  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-bold mb-14 leading-tight font-heading text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {leftFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#00FF8C] rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <button
                  onClick={() =>
                    setOpenLeftIndex(openLeftIndex === index ? null : index)
                  }
                  className="flex items-center justify-between w-full text-left px-6 py-4"
                >
                  <span className="font-semibold text-black">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 text-[#00FF8C] transition-transform duration-300 ${
                      openLeftIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openLeftIndex === index ? "max-h-40 px-6 pb-4" : "max-h-0 px-6"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#00FF8C] rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <button
                  onClick={() =>
                    setOpenRightIndex(openRightIndex === index ? null : index)
                  }
                  className="flex items-center justify-between w-full text-left px-6 py-4"
                >
                  <span className="font-semibold text-black">
                    {faq.question}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 text-[#00FF8C] transition-transform duration-300 ${
                      openRightIndex === index ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openRightIndex === index ? "max-h-40 px-6 pb-4" : "max-h-0 px-6"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
