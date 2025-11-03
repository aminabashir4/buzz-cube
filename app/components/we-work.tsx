"use client";
import { Rocket, Settings, LineChart, Zap } from "lucide-react";

export default function WeWork() {
  const steps = [
    {
      id: 1,
      title: "Kickoff & Strategy Session",
      description:
        "We start with a personalized onboarding call to understand your goals, audience, and ideal offer. Our experts craft a lead-gen game plan tailored to your business.",
      icon: <Rocket className="w-6 h-6 text-[#00FF8C]" />,
    },
    {
      id: 2,
      title: "Funnel & Automation Setup",
      description:
        "We design and build your entire lead generation system — funnels, landing pages, and automated email sequences — fully done-for-you and ready to convert.",
      icon: <Settings className="w-6 h-6 text-[#00FF8C]" />,
    },
    {
      id: 3,
      title: "Launch & Optimize Campaigns",
      description:
        "Once your funnel goes live, our team continuously tracks performance, tests variations, and optimizes to boost conversion rates week after week. Every campaign is monitored to ensure maximum ROI and efficiency.",
      icon: <LineChart className="w-6 h-6 text-[#00FF8C]" />,
    },
    {
      id: 4,
      title: "Scale with AI-Powered Growth",
      description:
        "With proven results, we implement AI-driven automation to qualify leads, nurture prospects, and close sales — all on autopilot. This ensures consistent scalability and predictable business growth without manual effort.",
      icon: <Zap className="w-6 h-6 text-[#00FF8C]" />,
    },
  ];

  return (
    <section className="pb-20 px-6 md:px-20 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 leading-tight font-heading">
          HOW WE WORK TOGETHER
        </h2>
        <p className="text-base md:text-xl text-black mb-4">
          A simple, proven system that takes you from setup to scale — fast,
          efficient, and fully automated.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto relative">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-start">
              {/* Step Number + Line */}
              <div className="relative flex flex-col items-center mr-6">
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold shadow-lg z-10">
                  {step.id}
                </div>

                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <div
                    className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 bg-[#00FF8C]"
                    style={{
                      height: "calc(100% + 3.5rem)",
                    }}
                  ></div>
                )}
              </div>

              {/* Step Content */}
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-[rgba(0,255,140,0.1)] flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
