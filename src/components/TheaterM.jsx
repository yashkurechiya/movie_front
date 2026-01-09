import { useSearchParams, useNavigate } from "react-router-dom";

const theaters = [
  {
    id: "pvr",
    name: "PVR Cinemas",
    location: "Phoenix Mall",
    features: ["Dolby Atmos", "Recliner"],
  },
  {
    id: "inox",
    name: "INOX",
    location: "Central Mall",
    features: ["4K Projection", "Snacks Combo"],
  },
  {
    id: "cinepolis",
    name: "Cinepolis",
    location: "City Center",
    features: ["IMAX", "Laser Screen"],
  },
];

const TheaterM = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const movieId = params.get("movieId");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-5 md:px-20 py-14">

      {/* ================= HEADER ================= */}
      <div className="mb-14 mt-20">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          Select Theater
        </h1>
        
      </div>

      {/* ================= THEATER LIST ================= */}
      <div className="max-w-4xl space-y-6">
        {theaters.map((t) => (
          <div
            key={t.id}
            onClick={() =>
              navigate(`/show?movieId=${movieId}&theaterId=${t.id}`)
            }
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:bg-white/10 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between">
              
              {/* Info */}
              <div>
                <h2 className="text-xl font-semibold group-hover:text-white">
                  {t.name}
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  📍 {t.location}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {t.features.map((f, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="text-gray-400 group-hover:text-white transition text-xl">
                →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheaterM;
