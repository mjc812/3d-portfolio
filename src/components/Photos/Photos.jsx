import React from 'react'
import Masonry from 'react-masonry-css'

import { SectionWrapper } from "../../hoc";
import { data } from './data';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Photos = () => {
  return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex ml-[-30px]"
        columnClassName="masonry-grid-column">
          {data.map((item, index) => (
            <div key={index}>
              <img className='mb-5 w-max inline-block p-2 hover:scale-105 ease-in-out duration-300' src={item.img} />
            </div>
        ))}
      </Masonry>
  )
}

export default SectionWrapper(Photos, "photos");