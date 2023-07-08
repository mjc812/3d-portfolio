import React from 'react'
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import Slider from "./Slider";

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    maxWidth: '80vw',
    maxHeight: '80vh',
    background: 'black',
    padding: '2rem',
    borderRadius: '0.75rem',
    display: 'flex',
    opacity: 1,
    transition: 'opacity 300ms',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const ModalPopup = ({ isOpen, onRequestClose, selectedModal, closeModal }) => {
  return (
    <Modal style={modalStyles} isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Springy Modal" ariaHideApp={false}>
      <div className="flex flex-col">
        <button className='fixed top-0 right-0 mt-4 mr-4 text-white font-bold py-2 px-4 rounded' onClick={closeModal}>Close</button>
        <div className='w-full min-h-72 max-h-72'>
          <Slider/>
        </div>
        <div className="mt-5 flex flex-col space-y-5">
          {selectedModal === 'Car Rent' && (
            <>
              <h5 className='text-secondary text-[30px] max-w-3xl leading-[30px]'>Forest 1</h5>
              <div className="flex flex-col md:flex-row">
                <p className='text-secondary text-[17px] max-w-3xl leading-[30px] mb-4 md:mb-0'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, sem eget fermentum finibus, 
                  dui justo consectetur erat, non cursus turpis tortor non sapien. In hac habitasse platea dictumst. 
                  Pellentesque elit lectus, tristique viverra volutpat sed, gravida convallis enim. Maecenas cursus augue 
                  vel eros cursus interdum. Ut et purus ac ante semper elementum sit amet nec risus. 
                  Ut faucibus at urna sodales maximus. Sed id consectetur dolor.
                </p>
                <ul className="list-disc pl-4 text-secondary text-[17px] max-w-3xl">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, sem eget fermentum finibus, 
                  dui justo consectetur erat, non cursus turpis tortor non sapien.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, sem eget fermentum finibus, 
                  dui justo consectetur erat, non cursus turpis tortor non sapien.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, sem eget fermentum finibus, 
                  dui justo consectetur erat, non cursus turpis tortor non sapien.</li>
                  </ul>
              </div>
            </>
          )}
          {selectedModal === 'Job IT' && (
            <>
              <h2 className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>Modal 2</h2>
              <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>This is the content of Modal 2.</p>
            </>
          )}
        {selectedModal === 'Trip Guide' && (
          <>
            <h2 className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' >Modal 3</h2>
            <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' >This is the content of Modal 3.</p>
          </>
        )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalPopup