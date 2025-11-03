"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Quote } from "lucide-react";
import RightArrow from "./../../public/images/arrow-right-bold-svgrepo-com.svg";
import LeftArrow from "./../../public/images/arrow-left-bold-svgrepo-com.svg";
import { useRef } from "react";

export default function Reviews() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const reviews = [
    {
      text: "I really enjoyed working with Matt and his team. They were very professional and were happy to work with me until my vision came alive.",
      name: "Laura Liles",
      title: "Founder of House of Her Coaching Programme",
      image: "/images/E3fr1yH6RUVYaUiP9kuo_Laura_Liles.png",
    },
    {
      text: "Matt and his team are great to work with and get impressive results. They are dedicated, innovative and always go the extra mile.",
      name: "Gavin Brown",
      title: "Founder of Speak With Impact and former Scottish Politician",
      image: "/images/E3fr1yH6RUVYaUiP9kuo_Laura_Liles.png",
    },
    {
      text: "Very friendly team. Matt went over and above! Always on hand to answer questions even once the project had been completed.",
      name: "Vanessa Cuddeford",
      title: "Founder of Present, Perform, Persuade Coaching Programme",
      image: "/images/E3fr1yH6RUVYaUiP9kuo_Laura_Liles.png",
    },
    {
      text: "Matt and his team are great to work with and get impressive results. They are dedicated, innovative and always go the extra mile.",
      name: "Gavin Brown",
      title: "Founder of Speak With Impact and former Scottish Politician",
      image: "/images/E3fr1yH6RUVYaUiP9kuo_Laura_Liles.png",
    },
    {
      text: "Very friendly team. Matt went over and above! Always on hand to answer questions even once the project had been completed.",
      name: "Vanessa Cuddeford",
      title: "Founder of Present, Perform, Persuade Coaching Programme",
      image: "/images/E3fr1yH6RUVYaUiP9kuo_Laura_Liles.png",
    },
  ];

  return (
    <section className="bg- text-black py-20 px-6 md:px-20 relative">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 leading-tight font-heading">Reviews</h2>

        {/* Swiper Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            ref={prevRef}
            className="!w-12 !h-12 !bg-white/10 hover:!bg-white/20 rounded-full flex items-center justify-center border"
            aria-label="Previous slide"
          >
            <Image src={LeftArrow} alt="Previous" className="opacity-80" />
          </button>

          <button
            ref={nextRef}
            className="!w-12 !h-12 !bg-white/10 hover:!bg-white/20 rounded-full flex items-center justify-center border"
            aria-label="Next slide"
          >
            <Image src={RightArrow} alt="Next" className="opacity-80" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
        }}
        onInit={(swiper) => {
          // Link navigation buttons once Swiper is ready
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="testimonial-swiper"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${
                index === 1 ? "bg-[#00FF8C]" : "bg-white"
              }  border border-[#00FF8C] p-8 rounded-md shadow-md h-[260px] flex flex-col justify-center text-center`}
            >
              <Quote
                className={`w-6 h-6 mx-auto mb-4 ${
                  index === 1 ? "text-black" : "text-black"
                }`}
              />
              <p
                className={`${
                  index === 1 ? "text-black" : "text-black"
                } text-base leading-relaxed`}
              >
                {item.text}
              </p>
            </div>

            <div className="flex flex-col items-center mt-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white shadow-lg mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm text-gray-900 text-center max-w-xs">
                {item.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
