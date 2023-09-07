import React from 'react'
import { data } from './data';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Slider = ({ photos }) => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className='relative flex items-center'>
      <div>
        <MdChevronLeft className=' hover:scale-150 ease-in-out duration-300 opacity-50 cursor-pointer hover:opacity-100' 
          onClick={slideLeft} size={40} 
        />
      </div>
      <div className='min-h-72 max-h-72 pt-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide' id='slider' >
        {photos.map((photo, index) => (
          <img
            key={index}
            className='w-[250px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
            src={photo}
            alt='/'
          />
        ))}
      </div>
      <div>
        <MdChevronRight className='hover:scale-150 ease-in-out duration-300 opacity-50 cursor-pointer hover:opacity-100' 
          onClick={slideRight} size={40} 
        />
      </div>
    </div>
  )
}

export default Slider //scrollbar-hide