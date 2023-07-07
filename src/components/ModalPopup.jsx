import React from 'react'
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";


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
        <button className='fixed top-0 right-0 mt-4 mr-4 text-white font-bold py-2 px-4 rounded' onClick={closeModal}>Close</button>
        <div className='sticky top-0'>
          {selectedModal === 'Car Rent' && (
            <>
              <h2 className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>Modal 1</h2>
              <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>This is the content of Modal 1.</p>
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
    </Modal>
  );
};

export default ModalPopup