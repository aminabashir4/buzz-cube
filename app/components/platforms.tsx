"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Platforms() {
  const images = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      brand: "Nike",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      brand: "Adidas",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg",
      brand: "Puma",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/1/10/Reebok_logo.svg",
      brand: "Reebok",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Under_armour_logo.svg",
      brand: "Under Armour",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/New_Balance_logo.svg",
      brand: "New Balance",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/1/12/ASICS_logo.svg",
      brand: "Asics",
    },
  ];

  useEffect(() => {
    const tracks = document.querySelectorAll<HTMLElement>(".track");
    tracks.forEach((track) => {
      const isLeftTrack = track.classList.contains("track-left");
      track.style.animation = isLeftTrack
        ? "scrollLeft 40s linear infinite"
        : "scrollRight 40s linear infinite";
    });
  }, []);

  return (
    <section className="bg-white text-center overflow-x-hidden relative py-16">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto mb-12 px-6">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 leading-tight font-heading">
          Platforms We Work With
        </h2>
        <p className="text-base md:text-xl text-black mb-4 max-w-2xl mx-auto">
          We collaborate with some of the world’s leading brands and platforms
          to deliver high-quality digital experiences, innovative designs, and
          powerful results.
        </p>
      </div>

      {/* Sliders */}
      <div className="mx-auto w-full max-w-[1350px] px-4 space-y-8">
        {/* Top Slider */}
        <div className="slider">
          <div className="track track-left flex w-max">
            {[...images, ...images].map((item, i) => (
              <div key={`top-${i}`} className="flex flex-col items-center mx-4">
                <Image
                  src={item.src}
                  alt={item.brand}
                  width={140}
                  height={140}
                  className="rounded-lg object-contain h-32 w-32 bg-gray-100 p-4"
                />
                <p className="text-sm font-semibold mt-2 text-gray-700">
                  {item.brand}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Slider */}
        <div className="slider">
          <div className="track track-right flex w-max">
            {[...images, ...images].map((item, i) => (
              <div key={`bottom-${i}`} className="flex flex-col items-center mx-4">
                <Image
                  src={item.src}
                  alt={item.brand}
                  width={140}
                  height={140}
                  className="rounded-lg object-contain h-32 w-32 bg-gray-100 p-4"
                />
                <p className="text-sm font-semibold mt-2 text-gray-700">
                  {item.brand}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        .slider {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .track-left {
          animation: scrollLeft 40s linear infinite;
        }

        .track-right {
          animation: scrollRight 40s linear infinite;
        }

        @media (max-width: 768px) {
          .track-left,
          .track-right {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}
