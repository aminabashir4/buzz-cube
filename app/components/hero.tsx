"use client";
import React from "react";

const heroContent = [
  {
    id: 1,
    title: "Done-for-You Marketing Automation",
    description1:
      "We combine AI, automation, and creative expertise to deliver high-performing lead generation systems that drive consistent growth.",
    description2:
      "From setup to optimization — we handle everything so you can focus on closing deals, not managing campaigns.",
    accentColor: "#00FF8C",
    video: "/141507-777708200_small.mp4",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-black overflow-hidden mb-32">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroContent[0].video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      {heroContent.map((item) => (
        <div key={item.id} className="relative z-10 px-6 max-w-4xl">
          <div className="flex flex-col items-center">
            <div
              className="w-16 h-1 mb-4"
              style={{ backgroundColor: item.accentColor }}
            ></div>

            <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight font-heading">
              {item.title} <br />
            </h1>

            <p className="text-base md:text-xl text-black mb-4">
              {item.description1}
            </p>
            <p className="text-base md:text-xl text-black font-medium">
              {item.description2}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
