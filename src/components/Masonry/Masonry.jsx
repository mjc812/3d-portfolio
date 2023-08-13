import React from 'react'

import { SectionWrapper } from "../hoc";

const Masonry = () => {
  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {/* array of JSX items */}
    </Masonry>
  )
}

export default SectionWrapper(Masonry, "masonry");