import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {   Pagination, Autoplay } from "swiper/modules";

import "swiper/css/pagination";

const Poster = () => {
  const movies = [
    { id: 1, title: "Inception", img: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1752039451736_humareramdesktopjul.jpg" },
    { id: 2, title: "Interstellar", img: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1757148047631_6thsepplaycardsep25hpptmdesktop.jpg" },
    { id: 3, title: "Avatar", img: "https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1757584782405_indoreartistpromobanner.jpeg" },
  ];

  return (
    <div className="h-[400px] w-full px-6 my-20 py-4">
      <Swiper
        modules={[  Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: false }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={movie.img} alt={movie.title} className="w-full h-[350px] object-contain" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Poster;
