import React from "react";

import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

import './ModalPopup.css';

import { projects } from "../../constants";

import Slider from "../Slider";
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
    border: '3px solid #4F3199',
    display: 'flex',
    opacity: 1,
    borderRadius: '13px',
    transition: 'opacity 300ms',
    padding: '0rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const ModalPopup = ({ isOpen, onRequestClose, selectedModal, closeModal }) => {
  return (
    <Modal style={modalStyles} isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <div className='p-10 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <button className='text-white lg:text-[18px] sm:text-[15px] xs:text-[15px] text-[15px] font-bold cursor-pointer flex' onClick={closeModal}>
          <MdClose className='hover:scale-150 ease-in-out duration-300 opacity-50 cursor-pointer hover:opacity-100' size={30}/>
        </button>
        {projects.map((project, index) => {
          if (project.name === selectedModal) {
            return (
              <div key={index} className="flex flex-col">
                <Slider photos={project.photos}/>
                <div>
                  <div className="flex flex-col space-y-3">
                    <div/>
                    <h5 className='font-black text-white lg:text-[50px] md:text-[40px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-snug'>
                      {selectedModal}
                    </h5>
                    <div>
                      <Socials socialsList={project.socials} description={true} />
                    </div>
                    <div/>
                  </div>
                  <div className="space-y-5">
                    <p className='text-secondary text-[17px] leading-[30px] max-w-full'>
                      {project.long_description}
                    </p>
                    <div className="justify-center items-center">
                      <div className="child max-w-4xl mx-auto">
                        {project.embedded && <Video href={project.embedded.href} />}
                      </div>
                    </div>
                    <ul className="ml-5 list-disc text-secondary text-[17px] max-w-full leading-[30px]">
                      <div key={index} className="mb-5">
                        {project.achievements.map((achievement, innerIndex) => (
                          <li key={innerIndex}>{achievement}</li>
                        ))}
                      </div>
                    </ul>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag) => (
                        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`} >
                          #{tag.name}
                        </p>
                      ))}
                    </div>
                    <div/>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </Modal>
  );
};

export default ModalPopup