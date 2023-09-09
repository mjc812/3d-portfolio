import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faUnity, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}  className='flex-[0.75] bg-black-100 p-8 rounded-2xl flex flex-col items-center justify-center gap-7' >
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className={styles.sectionSubText}>Email</p>
        <a href="mailto:your-email@example.com">
          <p className="text-white-100 text-[14px] pl-1 tracking-wider">michaelchung812@gmail.com</p>
        </a>
        <p className={styles.sectionSubText}>Stay In Touch</p>
        <ul className="flex justify-evenly gap-5">
          <li className="social-icon">
              <a href="https://github.com/mjc812" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-2xl sm:text-3xl lg:text-4xl" />
              </a>
            </li>
          <li className="social-icon">
            <a href="https://www.youtube.com/channel/UC0xmojygZQFUhZUrRlByRUA" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="text-2xl sm:text-3xl lg:text-4xl" />
            </a>
          </li>
          <li className="social-icon">
            <a href="https://www.linkedin.com/in/michaelchung812" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl sm:text-3xl lg:text-4xl" />
            </a>
          </li>
        </ul>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-550px md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");