import React from 'react'
import Masonry from 'react-masonry-css'

import { SectionWrapper } from "../../hoc";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Photos = () => {
  return (
    <div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
          {/* array of JSX items */}
      </Masonry>
    </div>
  )
}

export default SectionWrapper(Photos, "photos");