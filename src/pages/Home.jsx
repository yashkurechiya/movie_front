import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import FeaturedSection from '../components/FeaturedSection'
import Hero from './Hero'
import axios from 'axios'
import MoviesSection from './MoviesSection'
import Chatbot from '../components/ChatBot'
import Footer from '../components/Footer'

const Dashboard = () => {

  //    const backend = import.meta.env.VITE_BACKEND_URI;
  // const [data, setData] = useState([])

  // const handleData = async () => {
  //   try {
  //     const response = await axios.get(`${backend}/api/videos`, {})
  //     // console.log(response.data);
  //     console.log(response.data);

  //     setData(response.data)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(() => {

  //   handleData()


  // }, [])

  return (

    <div className='flex flex-col w-screen absolute  '>
      <Hero />
      {/* <FeaturedSection /> */}
      <MoviesSection />

      <div className=' fixed right-20 bottom-20 z-20 h-10'>

      <Chatbot />
      </div>

      <Footer />
    </div>

  )
}

export default Dashboard
