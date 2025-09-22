import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dummyShowsData, { dummyDateTimeData } from "../assets/assets.js";
import { StarIcon } from "lucide-react";
import timeformat from "../lib/Timeformat.jsx";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const getShow = async () => {
    const show = dummyShowsData.find((show) => show._id === id);
    setShow({
      movie: show,
      dateTime: dummyDateTimeData,
    });
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 pt-20 md:pt-28">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 max-w-6xl mx-auto">
        {/* Poster */}
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="mx-auto md:mx-0 rounded-xl 
                     w-48 sm:w-64 md:w-72 lg:w-80 
                     h-auto object-cover shadow-lg"
        />

        {/* Details */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="bg-orange-600 text-white text-xs sm:text-sm px-3 py-1 rounded-md w-fit mx-auto md:mx-0">
            ENGLISH
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            {show.movie.title}
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm sm:text-base">
            <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 fill-orange-600" />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            {show.movie.overview}
          </p>

          <p className="text-sm sm:text-base text-gray-400">
            {timeformat(show.movie.runtime)} •{" "}
            {show.movie.genres.map((genre) => genre.name).join(", ")} •{" "}
            {show.movie.release_date.split("-")[0]}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen text-lg">
      Loading...
    </div>
  );
};

export default MovieDetails;
