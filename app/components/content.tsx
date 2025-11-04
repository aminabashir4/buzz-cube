"use client";

import Image from "next/image";
import Image1 from './../../public/images/crypteck.jwsuperthemes.com(1).svg'
export default function Content() {
  return (
    <section className="max-w-[1340px] mb-20 mx-auto p-4  text-black font-sans flex flex-wrap items-center justify-between gap-10">
      {/* Left Side Images */}
      <div className="relative flex-1 max-w-[500px] shadow-2xl">
        <Image
            src="/images/smart-city-data.jpg"
          alt="Phones and globe"
          width={500}
          height={400}
          className="rounded-lg w-full h-auto"
          priority
        />

        <div className="absolute right-[-220px] top-10 hidden md:block animate-spin-slow">
          <Image
            src={Image1}
            alt="Spinning earth"  
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 max-w-[541px] p-2">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 leading-tight font-heading">
          HOW TO GET STARTED WITH BUZZCUBE?
        </h1>
        <p className="text-[#898990] text-base leading-relaxed mb-4">
          BuzzCube makes lead generation simple and effective. Our platform is
          built for marketers who want to automate, optimize, and grow their
          customer base with ease.
        </p>
        <p className="text-[#898990] text-base leading-relaxed mb-10">
          Trusted by thousands of businesses, BuzzCube delivers powerful tools
          and actionable insights to drive your campaigns forward.
        </p>

        {/* Steps */}
        <div className="relative pl-6 flex flex-col gap-8 before:absolute before:left-2 before:top-0 before:h-[calc(80%-20px)] before:border-l-2 before:border-dashed before:border-[#00FF8C] before:opacity-60 before:rounded-sm">
          {[ 
            {
              title: "Sign up for your free 7-day trial",
              desc: "Get instant access to BuzzCube’s AI-driven lead generation platform with no commitments.",
            },
            {
              title: "Create and launch your first campaign",
              desc: "Use our easy-to-navigate dashboard to design campaigns that attract your ideal customers.",
            },
            {
              title: "Analyze and optimize with real-time analytics",
              desc: "Track results and refine your strategy using powerful insights to maximize ROI.",
            },
          ].map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 cursor-pointer group"
            >
              <div className="relative w-5 h-5 shrink-0 z-10 -left-6"> 
                <div className="w-5 h-5 rounded-full bg-[#00FF8C] transition-transform duration-300 group-hover:scale-60"></div>
                <div className="absolute top-1/2 left-1/2 w-3.5 h-3.5 bg-[#00FF8C]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-100 opacity-0 transition-all duration-600 group-hover:scale-200 group-hover:opacity-100 pointer-events-none"></div>
              </div>
              <div className="flex flex-col">
                <strong className="text-[#00FF8C] font-extrabold text-lg mb-3">
                  {title}
                </strong>
                <span className="text-[#898990] text-base leading-relaxed">
                  {desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
}
