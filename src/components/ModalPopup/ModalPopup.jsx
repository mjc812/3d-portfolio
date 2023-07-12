import React from 'react'
import Modal from 'react-modal';
import Slider from "../Slider";
import './ModalPopup.css';
import { projects, socials } from "../../constants";
import Socials from "../Socials";
import Video from "../Video";

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
      {projects.map((project, index) => {
        if (project.name === selectedModal) {
          return (
            <div key={index} className="flex flex-col">
              <button className='fixed top-0 right-0 mt-4 mr-8 text-white lg:text-[18px] sm:text-[15px] xs:text-[15px] text-[15px] font-bold cursor-pointer flex' onClick={closeModal}>Close</button>
              <div className='w-full min-h-72 max-h-72'>
                <Slider/>
              </div>
              <div>
                <div className="flex flex-row">
                  <h5 className='font-black text-white lg:text-[40px] sm:text-[30px] xs:text-[30px] text-[30px] lg:leading-[98px] mr-5'>
                    {selectedModal}
                  </h5>
                  {/* <Socials  className="right-0" socials={project.socials} /> */}
                </div>
                <div className="space-y-5">
                  <p className='text-secondary text-[17px] leading-[30px] max-w-full'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, sem eget fermentum finibus, 
                    dui justo consectetur erat, non cursus turpis tortor non sapien. In hac habitasse platea dictumst. 
                    Pellentesque elit lectus, tristique viverra volutpat sed, gravida convallis enim. Maecenas cursus augue 
                    vel eros cursus interdum. Ut et purus ac ante semper elementum sit amet nec risus. 
                    Ut faucibus at urna sodales maximus. Sed id consectetur dolor.
                  </p>
                  <div className="justify-center items-center">
                    <div className="child max-w-4xl mx-auto">
                      <Video />
                    </div>
                  </div>
                  <ul className="ml-5 list-disc text-secondary text-[17px] max-w-full leading-[30px]">
                    <div key={index} className="mb-10">
                      {project.achievements.map((achievement, innerIndex) => (
                        <li key={innerIndex}>{achievement}</li>
                      ))}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          );
        }
      })}
    </Modal>
  );
};

export default ModalPopup