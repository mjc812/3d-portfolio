import React from 'react'
import Modal from 'react-modal';
import { useSpring, animated } from 'react-spring';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";


const customStyles = {
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const modalVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
    },
  },
};

const ModalPopup = ({ isOpen, onRequestClose, selectedModal, closeModal }) => {
  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.8)',
  });
  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Springy Modal" ariaHideApp={false}>
      <motion.div
        className="border-gradient"
        initial="initial"
        animate={isOpen ? 'open' : 'initial'}
        variants={modalVariants}
      >
      <button className="close-button" onClick={onRequestClose} aria-label="Close Modal"/>
        <div>
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
      <button onClick={closeModal}>Close</button>
      </motion.div>
    </Modal>
  );
};

export default ModalPopup