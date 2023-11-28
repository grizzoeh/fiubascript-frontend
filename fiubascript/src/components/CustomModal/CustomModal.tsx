import React from 'react'
import { Modal, Button } from 'react-bootstrap';

interface CustomModalProps {
  showModal: boolean;
  handleModalClose: () => void;
}

export const CustomModal = ({ showModal, handleModalClose} : CustomModalProps) => {
  return (
    <Modal show={showModal} onHide={handleModalClose} animation={true} centered size='lg' backdrop={false}>
      <Modal.Header closeButton className='bg-primary-light text-white border-0 justify-content-center'>
        <Modal.Title>Felicitaciones!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-center mt-2 mb-5'>
          Has terminado el juego!
        </div>
      </Modal.Body>
      <div className='d-flex justify-content-center mg-2 mb-4'>
        <Button variant="primary" onClick={handleModalClose} className='mx-auto bg-primary-light' size='lg'>
          Volver a Home
        </Button>
      </div>
    </Modal>
  );
};
  