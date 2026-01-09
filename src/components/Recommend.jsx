import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios';
import DramaCard from './DramaCard';
import MCard from './MCard';

const Recommend = ({title}) => {

  const [show, setShow] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getShow = async () => {
    try {
      const res = await api.get("/getmovie")
      setShow(res.data.movies);

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getShow();
  })


  return (
    <div >
      <div>
        <h1 className='text-3xl font-semibold lg:m-15 my-5'>{title}</h1>
      </div>
      <div className='grid lg:grid-cols-4 grid-cols-2 lg:px-20 gap-5 lg:gap-10'>
      {show
        .filter((m) => m._id != id)
        .map((m) => (
          <MCard key={m._id} id={m._id} movie={m} thumbnailImg = {m.poster_path} underImg={m.backdrop_path} title={m.title} />

        ))
      }
</div>
    </div>
  )
}

export default Recommend
