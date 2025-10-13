import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Cast from "../components/Cast";
import TheaterTiming from "../components/TheaterTiming";

const Released = () => {
    const { state: movie } = useLocation();
    const[tr, setTr] = useState(false);

    const handletr = () =>{
        setTr[true];
    }
    if (!movie) return <h1>No movie data found</h1>; // handles refresh case

    return (
        <div className="lg:py-20 py-20">

            <div className="flex flex-col lg:flex lg:p-10 items-center">
                {/* <img src={movie.posterUrl} className="w-full object-contain"/> */}

                <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-70 h-100 rounded-md lg:ml-20 ml-50 shadow-lg"
                />
                    <h1 className="lg:text-3xl ml-30 text-2xl font-bold mt-4">{movie.title}</h1>
                <div className=" lg:p-20 p-5 gap-5 flex ml-55 lg:ml-0">

                    <p>Language: {movie.language}</p>
                    <p>Release Date: {movie.releaseDate}</p>
                    <p>Duration: {movie.time}</p>
                    <p>Genre: {movie.action}</p>
                </div>
                <div className="absolute h-100 my-30 lg:inset-0 bg-gradient-to-l z-10 from-white/70 via-black/20 to-transparent opacity-100 "></div>


            </div>
                <div className="group hidden lg:relative">
                    <div className="right-5 bottom-30 opacity-50 group-hover:opacity-100 absolute">
                     {tr ? <TheaterTiming /> : "" }   
                     <button onClick={handletr} className="bg-blue-600 z-20 text-2xl font-bold shadow shadow-white rounded-lg p-2 right-30 bottom-60 absolute">
                        Book Now
                    </button>
                    </div>
                </div>
            <div>
                <h1 className="lg:px-30 pl-30 py-5 text-2xl font-semibold">About the Movie</h1>
                <p className="lg:px-30 pl-30">Ajey: The Untold Story of a Yogi traces the remarkable journey of Ajay Singh Bisht, from a Himalayan village to becoming Yogi Adityanath, a monk, spiritual leader, and Chief Minister of Uttar Pradesh. Based on Shantanu Gupta`s bestselling book, the film blends politics and spirituality in a compelling biopic.</p>
                <hr className="text-gray-600 my-10 mx-20" />

                <h1 className="px-30 pb-5 text-2xl font-semibold">Cast</h1>
                <div className="px-30 grid lg:grid-cols-6 grid-cols-5 gap-15 ">
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                    <Cast />
                </div>
                <hr className="text-gray-600 my-10 mx-20" />
                <h1 className="px-30 pb-5 text-2xl font-semibold">Crew</h1>
                <div className="px-30 grid lg:grid-cols-6 grid-cols-5 gap-15 ">
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
