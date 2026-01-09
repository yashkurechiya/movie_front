import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dummyShowsData, { dummyDateTimeData } from "../assets/assets.js";
import { StarIcon } from "lucide-react";
import timeformat from "../lib/Timeformat.jsx";
import Recommend from "../components/Recommend.jsx";
import api from "../api/axios.js";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const navigate = useNavigate();

  const getShow = async () => {
  try {
    const res = await api.get(`/movies/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("MOVIE RESPONSE:", res.data);

    // ✅ backend already gives ONE movie
    // const movies = movie.fi
    setShow(res.data.movie);

  } catch (error) {
    console.error(error);
  }
};

// const movie = show.find((mov) => mov._id === id);
// console.log(movie);
// console.log(show);




  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="px-4 sm:px-8   md:px-16 lg:px-32 pt-20 md:pt-28">
      <div className="flex flex-col   shadow-gray-700 border-t shadow-lg rounded-lg overflow-hidden border-gray-600 md:flex-row gap-6 lg:gap-10 max-w-6xl mx-auto">
        {/* Poster */}
        <img
          src={show.poster_path}
          alt={show.title}
          className="mx-auto md:mx-0 rounded-xl 
                     w-48 sm:w-64 md:w-72 lg:w-80 
                     h-auto object-cover shadow-lg"
        />

        {/* Details */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="bg-orange-600 mt-10 text-white text-xs sm:text-sm px-3 py-1 rounded-md w-fit mx-auto md:mx-0">
            ENGLISH
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            {show.title}
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm sm:text-base">
            <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 fill-orange-600" />
            {show.vote_average.toFixed(1)} User Rating
          </div>

          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            {show.overview}
          </p>

          <p className="text-sm sm:text-base text-gray-400">
            {timeformat(show.runtime)} •{" "}
            {show.genres.map((genre) => genre.name).join(", ")} •{" "}
            {show.release_date.split("-")[0]}
          </p>
          </div>
      <button
        onClick={() => navigate(`/theaters?movieId=${show._id}`)}
        className="bg-red-600 w-30 hover:bg-red-700 text-start py-2 ml-20 mb-5 lg:mb-0 lg:ml-80 cursor-pointer rounded font-semibold"
      >
        <h1 className=" os lg:rotate-90 lg:text-start text-center letter-space-4 text-white lg:text-5xl text-3xl font-bold">
          BOOK
        </h1>
      </button>
      </div>
      <Recommend  title={'Recommend Movies'}/>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen text-lg">
      Loading...
    </div>
);
  
};

export default MovieDetails;
