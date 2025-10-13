import React, { useState } from 'react'
import dayjs from 'dayjs'

const TheaterTiming = () => {

    const today = dayjs();
    const[selectedDate, setSelectedDate] = useState(today);
    const formattedDate = selectedDate.format("DD-MM-YY");

    const nextdays = Array.from({ length: 7}, (_, i) => today.add(i,"day"));

  return (
    <>
    <div className='flex items-center  gap-2 mb-4 overflow-x-auto py-4 px-25'>
        {
            nextdays.map((date, i) =>{
                const isSelected = selectedDate.isSame(date,"day");
                return (
                    <button
                     key={i}
                     onClick={() => setSelectedDate(date)}
                     className={`flex cursor-pointer flex-col border border-gray-200 items-center
                        px-3 py-2 rounded-lg min-w-[50px] ${isSelected ? "bg-white text-black font-semibold": "text-white hover:bg-gray-500"}`}
                     >
                        <span className='text-sm font-black'>{date.format("D")}</span>
                        <span className='text-xs'>{date.format("ddd")}</span>
                        <span className='text-[10px]'>{date.format("MMM").toUpperCase()}</span>

                    </button>
                )
            })
        }
    </div>
    </>
  )
}

export default TheaterTiming
