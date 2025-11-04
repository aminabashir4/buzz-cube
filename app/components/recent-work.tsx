"use client";

import Image from "next/image";

export default function MyWorks() {
  const works = [
    {
      title: "Smart Cities Platform",
      description:
        "Building intelligent urban ecosystems using IoT and AI to enhance sustainability, mobility, and digital inclusion.",
      image: "/images/smart-city-data.jpg",
      tags: ["Web App", "AI", "IoT"],
    },
    {
      title: "Buzzcube Analytics",
      description:
        "A data-driven dashboard for startups to visualize engagement, revenue, and user behavior in real-time.",
      image: "/images/HDD.jpeg",
      tags: ["Data Visualization", "React", "Supabase"],
    },
    {
      title: "Creative Campaign Studio",
      description:
        "Empowering brands to design and manage digital campaigns with interactive storytelling tools.",
      image: "/images/Untitled.002.webp",
      tags: ["UI/UX", "Next.js", "Branding"],
    },
    {
      title: "Flight Booking Experience",
      description:
        "A seamless interface for users to explore, book, and manage flights with real-time status tracking.",
      image: "/images/68cd432901fe5a7f3e09e1b0_flight.webp",
      tags: ["App Design", "API Integration"],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#e8e8e8] to-[#cce8f5] py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 leading-tight font-heading">
          Our Works
        </h2>
        <p className="text-base md:text-xl text-black mb-4 max-w-2xl mx-auto">
          Explore Buzzcube’s latest digital creations — from smart solutions to
          immersive web experiences that redefine innovation and impact.
        </p>
      </div>

      <div className="relative flex items-center w-full justify-center">
        <button className="absolute left-36 text-3xl text-gray-700 hover:text-black">
          ←
        </button>

        <div className="flex gap-3 overflow-x-auto px-12 py-6 scrollbar-hide">
          {works.map((work, index) => (
            <div
              key={index}
              className="relative w-72 h-[420px] rounded-3xl overflow-hidden group flex-shrink-0 cursor-pointer bg-gray-100"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {work.title}
                </h3>
                <p className="text-gray-300 text-md mb-4">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="absolute right-36 text-3xl text-gray-700 hover:text-black">
          →
        </button>
      </div>
    </section>
  );
}
