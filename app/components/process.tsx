"use client";
import { UserCheck, Send, Hammer, Code } from "lucide-react";

const processSteps = [
  {
    icon: <UserCheck className="w-12 h-12 text-[#00FF8C] mb-4 mx-auto" />,
    title: "01 Match with Your Designer",
    description:
      "We’ll match you with a dedicated designer within 1 business day based on your brand and project scope.",
  },
  {
    icon: <Send className="w-12 h-12 text-[#00FF8C] mb-4 mx-auto" />,
    title: "02 Submit Your Request",
    description:
      "Submit unlimited design & development requests anytime via your client portal — no limits, no extra fees.",
  },
  {
    icon: <Hammer className="w-12 h-12 text-[#00FF8C] mb-4 mx-auto" />,
    title: "03 We Go to Work",
    description:
      "Your team begins work immediately with fast turnarounds — designs delivered in as little as 12 hours.",
  },
  {
    icon: <Code className="w-12 h-12 text-[#00FF8C] mb-4 mx-auto" />,
    title: "04 We Build Your Project",
    description:
      "Once the design is approved, our dev team builds the page or funnel, tests it and hands over full ownership.",
  },
];

export default function ProcessSection() {
  return (
    <section className=" pb-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00FF8C]">How It Works</h2>
        <p className="text-black text-lg">
          Simple yet highly effective — our streamlined 4-step process keeps
          your marketing moving fast.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-[1420px] mx-auto">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="border-2 border-[#00FF8C] flex flex-col items-center justify-center px-6 py-10 rounded-xl text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center items-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-black">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
