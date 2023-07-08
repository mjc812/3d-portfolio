import React from 'react'
import { data } from './data';

const Slider = () => {
  return (
    <div className='w-full max-h-60 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide' id='slider' >
        {data.map((item) => (
            <img
                className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                src={item.img}
                alt='/'
            />
        ))}
    </div>
  )
}

export default Slider