import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import DramaCard from "../components/DramaCard";
import api from "../api/axios";

const categories = [
  { title: "Bollywood Top Hits", key: "Bollywood" },
  { title: "Love in Mandarin", key: "Drama" },
  { title: "A Binge of Beasts", key: "Beast" },
];

const MoviesSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const res = await api.get("/videos");
      setData(res.data);
      
    } catch (error) {
      console.error("Failed to fetch movies:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400">Loading movies...</p>;
  }

  return (
    <>
      {categories.map((cat) => (
        <div
          key={cat.key}
          className="px-4 sm:px-8 md:px-12 lg:px-20"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 p-3 sm:p-5">
            {cat.title} <ArrowRight size={20} />
          </p>

          <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide p-3 sm:p-5">
            {data
              .filter((movie) => movie.category === cat.key)
              .map((movie) => (
                <DramaCard
                  key={movie._id}
                  thumbnailImg={movie.thumbnailImg}
                  title={movie.title}
                  underImg={movie.underImg}
                  description={movie.description}
                  id={movie._id}
                />
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default MoviesSection;
