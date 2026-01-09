import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getMovie = async () => {
    try {
      const res = await api.get("/getmovie", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMovies(res.data.movies || []);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* ---------------- HERO ---------------- */}
      <div className="px-6 md:px-20 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Movies 
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover movies now playing and upcoming releases.
          Book tickets instantly with EpicSow.
        </p>
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 pb-20">

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-400 py-20">
            Loading movies…
          </div>
        )}

        {/* Empty */}
        {!loading && movies.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            No movies available right now 🎞️
          </div>
        )}

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((mov) => (
            <MovieCard
              key={mov._id}
              movie={mov}
              onClick={() => navigate(`/movies/${mov._id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;

/* ================================================= */
/* ================= MOVIE CARD ==================== */
/* ================================================= */

const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white/4 border border-white/10 backdrop-blur-lg hover:scale-[1.05] transition-all duration-300 shadow-lg"
    >
      {/* Poster */}
      <div className="relative">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="px-4 py-2 bg-red-600 rounded-full text-sm font-semibold">
            View Details
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold line-clamp-1">
          {movie.title}
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          {movie.release_date}
        </p>
      </div>
    </div>
  );
};
