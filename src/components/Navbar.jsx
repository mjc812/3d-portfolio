import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { computer_no_bg, menu, close, resume } from "../assets";

//code belongs to https://github.com/adrianhajdin/project_3D_developer_portfolio/blob/main/src/hoc/SectionWrapper.jsx. 
//proper citations will be added soon

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); 
          }}>
            <img src={computer_no_bg} alt='logo' className=' w-10 h-10 object-contain' />
            <p className='text-white text-[25px] font-bold cursor-pointer flex'>
              Michael Chung &nbsp;
            </p>
        </Link>
        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-secondary"} 
              hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
          <li className={`${"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="bg-[#915EFF] text-white py-2 px-4 rounded">
              View Resume (PDF)
            </a>
          </li>
        </ul>
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' 
            onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 
            min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-[16px] 
                  ${active === nav.title ? "text-white" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className={`font-poppins font-medium cursor-pointer text-[16px]`}>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="bg-[#915EFF] text-white py-2 px-4 rounded">
                  View Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar