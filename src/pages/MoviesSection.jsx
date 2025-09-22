import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import DramaCard from "../components/DramaCard";
import axios from "axios";

const MoviesSection = () => {
  const backend = import.meta.env.VITE_BACKEND_URI;
  const [data, setData] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get(`${backend}/api/videos/`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      {/* Bollywood Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <p className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 p-3 sm:p-5">
          Bollywood Top Hits <ArrowRight size={20} />
        </p>

        <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide p-3 sm:p-5">
          {data
            .filter((d) => d.category === "Bollywood")
            .map((d, index) => (
              <DramaCard
                key={index}
                thumbnailImg={d.thumbnailImg}
                title={d.title}
                underImg={d.underImg}
                description={d.description}
                id={d._id}
              />
            ))}
        </div>
      </div>

      {/* Drama Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <p className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 p-3 sm:p-5">
          Love in Mandarin <ArrowRight size={20} />
        </p>

        <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide p-3 sm:p-5">
          {data
            .filter((d) => d.category === "Drama")
            .map((d, index) => (
              <DramaCard
                key={index}
                thumbnailImg={d.thumbnailImg}
                title={d.title}
                underImg={d.underImg}
                description={d.description}
                id={d._id}
              />
            ))}
        </div>
      </div>

      {/* Beast Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <p className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 p-3 sm:p-5">
          A Binge of Beasts <ArrowRight size={20} />
        </p>

        <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide p-3 sm:p-5">
          {data
            .filter((d) => d.category === "Beast")
            .map((d, index) => (
              <DramaCard
                key={index}
                thumbnailImg={d.thumbnailImg}
                title={d.title}
                underImg={d.underImg}
                description={d.description}
                id={d._id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default MoviesSection;
