"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/141507-777708200_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="relative z-10 px-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-[#00FF8C] mb-4"></div>

          <h1 className="text-3xl md:text-7xl font-semibold mb-4">
            Performance Coaching <br /> COMPANY
          </h1>

          <p className="text-sm md:text-xl text-black mb-4 max-w-3xl font-medium">
            The PCC takes an individual or team and coaches them to maximize
            their personal and professional performance to levels higher than
            the norm.
          </p>

          <p className="text-sm md:text-xl text-black font-medium max-w-3xl">
            We do not stop once we reach high performance though, we then coach
            to consistently perform and stay at that level.
          </p>
        </div>
      </div>
    </section>
  );
}
