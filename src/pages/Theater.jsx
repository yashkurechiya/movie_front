import "swiper/css/pagination";
import Poster from "../components/Poster";
import ReleaseCard from "../components/ReleaseCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

/* ------------------ DATA ------------------ */
const moviesInCinemas = [ /* same data as you provided */ ];
const upComing = [ /* same data as you provided */ ];

/* ------------------ MAIN PAGE ------------------ */
const Theater = () => {
  const navigate = useNavigate();

  const handleCardClick = (movie) => {
    navigate(`/theaters/${movie.id}`, { state: movie });
  };

  return (
    <>
      {/* ------------------ HERO ------------------ */}
      <HeroHeader />

      {/* ------------------ POSTER SLIDER ------------------ */}
      <div className="hidden lg:block px-6">
        <Poster />
      </div>

      {/* ------------------ IN CINEMAS ------------------ */}
      <MovieSection
        title="In Cinemas"
        subtitle="Now showing near you"
        movies={moviesInCinemas}
        onCardClick={handleCardClick}
      />

      {/* ------------------ UPCOMING ------------------ */}
      <MovieSection
        title="Upcoming Movies"
        subtitle="Get ready for the next big releases"
        movies={upComing}
        onCardClick={handleCardClick}
      />

      <Footer />
    </>
  );
};

export default Theater;

/* ================================================= */
/* ================= COMPONENTS ==================== */
/* ================================================= */

const HeroHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-16 lg:px-20">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Book Tickets for the Latest Movies 🎟️
      </h1>
      <p className="text-gray-400 mt-4 max-w-2xl">
        Discover movies playing now and explore exciting upcoming releases.
        Choose your show, pick your seats, and enjoy the experience.
      </p>
    </div>
  );
};

const MovieSection = ({ title, subtitle, movies, onCardClick }) => {
  return (
    <section className="px-6 lg:px-20 py-14">
      <SectionHeader title={title} subtitle={subtitle} />

      <div
        className="
          grid grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-4 sm:gap-6
        "
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="transition-transform duration-300 hover:-translate-y-2"
          >
            <ReleaseCard
              title={movie.title}
              poster={movie.posterUrl}
              language={movie.language}
              releaseDate={movie.releaseDate}
              time={movie.time}
              action={movie.action}
              onClick={() => onCardClick(movie)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
      <p className="text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};
