import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const MCard = ({ thumbnailImg, underImg, title, description, id }) => {
  const [hovered, setHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setShowPreview(true);
    timerRef.current = setTimeout(() => {
      setHovered(true);
    }, 800);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setHovered(false);
    timerRef.current = setTimeout(() => {
      setShowPreview(false);
    }, 400);
  };

  return (
    <Link to={`/movies/${id}`}>
      <div
        className="
          relative cursor-pointer 
          w-30 h-50   /* default (mobile) */
          sm:w-44 sm:h-60  /* tablets */
          md:w-48 md:h-64  /* medium screens */
          lg:w-56 lg:h-72  /* large screens */
        "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Thumbnail */}
        <img
          src={thumbnailImg}
          alt={title}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />

        {/* Preview Card */}
        {showPreview && (
          <div
            className={`
              absolute top-1/2 left-1/2
              w-[90vw] sm:w-[22rem] md:w-[24rem] lg:w-[26rem] 
              max-h-[80vh] overflow-y-auto
              -translate-x-1/2 -translate-y-1/2
              bg-zinc-900 text-white rounded-xl shadow-2xl z-50
               flex flex-col
              transform transition-all duration-500 ease-in-out
              ${hovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}
            `}
          >
            <img
              src={underImg}
              alt={title}
              className="w-full h-50 object-cover rounded-top mb-3"
            />
            <div className="p-3">
              <h3 className="text-base sm:text-lg font-bold">{title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 line-clamp-3">
                {description}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <button className="px-3 sm:px-4 py-2 bg-blue-600 rounded-lg text-xs sm:text-sm hover:bg-red-700 transition">
                  ▶ Play
                </button>
                <button className="px-3 sm:px-4 py-2 bg-gray-700 rounded-lg text-xs sm:text-sm hover:bg-gray-600 transition">
                  + My List
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default MCard;
