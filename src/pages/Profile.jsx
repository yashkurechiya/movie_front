import { useEffect, useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleDelete = async (ticketId) => {
  try {
    await api.delete(`/ticket/remove/${ticketId}`);


    setTickets(prev => prev.filter(t => t._id !== ticketId));

    toast.success("Ticket cancelled successfully");
  } catch (error) {
    console.error("Failed to cancel ticket", error);
    toast.error("Failed to cancel ticket");
  }
};

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get("/ticket/mybooking");
        setTickets(res.data.bookings || []);
      } catch (error) {
        console.error("Failed to fetch bookings", error);
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem("token");
    
    if(!token)
      navigate('/login');

    fetchBookings();
  }, []);

  /* ------------------ LOADING STATE ------------------ */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        <div className="animate-pulse text-lg">Loading your profile…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-5 md:px-20 py-24">
      
      {/* ------------------ PROFILE HEADER ------------------ */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-14">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-3xl font-bold">
          Y
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-gray-400 mt-1">
            Manage your bookings & movie history
          </p>
        </div>
      </div>

      {/* ------------------ TICKETS SECTION ------------------ */}
      <h2 className="text-2xl font-semibold mb-6">🎟 My Tickets</h2>

      {tickets.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          No tickets booked yet  
          <p className="text-sm mt-2">Start watching your favorite movies 🍿</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((t) => (
            <div
              key={t._id}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <div className="flex gap-4">
                {/* Movie Poster */}
                <img
                  src={t.movieId?.poster_path}
                  alt={t.movieId?.title}
                  className="w-24 h-36 rounded-lg object-cover group-hover:opacity-90"
                />

                {/* Ticket Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {t.movieId?.title}
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                      {t.theaterName}, {t.theaterLocation}
                    </p>

                    <p className="text-sm mt-2">
                      ⏰ <span className="font-medium">{t.showTime}</span>
                    </p>

                    <p className="text-sm">
                      💺 <span className="font-medium">{t.seats.join(", ")}</span>
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mt-3">
                    Booked on{" "}
                    {new Date(t.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
                <button
                onClick={() => handleDelete(t._id)}
                className="p-2 bg-red-500 text-sm hover:bg-red-600 m-2 cursor-pointer rounded-lg">
                  Cancel
                </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
