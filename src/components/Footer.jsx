import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 my-10 bottom-0">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand & description */}
          <div className="w-full md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-2">
                {/* simple play icon */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 3v18l15-9L5 3z" fill="white" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">MyPlayer</h3>
                <p className="text-sm text-gray-400">Stream movies, shows & music — anytime, anywhere.</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6">Enjoy ad-free (or smart-ad) playback, downloads, and a personalized watchlist. Available on web, Android and iOS.</p>

            <div className="flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-md text-sm hover:bg-gray-700" aria-label="Download on Google Play">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 2l15 10-15 10V2z" fill="white" />
                </svg>
                <span>Google Play</span>
              </a>

              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-md text-sm hover:bg-gray-700" aria-label="Download on App Store">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 2C9.8 2 8 3.8 8 6s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM6 14c0-3.3 4.7-4 6-4s6 .7 6 4v6H6v-6z" fill="white" />
                </svg>
                <span>App Store</span>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Discover</h4>
              <ul className="text-sm space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Movies</a></li>
                <li><a href="#" className="hover:text-white">TV Shows</a></li>
                <li><a href="#" className="hover:text-white">Shorts</a></li>
                <li><a href="#" className="hover:text-white">Kids</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Company</h4>
              <ul className="text-sm space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Support</h4>
              <ul className="text-sm space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white">Advertise with us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {/* social icons */}
              <a href="#" aria-label="Facebook" className="p-2 rounded hover:bg-gray-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 3h-2.3v7A10 10 0 0 0 22 12z" fill="white" />
                </svg>
              </a>

              <a href="#" aria-label="Twitter" className="p-2 rounded hover:bg-gray-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 5.9c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.5-1.8-.7.4-1.5.7-2.3.9C18.8 4.8 17.9 4 16.7 4c-1.7 0-3.1 1.4-3.1 3.1 0 .2 0 .4.1.6C10.3 7.7 7.3 6 5.2 3.6c-.3.5-.5 1.1-.5 1.8 0 1.1.6 2 1.6 2.6-.5 0-1-.2-1.5-.4v.1c0 1.7 1.2 3.2 2.8 3.5-.3.1-.7.1-1 .1-.2 0-.4 0-.5-.1.4 1.2 1.6 2.1 3 2.1-1.1.9-2.5 1.4-4 1.4H6c1.4.9 3 1.4 4.8 1.4 5.8 0 9-4.8 9-9v-.4c.7-.5 1.2-1.2 1.7-2z" fill="white" />
                </svg>
              </a>

              <a href="#" aria-label="Instagram" className="p-2 rounded hover:bg-gray-800">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a5 5 0 1 0 .001 9.999A5 5 0 0 0 12 8zm6.5-3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" fill="white" />
                </svg>
              </a>
            </div>

            <div className="text-sm text-gray-400">Available in <span className="text-white">English</span> · <a href="#" className="hover:text-white">Hindi</a> · <a href="#" className="hover:text-white">Tamil</a></div>
          </div>

          <div className="text-sm text-gray-400">© {new Date().getFullYear()} MyPlayer Entertainment Pvt. Ltd. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
