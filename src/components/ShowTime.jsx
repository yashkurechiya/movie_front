import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";
import toast from 'react-hot-toast'

const ShowTime = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const movieId = params.get("movieId");
  const theaterName = params.get("theaterName") || "PVR Cinemas";
  const theaterLocation = params.get("theaterLocation") || "Mumbai";

  const showTimes = ["10:00 AM", "1:30 PM", "4:45 PM", "7:30 PM"];
  const seats = Array.from({ length: 40 }, (_, i) => `A${i + 1}`);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  function loadRazorpayScript() {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }


  const confirmBooking = async () => {
    if (!selectedTime || selectedSeats.length === 0) return;

    if (!selectedSeats.length) {
      alert("Please select at least one seat");
      return;
    }

    try {
      setLoading(true);

      const resi = await loadRazorpayScript();

      if (!resi) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }


      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login to book seats.");
        navigate("/login");
        return;
      }
      console.log({
        movieId,
        showTime: selectedTime,
        theaterName,
        seats: selectedSeats,
      });


      await api.post("/ticket/seatLock", {
        movieId,
        showTime: selectedTime,
        theaterName,
        seats: selectedSeats,
      });

      const res = await api.post("/ticket/payment/order", {
        amount: selectedSeats.length * 200,
      });

      const order = res.data;


      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        order_id: order.order.id,
        currency: "INR",
        name: " Movie Booking",
        amount: order.order.amount,
        description: "Test Transaction",
        handler: async (response) => {
          const verify = await verifyPayment(response);
          console.log(verify);

          if (verify.data.success) {
            await api.post("/ticket/book", {
              movieId,
              theaterName,
              theaterLocation,
              showTime: selectedTime,
              seats: selectedSeats,
              paymentId: response.razorpay_payment_id,
            });

            navigate("/profile");
          }
        },
        modal: {
          ondismiss: async () => {
            await api.post("/ticket/seat/unlock", {
              movieId,
              showTime: selectedTime,
              theaterName,
            });
          },
        },
      };
      const rzp = new window.Razorpay(options);
      if (!rzp) {
        alert("rzp not defined ");
      }
      rzp.open();

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
        "Booking failed. Please login again."
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (paymentData) => {

    const token = localStorage.getItem("token");

    await api.post("/ticket/payment/verify", {
      razorpay_order_id: paymentData.razorpay_order_id,
      razorpay_payment_id: paymentData.razorpay_payment_id,
      razorpay_signature: paymentData.razorpay_signature,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    );
    toast.success("Ticket Booked successful!");
    return { data: { success: true } };

  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-5 md:px-20 py-12">

      {/* ------------------ HEADER ------------------ */}
      <div className="mb-10 mt-20">
        <h1 className="text-3xl font-bold">{theaterName}</h1>
        <p className="text-gray-400">{theaterLocation}</p>
      </div>

      {/* ------------------ SHOW TIMES ------------------ */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Select Show Time</h2>

        <div className="flex flex-wrap gap-3">
          {showTimes.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`px-5 py-2 rounded-full border transition
                ${selectedTime === time
                  ? "bg-red-600 border-red-600"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
                }
              `}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* ------------------ SEAT SELECTION ------------------ */}
      {selectedTime && (
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">

          {/* Seats */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Select Seats
            </h2>

            {/* Screen */}
            <div className="mb-6 text-center">
              <div className="mx-auto w-3/4 h-2 bg-gray-500 rounded-full opacity-50"></div>
              <p className="text-xs text-gray-400 mt-2">SCREEN</p>
            </div>

            {/* Seats Grid */}
            <div className="grid border lg:p-5 border-white/30 rounded-lg grid-cols-8 gap-3 justify-items-center mb-6">
              {seats.map((seat) => {
                const selected = selectedSeats.includes(seat);
                return (
                  <div
                    key={seat}
                    onClick={() => toggleSeat(seat)}
                    className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer text-sm font-medium transition
                      ${selected
                        ? "bg-green-500 text-black"
                        : "bg-white/10 hover:bg-white/20"
                      }
                    `}
                  >
                    {seat}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-white/20 rounded"></span> Available
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-500 rounded"></span> Selected
              </span>
            </div>
          </div>

          {/* ------------------ SUMMARY ------------------ */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit sticky top-24">
            <h3 className="text-lg font-semibold mb-4">
              Booking Summary
            </h3>

            <p className="text-sm text-gray-400 mb-2">
              Show Time
            </p>
            <p className="mb-4">{selectedTime}</p>

            <p className="text-sm text-gray-400 mb-2">
              Selected Seats
            </p>
            <p className="mb-6">
              {selectedSeats.length > 0
                ? selectedSeats.join(", ")
                : "None"}
            </p>

            <button
              disabled={selectedSeats.length === 0 || loading}
              onClick={confirmBooking}
              className={`w-full py-3 rounded-lg font-semibold transition
                ${selectedSeats.length === 0
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
                }
              `}
            >
              {loading ? "Booking..." : "Confirm Booking "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowTime;
