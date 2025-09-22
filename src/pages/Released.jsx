import React from "react";
import { useLocation } from "react-router-dom";
import Cast from "../components/Cast";

const Released = () => {
    const { state: movie } = useLocation();

    if (!movie) return <h1>No movie data found</h1>; // handles refresh case

    return (
        <div className="py-20">
            <div className="flex p-10 items-center">
                {/* <img src={movie.posterUrl} className="w-full object-contain"/> */}

                <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-70 h-100 rounded-md ml-20 shadow-lg"
                />
                <div className=" p-20 gap-5 flex flex-col">

                <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
                <p>Language: {movie.language}</p>
                <p>Release Date: {movie.releaseDate}</p>
                <p>Duration: {movie.time}</p>
                <p>Genre: {movie.action}</p>
                </div>

                <div className="absolute h-100 my-30 inset-0 bg-gradient-to-l z-10 from-white/70 via-black/20 to-transparent opacity-100 "></div>
            </div>
            <div>
                <h1 className="px-30 py-5 text-2xl font-semibold">About the Movie</h1>
                <p className="px-30">Ajey: The Untold Story of a Yogi traces the remarkable journey of Ajay Singh Bisht, from a Himalayan village to becoming Yogi Adityanath, a monk, spiritual leader, and Chief Minister of Uttar Pradesh. Based on Shantanu Gupta`s bestselling book, the film blends politics and spirituality in a compelling biopic.</p>
                <hr className="text-gray-600 my-10 mx-20"/>
                <h1 className="px-30 pb-5 text-2xl font-semibold">Cast</h1>
                <div className="px-30 grid grid-cols-6">
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                </div>
                <hr className="text-gray-600 my-10 mx-20"/>
                <h1 className="px-30 pb-5 text-2xl font-semibold">Crew</h1>
                <div className="px-30 grid grid-cols-6">
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                </div>
            </div>
        </div>
    );
};

export default Released;
