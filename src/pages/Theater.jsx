import "swiper/css/pagination";
import Poster from "../components/Poster";
import ReleaseCard from "../components/ReleaseCard";
import { useNavigate } from 'react-router-dom'
import Footer from "../components/Footer";

const moviesInCinemas = [
  {
    id: 1,
    title: "Ajay: The Untold Story of a Yogi",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NTcuOEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00450678-fadascahgt-portrait.jpg",
    language: "Japanese / Dubbed",
    releaseDate: "2025-09-12",
    time: "2h 36m",
    action: "Action"
  },
  {
    id: 2,
    title: "Heer Express",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0LjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-20,lx-N16,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00449472-kgmeemqfqx-portrait.jpg",
    language: "Telugu / Hindi / Tamil",
    releaseDate: "2025-09-12",
    time: "1h 56m",
    action: "Comedy"
  },
  {
    id: 3,
    title: "Jolly LLB 3",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTI2LjZLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00450799-evnrygqxbf-portrait.jpg",
    language: "English / Hindi Dub",
    releaseDate: "2025-09-05",
    time: "2h 10m",
    action: "Comedy"
  },
  {
    id: 4,
    title: "Mirai",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgNzUuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395402-wehawurecb-portrait.jpg",
    language: "Hindi / Dubbed",
    releaseDate: "2025-09-12",
    time: "2h 40m",
    action: "Action"
  },
  {
    id: 5,
    title: "Demon Slayer: Infinity Castle",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICA4OS41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00436673-cswcvvxczx-portrait.jpg",
    language: "Japanese / English / Hindi",
    releaseDate: "2025-08-28",
    time: "1h 30m",
    action: "Action"
  },
  {
    id: 6,
    title: "Nishaanchi",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzEuNEsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00449979-vhfaldtzqu-portrait.jpg",
    language: "Hindi",
    releaseDate: "2025-08-28",
    time: "1h 30m",
    action: "Romance"
  },
  {
    id: 7,
    title: "The Conjuring: Last Rites",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni41LzEwICA2Mi45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00445371-sxmxanqwgd-portrait.jpg",
    language: "Tamil / English / Hindi",
    releaseDate: "2025-08-28",
    time: "1h 30m",
    action: "Horror"
  },
  {
    id: 8,
    title: "Mahavatar Narshimha",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS42LzEwICAzMjAuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00429289-khcwlguwsx-portrait.jpg",
    language: "Malyalam / English / Hindi",
    releaseDate: "2025-08-28",
    time: "1h 30m",
    action: "History"
  },
];

const upComing = [
  {
    id: 1,
    title: "They Call Him OG",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjUsIFNlcCAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00369074-wussdvdtrv-portrait.jpg",
    language: "Hindi",
    releaseDate: "25 Sept 2025",
    time: "1h 50m",
    action: "Action"
  },
  {
    id: 2,
    title: "Kantara: A Legend Chapter-1",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MiwgT2N0IDIwMjU%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00377351-ewcckwkjje-portrait.jpg",
    language: "Hindi / Malayalam",
    releaseDate: "2 Oct 2025",
    time: "2h 45m",
    action: "Thriller"
  },
  {
    id: 3,
    title: "Avatar: Fire and Ash",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTksIERlYyAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00407893-jxncwqckbj-portrait.jpg",
    language: "Hindi / English",
    releaseDate: "25 Sept 2025",
    time: "1h 50m",
    action: "Adventure"
  },
  {
    id: 4,
    title: "Toxic",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTksIE1hciAyMDI2,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378770-fshzjevtnf-portrait.jpg",
    language: "Hindi / Tamil",
    releaseDate: "25 Sept 2025",
    time: "1h 50m",
    action: "Action"
  },
  {
    id: 5,
    title: "The Raja Saab",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-NSwgRGVjIDIwMjU%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383697-cyfubdhvsy-portrait.jpg",
    language: "Hindi",
    releaseDate: "25 Sept 2025",
    time: "1h 50m",
    action: "Comedy"
  },
  {
    id: 7,
    title: "Trikaali",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjAsIFNlcCAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00460410-avfvhktqbu-portrait.jpg",
    language: "Hindi / Tamil",
    releaseDate: "25 Sept 2025",
    time: "1h 50m",
    action: "Thriller"
  },
  {
    id: 8,
    title: "Shin chan",
    posterUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjYsIFNlcCAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00447683-tjllbrmtmb-portrait.jpg",
    language: "Hindi / English / Japanese",
    releaseDate: "25 Sept 2025",
    time: "1h 50m",
    action: "Comedy"
  }
]



const Theater = () => {
  const navigate = useNavigate();

  const handleCardClick = (movie) => {
    navigate(`/theaters/${movie.id}`, { state: movie });
  };

  return (
    <>
   
    <div className="h-auto w-full px-6  pt-4">
      <div className="lg:flex hidden">
        <Poster />
      </div>

      {/* In Cinemas */}
      <div className="lg:px-20  flex flex-col">
        <h1 className="text-4xl font-semibold my-10">In Cinemas</h1>
        <div className="grid 
  grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5
  gap-2 sm:gap-6">
          {moviesInCinemas.map((movie) => (
            <ReleaseCard
              key={movie.id}
              title={movie.title}
              poster={movie.posterUrl}
              language={movie.language}
              releaseDate={movie.releaseDate}
              time={movie.time}
              action={movie.action}
              onClick={() => handleCardClick(movie)} // ✅ fixed
            />
          ))}
        </div>
      </div>

      {/* Upcoming */}
      <div className="lg:px-20 flex flex-col">
        <h1 className="text-4xl font-semibold my-10">Up Coming Cinemas</h1>
        <div className="grid 
  grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-6">
          {upComing.map((movie) => (
            <ReleaseCard
              key={movie.id}
              title={movie.title}
              poster={movie.posterUrl}
              language={movie.language}
              releaseDate={movie.releaseDate}
              time={movie.time}
              action={movie.action}
              onClick={() => handleCardClick(movie)} // you can also add navigation here
            />
          ))}
        </div>
      </div>
    </div>
      <Footer />
     </>
  );
};

export default Theater;