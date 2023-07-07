import React from 'react'
import Modal from 'react-modal';

const ModalPopup = ({ isOpen, onRequestClose, selectedModal, closeModal }) => {
  console.log(selectedModal);
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Modal" ariaHideApp={false}>
      <button className="close-button" onClick={onRequestClose} aria-label="Close Modal" >
      </button>
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

      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default ModalPopup