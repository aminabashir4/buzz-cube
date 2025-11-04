"use client";

import Image from "next/image";

export default function StickySections() {
  const sections = [
    {
      title: "Struggling to generate high-quality leads consistently?",
      desc1:
        "Managing lead flow manually is time-consuming and prone to errors. Don’t let potential customers slip through the cracks.",
      desc2:
        "Automate your lead generation with BuzzCube’s powerful AI-driven platform — capture, qualify, and convert leads effortlessly.",
      btn: "START YOUR FREE 7-DAY TRIAL →",
      img: "/images/Untitled.002.webp",
      alt: "BuzzCube Lead Generation Dashboard",
      reverse: false,
    },
    {
      title: "Say goodbye to complicated software and confusing pricing",
      desc1:
        "BuzzCube offers a simple, transparent pricing plan with no hidden fees — scale your lead generation without the hassle.",
      desc2:
        "Get access to our all-in-one platform designed for marketers who want results, not headaches.",
      btn: "SEE PRICING →",
      img: "/images/Untitled.002.webp",
      alt: "BuzzCube Pricing Overview",
      reverse: true,
    },
    {
      title: "Maximize your ROI with actionable insights",
      desc1:
        "Track campaign performance in real-time and optimize your strategy based on data-driven insights.",
      desc2:
        "With BuzzCube’s analytics dashboard, make smarter marketing decisions and close deals faster than ever before.",
      btn: "BOOK A DEMO →",
      img: "/images/Untitled.002.webp",
      alt: "BuzzCube Analytics Dashboard",
      reverse: false,
    },
  ];

  return (
    <div className="pb-20">
      <div className="relative">
        {sections.map((sec, i) => (
          <div
            key={i}
            className={`sticky top-0 z-10 flex justify-center items-center mx-auto max-w-7xl rounded-2xl p-10 mb-10 transition-all duration-500 ${
              i % 2 === 1 ? " bg-[#00FF8C]" : "bg-[#e4e4e4]"
            }`}
          >
            <div
              className={`flex flex-col md:flex-row items-center gap-10 max-w-[1200px] ${
                sec.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] leading-tight mb-4">
                  {sec.title}
                </h2>
                <p className="text-[17px] text-[#333] leading-relaxed mb-4">
                  {sec.desc1}
                </p>
                <p className="text-[17px] text-[#333] leading-relaxed mb-4 font-semibold">
                  {sec.desc2}
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 px-6 py-3 text-sm font-semibold border border-black rounded-lg hover:bg-black hover:text-white transition-all"
                >
                  {sec.btn}
                </a>
              </div>

              {/* Image Section */}
              <div className="flex-1 flex justify-center items-center">
                <div className="relative rounded-xl overflow-hidden w-full max-w-md">
                  <Image
                    src={sec.img}
                    alt={sec.alt}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
