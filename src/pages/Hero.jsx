import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Navbar from "../components/Navbar";

const slides = [
  {
    id: 1,
    title: "Avengers Endgame",
    subtitle: "Trending",
    description:
      "Experience the epic conclusion of the Infinity Saga. Watch your heroes unite for one last battle.",
    image:
      "https://rare-gallery.com/resol/2048x1152/74072-AvengersAvengers-Endgame-4k-Ultra-HD-Wallpaper.jpg",
  },
  {
    id: 2,
    title: "The Batman",
    subtitle: "Now Streaming",
    description:
      "The Dark Knight returns with a gritty detective story. Gotham needs its hero more than ever.",
    image: "https://wallpaperaccess.com/full/543180.jpg",
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    subtitle: "Popular",
    description:
      "Worlds collide when Peter Parker seeks Doctor Strange’s help. Heroes and villains from the multiverse unite.",
    image:
      "https://preview.redd.it/r3spodxd3wo71.png?width=1080&crop=smart&auto=webp&s=024b6132e7b58530b9a0121c72d53f061f8c7429",
  },
];

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={slide.image}
                alt={slide.title}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>

              {/* Hero Content */}
              <div className="absolute bottom-10 sm:bottom-16 md:bottom-24 left-4 sm:left-8 md:left-12 z-20 max-w-xl sm:max-w-2xl flex flex-col gap-2 sm:gap-4 md:gap-6">
                {/* Subtitle */}
                <h1 className="inline-block bg-orange-600 text-white font-medium text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 rounded-full w-fit shadow-lg">
                  {slide.subtitle}
                </h1>

                {/* Title */}
                <h2 className="text-white font-bold text-2xl sm:text-4xl md:text-6xl leading-snug md:leading-tight drop-shadow-lg">
                  {slide.title}
                </h2>

                {/* Description */}
                <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-sm sm:max-w-md md:max-w-lg">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4">
                  <button className="px-4 cursor-pointer sm:px-5 md:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm sm:text-base font-semibold shadow-lg transition-all">
                    ▶ Watch Now
                  </button>
                  <button className="px-4 cursor-pointer sm:px-5 md:px-6 py-2 sm:py-3 bg-gray-800/70 hover:bg-gray-900 text-white rounded-full text-sm sm:text-base font-semibold shadow-lg transition-all">
                    + Add to List
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
