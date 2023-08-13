import React from 'react'
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { data } from './data';
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 1,
  500: 1
};

const Photos = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Scuba diving, Hiking, Soccer
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Hobbies.
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((item, index) => (
          <div key={index} className="rounded-md overflow-hidden">
            <img className='w-full h-auto inline-block p-2 hover:scale-105 ease-in-out duration-300' src={item.img} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Photos, "photos");