import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">

        {/* ================= TOP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* -------- BRAND -------- */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-3 shadow-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 3v18l15-9L5 3z" fill="white" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">
                EpicSow
              </h2>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              EpicSow is your ultimate destination for discovering movies,
              booking tickets, choosing seats, and enjoying cinematic
              experiences like never before.
            </p>
          </div>

          {/* -------- DISCOVER -------- */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Discover
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Now Showing</a></li>
              <li><a href="#" className="hover:text-white">Upcoming Movies</a></li>
              <li><a href="#" className="hover:text-white">Theaters Near You</a></li>
              <li><a href="#" className="hover:text-white">Trending Trailers</a></li>
            </ul>
          </div>

          {/* -------- COMPANY -------- */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About EpicSow</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press & Media</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* -------- SUPPORT -------- */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-white/10 mt-12 pt-8">

          {/* -------- BOTTOM -------- */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* SOCIAL */}
            <div className="flex items-center gap-3">
              {[
                "M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v7A10 10 0 0 0 22 12z",
                "M22 5.9c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.8-.7.4-1.5.7-2.3.9C18.8 4.8 17.9 4 16.7 4c-1.7 0-3.1 1.4-3.1 3.1 0 .2 0 .4.1.6C10.3 7.7 7.3 6 5.2 3.6c-.3.5-.5 1.1-.5 1.8 0 1.1.6 2 1.6 2.6-.5 0-1-.2-1.5-.4v.1c0 1.7 1.2 3.2 2.8 3.5-.3.1-.7.1-1 .1-.2 0-.4 0-.5-.1.4 1.2 1.6 2.1 3 2.1-1.1.9-2.5 1.4-4 1.4H6c1.4.9 3 1.4 4.8 1.4 5.8 0 9-4.8 9-9v-.4c.7-.5 1.2-1.2 1.7-2z",
                "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
              ].map((d, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d={d} fill="white" />
                  </svg>
                </a>
              ))}
            </div>

            {/* COPYRIGHT */}
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} EpicSow Entertainment Pvt. Ltd.  
              <span className="block md:inline"> All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
