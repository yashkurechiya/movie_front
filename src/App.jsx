import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
 
 
import { Toaster } from 'react-hot-toast'
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
import GestureTest from './components/GestureTest'
import Movies from './pages/Movies'
import TheaterM from './components/TheaterM'
import ShowTime from './components/ShowTime'
import Profile from './pages/Profile'
 

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/adimin')
   
  return (
    <>
      <Toaster />
      {/* <GestureTest /> */}

      { !isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/theaters' element={<TheaterM />} />
        <Route path='/theaters/:id' element={<TheaterM />}/>
        <Route path='/show' element={<ShowTime />}/>
        <Route path='/chat' element={<MobChat />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/videos/:id' element={<Trailer /> } />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/profile' element={<Profile />} />

        {/* <Route path='' /> */}
      </Routes>
      
    </>
  )
}

export default App
