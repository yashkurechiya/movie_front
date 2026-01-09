import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Trailer = () => {
  const backend = import.meta.env.VITE_BACKEND_URI;
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleData = async () => {
    try {
      const response = await axios.get(`${backend}/api/videos/${id}`);
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleData();
  }, [id]);

  /* ------------------ YOUTUBE EMBED ------------------ */
  const getEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
  };

  /* ------------------ LOADING UI ------------------ */
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-gray-400 text-lg">
          Loading trailer…
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
      {/* ------------------ HERO TRAILER ------------------ */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

        <div className="w-full aspect-video">
          <iframe
            src={getEmbedUrl(data?.url)}
            title={data?.title || "Movie Trailer"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full "
          />
        </div>
      </div>

      {/* ------------------ CONTENT ------------------ */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-10">
        
        {/* Title & Actions */}
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              {data?.title}
            </h1>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Watch the official trailer and get a glimpse into the story,
              visuals, and cinematic experience.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition backdrop-blur"
            >
              ← Back
            </button>

            <button
              className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition font-medium"
            >
              + Watch Later
            </button>
          </div>
        </div>

        {/* ------------------ EXTRA INFO CARDS ------------------ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <InfoCard title="🎥 Type" value="Official Trailer" />
          <InfoCard title="📺 Platform" value="YouTube" />
          <InfoCard title="🔥 Quality" value="HD Available" />

        </div>
      </div>
    </div>
  );
};

/* ------------------ INFO CARD COMPONENT ------------------ */
const InfoCard = ({ title, value }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg hover:bg-white/10 transition">
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
};

export default Trailer;
