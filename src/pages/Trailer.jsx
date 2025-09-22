import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Trailer = () => {
  const backend = import.meta.env.VITE_BACKEND_URI;
  const { id } = useParams();
  const [data, setData] = useState(null);

  const handleData = async () => {
    try {
      const response = await axios.get(`${backend}/api/videos/${id}`);
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    handleData();
  }, [id]);

  // Helper: convert normal YouTube URL to embed URL
  const getEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-4 py-10">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center">
        {data?.title}
      </h1>

      {data ? (
        <div className="w-full max-w-5xl aspect-video">
          <iframe
            src={getEmbedUrl(data.url)}
            title={data.title || "YouTube trailer"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl shadow-lg"
          ></iframe>
        </div>
      ) : (
        <p className="text-white text-lg">Loading trailer...</p>
      )}
    </div>
  );
};

export default Trailer;
