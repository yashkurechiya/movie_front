import { StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import timeformat from "../lib/Timeformat";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-between p-3 border border-gray-800 rounded-xl 
                 hover:-translate-y-1 transition duration-300 w-full sm:w-[250px] md:w-[220px] lg:w-[260px]"
    >
      {/* Poster */}
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`);
          scrollTo(0, 0);
        }}
        src={movie.backdrop_path}
        alt={movie.title}
        className="rounded-lg h-[180px] sm:h-[220px] md:h-[200px] lg:h-[220px] 
                   w-full object-cover object-center cursor-pointer"
      />

      {/* Title */}
      <p className="font-semibold mt-2 truncate text-base sm:text-lg">
        {movie.title}
      </p>

      {/* Year | Genres | Runtime */}
      <p className="text-xs sm:text-sm text-gray-400 mt-1">
        {new Date(movie.release_date).getFullYear()} -{" "}
        {movie.genres.slice(0, 2).map((genre) => genre.name).join(" | ")} -{" "}
        {timeformat(movie.runtime)}
      </p>

      {/* CTA + Rating */}
      <div className="flex items-center justify-between mt-4 pb-3">
        <button
          onClick={() => {
            navigate(`/movies/${movie._id}`);
            scrollTo(0, 0);
          }}
          className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm 
                     bg-orange-600 hover:bg-orange-700 transition
                     rounded-full font-medium cursor-pointer"
        >
          Buy Tickets
        </button>

        <p className="flex items-center gap-1 text-xs sm:text-sm text-gray-400 mt-1 pr-1">
          <StarIcon className="w-4 h-4 text-primary fill-primary" />
          {/* {movie.vote_average.toFixed(1)} */}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
