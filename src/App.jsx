import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
 
 
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import MoviesSection from './pages/MoviesSection'
import Trailer from './pages/Trailer'
import Login from './pages/Login'
import Theater from './pages/Theater'
import ReleaseCard from './components/ReleaseCard'
import Released from './pages/Released'
import Show from './pages/Show'
import Chatbot from './components/ChatBot'
import MobChat from './pages/MobChat'
import Register from './pages/Register'
import TheaterTiming from './components/TheaterTiming'
 

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/adimin')
   
  return (
    <>
      <Toaster />

      { !isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/theaters' element={<Theater />} />
        <Route path='/th' element={<TheaterTiming />}/>
        <Route path='/theaters/:id' element={<Released />}/>
        <Route path='/show' element={<Show />}/>
        <Route path='/chat' element={<MobChat />} />
        <Route path='register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/videos/:id' element={<Trailer /> } />
        <Route path='/movies/:id' element={<MovieDetails />} />

        {/* <Route path='' /> */}
      </Routes>
      
    </>
  )
}

export default App
