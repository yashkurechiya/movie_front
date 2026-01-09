import React, { useState, useEffect } from 'react'
import { Menu, Search, Home, Film, Tv, LogOut, LogIn, BotIcon, User } from "lucide-react"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [scr, setScr] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  // Detect scroll and change bg for desktop
  useEffect(() => {
    const handleScroll = () => {
      setScr(window.scrollY > 50)
    }

    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("login_email")
    localStorage.removeItem("login_username")
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <>
      {/* Desktop Navbar (Top) */}
      <div
        className={`hidden md:flex w-full justify-between items-center px-10 py-4 
        fixed top-0 left-0 z-40 text-white transition-all duration-300
        ${scr ? "bg-black  shadow shadow-gray-800" : "bg-transparent"}`}
      >
        {/* Logo */}
        <h1 className="font-extrabold lg:text-2xl text-xl tracking-wide 
        bg-gradient-to-r text-red-500  bg-clip-text mx-5 cursor-pointer">
          EpicShow
        </h1>

        {/* Nav Links */}
        <ul className="flex gap-6 px-6 py-2 bg-white/50 text-black backdrop-blur-md cursor-pointer rounded-full text-sm font-medium">
          <Link to="/"><li className='hover:text-red-500'>Home</li></Link>
          <Link to="/movies"><li className='hover:text-red-500'>Movie</li></Link>
          <Link to="/profile"><li className='hover:text-red-500'>Profile</li></Link>
        </ul>

        {/* Search + Auth */}
        <div className="flex items-center gap-4">


          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold shadow-md transition-all"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold shadow-md transition-all">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navbar (Bottom) */}
      <div
        className="md:hidden fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-lg 
        text-white flex justify-around items-center py-3 z-50 shadow-t-lg"
      >
        <Link to="/" className="flex flex-col items-center gap-1">
          <Home size={22} />
          <span className="text-xs">Home</span>
        </Link>

        <Link to="/movies" className="flex flex-col items-center gap-1">
          <Film size={22} />
          <span className="text-xs">Movie</span>
        </Link>

        <Link to="/profile" className="flex flex-col items-center gap-1">
          <User size={22} />
          <span className="text-xs">Profile</span>
        </Link>
        <Link to="/chat" className="flex flex-col items-center gap-1">
          <BotIcon size={22} />
          <span className="text-xs">Bot</span>
        </Link>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="flex flex-col items-center gap-1">
            <LogOut size={22} />
            <span className="text-xs">LogOut</span>
          </button>
        ) : (
          <Link to="/login" className="flex flex-col items-center gap-1">
            <LogIn size={22} />
            <span className="text-xs">Login</span>
          </Link>
        )}
      </div>
    </>
  )
}

export default Navbar
