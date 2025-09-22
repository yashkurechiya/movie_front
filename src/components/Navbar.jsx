import React, { useState, useEffect } from 'react'
import { Menu, Search, Home, Film, Tv, LogOut, LogIn, BotIcon } from "lucide-react"
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
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <>
      {/* Desktop Navbar (Top) */}
      <div
        className={`hidden md:flex w-full justify-between items-center px-10 py-4 
        fixed top-0 left-0 z-40 text-white transition-all duration-300
        ${scr ? "bg-black shadow-lg" : "bg-transparent"}`}
      >
        {/* Logo */}
        <h1 className="font-extrabold lg:text-2xl text-xl tracking-wide 
        bg-gradient-to-r text-blue-500  bg-clip-text mx-5 cursor-pointer">
          EpicShow
        </h1>

        {/* Nav Links */}
        <ul className="flex gap-6 px-6 py-2 bg-white/50 text-black backdrop-blur-md cursor-pointer rounded-full text-sm font-medium">
          <Link to="/"><li className='hover:text-blue-500'>Home</li></Link>
          <Link to="/theaters"><li className='hover:text-blue-500'>Theater</li></Link>
          <Link to="/show"><li className='hover:text-blue-500'>Show</li></Link>
        </ul>

        {/* Search + Auth */}
        <div className="flex items-center gap-4">
          
          
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold shadow-md transition-all"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold shadow-md transition-all">
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

        <Link to="/theaters" className="flex flex-col items-center gap-1">
          <Film size={22} />
          <span className="text-xs">Theater</span>
        </Link>

        <Link to="/show" className="flex flex-col items-center gap-1">
          <Tv size={22} />
          <span className="text-xs">Show</span>
        </Link>
        <Link to="/chat" className="flex flex-col items-center gap-1">
          <BotIcon size={22} />
          <span className="text-xs">Bot</span>
        </Link>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="flex flex-col items-center gap-1">
            <LogOut size={22} />
            <span className="text-xs">Logout</span>
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
