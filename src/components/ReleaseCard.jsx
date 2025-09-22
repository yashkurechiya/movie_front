import React from "react";

const ReleaseCard = ({ title, poster, language, time, action, onClick }) => {
  return (
    <div
      className="rounded-lg border border-gray-700 w-full sm:w-[300px] md:w-[280px] lg:w-[230px] cursor-pointer"
      onClick={onClick}
    >
      {/* Movie Poster */}
      <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <img
          src={poster}
          alt={title}
          className="h-[250px] sm:h-[320px] md:h-[360px] lg:h-[400px] w-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Action + Button */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          {/* Action Tag */}
          {action && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs sm:text-sm rounded-full bg-red-500/80 backdrop-blur-md group-hover:opacity-0 transition-opacity">
              {action}
            </span>
          )}

          {/* Book Button */}
          <button className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 opacity-0 shadow-lg group-hover:opacity-100 text-sm sm:text-base">
            Book Now
          </button>
        </div>
      </div>

      {/* Movie Info */}
      <div className="flex flex-col text-start justify-between lg:p-4 p-1">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</h1>
        <h3 className="text-sm sm:text-base md:text-lg text-gray-500">{time}</h3>
        <span className="text-xs sm:text-sm md:text-base text-gray-300">{language}</span>
      </div>
    </div>
  );
};

export default ReleaseCard;
